/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BillingDetail.created = function (entity) {
    // Write code here.
    //Deliberately wrong so if model code is missed it's obvious
    entity.sys_CreatedBy = "NA";
    entity.sys_CreatedOn = "1999/01/01";
    entity.sys_ModifiedBy = "NA";
    entity.sys_ModifiedOn = "1999/01/01";
    entity.LoadDate = "1999/01/01";
    entity.Active = 1;

    myapp.activeDataWorkspace.PWTimesheetsData.ActiveTypes_SingleOrDefault(1).execute().then(function (ActiveTypesQuery) {
        entity.ActiveType = ActiveTypesQuery.results[0];
    });

};