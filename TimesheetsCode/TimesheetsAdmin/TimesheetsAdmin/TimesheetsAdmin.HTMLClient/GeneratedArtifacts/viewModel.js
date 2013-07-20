/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function HomeScreen(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the HomeScreen screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.HomeScreen.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "HomeScreen", parameters);
    }

    function AddEditProject(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditProject screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Project" type="msls.application.Project">
        /// Gets or sets the project for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditProject.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditProject", parameters);
    }

    function BrowseTimesheetDetails(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseTimesheetDetails screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TimesheetDetails" type="msls.VisualCollection" elementType="msls.application.TimesheetDetail">
        /// Gets the timesheetDetails for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseTimesheetDetails.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseTimesheetDetails", parameters);
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
        /// <field name="details" type="msls.application.AddEditTimesheetDetail.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditTimesheetDetail", parameters);
    }

    function BrowseClients(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseClients screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Clients" type="msls.VisualCollection" elementType="msls.application.Client">
        /// Gets the clients for this screen.
        /// </field>
        /// <field name="ClientClientName" type="String">
        /// Gets or sets the clientClientName for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseClients.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseClients", parameters);
    }

    function AddEditClient(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditClient screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Client" type="msls.application.Client">
        /// Gets or sets the client for this screen.
        /// </field>
        /// <field name="BillingDetails" type="msls.VisualCollection" elementType="msls.application.BillingDetail">
        /// Gets the billingDetails for this screen.
        /// </field>
        /// <field name="Projects" type="msls.VisualCollection" elementType="msls.application.Project">
        /// Gets the projects for this screen.
        /// </field>
        /// <field name="PersonSorted" type="msls.VisualCollection" elementType="msls.application.Person">
        /// Gets the personSorted for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditClient.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditClient", parameters);
    }

    function BrowseBillingDetails(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseBillingDetails screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="BillingDetails" type="msls.VisualCollection" elementType="msls.application.BillingDetail">
        /// Gets the billingDetails for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseBillingDetails.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseBillingDetails", parameters);
    }

    function BrowseBillingStatus(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseBillingStatus screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="BillingStatus" type="msls.VisualCollection" elementType="msls.application.BillingStatus">
        /// Gets the billingStatus for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseBillingStatus.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseBillingStatus", parameters);
    }

    function BrowsePeople(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowsePeople screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="People" type="msls.VisualCollection" elementType="msls.application.Person">
        /// Gets the people for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowsePeople.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowsePeople", parameters);
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
        /// <field name="Timesheets" type="msls.VisualCollection" elementType="msls.application.Timesheet">
        /// Gets the timesheets for this screen.
        /// </field>
        /// <field name="TimesheetStartDate" type="Date">
        /// Gets or sets the timesheetStartDate for this screen.
        /// </field>
        /// <field name="TimesheetEndDate" type="Date">
        /// Gets or sets the timesheetEndDate for this screen.
        /// </field>
        /// <field name="TimesheetTimesheetPerson" type="String">
        /// Gets or sets the timesheetTimesheetPerson for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseTimesheets.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseTimesheets", parameters);
    }

    function BrowseTypesOfWork(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseTypesOfWork screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TypeOfWorks" type="msls.VisualCollection" elementType="msls.application.TypeOfWork">
        /// Gets the typeOfWorks for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseTypesOfWork.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseTypesOfWork", parameters);
    }

    function AddEditBillingDetail(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditBillingDetail screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="BillingDetail" type="msls.application.BillingDetail">
        /// Gets or sets the billingDetail for this screen.
        /// </field>
        /// <field name="BillingDate" type="msls.VisualCollection" elementType="msls.application.DimDate">
        /// Gets the billingDate for this screen.
        /// </field>
        /// <field name="PersonSorted" type="msls.VisualCollection" elementType="msls.application.Person">
        /// Gets the personSorted for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditBillingDetail.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditBillingDetail", parameters);
    }

    function AddEditBillingStatus(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditBillingStatus screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="BillingStatu" type="msls.application.BillingStatus">
        /// Gets or sets the billingStatu for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditBillingStatus.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditBillingStatus", parameters);
    }

    function AddEditPerson(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditPerson screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Person" type="msls.application.Person">
        /// Gets or sets the person for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditPerson.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditPerson", parameters);
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

    function AddEditTypeOfWork(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditTypeOfWork screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TypeOfWork" type="msls.application.TypeOfWork">
        /// Gets or sets the typeOfWork for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditTypeOfWork.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditTypeOfWork", parameters);
    }

    function BrowseClientRoles(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseClientRoles screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ClientRoles" type="msls.VisualCollection" elementType="msls.application.ClientRole">
        /// Gets the clientRoles for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseClientRoles.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseClientRoles", parameters);
    }

    function AddEditClientRole(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditClientRole screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ClientRole" type="msls.application.ClientRole">
        /// Gets or sets the clientRole for this screen.
        /// </field>
        /// <field name="BillingDetails" type="msls.VisualCollection" elementType="msls.application.BillingDetail">
        /// Gets the billingDetails for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditClientRole.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditClientRole", parameters);
    }

    msls._addToNamespace("msls.application", {

        HomeScreen: $defineScreen(HomeScreen, [
        ], [
        ]),

        AddEditProject: $defineScreen(AddEditProject, [
            { name: "Project", kind: "local", type: lightSwitchApplication.Project }
        ], [
        ]),

        BrowseTimesheetDetails: $defineScreen(BrowseTimesheetDetails, [
            {
                name: "TimesheetDetails", kind: "collection", elementType: lightSwitchApplication.TimesheetDetail,
                createQuery: function () {
                    return this.dataWorkspace.TimeSheets_Dev_Leo.TimesheetDetails.filter("Project/Client/ClientCode eq 'Capitec'").orderBy("DimDate/DateID").thenBy("Person/PersonName").expand("DimDate").expand("Person").expand("Project").expand("Timesheet").expand("TypeOfWork");
                }
            }
        ], [
        ]),

        AddEditTimesheetDetail: $defineScreen(AddEditTimesheetDetail, [
            { name: "TimesheetDetail", kind: "local", type: lightSwitchApplication.TimesheetDetail }
        ], [
        ]),

        BrowseClients: $defineScreen(BrowseClients, [
            {
                name: "Clients", kind: "collection", elementType: lightSwitchApplication.Client,
                createQuery: function (ClientName) {
                    return this.dataWorkspace.TimeSheets_Dev_Leo.FilteredClient(ClientName);
                }
            },
            { name: "ClientClientName", kind: "local", type: String }
        ], [
        ]),

        AddEditClient: $defineScreen(AddEditClient, [
            { name: "Client", kind: "local", type: lightSwitchApplication.Client },
            {
                name: "BillingDetails", kind: "collection", elementType: lightSwitchApplication.BillingDetail,
                getNavigationProperty: function () {
                    if (this.owner.Client) {
                        return this.owner.Client.details.properties.BillingDetails;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("Client").expand("Person");
                }
            },
            {
                name: "Projects", kind: "collection", elementType: lightSwitchApplication.Project,
                getNavigationProperty: function () {
                    if (this.owner.Client) {
                        return this.owner.Client.details.properties.Projects;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.filter("ActiveType/ID eq 1").orderBy("ProjectName").expand("BillingStatus").expand("Person");
                }
            },
            {
                name: "PersonSorted", kind: "collection", elementType: lightSwitchApplication.Person,
                createQuery: function () {
                    return this.dataWorkspace.TimeSheets_Dev_Leo.PersonSorted();
                }
            }
        ], [
        ]),

        BrowseBillingDetails: $defineScreen(BrowseBillingDetails, [
            {
                name: "BillingDetails", kind: "collection", elementType: lightSwitchApplication.BillingDetail,
                createQuery: function () {
                    return this.dataWorkspace.TimeSheets_Dev_Leo.BillingDetails.filter("ActiveType/ID eq 1").orderBy("Client/ClientName").thenBy("Person/PersonName").expand("Client").expand("Person");
                }
            }
        ], [
        ]),

        BrowseBillingStatus: $defineScreen(BrowseBillingStatus, [
            {
                name: "BillingStatus", kind: "collection", elementType: lightSwitchApplication.BillingStatus,
                createQuery: function () {
                    return this.dataWorkspace.TimeSheets_Dev_Leo.BillingStatusSet;
                }
            }
        ], [
        ]),

        BrowsePeople: $defineScreen(BrowsePeople, [
            {
                name: "People", kind: "collection", elementType: lightSwitchApplication.Person,
                createQuery: function () {
                    return this.dataWorkspace.TimeSheets_Dev_Leo.People.filter("ActiveType/ID eq 1").orderBy("PersonName");
                }
            }
        ], [
        ]),

        BrowseTimesheets: $defineScreen(BrowseTimesheets, [
            {
                name: "Timesheets", kind: "collection", elementType: lightSwitchApplication.Timesheet,
                createQuery: function (StartDate, EndDate, TimesheetPerson) {
                    return this.dataWorkspace.TimeSheets_Dev_Leo.TimesheetsByDate(StartDate, EndDate, TimesheetPerson);
                }
            },
            { name: "TimesheetStartDate", kind: "local", type: Date },
            { name: "TimesheetEndDate", kind: "local", type: Date },
            { name: "TimesheetTimesheetPerson", kind: "local", type: String }
        ], [
        ]),

        BrowseTypesOfWork: $defineScreen(BrowseTypesOfWork, [
            {
                name: "TypeOfWorks", kind: "collection", elementType: lightSwitchApplication.TypeOfWork,
                createQuery: function () {
                    return this.dataWorkspace.TimeSheets_Dev_Leo.TypeOfWorks;
                }
            }
        ], [
        ]),

        AddEditBillingDetail: $defineScreen(AddEditBillingDetail, [
            { name: "BillingDetail", kind: "local", type: lightSwitchApplication.BillingDetail },
            {
                name: "BillingDate", kind: "collection", elementType: lightSwitchApplication.DimDate,
                createQuery: function () {
                    return this.dataWorkspace.TimeSheets_Dev_Leo.BillingDate();
                }
            },
            {
                name: "PersonSorted", kind: "collection", elementType: lightSwitchApplication.Person,
                createQuery: function () {
                    return this.dataWorkspace.TimeSheets_Dev_Leo.PersonSorted();
                }
            }
        ], [
        ]),

        AddEditBillingStatus: $defineScreen(AddEditBillingStatus, [
            { name: "BillingStatu", kind: "local", type: lightSwitchApplication.BillingStatus }
        ], [
        ]),

        AddEditPerson: $defineScreen(AddEditPerson, [
            { name: "Person", kind: "local", type: lightSwitchApplication.Person }
        ], [
        ]),

        AddEditTimesheet: $defineScreen(AddEditTimesheet, [
            { name: "Timesheet", kind: "local", type: lightSwitchApplication.Timesheet },
            {
                name: "TimesheetDetails", kind: "collection", elementType: lightSwitchApplication.TimesheetDetail,
                getNavigationProperty: function () {
                    if (this.owner.Timesheet) {
                        return this.owner.Timesheet.details.properties.TimesheetDetails;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
        ]),

        AddEditTypeOfWork: $defineScreen(AddEditTypeOfWork, [
            { name: "TypeOfWork", kind: "local", type: lightSwitchApplication.TypeOfWork }
        ], [
        ]),

        BrowseClientRoles: $defineScreen(BrowseClientRoles, [
            {
                name: "ClientRoles", kind: "collection", elementType: lightSwitchApplication.ClientRole,
                createQuery: function () {
                    return this.dataWorkspace.TimeSheets_Dev_Leo.ClientRoles;
                }
            }
        ], [
        ]),

        AddEditClientRole: $defineScreen(AddEditClientRole, [
            { name: "ClientRole", kind: "local", type: lightSwitchApplication.ClientRole },
            {
                name: "BillingDetails", kind: "collection", elementType: lightSwitchApplication.BillingDetail,
                getNavigationProperty: function () {
                    if (this.owner.ClientRole) {
                        return this.owner.ClientRole.details.properties.BillingDetails;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("Client").expand("Person");
                }
            }
        ], [
        ]),

        showHomeScreen: $defineShowScreen(function showHomeScreen(options) {
            /// <summary>
            /// Asynchronously navigates forward to the HomeScreen screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("HomeScreen", parameters, options);
        }),

        showAddEditProject: $defineShowScreen(function showAddEditProject(Project, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditProject screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditProject", parameters, options);
        }),

        showBrowseTimesheetDetails: $defineShowScreen(function showBrowseTimesheetDetails(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseTimesheetDetails screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseTimesheetDetails", parameters, options);
        }),

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

        showBrowseClients: $defineShowScreen(function showBrowseClients(ClientClientName, options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseClients screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("BrowseClients", parameters, options);
        }),

        showAddEditClient: $defineShowScreen(function showAddEditClient(Client, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditClient screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditClient", parameters, options);
        }),

        showBrowseBillingDetails: $defineShowScreen(function showBrowseBillingDetails(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseBillingDetails screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseBillingDetails", parameters, options);
        }),

        showBrowseBillingStatus: $defineShowScreen(function showBrowseBillingStatus(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseBillingStatus screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseBillingStatus", parameters, options);
        }),

        showBrowsePeople: $defineShowScreen(function showBrowsePeople(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowsePeople screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowsePeople", parameters, options);
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

        showBrowseTypesOfWork: $defineShowScreen(function showBrowseTypesOfWork(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseTypesOfWork screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseTypesOfWork", parameters, options);
        }),

        showAddEditBillingDetail: $defineShowScreen(function showAddEditBillingDetail(BillingDetail, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditBillingDetail screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditBillingDetail", parameters, options);
        }),

        showAddEditBillingStatus: $defineShowScreen(function showAddEditBillingStatus(BillingStatu, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditBillingStatus screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditBillingStatus", parameters, options);
        }),

        showAddEditPerson: $defineShowScreen(function showAddEditPerson(Person, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditPerson screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditPerson", parameters, options);
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

        showAddEditTypeOfWork: $defineShowScreen(function showAddEditTypeOfWork(TypeOfWork, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditTypeOfWork screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditTypeOfWork", parameters, options);
        }),

        showBrowseClientRoles: $defineShowScreen(function showBrowseClientRoles(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseClientRoles screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseClientRoles", parameters, options);
        }),

        showAddEditClientRole: $defineShowScreen(function showAddEditClientRole(ClientRole, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditClientRole screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditClientRole", parameters, options);
        })

    });

}(msls.application));
