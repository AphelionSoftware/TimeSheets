/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

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
        /// <field name="details" type="msls.application.ManageTimesheets.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ManageTimesheets", parameters);
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
        /// <field name="details" type="msls.application.EditTimesheet.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "EditTimesheet", parameters);
    }

    function TimesheetDetails(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the TimesheetDetails screen.
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
        /// <field name="Timesheet" type="msls.application.Timesheet">
        /// Gets the timesheet for this screen.
        /// </field>
        /// <field name="details" type="msls.application.TimesheetDetails.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "TimesheetDetails", parameters);
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
        /// <field name="TimesheetDetailDate" type="msls.VisualCollection" elementType="msls.application.DimDate">
        /// Gets the timesheetDetailDate for this screen.
        /// </field>
        /// <field name="WeekEnding" type="Date">
        /// Gets or sets the weekEnding for this screen.
        /// </field>
        /// <field name="ProjectSorted" type="msls.VisualCollection" elementType="msls.application.Project">
        /// Gets the projectSorted for this screen.
        /// </field>
        /// <field name="details" type="msls.application.EditTimesheetDetails.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "EditTimesheetDetails", parameters);
    }

    msls._addToNamespace("msls.application", {

        ManageTimesheets: $defineScreen(ManageTimesheets, [
            {
                name: "TimesheetsUser", kind: "collection", elementType: lightSwitchApplication.Timesheet,
                createQuery: function (StartDate, EndDate) {
                    return this.dataWorkspace.TimesheetsData.TimesheetsUser(StartDate, EndDate).expand("DimDate");
                }
            },
            { name: "TimesheetStartDate", kind: "local", type: Date },
            { name: "TimesheetEndDate", kind: "local", type: Date }
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

        EditTimesheet: $defineScreen(EditTimesheet, [
            { name: "Timesheet", kind: "local", type: lightSwitchApplication.Timesheet },
            {
                name: "TimesheetDate", kind: "collection", elementType: lightSwitchApplication.DimDate,
                createQuery: function () {
                    return this.dataWorkspace.TimesheetsData.TimesheetDate();
                }
            }
        ], [
        ]),

        TimesheetDetails: $defineScreen(TimesheetDetails, [
            {
                name: "TimesheetDetailsQuery", kind: "collection", elementType: lightSwitchApplication.TimesheetDetail,
                createQuery: function (TimesheetID) {
                    return this.dataWorkspace.TimesheetsData.TimesheetDetailsQuery().filter("" + ((TimesheetID === undefined || TimesheetID === null) ? "false" : "(Timesheet/TimesheetID eq " + $toODataString(TimesheetID, "Int32?") + ")") + "").expand("DimDate").expand("Project").expand("TypeOfWork");
                }
            },
            { name: "TimesheetID", kind: "local", type: Number },
            {
                name: "Timesheet", kind: "reference", type: lightSwitchApplication.Timesheet,
                createQuery: function (TimesheetID) {
                    return this.dataWorkspace.TimesheetsData.Timesheets_SingleOrDefault(TimesheetID);
                }
            }
        ], [
            { name: "Delete" },
            { name: "Refresh" }
        ]),

        EditTimesheetDetails: $defineScreen(EditTimesheetDetails, [
            {
                name: "TimesheetDetailsQuery", kind: "collection", elementType: lightSwitchApplication.TimesheetDetail,
                createQuery: function (TimesheetID) {
                    return this.dataWorkspace.TimesheetsData.TimesheetDetailsQuery().filter("" + ((TimesheetID === undefined || TimesheetID === null) ? "false" : "(Timesheet/TimesheetID eq " + $toODataString(TimesheetID, "Int32?") + ")") + "").expand("DimDate").expand("Project").expand("TypeOfWork");
                }
            },
            { name: "TimesheetID", kind: "local", type: Number },
            {
                name: "TimesheetDetailDate", kind: "collection", elementType: lightSwitchApplication.DimDate,
                createQuery: function (PeriodEndDate) {
                    return this.dataWorkspace.TimesheetsData.TimesheetDetailDate(PeriodEndDate).filter("" + ((PeriodEndDate === undefined || PeriodEndDate === null) ? "false" : "(WeekEnding eq " + $toODataString(PeriodEndDate, "DateTime?") + ")") + "");
                }
            },
            { name: "WeekEnding", kind: "local", type: Date },
            {
                name: "ProjectSorted", kind: "collection", elementType: lightSwitchApplication.Project,
                createQuery: function () {
                    return this.dataWorkspace.TimesheetsData.ProjectSorted();
                }
            }
        ], [
            { name: "AddNew" },
            { name: "DeleteSelected" },
            { name: "SaveChanges" },
            { name: "Refresh" }
        ]),

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

        showTimesheetDetails: $defineShowScreen(function showTimesheetDetails(TimesheetID, options) {
            /// <summary>
            /// Asynchronously navigates forward to the TimesheetDetails screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("TimesheetDetails", parameters, options);
        }),

        showEditTimesheetDetails: $defineShowScreen(function showEditTimesheetDetails(TimesheetID, WeekEnding, options) {
            /// <summary>
            /// Asynchronously navigates forward to the EditTimesheetDetails screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 2);
            return lightSwitchApplication.showScreen("EditTimesheetDetails", parameters, options);
        })

    });

}(msls.application));
