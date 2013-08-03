CREATE TABLE [dbo].[CapitecItems] (
    [ID]       INT           IDENTITY (1, 1) NOT NULL,
    [ItemName] VARCHAR (255) NOT NULL,
    CONSTRAINT [PK_CapitecItems] PRIMARY KEY CLUSTERED ([ID] ASC)
);

