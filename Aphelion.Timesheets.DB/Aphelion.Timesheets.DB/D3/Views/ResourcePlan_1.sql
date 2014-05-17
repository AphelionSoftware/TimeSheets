



CREATE VIEW [D3].[ResourcePlan]

as

SELECT TOP 2147483647 
R.[ResourceDate] As [Date],
P.PersonName Name, 
C.ClientName As Client,
Proj.ProjectName
, R.ResourcePlanByDayComments Comments
FROM [dbo].[ResourcePlanByDay] R
INNER JOIN dbo.Person as P
ON R.[ResourcePlanByDayPersonID] = P.PersonID
INNER JOIN dbo.Project Proj
ON R.[ResourcePlanByDayProjectID] = Proj.ProjectID
INNER JOIN dbo.Client C
ON Proj.ClientID = C.ClientID
ORDER BY P.PersonName, R.ResourceDate