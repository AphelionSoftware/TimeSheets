/// <reference path="data.js" />

(function (lightSwitchApplication) {

    msls._addEntryPoints(lightSwitchApplication.SalesOrderDetail, {
        /// <field>
        /// Called when a new salesOrderDetail is created.
        /// <br/>created(msls.application.SalesOrderDetail entity)
        /// </field>
        created: [lightSwitchApplication.SalesOrderDetail]
    });

    msls._addEntryPoints(lightSwitchApplication.SalesOrderHeader, {
        /// <field>
        /// Called when a new salesOrderHeader is created.
        /// <br/>created(msls.application.SalesOrderHeader entity)
        /// </field>
        created: [lightSwitchApplication.SalesOrderHeader]
    });

}(msls.application));
