ALTER TABLE [DimDate] ALTER COLUMN [WeekEnding] DATE NOT NULL;
GO

INSERT INTO DB_Revisions
(
	ScriptName,
	RevisionNumber
)
VALUES
(
	'0011_Change_DimDate_WeekEnding_to_Date', 
	11
);
GO
