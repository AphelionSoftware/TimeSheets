
CREATE PROC [dbo].[InsertResourcing]
(@Comments varchar(255)
, @StartDate Date
, @EndDate Date
, @Blocks int
, @PersonID int
, @ProjectID int
) 
as
SET NOCOUNT ON;
INSERT INTO [dbo].[ResourcePlan]
           ([ResourcePlanComments]
           ,[WeekEndingDate]
           ,[Blocks]
           ,[ResourcePlanPersonID]
           ,[ResourcePlanProjectID])

SELECT @Comments as comments
	,WeekEnding
	,@blocks 
	,@PersonID
	,@ProjectID
from (select
 distinct 
 CAST(DATEADD(DD, column_id * 7,/*Gets the future sundays*/
 DATEADD(DD, -6 - DATEPART(DW, getdate()), getdate()) /*Gets the previous sunday*/
 ) as date) WeekEnding
 , column_id
  from sys.all_columns
 where column_id <= 52 /*For the next 12 months*/
) weeks
where weeks.weekending BETWEEN @StartDate and @EndDate