/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function BrowseSalesOrderHeaders(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseSalesOrderHeaders screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="SalesOrderHeaders" type="msls.VisualCollection" elementType="msls.application.SalesOrderHeader">
        /// Gets the salesOrderHeaders for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseSalesOrderHeaders.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseSalesOrderHeaders", parameters);
    }

    function ViewSalesOrderDetail(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewSalesOrderDetail screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="SalesOrderDetails" type="msls.VisualCollection" elementType="msls.application.SalesOrderDetail">
        /// Gets the salesOrderDetails for this screen.
        /// </field>
        /// <field name="SalesOrderID" type="Number">
        /// Gets or sets the salesOrderID for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewSalesOrderDetail.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewSalesOrderDetail", parameters);
    }

    function AddEditSalesOrderDetail(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditSalesOrderDetail screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="SalesOrderDetail" type="msls.application.SalesOrderDetail">
        /// Gets or sets the salesOrderDetail for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditSalesOrderDetail.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditSalesOrderDetail", parameters);
    }

    msls._addToNamespace("msls.application", {

        BrowseSalesOrderHeaders: $defineScreen(BrowseSalesOrderHeaders, [
            {
                name: "SalesOrderHeaders", kind: "collection", elementType: lightSwitchApplication.SalesOrderHeader,
                createQuery: function () {
                    return this.dataWorkspace.WijmoGridTestData.SalesOrderHeaders;
                }
            }
        ], [
        ]),

        ViewSalesOrderDetail: $defineScreen(ViewSalesOrderDetail, [
            {
                name: "SalesOrderDetails", kind: "collection", elementType: lightSwitchApplication.SalesOrderDetail,
                createQuery: function () {
                    return this.dataWorkspace.WijmoGridTestData.SalesOrderDetails.filter("SalesOrderHeader/SalesOrderID eq SalesOrderHeader/SalesOrderID").expand("SalesOrderHeader");
                }
            },
            { name: "SalesOrderID", kind: "local", type: Number }
        ], [
        ]),

        AddEditSalesOrderDetail: $defineScreen(AddEditSalesOrderDetail, [
            { name: "SalesOrderDetail", kind: "local", type: lightSwitchApplication.SalesOrderDetail }
        ], [
        ]),

        showBrowseSalesOrderHeaders: $defineShowScreen(function showBrowseSalesOrderHeaders(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseSalesOrderHeaders screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseSalesOrderHeaders", parameters, options);
        }),

        showViewSalesOrderDetail: $defineShowScreen(function showViewSalesOrderDetail(SalesOrderID, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewSalesOrderDetail screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewSalesOrderDetail", parameters, options);
        }),

        showAddEditSalesOrderDetail: $defineShowScreen(function showAddEditSalesOrderDetail(SalesOrderDetail, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditSalesOrderDetail screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditSalesOrderDetail", parameters, options);
        })

    });

}(msls.application));
