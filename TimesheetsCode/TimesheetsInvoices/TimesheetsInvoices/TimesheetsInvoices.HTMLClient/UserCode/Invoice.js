/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.Invoice.created = function (entity) {
    // Write code here.
    // Write code here.
    entity.sys_CreatedBy = "NA";
    entity.sys_CreatedOn = "1999/01/01";
    entity.sys_ModifiedBy = "NA";
    entity.sys_ModifiedOn = "1999/01/01";
    entity.LoadDate = "1999/01/01";
    myapp.activeDataWorkspace.Timesheets20130908Data.ActiveTypes_SingleOrDefault(1).execute().then(function (ActiveTypesQuery) {
        entity.ActiveType = ActiveTypesQuery.results[0];
    });

    var today = new Date();
    var todayDateID = today.toISOString().replace('-','').replace('-','').substring(0,8);

    myapp.activeDataWorkspace.Timesheets20130908Data.DimDates_SingleOrDefault(todayDateID).execute().then(function (DateQuery) {
        entity.DimDate = DateQuery.results[0];
    });
    myapp.activeDataWorkspace.Timesheets20130908Data.DimDates_SingleOrDefault(todayDateID).execute().then(function (DateQuery) {
        entity.DimDate1 = DateQuery.results[0];
    });


    myapp.activeDataWorkspace.Timesheets20130908Data.InvoiceStatus_SingleOrDefault(1).execute().then( function (InvQuery) {
        entity.InvoiceStatu = InvQuery.results[0];
    });


};