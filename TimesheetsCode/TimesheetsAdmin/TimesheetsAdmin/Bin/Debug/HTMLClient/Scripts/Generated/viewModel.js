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
        /// <field name="ClientRolesSorted" type="msls.VisualCollection" elementType="msls.application.ClientRole">
        /// Gets the clientRolesSorted for this screen.
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
        /// <field name="ClientRolesSorted" type="msls.VisualCollection" elementType="msls.application.ClientRole">
        /// Gets the clientRolesSorted for this screen.
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
        /// <field name="details" type="msls.application.AddEditClientRole.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditClientRole", parameters);
    }

    function BrowseProjects(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseProjects screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Projects" type="msls.VisualCollection" elementType="msls.application.Project">
        /// Gets the projects for this screen.
        /// </field>
        /// <field name="ProjectsFilter" type="msls.VisualCollection" elementType="msls.application.Project">
        /// Gets the projectsFilter for this screen.
        /// </field>
        /// <field name="ClientName" type="String">
        /// Gets or sets the clientName for this screen.
        /// </field>
        /// <field name="ProjectName" type="String">
        /// Gets or sets the projectName for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseProjects.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseProjects", parameters);
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

    function BrowseInvoiceStatus(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseInvoiceStatus screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="InvoiceStatus" type="msls.VisualCollection" elementType="msls.application.InvoiceStatu">
        /// Gets the invoiceStatus for this screen.
        /// </field>
        /// <field name="InvoiceStatusSorted" type="msls.VisualCollection" elementType="msls.application.InvoiceStatu">
        /// Gets the invoiceStatusSorted for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseInvoiceStatus.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseInvoiceStatus", parameters);
    }

    function AddEditInvoiceStatu(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditInvoiceStatu screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="InvoiceStatu" type="msls.application.InvoiceStatu">
        /// Gets or sets the invoiceStatu for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditInvoiceStatu.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditInvoiceStatu", parameters);
    }

    function BrowseBillingDetailsSorted(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseBillingDetailsSorted screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="BillingDetailsSorted" type="msls.VisualCollection" elementType="msls.application.BillingDetail">
        /// Gets the billingDetailsSorted for this screen.
        /// </field>
        /// <field name="BillingDetailClientName" type="String">
        /// Gets or sets the billingDetailClientName for this screen.
        /// </field>
        /// <field name="BillingDetailPersonName" type="String">
        /// Gets or sets the billingDetailPersonName for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseBillingDetailsSorted.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseBillingDetailsSorted", parameters);
    }

    function BrowseBillingDetailNoRole(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseBillingDetailNoRole screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="BillingDetailNoRole" type="msls.VisualCollection" elementType="msls.application.BillingDetail">
        /// Gets the billingDetailNoRole for this screen.
        /// </field>
        /// <field name="BillingDetailClientName" type="String">
        /// Gets or sets the billingDetailClientName for this screen.
        /// </field>
        /// <field name="BillingDetailPersonName" type="String">
        /// Gets or sets the billingDetailPersonName for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseBillingDetailNoRole.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseBillingDetailNoRole", parameters);
    }

    function BrowseResourcePlanSorted(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseResourcePlanSorted screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ResourcePlanSorted" type="msls.VisualCollection" elementType="msls.application.ResourcePlan">
        /// Gets the resourcePlanSorted for this screen.
        /// </field>
        /// <field name="ResourcePlanPersonName" type="String">
        /// Gets or sets the resourcePlanPersonName for this screen.
        /// </field>
        /// <field name="ResourcePlanClientProject" type="String">
        /// Gets or sets the resourcePlanClientProject for this screen.
        /// </field>
        /// <field name="StartDate" type="Date">
        /// Gets or sets the startDate for this screen.
        /// </field>
        /// <field name="EndDate" type="Date">
        /// Gets or sets the endDate for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseResourcePlanSorted.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseResourcePlanSorted", parameters);
    }

    function AddEditResourcePlan(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditResourcePlan screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ResourcePlan" type="msls.application.ResourcePlan">
        /// Gets or sets the resourcePlan for this screen.
        /// </field>
        /// <field name="PersonSorted" type="msls.VisualCollection" elementType="msls.application.Person">
        /// Gets the personSorted for this screen.
        /// </field>
        /// <field name="ProjectsFilter" type="msls.VisualCollection" elementType="msls.application.Project">
        /// Gets the projectsFilter for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditResourcePlan.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditResourcePlan", parameters);
    }

    function AddEditResourcePlanRange(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditResourcePlanRange screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ResourcePlanRange" type="msls.application.ResourcePlanRange">
        /// Gets or sets the resourcePlanRange for this screen.
        /// </field>
        /// <field name="ProjectsFilter" type="msls.VisualCollection" elementType="msls.application.Project">
        /// Gets the projectsFilter for this screen.
        /// </field>
        /// <field name="PersonSorted" type="msls.VisualCollection" elementType="msls.application.Person">
        /// Gets the personSorted for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditResourcePlanRange.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditResourcePlanRange", parameters);
    }

    msls._addToNamespace("msls.application", {

        HomeScreen: $defineScreen(HomeScreen, [
        ], [
        ]),

        BrowseTimesheetDetails: $defineScreen(BrowseTimesheetDetails, [
            {
                name: "TimesheetDetails", kind: "collection", elementType: lightSwitchApplication.TimesheetDetail,
                createQuery: function () {
                    return this.dataWorkspace.Timesheets_Data.TimesheetDetails.filter("Project/Client/ClientCode eq 'Capitec'").orderBy("DimDate/DateID").thenBy("Person/PersonName").expand("DimDate").expand("Person").expand("Project").expand("Timesheet").expand("TypeOfWork");
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
                    return this.dataWorkspace.Timesheets_Data.FilteredClient(ClientName);
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
                    return this.dataWorkspace.Timesheets_Data.PersonSorted();
                }
            }
        ], [
        ]),

        BrowseBillingStatus: $defineScreen(BrowseBillingStatus, [
            {
                name: "BillingStatus", kind: "collection", elementType: lightSwitchApplication.BillingStatus,
                createQuery: function () {
                    return this.dataWorkspace.Timesheets_Data.BillingStatusSet;
                }
            }
        ], [
        ]),

        BrowsePeople: $defineScreen(BrowsePeople, [
            {
                name: "People", kind: "collection", elementType: lightSwitchApplication.Person,
                createQuery: function () {
                    return this.dataWorkspace.Timesheets_Data.People.filter("ActiveType/ID eq 1").orderBy("PersonName");
                }
            }
        ], [
        ]),

        BrowseTimesheets: $defineScreen(BrowseTimesheets, [
            {
                name: "Timesheets", kind: "collection", elementType: lightSwitchApplication.Timesheet,
                createQuery: function (StartDate, EndDate, TimesheetPerson) {
                    return this.dataWorkspace.Timesheets_Data.TimesheetsByDate(StartDate, EndDate, TimesheetPerson);
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
                    return this.dataWorkspace.Timesheets_Data.TypeOfWorks;
                }
            }
        ], [
        ]),

        AddEditBillingDetail: $defineScreen(AddEditBillingDetail, [
            { name: "BillingDetail", kind: "local", type: lightSwitchApplication.BillingDetail },
            {
                name: "BillingDate", kind: "collection", elementType: lightSwitchApplication.DimDate,
                createQuery: function () {
                    return this.dataWorkspace.Timesheets_Data.BillingDate();
                }
            },
            {
                name: "PersonSorted", kind: "collection", elementType: lightSwitchApplication.Person,
                createQuery: function () {
                    return this.dataWorkspace.Timesheets_Data.PersonSorted();
                }
            },
            {
                name: "ClientRolesSorted", kind: "collection", elementType: lightSwitchApplication.ClientRole,
                createQuery: function () {
                    return this.dataWorkspace.Timesheets_Data.ClientRolesSorted();
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
                    return this.dataWorkspace.Timesheets_Data.ClientRolesSorted();
                }
            },
            {
                name: "ClientRolesSorted", kind: "collection", elementType: lightSwitchApplication.ClientRole,
                createQuery: function () {
                    return this.dataWorkspace.Timesheets_Data.ClientRolesSorted();
                }
            }
        ], [
        ]),

        AddEditClientRole: $defineScreen(AddEditClientRole, [
            { name: "ClientRole", kind: "local", type: lightSwitchApplication.ClientRole }
        ], [
        ]),

        BrowseProjects: $defineScreen(BrowseProjects, [
            {
                name: "Projects", kind: "collection", elementType: lightSwitchApplication.Project,
                createQuery: function () {
                    return this.dataWorkspace.Timesheets_Data.Projects;
                }
            },
            {
                name: "ProjectsFilter", kind: "collection", elementType: lightSwitchApplication.Project,
                createQuery: function (ClientName, ProjectName) {
                    return this.dataWorkspace.Timesheets_Data.ProjectsFilter(ClientName, ProjectName).expand("Client");
                }
            },
            { name: "ClientName", kind: "local", type: String },
            { name: "ProjectName", kind: "local", type: String }
        ], [
        ]),

        AddEditProject: $defineScreen(AddEditProject, [
            { name: "Project", kind: "local", type: lightSwitchApplication.Project }
        ], [
        ]),

        BrowseInvoiceStatus: $defineScreen(BrowseInvoiceStatus, [
            {
                name: "InvoiceStatus", kind: "collection", elementType: lightSwitchApplication.InvoiceStatu,
                createQuery: function () {
                    return this.dataWorkspace.Timesheets_Data.InvoiceStatus.expand("ActiveType");
                }
            },
            {
                name: "InvoiceStatusSorted", kind: "collection", elementType: lightSwitchApplication.InvoiceStatu,
                createQuery: function () {
                    return this.dataWorkspace.Timesheets_Data.InvoiceStatusSorted();
                }
            }
        ], [
        ]),

        AddEditInvoiceStatu: $defineScreen(AddEditInvoiceStatu, [
            { name: "InvoiceStatu", kind: "local", type: lightSwitchApplication.InvoiceStatu }
        ], [
        ]),

        BrowseBillingDetailsSorted: $defineScreen(BrowseBillingDetailsSorted, [
            {
                name: "BillingDetailsSorted", kind: "collection", elementType: lightSwitchApplication.BillingDetail,
                createQuery: function (ClientName, PersonName) {
                    return this.dataWorkspace.Timesheets_Data.BillingDetailsSorted(ClientName, PersonName).expand("Client").expand("Person").expand("ActiveType").expand("DimDate");
                }
            },
            { name: "BillingDetailClientName", kind: "local", type: String },
            { name: "BillingDetailPersonName", kind: "local", type: String }
        ], [
        ]),

        BrowseBillingDetailNoRole: $defineScreen(BrowseBillingDetailNoRole, [
            {
                name: "BillingDetailNoRole", kind: "collection", elementType: lightSwitchApplication.BillingDetail,
                createQuery: function (ClientName, PersonName) {
                    return this.dataWorkspace.Timesheets_Data.BillingDetailNoRole(ClientName, PersonName).expand("Client").expand("Person").expand("ActiveType").expand("DimDate");
                }
            },
            { name: "BillingDetailClientName", kind: "local", type: String },
            { name: "BillingDetailPersonName", kind: "local", type: String }
        ], [
        ]),

        BrowseResourcePlanSorted: $defineScreen(BrowseResourcePlanSorted, [
            {
                name: "ResourcePlanSorted", kind: "collection", elementType: lightSwitchApplication.ResourcePlan,
                createQuery: function (PersonName, ClientProject, EndDate, StartDate) {
                    return this.dataWorkspace.Timesheets_Data.ResourcePlanSorted(PersonName, ClientProject, EndDate, StartDate).expand("Person").expand("Project");
                }
            },
            { name: "ResourcePlanPersonName", kind: "local", type: String },
            { name: "ResourcePlanClientProject", kind: "local", type: String },
            { name: "StartDate", kind: "local", type: Date },
            { name: "EndDate", kind: "local", type: Date }
        ], [
        ]),

        AddEditResourcePlan: $defineScreen(AddEditResourcePlan, [
            { name: "ResourcePlan", kind: "local", type: lightSwitchApplication.ResourcePlan },
            {
                name: "PersonSorted", kind: "collection", elementType: lightSwitchApplication.Person,
                createQuery: function () {
                    return this.dataWorkspace.Timesheets_Data.PersonSorted();
                }
            },
            {
                name: "ProjectsFilter", kind: "collection", elementType: lightSwitchApplication.Project,
                createQuery: function (ClientName, ProjectName) {
                    return this.dataWorkspace.Timesheets_Data.ProjectsFilter(ClientName, ProjectName);
                }
            }
        ], [
        ]),

        AddEditResourcePlanRange: $defineScreen(AddEditResourcePlanRange, [
            { name: "ResourcePlanRange", kind: "local", type: lightSwitchApplication.ResourcePlanRange },
            {
                name: "ProjectsFilter", kind: "collection", elementType: lightSwitchApplication.Project,
                createQuery: function (ClientName, ProjectName) {
                    return this.dataWorkspace.Timesheets_Data.ProjectsFilter(ClientName, ProjectName);
                }
            },
            {
                name: "PersonSorted", kind: "collection", elementType: lightSwitchApplication.Person,
                createQuery: function () {
                    return this.dataWorkspace.Timesheets_Data.PersonSorted();
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
        }),

        showBrowseProjects: $defineShowScreen(function showBrowseProjects(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseProjects screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseProjects", parameters, options);
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

        showBrowseInvoiceStatus: $defineShowScreen(function showBrowseInvoiceStatus(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseInvoiceStatus screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseInvoiceStatus", parameters, options);
        }),

        showAddEditInvoiceStatu: $defineShowScreen(function showAddEditInvoiceStatu(InvoiceStatu, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditInvoiceStatu screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditInvoiceStatu", parameters, options);
        }),

        showBrowseBillingDetailsSorted: $defineShowScreen(function showBrowseBillingDetailsSorted(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseBillingDetailsSorted screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseBillingDetailsSorted", parameters, options);
        }),

        showBrowseBillingDetailNoRole: $defineShowScreen(function showBrowseBillingDetailNoRole(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseBillingDetailNoRole screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseBillingDetailNoRole", parameters, options);
        }),

        showBrowseResourcePlanSorted: $defineShowScreen(function showBrowseResourcePlanSorted(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseResourcePlanSorted screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseResourcePlanSorted", parameters, options);
        }),

        showAddEditResourcePlan: $defineShowScreen(function showAddEditResourcePlan(ResourcePlan, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditResourcePlan screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditResourcePlan", parameters, options);
        }),

        showAddEditResourcePlanRange: $defineShowScreen(function showAddEditResourcePlanRange(ResourcePlanRange, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditResourcePlanRange screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditResourcePlanRange", parameters, options);
        })

    });

}(msls.application));
