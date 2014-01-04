/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.AddNewTimesheet.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddNewTimesheet
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddNewTimesheet,
            data: lightSwitchApplication.AddNewTimesheet,
            value: lightSwitchApplication.AddNewTimesheet
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddNewTimesheet,
            data: lightSwitchApplication.AddNewTimesheet,
            value: lightSwitchApplication.Timesheet
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddNewTimesheet,
            data: lightSwitchApplication.Timesheet,
            value: lightSwitchApplication.Timesheet
        },
        DimDate: {
            _$class: msls.ContentItem,
            _$name: "DimDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddNewTimesheet,
            data: lightSwitchApplication.Timesheet,
            value: lightSwitchApplication.DimDate
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "DimDate",
            screen: lightSwitchApplication.AddNewTimesheet,
            data: lightSwitchApplication.DimDate,
            value: lightSwitchApplication.DimDate
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddNewTimesheet
        }
    };

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
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddNewTimesheet().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddNewTimesheet().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddNewTimesheet().findContentItem("left"); }],
        /// <field>
        /// Called after the DimDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DimDate_postRender: [$element, function () { return new lightSwitchApplication.AddNewTimesheet().findContentItem("DimDate"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddNewTimesheet().findContentItem("RowTemplate1"); }]
    });

    lightSwitchApplication.EditTimesheet.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.EditTimesheet
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.EditTimesheet,
            data: lightSwitchApplication.EditTimesheet,
            value: lightSwitchApplication.EditTimesheet
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.EditTimesheet,
            data: lightSwitchApplication.EditTimesheet,
            value: lightSwitchApplication.Timesheet
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.EditTimesheet,
            data: lightSwitchApplication.Timesheet,
            value: lightSwitchApplication.Timesheet
        },
        DimDate: {
            _$class: msls.ContentItem,
            _$name: "DimDate",
            _$parentName: "left",
            screen: lightSwitchApplication.EditTimesheet,
            data: lightSwitchApplication.Timesheet,
            value: lightSwitchApplication.DimDate
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "DimDate",
            screen: lightSwitchApplication.EditTimesheet,
            data: lightSwitchApplication.DimDate,
            value: lightSwitchApplication.DimDate
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.EditTimesheet,
            data: lightSwitchApplication.EditTimesheet,
            value: lightSwitchApplication.EditTimesheet
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.EditTimesheet
        }
    };

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
        Details_postRender: [$element, function () { return new lightSwitchApplication.EditTimesheet().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.EditTimesheet().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.EditTimesheet().findContentItem("left"); }],
        /// <field>
        /// Called after the DimDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DimDate_postRender: [$element, function () { return new lightSwitchApplication.EditTimesheet().findContentItem("DimDate"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.EditTimesheet().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.EditTimesheet().findContentItem("Group"); }]
    });

    lightSwitchApplication.EditTimesheetDetails.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.EditTimesheetDetails
        },
        TimesheetDetail List: {
            _$class: msls.ContentItem,
            _$name: "TimesheetDetail List",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.EditTimesheetDetails,
            data: lightSwitchApplication.EditTimesheetDetails,
            value: lightSwitchApplication.EditTimesheetDetails
        },
        WeekEnding: {
            _$class: msls.ContentItem,
            _$name: "WeekEnding",
            _$parentName: "TimesheetDetail List",
            screen: lightSwitchApplication.EditTimesheetDetails,
            data: lightSwitchApplication.EditTimesheetDetails,
            value: Date
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "TimesheetDetail List",
            screen: lightSwitchApplication.EditTimesheetDetails,
            data: lightSwitchApplication.EditTimesheetDetails,
            value: lightSwitchApplication.EditTimesheetDetails
        },
        TimesheetDetailsQuery: {
            _$class: msls.ContentItem,
            _$name: "TimesheetDetailsQuery",
            _$parentName: "TimesheetDetail List",
            screen: lightSwitchApplication.EditTimesheetDetails,
            data: lightSwitchApplication.EditTimesheetDetails,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.EditTimesheetDetails,
                _$entry: {
                    elementType: lightSwitchApplication.TimesheetDetail
                }
            }
        },
        TimesheetDetailsQueryTemplate: {
            _$class: msls.ContentItem,
            _$name: "TimesheetDetailsQueryTemplate",
            _$parentName: "TimesheetDetailsQuery",
            screen: lightSwitchApplication.EditTimesheetDetails,
            data: lightSwitchApplication.TimesheetDetail,
            value: lightSwitchApplication.TimesheetDetail
        },
        DimDate: {
            _$class: msls.ContentItem,
            _$name: "DimDate",
            _$parentName: "TimesheetDetailsQueryTemplate",
            screen: lightSwitchApplication.EditTimesheetDetails,
            data: lightSwitchApplication.TimesheetDetail,
            value: lightSwitchApplication.DimDate
        },
        DimDateTemplate: {
            _$class: msls.ContentItem,
            _$name: "DimDateTemplate",
            _$parentName: "DimDate",
            screen: lightSwitchApplication.EditTimesheetDetails,
            data: lightSwitchApplication.DimDate,
            value: lightSwitchApplication.DimDate
        },
        Project: {
            _$class: msls.ContentItem,
            _$name: "Project",
            _$parentName: "TimesheetDetailsQueryTemplate",
            screen: lightSwitchApplication.EditTimesheetDetails,
            data: lightSwitchApplication.TimesheetDetail,
            value: lightSwitchApplication.Project
        },
        ProjectTemplate: {
            _$class: msls.ContentItem,
            _$name: "ProjectTemplate",
            _$parentName: "Project",
            screen: lightSwitchApplication.EditTimesheetDetails,
            data: lightSwitchApplication.Project,
            value: lightSwitchApplication.Project
        },
        TypeOfWork: {
            _$class: msls.ContentItem,
            _$name: "TypeOfWork",
            _$parentName: "TimesheetDetailsQueryTemplate",
            screen: lightSwitchApplication.EditTimesheetDetails,
            data: lightSwitchApplication.TimesheetDetail,
            value: lightSwitchApplication.TypeOfWork
        },
        TypeOfWorkTemplate: {
            _$class: msls.ContentItem,
            _$name: "TypeOfWorkTemplate",
            _$parentName: "TypeOfWork",
            screen: lightSwitchApplication.EditTimesheetDetails,
            data: lightSwitchApplication.TypeOfWork,
            value: lightSwitchApplication.TypeOfWork
        },
        Comments: {
            _$class: msls.ContentItem,
            _$name: "Comments",
            _$parentName: "TimesheetDetailsQueryTemplate",
            screen: lightSwitchApplication.EditTimesheetDetails,
            data: lightSwitchApplication.TimesheetDetail,
            value: String
        },
        Hours: {
            _$class: msls.ContentItem,
            _$name: "Hours",
            _$parentName: "TimesheetDetailsQueryTemplate",
            screen: lightSwitchApplication.EditTimesheetDetails,
            data: lightSwitchApplication.TimesheetDetail,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.EditTimesheetDetails
        }
    };

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
        TimesheetDetail List_postRender: [$element, function () { return new lightSwitchApplication.EditTimesheetDetails().findContentItem("TimesheetDetail List"); }],
        /// <field>
        /// Called after the WeekEnding content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WeekEnding_postRender: [$element, function () { return new lightSwitchApplication.EditTimesheetDetails().findContentItem("WeekEnding"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.EditTimesheetDetails().findContentItem("Group"); }],
        /// <field>
        /// Called after the TimesheetDetailsQuery content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetDetailsQuery_postRender: [$element, function () { return new lightSwitchApplication.EditTimesheetDetails().findContentItem("TimesheetDetailsQuery"); }],
        /// <field>
        /// Called after the TimesheetDetailsQueryTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetDetailsQueryTemplate_postRender: [$element, function () { return new lightSwitchApplication.EditTimesheetDetails().findContentItem("TimesheetDetailsQueryTemplate"); }],
        /// <field>
        /// Called after the DimDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DimDate_postRender: [$element, function () { return new lightSwitchApplication.EditTimesheetDetails().findContentItem("DimDate"); }],
        /// <field>
        /// Called after the DimDateTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DimDateTemplate_postRender: [$element, function () { return new lightSwitchApplication.EditTimesheetDetails().findContentItem("DimDateTemplate"); }],
        /// <field>
        /// Called after the Project content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Project_postRender: [$element, function () { return new lightSwitchApplication.EditTimesheetDetails().findContentItem("Project"); }],
        /// <field>
        /// Called after the ProjectTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectTemplate_postRender: [$element, function () { return new lightSwitchApplication.EditTimesheetDetails().findContentItem("ProjectTemplate"); }],
        /// <field>
        /// Called after the TypeOfWork content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TypeOfWork_postRender: [$element, function () { return new lightSwitchApplication.EditTimesheetDetails().findContentItem("TypeOfWork"); }],
        /// <field>
        /// Called after the TypeOfWorkTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TypeOfWorkTemplate_postRender: [$element, function () { return new lightSwitchApplication.EditTimesheetDetails().findContentItem("TypeOfWorkTemplate"); }],
        /// <field>
        /// Called after the Comments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Comments_postRender: [$element, function () { return new lightSwitchApplication.EditTimesheetDetails().findContentItem("Comments"); }],
        /// <field>
        /// Called after the Hours content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Hours_postRender: [$element, function () { return new lightSwitchApplication.EditTimesheetDetails().findContentItem("Hours"); }]
    });

    lightSwitchApplication.ManageTimesheets.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ManageTimesheets
        },
        TimesheetList: {
            _$class: msls.ContentItem,
            _$name: "TimesheetList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ManageTimesheets,
            data: lightSwitchApplication.ManageTimesheets,
            value: lightSwitchApplication.ManageTimesheets
        },
        Timesheet: {
            _$class: msls.ContentItem,
            _$name: "Timesheet",
            _$parentName: "TimesheetList",
            screen: lightSwitchApplication.ManageTimesheets,
            data: lightSwitchApplication.ManageTimesheets,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ManageTimesheets,
                _$entry: {
                    elementType: lightSwitchApplication.Timesheet
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Timesheet",
            screen: lightSwitchApplication.ManageTimesheets,
            data: lightSwitchApplication.Timesheet,
            value: lightSwitchApplication.Timesheet
        },
        DimDate: {
            _$class: msls.ContentItem,
            _$name: "DimDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.ManageTimesheets,
            data: lightSwitchApplication.Timesheet,
            value: lightSwitchApplication.DimDate
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ManageTimesheets
        },
        FilterByDateRange: {
            _$class: msls.ContentItem,
            _$name: "FilterByDateRange",
            _$parentName: "Popups",
            screen: lightSwitchApplication.ManageTimesheets,
            data: lightSwitchApplication.ManageTimesheets,
            value: lightSwitchApplication.ManageTimesheets
        },
        TimesheetStartDate: {
            _$class: msls.ContentItem,
            _$name: "TimesheetStartDate",
            _$parentName: "FilterByDateRange",
            screen: lightSwitchApplication.ManageTimesheets,
            data: lightSwitchApplication.ManageTimesheets,
            value: Date
        },
        TimesheetEndDate: {
            _$class: msls.ContentItem,
            _$name: "TimesheetEndDate",
            _$parentName: "FilterByDateRange",
            screen: lightSwitchApplication.ManageTimesheets,
            data: lightSwitchApplication.ManageTimesheets,
            value: Date
        }
    };

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
        TimesheetList_postRender: [$element, function () { return new lightSwitchApplication.ManageTimesheets().findContentItem("TimesheetList"); }],
        /// <field>
        /// Called after the Timesheet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Timesheet_postRender: [$element, function () { return new lightSwitchApplication.ManageTimesheets().findContentItem("Timesheet"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.ManageTimesheets().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the DimDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DimDate_postRender: [$element, function () { return new lightSwitchApplication.ManageTimesheets().findContentItem("DimDate"); }],
        /// <field>
        /// Called after the FilterByDateRange content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FilterByDateRange_postRender: [$element, function () { return new lightSwitchApplication.ManageTimesheets().findContentItem("FilterByDateRange"); }],
        /// <field>
        /// Called after the TimesheetStartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetStartDate_postRender: [$element, function () { return new lightSwitchApplication.ManageTimesheets().findContentItem("TimesheetStartDate"); }],
        /// <field>
        /// Called after the TimesheetEndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetEndDate_postRender: [$element, function () { return new lightSwitchApplication.ManageTimesheets().findContentItem("TimesheetEndDate"); }]
    });

}(msls.application));