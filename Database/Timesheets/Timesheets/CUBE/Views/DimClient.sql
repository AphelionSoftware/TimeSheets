
CREATE VIEW cube.DimClient AS
SELECT [ClientID]
      ,[ClientSourceKey]
      ,[LoadDate]
      ,[Active]
      ,[ClientName]
      ,[ClientCode]
      ,[LoadDateID]
  FROM .[dbo].[Client]