
CREATE VIEW [CUBE].[DimPerson] as 
SELECT P.[PersonID]
      ,P.[PersonSourceKey]
      ,P.[LoadDate]
      ,P.[Active]
      ,P.[PersonName]
      ,P.[PersonCode]
      ,P.[LoadDateID]
	  ,P.Email
      ,ISNULL(PR.PersonRoleCode, 'N/A') PersonRoleCode
      ,ISNULL(PR.PersonRoleName, 'N/A') PersonRoleName
	  ,P.BillingPercentTarget
	  ,P.BillingPercentMinimum
	  ,P.StartDate
	  ,CAST(COnvert(varchar(10), StartDate ,112) as INT) DimStartDateID
	  ,HourlyCost
	  ,MonthlyCost
	  ,IsContractor
  FROM [dbo].[Person] P
  LEFT JOIN 
  (SELECT CR.ClientRoleCode AS PersonRoleCode, CR.ClientRoleName As PersonRoleName, 
  BD.BillingDetailPersonID PersonID,
  Row_Number() Over (partition by BD.BillingDetailPersonID  order by BD.BillingDetailDateID DESC ) As Number
   FROM
	dbo.BillingDetail BD
	INNER JOIN dbo.ClientRole CR
	ON BD.BillingDetailClientRoleID = CR.ClientRoleID
	) PR
  ON P.PersonID = PR.PersonID
  AND PR.Number = 1 
  where P.StartDate <= getdate()
  and EXISTS (SELECT * from [CUBE].[FactTimesheetDetail] TD where TD.TimesheetDetailPersonID = P.PersonID)