






CREATE VIEW [CUBE].[FactProjectBilling] as 

SELECT  P.[ProjectID]
      ,P.[ProjectSourceKey]
      ,P.[LoadDate]
      ,P.[Active]
      ,P.[ProjectName]
      ,P.[ProjectCode]
      ,P.[ClientID]
      ,P.[LoadDateID]
	  ,P.ConsultingEstimate
	  ,P.SoftwareEstimate
	  ,P.VMEstimate
	  ,P.ProjectCap
	  ,(SELECT TOP 1 TimesheetDetailID from dbo.TimesheetDetail TD where td.TimesheetDetailProjectID = p.ProjectID AND TD.Active = 1) AS TimesheetDetailID 
  FROM [dbo].[Project] P
  INNER JOIN dbo.Client C
  ON P.ClientID  = C.ClientID
	AND C.Active = 1
  where exists (select * from dbo.TimesheetDetail TD where td.TimesheetDetailProjectID = p.ProjectID AND TD.Active = 1 )
  AND p.Active = 1