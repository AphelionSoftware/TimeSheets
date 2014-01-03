use Timesheets
go



CREATE TABLE #Timesheet
(
	[TimesheetID] [int] NOT NULL,
	[TimesheetSourceKey] [varchar](255) NULL,
	[LoadDate] [datetime] NOT NULL,
	[Active] [int] NOT NULL,
	[TimesheetName] [varchar](255) NULL,
	[TimesheetCode] [varchar](255) NULL,
	[TimesheetFileName] [varchar](255) NOT NULL,
	[TimesheetDateID] [int] NOT NULL,
	[TimesheetFromDateID] [int] NOT NULL,
	[TimesheetToDateID] [int] NOT NULL,
	[TimesheetPerson] [varchar](255) NOT NULL,
	[TimesheetDate] [varchar](255) NOT NULL,
	[OverallStatusID] [int] NOT NULL,
	[sys_CreatedOn] [datetime] NOT NULL,
	[sys_CreatedBy] [nvarchar](255) NOT NULL,
	[sys_ModifiedOn] [datetime] NOT NULL,
	[sys_ModifiedBy] [nvarchar](255) NOT NULL,
	[TimesheetPersonID] [int] NOT NULL
)
GO

INSERT INTO #Timesheet 
(
	TimesheetID, 
	TimesheetSourceKey,
	LoadDate, 
	Active, 
	TimesheetName, 
	TimesheetCode, 
	TimesheetFileName, 
	TimesheetDateID, 
	TimesheetFromDateID, 
	TimesheetToDateID, 
	TimesheetPerson, 
	TimesheetDate, 
	OverallStatusID, 
	sys_CreatedOn, 
	sys_CreatedBy, 
	sys_ModifiedOn, 
	sys_ModifiedBy, 
	TimesheetPersonID
)
SELECT 
	TimesheetID, 
	TimesheetSourceKey,
	LoadDate, 
	Active, 
	TimesheetName, 
	TimesheetCode, 
	TimesheetFileName, 
	TimesheetDateID, 
	TimesheetFromDateID, 
	TimesheetToDateID, 
	TimesheetPerson, 
	TimesheetDate, 
	OverallStatusID, 
	sys_CreatedOn, 
	sys_CreatedBy, 
	sys_ModifiedOn, 
	sys_ModifiedBy, 
	TimesheetPersonID
FROM Timesheet;
GO

SELECT * FROM #Timesheet;
GO

ALTER TABLE [dbo].[Timesheet] DROP CONSTRAINT [fk_TimesheetPersonID]
GO

ALTER TABLE [dbo].[Timesheet] DROP CONSTRAINT [FK_Timesheet_OverallStatus]
GO

ALTER TABLE [dbo].[Timesheet] DROP CONSTRAINT [FK_Timesheet_DimDate]
GO

ALTER TABLE [dbo].[Timesheet] DROP CONSTRAINT [FK_Timesheet_ActiveType]
GO

ALTER TABLE [dbo].[Timesheet] DROP CONSTRAINT [DF__Timesheet__sys_M__3CF40B7E]
GO

ALTER TABLE [dbo].[Timesheet] DROP CONSTRAINT [DF__Timesheet__sys_M__3BFFE745]
GO

ALTER TABLE [dbo].[Timesheet] DROP CONSTRAINT [DF__Timesheet__sys_C__3B0BC30C]
GO

ALTER TABLE [dbo].[Timesheet] DROP CONSTRAINT [DF__Timesheet__sys_C__3A179ED3]
GO

ALTER TABLE [dbo].[Timesheet] DROP CONSTRAINT [DF_Timesheet_TimesheetOverallStatusID]
GO

ALTER TABLE [dbo].[Timesheet] DROP CONSTRAINT [DF_Timesheet_TimesheetToDateID]
GO

ALTER TABLE [dbo].[Timesheet] DROP CONSTRAINT [DF_Timesheet_TimesheetFromDateID]
GO

ALTER TABLE [dbo].[Timesheet] DROP CONSTRAINT [DF_Timesheet_Active]
GO

ALTER TABLE [dbo].[Timesheet] DROP CONSTRAINT [DF_Timesheet_LoadDate]
GO

ALTER TABLE [dbo].[TimesheetDetail] DROP CONSTRAINT [FK_TimesheetDetail_Timesheet]
GO

/****** Object:  Table [dbo].[Timesheet]    Script Date: 9/5/2013 12:53:47 PM ******/
DROP TABLE [dbo].[Timesheet]
GO

/****** Object:  Table [dbo].[Timesheet]    Script Date: 9/5/2013 12:53:48 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE [dbo].[Timesheet](
	[TimesheetID] [int] IDENTITY(1,1) NOT NULL,
	[TimesheetSourceKey] [varchar](255) NULL,
	[LoadDate] [datetime] NOT NULL,
	[Active] [int] NOT NULL,
	[TimesheetName] [varchar](255) NULL,
	[TimesheetCode] [varchar](255) NULL,
	[TimesheetFileName] [varchar](255) NOT NULL,
	[TimesheetDateID] [int] NOT NULL,
	[TimesheetFromDateID] [int] NOT NULL,
	[TimesheetToDateID] [int] NOT NULL,
	[TimesheetPerson] [varchar](255) NOT NULL,
	[TimesheetDate] [varchar](255) NOT NULL,
	[LoadDateID]  AS (CONVERT([int],CONVERT([varchar](10),[loaddate],(112)),(0))),
	[OverallStatusID] [int] NOT NULL,
	[sys_CreatedOn] [datetime] NOT NULL,
	[sys_CreatedBy] [nvarchar](255) NOT NULL,
	[sys_ModifiedOn] [datetime] NOT NULL,
	[sys_ModifiedBy] [nvarchar](255) NOT NULL,
	[PeriodEnding]  AS (CONVERT([date],CONVERT([varchar](8),[TimesheetDateID],(0)),(112))) PERSISTED NOT NULL,
	[TimesheetPersonID] [int] NOT NULL,
 CONSTRAINT [PK_Timesheet] PRIMARY KEY CLUSTERED 
(
	[TimesheetID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO

SET ANSI_PADDING OFF
GO

ALTER TABLE [dbo].[Timesheet] ADD  CONSTRAINT [DF_Timesheet_LoadDate]  DEFAULT (getdate()) FOR [LoadDate]
GO

ALTER TABLE [dbo].[Timesheet] ADD  CONSTRAINT [DF_Timesheet_Active]  DEFAULT ((1)) FOR [Active]
GO

ALTER TABLE [dbo].[Timesheet] ADD  CONSTRAINT [DF_Timesheet_TimesheetFromDateID]  DEFAULT ((0)) FOR [TimesheetFromDateID]
GO

ALTER TABLE [dbo].[Timesheet] ADD  CONSTRAINT [DF_Timesheet_TimesheetToDateID]  DEFAULT ((0)) FOR [TimesheetToDateID]
GO

ALTER TABLE [dbo].[Timesheet] ADD  CONSTRAINT [DF_Timesheet_TimesheetOverallStatusID]  DEFAULT ((1)) FOR [OverallStatusID]
GO

ALTER TABLE [dbo].[Timesheet] ADD  CONSTRAINT [DF__Timesheet__sys_C__3A179ED3]  DEFAULT (getdate()) FOR [sys_CreatedOn]
GO

ALTER TABLE [dbo].[Timesheet] ADD  CONSTRAINT [DF__Timesheet__sys_C__3B0BC30C]  DEFAULT ('Unknown') FOR [sys_CreatedBy]
GO

ALTER TABLE [dbo].[Timesheet] ADD  CONSTRAINT [DF__Timesheet__sys_M__3BFFE745]  DEFAULT (getdate()) FOR [sys_ModifiedOn]
GO

ALTER TABLE [dbo].[Timesheet] ADD  CONSTRAINT [DF__Timesheet__sys_M__3CF40B7E]  DEFAULT ('Unknown') FOR [sys_ModifiedBy]
GO

ALTER TABLE [dbo].[Timesheet]  WITH CHECK ADD  CONSTRAINT [FK_Timesheet_ActiveType] FOREIGN KEY([Active])
REFERENCES [dbo].[ActiveType] ([ID])
GO

ALTER TABLE [dbo].[Timesheet] CHECK CONSTRAINT [FK_Timesheet_ActiveType]
GO

ALTER TABLE [dbo].[Timesheet]  WITH CHECK ADD  CONSTRAINT [FK_Timesheet_DimDate] FOREIGN KEY([TimesheetDateID])
REFERENCES [dbo].[DimDate] ([DateID])
GO

ALTER TABLE [dbo].[Timesheet] CHECK CONSTRAINT [FK_Timesheet_DimDate]
GO

ALTER TABLE [dbo].[Timesheet]  WITH CHECK ADD  CONSTRAINT [FK_Timesheet_OverallStatus] FOREIGN KEY([OverallStatusID])
REFERENCES [dbo].[OverallStatus] ([OverallStatusID])
GO

ALTER TABLE [dbo].[Timesheet] CHECK CONSTRAINT [FK_Timesheet_OverallStatus]
GO

ALTER TABLE [dbo].[Timesheet]  WITH CHECK ADD  CONSTRAINT [fk_TimesheetPersonID] FOREIGN KEY([TimesheetPersonID])
REFERENCES [dbo].[Person] ([PersonID])
GO

ALTER TABLE [dbo].[Timesheet] CHECK CONSTRAINT [fk_TimesheetPersonID]
GO


SET ANSI_PADDING ON;
GO

SET IDENTITY_INSERT [dbo].[Timesheet] ON;
GO

INSERT INTO [dbo].[Timesheet]
(
	TimesheetID, 
	TimesheetSourceKey,
	LoadDate, Active, 
	TimesheetName, 
	TimesheetCode, 
	TimesheetFileName, 
	TimesheetDateID, 
	TimesheetFromDateID, 
	TimesheetToDateID, 
	TimesheetPerson, 
	TimesheetDate, 
	OverallStatusID, 
	sys_CreatedOn, 
	sys_CreatedBy, 
	sys_ModifiedOn, 
	sys_ModifiedBy, 
	TimesheetPersonID
)
SELECT 
	TimesheetID, 
	TimesheetSourceKey,
	LoadDate, Active, 
	TimesheetName, 
	TimesheetCode, 
	TimesheetFileName, 
	TimesheetDateID, 
	TimesheetFromDateID, 
	TimesheetToDateID, 
	TimesheetPerson, 
	TimesheetDate, 
	OverallStatusID, 
	sys_CreatedOn, 
	sys_CreatedBy, 
	sys_ModifiedOn, 
	sys_ModifiedBy, 
	TimesheetPersonID
FROM #Timesheet;
GO

SET ANSI_PADDING OFF;
GO

SET IDENTITY_INSERT [dbo].[Timesheet] OFF;
GO

ALTER TABLE [dbo].[TimesheetDetail]  
WITH CHECK ADD  CONSTRAINT [FK_TimesheetDetail_Timesheet] 
FOREIGN KEY([TimesheetID])
REFERENCES [dbo].[Timesheet] ([TimesheetID])
GO

ALTER TABLE [dbo].[TimesheetDetail] CHECK CONSTRAINT [FK_TimesheetDetail_Timesheet]
GO



INSERT INTO DB_Revisions
(
	ScriptName,
	RevisionNumber
)
VALUES
(
	'0012_Change_Timesheet_PeriodEnding_to_NonNullable', 
	12
);
GO