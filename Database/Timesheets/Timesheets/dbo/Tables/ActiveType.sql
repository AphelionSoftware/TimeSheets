CREATE TABLE [dbo].[ActiveType] (
    [ID]             INT            NOT NULL,
    [Code]           VARCHAR (20)   NOT NULL,
    [Name]           NVARCHAR (50)  NOT NULL,
    [sys_CreatedOn]  DATETIME       DEFAULT (getdate()) NOT NULL,
    [sys_CreatedBy]  NVARCHAR (255) DEFAULT ('Unknown') NOT NULL,
    [sys_ModifiedOn] DATETIME       DEFAULT (getdate()) NOT NULL,
    [sys_ModifiedBy] NVARCHAR (255) DEFAULT ('Unknown') NOT NULL,
    [Active]         INT            DEFAULT ((1)) NOT NULL,
    CONSTRAINT [PK_ActiveType] PRIMARY KEY CLUSTERED ([ID] ASC)
);

