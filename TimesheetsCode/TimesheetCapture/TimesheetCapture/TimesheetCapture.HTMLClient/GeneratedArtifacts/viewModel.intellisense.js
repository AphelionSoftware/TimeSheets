/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $parameters = [document.createElement("div"), msls.ContentItem];

    msls._addEntryPoints(lightSwitchApplication.ManageTimesheets, {
        /// <field>
        /// Called when a new ManageTimesheets screen is created.
        /// <br/>created(msls.application.ManageTimesheets screen)
        /// </field>
        created: [lightSwitchApplication.ManageTimesheets],
        /// <field>
        /// Called before changes on an active ManageTimesheets screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ManageTimesheets screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ManageTimesheets],
        /// <field>
        /// Called to determine if the EditTimesheet_Tap method can be executed.
        /// <br/>canExecute(msls.application.ManageTimesheets screen)
        /// </field>
        EditTimesheet_Tap_canExecute: [lightSwitchApplication.ManageTimesheets],
        /// <field>
        /// Called to execute the EditTimesheet_Tap method.
        /// <br/>execute(msls.application.ManageTimesheets screen)
        /// </field>
        EditTimesheet_Tap_execute: [lightSwitchApplication.ManageTimesheets],
        /// <field>
        /// Called to determine if the ShowTimesheetDetails_Tap method can be executed.
        /// <br/>canExecute(msls.application.ManageTimesheets screen)
        /// </field>
        ShowTimesheetDetails_Tap_canExecute: [lightSwitchApplication.ManageTimesheets],
        /// <field>
        /// Called to execute the ShowTimesheetDetails_Tap method.
        /// <br/>execute(msls.application.ManageTimesheets screen)
        /// </field>
        ShowTimesheetDetails_Tap_execute: [lightSwitchApplication.ManageTimesheets],
        /// <field>
        /// Called to determine if the Timesheet_ItemTap method can be executed.
        /// <br/>canExecute(msls.application.ManageTimesheets screen)
        /// </field>
        Timesheet_ItemTap_canExecute: [lightSwitchApplication.ManageTimesheets],
        /// <field>
        /// Called to execute the Timesheet_ItemTap method.
        /// <br/>execute(msls.application.ManageTimesheets screen)
        /// </field>
        Timesheet_ItemTap_execute: [lightSwitchApplication.ManageTimesheets],
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
        /// Called after the DimDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DimDate_postRender: $parameters,
        /// <field>
        /// Called after the FilterByDateRange content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FilterByDateRange_postRender: $parameters,
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

    msls._addEntryPoints(lightSwitchApplication.AddNewTimesheet, {
        /// <field>
        /// Called when a new AddNewTimesheet screen is created.
        /// <br/>created(msls.application.AddNewTimesheet screen)
        /// </field>
        created: [lightSwitchApplication.AddNewTimesheet],
        /// <field>
        /// Called before changes on an active AddNewTimesheet screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddNewTimesheet screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddNewTimesheet],
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
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: $parameters
    });

    msls._addEntryPoints(lightSwitchApplication.EditTimesheet, {
        /// <field>
        /// Called when a new EditTimesheet screen is created.
        /// <br/>created(msls.application.EditTimesheet screen)
        /// </field>
        created: [lightSwitchApplication.EditTimesheet],
        /// <field>
        /// Called before changes on an active EditTimesheet screen are applied.
        /// <br/>beforeApplyChanges(msls.application.EditTimesheet screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.EditTimesheet],
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
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: $parameters
    });

    msls._addEntryPoints(lightSwitchApplication.EditTimesheetDetails, {
        /// <field>
        /// Called when a new EditTimesheetDetails screen is created.
        /// <br/>created(msls.application.EditTimesheetDetails screen)
        /// </field>
        created: [lightSwitchApplication.EditTimesheetDetails],
        /// <field>
        /// Called before changes on an active EditTimesheetDetails screen are applied.
        /// <br/>beforeApplyChanges(msls.application.EditTimesheetDetails screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.EditTimesheetDetails],
        /// <field>
        /// Called to determine if the AddNew method can be executed.
        /// <br/>canExecute(msls.application.EditTimesheetDetails screen)
        /// </field>
        AddNew_canExecute: [lightSwitchApplication.EditTimesheetDetails],
        /// <field>
        /// Called to execute the AddNew method.
        /// <br/>execute(msls.application.EditTimesheetDetails screen)
        /// </field>
        AddNew_execute: [lightSwitchApplication.EditTimesheetDetails],
        /// <field>
        /// Called to determine if the DeleteSelected method can be executed.
        /// <br/>canExecute(msls.application.EditTimesheetDetails screen)
        /// </field>
        DeleteSelected_canExecute: [lightSwitchApplication.EditTimesheetDetails],
        /// <field>
        /// Called to execute the DeleteSelected method.
        /// <br/>execute(msls.application.EditTimesheetDetails screen)
        /// </field>
        DeleteSelected_execute: [lightSwitchApplication.EditTimesheetDetails],
        /// <field>
        /// Called to determine if the SaveChanges method can be executed.
        /// <br/>canExecute(msls.application.EditTimesheetDetails screen)
        /// </field>
        SaveChanges_canExecute: [lightSwitchApplication.EditTimesheetDetails],
        /// <field>
        /// Called to execute the SaveChanges method.
        /// <br/>execute(msls.application.EditTimesheetDetails screen)
        /// </field>
        SaveChanges_execute: [lightSwitchApplication.EditTimesheetDetails],
        /// <field>
        /// Called to determine if the Refresh method can be executed.
        /// <br/>canExecute(msls.application.EditTimesheetDetails screen)
        /// </field>
        Refresh_canExecute: [lightSwitchApplication.EditTimesheetDetails],
        /// <field>
        /// Called to execute the Refresh method.
        /// <br/>execute(msls.application.EditTimesheetDetails screen)
        /// </field>
        Refresh_execute: [lightSwitchApplication.EditTimesheetDetails],
        /// <field>
        /// Called after the TimesheetDetail List content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetDetail List_postRender: $parameters,
        /// <field>
        /// Called after the WeekEnding content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WeekEnding_postRender: $parameters,
        /// <field>
        /// Called after the Instructions content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Instructions_postRender: $parameters,
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: $parameters,
        /// <field>
        /// Called after the Header content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Header_postRender: $parameters,
        /// <field>
        /// Called after the DateGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateGroup_postRender: $parameters,
        /// <field>
        /// Called after the TimesheetDetailsQuery_selectedItem_DimDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetDetailsQuery_selectedItem_DimDate_postRender: $parameters,
        /// <field>
        /// Called after the DimDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DimDate_postRender: $parameters,
        /// <field>
        /// Called after the ProjectGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectGroup_postRender: $parameters,
        /// <field>
        /// Called after the TimesheetDetailsQuery_selectedItem_Project content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetDetailsQuery_selectedItem_Project_postRender: $parameters,
        /// <field>
        /// Called after the Project content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Project_postRender: $parameters,
        /// <field>
        /// Called after the WorkGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkGroup_postRender: $parameters,
        /// <field>
        /// Called after the TimesheetDetailsQuery_selectedItem_TypeOfWork content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetDetailsQuery_selectedItem_TypeOfWork_postRender: $parameters,
        /// <field>
        /// Called after the TypeOfWork content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TypeOfWork_postRender: $parameters,
        /// <field>
        /// Called after the WijmoGrid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WijmoGrid_postRender: $parameters,
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: $parameters,
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
