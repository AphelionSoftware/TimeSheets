CREATE VIEW dbo.vw_ResourcePlan
as
SELECT TOP 2147483648 cast(WeekEnding as date) WeekEnding
	,ResourcePlanComments
	, P.PersonID 
	, Number
	, ColorScale = CASE WHEN PR.ProjectID IS NULL THEN NULL
	WHEN PR.ProjectID < 0 THEN PR.ProjectID
		ELSE 
			DENSE_RANK() over (order by C.ClientCode, PR.ProjectCode) 
			END 
	,  PR.ProjectID ProjectID
from 
dbo.Person P
join (select distinct column_id Number from sys.all_columns
where column_id <= 5
) Numbers
on Numbers.Number <= 5
JOIN (select
 distinct 
 CAST(DATEADD(DD, column_id * 7,/*Gets the future sundays*/
 DATEADD(DD, -6 - DATEPART(DW, getdate()), getdate()) /*Gets the previous sunday*/
 ) as date) WeekEnding
 , column_id
  from sys.all_columns
 where column_id <= 52 /*For the next 12 months*/
) weeks
on column_id <= 52

LEFT join (dbo.ResourcePlan RP
join dbo.Project PR
ON RP.ResourcePlanProjectID = PR.ProjectID
and PR.Active = 1
join dbo.Client C
on PR.ClientID = C.ClientID
and C.Active = 1
) on p.PersonID = RP.ResourcePlanPersonID
and  Rp.Blocks >= Numbers.Number
and rp.WeekEndingDate =weeks.WeekEnding
Where P.Active = 1




ORDER BY P.PersonName,WeekEnding,  Number