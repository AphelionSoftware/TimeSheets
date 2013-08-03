/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $parameters = [document.createElement("div"), msls.ContentItem];

    msls._addEntryPoints(lightSwitchApplication.HomeScreen, {
        /// <field>
        /// Called when a new HomeScreen screen is created.
        /// <br/>created(msls.application.HomeScreen screen)
        /// </field>
        created: [lightSwitchApplication.HomeScreen],
        /// <field>
        /// Called before changes on an active HomeScreen screen are applied.
        /// <br/>beforeApplyChanges(msls.application.HomeScreen screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.HomeScreen],
        /// <field>
        /// Called after the Timesheets content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Timesheets_postRender: $parameters,
        /// <field>
        /// Called after the ShowBrowseClients content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseClients_postRender: $parameters,
        /// <field>
        /// Called after the ShowBrowsePeople content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowsePeople_postRender: $parameters,
        /// <field>
        /// Called after the ShowBrowseTimesheets content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseTimesheets_postRender: $parameters,
        /// <field>
        /// Called after the ShowBrowseBillingDetails content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseBillingDetails_postRender: $parameters,
        /// <field>
        /// Called after the ShowBrowseProjects content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseProjects_postRender: $parameters,
        /// <field>
        /// Called after the Admin content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Admin_postRender: $parameters,
        /// <field>
        /// Called after the ShowBrowseBillingStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseBillingStatus_postRender: $parameters,
        /// <field>
        /// Called after the ShowBrowseTypeOfWorks content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseTypeOfWorks_postRender: $parameters,
        /// <field>
        /// Called after the ShowBrowseRoles content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseRoles_postRender: $parameters
    });

    msls._addEntryPoints(lightSwitchApplication.BrowseTimesheetDetails, {
        /// <field>
        /// Called when a new BrowseTimesheetDetails screen is created.
        /// <br/>created(msls.application.BrowseTimesheetDetails screen)
        /// </field>
        created: [lightSwitchApplication.BrowseTimesheetDetails],
        /// <field>
        /// Called before changes on an active BrowseTimesheetDetails screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseTimesheetDetails screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseTimesheetDetails],
        /// <field>
        /// Called after the TimesheetDetailList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetDetailList_postRender: $parameters,
        /// <field>
        /// Called after the TimesheetDetail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetDetail_postRender: $parameters,
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: $parameters,
        /// <field>
        /// Called after the EditTimesheetDetail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EditTimesheetDetail_postRender: $parameters
    });

    msls._addEntryPoints(lightSwitchApplication.AddEditTimesheetDetail, {
        /// <field>
        /// Called when a new AddEditTimesheetDetail screen is created.
        /// <br/>created(msls.application.AddEditTimesheetDetail screen)
        /// </field>
        created: [lightSwitchApplication.AddEditTimesheetDetail],
        /// <field>
        /// Called before changes on an active AddEditTimesheetDetail screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditTimesheetDetail screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditTimesheetDetail],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: $parameters,
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: $parameters,
        /// <field>
        /// Called after the Info content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Info_postRender: $parameters,
        /// <field>
        /// Called after the Project content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Project_postRender: $parameters,
        /// <field>
        /// Called after the RowTemplate2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate2_postRender: $parameters,
        /// <field>
        /// Called after the Person content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Person_postRender: $parameters,
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: $parameters,
        /// <field>
        /// Called after the DimDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DimDate_postRender: $parameters,
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: $parameters,
        /// <field>
        /// Called after the TypeOfWork content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TypeOfWork_postRender: $parameters,
        /// <field>
        /// Called after the RowTemplate4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate4_postRender: $parameters,
        /// <field>
        /// Called after the Timesheet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Timesheet_postRender: $parameters,
        /// <field>
        /// Called after the RowTemplate3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate3_postRender: $parameters,
        /// <field>
        /// Called after the TimesheetDetails content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetDetails_postRender: $parameters,
        /// <field>
        /// Called after the Hours content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Hours_postRender: $parameters,
        /// <field>
        /// Called after the Comments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Comments_postRender: $parameters,
        /// <field>
        /// Called after the ClientComments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientComments_postRender: $parameters,
        /// <field>
        /// Called after the AMComments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AMComments_postRender: $parameters,
        /// <field>
        /// Called after the BillingStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingStatus_postRender: $parameters,
        /// <field>
        /// Called after the BillingStatus1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingStatus1_postRender: $parameters,
        /// <field>
        /// Called after the Internal content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Internal_postRender: $parameters,
        /// <field>
        /// Called after the LastUpdateDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastUpdateDate_postRender: $parameters,
        /// <field>
        /// Called after the TimesheetDetailSourceKey content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetDetailSourceKey_postRender: $parameters,
        /// <field>
        /// Called after the TimesheetDetailName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetDetailName_postRender: $parameters,
        /// <field>
        /// Called after the TimesheetDetailCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetDetailCode_postRender: $parameters,
        /// <field>
        /// Called after the TimesheetDetailFileName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetDetailFileName_postRender: $parameters
    });

    msls._addEntryPoints(lightSwitchApplication.BrowseClients, {
        /// <field>
        /// Called when a new BrowseClients screen is created.
        /// <br/>created(msls.application.BrowseClients screen)
        /// </field>
        created: [lightSwitchApplication.BrowseClients],
        /// <field>
        /// Called before changes on an active BrowseClients screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseClients screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseClients],
        /// <field>
        /// Called after the ClientList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientList_postRender: $parameters,
        /// <field>
        /// Called after the Client content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Client_postRender: $parameters,
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: $parameters,
        /// <field>
        /// Called after the ClientFilterGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientFilterGroup_postRender: $parameters,
        /// <field>
        /// Called after the ClientClientName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientClientName_postRender: $parameters
    });

    msls._addEntryPoints(lightSwitchApplication.AddEditClient, {
        /// <field>
        /// Called when a new AddEditClient screen is created.
        /// <br/>created(msls.application.AddEditClient screen)
        /// </field>
        created: [lightSwitchApplication.AddEditClient],
        /// <field>
        /// Called before changes on an active AddEditClient screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditClient screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditClient],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: $parameters,
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: $parameters,
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: $parameters,
        /// <field>
        /// Called after the AccountManager content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AccountManager_postRender: $parameters,
        /// <field>
        /// Called after the Person4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Person4_postRender: $parameters,
        /// <field>
        /// Called after the ClientSourceKey content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientSourceKey_postRender: $parameters,
        /// <field>
        /// Called after the ClientName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientName_postRender: $parameters,
        /// <field>
        /// Called after the ClientCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientCode_postRender: $parameters,
        /// <field>
        /// Called after the ActiveType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActiveType_postRender: $parameters,
        /// <field>
        /// Called after the ActiveType1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActiveType1_postRender: $parameters,
        /// <field>
        /// Called after the Projects content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Projects_postRender: $parameters,
        /// <field>
        /// Called after the Projects1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Projects1_postRender: $parameters,
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: $parameters,
        /// <field>
        /// Called after the BillingDetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingDetailsTab_postRender: $parameters,
        /// <field>
        /// Called after the BillingDetails content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingDetails_postRender: $parameters,
        /// <field>
        /// Called after the BillingDetailsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingDetailsTemplate_postRender: $parameters
    });

    msls._addEntryPoints(lightSwitchApplication.BrowseBillingDetails, {
        /// <field>
        /// Called when a new BrowseBillingDetails screen is created.
        /// <br/>created(msls.application.BrowseBillingDetails screen)
        /// </field>
        created: [lightSwitchApplication.BrowseBillingDetails],
        /// <field>
        /// Called before changes on an active BrowseBillingDetails screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseBillingDetails screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseBillingDetails],
        /// <field>
        /// Called after the BillingDetailList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingDetailList_postRender: $parameters,
        /// <field>
        /// Called after the BillingDetail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingDetail_postRender: $parameters,
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: $parameters
    });

    msls._addEntryPoints(lightSwitchApplication.BrowseBillingStatus, {
        /// <field>
        /// Called when a new BrowseBillingStatus screen is created.
        /// <br/>created(msls.application.BrowseBillingStatus screen)
        /// </field>
        created: [lightSwitchApplication.BrowseBillingStatus],
        /// <field>
        /// Called before changes on an active BrowseBillingStatus screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseBillingStatus screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseBillingStatus],
        /// <field>
        /// Called after the BillingStatusList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingStatusList_postRender: $parameters,
        /// <field>
        /// Called after the BillingStatu content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingStatu_postRender: $parameters,
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: $parameters
    });

    msls._addEntryPoints(lightSwitchApplication.BrowsePeople, {
        /// <field>
        /// Called when a new BrowsePeople screen is created.
        /// <br/>created(msls.application.BrowsePeople screen)
        /// </field>
        created: [lightSwitchApplication.BrowsePeople],
        /// <field>
        /// Called before changes on an active BrowsePeople screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowsePeople screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowsePeople],
        /// <field>
        /// Called after the PersonList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PersonList_postRender: $parameters,
        /// <field>
        /// Called after the Person content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Person_postRender: $parameters,
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: $parameters
    });

    msls._addEntryPoints(lightSwitchApplication.BrowseTimesheets, {
        /// <field>
        /// Called when a new BrowseTimesheets screen is created.
        /// <br/>created(msls.application.BrowseTimesheets screen)
        /// </field>
        created: [lightSwitchApplication.BrowseTimesheets],
        /// <field>
        /// Called before changes on an active BrowseTimesheets screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseTimesheets screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseTimesheets],
        /// <field>
        /// Called after the TimesheetList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetList_postRender: $parameters,
        /// <field>
        /// Called after the Timesheet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Timesheet_postRender: $parameters,
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: $parameters,
        /// <field>
        /// Called after the Filter content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Filter_postRender: $parameters,
        /// <field>
        /// Called after the TimesheetStartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetStartDate_postRender: $parameters,
        /// <field>
        /// Called after the TimesheetEndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetEndDate_postRender: $parameters,
        /// <field>
        /// Called after the TimesheetTimesheetPerson content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetTimesheetPerson_postRender: $parameters
    });

    msls._addEntryPoints(lightSwitchApplication.BrowseTypesOfWork, {
        /// <field>
        /// Called when a new BrowseTypesOfWork screen is created.
        /// <br/>created(msls.application.BrowseTypesOfWork screen)
        /// </field>
        created: [lightSwitchApplication.BrowseTypesOfWork],
        /// <field>
        /// Called before changes on an active BrowseTypesOfWork screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseTypesOfWork screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseTypesOfWork],
        /// <field>
        /// Called after the TypeOfWorkList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TypeOfWorkList_postRender: $parameters,
        /// <field>
        /// Called after the TypeOfWork content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TypeOfWork_postRender: $parameters,
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: $parameters
    });

    msls._addEntryPoints(lightSwitchApplication.AddEditBillingDetail, {
        /// <field>
        /// Called when a new AddEditBillingDetail screen is created.
        /// <br/>created(msls.application.AddEditBillingDetail screen)
        /// </field>
        created: [lightSwitchApplication.AddEditBillingDetail],
        /// <field>
        /// Called before changes on an active AddEditBillingDetail screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditBillingDetail screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditBillingDetail],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: $parameters,
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: $parameters,
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: $parameters,
        /// <field>
        /// Called after the Client content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Client_postRender: $parameters,
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: $parameters,
        /// <field>
        /// Called after the Person content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Person_postRender: $parameters,
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: $parameters,
        /// <field>
        /// Called after the ClientRole content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientRole_postRender: $parameters,
        /// <field>
        /// Called after the ClientRole1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientRole1_postRender: $parameters,
        /// <field>
        /// Called after the DimDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DimDate_postRender: $parameters,
        /// <field>
        /// Called after the DimDate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DimDate1_postRender: $parameters,
        /// <field>
        /// Called after the Rate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Rate_postRender: $parameters
    });

    msls._addEntryPoints(lightSwitchApplication.AddEditBillingStatus, {
        /// <field>
        /// Called when a new AddEditBillingStatus screen is created.
        /// <br/>created(msls.application.AddEditBillingStatus screen)
        /// </field>
        created: [lightSwitchApplication.AddEditBillingStatus],
        /// <field>
        /// Called before changes on an active AddEditBillingStatus screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditBillingStatus screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditBillingStatus],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: $parameters,
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: $parameters,
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: $parameters,
        /// <field>
        /// Called after the BillingStatusSourceKey content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingStatusSourceKey_postRender: $parameters,
        /// <field>
        /// Called after the BillingStatusName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingStatusName_postRender: $parameters,
        /// <field>
        /// Called after the BillingStatusCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingStatusCode_postRender: $parameters
    });

    msls._addEntryPoints(lightSwitchApplication.AddEditPerson, {
        /// <field>
        /// Called when a new AddEditPerson screen is created.
        /// <br/>created(msls.application.AddEditPerson screen)
        /// </field>
        created: [lightSwitchApplication.AddEditPerson],
        /// <field>
        /// Called before changes on an active AddEditPerson screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditPerson screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditPerson],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: $parameters,
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: $parameters,
        /// <field>
        /// Called after the PersonDetails content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PersonDetails_postRender: $parameters,
        /// <field>
        /// Called after the PersonSourceKey content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PersonSourceKey_postRender: $parameters,
        /// <field>
        /// Called after the PersonName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PersonName_postRender: $parameters,
        /// <field>
        /// Called after the PersonCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PersonCode_postRender: $parameters,
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: $parameters,
        /// <field>
        /// Called after the StartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StartDate_postRender: $parameters,
        /// <field>
        /// Called after the ADUsername content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ADUsername_postRender: $parameters,
        /// <field>
        /// Called after the SystemRole content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SystemRole_postRender: $parameters,
        /// <field>
        /// Called after the SystemRole1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SystemRole1_postRender: $parameters,
        /// <field>
        /// Called after the ActiveType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActiveType_postRender: $parameters,
        /// <field>
        /// Called after the ActiveType1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActiveType1_postRender: $parameters,
        /// <field>
        /// Called after the PersonBilling content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PersonBilling_postRender: $parameters,
        /// <field>
        /// Called after the BillingPercentTarget content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingPercentTarget_postRender: $parameters,
        /// <field>
        /// Called after the BillingPercentMinimum content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingPercentMinimum_postRender: $parameters,
        /// <field>
        /// Called after the HourlyCost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HourlyCost_postRender: $parameters,
        /// <field>
        /// Called after the MonthlyCost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthlyCost_postRender: $parameters,
        /// <field>
        /// Called after the IsContractor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IsContractor_postRender: $parameters,
        /// <field>
        /// Called after the Billable content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Billable_postRender: $parameters
    });

    msls._addEntryPoints(lightSwitchApplication.AddEditTimesheet, {
        /// <field>
        /// Called when a new AddEditTimesheet screen is created.
        /// <br/>created(msls.application.AddEditTimesheet screen)
        /// </field>
        created: [lightSwitchApplication.AddEditTimesheet],
        /// <field>
        /// Called before changes on an active AddEditTimesheet screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditTimesheet screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditTimesheet],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: $parameters,
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: $parameters,
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: $parameters,
        /// <field>
        /// Called after the TimesheetDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetDate_postRender: $parameters,
        /// <field>
        /// Called after the TimesheetSourceKey content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetSourceKey_postRender: $parameters,
        /// <field>
        /// Called after the TimesheetCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetCode_postRender: $parameters,
        /// <field>
        /// Called after the TimesheetName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetName_postRender: $parameters,
        /// <field>
        /// Called after the TimesheetPerson content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetPerson_postRender: $parameters,
        /// <field>
        /// Called after the TimesheetDetails content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetDetails_postRender: $parameters,
        /// <field>
        /// Called after the TimesheetDetails1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetDetails1_postRender: $parameters,
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: $parameters,
        /// <field>
        /// Called after the TimesheetDetailName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetDetailName_postRender: $parameters
    });

    msls._addEntryPoints(lightSwitchApplication.AddEditTypeOfWork, {
        /// <field>
        /// Called when a new AddEditTypeOfWork screen is created.
        /// <br/>created(msls.application.AddEditTypeOfWork screen)
        /// </field>
        created: [lightSwitchApplication.AddEditTypeOfWork],
        /// <field>
        /// Called before changes on an active AddEditTypeOfWork screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditTypeOfWork screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditTypeOfWork],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: $parameters,
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: $parameters,
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: $parameters,
        /// <field>
        /// Called after the TypeOfWorkSourceKey content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TypeOfWorkSourceKey_postRender: $parameters,
        /// <field>
        /// Called after the TypeOfWorkCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TypeOfWorkCode_postRender: $parameters,
        /// <field>
        /// Called after the TypeOfWorkName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TypeOfWorkName_postRender: $parameters
    });

    msls._addEntryPoints(lightSwitchApplication.BrowseClientRoles, {
        /// <field>
        /// Called when a new BrowseClientRoles screen is created.
        /// <br/>created(msls.application.BrowseClientRoles screen)
        /// </field>
        created: [lightSwitchApplication.BrowseClientRoles],
        /// <field>
        /// Called before changes on an active BrowseClientRoles screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseClientRoles screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseClientRoles],
        /// <field>
        /// Called after the ClientRoleList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientRoleList_postRender: $parameters,
        /// <field>
        /// Called after the ClientRole content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientRole_postRender: $parameters,
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: $parameters
    });

    msls._addEntryPoints(lightSwitchApplication.AddEditClientRole, {
        /// <field>
        /// Called when a new AddEditClientRole screen is created.
        /// <br/>created(msls.application.AddEditClientRole screen)
        /// </field>
        created: [lightSwitchApplication.AddEditClientRole],
        /// <field>
        /// Called before changes on an active AddEditClientRole screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditClientRole screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditClientRole],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: $parameters,
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: $parameters,
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: $parameters,
        /// <field>
        /// Called after the ClientRoleSourceKey content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientRoleSourceKey_postRender: $parameters,
        /// <field>
        /// Called after the ClientRoleCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientRoleCode_postRender: $parameters,
        /// <field>
        /// Called after the ClientRoleName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientRoleName_postRender: $parameters,
        /// <field>
        /// Called after the BillingDetails content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingDetails_postRender: $parameters,
        /// <field>
        /// Called after the BillingDetails1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingDetails1_postRender: $parameters,
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: $parameters
    });

    msls._addEntryPoints(lightSwitchApplication.BrowseProjects, {
        /// <field>
        /// Called when a new BrowseProjects screen is created.
        /// <br/>created(msls.application.BrowseProjects screen)
        /// </field>
        created: [lightSwitchApplication.BrowseProjects],
        /// <field>
        /// Called before changes on an active BrowseProjects screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseProjects screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseProjects],
        /// <field>
        /// Called after the ProjectList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectList_postRender: $parameters,
        /// <field>
        /// Called after the Project content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Project_postRender: $parameters,
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: $parameters
    });

    msls._addEntryPoints(lightSwitchApplication.AddEditProject, {
        /// <field>
        /// Called when a new AddEditProject screen is created.
        /// <br/>created(msls.application.AddEditProject screen)
        /// </field>
        created: [lightSwitchApplication.AddEditProject],
        /// <field>
        /// Called before changes on an active AddEditProject screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditProject screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditProject],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: $parameters,
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: $parameters,
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: $parameters,
        /// <field>
        /// Called after the ProjectName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectName_postRender: $parameters,
        /// <field>
        /// Called after the ProjectSourceKey content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectSourceKey_postRender: $parameters,
        /// <field>
        /// Called after the LoadDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LoadDate_postRender: $parameters,
        /// <field>
        /// Called after the ProjectCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectCode_postRender: $parameters,
        /// <field>
        /// Called after the LoadDateID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LoadDateID_postRender: $parameters,
        /// <field>
        /// Called after the ProjectFirstPersonName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectFirstPersonName_postRender: $parameters,
        /// <field>
        /// Called after the ProjectFirstFilename content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectFirstFilename_postRender: $parameters,
        /// <field>
        /// Called after the ConsultingEstimate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ConsultingEstimate_postRender: $parameters,
        /// <field>
        /// Called after the SoftwareEstimate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SoftwareEstimate_postRender: $parameters,
        /// <field>
        /// Called after the VMEstimate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        VMEstimate_postRender: $parameters,
        /// <field>
        /// Called after the ProjectCap content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectCap_postRender: $parameters,
        /// <field>
        /// Called after the AdminProject content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AdminProject_postRender: $parameters,
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: $parameters,
        /// <field>
        /// Called after the BillingStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingStatus_postRender: $parameters,
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: $parameters,
        /// <field>
        /// Called after the Client content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Client_postRender: $parameters,
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: $parameters,
        /// <field>
        /// Called after the Person content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Person_postRender: $parameters,
        /// <field>
        /// Called after the RowTemplate2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate2_postRender: $parameters,
        /// <field>
        /// Called after the sys_CreatedOn content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sys_CreatedOn_postRender: $parameters,
        /// <field>
        /// Called after the sys_CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sys_CreatedBy_postRender: $parameters,
        /// <field>
        /// Called after the sys_ModifiedOn content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sys_ModifiedOn_postRender: $parameters,
        /// <field>
        /// Called after the sys_ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sys_ModifiedBy_postRender: $parameters,
        /// <field>
        /// Called after the ActiveType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActiveType_postRender: $parameters,
        /// <field>
        /// Called after the RowTemplate3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate3_postRender: $parameters,
        /// <field>
        /// Called after the MonthlyCap content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthlyCap_postRender: $parameters,
        /// <field>
        /// Called after the MonthlyCapWarning content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthlyCapWarning_postRender: $parameters,
        /// <field>
        /// Called after the ProjectCapWarning content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectCapWarning_postRender: $parameters
    });

}(msls.application));
