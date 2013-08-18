/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $parameters = [document.createElement("div"), msls.ContentItem];

    msls._addEntryPoints(lightSwitchApplication.BrowseSalesOrderHeaders, {
        /// <field>
        /// Called when a new BrowseSalesOrderHeaders screen is created.
        /// <br/>created(msls.application.BrowseSalesOrderHeaders screen)
        /// </field>
        created: [lightSwitchApplication.BrowseSalesOrderHeaders],
        /// <field>
        /// Called before changes on an active BrowseSalesOrderHeaders screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseSalesOrderHeaders screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseSalesOrderHeaders],
        /// <field>
        /// Called after the SalesOrderHeader List content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SalesOrderHeader List_postRender: $parameters,
        /// <field>
        /// Called after the WijmoGrid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WijmoGrid_postRender: $parameters,
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: $parameters,
        /// <field>
        /// Called after the SalesOrderID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SalesOrderID_postRender: $parameters,
        /// <field>
        /// Called after the RevisionNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RevisionNumber_postRender: $parameters,
        /// <field>
        /// Called after the OrderDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OrderDate_postRender: $parameters,
        /// <field>
        /// Called after the DueDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DueDate_postRender: $parameters,
        /// <field>
        /// Called after the ShipDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShipDate_postRender: $parameters,
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: $parameters,
        /// <field>
        /// Called after the OnlineOrderFlag content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OnlineOrderFlag_postRender: $parameters,
        /// <field>
        /// Called after the SalesOrderNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SalesOrderNumber_postRender: $parameters,
        /// <field>
        /// Called after the PurchaseOrderNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PurchaseOrderNumber_postRender: $parameters,
        /// <field>
        /// Called after the AccountNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AccountNumber_postRender: $parameters,
        /// <field>
        /// Called after the CustomerID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CustomerID_postRender: $parameters,
        /// <field>
        /// Called after the SalesPersonID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SalesPersonID_postRender: $parameters,
        /// <field>
        /// Called after the TerritoryID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TerritoryID_postRender: $parameters,
        /// <field>
        /// Called after the BillToAddressID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BillToAddressID_postRender: $parameters,
        /// <field>
        /// Called after the ShipToAddressID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShipToAddressID_postRender: $parameters
    });

    msls._addEntryPoints(lightSwitchApplication.ViewSalesOrderDetail, {
        /// <field>
        /// Called when a new ViewSalesOrderDetail screen is created.
        /// <br/>created(msls.application.ViewSalesOrderDetail screen)
        /// </field>
        created: [lightSwitchApplication.ViewSalesOrderDetail],
        /// <field>
        /// Called before changes on an active ViewSalesOrderDetail screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewSalesOrderDetail screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewSalesOrderDetail],
        /// <field>
        /// Called after the SalesOrderDetail List content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SalesOrderDetail List_postRender: $parameters,
        /// <field>
        /// Called after the SalesOrderID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SalesOrderID_postRender: $parameters,
        /// <field>
        /// Called after the WijmoGrid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WijmoGrid_postRender: $parameters,
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: $parameters,
        /// <field>
        /// Called after the SalesOrderDetailID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SalesOrderDetailID_postRender: $parameters,
        /// <field>
        /// Called after the CarrierTrackingNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CarrierTrackingNumber_postRender: $parameters,
        /// <field>
        /// Called after the OrderQty content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OrderQty_postRender: $parameters,
        /// <field>
        /// Called after the ProductID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProductID_postRender: $parameters,
        /// <field>
        /// Called after the SpecialOfferID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SpecialOfferID_postRender: $parameters,
        /// <field>
        /// Called after the UnitPrice content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitPrice_postRender: $parameters,
        /// <field>
        /// Called after the UnitPriceDiscount content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UnitPriceDiscount_postRender: $parameters,
        /// <field>
        /// Called after the LineTotal content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LineTotal_postRender: $parameters,
        /// <field>
        /// Called after the rowguid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rowguid_postRender: $parameters,
        /// <field>
        /// Called after the ModifiedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedDate_postRender: $parameters,
        /// <field>
        /// Called after the SalesOrderHeader content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SalesOrderHeader_postRender: $parameters,
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: $parameters
    });

}(msls.application));
