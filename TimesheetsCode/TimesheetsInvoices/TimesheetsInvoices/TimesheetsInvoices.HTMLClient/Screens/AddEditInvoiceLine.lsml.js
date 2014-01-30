/// <reference path="../GeneratedArtifacts/viewModel.js" />



myapp.AddEditInvoiceLine.created = function (screen) {
    // Write code here.
    var LSTable = screen.InvoiceLine;
    if (LSTable.details.entityState !== msls.EntityState.unchanged) {
        /*return msls.showMessageBox(
            "Cannot refresh the LSTable because it was changed.",
        {
        title: "Cannot refresh"
        }*/
        var TableID = LSTable.id;
        var dataWorkspace = new myapp.DataWorkspace();
        dataWorkspace.TimesheetsData.Invoices_SingleOrDefault(TableID).execute().then(function (result) {
            var serverLSTable = result.results[0];
            if (serverLSTable) {
                LSTable.details._ = serverLSTable.details._;
                LSTable.details.properties.all().forEach(function (prop) {
                    if (prop instanceof msls.Entity.Details.StorageProperty) {
                        prop.dispatchChange("value");
                        LSTable.dispatchChange(prop.name);
                    }
                });
            }
        }, function (error) {
            msls.showMessageBox(error, { title: "Refresh failed" });
        });

    }

    
};