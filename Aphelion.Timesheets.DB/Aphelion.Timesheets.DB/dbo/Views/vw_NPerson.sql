CREATE VIEW dbo.vw_NPerson
as
select TOP 2147483648  CAST(P.PersonID as varchar(10)) + '.' + RIGHT('00' + CAST(Number as varchar(2)) , 2) as PNID, PersonName, Number from [dbo].[vw_ResourcePlan] vw
INNER JOIN dbo.Person P
ON vw.PersonID = P.PersonID
GROUP BY P.PersonID, PersonName, Number
ORDER BY PersonName, Number