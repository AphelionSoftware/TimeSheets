









CREATE VIEW [CUBE].[DimProject] as 

SELECT  P.[ProjectID]
      ,P.[ProjectSourceKey]
      ,P.[LoadDate]
      ,P.[Active]
	  ,CASE WHEN P.[Active] = 1 THEN 'Active' ELSE 'Inactive' END ActiveStatus
      ,P.[ProjectName]
      ,P.[ProjectCode]
      ,P.[ClientID]
      ,P.[LoadDateID]
	  ,ConsultingEstimate
	  ,SoftwareEstimate
	  ,VMEstimate
	  ,ProjectCap
	  ,P.Billable
	  ,BS.BillingStatusName ProjectBillingStatus
	  ,Person.Email AccountManagerEmail
	  ,Person.PersonName AccountManager
  FROM [dbo].[Project] P
  LEFT JOIN dbo.BillingStatus BS
  ON P.Billable = BS.BillingStatusID
  LEFT JOIN dbo.Person Person
	ON ISNULL(P.AccountManagerPersonID,1) = Person.PersonID
  --where exists (select * from dbo.TimesheetDetail TD where td.TimesheetDetailProjectID = project.ProjectID)
	WHERE P.ProjectID > 0