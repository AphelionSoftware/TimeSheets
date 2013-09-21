ALTER TABLE TimesheetDetail 
ADD VerCol rowversion NOT NULL ;


INSERT INTO DB_Revisions
(
	ScriptName,
	RevisionNumber
)
VALUES
(
	'0013_add RowVersion', 
	13
);
GO