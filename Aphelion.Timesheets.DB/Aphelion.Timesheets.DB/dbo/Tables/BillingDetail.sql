CREATE TABLE [dbo].[BillingDetail] (
    [BillingDetailID]           INT            IDENTITY (1, 1) NOT NULL,
    [BillingDetailSourceKey]    VARCHAR (255)  NULL,
    [LoadDate]                  DATETIME       CONSTRAINT [DF_BillingDetail_LoadDate] DEFAULT (getdate()) NOT NULL,
    [Active]                    INT            CONSTRAINT [DF_BillingDetail_Active] DEFAULT ((1)) NOT NULL,
    [BillingDetailDateID]       INT            NOT NULL,
    [BillingDetailClientID]     INT            NOT NULL,
    [BillingDetailPersonID]     INT            NOT NULL,
    [BillingDetailClientRoleID] INT            CONSTRAINT [DF_BillingDetail_ClientRole] DEFAULT ((-1)) NOT NULL,
    [Rate]                      MONEY          NOT NULL,
    [LoadDateID]                AS             (CONVERT([int],CONVERT([varchar](10),[loaddate],(112)),(0))),
    [sys_CreatedOn]             DATETIME       CONSTRAINT [DF__BillingDe__sys_C__16CE6296] DEFAULT (getdate()) NOT NULL,
    [sys_CreatedBy]             NVARCHAR (255) CONSTRAINT [DF__BillingDe__sys_C__17C286CF] DEFAULT ('Unknown') NOT NULL,
    [sys_ModifiedOn]            DATETIME       CONSTRAINT [DF__BillingDe__sys_M__18B6AB08] DEFAULT (getdate()) NOT NULL,
    [sys_ModifiedBy]            NVARCHAR (255) CONSTRAINT [DF__BillingDe__sys_M__19AACF41] DEFAULT ('Unknown') NOT NULL,
    CONSTRAINT [PK_BillingDetail] PRIMARY KEY CLUSTERED ([BillingDetailID] ASC),
    CONSTRAINT [FK_BillingDetail_ActiveType] FOREIGN KEY ([Active]) REFERENCES [dbo].[ActiveType] ([ID]),
    CONSTRAINT [FK_BillingDetail_Client] FOREIGN KEY ([BillingDetailClientID]) REFERENCES [dbo].[Client] ([ClientID]),
    CONSTRAINT [FK_BillingDetail_ClientRole] FOREIGN KEY ([BillingDetailClientRoleID]) REFERENCES [dbo].[ClientRole] ([ClientRoleID]),
    CONSTRAINT [FK_BillingDetail_DimDate] FOREIGN KEY ([BillingDetailDateID]) REFERENCES [dbo].[DimDate] ([DateID]),
    CONSTRAINT [FK_BillingDetail_Person] FOREIGN KEY ([BillingDetailPersonID]) REFERENCES [dbo].[Person] ([PersonID])
);









