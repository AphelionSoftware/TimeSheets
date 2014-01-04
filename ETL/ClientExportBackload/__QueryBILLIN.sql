select count(*) from  dbo.BillingImports_Import
select sum(cast([hours] as decimal(18,2))) value, Count(*) as Cnmt
 from 
 (select client, project, BillingStatusName, hours, comments, TimesheetDetaildateid, TImesheetDetailSourceKey from
 dbo.BillingImports_Import
 GROUP BY client, project, BillingStatusName, hours, comments, TimesheetDetaildateid, TImesheetDetailSourceKey
 ) BII
--122 total


;with cte as (select 
P.ProjectID
,BS.BillingStatusID
,TOW.TypeOfWorkID
,CAST([hours] as decimal(18,2)) as Hrs
,cast(Comments as varchar(255)) as Comments
, cast(BII.TimesheetDetailDateID as int) TimesheetDetailDateID 
, TImesheetDetailSourceKey
 from dbo.BillingImports_Import BII
inner join dbo.project  P
on BII.Project = P.ProjectSourceKey
inner join BillingStatus BS 
on BII.BillingStatusName = BS.BillingStatusSourceKey 
inner join TypeOfWork TOW
ON BII.TypeOfWorkName = TOW.TypeOfWorkName
GROUP BY
P.ProjectID
, BS.BillingStatusID
, TOW.TypeOfWorkID
, hours
, comments
, TimesheetDetailDateID
, TImesheetDetailSourceKey
)


INSERT INTO [dbo].[TimesheetDetail]
           ([TimesheetDetailSourceKey]
           ,[TimesheetDetailName]
           ,[TimesheetDetailCode]
           ,[TimesheetDetailFileName]
           ,[TimesheetDetailDateID]
           ,[TimesheetDetailPersonID]
           ,[TimesheetDetailProjectID]
           ,[Hours]
           ,[TimesheetID]
           ,[TimesheetTypeOfWorkID]
           ,[Comments]
           ,[Billable]
           )


select cte.TImesheetDetailSourceKey
,'GFIX2' Name
,'GFIX2' Code
,'GFIX2' Filename
,cte.TimesheetDetailDateID
,93 PersonID
,cte.ProjectID
,cte.hrs
,(select min(timesheetid) from dbo.Timesheet where TimesheetPersonID = 93)
, cte.TypeOfWorkID
,cte.Comments
,1
 from cte
left outer join dbo.TimesheetDetail td
on td.Hours = cte.Hrs
and td.Comments = cte.Comments
and cte.ProjectID = td.TimesheetDetailProjectID
and cte.TypeOfWorkID = td.TimesheetTypeOfWorkID
and cte.TimesheetDetailDateID = td.TimesheetDetailDateID
where td.TimesheetDetailID is null
and cte.TimesheetDetailDateID > 20130930