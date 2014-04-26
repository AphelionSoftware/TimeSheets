

CREATE VIEW [D3].[TimesheetHours]
AS

select 
TOP 2147483647 

ISNULL(Convert(date,Convert(char(10),TD.TimesheetDetailDateID), 111), '2000/01/01') as c_Date
, P.PersonName as Name
, SUM([Hours]) As Value
from dbo.TimesheetDetail TD
INNER JOIN dbo.Person P
ON TD.TimesheetDetailPersonID = P.PersonID
WHERE P.Active = 1
AND ROUND(td.TimesheetDetailDateID/10000,0) = year(getdate())
GROUP BY TD.TimesheetDetailDateID
, P.PersonName
ORDER BY P.PersonName , td.TimesheetDetailDateID