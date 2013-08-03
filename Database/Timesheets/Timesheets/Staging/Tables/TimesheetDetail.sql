CREATE TABLE [Staging].[TimesheetDetail] (
    [TimesheetDetailID] INT           NOT NULL,
    [ClientComments]    VARCHAR (MAX) NULL,
    [AMComments]        VARCHAR (MAX) NULL,
    [Billable]          INT           NULL,
    CONSTRAINT [PK_TimesheetDetail] PRIMARY KEY CLUSTERED ([TimesheetDetailID] ASC)
);

