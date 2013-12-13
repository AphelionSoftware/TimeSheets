CREATE TABLE [dbo].[XLSBilled] (
    [Client]                   NVARCHAR (255) NULL,
    [Project]                  NVARCHAR (255) NULL,
    [TimesheetDetailDateID]    NVARCHAR (255) NULL,
    [BillingStatusName]        NVARCHAR (255) NULL,
    [TimesheetDetailID]        NVARCHAR (255) NOT NULL,
    [TimesheetDetailSourceKey] NVARCHAR (255) NULL,
    [LoadDate]                 NVARCHAR (255) NULL,
    [Active]                   NVARCHAR (255) NULL,
    [TimesheetDetailFileName]  NVARCHAR (255) NULL,
    [LoadDateID]               NVARCHAR (255) NULL,
    [Hours]                    NVARCHAR (255) NULL,
    [TimesheetID]              NVARCHAR (255) NULL,
    [Comments]                 NVARCHAR (255) NULL,
    [ClientComments]           NVARCHAR (255) NULL,
    [AMComments]               NVARCHAR (255) NULL,
    [Exclude]                  NVARCHAR (255) NULL,
    [TypeOfWorkName]           NVARCHAR (255) NULL,
    [AccountManager]           NVARCHAR (255) NULL,
    [AMEmail]                  NVARCHAR (255) NULL,
    [BillingPeriodText]        NVARCHAR (255) NULL,
    CONSTRAINT [PK_XLSBilled] PRIMARY KEY CLUSTERED ([TimesheetDetailID] ASC)
);

