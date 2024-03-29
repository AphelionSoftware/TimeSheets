USE [master]
GO
/****** Object:  Database [PWTimesheets]    Script Date: 2012/04/29 02:54:38 PM ******/
CREATE DATABASE [PWTimesheets] ON  PRIMARY 
( NAME = N'PWTimesheets', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL10_50.SQL2K8R2\MSSQL\DATA\PWTimesheets.mdf' , SIZE = 102400KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'PWTimesheets_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL10_50.SQL2K8R2\MSSQL\DATA\PWTimesheets_1.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [PWTimesheets] SET COMPATIBILITY_LEVEL = 100
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [PWTimesheets].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [PWTimesheets] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [PWTimesheets] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [PWTimesheets] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [PWTimesheets] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [PWTimesheets] SET ARITHABORT OFF 
GO
ALTER DATABASE [PWTimesheets] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [PWTimesheets] SET AUTO_CREATE_STATISTICS ON 
GO
ALTER DATABASE [PWTimesheets] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [PWTimesheets] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [PWTimesheets] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [PWTimesheets] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [PWTimesheets] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [PWTimesheets] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [PWTimesheets] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [PWTimesheets] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [PWTimesheets] SET  DISABLE_BROKER 
GO
ALTER DATABASE [PWTimesheets] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [PWTimesheets] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [PWTimesheets] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [PWTimesheets] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [PWTimesheets] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [PWTimesheets] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [PWTimesheets] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [PWTimesheets] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [PWTimesheets] SET  MULTI_USER 
GO
ALTER DATABASE [PWTimesheets] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [PWTimesheets] SET DB_CHAINING OFF 
GO
EXEC sys.sp_db_vardecimal_storage_format N'PWTimesheets', N'ON'
GO
USE [PWTimesheets]
GO
/****** Object:  Schema [CUBE]    Script Date: 2012/04/29 02:54:39 PM ******/
CREATE SCHEMA [CUBE]
GO
/****** Object:  Table [dbo].[Client]    Script Date: 2012/04/29 02:54:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Client](
	[ClientID] [int] IDENTITY(1,1) NOT NULL,
	[ClientSourceKey] [varchar](255) NULL,
	[LoadDate] [datetime] NOT NULL,
	[Active] [int] NOT NULL,
	[ClientName] [varchar](255) NOT NULL,
	[ClientCode] [varchar](255) NOT NULL,
	[LoadDateID]  AS (CONVERT([int],CONVERT([varchar](10),[loaddate],(112)),(0))),
 CONSTRAINT [PK_Client] PRIMARY KEY CLUSTERED 
(
	[ClientID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[DimDate]    Script Date: 2012/04/29 02:54:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[DimDate](
	[DateSK] [int] IDENTITY(1,1) NOT NULL,
	[DateID] [int] NOT NULL,
	[Date] [datetime] NOT NULL,
	[Day] [int] NOT NULL,
	[DaySuffix] [varchar](4) NOT NULL,
	[DayOfWeek] [varchar](9) NOT NULL,
	[DOWInMonth] [int] NOT NULL,
	[DayOfYear] [int] NOT NULL,
	[WeekOfYear] [int] NOT NULL,
	[WeekOfMonth] [int] NOT NULL,
	[MonthNumber] [int] NOT NULL,
	[MonthName] [varchar](9) NOT NULL,
	[Quarter] [int] NOT NULL,
	[QuarterName] [varchar](255) NOT NULL,
	[YearName] [char](4) NOT NULL,
	[YearNumber] [int] NOT NULL,
	[StandardDate] [varchar](10) NULL,
	[IsPublicHoliday] [bit] NULL,
	[HolidayText] [varchar](50) NULL,
 CONSTRAINT [PK_DimDate] PRIMARY KEY CLUSTERED 
(
	[DateID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[OverallStatus]    Script Date: 2012/04/29 02:54:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[OverallStatus](
	[OverallStatusID] [int] IDENTITY(1,1) NOT NULL,
	[OverallStatusSourceKey] [varchar](255) NULL,
	[LoadDate] [datetime] NOT NULL,
	[Active] [int] NOT NULL,
	[OverallStatusName] [varchar](255) NOT NULL,
	[OverallStatusCode] [varchar](255) NOT NULL,
	[LoadDateID]  AS (CONVERT([int],CONVERT([varchar](10),[loaddate],(112)),(0))),
 CONSTRAINT [PK_OverallStatus] PRIMARY KEY CLUSTERED 
(
	[OverallStatusID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Person]    Script Date: 2012/04/29 02:54:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Person](
	[PersonID] [int] IDENTITY(1,1) NOT NULL,
	[PersonSourceKey] [varchar](255) NULL,
	[LoadDate] [datetime] NOT NULL,
	[Active] [int] NOT NULL,
	[PersonName] [varchar](255) NOT NULL,
	[PersonCode] [varchar](255) NOT NULL,
	[LoadDateID]  AS (CONVERT([int],CONVERT([varchar](10),[loaddate],(112)),(0))),
 CONSTRAINT [PK_Person] PRIMARY KEY CLUSTERED 
(
	[PersonID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Project]    Script Date: 2012/04/29 02:54:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Project](
	[ProjectID] [int] IDENTITY(1,1) NOT NULL,
	[ProjectSourceKey] [varchar](255) NULL,
	[LoadDate] [datetime] NOT NULL,
	[Active] [int] NOT NULL,
	[ProjectName] [varchar](255) NOT NULL,
	[ProjectCode] [varchar](255) NOT NULL,
	[ClientID] [int] NOT NULL,
	[LoadDateID]  AS (CONVERT([int],CONVERT([varchar](10),[loaddate],(112)),(0))),
	[ProjectFirstPersonName] [varchar](50) NULL,
	[ProjectFirstFilename] [varchar](255) NULL,
 CONSTRAINT [PK_Project] PRIMARY KEY CLUSTERED 
(
	[ProjectID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Timesheet]    Script Date: 2012/04/29 02:54:39 PM ******/
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
	[TimesheetFromDateID] [int] NOT NULL,
	[TimesheetToDateID] [int] NOT NULL,
	[TimesheetPerson] [varchar](255) NOT NULL,
	[TimesheetDate] [varchar](255) NOT NULL,
	[LoadDateID]  AS (CONVERT([int],CONVERT([varchar](10),[loaddate],(112)),(0))),
	[OverallStatusID] [int] NOT NULL,
 CONSTRAINT [PK_Timesheet] PRIMARY KEY CLUSTERED 
(
	[TimesheetID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[TimesheetDetail]    Script Date: 2012/04/29 02:54:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[TimesheetDetail](
	[TimesheetDetailID] [int] IDENTITY(1,1) NOT NULL,
	[TimesheetDetailSourceKey] [varchar](255) NULL,
	[LoadDate] [datetime] NOT NULL,
	[Active] [int] NOT NULL,
	[TimesheetDetailName] [varchar](255) NOT NULL,
	[TimesheetDetailCode] [varchar](255) NOT NULL,
	[TimesheetDetailFileName] [varchar](255) NOT NULL,
	[TimesheetDetailDateID] [int] NOT NULL,
	[TimesheetDetailPersonID] [int] NOT NULL,
	[TimesheetDetailProjectID] [int] NOT NULL,
	[LoadDateID]  AS (CONVERT([int],CONVERT([varchar](10),[loaddate],(112)),(0))),
	[Hours] [decimal](18, 2) NOT NULL,
	[TimesheetID] [int] NOT NULL,
	[TimesheetTypeOfWorkID] [int] NOT NULL,
	[Comments] [varchar](max) NULL,
 CONSTRAINT [PK_TimesheetDetail] PRIMARY KEY CLUSTERED 
(
	[TimesheetDetailID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[TypeOfWork]    Script Date: 2012/04/29 02:54:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[TypeOfWork](
	[TypeOfWorkID] [int] IDENTITY(1,1) NOT NULL,
	[TypeOfWorkSourceKey] [varchar](255) NULL,
	[LoadDate] [datetime] NOT NULL,
	[Active] [int] NOT NULL,
	[TypeOfWorkName] [varchar](255) NOT NULL,
	[TypeOfWorkCode] [varchar](255) NOT NULL,
	[LoadDateID]  AS (CONVERT([int],CONVERT([varchar](10),[loaddate],(112)),(0))),
 CONSTRAINT [PK_TypeOfWork] PRIMARY KEY CLUSTERED 
(
	[TypeOfWorkID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  View [CUBE].[DimClient]    Script Date: 2012/04/29 02:54:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE VIEW [CUBE].[DimClient] AS
SELECT [ClientID]
      ,[ClientSourceKey]
      ,[LoadDate]
      ,[Active]
      ,[ClientName]
      ,[ClientCode]
      ,[LoadDateID]
  FROM .[dbo].[Client]
GO
/****** Object:  View [CUBE].[DimDate]    Script Date: 2012/04/29 02:54:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE VIEW [CUBE].[DimDate]
as

SELECT [DateSK]
      ,[DateID]
      ,[Date]
      ,[Day]
      ,[DaySuffix]
      ,[DayOfWeek]
      ,[DOWInMonth]
      ,[DayOfYear]
      ,[WeekOfYear]
      ,[WeekOfMonth]
      ,[MonthNumber]
      ,[MonthName]
	  ,MonthNameYear = left(monthname, 3) + ' - ' + yearname
      ,[Quarter]
      ,[QuarterName]
      ,[YearName]
      ,[YearNumber]
      ,[StandardDate]
      ,[IsPublicHoliday]
      ,[HolidayText]
  FROM [dbo].[DimDate]

GO
/****** Object:  View [CUBE].[DimPerson]    Script Date: 2012/04/29 02:54:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [CUBE].[DimPerson] as 
SELECT [PersonID]
      ,[PersonSourceKey]
      ,[LoadDate]
      ,[Active]
      ,[PersonName]
      ,[PersonCode]
      ,[LoadDateID]
  FROM [dbo].[Person]
GO
/****** Object:  View [CUBE].[DimProject]    Script Date: 2012/04/29 02:54:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE VIEW [CUBE].[DimProject] as 

SELECT  [ProjectID]
      ,[ProjectSourceKey]
      ,[LoadDate]
      ,[Active]
      ,[ProjectName]
      ,[ProjectCode]
      ,[ClientID]
      ,[LoadDateID]
  FROM [dbo].[Project]
GO
/****** Object:  View [CUBE].[DimTimesheet]    Script Date: 2012/04/29 02:54:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [CUBE].[DimTimesheet]
as 
SELECT T.[TimesheetID]
      ,T.[TimesheetSourceKey]
      ,T.[LoadDate]
      ,T.[Active]
      ,T.[TimesheetName]
      ,T.[TimesheetCode]
      ,T.[TimesheetFileName]
      ,T.[TimesheetFromDateID]
      ,T.[TimesheetToDateID]
      ,T.[TimesheetPerson]
      ,T.[TimesheetDate]
      ,T.[LoadDateID]
      ,T.[OverallStatusID]
      ,OS.[OverallStatusName]
      ,OS.[OverallStatusCode]
      ,OS.[OverallStatusSourceKey]
  FROM [dbo].[Timesheet] T
  INNER JOIN [dbo].OverallStatus OS
  ON t.OverallStatusID = OS.OverallStatusID
GO
/****** Object:  View [CUBE].[DimTypeOfWork]    Script Date: 2012/04/29 02:54:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [CUBE].[DimTypeOfWork]
as
SELECT [TypeOfWorkID]
      ,[TypeOfWorkSourceKey]
      ,[LoadDate]
      ,[Active]
      ,[TypeOfWorkName]
      ,[TypeOfWorkCode]
      ,[LoadDateID]
  FROM [dbo].[TypeOfWork]
GO
/****** Object:  View [CUBE].[FactTimesheetDetail]    Script Date: 2012/04/29 02:54:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



CREATE VIEW [CUBE].[FactTimesheetDetail]
as

SELECT [TimesheetDetailID]
      ,[TimesheetDetailSourceKey]
      ,[LoadDate]
      ,[Active]
      ,[TimesheetDetailName]
      ,[TimesheetDetailCode]
      ,[TimesheetDetailFileName]
      ,[TimesheetDetailDateID]
      ,[TimesheetDetailPersonID]
      ,[TimesheetDetailProjectID]
      ,[TimesheetTypeOfWorkID]
      ,[LoadDateID]
      ,[Hours]
      ,[TimesheetID]
      ,Comments
  FROM [dbo].[TimesheetDetail]



GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [IX_Project]    Script Date: 2012/04/29 02:54:39 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_Project] ON [dbo].[Project]
(
	[ProjectSourceKey] ASC,
	[ClientID] DESC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Client] ADD  CONSTRAINT [DF_Client_LoadDate]  DEFAULT (getdate()) FOR [LoadDate]
GO
ALTER TABLE [dbo].[Client] ADD  CONSTRAINT [DF_Client_Active]  DEFAULT ((1)) FOR [Active]
GO
ALTER TABLE [dbo].[DimDate] ADD  DEFAULT ((0)) FOR [IsPublicHoliday]
GO
ALTER TABLE [dbo].[OverallStatus] ADD  CONSTRAINT [DF_OverallStatus_LoadDate]  DEFAULT (getdate()) FOR [LoadDate]
GO
ALTER TABLE [dbo].[OverallStatus] ADD  CONSTRAINT [DF_OverallStatus_Active]  DEFAULT ((1)) FOR [Active]
GO
ALTER TABLE [dbo].[Person] ADD  CONSTRAINT [DF_Person_LoadDate]  DEFAULT (getdate()) FOR [LoadDate]
GO
ALTER TABLE [dbo].[Person] ADD  CONSTRAINT [DF_Person_Active]  DEFAULT ((1)) FOR [Active]
GO
ALTER TABLE [dbo].[Project] ADD  CONSTRAINT [DF_Project_LoadDate]  DEFAULT (getdate()) FOR [LoadDate]
GO
ALTER TABLE [dbo].[Project] ADD  CONSTRAINT [DF_Project_Active]  DEFAULT ((1)) FOR [Active]
GO
ALTER TABLE [dbo].[Project] ADD  CONSTRAINT [DF_Project_ProjectName]  DEFAULT ('Unallocated') FOR [ProjectName]
GO
ALTER TABLE [dbo].[Project] ADD  CONSTRAINT [DF_Project_ProjectCode]  DEFAULT ('UNACC') FOR [ProjectCode]
GO
ALTER TABLE [dbo].[Project] ADD  CONSTRAINT [DF_Project_ClientID]  DEFAULT ((0)) FOR [ClientID]
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
ALTER TABLE [dbo].[TimesheetDetail] ADD  CONSTRAINT [DF_TimesheetDetail_LoadDate]  DEFAULT (getdate()) FOR [LoadDate]
GO
ALTER TABLE [dbo].[TimesheetDetail] ADD  CONSTRAINT [DF_TimesheetDetail_Active]  DEFAULT ((1)) FOR [Active]
GO
ALTER TABLE [dbo].[TypeOfWork] ADD  CONSTRAINT [DF_TypeOfWork_LoadDate]  DEFAULT (getdate()) FOR [LoadDate]
GO
ALTER TABLE [dbo].[TypeOfWork] ADD  CONSTRAINT [DF_TypeOfWork_Active]  DEFAULT ((1)) FOR [Active]
GO
ALTER TABLE [dbo].[Project]  WITH CHECK ADD  CONSTRAINT [FK_Project_Client] FOREIGN KEY([ClientID])
REFERENCES [dbo].[Client] ([ClientID])
GO
ALTER TABLE [dbo].[Project] CHECK CONSTRAINT [FK_Project_Client]
GO
ALTER TABLE [dbo].[Timesheet]  WITH CHECK ADD  CONSTRAINT [FK_Timesheet_OverallStatus] FOREIGN KEY([OverallStatusID])
REFERENCES [dbo].[OverallStatus] ([OverallStatusID])
GO
ALTER TABLE [dbo].[Timesheet] CHECK CONSTRAINT [FK_Timesheet_OverallStatus]
GO
ALTER TABLE [dbo].[TimesheetDetail]  WITH CHECK ADD  CONSTRAINT [FK_TimesheetDetail_Person] FOREIGN KEY([TimesheetDetailPersonID])
REFERENCES [dbo].[Person] ([PersonID])
GO
ALTER TABLE [dbo].[TimesheetDetail] CHECK CONSTRAINT [FK_TimesheetDetail_Person]
GO
ALTER TABLE [dbo].[TimesheetDetail]  WITH CHECK ADD  CONSTRAINT [FK_TimesheetDetail_Project] FOREIGN KEY([TimesheetDetailProjectID])
REFERENCES [dbo].[Project] ([ProjectID])
GO
ALTER TABLE [dbo].[TimesheetDetail] CHECK CONSTRAINT [FK_TimesheetDetail_Project]
GO
ALTER TABLE [dbo].[TimesheetDetail]  WITH CHECK ADD  CONSTRAINT [FK_TimesheetDetail_Timesheet] FOREIGN KEY([TimesheetID])
REFERENCES [dbo].[Timesheet] ([TimesheetID])
GO
ALTER TABLE [dbo].[TimesheetDetail] CHECK CONSTRAINT [FK_TimesheetDetail_Timesheet]
GO
ALTER TABLE [dbo].[TimesheetDetail]  WITH CHECK ADD  CONSTRAINT [FK_TimesheetDetail_TypeOfWork] FOREIGN KEY([TimesheetTypeOfWorkID])
REFERENCES [dbo].[TypeOfWork] ([TypeOfWorkID])
GO
ALTER TABLE [dbo].[TimesheetDetail] CHECK CONSTRAINT [FK_TimesheetDetail_TypeOfWork]
GO
USE [master]
GO
ALTER DATABASE [PWTimesheets] SET  READ_WRITE 
GO
