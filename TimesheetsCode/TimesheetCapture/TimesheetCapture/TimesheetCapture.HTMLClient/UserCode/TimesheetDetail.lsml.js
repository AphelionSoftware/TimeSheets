/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.TimesheetDetail.created = function (entity) {
    // Write code here.
    entity.LoadDate = "1999/01/01";
    entity.LastUpdateDate = "1999/01/01";
    myapp.activeDataWorkspace.TimesheetsData.ActiveTypes_SingleOrDefault(1).execute().then(function (ActiveTypesQuery) {
        entity.ActiveType = ActiveTypesQuery.results[0];
    });

    myapp.activeDataWorkspace.TimesheetsData.People_SingleOrDefault(1).execute().then(function (PeopleQuery) {
        entity.Person = PeopleQuery.results[0];
    });

    myapp.activeDataWorkspace.TimesheetsData.BillingStatus_SingleOrDefault(-1).execute().then(function (BillingStatusQuery) {
        entity.BillingStatus = BillingStatusQuery.results[-1];
    });

    entity.TimesheetDetailName = "N/A";
    entity.TimesheetDetailCode = "N/A";
    entity.TimesheetDetailFileName = "Lightswitch";
    entity.Hours = 1;
    entity.Exclude = 0;



    entity.sys_CreatedBy = "NA";
    entity.sys_CreatedOn = "1999/01/01";
    entity.sys_ModifiedBy = "NA";
    entity.sys_ModifiedOn = "1999/01/01";

};