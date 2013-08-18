/// <reference path="../Scripts/msls-1.0.0.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function SalesOrderDetail(entitySet) {
        /// <summary>
        /// Represents the SalesOrderDetail entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this salesOrderDetail.
        /// </param>
        /// <field name="SalesOrderDetailID" type="Number">
        /// Gets or sets the salesOrderDetailID for this salesOrderDetail.
        /// </field>
        /// <field name="CarrierTrackingNumber" type="String">
        /// Gets or sets the carrierTrackingNumber for this salesOrderDetail.
        /// </field>
        /// <field name="OrderQty" type="Number">
        /// Gets or sets the orderQty for this salesOrderDetail.
        /// </field>
        /// <field name="ProductID" type="Number">
        /// Gets or sets the productID for this salesOrderDetail.
        /// </field>
        /// <field name="SpecialOfferID" type="Number">
        /// Gets or sets the specialOfferID for this salesOrderDetail.
        /// </field>
        /// <field name="UnitPrice" type="Number">
        /// Gets or sets the unitPrice for this salesOrderDetail.
        /// </field>
        /// <field name="UnitPriceDiscount" type="Number">
        /// Gets or sets the unitPriceDiscount for this salesOrderDetail.
        /// </field>
        /// <field name="LineTotal" type="Number">
        /// Gets or sets the lineTotal for this salesOrderDetail.
        /// </field>
        /// <field name="rowguid" type="String">
        /// Gets or sets the rowguid for this salesOrderDetail.
        /// </field>
        /// <field name="ModifiedDate" type="Date">
        /// Gets or sets the modifiedDate for this salesOrderDetail.
        /// </field>
        /// <field name="SalesOrderHeader" type="msls.application.SalesOrderHeader">
        /// Gets or sets the salesOrderHeader for this salesOrderDetail.
        /// </field>
        /// <field name="details" type="msls.application.SalesOrderDetail.Details">
        /// Gets the details for this salesOrderDetail.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function SalesOrderHeader(entitySet) {
        /// <summary>
        /// Represents the SalesOrderHeader entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this salesOrderHeader.
        /// </param>
        /// <field name="SalesOrderID" type="Number">
        /// Gets or sets the salesOrderID for this salesOrderHeader.
        /// </field>
        /// <field name="RevisionNumber" type="Number">
        /// Gets or sets the revisionNumber for this salesOrderHeader.
        /// </field>
        /// <field name="OrderDate" type="Date">
        /// Gets or sets the orderDate for this salesOrderHeader.
        /// </field>
        /// <field name="DueDate" type="Date">
        /// Gets or sets the dueDate for this salesOrderHeader.
        /// </field>
        /// <field name="ShipDate" type="Date">
        /// Gets or sets the shipDate for this salesOrderHeader.
        /// </field>
        /// <field name="Status" type="Number">
        /// Gets or sets the status for this salesOrderHeader.
        /// </field>
        /// <field name="OnlineOrderFlag" type="Boolean">
        /// Gets or sets the onlineOrderFlag for this salesOrderHeader.
        /// </field>
        /// <field name="SalesOrderNumber" type="String">
        /// Gets or sets the salesOrderNumber for this salesOrderHeader.
        /// </field>
        /// <field name="PurchaseOrderNumber" type="String">
        /// Gets or sets the purchaseOrderNumber for this salesOrderHeader.
        /// </field>
        /// <field name="AccountNumber" type="String">
        /// Gets or sets the accountNumber for this salesOrderHeader.
        /// </field>
        /// <field name="CustomerID" type="Number">
        /// Gets or sets the customerID for this salesOrderHeader.
        /// </field>
        /// <field name="SalesPersonID" type="Number">
        /// Gets or sets the salesPersonID for this salesOrderHeader.
        /// </field>
        /// <field name="TerritoryID" type="Number">
        /// Gets or sets the territoryID for this salesOrderHeader.
        /// </field>
        /// <field name="BillToAddressID" type="Number">
        /// Gets or sets the billToAddressID for this salesOrderHeader.
        /// </field>
        /// <field name="ShipToAddressID" type="Number">
        /// Gets or sets the shipToAddressID for this salesOrderHeader.
        /// </field>
        /// <field name="ShipMethodID" type="Number">
        /// Gets or sets the shipMethodID for this salesOrderHeader.
        /// </field>
        /// <field name="CreditCardID" type="Number">
        /// Gets or sets the creditCardID for this salesOrderHeader.
        /// </field>
        /// <field name="CreditCardApprovalCode" type="String">
        /// Gets or sets the creditCardApprovalCode for this salesOrderHeader.
        /// </field>
        /// <field name="CurrencyRateID" type="Number">
        /// Gets or sets the currencyRateID for this salesOrderHeader.
        /// </field>
        /// <field name="SubTotal" type="Number">
        /// Gets or sets the subTotal for this salesOrderHeader.
        /// </field>
        /// <field name="TaxAmt" type="Number">
        /// Gets or sets the taxAmt for this salesOrderHeader.
        /// </field>
        /// <field name="Freight" type="Number">
        /// Gets or sets the freight for this salesOrderHeader.
        /// </field>
        /// <field name="TotalDue" type="Number">
        /// Gets or sets the totalDue for this salesOrderHeader.
        /// </field>
        /// <field name="Comment" type="String">
        /// Gets or sets the comment for this salesOrderHeader.
        /// </field>
        /// <field name="rowguid" type="String">
        /// Gets or sets the rowguid for this salesOrderHeader.
        /// </field>
        /// <field name="ModifiedDate" type="Date">
        /// Gets or sets the modifiedDate for this salesOrderHeader.
        /// </field>
        /// <field name="SalesOrderDetails" type="msls.EntityCollection" elementType="msls.application.SalesOrderDetail">
        /// Gets the salesOrderDetails for this salesOrderHeader.
        /// </field>
        /// <field name="details" type="msls.application.SalesOrderHeader.Details">
        /// Gets the details for this salesOrderHeader.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function WijmoGridTestData(dataWorkspace) {
        /// <summary>
        /// Represents the WijmoGridTestData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="SalesOrderDetails" type="msls.EntitySet">
        /// Gets the SalesOrderDetails entity set.
        /// </field>
        /// <field name="SalesOrderHeaders" type="msls.EntitySet">
        /// Gets the SalesOrderHeaders entity set.
        /// </field>
        /// <field name="details" type="msls.application.WijmoGridTestData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="WijmoGridTestData" type="msls.application.WijmoGridTestData">
        /// Gets the WijmoGridTestData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        SalesOrderDetail: $defineEntity(SalesOrderDetail, [
            { name: "SalesOrderDetailID", type: Number },
            { name: "CarrierTrackingNumber", type: String },
            { name: "OrderQty", type: Number },
            { name: "ProductID", type: Number },
            { name: "SpecialOfferID", type: Number },
            { name: "UnitPrice", type: Number },
            { name: "UnitPriceDiscount", type: Number },
            { name: "LineTotal", type: Number },
            { name: "rowguid", type: String },
            { name: "ModifiedDate", type: Date },
            { name: "SalesOrderHeader", kind: "reference", type: SalesOrderHeader }
        ]),

        SalesOrderHeader: $defineEntity(SalesOrderHeader, [
            { name: "SalesOrderID", type: Number },
            { name: "RevisionNumber", type: Number },
            { name: "OrderDate", type: Date },
            { name: "DueDate", type: Date },
            { name: "ShipDate", type: Date },
            { name: "Status", type: Number },
            { name: "OnlineOrderFlag", type: Boolean },
            { name: "SalesOrderNumber", type: String },
            { name: "PurchaseOrderNumber", type: String },
            { name: "AccountNumber", type: String },
            { name: "CustomerID", type: Number },
            { name: "SalesPersonID", type: Number },
            { name: "TerritoryID", type: Number },
            { name: "BillToAddressID", type: Number },
            { name: "ShipToAddressID", type: Number },
            { name: "ShipMethodID", type: Number },
            { name: "CreditCardID", type: Number },
            { name: "CreditCardApprovalCode", type: String },
            { name: "CurrencyRateID", type: Number },
            { name: "SubTotal", type: Number },
            { name: "TaxAmt", type: Number },
            { name: "Freight", type: Number },
            { name: "TotalDue", type: Number },
            { name: "Comment", type: String },
            { name: "rowguid", type: String },
            { name: "ModifiedDate", type: Date },
            { name: "SalesOrderDetails", kind: "collection", elementType: SalesOrderDetail }
        ]),

        WijmoGridTestData: $defineDataService(WijmoGridTestData, lightSwitchApplication.rootUri + "/WijmoGridTestData.svc", [
            { name: "SalesOrderDetails", elementType: SalesOrderDetail },
            { name: "SalesOrderHeaders", elementType: SalesOrderHeader }
        ], [
            {
                name: "SalesOrderDetails_SingleOrDefault", value: function (SalesOrderDetailID) {
                    return new $DataServiceQuery({ _entitySet: this.SalesOrderDetails },
                        lightSwitchApplication.rootUri + "/WijmoGridTestData.svc" + "/SalesOrderDetails(" + "SalesOrderDetailID=" + $toODataString(SalesOrderDetailID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "SalesOrderHeaders_SingleOrDefault", value: function (SalesOrderID) {
                    return new $DataServiceQuery({ _entitySet: this.SalesOrderHeaders },
                        lightSwitchApplication.rootUri + "/WijmoGridTestData.svc" + "/SalesOrderHeaders(" + "SalesOrderID=" + $toODataString(SalesOrderID, "Int32?") + ")"
                    );
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "WijmoGridTestData", type: WijmoGridTestData }
        ])

    });

}(msls.application));
