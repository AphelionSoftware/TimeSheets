CREATE TABLE [dbo].[Person] (
    [PersonID]              INT            IDENTITY (1, 1) NOT NULL,
    [PersonSourceKey]       VARCHAR (255)  NULL,
    [LoadDate]              DATETIME       CONSTRAINT [DF_Person_LoadDate] DEFAULT (getdate()) NOT NULL,
    [Active]                INT            CONSTRAINT [DF_Person_Active] DEFAULT ((1)) NOT NULL,
    [PersonName]            VARCHAR (255)  NOT NULL,
    [PersonCode]            VARCHAR (255)  NOT NULL,
    [LoadDateID]            AS             (CONVERT([int],CONVERT([varchar](10),[loaddate],(112)),(0))),
    [PersonSystemRoleID]    INT            NULL,
    [BillingPercentTarget]  INT            CONSTRAINT [DF_Person_BillingPercentTarget] DEFAULT ((90)) NOT NULL,
    [BillingPercentMinimum] INT            CONSTRAINT [DF_Person_BillingPercentMinimum] DEFAULT ((80)) NOT NULL,
    [Email]                 VARCHAR (255)  NULL,
    [StartDate]             DATE           CONSTRAINT [DF_Person_StartDate] DEFAULT (getdate()) NOT NULL,
    [HourlyCost]            INT            NULL,
    [MonthlyCost]           MONEY          NULL,
    [IsContractor]          INT            CONSTRAINT [DF_Person_IsContractor] DEFAULT ((0)) NOT NULL,
    [Billable]              INT            CONSTRAINT [DF_Person_Billable] DEFAULT ((1)) NOT NULL,
    [ADUsername]            VARCHAR (255)  NULL,
    [sys_CreatedOn]         DATETIME       CONSTRAINT [DF__Person__sys_Crea__1A9EF37A] DEFAULT (getdate()) NOT NULL,
    [sys_CreatedBy]         NVARCHAR (255) CONSTRAINT [DF__Person__sys_Crea__1B9317B3] DEFAULT ('Unknown') NOT NULL,
    [sys_ModifiedOn]        DATETIME       CONSTRAINT [DF__Person__sys_Modi__1C873BEC] DEFAULT (getdate()) NOT NULL,
    [sys_ModifiedBy]        NVARCHAR (255) CONSTRAINT [DF__Person__sys_Modi__1D7B6025] DEFAULT ('Unknown') NOT NULL,
    [SharepointUserName]    VARCHAR (255)  NULL,
    CONSTRAINT [PK_Person] PRIMARY KEY CLUSTERED ([PersonID] ASC),
    CONSTRAINT [FK_Person_ActiveType] FOREIGN KEY ([Active]) REFERENCES [dbo].[ActiveType] ([ID]),
    CONSTRAINT [FK_Person_Role] FOREIGN KEY ([PersonSystemRoleID]) REFERENCES [dbo].[SystemRole] ([SystemRoleID])
);






GO
CREATE UNIQUE NONCLUSTERED INDEX [IX_Person]
    ON [dbo].[Person]([PersonSourceKey] ASC);

