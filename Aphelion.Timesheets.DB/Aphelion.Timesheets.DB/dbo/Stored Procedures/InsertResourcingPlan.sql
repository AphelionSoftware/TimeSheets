



CREATE PROC [dbo].[InsertResourcingPlan]
(
  @PersonID int
, @ProjectID int
, @StartDate Date
, @EndDate Date
, @Monday bit
, @Tuesday bit
, @Wednesday bit
, @Thursday bit
, @Friday bit

) 
as
SET NOCOUNT ON

UPDATE [dbo].[ResourcePlanByDay]
           SET [ResourcePlanByDayComments]
		   =  'Automatically inserted in range ' + convert(varchar(10),@Startdate) + ' to ' + convert(varchar(10),@Enddate) 
	       ,[ResourcePlanByDayProjectID] =@ProjectID
		where ResourceDate BETWEEN @StartDate and @EndDate
		AND ResourcePlanByDayPersonID = @PersonID


;with dateCTE as (
select
 dateid, [date] from dbo.dimdate

 where date >= dateadd(year, -1, getdate())
 and date <= dateadd(year, 1, getdate())
 and (
  (@Monday = 1 and [DayOfWeek] = 'Monday')
  Or
  (@tuesday = 1 and [DayOfWeek] = 'Tuesday')
  Or
  (@Wednesday = 1 and [DayOfWeek] = 'Wednesday')
  Or
  (@Thursday = 1  and [DayOfWeek] = 'Thursday')
  Or
  (@Friday = 1    and [DayOfWeek] = 'Friday')
  )
  )
  
INSERT INTO [dbo].[ResourcePlanByDay]
           ([ResourcePlanByDayComments]
           ,[ResourceDate]
           ,[ResourcePlanByDayPersonID]
           ,[ResourcePlanByDayProjectID])
		   
SELECT 'Automatically inserted in range ' + convert(varchar(10),@Startdate) + ' to ' + convert(varchar(10),@Enddate)  as comments
	,[Date]
	,@PersonID
	,@ProjectID
from dateCTE 
where dateCTE.Date BETWEEN @StartDate and @EndDate
AND NOT EXISTS 
(SELECT 1 FROM [dbo].[ResourcePlanByDay]
	WHERE  [ResourceDate] = dateCTE.[Date]
          AND [ResourcePlanByDayPersonID] = @PersonID
          AND [ResourcePlanByDayProjectID] = @ProjectID)