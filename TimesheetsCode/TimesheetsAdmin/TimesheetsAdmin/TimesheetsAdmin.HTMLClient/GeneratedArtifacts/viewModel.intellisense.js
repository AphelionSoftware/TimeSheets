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

    lightSwitchApplication.AddEditBillingStatus.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditBillingStatus
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditBillingStatus,
            data: lightSwitchApplication.AddEditBillingStatus,
            value: lightSwitchApplication.AddEditBillingStatus
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditBillingStatus,
            data: lightSwitchApplication.AddEditBillingStatus,
            value: lightSwitchApplication.BillingStatus
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditBillingStatus,
            data: lightSwitchApplication.BillingStatus,
            value: lightSwitchApplication.BillingStatus
        },
        BillingStatusSourceKey: {
            _$class: msls.ContentItem,
            _$name: "BillingStatusSourceKey",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditBillingStatus,
            data: lightSwitchApplication.BillingStatus,
            value: String
        },
        BillingStatusName: {
            _$class: msls.ContentItem,
            _$name: "BillingStatusName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditBillingStatus,
            data: lightSwitchApplication.BillingStatus,
            value: String
        },
        BillingStatusCode: {
            _$class: msls.ContentItem,
            _$name: "BillingStatusCode",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditBillingStatus,
            data: lightSwitchApplication.BillingStatus,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditBillingStatus
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditBillingStatus, {
        /// <field>
        /// Called when a new AddEditBillingStatus screen is created.
        /// <br/>created(msls.application.AddEditBillingStatus screen)
        /// </field>
        created: [lightSwitchApplication.AddEditBillingStatus],
        /// <field>
        /// Called before changes on an active AddEditBillingStatus screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditBillingStatus screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditBillingStatus],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditBillingStatus().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditBillingStatus().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditBillingStatus().findContentItem("left"); }],
        /// <field>
        /// Called after the BillingStatusSourceKey content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingStatusSourceKey_postRender: [$element, function () { return new lightSwitchApplication.AddEditBillingStatus().findContentItem("BillingStatusSourceKey"); }],
        /// <field>
        /// Called after the BillingStatusName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingStatusName_postRender: [$element, function () { return new lightSwitchApplication.AddEditBillingStatus().findContentItem("BillingStatusName"); }],
        /// <field>
        /// Called after the BillingStatusCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingStatusCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditBillingStatus().findContentItem("BillingStatusCode"); }]
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

    lightSwitchApplication.AddEditClientRole.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditClientRole
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditClientRole,
            data: lightSwitchApplication.AddEditClientRole,
            value: lightSwitchApplication.AddEditClientRole
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditClientRole,
            data: lightSwitchApplication.AddEditClientRole,
            value: lightSwitchApplication.ClientRole
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditClientRole,
            data: lightSwitchApplication.ClientRole,
            value: lightSwitchApplication.ClientRole
        },
        ClientRoleSourceKey: {
            _$class: msls.ContentItem,
            _$name: "ClientRoleSourceKey",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditClientRole,
            data: lightSwitchApplication.ClientRole,
            value: String
        },
        ClientRoleCode: {
            _$class: msls.ContentItem,
            _$name: "ClientRoleCode",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditClientRole,
            data: lightSwitchApplication.ClientRole,
            value: String
        },
        ClientRoleName: {
            _$class: msls.ContentItem,
            _$name: "ClientRoleName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditClientRole,
            data: lightSwitchApplication.ClientRole,
            value: String
        },
        BillingDetails: {
            _$class: msls.ContentItem,
            _$name: "BillingDetails",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditClientRole,
            data: lightSwitchApplication.AddEditClientRole,
            value: lightSwitchApplication.AddEditClientRole
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditClientRole
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditClientRole, {
        /// <field>
        /// Called when a new AddEditClientRole screen is created.
        /// <br/>created(msls.application.AddEditClientRole screen)
        /// </field>
        created: [lightSwitchApplication.AddEditClientRole],
        /// <field>
        /// Called before changes on an active AddEditClientRole screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditClientRole screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditClientRole],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditClientRole().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditClientRole().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditClientRole().findContentItem("left"); }],
        /// <field>
        /// Called after the ClientRoleSourceKey content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientRoleSourceKey_postRender: [$element, function () { return new lightSwitchApplication.AddEditClientRole().findContentItem("ClientRoleSourceKey"); }],
        /// <field>
        /// Called after the ClientRoleCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientRoleCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditClientRole().findContentItem("ClientRoleCode"); }],
        /// <field>
        /// Called after the ClientRoleName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientRoleName_postRender: [$element, function () { return new lightSwitchApplication.AddEditClientRole().findContentItem("ClientRoleName"); }],
        /// <field>
        /// Called after the BillingDetails content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingDetails_postRender: [$element, function () { return new lightSwitchApplication.AddEditClientRole().findContentItem("BillingDetails"); }]
    });

    lightSwitchApplication.AddEditInvoiceStatu.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditInvoiceStatu
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditInvoiceStatu,
            data: lightSwitchApplication.AddEditInvoiceStatu,
            value: lightSwitchApplication.AddEditInvoiceStatu
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditInvoiceStatu,
            data: lightSwitchApplication.AddEditInvoiceStatu,
            value: lightSwitchApplication.InvoiceStatu
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditInvoiceStatu,
            data: lightSwitchApplication.InvoiceStatu,
            value: lightSwitchApplication.InvoiceStatu
        },
        InvoiceStatusSourceKey: {
            _$class: msls.ContentItem,
            _$name: "InvoiceStatusSourceKey",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditInvoiceStatu,
            data: lightSwitchApplication.InvoiceStatu,
            value: String
        },
        InvoiceStatusName: {
            _$class: msls.ContentItem,
            _$name: "InvoiceStatusName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditInvoiceStatu,
            data: lightSwitchApplication.InvoiceStatu,
            value: String
        },
        InvoiceStatusCode: {
            _$class: msls.ContentItem,
            _$name: "InvoiceStatusCode",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditInvoiceStatu,
            data: lightSwitchApplication.InvoiceStatu,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditInvoiceStatu
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditInvoiceStatu, {
        /// <field>
        /// Called when a new AddEditInvoiceStatu screen is created.
        /// <br/>created(msls.application.AddEditInvoiceStatu screen)
        /// </field>
        created: [lightSwitchApplication.AddEditInvoiceStatu],
        /// <field>
        /// Called before changes on an active AddEditInvoiceStatu screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditInvoiceStatu screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditInvoiceStatu],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditInvoiceStatu().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditInvoiceStatu().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditInvoiceStatu().findContentItem("left"); }],
        /// <field>
        /// Called after the InvoiceStatusSourceKey content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InvoiceStatusSourceKey_postRender: [$element, function () { return new lightSwitchApplication.AddEditInvoiceStatu().findContentItem("InvoiceStatusSourceKey"); }],
        /// <field>
        /// Called after the InvoiceStatusName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InvoiceStatusName_postRender: [$element, function () { return new lightSwitchApplication.AddEditInvoiceStatu().findContentItem("InvoiceStatusName"); }],
        /// <field>
        /// Called after the InvoiceStatusCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InvoiceStatusCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditInvoiceStatu().findContentItem("InvoiceStatusCode"); }]
    });

    lightSwitchApplication.AddEditPerson.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPerson
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditPerson,
            data: lightSwitchApplication.AddEditPerson,
            value: lightSwitchApplication.AddEditPerson
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditPerson,
            data: lightSwitchApplication.AddEditPerson,
            value: lightSwitchApplication.Person
        },
        PersonDetails: {
            _$class: msls.ContentItem,
            _$name: "PersonDetails",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditPerson,
            data: lightSwitchApplication.Person,
            value: lightSwitchApplication.Person
        },
        PersonSourceKey: {
            _$class: msls.ContentItem,
            _$name: "PersonSourceKey",
            _$parentName: "PersonDetails",
            screen: lightSwitchApplication.AddEditPerson,
            data: lightSwitchApplication.Person,
            value: String
        },
        PersonName: {
            _$class: msls.ContentItem,
            _$name: "PersonName",
            _$parentName: "PersonDetails",
            screen: lightSwitchApplication.AddEditPerson,
            data: lightSwitchApplication.Person,
            value: String
        },
        PersonCode: {
            _$class: msls.ContentItem,
            _$name: "PersonCode",
            _$parentName: "PersonDetails",
            screen: lightSwitchApplication.AddEditPerson,
            data: lightSwitchApplication.Person,
            value: String
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "PersonDetails",
            screen: lightSwitchApplication.AddEditPerson,
            data: lightSwitchApplication.Person,
            value: String
        },
        StartDate: {
            _$class: msls.ContentItem,
            _$name: "StartDate",
            _$parentName: "PersonDetails",
            screen: lightSwitchApplication.AddEditPerson,
            data: lightSwitchApplication.Person,
            value: Date
        },
        ADUsername: {
            _$class: msls.ContentItem,
            _$name: "ADUsername",
            _$parentName: "PersonDetails",
            screen: lightSwitchApplication.AddEditPerson,
            data: lightSwitchApplication.Person,
            value: String
        },
        SharepointUserName: {
            _$class: msls.ContentItem,
            _$name: "SharepointUserName",
            _$parentName: "PersonDetails",
            screen: lightSwitchApplication.AddEditPerson,
            data: lightSwitchApplication.Person,
            value: String
        },
        SystemRole: {
            _$class: msls.ContentItem,
            _$name: "SystemRole",
            _$parentName: "PersonDetails",
            screen: lightSwitchApplication.AddEditPerson,
            data: lightSwitchApplication.Person,
            value: lightSwitchApplication.SystemRole
        },
        SystemRole1: {
            _$class: msls.ContentItem,
            _$name: "SystemRole1",
            _$parentName: "SystemRole",
            screen: lightSwitchApplication.AddEditPerson,
            data: lightSwitchApplication.SystemRole,
            value: lightSwitchApplication.SystemRole
        },
        PersonBilling: {
            _$class: msls.ContentItem,
            _$name: "PersonBilling",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditPerson,
            data: lightSwitchApplication.Person,
            value: lightSwitchApplication.Person
        },
        ActiveType: {
            _$class: msls.ContentItem,
            _$name: "ActiveType",
            _$parentName: "PersonBilling",
            screen: lightSwitchApplication.AddEditPerson,
            data: lightSwitchApplication.Person,
            value: lightSwitchApplication.ActiveType
        },
        ActiveType1: {
            _$class: msls.ContentItem,
            _$name: "ActiveType1",
            _$parentName: "ActiveType",
            screen: lightSwitchApplication.AddEditPerson,
            data: lightSwitchApplication.ActiveType,
            value: lightSwitchApplication.ActiveType
        },
        BillingPercentTarget: {
            _$class: msls.ContentItem,
            _$name: "BillingPercentTarget",
            _$parentName: "PersonBilling",
            screen: lightSwitchApplication.AddEditPerson,
            data: lightSwitchApplication.Person,
            value: Number
        },
        BillingPercentMinimum: {
            _$class: msls.ContentItem,
            _$name: "BillingPercentMinimum",
            _$parentName: "PersonBilling",
            screen: lightSwitchApplication.AddEditPerson,
            data: lightSwitchApplication.Person,
            value: Number
        },
        HourlyCost: {
            _$class: msls.ContentItem,
            _$name: "HourlyCost",
            _$parentName: "PersonBilling",
            screen: lightSwitchApplication.AddEditPerson,
            data: lightSwitchApplication.Person,
            value: Number
        },
        MonthlyCost: {
            _$class: msls.ContentItem,
            _$name: "MonthlyCost",
            _$parentName: "PersonBilling",
            screen: lightSwitchApplication.AddEditPerson,
            data: lightSwitchApplication.Person,
            value: String
        },
        IsContractor: {
            _$class: msls.ContentItem,
            _$name: "IsContractor",
            _$parentName: "PersonBilling",
            screen: lightSwitchApplication.AddEditPerson,
            data: lightSwitchApplication.Person,
            value: Number
        },
        Billable: {
            _$class: msls.ContentItem,
            _$name: "Billable",
            _$parentName: "PersonBilling",
            screen: lightSwitchApplication.AddEditPerson,
            data: lightSwitchApplication.Person,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPerson
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditPerson, {
        /// <field>
        /// Called when a new AddEditPerson screen is created.
        /// <br/>created(msls.application.AddEditPerson screen)
        /// </field>
        created: [lightSwitchApplication.AddEditPerson],
        /// <field>
        /// Called before changes on an active AddEditPerson screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditPerson screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditPerson],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditPerson().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditPerson().findContentItem("columns"); }],
        /// <field>
        /// Called after the PersonDetails content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PersonDetails_postRender: [$element, function () { return new lightSwitchApplication.AddEditPerson().findContentItem("PersonDetails"); }],
        /// <field>
        /// Called after the PersonSourceKey content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PersonSourceKey_postRender: [$element, function () { return new lightSwitchApplication.AddEditPerson().findContentItem("PersonSourceKey"); }],
        /// <field>
        /// Called after the PersonName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PersonName_postRender: [$element, function () { return new lightSwitchApplication.AddEditPerson().findContentItem("PersonName"); }],
        /// <field>
        /// Called after the PersonCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PersonCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditPerson().findContentItem("PersonCode"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.AddEditPerson().findContentItem("Email"); }],
        /// <field>
        /// Called after the StartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StartDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditPerson().findContentItem("StartDate"); }],
        /// <field>
        /// Called after the ADUsername content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ADUsername_postRender: [$element, function () { return new lightSwitchApplication.AddEditPerson().findContentItem("ADUsername"); }],
        /// <field>
        /// Called after the SharepointUserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SharepointUserName_postRender: [$element, function () { return new lightSwitchApplication.AddEditPerson().findContentItem("SharepointUserName"); }],
        /// <field>
        /// Called after the SystemRole content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SystemRole_postRender: [$element, function () { return new lightSwitchApplication.AddEditPerson().findContentItem("SystemRole"); }],
        /// <field>
        /// Called after the SystemRole1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SystemRole1_postRender: [$element, function () { return new lightSwitchApplication.AddEditPerson().findContentItem("SystemRole1"); }],
        /// <field>
        /// Called after the PersonBilling content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PersonBilling_postRender: [$element, function () { return new lightSwitchApplication.AddEditPerson().findContentItem("PersonBilling"); }],
        /// <field>
        /// Called after the ActiveType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActiveType_postRender: [$element, function () { return new lightSwitchApplication.AddEditPerson().findContentItem("ActiveType"); }],
        /// <field>
        /// Called after the ActiveType1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActiveType1_postRender: [$element, function () { return new lightSwitchApplication.AddEditPerson().findContentItem("ActiveType1"); }],
        /// <field>
        /// Called after the BillingPercentTarget content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingPercentTarget_postRender: [$element, function () { return new lightSwitchApplication.AddEditPerson().findContentItem("BillingPercentTarget"); }],
        /// <field>
        /// Called after the BillingPercentMinimum content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingPercentMinimum_postRender: [$element, function () { return new lightSwitchApplication.AddEditPerson().findContentItem("BillingPercentMinimum"); }],
        /// <field>
        /// Called after the HourlyCost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HourlyCost_postRender: [$element, function () { return new lightSwitchApplication.AddEditPerson().findContentItem("HourlyCost"); }],
        /// <field>
        /// Called after the MonthlyCost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthlyCost_postRender: [$element, function () { return new lightSwitchApplication.AddEditPerson().findContentItem("MonthlyCost"); }],
        /// <field>
        /// Called after the IsContractor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IsContractor_postRender: [$element, function () { return new lightSwitchApplication.AddEditPerson().findContentItem("IsContractor"); }],
        /// <field>
        /// Called after the Billable content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Billable_postRender: [$element, function () { return new lightSwitchApplication.AddEditPerson().findContentItem("Billable"); }]
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
        ProjectCap: {
            _$class: msls.ContentItem,
            _$name: "ProjectCap",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.Project,
            value: String
        },
        MonthlyCap: {
            _$class: msls.ContentItem,
            _$name: "MonthlyCap",
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
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.Project,
            value: lightSwitchApplication.Project
        },
        BillingStatus: {
            _$class: msls.ContentItem,
            _$name: "BillingStatus",
            _$parentName: "right",
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
        CommPercent: {
            _$class: msls.ContentItem,
            _$name: "CommPercent",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.Project,
            value: String
        },
        Timesheets: {
            _$class: msls.ContentItem,
            _$name: "Timesheets",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.AddEditProject,
            value: lightSwitchApplication.AddEditProject
        },
        TimesheetDetails: {
            _$class: msls.ContentItem,
            _$name: "TimesheetDetails",
            _$parentName: "Timesheets",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.AddEditProject,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditProject,
                _$entry: {
                    elementType: lightSwitchApplication.TimesheetDetail
                }
            }
        },
        TimesheetDetailsTemplate: {
            _$class: msls.ContentItem,
            _$name: "TimesheetDetailsTemplate",
            _$parentName: "TimesheetDetails",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.TimesheetDetail,
            value: lightSwitchApplication.TimesheetDetail
        },
        DimDate: {
            _$class: msls.ContentItem,
            _$name: "DimDate",
            _$parentName: "TimesheetDetailsTemplate",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.TimesheetDetail,
            value: lightSwitchApplication.DimDate
        },
        Person1: {
            _$class: msls.ContentItem,
            _$name: "Person1",
            _$parentName: "TimesheetDetailsTemplate",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.TimesheetDetail,
            value: lightSwitchApplication.Person
        },
        Comments: {
            _$class: msls.ContentItem,
            _$name: "Comments",
            _$parentName: "TimesheetDetailsTemplate",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.TimesheetDetail,
            value: String
        },
        Hours: {
            _$class: msls.ContentItem,
            _$name: "Hours",
            _$parentName: "TimesheetDetailsTemplate",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.TimesheetDetail,
            value: String
        },
        TypeOfWork: {
            _$class: msls.ContentItem,
            _$name: "TypeOfWork",
            _$parentName: "TimesheetDetailsTemplate",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.TimesheetDetail,
            value: lightSwitchApplication.TypeOfWork
        },
        Resources: {
            _$class: msls.ContentItem,
            _$name: "Resources",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.AddEditProject,
            value: lightSwitchApplication.AddEditProject
        },
        ResourcePlans: {
            _$class: msls.ContentItem,
            _$name: "ResourcePlans",
            _$parentName: "Resources",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.AddEditProject,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditProject,
                _$entry: {
                    elementType: lightSwitchApplication.ResourcePlan
                }
            }
        },
        ResourcePlansTemplate: {
            _$class: msls.ContentItem,
            _$name: "ResourcePlansTemplate",
            _$parentName: "ResourcePlans",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.ResourcePlan,
            value: lightSwitchApplication.ResourcePlan
        },
        WeekEndingDate: {
            _$class: msls.ContentItem,
            _$name: "WeekEndingDate",
            _$parentName: "ResourcePlansTemplate",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.ResourcePlan,
            value: Date
        },
        Person3: {
            _$class: msls.ContentItem,
            _$name: "Person3",
            _$parentName: "ResourcePlansTemplate",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.ResourcePlan,
            value: lightSwitchApplication.Person
        },
        Person3Template: {
            _$class: msls.ContentItem,
            _$name: "Person3Template",
            _$parentName: "Person3",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.Person,
            value: lightSwitchApplication.Person
        },
        Blocks: {
            _$class: msls.ContentItem,
            _$name: "Blocks",
            _$parentName: "ResourcePlansTemplate",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.ResourcePlan,
            value: Number
        },
        ResourcePlanComments: {
            _$class: msls.ContentItem,
            _$name: "ResourcePlanComments",
            _$parentName: "ResourcePlansTemplate",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.ResourcePlan,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProject
        },
        Filter: {
            _$class: msls.ContentItem,
            _$name: "Filter",
            _$parentName: "Popups",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.AddEditProject,
            value: lightSwitchApplication.AddEditProject
        },
        PersonName1: {
            _$class: msls.ContentItem,
            _$name: "PersonName1",
            _$parentName: "Filter",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.AddEditProject,
            value: String
        },
        BillingStatusName1: {
            _$class: msls.ContentItem,
            _$name: "BillingStatusName1",
            _$parentName: "Filter",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.AddEditProject,
            value: String
        },
        StartDate: {
            _$class: msls.ContentItem,
            _$name: "StartDate",
            _$parentName: "Filter",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.AddEditProject,
            value: Date
        },
        EndDate: {
            _$class: msls.ContentItem,
            _$name: "EndDate",
            _$parentName: "Filter",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.AddEditProject,
            value: Date
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
        /// Called after the ProjectCap content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectCap_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("ProjectCap"); }],
        /// <field>
        /// Called after the MonthlyCap content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthlyCap_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("MonthlyCap"); }],
        /// <field>
        /// Called after the AdminProject content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AdminProject_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("AdminProject"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("right"); }],
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
        /// Called after the CommPercent content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CommPercent_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("CommPercent"); }],
        /// <field>
        /// Called after the Timesheets content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Timesheets_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("Timesheets"); }],
        /// <field>
        /// Called after the TimesheetDetails content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetDetails_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("TimesheetDetails"); }],
        /// <field>
        /// Called after the TimesheetDetailsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetDetailsTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("TimesheetDetailsTemplate"); }],
        /// <field>
        /// Called after the DimDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DimDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("DimDate"); }],
        /// <field>
        /// Called after the Person1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Person1_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("Person1"); }],
        /// <field>
        /// Called after the Comments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Comments_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("Comments"); }],
        /// <field>
        /// Called after the Hours content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Hours_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("Hours"); }],
        /// <field>
        /// Called after the TypeOfWork content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TypeOfWork_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("TypeOfWork"); }],
        /// <field>
        /// Called after the Resources content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Resources_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("Resources"); }],
        /// <field>
        /// Called after the ResourcePlans content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ResourcePlans_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("ResourcePlans"); }],
        /// <field>
        /// Called after the ResourcePlansTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ResourcePlansTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("ResourcePlansTemplate"); }],
        /// <field>
        /// Called after the WeekEndingDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WeekEndingDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("WeekEndingDate"); }],
        /// <field>
        /// Called after the Person3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Person3_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("Person3"); }],
        /// <field>
        /// Called after the Person3Template content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Person3Template_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("Person3Template"); }],
        /// <field>
        /// Called after the Blocks content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Blocks_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("Blocks"); }],
        /// <field>
        /// Called after the ResourcePlanComments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ResourcePlanComments_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("ResourcePlanComments"); }],
        /// <field>
        /// Called after the Filter content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Filter_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("Filter"); }],
        /// <field>
        /// Called after the PersonName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PersonName1_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("PersonName1"); }],
        /// <field>
        /// Called after the BillingStatusName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingStatusName1_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("BillingStatusName1"); }],
        /// <field>
        /// Called after the StartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StartDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("StartDate"); }],
        /// <field>
        /// Called after the EndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EndDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("EndDate"); }]
    });

    lightSwitchApplication.AddEditResourcePlan.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditResourcePlan
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditResourcePlan,
            data: lightSwitchApplication.AddEditResourcePlan,
            value: lightSwitchApplication.AddEditResourcePlan
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditResourcePlan,
            data: lightSwitchApplication.AddEditResourcePlan,
            value: lightSwitchApplication.ResourcePlan
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditResourcePlan,
            data: lightSwitchApplication.ResourcePlan,
            value: lightSwitchApplication.ResourcePlan
        },
        ResourcePlanComments: {
            _$class: msls.ContentItem,
            _$name: "ResourcePlanComments",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditResourcePlan,
            data: lightSwitchApplication.ResourcePlan,
            value: String
        },
        WeekEndingDate: {
            _$class: msls.ContentItem,
            _$name: "WeekEndingDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditResourcePlan,
            data: lightSwitchApplication.ResourcePlan,
            value: Date
        },
        Person: {
            _$class: msls.ContentItem,
            _$name: "Person",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditResourcePlan,
            data: lightSwitchApplication.ResourcePlan,
            value: lightSwitchApplication.Person
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Person",
            screen: lightSwitchApplication.AddEditResourcePlan,
            data: lightSwitchApplication.Person,
            value: lightSwitchApplication.Person
        },
        Project: {
            _$class: msls.ContentItem,
            _$name: "Project",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditResourcePlan,
            data: lightSwitchApplication.ResourcePlan,
            value: lightSwitchApplication.Project
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "Project",
            screen: lightSwitchApplication.AddEditResourcePlan,
            data: lightSwitchApplication.Project,
            value: lightSwitchApplication.Project
        },
        Blocks: {
            _$class: msls.ContentItem,
            _$name: "Blocks",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditResourcePlan,
            data: lightSwitchApplication.ResourcePlan,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditResourcePlan
        },
        ProjectFilter: {
            _$class: msls.ContentItem,
            _$name: "ProjectFilter",
            _$parentName: "Popups",
            screen: lightSwitchApplication.AddEditResourcePlan,
            data: lightSwitchApplication.AddEditResourcePlan,
            value: lightSwitchApplication.AddEditResourcePlan
        },
        Client_Project: {
            _$class: msls.ContentItem,
            _$name: "Client_Project",
            _$parentName: "ProjectFilter",
            screen: lightSwitchApplication.AddEditResourcePlan,
            data: lightSwitchApplication.AddEditResourcePlan,
            value: String
        },
        AM: {
            _$class: msls.ContentItem,
            _$name: "AM",
            _$parentName: "ProjectFilter",
            screen: lightSwitchApplication.AddEditResourcePlan,
            data: lightSwitchApplication.AddEditResourcePlan,
            value: String
        },
        Billable: {
            _$class: msls.ContentItem,
            _$name: "Billable",
            _$parentName: "ProjectFilter",
            screen: lightSwitchApplication.AddEditResourcePlan,
            data: lightSwitchApplication.AddEditResourcePlan,
            value: lightSwitchApplication.BillingStatus
        },
        BillingStatus: {
            _$class: msls.ContentItem,
            _$name: "BillingStatus",
            _$parentName: "Billable",
            screen: lightSwitchApplication.AddEditResourcePlan,
            data: lightSwitchApplication.BillingStatus,
            value: lightSwitchApplication.BillingStatus
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditResourcePlan, {
        /// <field>
        /// Called when a new AddEditResourcePlan screen is created.
        /// <br/>created(msls.application.AddEditResourcePlan screen)
        /// </field>
        created: [lightSwitchApplication.AddEditResourcePlan],
        /// <field>
        /// Called before changes on an active AddEditResourcePlan screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditResourcePlan screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditResourcePlan],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditResourcePlan().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditResourcePlan().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditResourcePlan().findContentItem("left"); }],
        /// <field>
        /// Called after the ResourcePlanComments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ResourcePlanComments_postRender: [$element, function () { return new lightSwitchApplication.AddEditResourcePlan().findContentItem("ResourcePlanComments"); }],
        /// <field>
        /// Called after the WeekEndingDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WeekEndingDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditResourcePlan().findContentItem("WeekEndingDate"); }],
        /// <field>
        /// Called after the Person content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Person_postRender: [$element, function () { return new lightSwitchApplication.AddEditResourcePlan().findContentItem("Person"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditResourcePlan().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Project content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Project_postRender: [$element, function () { return new lightSwitchApplication.AddEditResourcePlan().findContentItem("Project"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditResourcePlan().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the Blocks content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Blocks_postRender: [$element, function () { return new lightSwitchApplication.AddEditResourcePlan().findContentItem("Blocks"); }],
        /// <field>
        /// Called after the ProjectFilter content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectFilter_postRender: [$element, function () { return new lightSwitchApplication.AddEditResourcePlan().findContentItem("ProjectFilter"); }],
        /// <field>
        /// Called after the Client_Project content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Client_Project_postRender: [$element, function () { return new lightSwitchApplication.AddEditResourcePlan().findContentItem("Client_Project"); }],
        /// <field>
        /// Called after the AM content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AM_postRender: [$element, function () { return new lightSwitchApplication.AddEditResourcePlan().findContentItem("AM"); }],
        /// <field>
        /// Called after the Billable content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Billable_postRender: [$element, function () { return new lightSwitchApplication.AddEditResourcePlan().findContentItem("Billable"); }],
        /// <field>
        /// Called after the BillingStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingStatus_postRender: [$element, function () { return new lightSwitchApplication.AddEditResourcePlan().findContentItem("BillingStatus"); }]
    });

    lightSwitchApplication.AddEditResourcePlanRange.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditResourcePlanRange
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditResourcePlanRange,
            data: lightSwitchApplication.AddEditResourcePlanRange,
            value: lightSwitchApplication.AddEditResourcePlanRange
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditResourcePlanRange,
            data: lightSwitchApplication.AddEditResourcePlanRange,
            value: lightSwitchApplication.ResourcePlanRange
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditResourcePlanRange,
            data: lightSwitchApplication.ResourcePlanRange,
            value: lightSwitchApplication.ResourcePlanRange
        },
        Comments: {
            _$class: msls.ContentItem,
            _$name: "Comments",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditResourcePlanRange,
            data: lightSwitchApplication.ResourcePlanRange,
            value: String
        },
        Person: {
            _$class: msls.ContentItem,
            _$name: "Person",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditResourcePlanRange,
            data: lightSwitchApplication.ResourcePlanRange,
            value: lightSwitchApplication.Person
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Person",
            screen: lightSwitchApplication.AddEditResourcePlanRange,
            data: lightSwitchApplication.Person,
            value: lightSwitchApplication.Person
        },
        Project: {
            _$class: msls.ContentItem,
            _$name: "Project",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditResourcePlanRange,
            data: lightSwitchApplication.ResourcePlanRange,
            value: lightSwitchApplication.Project
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "Project",
            screen: lightSwitchApplication.AddEditResourcePlanRange,
            data: lightSwitchApplication.Project,
            value: lightSwitchApplication.Project
        },
        StartDate: {
            _$class: msls.ContentItem,
            _$name: "StartDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditResourcePlanRange,
            data: lightSwitchApplication.ResourcePlanRange,
            value: Date
        },
        EndDate: {
            _$class: msls.ContentItem,
            _$name: "EndDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditResourcePlanRange,
            data: lightSwitchApplication.ResourcePlanRange,
            value: Date
        },
        Blocks: {
            _$class: msls.ContentItem,
            _$name: "Blocks",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditResourcePlanRange,
            data: lightSwitchApplication.ResourcePlanRange,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditResourcePlanRange
        },
        FilterProject: {
            _$class: msls.ContentItem,
            _$name: "FilterProject",
            _$parentName: "Popups",
            screen: lightSwitchApplication.AddEditResourcePlanRange,
            data: lightSwitchApplication.AddEditResourcePlanRange,
            value: lightSwitchApplication.AddEditResourcePlanRange
        },
        Client_Project: {
            _$class: msls.ContentItem,
            _$name: "Client_Project",
            _$parentName: "FilterProject",
            screen: lightSwitchApplication.AddEditResourcePlanRange,
            data: lightSwitchApplication.AddEditResourcePlanRange,
            value: String
        },
        AM: {
            _$class: msls.ContentItem,
            _$name: "AM",
            _$parentName: "FilterProject",
            screen: lightSwitchApplication.AddEditResourcePlanRange,
            data: lightSwitchApplication.AddEditResourcePlanRange,
            value: String
        },
        Billable: {
            _$class: msls.ContentItem,
            _$name: "Billable",
            _$parentName: "FilterProject",
            screen: lightSwitchApplication.AddEditResourcePlanRange,
            data: lightSwitchApplication.AddEditResourcePlanRange,
            value: lightSwitchApplication.BillingStatus
        },
        BillingStatus: {
            _$class: msls.ContentItem,
            _$name: "BillingStatus",
            _$parentName: "Billable",
            screen: lightSwitchApplication.AddEditResourcePlanRange,
            data: lightSwitchApplication.BillingStatus,
            value: lightSwitchApplication.BillingStatus
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditResourcePlanRange, {
        /// <field>
        /// Called when a new AddEditResourcePlanRange screen is created.
        /// <br/>created(msls.application.AddEditResourcePlanRange screen)
        /// </field>
        created: [lightSwitchApplication.AddEditResourcePlanRange],
        /// <field>
        /// Called before changes on an active AddEditResourcePlanRange screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditResourcePlanRange screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditResourcePlanRange],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditResourcePlanRange().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditResourcePlanRange().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditResourcePlanRange().findContentItem("left"); }],
        /// <field>
        /// Called after the Comments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Comments_postRender: [$element, function () { return new lightSwitchApplication.AddEditResourcePlanRange().findContentItem("Comments"); }],
        /// <field>
        /// Called after the Person content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Person_postRender: [$element, function () { return new lightSwitchApplication.AddEditResourcePlanRange().findContentItem("Person"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditResourcePlanRange().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Project content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Project_postRender: [$element, function () { return new lightSwitchApplication.AddEditResourcePlanRange().findContentItem("Project"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditResourcePlanRange().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the StartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StartDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditResourcePlanRange().findContentItem("StartDate"); }],
        /// <field>
        /// Called after the EndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EndDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditResourcePlanRange().findContentItem("EndDate"); }],
        /// <field>
        /// Called after the Blocks content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Blocks_postRender: [$element, function () { return new lightSwitchApplication.AddEditResourcePlanRange().findContentItem("Blocks"); }],
        /// <field>
        /// Called after the FilterProject content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FilterProject_postRender: [$element, function () { return new lightSwitchApplication.AddEditResourcePlanRange().findContentItem("FilterProject"); }],
        /// <field>
        /// Called after the Client_Project content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Client_Project_postRender: [$element, function () { return new lightSwitchApplication.AddEditResourcePlanRange().findContentItem("Client_Project"); }],
        /// <field>
        /// Called after the AM content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AM_postRender: [$element, function () { return new lightSwitchApplication.AddEditResourcePlanRange().findContentItem("AM"); }],
        /// <field>
        /// Called after the Billable content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Billable_postRender: [$element, function () { return new lightSwitchApplication.AddEditResourcePlanRange().findContentItem("Billable"); }],
        /// <field>
        /// Called after the BillingStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingStatus_postRender: [$element, function () { return new lightSwitchApplication.AddEditResourcePlanRange().findContentItem("BillingStatus"); }]
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
        Comments: {
            _$class: msls.ContentItem,
            _$name: "Comments",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditTimesheet,
            data: lightSwitchApplication.TimesheetDetail,
            value: String
        },
        Hours: {
            _$class: msls.ContentItem,
            _$name: "Hours",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditTimesheet,
            data: lightSwitchApplication.TimesheetDetail,
            value: String
        },
        AMComments: {
            _$class: msls.ContentItem,
            _$name: "AMComments",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditTimesheet,
            data: lightSwitchApplication.TimesheetDetail,
            value: String
        },
        BillingStatus: {
            _$class: msls.ContentItem,
            _$name: "BillingStatus",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditTimesheet,
            data: lightSwitchApplication.TimesheetDetail,
            value: lightSwitchApplication.BillingStatus
        },
        BillingStatusTemplate: {
            _$class: msls.ContentItem,
            _$name: "BillingStatusTemplate",
            _$parentName: "BillingStatus",
            screen: lightSwitchApplication.AddEditTimesheet,
            data: lightSwitchApplication.BillingStatus,
            value: lightSwitchApplication.BillingStatus
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
        TimesheetDetailName_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheet().findContentItem("TimesheetDetailName"); }],
        /// <field>
        /// Called after the Comments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Comments_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheet().findContentItem("Comments"); }],
        /// <field>
        /// Called after the Hours content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Hours_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheet().findContentItem("Hours"); }],
        /// <field>
        /// Called after the AMComments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AMComments_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheet().findContentItem("AMComments"); }],
        /// <field>
        /// Called after the BillingStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingStatus_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheet().findContentItem("BillingStatus"); }],
        /// <field>
        /// Called after the BillingStatusTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingStatusTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTimesheet().findContentItem("BillingStatusTemplate"); }]
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

    lightSwitchApplication.BrowseBillingDetailNoRole.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseBillingDetailNoRole
        },
        BillingDetailList: {
            _$class: msls.ContentItem,
            _$name: "BillingDetailList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseBillingDetailNoRole,
            data: lightSwitchApplication.BrowseBillingDetailNoRole,
            value: lightSwitchApplication.BrowseBillingDetailNoRole
        },
        BillingDetail: {
            _$class: msls.ContentItem,
            _$name: "BillingDetail",
            _$parentName: "BillingDetailList",
            screen: lightSwitchApplication.BrowseBillingDetailNoRole,
            data: lightSwitchApplication.BrowseBillingDetailNoRole,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseBillingDetailNoRole,
                _$entry: {
                    elementType: lightSwitchApplication.BillingDetail
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "BillingDetail",
            screen: lightSwitchApplication.BrowseBillingDetailNoRole,
            data: lightSwitchApplication.BillingDetail,
            value: lightSwitchApplication.BillingDetail
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseBillingDetailNoRole
        },
        Filter: {
            _$class: msls.ContentItem,
            _$name: "Filter",
            _$parentName: "Popups",
            screen: lightSwitchApplication.BrowseBillingDetailNoRole,
            data: lightSwitchApplication.BrowseBillingDetailNoRole,
            value: lightSwitchApplication.BrowseBillingDetailNoRole
        },
        ClientName: {
            _$class: msls.ContentItem,
            _$name: "ClientName",
            _$parentName: "Filter",
            screen: lightSwitchApplication.BrowseBillingDetailNoRole,
            data: lightSwitchApplication.BrowseBillingDetailNoRole,
            value: String
        },
        PersonName: {
            _$class: msls.ContentItem,
            _$name: "PersonName",
            _$parentName: "Filter",
            screen: lightSwitchApplication.BrowseBillingDetailNoRole,
            data: lightSwitchApplication.BrowseBillingDetailNoRole,
            value: String
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseBillingDetailNoRole, {
        /// <field>
        /// Called when a new BrowseBillingDetailNoRole screen is created.
        /// <br/>created(msls.application.BrowseBillingDetailNoRole screen)
        /// </field>
        created: [lightSwitchApplication.BrowseBillingDetailNoRole],
        /// <field>
        /// Called before changes on an active BrowseBillingDetailNoRole screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseBillingDetailNoRole screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseBillingDetailNoRole],
        /// <field>
        /// Called after the BillingDetailList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingDetailList_postRender: [$element, function () { return new lightSwitchApplication.BrowseBillingDetailNoRole().findContentItem("BillingDetailList"); }],
        /// <field>
        /// Called after the BillingDetail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingDetail_postRender: [$element, function () { return new lightSwitchApplication.BrowseBillingDetailNoRole().findContentItem("BillingDetail"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseBillingDetailNoRole().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Filter content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Filter_postRender: [$element, function () { return new lightSwitchApplication.BrowseBillingDetailNoRole().findContentItem("Filter"); }],
        /// <field>
        /// Called after the ClientName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientName_postRender: [$element, function () { return new lightSwitchApplication.BrowseBillingDetailNoRole().findContentItem("ClientName"); }],
        /// <field>
        /// Called after the PersonName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PersonName_postRender: [$element, function () { return new lightSwitchApplication.BrowseBillingDetailNoRole().findContentItem("PersonName"); }]
    });

    lightSwitchApplication.BrowseBillingDetailsSorted.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseBillingDetailsSorted
        },
        BillingDetailList: {
            _$class: msls.ContentItem,
            _$name: "BillingDetailList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseBillingDetailsSorted,
            data: lightSwitchApplication.BrowseBillingDetailsSorted,
            value: lightSwitchApplication.BrowseBillingDetailsSorted
        },
        BillingDetail: {
            _$class: msls.ContentItem,
            _$name: "BillingDetail",
            _$parentName: "BillingDetailList",
            screen: lightSwitchApplication.BrowseBillingDetailsSorted,
            data: lightSwitchApplication.BrowseBillingDetailsSorted,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseBillingDetailsSorted,
                _$entry: {
                    elementType: lightSwitchApplication.BillingDetail
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "BillingDetail",
            screen: lightSwitchApplication.BrowseBillingDetailsSorted,
            data: lightSwitchApplication.BillingDetail,
            value: lightSwitchApplication.BillingDetail
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseBillingDetailsSorted
        },
        Filter: {
            _$class: msls.ContentItem,
            _$name: "Filter",
            _$parentName: "Popups",
            screen: lightSwitchApplication.BrowseBillingDetailsSorted,
            data: lightSwitchApplication.BrowseBillingDetailsSorted,
            value: lightSwitchApplication.BrowseBillingDetailsSorted
        },
        ClientName1: {
            _$class: msls.ContentItem,
            _$name: "ClientName1",
            _$parentName: "Filter",
            screen: lightSwitchApplication.BrowseBillingDetailsSorted,
            data: lightSwitchApplication.BrowseBillingDetailsSorted,
            value: String
        },
        PersonName1: {
            _$class: msls.ContentItem,
            _$name: "PersonName1",
            _$parentName: "Filter",
            screen: lightSwitchApplication.BrowseBillingDetailsSorted,
            data: lightSwitchApplication.BrowseBillingDetailsSorted,
            value: String
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseBillingDetailsSorted, {
        /// <field>
        /// Called when a new BrowseBillingDetailsSorted screen is created.
        /// <br/>created(msls.application.BrowseBillingDetailsSorted screen)
        /// </field>
        created: [lightSwitchApplication.BrowseBillingDetailsSorted],
        /// <field>
        /// Called before changes on an active BrowseBillingDetailsSorted screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseBillingDetailsSorted screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseBillingDetailsSorted],
        /// <field>
        /// Called after the BillingDetailList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingDetailList_postRender: [$element, function () { return new lightSwitchApplication.BrowseBillingDetailsSorted().findContentItem("BillingDetailList"); }],
        /// <field>
        /// Called after the BillingDetail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingDetail_postRender: [$element, function () { return new lightSwitchApplication.BrowseBillingDetailsSorted().findContentItem("BillingDetail"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseBillingDetailsSorted().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Filter content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Filter_postRender: [$element, function () { return new lightSwitchApplication.BrowseBillingDetailsSorted().findContentItem("Filter"); }],
        /// <field>
        /// Called after the ClientName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientName1_postRender: [$element, function () { return new lightSwitchApplication.BrowseBillingDetailsSorted().findContentItem("ClientName1"); }],
        /// <field>
        /// Called after the PersonName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PersonName1_postRender: [$element, function () { return new lightSwitchApplication.BrowseBillingDetailsSorted().findContentItem("PersonName1"); }]
    });

    lightSwitchApplication.BrowseBillingStatus.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseBillingStatus
        },
        BillingStatusList: {
            _$class: msls.ContentItem,
            _$name: "BillingStatusList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseBillingStatus,
            data: lightSwitchApplication.BrowseBillingStatus,
            value: lightSwitchApplication.BrowseBillingStatus
        },
        BillingStatu: {
            _$class: msls.ContentItem,
            _$name: "BillingStatu",
            _$parentName: "BillingStatusList",
            screen: lightSwitchApplication.BrowseBillingStatus,
            data: lightSwitchApplication.BrowseBillingStatus,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseBillingStatus,
                _$entry: {
                    elementType: lightSwitchApplication.BillingStatus
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "BillingStatu",
            screen: lightSwitchApplication.BrowseBillingStatus,
            data: lightSwitchApplication.BillingStatus,
            value: lightSwitchApplication.BillingStatus
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseBillingStatus
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseBillingStatus, {
        /// <field>
        /// Called when a new BrowseBillingStatus screen is created.
        /// <br/>created(msls.application.BrowseBillingStatus screen)
        /// </field>
        created: [lightSwitchApplication.BrowseBillingStatus],
        /// <field>
        /// Called before changes on an active BrowseBillingStatus screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseBillingStatus screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseBillingStatus],
        /// <field>
        /// Called after the BillingStatusList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingStatusList_postRender: [$element, function () { return new lightSwitchApplication.BrowseBillingStatus().findContentItem("BillingStatusList"); }],
        /// <field>
        /// Called after the BillingStatu content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingStatu_postRender: [$element, function () { return new lightSwitchApplication.BrowseBillingStatus().findContentItem("BillingStatu"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseBillingStatus().findContentItem("RowTemplate"); }]
    });

    lightSwitchApplication.BrowseClientRoles.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseClientRoles
        },
        ClientRoleList: {
            _$class: msls.ContentItem,
            _$name: "ClientRoleList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseClientRoles,
            data: lightSwitchApplication.BrowseClientRoles,
            value: lightSwitchApplication.BrowseClientRoles
        },
        ClientRole: {
            _$class: msls.ContentItem,
            _$name: "ClientRole",
            _$parentName: "ClientRoleList",
            screen: lightSwitchApplication.BrowseClientRoles,
            data: lightSwitchApplication.BrowseClientRoles,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseClientRoles,
                _$entry: {
                    elementType: lightSwitchApplication.ClientRole
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "ClientRole",
            screen: lightSwitchApplication.BrowseClientRoles,
            data: lightSwitchApplication.ClientRole,
            value: lightSwitchApplication.ClientRole
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseClientRoles
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseClientRoles, {
        /// <field>
        /// Called when a new BrowseClientRoles screen is created.
        /// <br/>created(msls.application.BrowseClientRoles screen)
        /// </field>
        created: [lightSwitchApplication.BrowseClientRoles],
        /// <field>
        /// Called before changes on an active BrowseClientRoles screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseClientRoles screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseClientRoles],
        /// <field>
        /// Called after the ClientRoleList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientRoleList_postRender: [$element, function () { return new lightSwitchApplication.BrowseClientRoles().findContentItem("ClientRoleList"); }],
        /// <field>
        /// Called after the ClientRole content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientRole_postRender: [$element, function () { return new lightSwitchApplication.BrowseClientRoles().findContentItem("ClientRole"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseClientRoles().findContentItem("RowTemplate"); }]
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

    lightSwitchApplication.BrowseInvoiceStatus.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseInvoiceStatus
        },
        InvoiceStatuList: {
            _$class: msls.ContentItem,
            _$name: "InvoiceStatuList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseInvoiceStatus,
            data: lightSwitchApplication.BrowseInvoiceStatus,
            value: lightSwitchApplication.BrowseInvoiceStatus
        },
        InvoiceStatu: {
            _$class: msls.ContentItem,
            _$name: "InvoiceStatu",
            _$parentName: "InvoiceStatuList",
            screen: lightSwitchApplication.BrowseInvoiceStatus,
            data: lightSwitchApplication.BrowseInvoiceStatus,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseInvoiceStatus,
                _$entry: {
                    elementType: lightSwitchApplication.InvoiceStatu
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "InvoiceStatu",
            screen: lightSwitchApplication.BrowseInvoiceStatus,
            data: lightSwitchApplication.InvoiceStatu,
            value: lightSwitchApplication.InvoiceStatu
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseInvoiceStatus
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseInvoiceStatus, {
        /// <field>
        /// Called when a new BrowseInvoiceStatus screen is created.
        /// <br/>created(msls.application.BrowseInvoiceStatus screen)
        /// </field>
        created: [lightSwitchApplication.BrowseInvoiceStatus],
        /// <field>
        /// Called before changes on an active BrowseInvoiceStatus screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseInvoiceStatus screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseInvoiceStatus],
        /// <field>
        /// Called after the InvoiceStatuList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InvoiceStatuList_postRender: [$element, function () { return new lightSwitchApplication.BrowseInvoiceStatus().findContentItem("InvoiceStatuList"); }],
        /// <field>
        /// Called after the InvoiceStatu content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InvoiceStatu_postRender: [$element, function () { return new lightSwitchApplication.BrowseInvoiceStatus().findContentItem("InvoiceStatu"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseInvoiceStatus().findContentItem("RowTemplate"); }]
    });

    lightSwitchApplication.BrowsePeople.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowsePeople
        },
        PersonList: {
            _$class: msls.ContentItem,
            _$name: "PersonList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowsePeople,
            data: lightSwitchApplication.BrowsePeople,
            value: lightSwitchApplication.BrowsePeople
        },
        Person: {
            _$class: msls.ContentItem,
            _$name: "Person",
            _$parentName: "PersonList",
            screen: lightSwitchApplication.BrowsePeople,
            data: lightSwitchApplication.BrowsePeople,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowsePeople,
                _$entry: {
                    elementType: lightSwitchApplication.Person
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Person",
            screen: lightSwitchApplication.BrowsePeople,
            data: lightSwitchApplication.Person,
            value: lightSwitchApplication.Person
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowsePeople
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowsePeople, {
        /// <field>
        /// Called when a new BrowsePeople screen is created.
        /// <br/>created(msls.application.BrowsePeople screen)
        /// </field>
        created: [lightSwitchApplication.BrowsePeople],
        /// <field>
        /// Called before changes on an active BrowsePeople screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowsePeople screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowsePeople],
        /// <field>
        /// Called after the PersonList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PersonList_postRender: [$element, function () { return new lightSwitchApplication.BrowsePeople().findContentItem("PersonList"); }],
        /// <field>
        /// Called after the Person content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Person_postRender: [$element, function () { return new lightSwitchApplication.BrowsePeople().findContentItem("Person"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowsePeople().findContentItem("RowTemplate"); }]
    });

    lightSwitchApplication.BrowseProjects.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseProjects
        },
        ProjectList: {
            _$class: msls.ContentItem,
            _$name: "ProjectList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseProjects,
            data: lightSwitchApplication.BrowseProjects,
            value: lightSwitchApplication.BrowseProjects
        },
        ProjectsFilter: {
            _$class: msls.ContentItem,
            _$name: "ProjectsFilter",
            _$parentName: "ProjectList",
            screen: lightSwitchApplication.BrowseProjects,
            data: lightSwitchApplication.BrowseProjects,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseProjects,
                _$entry: {
                    elementType: lightSwitchApplication.Project
                }
            }
        },
        ProjectsFilterTemplate: {
            _$class: msls.ContentItem,
            _$name: "ProjectsFilterTemplate",
            _$parentName: "ProjectsFilter",
            screen: lightSwitchApplication.BrowseProjects,
            data: lightSwitchApplication.Project,
            value: lightSwitchApplication.Project
        },
        ProjectName1: {
            _$class: msls.ContentItem,
            _$name: "ProjectName1",
            _$parentName: "ProjectsFilterTemplate",
            screen: lightSwitchApplication.BrowseProjects,
            data: lightSwitchApplication.Project,
            value: String
        },
        Client: {
            _$class: msls.ContentItem,
            _$name: "Client",
            _$parentName: "ProjectsFilterTemplate",
            screen: lightSwitchApplication.BrowseProjects,
            data: lightSwitchApplication.Project,
            value: lightSwitchApplication.Client
        },
        ClientName: {
            _$class: msls.ContentItem,
            _$name: "ClientName",
            _$parentName: "Client",
            screen: lightSwitchApplication.BrowseProjects,
            data: lightSwitchApplication.Client,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseProjects
        },
        Filter: {
            _$class: msls.ContentItem,
            _$name: "Filter",
            _$parentName: "Popups",
            screen: lightSwitchApplication.BrowseProjects,
            data: lightSwitchApplication.BrowseProjects,
            value: lightSwitchApplication.BrowseProjects
        },
        ClientName1: {
            _$class: msls.ContentItem,
            _$name: "ClientName1",
            _$parentName: "Filter",
            screen: lightSwitchApplication.BrowseProjects,
            data: lightSwitchApplication.BrowseProjects,
            value: String
        },
        ProjectName: {
            _$class: msls.ContentItem,
            _$name: "ProjectName",
            _$parentName: "Filter",
            screen: lightSwitchApplication.BrowseProjects,
            data: lightSwitchApplication.BrowseProjects,
            value: String
        },
        AM: {
            _$class: msls.ContentItem,
            _$name: "AM",
            _$parentName: "Filter",
            screen: lightSwitchApplication.BrowseProjects,
            data: lightSwitchApplication.BrowseProjects,
            value: String
        },
        BillingStatusID: {
            _$class: msls.ContentItem,
            _$name: "BillingStatusID",
            _$parentName: "Filter",
            screen: lightSwitchApplication.BrowseProjects,
            data: lightSwitchApplication.BrowseProjects,
            value: lightSwitchApplication.BillingStatus
        },
        BillingStatus: {
            _$class: msls.ContentItem,
            _$name: "BillingStatus",
            _$parentName: "BillingStatusID",
            screen: lightSwitchApplication.BrowseProjects,
            data: lightSwitchApplication.BillingStatus,
            value: lightSwitchApplication.BillingStatus
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseProjects, {
        /// <field>
        /// Called when a new BrowseProjects screen is created.
        /// <br/>created(msls.application.BrowseProjects screen)
        /// </field>
        created: [lightSwitchApplication.BrowseProjects],
        /// <field>
        /// Called before changes on an active BrowseProjects screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseProjects screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseProjects],
        /// <field>
        /// Called after the ProjectList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectList_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjects().findContentItem("ProjectList"); }],
        /// <field>
        /// Called after the ProjectsFilter content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectsFilter_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjects().findContentItem("ProjectsFilter"); }],
        /// <field>
        /// Called after the ProjectsFilterTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectsFilterTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjects().findContentItem("ProjectsFilterTemplate"); }],
        /// <field>
        /// Called after the ProjectName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectName1_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjects().findContentItem("ProjectName1"); }],
        /// <field>
        /// Called after the Client content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Client_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjects().findContentItem("Client"); }],
        /// <field>
        /// Called after the ClientName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientName_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjects().findContentItem("ClientName"); }],
        /// <field>
        /// Called after the Filter content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Filter_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjects().findContentItem("Filter"); }],
        /// <field>
        /// Called after the ClientName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientName1_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjects().findContentItem("ClientName1"); }],
        /// <field>
        /// Called after the ProjectName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectName_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjects().findContentItem("ProjectName"); }],
        /// <field>
        /// Called after the AM content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AM_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjects().findContentItem("AM"); }],
        /// <field>
        /// Called after the BillingStatusID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingStatusID_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjects().findContentItem("BillingStatusID"); }],
        /// <field>
        /// Called after the BillingStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingStatus_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjects().findContentItem("BillingStatus"); }]
    });

    lightSwitchApplication.BrowseResourcePlanSorted.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseResourcePlanSorted
        },
        ResourcePlanList: {
            _$class: msls.ContentItem,
            _$name: "ResourcePlanList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseResourcePlanSorted,
            data: lightSwitchApplication.BrowseResourcePlanSorted,
            value: lightSwitchApplication.BrowseResourcePlanSorted
        },
        ResourcePlan: {
            _$class: msls.ContentItem,
            _$name: "ResourcePlan",
            _$parentName: "ResourcePlanList",
            screen: lightSwitchApplication.BrowseResourcePlanSorted,
            data: lightSwitchApplication.BrowseResourcePlanSorted,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseResourcePlanSorted,
                _$entry: {
                    elementType: lightSwitchApplication.ResourcePlan
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "ResourcePlan",
            screen: lightSwitchApplication.BrowseResourcePlanSorted,
            data: lightSwitchApplication.ResourcePlan,
            value: lightSwitchApplication.ResourcePlan
        },
        ResourcePlanComments: {
            _$class: msls.ContentItem,
            _$name: "ResourcePlanComments",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseResourcePlanSorted,
            data: lightSwitchApplication.ResourcePlan,
            value: String
        },
        WeekEndingDate: {
            _$class: msls.ContentItem,
            _$name: "WeekEndingDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseResourcePlanSorted,
            data: lightSwitchApplication.ResourcePlan,
            value: Date
        },
        Person: {
            _$class: msls.ContentItem,
            _$name: "Person",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseResourcePlanSorted,
            data: lightSwitchApplication.ResourcePlan,
            value: lightSwitchApplication.Person
        },
        Project: {
            _$class: msls.ContentItem,
            _$name: "Project",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseResourcePlanSorted,
            data: lightSwitchApplication.ResourcePlan,
            value: lightSwitchApplication.Project
        },
        Blocks: {
            _$class: msls.ContentItem,
            _$name: "Blocks",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseResourcePlanSorted,
            data: lightSwitchApplication.ResourcePlan,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseResourcePlanSorted
        },
        Filter: {
            _$class: msls.ContentItem,
            _$name: "Filter",
            _$parentName: "Popups",
            screen: lightSwitchApplication.BrowseResourcePlanSorted,
            data: lightSwitchApplication.BrowseResourcePlanSorted,
            value: lightSwitchApplication.BrowseResourcePlanSorted
        },
        ResourcePlanPersonName: {
            _$class: msls.ContentItem,
            _$name: "ResourcePlanPersonName",
            _$parentName: "Filter",
            screen: lightSwitchApplication.BrowseResourcePlanSorted,
            data: lightSwitchApplication.BrowseResourcePlanSorted,
            value: String
        },
        ResourcePlanClientProject: {
            _$class: msls.ContentItem,
            _$name: "ResourcePlanClientProject",
            _$parentName: "Filter",
            screen: lightSwitchApplication.BrowseResourcePlanSorted,
            data: lightSwitchApplication.BrowseResourcePlanSorted,
            value: String
        },
        StartDate: {
            _$class: msls.ContentItem,
            _$name: "StartDate",
            _$parentName: "Filter",
            screen: lightSwitchApplication.BrowseResourcePlanSorted,
            data: lightSwitchApplication.BrowseResourcePlanSorted,
            value: Date
        },
        EndDate: {
            _$class: msls.ContentItem,
            _$name: "EndDate",
            _$parentName: "Filter",
            screen: lightSwitchApplication.BrowseResourcePlanSorted,
            data: lightSwitchApplication.BrowseResourcePlanSorted,
            value: Date
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseResourcePlanSorted, {
        /// <field>
        /// Called when a new BrowseResourcePlanSorted screen is created.
        /// <br/>created(msls.application.BrowseResourcePlanSorted screen)
        /// </field>
        created: [lightSwitchApplication.BrowseResourcePlanSorted],
        /// <field>
        /// Called before changes on an active BrowseResourcePlanSorted screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseResourcePlanSorted screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseResourcePlanSorted],
        /// <field>
        /// Called after the ResourcePlanList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ResourcePlanList_postRender: [$element, function () { return new lightSwitchApplication.BrowseResourcePlanSorted().findContentItem("ResourcePlanList"); }],
        /// <field>
        /// Called after the ResourcePlan content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ResourcePlan_postRender: [$element, function () { return new lightSwitchApplication.BrowseResourcePlanSorted().findContentItem("ResourcePlan"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseResourcePlanSorted().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the ResourcePlanComments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ResourcePlanComments_postRender: [$element, function () { return new lightSwitchApplication.BrowseResourcePlanSorted().findContentItem("ResourcePlanComments"); }],
        /// <field>
        /// Called after the WeekEndingDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WeekEndingDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseResourcePlanSorted().findContentItem("WeekEndingDate"); }],
        /// <field>
        /// Called after the Person content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Person_postRender: [$element, function () { return new lightSwitchApplication.BrowseResourcePlanSorted().findContentItem("Person"); }],
        /// <field>
        /// Called after the Project content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Project_postRender: [$element, function () { return new lightSwitchApplication.BrowseResourcePlanSorted().findContentItem("Project"); }],
        /// <field>
        /// Called after the Blocks content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Blocks_postRender: [$element, function () { return new lightSwitchApplication.BrowseResourcePlanSorted().findContentItem("Blocks"); }],
        /// <field>
        /// Called after the Filter content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Filter_postRender: [$element, function () { return new lightSwitchApplication.BrowseResourcePlanSorted().findContentItem("Filter"); }],
        /// <field>
        /// Called after the ResourcePlanPersonName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ResourcePlanPersonName_postRender: [$element, function () { return new lightSwitchApplication.BrowseResourcePlanSorted().findContentItem("ResourcePlanPersonName"); }],
        /// <field>
        /// Called after the ResourcePlanClientProject content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ResourcePlanClientProject_postRender: [$element, function () { return new lightSwitchApplication.BrowseResourcePlanSorted().findContentItem("ResourcePlanClientProject"); }],
        /// <field>
        /// Called after the StartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StartDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseResourcePlanSorted().findContentItem("StartDate"); }],
        /// <field>
        /// Called after the EndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EndDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseResourcePlanSorted().findContentItem("EndDate"); }]
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

    lightSwitchApplication.BrowseTypesOfWork.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTypesOfWork
        },
        TypeOfWorkList: {
            _$class: msls.ContentItem,
            _$name: "TypeOfWorkList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseTypesOfWork,
            data: lightSwitchApplication.BrowseTypesOfWork,
            value: lightSwitchApplication.BrowseTypesOfWork
        },
        TypeOfWork: {
            _$class: msls.ContentItem,
            _$name: "TypeOfWork",
            _$parentName: "TypeOfWorkList",
            screen: lightSwitchApplication.BrowseTypesOfWork,
            data: lightSwitchApplication.BrowseTypesOfWork,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseTypesOfWork,
                _$entry: {
                    elementType: lightSwitchApplication.TypeOfWork
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "TypeOfWork",
            screen: lightSwitchApplication.BrowseTypesOfWork,
            data: lightSwitchApplication.TypeOfWork,
            value: lightSwitchApplication.TypeOfWork
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTypesOfWork
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseTypesOfWork, {
        /// <field>
        /// Called when a new BrowseTypesOfWork screen is created.
        /// <br/>created(msls.application.BrowseTypesOfWork screen)
        /// </field>
        created: [lightSwitchApplication.BrowseTypesOfWork],
        /// <field>
        /// Called before changes on an active BrowseTypesOfWork screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseTypesOfWork screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseTypesOfWork],
        /// <field>
        /// Called after the TypeOfWorkList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TypeOfWorkList_postRender: [$element, function () { return new lightSwitchApplication.BrowseTypesOfWork().findContentItem("TypeOfWorkList"); }],
        /// <field>
        /// Called after the TypeOfWork content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TypeOfWork_postRender: [$element, function () { return new lightSwitchApplication.BrowseTypesOfWork().findContentItem("TypeOfWork"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseTypesOfWork().findContentItem("RowTemplate"); }]
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
        ShowBrowsePeople: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowsePeople",
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
        ShowBrowseProjects: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseProjects",
            _$parentName: "Timesheets",
            screen: lightSwitchApplication.HomeScreen
        },
        ShowBrowseBillingDetailNoRole: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseBillingDetailNoRole",
            _$parentName: "Timesheets",
            screen: lightSwitchApplication.HomeScreen
        },
        ShowUnallocatedTimesheets: {
            _$class: msls.ContentItem,
            _$name: "ShowUnallocatedTimesheets",
            _$parentName: "Timesheets",
            screen: lightSwitchApplication.HomeScreen
        },
        Admin: {
            _$class: msls.ContentItem,
            _$name: "Admin",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.HomeScreen,
            data: lightSwitchApplication.HomeScreen,
            value: lightSwitchApplication.HomeScreen
        },
        ShowBrowseBillingStatus: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseBillingStatus",
            _$parentName: "Admin",
            screen: lightSwitchApplication.HomeScreen
        },
        ShowBrowseTypeOfWorks: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseTypeOfWorks",
            _$parentName: "Admin",
            screen: lightSwitchApplication.HomeScreen
        },
        ShowBrowseRoles: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseRoles",
            _$parentName: "Admin",
            screen: lightSwitchApplication.HomeScreen
        },
        ShowBrowseInvoiceStatus: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseInvoiceStatus",
            _$parentName: "Admin",
            screen: lightSwitchApplication.HomeScreen
        },
        Resourcing: {
            _$class: msls.ContentItem,
            _$name: "Resourcing",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.HomeScreen,
            data: lightSwitchApplication.HomeScreen,
            value: lightSwitchApplication.HomeScreen
        },
        Table: {
            _$class: msls.ContentItem,
            _$name: "Table",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.HomeScreen,
            data: lightSwitchApplication.HomeScreen,
            value: lightSwitchApplication.HomeScreen
        },
        TimesheetHours: {
            _$class: msls.ContentItem,
            _$name: "TimesheetHours",
            _$parentName: "Table",
            screen: lightSwitchApplication.HomeScreen,
            data: lightSwitchApplication.HomeScreen,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.HomeScreen,
                _$entry: {
                    elementType: lightSwitchApplication.TimesheetHour
                }
            }
        },
        TimesheetHoursTemplate: {
            _$class: msls.ContentItem,
            _$name: "TimesheetHoursTemplate",
            _$parentName: "TimesheetHours",
            screen: lightSwitchApplication.HomeScreen,
            data: lightSwitchApplication.TimesheetHour,
            value: lightSwitchApplication.TimesheetHour
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "TimesheetHoursTemplate",
            screen: lightSwitchApplication.HomeScreen,
            data: lightSwitchApplication.TimesheetHour,
            value: String
        },
        Value: {
            _$class: msls.ContentItem,
            _$name: "Value",
            _$parentName: "TimesheetHoursTemplate",
            screen: lightSwitchApplication.HomeScreen,
            data: lightSwitchApplication.TimesheetHour,
            value: String
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
        /// Called after the ShowBrowsePeople content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowsePeople_postRender: [$element, function () { return new lightSwitchApplication.HomeScreen().findContentItem("ShowBrowsePeople"); }],
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
        /// Called after the ShowBrowseProjects content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseProjects_postRender: [$element, function () { return new lightSwitchApplication.HomeScreen().findContentItem("ShowBrowseProjects"); }],
        /// <field>
        /// Called after the ShowBrowseBillingDetailNoRole content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseBillingDetailNoRole_postRender: [$element, function () { return new lightSwitchApplication.HomeScreen().findContentItem("ShowBrowseBillingDetailNoRole"); }],
        /// <field>
        /// Called after the ShowUnallocatedTimesheets content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowUnallocatedTimesheets_postRender: [$element, function () { return new lightSwitchApplication.HomeScreen().findContentItem("ShowUnallocatedTimesheets"); }],
        /// <field>
        /// Called after the Admin content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Admin_postRender: [$element, function () { return new lightSwitchApplication.HomeScreen().findContentItem("Admin"); }],
        /// <field>
        /// Called after the ShowBrowseBillingStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseBillingStatus_postRender: [$element, function () { return new lightSwitchApplication.HomeScreen().findContentItem("ShowBrowseBillingStatus"); }],
        /// <field>
        /// Called after the ShowBrowseTypeOfWorks content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseTypeOfWorks_postRender: [$element, function () { return new lightSwitchApplication.HomeScreen().findContentItem("ShowBrowseTypeOfWorks"); }],
        /// <field>
        /// Called after the ShowBrowseRoles content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseRoles_postRender: [$element, function () { return new lightSwitchApplication.HomeScreen().findContentItem("ShowBrowseRoles"); }],
        /// <field>
        /// Called after the ShowBrowseInvoiceStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseInvoiceStatus_postRender: [$element, function () { return new lightSwitchApplication.HomeScreen().findContentItem("ShowBrowseInvoiceStatus"); }],
        /// <field>
        /// Called after the Resourcing content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Resourcing_postRender: [$element, function () { return new lightSwitchApplication.HomeScreen().findContentItem("Resourcing"); }],
        /// <field>
        /// Called after the Table content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Table_postRender: [$element, function () { return new lightSwitchApplication.HomeScreen().findContentItem("Table"); }],
        /// <field>
        /// Called to render the TimesheetHours content item.
        /// <br/>render(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetHours_render: [$element, function () { return new lightSwitchApplication.HomeScreen().findContentItem("TimesheetHours"); }],
        /// <field>
        /// Called after the TimesheetHoursTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetHoursTemplate_postRender: [$element, function () { return new lightSwitchApplication.HomeScreen().findContentItem("TimesheetHoursTemplate"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.HomeScreen().findContentItem("Name"); }],
        /// <field>
        /// Called after the Value content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Value_postRender: [$element, function () { return new lightSwitchApplication.HomeScreen().findContentItem("Value"); }]
    });

    lightSwitchApplication.ResourcePlanTable.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ResourcePlanTable
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ResourcePlanTable,
            data: lightSwitchApplication.ResourcePlanTable,
            value: lightSwitchApplication.ResourcePlanTable
        },
        ResourcePlanSorted: {
            _$class: msls.ContentItem,
            _$name: "ResourcePlanSorted",
            _$parentName: "Details",
            screen: lightSwitchApplication.ResourcePlanTable,
            data: lightSwitchApplication.ResourcePlanTable,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ResourcePlanTable,
                _$entry: {
                    elementType: lightSwitchApplication.ResourcePlan
                }
            }
        },
        ResourcePlanSortedTemplate: {
            _$class: msls.ContentItem,
            _$name: "ResourcePlanSortedTemplate",
            _$parentName: "ResourcePlanSorted",
            screen: lightSwitchApplication.ResourcePlanTable,
            data: lightSwitchApplication.ResourcePlan,
            value: lightSwitchApplication.ResourcePlan
        },
        Person: {
            _$class: msls.ContentItem,
            _$name: "Person",
            _$parentName: "ResourcePlanSortedTemplate",
            screen: lightSwitchApplication.ResourcePlanTable,
            data: lightSwitchApplication.ResourcePlan,
            value: lightSwitchApplication.Person
        },
        PersonTemplate: {
            _$class: msls.ContentItem,
            _$name: "PersonTemplate",
            _$parentName: "Person",
            screen: lightSwitchApplication.ResourcePlanTable,
            data: lightSwitchApplication.Person,
            value: lightSwitchApplication.Person
        },
        Project: {
            _$class: msls.ContentItem,
            _$name: "Project",
            _$parentName: "ResourcePlanSortedTemplate",
            screen: lightSwitchApplication.ResourcePlanTable,
            data: lightSwitchApplication.ResourcePlan,
            value: lightSwitchApplication.Project
        },
        ProjectTemplate: {
            _$class: msls.ContentItem,
            _$name: "ProjectTemplate",
            _$parentName: "Project",
            screen: lightSwitchApplication.ResourcePlanTable,
            data: lightSwitchApplication.Project,
            value: lightSwitchApplication.Project
        },
        Client: {
            _$class: msls.ContentItem,
            _$name: "Client",
            _$parentName: "ProjectTemplate",
            screen: lightSwitchApplication.ResourcePlanTable,
            data: lightSwitchApplication.Project,
            value: lightSwitchApplication.Client
        },
        ClientName: {
            _$class: msls.ContentItem,
            _$name: "ClientName",
            _$parentName: "Client",
            screen: lightSwitchApplication.ResourcePlanTable,
            data: lightSwitchApplication.Client,
            value: String
        },
        ProjectName: {
            _$class: msls.ContentItem,
            _$name: "ProjectName",
            _$parentName: "ProjectTemplate",
            screen: lightSwitchApplication.ResourcePlanTable,
            data: lightSwitchApplication.Project,
            value: String
        },
        WeekEndingDate: {
            _$class: msls.ContentItem,
            _$name: "WeekEndingDate",
            _$parentName: "ResourcePlanSortedTemplate",
            screen: lightSwitchApplication.ResourcePlanTable,
            data: lightSwitchApplication.ResourcePlan,
            value: Date
        },
        Blocks: {
            _$class: msls.ContentItem,
            _$name: "Blocks",
            _$parentName: "ResourcePlanSortedTemplate",
            screen: lightSwitchApplication.ResourcePlanTable,
            data: lightSwitchApplication.ResourcePlan,
            value: Number
        },
        ResourcePlanComments: {
            _$class: msls.ContentItem,
            _$name: "ResourcePlanComments",
            _$parentName: "ResourcePlanSortedTemplate",
            screen: lightSwitchApplication.ResourcePlanTable,
            data: lightSwitchApplication.ResourcePlan,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ResourcePlanTable
        },
        Filter: {
            _$class: msls.ContentItem,
            _$name: "Filter",
            _$parentName: "Popups",
            screen: lightSwitchApplication.ResourcePlanTable,
            data: lightSwitchApplication.ResourcePlanTable,
            value: lightSwitchApplication.ResourcePlanTable
        },
        PersonName: {
            _$class: msls.ContentItem,
            _$name: "PersonName",
            _$parentName: "Filter",
            screen: lightSwitchApplication.ResourcePlanTable,
            data: lightSwitchApplication.ResourcePlanTable,
            value: String
        },
        ClientProject: {
            _$class: msls.ContentItem,
            _$name: "ClientProject",
            _$parentName: "Filter",
            screen: lightSwitchApplication.ResourcePlanTable,
            data: lightSwitchApplication.ResourcePlanTable,
            value: String
        },
        StartDate: {
            _$class: msls.ContentItem,
            _$name: "StartDate",
            _$parentName: "Filter",
            screen: lightSwitchApplication.ResourcePlanTable,
            data: lightSwitchApplication.ResourcePlanTable,
            value: Date
        },
        EndDate: {
            _$class: msls.ContentItem,
            _$name: "EndDate",
            _$parentName: "Filter",
            screen: lightSwitchApplication.ResourcePlanTable,
            data: lightSwitchApplication.ResourcePlanTable,
            value: Date
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ResourcePlanTable, {
        /// <field>
        /// Called when a new ResourcePlanTable screen is created.
        /// <br/>created(msls.application.ResourcePlanTable screen)
        /// </field>
        created: [lightSwitchApplication.ResourcePlanTable],
        /// <field>
        /// Called before changes on an active ResourcePlanTable screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ResourcePlanTable screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ResourcePlanTable],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ResourcePlanTable().findContentItem("Details"); }],
        /// <field>
        /// Called after the ResourcePlanSorted content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ResourcePlanSorted_postRender: [$element, function () { return new lightSwitchApplication.ResourcePlanTable().findContentItem("ResourcePlanSorted"); }],
        /// <field>
        /// Called after the ResourcePlanSortedTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ResourcePlanSortedTemplate_postRender: [$element, function () { return new lightSwitchApplication.ResourcePlanTable().findContentItem("ResourcePlanSortedTemplate"); }],
        /// <field>
        /// Called after the Person content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Person_postRender: [$element, function () { return new lightSwitchApplication.ResourcePlanTable().findContentItem("Person"); }],
        /// <field>
        /// Called after the PersonTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PersonTemplate_postRender: [$element, function () { return new lightSwitchApplication.ResourcePlanTable().findContentItem("PersonTemplate"); }],
        /// <field>
        /// Called after the Project content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Project_postRender: [$element, function () { return new lightSwitchApplication.ResourcePlanTable().findContentItem("Project"); }],
        /// <field>
        /// Called after the ProjectTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectTemplate_postRender: [$element, function () { return new lightSwitchApplication.ResourcePlanTable().findContentItem("ProjectTemplate"); }],
        /// <field>
        /// Called after the Client content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Client_postRender: [$element, function () { return new lightSwitchApplication.ResourcePlanTable().findContentItem("Client"); }],
        /// <field>
        /// Called after the ClientName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientName_postRender: [$element, function () { return new lightSwitchApplication.ResourcePlanTable().findContentItem("ClientName"); }],
        /// <field>
        /// Called after the ProjectName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectName_postRender: [$element, function () { return new lightSwitchApplication.ResourcePlanTable().findContentItem("ProjectName"); }],
        /// <field>
        /// Called after the WeekEndingDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WeekEndingDate_postRender: [$element, function () { return new lightSwitchApplication.ResourcePlanTable().findContentItem("WeekEndingDate"); }],
        /// <field>
        /// Called after the Blocks content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Blocks_postRender: [$element, function () { return new lightSwitchApplication.ResourcePlanTable().findContentItem("Blocks"); }],
        /// <field>
        /// Called after the ResourcePlanComments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ResourcePlanComments_postRender: [$element, function () { return new lightSwitchApplication.ResourcePlanTable().findContentItem("ResourcePlanComments"); }],
        /// <field>
        /// Called after the Filter content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Filter_postRender: [$element, function () { return new lightSwitchApplication.ResourcePlanTable().findContentItem("Filter"); }],
        /// <field>
        /// Called after the PersonName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PersonName_postRender: [$element, function () { return new lightSwitchApplication.ResourcePlanTable().findContentItem("PersonName"); }],
        /// <field>
        /// Called after the ClientProject content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientProject_postRender: [$element, function () { return new lightSwitchApplication.ResourcePlanTable().findContentItem("ClientProject"); }],
        /// <field>
        /// Called after the StartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StartDate_postRender: [$element, function () { return new lightSwitchApplication.ResourcePlanTable().findContentItem("StartDate"); }],
        /// <field>
        /// Called after the EndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EndDate_postRender: [$element, function () { return new lightSwitchApplication.ResourcePlanTable().findContentItem("EndDate"); }]
    });

    lightSwitchApplication.UnallocatedTimesheets.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.UnallocatedTimesheets
        },
        TimesheetDetailList: {
            _$class: msls.ContentItem,
            _$name: "TimesheetDetailList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.UnallocatedTimesheets,
            data: lightSwitchApplication.UnallocatedTimesheets,
            value: lightSwitchApplication.UnallocatedTimesheets
        },
        TimesheetDetail: {
            _$class: msls.ContentItem,
            _$name: "TimesheetDetail",
            _$parentName: "TimesheetDetailList",
            screen: lightSwitchApplication.UnallocatedTimesheets,
            data: lightSwitchApplication.UnallocatedTimesheets,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.UnallocatedTimesheets,
                _$entry: {
                    elementType: lightSwitchApplication.TimesheetDetail
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "TimesheetDetail",
            screen: lightSwitchApplication.UnallocatedTimesheets,
            data: lightSwitchApplication.TimesheetDetail,
            value: lightSwitchApplication.TimesheetDetail
        },
        Project: {
            _$class: msls.ContentItem,
            _$name: "Project",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.UnallocatedTimesheets,
            data: lightSwitchApplication.TimesheetDetail,
            value: lightSwitchApplication.Project
        },
        Person: {
            _$class: msls.ContentItem,
            _$name: "Person",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.UnallocatedTimesheets,
            data: lightSwitchApplication.TimesheetDetail,
            value: lightSwitchApplication.Person
        },
        TypeOfWork: {
            _$class: msls.ContentItem,
            _$name: "TypeOfWork",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.UnallocatedTimesheets,
            data: lightSwitchApplication.TimesheetDetail,
            value: lightSwitchApplication.TypeOfWork
        },
        DimDate: {
            _$class: msls.ContentItem,
            _$name: "DimDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.UnallocatedTimesheets,
            data: lightSwitchApplication.TimesheetDetail,
            value: lightSwitchApplication.DimDate
        },
        Hours: {
            _$class: msls.ContentItem,
            _$name: "Hours",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.UnallocatedTimesheets,
            data: lightSwitchApplication.TimesheetDetail,
            value: String
        },
        Comments: {
            _$class: msls.ContentItem,
            _$name: "Comments",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.UnallocatedTimesheets,
            data: lightSwitchApplication.TimesheetDetail,
            value: String
        },
        BillingStatus: {
            _$class: msls.ContentItem,
            _$name: "BillingStatus",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.UnallocatedTimesheets,
            data: lightSwitchApplication.TimesheetDetail,
            value: lightSwitchApplication.BillingStatus
        },
        ClientComments: {
            _$class: msls.ContentItem,
            _$name: "ClientComments",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.UnallocatedTimesheets,
            data: lightSwitchApplication.TimesheetDetail,
            value: String
        },
        AMComments: {
            _$class: msls.ContentItem,
            _$name: "AMComments",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.UnallocatedTimesheets,
            data: lightSwitchApplication.TimesheetDetail,
            value: String
        },
        TimesheetDetailSourceKey: {
            _$class: msls.ContentItem,
            _$name: "TimesheetDetailSourceKey",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.UnallocatedTimesheets,
            data: lightSwitchApplication.TimesheetDetail,
            value: String
        },
        TimesheetDetailFileName: {
            _$class: msls.ContentItem,
            _$name: "TimesheetDetailFileName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.UnallocatedTimesheets,
            data: lightSwitchApplication.TimesheetDetail,
            value: String
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
        TimesheetDetailProject_Client: {
            _$class: msls.ContentItem,
            _$name: "TimesheetDetailProject_Client",
            _$parentName: "Filter",
            screen: lightSwitchApplication.UnallocatedTimesheets,
            data: lightSwitchApplication.UnallocatedTimesheets,
            value: String
        },
        TimesheetDetailPersonName: {
            _$class: msls.ContentItem,
            _$name: "TimesheetDetailPersonName",
            _$parentName: "Filter",
            screen: lightSwitchApplication.UnallocatedTimesheets,
            data: lightSwitchApplication.UnallocatedTimesheets,
            value: String
        },
        TimesheetDetailAM: {
            _$class: msls.ContentItem,
            _$name: "TimesheetDetailAM",
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
        /// Called after the TimesheetDetailList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetDetailList_postRender: [$element, function () { return new lightSwitchApplication.UnallocatedTimesheets().findContentItem("TimesheetDetailList"); }],
        /// <field>
        /// Called after the TimesheetDetail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetDetail_postRender: [$element, function () { return new lightSwitchApplication.UnallocatedTimesheets().findContentItem("TimesheetDetail"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.UnallocatedTimesheets().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Project content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Project_postRender: [$element, function () { return new lightSwitchApplication.UnallocatedTimesheets().findContentItem("Project"); }],
        /// <field>
        /// Called after the Person content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Person_postRender: [$element, function () { return new lightSwitchApplication.UnallocatedTimesheets().findContentItem("Person"); }],
        /// <field>
        /// Called after the TypeOfWork content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TypeOfWork_postRender: [$element, function () { return new lightSwitchApplication.UnallocatedTimesheets().findContentItem("TypeOfWork"); }],
        /// <field>
        /// Called after the DimDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DimDate_postRender: [$element, function () { return new lightSwitchApplication.UnallocatedTimesheets().findContentItem("DimDate"); }],
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
        /// Called after the BillingStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillingStatus_postRender: [$element, function () { return new lightSwitchApplication.UnallocatedTimesheets().findContentItem("BillingStatus"); }],
        /// <field>
        /// Called after the ClientComments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientComments_postRender: [$element, function () { return new lightSwitchApplication.UnallocatedTimesheets().findContentItem("ClientComments"); }],
        /// <field>
        /// Called after the AMComments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AMComments_postRender: [$element, function () { return new lightSwitchApplication.UnallocatedTimesheets().findContentItem("AMComments"); }],
        /// <field>
        /// Called after the TimesheetDetailSourceKey content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetDetailSourceKey_postRender: [$element, function () { return new lightSwitchApplication.UnallocatedTimesheets().findContentItem("TimesheetDetailSourceKey"); }],
        /// <field>
        /// Called after the TimesheetDetailFileName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetDetailFileName_postRender: [$element, function () { return new lightSwitchApplication.UnallocatedTimesheets().findContentItem("TimesheetDetailFileName"); }],
        /// <field>
        /// Called after the Filter content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Filter_postRender: [$element, function () { return new lightSwitchApplication.UnallocatedTimesheets().findContentItem("Filter"); }],
        /// <field>
        /// Called after the TimesheetDetailProject_Client content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetDetailProject_Client_postRender: [$element, function () { return new lightSwitchApplication.UnallocatedTimesheets().findContentItem("TimesheetDetailProject_Client"); }],
        /// <field>
        /// Called after the TimesheetDetailPersonName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetDetailPersonName_postRender: [$element, function () { return new lightSwitchApplication.UnallocatedTimesheets().findContentItem("TimesheetDetailPersonName"); }],
        /// <field>
        /// Called after the TimesheetDetailAM content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TimesheetDetailAM_postRender: [$element, function () { return new lightSwitchApplication.UnallocatedTimesheets().findContentItem("TimesheetDetailAM"); }]
    });

}(msls.application));