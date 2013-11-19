CREATE TABLE [dbo].[ClientRole] (
    [ClientRoleID]        INT            IDENTITY (1, 1) NOT NULL,
    [ClientRoleSourceKey] VARCHAR (255)  NULL,
    [LoadDate]            DATETIME       CONSTRAINT [DF_ClientRole_LoadDate] DEFAULT (getdate()) NOT NULL,
    [Active]              INT            CONSTRAINT [DF_ClientRole_Active] DEFAULT ((1)) NOT NULL,
    [ClientRoleName]      VARCHAR (255)  NOT NULL,
    [ClientRoleCode]      VARCHAR (255)  NOT NULL,
    [LoadDateID]          AS             (CONVERT([int],CONVERT([varchar](10),[loaddate],(112)),(0))),
    [sys_CreatedOn]       DATETIME       CONSTRAINT [DF__ClientRole__sys_Create__42ACE4D4] DEFAULT (getdate()) NOT NULL,
    [sys_CreatedBy]       NVARCHAR (255) CONSTRAINT [DF__ClientRole__sys_Create__43A1090D] DEFAULT ('Unknown') NOT NULL,
    [sys_ModifiedOn]      DATETIME       CONSTRAINT [DF__ClientRole__sys_Modifi__44952D46] DEFAULT (getdate()) NOT NULL,
    [sys_ModifiedBy]      NVARCHAR (255) CONSTRAINT [DF__ClientRole__sys_Modifi__4589517F] DEFAULT ('Unknown') NOT NULL,
    CONSTRAINT [PK_ClientRole] PRIMARY KEY CLUSTERED ([ClientRoleID] ASC),
    CONSTRAINT [FK_ClientRole_ActiveType] FOREIGN KEY ([Active]) REFERENCES [dbo].[ActiveType] ([ID])
);

