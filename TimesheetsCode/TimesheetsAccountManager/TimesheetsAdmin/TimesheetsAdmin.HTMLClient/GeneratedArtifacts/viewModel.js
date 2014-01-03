/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

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
        /// <field name="UnallocatedTimesheetsSorted" type="msls.VisualCollection" elementType="msls.application.UnallocatedTimesheet">
        /// Gets the unallocatedTimesheetsSorted for this screen.
        /// </field>
        /// <field name="PersonName" type="String">
        /// Gets or sets the personName for this screen.
        /// </field>
        /// <field name="BillingStatusSet" type="msls.VisualCollection" elementType="msls.application.BillingStatus">
        /// Gets the billingStatusSet for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditClient.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditClient", parameters);
    }

    function AddEditInvoice(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditInvoice screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Invoice" type="msls.application.Invoice">
        /// Gets or sets the invoice for this screen.
        /// </field>
        /// <field name="InvoiceLines" type="msls.VisualCollection" elementType="msls.application.InvoiceLine">
        /// Gets the invoiceLines for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditInvoice.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditInvoice", parameters);
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
        /// <field name="BillingDetailClientName" type="String">
        /// Gets or sets the billingDetailClientName for this screen.
        /// </field>
        /// <field name="BillingDetailPersonName" type="String">
        /// Gets or sets the billingDetailPersonName for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseBillingDetails.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseBillingDetails", parameters);
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

    function BrowseInvoices(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseInvoices screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Invoices" type="msls.VisualCollection" elementType="msls.application.Invoice">
        /// Gets the invoices for this screen.
        /// </field>
        /// <field name="InvoicesSorted" type="msls.VisualCollection" elementType="msls.application.Invoice">
        /// Gets the invoicesSorted for this screen.
        /// </field>
        /// <field name="PersonName" type="String">
        /// Gets or sets the personName for this screen.
        /// </field>
        /// <field name="InvoiceStatusName" type="String">
        /// Gets or sets the invoiceStatusName for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseInvoices.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseInvoices", parameters);
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
        /// <field name="TimesheetsByDate" type="msls.VisualCollection" elementType="msls.application.Timesheet">
        /// Gets the timesheetsByDate for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseTimesheets.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseTimesheets", parameters);
    }

    function EditUnallocatedTimesheets(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the EditUnallocatedTimesheets screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="UnallocatedTimesheetsSorted" type="msls.VisualCollection" elementType="msls.application.UnallocatedTimesheet">
        /// Gets the unallocatedTimesheetsSorted for this screen.
        /// </field>
        /// <field name="UnallocatedTimesheetClientName" type="String">
        /// Gets or sets the unallocatedTimesheetClientName for this screen.
        /// </field>
        /// <field name="UnallocatedTimesheetPersonName" type="String">
        /// Gets or sets the unallocatedTimesheetPersonName for this screen.
        /// </field>
        /// <field name="BillingStatusSet" type="msls.VisualCollection" elementType="msls.application.BillingStatus">
        /// Gets the billingStatusSet for this screen.
        /// </field>
        /// <field name="details" type="msls.application.EditUnallocatedTimesheets.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "EditUnallocatedTimesheets", parameters);
    }

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

    function UnallocatedTimesheets(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the UnallocatedTimesheets screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="UnallocatedTimesheets1" type="msls.VisualCollection" elementType="msls.application.UnallocatedTimesheet">
        /// Gets the unallocatedTimesheets1 for this screen.
        /// </field>
        /// <field name="UnallocatedTimesheetsSorted" type="msls.VisualCollection" elementType="msls.application.UnallocatedTimesheet">
        /// Gets the unallocatedTimesheetsSorted for this screen.
        /// </field>
        /// <field name="ClientName" type="String">
        /// Gets or sets the clientName for this screen.
        /// </field>
        /// <field name="PersonName" type="String">
        /// Gets or sets the personName for this screen.
        /// </field>
        /// <field name="details" type="msls.application.UnallocatedTimesheets.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "UnallocatedTimesheets", parameters);
    }

    msls._addToNamespace("msls.application", {

        AddEditBillingDetail: $defineScreen(AddEditBillingDetail, [
            { name: "BillingDetail", kind: "local", type: lightSwitchApplication.BillingDetail },
            {
                name: "BillingDate", kind: "collection", elementType: lightSwitchApplication.DimDate,
                createQuery: function () {
                    return this.dataWorkspace.TimesheetsData.BillingDate();
                }
            },
            {
                name: "PersonSorted", kind: "collection", elementType: lightSwitchApplication.Person,
                createQuery: function () {
                    return this.dataWorkspace.TimesheetsData.PersonSorted();
                }
            }
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
                    return this.filter("ActiveType/ID eq 1").orderBy("ProjectName");
                }
            },
            {
                name: "PersonSorted", kind: "collection", elementType: lightSwitchApplication.Person,
                createQuery: function () {
                    return this.dataWorkspace.TimesheetsData.PersonSorted();
                }
            },
            {
                name: "UnallocatedTimesheetsSorted", kind: "collection", elementType: lightSwitchApplication.UnallocatedTimesheet,
                createQuery: function (ClientName, PersonName) {
                    return this.dataWorkspace.TimesheetsData.UnallocatedTimesheetsSorted(ClientName, PersonName);
                }
            },
            { name: "PersonName", kind: "local", type: String },
            {
                name: "BillingStatusSet", kind: "collection", elementType: lightSwitchApplication.BillingStatus,
                createQuery: function () {
                    return this.dataWorkspace.TimesheetsData.BillingStatusSet;
                }
            }
        ], [
        ]),

        AddEditInvoice: $defineScreen(AddEditInvoice, [
            { name: "Invoice", kind: "local", type: lightSwitchApplication.Invoice },
            {
                name: "InvoiceLines", kind: "collection", elementType: lightSwitchApplication.InvoiceLine,
                getNavigationProperty: function () {
                    if (this.owner.Invoice) {
                        return this.owner.Invoice.details.properties.InvoiceLines;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("ActiveType").expand("Person");
                }
            }
        ], [
        ]),

        AddEditProject: $defineScreen(AddEditProject, [
            { name: "Project", kind: "local", type: lightSwitchApplication.Project }
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

        AddEditTimesheetDetail: $defineScreen(AddEditTimesheetDetail, [
            { name: "TimesheetDetail", kind: "local", type: lightSwitchApplication.TimesheetDetail }
        ], [
        ]),

        AddEditTypeOfWork: $defineScreen(AddEditTypeOfWork, [
            { name: "TypeOfWork", kind: "local", type: lightSwitchApplication.TypeOfWork }
        ], [
        ]),

        BrowseBillingDetails: $defineScreen(BrowseBillingDetails, [
            {
                name: "BillingDetails", kind: "collection", elementType: lightSwitchApplication.BillingDetail,
                createQuery: function (ClientName, PersonName) {
                    return this.dataWorkspace.TimesheetsData.BillingDetailsSorted(ClientName, PersonName).expand("Client").expand("Person");
                }
            },
            { name: "BillingDetailClientName", kind: "local", type: String },
            { name: "BillingDetailPersonName", kind: "local", type: String }
        ], [
        ]),

        BrowseClients: $defineScreen(BrowseClients, [
            {
                name: "Clients", kind: "collection", elementType: lightSwitchApplication.Client,
                createQuery: function (ClientName) {
                    return this.dataWorkspace.TimesheetsData.FilteredClient(ClientName);
                }
            },
            { name: "ClientClientName", kind: "local", type: String }
        ], [
        ]),

        BrowseInvoices: $defineScreen(BrowseInvoices, [
            {
                name: "Invoices", kind: "collection", elementType: lightSwitchApplication.Invoice,
                createQuery: function () {
                    return this.dataWorkspace.TimesheetsData.Invoices.expand("ActiveType").expand("Person").expand("DimDate").expand("InvoiceStatu");
                }
            },
            {
                name: "InvoicesSorted", kind: "collection", elementType: lightSwitchApplication.Invoice,
                createQuery: function (PersonName, InvoiceStatusName) {
                    return this.dataWorkspace.TimesheetsData.InvoicesSorted(PersonName, InvoiceStatusName);
                }
            },
            { name: "PersonName", kind: "local", type: String },
            { name: "InvoiceStatusName", kind: "local", type: String }
        ], [
        ]),

        BrowseTimesheetDetails: $defineScreen(BrowseTimesheetDetails, [
            {
                name: "TimesheetDetails", kind: "collection", elementType: lightSwitchApplication.TimesheetDetail,
                createQuery: function () {
                    return this.dataWorkspace.TimesheetsData.TimesheetDetails.filter("Project/Client/ClientCode eq 'Capitec'").orderBy("DimDate/DateID").thenBy("Person/PersonName").expand("DimDate").expand("Person").expand("Project").expand("Timesheet").expand("TypeOfWork");
                }
            }
        ], [
        ]),

        BrowseTimesheets: $defineScreen(BrowseTimesheets, [
            {
                name: "Timesheets", kind: "collection", elementType: lightSwitchApplication.Timesheet,
                createQuery: function (StartDate, EndDate, TimesheetPerson) {
                    return this.dataWorkspace.TimesheetsData.TimesheetsByDate(StartDate, EndDate, TimesheetPerson);
                }
            },
            { name: "TimesheetStartDate", kind: "local", type: Date },
            { name: "TimesheetEndDate", kind: "local", type: Date },
            { name: "TimesheetTimesheetPerson", kind: "local", type: String },
            {
                name: "TimesheetsByDate", kind: "collection", elementType: lightSwitchApplication.Timesheet,
                createQuery: function (StartDate, EndDate, TimesheetPerson) {
                    return this.dataWorkspace.TimesheetsData.TimesheetsByDate(StartDate, EndDate, TimesheetPerson);
                }
            }
        ], [
        ]),

        EditUnallocatedTimesheets: $defineScreen(EditUnallocatedTimesheets, [
            {
                name: "UnallocatedTimesheetsSorted", kind: "collection", elementType: lightSwitchApplication.UnallocatedTimesheet,
                createQuery: function (ClientName, PersonName) {
                    return this.dataWorkspace.TimesheetsData.UnallocatedTimesheetsSorted(ClientName, PersonName);
                }
            },
            { name: "UnallocatedTimesheetClientName", kind: "local", type: String },
            { name: "UnallocatedTimesheetPersonName", kind: "local", type: String },
            {
                name: "BillingStatusSet", kind: "collection", elementType: lightSwitchApplication.BillingStatus,
                createQuery: function () {
                    return this.dataWorkspace.TimesheetsData.BillingStatusSet;
                }
            }
        ], [
            { name: "AddNew" },
            { name: "DeleteSelected" }
        ]),

        HomeScreen: $defineScreen(HomeScreen, [
        ], [
        ]),

        UnallocatedTimesheets: $defineScreen(UnallocatedTimesheets, [
            {
                name: "UnallocatedTimesheets1", kind: "collection", elementType: lightSwitchApplication.UnallocatedTimesheet,
                createQuery: function () {
                    return this.dataWorkspace.TimesheetsData.UnallocatedTimesheets;
                }
            },
            {
                name: "UnallocatedTimesheetsSorted", kind: "collection", elementType: lightSwitchApplication.UnallocatedTimesheet,
                createQuery: function (ClientName, PersonName) {
                    return this.dataWorkspace.TimesheetsData.UnallocatedTimesheetsSorted(ClientName, PersonName).expand("BillingStatus").expand("TimesheetDetail").expand("Timesheet");
                }
            },
            { name: "ClientName", kind: "local", type: String },
            { name: "PersonName", kind: "local", type: String }
        ], [
        ]),

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

        showAddEditInvoice: $defineShowScreen(function showAddEditInvoice(Invoice, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditInvoice screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditInvoice", parameters, options);
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

        showBrowseInvoices: $defineShowScreen(function showBrowseInvoices(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseInvoices screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseInvoices", parameters, options);
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

        showEditUnallocatedTimesheets: $defineShowScreen(function showEditUnallocatedTimesheets(options) {
            /// <summary>
            /// Asynchronously navigates forward to the EditUnallocatedTimesheets screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("EditUnallocatedTimesheets", parameters, options);
        }),

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

        showUnallocatedTimesheets: $defineShowScreen(function showUnallocatedTimesheets(options) {
            /// <summary>
            /// Asynchronously navigates forward to the UnallocatedTimesheets screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("UnallocatedTimesheets", parameters, options);
        })

    });

}(msls.application));
