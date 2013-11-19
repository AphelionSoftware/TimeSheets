CREATE TABLE [dbo].[InvoiceStatus] (
    [InvoiceStatusID]        INT            IDENTITY (1, 1) NOT NULL,
    [InvoiceStatusSourceKey] VARCHAR (255)  NULL,
    [LoadDate]               DATETIME       CONSTRAINT [DF_InvoiceStatus_LoadDate] DEFAULT (getdate()) NOT NULL,
    [Active]                 INT            CONSTRAINT [DF_InvoiceStatus_Active] DEFAULT ((1)) NOT NULL,
    [InvoiceStatusName]      VARCHAR (255)  NOT NULL,
    [InvoiceStatusCode]      VARCHAR (255)  NOT NULL,
    [LoadDateID]             AS             (CONVERT([int],CONVERT([varchar](10),[loaddate],(112)),(0))),
    [sys_CreatedOn]          DATETIME       DEFAULT (getdate()) NOT NULL,
    [sys_CreatedBy]          NVARCHAR (255) DEFAULT ('Unknown') NOT NULL,
    [sys_ModifiedOn]         DATETIME       DEFAULT (getdate()) NOT NULL,
    [sys_ModifiedBy]         NVARCHAR (255) DEFAULT ('Unknown') NOT NULL,
    CONSTRAINT [PK_InvoiceStatus] PRIMARY KEY CLUSTERED ([InvoiceStatusID] ASC),
    CONSTRAINT [FK_InvoiceStatus_ActiveType] FOREIGN KEY ([Active]) REFERENCES [dbo].[ActiveType] ([ID])
);

