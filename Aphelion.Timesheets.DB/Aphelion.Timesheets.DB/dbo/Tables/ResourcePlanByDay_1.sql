CREATE TABLE [dbo].[ResourcePlanByDay] (
    [ResourcePlanByDayID]        INT            IDENTITY (1, 1) NOT NULL,
    [ResourcePlanByDayComments]  NVARCHAR (255) NOT NULL,
    [ResourceDate]               DATETIME       NOT NULL,
    [sys_CreatedOn]              DATETIME       DEFAULT (getdate()) NOT NULL,
    [sys_CreatedBy]              NVARCHAR (255) DEFAULT ('Unknown') NOT NULL,
    [sys_ModifiedOn]             DATETIME       DEFAULT (getdate()) NOT NULL,
    [sys_ModifiedBy]             NVARCHAR (255) DEFAULT ('Unknown') NOT NULL,
    [ResourcePlanByDayPersonID]  INT            NOT NULL,
    [ResourcePlanByDayProjectID] INT            NOT NULL,
    PRIMARY KEY CLUSTERED ([ResourcePlanByDayID] ASC),
    CONSTRAINT [FK_ResourcePlanByDay_Person] FOREIGN KEY ([ResourcePlanByDayPersonID]) REFERENCES [dbo].[Person] ([PersonID]),
    CONSTRAINT [FK_ResourcePlanByDay_Project] FOREIGN KEY ([ResourcePlanByDayProjectID]) REFERENCES [dbo].[Project] ([ProjectID])
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [IX_ResourcePlanByDayUnique]
    ON [dbo].[ResourcePlanByDay]([ResourceDate] DESC, [ResourcePlanByDayPersonID] ASC, [ResourcePlanByDayProjectID] ASC);

