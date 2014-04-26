﻿CREATE TABLE [dbo].[BillingImports_Import] (
    [ID]                       INT            IDENTITY (1, 1) NOT NULL,
    [Client]                   NVARCHAR (50)  NULL,
    [Project]                  NVARCHAR (50)  NULL,
    [TimesheetDetailDateID]    NVARCHAR (50)  NULL,
    [BillingStatusName]        NVARCHAR (50)  NULL,
    [TimesheetDetailID]        NVARCHAR (50)  NULL,
    [TImesheetDetailSourceKey] NVARCHAR (50)  NULL,
    [LoadDate]                 NVARCHAR (50)  NULL,
    [Active]                   NVARCHAR (50)  NULL,
    [TImesheetDetailFileName]  NVARCHAR (50)  NULL,
    [LoadDateID]               NVARCHAR (50)  NULL,
    [Hours]                    NVARCHAR (50)  NULL,
    [TimesheetID]              NVARCHAR (50)  NULL,
    [Comments]                 NVARCHAR (500) NULL,
    [ClientComments]           NVARCHAR (500) NULL,
    [AMComments]               NVARCHAR (500) NULL,
    [Exclude]                  NVARCHAR (500) NULL,
    [TypeOfWorkName]           NVARCHAR (50)  NULL,
    [AccountManager]           NVARCHAR (50)  NULL,
    [AMEmail]                  NVARCHAR (50)  NULL,
    [BillingPeriodText]        NVARCHAR (50)  NULL,
    CONSTRAINT [PK_BillingImports_Import] PRIMARY KEY CLUSTERED ([ID] ASC)
);
