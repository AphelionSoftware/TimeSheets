﻿function onBeforeCellEdit(n,t){switch(t.cell.column().key){case"BillingStatusID":createCombo(t),t.handled=!0}}function onAfterCellEdit(n,t){switch(t.cell.column().key){case"BillingStatusID":t.cell.container().find("input").wijcombobox("destroy")}}function createCombo(n){var t=[],i=myapp.activeDataWorkspace.TimesheetsData.BillingStatusSet.load().then(function(i){for(var r=0;r<i.results.length;r++)t.push({label:i.results[r].details._.BillingStatusName,value:i.results[r].details._.BillingStatusID});$("<input id='tagsinput'/>").width("100%").val(n.cell.value()).appendTo(n.cell.container().empty()).wijcombobox({data:$.map($.extend(!0,[],t),function(t){return t.value===n.cell.value()&&(t.selected=!0),t}),isEditable:!1}).focus(),$("#tagsinput").bind("wijcomboboxselect",function(n,t){t.label=t.value})})}window.myapp=msls.application,function(n){function c(n){r.call(this,n)}function p(n){r.call(this,n)}function l(n){r.call(this,n)}function a(n){r.call(this,n)}function e(n){r.call(this,n)}function h(n){r.call(this,n)}function v(n){r.call(this,n)}function o(n){r.call(this,n)}function k(n){r.call(this,n)}function nt(n){r.call(this,n)}function w(n){r.call(this,n)}function d(n){r.call(this,n)}function f(n){r.call(this,n)}function tt(n){r.call(this,n)}function it(n){r.call(this,n)}function b(n){r.call(this,n)}function s(n){r.call(this,n)}function y(n){r.call(this,n)}function g(n){r.call(this,n)}function rt(n){ut.call(this,n)}function st(){ft.call(this)}var r=msls.Entity,ut=msls.DataService,ft=msls.DataWorkspace,u=msls._defineEntity,et=msls._defineDataService,ot=msls._defineDataWorkspace,i=msls.DataServiceQuery,t=msls._toODataString;msls._addToNamespace("msls.application",{BillingDetail:u(c,[{name:"BillingDetailID",type:Number},{name:"BillingDetailSourceKey",type:String},{name:"LoadDate",type:Date},{name:"Rate",type:Number},{name:"LoadDateID",type:Number},{name:"Client",kind:"reference",type:l},{name:"Person",kind:"reference",type:e},{name:"sys_CreatedOn",type:Date},{name:"sys_CreatedBy",type:String},{name:"sys_ModifiedOn",type:Date},{name:"sys_ModifiedBy",type:String},{name:"ClientRole",kind:"reference",type:w},{name:"ActiveType",kind:"reference",type:f},{name:"DimDate",kind:"reference",type:a}]),BillingStatus:u(p,[{name:"BillingStatusName",type:String},{name:"BillingStatusID",type:Number},{name:"BillingStatusSourceKey",type:String},{name:"LoadDate",type:Date},{name:"BillingStatusCode",type:String},{name:"LoadDateID",type:Number},{name:"Projects",kind:"collection",elementType:h},{name:"sys_CreatedOn",type:Date},{name:"sys_CreatedBy",type:String},{name:"sys_ModifiedOn",type:Date},{name:"sys_ModifiedBy",type:String},{name:"TimesheetDetails",kind:"collection",elementType:o},{name:"ActiveType",kind:"reference",type:f},{name:"UnallocatedTimesheets",kind:"collection",elementType:b}]),Client:u(l,[{name:"ClientName",type:String},{name:"ClientID",type:Number},{name:"ClientSourceKey",type:String},{name:"LoadDate",type:Date},{name:"ClientCode",type:String},{name:"LoadDateID",type:Number},{name:"BillingDetails",kind:"collection",elementType:c},{name:"Projects",kind:"collection",elementType:h},{name:"sys_CreatedOn",type:Date},{name:"sys_CreatedBy",type:String},{name:"sys_ModifiedOn",type:Date},{name:"sys_ModifiedBy",type:String},{name:"Person",kind:"reference",type:e},{name:"ActiveType",kind:"reference",type:f},{name:"InvoiceEmailAddress",type:String},{name:"Invoices",kind:"collection",elementType:s}]),DimDate:u(a,[{name:"StandardDate",type:String},{name:"DateID",type:Number},{name:"c_Date",type:Date},{name:"Day",type:Number},{name:"DaySuffix",type:String},{name:"DayOfWeek",type:String},{name:"DOWInMonth",type:Number},{name:"DayOfYear",type:Number},{name:"WeekOfYear",type:Number},{name:"WeekOfMonth",type:Number},{name:"MonthNumber",type:Number},{name:"MonthName",type:String},{name:"Quarter",type:Number},{name:"QuarterName",type:String},{name:"YearName",type:String},{name:"YearNumber",type:Number},{name:"IsPublicHoliday",type:Boolean},{name:"HolidayText",type:String},{name:"DateSK",type:Number},{name:"TimesheetDetails",kind:"collection",elementType:o},{name:"sys_CreatedOn",type:Date},{name:"sys_CreatedBy",type:String},{name:"sys_ModifiedOn",type:Date},{name:"sys_ModifiedBy",type:String},{name:"Active",type:Number},{name:"Timesheets",kind:"collection",elementType:v},{name:"BillingDetails",kind:"collection",elementType:c},{name:"ContractorYear",type:Number},{name:"ContractorMonth",type:Number},{name:"ContractorPeriod",type:String},{name:"BillingYear",type:String},{name:"WeekEndingBillingPeriod",type:String},{name:"BillingPeriodText",type:String},{name:"BillingPeriod",type:Number},{name:"WeekEnding",type:Date},{name:"WeekEndingText",type:String},{name:"Invoices",kind:"collection",elementType:s},{name:"Invoices1",kind:"collection",elementType:s}]),Person:u(e,[{name:"PersonName",type:String},{name:"PersonID",type:Number},{name:"PersonSourceKey",type:String},{name:"LoadDate",type:Date},{name:"PersonCode",type:String},{name:"LoadDateID",type:Number},{name:"BillingPercentTarget",type:Number},{name:"BillingPercentMinimum",type:Number},{name:"Email",type:String},{name:"StartDate",type:Date},{name:"HourlyCost",type:Number},{name:"MonthlyCost",type:Number},{name:"IsContractor",type:Number},{name:"Billable",type:Number},{name:"BillingDetails",kind:"collection",elementType:c},{name:"Projects",kind:"collection",elementType:h},{name:"TimesheetDetails",kind:"collection",elementType:o},{name:"sys_CreatedOn",type:Date},{name:"sys_CreatedBy",type:String},{name:"sys_ModifiedOn",type:Date},{name:"sys_ModifiedBy",type:String},{name:"SystemRole",kind:"reference",type:d},{name:"ADUsername",type:String},{name:"Clients",kind:"collection",elementType:l},{name:"ActiveType",kind:"reference",type:f},{name:"SharepointUserName",type:String},{name:"Timesheets",kind:"collection",elementType:v},{name:"Invoices",kind:"collection",elementType:s},{name:"InvoiceLines",kind:"collection",elementType:y}]),Project:u(h,[{name:"ProjectID",type:Number},{name:"ProjectName",type:String},{name:"ProjectSourceKey",type:String},{name:"LoadDate",type:Date},{name:"ProjectCode",type:String},{name:"LoadDateID",type:Number},{name:"ProjectFirstPersonName",type:String},{name:"ProjectFirstFilename",type:String},{name:"ConsultingEstimate",type:Number},{name:"SoftwareEstimate",type:Number},{name:"VMEstimate",type:Number},{name:"ProjectCap",type:Number},{name:"AdminProject",type:Number},{name:"BillingStatus",kind:"reference",type:p},{name:"Client",kind:"reference",type:l},{name:"Person",kind:"reference",type:e},{name:"TimesheetDetails",kind:"collection",elementType:o},{name:"sys_CreatedOn",type:Date},{name:"sys_CreatedBy",type:String},{name:"sys_ModifiedOn",type:Date},{name:"sys_ModifiedBy",type:String},{name:"ActiveType",kind:"reference",type:f},{name:"MonthlyCap",type:Number},{name:"MonthlyCapWarning",type:Number},{name:"ProjectCapWarning",type:Number},{name:"InvoiceEmailAddress",type:String},{name:"InvoiceLines",kind:"collection",elementType:y}]),Timesheet:u(v,[{name:"TimesheetID",type:Number},{name:"TimesheetSourceKey",type:String},{name:"LoadDate",type:Date},{name:"TimesheetName",type:String},{name:"TimesheetCode",type:String},{name:"TimesheetFileName",type:String},{name:"TimesheetFromDateID",type:Number},{name:"TimesheetToDateID",type:Number},{name:"TimesheetPerson",type:String},{name:"TimesheetDate",type:String},{name:"LoadDateID",type:Number},{name:"TimesheetDetails",kind:"collection",elementType:o},{name:"OverallStatusID",type:Number},{name:"sys_CreatedOn",type:Date},{name:"sys_CreatedBy",type:String},{name:"sys_ModifiedOn",type:Date},{name:"sys_ModifiedBy",type:String},{name:"DimDate",kind:"reference",type:a},{name:"ActiveType",kind:"reference",type:f},{name:"PeriodEnding",type:Date},{name:"Person",kind:"reference",type:e},{name:"UnallocatedTimesheets",kind:"collection",elementType:b}]),TimesheetDetail:u(o,[{name:"TimesheetDetailID",type:Number},{name:"TimesheetDetailSourceKey",type:String},{name:"LoadDate",type:Date},{name:"TimesheetDetailName",type:String},{name:"TimesheetDetailCode",type:String},{name:"TimesheetDetailFileName",type:String},{name:"LoadDateID",type:Number},{name:"Hours",type:Number},{name:"Comments",type:String},{name:"ClientComments",type:String},{name:"AMComments",type:String},{name:"Exclude",type:Number},{name:"LastUpdateDate",type:Date},{name:"DimDate",kind:"reference",type:a},{name:"Person",kind:"reference",type:e},{name:"Project",kind:"reference",type:h},{name:"Timesheet",kind:"reference",type:v},{name:"TypeOfWork",kind:"reference",type:k},{name:"sys_CreatedOn",type:Date},{name:"sys_CreatedBy",type:String},{name:"sys_ModifiedOn",type:Date},{name:"sys_ModifiedBy",type:String},{name:"BillingStatus",kind:"reference",type:p},{name:"ActiveType",kind:"reference",type:f},{name:"UnallocatedTimesheets",kind:"collection",elementType:b}]),TypeOfWork:u(k,[{name:"TypeOfWorkID",type:Number},{name:"TypeOfWorkName",type:String},{name:"TypeOfWorkSourceKey",type:String},{name:"LoadDate",type:Date},{name:"TypeOfWorkCode",type:String},{name:"LoadDateID",type:Number},{name:"TimesheetDetails",kind:"collection",elementType:o},{name:"sys_CreatedOn",type:Date},{name:"sys_CreatedBy",type:String},{name:"sys_ModifiedOn",type:Date},{name:"sys_ModifiedBy",type:String},{name:"ActiveType",kind:"reference",type:f}]),RoleType:u(nt,[{name:"RoleTypeID",type:Number},{name:"RoleTypeName",type:String},{name:"RoleTypeSourceKey",type:String},{name:"LoadDate",type:Date},{name:"RoleTypeCode",type:String},{name:"LoadDateID",type:Number},{name:"sys_CreatedOn",type:Date},{name:"sys_CreatedBy",type:String},{name:"sys_ModifiedOn",type:Date},{name:"sys_ModifiedBy",type:String},{name:"ActiveType",kind:"reference",type:f}]),ClientRole:u(w,[{name:"ClientRoleName",type:String},{name:"ClientRoleID",type:Number},{name:"ClientRoleSourceKey",type:String},{name:"LoadDate",type:Date},{name:"ClientRoleCode",type:String},{name:"LoadDateID",type:Number},{name:"sys_CreatedOn",type:Date},{name:"sys_CreatedBy",type:String},{name:"sys_ModifiedOn",type:Date},{name:"sys_ModifiedBy",type:String},{name:"BillingDetails",kind:"collection",elementType:c},{name:"ActiveType",kind:"reference",type:f},{name:"InvoiceLines",kind:"collection",elementType:y}]),SystemRole:u(d,[{name:"SystemRoleID",type:Number},{name:"SystemRoleName",type:String},{name:"SystemRoleSourceKey",type:String},{name:"LoadDate",type:Date},{name:"SystemRoleCode",type:String},{name:"LoadDateID",type:Number},{name:"sys_CreatedOn",type:Date},{name:"sys_CreatedBy",type:String},{name:"sys_ModifiedOn",type:Date},{name:"sys_ModifiedBy",type:String},{name:"People",kind:"collection",elementType:e},{name:"ActiveType",kind:"reference",type:f}]),ActiveType:u(f,[{name:"ID",type:Number},{name:"Name",type:String},{name:"Code",type:String},{name:"sys_CreatedOn",type:Date},{name:"sys_CreatedBy",type:String},{name:"sys_ModifiedOn",type:Date},{name:"sys_ModifiedBy",type:String},{name:"Active",type:Number},{name:"BillingDetails",kind:"collection",elementType:c},{name:"BillingStatus",kind:"collection",elementType:p},{name:"Clients",kind:"collection",elementType:l},{name:"ClientRoles",kind:"collection",elementType:w},{name:"People",kind:"collection",elementType:e},{name:"Projects",kind:"collection",elementType:h},{name:"RoleTypes",kind:"collection",elementType:nt},{name:"SystemRoles",kind:"collection",elementType:d},{name:"Timesheets",kind:"collection",elementType:v},{name:"TimesheetDetails",kind:"collection",elementType:o},{name:"TypeOfWorks",kind:"collection",elementType:k},{name:"Invoices",kind:"collection",elementType:s},{name:"InvoiceLines",kind:"collection",elementType:y},{name:"InvoiceStatus",kind:"collection",elementType:g}]),OverbudgetTimesheet:u(tt,[{name:"BillingStatusName",type:String},{name:"ClientName",type:String},{name:"ProjectName",type:String},{name:"TimesheetDetailID",type:Number},{name:"TimesheetDetailSourceKey",type:String},{name:"LoadDate",type:Date},{name:"Active",type:Number},{name:"TimesheetDetailFileName",type:String},{name:"TimesheetDetailDateID",type:Number},{name:"LoadDateID",type:Number},{name:"Hours",type:Number},{name:"TimesheetID",type:Number},{name:"Comments",type:String},{name:"ClientComments",type:String},{name:"AMComments",type:String},{name:"Exclude",type:Number},{name:"TypeOfWorkName",type:String},{name:"AccountManager",type:String},{name:"AMEmail",type:String},{name:"BillingPeriodText",type:String}]),ProjectsOverCap:u(it,[{name:"ErrorMessage",type:String}]),UnallocatedTimesheet:u(b,[{name:"TimesheetDetailSourceKey",type:String},{name:"ClientName",type:String},{name:"ProjectName",type:String},{name:"TimesheetDetailID",type:Number},{name:"LoadDate",type:Date},{name:"Active",type:Number},{name:"TimesheetDetailFileName",type:String},{name:"TimesheetDetailDateID",type:Number},{name:"LoadDateID",type:Number},{name:"Hours",type:Number},{name:"TimesheetID",type:Number},{name:"Comments",type:String},{name:"ClientComments",type:String},{name:"AMComments",type:String},{name:"Exclude",type:Number},{name:"TypeOfWorkName",type:String},{name:"AccountManager",type:String},{name:"AMEmail",type:String},{name:"BillingPeriodText",type:String},{name:"ADUserName",type:String},{name:"SharePointUserName",type:String},{name:"BillingStatus",kind:"reference",type:p},{name:"TimesheetDetail",kind:"reference",type:o},{name:"Timesheet",kind:"reference",type:v},{name:"BillingStatusName",type:String},{name:"BillingStatusID",type:Number}]),Invoice:u(s,[{name:"InvoiceID",type:Number},{name:"InvoiceSourceKey",type:String},{name:"LoadDate",type:Date},{name:"InvoiceFileName",type:String},{name:"LoadDateID",type:Number},{name:"Comments",type:String},{name:"sys_CreatedOn",type:Date},{name:"sys_CreatedBy",type:String},{name:"sys_ModifiedOn",type:Date},{name:"sys_ModifiedBy",type:String},{name:"ActiveType",kind:"reference",type:f},{name:"Person",kind:"reference",type:e},{name:"DimDate",kind:"reference",type:a},{name:"InvoiceStatu",kind:"reference",type:g},{name:"InvoiceLines",kind:"collection",elementType:y},{name:"InvoiceEmailAddress",type:String},{name:"Client",kind:"reference",type:l},{name:"DueDate",kind:"reference",type:a}]),InvoiceLine:u(y,[{name:"InvoiceLineID",type:Number},{name:"LoadDate",type:Date},{name:"LoadDateID",type:Number},{name:"Comments",type:String},{name:"InvoiceLineDescription",type:String},{name:"InvoiceLineCode",type:String},{name:"InvoiceLineRate",type:Number},{name:"InvoiceLineQty",type:Number},{name:"sys_CreatedOn",type:Date},{name:"sys_CreatedBy",type:String},{name:"sys_ModifiedOn",type:Date},{name:"sys_ModifiedBy",type:String},{name:"ActiveType",kind:"reference",type:f},{name:"Invoice",kind:"reference",type:s},{name:"Person",kind:"reference",type:e},{name:"InvoiceLineAmount",type:Number},{name:"ClientRole",kind:"reference",type:w},{name:"Project",kind:"reference",type:h}]),InvoiceStatu:u(g,[{name:"InvoiceStatusID",type:Number},{name:"InvoiceStatusSourceKey",type:String},{name:"LoadDate",type:Date},{name:"InvoiceStatusName",type:String},{name:"InvoiceStatusCode",type:String},{name:"LoadDateID",type:Number},{name:"sys_CreatedOn",type:Date},{name:"sys_CreatedBy",type:String},{name:"sys_ModifiedOn",type:Date},{name:"sys_ModifiedBy",type:String},{name:"Invoices",kind:"collection",elementType:s},{name:"ActiveType",kind:"reference",type:f}]),TimesheetsData:et(rt,n.rootUri+"/TimesheetsData.svc",[{name:"BillingDetails",elementType:c},{name:"BillingStatusSet",elementType:p},{name:"Clients",elementType:l},{name:"DimDates",elementType:a},{name:"People",elementType:e},{name:"Projects",elementType:h},{name:"Timesheets",elementType:v},{name:"TimesheetDetails",elementType:o},{name:"TypeOfWorks",elementType:k},{name:"RoleTypes",elementType:nt},{name:"ClientRoles",elementType:w},{name:"SystemRoles",elementType:d},{name:"ActiveTypes",elementType:f},{name:"OverbudgetTimesheets",elementType:tt},{name:"ProjectsOverCaps",elementType:it},{name:"UnallocatedTimesheets",elementType:b},{name:"Invoices",elementType:s},{name:"InvoiceLines",elementType:y},{name:"InvoiceStatus",elementType:g}],[{name:"BillingDetails_SingleOrDefault",value:function(r){return new i({_entitySet:this.BillingDetails},n.rootUri+"/TimesheetsData.svc/BillingDetails(BillingDetailID="+t(r,"Int32?")+")")}},{name:"BillingStatusSet_SingleOrDefault",value:function(r){return new i({_entitySet:this.BillingStatusSet},n.rootUri+"/TimesheetsData.svc/BillingStatusSet(BillingStatusID="+t(r,"Int32?")+")")}},{name:"Clients_SingleOrDefault",value:function(r){return new i({_entitySet:this.Clients},n.rootUri+"/TimesheetsData.svc/Clients(ClientID="+t(r,"Int32?")+")")}},{name:"DimDates_SingleOrDefault",value:function(r){return new i({_entitySet:this.DimDates},n.rootUri+"/TimesheetsData.svc/DimDates(DateID="+t(r,"Int32?")+")")}},{name:"People_SingleOrDefault",value:function(r){return new i({_entitySet:this.People},n.rootUri+"/TimesheetsData.svc/People(PersonID="+t(r,"Int32?")+")")}},{name:"Projects_SingleOrDefault",value:function(r){return new i({_entitySet:this.Projects},n.rootUri+"/TimesheetsData.svc/Projects(ProjectID="+t(r,"Int32?")+")")}},{name:"Timesheets_SingleOrDefault",value:function(r){return new i({_entitySet:this.Timesheets},n.rootUri+"/TimesheetsData.svc/Timesheets(TimesheetID="+t(r,"Int32?")+")")}},{name:"TimesheetDetails_SingleOrDefault",value:function(r){return new i({_entitySet:this.TimesheetDetails},n.rootUri+"/TimesheetsData.svc/TimesheetDetails(TimesheetDetailID="+t(r,"Int32?")+")")}},{name:"TypeOfWorks_SingleOrDefault",value:function(r){return new i({_entitySet:this.TypeOfWorks},n.rootUri+"/TimesheetsData.svc/TypeOfWorks(TypeOfWorkID="+t(r,"Int32?")+")")}},{name:"RoleTypes_SingleOrDefault",value:function(r){return new i({_entitySet:this.RoleTypes},n.rootUri+"/TimesheetsData.svc/RoleTypes(RoleTypeID="+t(r,"Int32?")+")")}},{name:"ClientRoles_SingleOrDefault",value:function(r){return new i({_entitySet:this.ClientRoles},n.rootUri+"/TimesheetsData.svc/ClientRoles(ClientRoleID="+t(r,"Int32?")+")")}},{name:"SystemRoles_SingleOrDefault",value:function(r){return new i({_entitySet:this.SystemRoles},n.rootUri+"/TimesheetsData.svc/SystemRoles(SystemRoleID="+t(r,"Int32?")+")")}},{name:"TimesheetsByDate",value:function(r,u,f){return new i({_entitySet:this.Timesheets},n.rootUri+"/TimesheetsData.svc/TimesheetsByDate()",{StartDate:t(r,"DateTime?"),EndDate:t(u,"DateTime?"),TimesheetPerson:t(f,"String?")})}},{name:"ActiveTypes_SingleOrDefault",value:function(r){return new i({_entitySet:this.ActiveTypes},n.rootUri+"/TimesheetsData.svc/ActiveTypes(ID="+t(r,"Int32?")+")")}},{name:"PersonSorted",value:function(){return new i({_entitySet:this.People},n.rootUri+"/TimesheetsData.svc/PersonSorted()",{})}},{name:"BillingDate",value:function(){return new i({_entitySet:this.DimDates},n.rootUri+"/TimesheetsData.svc/BillingDate()",{})}},{name:"FilteredClient",value:function(r){return new i({_entitySet:this.Clients},n.rootUri+"/TimesheetsData.svc/FilteredClient()",{ClientName:t(r,"String?")})}},{name:"ProjectsFilter",value:function(r,u){return new i({_entitySet:this.Projects},n.rootUri+"/TimesheetsData.svc/ProjectsFilter()",{ClientName:t(r,"String?"),ProjectName:t(u,"String?")})}},{name:"ProjectsSorted",value:function(r){return new i({_entitySet:this.Projects},n.rootUri+"/TimesheetsData.svc/ProjectsSorted()",{ADUsername:t(r,"String?")})}},{name:"OverbudgetTimesheets_SingleOrDefault",value:function(r,u,f,e,o,s,h,c,l,a,v,y,p,w,b){return new i({_entitySet:this.OverbudgetTimesheets},n.rootUri+"/TimesheetsData.svc/OverbudgetTimesheets(BillingStatusName="+t(r,"String?")+",ClientName="+t(u,"String?")+",ProjectName="+t(f,"String?")+",TimesheetDetailID="+t(e,"Int32?")+",LoadDate="+t(o,"DateTime?")+",Active="+t(s,"Int32?")+",TimesheetDetailFileName="+t(h,"String?")+",TimesheetDetailDateID="+t(c,"Int32?")+",Hours="+t(l,"Decimal?")+",TimesheetID="+t(a,"Int32?")+",Comments="+t(v,"String?")+",Exclude="+t(y,"Int32?")+",TypeOfWorkName="+t(p,"String?")+",AccountManager="+t(w,"String?")+",AMEmail="+t(b,"String?")+")")}},{name:"ProjectsOverCaps_SingleOrDefault",value:function(r){return new i({_entitySet:this.ProjectsOverCaps},n.rootUri+"/TimesheetsData.svc/ProjectsOverCaps(ErrorMessage="+t(r,"String?")+")")}},{name:"UnallocatedTimesheets_SingleOrDefault",value:function(r,u,f,e,o,s,h,c,l,a,v,y,p,w,b,k,d){return new i({_entitySet:this.UnallocatedTimesheets},n.rootUri+"/TimesheetsData.svc/UnallocatedTimesheets(ClientName="+t(r,"String?")+",ProjectName="+t(u,"String?")+",TimesheetDetailID="+t(f,"Int32?")+",LoadDate="+t(e,"DateTime?")+",Active="+t(o,"Int32?")+",TimesheetDetailFileName="+t(s,"String?")+",TimesheetDetailDateID="+t(h,"Int32?")+",Hours="+t(c,"Decimal?")+",TimesheetID="+t(l,"Int32?")+",Comments="+t(a,"String?")+",Exclude="+t(v,"Int32?")+",TypeOfWorkName="+t(y,"String?")+",AccountManager="+t(p,"String?")+",AMEmail="+t(w,"String?")+",ADUserName="+t(b,"String?")+",SharePointUserName="+t(k,"String?")+",BillingStatusID="+t(d,"Int32?")+")")}},{name:"UnallocatedTimesheetsSorted",value:function(r,u){return new i({_entitySet:this.UnallocatedTimesheets},n.rootUri+"/TimesheetsData.svc/UnallocatedTimesheetsSorted()",{ClientName:t(r,"String?"),PersonName:t(u,"String?")})}},{name:"Invoices_SingleOrDefault",value:function(r){return new i({_entitySet:this.Invoices},n.rootUri+"/TimesheetsData.svc/Invoices(InvoiceID="+t(r,"Int32?")+")")}},{name:"InvoiceLines_SingleOrDefault",value:function(r){return new i({_entitySet:this.InvoiceLines},n.rootUri+"/TimesheetsData.svc/InvoiceLines(InvoiceLineID="+t(r,"Int32?")+")")}},{name:"InvoiceStatus_SingleOrDefault",value:function(r){return new i({_entitySet:this.InvoiceStatus},n.rootUri+"/TimesheetsData.svc/InvoiceStatus(InvoiceStatusID="+t(r,"Int32?")+")")}},{name:"InvoicesSorted",value:function(r,u){return new i({_entitySet:this.Invoices},n.rootUri+"/TimesheetsData.svc/InvoicesSorted()",{PersonName:t(r,"String?"),InvoiceStatusName:t(u,"String?")})}},{name:"InvoiceLinesSorted",value:function(r,u,f,e){return new i({_entitySet:this.InvoiceLines},n.rootUri+"/TimesheetsData.svc/InvoiceLinesSorted()",{InvoiceID:t(r,"Int32?"),AM:t(u,"String?"),InvoiceLineDescription:t(f,"String?"),ProjectName:t(e,"String?")})}}]),DataWorkspace:ot(st,[{name:"TimesheetsData",type:rt}])})}(msls.application),function(n){function u(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"HomeScreen",i)}function f(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"BrowseTimesheetDetails",i)}function e(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"AddEditTimesheetDetail",i)}function o(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"BrowseClients",i)}function s(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"AddEditClient",i)}function h(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"BrowseBillingDetails",i)}function c(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"BrowseTimesheets",i)}function l(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"AddEditBillingDetail",i)}function a(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"AddEditTimesheet",i)}function v(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"AddEditTypeOfWork",i)}function y(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"UnallocatedTimesheets",i)}function p(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"EditUnallocatedTimesheets",i)}function w(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"BrowseInvoices",i)}function b(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"AddEditInvoice",i)}var t=msls.Screen,i=msls._defineScreen,k=msls.DataServiceQuery,d=msls._toODataString,r=msls._defineShowScreen;msls._addToNamespace("msls.application",{HomeScreen:i(u,[],[]),BrowseTimesheetDetails:i(f,[{name:"TimesheetDetails",kind:"collection",elementType:n.TimesheetDetail,createQuery:function(){return this.dataWorkspace.TimesheetsData.TimesheetDetails.filter("Project/Client/ClientCode eq 'Capitec'").orderBy("DimDate/DateID").thenBy("Person/PersonName").expand("DimDate").expand("Person").expand("Project").expand("Timesheet").expand("TypeOfWork")}}],[]),AddEditTimesheetDetail:i(e,[{name:"TimesheetDetail",kind:"local",type:n.TimesheetDetail}],[]),BrowseClients:i(o,[{name:"Clients",kind:"collection",elementType:n.Client,createQuery:function(n){return this.dataWorkspace.TimesheetsData.FilteredClient(n)}},{name:"ClientClientName",kind:"local",type:String}],[]),AddEditClient:i(s,[{name:"Client",kind:"local",type:n.Client},{name:"BillingDetails",kind:"collection",elementType:n.BillingDetail,getNavigationProperty:function(){return this.owner.Client?this.owner.Client.details.properties.BillingDetails:null},appendQuery:function(){return this.expand("Client").expand("Person")}},{name:"Projects",kind:"collection",elementType:n.Project,getNavigationProperty:function(){return this.owner.Client?this.owner.Client.details.properties.Projects:null},appendQuery:function(){return this.filter("ActiveType/ID eq 1").orderBy("ProjectName")}},{name:"PersonSorted",kind:"collection",elementType:n.Person,createQuery:function(){return this.dataWorkspace.TimesheetsData.PersonSorted()}},{name:"UnallocatedTimesheetsSorted",kind:"collection",elementType:n.UnallocatedTimesheet,createQuery:function(n,t){return this.dataWorkspace.TimesheetsData.UnallocatedTimesheetsSorted(n,t)}},{name:"PersonName",kind:"local",type:String},{name:"BillingStatusSet",kind:"collection",elementType:n.BillingStatus,createQuery:function(){return this.dataWorkspace.TimesheetsData.BillingStatusSet}}],[]),BrowseBillingDetails:i(h,[{name:"BillingDetails",kind:"collection",elementType:n.BillingDetail,createQuery:function(){return this.dataWorkspace.TimesheetsData.BillingDetails.filter("ActiveType/ID eq 1").orderBy("Client/ClientName").thenBy("Person/PersonName").expand("Client").expand("Person")}}],[]),BrowseTimesheets:i(c,[{name:"Timesheets",kind:"collection",elementType:n.Timesheet,createQuery:function(n,t,i){return this.dataWorkspace.TimesheetsData.TimesheetsByDate(n,t,i)}},{name:"TimesheetStartDate",kind:"local",type:Date},{name:"TimesheetEndDate",kind:"local",type:Date},{name:"TimesheetTimesheetPerson",kind:"local",type:String},{name:"TimesheetsByDate",kind:"collection",elementType:n.Timesheet,createQuery:function(n,t,i){return this.dataWorkspace.TimesheetsData.TimesheetsByDate(n,t,i)}}],[]),AddEditBillingDetail:i(l,[{name:"BillingDetail",kind:"local",type:n.BillingDetail},{name:"BillingDate",kind:"collection",elementType:n.DimDate,createQuery:function(){return this.dataWorkspace.TimesheetsData.BillingDate()}},{name:"PersonSorted",kind:"collection",elementType:n.Person,createQuery:function(){return this.dataWorkspace.TimesheetsData.PersonSorted()}}],[]),AddEditTimesheet:i(a,[{name:"Timesheet",kind:"local",type:n.Timesheet},{name:"TimesheetDetails",kind:"collection",elementType:n.TimesheetDetail,getNavigationProperty:function(){return this.owner.Timesheet?this.owner.Timesheet.details.properties.TimesheetDetails:null},appendQuery:function(){return this}}],[]),AddEditTypeOfWork:i(v,[{name:"TypeOfWork",kind:"local",type:n.TypeOfWork}],[]),UnallocatedTimesheets:i(y,[{name:"UnallocatedTimesheets1",kind:"collection",elementType:n.UnallocatedTimesheet,createQuery:function(){return this.dataWorkspace.TimesheetsData.UnallocatedTimesheets}},{name:"UnallocatedTimesheetsSorted",kind:"collection",elementType:n.UnallocatedTimesheet,createQuery:function(n,t){return this.dataWorkspace.TimesheetsData.UnallocatedTimesheetsSorted(n,t).expand("BillingStatus").expand("TimesheetDetail").expand("Timesheet")}},{name:"ClientName",kind:"local",type:String},{name:"PersonName",kind:"local",type:String}],[]),EditUnallocatedTimesheets:i(p,[{name:"UnallocatedTimesheetsSorted",kind:"collection",elementType:n.UnallocatedTimesheet,createQuery:function(n,t){return this.dataWorkspace.TimesheetsData.UnallocatedTimesheetsSorted(n,t)}},{name:"UnallocatedTimesheetClientName",kind:"local",type:String},{name:"UnallocatedTimesheetPersonName",kind:"local",type:String},{name:"BillingStatusSet",kind:"collection",elementType:n.BillingStatus,createQuery:function(){return this.dataWorkspace.TimesheetsData.BillingStatusSet}}],[{name:"AddNew"},{name:"DeleteSelected"}]),BrowseInvoices:i(w,[{name:"Invoices",kind:"collection",elementType:n.Invoice,createQuery:function(){return this.dataWorkspace.TimesheetsData.Invoices.expand("ActiveType").expand("Person").expand("DimDate").expand("InvoiceStatu")}},{name:"InvoicesSorted",kind:"collection",elementType:n.Invoice,createQuery:function(n,t){return this.dataWorkspace.TimesheetsData.InvoicesSorted(n,t)}},{name:"PersonName",kind:"local",type:String},{name:"InvoiceStatusName",kind:"local",type:String}],[]),AddEditInvoice:i(b,[{name:"Invoice",kind:"local",type:n.Invoice},{name:"InvoiceLines",kind:"collection",elementType:n.InvoiceLine,getNavigationProperty:function(){return this.owner.Invoice?this.owner.Invoice.details.properties.InvoiceLines:null},appendQuery:function(){return this.expand("ActiveType").expand("Person")}}],[]),showHomeScreen:r(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("HomeScreen",i,t)}),showBrowseTimesheetDetails:r(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseTimesheetDetails",i,t)}),showAddEditTimesheetDetail:r(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditTimesheetDetail",r,i)}),showBrowseClients:r(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("BrowseClients",r,i)}),showAddEditClient:r(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditClient",r,i)}),showBrowseBillingDetails:r(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseBillingDetails",i,t)}),showBrowseTimesheets:r(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseTimesheets",i,t)}),showAddEditBillingDetail:r(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditBillingDetail",r,i)}),showAddEditTimesheet:r(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditTimesheet",r,i)}),showAddEditTypeOfWork:r(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditTypeOfWork",r,i)}),showUnallocatedTimesheets:r(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("UnallocatedTimesheets",i,t)}),showEditUnallocatedTimesheets:r(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("EditUnallocatedTimesheets",i,t)}),showBrowseInvoices:r(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseInvoices",i,t)}),showAddEditInvoice:r(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditInvoice",r,i)})})}(msls.application),myapp.BillingDetail.created=function(n){n.sys_CreatedBy="NA",n.sys_CreatedOn="1999/01/01",n.sys_ModifiedBy="NA",n.sys_ModifiedOn="1999/01/01",n.LoadDate="1999/01/01",n.Active=1,myapp.activeDataWorkspace.PWTimesheetsData.ActiveTypes_SingleOrDefault(1).execute().then(function(t){n.ActiveType=t.results[0]})},myapp.BillingStatus.created=function(n){n.sys_CreatedBy="NA",n.sys_CreatedOn="1999/01/01",n.sys_ModifiedBy="NA",n.sys_ModifiedOn="1999/01/01",n.LoadDate="1999/01/01",n.Active=1,myapp.activeDataWorkspace.PWTimesheetsData.ActiveTypes_SingleOrDefault(1).execute().then(function(t){n.ActiveType=t.results[0]})},myapp.Client.created=function(n){n.sys_CreatedBy="NA",n.sys_CreatedOn="1999/01/01",n.sys_ModifiedBy="NA",n.sys_ModifiedOn="1999/01/01",n.LoadDate="1999/01/01",n.Active=1,myapp.activeDataWorkspace.PWTimesheetsData.ActiveTypes_SingleOrDefault(1).execute().then(function(t){n.ActiveType=t.results[0]})},myapp.ClientRole.created=function(n){n.sys_CreatedBy="NA",n.sys_CreatedOn="1999/01/01",n.sys_ModifiedBy="NA",n.sys_ModifiedOn="1999/01/01",n.LoadDate="1999/01/01",n.Active=1,myapp.activeDataWorkspace.PWTimesheetsData.ActiveTypes_SingleOrDefault(1).execute().then(function(t){n.ActiveType=t.results[0]})},typeof c1ls=="undefined"&&(window.location.href="http://bit.ly/c1ls-nuget");var grid;myapp.EditUnallocatedTimesheets.WijmoGrid_render=function(n,t){var i=$("<table/>");i.appendTo($(n)),t.value.oncollectionchange=function(){grid=c1ls.getGridContent(i,t,{autoHide:!0}),i.wijgrid({columns:grid.Columns,data:grid.Rows(),beforeCellEdit:onBeforeCellEdit,afterCellEdit:onAfterCellEdit,allowEditing:!0,afterCellUpdate:grid.OnCellUpdate,allowSorting:!0,sorting:grid.Sorting,showFilter:!1,filtering:grid.Filtering,selectionMode:"singleRow",showRowHeader:!0,showSelectionOnRender:!1,cellClicked:grid.OnCellClicked,cellStyleFormatter:grid.OnCellFormat})},c1ls.renderControl(t)},myapp.EditUnallocatedTimesheets.AddNew_canExecute=function(n){return n.UnallocatedTimesheetsSorted.isLoaded},myapp.EditUnallocatedTimesheets.AddNew_execute=function(n){n.UnallocatedTimesheetsSorted.addNew(),grid.EntityChanged(msls.EntityState.added)},myapp.EditUnallocatedTimesheets.DeleteSelected_canExecute=function(n){return $(".msls-footer").removeClass("slideup"),n.UnallocatedTimesheetsSorted.selectedItem!=null},myapp.EditUnallocatedTimesheets.DeleteSelected_execute=function(n){n.UnallocatedTimesheetsSorted.deleteSelected(),grid.EntityChanged(msls.EntityState.deleted)},myapp.Person.created=function(n){n.sys_CreatedBy="NA",n.sys_CreatedOn="1999/01/01",n.sys_ModifiedBy="NA",n.sys_ModifiedOn="1999/01/01",n.LoadDate="1999/01/01",n.Active=1,myapp.activeDataWorkspace.PWTimesheetsData.ActiveTypes_SingleOrDefault(1).execute().then(function(t){n.ActiveType=t.results[0]})},myapp.Project.created=function(n){n.sys_CreatedBy="NA",n.sys_CreatedOn="1999/01/01",n.sys_ModifiedBy="NA",n.sys_ModifiedOn="1999/01/01",n.LoadDate="1999/01/01",n.Active=1,n.AdminProject=0},myapp.RoleType.created=function(n){myapp.activeDataWorkspace.PWTimesheetsData.ActiveTypes_SingleOrDefault(1).execute().then(function(t){n.ActiveType=t.results[0]})},myapp.Timesheet.created=function(n){n.sys_CreatedBy="NA",n.sys_CreatedOn="1999/01/01",n.sys_ModifiedBy="NA",n.sys_ModifiedOn="1999/01/01",n.LoadDate="1999/01/01",n.Active=1,myapp.activeDataWorkspace.PWTimesheetsData.ActiveTypes_SingleOrDefault(1).execute().then(function(t){n.ActiveType=t.results[0]})},myapp.TimesheetDetail.created=function(n){n.sys_CreatedBy="NA",n.sys_CreatedOn="1999/01/01",n.sys_ModifiedBy="NA",n.sys_ModifiedOn="1999/01/01",n.LoadDate="1999/01/01",n.Active=1,myapp.activeDataWorkspace.PWTimesheetsData.ActiveTypes_SingleOrDefault(1).execute().then(function(t){n.ActiveType=t.results[0]})},myapp.TypeOfWork.created=function(n){n.sys_CreatedBy="NA",n.sys_CreatedOn="1999/01/01",n.sys_ModifiedBy="NA",n.sys_ModifiedOn="1999/01/01",n.LoadDate="1999/01/01",n.Active=1,myapp.activeDataWorkspace.PWTimesheetsData.ActiveTypes_SingleOrDefault(1).execute().then(function(t){n.ActiveType=t.results[0]})};