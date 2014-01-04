USE [Timesheets]
GO

/****** Object:  Table [dbo].[ClientExports_Import]    Script Date: 2014-01-04 05:13:28 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[ClientExports_Import](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[ClientSourceKey] [nvarchar](50) NULL,
	[ProjectSourceKey] [nvarchar](50) NULL,
	[BillingStatusName] [nvarchar](50) NULL,
	[TImesheetDetailSourceKey] [nvarchar](50) NULL,
	[LoadDate] [nvarchar](50) NULL,
	[TImesheetDetailFileName] [nvarchar](50) NULL,
	[Hours] [nvarchar](50) NULL,
	[Comments] [nvarchar](500) NULL,
	[ClientComments] [nvarchar](500) NULL,
	[AMComments] [nvarchar](500) NULL,
	[TypeOfWorkName] [nvarchar](50) NULL,
	[AccountManager] [nvarchar](50) NULL,
	[AMEmail] [nvarchar](50) NULL
) ON [PRIMARY]

GO


