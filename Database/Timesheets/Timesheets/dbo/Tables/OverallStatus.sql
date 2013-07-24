CREATE TABLE [dbo].[OverallStatus] (
    [OverallStatusID]        INT            IDENTITY (1, 1) NOT NULL,
    [OverallStatusSourceKey] VARCHAR (255)  NULL,
    [LoadDate]               DATETIME       CONSTRAINT [DF_OverallStatus_LoadDate] DEFAULT (getdate()) NOT NULL,
    [Active]                 INT            CONSTRAINT [DF_OverallStatus_Active] DEFAULT ((1)) NOT NULL,
    [OverallStatusName]      VARCHAR (255)  NOT NULL,
    [OverallStatusCode]      VARCHAR (255)  NOT NULL,
    [LoadDateID]             AS             (CONVERT([int],CONVERT([varchar](10),[loaddate],(112)),(0))),
    [sys_CreatedOn]          DATETIME       DEFAULT (getdate()) NOT NULL,
    [sys_CreatedBy]          NVARCHAR (255) DEFAULT ('Unknown') NOT NULL,
    [sys_ModifiedOn]         DATETIME       DEFAULT (getdate()) NOT NULL,
    [sys_ModifiedBy]         NVARCHAR (255) DEFAULT ('Unknown') NOT NULL,
    CONSTRAINT [PK_OverallStatus] PRIMARY KEY CLUSTERED ([OverallStatusID] ASC),
    CONSTRAINT [FK_OverallStatus_ActiveType] FOREIGN KEY ([Active]) REFERENCES [dbo].[ActiveType] ([ID])
);

