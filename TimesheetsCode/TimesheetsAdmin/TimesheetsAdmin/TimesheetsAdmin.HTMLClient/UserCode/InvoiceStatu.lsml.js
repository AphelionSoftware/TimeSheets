/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.InvoiceStatu.created = function (entity) {
    // Write code here.
    entity.sys_CreatedBy = "NA";
    entity.sys_CreatedOn = "1999/01/01";
    entity.sys_ModifiedBy = "NA";
    entity.sys_ModifiedOn = "1999/01/01";
    entity.LoadDate = "1999/01/01";
    //entity.Active = 1;
    myapp.activeDataWorkspace.Timesheets_Data.ActiveTypes_SingleOrDefault(1).execute().then(function (ActiveTypesQuery) {
        entity.ActiveType = ActiveTypesQuery.results[0];
    });
};