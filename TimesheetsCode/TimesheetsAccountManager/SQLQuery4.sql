USE [Timesheets20130908]
GO

/****** Object:  Table [dbo].[InvoiceLine_TimesheetDetail]    Script Date: 11/11/2013 12:14:17 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

Drop TABLE [dbo].[InvoiceLine_TimesheetDetail]
go
CREATE TABLE [dbo].[InvoiceLine_TimesheetDetail](
	[InvoiceLine_TimesheetDetail] [int] IDENTITY(1,1) NOT NULL,
	[TimesheetDetailID] [int] NOT NULL,
	[InvoiceLineID] [int] NOT NULL,
	[LoadDate] [datetime] NOT NULL,
	[Active] [int] NOT NULL,
	[LoadDateID]  AS (CONVERT([int],CONVERT([varchar](10),[loaddate],(112)),(0))),
	[sys_CreatedOn] [datetime] NOT NULL,
	[sys_CreatedBy] [nvarchar](255) NOT NULL,
	[sys_ModifiedOn] [datetime] NOT NULL,
	[sys_ModifiedBy] [nvarchar](255) NOT NULL,
 CONSTRAINT [PK_InvoiceLine_TimesheetDetail] PRIMARY KEY CLUSTERED 
(
	[InvoiceLine_TimesheetDetail] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO

ALTER TABLE [dbo].[InvoiceLine_TimesheetDetail] ADD  CONSTRAINT [DF_InvoiceLine_TimesheetDetail_LoadDate]  DEFAULT (getdate()) FOR [LoadDate]
GO

ALTER TABLE [dbo].[InvoiceLine_TimesheetDetail] ADD  CONSTRAINT [DF_InvoiceLine_TimesheetDetail_Active]  DEFAULT ((1)) FOR [Active]
GO

ALTER TABLE [dbo].[InvoiceLine_TimesheetDetail] ADD  DEFAULT (getdate()) FOR [sys_CreatedOn]
GO

ALTER TABLE [dbo].[InvoiceLine_TimesheetDetail] ADD  DEFAULT ('Unknown') FOR [sys_CreatedBy]
GO

ALTER TABLE [dbo].[InvoiceLine_TimesheetDetail] ADD  DEFAULT (getdate()) FOR [sys_ModifiedOn]
GO

ALTER TABLE [dbo].[InvoiceLine_TimesheetDetail] ADD  DEFAULT ('Unknown') FOR [sys_ModifiedBy]
GO

ALTER TABLE [dbo].[InvoiceLine_TimesheetDetail]  WITH CHECK ADD  CONSTRAINT [FK_InvoiceLine_TimesheetDetailActiveType] FOREIGN KEY([Active])
REFERENCES [dbo].[ActiveType] ([ID])
GO

ALTER TABLE [dbo].[InvoiceLine_TimesheetDetail] CHECK CONSTRAINT [FK_InvoiceLine_TimesheetDetailActiveType]
GO


ALTER TABLE [dbo].[InvoiceLine_TimesheetDetail]  WITH CHECK ADD  CONSTRAINT [FK_InvoiceLine_TimesheetDetailTimesheetDetail] FOREIGN KEY([TimesheetDetailID])
REFERENCES [dbo].[TimesheetDetail] ([TimesheetDetailID])
GO

ALTER TABLE [dbo].[InvoiceLine_TimesheetDetail] CHECK CONSTRAINT [FK_InvoiceLine_TimesheetDetailTimesheetDetail]
GO


ALTER TABLE [dbo].[InvoiceLine_TimesheetDetail]  WITH CHECK ADD  CONSTRAINT [FK_InvoiceLine] FOREIGN KEY([InvoiceLineID])
REFERENCES [dbo].[InvoiceLine] ([InvoiceLineID])
GO

ALTER TABLE [dbo].[InvoiceLine_TimesheetDetail] CHECK CONSTRAINT [FK_InvoiceLine] 
GO


