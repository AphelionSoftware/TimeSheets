CREATE PROC [dbo].[Create_ManagementCodes]
as


insert into dbo.Project
([ProjectSourceKey]
      ,[ProjectName]
      ,[ProjectCode]
      ,[ClientID]      
	  ,AdminProject
	  ,Billable)

SELECT P.[ProjectSourceKey]
      ,P.[ProjectName]
      ,P.[ProjectCode]
      ,C.[ClientID]      
	  ,P.AdminProject
	  ,P.Billable
      FROM dbo.Project P
	  CROSS JOIN dbo.Client  C
	  WHERE 
	  P.AdminProject = 1
	  AND P.ProjectID < 0
	  AND C.ClientID > 0 
	  AND NOT EXISTS 
	  (SELECT * from dbo.Project InnerP
		WHERE InnerP.ProjectCode = P.ProjectCode
			AND InnerP.ClientID = C.ClientID )