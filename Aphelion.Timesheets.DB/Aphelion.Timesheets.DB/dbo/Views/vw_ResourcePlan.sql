

CREATE VIEW [dbo].[vw_ResourcePlan]
as
SELECT TOP 2147483648
			
 cast(WeekEnding as date) WeekEnding
	,ResourcePlanComments
	, CAST(P.PersonID as varchar(10)) + '.' + RIGHT('00' + CAST(
	
	Number + ISNULL(  (
			SELECT MAX(Blocks) 
				FROM dbo.ResourcePlan RPInner
					WHERE RPInner.WeekEndingDate = Weeks.WeekEnding
						AND RPInner.ResourcePlanPersonID = P.PersonID
						and RPInner.ResourcePlanID > RP.ResourcePlanID 
						), 0
						) 
	
	as varchar(2)) , 2) as PNID
	, P.PersonID 
	, Number  + ISNULL(  (
			SELECT MAX(Blocks) 
				FROM dbo.ResourcePlan RPInner
					WHERE RPInner.WeekEndingDate = Weeks.WeekEnding
						AND RPInner.ResourcePlanPersonID = P.PersonID
						and RPInner.ResourcePlanID > RP.ResourcePlanID 
						
						
						) , 0
						) 
						AS Number
	,  PR.ProjectName
	 
	, ColorScale = CASE WHEN PR.ProjectID IS NULL THEN 0
	
	WHEN PR.ProjectID < 0 THEN -1-- PR.ProjectID
		ELSE 
			DENSE_RANK() over (partition by
			CASE WHEN PR.ProjectID IS NULL THEN 0
			WHEN PR.ProjectID < 0 THEN 0
			ELSE 1 END
			order by 
			C.ClientCode, PR.ProjectCode) 
			END 
	,  PR.ProjectID ProjectID
	, P.PersonName
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

 left join 
	(dbo.ResourcePlan RP
		join dbo.Project PR
		ON RP.ResourcePlanProjectID = PR.ProjectID
		and PR.Active = 1
		join dbo.Client C
		on PR.ClientID = C.ClientID
		and C.Active = 1
	) 
	on p.PersonID = RP.ResourcePlanPersonID
and  Rp.Blocks >= Numbers.Number
and rp.WeekEndingDate =weeks.WeekEnding
Where P.Active = 1



ORDER BY P.PersonName,WeekEnding,  Number, ProjectName desc