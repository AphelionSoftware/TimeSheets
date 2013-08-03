
CREATE VIEW cube.DimBillingStatus 
AS
SELECT [BillingStatusID]
      ,[BillingStatusSourceKey]
      ,[LoadDate]
      ,[Active]
      ,[BillingStatusName]
      ,[BillingStatusCode]
      ,[LoadDateID]
  FROM [dbo].[BillingStatus]