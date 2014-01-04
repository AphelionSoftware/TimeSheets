with cte as (select 
max(timesheetdetailid) timesheetdetailid, 
[TimesheetID] ,
	[TimesheetDetailDateID] ,
	[TimesheetDetailFileName] ,
	[TimesheetDetailPersonID] ,
	[TimesheetDetailProjectID] ,
	minT ,
	
	[Comments] ,
	[Hours] FROM 
dbo.TimesheetDetail 
JOIN
(
select TypeOfWorkSourceKey, max(typeofworkid) maxT, min(typeofworkID) minT from [dbo].[TypeOfWork]
group by TypeOfWorkSourceKey
having count(*) > 1 
) src on TimesheetDetail.TimesheetTypeOfWorkID = src.maxT
where minT <>  maxT 
group by [TimesheetID] ,
	[TimesheetDetailDateID] ,
	[TimesheetDetailFileName] ,
	[TimesheetDetailPersonID] ,
	[TimesheetDetailProjectID] ,
	minT ,
	[Comments] ,
	[Hours]
	)

	delete TimesheetDetail from cte 
	join TimesheetDetail td
	on cte.TimesheetDetailDateID = td.TimesheetDetailDateID
	and cte.TimesheetDetailFileName = td.TimesheetDetailFileName
	and cte.TimesheetDetailPersonID = td.TimesheetDetailPersonID
	and cte.TimesheetDetailProjectID = td.TimesheetDetailProjectID
	and cte.Comments= td.Comments
	and cte.Hours = td.Hours
	where cte.timesheetdetailid <> td.TimesheetDetailID
