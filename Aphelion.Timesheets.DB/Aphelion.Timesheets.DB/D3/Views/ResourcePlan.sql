
CREATE VIEW D3.ResourcePlan

as

SELECT 
R.[ResourceDate] As [Date],
P.PersonName Name, 
C.ClientName As Client
FROM [dbo].[ResourcePlanByDay] R
INNER JOIN dbo.Person as P
ON R.[ResourcePlanByDayPersonID] = P.PersonID
INNER JOIN dbo.Project Proj
ON R.[ResourcePlanByDayProjectID] = Proj.ProjectID
INNER JOIN dbo.Client C
ON Proj.ClientID = C.ClientID