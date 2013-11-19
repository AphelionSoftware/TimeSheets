










CREATE VIEW [CUBE].[FactTimesheetDetail]
as

SELECT TD.[TimesheetDetailID]
      ,TD.[TimesheetDetailSourceKey]
      ,TD.[LoadDate]
      ,TD.[Active]
      ,TD.[TimesheetDetailName]
      ,TD.[TimesheetDetailCode]
      ,TD.[TimesheetDetailFileName]
      ,TD.[TimesheetDetailDateID]
      ,TD.[TimesheetDetailPersonID]
      ,TD.[TimesheetDetailProjectID]
      ,TD.[TimesheetTypeOfWorkID]
      ,TD.[LoadDateID]
      ,TD.[Hours]
      ,TD.[TimesheetID]
      ,TD.Comments
	  ,TD.AMComments
	  ,TD.ClientComments
	 /* ,Billable  = ISNULL(TD.Billable, P.Billable) *//*CASE WHEN P.Billable = 0 THEN 0 ELSE TD.Billable END */
	 ,Billable  = ISNULL(CASE WHEN P.Billable = 0 THEN 0 ELSE TD.Billable END, -1)
	  ,TD.Exclude
	  ,BillingRate = (SELECT TOP 1 
	  BD.Rate FROM dbo.BillingDetail BD
  WHERE P.ClientID = BD.BillingDetailClientID
  AND td.TimesheetDetailPersonID = BD.BillingDetailPersonID
  AND TD.TimesheetDetailDateID >= BD.BillingDetailDateID
  AND BD.Active = 1
  ORDER BY BD.BillingDetailDateID DESC 
  ) 

  FROM [dbo].[TimesheetDetail] TD
  INNER JOIN dbo.Project  P
  ON TD.TimesheetDetailProjectID = P.ProjectID
  AND P.Active = 1
  INNER JOIN dbo.Client C
  ON P.ClientID  = C.ClientID
	AND C.Active = 1
  WHERE TD.Active = 1