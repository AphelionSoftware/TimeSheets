﻿window.myapp=msls.application,function(n){function f(n){r.call(this,n)}function s(n){r.call(this,n)}function a(n){r.call(this,n)}function l(n){r.call(this,n)}function y(n){r.call(this,n)}function v(n){r.call(this,n)}function p(n){r.call(this,n)}function o(n){r.call(this,n)}function h(n){r.call(this,n)}function c(n){r.call(this,n)}function e(n){r.call(this,n)}function w(n){r.call(this,n)}function b(n){k.call(this,n)}function tt(){d.call(this)}var r=msls.Entity,k=msls.DataService,d=msls.DataWorkspace,u=msls._defineEntity,g=msls._defineDataService,nt=msls._defineDataWorkspace,t=msls.DataServiceQuery,i=msls._toODataString;msls._addToNamespace("msls.application",{ActiveType:u(f,[{name:"ID",type:Number},{name:"Code",type:String},{name:"Name",type:String},{name:"sys_CreatedOn",type:Date},{name:"sys_CreatedBy",type:String},{name:"sys_ModifiedOn",type:Date},{name:"sys_ModifiedBy",type:String},{name:"Active",type:Number},{name:"BillingDetails",kind:"collection",elementType:s},{name:"BillingStatus",kind:"collection",elementType:a},{name:"Clients",kind:"collection",elementType:l},{name:"ClientRoles",kind:"collection",elementType:y},{name:"OverallStatus",kind:"collection",elementType:p},{name:"PersonItem",kind:"collection",elementType:o},{name:"Projects",kind:"collection",elementType:h},{name:"Timesheets",kind:"collection",elementType:c},{name:"TimesheetDetails",kind:"collection",elementType:e},{name:"TypeOfWorks",kind:"collection",elementType:w}]),BillingDetail:u(s,[{name:"BillingDetailID",type:Number},{name:"BillingDetailSourceKey",type:String},{name:"LoadDate",type:Date},{name:"Rate",type:Number},{name:"LoadDateID",type:Number},{name:"sys_CreatedOn",type:Date},{name:"sys_CreatedBy",type:String},{name:"sys_ModifiedOn",type:Date},{name:"sys_ModifiedBy",type:String},{name:"ActiveType",kind:"reference",type:f},{name:"Client",kind:"reference",type:l},{name:"PersonItem",kind:"reference",type:o},{name:"ClientRole",kind:"reference",type:y},{name:"DimDate",kind:"reference",type:v}]),BillingStatu:u(a,[{name:"BillingStatusID",type:Number},{name:"BillingStatusSourceKey",type:String},{name:"LoadDate",type:Date},{name:"BillingStatusName",type:String},{name:"BillingStatusCode",type:String},{name:"LoadDateID",type:Number},{name:"sys_CreatedOn",type:Date},{name:"sys_CreatedBy",type:String},{name:"sys_ModifiedOn",type:Date},{name:"sys_ModifiedBy",type:String},{name:"ActiveType",kind:"reference",type:f},{name:"Projects",kind:"collection",elementType:h},{name:"TimesheetDetails",kind:"collection",elementType:e}]),Client:u(l,[{name:"ClientID",type:Number},{name:"ClientSourceKey",type:String},{name:"LoadDate",type:Date},{name:"ClientName",type:String},{name:"ClientCode",type:String},{name:"LoadDateID",type:Number},{name:"sys_CreatedOn",type:Date},{name:"sys_CreatedBy",type:String},{name:"sys_ModifiedOn",type:Date},{name:"sys_ModifiedBy",type:String},{name:"BillingDetails",kind:"collection",elementType:s},{name:"ActiveType",kind:"reference",type:f},{name:"PersonItem",kind:"reference",type:o},{name:"Projects",kind:"collection",elementType:h}]),ClientRole:u(y,[{name:"ClientRoleID",type:Number},{name:"ClientRoleSourceKey",type:String},{name:"LoadDate",type:Date},{name:"ClientRoleName",type:String},{name:"ClientRoleCode",type:String},{name:"LoadDateID",type:Number},{name:"sys_CreatedOn",type:Date},{name:"sys_CreatedBy",type:String},{name:"sys_ModifiedOn",type:Date},{name:"sys_ModifiedBy",type:String},{name:"BillingDetails",kind:"collection",elementType:s},{name:"ActiveType",kind:"reference",type:f}]),DimDate:u(v,[{name:"DateID",type:Number},{name:"c_Date",type:Date},{name:"Day",type:Number},{name:"StandardDate",type:String},{name:"DaySuffix",type:String},{name:"DayOfWeek",type:String},{name:"DOWInMonth",type:Number},{name:"DayOfYear",type:Number},{name:"WeekOfYear",type:Number},{name:"WeekOfMonth",type:Number},{name:"MonthNumber",type:Number},{name:"MonthName",type:String},{name:"Quarter",type:Number},{name:"QuarterName",type:String},{name:"YearName",type:String},{name:"YearNumber",type:Number},{name:"IsPublicHoliday",type:Boolean},{name:"HolidayText",type:String},{name:"sys_CreatedOn",type:Date},{name:"sys_CreatedBy",type:String},{name:"sys_ModifiedOn",type:Date},{name:"sys_ModifiedBy",type:String},{name:"Active",type:Number},{name:"DateSK",type:Number},{name:"Timesheets",kind:"collection",elementType:c},{name:"TimesheetDetails",kind:"collection",elementType:e},{name:"BillingDetails",kind:"collection",elementType:s},{name:"ContractorYear",type:Number},{name:"ContractorMonth",type:Number},{name:"ContractorPeriod",type:String},{name:"BillingYear",type:String},{name:"WeekEndingBillingPeriod",type:String},{name:"BillingPeriodText",type:String},{name:"BillingPeriod",type:Number},{name:"WeekEnding",type:Date},{name:"WeekEndingText",type:String}]),OverallStatu:u(p,[{name:"OverallStatusID",type:Number},{name:"OverallStatusSourceKey",type:String},{name:"LoadDate",type:Date},{name:"OverallStatusName",type:String},{name:"OverallStatusCode",type:String},{name:"LoadDateID",type:Number},{name:"sys_CreatedOn",type:Date},{name:"sys_CreatedBy",type:String},{name:"sys_ModifiedOn",type:Date},{name:"sys_ModifiedBy",type:String},{name:"ActiveType",kind:"reference",type:f},{name:"Timesheets",kind:"collection",elementType:c}]),PersonItem:u(o,[{name:"PersonID",type:Number},{name:"PersonSourceKey",type:String},{name:"LoadDate",type:Date},{name:"PersonName",type:String},{name:"PersonCode",type:String},{name:"LoadDateID",type:Number},{name:"PersonSystemRoleID",type:Number},{name:"BillingPercentTarget",type:Number},{name:"BillingPercentMinimum",type:Number},{name:"Email",type:String},{name:"StartDate",type:Date},{name:"HourlyCost",type:Number},{name:"MonthlyCost",type:Number},{name:"IsContractor",type:Number},{name:"Billable",type:Number},{name:"ADUsername",type:String},{name:"sys_CreatedOn",type:Date},{name:"sys_CreatedBy",type:String},{name:"sys_ModifiedOn",type:Date},{name:"sys_ModifiedBy",type:String},{name:"BillingDetails",kind:"collection",elementType:s},{name:"Clients",kind:"collection",elementType:l},{name:"ActiveType",kind:"reference",type:f},{name:"Projects",kind:"collection",elementType:h},{name:"TimesheetDetails",kind:"collection",elementType:e},{name:"SharepointUserName",type:String},{name:"Timesheets",kind:"collection",elementType:c}]),Project:u(h,[{name:"ProjectID",type:Number},{name:"ProjectSourceKey",type:String},{name:"LoadDate",type:Date},{name:"ProjectName",type:String},{name:"ProjectCode",type:String},{name:"LoadDateID",type:Number},{name:"ProjectFirstPersonName",type:String},{name:"ProjectFirstFilename",type:String},{name:"ConsultingEstimate",type:Number},{name:"SoftwareEstimate",type:Number},{name:"VMEstimate",type:Number},{name:"ProjectCap",type:Number},{name:"AdminProject",type:Number},{name:"sys_CreatedOn",type:Date},{name:"sys_CreatedBy",type:String},{name:"sys_ModifiedOn",type:Date},{name:"sys_ModifiedBy",type:String},{name:"ActiveType",kind:"reference",type:f},{name:"BillingStatu",kind:"reference",type:a},{name:"Client",kind:"reference",type:l},{name:"PersonItem",kind:"reference",type:o},{name:"TimesheetDetails",kind:"collection",elementType:e},{name:"MonthlyCap",type:Number},{name:"MonthlyCapWarning",type:Number},{name:"ProjectCapWarning",type:Number}]),Timesheet:u(c,[{name:"TimesheetID",type:Number},{name:"TimesheetSourceKey",type:String},{name:"LoadDate",type:Date},{name:"TimesheetName",type:String},{name:"TimesheetCode",type:String},{name:"TimesheetFileName",type:String},{name:"TimesheetFromDateID",type:Number},{name:"TimesheetToDateID",type:Number},{name:"TimesheetPerson",type:String},{name:"TimesheetDate",type:String},{name:"LoadDateID",type:Number},{name:"sys_CreatedOn",type:Date},{name:"sys_CreatedBy",type:String},{name:"sys_ModifiedOn",type:Date},{name:"sys_ModifiedBy",type:String},{name:"ActiveType",kind:"reference",type:f},{name:"DimDate",kind:"reference",type:v},{name:"OverallStatus",kind:"reference",type:p},{name:"TimesheetDetails",kind:"collection",elementType:e},{name:"PeriodEnding",type:Date},{name:"Person",kind:"reference",type:o},{name:"VerCol",type:Array}]),TimesheetDetail:u(e,[{name:"TimesheetDetailID",type:Number},{name:"TimesheetDetailSourceKey",type:String},{name:"LoadDate",type:Date},{name:"TimesheetDetailName",type:String},{name:"TimesheetDetailCode",type:String},{name:"TimesheetDetailFileName",type:String},{name:"LoadDateID",type:Number},{name:"Hours",type:Number},{name:"Comments",type:String},{name:"ClientComments",type:String},{name:"AMComments",type:String},{name:"Exclude",type:Number},{name:"LastUpdateDate",type:Date},{name:"sys_CreatedOn",type:Date},{name:"sys_CreatedBy",type:String},{name:"sys_ModifiedOn",type:Date},{name:"sys_ModifiedBy",type:String},{name:"ActiveType",kind:"reference",type:f},{name:"BillingStatu",kind:"reference",type:a},{name:"DimDate",kind:"reference",type:v},{name:"PersonItem",kind:"reference",type:o},{name:"Project",kind:"reference",type:h},{name:"Timesheet",kind:"reference",type:c},{name:"TypeOfWork",kind:"reference",type:w},{name:"VerCol",type:Array}]),TypeOfWork:u(w,[{name:"TypeOfWorkID",type:Number},{name:"TypeOfWorkSourceKey",type:String},{name:"LoadDate",type:Date},{name:"TypeOfWorkName",type:String},{name:"TypeOfWorkCode",type:String},{name:"LoadDateID",type:Number},{name:"sys_CreatedOn",type:Date},{name:"sys_CreatedBy",type:String},{name:"sys_ModifiedOn",type:Date},{name:"sys_ModifiedBy",type:String},{name:"TimesheetDetails",kind:"collection",elementType:e},{name:"ActiveType",kind:"reference",type:f}]),TimesheetsData:g(b,n.rootUri+"/TimesheetsData.svc",[{name:"ActiveTypes",elementType:f},{name:"BillingDetails",elementType:s},{name:"BillingStatus",elementType:a},{name:"Clients",elementType:l},{name:"ClientRoles",elementType:y},{name:"DimDates",elementType:v},{name:"OverallStatus",elementType:p},{name:"People",elementType:o},{name:"Projects",elementType:h},{name:"Timesheets",elementType:c},{name:"TimesheetDetails",elementType:e},{name:"TypeOfWorks",elementType:w}],[{name:"ActiveTypes_SingleOrDefault",value:function(r){return new t({_entitySet:this.ActiveTypes},n.rootUri+"/TimesheetsData.svc/ActiveTypes(ID="+i(r,"Int32?")+")")}},{name:"BillingDetails_SingleOrDefault",value:function(r){return new t({_entitySet:this.BillingDetails},n.rootUri+"/TimesheetsData.svc/BillingDetails(BillingDetailID="+i(r,"Int32?")+")")}},{name:"BillingStatus_SingleOrDefault",value:function(r){return new t({_entitySet:this.BillingStatus},n.rootUri+"/TimesheetsData.svc/BillingStatus(BillingStatusID="+i(r,"Int32?")+")")}},{name:"Clients_SingleOrDefault",value:function(r){return new t({_entitySet:this.Clients},n.rootUri+"/TimesheetsData.svc/Clients(ClientID="+i(r,"Int32?")+")")}},{name:"ClientRoles_SingleOrDefault",value:function(r){return new t({_entitySet:this.ClientRoles},n.rootUri+"/TimesheetsData.svc/ClientRoles(ClientRoleID="+i(r,"Int32?")+")")}},{name:"DimDates_SingleOrDefault",value:function(r){return new t({_entitySet:this.DimDates},n.rootUri+"/TimesheetsData.svc/DimDates(DateID="+i(r,"Int32?")+")")}},{name:"OverallStatus_SingleOrDefault",value:function(r){return new t({_entitySet:this.OverallStatus},n.rootUri+"/TimesheetsData.svc/OverallStatus(OverallStatusID="+i(r,"Int32?")+")")}},{name:"People_SingleOrDefault",value:function(r){return new t({_entitySet:this.People},n.rootUri+"/TimesheetsData.svc/People(PersonID="+i(r,"Int32?")+")")}},{name:"Projects_SingleOrDefault",value:function(r){return new t({_entitySet:this.Projects},n.rootUri+"/TimesheetsData.svc/Projects(ProjectID="+i(r,"Int32?")+")")}},{name:"Timesheets_SingleOrDefault",value:function(r){return new t({_entitySet:this.Timesheets},n.rootUri+"/TimesheetsData.svc/Timesheets(TimesheetID="+i(r,"Int32?")+")")}},{name:"TimesheetDetails_SingleOrDefault",value:function(r){return new t({_entitySet:this.TimesheetDetails},n.rootUri+"/TimesheetsData.svc/TimesheetDetails(TimesheetDetailID="+i(r,"Int32?")+")")}},{name:"TypeOfWorks_SingleOrDefault",value:function(r){return new t({_entitySet:this.TypeOfWorks},n.rootUri+"/TimesheetsData.svc/TypeOfWorks(TypeOfWorkID="+i(r,"Int32?")+")")}},{name:"TimesheetsUser",value:function(r,u){return new t({_entitySet:this.Timesheets},n.rootUri+"/TimesheetsData.svc/TimesheetsUser()",{StartDate:i(r,"DateTime?"),EndDate:i(u,"DateTime?")})}},{name:"TimesheetDate",value:function(){return new t({_entitySet:this.DimDates},n.rootUri+"/TimesheetsData.svc/TimesheetDate()",{})}},{name:"TimesheetDetailDate",value:function(r){return new t({_entitySet:this.DimDates},n.rootUri+"/TimesheetsData.svc/TimesheetDetailDate()",{PeriodEndDate:i(r,"DateTime?")})}},{name:"ProjectSorted",value:function(){return new t({_entitySet:this.Projects},n.rootUri+"/TimesheetsData.svc/ProjectSorted()",{})}},{name:"TimesheetDetailsQuery",value:function(){return new t({_entitySet:this.TimesheetDetails},n.rootUri+"/TimesheetsData.svc/TimesheetDetailsQuery()",{})}},{name:"GetTimesheet",value:function(r){return new t({_entitySet:this.Timesheets},n.rootUri+"/TimesheetsData.svc/GetTimesheet()",{TimesheetID:i(r,"Int32?")})}}]),DataWorkspace:nt(tt,[{name:"TimesheetsData",type:b}])})}(msls.application),function(n){function f(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"ManageTimesheets",i)}function e(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"AddNewTimesheet",i)}function o(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"EditTimesheet",i)}function s(i,r){r||(r=new n.DataWorkspace),t.call(this,r,"EditTimesheetDetails",i)}var t=msls.Screen,i=msls._defineScreen,h=msls.DataServiceQuery,u=msls._toODataString,r=msls._defineShowScreen;msls._addToNamespace("msls.application",{ManageTimesheets:i(f,[{name:"TimesheetsUser",kind:"collection",elementType:n.Timesheet,createQuery:function(n,t){return this.dataWorkspace.TimesheetsData.TimesheetsUser(n,t).expand("DimDate")}},{name:"TimesheetStartDate",kind:"local",type:Date},{name:"TimesheetEndDate",kind:"local",type:Date},{name:"ShowDetails",kind:"local",type:Boolean}],[{name:"EditTimesheet_Tap"},{name:"ShowTimesheetDetails_Tap"},{name:"Timesheet_ItemTap"}]),AddNewTimesheet:i(e,[{name:"Timesheet",kind:"local",type:n.Timesheet},{name:"TimesheetDate",kind:"collection",elementType:n.DimDate,createQuery:function(){return this.dataWorkspace.TimesheetsData.TimesheetDate()}}],[]),EditTimesheet:i(o,[{name:"Timesheet",kind:"local",type:n.Timesheet},{name:"TimesheetDate",kind:"collection",elementType:n.DimDate,createQuery:function(){return this.dataWorkspace.TimesheetsData.TimesheetDate()}}],[]),EditTimesheetDetails:i(s,[{name:"TimesheetDetailsQuery",kind:"collection",elementType:n.TimesheetDetail,createQuery:function(n){return this.dataWorkspace.TimesheetsData.TimesheetDetailsQuery().filter(""+(n===undefined||n===null?"false":"(Timesheet/TimesheetID eq "+u(n,"Int32?")+")")+"").expand("DimDate").expand("Project").expand("TypeOfWork")}},{name:"TimesheetID",kind:"local",type:Number},{name:"TimesheetDetailDate",kind:"collection",elementType:n.DimDate,createQuery:function(n){return this.dataWorkspace.TimesheetsData.TimesheetDetailDate(n).filter(""+(n===undefined||n===null?"false":"(WeekEnding eq "+u(n,"DateTime?")+")")+"")}},{name:"WeekEnding",kind:"local",type:Date},{name:"ProjectSorted",kind:"collection",elementType:n.Project,createQuery:function(){return this.dataWorkspace.TimesheetsData.ProjectSorted()}},{name:"Instructions",kind:"local",type:String}],[{name:"AddNew"},{name:"DeleteSelected"},{name:"SaveChanges"},{name:"Refresh"}]),showManageTimesheets:r(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("ManageTimesheets",i,t)}),showAddNewTimesheet:r(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddNewTimesheet",r,i)}),showEditTimesheet:r(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("EditTimesheet",r,i)}),showEditTimesheetDetails:r(function(t,i,r,u){var f=Array.prototype.slice.call(arguments,0,3);return n.showScreen("EditTimesheetDetails",f,u)})})}(msls.application),typeof c1ls=="undefined"&&(window.location.href="http://bit.ly/c1ls-nuget");var grid;myapp.EditTimesheetDetails.WijmoGrid_render=function(n,t){var i=$("<table/>");i.appendTo($(n)),t.value.oncollectionchange=function(){grid=c1ls.getGridContent(i,t,{autoHide:!0}),i.wijgrid({columns:grid.Columns,data:grid.Rows(),allowEditing:!0,afterCellUpdate:grid.OnCellUpdate,allowSorting:!0,sorting:grid.Sorting,showFilter:!1,filtering:grid.Filtering,selectionMode:"multirow",showRowHeader:!0,showSelectionOnRender:!0,cellClicked:grid.OnCellClicked,cellStyleFormatter:grid.OnCellFormat})},c1ls.renderControl(t)},myapp.EditTimesheetDetails.AddNew_canExecute=function(n){return n.TimesheetDetailsQuery.isLoaded},myapp.EditTimesheetDetails.AddNew_execute=function(n){var t=n.TimesheetDetailsQuery.addNew();myapp.activeDataWorkspace.TimesheetsData.Timesheets_SingleOrDefault(n.__TimesheetID).execute().then(function(n){t.setTimesheet(n.results[0])}),grid.EntityChanged(msls.EntityState.added),contentItem=n.findContentItem("TimesheetID"),dropdown=n.findContentItem("TimesheetDetailsQuery_selectedItem_Timesheet")},myapp.EditTimesheetDetails.DeleteSelected_canExecute=function(n){return $(".msls-footer").removeClass("slideup"),n.TimesheetDetailsQuery.selectedItem!=null},myapp.EditTimesheetDetails.DeleteSelected_execute=function(n){n.TimesheetDetailsQuery.deleteSelected(),grid.EntityChanged(msls.EntityState.deleted)},myapp.EditTimesheetDetails.created=function(){},myapp.EditTimesheetDetails.Instructions_postRender=function(n,t){t.dataBind("value",function(){$(n).text="Click on the grid to populate the drop-down boxes."})},typeof c1ls=="undefined"&&(window.location.href="http://bit.ly/c1ls-nuget"),myapp.ManageTimesheets.WijmoGrid_render=function(n,t){var i=$("<table/>");i.appendTo($(n)),t.value.oncollectionchange=function(){var n=c1ls.getGridContent(i,t);i.wijgrid({columns:n.Columns,data:n.Rows(),allowEditing:!0,afterCellUpdate:n.OnCellUpdate,allowSorting:!0,sorting:n.Sorting,showFilter:!1,filtering:n.Filtering,selectionMode:"singleRow",showRowHeader:n.ShowRowHeader,showSelectionOnRender:!1,cellClicked:n.OnCellClicked,cellStyleFormatter:n.OnCellFormat})},c1ls.renderControl(t)},myapp.ManageTimesheets.ShowTimesheetDetails_Tap_execute=function(n){var t=n.TimesheetsUser.selectedItem.TimesheetID,i=n.TimesheetsUser.selectedItem.DimDate.getC_Date()._value,r="Click on the grid to populate the drop-down boxes.";myapp.showEditTimesheetDetails(t,i,r)},myapp.ManageTimesheets.ShowTimesheetDetails_Tap_canExecute=function(n){return n.ShowDetails},myapp.ManageTimesheets.created=function(n){n.ShowDetails=!1},myapp.ManageTimesheets.Timesheet_ItemTap_execute=function(n){n.ShowDetails=!0},myapp.Timesheet.created=function(n){n.LoadDate="1999/01/01",n.TimesheetDate="1999/01/01",myapp.activeDataWorkspace.TimesheetsData.ActiveTypes_SingleOrDefault(1).execute().then(function(t){n.ActiveType=t.results[0]}),n.TimesheetName="",n.TimesheetCode="",n.TimesheetFileName="Lightswitch",n.TimesheetFromDateID=0,n.TimesheetToDateID=0,n.TimesheetPerson="N/A",myapp.activeDataWorkspace.TimesheetsData.OverallStatus_SingleOrDefault(1).execute().then(function(t){n.OverallStatus=t.results[0]}),n.sys_CreatedBy="N/A",n.sys_CreatedOn="1999/01/01",n.sys_ModifiedBy="N/A",n.sys_ModifiedOn="1999/01/01"},myapp.TimesheetDetail.created=function(n){n.LoadDate="1999/01/01",n.LastUpdateDate="1999/01/01",myapp.activeDataWorkspace.TimesheetsData.ActiveTypes_SingleOrDefault(1).execute().then(function(t){n.ActiveType=t.results[0]}),myapp.activeDataWorkspace.TimesheetsData.People_SingleOrDefault(1).execute().then(function(t){n.Person=t.results[0]}),myapp.activeDataWorkspace.TimesheetsData.BillingStatus_SingleOrDefault(-1).execute().then(function(t){n.BillingStatus=t.results[0]}),n.TimesheetDetailName="N/A",n.TimesheetDetailCode="N/A",n.TimesheetDetailFileName="Lightswitch",n.Hours=1,n.Exclude=0,n.sys_CreatedBy="NA",n.sys_CreatedOn="1999/01/01",n.sys_ModifiedBy="NA",n.sys_ModifiedOn="1999/01/01"};