


CREATE view [dbo].[ProjectsOverCap]
as
SELECT 'Not supported on Azure' as ErrorMessage
/*

select  
CAST("[Project].[ID].[Project ID].[member_caption]" as varchar(255)) As ProjectID
,CAST("[Project].[Account Manager].[Account Manager].[MEMBER_CAPTION]" as varchar(255)) as AccountManager
,CAST("[Measures].[Cap]" as varchar(255)) as Cap,
CAST("[Measures].[Cap Contribution]" as varchar(255)) As CapContribution,
CAST("[Measures].[Difference]" as varchar(255)) As Delta
 from openrowset(
'MSOLAP',
'DATASOURCE=.\SQL2012;Initial Catalog=TimesheetsCube',

' WITH member Measures.Cap 
as
CASE WHEN [Measures].[Cap Contribution Amount] > [Measures].[Project Cap]
AND [Measures].[Project Cap] > 0
THEN [Measures].[Project Cap] ELSE NULL
END 

member Measures.[Cap Contribution]
as
CASE WHEN [Measures].[Cap Contribution Amount] > [Measures].[Project Cap]
AND [Measures].[Project Cap] > 0
THEN [Measures].[Cap Contribution Amount] ELSE 
NULL
END 


member Measures.Difference
as
CASE WHEN [Measures].[Cap Contribution Amount] > [Measures].[Project Cap]
AND [Measures].[Project Cap] > 0
THEN [Measures].[Cap Contribution Amount] - [Measures].[Project Cap] ELSE 
NULL
END 

select
 {[Measures].[Cap], [Measures].[Cap Contribution], Measures.Difference}
on 0
, 
DESCENDANTS([Project].[ID].members, [Project].[ID].[Project ID])
* [Project].[Account Manager].[All].Children
 on 1

from [Timesheets]


')
 
 WHERE "[Measures].[Cap Contribution]" is not null
GROUP BY CAST("[Project].[ID].[Project ID].[member_caption]" as varchar(255)) 
,CAST("[Project].[Account Manager].[Account Manager].[MEMBER_CAPTION]" as varchar(255)) 
,CAST("[Measures].[Cap]" as varchar(255)) 
,CAST("[Measures].[Cap Contribution]" as varchar(255)) 
,CAST("[Measures].[Difference]" as varchar(255)) 
 

 */