/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.AddEditTimesheetDetail.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTimesheetDetail
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.AddEditTimesheetDetail,
            value: lightSwitchApplication.AddEditTimesheetDetail
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.AddEditTimesheetDetail,
            value: lightSwitchApplication.TimesheetDetail
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.TimesheetDetail,
            value: lightSwitchApplication.TimesheetDetail
        },
        DimDate: {
            _$class: msls.ContentItem,
            _$name: "DimDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.TimesheetDetail,
            value: lightSwitchApplication.DimDate
        },
        RowTemplate2: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate2",
            _$parentName: "DimDate",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.DimDate,
            value: lightSwitchApplication.DimDate
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.TimesheetDetail,
            value: lightSwitchApplication.TimesheetDetail
        },
        Project1: {
            _$class: msls.ContentItem,
            _$name: "Project1",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.TimesheetDetail,
            value: lightSwitchApplication.Project
        },
        Project2: {
            _$class: msls.ContentItem,
            _$name: "Project2",
            _$parentName: "Project1",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.Project,
            value: lightSwitchApplication.Project
        },
        Client: {
            _$class: msls.ContentItem,
            _$name: "Client",
            _$parentName: "Project2",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.Project,
            value: lightSwitchApplication.Client
        },
        ProjectName: {
            _$class: msls.ContentItem,
            _$name: "ProjectName",
            _$parentName: "Project2",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.Project,
            value: String
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditTimesheetDetail
        },
        TypeOfWork: {
            _$class: msls.ContentItem,
            _$name: "TypeOfWork",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.TimesheetDetail,
            value: lightSwitchApplication.TypeOfWork
        },
        RowTemplate6: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate6",
            _$parentName: "TypeOfWork",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.TypeOfWork,
            value: lightSwitchApplication.TypeOfWork
        },
        Hours: {
            _$class: msls.ContentItem,
            _$name: "Hours",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.TimesheetDetail,
            value: String
        },
        Comments: {
            _$class: msls.ContentItem,
            _$name: "Comments",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.TimesheetDetail,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.TimesheetDetail,
            value: lightSwitchApplication.TimesheetDetail
        },
        Timesheet: {
            _$class: msls.ContentItem,
            _$name: "Timesheet",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.TimesheetDetail,
            value: lightSwitchApplication.Timesheet
        },
        ClientComments: {
            _$class: msls.ContentItem,
            _$name: "ClientComments",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.TimesheetDetail,
            value: String
        },
        AMComments: {
            _$class: msls.ContentItem,
            _$name: "AMComments",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.TimesheetDetail,
            value: String
        },
        sys_ModifiedOn: {
            _$class: msls.ContentItem,
            _$name: "sys_ModifiedOn",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.TimesheetDetail,
            value: Date
        },
        BillingStatu: {
            _$class: msls.ContentItem,
            _$name: "BillingStatu",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.TimesheetDetail,
            value: lightSwitchApplication.BillingStatu
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTimesheetDetail
        },
        ProjectFilter: {
            _$class: msls.ContentItem,
            _$name: "ProjectFilter",
            _$parentName: "Popups",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.AddEditTimesheetDetail,
            value: lightSwitchApplication.AddEditTimesheetDetail
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "ProjectFilter",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.AddEditTimesheetDetail,
            value: String
        }
    };

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
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("left"); }],
        /// <field>
        /// Called after the DimDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DimDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("DimDate"); }],
        /// <field>
        /// Called after the RowTemplate2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate2_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("RowTemplate2"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("Group"); }],
        /// <field>
        /// Called after the Project1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Project1_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("Project1"); }],
        /// <field>
        /// Called after the Project2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Project2_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("Project2"); }],
        /// <field>
        /// Called after the Client content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Client_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("Client"); }],
        /// <field>
        /// Called after the ProjectName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectName_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("ProjectName"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("Search"); }],
        /// <field>
        /// Called after the TypeOfWork content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TypeOfWork_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("TypeOfWork"); }],
        /// <field>
        /// Called after the RowTemplate6 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate6_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("RowTemplate6"); }],
        /// <field>
        /// Called after the Hours content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Hours_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("Hours"); }],
        /// <field>
        /// Called after the Comments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Comments_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("Comments"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("right"); }],
        /// <field>
        /// Called after the Timesheet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Timesheet_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("Timesheet"); }],
        /// <field>
        /// Called after the ClientComments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientComments_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("ClientComments"); }],
        /// <field>
        /// Called after the AMComments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AMComments_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("AMComments"); }],
        /// <field>
        /// Called after the sys_ModifiedOn content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        sys_ModifiedOn_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("sys_ModifiedOn"); }],
        /// <field>
        /// Called after the BillingStatu content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingStatu_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("BillingStatu"); }],
        /// <field>
        /// Called after the ProjectFilter content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectFilter_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("ProjectFilter"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("Name"); }]
    });

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

    lightSwitchApplication.BrowseTimesheets.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTimesheets
        },
        TimesheetList: {
            _$class: msls.ContentItem,
            _$name: "TimesheetList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseTimesheets,
            data: lightSwitchApplication.BrowseTimesheets,
            value: lightSwitchApplication.BrowseTimesheets
        },
        TimesheetHours: {
            _$class: msls.ContentItem,
            _$name: "TimesheetHours",
            _$parentName: "TimesheetList",
            screen: lightSwitchApplication.BrowseTimesheets,
            data: lightSwitchApplication.BrowseTimesheets,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseTimesheets,
                _$entry: {
                    elementType: lightSwitchApplication.TimesheetHour
                }
            }
        },
        TimesheetHoursTemplate: {
            _$class: msls.ContentItem,
            _$name: "TimesheetHoursTemplate",
            _$parentName: "TimesheetHours",
            screen: lightSwitchApplication.BrowseTimesheets,
            data: lightSwitchApplication.TimesheetHour,
            value: lightSwitchApplication.TimesheetHour
        },
        c_Date: {
            _$class: msls.ContentItem,
            _$name: "c_Date",
            _$parentName: "TimesheetHoursTemplate",
            screen: lightSwitchApplication.BrowseTimesheets,
            data: lightSwitchApplication.TimesheetHour,
            value: Date
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "TimesheetHoursTemplate",
            screen: lightSwitchApplication.BrowseTimesheets,
            data: lightSwitchApplication.TimesheetHour,
            value: String
        },
        Value: {
            _$class: msls.ContentItem,
            _$name: "Value",
            _$parentName: "TimesheetHoursTemplate",
            screen: lightSwitchApplication.BrowseTimesheets,
            data: lightSwitchApplication.TimesheetHour,
            value: String
        },
        TimesheetStartDate: {
            _$class: msls.ContentItem,
            _$name: "TimesheetStartDate",
            _$parentName: "TimesheetList",
            screen: lightSwitchApplication.BrowseTimesheets,
            data: lightSwitchApplication.BrowseTimesheets,
            value: Date
        },
        TimesheetEndDate: {
            _$class: msls.ContentItem,
            _$name: "TimesheetEndDate",
            _$parentName: "TimesheetList",
            screen: lightSwitchApplication.BrowseTimesheets,
            data: lightSwitchApplication.BrowseTimesheets,
            value: Date
        },
        Timesheet: {
            _$class: msls.ContentItem,
            _$name: "Timesheet",
            _$parentName: "TimesheetList",
            screen: lightSwitchApplication.BrowseTimesheets,
            data: lightSwitchApplication.BrowseTimesheets,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseTimesheets,
                _$entry: {
                    elementType: lightSwitchApplication.Timesheet
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Timesheet",
            screen: lightSwitchApplication.BrowseTimesheets,
            data: lightSwitchApplication.Timesheet,
            value: lightSwitchApplication.Timesheet
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTimesheets
        }
    };

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
        TimesheetList_postRender: [$element, function () { return new lightSwitchApplication.BrowseTimesheets().findContentItem("TimesheetList"); }],
        /// <field>
        /// Called to render the TimesheetHours content item.
        /// <br/>render(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetHours_render: [$element, function () { return new lightSwitchApplication.BrowseTimesheets().findContentItem("TimesheetHours"); }],
        /// <field>
        /// Called after the TimesheetHoursTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetHoursTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseTimesheets().findContentItem("TimesheetHoursTemplate"); }],
        /// <field>
        /// Called after the c_Date content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        c_Date_postRender: [$element, function () { return new lightSwitchApplication.BrowseTimesheets().findContentItem("c_Date"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.BrowseTimesheets().findContentItem("Name"); }],
        /// <field>
        /// Called after the Value content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Value_postRender: [$element, function () { return new lightSwitchApplication.BrowseTimesheets().findContentItem("Value"); }],
        /// <field>
        /// Called after the TimesheetStartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetStartDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseTimesheets().findContentItem("TimesheetStartDate"); }],
        /// <field>
        /// Called after the TimesheetEndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetEndDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseTimesheets().findContentItem("TimesheetEndDate"); }],
        /// <field>
        /// Called after the Timesheet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Timesheet_postRender: [$element, function () { return new lightSwitchApplication.BrowseTimesheets().findContentItem("Timesheet"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseTimesheets().findContentItem("RowTemplate"); }]
    });

    lightSwitchApplication.EditTimesheet.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.EditTimesheet
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.EditTimesheet,
            data: lightSwitchApplication.EditTimesheet,
            value: lightSwitchApplication.EditTimesheet
        },
        TimesheetDetails: {
            _$class: msls.ContentItem,
            _$name: "TimesheetDetails",
            _$parentName: "Group",
            screen: lightSwitchApplication.EditTimesheet,
            data: lightSwitchApplication.EditTimesheet,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.EditTimesheet,
                _$entry: {
                    elementType: lightSwitchApplication.TimesheetDetail
                }
            }
        },
        TimesheetDetailsTemplate: {
            _$class: msls.ContentItem,
            _$name: "TimesheetDetailsTemplate",
            _$parentName: "TimesheetDetails",
            screen: lightSwitchApplication.EditTimesheet,
            data: lightSwitchApplication.TimesheetDetail,
            value: lightSwitchApplication.TimesheetDetail
        },
        DimDate1: {
            _$class: msls.ContentItem,
            _$name: "DimDate1",
            _$parentName: "TimesheetDetailsTemplate",
            screen: lightSwitchApplication.EditTimesheet,
            data: lightSwitchApplication.TimesheetDetail,
            value: lightSwitchApplication.DimDate
        },
        DimDate1Template: {
            _$class: msls.ContentItem,
            _$name: "DimDate1Template",
            _$parentName: "DimDate1",
            screen: lightSwitchApplication.EditTimesheet,
            data: lightSwitchApplication.DimDate,
            value: lightSwitchApplication.DimDate
        },
        TypeOfWork: {
            _$class: msls.ContentItem,
            _$name: "TypeOfWork",
            _$parentName: "TimesheetDetailsTemplate",
            screen: lightSwitchApplication.EditTimesheet,
            data: lightSwitchApplication.TimesheetDetail,
            value: lightSwitchApplication.TypeOfWork
        },
        TypeOfWorkTemplate: {
            _$class: msls.ContentItem,
            _$name: "TypeOfWorkTemplate",
            _$parentName: "TypeOfWork",
            screen: lightSwitchApplication.EditTimesheet,
            data: lightSwitchApplication.TypeOfWork,
            value: lightSwitchApplication.TypeOfWork
        },
        Project: {
            _$class: msls.ContentItem,
            _$name: "Project",
            _$parentName: "TimesheetDetailsTemplate",
            screen: lightSwitchApplication.EditTimesheet,
            data: lightSwitchApplication.TimesheetDetail,
            value: lightSwitchApplication.Project
        },
        ProjectTemplate: {
            _$class: msls.ContentItem,
            _$name: "ProjectTemplate",
            _$parentName: "Project",
            screen: lightSwitchApplication.EditTimesheet,
            data: lightSwitchApplication.Project,
            value: lightSwitchApplication.Project
        },
        Client: {
            _$class: msls.ContentItem,
            _$name: "Client",
            _$parentName: "ProjectTemplate",
            screen: lightSwitchApplication.EditTimesheet,
            data: lightSwitchApplication.Project,
            value: lightSwitchApplication.Client
        },
        ProjectName: {
            _$class: msls.ContentItem,
            _$name: "ProjectName",
            _$parentName: "ProjectTemplate",
            screen: lightSwitchApplication.EditTimesheet,
            data: lightSwitchApplication.Project,
            value: String
        },
        Comments: {
            _$class: msls.ContentItem,
            _$name: "Comments",
            _$parentName: "TimesheetDetailsTemplate",
            screen: lightSwitchApplication.EditTimesheet,
            data: lightSwitchApplication.TimesheetDetail,
            value: String
        },
        Hours: {
            _$class: msls.ContentItem,
            _$name: "Hours",
            _$parentName: "TimesheetDetailsTemplate",
            screen: lightSwitchApplication.EditTimesheet,
            data: lightSwitchApplication.TimesheetDetail,
            value: String
        },
        AMComments: {
            _$class: msls.ContentItem,
            _$name: "AMComments",
            _$parentName: "TimesheetDetailsTemplate",
            screen: lightSwitchApplication.EditTimesheet,
            data: lightSwitchApplication.TimesheetDetail,
            value: String
        },
        BillingStatu: {
            _$class: msls.ContentItem,
            _$name: "BillingStatu",
            _$parentName: "TimesheetDetailsTemplate",
            screen: lightSwitchApplication.EditTimesheet,
            data: lightSwitchApplication.TimesheetDetail,
            value: lightSwitchApplication.BillingStatu
        },
        EditTimesheetDetail: {
            _$class: msls.ContentItem,
            _$name: "EditTimesheetDetail",
            _$parentName: "TimesheetDetailsTemplate",
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
        TimesheetName: {
            _$class: msls.ContentItem,
            _$name: "TimesheetName",
            _$parentName: "left",
            screen: lightSwitchApplication.EditTimesheet,
            data: lightSwitchApplication.Timesheet,
            value: String
        },
        TimesheetFileName: {
            _$class: msls.ContentItem,
            _$name: "TimesheetFileName",
            _$parentName: "left",
            screen: lightSwitchApplication.EditTimesheet,
            data: lightSwitchApplication.Timesheet,
            value: String
        },
        TimesheetDate: {
            _$class: msls.ContentItem,
            _$name: "TimesheetDate",
            _$parentName: "left",
            screen: lightSwitchApplication.EditTimesheet,
            data: lightSwitchApplication.Timesheet,
            value: String
        },
        LoadDateID: {
            _$class: msls.ContentItem,
            _$name: "LoadDateID",
            _$parentName: "left",
            screen: lightSwitchApplication.EditTimesheet,
            data: lightSwitchApplication.Timesheet,
            value: Number
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
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.EditTimesheet().findContentItem("Group"); }],
        /// <field>
        /// Called after the TimesheetDetails content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetDetails_postRender: [$element, function () { return new lightSwitchApplication.EditTimesheet().findContentItem("TimesheetDetails"); }],
        /// <field>
        /// Called after the TimesheetDetailsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetDetailsTemplate_postRender: [$element, function () { return new lightSwitchApplication.EditTimesheet().findContentItem("TimesheetDetailsTemplate"); }],
        /// <field>
        /// Called after the DimDate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DimDate1_postRender: [$element, function () { return new lightSwitchApplication.EditTimesheet().findContentItem("DimDate1"); }],
        /// <field>
        /// Called after the DimDate1Template content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DimDate1Template_postRender: [$element, function () { return new lightSwitchApplication.EditTimesheet().findContentItem("DimDate1Template"); }],
        /// <field>
        /// Called after the TypeOfWork content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TypeOfWork_postRender: [$element, function () { return new lightSwitchApplication.EditTimesheet().findContentItem("TypeOfWork"); }],
        /// <field>
        /// Called after the TypeOfWorkTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TypeOfWorkTemplate_postRender: [$element, function () { return new lightSwitchApplication.EditTimesheet().findContentItem("TypeOfWorkTemplate"); }],
        /// <field>
        /// Called after the Project content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Project_postRender: [$element, function () { return new lightSwitchApplication.EditTimesheet().findContentItem("Project"); }],
        /// <field>
        /// Called after the ProjectTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectTemplate_postRender: [$element, function () { return new lightSwitchApplication.EditTimesheet().findContentItem("ProjectTemplate"); }],
        /// <field>
        /// Called after the Client content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Client_postRender: [$element, function () { return new lightSwitchApplication.EditTimesheet().findContentItem("Client"); }],
        /// <field>
        /// Called after the ProjectName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectName_postRender: [$element, function () { return new lightSwitchApplication.EditTimesheet().findContentItem("ProjectName"); }],
        /// <field>
        /// Called after the Comments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Comments_postRender: [$element, function () { return new lightSwitchApplication.EditTimesheet().findContentItem("Comments"); }],
        /// <field>
        /// Called after the Hours content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Hours_postRender: [$element, function () { return new lightSwitchApplication.EditTimesheet().findContentItem("Hours"); }],
        /// <field>
        /// Called after the AMComments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AMComments_postRender: [$element, function () { return new lightSwitchApplication.EditTimesheet().findContentItem("AMComments"); }],
        /// <field>
        /// Called after the BillingStatu content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingStatu_postRender: [$element, function () { return new lightSwitchApplication.EditTimesheet().findContentItem("BillingStatu"); }],
        /// <field>
        /// Called after the EditTimesheetDetail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EditTimesheetDetail_postRender: [$element, function () { return new lightSwitchApplication.EditTimesheet().findContentItem("EditTimesheetDetail"); }],
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
        /// Called after the TimesheetName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetName_postRender: [$element, function () { return new lightSwitchApplication.EditTimesheet().findContentItem("TimesheetName"); }],
        /// <field>
        /// Called after the TimesheetFileName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetFileName_postRender: [$element, function () { return new lightSwitchApplication.EditTimesheet().findContentItem("TimesheetFileName"); }],
        /// <field>
        /// Called after the TimesheetDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetDate_postRender: [$element, function () { return new lightSwitchApplication.EditTimesheet().findContentItem("TimesheetDate"); }],
        /// <field>
        /// Called after the LoadDateID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LoadDateID_postRender: [$element, function () { return new lightSwitchApplication.EditTimesheet().findContentItem("LoadDateID"); }]
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
        TimesheetHours: {
            _$class: msls.ContentItem,
            _$name: "TimesheetHours",
            _$parentName: "TimesheetList",
            screen: lightSwitchApplication.ManageTimesheets,
            data: lightSwitchApplication.ManageTimesheets,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ManageTimesheets,
                _$entry: {
                    elementType: lightSwitchApplication.TimesheetHour
                }
            }
        },
        TimesheetHoursTemplate: {
            _$class: msls.ContentItem,
            _$name: "TimesheetHoursTemplate",
            _$parentName: "TimesheetHours",
            screen: lightSwitchApplication.ManageTimesheets,
            data: lightSwitchApplication.TimesheetHour,
            value: lightSwitchApplication.TimesheetHour
        },
        c_Date: {
            _$class: msls.ContentItem,
            _$name: "c_Date",
            _$parentName: "TimesheetHoursTemplate",
            screen: lightSwitchApplication.ManageTimesheets,
            data: lightSwitchApplication.TimesheetHour,
            value: Date
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "TimesheetHoursTemplate",
            screen: lightSwitchApplication.ManageTimesheets,
            data: lightSwitchApplication.TimesheetHour,
            value: String
        },
        Value: {
            _$class: msls.ContentItem,
            _$name: "Value",
            _$parentName: "TimesheetHoursTemplate",
            screen: lightSwitchApplication.ManageTimesheets,
            data: lightSwitchApplication.TimesheetHour,
            value: String
        },
        TimesheetsUser: {
            _$class: msls.ContentItem,
            _$name: "TimesheetsUser",
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
        TimesheetsUserTemplate: {
            _$class: msls.ContentItem,
            _$name: "TimesheetsUserTemplate",
            _$parentName: "TimesheetsUser",
            screen: lightSwitchApplication.ManageTimesheets,
            data: lightSwitchApplication.Timesheet,
            value: lightSwitchApplication.Timesheet
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "TimesheetsUserTemplate",
            screen: lightSwitchApplication.ManageTimesheets,
            data: lightSwitchApplication.Timesheet,
            value: lightSwitchApplication.Timesheet
        },
        TimesheetDate: {
            _$class: msls.ContentItem,
            _$name: "TimesheetDate",
            _$parentName: "Group",
            screen: lightSwitchApplication.ManageTimesheets,
            data: lightSwitchApplication.Timesheet,
            value: String
        },
        Person: {
            _$class: msls.ContentItem,
            _$name: "Person",
            _$parentName: "Group",
            screen: lightSwitchApplication.ManageTimesheets,
            data: lightSwitchApplication.Timesheet,
            value: lightSwitchApplication.PersonItem
        },
        LoadDate: {
            _$class: msls.ContentItem,
            _$name: "LoadDate",
            _$parentName: "TimesheetsUserTemplate",
            screen: lightSwitchApplication.ManageTimesheets,
            data: lightSwitchApplication.Timesheet,
            value: Date
        },
        TimesheetFileName: {
            _$class: msls.ContentItem,
            _$name: "TimesheetFileName",
            _$parentName: "TimesheetsUserTemplate",
            screen: lightSwitchApplication.ManageTimesheets,
            data: lightSwitchApplication.Timesheet,
            value: String
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
        /// Called to render the TimesheetHours content item.
        /// <br/>render(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetHours_render: [$element, function () { return new lightSwitchApplication.ManageTimesheets().findContentItem("TimesheetHours"); }],
        /// <field>
        /// Called after the TimesheetHoursTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetHoursTemplate_postRender: [$element, function () { return new lightSwitchApplication.ManageTimesheets().findContentItem("TimesheetHoursTemplate"); }],
        /// <field>
        /// Called after the c_Date content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        c_Date_postRender: [$element, function () { return new lightSwitchApplication.ManageTimesheets().findContentItem("c_Date"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.ManageTimesheets().findContentItem("Name"); }],
        /// <field>
        /// Called after the Value content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Value_postRender: [$element, function () { return new lightSwitchApplication.ManageTimesheets().findContentItem("Value"); }],
        /// <field>
        /// Called after the TimesheetsUser content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetsUser_postRender: [$element, function () { return new lightSwitchApplication.ManageTimesheets().findContentItem("TimesheetsUser"); }],
        /// <field>
        /// Called after the TimesheetsUserTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetsUserTemplate_postRender: [$element, function () { return new lightSwitchApplication.ManageTimesheets().findContentItem("TimesheetsUserTemplate"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.ManageTimesheets().findContentItem("Group"); }],
        /// <field>
        /// Called after the TimesheetDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetDate_postRender: [$element, function () { return new lightSwitchApplication.ManageTimesheets().findContentItem("TimesheetDate"); }],
        /// <field>
        /// Called after the Person content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Person_postRender: [$element, function () { return new lightSwitchApplication.ManageTimesheets().findContentItem("Person"); }],
        /// <field>
        /// Called after the LoadDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LoadDate_postRender: [$element, function () { return new lightSwitchApplication.ManageTimesheets().findContentItem("LoadDate"); }],
        /// <field>
        /// Called after the TimesheetFileName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetFileName_postRender: [$element, function () { return new lightSwitchApplication.ManageTimesheets().findContentItem("TimesheetFileName"); }],
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