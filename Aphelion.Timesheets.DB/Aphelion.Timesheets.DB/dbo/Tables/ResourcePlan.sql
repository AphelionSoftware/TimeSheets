CREATE TABLE [dbo].[ResourcePlan] (
    [ResourcePlanID]        INT            IDENTITY (1, 1) NOT NULL,
    [ResourcePlanComments]  NVARCHAR (255) NOT NULL,
    [WeekEndingDate]        DATETIME       NOT NULL,
    [Blocks]                INT            NOT NULL,
    [sys_CreatedOn]         DATETIME       DEFAULT (getdate()) NOT NULL,
    [sys_CreatedBy]         NVARCHAR (255) DEFAULT ('Unknown') NOT NULL,
    [sys_ModifiedOn]        DATETIME       DEFAULT (getdate()) NOT NULL,
    [sys_ModifiedBy]        NVARCHAR (255) DEFAULT ('Unknown') NOT NULL,
    [ResourcePlanPersonID]  INT            NOT NULL,
    [ResourcePlanProjectID] INT            NOT NULL,
    PRIMARY KEY CLUSTERED ([ResourcePlanID] ASC),
    CONSTRAINT [FK_ResourcePlan_Person] FOREIGN KEY ([ResourcePlanPersonID]) REFERENCES [dbo].[Person] ([PersonID]),
    CONSTRAINT [FK_ResourcePlan_Project] FOREIGN KEY ([ResourcePlanProjectID]) REFERENCES [dbo].[Project] ([ProjectID])
);

