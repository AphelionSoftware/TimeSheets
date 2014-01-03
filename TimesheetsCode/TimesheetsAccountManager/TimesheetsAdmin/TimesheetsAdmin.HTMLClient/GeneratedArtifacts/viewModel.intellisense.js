/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.AddEditBillingDetail.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditBillingDetail
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditBillingDetail,
            data: lightSwitchApplication.AddEditBillingDetail,
            value: lightSwitchApplication.AddEditBillingDetail
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditBillingDetail,
            data: lightSwitchApplication.AddEditBillingDetail,
            value: lightSwitchApplication.BillingDetail
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditBillingDetail,
            data: lightSwitchApplication.BillingDetail,
            value: lightSwitchApplication.BillingDetail
        },
        Client: {
            _$class: msls.ContentItem,
            _$name: "Client",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditBillingDetail,
            data: lightSwitchApplication.BillingDetail,
            value: lightSwitchApplication.Client
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Client",
            screen: lightSwitchApplication.AddEditBillingDetail,
            data: lightSwitchApplication.Client,
            value: lightSwitchApplication.Client
        },
        Person: {
            _$class: msls.ContentItem,
            _$name: "Person",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditBillingDetail,
            data: lightSwitchApplication.BillingDetail,
            value: lightSwitchApplication.Person
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "Person",
            screen: lightSwitchApplication.AddEditBillingDetail,
            data: lightSwitchApplication.Person,
            value: lightSwitchApplication.Person
        },
        ClientRole: {
            _$class: msls.ContentItem,
            _$name: "ClientRole",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditBillingDetail,
            data: lightSwitchApplication.BillingDetail,
            value: lightSwitchApplication.ClientRole
        },
        ClientRole1: {
            _$class: msls.ContentItem,
            _$name: "ClientRole1",
            _$parentName: "ClientRole",
            screen: lightSwitchApplication.AddEditBillingDetail,
            data: lightSwitchApplication.ClientRole,
            value: lightSwitchApplication.ClientRole
        },
        DimDate: {
            _$class: msls.ContentItem,
            _$name: "DimDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditBillingDetail,
            data: lightSwitchApplication.BillingDetail,
            value: lightSwitchApplication.DimDate
        },
        DimDate1: {
            _$class: msls.ContentItem,
            _$name: "DimDate1",
            _$parentName: "DimDate",
            screen: lightSwitchApplication.AddEditBillingDetail,
            data: lightSwitchApplication.DimDate,
            value: lightSwitchApplication.DimDate
        },
        Rate: {
            _$class: msls.ContentItem,
            _$name: "Rate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditBillingDetail,
            data: lightSwitchApplication.BillingDetail,
            value: String
        },
        BillingDetailSourceKey: {
            _$class: msls.ContentItem,
            _$name: "BillingDetailSourceKey",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditBillingDetail,
            data: lightSwitchApplication.BillingDetail,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditBillingDetail
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditBillingDetail, {
        /// <field>
        /// Called when a new AddEditBillingDetail screen is created.
        /// <br/>created(msls.application.AddEditBillingDetail screen)
        /// </field>
        created: [lightSwitchApplication.AddEditBillingDetail],
        /// <field>
        /// Called before changes on an active AddEditBillingDetail screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditBillingDetail screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditBillingDetail],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditBillingDetail().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditBillingDetail().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditBillingDetail().findContentItem("left"); }],
        /// <field>
        /// Called after the Client content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Client_postRender: [$element, function () { return new lightSwitchApplication.AddEditBillingDetail().findContentItem("Client"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditBillingDetail().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Person content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Person_postRender: [$element, function () { return new lightSwitchApplication.AddEditBillingDetail().findContentItem("Person"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditBillingDetail().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the ClientRole content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientRole_postRender: [$element, function () { return new lightSwitchApplication.AddEditBillingDetail().findContentItem("ClientRole"); }],
        /// <field>
        /// Called after the ClientRole1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientRole1_postRender: [$element, function () { return new lightSwitchApplication.AddEditBillingDetail().findContentItem("ClientRole1"); }],
        /// <field>
        /// Called after the DimDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DimDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditBillingDetail().findContentItem("DimDate"); }],
        /// <field>
        /// Called after the DimDate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DimDate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditBillingDetail().findContentItem("DimDate1"); }],
        /// <field>
        /// Called after the Rate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Rate_postRender: [$element, function () { return new lightSwitchApplication.AddEditBillingDetail().findContentItem("Rate"); }],
        /// <field>
        /// Called after the BillingDetailSourceKey content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingDetailSourceKey_postRender: [$element, function () { return new lightSwitchApplication.AddEditBillingDetail().findContentItem("BillingDetailSourceKey"); }]
    });

    lightSwitchApplication.AddEditClient.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditClient
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.AddEditClient,
            value: lightSwitchApplication.AddEditClient
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.AddEditClient,
            value: lightSwitchApplication.Client
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: lightSwitchApplication.Client
        },
        AccountManager: {
            _$class: msls.ContentItem,
            _$name: "AccountManager",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: lightSwitchApplication.Person
        },
        Person4: {
            _$class: msls.ContentItem,
            _$name: "Person4",
            _$parentName: "AccountManager",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Person,
            value: lightSwitchApplication.Person
        },
        ClientSourceKey: {
            _$class: msls.ContentItem,
            _$name: "ClientSourceKey",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        ClientName: {
            _$class: msls.ContentItem,
            _$name: "ClientName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        ClientCode: {
            _$class: msls.ContentItem,
            _$name: "ClientCode",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        ActiveType: {
            _$class: msls.ContentItem,
            _$name: "ActiveType",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: lightSwitchApplication.ActiveType
        },
        ActiveType1: {
            _$class: msls.ContentItem,
            _$name: "ActiveType1",
            _$parentName: "ActiveType",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.ActiveType,
            value: lightSwitchApplication.ActiveType
        },
        Center: {
            _$class: msls.ContentItem,
            _$name: "Center",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: lightSwitchApplication.Client
        },
        InvoiceEmailAddress: {
            _$class: msls.ContentItem,
            _$name: "InvoiceEmailAddress",
            _$parentName: "Center",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        InvoiceBank: {
            _$class: msls.ContentItem,
            _$name: "InvoiceBank",
            _$parentName: "Center",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        InvoiceBankBranch: {
            _$class: msls.ContentItem,
            _$name: "InvoiceBankBranch",
            _$parentName: "Center",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        InvoiceBankAccount: {
            _$class: msls.ContentItem,
            _$name: "InvoiceBankAccount",
            _$parentName: "Center",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        InvoiceVATNumber: {
            _$class: msls.ContentItem,
            _$name: "InvoiceVATNumber",
            _$parentName: "Center",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        Right: {
            _$class: msls.ContentItem,
            _$name: "Right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: lightSwitchApplication.Client
        },
        InvoiceCompanyReg: {
            _$class: msls.ContentItem,
            _$name: "InvoiceCompanyReg",
            _$parentName: "Right",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        InvoiceTelNo: {
            _$class: msls.ContentItem,
            _$name: "InvoiceTelNo",
            _$parentName: "Right",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        InvoiceContactPerson: {
            _$class: msls.ContentItem,
            _$name: "InvoiceContactPerson",
            _$parentName: "Right",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        InvoiceAddress: {
            _$class: msls.ContentItem,
            _$name: "InvoiceAddress",
            _$parentName: "Right",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        UnallocatedTimesheets: {
            _$class: msls.ContentItem,
            _$name: "UnallocatedTimesheets",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.AddEditClient,
            value: lightSwitchApplication.AddEditClient
        },
        UnallocatedTimesheetsSorted: {
            _$class: msls.ContentItem,
            _$name: "UnallocatedTimesheetsSorted",
            _$parentName: "UnallocatedTimesheets",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.AddEditClient,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditClient,
                _$entry: {
                    elementType: lightSwitchApplication.UnallocatedTimesheet
                }
            }
        },
        UnallocatedTimesheetsSortedTemplate: {
            _$class: msls.ContentItem,
            _$name: "UnallocatedTimesheetsSortedTemplate",
            _$parentName: "UnallocatedTimesheetsSorted",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.UnallocatedTimesheet,
            value: lightSwitchApplication.UnallocatedTimesheet
        },
        ProjectName1: {
            _$class: msls.ContentItem,
            _$name: "ProjectName1",
            _$parentName: "UnallocatedTimesheetsSortedTemplate",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.UnallocatedTimesheet,
            value: String
        },
        UnallocatedTimesheetsSorted1: {
            _$class: msls.ContentItem,
            _$name: "UnallocatedTimesheetsSorted1",
            _$parentName: "UnallocatedTimesheets",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.AddEditClient,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditClient,
                _$entry: {
                    elementType: lightSwitchApplication.UnallocatedTimesheet
                }
            }
        },
        UnallocatedTimesheetsSorted1Template: {
            _$class: msls.ContentItem,
            _$name: "UnallocatedTimesheetsSorted1Template",
            _$parentName: "UnallocatedTimesheetsSorted1",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.UnallocatedTimesheet,
            value: lightSwitchApplication.UnallocatedTimesheet
        },
        Hours: {
            _$class: msls.ContentItem,
            _$name: "Hours",
            _$parentName: "UnallocatedTimesheetsSorted1Template",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.UnallocatedTimesheet,
            value: String
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "UnallocatedTimesheets",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.AddEditClient,
            value: lightSwitchApplication.AddEditClient
        },
        Projects: {
            _$class: msls.ContentItem,
            _$name: "Projects",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.AddEditClient,
            value: lightSwitchApplication.AddEditClient
        },
        Projects1: {
            _$class: msls.ContentItem,
            _$name: "Projects1",
            _$parentName: "Projects",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.AddEditClient,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditClient,
                _$entry: {
                    elementType: lightSwitchApplication.Project
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Projects1",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Project,
            value: lightSwitchApplication.Project
        },
        ProjectName: {
            _$class: msls.ContentItem,
            _$name: "ProjectName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Project,
            value: String
        },
        ProjectCap: {
            _$class: msls.ContentItem,
            _$name: "ProjectCap",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Project,
            value: String
        },
        BillingDetailsTab: {
            _$class: msls.ContentItem,
            _$name: "BillingDetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.AddEditClient,
            value: lightSwitchApplication.AddEditClient
        },
        BillingDetails: {
            _$class: msls.ContentItem,
            _$name: "BillingDetails",
            _$parentName: "BillingDetailsTab",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.AddEditClient,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditClient,
                _$entry: {
                    elementType: lightSwitchApplication.BillingDetail
                }
            }
        },
        BillingDetailsTemplate: {
            _$class: msls.ContentItem,
            _$name: "BillingDetailsTemplate",
            _$parentName: "BillingDetails",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.BillingDetail,
            value: lightSwitchApplication.BillingDetail
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditClient
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditClient, {
        /// <field>
        /// Called when a new AddEditClient screen is created.
        /// <br/>created(msls.application.AddEditClient screen)
        /// </field>
        created: [lightSwitchApplication.AddEditClient],
        /// <field>
        /// Called before changes on an active AddEditClient screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditClient screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditClient],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("left"); }],
        /// <field>
        /// Called after the AccountManager content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AccountManager_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("AccountManager"); }],
        /// <field>
        /// Called after the Person4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Person4_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("Person4"); }],
        /// <field>
        /// Called after the ClientSourceKey content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientSourceKey_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("ClientSourceKey"); }],
        /// <field>
        /// Called after the ClientName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientName_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("ClientName"); }],
        /// <field>
        /// Called after the ClientCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("ClientCode"); }],
        /// <field>
        /// Called after the ActiveType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActiveType_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("ActiveType"); }],
        /// <field>
        /// Called after the ActiveType1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActiveType1_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("ActiveType1"); }],
        /// <field>
        /// Called after the Center content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Center_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("Center"); }],
        /// <field>
        /// Called after the InvoiceEmailAddress content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InvoiceEmailAddress_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("InvoiceEmailAddress"); }],
        /// <field>
        /// Called after the InvoiceBank content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InvoiceBank_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("InvoiceBank"); }],
        /// <field>
        /// Called after the InvoiceBankBranch content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InvoiceBankBranch_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("InvoiceBankBranch"); }],
        /// <field>
        /// Called after the InvoiceBankAccount content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InvoiceBankAccount_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("InvoiceBankAccount"); }],
        /// <field>
        /// Called after the InvoiceVATNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InvoiceVATNumber_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("InvoiceVATNumber"); }],
        /// <field>
        /// Called after the Right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Right_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("Right"); }],
        /// <field>
        /// Called after the InvoiceCompanyReg content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InvoiceCompanyReg_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("InvoiceCompanyReg"); }],
        /// <field>
        /// Called after the InvoiceTelNo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InvoiceTelNo_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("InvoiceTelNo"); }],
        /// <field>
        /// Called after the InvoiceContactPerson content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InvoiceContactPerson_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("InvoiceContactPerson"); }],
        /// <field>
        /// Called after the InvoiceAddress content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InvoiceAddress_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("InvoiceAddress"); }],
        /// <field>
        /// Called after the UnallocatedTimesheets content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnallocatedTimesheets_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("UnallocatedTimesheets"); }],
        /// <field>
        /// Called after the UnallocatedTimesheetsSorted content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnallocatedTimesheetsSorted_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("UnallocatedTimesheetsSorted"); }],
        /// <field>
        /// Called after the UnallocatedTimesheetsSortedTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnallocatedTimesheetsSortedTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("UnallocatedTimesheetsSortedTemplate"); }],
        /// <field>
        /// Called after the ProjectName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectName1_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("ProjectName1"); }],
        /// <field>
        /// Called after the UnallocatedTimesheetsSorted1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnallocatedTimesheetsSorted1_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("UnallocatedTimesheetsSorted1"); }],
        /// <field>
        /// Called after the UnallocatedTimesheetsSorted1Template content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnallocatedTimesheetsSorted1Template_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("UnallocatedTimesheetsSorted1Template"); }],
        /// <field>
        /// Called after the Hours content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Hours_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("Hours"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("Group"); }],
        /// <field>
        /// Called after the Projects content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Projects_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("Projects"); }],
        /// <field>
        /// Called after the Projects1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Projects1_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("Projects1"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the ProjectName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectName_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("ProjectName"); }],
        /// <field>
        /// Called after the ProjectCap content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectCap_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("ProjectCap"); }],
        /// <field>
        /// Called after the BillingDetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingDetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("BillingDetailsTab"); }],
        /// <field>
        /// Called after the BillingDetails content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingDetails_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("BillingDetails"); }],
        /// <field>
        /// Called after the BillingDetailsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingDetailsTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("BillingDetailsTemplate"); }]
    });

    lightSwitchApplication.AddEditInvoice.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditInvoice
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditInvoice,
            data: lightSwitchApplication.AddEditInvoice,
            value: lightSwitchApplication.AddEditInvoice
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditInvoice,
            data: lightSwitchApplication.AddEditInvoice,
            value: lightSwitchApplication.Invoice
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditInvoice,
            data: lightSwitchApplication.Invoice,
            value: lightSwitchApplication.Invoice
        },
        InvoiceSourceKey: {
            _$class: msls.ContentItem,
            _$name: "InvoiceSourceKey",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditInvoice,
            data: lightSwitchApplication.Invoice,
            value: String
        },
        Comments: {
            _$class: msls.ContentItem,
            _$name: "Comments",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditInvoice,
            data: lightSwitchApplication.Invoice,
            value: String
        },
        Person: {
            _$class: msls.ContentItem,
            _$name: "Person",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditInvoice,
            data: lightSwitchApplication.Invoice,
            value: lightSwitchApplication.Person
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "Person",
            screen: lightSwitchApplication.AddEditInvoice,
            data: lightSwitchApplication.Person,
            value: lightSwitchApplication.Person
        },
        InvoiceStatu: {
            _$class: msls.ContentItem,
            _$name: "InvoiceStatu",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditInvoice,
            data: lightSwitchApplication.Invoice,
            value: lightSwitchApplication.InvoiceStatu
        },
        RowTemplate3: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate3",
            _$parentName: "InvoiceStatu",
            screen: lightSwitchApplication.AddEditInvoice,
            data: lightSwitchApplication.InvoiceStatu,
            value: lightSwitchApplication.InvoiceStatu
        },
        DimDate: {
            _$class: msls.ContentItem,
            _$name: "DimDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditInvoice,
            data: lightSwitchApplication.Invoice,
            value: lightSwitchApplication.DimDate
        },
        RowTemplate2: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate2",
            _$parentName: "DimDate",
            screen: lightSwitchApplication.AddEditInvoice,
            data: lightSwitchApplication.DimDate,
            value: lightSwitchApplication.DimDate
        },
        InvoiceLines: {
            _$class: msls.ContentItem,
            _$name: "InvoiceLines",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditInvoice,
            data: lightSwitchApplication.AddEditInvoice,
            value: lightSwitchApplication.AddEditInvoice
        },
        InvoiceLines1: {
            _$class: msls.ContentItem,
            _$name: "InvoiceLines1",
            _$parentName: "InvoiceLines",
            screen: lightSwitchApplication.AddEditInvoice,
            data: lightSwitchApplication.AddEditInvoice,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditInvoice,
                _$entry: {
                    elementType: lightSwitchApplication.InvoiceLine
                }
            }
        },
        RowTemplate5: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate5",
            _$parentName: "InvoiceLines1",
            screen: lightSwitchApplication.AddEditInvoice,
            data: lightSwitchApplication.InvoiceLine,
            value: lightSwitchApplication.InvoiceLine
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditInvoice
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditInvoice, {
        /// <field>
        /// Called when a new AddEditInvoice screen is created.
        /// <br/>created(msls.application.AddEditInvoice screen)
        /// </field>
        created: [lightSwitchApplication.AddEditInvoice],
        /// <field>
        /// Called before changes on an active AddEditInvoice screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditInvoice screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditInvoice],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditInvoice().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditInvoice().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditInvoice().findContentItem("left"); }],
        /// <field>
        /// Called after the InvoiceSourceKey content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InvoiceSourceKey_postRender: [$element, function () { return new lightSwitchApplication.AddEditInvoice().findContentItem("InvoiceSourceKey"); }],
        /// <field>
        /// Called after the Comments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Comments_postRender: [$element, function () { return new lightSwitchApplication.AddEditInvoice().findContentItem("Comments"); }],
        /// <field>
        /// Called after the Person content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Person_postRender: [$element, function () { return new lightSwitchApplication.AddEditInvoice().findContentItem("Person"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditInvoice().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the InvoiceStatu content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InvoiceStatu_postRender: [$element, function () { return new lightSwitchApplication.AddEditInvoice().findContentItem("InvoiceStatu"); }],
        /// <field>
        /// Called after the RowTemplate3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate3_postRender: [$element, function () { return new lightSwitchApplication.AddEditInvoice().findContentItem("RowTemplate3"); }],
        /// <field>
        /// Called after the DimDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DimDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditInvoice().findContentItem("DimDate"); }],
        /// <field>
        /// Called after the RowTemplate2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate2_postRender: [$element, function () { return new lightSwitchApplication.AddEditInvoice().findContentItem("RowTemplate2"); }],
        /// <field>
        /// Called after the InvoiceLines content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InvoiceLines_postRender: [$element, function () { return new lightSwitchApplication.AddEditInvoice().findContentItem("InvoiceLines"); }],
        /// <field>
        /// Called after the InvoiceLines1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InvoiceLines1_postRender: [$element, function () { return new lightSwitchApplication.AddEditInvoice().findContentItem("InvoiceLines1"); }],
        /// <field>
        /// Called after the RowTemplate5 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate5_postRender: [$element, function () { return new lightSwitchApplication.AddEditInvoice().findContentItem("RowTemplate5"); }]
    });

    lightSwitchApplication.AddEditProject.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProject
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.AddEditProject,
            value: lightSwitchApplication.AddEditProject
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.AddEditProject,
            value: lightSwitchApplication.Project
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.Project,
            value: lightSwitchApplication.Project
        },
        ProjectName: {
            _$class: msls.ContentItem,
            _$name: "ProjectName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.Project,
            value: String
        },
        ProjectSourceKey: {
            _$class: msls.ContentItem,
            _$name: "ProjectSourceKey",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.Project,
            value: String
        },
        ProjectCode: {
            _$class: msls.ContentItem,
            _$name: "ProjectCode",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.Project,
            value: String
        },
        ConsultingEstimate: {
            _$class: msls.ContentItem,
            _$name: "ConsultingEstimate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.Project,
            value: String
        },
        ProjectCap: {
            _$class: msls.ContentItem,
            _$name: "ProjectCap",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.Project,
            value: String
        },
        AdminProject: {
            _$class: msls.ContentItem,
            _$name: "AdminProject",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.Project,
            value: Number
        },
        BillingStatus: {
            _$class: msls.ContentItem,
            _$name: "BillingStatus",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.Project,
            value: lightSwitchApplication.BillingStatus
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "BillingStatus",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.BillingStatus,
            value: lightSwitchApplication.BillingStatus
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.Project,
            value: lightSwitchApplication.Project
        },
        Client: {
            _$class: msls.ContentItem,
            _$name: "Client",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.Project,
            value: lightSwitchApplication.Client
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "Client",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.Client,
            value: lightSwitchApplication.Client
        },
        Person: {
            _$class: msls.ContentItem,
            _$name: "Person",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.Project,
            value: lightSwitchApplication.Person
        },
        RowTemplate2: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate2",
            _$parentName: "Person",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.Person,
            value: lightSwitchApplication.Person
        },
        ActiveType: {
            _$class: msls.ContentItem,
            _$name: "ActiveType",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.Project,
            value: lightSwitchApplication.ActiveType
        },
        RowTemplate3: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate3",
            _$parentName: "ActiveType",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.ActiveType,
            value: lightSwitchApplication.ActiveType
        },
        MonthlyCap: {
            _$class: msls.ContentItem,
            _$name: "MonthlyCap",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.Project,
            value: String
        },
        MonthlyCapWarning: {
            _$class: msls.ContentItem,
            _$name: "MonthlyCapWarning",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.Project,
            value: String
        },
        ProjectCapWarning: {
            _$class: msls.ContentItem,
            _$name: "ProjectCapWarning",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.Project,
            value: String
        },
        InvoiceEmailAddress: {
            _$class: msls.ContentItem,
            _$name: "InvoiceEmailAddress",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.Project,
            value: String
        },
        CommPercent: {
            _$class: msls.ContentItem,
            _$name: "CommPercent",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.Project,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProject
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditProject, {
        /// <field>
        /// Called when a new AddEditProject screen is created.
        /// <br/>created(msls.application.AddEditProject screen)
        /// </field>
        created: [lightSwitchApplication.AddEditProject],
        /// <field>
        /// Called before changes on an active AddEditProject screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditProject screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditProject],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("left"); }],
        /// <field>
        /// Called after the ProjectName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectName_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("ProjectName"); }],
        /// <field>
        /// Called after the ProjectSourceKey content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectSourceKey_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("ProjectSourceKey"); }],
        /// <field>
        /// Called after the ProjectCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("ProjectCode"); }],
        /// <field>
        /// Called after the ConsultingEstimate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ConsultingEstimate_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("ConsultingEstimate"); }],
        /// <field>
        /// Called after the ProjectCap content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectCap_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("ProjectCap"); }],
        /// <field>
        /// Called after the AdminProject content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AdminProject_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("AdminProject"); }],
        /// <field>
        /// Called after the BillingStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingStatus_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("BillingStatus"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("right"); }],
        /// <field>
        /// Called after the Client content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Client_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("Client"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the Person content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Person_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("Person"); }],
        /// <field>
        /// Called after the RowTemplate2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate2_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("RowTemplate2"); }],
        /// <field>
        /// Called after the ActiveType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActiveType_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("ActiveType"); }],
        /// <field>
        /// Called after the RowTemplate3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate3_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("RowTemplate3"); }],
        /// <field>
        /// Called after the MonthlyCap content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthlyCap_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("MonthlyCap"); }],
        /// <field>
        /// Called after the MonthlyCapWarning content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthlyCapWarning_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("MonthlyCapWarning"); }],
        /// <field>
        /// Called after the ProjectCapWarning content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectCapWarning_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("ProjectCapWarning"); }],
        /// <field>
        /// Called after the InvoiceEmailAddress content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InvoiceEmailAddress_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("InvoiceEmailAddress"); }],
        /// <field>
        /// Called after the CommPercent content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CommPercent_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("CommPercent"); }]
    });

    lightSwitchApplication.AddEditTimesheet.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTimesheet
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditTimesheet,
            data: lightSwitchApplication.AddEditTimesheet,
            value: lightSwitchApplication.AddEditTimesheet
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditTimesheet,
            data: lightSwitchApplication.AddEditTimesheet,
            value: lightSwitchApplication.Timesheet
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditTimesheet,
            data: lightSwitchApplication.Timesheet,
            value: lightSwitchApplication.Timesheet
        },
        TimesheetDate: {
            _$class: msls.ContentItem,
            _$name: "TimesheetDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTimesheet,
            data: lightSwitchApplication.Timesheet,
            value: String
        },
        TimesheetSourceKey: {
            _$class: msls.ContentItem,
            _$name: "TimesheetSourceKey",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTimesheet,
            data: lightSwitchApplication.Timesheet,
            value: String
        },
        TimesheetCode: {
            _$class: msls.ContentItem,
            _$name: "TimesheetCode",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTimesheet,
            data: lightSwitchApplication.Timesheet,
            value: String
        },
        TimesheetName: {
            _$class: msls.ContentItem,
            _$name: "TimesheetName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTimesheet,
            data: lightSwitchApplication.Timesheet,
            value: String
        },
        TimesheetPerson: {
            _$class: msls.ContentItem,
            _$name: "TimesheetPerson",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTimesheet,
            data: lightSwitchApplication.Timesheet,
            value: String
        },
        TimesheetDetails: {
            _$class: msls.ContentItem,
            _$name: "TimesheetDetails",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditTimesheet,
            data: lightSwitchApplication.AddEditTimesheet,
            value: lightSwitchApplication.AddEditTimesheet
        },
        TimesheetDetails1: {
            _$class: msls.ContentItem,
            _$name: "TimesheetDetails1",
            _$parentName: "TimesheetDetails",
            screen: lightSwitchApplication.AddEditTimesheet,
            data: lightSwitchApplication.AddEditTimesheet,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditTimesheet,
                _$entry: {
                    elementType: lightSwitchApplication.TimesheetDetail
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "TimesheetDetails1",
            screen: lightSwitchApplication.AddEditTimesheet,
            data: lightSwitchApplication.TimesheetDetail,
            value: lightSwitchApplication.TimesheetDetail
        },
        TimesheetDetailName: {
            _$class: msls.ContentItem,
            _$name: "TimesheetDetailName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditTimesheet,
            data: lightSwitchApplication.TimesheetDetail,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTimesheet
        }
    };

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
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheet().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheet().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheet().findContentItem("left"); }],
        /// <field>
        /// Called after the TimesheetDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheet().findContentItem("TimesheetDate"); }],
        /// <field>
        /// Called after the TimesheetSourceKey content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetSourceKey_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheet().findContentItem("TimesheetSourceKey"); }],
        /// <field>
        /// Called after the TimesheetCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheet().findContentItem("TimesheetCode"); }],
        /// <field>
        /// Called after the TimesheetName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetName_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheet().findContentItem("TimesheetName"); }],
        /// <field>
        /// Called after the TimesheetPerson content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetPerson_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheet().findContentItem("TimesheetPerson"); }],
        /// <field>
        /// Called after the TimesheetDetails content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetDetails_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheet().findContentItem("TimesheetDetails"); }],
        /// <field>
        /// Called after the TimesheetDetails1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetDetails1_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheet().findContentItem("TimesheetDetails1"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheet().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the TimesheetDetailName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetDetailName_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheet().findContentItem("TimesheetDetailName"); }]
    });

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
        Info: {
            _$class: msls.ContentItem,
            _$name: "Info",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.TimesheetDetail,
            value: lightSwitchApplication.TimesheetDetail
        },
        Project: {
            _$class: msls.ContentItem,
            _$name: "Project",
            _$parentName: "Info",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.TimesheetDetail,
            value: lightSwitchApplication.Project
        },
        RowTemplate2: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate2",
            _$parentName: "Project",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.Project,
            value: lightSwitchApplication.Project
        },
        Person: {
            _$class: msls.ContentItem,
            _$name: "Person",
            _$parentName: "Info",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.TimesheetDetail,
            value: lightSwitchApplication.Person
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "Person",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.Person,
            value: lightSwitchApplication.Person
        },
        DimDate: {
            _$class: msls.ContentItem,
            _$name: "DimDate",
            _$parentName: "Info",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.TimesheetDetail,
            value: lightSwitchApplication.DimDate
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "DimDate",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.DimDate,
            value: lightSwitchApplication.DimDate
        },
        TypeOfWork: {
            _$class: msls.ContentItem,
            _$name: "TypeOfWork",
            _$parentName: "Info",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.TimesheetDetail,
            value: lightSwitchApplication.TypeOfWork
        },
        RowTemplate4: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate4",
            _$parentName: "TypeOfWork",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.TypeOfWork,
            value: lightSwitchApplication.TypeOfWork
        },
        Timesheet: {
            _$class: msls.ContentItem,
            _$name: "Timesheet",
            _$parentName: "Info",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.TimesheetDetail,
            value: lightSwitchApplication.Timesheet
        },
        RowTemplate3: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate3",
            _$parentName: "Timesheet",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.Timesheet,
            value: lightSwitchApplication.Timesheet
        },
        TimesheetDetails: {
            _$class: msls.ContentItem,
            _$name: "TimesheetDetails",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.TimesheetDetail,
            value: lightSwitchApplication.TimesheetDetail
        },
        Hours: {
            _$class: msls.ContentItem,
            _$name: "Hours",
            _$parentName: "TimesheetDetails",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.TimesheetDetail,
            value: String
        },
        Comments: {
            _$class: msls.ContentItem,
            _$name: "Comments",
            _$parentName: "TimesheetDetails",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.TimesheetDetail,
            value: String
        },
        ClientComments: {
            _$class: msls.ContentItem,
            _$name: "ClientComments",
            _$parentName: "TimesheetDetails",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.TimesheetDetail,
            value: String
        },
        AMComments: {
            _$class: msls.ContentItem,
            _$name: "AMComments",
            _$parentName: "TimesheetDetails",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.TimesheetDetail,
            value: String
        },
        BillingStatus: {
            _$class: msls.ContentItem,
            _$name: "BillingStatus",
            _$parentName: "TimesheetDetails",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.TimesheetDetail,
            value: lightSwitchApplication.BillingStatus
        },
        BillingStatus1: {
            _$class: msls.ContentItem,
            _$name: "BillingStatus1",
            _$parentName: "BillingStatus",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.BillingStatus,
            value: lightSwitchApplication.BillingStatus
        },
        Internal: {
            _$class: msls.ContentItem,
            _$name: "Internal",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.AddEditTimesheetDetail,
            value: lightSwitchApplication.AddEditTimesheetDetail
        },
        LastUpdateDate: {
            _$class: msls.ContentItem,
            _$name: "LastUpdateDate",
            _$parentName: "Internal",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.AddEditTimesheetDetail,
            value: Date
        },
        TimesheetDetailSourceKey: {
            _$class: msls.ContentItem,
            _$name: "TimesheetDetailSourceKey",
            _$parentName: "Internal",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.AddEditTimesheetDetail,
            value: String
        },
        TimesheetDetailName: {
            _$class: msls.ContentItem,
            _$name: "TimesheetDetailName",
            _$parentName: "Internal",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.AddEditTimesheetDetail,
            value: String
        },
        TimesheetDetailCode: {
            _$class: msls.ContentItem,
            _$name: "TimesheetDetailCode",
            _$parentName: "Internal",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.AddEditTimesheetDetail,
            value: String
        },
        TimesheetDetailFileName: {
            _$class: msls.ContentItem,
            _$name: "TimesheetDetailFileName",
            _$parentName: "Internal",
            screen: lightSwitchApplication.AddEditTimesheetDetail,
            data: lightSwitchApplication.AddEditTimesheetDetail,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTimesheetDetail
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
        /// Called after the Info content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Info_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("Info"); }],
        /// <field>
        /// Called after the Project content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Project_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("Project"); }],
        /// <field>
        /// Called after the RowTemplate2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate2_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("RowTemplate2"); }],
        /// <field>
        /// Called after the Person content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Person_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("Person"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the DimDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DimDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("DimDate"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the TypeOfWork content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TypeOfWork_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("TypeOfWork"); }],
        /// <field>
        /// Called after the RowTemplate4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate4_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("RowTemplate4"); }],
        /// <field>
        /// Called after the Timesheet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Timesheet_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("Timesheet"); }],
        /// <field>
        /// Called after the RowTemplate3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate3_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("RowTemplate3"); }],
        /// <field>
        /// Called after the TimesheetDetails content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetDetails_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("TimesheetDetails"); }],
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
        /// Called after the BillingStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingStatus_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("BillingStatus"); }],
        /// <field>
        /// Called after the BillingStatus1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingStatus1_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("BillingStatus1"); }],
        /// <field>
        /// Called after the Internal content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Internal_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("Internal"); }],
        /// <field>
        /// Called after the LastUpdateDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastUpdateDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("LastUpdateDate"); }],
        /// <field>
        /// Called after the TimesheetDetailSourceKey content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetDetailSourceKey_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("TimesheetDetailSourceKey"); }],
        /// <field>
        /// Called after the TimesheetDetailName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetDetailName_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("TimesheetDetailName"); }],
        /// <field>
        /// Called after the TimesheetDetailCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetDetailCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("TimesheetDetailCode"); }],
        /// <field>
        /// Called after the TimesheetDetailFileName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetDetailFileName_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheetDetail().findContentItem("TimesheetDetailFileName"); }]
    });

    lightSwitchApplication.AddEditTypeOfWork.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTypeOfWork
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditTypeOfWork,
            data: lightSwitchApplication.AddEditTypeOfWork,
            value: lightSwitchApplication.AddEditTypeOfWork
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditTypeOfWork,
            data: lightSwitchApplication.AddEditTypeOfWork,
            value: lightSwitchApplication.TypeOfWork
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditTypeOfWork,
            data: lightSwitchApplication.TypeOfWork,
            value: lightSwitchApplication.TypeOfWork
        },
        TypeOfWorkSourceKey: {
            _$class: msls.ContentItem,
            _$name: "TypeOfWorkSourceKey",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTypeOfWork,
            data: lightSwitchApplication.TypeOfWork,
            value: String
        },
        TypeOfWorkCode: {
            _$class: msls.ContentItem,
            _$name: "TypeOfWorkCode",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTypeOfWork,
            data: lightSwitchApplication.TypeOfWork,
            value: String
        },
        TypeOfWorkName: {
            _$class: msls.ContentItem,
            _$name: "TypeOfWorkName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTypeOfWork,
            data: lightSwitchApplication.TypeOfWork,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTypeOfWork
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditTypeOfWork, {
        /// <field>
        /// Called when a new AddEditTypeOfWork screen is created.
        /// <br/>created(msls.application.AddEditTypeOfWork screen)
        /// </field>
        created: [lightSwitchApplication.AddEditTypeOfWork],
        /// <field>
        /// Called before changes on an active AddEditTypeOfWork screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditTypeOfWork screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditTypeOfWork],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditTypeOfWork().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditTypeOfWork().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditTypeOfWork().findContentItem("left"); }],
        /// <field>
        /// Called after the TypeOfWorkSourceKey content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TypeOfWorkSourceKey_postRender: [$element, function () { return new lightSwitchApplication.AddEditTypeOfWork().findContentItem("TypeOfWorkSourceKey"); }],
        /// <field>
        /// Called after the TypeOfWorkCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TypeOfWorkCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditTypeOfWork().findContentItem("TypeOfWorkCode"); }],
        /// <field>
        /// Called after the TypeOfWorkName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TypeOfWorkName_postRender: [$element, function () { return new lightSwitchApplication.AddEditTypeOfWork().findContentItem("TypeOfWorkName"); }]
    });

    lightSwitchApplication.BrowseBillingDetails.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseBillingDetails
        },
        BillingDetailList: {
            _$class: msls.ContentItem,
            _$name: "BillingDetailList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseBillingDetails,
            data: lightSwitchApplication.BrowseBillingDetails,
            value: lightSwitchApplication.BrowseBillingDetails
        },
        BillingDetail: {
            _$class: msls.ContentItem,
            _$name: "BillingDetail",
            _$parentName: "BillingDetailList",
            screen: lightSwitchApplication.BrowseBillingDetails,
            data: lightSwitchApplication.BrowseBillingDetails,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseBillingDetails,
                _$entry: {
                    elementType: lightSwitchApplication.BillingDetail
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "BillingDetail",
            screen: lightSwitchApplication.BrowseBillingDetails,
            data: lightSwitchApplication.BillingDetail,
            value: lightSwitchApplication.BillingDetail
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseBillingDetails
        },
        Filter: {
            _$class: msls.ContentItem,
            _$name: "Filter",
            _$parentName: "Popups",
            screen: lightSwitchApplication.BrowseBillingDetails,
            data: lightSwitchApplication.BrowseBillingDetails,
            value: lightSwitchApplication.BrowseBillingDetails
        },
        ClientName: {
            _$class: msls.ContentItem,
            _$name: "ClientName",
            _$parentName: "Filter",
            screen: lightSwitchApplication.BrowseBillingDetails,
            data: lightSwitchApplication.BrowseBillingDetails,
            value: String
        },
        PersonName: {
            _$class: msls.ContentItem,
            _$name: "PersonName",
            _$parentName: "Filter",
            screen: lightSwitchApplication.BrowseBillingDetails,
            data: lightSwitchApplication.BrowseBillingDetails,
            value: String
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseBillingDetails, {
        /// <field>
        /// Called when a new BrowseBillingDetails screen is created.
        /// <br/>created(msls.application.BrowseBillingDetails screen)
        /// </field>
        created: [lightSwitchApplication.BrowseBillingDetails],
        /// <field>
        /// Called before changes on an active BrowseBillingDetails screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseBillingDetails screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseBillingDetails],
        /// <field>
        /// Called after the BillingDetailList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingDetailList_postRender: [$element, function () { return new lightSwitchApplication.BrowseBillingDetails().findContentItem("BillingDetailList"); }],
        /// <field>
        /// Called after the BillingDetail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingDetail_postRender: [$element, function () { return new lightSwitchApplication.BrowseBillingDetails().findContentItem("BillingDetail"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseBillingDetails().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Filter content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Filter_postRender: [$element, function () { return new lightSwitchApplication.BrowseBillingDetails().findContentItem("Filter"); }],
        /// <field>
        /// Called after the ClientName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientName_postRender: [$element, function () { return new lightSwitchApplication.BrowseBillingDetails().findContentItem("ClientName"); }],
        /// <field>
        /// Called after the PersonName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PersonName_postRender: [$element, function () { return new lightSwitchApplication.BrowseBillingDetails().findContentItem("PersonName"); }]
    });

    lightSwitchApplication.BrowseClients.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseClients
        },
        ClientList: {
            _$class: msls.ContentItem,
            _$name: "ClientList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseClients,
            data: lightSwitchApplication.BrowseClients,
            value: lightSwitchApplication.BrowseClients
        },
        Client: {
            _$class: msls.ContentItem,
            _$name: "Client",
            _$parentName: "ClientList",
            screen: lightSwitchApplication.BrowseClients,
            data: lightSwitchApplication.BrowseClients,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseClients,
                _$entry: {
                    elementType: lightSwitchApplication.Client
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Client",
            screen: lightSwitchApplication.BrowseClients,
            data: lightSwitchApplication.Client,
            value: lightSwitchApplication.Client
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseClients
        },
        ClientFilterGroup: {
            _$class: msls.ContentItem,
            _$name: "ClientFilterGroup",
            _$parentName: "Popups",
            screen: lightSwitchApplication.BrowseClients,
            data: lightSwitchApplication.BrowseClients,
            value: lightSwitchApplication.BrowseClients
        },
        ClientClientName: {
            _$class: msls.ContentItem,
            _$name: "ClientClientName",
            _$parentName: "ClientFilterGroup",
            screen: lightSwitchApplication.BrowseClients,
            data: lightSwitchApplication.BrowseClients,
            value: String
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseClients, {
        /// <field>
        /// Called when a new BrowseClients screen is created.
        /// <br/>created(msls.application.BrowseClients screen)
        /// </field>
        created: [lightSwitchApplication.BrowseClients],
        /// <field>
        /// Called before changes on an active BrowseClients screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseClients screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseClients],
        /// <field>
        /// Called after the ClientList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientList_postRender: [$element, function () { return new lightSwitchApplication.BrowseClients().findContentItem("ClientList"); }],
        /// <field>
        /// Called after the Client content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Client_postRender: [$element, function () { return new lightSwitchApplication.BrowseClients().findContentItem("Client"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseClients().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the ClientFilterGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientFilterGroup_postRender: [$element, function () { return new lightSwitchApplication.BrowseClients().findContentItem("ClientFilterGroup"); }],
        /// <field>
        /// Called after the ClientClientName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientClientName_postRender: [$element, function () { return new lightSwitchApplication.BrowseClients().findContentItem("ClientClientName"); }]
    });

    lightSwitchApplication.BrowseInvoices.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseInvoices
        },
        InvoiceList: {
            _$class: msls.ContentItem,
            _$name: "InvoiceList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseInvoices,
            data: lightSwitchApplication.BrowseInvoices,
            value: lightSwitchApplication.BrowseInvoices
        },
        Invoice: {
            _$class: msls.ContentItem,
            _$name: "Invoice",
            _$parentName: "InvoiceList",
            screen: lightSwitchApplication.BrowseInvoices,
            data: lightSwitchApplication.BrowseInvoices,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseInvoices,
                _$entry: {
                    elementType: lightSwitchApplication.Invoice
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Invoice",
            screen: lightSwitchApplication.BrowseInvoices,
            data: lightSwitchApplication.Invoice,
            value: lightSwitchApplication.Invoice
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseInvoices
        },
        Filter: {
            _$class: msls.ContentItem,
            _$name: "Filter",
            _$parentName: "Popups",
            screen: lightSwitchApplication.BrowseInvoices,
            data: lightSwitchApplication.BrowseInvoices,
            value: lightSwitchApplication.BrowseInvoices
        },
        PersonName: {
            _$class: msls.ContentItem,
            _$name: "PersonName",
            _$parentName: "Filter",
            screen: lightSwitchApplication.BrowseInvoices,
            data: lightSwitchApplication.BrowseInvoices,
            value: String
        },
        InvoiceStatusName: {
            _$class: msls.ContentItem,
            _$name: "InvoiceStatusName",
            _$parentName: "Filter",
            screen: lightSwitchApplication.BrowseInvoices,
            data: lightSwitchApplication.BrowseInvoices,
            value: String
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseInvoices, {
        /// <field>
        /// Called when a new BrowseInvoices screen is created.
        /// <br/>created(msls.application.BrowseInvoices screen)
        /// </field>
        created: [lightSwitchApplication.BrowseInvoices],
        /// <field>
        /// Called before changes on an active BrowseInvoices screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseInvoices screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseInvoices],
        /// <field>
        /// Called after the InvoiceList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InvoiceList_postRender: [$element, function () { return new lightSwitchApplication.BrowseInvoices().findContentItem("InvoiceList"); }],
        /// <field>
        /// Called after the Invoice content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Invoice_postRender: [$element, function () { return new lightSwitchApplication.BrowseInvoices().findContentItem("Invoice"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseInvoices().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Filter content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Filter_postRender: [$element, function () { return new lightSwitchApplication.BrowseInvoices().findContentItem("Filter"); }],
        /// <field>
        /// Called after the PersonName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PersonName_postRender: [$element, function () { return new lightSwitchApplication.BrowseInvoices().findContentItem("PersonName"); }],
        /// <field>
        /// Called after the InvoiceStatusName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InvoiceStatusName_postRender: [$element, function () { return new lightSwitchApplication.BrowseInvoices().findContentItem("InvoiceStatusName"); }]
    });

    lightSwitchApplication.BrowseTimesheetDetails.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTimesheetDetails
        },
        TimesheetDetailList: {
            _$class: msls.ContentItem,
            _$name: "TimesheetDetailList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseTimesheetDetails,
            data: lightSwitchApplication.BrowseTimesheetDetails,
            value: lightSwitchApplication.BrowseTimesheetDetails
        },
        TimesheetDetail: {
            _$class: msls.ContentItem,
            _$name: "TimesheetDetail",
            _$parentName: "TimesheetDetailList",
            screen: lightSwitchApplication.BrowseTimesheetDetails,
            data: lightSwitchApplication.BrowseTimesheetDetails,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseTimesheetDetails,
                _$entry: {
                    elementType: lightSwitchApplication.TimesheetDetail
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "TimesheetDetail",
            screen: lightSwitchApplication.BrowseTimesheetDetails,
            data: lightSwitchApplication.TimesheetDetail,
            value: lightSwitchApplication.TimesheetDetail
        },
        EditTimesheetDetail: {
            _$class: msls.ContentItem,
            _$name: "EditTimesheetDetail",
            _$parentName: "TimesheetDetailList",
            screen: lightSwitchApplication.BrowseTimesheetDetails
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTimesheetDetails
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseTimesheetDetails, {
        /// <field>
        /// Called when a new BrowseTimesheetDetails screen is created.
        /// <br/>created(msls.application.BrowseTimesheetDetails screen)
        /// </field>
        created: [lightSwitchApplication.BrowseTimesheetDetails],
        /// <field>
        /// Called before changes on an active BrowseTimesheetDetails screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseTimesheetDetails screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseTimesheetDetails],
        /// <field>
        /// Called after the TimesheetDetailList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetDetailList_postRender: [$element, function () { return new lightSwitchApplication.BrowseTimesheetDetails().findContentItem("TimesheetDetailList"); }],
        /// <field>
        /// Called after the TimesheetDetail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetDetail_postRender: [$element, function () { return new lightSwitchApplication.BrowseTimesheetDetails().findContentItem("TimesheetDetail"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseTimesheetDetails().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the EditTimesheetDetail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EditTimesheetDetail_postRender: [$element, function () { return new lightSwitchApplication.BrowseTimesheetDetails().findContentItem("EditTimesheetDetail"); }]
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
        },
        Filter: {
            _$class: msls.ContentItem,
            _$name: "Filter",
            _$parentName: "Popups",
            screen: lightSwitchApplication.BrowseTimesheets,
            data: lightSwitchApplication.BrowseTimesheets,
            value: lightSwitchApplication.BrowseTimesheets
        },
        TimesheetStartDate: {
            _$class: msls.ContentItem,
            _$name: "TimesheetStartDate",
            _$parentName: "Filter",
            screen: lightSwitchApplication.BrowseTimesheets,
            data: lightSwitchApplication.BrowseTimesheets,
            value: Date
        },
        TimesheetEndDate: {
            _$class: msls.ContentItem,
            _$name: "TimesheetEndDate",
            _$parentName: "Filter",
            screen: lightSwitchApplication.BrowseTimesheets,
            data: lightSwitchApplication.BrowseTimesheets,
            value: Date
        },
        TimesheetTimesheetPerson: {
            _$class: msls.ContentItem,
            _$name: "TimesheetTimesheetPerson",
            _$parentName: "Filter",
            screen: lightSwitchApplication.BrowseTimesheets,
            data: lightSwitchApplication.BrowseTimesheets,
            value: String
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
        /// Called after the Timesheet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Timesheet_postRender: [$element, function () { return new lightSwitchApplication.BrowseTimesheets().findContentItem("Timesheet"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseTimesheets().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Filter content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Filter_postRender: [$element, function () { return new lightSwitchApplication.BrowseTimesheets().findContentItem("Filter"); }],
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
        /// Called after the TimesheetTimesheetPerson content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetTimesheetPerson_postRender: [$element, function () { return new lightSwitchApplication.BrowseTimesheets().findContentItem("TimesheetTimesheetPerson"); }]
    });

    lightSwitchApplication.EditUnallocatedTimesheets.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.EditUnallocatedTimesheets
        },
        UnallocatedTimesheet List: {
            _$class: msls.ContentItem,
            _$name: "UnallocatedTimesheet List",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.EditUnallocatedTimesheets,
            data: lightSwitchApplication.EditUnallocatedTimesheets,
            value: lightSwitchApplication.EditUnallocatedTimesheets
        },
        WijmoGrid: {
            _$class: msls.ContentItem,
            _$name: "WijmoGrid",
            _$parentName: "UnallocatedTimesheet List",
            screen: lightSwitchApplication.EditUnallocatedTimesheets,
            data: lightSwitchApplication.EditUnallocatedTimesheets,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.EditUnallocatedTimesheets,
                _$entry: {
                    elementType: lightSwitchApplication.UnallocatedTimesheet
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "WijmoGrid",
            screen: lightSwitchApplication.EditUnallocatedTimesheets,
            data: lightSwitchApplication.UnallocatedTimesheet,
            value: lightSwitchApplication.UnallocatedTimesheet
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.EditUnallocatedTimesheets
        }
    };

    msls._addEntryPoints(lightSwitchApplication.EditUnallocatedTimesheets, {
        /// <field>
        /// Called when a new EditUnallocatedTimesheets screen is created.
        /// <br/>created(msls.application.EditUnallocatedTimesheets screen)
        /// </field>
        created: [lightSwitchApplication.EditUnallocatedTimesheets],
        /// <field>
        /// Called before changes on an active EditUnallocatedTimesheets screen are applied.
        /// <br/>beforeApplyChanges(msls.application.EditUnallocatedTimesheets screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.EditUnallocatedTimesheets],
        /// <field>
        /// Called to determine if the AddNew method can be executed.
        /// <br/>canExecute(msls.application.EditUnallocatedTimesheets screen)
        /// </field>
        AddNew_canExecute: [lightSwitchApplication.EditUnallocatedTimesheets],
        /// <field>
        /// Called to execute the AddNew method.
        /// <br/>execute(msls.application.EditUnallocatedTimesheets screen)
        /// </field>
        AddNew_execute: [lightSwitchApplication.EditUnallocatedTimesheets],
        /// <field>
        /// Called to determine if the DeleteSelected method can be executed.
        /// <br/>canExecute(msls.application.EditUnallocatedTimesheets screen)
        /// </field>
        DeleteSelected_canExecute: [lightSwitchApplication.EditUnallocatedTimesheets],
        /// <field>
        /// Called to execute the DeleteSelected method.
        /// <br/>execute(msls.application.EditUnallocatedTimesheets screen)
        /// </field>
        DeleteSelected_execute: [lightSwitchApplication.EditUnallocatedTimesheets],
        /// <field>
        /// Called after the UnallocatedTimesheet List content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnallocatedTimesheet List_postRender: [$element, function () { return new lightSwitchApplication.EditUnallocatedTimesheets().findContentItem("UnallocatedTimesheet List"); }],
        /// <field>
        /// Called after the WijmoGrid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WijmoGrid_postRender: [$element, function () { return new lightSwitchApplication.EditUnallocatedTimesheets().findContentItem("WijmoGrid"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.EditUnallocatedTimesheets().findContentItem("RowTemplate"); }]
    });

    lightSwitchApplication.HomeScreen.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.HomeScreen
        },
        Timesheets: {
            _$class: msls.ContentItem,
            _$name: "Timesheets",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.HomeScreen,
            data: lightSwitchApplication.HomeScreen,
            value: lightSwitchApplication.HomeScreen
        },
        ShowBrowseClients: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseClients",
            _$parentName: "Timesheets",
            screen: lightSwitchApplication.HomeScreen
        },
        ShowBrowseTimesheets: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseTimesheets",
            _$parentName: "Timesheets",
            screen: lightSwitchApplication.HomeScreen
        },
        ShowBrowseBillingDetails: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseBillingDetails",
            _$parentName: "Timesheets",
            screen: lightSwitchApplication.HomeScreen
        },
        EditUnallocatedTimesheets: {
            _$class: msls.ContentItem,
            _$name: "EditUnallocatedTimesheets",
            _$parentName: "Timesheets",
            screen: lightSwitchApplication.HomeScreen
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.HomeScreen
        }
    };

    msls._addEntryPoints(lightSwitchApplication.HomeScreen, {
        /// <field>
        /// Called when a new HomeScreen screen is created.
        /// <br/>created(msls.application.HomeScreen screen)
        /// </field>
        created: [lightSwitchApplication.HomeScreen],
        /// <field>
        /// Called before changes on an active HomeScreen screen are applied.
        /// <br/>beforeApplyChanges(msls.application.HomeScreen screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.HomeScreen],
        /// <field>
        /// Called after the Timesheets content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Timesheets_postRender: [$element, function () { return new lightSwitchApplication.HomeScreen().findContentItem("Timesheets"); }],
        /// <field>
        /// Called after the ShowBrowseClients content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseClients_postRender: [$element, function () { return new lightSwitchApplication.HomeScreen().findContentItem("ShowBrowseClients"); }],
        /// <field>
        /// Called after the ShowBrowseTimesheets content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseTimesheets_postRender: [$element, function () { return new lightSwitchApplication.HomeScreen().findContentItem("ShowBrowseTimesheets"); }],
        /// <field>
        /// Called after the ShowBrowseBillingDetails content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseBillingDetails_postRender: [$element, function () { return new lightSwitchApplication.HomeScreen().findContentItem("ShowBrowseBillingDetails"); }],
        /// <field>
        /// Called after the EditUnallocatedTimesheets content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EditUnallocatedTimesheets_postRender: [$element, function () { return new lightSwitchApplication.HomeScreen().findContentItem("EditUnallocatedTimesheets"); }]
    });

    lightSwitchApplication.UnallocatedTimesheets.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.UnallocatedTimesheets
        },
        UnallocatedTimesheetList: {
            _$class: msls.ContentItem,
            _$name: "UnallocatedTimesheetList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.UnallocatedTimesheets,
            data: lightSwitchApplication.UnallocatedTimesheets,
            value: lightSwitchApplication.UnallocatedTimesheets
        },
        UnallocatedTimesheetsSorted: {
            _$class: msls.ContentItem,
            _$name: "UnallocatedTimesheetsSorted",
            _$parentName: "UnallocatedTimesheetList",
            screen: lightSwitchApplication.UnallocatedTimesheets,
            data: lightSwitchApplication.UnallocatedTimesheets,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.UnallocatedTimesheets,
                _$entry: {
                    elementType: lightSwitchApplication.UnallocatedTimesheet
                }
            }
        },
        UnallocatedTimesheetsSortedTemplate: {
            _$class: msls.ContentItem,
            _$name: "UnallocatedTimesheetsSortedTemplate",
            _$parentName: "UnallocatedTimesheetsSorted",
            screen: lightSwitchApplication.UnallocatedTimesheets,
            data: lightSwitchApplication.UnallocatedTimesheet,
            value: lightSwitchApplication.UnallocatedTimesheet
        },
        ProjectName: {
            _$class: msls.ContentItem,
            _$name: "ProjectName",
            _$parentName: "UnallocatedTimesheetsSortedTemplate",
            screen: lightSwitchApplication.UnallocatedTimesheets,
            data: lightSwitchApplication.UnallocatedTimesheet,
            value: String
        },
        TimesheetDetailDateID: {
            _$class: msls.ContentItem,
            _$name: "TimesheetDetailDateID",
            _$parentName: "UnallocatedTimesheetsSortedTemplate",
            screen: lightSwitchApplication.UnallocatedTimesheets,
            data: lightSwitchApplication.UnallocatedTimesheet,
            value: Number
        },
        Hours: {
            _$class: msls.ContentItem,
            _$name: "Hours",
            _$parentName: "UnallocatedTimesheetsSortedTemplate",
            screen: lightSwitchApplication.UnallocatedTimesheets,
            data: lightSwitchApplication.UnallocatedTimesheet,
            value: String
        },
        Comments: {
            _$class: msls.ContentItem,
            _$name: "Comments",
            _$parentName: "UnallocatedTimesheetsSortedTemplate",
            screen: lightSwitchApplication.UnallocatedTimesheets,
            data: lightSwitchApplication.UnallocatedTimesheet,
            value: String
        },
        Grid: {
            _$class: msls.ContentItem,
            _$name: "Grid",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.UnallocatedTimesheets,
            data: lightSwitchApplication.UnallocatedTimesheets,
            value: lightSwitchApplication.UnallocatedTimesheets
        },
        UnallocatedTimesheetsSorted1: {
            _$class: msls.ContentItem,
            _$name: "UnallocatedTimesheetsSorted1",
            _$parentName: "Grid",
            screen: lightSwitchApplication.UnallocatedTimesheets,
            data: lightSwitchApplication.UnallocatedTimesheets,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.UnallocatedTimesheets,
                _$entry: {
                    elementType: lightSwitchApplication.UnallocatedTimesheet
                }
            }
        },
        UnallocatedTimesheetsSorted1Template: {
            _$class: msls.ContentItem,
            _$name: "UnallocatedTimesheetsSorted1Template",
            _$parentName: "UnallocatedTimesheetsSorted1",
            screen: lightSwitchApplication.UnallocatedTimesheets,
            data: lightSwitchApplication.UnallocatedTimesheet,
            value: lightSwitchApplication.UnallocatedTimesheet
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.UnallocatedTimesheets
        },
        Filter: {
            _$class: msls.ContentItem,
            _$name: "Filter",
            _$parentName: "Popups",
            screen: lightSwitchApplication.UnallocatedTimesheets,
            data: lightSwitchApplication.UnallocatedTimesheets,
            value: lightSwitchApplication.UnallocatedTimesheets
        },
        ClientName: {
            _$class: msls.ContentItem,
            _$name: "ClientName",
            _$parentName: "Filter",
            screen: lightSwitchApplication.UnallocatedTimesheets,
            data: lightSwitchApplication.UnallocatedTimesheets,
            value: String
        },
        PersonName: {
            _$class: msls.ContentItem,
            _$name: "PersonName",
            _$parentName: "Filter",
            screen: lightSwitchApplication.UnallocatedTimesheets,
            data: lightSwitchApplication.UnallocatedTimesheets,
            value: String
        }
    };

    msls._addEntryPoints(lightSwitchApplication.UnallocatedTimesheets, {
        /// <field>
        /// Called when a new UnallocatedTimesheets screen is created.
        /// <br/>created(msls.application.UnallocatedTimesheets screen)
        /// </field>
        created: [lightSwitchApplication.UnallocatedTimesheets],
        /// <field>
        /// Called before changes on an active UnallocatedTimesheets screen are applied.
        /// <br/>beforeApplyChanges(msls.application.UnallocatedTimesheets screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.UnallocatedTimesheets],
        /// <field>
        /// Called after the UnallocatedTimesheetList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnallocatedTimesheetList_postRender: [$element, function () { return new lightSwitchApplication.UnallocatedTimesheets().findContentItem("UnallocatedTimesheetList"); }],
        /// <field>
        /// Called after the UnallocatedTimesheetsSorted content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnallocatedTimesheetsSorted_postRender: [$element, function () { return new lightSwitchApplication.UnallocatedTimesheets().findContentItem("UnallocatedTimesheetsSorted"); }],
        /// <field>
        /// Called after the UnallocatedTimesheetsSortedTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnallocatedTimesheetsSortedTemplate_postRender: [$element, function () { return new lightSwitchApplication.UnallocatedTimesheets().findContentItem("UnallocatedTimesheetsSortedTemplate"); }],
        /// <field>
        /// Called after the ProjectName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectName_postRender: [$element, function () { return new lightSwitchApplication.UnallocatedTimesheets().findContentItem("ProjectName"); }],
        /// <field>
        /// Called after the TimesheetDetailDateID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetDetailDateID_postRender: [$element, function () { return new lightSwitchApplication.UnallocatedTimesheets().findContentItem("TimesheetDetailDateID"); }],
        /// <field>
        /// Called after the Hours content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Hours_postRender: [$element, function () { return new lightSwitchApplication.UnallocatedTimesheets().findContentItem("Hours"); }],
        /// <field>
        /// Called after the Comments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Comments_postRender: [$element, function () { return new lightSwitchApplication.UnallocatedTimesheets().findContentItem("Comments"); }],
        /// <field>
        /// Called after the Grid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Grid_postRender: [$element, function () { return new lightSwitchApplication.UnallocatedTimesheets().findContentItem("Grid"); }],
        /// <field>
        /// Called after the UnallocatedTimesheetsSorted1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnallocatedTimesheetsSorted1_postRender: [$element, function () { return new lightSwitchApplication.UnallocatedTimesheets().findContentItem("UnallocatedTimesheetsSorted1"); }],
        /// <field>
        /// Called after the UnallocatedTimesheetsSorted1Template content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnallocatedTimesheetsSorted1Template_postRender: [$element, function () { return new lightSwitchApplication.UnallocatedTimesheets().findContentItem("UnallocatedTimesheetsSorted1Template"); }],
        /// <field>
        /// Called after the Filter content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Filter_postRender: [$element, function () { return new lightSwitchApplication.UnallocatedTimesheets().findContentItem("Filter"); }],
        /// <field>
        /// Called after the ClientName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientName_postRender: [$element, function () { return new lightSwitchApplication.UnallocatedTimesheets().findContentItem("ClientName"); }],
        /// <field>
        /// Called after the PersonName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PersonName_postRender: [$element, function () { return new lightSwitchApplication.UnallocatedTimesheets().findContentItem("PersonName"); }]
    });

}(msls.application));