/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function AddEditTimesheetDetail(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditTimesheetDetail screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TimesheetDetail" type="msls.application.TimesheetDetail">
        /// Gets or sets the timesheetDetail for this screen.
        /// </field>
        /// <field name="TimesheetDetailDate" type="msls.VisualCollection" elementType="msls.application.DimDate">
        /// Gets the timesheetDetailDate for this screen.
        /// </field>
        /// <field name="ProjectSorted" type="msls.VisualCollection" elementType="msls.application.Project">
        /// Gets the projectSorted for this screen.
        /// </field>
        /// <field name="TypeOfWorkSorted" type="msls.VisualCollection" elementType="msls.application.TypeOfWork">
        /// Gets the typeOfWorkSorted for this screen.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditTimesheetDetail.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditTimesheetDetail", parameters);
    }

    function AddNewTimesheet(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddNewTimesheet screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Timesheet" type="msls.application.Timesheet">
        /// Gets or sets the timesheet for this screen.
        /// </field>
        /// <field name="TimesheetDate" type="msls.VisualCollection" elementType="msls.application.DimDate">
        /// Gets the timesheetDate for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddNewTimesheet.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddNewTimesheet", parameters);
    }

    function BrowseTimesheets(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseTimesheets screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TimesheetsUser" type="msls.VisualCollection" elementType="msls.application.Timesheet">
        /// Gets the timesheetsUser for this screen.
        /// </field>
        /// <field name="TimesheetStartDate" type="Date">
        /// Gets or sets the timesheetStartDate for this screen.
        /// </field>
        /// <field name="TimesheetEndDate" type="Date">
        /// Gets or sets the timesheetEndDate for this screen.
        /// </field>
        /// <field name="TimesheetHours" type="msls.VisualCollection" elementType="msls.application.TimesheetHour">
        /// Gets the timesheetHours for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseTimesheets.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseTimesheets", parameters);
    }

    function EditTimesheet(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the EditTimesheet screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Timesheet" type="msls.application.Timesheet">
        /// Gets or sets the timesheet for this screen.
        /// </field>
        /// <field name="TimesheetDate" type="msls.VisualCollection" elementType="msls.application.DimDate">
        /// Gets the timesheetDate for this screen.
        /// </field>
        /// <field name="TimesheetDetails" type="msls.VisualCollection" elementType="msls.application.TimesheetDetail">
        /// Gets the timesheetDetails for this screen.
        /// </field>
        /// <field name="details" type="msls.application.EditTimesheet.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "EditTimesheet", parameters);
    }

    function EditTimesheetDetails(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the EditTimesheetDetails screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TimesheetDetailsQuery" type="msls.VisualCollection" elementType="msls.application.TimesheetDetail">
        /// Gets the timesheetDetailsQuery for this screen.
        /// </field>
        /// <field name="TimesheetID" type="Number">
        /// Gets or sets the timesheetID for this screen.
        /// </field>
        /// <field name="WeekEnding" type="Date">
        /// Gets or sets the weekEnding for this screen.
        /// </field>
        /// <field name="ProjectSorted" type="msls.VisualCollection" elementType="msls.application.Project">
        /// Gets the projectSorted for this screen.
        /// </field>
        /// <field name="Instructions" type="String">
        /// Gets or sets the instructions for this screen.
        /// </field>
        /// <field name="TimesheetDetailDate" type="msls.VisualCollection" elementType="msls.application.DimDate">
        /// Gets the timesheetDetailDate for this screen.
        /// </field>
        /// <field name="details" type="msls.application.EditTimesheetDetails.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "EditTimesheetDetails", parameters);
    }

    function ManageTimesheets(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ManageTimesheets screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TimesheetsUser" type="msls.VisualCollection" elementType="msls.application.Timesheet">
        /// Gets the timesheetsUser for this screen.
        /// </field>
        /// <field name="TimesheetStartDate" type="Date">
        /// Gets or sets the timesheetStartDate for this screen.
        /// </field>
        /// <field name="TimesheetEndDate" type="Date">
        /// Gets or sets the timesheetEndDate for this screen.
        /// </field>
        /// <field name="ShowDetails" type="Boolean">
        /// Gets or sets the showDetails for this screen.
        /// </field>
        /// <field name="TimesheetHours" type="msls.VisualCollection" elementType="msls.application.TimesheetHour">
        /// Gets the timesheetHours for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ManageTimesheets.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ManageTimesheets", parameters);
    }

    msls._addToNamespace("msls.application", {

        AddEditTimesheetDetail: $defineScreen(AddEditTimesheetDetail, [
            { name: "TimesheetDetail", kind: "local", type: lightSwitchApplication.TimesheetDetail },
            {
                name: "TimesheetDetailDate", kind: "collection", elementType: lightSwitchApplication.DimDate,
                createQuery: function (PeriodEnding) {
                    return this.dataWorkspace.TimesheetsData.TimesheetDetailDate(PeriodEnding);
                }
            },
            {
                name: "ProjectSorted", kind: "collection", elementType: lightSwitchApplication.Project,
                createQuery: function (Name) {
                    return this.dataWorkspace.TimesheetsData.ProjectSorted(Name).expand("Client");
                }
            },
            {
                name: "TypeOfWorkSorted", kind: "collection", elementType: lightSwitchApplication.TypeOfWork,
                createQuery: function () {
                    return this.dataWorkspace.TimesheetsData.TypeOfWorkSorted();
                }
            },
            { name: "Name", kind: "local", type: String }
        ], [
        ]),

        AddNewTimesheet: $defineScreen(AddNewTimesheet, [
            { name: "Timesheet", kind: "local", type: lightSwitchApplication.Timesheet },
            {
                name: "TimesheetDate", kind: "collection", elementType: lightSwitchApplication.DimDate,
                createQuery: function () {
                    return this.dataWorkspace.TimesheetsData.TimesheetDate();
                }
            }
        ], [
        ]),

        BrowseTimesheets: $defineScreen(BrowseTimesheets, [
            {
                name: "TimesheetsUser", kind: "collection", elementType: lightSwitchApplication.Timesheet,
                createQuery: function (StartDate, EndDate) {
                    return this.dataWorkspace.TimesheetsData.TimesheetsUser(StartDate, EndDate).expand("ActiveType").expand("DimDate").expand("OverallStatus").expand("Person");
                }
            },
            { name: "TimesheetStartDate", kind: "local", type: Date },
            { name: "TimesheetEndDate", kind: "local", type: Date },
            {
                name: "TimesheetHours", kind: "collection", elementType: lightSwitchApplication.TimesheetHour,
                createQuery: function () {
                    return this.dataWorkspace.TimesheetsData.TimesheetHours;
                }
            }
        ], [
        ]),

        EditTimesheet: $defineScreen(EditTimesheet, [
            { name: "Timesheet", kind: "local", type: lightSwitchApplication.Timesheet },
            {
                name: "TimesheetDate", kind: "collection", elementType: lightSwitchApplication.DimDate,
                createQuery: function () {
                    return this.dataWorkspace.TimesheetsData.TimesheetDate();
                }
            },
            {
                name: "TimesheetDetails", kind: "collection", elementType: lightSwitchApplication.TimesheetDetail,
                getNavigationProperty: function () {
                    if (this.owner.Timesheet) {
                        return this.owner.Timesheet.details.properties.TimesheetDetails;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("DimDate").expand("TypeOfWork").expand("Project").expand("Project.Client").expand("BillingStatu");
                }
            }
        ], [
        ]),

        EditTimesheetDetails: $defineScreen(EditTimesheetDetails, [
            {
                name: "TimesheetDetailsQuery", kind: "collection", elementType: lightSwitchApplication.TimesheetDetail,
                createQuery: function (TimesheetID) {
                    return this.dataWorkspace.TimesheetsData.TimesheetDetailsQuery().filter("" + ((TimesheetID === undefined || TimesheetID === null) ? "false" : "(Timesheet/TimesheetID eq " + $toODataString(TimesheetID, "Int32?") + ")") + "").expand("DimDate").expand("Project").expand("Project.Client").expand("TypeOfWork");
                }
            },
            { name: "TimesheetID", kind: "local", type: Number },
            { name: "WeekEnding", kind: "local", type: Date },
            {
                name: "ProjectSorted", kind: "collection", elementType: lightSwitchApplication.Project,
                createQuery: function (Name) {
                    return this.dataWorkspace.TimesheetsData.ProjectSorted(Name);
                }
            },
            { name: "Instructions", kind: "local", type: String },
            {
                name: "TimesheetDetailDate", kind: "collection", elementType: lightSwitchApplication.DimDate,
                createQuery: function (PeriodEnding) {
                    return this.dataWorkspace.TimesheetsData.TimesheetDetailDate(PeriodEnding);
                }
            }
        ], [
            { name: "AddNew" },
            { name: "DeleteSelected" },
            { name: "SaveChanges" },
            { name: "Refresh" }
        ]),

        ManageTimesheets: $defineScreen(ManageTimesheets, [
            {
                name: "TimesheetsUser", kind: "collection", elementType: lightSwitchApplication.Timesheet,
                createQuery: function (StartDate, EndDate) {
                    return this.dataWorkspace.TimesheetsData.TimesheetsUser(StartDate, EndDate).expand("Person");
                }
            },
            { name: "TimesheetStartDate", kind: "local", type: Date },
            { name: "TimesheetEndDate", kind: "local", type: Date },
            { name: "ShowDetails", kind: "local", type: Boolean },
            {
                name: "TimesheetHours", kind: "collection", elementType: lightSwitchApplication.TimesheetHour,
                createQuery: function () {
                    return this.dataWorkspace.TimesheetsData.TimesheetHours;
                }
            }
        ], [
            { name: "EditTimesheet_Tap" },
            { name: "ShowTimesheetDetails_Tap" },
            { name: "Timesheet_ItemTap" }
        ]),

        showAddEditTimesheetDetail: $defineShowScreen(function showAddEditTimesheetDetail(TimesheetDetail, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditTimesheetDetail screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditTimesheetDetail", parameters, options);
        }),

        showAddNewTimesheet: $defineShowScreen(function showAddNewTimesheet(Timesheet, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddNewTimesheet screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddNewTimesheet", parameters, options);
        }),

        showBrowseTimesheets: $defineShowScreen(function showBrowseTimesheets(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseTimesheets screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseTimesheets", parameters, options);
        }),

        showEditTimesheet: $defineShowScreen(function showEditTimesheet(Timesheet, options) {
            /// <summary>
            /// Asynchronously navigates forward to the EditTimesheet screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("EditTimesheet", parameters, options);
        }),

        showEditTimesheetDetails: $defineShowScreen(function showEditTimesheetDetails(TimesheetID, WeekEnding, Instructions, options) {
            /// <summary>
            /// Asynchronously navigates forward to the EditTimesheetDetails screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 3);
            return lightSwitchApplication.showScreen("EditTimesheetDetails", parameters, options);
        }),

        showManageTimesheets: $defineShowScreen(function showManageTimesheets(options) {
            /// <summary>
            /// Asynchronously navigates forward to the ManageTimesheets screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("ManageTimesheets", parameters, options);
        })

    });

}(msls.application));
