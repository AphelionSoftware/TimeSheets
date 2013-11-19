﻿CREATE TABLE [dbo].[DimDate] (
    [DateSK]                  INT            IDENTITY (1, 1) NOT NULL,
    [DateID]                  INT            NOT NULL,
    [Date]                    DATETIME       NOT NULL,
    [Day]                     INT            NOT NULL,
    [DaySuffix]               VARCHAR (4)    NOT NULL,
    [DayOfWeek]               VARCHAR (9)    NOT NULL,
    [DOWInMonth]              INT            NOT NULL,
    [DayOfYear]               INT            NOT NULL,
    [WeekOfYear]              INT            NOT NULL,
    [WeekOfMonth]             INT            NOT NULL,
    [MonthNumber]             INT            NOT NULL,
    [MonthName]               VARCHAR (9)    NOT NULL,
    [Quarter]                 INT            NOT NULL,
    [QuarterName]             VARCHAR (255)  NOT NULL,
    [YearName]                CHAR (4)       NOT NULL,
    [YearNumber]              INT            NOT NULL,
    [StandardDate]            VARCHAR (10)   NULL,
    [IsPublicHoliday]         BIT            DEFAULT ((0)) NULL,
    [HolidayText]             VARCHAR (50)   NULL,
    [sys_CreatedOn]           DATETIME       DEFAULT (getdate()) NOT NULL,
    [sys_CreatedBy]           NVARCHAR (255) DEFAULT ('Unknown') NOT NULL,
    [sys_ModifiedOn]          DATETIME       DEFAULT (getdate()) NOT NULL,
    [sys_ModifiedBy]          NVARCHAR (255) DEFAULT ('Unknown') NOT NULL,
    [Active]                  INT            DEFAULT ((1)) NOT NULL,
    [ContractorYear]          INT            NULL,
    [ContractorMonth]         INT            NULL,
    [ContractorPeriod]        VARCHAR (11)   NULL,
    [BillingYear]             VARCHAR (4)    NULL,
    [WeekEndingBillingPeriod] VARCHAR (20)   NULL,
    [BillingPeriodText]       VARCHAR (9)    NULL,
    [BillingPeriod]           INT            NULL,
    [WeekEnding]              DATE           NOT NULL,
    [WeekEndingText]          VARCHAR (10)   NULL,
    CONSTRAINT [PK_DimDate] PRIMARY KEY CLUSTERED ([DateID] ASC)
);





