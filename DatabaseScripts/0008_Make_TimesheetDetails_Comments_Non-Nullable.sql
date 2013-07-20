DROP INDEX [IX_TimesheetDetail_Unique] ON [dbo].[TimesheetDetail];
GO

UPDATE timesheetdetail 
SET Comments = 'Default Comment'
where comments IS NULL;
GO

ALTER TABLE TimesheetDetail
ALTER COLUMN Comments VARCHAR(500) NOT NULL;

GO

CREATE UNIQUE NONCLUSTERED INDEX [IX_TimesheetDetail_Unique] ON [dbo].[TimesheetDetail]
(
	[TimesheetID] ASC,
	[TimesheetDetailDateID] ASC,
	[TimesheetDetailFileName] ASC,
	[TimesheetDetailPersonID] ASC,
	[TimesheetDetailProjectID] ASC,
	[TimesheetTypeOfWorkID] ASC,
	[Comments] ASC,
	[Hours] ASC
);
Go

