CREATE TABLE [dbo].[Project] (
    [ProjectID]              INT            IDENTITY (1, 1) NOT NULL,
    [ProjectSourceKey]       VARCHAR (255)  NULL,
    [LoadDate]               DATETIME       CONSTRAINT [DF_Project_LoadDate] DEFAULT (getdate()) NOT NULL,
    [Active]                 INT            CONSTRAINT [DF_Project_Active] DEFAULT ((1)) NOT NULL,
    [ProjectName]            VARCHAR (255)  CONSTRAINT [DF_Project_ProjectName] DEFAULT ('Unallocated') NOT NULL,
    [ProjectCode]            VARCHAR (255)  CONSTRAINT [DF_Project_ProjectCode] DEFAULT ('UNACC') NOT NULL,
    [ClientID]               INT            CONSTRAINT [DF_Project_ClientID] DEFAULT ((0)) NOT NULL,
    [LoadDateID]             AS             (CONVERT([int],CONVERT([varchar](10),[loaddate],(112)),(0))),
    [ProjectFirstPersonName] VARCHAR (50)   NULL,
    [ProjectFirstFilename]   VARCHAR (255)  NULL,
    [ConsultingEstimate]     MONEY          NULL,
    [SoftwareEstimate]       MONEY          NULL,
    [VMEstimate]             MONEY          NULL,
    [Billable]               INT            CONSTRAINT [DF_Project_Billable] DEFAULT ((1)) NOT NULL,
    [ProjectCap]             MONEY          NULL,
	[ProjectCapWarning]		 DECIMAL (18,2) NULL,
	[MonthlyCap]			 DECIMAL (18,2) NULL,
	[MonthlyCapWarning]		 DECIMAL (18,2) NULL,
	[AccountManagerPersonID] INT            NULL,
    [AdminProject]           INT            CONSTRAINT [DF_Project_AdminProject] DEFAULT ((0)) NOT NULL,
    [sys_CreatedOn]          DATETIME       DEFAULT (getdate()) NOT NULL,
    [sys_CreatedBy]          NVARCHAR (255) DEFAULT ('Unknown') NOT NULL,
    [sys_ModifiedOn]         DATETIME       DEFAULT (getdate()) NOT NULL,
    [sys_ModifiedBy]         NVARCHAR (255) DEFAULT ('Unknown') NOT NULL,
    CONSTRAINT [PK_Project] PRIMARY KEY NONCLUSTERED ([ProjectID] ASC),
    CONSTRAINT [FK_Project_ActiveType] FOREIGN KEY ([Active]) REFERENCES [dbo].[ActiveType] ([ID]),
    CONSTRAINT [FK_Project_BillingStatus] FOREIGN KEY ([Billable]) REFERENCES [dbo].[BillingStatus] ([BillingStatusID]),
    CONSTRAINT [FK_Project_Client] FOREIGN KEY ([ClientID]) REFERENCES [dbo].[Client] ([ClientID]),
    CONSTRAINT [FK_Project_Person] FOREIGN KEY ([AccountManagerPersonID]) REFERENCES [dbo].[Person] ([PersonID]),
    CONSTRAINT [IX_Project_1] UNIQUE CLUSTERED ([Billable] DESC, [AccountManagerPersonID] ASC, [ProjectID] ASC)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [IX_Project]
    ON [dbo].[Project]([ProjectSourceKey] ASC, [ClientID] DESC);

