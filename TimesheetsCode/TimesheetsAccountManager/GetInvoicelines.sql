USE [Timesheets20130908]
GO
CREATE PROC invInsertInvoiceLines as


INSERT INTO [dbo].[InvoiceLine]
           ([InvoiceID]
           ,[InvoiceLinePersonID]
           ,[Comments]
           ,[InvoiceLineDescription]
           ,[InvoiceLineCode]
           ,[InvoiceLineRate]
           ,[InvoiceLineQty]
           ,[InvoiceLineAmount]
           ,[InvoiceLineClientRoleID]
           ,[InvoiceLineProjectID]
           )

		   
		   
select I.InvoiceID
,InvL.TimesheetDetailPersonID
,'' as comments
,Invl.PersonName + ' working on ' + Invl.ProjectName as InvoiceLineDescription
,cast(Invl.TimesheetDetailPersonID as varchar(10))+ ' working on ' + CAST(Invl.ProjectID  as varchar(10)) as InvoiceLineCode
, bd.Rate 
, sum (Hours) as hours
,bd.Rate  *  sum (Hours)  as Amount
, bd.BillingDetailClientRoleID
, invl.ProjectID
 from (		   
		   SELECT  max(dd.DateID) as DateID
		   ,max(dd.DateID) as StartDateID
,max(ddMonth.DateID) as DueDateID
,td.TimesheetDetailPersonID
, per.PersonName
,p.ProjectName
,c.ClientID
, sum(td.Hours) as Hours
,p.ProjectID
FROM dbo.TimesheetDetail TD
inner join dbo.Person Per
on TD.TimesheetDetailPersonID = Per.PersonID
inner join dbo.Project P
ON TD.TimesheetDetailProjectID = P.ProjectID
and not p.Billable = 0
inner join dbo.Client c
on P.ClientID = c.ClientID 
and p.Billable = 1

inner join cube.DimDate dd
on td.TimesheetDetailDateID = dd.DateID
and dd.DateID > 20130801

inner join cube.DimDate ddMonth
on dd.BillingPeriodText = ddMonth.BillingPeriodText
and dd.BillingYear = ddMonth.BillingYear

WHERE td.Billable = 1
GROUP BY ddMonth.BillingYear, ddMonth.BillingPeriodText
,c.ClientName
,c.ClientID
, P.AccountManagerPersonID
,c.AccountManagerPersonID
,c.ClientSourceKey
,td.TimesheetDetailPersonID
, per.PersonName
,p.ProjectName
,p.ProjectID
,COALESCE(C.InvoiceEmailAddress, P.InvoiceEmailAddress, 'sales@aphelion.bi')
 ---having  bd.BillingDetailDateID between min(dd.DateID) and max(dd.dateid)
,p.ProjectID
) InvL
inner join dbo.Invoice I
on I.InvoiceDateID = invl.DateID
and i.InvoiceClientID = invl.ClientID

inner join (SELECT [BillingDetailClientID]
      ,[BillingDetailPersonID]
	  ,Rate
	  ,BillingDetailClientRoleID
	  , ROW_NUMBER() over ( partition by  [BillingDetailClientID]
      ,[BillingDetailPersonID]
	  order by billingdetaildateid desc)  as rn
      FROM [dbo].[BillingDetail]
	  )
 bd
on InvL.ClientID = bd.BillingDetailClientID
and InvL.TimesheetDetailPersonID = bd.BillingDetailPersonID
and bd.rn = 1

where not exists (select 1 from dbo.InvoiceLine IL
where IL.InvoiceID = i.InvoiceID
and IL.InvoiceLinePersonID = InvL.TimesheetDetailPersonID
and il.InvoiceLineProjectID = invl.ProjectID
)

GROUP by I.InvoiceID
,InvL.TimesheetDetailPersonID
,Invl.PersonName + ' working on ' + Invl.ProjectName 
,cast(Invl.TimesheetDetailPersonID as varchar(10)) + ' working on ' + CAST(Invl.ProjectID  as varchar(10)) 

, bd.Rate 
, bd.BillingDetailClientRoleID
, invl.ProjectID
 