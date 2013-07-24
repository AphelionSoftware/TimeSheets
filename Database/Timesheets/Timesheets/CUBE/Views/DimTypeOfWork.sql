CREATE VIEW cube.DimTypeOfWork
as
SELECT [TypeOfWorkID]
      ,[TypeOfWorkSourceKey]
      ,[LoadDate]
      ,[Active]
      ,[TypeOfWorkName]
      ,[TypeOfWorkCode]
      ,[LoadDateID]
  FROM [dbo].[TypeOfWork]