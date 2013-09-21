CREATE TABLE DB_Revisions
(
	RevisionID INT IDENTITY (1,1),
	DateApplied DATE DEFAULT CAST(GETDATE() AS DATE) NOT NULL,
	ScriptName VARCHAR(300) NOT NULL,
	RevisionNumber SMALLINT NOT NULL
);
GO

ALTER TABLE DB_Revisions
ADD CONSTRAINT pk_RevisionID
PRIMARY KEY CLUSTERED
(
	RevisionID
);
GO

INSERT INTO DB_Revisions
(
	ScriptName,
	RevisionNumber
)
VALUES
(
	'0000_Add_Table_DBRevision', 
	0
);
GO