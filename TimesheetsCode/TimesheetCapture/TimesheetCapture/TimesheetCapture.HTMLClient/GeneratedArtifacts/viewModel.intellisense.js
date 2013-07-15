/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $parameters = [document.createElement("div"), msls.ContentItem];

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
        /// Called after the TimesheetsFilter content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetsFilter_postRender: $parameters,
        /// <field>
        /// Called after the TimesheetStartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetStartDate_postRender: $parameters,
        /// <field>
        /// Called after the TimesheetEndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetEndDate_postRender: $parameters
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
        /// Called after the Timesheet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Timesheet_postRender: $parameters,
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
        /// Called after the DimDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DimDate_postRender: $parameters,
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: $parameters,
        /// <field>
        /// Called after the TimesheetName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetName_postRender: $parameters,
        /// <field>
        /// Called after the TimesheetCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetCode_postRender: $parameters,
        /// <field>
        /// Called after the TimesheetFileName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetFileName_postRender: $parameters,
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
        /// Called after the RowTemplate3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate3_postRender: $parameters,
        /// <field>
        /// Called after the Project content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Project_postRender: $parameters,
        /// <field>
        /// Called after the Hours content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Hours_postRender: $parameters,
        /// <field>
        /// Called after the Comments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Comments_postRender: $parameters
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
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: $parameters,
        /// <field>
        /// Called after the DimDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DimDate_postRender: $parameters,
        /// <field>
        /// Called after the RowTemplate2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate2_postRender: $parameters,
        /// <field>
        /// Called after the Project content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Project_postRender: $parameters,
        /// <field>
        /// Called after the RowTemplate4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate4_postRender: $parameters,
        /// <field>
        /// Called after the TypeOfWork content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TypeOfWork_postRender: $parameters,
        /// <field>
        /// Called after the TypeOfWork1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TypeOfWork1_postRender: $parameters,
        /// <field>
        /// Called after the Hours content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Hours_postRender: $parameters,
        /// <field>
        /// Called after the Comments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Comments_postRender: $parameters
    });

}(msls.application));
