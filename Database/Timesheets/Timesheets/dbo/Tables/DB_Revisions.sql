CREATE TABLE [dbo].[DB_Revisions] (
    [RevisionID]     INT           IDENTITY (1, 1) NOT NULL,
    [DateApplied]    DATE          DEFAULT (CONVERT([date],getdate(),0)) NOT NULL,
    [ScriptName]     VARCHAR (300) NOT NULL,
    [RevisionNumber] SMALLINT      NOT NULL,
    CONSTRAINT [pk_RevisionID] PRIMARY KEY CLUSTERED ([RevisionID] ASC)
);

