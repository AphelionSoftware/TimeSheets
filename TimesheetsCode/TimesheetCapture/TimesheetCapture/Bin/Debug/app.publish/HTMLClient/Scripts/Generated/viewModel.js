/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

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
        /// <field name="Timesheets" type="msls.VisualCollection" elementType="msls.application.Timesheet">
        /// Gets the timesheets for this screen.
        /// </field>
        /// <field name="TimesheetStartDate" type="Date">
        /// Gets or sets the timesheetStartDate for this screen.
        /// </field>
        /// <field name="TimesheetEndDate" type="Date">
        /// Gets or sets the timesheetEndDate for this screen.
        /// </field>
        /// <field name="VersionInfo" type="String">
        /// Gets or sets the versionInfo for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseTimesheets.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseTimesheets", parameters);
    }

    function AddEditTimesheet(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditTimesheet screen.
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
        /// <field name="details" type="msls.application.AddEditTimesheet.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditTimesheet", parameters);
    }

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
        /// <field name="TimesheetDate" type="msls.VisualCollection" elementType="msls.application.DimDate">
        /// Gets the timesheetDate for this screen.
        /// </field>
        /// <field name="TimesheetDetailDate" type="msls.VisualCollection" elementType="msls.application.DimDate">
        /// Gets the timesheetDetailDate for this screen.
        /// </field>
        /// <field name="ProjectSorted" type="msls.VisualCollection" elementType="msls.application.Project">
        /// Gets the projectSorted for this screen.
        /// </field>
        /// <field name="TimesheetID" type="msls.application.Timesheet">
        /// Gets or sets the timesheetID for this screen.
        /// </field>
        /// <field name="PeriodEndDate" type="Date">
        /// Gets or sets the periodEndDate for this screen.
        /// </field>
        /// <field name="TypeOfWorks" type="msls.VisualCollection" elementType="msls.application.TypeOfWork">
        /// Gets the typeOfWorks for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditTimesheetDetail.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditTimesheetDetail", parameters);
    }

    msls._addToNamespace("msls.application", {

        BrowseTimesheets: $defineScreen(BrowseTimesheets, [
            {
                name: "Timesheets", kind: "collection", elementType: lightSwitchApplication.Timesheet,
                createQuery: function (StartDate, EndDate) {
                    return this.dataWorkspace.TimesheetsData.TimesheetsUser(StartDate, EndDate).orderByDescending("DimDate/c_Date").expand("ActiveType").expand("DimDate").expand("OverallStatus");
                }
            },
            { name: "TimesheetStartDate", kind: "local", type: Date },
            { name: "TimesheetEndDate", kind: "local", type: Date },
            { name: "VersionInfo", kind: "local", type: String }
        ], [
            { name: "GetVersionInfo" }
        ]),

        AddEditTimesheet: $defineScreen(AddEditTimesheet, [
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
                    return this.orderBy("DimDate/c_Date").thenBy("Project/ProjectName").expand("DimDate").expand("Project").expand("TypeOfWork");
                }
            }
        ], [
        ]),

        AddEditTimesheetDetail: $defineScreen(AddEditTimesheetDetail, [
            { name: "TimesheetDetail", kind: "local", type: lightSwitchApplication.TimesheetDetail },
            {
                name: "TimesheetDate", kind: "collection", elementType: lightSwitchApplication.DimDate,
                createQuery: function () {
                    return this.dataWorkspace.TimesheetsData.TimesheetDate();
                }
            },
            {
                name: "TimesheetDetailDate", kind: "collection", elementType: lightSwitchApplication.DimDate,
                createQuery: function (PeriodEndDate) {
                    return this.dataWorkspace.TimesheetsData.TimesheetDetailDate(PeriodEndDate);
                }
            },
            {
                name: "ProjectSorted", kind: "collection", elementType: lightSwitchApplication.Project,
                createQuery: function () {
                    return this.dataWorkspace.TimesheetsData.ProjectSorted();
                }
            },
            { name: "TimesheetID", kind: "local", type: lightSwitchApplication.Timesheet },
            { name: "PeriodEndDate", kind: "local", type: Date },
            {
                name: "TypeOfWorks", kind: "collection", elementType: lightSwitchApplication.TypeOfWork,
                createQuery: function () {
                    return this.dataWorkspace.TimesheetsData.TypeOfWorks.orderBy("TypeOfWorkName");
                }
            }
        ], [
        ]),

        showBrowseTimesheets: $defineShowScreen(function showBrowseTimesheets(TimesheetEndDate, options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseTimesheets screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("BrowseTimesheets", parameters, options);
        }),

        showAddEditTimesheet: $defineShowScreen(function showAddEditTimesheet(Timesheet, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditTimesheet screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditTimesheet", parameters, options);
        }),

        showAddEditTimesheetDetail: $defineShowScreen(function showAddEditTimesheetDetail(TimesheetDetail, PeriodEndDate, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditTimesheetDetail screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 2);
            return lightSwitchApplication.showScreen("AddEditTimesheetDetail", parameters, options);
        })

    });

}(msls.application));
