

CREATE PROC [dbo].[invInsertInvoiceLines] as


INSERT INTO [dbo].[InvoiceLine]
           ([InvoiceID]
           ,[InvoiceLinePersonID]
           ,[InvoiceLineDescription]
           ,[InvoiceLineCode]
           ,[InvoiceLineRate]
           ,[InvoiceLineQty]
           ,[InvoiceLineCalcedAmount]
           ,[InvoiceLineClientRoleID]
           ,[InvoiceLineProjectID]
           )
		   
		   
		   
select  I.InvoiceID
,InvL.TimesheetDetailPersonID
,Invl.PersonName + ' working on ' + Invl.ProjectName + ' in ' + invl.BillingPeriodText as InvoiceLineDescription
,cast(Invl.TimesheetDetailPersonID as varchar(10))+ ' working on ' + CAST(Invl.ProjectID  as varchar(10)) as InvoiceLineCode
, bd.Rate 
, sum (tdOuter.Hours) as hours
,bd.Rate  *  sum (CASE WHEN tdOuter.Billable = 1 THEN tdOuter.Hours ELSE 0 END)  as CalcedAmount
, bd.BillingDetailClientRoleID
, invl.ProjectID
 from (		   
	SELECT  
		max(dd.DateID) as DateID
		,min(ddMonth.DateID) as StartDateID
		,max(ddMonth.DateID) as DueDateID
		
		,td.TimesheetDetailPersonID
		, per.PersonName
		,p.ProjectName
		,c.ClientID
		--, sum(td.Hours) as Hours
		,p.ProjectID
		,ddMonth.BillingPeriodText
		,ddMonth.BillingYear
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
		--and ddMonth.Date = cast(getdate() as date)
		

		--WHERE td.Billable = 1
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
on i.InvoiceDueDateID = invl.DueDateID
and i.InvoiceClientID = invl.ClientID

inner join TimesheetDetail TDOuter
on TDOuter.TimesheetDetailDateID between INVL.StartDateID and INVL.DueDateID 
and INVL.ProjectID = TDOuter.TimesheetDetailProjectID
and INVL.TimesheetDetailPersonID = TDOuter.TimesheetDetailPersonID

and TDOuter.Billable > 0


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

--and tdouter.TimesheetDetailPersonID = 74

GROUP by I.InvoiceID
,InvL.TimesheetDetailPersonID
,Invl.PersonName + ' working on ' + Invl.ProjectName + ' in ' + invl.BillingPeriodText
,cast(Invl.TimesheetDetailPersonID as varchar(10)) + ' working on ' + CAST(Invl.ProjectID  as varchar(10)) 

, bd.Rate 
, bd.BillingDetailClientRoleID
, invl.ProjectID
 
 order by 4

 ------------------------------------------------
 --Updating calculated amounts
 ------------------------------------------------

 	UPDATE dbo.InvoiceLine
set InvoiceLineQty = src.hours
,InvoiceLineRate = src.Rate
,InvoiceLineCalcedAmount = src.Amount

/*select InvoiceLineQty = src.hours
,InvoiceLineRate = src.Rate
,InvoiceLineCalcedAmount = src.Amount
,*
*/ 
 --
 from dbo.InvoiceLine IL
 
 inner join dbo.Invoice i
 on il.InvoiceID = i.InvoiceID
 and i.InvoiceStatusID = 0
inner join dbo.DimDate dd 
	on i.InvoiceDateID = dd.DateID
	inner join dbo.DimDate ddMonth
	on dd.DateID = ddMonth.DateID
	--and ddMonth.Date = cast(getdate() as date) 
 INNER JOIN ( 
--ess
	select  I.InvoiceID
	,InvL.TimesheetDetailPersonID
	,Invl.PersonName + ' working on ' + Invl.ProjectName + ' in ' + invl.BillingPeriodText as InvoiceLineDescription
	,cast(Invl.TimesheetDetailPersonID as varchar(10))+ ' working on ' + CAST(Invl.ProjectID  as varchar(10)) as InvoiceLineCode
	, bd.Rate 
	, sum (tdOuter.Hours ) as hours
	,bd.Rate  *  sum (CASE WHEN tdOuter.Billable = 1 THEN tdOuter.Hours ELSE 0 END)  as Amount
	, bd.BillingDetailClientRoleID
	, invl.ProjectID
	, tdOuter.InvoiceLineID
	 from (		   
		SELECT  
			max(dd.DateID) as DateID
			,min(ddMonth.DateID) as StartDateID
			,max(ddMonth.DateID) as DueDateID
		
			,td.TimesheetDetailPersonID
			, per.PersonName
			,p.ProjectName
			,c.ClientID
			--, sum(td.Hours) as Hours
			,p.ProjectID
			,ddMonth.BillingPeriodText
			,ddMonth.BillingYear
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
			--and ddMonth.Date = cast(getdate() as date)
		

			--WHERE td.Billable = 1
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
	 join dbo.Invoice I
	on i.InvoiceDueDateID = invl.DueDateID
	and i.InvoiceClientID = invl.ClientID

	inner join TimesheetDetail TDOuter
	on TDOuter.TimesheetDetailDateID between INVL.StartDateID and INVL.DueDateID 
	and INVL.ProjectID = TDOuter.TimesheetDetailProjectID
	and INVL.TimesheetDetailPersonID = TDOuter.TimesheetDetailPersonID
	/*and tdouter.billable = 1*/
	inner join 
			(SELECT [BillingDetailClientID]
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

	GROUP by I.InvoiceID
	,InvL.TimesheetDetailPersonID
	,Invl.PersonName + ' working on ' + Invl.ProjectName + ' in ' + invl.BillingPeriodText
	,cast(Invl.TimesheetDetailPersonID as varchar(10)) + ' working on ' + CAST(Invl.ProjectID  as varchar(10)) 

	, bd.Rate 
	, bd.BillingDetailClientRoleID
	, invl.ProjectID
	, tdOuter.InvoiceLineID
 ) src 
 on IL.InvoiceID = src.InvoiceID
 and il.InvoiceLineProjectID = src.ProjectID
 and il.InvoiceLinePersonID = src.TimesheetDetailPersonID
 and (IL.invoicelineid = src.invoicelineid
	or src.invoicelineid is null)
	
	
	
------------------------------
-- Backtrack changes to Timesheet detail for tracking
------------------------------

--select td.TimesheetDetailID, il.InvoiceLineID,* 

		update dbo.TimesheetDetail
set InvoiceLineID = il.InvoiceLineID
--select il.InvoiceLineID,*
from 
TimesheetDetail
JOIN
(
select TD.TimesheetDetailID,ddMonth.BillingYear, ddMonth.BillingPeriodText
			,td.TimesheetDetailPersonID
			,p.ProjectID
			,c.ClientID
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
			--and ddMonth.Date = cast(getdate() as date)
		

			WHERE td.Billable = 1
			and td.InvoiceLineID is null
			) TD
			ON TimesheetDetail.TimesheetDetailID = td.TimesheetDetailID

inner join CUBE.DimDate ddMonthOuter
on td.BillingYear = ddMonthOuter.BillingYear
and td.BillingPeriodText = ddMonthOuter.BillingPeriodText
inner join dbo.Invoice I
on td.ClientID = i.InvoiceClientID
and ddMonthoUTER.DateID = i.InvoiceDueDateID
inner join dbo.InvoiceLine IL
on I.InvoiceID = IL.InvoiceID 
and td.TimesheetDetailPersonID = il.InvoiceLinePersonID
and td.ProjectID = il.InvoiceLineProjectID



GO


