use [Timesheets]
go
  

update dbo.TimesheetDetail
set TimesheetTypeOfWorkID = mint 
FROM 
dbo.TimesheetDetail 
JOIN
(
select TypeOfWorkSourceKey, max(typeofworkid) maxT, min(typeofworkID) minT from [dbo].[TypeOfWork]
group by TypeOfWorkSourceKey
having count(*) > 1 
) src on TimesheetDetail.TimesheetTypeOfWorkID = src.maxT


delete from [dbo].[TypeOfWork]
  where not exists (select 1 from TimesheetDetail  td
  where td.TimesheetTypeOfWorkID = TypeOfWorkID)

