CREATE TABLE [dbo].[Timesheet] (
    [TimesheetID]         INT            IDENTITY (1, 1) NOT NULL,
    [TimesheetSourceKey]  VARCHAR (255)  NULL,
    [LoadDate]            DATETIME       CONSTRAINT [DF_Timesheet_LoadDate] DEFAULT (getdate()) NOT NULL,
    [Active]              INT            CONSTRAINT [DF_Timesheet_Active] DEFAULT ((1)) NOT NULL,
    [TimesheetName]       VARCHAR (255)  NULL,
    [TimesheetCode]       VARCHAR (255)  NULL,
    [TimesheetFileName]   VARCHAR (255)  NOT NULL,
    [TimesheetDateID]     INT            NOT NULL,
    [TimesheetFromDateID] INT            CONSTRAINT [DF_Timesheet_TimesheetFromDateID] DEFAULT ((0)) NOT NULL,
    [TimesheetToDateID]   INT            CONSTRAINT [DF_Timesheet_TimesheetToDateID] DEFAULT ((0)) NOT NULL,
    [TimesheetPerson]     VARCHAR (255)  NOT NULL,
    [TimesheetDate]       VARCHAR (255)  NOT NULL,
    [LoadDateID]          AS             (CONVERT([int],CONVERT([varchar](10),[loaddate],(112)),(0))),
    [OverallStatusID]     INT            CONSTRAINT [DF_Timesheet_TimesheetOverallStatusID] DEFAULT ((1)) NOT NULL,
    [sys_CreatedOn]       DATETIME       CONSTRAINT [DF__Timesheet__sys_C__3A179ED3] DEFAULT (getdate()) NOT NULL,
    [sys_CreatedBy]       NVARCHAR (255) CONSTRAINT [DF__Timesheet__sys_C__3B0BC30C] DEFAULT ('Unknown') NOT NULL,
    [sys_ModifiedOn]      DATETIME       CONSTRAINT [DF__Timesheet__sys_M__3BFFE745] DEFAULT (getdate()) NOT NULL,
    [sys_ModifiedBy]      NVARCHAR (255) CONSTRAINT [DF__Timesheet__sys_M__3CF40B7E] DEFAULT ('Unknown') NOT NULL,
    [PeriodEnding]        AS             (CONVERT([date],CONVERT([varchar](8),[TimesheetDateID],(0)),(112))) PERSISTED NOT NULL,
    [TimesheetPersonID]   INT            NOT NULL,
    [VerCol]              ROWVERSION     NOT NULL,
    CONSTRAINT [PK_Timesheet] PRIMARY KEY CLUSTERED ([TimesheetID] ASC),
    CONSTRAINT [FK_Timesheet_ActiveType] FOREIGN KEY ([Active]) REFERENCES [dbo].[ActiveType] ([ID]),
    CONSTRAINT [FK_Timesheet_DimDate] FOREIGN KEY ([TimesheetDateID]) REFERENCES [dbo].[DimDate] ([DateID]),
    CONSTRAINT [FK_Timesheet_OverallStatus] FOREIGN KEY ([OverallStatusID]) REFERENCES [dbo].[OverallStatus] ([OverallStatusID]),
    CONSTRAINT [fk_TimesheetPersonID] FOREIGN KEY ([TimesheetPersonID]) REFERENCES [dbo].[Person] ([PersonID])
);










GO


