CREATE VIEW dbo.WrongProjectCode 
as
select TimesheetDetailSourceKey, TimesheetDetailFileName
  , per.email , P.ProjectSourceKey
   from dbo.TimesheetDetail  TD
  INNER JOIN dbo.Project P
  on td.TimesheetDetailProjectID  = p.ProjectID
  inner join dbo.Person Per
  on td.TimesheetDetailPersonID = per.PersonID
 where projectname like '%Unallocated%'

 and TD.Active = 1 
 
 GROUP BY TimesheetDetailSourceKey, TimesheetDetailFileName
  , per.email 
  , P.ProjectSourceKey