



CREATE VIEW [dbo].[OutstandingTimesheets]

as 

select P.Email, TimesheetSourceKey as TimesheetName
,'Your timesheet titled "' + TimesheetSourceKey + '.xlsx " has been captured with the wrong date. ' as EmailSubject
,'Wrong Date' as Fault

 from dbo.Timesheet  T

inner join cube.DimPerson P
on P.PersonID = (SELECT TOP 1 TimesheetdetailPersonID FROM dbo.TimesheetDetail TD where TD.TimesheetID = T.TimesheetID and TD.Active = 1)
and p.Email is not null
and P.StartDate <= getdate()
LEFT OUTER JOIN 
(SELECT REPLACE(RIGHT(WeekEndingBillingPeriod,10),'/','') as WeekEndingBillingPeriod, DimDate.DateID FROM cube.DimDate where dateid >20120901  ) WeekEnding
ON substring(T.TimesheetSourceKey, charindex('_', TimesheetSourceKey) + 1,8) = WeekEnding.WeekEndingBillingPeriod 
WHERE DateID IS NULL
and ISNUMERIC(substring(TimesheetSourceKey, charindex('_', TimesheetSourceKey) + 1,8)) = 1
and cast(substring(TimesheetSourceKey, charindex('_', TimesheetSourceKey) + 1,8) as int)  > 20120901
and cast(substring(TimesheetSourceKey, charindex('_', TimesheetSourceKey) + 1,8) as int)  >= P.DimStartDateID 
and T.Active = 1

UNION ALL
SELECT * FROM (

select TOP 10000000 P.Email, REPLACE(REPLACE(P.PersonName, ' ',''),'-','') + '_' + WeekEndingBillingPeriod + '_Timesheets'  as TimesheetName
,'Your timesheet titled "' + REPLACE(REPLACE(P.PersonName, ' ',''),'-','') + '_' + WeekEndingBillingPeriod + '_Timesheets.xlsx" is missing for the period ' + WeekEndingBillingPeriod As EmailSubject
,'Missing' as Fault
from cube.DimPerson P
CROSS JOIN (SELECT REPLACE(RIGHT(WeekEndingBillingPeriod,10),'/','') as WeekEndingBillingPeriod FROM cube.DimDate where dateid >20120901  
and cast(RIGHT(WeekEndingBillingPeriod,10) as date)  < (DATEADD(d,-1,getdate()) )

GROUP BY /*WeekEndingBillingPeriod*/
REPLACE(RIGHT(WeekEndingBillingPeriod,10),'/','')
 ) WeekEnding
WHERE P.Email is not null
and WeekEnding.WeekEndingBillingPeriod   > P.DimStartDateID 
and not exists (select * from dbo.Timesheet T where REPLACE(REPLACE(P.PersonName, ' ',''),'-','') + '_' + WeekEndingBillingPeriod + '_Timesheets' = t.TimesheetFileName and t.Active = 1)

--and P.PersonName = 'Michael Johnson'
ORDER BY WeekEndingBillingPeriod 

) Src
