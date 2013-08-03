

CREATE VIEW [dbo].[UnallocatedTimesheets]
as

select
bs.BillingStatusName
,c.ClientName
,p.ProjectName
 
, TD.[TimesheetDetailID]
      ,TD.[TimesheetDetailSourceKey]
      ,TD.[LoadDate]
      ,TD.[Active]
      ,TD.[TimesheetDetailFileName]
      ,TD.[TimesheetDetailDateID]
      ,TD.[LoadDateID]
      ,TD.[Hours]
      ,TD.[TimesheetID]
      
      ,TD.[Comments]
      ,TD.[ClientComments]
      ,TD.[AMComments]
      ,TD.[Exclude]
      
	  ,TOW.TypeOfWorkName
	  , ISNULL(AMPerson.PersonName, 'Mark Stacey') AccountManager
	  , ISNULL(AMPerson.Email, 'mark.stacey@aphelion.bi') AMEmail
	  ,ddMonth.BillingPeriodText
FROM dbo.TimesheetDetail TD

inner join dbo.Project P
ON TD.TimesheetDetailProjectID = P.ProjectID
and not p.Billable = 0
inner join dbo.Client c
on P.ClientID = c.ClientID
left join dbo.Person AMPerson
on p.AccountManagerPersonID = amperson.PersonID

inner join dbo.TypeOfWork TOW 
on td.TimesheetTypeOfWorkID  = TOW.TypeOfWorkID

inner join BillingStatus BS
on ISNULL(td.Billable,-1) = BS.BillingStatusID

inner join cube.DimDate dd
on td.TimesheetDetailDateID = dd.DateID

inner join cube.DimDate ddMonth
--on dd.BillingPeriodText = ddMonth.BillingPeriodText
on dd.BillingYear = ddMonth.BillingYear
and ddMonth.Date = cast(getdate() as date)
where billingstatusname = 'Unallocated'
OR P.ProjectID IN (SELECT CAST (ProjectID as int) ProjectID from ProjectsOverCap)