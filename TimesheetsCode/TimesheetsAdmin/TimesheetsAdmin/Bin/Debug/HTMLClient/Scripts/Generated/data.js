/// <reference path="../Scripts/msls.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function ActiveType(entitySet) {
        /// <summary>
        /// Represents the ActiveType entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this activeType.
        /// </param>
        /// <field name="ID" type="Number">
        /// Gets or sets the iD for this activeType.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this activeType.
        /// </field>
        /// <field name="Code" type="String">
        /// Gets or sets the code for this activeType.
        /// </field>
        /// <field name="sys_CreatedOn" type="Date">
        /// Gets or sets the sys_CreatedOn for this activeType.
        /// </field>
        /// <field name="sys_CreatedBy" type="String">
        /// Gets or sets the sys_CreatedBy for this activeType.
        /// </field>
        /// <field name="sys_ModifiedOn" type="Date">
        /// Gets or sets the sys_ModifiedOn for this activeType.
        /// </field>
        /// <field name="sys_ModifiedBy" type="String">
        /// Gets or sets the sys_ModifiedBy for this activeType.
        /// </field>
        /// <field name="Active" type="Number">
        /// Gets or sets the active for this activeType.
        /// </field>
        /// <field name="BillingDetails" type="msls.EntityCollection" elementType="msls.application.BillingDetail">
        /// Gets the billingDetails for this activeType.
        /// </field>
        /// <field name="BillingStatus" type="msls.EntityCollection" elementType="msls.application.BillingStatus">
        /// Gets the billingStatus for this activeType.
        /// </field>
        /// <field name="Clients" type="msls.EntityCollection" elementType="msls.application.Client">
        /// Gets the clients for this activeType.
        /// </field>
        /// <field name="ClientRoles" type="msls.EntityCollection" elementType="msls.application.ClientRole">
        /// Gets the clientRoles for this activeType.
        /// </field>
        /// <field name="People" type="msls.EntityCollection" elementType="msls.application.Person">
        /// Gets the people for this activeType.
        /// </field>
        /// <field name="Projects" type="msls.EntityCollection" elementType="msls.application.Project">
        /// Gets the projects for this activeType.
        /// </field>
        /// <field name="RoleTypes" type="msls.EntityCollection" elementType="msls.application.RoleType">
        /// Gets the roleTypes for this activeType.
        /// </field>
        /// <field name="SystemRoles" type="msls.EntityCollection" elementType="msls.application.SystemRole">
        /// Gets the systemRoles for this activeType.
        /// </field>
        /// <field name="Timesheets" type="msls.EntityCollection" elementType="msls.application.Timesheet">
        /// Gets the timesheets for this activeType.
        /// </field>
        /// <field name="TimesheetDetails" type="msls.EntityCollection" elementType="msls.application.TimesheetDetail">
        /// Gets the timesheetDetails for this activeType.
        /// </field>
        /// <field name="TypeOfWorks" type="msls.EntityCollection" elementType="msls.application.TypeOfWork">
        /// Gets the typeOfWorks for this activeType.
        /// </field>
        /// <field name="Invoices" type="msls.EntityCollection" elementType="msls.application.Invoice">
        /// Gets the invoices for this activeType.
        /// </field>
        /// <field name="InvoiceLines" type="msls.EntityCollection" elementType="msls.application.InvoiceLine">
        /// Gets the invoiceLines for this activeType.
        /// </field>
        /// <field name="InvoiceStatus" type="msls.EntityCollection" elementType="msls.application.InvoiceStatu">
        /// Gets the invoiceStatus for this activeType.
        /// </field>
        /// <field name="details" type="msls.application.ActiveType.Details">
        /// Gets the details for this activeType.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function BillingDetail(entitySet) {
        /// <summary>
        /// Represents the BillingDetail entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this billingDetail.
        /// </param>
        /// <field name="BillingDetailID" type="Number">
        /// Gets or sets the billingDetailID for this billingDetail.
        /// </field>
        /// <field name="BillingDetailSourceKey" type="String">
        /// Gets or sets the billingDetailSourceKey for this billingDetail.
        /// </field>
        /// <field name="LoadDate" type="Date">
        /// Gets or sets the loadDate for this billingDetail.
        /// </field>
        /// <field name="Rate" type="String">
        /// Gets or sets the rate for this billingDetail.
        /// </field>
        /// <field name="LoadDateID" type="Number">
        /// Gets or sets the loadDateID for this billingDetail.
        /// </field>
        /// <field name="Client" type="msls.application.Client">
        /// Gets or sets the client for this billingDetail.
        /// </field>
        /// <field name="Person" type="msls.application.Person">
        /// Gets or sets the person for this billingDetail.
        /// </field>
        /// <field name="sys_CreatedOn" type="Date">
        /// Gets or sets the sys_CreatedOn for this billingDetail.
        /// </field>
        /// <field name="sys_CreatedBy" type="String">
        /// Gets or sets the sys_CreatedBy for this billingDetail.
        /// </field>
        /// <field name="sys_ModifiedOn" type="Date">
        /// Gets or sets the sys_ModifiedOn for this billingDetail.
        /// </field>
        /// <field name="sys_ModifiedBy" type="String">
        /// Gets or sets the sys_ModifiedBy for this billingDetail.
        /// </field>
        /// <field name="ActiveType" type="msls.application.ActiveType">
        /// Gets or sets the activeType for this billingDetail.
        /// </field>
        /// <field name="DimDate" type="msls.application.DimDate">
        /// Gets or sets the dimDate for this billingDetail.
        /// </field>
        /// <field name="ClientRole" type="msls.application.ClientRole">
        /// Gets or sets the clientRole for this billingDetail.
        /// </field>
        /// <field name="details" type="msls.application.BillingDetail.Details">
        /// Gets the details for this billingDetail.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function BillingStatus(entitySet) {
        /// <summary>
        /// Represents the BillingStatus entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this billingStatus.
        /// </param>
        /// <field name="BillingStatusName" type="String">
        /// Gets or sets the billingStatusName for this billingStatus.
        /// </field>
        /// <field name="BillingStatusID" type="Number">
        /// Gets or sets the billingStatusID for this billingStatus.
        /// </field>
        /// <field name="BillingStatusSourceKey" type="String">
        /// Gets or sets the billingStatusSourceKey for this billingStatus.
        /// </field>
        /// <field name="LoadDate" type="Date">
        /// Gets or sets the loadDate for this billingStatus.
        /// </field>
        /// <field name="BillingStatusCode" type="String">
        /// Gets or sets the billingStatusCode for this billingStatus.
        /// </field>
        /// <field name="LoadDateID" type="Number">
        /// Gets or sets the loadDateID for this billingStatus.
        /// </field>
        /// <field name="Projects" type="msls.EntityCollection" elementType="msls.application.Project">
        /// Gets the projects for this billingStatus.
        /// </field>
        /// <field name="sys_CreatedOn" type="Date">
        /// Gets or sets the sys_CreatedOn for this billingStatus.
        /// </field>
        /// <field name="sys_CreatedBy" type="String">
        /// Gets or sets the sys_CreatedBy for this billingStatus.
        /// </field>
        /// <field name="sys_ModifiedOn" type="Date">
        /// Gets or sets the sys_ModifiedOn for this billingStatus.
        /// </field>
        /// <field name="sys_ModifiedBy" type="String">
        /// Gets or sets the sys_ModifiedBy for this billingStatus.
        /// </field>
        /// <field name="TimesheetDetails" type="msls.EntityCollection" elementType="msls.application.TimesheetDetail">
        /// Gets the timesheetDetails for this billingStatus.
        /// </field>
        /// <field name="ActiveType" type="msls.application.ActiveType">
        /// Gets or sets the activeType for this billingStatus.
        /// </field>
        /// <field name="details" type="msls.application.BillingStatus.Details">
        /// Gets the details for this billingStatus.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ClientRole(entitySet) {
        /// <summary>
        /// Represents the ClientRole entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this clientRole.
        /// </param>
        /// <field name="ClientRoleName" type="String">
        /// Gets or sets the clientRoleName for this clientRole.
        /// </field>
        /// <field name="ClientRoleID" type="Number">
        /// Gets or sets the clientRoleID for this clientRole.
        /// </field>
        /// <field name="ClientRoleSourceKey" type="String">
        /// Gets or sets the clientRoleSourceKey for this clientRole.
        /// </field>
        /// <field name="LoadDate" type="Date">
        /// Gets or sets the loadDate for this clientRole.
        /// </field>
        /// <field name="ClientRoleCode" type="String">
        /// Gets or sets the clientRoleCode for this clientRole.
        /// </field>
        /// <field name="LoadDateID" type="Number">
        /// Gets or sets the loadDateID for this clientRole.
        /// </field>
        /// <field name="sys_CreatedOn" type="Date">
        /// Gets or sets the sys_CreatedOn for this clientRole.
        /// </field>
        /// <field name="sys_CreatedBy" type="String">
        /// Gets or sets the sys_CreatedBy for this clientRole.
        /// </field>
        /// <field name="sys_ModifiedOn" type="Date">
        /// Gets or sets the sys_ModifiedOn for this clientRole.
        /// </field>
        /// <field name="sys_ModifiedBy" type="String">
        /// Gets or sets the sys_ModifiedBy for this clientRole.
        /// </field>
        /// <field name="ActiveType" type="msls.application.ActiveType">
        /// Gets or sets the activeType for this clientRole.
        /// </field>
        /// <field name="InvoiceLines" type="msls.EntityCollection" elementType="msls.application.InvoiceLine">
        /// Gets the invoiceLines for this clientRole.
        /// </field>
        /// <field name="BillingDetails" type="msls.EntityCollection" elementType="msls.application.BillingDetail">
        /// Gets the billingDetails for this clientRole.
        /// </field>
        /// <field name="details" type="msls.application.ClientRole.Details">
        /// Gets the details for this clientRole.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Client(entitySet) {
        /// <summary>
        /// Represents the Client entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this client.
        /// </param>
        /// <field name="ClientName" type="String">
        /// Gets or sets the clientName for this client.
        /// </field>
        /// <field name="ClientID" type="Number">
        /// Gets or sets the clientID for this client.
        /// </field>
        /// <field name="ClientSourceKey" type="String">
        /// Gets or sets the clientSourceKey for this client.
        /// </field>
        /// <field name="LoadDate" type="Date">
        /// Gets or sets the loadDate for this client.
        /// </field>
        /// <field name="ClientCode" type="String">
        /// Gets or sets the clientCode for this client.
        /// </field>
        /// <field name="LoadDateID" type="Number">
        /// Gets or sets the loadDateID for this client.
        /// </field>
        /// <field name="BillingDetails" type="msls.EntityCollection" elementType="msls.application.BillingDetail">
        /// Gets the billingDetails for this client.
        /// </field>
        /// <field name="Projects" type="msls.EntityCollection" elementType="msls.application.Project">
        /// Gets the projects for this client.
        /// </field>
        /// <field name="sys_CreatedOn" type="Date">
        /// Gets or sets the sys_CreatedOn for this client.
        /// </field>
        /// <field name="sys_CreatedBy" type="String">
        /// Gets or sets the sys_CreatedBy for this client.
        /// </field>
        /// <field name="sys_ModifiedOn" type="Date">
        /// Gets or sets the sys_ModifiedOn for this client.
        /// </field>
        /// <field name="sys_ModifiedBy" type="String">
        /// Gets or sets the sys_ModifiedBy for this client.
        /// </field>
        /// <field name="Person" type="msls.application.Person">
        /// Gets or sets the person for this client.
        /// </field>
        /// <field name="ActiveType" type="msls.application.ActiveType">
        /// Gets or sets the activeType for this client.
        /// </field>
        /// <field name="InvoiceEmailAddress" type="String">
        /// Gets or sets the invoiceEmailAddress for this client.
        /// </field>
        /// <field name="InvoiceBank" type="String">
        /// Gets or sets the invoiceBank for this client.
        /// </field>
        /// <field name="InvoiceBankBranch" type="String">
        /// Gets or sets the invoiceBankBranch for this client.
        /// </field>
        /// <field name="InvoiceBankAccount" type="String">
        /// Gets or sets the invoiceBankAccount for this client.
        /// </field>
        /// <field name="InvoiceVATNumber" type="String">
        /// Gets or sets the invoiceVATNumber for this client.
        /// </field>
        /// <field name="InvoiceCompanyReg" type="String">
        /// Gets or sets the invoiceCompanyReg for this client.
        /// </field>
        /// <field name="InvoiceTelNo" type="String">
        /// Gets or sets the invoiceTelNo for this client.
        /// </field>
        /// <field name="InvoiceContactPerson" type="String">
        /// Gets or sets the invoiceContactPerson for this client.
        /// </field>
        /// <field name="InvoiceAddress" type="String">
        /// Gets or sets the invoiceAddress for this client.
        /// </field>
        /// <field name="Invoices" type="msls.EntityCollection" elementType="msls.application.Invoice">
        /// Gets the invoices for this client.
        /// </field>
        /// <field name="details" type="msls.application.Client.Details">
        /// Gets the details for this client.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function DimDate(entitySet) {
        /// <summary>
        /// Represents the DimDate entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this dimDate.
        /// </param>
        /// <field name="StandardDate" type="String">
        /// Gets or sets the standardDate for this dimDate.
        /// </field>
        /// <field name="DateID" type="Number">
        /// Gets or sets the dateID for this dimDate.
        /// </field>
        /// <field name="c_Date" type="Date">
        /// Gets or sets the c_Date for this dimDate.
        /// </field>
        /// <field name="Day" type="Number">
        /// Gets or sets the day for this dimDate.
        /// </field>
        /// <field name="DaySuffix" type="String">
        /// Gets or sets the daySuffix for this dimDate.
        /// </field>
        /// <field name="DayOfWeek" type="String">
        /// Gets or sets the dayOfWeek for this dimDate.
        /// </field>
        /// <field name="DOWInMonth" type="Number">
        /// Gets or sets the dOWInMonth for this dimDate.
        /// </field>
        /// <field name="DayOfYear" type="Number">
        /// Gets or sets the dayOfYear for this dimDate.
        /// </field>
        /// <field name="WeekOfYear" type="Number">
        /// Gets or sets the weekOfYear for this dimDate.
        /// </field>
        /// <field name="WeekOfMonth" type="Number">
        /// Gets or sets the weekOfMonth for this dimDate.
        /// </field>
        /// <field name="MonthNumber" type="Number">
        /// Gets or sets the monthNumber for this dimDate.
        /// </field>
        /// <field name="MonthName" type="String">
        /// Gets or sets the monthName for this dimDate.
        /// </field>
        /// <field name="Quarter" type="Number">
        /// Gets or sets the quarter for this dimDate.
        /// </field>
        /// <field name="QuarterName" type="String">
        /// Gets or sets the quarterName for this dimDate.
        /// </field>
        /// <field name="YearName" type="String">
        /// Gets or sets the yearName for this dimDate.
        /// </field>
        /// <field name="YearNumber" type="Number">
        /// Gets or sets the yearNumber for this dimDate.
        /// </field>
        /// <field name="IsPublicHoliday" type="Boolean">
        /// Gets or sets the isPublicHoliday for this dimDate.
        /// </field>
        /// <field name="HolidayText" type="String">
        /// Gets or sets the holidayText for this dimDate.
        /// </field>
        /// <field name="DateSK" type="Number">
        /// Gets or sets the dateSK for this dimDate.
        /// </field>
        /// <field name="TimesheetDetails" type="msls.EntityCollection" elementType="msls.application.TimesheetDetail">
        /// Gets the timesheetDetails for this dimDate.
        /// </field>
        /// <field name="sys_CreatedOn" type="Date">
        /// Gets or sets the sys_CreatedOn for this dimDate.
        /// </field>
        /// <field name="sys_CreatedBy" type="String">
        /// Gets or sets the sys_CreatedBy for this dimDate.
        /// </field>
        /// <field name="sys_ModifiedOn" type="Date">
        /// Gets or sets the sys_ModifiedOn for this dimDate.
        /// </field>
        /// <field name="sys_ModifiedBy" type="String">
        /// Gets or sets the sys_ModifiedBy for this dimDate.
        /// </field>
        /// <field name="Active" type="Number">
        /// Gets or sets the active for this dimDate.
        /// </field>
        /// <field name="Timesheets" type="msls.EntityCollection" elementType="msls.application.Timesheet">
        /// Gets the timesheets for this dimDate.
        /// </field>
        /// <field name="BillingDetails" type="msls.EntityCollection" elementType="msls.application.BillingDetail">
        /// Gets the billingDetails for this dimDate.
        /// </field>
        /// <field name="ContractorYear" type="Number">
        /// Gets or sets the contractorYear for this dimDate.
        /// </field>
        /// <field name="ContractorMonth" type="Number">
        /// Gets or sets the contractorMonth for this dimDate.
        /// </field>
        /// <field name="ContractorPeriod" type="String">
        /// Gets or sets the contractorPeriod for this dimDate.
        /// </field>
        /// <field name="BillingYear" type="String">
        /// Gets or sets the billingYear for this dimDate.
        /// </field>
        /// <field name="WeekEndingBillingPeriod" type="String">
        /// Gets or sets the weekEndingBillingPeriod for this dimDate.
        /// </field>
        /// <field name="BillingPeriodText" type="String">
        /// Gets or sets the billingPeriodText for this dimDate.
        /// </field>
        /// <field name="BillingPeriod" type="Number">
        /// Gets or sets the billingPeriod for this dimDate.
        /// </field>
        /// <field name="WeekEnding" type="Date">
        /// Gets or sets the weekEnding for this dimDate.
        /// </field>
        /// <field name="WeekEndingText" type="String">
        /// Gets or sets the weekEndingText for this dimDate.
        /// </field>
        /// <field name="Invoices" type="msls.EntityCollection" elementType="msls.application.Invoice">
        /// Gets the invoices for this dimDate.
        /// </field>
        /// <field name="Invoices1" type="msls.EntityCollection" elementType="msls.application.Invoice">
        /// Gets the invoices1 for this dimDate.
        /// </field>
        /// <field name="Invoices2" type="msls.EntityCollection" elementType="msls.application.Invoice">
        /// Gets the invoices2 for this dimDate.
        /// </field>
        /// <field name="details" type="msls.application.DimDate.Details">
        /// Gets the details for this dimDate.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function InvoiceLine(entitySet) {
        /// <summary>
        /// Represents the InvoiceLine entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this invoiceLine.
        /// </param>
        /// <field name="InvoiceLineID" type="Number">
        /// Gets or sets the invoiceLineID for this invoiceLine.
        /// </field>
        /// <field name="LoadDate" type="Date">
        /// Gets or sets the loadDate for this invoiceLine.
        /// </field>
        /// <field name="LoadDateID" type="Number">
        /// Gets or sets the loadDateID for this invoiceLine.
        /// </field>
        /// <field name="InvoiceLineDescription" type="String">
        /// Gets or sets the invoiceLineDescription for this invoiceLine.
        /// </field>
        /// <field name="InvoiceLineCode" type="String">
        /// Gets or sets the invoiceLineCode for this invoiceLine.
        /// </field>
        /// <field name="InvoiceLineRate" type="String">
        /// Gets or sets the invoiceLineRate for this invoiceLine.
        /// </field>
        /// <field name="InvoiceLineQty" type="Number">
        /// Gets or sets the invoiceLineQty for this invoiceLine.
        /// </field>
        /// <field name="InvoiceLineAmount" type="String">
        /// Gets or sets the invoiceLineAmount for this invoiceLine.
        /// </field>
        /// <field name="sys_CreatedOn" type="Date">
        /// Gets or sets the sys_CreatedOn for this invoiceLine.
        /// </field>
        /// <field name="sys_CreatedBy" type="String">
        /// Gets or sets the sys_CreatedBy for this invoiceLine.
        /// </field>
        /// <field name="sys_ModifiedOn" type="Date">
        /// Gets or sets the sys_ModifiedOn for this invoiceLine.
        /// </field>
        /// <field name="sys_ModifiedBy" type="String">
        /// Gets or sets the sys_ModifiedBy for this invoiceLine.
        /// </field>
        /// <field name="ActiveType" type="msls.application.ActiveType">
        /// Gets or sets the activeType for this invoiceLine.
        /// </field>
        /// <field name="Invoice" type="msls.application.Invoice">
        /// Gets or sets the invoice for this invoiceLine.
        /// </field>
        /// <field name="ClientRole" type="msls.application.ClientRole">
        /// Gets or sets the clientRole for this invoiceLine.
        /// </field>
        /// <field name="Person" type="msls.application.Person">
        /// Gets or sets the person for this invoiceLine.
        /// </field>
        /// <field name="Project" type="msls.application.Project">
        /// Gets or sets the project for this invoiceLine.
        /// </field>
        /// <field name="TimesheetDetails" type="msls.EntityCollection" elementType="msls.application.TimesheetDetail">
        /// Gets the timesheetDetails for this invoiceLine.
        /// </field>
        /// <field name="InvoiceLineCalcedAmount" type="String">
        /// Gets or sets the invoiceLineCalcedAmount for this invoiceLine.
        /// </field>
        /// <field name="details" type="msls.application.InvoiceLine.Details">
        /// Gets the details for this invoiceLine.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Invoice(entitySet) {
        /// <summary>
        /// Represents the Invoice entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this invoice.
        /// </param>
        /// <field name="InvoiceID" type="Number">
        /// Gets or sets the invoiceID for this invoice.
        /// </field>
        /// <field name="InvoiceSourceKey" type="String">
        /// Gets or sets the invoiceSourceKey for this invoice.
        /// </field>
        /// <field name="LoadDate" type="Date">
        /// Gets or sets the loadDate for this invoice.
        /// </field>
        /// <field name="InvoiceFileName" type="String">
        /// Gets or sets the invoiceFileName for this invoice.
        /// </field>
        /// <field name="LoadDateID" type="Number">
        /// Gets or sets the loadDateID for this invoice.
        /// </field>
        /// <field name="Comments" type="String">
        /// Gets or sets the comments for this invoice.
        /// </field>
        /// <field name="InvoiceEmailAddress" type="String">
        /// Gets or sets the invoiceEmailAddress for this invoice.
        /// </field>
        /// <field name="InvoiceNumber" type="String">
        /// Gets or sets the invoiceNumber for this invoice.
        /// </field>
        /// <field name="sys_CreatedOn" type="Date">
        /// Gets or sets the sys_CreatedOn for this invoice.
        /// </field>
        /// <field name="sys_CreatedBy" type="String">
        /// Gets or sets the sys_CreatedBy for this invoice.
        /// </field>
        /// <field name="sys_ModifiedOn" type="Date">
        /// Gets or sets the sys_ModifiedOn for this invoice.
        /// </field>
        /// <field name="sys_ModifiedBy" type="String">
        /// Gets or sets the sys_ModifiedBy for this invoice.
        /// </field>
        /// <field name="ActiveType" type="msls.application.ActiveType">
        /// Gets or sets the activeType for this invoice.
        /// </field>
        /// <field name="Person" type="msls.application.Person">
        /// Gets or sets the person for this invoice.
        /// </field>
        /// <field name="Client" type="msls.application.Client">
        /// Gets or sets the client for this invoice.
        /// </field>
        /// <field name="DimDate" type="msls.application.DimDate">
        /// Gets or sets the dimDate for this invoice.
        /// </field>
        /// <field name="DimDate1" type="msls.application.DimDate">
        /// Gets or sets the dimDate1 for this invoice.
        /// </field>
        /// <field name="DimDate2" type="msls.application.DimDate">
        /// Gets or sets the dimDate2 for this invoice.
        /// </field>
        /// <field name="InvoiceStatu" type="msls.application.InvoiceStatu">
        /// Gets or sets the invoiceStatu for this invoice.
        /// </field>
        /// <field name="InvoiceLines" type="msls.EntityCollection" elementType="msls.application.InvoiceLine">
        /// Gets the invoiceLines for this invoice.
        /// </field>
        /// <field name="InvoicePurchaseOrderNo" type="String">
        /// Gets or sets the invoicePurchaseOrderNo for this invoice.
        /// </field>
        /// <field name="details" type="msls.application.Invoice.Details">
        /// Gets the details for this invoice.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function InvoiceStatu(entitySet) {
        /// <summary>
        /// Represents the InvoiceStatu entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this invoiceStatu.
        /// </param>
        /// <field name="InvoiceStatusID" type="Number">
        /// Gets or sets the invoiceStatusID for this invoiceStatu.
        /// </field>
        /// <field name="InvoiceStatusName" type="String">
        /// Gets or sets the invoiceStatusName for this invoiceStatu.
        /// </field>
        /// <field name="InvoiceStatusSourceKey" type="String">
        /// Gets or sets the invoiceStatusSourceKey for this invoiceStatu.
        /// </field>
        /// <field name="LoadDate" type="Date">
        /// Gets or sets the loadDate for this invoiceStatu.
        /// </field>
        /// <field name="InvoiceStatusCode" type="String">
        /// Gets or sets the invoiceStatusCode for this invoiceStatu.
        /// </field>
        /// <field name="LoadDateID" type="Number">
        /// Gets or sets the loadDateID for this invoiceStatu.
        /// </field>
        /// <field name="sys_CreatedOn" type="Date">
        /// Gets or sets the sys_CreatedOn for this invoiceStatu.
        /// </field>
        /// <field name="sys_CreatedBy" type="String">
        /// Gets or sets the sys_CreatedBy for this invoiceStatu.
        /// </field>
        /// <field name="sys_ModifiedOn" type="Date">
        /// Gets or sets the sys_ModifiedOn for this invoiceStatu.
        /// </field>
        /// <field name="sys_ModifiedBy" type="String">
        /// Gets or sets the sys_ModifiedBy for this invoiceStatu.
        /// </field>
        /// <field name="Invoices" type="msls.EntityCollection" elementType="msls.application.Invoice">
        /// Gets the invoices for this invoiceStatu.
        /// </field>
        /// <field name="ActiveType" type="msls.application.ActiveType">
        /// Gets or sets the activeType for this invoiceStatu.
        /// </field>
        /// <field name="details" type="msls.application.InvoiceStatu.Details">
        /// Gets the details for this invoiceStatu.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Person(entitySet) {
        /// <summary>
        /// Represents the Person entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this person.
        /// </param>
        /// <field name="PersonName" type="String">
        /// Gets or sets the personName for this person.
        /// </field>
        /// <field name="PersonID" type="Number">
        /// Gets or sets the personID for this person.
        /// </field>
        /// <field name="PersonSourceKey" type="String">
        /// Gets or sets the personSourceKey for this person.
        /// </field>
        /// <field name="LoadDate" type="Date">
        /// Gets or sets the loadDate for this person.
        /// </field>
        /// <field name="PersonCode" type="String">
        /// Gets or sets the personCode for this person.
        /// </field>
        /// <field name="LoadDateID" type="Number">
        /// Gets or sets the loadDateID for this person.
        /// </field>
        /// <field name="BillingPercentTarget" type="Number">
        /// Gets or sets the billingPercentTarget for this person.
        /// </field>
        /// <field name="BillingPercentMinimum" type="Number">
        /// Gets or sets the billingPercentMinimum for this person.
        /// </field>
        /// <field name="Email" type="String">
        /// Gets or sets the email for this person.
        /// </field>
        /// <field name="StartDate" type="Date">
        /// Gets or sets the startDate for this person.
        /// </field>
        /// <field name="HourlyCost" type="Number">
        /// Gets or sets the hourlyCost for this person.
        /// </field>
        /// <field name="MonthlyCost" type="String">
        /// Gets or sets the monthlyCost for this person.
        /// </field>
        /// <field name="IsContractor" type="Number">
        /// Gets or sets the isContractor for this person.
        /// </field>
        /// <field name="Billable" type="Number">
        /// Gets or sets the billable for this person.
        /// </field>
        /// <field name="BillingDetails" type="msls.EntityCollection" elementType="msls.application.BillingDetail">
        /// Gets the billingDetails for this person.
        /// </field>
        /// <field name="Projects" type="msls.EntityCollection" elementType="msls.application.Project">
        /// Gets the projects for this person.
        /// </field>
        /// <field name="TimesheetDetails" type="msls.EntityCollection" elementType="msls.application.TimesheetDetail">
        /// Gets the timesheetDetails for this person.
        /// </field>
        /// <field name="sys_CreatedOn" type="Date">
        /// Gets or sets the sys_CreatedOn for this person.
        /// </field>
        /// <field name="sys_CreatedBy" type="String">
        /// Gets or sets the sys_CreatedBy for this person.
        /// </field>
        /// <field name="sys_ModifiedOn" type="Date">
        /// Gets or sets the sys_ModifiedOn for this person.
        /// </field>
        /// <field name="sys_ModifiedBy" type="String">
        /// Gets or sets the sys_ModifiedBy for this person.
        /// </field>
        /// <field name="SystemRole" type="msls.application.SystemRole">
        /// Gets or sets the systemRole for this person.
        /// </field>
        /// <field name="ADUsername" type="String">
        /// Gets or sets the aDUsername for this person.
        /// </field>
        /// <field name="Clients" type="msls.EntityCollection" elementType="msls.application.Client">
        /// Gets the clients for this person.
        /// </field>
        /// <field name="ActiveType" type="msls.application.ActiveType">
        /// Gets or sets the activeType for this person.
        /// </field>
        /// <field name="SharepointUserName" type="String">
        /// Gets or sets the sharepointUserName for this person.
        /// </field>
        /// <field name="Timesheets" type="msls.EntityCollection" elementType="msls.application.Timesheet">
        /// Gets the timesheets for this person.
        /// </field>
        /// <field name="Invoices" type="msls.EntityCollection" elementType="msls.application.Invoice">
        /// Gets the invoices for this person.
        /// </field>
        /// <field name="InvoiceLines" type="msls.EntityCollection" elementType="msls.application.InvoiceLine">
        /// Gets the invoiceLines for this person.
        /// </field>
        /// <field name="ResourcePlans" type="msls.EntityCollection" elementType="msls.application.ResourcePlan">
        /// Gets the resourcePlans for this person.
        /// </field>
        /// <field name="ResourcePlanRanges" type="msls.EntityCollection" elementType="msls.application.ResourcePlanRange">
        /// Gets the resourcePlanRanges for this person.
        /// </field>
        /// <field name="details" type="msls.application.Person.Details">
        /// Gets the details for this person.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Project(entitySet) {
        /// <summary>
        /// Represents the Project entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this project.
        /// </param>
        /// <field name="ProjectID" type="Number">
        /// Gets or sets the projectID for this project.
        /// </field>
        /// <field name="ProjectName" type="String">
        /// Gets or sets the projectName for this project.
        /// </field>
        /// <field name="ProjectSourceKey" type="String">
        /// Gets or sets the projectSourceKey for this project.
        /// </field>
        /// <field name="LoadDate" type="Date">
        /// Gets or sets the loadDate for this project.
        /// </field>
        /// <field name="ProjectCode" type="String">
        /// Gets or sets the projectCode for this project.
        /// </field>
        /// <field name="LoadDateID" type="Number">
        /// Gets or sets the loadDateID for this project.
        /// </field>
        /// <field name="ProjectFirstPersonName" type="String">
        /// Gets or sets the projectFirstPersonName for this project.
        /// </field>
        /// <field name="ProjectFirstFilename" type="String">
        /// Gets or sets the projectFirstFilename for this project.
        /// </field>
        /// <field name="ConsultingEstimate" type="String">
        /// Gets or sets the consultingEstimate for this project.
        /// </field>
        /// <field name="SoftwareEstimate" type="String">
        /// Gets or sets the softwareEstimate for this project.
        /// </field>
        /// <field name="VMEstimate" type="String">
        /// Gets or sets the vMEstimate for this project.
        /// </field>
        /// <field name="ProjectCap" type="String">
        /// Gets or sets the projectCap for this project.
        /// </field>
        /// <field name="AdminProject" type="Number">
        /// Gets or sets the adminProject for this project.
        /// </field>
        /// <field name="BillingStatus" type="msls.application.BillingStatus">
        /// Gets or sets the billingStatus for this project.
        /// </field>
        /// <field name="Client" type="msls.application.Client">
        /// Gets or sets the client for this project.
        /// </field>
        /// <field name="Person" type="msls.application.Person">
        /// Gets or sets the person for this project.
        /// </field>
        /// <field name="TimesheetDetails" type="msls.EntityCollection" elementType="msls.application.TimesheetDetail">
        /// Gets the timesheetDetails for this project.
        /// </field>
        /// <field name="sys_CreatedOn" type="Date">
        /// Gets or sets the sys_CreatedOn for this project.
        /// </field>
        /// <field name="sys_CreatedBy" type="String">
        /// Gets or sets the sys_CreatedBy for this project.
        /// </field>
        /// <field name="sys_ModifiedOn" type="Date">
        /// Gets or sets the sys_ModifiedOn for this project.
        /// </field>
        /// <field name="sys_ModifiedBy" type="String">
        /// Gets or sets the sys_ModifiedBy for this project.
        /// </field>
        /// <field name="ActiveType" type="msls.application.ActiveType">
        /// Gets or sets the activeType for this project.
        /// </field>
        /// <field name="MonthlyCap" type="String">
        /// Gets or sets the monthlyCap for this project.
        /// </field>
        /// <field name="MonthlyCapWarning" type="String">
        /// Gets or sets the monthlyCapWarning for this project.
        /// </field>
        /// <field name="ProjectCapWarning" type="String">
        /// Gets or sets the projectCapWarning for this project.
        /// </field>
        /// <field name="InvoiceEmailAddress" type="String">
        /// Gets or sets the invoiceEmailAddress for this project.
        /// </field>
        /// <field name="InvoiceLines" type="msls.EntityCollection" elementType="msls.application.InvoiceLine">
        /// Gets the invoiceLines for this project.
        /// </field>
        /// <field name="CommPercent" type="String">
        /// Gets or sets the commPercent for this project.
        /// </field>
        /// <field name="ResourcePlans" type="msls.EntityCollection" elementType="msls.application.ResourcePlan">
        /// Gets the resourcePlans for this project.
        /// </field>
        /// <field name="ResourcePlanRanges" type="msls.EntityCollection" elementType="msls.application.ResourcePlanRange">
        /// Gets the resourcePlanRanges for this project.
        /// </field>
        /// <field name="details" type="msls.application.Project.Details">
        /// Gets the details for this project.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ResourcePlan(entitySet) {
        /// <summary>
        /// Represents the ResourcePlan entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this resourcePlan.
        /// </param>
        /// <field name="ResourcePlanID" type="Number">
        /// Gets or sets the resourcePlanID for this resourcePlan.
        /// </field>
        /// <field name="ResourcePlanComments" type="String">
        /// Gets or sets the resourcePlanComments for this resourcePlan.
        /// </field>
        /// <field name="WeekEndingDate" type="Date">
        /// Gets or sets the weekEndingDate for this resourcePlan.
        /// </field>
        /// <field name="Blocks" type="Number">
        /// Gets or sets the blocks for this resourcePlan.
        /// </field>
        /// <field name="sys_CreatedOn" type="Date">
        /// Gets or sets the sys_CreatedOn for this resourcePlan.
        /// </field>
        /// <field name="sys_CreatedBy" type="String">
        /// Gets or sets the sys_CreatedBy for this resourcePlan.
        /// </field>
        /// <field name="sys_ModifiedOn" type="Date">
        /// Gets or sets the sys_ModifiedOn for this resourcePlan.
        /// </field>
        /// <field name="sys_ModifiedBy" type="String">
        /// Gets or sets the sys_ModifiedBy for this resourcePlan.
        /// </field>
        /// <field name="Person" type="msls.application.Person">
        /// Gets or sets the person for this resourcePlan.
        /// </field>
        /// <field name="Project" type="msls.application.Project">
        /// Gets or sets the project for this resourcePlan.
        /// </field>
        /// <field name="details" type="msls.application.ResourcePlan.Details">
        /// Gets the details for this resourcePlan.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function RoleType(entitySet) {
        /// <summary>
        /// Represents the RoleType entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this roleType.
        /// </param>
        /// <field name="RoleTypeID" type="Number">
        /// Gets or sets the roleTypeID for this roleType.
        /// </field>
        /// <field name="RoleTypeName" type="String">
        /// Gets or sets the roleTypeName for this roleType.
        /// </field>
        /// <field name="RoleTypeSourceKey" type="String">
        /// Gets or sets the roleTypeSourceKey for this roleType.
        /// </field>
        /// <field name="LoadDate" type="Date">
        /// Gets or sets the loadDate for this roleType.
        /// </field>
        /// <field name="RoleTypeCode" type="String">
        /// Gets or sets the roleTypeCode for this roleType.
        /// </field>
        /// <field name="LoadDateID" type="Number">
        /// Gets or sets the loadDateID for this roleType.
        /// </field>
        /// <field name="sys_CreatedOn" type="Date">
        /// Gets or sets the sys_CreatedOn for this roleType.
        /// </field>
        /// <field name="sys_CreatedBy" type="String">
        /// Gets or sets the sys_CreatedBy for this roleType.
        /// </field>
        /// <field name="sys_ModifiedOn" type="Date">
        /// Gets or sets the sys_ModifiedOn for this roleType.
        /// </field>
        /// <field name="sys_ModifiedBy" type="String">
        /// Gets or sets the sys_ModifiedBy for this roleType.
        /// </field>
        /// <field name="ActiveType" type="msls.application.ActiveType">
        /// Gets or sets the activeType for this roleType.
        /// </field>
        /// <field name="details" type="msls.application.RoleType.Details">
        /// Gets the details for this roleType.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function SystemRole(entitySet) {
        /// <summary>
        /// Represents the SystemRole entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this systemRole.
        /// </param>
        /// <field name="SystemRoleID" type="Number">
        /// Gets or sets the systemRoleID for this systemRole.
        /// </field>
        /// <field name="SystemRoleName" type="String">
        /// Gets or sets the systemRoleName for this systemRole.
        /// </field>
        /// <field name="SystemRoleSourceKey" type="String">
        /// Gets or sets the systemRoleSourceKey for this systemRole.
        /// </field>
        /// <field name="LoadDate" type="Date">
        /// Gets or sets the loadDate for this systemRole.
        /// </field>
        /// <field name="SystemRoleCode" type="String">
        /// Gets or sets the systemRoleCode for this systemRole.
        /// </field>
        /// <field name="LoadDateID" type="Number">
        /// Gets or sets the loadDateID for this systemRole.
        /// </field>
        /// <field name="sys_CreatedOn" type="Date">
        /// Gets or sets the sys_CreatedOn for this systemRole.
        /// </field>
        /// <field name="sys_CreatedBy" type="String">
        /// Gets or sets the sys_CreatedBy for this systemRole.
        /// </field>
        /// <field name="sys_ModifiedOn" type="Date">
        /// Gets or sets the sys_ModifiedOn for this systemRole.
        /// </field>
        /// <field name="sys_ModifiedBy" type="String">
        /// Gets or sets the sys_ModifiedBy for this systemRole.
        /// </field>
        /// <field name="People" type="msls.EntityCollection" elementType="msls.application.Person">
        /// Gets the people for this systemRole.
        /// </field>
        /// <field name="ActiveType" type="msls.application.ActiveType">
        /// Gets or sets the activeType for this systemRole.
        /// </field>
        /// <field name="details" type="msls.application.SystemRole.Details">
        /// Gets the details for this systemRole.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function TimesheetDetail(entitySet) {
        /// <summary>
        /// Represents the TimesheetDetail entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this timesheetDetail.
        /// </param>
        /// <field name="TimesheetDetailID" type="Number">
        /// Gets or sets the timesheetDetailID for this timesheetDetail.
        /// </field>
        /// <field name="TimesheetDetailSourceKey" type="String">
        /// Gets or sets the timesheetDetailSourceKey for this timesheetDetail.
        /// </field>
        /// <field name="LoadDate" type="Date">
        /// Gets or sets the loadDate for this timesheetDetail.
        /// </field>
        /// <field name="TimesheetDetailName" type="String">
        /// Gets or sets the timesheetDetailName for this timesheetDetail.
        /// </field>
        /// <field name="TimesheetDetailCode" type="String">
        /// Gets or sets the timesheetDetailCode for this timesheetDetail.
        /// </field>
        /// <field name="TimesheetDetailFileName" type="String">
        /// Gets or sets the timesheetDetailFileName for this timesheetDetail.
        /// </field>
        /// <field name="LoadDateID" type="Number">
        /// Gets or sets the loadDateID for this timesheetDetail.
        /// </field>
        /// <field name="Hours" type="String">
        /// Gets or sets the hours for this timesheetDetail.
        /// </field>
        /// <field name="Comments" type="String">
        /// Gets or sets the comments for this timesheetDetail.
        /// </field>
        /// <field name="ClientComments" type="String">
        /// Gets or sets the clientComments for this timesheetDetail.
        /// </field>
        /// <field name="AMComments" type="String">
        /// Gets or sets the aMComments for this timesheetDetail.
        /// </field>
        /// <field name="Exclude" type="Number">
        /// Gets or sets the exclude for this timesheetDetail.
        /// </field>
        /// <field name="LastUpdateDate" type="Date">
        /// Gets or sets the lastUpdateDate for this timesheetDetail.
        /// </field>
        /// <field name="DimDate" type="msls.application.DimDate">
        /// Gets or sets the dimDate for this timesheetDetail.
        /// </field>
        /// <field name="Person" type="msls.application.Person">
        /// Gets or sets the person for this timesheetDetail.
        /// </field>
        /// <field name="Project" type="msls.application.Project">
        /// Gets or sets the project for this timesheetDetail.
        /// </field>
        /// <field name="Timesheet" type="msls.application.Timesheet">
        /// Gets or sets the timesheet for this timesheetDetail.
        /// </field>
        /// <field name="TypeOfWork" type="msls.application.TypeOfWork">
        /// Gets or sets the typeOfWork for this timesheetDetail.
        /// </field>
        /// <field name="sys_CreatedOn" type="Date">
        /// Gets or sets the sys_CreatedOn for this timesheetDetail.
        /// </field>
        /// <field name="sys_CreatedBy" type="String">
        /// Gets or sets the sys_CreatedBy for this timesheetDetail.
        /// </field>
        /// <field name="sys_ModifiedOn" type="Date">
        /// Gets or sets the sys_ModifiedOn for this timesheetDetail.
        /// </field>
        /// <field name="sys_ModifiedBy" type="String">
        /// Gets or sets the sys_ModifiedBy for this timesheetDetail.
        /// </field>
        /// <field name="BillingStatus" type="msls.application.BillingStatus">
        /// Gets or sets the billingStatus for this timesheetDetail.
        /// </field>
        /// <field name="ActiveType" type="msls.application.ActiveType">
        /// Gets or sets the activeType for this timesheetDetail.
        /// </field>
        /// <field name="VerCol" type="Array">
        /// Gets or sets the verCol for this timesheetDetail.
        /// </field>
        /// <field name="InvoiceLine" type="msls.application.InvoiceLine">
        /// Gets or sets the invoiceLine for this timesheetDetail.
        /// </field>
        /// <field name="details" type="msls.application.TimesheetDetail.Details">
        /// Gets the details for this timesheetDetail.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Timesheet(entitySet) {
        /// <summary>
        /// Represents the Timesheet entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this timesheet.
        /// </param>
        /// <field name="TimesheetID" type="Number">
        /// Gets or sets the timesheetID for this timesheet.
        /// </field>
        /// <field name="TimesheetSourceKey" type="String">
        /// Gets or sets the timesheetSourceKey for this timesheet.
        /// </field>
        /// <field name="LoadDate" type="Date">
        /// Gets or sets the loadDate for this timesheet.
        /// </field>
        /// <field name="TimesheetName" type="String">
        /// Gets or sets the timesheetName for this timesheet.
        /// </field>
        /// <field name="TimesheetCode" type="String">
        /// Gets or sets the timesheetCode for this timesheet.
        /// </field>
        /// <field name="TimesheetFileName" type="String">
        /// Gets or sets the timesheetFileName for this timesheet.
        /// </field>
        /// <field name="TimesheetFromDateID" type="Number">
        /// Gets or sets the timesheetFromDateID for this timesheet.
        /// </field>
        /// <field name="TimesheetToDateID" type="Number">
        /// Gets or sets the timesheetToDateID for this timesheet.
        /// </field>
        /// <field name="TimesheetPerson" type="String">
        /// Gets or sets the timesheetPerson for this timesheet.
        /// </field>
        /// <field name="TimesheetDate" type="String">
        /// Gets or sets the timesheetDate for this timesheet.
        /// </field>
        /// <field name="LoadDateID" type="Number">
        /// Gets or sets the loadDateID for this timesheet.
        /// </field>
        /// <field name="TimesheetDetails" type="msls.EntityCollection" elementType="msls.application.TimesheetDetail">
        /// Gets the timesheetDetails for this timesheet.
        /// </field>
        /// <field name="OverallStatusID" type="Number">
        /// Gets or sets the overallStatusID for this timesheet.
        /// </field>
        /// <field name="sys_CreatedOn" type="Date">
        /// Gets or sets the sys_CreatedOn for this timesheet.
        /// </field>
        /// <field name="sys_CreatedBy" type="String">
        /// Gets or sets the sys_CreatedBy for this timesheet.
        /// </field>
        /// <field name="sys_ModifiedOn" type="Date">
        /// Gets or sets the sys_ModifiedOn for this timesheet.
        /// </field>
        /// <field name="sys_ModifiedBy" type="String">
        /// Gets or sets the sys_ModifiedBy for this timesheet.
        /// </field>
        /// <field name="DimDate" type="msls.application.DimDate">
        /// Gets or sets the dimDate for this timesheet.
        /// </field>
        /// <field name="ActiveType" type="msls.application.ActiveType">
        /// Gets or sets the activeType for this timesheet.
        /// </field>
        /// <field name="PeriodEnding" type="Date">
        /// Gets or sets the periodEnding for this timesheet.
        /// </field>
        /// <field name="Person" type="msls.application.Person">
        /// Gets or sets the person for this timesheet.
        /// </field>
        /// <field name="VerCol" type="Array">
        /// Gets or sets the verCol for this timesheet.
        /// </field>
        /// <field name="details" type="msls.application.Timesheet.Details">
        /// Gets the details for this timesheet.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function TypeOfWork(entitySet) {
        /// <summary>
        /// Represents the TypeOfWork entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this typeOfWork.
        /// </param>
        /// <field name="TypeOfWorkID" type="Number">
        /// Gets or sets the typeOfWorkID for this typeOfWork.
        /// </field>
        /// <field name="TypeOfWorkName" type="String">
        /// Gets or sets the typeOfWorkName for this typeOfWork.
        /// </field>
        /// <field name="TypeOfWorkSourceKey" type="String">
        /// Gets or sets the typeOfWorkSourceKey for this typeOfWork.
        /// </field>
        /// <field name="LoadDate" type="Date">
        /// Gets or sets the loadDate for this typeOfWork.
        /// </field>
        /// <field name="TypeOfWorkCode" type="String">
        /// Gets or sets the typeOfWorkCode for this typeOfWork.
        /// </field>
        /// <field name="LoadDateID" type="Number">
        /// Gets or sets the loadDateID for this typeOfWork.
        /// </field>
        /// <field name="TimesheetDetails" type="msls.EntityCollection" elementType="msls.application.TimesheetDetail">
        /// Gets the timesheetDetails for this typeOfWork.
        /// </field>
        /// <field name="sys_CreatedOn" type="Date">
        /// Gets or sets the sys_CreatedOn for this typeOfWork.
        /// </field>
        /// <field name="sys_CreatedBy" type="String">
        /// Gets or sets the sys_CreatedBy for this typeOfWork.
        /// </field>
        /// <field name="sys_ModifiedOn" type="Date">
        /// Gets or sets the sys_ModifiedOn for this typeOfWork.
        /// </field>
        /// <field name="sys_ModifiedBy" type="String">
        /// Gets or sets the sys_ModifiedBy for this typeOfWork.
        /// </field>
        /// <field name="ActiveType" type="msls.application.ActiveType">
        /// Gets or sets the activeType for this typeOfWork.
        /// </field>
        /// <field name="details" type="msls.application.TypeOfWork.Details">
        /// Gets the details for this typeOfWork.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function UnallocatedTimesheet(entitySet) {
        /// <summary>
        /// Represents the UnallocatedTimesheet entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this unallocatedTimesheet.
        /// </param>
        /// <field name="BillingStatusID" type="Number">
        /// Gets or sets the billingStatusID for this unallocatedTimesheet.
        /// </field>
        /// <field name="BillingStatusName" type="String">
        /// Gets or sets the billingStatusName for this unallocatedTimesheet.
        /// </field>
        /// <field name="ClientName" type="String">
        /// Gets or sets the clientName for this unallocatedTimesheet.
        /// </field>
        /// <field name="ProjectName" type="String">
        /// Gets or sets the projectName for this unallocatedTimesheet.
        /// </field>
        /// <field name="TimesheetDetailID" type="Number">
        /// Gets or sets the timesheetDetailID for this unallocatedTimesheet.
        /// </field>
        /// <field name="TimesheetDetailSourceKey" type="String">
        /// Gets or sets the timesheetDetailSourceKey for this unallocatedTimesheet.
        /// </field>
        /// <field name="LoadDate" type="Date">
        /// Gets or sets the loadDate for this unallocatedTimesheet.
        /// </field>
        /// <field name="Active" type="Number">
        /// Gets or sets the active for this unallocatedTimesheet.
        /// </field>
        /// <field name="TimesheetDetailFileName" type="String">
        /// Gets or sets the timesheetDetailFileName for this unallocatedTimesheet.
        /// </field>
        /// <field name="TimesheetDetailDateID" type="Number">
        /// Gets or sets the timesheetDetailDateID for this unallocatedTimesheet.
        /// </field>
        /// <field name="LoadDateID" type="Number">
        /// Gets or sets the loadDateID for this unallocatedTimesheet.
        /// </field>
        /// <field name="Hours" type="String">
        /// Gets or sets the hours for this unallocatedTimesheet.
        /// </field>
        /// <field name="TimesheetID" type="Number">
        /// Gets or sets the timesheetID for this unallocatedTimesheet.
        /// </field>
        /// <field name="Comments" type="String">
        /// Gets or sets the comments for this unallocatedTimesheet.
        /// </field>
        /// <field name="ClientComments" type="String">
        /// Gets or sets the clientComments for this unallocatedTimesheet.
        /// </field>
        /// <field name="AMComments" type="String">
        /// Gets or sets the aMComments for this unallocatedTimesheet.
        /// </field>
        /// <field name="Exclude" type="Number">
        /// Gets or sets the exclude for this unallocatedTimesheet.
        /// </field>
        /// <field name="TypeOfWorkName" type="String">
        /// Gets or sets the typeOfWorkName for this unallocatedTimesheet.
        /// </field>
        /// <field name="AccountManager" type="String">
        /// Gets or sets the accountManager for this unallocatedTimesheet.
        /// </field>
        /// <field name="AMEmail" type="String">
        /// Gets or sets the aMEmail for this unallocatedTimesheet.
        /// </field>
        /// <field name="BillingPeriodText" type="String">
        /// Gets or sets the billingPeriodText for this unallocatedTimesheet.
        /// </field>
        /// <field name="ADUserName" type="String">
        /// Gets or sets the aDUserName for this unallocatedTimesheet.
        /// </field>
        /// <field name="SharePointUserName" type="String">
        /// Gets or sets the sharePointUserName for this unallocatedTimesheet.
        /// </field>
        /// <field name="details" type="msls.application.UnallocatedTimesheet.Details">
        /// Gets the details for this unallocatedTimesheet.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function TimesheetHour(entitySet) {
        /// <summary>
        /// Represents the TimesheetHour entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this timesheetHour.
        /// </param>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this timesheetHour.
        /// </field>
        /// <field name="Value" type="String">
        /// Gets or sets the value for this timesheetHour.
        /// </field>
        /// <field name="c_Date" type="Date">
        /// Gets or sets the c_Date for this timesheetHour.
        /// </field>
        /// <field name="details" type="msls.application.TimesheetHour.Details">
        /// Gets the details for this timesheetHour.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ResourcePlanRange(entitySet) {
        /// <summary>
        /// Represents the ResourcePlanRange entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this resourcePlanRange.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this resourcePlanRange.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this resourcePlanRange.
        /// </field>
        /// <field name="Comments" type="String">
        /// Gets or sets the comments for this resourcePlanRange.
        /// </field>
        /// <field name="StartDate" type="Date">
        /// Gets or sets the startDate for this resourcePlanRange.
        /// </field>
        /// <field name="EndDate" type="Date">
        /// Gets or sets the endDate for this resourcePlanRange.
        /// </field>
        /// <field name="Blocks" type="Number">
        /// Gets or sets the blocks for this resourcePlanRange.
        /// </field>
        /// <field name="Person" type="Person">
        /// Gets or sets the person for this resourcePlanRange.
        /// </field>
        /// <field name="Person_PersonID" type="Number">
        /// Gets or sets the person_PersonID for this resourcePlanRange.
        /// </field>
        /// <field name="Project" type="Project">
        /// Gets or sets the project for this resourcePlanRange.
        /// </field>
        /// <field name="Project_ProjectID" type="Number">
        /// Gets or sets the project_ProjectID for this resourcePlanRange.
        /// </field>
        /// <field name="details" type="msls.application.ResourcePlanRange.Details">
        /// Gets the details for this resourcePlanRange.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Timesheets_Data(dataWorkspace) {
        /// <summary>
        /// Represents the Timesheets_Data data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="ActiveTypes" type="msls.EntitySet">
        /// Gets the ActiveTypes entity set.
        /// </field>
        /// <field name="BillingDetails" type="msls.EntitySet">
        /// Gets the BillingDetails entity set.
        /// </field>
        /// <field name="BillingStatusSet" type="msls.EntitySet">
        /// Gets the BillingStatusSet entity set.
        /// </field>
        /// <field name="ClientRoles" type="msls.EntitySet">
        /// Gets the ClientRoles entity set.
        /// </field>
        /// <field name="Clients" type="msls.EntitySet">
        /// Gets the Clients entity set.
        /// </field>
        /// <field name="DimDates" type="msls.EntitySet">
        /// Gets the DimDates entity set.
        /// </field>
        /// <field name="InvoiceLines" type="msls.EntitySet">
        /// Gets the InvoiceLines entity set.
        /// </field>
        /// <field name="Invoices" type="msls.EntitySet">
        /// Gets the Invoices entity set.
        /// </field>
        /// <field name="InvoiceStatus" type="msls.EntitySet">
        /// Gets the InvoiceStatus entity set.
        /// </field>
        /// <field name="People" type="msls.EntitySet">
        /// Gets the People entity set.
        /// </field>
        /// <field name="Projects" type="msls.EntitySet">
        /// Gets the Projects entity set.
        /// </field>
        /// <field name="ResourcePlans" type="msls.EntitySet">
        /// Gets the ResourcePlans entity set.
        /// </field>
        /// <field name="RoleTypes" type="msls.EntitySet">
        /// Gets the RoleTypes entity set.
        /// </field>
        /// <field name="SystemRoles" type="msls.EntitySet">
        /// Gets the SystemRoles entity set.
        /// </field>
        /// <field name="TimesheetDetails" type="msls.EntitySet">
        /// Gets the TimesheetDetails entity set.
        /// </field>
        /// <field name="Timesheets" type="msls.EntitySet">
        /// Gets the Timesheets entity set.
        /// </field>
        /// <field name="TypeOfWorks" type="msls.EntitySet">
        /// Gets the TypeOfWorks entity set.
        /// </field>
        /// <field name="UnallocatedTimesheets" type="msls.EntitySet">
        /// Gets the UnallocatedTimesheets entity set.
        /// </field>
        /// <field name="TimesheetHours" type="msls.EntitySet">
        /// Gets the TimesheetHours entity set.
        /// </field>
        /// <field name="details" type="msls.application.Timesheets_Data.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };

    function ApplicationData(dataWorkspace) {
        /// <summary>
        /// Represents the ApplicationData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="ResourcePlanRanges" type="msls.EntitySet">
        /// Gets the ResourcePlanRanges entity set.
        /// </field>
        /// <field name="details" type="msls.application.ApplicationData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="Timesheets_Data" type="msls.application.Timesheets_Data">
        /// Gets the Timesheets_Data data service.
        /// </field>
        /// <field name="ApplicationData" type="msls.application.ApplicationData">
        /// Gets the ApplicationData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        ActiveType: $defineEntity(ActiveType, [
            { name: "ID", type: Number },
            { name: "Name", type: String },
            { name: "Code", type: String },
            { name: "sys_CreatedOn", type: Date },
            { name: "sys_CreatedBy", type: String },
            { name: "sys_ModifiedOn", type: Date },
            { name: "sys_ModifiedBy", type: String },
            { name: "Active", type: Number },
            { name: "BillingDetails", kind: "collection", elementType: BillingDetail },
            { name: "BillingStatus", kind: "collection", elementType: BillingStatus },
            { name: "Clients", kind: "collection", elementType: Client },
            { name: "ClientRoles", kind: "collection", elementType: ClientRole },
            { name: "People", kind: "collection", elementType: Person },
            { name: "Projects", kind: "collection", elementType: Project },
            { name: "RoleTypes", kind: "collection", elementType: RoleType },
            { name: "SystemRoles", kind: "collection", elementType: SystemRole },
            { name: "Timesheets", kind: "collection", elementType: Timesheet },
            { name: "TimesheetDetails", kind: "collection", elementType: TimesheetDetail },
            { name: "TypeOfWorks", kind: "collection", elementType: TypeOfWork },
            { name: "Invoices", kind: "collection", elementType: Invoice },
            { name: "InvoiceLines", kind: "collection", elementType: InvoiceLine },
            { name: "InvoiceStatus", kind: "collection", elementType: InvoiceStatu }
        ]),

        BillingDetail: $defineEntity(BillingDetail, [
            { name: "BillingDetailID", type: Number, isReadOnly: true },
            { name: "BillingDetailSourceKey", type: String },
            { name: "LoadDate", type: Date },
            { name: "Rate", type: String },
            { name: "LoadDateID", type: Number, isReadOnly: true },
            { name: "Client", kind: "reference", type: Client },
            { name: "Person", kind: "reference", type: Person },
            { name: "sys_CreatedOn", type: Date },
            { name: "sys_CreatedBy", type: String },
            { name: "sys_ModifiedOn", type: Date },
            { name: "sys_ModifiedBy", type: String },
            { name: "ActiveType", kind: "reference", type: ActiveType },
            { name: "DimDate", kind: "reference", type: DimDate },
            { name: "ClientRole", kind: "reference", type: ClientRole }
        ]),

        BillingStatus: $defineEntity(BillingStatus, [
            { name: "BillingStatusName", type: String },
            { name: "BillingStatusID", type: Number, isReadOnly: true },
            { name: "BillingStatusSourceKey", type: String },
            { name: "LoadDate", type: Date },
            { name: "BillingStatusCode", type: String },
            { name: "LoadDateID", type: Number, isReadOnly: true },
            { name: "Projects", kind: "collection", elementType: Project },
            { name: "sys_CreatedOn", type: Date },
            { name: "sys_CreatedBy", type: String },
            { name: "sys_ModifiedOn", type: Date },
            { name: "sys_ModifiedBy", type: String },
            { name: "TimesheetDetails", kind: "collection", elementType: TimesheetDetail },
            { name: "ActiveType", kind: "reference", type: ActiveType }
        ]),

        ClientRole: $defineEntity(ClientRole, [
            { name: "ClientRoleName", type: String },
            { name: "ClientRoleID", type: Number, isReadOnly: true },
            { name: "ClientRoleSourceKey", type: String },
            { name: "LoadDate", type: Date },
            { name: "ClientRoleCode", type: String },
            { name: "LoadDateID", type: Number, isReadOnly: true },
            { name: "sys_CreatedOn", type: Date },
            { name: "sys_CreatedBy", type: String },
            { name: "sys_ModifiedOn", type: Date },
            { name: "sys_ModifiedBy", type: String },
            { name: "ActiveType", kind: "reference", type: ActiveType },
            { name: "InvoiceLines", kind: "collection", elementType: InvoiceLine },
            { name: "BillingDetails", kind: "collection", elementType: BillingDetail }
        ]),

        Client: $defineEntity(Client, [
            { name: "ClientName", type: String },
            { name: "ClientID", type: Number, isReadOnly: true },
            { name: "ClientSourceKey", type: String },
            { name: "LoadDate", type: Date },
            { name: "ClientCode", type: String },
            { name: "LoadDateID", type: Number, isReadOnly: true },
            { name: "BillingDetails", kind: "collection", elementType: BillingDetail },
            { name: "Projects", kind: "collection", elementType: Project },
            { name: "sys_CreatedOn", type: Date },
            { name: "sys_CreatedBy", type: String },
            { name: "sys_ModifiedOn", type: Date },
            { name: "sys_ModifiedBy", type: String },
            { name: "Person", kind: "reference", type: Person },
            { name: "ActiveType", kind: "reference", type: ActiveType },
            { name: "InvoiceEmailAddress", type: String },
            { name: "InvoiceBank", type: String },
            { name: "InvoiceBankBranch", type: String },
            { name: "InvoiceBankAccount", type: String },
            { name: "InvoiceVATNumber", type: String },
            { name: "InvoiceCompanyReg", type: String },
            { name: "InvoiceTelNo", type: String },
            { name: "InvoiceContactPerson", type: String },
            { name: "InvoiceAddress", type: String },
            { name: "Invoices", kind: "collection", elementType: Invoice }
        ]),

        DimDate: $defineEntity(DimDate, [
            { name: "StandardDate", type: String },
            { name: "DateID", type: Number },
            { name: "c_Date", type: Date },
            { name: "Day", type: Number },
            { name: "DaySuffix", type: String },
            { name: "DayOfWeek", type: String },
            { name: "DOWInMonth", type: Number },
            { name: "DayOfYear", type: Number },
            { name: "WeekOfYear", type: Number },
            { name: "WeekOfMonth", type: Number },
            { name: "MonthNumber", type: Number },
            { name: "MonthName", type: String },
            { name: "Quarter", type: Number },
            { name: "QuarterName", type: String },
            { name: "YearName", type: String },
            { name: "YearNumber", type: Number },
            { name: "IsPublicHoliday", type: Boolean },
            { name: "HolidayText", type: String },
            { name: "DateSK", type: Number, isReadOnly: true },
            { name: "TimesheetDetails", kind: "collection", elementType: TimesheetDetail },
            { name: "sys_CreatedOn", type: Date },
            { name: "sys_CreatedBy", type: String },
            { name: "sys_ModifiedOn", type: Date },
            { name: "sys_ModifiedBy", type: String },
            { name: "Active", type: Number },
            { name: "Timesheets", kind: "collection", elementType: Timesheet },
            { name: "BillingDetails", kind: "collection", elementType: BillingDetail },
            { name: "ContractorYear", type: Number },
            { name: "ContractorMonth", type: Number },
            { name: "ContractorPeriod", type: String },
            { name: "BillingYear", type: String },
            { name: "WeekEndingBillingPeriod", type: String },
            { name: "BillingPeriodText", type: String },
            { name: "BillingPeriod", type: Number },
            { name: "WeekEnding", type: Date },
            { name: "WeekEndingText", type: String },
            { name: "Invoices", kind: "collection", elementType: Invoice },
            { name: "Invoices1", kind: "collection", elementType: Invoice },
            { name: "Invoices2", kind: "collection", elementType: Invoice }
        ]),

        InvoiceLine: $defineEntity(InvoiceLine, [
            { name: "InvoiceLineID", type: Number, isReadOnly: true },
            { name: "LoadDate", type: Date },
            { name: "LoadDateID", type: Number, isReadOnly: true },
            { name: "InvoiceLineDescription", type: String },
            { name: "InvoiceLineCode", type: String },
            { name: "InvoiceLineRate", type: String },
            { name: "InvoiceLineQty", type: Number },
            { name: "InvoiceLineAmount", type: String },
            { name: "sys_CreatedOn", type: Date },
            { name: "sys_CreatedBy", type: String },
            { name: "sys_ModifiedOn", type: Date },
            { name: "sys_ModifiedBy", type: String },
            { name: "ActiveType", kind: "reference", type: ActiveType },
            { name: "Invoice", kind: "reference", type: Invoice },
            { name: "ClientRole", kind: "reference", type: ClientRole },
            { name: "Person", kind: "reference", type: Person },
            { name: "Project", kind: "reference", type: Project },
            { name: "TimesheetDetails", kind: "collection", elementType: TimesheetDetail },
            { name: "InvoiceLineCalcedAmount", type: String }
        ]),

        Invoice: $defineEntity(Invoice, [
            { name: "InvoiceID", type: Number, isReadOnly: true },
            { name: "InvoiceSourceKey", type: String },
            { name: "LoadDate", type: Date },
            { name: "InvoiceFileName", type: String },
            { name: "LoadDateID", type: Number, isReadOnly: true },
            { name: "Comments", type: String },
            { name: "InvoiceEmailAddress", type: String },
            { name: "InvoiceNumber", type: String },
            { name: "sys_CreatedOn", type: Date },
            { name: "sys_CreatedBy", type: String },
            { name: "sys_ModifiedOn", type: Date },
            { name: "sys_ModifiedBy", type: String },
            { name: "ActiveType", kind: "reference", type: ActiveType },
            { name: "Person", kind: "reference", type: Person },
            { name: "Client", kind: "reference", type: Client },
            { name: "DimDate", kind: "reference", type: DimDate },
            { name: "DimDate1", kind: "reference", type: DimDate },
            { name: "DimDate2", kind: "reference", type: DimDate },
            { name: "InvoiceStatu", kind: "reference", type: InvoiceStatu },
            { name: "InvoiceLines", kind: "collection", elementType: InvoiceLine },
            { name: "InvoicePurchaseOrderNo", type: String }
        ]),

        InvoiceStatu: $defineEntity(InvoiceStatu, [
            { name: "InvoiceStatusID", type: Number, isReadOnly: true },
            { name: "InvoiceStatusName", type: String },
            { name: "InvoiceStatusSourceKey", type: String },
            { name: "LoadDate", type: Date },
            { name: "InvoiceStatusCode", type: String },
            { name: "LoadDateID", type: Number, isReadOnly: true },
            { name: "sys_CreatedOn", type: Date },
            { name: "sys_CreatedBy", type: String },
            { name: "sys_ModifiedOn", type: Date },
            { name: "sys_ModifiedBy", type: String },
            { name: "Invoices", kind: "collection", elementType: Invoice },
            { name: "ActiveType", kind: "reference", type: ActiveType }
        ]),

        Person: $defineEntity(Person, [
            { name: "PersonName", type: String },
            { name: "PersonID", type: Number, isReadOnly: true },
            { name: "PersonSourceKey", type: String },
            { name: "LoadDate", type: Date },
            { name: "PersonCode", type: String },
            { name: "LoadDateID", type: Number, isReadOnly: true },
            { name: "BillingPercentTarget", type: Number },
            { name: "BillingPercentMinimum", type: Number },
            { name: "Email", type: String },
            { name: "StartDate", type: Date },
            { name: "HourlyCost", type: Number },
            { name: "MonthlyCost", type: String },
            { name: "IsContractor", type: Number },
            { name: "Billable", type: Number },
            { name: "BillingDetails", kind: "collection", elementType: BillingDetail },
            { name: "Projects", kind: "collection", elementType: Project },
            { name: "TimesheetDetails", kind: "collection", elementType: TimesheetDetail },
            { name: "sys_CreatedOn", type: Date },
            { name: "sys_CreatedBy", type: String },
            { name: "sys_ModifiedOn", type: Date },
            { name: "sys_ModifiedBy", type: String },
            { name: "SystemRole", kind: "reference", type: SystemRole },
            { name: "ADUsername", type: String },
            { name: "Clients", kind: "collection", elementType: Client },
            { name: "ActiveType", kind: "reference", type: ActiveType },
            { name: "SharepointUserName", type: String },
            { name: "Timesheets", kind: "collection", elementType: Timesheet },
            { name: "Invoices", kind: "collection", elementType: Invoice },
            { name: "InvoiceLines", kind: "collection", elementType: InvoiceLine },
            { name: "ResourcePlans", kind: "collection", elementType: ResourcePlan },
            { name: "ResourcePlanRanges", kind: "virtualCollection", elementType: ResourcePlanRange }
        ]),

        Project: $defineEntity(Project, [
            { name: "ProjectID", type: Number, isReadOnly: true },
            { name: "ProjectName", type: String },
            { name: "ProjectSourceKey", type: String },
            { name: "LoadDate", type: Date },
            { name: "ProjectCode", type: String },
            { name: "LoadDateID", type: Number, isReadOnly: true },
            { name: "ProjectFirstPersonName", type: String },
            { name: "ProjectFirstFilename", type: String },
            { name: "ConsultingEstimate", type: String },
            { name: "SoftwareEstimate", type: String },
            { name: "VMEstimate", type: String },
            { name: "ProjectCap", type: String },
            { name: "AdminProject", type: Number },
            { name: "BillingStatus", kind: "reference", type: BillingStatus },
            { name: "Client", kind: "reference", type: Client },
            { name: "Person", kind: "reference", type: Person },
            { name: "TimesheetDetails", kind: "collection", elementType: TimesheetDetail },
            { name: "sys_CreatedOn", type: Date },
            { name: "sys_CreatedBy", type: String },
            { name: "sys_ModifiedOn", type: Date },
            { name: "sys_ModifiedBy", type: String },
            { name: "ActiveType", kind: "reference", type: ActiveType },
            { name: "MonthlyCap", type: String },
            { name: "MonthlyCapWarning", type: String },
            { name: "ProjectCapWarning", type: String },
            { name: "InvoiceEmailAddress", type: String },
            { name: "InvoiceLines", kind: "collection", elementType: InvoiceLine },
            { name: "CommPercent", type: String },
            { name: "ResourcePlans", kind: "collection", elementType: ResourcePlan },
            { name: "ResourcePlanRanges", kind: "virtualCollection", elementType: ResourcePlanRange }
        ]),

        ResourcePlan: $defineEntity(ResourcePlan, [
            { name: "ResourcePlanID", type: Number, isReadOnly: true },
            { name: "ResourcePlanComments", type: String },
            { name: "WeekEndingDate", type: Date },
            { name: "Blocks", type: Number },
            { name: "sys_CreatedOn", type: Date },
            { name: "sys_CreatedBy", type: String },
            { name: "sys_ModifiedOn", type: Date },
            { name: "sys_ModifiedBy", type: String },
            { name: "Person", kind: "reference", type: Person },
            { name: "Project", kind: "reference", type: Project }
        ]),

        RoleType: $defineEntity(RoleType, [
            { name: "RoleTypeID", type: Number, isReadOnly: true },
            { name: "RoleTypeName", type: String },
            { name: "RoleTypeSourceKey", type: String },
            { name: "LoadDate", type: Date },
            { name: "RoleTypeCode", type: String },
            { name: "LoadDateID", type: Number, isReadOnly: true },
            { name: "sys_CreatedOn", type: Date },
            { name: "sys_CreatedBy", type: String },
            { name: "sys_ModifiedOn", type: Date },
            { name: "sys_ModifiedBy", type: String },
            { name: "ActiveType", kind: "reference", type: ActiveType }
        ]),

        SystemRole: $defineEntity(SystemRole, [
            { name: "SystemRoleID", type: Number, isReadOnly: true },
            { name: "SystemRoleName", type: String },
            { name: "SystemRoleSourceKey", type: String },
            { name: "LoadDate", type: Date },
            { name: "SystemRoleCode", type: String },
            { name: "LoadDateID", type: Number, isReadOnly: true },
            { name: "sys_CreatedOn", type: Date },
            { name: "sys_CreatedBy", type: String },
            { name: "sys_ModifiedOn", type: Date },
            { name: "sys_ModifiedBy", type: String },
            { name: "People", kind: "collection", elementType: Person },
            { name: "ActiveType", kind: "reference", type: ActiveType }
        ]),

        TimesheetDetail: $defineEntity(TimesheetDetail, [
            { name: "TimesheetDetailID", type: Number, isReadOnly: true },
            { name: "TimesheetDetailSourceKey", type: String },
            { name: "LoadDate", type: Date },
            { name: "TimesheetDetailName", type: String },
            { name: "TimesheetDetailCode", type: String },
            { name: "TimesheetDetailFileName", type: String },
            { name: "LoadDateID", type: Number, isReadOnly: true },
            { name: "Hours", type: String },
            { name: "Comments", type: String },
            { name: "ClientComments", type: String },
            { name: "AMComments", type: String },
            { name: "Exclude", type: Number },
            { name: "LastUpdateDate", type: Date },
            { name: "DimDate", kind: "reference", type: DimDate },
            { name: "Person", kind: "reference", type: Person },
            { name: "Project", kind: "reference", type: Project },
            { name: "Timesheet", kind: "reference", type: Timesheet },
            { name: "TypeOfWork", kind: "reference", type: TypeOfWork },
            { name: "sys_CreatedOn", type: Date },
            { name: "sys_CreatedBy", type: String },
            { name: "sys_ModifiedOn", type: Date },
            { name: "sys_ModifiedBy", type: String },
            { name: "BillingStatus", kind: "reference", type: BillingStatus },
            { name: "ActiveType", kind: "reference", type: ActiveType },
            { name: "VerCol", type: Array, isReadOnly: true },
            { name: "InvoiceLine", kind: "reference", type: InvoiceLine }
        ]),

        Timesheet: $defineEntity(Timesheet, [
            { name: "TimesheetID", type: Number, isReadOnly: true },
            { name: "TimesheetSourceKey", type: String },
            { name: "LoadDate", type: Date },
            { name: "TimesheetName", type: String },
            { name: "TimesheetCode", type: String },
            { name: "TimesheetFileName", type: String },
            { name: "TimesheetFromDateID", type: Number },
            { name: "TimesheetToDateID", type: Number },
            { name: "TimesheetPerson", type: String },
            { name: "TimesheetDate", type: String },
            { name: "LoadDateID", type: Number, isReadOnly: true },
            { name: "TimesheetDetails", kind: "collection", elementType: TimesheetDetail },
            { name: "OverallStatusID", type: Number },
            { name: "sys_CreatedOn", type: Date },
            { name: "sys_CreatedBy", type: String },
            { name: "sys_ModifiedOn", type: Date },
            { name: "sys_ModifiedBy", type: String },
            { name: "DimDate", kind: "reference", type: DimDate },
            { name: "ActiveType", kind: "reference", type: ActiveType },
            { name: "PeriodEnding", type: Date, isReadOnly: true },
            { name: "Person", kind: "reference", type: Person },
            { name: "VerCol", type: Array, isReadOnly: true }
        ]),

        TypeOfWork: $defineEntity(TypeOfWork, [
            { name: "TypeOfWorkID", type: Number, isReadOnly: true },
            { name: "TypeOfWorkName", type: String },
            { name: "TypeOfWorkSourceKey", type: String },
            { name: "LoadDate", type: Date },
            { name: "TypeOfWorkCode", type: String },
            { name: "LoadDateID", type: Number, isReadOnly: true },
            { name: "TimesheetDetails", kind: "collection", elementType: TimesheetDetail },
            { name: "sys_CreatedOn", type: Date },
            { name: "sys_CreatedBy", type: String },
            { name: "sys_ModifiedOn", type: Date },
            { name: "sys_ModifiedBy", type: String },
            { name: "ActiveType", kind: "reference", type: ActiveType }
        ]),

        UnallocatedTimesheet: $defineEntity(UnallocatedTimesheet, [
            { name: "BillingStatusID", type: Number },
            { name: "BillingStatusName", type: String },
            { name: "ClientName", type: String },
            { name: "ProjectName", type: String },
            { name: "TimesheetDetailID", type: Number },
            { name: "TimesheetDetailSourceKey", type: String },
            { name: "LoadDate", type: Date },
            { name: "Active", type: Number },
            { name: "TimesheetDetailFileName", type: String },
            { name: "TimesheetDetailDateID", type: Number },
            { name: "LoadDateID", type: Number },
            { name: "Hours", type: String },
            { name: "TimesheetID", type: Number },
            { name: "Comments", type: String },
            { name: "ClientComments", type: String },
            { name: "AMComments", type: String },
            { name: "Exclude", type: Number },
            { name: "TypeOfWorkName", type: String },
            { name: "AccountManager", type: String },
            { name: "AMEmail", type: String },
            { name: "BillingPeriodText", type: String },
            { name: "ADUserName", type: String },
            { name: "SharePointUserName", type: String }
        ]),

        TimesheetHour: $defineEntity(TimesheetHour, [
            { name: "Name", type: String },
            { name: "Value", type: String },
            { name: "c_Date", type: Date }
        ]),

        ResourcePlanRange: $defineEntity(ResourcePlanRange, [
            { name: "Id", type: Number },
            { name: "RowVersion", type: Array },
            { name: "Comments", type: String },
            { name: "StartDate", type: Date },
            { name: "EndDate", type: Date },
            { name: "Blocks", type: Number },
            { name: "Person", kind: "virtualReference", type: Person },
            { name: "Person_PersonID", type: Number },
            { name: "Project", kind: "virtualReference", type: Project },
            { name: "Project_ProjectID", type: Number }
        ]),

        Timesheets_Data: $defineDataService(Timesheets_Data, lightSwitchApplication.rootUri + "/Timesheets_Data.svc", [
            { name: "ActiveTypes", elementType: ActiveType },
            { name: "BillingDetails", elementType: BillingDetail },
            { name: "BillingStatusSet", elementType: BillingStatus },
            { name: "ClientRoles", elementType: ClientRole },
            { name: "Clients", elementType: Client },
            { name: "DimDates", elementType: DimDate },
            { name: "InvoiceLines", elementType: InvoiceLine },
            { name: "Invoices", elementType: Invoice },
            { name: "InvoiceStatus", elementType: InvoiceStatu },
            { name: "People", elementType: Person },
            { name: "Projects", elementType: Project },
            { name: "ResourcePlans", elementType: ResourcePlan },
            { name: "RoleTypes", elementType: RoleType },
            { name: "SystemRoles", elementType: SystemRole },
            { name: "TimesheetDetails", elementType: TimesheetDetail },
            { name: "Timesheets", elementType: Timesheet },
            { name: "TypeOfWorks", elementType: TypeOfWork },
            { name: "UnallocatedTimesheets", elementType: UnallocatedTimesheet },
            { name: "TimesheetHours", elementType: TimesheetHour }
        ], [
            {
                name: "ActiveTypes_SingleOrDefault", value: function (ID) {
                    return new $DataServiceQuery({ _entitySet: this.ActiveTypes },
                        lightSwitchApplication.rootUri + "/Timesheets_Data.svc" + "/ActiveTypes(" + "ID=" + $toODataString(ID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "BillingDetails_SingleOrDefault", value: function (BillingDetailID) {
                    return new $DataServiceQuery({ _entitySet: this.BillingDetails },
                        lightSwitchApplication.rootUri + "/Timesheets_Data.svc" + "/BillingDetails(" + "BillingDetailID=" + $toODataString(BillingDetailID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "BillingDetailNoRole", value: function (ClientName, PersonName) {
                    return new $DataServiceQuery({ _entitySet: this.BillingDetails },
                        lightSwitchApplication.rootUri + "/Timesheets_Data.svc" + "/BillingDetailNoRole()",
                        {
                            ClientName: $toODataString(ClientName, "String?"),
                            PersonName: $toODataString(PersonName, "String?")
                        });
                }
            },
            {
                name: "BillingDetailsSorted", value: function (ClientName, PersonName) {
                    return new $DataServiceQuery({ _entitySet: this.BillingDetails },
                        lightSwitchApplication.rootUri + "/Timesheets_Data.svc" + "/BillingDetailsSorted()",
                        {
                            ClientName: $toODataString(ClientName, "String?"),
                            PersonName: $toODataString(PersonName, "String?")
                        });
                }
            },
            {
                name: "BillingStatusSet_SingleOrDefault", value: function (BillingStatusID) {
                    return new $DataServiceQuery({ _entitySet: this.BillingStatusSet },
                        lightSwitchApplication.rootUri + "/Timesheets_Data.svc" + "/BillingStatusSet(" + "BillingStatusID=" + $toODataString(BillingStatusID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "ClientRoles_SingleOrDefault", value: function (ClientRoleID) {
                    return new $DataServiceQuery({ _entitySet: this.ClientRoles },
                        lightSwitchApplication.rootUri + "/Timesheets_Data.svc" + "/ClientRoles(" + "ClientRoleID=" + $toODataString(ClientRoleID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "ClientRolesSorted", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.ClientRoles },
                        lightSwitchApplication.rootUri + "/Timesheets_Data.svc" + "/ClientRolesSorted()",
                        {
                        });
                }
            },
            {
                name: "Clients_SingleOrDefault", value: function (ClientID) {
                    return new $DataServiceQuery({ _entitySet: this.Clients },
                        lightSwitchApplication.rootUri + "/Timesheets_Data.svc" + "/Clients(" + "ClientID=" + $toODataString(ClientID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "FilteredClient", value: function (ClientName) {
                    return new $DataServiceQuery({ _entitySet: this.Clients },
                        lightSwitchApplication.rootUri + "/Timesheets_Data.svc" + "/FilteredClient()",
                        {
                            ClientName: $toODataString(ClientName, "String?")
                        });
                }
            },
            {
                name: "DimDates_SingleOrDefault", value: function (DateID) {
                    return new $DataServiceQuery({ _entitySet: this.DimDates },
                        lightSwitchApplication.rootUri + "/Timesheets_Data.svc" + "/DimDates(" + "DateID=" + $toODataString(DateID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "BillingDate", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.DimDates },
                        lightSwitchApplication.rootUri + "/Timesheets_Data.svc" + "/BillingDate()",
                        {
                        });
                }
            },
            {
                name: "InvoiceLines_SingleOrDefault", value: function (InvoiceLineID) {
                    return new $DataServiceQuery({ _entitySet: this.InvoiceLines },
                        lightSwitchApplication.rootUri + "/Timesheets_Data.svc" + "/InvoiceLines(" + "InvoiceLineID=" + $toODataString(InvoiceLineID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "InvoiceLinesSorted", value: function (InvoiceID, PersonName, InvoiceLineDescription, ProjectName) {
                    return new $DataServiceQuery({ _entitySet: this.InvoiceLines },
                        lightSwitchApplication.rootUri + "/Timesheets_Data.svc" + "/InvoiceLinesSorted()",
                        {
                            InvoiceID: $toODataString(InvoiceID, "Int32?"),
                            PersonName: $toODataString(PersonName, "String?"),
                            InvoiceLineDescription: $toODataString(InvoiceLineDescription, "String?"),
                            ProjectName: $toODataString(ProjectName, "String?")
                        });
                }
            },
            {
                name: "Invoices_SingleOrDefault", value: function (InvoiceID) {
                    return new $DataServiceQuery({ _entitySet: this.Invoices },
                        lightSwitchApplication.rootUri + "/Timesheets_Data.svc" + "/Invoices(" + "InvoiceID=" + $toODataString(InvoiceID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "InvoicesSorted", value: function (PersonName, InvoiceStatusName) {
                    return new $DataServiceQuery({ _entitySet: this.Invoices },
                        lightSwitchApplication.rootUri + "/Timesheets_Data.svc" + "/InvoicesSorted()",
                        {
                            PersonName: $toODataString(PersonName, "String?"),
                            InvoiceStatusName: $toODataString(InvoiceStatusName, "String?")
                        });
                }
            },
            {
                name: "InvoiceStatus_SingleOrDefault", value: function (InvoiceStatusID) {
                    return new $DataServiceQuery({ _entitySet: this.InvoiceStatus },
                        lightSwitchApplication.rootUri + "/Timesheets_Data.svc" + "/InvoiceStatus(" + "InvoiceStatusID=" + $toODataString(InvoiceStatusID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "InvoiceStatusSorted", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.InvoiceStatus },
                        lightSwitchApplication.rootUri + "/Timesheets_Data.svc" + "/InvoiceStatusSorted()",
                        {
                        });
                }
            },
            {
                name: "People_SingleOrDefault", value: function (PersonID) {
                    return new $DataServiceQuery({ _entitySet: this.People },
                        lightSwitchApplication.rootUri + "/Timesheets_Data.svc" + "/People(" + "PersonID=" + $toODataString(PersonID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "PersonAccountManager", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.People },
                        lightSwitchApplication.rootUri + "/Timesheets_Data.svc" + "/PersonAccountManager()",
                        {
                        });
                }
            },
            {
                name: "PersonSorted", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.People },
                        lightSwitchApplication.rootUri + "/Timesheets_Data.svc" + "/PersonSorted()",
                        {
                        });
                }
            },
            {
                name: "Projects_SingleOrDefault", value: function (ProjectID) {
                    return new $DataServiceQuery({ _entitySet: this.Projects },
                        lightSwitchApplication.rootUri + "/Timesheets_Data.svc" + "/Projects(" + "ProjectID=" + $toODataString(ProjectID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "BillableProjects", value: function (Client_Project, AM, Billable) {
                    return new $DataServiceQuery({ _entitySet: this.Projects },
                        lightSwitchApplication.rootUri + "/Timesheets_Data.svc" + "/BillableProjects()",
                        {
                            Client_Project: $toODataString(Client_Project, "String?"),
                            AM: $toODataString(AM, "String?"),
                            Billable: $toODataString(Billable, "Int32?")
                        });
                }
            },
            {
                name: "ProjectsFilter", value: function (ClientName, ProjectName, AM, BillingStatusID) {
                    return new $DataServiceQuery({ _entitySet: this.Projects },
                        lightSwitchApplication.rootUri + "/Timesheets_Data.svc" + "/ProjectsFilter()",
                        {
                            ClientName: $toODataString(ClientName, "String?"),
                            ProjectName: $toODataString(ProjectName, "String?"),
                            AM: $toODataString(AM, "String?"),
                            BillingStatusID: $toODataString(BillingStatusID, "Int32?")
                        });
                }
            },
            {
                name: "ProjectsSorted", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.Projects },
                        lightSwitchApplication.rootUri + "/Timesheets_Data.svc" + "/ProjectsSorted()",
                        {
                        });
                }
            },
            {
                name: "ResourcePlans_SingleOrDefault", value: function (ResourcePlanID) {
                    return new $DataServiceQuery({ _entitySet: this.ResourcePlans },
                        lightSwitchApplication.rootUri + "/Timesheets_Data.svc" + "/ResourcePlans(" + "ResourcePlanID=" + $toODataString(ResourcePlanID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "ResourcePlanSorted", value: function (PersonName, ClientProject, EndDate, StartDate) {
                    return new $DataServiceQuery({ _entitySet: this.ResourcePlans },
                        lightSwitchApplication.rootUri + "/Timesheets_Data.svc" + "/ResourcePlanSorted()",
                        {
                            PersonName: $toODataString(PersonName, "String?"),
                            ClientProject: $toODataString(ClientProject, "String?"),
                            EndDate: $toODataString(EndDate, "DateTime?"),
                            StartDate: $toODataString(StartDate, "DateTime?")
                        });
                }
            },
            {
                name: "RoleTypes_SingleOrDefault", value: function (RoleTypeID) {
                    return new $DataServiceQuery({ _entitySet: this.RoleTypes },
                        lightSwitchApplication.rootUri + "/Timesheets_Data.svc" + "/RoleTypes(" + "RoleTypeID=" + $toODataString(RoleTypeID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "SystemRoles_SingleOrDefault", value: function (SystemRoleID) {
                    return new $DataServiceQuery({ _entitySet: this.SystemRoles },
                        lightSwitchApplication.rootUri + "/Timesheets_Data.svc" + "/SystemRoles(" + "SystemRoleID=" + $toODataString(SystemRoleID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "TimesheetDetails_SingleOrDefault", value: function (TimesheetDetailID) {
                    return new $DataServiceQuery({ _entitySet: this.TimesheetDetails },
                        lightSwitchApplication.rootUri + "/Timesheets_Data.svc" + "/TimesheetDetails(" + "TimesheetDetailID=" + $toODataString(TimesheetDetailID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "TimesheetDetailSorted", value: function (BillingStatusName, PersonName, ProjectName, ClientName, ProjectID) {
                    return new $DataServiceQuery({ _entitySet: this.TimesheetDetails },
                        lightSwitchApplication.rootUri + "/Timesheets_Data.svc" + "/TimesheetDetailSorted()",
                        {
                            BillingStatusName: $toODataString(BillingStatusName, "String?"),
                            PersonName: $toODataString(PersonName, "String?"),
                            ProjectName: $toODataString(ProjectName, "String?"),
                            ClientName: $toODataString(ClientName, "String?"),
                            ProjectID: $toODataString(ProjectID, "Int32?")
                        });
                }
            },
            {
                name: "TimesheetDetailsUnallocated", value: function (Project_Client, PersonName, AM) {
                    return new $DataServiceQuery({ _entitySet: this.TimesheetDetails },
                        lightSwitchApplication.rootUri + "/Timesheets_Data.svc" + "/TimesheetDetailsUnallocated()",
                        {
                            Project_Client: $toODataString(Project_Client, "String?"),
                            PersonName: $toODataString(PersonName, "String?"),
                            AM: $toODataString(AM, "String?")
                        });
                }
            },
            {
                name: "Timesheets_SingleOrDefault", value: function (TimesheetID) {
                    return new $DataServiceQuery({ _entitySet: this.Timesheets },
                        lightSwitchApplication.rootUri + "/Timesheets_Data.svc" + "/Timesheets(" + "TimesheetID=" + $toODataString(TimesheetID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "TimesheetsByDate", value: function (StartDate, EndDate, TimesheetPerson) {
                    return new $DataServiceQuery({ _entitySet: this.Timesheets },
                        lightSwitchApplication.rootUri + "/Timesheets_Data.svc" + "/TimesheetsByDate()",
                        {
                            StartDate: $toODataString(StartDate, "DateTime?"),
                            EndDate: $toODataString(EndDate, "DateTime?"),
                            TimesheetPerson: $toODataString(TimesheetPerson, "String?")
                        });
                }
            },
            {
                name: "TypeOfWorks_SingleOrDefault", value: function (TypeOfWorkID) {
                    return new $DataServiceQuery({ _entitySet: this.TypeOfWorks },
                        lightSwitchApplication.rootUri + "/Timesheets_Data.svc" + "/TypeOfWorks(" + "TypeOfWorkID=" + $toODataString(TypeOfWorkID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "UnallocatedTimesheets_SingleOrDefault", value: function (BillingStatusID, ClientName, ProjectName, TimesheetDetailID, LoadDate, Active, TimesheetDetailFileName, TimesheetDetailDateID, Hours, TimesheetID, Comments, Exclude, TypeOfWorkName, AccountManager, AMEmail, ADUserName, SharePointUserName) {
                    return new $DataServiceQuery({ _entitySet: this.UnallocatedTimesheets },
                        lightSwitchApplication.rootUri + "/Timesheets_Data.svc" + "/UnallocatedTimesheets(" + "BillingStatusID=" + $toODataString(BillingStatusID, "Int32?") + "," + "ClientName=" + $toODataString(ClientName, "String?") + "," + "ProjectName=" + $toODataString(ProjectName, "String?") + "," + "TimesheetDetailID=" + $toODataString(TimesheetDetailID, "Int32?") + "," + "LoadDate=" + $toODataString(LoadDate, "DateTime?") + "," + "Active=" + $toODataString(Active, "Int32?") + "," + "TimesheetDetailFileName=" + $toODataString(TimesheetDetailFileName, "String?") + "," + "TimesheetDetailDateID=" + $toODataString(TimesheetDetailDateID, "Int32?") + "," + "Hours=" + $toODataString(Hours, "Decimal?") + "," + "TimesheetID=" + $toODataString(TimesheetID, "Int32?") + "," + "Comments=" + $toODataString(Comments, "String?") + "," + "Exclude=" + $toODataString(Exclude, "Int32?") + "," + "TypeOfWorkName=" + $toODataString(TypeOfWorkName, "String?") + "," + "AccountManager=" + $toODataString(AccountManager, "String?") + "," + "AMEmail=" + $toODataString(AMEmail, "String?") + "," + "ADUserName=" + $toODataString(ADUserName, "String?") + "," + "SharePointUserName=" + $toODataString(SharePointUserName, "String?") + ")"
                    );
                }
            },
            {
                name: "TimesheetHours_SingleOrDefault", value: function (Name, c_Date) {
                    return new $DataServiceQuery({ _entitySet: this.TimesheetHours },
                        lightSwitchApplication.rootUri + "/Timesheets_Data.svc" + "/TimesheetHours(" + "Name=" + $toODataString(Name, "String?") + "," + "c_Date=" + $toODataString(c_Date, "DateTime?") + ")"
                    );
                }
            }
        ]),

        ApplicationData: $defineDataService(ApplicationData, lightSwitchApplication.rootUri + "/ApplicationData.svc", [
            { name: "ResourcePlanRanges", elementType: ResourcePlanRange }
        ], [
            {
                name: "ResourcePlanRanges_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.ResourcePlanRanges },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/ResourcePlanRanges(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "Timesheets_Data", type: Timesheets_Data },
            { name: "ApplicationData", type: ApplicationData }
        ])

    });

}(msls.application));
