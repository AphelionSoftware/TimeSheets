

CREATE VIEW [CUBE].[DimTimesheet]
as 
SELECT T.[TimesheetID]
      ,T.[TimesheetSourceKey]
      ,T.[LoadDate]
      ,T.[Active]
      ,T.[TimesheetName]
      ,T.[TimesheetCode]
      ,T.[TimesheetFileName]
      ,T.[TimesheetFromDateID]
      ,T.[TimesheetToDateID]
      ,T.[TimesheetPerson]
      ,T.[TimesheetDate]
      ,T.[LoadDateID]
      ,T.[OverallStatusID]
      ,OS.[OverallStatusName]
      ,OS.[OverallStatusCode]
      ,OS.[OverallStatusSourceKey]
  FROM [dbo].[Timesheet] T
  INNER JOIN [dbo].OverallStatus OS
  ON t.OverallStatusID = OS.OverallStatusID
 -- WHERE t.Active = 1