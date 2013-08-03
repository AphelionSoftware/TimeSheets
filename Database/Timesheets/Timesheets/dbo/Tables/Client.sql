CREATE TABLE [dbo].[Client] (
    [ClientID]               INT            IDENTITY (1, 1) NOT NULL,
    [ClientSourceKey]        VARCHAR (255)  NULL,
    [LoadDate]               DATETIME       CONSTRAINT [DF_Client_LoadDate] DEFAULT (getdate()) NOT NULL,
    [Active]                 INT            CONSTRAINT [DF_Client_Active] DEFAULT ((1)) NOT NULL,
    [ClientName]             VARCHAR (255)  NOT NULL,
    [ClientCode]             VARCHAR (255)  NOT NULL,
    [LoadDateID]             AS             (CONVERT([int],CONVERT([varchar](10),[loaddate],(112)),(0))),
    [sys_CreatedOn]          DATETIME       DEFAULT (getdate()) NOT NULL,
    [sys_CreatedBy]          NVARCHAR (255) DEFAULT ('Unknown') NOT NULL,
    [sys_ModifiedOn]         DATETIME       DEFAULT (getdate()) NOT NULL,
    [sys_ModifiedBy]         NVARCHAR (255) DEFAULT ('Unknown') NOT NULL,
    [AccountManagerPersonID] INT            CONSTRAINT [DF_Client_AccountManagerPersonID] DEFAULT ((1)) NOT NULL,
    CONSTRAINT [PK_Client] PRIMARY KEY CLUSTERED ([ClientID] ASC),
    CONSTRAINT [FK_Client_ActiveType] FOREIGN KEY ([Active]) REFERENCES [dbo].[ActiveType] ([ID]),
    CONSTRAINT [FK_Client_Person] FOREIGN KEY ([AccountManagerPersonID]) REFERENCES [dbo].[Person] ([PersonID])
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [IX_Client]
    ON [dbo].[Client]([ClientSourceKey] ASC);

