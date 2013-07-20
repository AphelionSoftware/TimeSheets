--USE Timesheets;
--GO

ALTER TABLE dbo.Timesheet
ADD [PeriodEnding]  AS (CONVERT([date],CONVERT([varchar](8),[TimesheetDateID]),(112))) PERSISTED;
GO