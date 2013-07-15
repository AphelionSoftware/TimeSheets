/// <reference path="data.js" />

(function (lightSwitchApplication) {

    msls._addEntryPoints(lightSwitchApplication.ActiveType, {
        /// <field>
        /// Called when a new activeType is created.
        /// <br/>created(msls.application.ActiveType entity)
        /// </field>
        created: [lightSwitchApplication.ActiveType]
    });

    msls._addEntryPoints(lightSwitchApplication.BillingDetail, {
        /// <field>
        /// Called when a new billingDetail is created.
        /// <br/>created(msls.application.BillingDetail entity)
        /// </field>
        created: [lightSwitchApplication.BillingDetail]
    });

    msls._addEntryPoints(lightSwitchApplication.BillingStatu, {
        /// <field>
        /// Called when a new billingStatu is created.
        /// <br/>created(msls.application.BillingStatu entity)
        /// </field>
        created: [lightSwitchApplication.BillingStatu]
    });

    msls._addEntryPoints(lightSwitchApplication.Client, {
        /// <field>
        /// Called when a new client is created.
        /// <br/>created(msls.application.Client entity)
        /// </field>
        created: [lightSwitchApplication.Client]
    });

    msls._addEntryPoints(lightSwitchApplication.ClientRole, {
        /// <field>
        /// Called when a new clientRole is created.
        /// <br/>created(msls.application.ClientRole entity)
        /// </field>
        created: [lightSwitchApplication.ClientRole]
    });

    msls._addEntryPoints(lightSwitchApplication.DimDate, {
        /// <field>
        /// Called when a new dimDate is created.
        /// <br/>created(msls.application.DimDate entity)
        /// </field>
        created: [lightSwitchApplication.DimDate]
    });

    msls._addEntryPoints(lightSwitchApplication.OverallStatu, {
        /// <field>
        /// Called when a new overallStatu is created.
        /// <br/>created(msls.application.OverallStatu entity)
        /// </field>
        created: [lightSwitchApplication.OverallStatu]
    });

    msls._addEntryPoints(lightSwitchApplication.Person, {
        /// <field>
        /// Called when a new person is created.
        /// <br/>created(msls.application.Person entity)
        /// </field>
        created: [lightSwitchApplication.Person]
    });

    msls._addEntryPoints(lightSwitchApplication.Project, {
        /// <field>
        /// Called when a new project is created.
        /// <br/>created(msls.application.Project entity)
        /// </field>
        created: [lightSwitchApplication.Project]
    });

    msls._addEntryPoints(lightSwitchApplication.Timesheet, {
        /// <field>
        /// Called when a new timesheet is created.
        /// <br/>created(msls.application.Timesheet entity)
        /// </field>
        created: [lightSwitchApplication.Timesheet]
    });

    msls._addEntryPoints(lightSwitchApplication.TimesheetDetail, {
        /// <field>
        /// Called when a new timesheetDetail is created.
        /// <br/>created(msls.application.TimesheetDetail entity)
        /// </field>
        created: [lightSwitchApplication.TimesheetDetail]
    });

    msls._addEntryPoints(lightSwitchApplication.TypeOfWork, {
        /// <field>
        /// Called when a new typeOfWork is created.
        /// <br/>created(msls.application.TypeOfWork entity)
        /// </field>
        created: [lightSwitchApplication.TypeOfWork]
    });

}(msls.application));
