CREATE TABLE [Config].[LoadTimes] (
    [ID]               INT           IDENTITY (1, 1) NOT NULL,
    [Comments]         VARCHAR (255) NULL,
    [LoadStartTime]    DATETIME      DEFAULT (getdate()) NOT NULL,
    [LoadEndTime]      DATETIME      NULL,
    [ExportClientTime] DATETIME      NULL,
    CONSTRAINT [PK_LoadTimes] PRIMARY KEY CLUSTERED ([ID] ASC)
);




GO


GO


GO

