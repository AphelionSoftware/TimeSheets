/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.InvoiceLine.created = function (entity) {
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



  
};