CREATE TABLE [dbo].[Invoice] (
    [InvoiceID]              INT            IDENTITY (1, 1) NOT NULL,
    [InvoiceSourceKey]       VARCHAR (255)  NULL,
    [LoadDate]               DATETIME       CONSTRAINT [DF_Invoice_LoadDate] DEFAULT (getdate()) NOT NULL,
    [Active]                 INT            CONSTRAINT [DF_Invoice_Active] DEFAULT ((1)) NOT NULL,
    [InvoiceFileName]        VARCHAR (255)  NULL,
    [InvoiceDateID]          INT            NOT NULL,
    [InvoiceDueDateID]       INT            NOT NULL,
    [InvoicePaidDateID]      INT            NULL,
    [InvoiceAMPersonID]      INT            NOT NULL,
    [InvoiceClientID]        INT            NOT NULL,
    [LoadDateID]             AS             (CONVERT([int],CONVERT([varchar](10),[loaddate],(112)),(0))),
    [Comments]               VARCHAR (500)  NOT NULL,
    [InvoiceEmailAddress]    VARCHAR (255)  NOT NULL,
    [InvoiceStatusID]        INT            NOT NULL,
    [InvoiceNumber]          VARCHAR (255)  NULL,
    [sys_CreatedOn]          DATETIME       CONSTRAINT [DF__Invoice__sys_Cre__7D0E9093] DEFAULT (getdate()) NOT NULL,
    [sys_CreatedBy]          NVARCHAR (255) CONSTRAINT [DF__Invoice__sys_Cre__7E02B4CC] DEFAULT ('Unknown') NOT NULL,
    [sys_ModifiedOn]         DATETIME       CONSTRAINT [DF__Invoice__sys_Mod__7EF6D905] DEFAULT (getdate()) NOT NULL,
    [sys_ModifiedBy]         NVARCHAR (255) CONSTRAINT [DF__Invoice__sys_Mod__7FEAFD3E] DEFAULT ('Unknown') NOT NULL,
    [InvoicePurchaseOrderNo] VARCHAR (255)  NULL,
    CONSTRAINT [PK_Invoice] PRIMARY KEY CLUSTERED ([InvoiceID] ASC),
    CONSTRAINT [FK_Invoice_ActiveType] FOREIGN KEY ([Active]) REFERENCES [dbo].[ActiveType] ([ID]),
    CONSTRAINT [FK_Invoice_AMPerson] FOREIGN KEY ([InvoiceAMPersonID]) REFERENCES [dbo].[Person] ([PersonID]),
    CONSTRAINT [FK_Invoice_Client] FOREIGN KEY ([InvoiceClientID]) REFERENCES [dbo].[Client] ([ClientID]),
    CONSTRAINT [FK_Invoice_DimDate] FOREIGN KEY ([InvoiceDateID]) REFERENCES [dbo].[DimDate] ([DateID]),
    CONSTRAINT [FK_Invoice_DimDate1] FOREIGN KEY ([InvoiceDueDateID]) REFERENCES [dbo].[DimDate] ([DateID]),
    CONSTRAINT [FK_Invoice_DimDate2] FOREIGN KEY ([InvoicePaidDateID]) REFERENCES [dbo].[DimDate] ([DateID]),
    CONSTRAINT [FK_Invoice_InvoiceStatus] FOREIGN KEY ([InvoiceStatusID]) REFERENCES [dbo].[InvoiceStatus] ([InvoiceStatusID])
);





