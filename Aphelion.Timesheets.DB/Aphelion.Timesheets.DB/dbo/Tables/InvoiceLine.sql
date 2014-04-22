CREATE TABLE [dbo].[InvoiceLine] (
    [InvoiceLineID]           INT            IDENTITY (1, 1) NOT NULL,
    [InvoiceID]               INT            NOT NULL,
    [LoadDate]                DATETIME       CONSTRAINT [DF_InvoiceLine_LoadDate] DEFAULT (getdate()) NOT NULL,
    [Active]                  INT            CONSTRAINT [DF_InvoiceLine_Active] DEFAULT ((1)) NOT NULL,
    [InvoiceLinePersonID]     INT            NULL,
    [LoadDateID]              AS             (CONVERT([int],CONVERT([varchar](10),[loaddate],(112)),(0))),
    [InvoiceLineDescription]  VARCHAR (500)  NOT NULL,
    [InvoiceLineCode]         VARCHAR (50)   NOT NULL,
    [InvoiceLineRate]         MONEY          NOT NULL,
    [InvoiceLineQty]          INT            NOT NULL,
    [InvoiceLineAmount]       MONEY          NULL,
    [InvoiceLineClientRoleID] INT            NULL,
    [InvoiceLineProjectID]    INT            NOT NULL,
    [sys_CreatedOn]           DATETIME       CONSTRAINT [DF__InvoiceLi__sys_C__13F1F5EB] DEFAULT (getdate()) NOT NULL,
    [sys_CreatedBy]           NVARCHAR (255) CONSTRAINT [DF__InvoiceLi__sys_C__14E61A24] DEFAULT ('Unknown') NOT NULL,
    [sys_ModifiedOn]          DATETIME       CONSTRAINT [DF__InvoiceLi__sys_M__15DA3E5D] DEFAULT (getdate()) NOT NULL,
    [sys_ModifiedBy]          NVARCHAR (255) CONSTRAINT [DF__InvoiceLi__sys_M__16CE6296] DEFAULT ('Unknown') NOT NULL,
    [InvoiceLineCalcedAmount] MONEY          CONSTRAINT [DF_InvoiceLine_InvoiceLineCalcedAmount] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [PK_InvoiceLine] PRIMARY KEY CLUSTERED ([InvoiceLineID] ASC),
    CONSTRAINT [FK_InvoiceLine_ActiveType] FOREIGN KEY ([Active]) REFERENCES [dbo].[ActiveType] ([ID]),
    CONSTRAINT [FK_InvoiceLine_Invoice] FOREIGN KEY ([InvoiceID]) REFERENCES [dbo].[Invoice] ([InvoiceID]),
    CONSTRAINT [FK_InvoiceLine_InvoiceLine] FOREIGN KEY ([InvoiceLineClientRoleID]) REFERENCES [dbo].[ClientRole] ([ClientRoleID]),
    CONSTRAINT [FK_InvoiceLine_Person] FOREIGN KEY ([InvoiceLinePersonID]) REFERENCES [dbo].[Person] ([PersonID]),
    CONSTRAINT [FK_InvoiceLine_Project] FOREIGN KEY ([InvoiceLineProjectID]) REFERENCES [dbo].[Project] ([ProjectID])
);



