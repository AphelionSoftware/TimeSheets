CREATE TABLE [dbo].[TimesheetDetail] (
    [TimesheetDetailID]        INT             IDENTITY (1, 1) NOT NULL,
    [TimesheetDetailSourceKey] VARCHAR (255)   NULL,
    [LoadDate]                 DATETIME        CONSTRAINT [DF_TimesheetDetail_LoadDate] DEFAULT (getdate()) NOT NULL,
    [Active]                   INT             CONSTRAINT [DF_TimesheetDetail_Active] DEFAULT ((1)) NOT NULL,
    [TimesheetDetailName]      VARCHAR (255)   NOT NULL,
    [TimesheetDetailCode]      VARCHAR (255)   NOT NULL,
    [TimesheetDetailFileName]  VARCHAR (255)   NOT NULL,
    [TimesheetDetailDateID]    INT             NOT NULL,
    [TimesheetDetailPersonID]  INT             NOT NULL,
    [TimesheetDetailProjectID] INT             NOT NULL,
    [LoadDateID]               AS              (CONVERT([int],CONVERT([varchar](10),[loaddate],(112)),(0))),
    [Hours]                    DECIMAL (18, 2) NOT NULL,
    [TimesheetID]              INT             NOT NULL,
    [TimesheetTypeOfWorkID]    INT             NOT NULL,
    [Comments]                 VARCHAR (500)   NULL,
    [ClientComments]           VARCHAR (MAX)   NULL,
    [AMComments]               VARCHAR (MAX)   NULL,
    [Exclude]                  INT             CONSTRAINT [DF_TimesheetDetail_Exclude] DEFAULT ((0)) NOT NULL,
    [Billable]                 INT             NULL,
    [LastUpdateDate]           DATETIME        CONSTRAINT [DF_TimesheetDetail_LastUpdateDate] DEFAULT (getdate()) NOT NULL,
    [sys_CreatedOn]            DATETIME        DEFAULT (getdate()) NOT NULL,
    [sys_CreatedBy]            NVARCHAR (255)  DEFAULT ('Unknown') NOT NULL,
    [sys_ModifiedOn]           DATETIME        DEFAULT (getdate()) NOT NULL,
    [sys_ModifiedBy]           NVARCHAR (255)  DEFAULT ('Unknown') NOT NULL,
    CONSTRAINT [PK_TimesheetDetail] PRIMARY KEY CLUSTERED ([TimesheetDetailID] ASC),
    CONSTRAINT [FK_TimesheetDetail_ActiveType] FOREIGN KEY ([Active]) REFERENCES [dbo].[ActiveType] ([ID]),
    CONSTRAINT [FK_TimesheetDetail_BillingStatus] FOREIGN KEY ([Billable]) REFERENCES [dbo].[BillingStatus] ([BillingStatusID]),
    CONSTRAINT [FK_TimesheetDetail_DimDate] FOREIGN KEY ([TimesheetDetailDateID]) REFERENCES [dbo].[DimDate] ([DateID]),
    CONSTRAINT [FK_TimesheetDetail_Person] FOREIGN KEY ([TimesheetDetailPersonID]) REFERENCES [dbo].[Person] ([PersonID]),
    CONSTRAINT [FK_TimesheetDetail_Project] FOREIGN KEY ([TimesheetDetailProjectID]) REFERENCES [dbo].[Project] ([ProjectID]),
    CONSTRAINT [FK_TimesheetDetail_Timesheet] FOREIGN KEY ([TimesheetID]) REFERENCES [dbo].[Timesheet] ([TimesheetID]),
    CONSTRAINT [FK_TimesheetDetail_TypeOfWork] FOREIGN KEY ([TimesheetTypeOfWorkID]) REFERENCES [dbo].[TypeOfWork] ([TypeOfWorkID])
);


GO
CREATE NONCLUSTERED INDEX [IX_TimesheetDetail]
    ON [dbo].[TimesheetDetail]([TimesheetDetailProjectID] ASC, [TimesheetDetailDateID] DESC, [TimesheetDetailPersonID] ASC, [TimesheetTypeOfWorkID] ASC, [Billable] DESC);


GO
CREATE NONCLUSTERED INDEX [IX_TimesheetDetail_Billable]
    ON [dbo].[TimesheetDetail]([Billable] ASC, [TimesheetDetailPersonID] ASC, [TimesheetDetailProjectID] ASC, [TimesheetDetailDateID] DESC);


GO
CREATE UNIQUE NONCLUSTERED INDEX [IX_TimesheetDetail_Unique]
    ON [dbo].[TimesheetDetail]([TimesheetID] ASC, [TimesheetDetailDateID] ASC, [TimesheetDetailFileName] ASC, [TimesheetDetailPersonID] ASC, [TimesheetDetailProjectID] ASC, [TimesheetTypeOfWorkID] ASC, [Comments] ASC, [Hours] ASC);

