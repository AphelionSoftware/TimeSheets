



CREATE VIEW [CUBE].[FactBillingRates] 
as

SELECT [BillingDetailID]
      ,bd.[BillingDetailSourceKey]
      ,bd.[LoadDate]
      ,bd.[Active]
      ,bd.[BillingDetailDateID]
      ,bd.[BillingDetailClientID]
      ,bd.[BillingDetailPersonID]
      ,bd.[Rate]
      ,bd.[LoadDateID]
      	,DD.DateID
		,Project.ProjectID
  FROM [dbo].[BillingDetail] BD 
  INNER JOIN dbo.Project 
  ON bd.[BillingDetailClientID] = Project.ClientID 
  and Project.Active = 1
  INNER JOIN dbo.DimDate DD
  on DD.Day = 1
  AND DD.DateID > bd.[BillingDetailDateID]
  
	INNER JOIN dbo.Client C
  ON Project.ClientID  = C.ClientID
	AND C.Active = 1

	WHERE BD.Active = 1 
	GROUP BY [BillingDetailID]
      ,bd.[BillingDetailSourceKey]
      ,bd.[LoadDate]
      ,bd.[Active]
      ,bd.[BillingDetailDateID]
      ,bd.[BillingDetailClientID]
      ,bd.[BillingDetailPersonID]
      ,bd.[Rate]
      ,bd.[LoadDateID]
	,DD.DateID
	,Project.ProjectID
	  having DD.DateID <= (SELECT MAX(TimesheetDetailDateID) FROM dbo.TimesheetDetail)
  AND
	(DD.DateID < (SELECT MIN(bd.[BillingDetailDateID]) FROM [dbo].[BillingDetail] BDInner
		WHERE BDInner.[BillingDetailDateID] > BD.[BillingDetailDateID]
			AND BDInner.[BillingDetailClientID] = BD.[BillingDetailClientID]
			AND BDInner.[BillingDetailPersonID] = BD.[BillingDetailPersonID]
			)
		OR
		(SELECT MIN(bd.[BillingDetailDateID]) FROM [dbo].[BillingDetail] BDInner
		WHERE BDInner.[BillingDetailDateID] > BD.[BillingDetailDateID]
			AND BDInner.[BillingDetailClientID] = BD.[BillingDetailClientID]
			AND BDInner.[BillingDetailPersonID] = BD.[BillingDetailPersonID]
			) IS NULL
	
	)

	and EXISTS (SELECT * from [CUBE].[FactTimesheetDetail] TD where TD.TimesheetDetailPersonID = bd.[BillingDetailPersonID])

