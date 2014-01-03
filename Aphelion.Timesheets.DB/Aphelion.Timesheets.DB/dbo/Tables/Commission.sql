CREATE TABLE [dbo].[Commission] (
    [CommissionID]          INT            IDENTITY (1, 1) NOT NULL,
    [InvoiceID]             INT            NOT NULL,
    [CommissionStatusID]    INT            NOT NULL,
    [LoadDate]              DATETIME       CONSTRAINT [DF_Commission_LoadDate] DEFAULT (getdate()) NOT NULL,
    [Active]                INT            CONSTRAINT [DF_Commission_Active] DEFAULT ((1)) NOT NULL,
    [CommissionPersonID]    INT            NULL,
    [CommissionDescription] VARCHAR (500)  NOT NULL,
    [CommissionAmount]      MONEY          NOT NULL,
    [CommissionPaidDateID]  INT            NULL,
    [sys_CreatedOn]         DATETIME       CONSTRAINT [DF__Commission__sys_C__13F1F5EB] DEFAULT (getdate()) NOT NULL,
    [sys_CreatedBy]         NVARCHAR (255) CONSTRAINT [DF__Commission__sys_C__14E61A24] DEFAULT ('Unknown') NOT NULL,
    [sys_ModifiedOn]        DATETIME       CONSTRAINT [DF__Commission__sys_M__15DA3E5D] DEFAULT (getdate()) NOT NULL,
    [sys_ModifiedBy]        NVARCHAR (255) CONSTRAINT [DF__Commission__sys_M__16CE6296] DEFAULT ('Unknown') NOT NULL,
    CONSTRAINT [PK_Commission] PRIMARY KEY CLUSTERED ([CommissionID] ASC),
    CONSTRAINT [FK_Commission_ActiveType] FOREIGN KEY ([Active]) REFERENCES [dbo].[ActiveType] ([ID]),
    CONSTRAINT [FK_Commission_CommissionStatus] FOREIGN KEY ([CommissionStatusID]) REFERENCES [dbo].[CommissionStatus] ([CommissionStatusID]),
    CONSTRAINT [FK_Commission_DimDate] FOREIGN KEY ([CommissionPaidDateID]) REFERENCES [dbo].[DimDate] ([DateID]),
    CONSTRAINT [FK_Commission_Invoice] FOREIGN KEY ([InvoiceID]) REFERENCES [dbo].[Invoice] ([InvoiceID]),
    CONSTRAINT [FK_Commission_Person] FOREIGN KEY ([CommissionPersonID]) REFERENCES [dbo].[Person] ([PersonID])
);

