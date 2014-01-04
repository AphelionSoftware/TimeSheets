select sum(cast([hours] as decimal(18,2))) value, Count(*) as Cnmt
 from dbo.ClientExports_Import CEI
--122 total

select 
CEI.*
, P.ProjectID
,BS.BillingStatusID
,TOW.TypeOfWorkID
 from dbo.ClientExports_Import CEI
inner join dbo.project  P
on CEI.ProjectSourceKey = P.ProjectSourceKey
inner join BillingStatus BS 
on CEI.BillingStatusName = BS.BillingStatusSourceKey 
inner join TypeOfWork TOW
ON CEI.TypeOfWorkName = TOW.TypeOfWorkName

