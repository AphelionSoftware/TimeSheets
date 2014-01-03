CREATE PROC invInsertCommission
as 
INSERT INTO [dbo].[Commission]
           ([InvoiceID]
           ,[CommissionStatusID]
           ,[CommissionPersonID]
           ,[CommissionDescription]
           ,[CommissionAmount]
           )

select 
	I.InvoiceID
	,(SELECT CommissionStatusID from dbo.CommissionStatus WHERE CommissionStatusCode = 'Due')
	,i.InvoiceAMPersonID
	, 'Commission for ' + P.ProjectName + ' for invoice due ' + CAST(I.InvoiceDueDateID as char(8)) + 
	' paid on ' + CAST(I.InvoicePaidDateID as char(8))
,SUM((P.CommPercent /100) * il.InvoiceLineAmount) CommAmount

 from 
dbo.Project P
inner join
dbo.InvoiceLine IL
on P.ProjectID = Il.InvoiceLineProjectID
inner join dbo.Invoice I
on IL.InvoiceID = i.InvoiceID

where CommPercent > 0

and not exists(select 1
from dbo.commission where invoiceid = i.invoiceid)
and i.InvoicePaidDateID is not null
group by 	I.InvoiceID
	,i.InvoiceAMPersonID
	, 'Commission for ' + P.ProjectName + ' for invoice due ' + CAST(I.InvoiceDueDateID as char(8)) + 
	' paid on ' + CAST(I.InvoicePaidDateID as char(8))