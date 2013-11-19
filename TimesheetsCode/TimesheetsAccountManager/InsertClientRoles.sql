USE [Timesheets20130908]
GO

INSERT INTO [dbo].[ClientRole]
           ([ClientRoleSourceKey]
           ,[ClientRoleName]
           ,[ClientRoleCode])
     SELECT 'Ent. Architect','Ent. Architect','Ent. Architect'
	 
	 UNION ALL 
	 SELECT 'Senior','Senior','Senior'
	 UNION ALL 
	 SELECT 'Senior - CDN','Senior - CDN','Senior - CDN'
	 