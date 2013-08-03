CREATE TABLE [dbo].[TypeOfWork] (
    [TypeOfWorkID]        INT            IDENTITY (1, 1) NOT NULL,
    [TypeOfWorkSourceKey] VARCHAR (255)  NULL,
    [LoadDate]            DATETIME       CONSTRAINT [DF_TypeOfWork_LoadDate] DEFAULT (getdate()) NOT NULL,
    [Active]              INT            CONSTRAINT [DF_TypeOfWork_Active] DEFAULT ((1)) NOT NULL,
    [TypeOfWorkName]      VARCHAR (255)  NOT NULL,
    [TypeOfWorkCode]      VARCHAR (255)  NOT NULL,
    [LoadDateID]          AS             (CONVERT([int],CONVERT([varchar](10),[loaddate],(112)),(0))),
    [sys_CreatedOn]       DATETIME       DEFAULT (getdate()) NOT NULL,
    [sys_CreatedBy]       NVARCHAR (255) DEFAULT ('Unknown') NOT NULL,
    [sys_ModifiedOn]      DATETIME       DEFAULT (getdate()) NOT NULL,
    [sys_ModifiedBy]      NVARCHAR (255) DEFAULT ('Unknown') NOT NULL,
    CONSTRAINT [PK_TypeOfWork] PRIMARY KEY CLUSTERED ([TypeOfWorkID] ASC),
    CONSTRAINT [FK_TypeOfWork_ActiveType] FOREIGN KEY ([Active]) REFERENCES [dbo].[ActiveType] ([ID])
);

