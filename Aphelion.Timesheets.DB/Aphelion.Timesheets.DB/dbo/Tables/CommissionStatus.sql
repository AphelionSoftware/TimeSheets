CREATE TABLE [dbo].[CommissionStatus] (
    [CommissionStatusID]        INT            IDENTITY (1, 1) NOT NULL,
    [CommissionStatusSourceKey] VARCHAR (255)  NULL,
    [LoadDate]                  DATETIME       CONSTRAINT [DF_CommissionStatus_LoadDate] DEFAULT (getdate()) NOT NULL,
    [Active]                    INT            CONSTRAINT [DF_CommissionStatus_Active] DEFAULT ((1)) NOT NULL,
    [CommissionStatusName]      VARCHAR (255)  NOT NULL,
    [CommissionStatusCode]      VARCHAR (255)  NOT NULL,
    [LoadDateID]                AS             (CONVERT([int],CONVERT([varchar](10),[loaddate],(112)),(0))),
    [sys_CreatedOn]             DATETIME       DEFAULT (getdate()) NOT NULL,
    [sys_CreatedBy]             NVARCHAR (255) DEFAULT ('Unknown') NOT NULL,
    [sys_ModifiedOn]            DATETIME       DEFAULT (getdate()) NOT NULL,
    [sys_ModifiedBy]            NVARCHAR (255) DEFAULT ('Unknown') NOT NULL,
    CONSTRAINT [PK_CommissionStatus] PRIMARY KEY CLUSTERED ([CommissionStatusID] ASC),
    CONSTRAINT [FK_CommissionStatus_ActiveType] FOREIGN KEY ([Active]) REFERENCES [dbo].[ActiveType] ([ID])
);

