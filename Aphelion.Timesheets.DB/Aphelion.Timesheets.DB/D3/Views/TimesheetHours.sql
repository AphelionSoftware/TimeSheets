

CREATE VIEW D3.TimesheetHours
AS

select Convert(date,Convert(char(10),TD.TimesheetDetailDateID), 111) as c_Date
, P.PersonName as Name
, SUM([Hours]) As Value
from dbo.TimesheetDetail TD
INNER JOIN dbo.Person P
ON TD.TimesheetDetailPersonID = P.PersonID
GROUP BY Convert(date,Convert(char(10),TD.TimesheetDetailDateID), 111)
, P.PersonName