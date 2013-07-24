CREATE TABLE [dbo].[BillingStatus] (
    [BillingStatusID]        INT            IDENTITY (1, 1) NOT NULL,
    [BillingStatusSourceKey] VARCHAR (255)  NULL,
    [LoadDate]               DATETIME       CONSTRAINT [DF_BillingStatus_LoadDate] DEFAULT (getdate()) NOT NULL,
    [Active]                 INT            CONSTRAINT [DF_BillingStatus_Active] DEFAULT ((1)) NOT NULL,
    [BillingStatusName]      VARCHAR (255)  NOT NULL,
    [BillingStatusCode]      VARCHAR (255)  NOT NULL,
    [LoadDateID]             AS             (CONVERT([int],CONVERT([varchar](10),[loaddate],(112)),(0))),
    [sys_CreatedOn]          DATETIME       DEFAULT (getdate()) NOT NULL,
    [sys_CreatedBy]          NVARCHAR (255) DEFAULT ('Unknown') NOT NULL,
    [sys_ModifiedOn]         DATETIME       DEFAULT (getdate()) NOT NULL,
    [sys_ModifiedBy]         NVARCHAR (255) DEFAULT ('Unknown') NOT NULL,
    CONSTRAINT [PK_BillingStatus] PRIMARY KEY CLUSTERED ([BillingStatusID] ASC),
    CONSTRAINT [FK_BillingStatus_ActiveType] FOREIGN KEY ([Active]) REFERENCES [dbo].[ActiveType] ([ID])
);

