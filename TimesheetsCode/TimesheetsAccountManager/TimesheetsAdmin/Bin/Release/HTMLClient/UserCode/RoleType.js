/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.RoleType.created = function (entity) {
    // Write code here.
    myapp.activeDataWorkspace.TimesheetsData.ActiveTypes_SingleOrDefault(1).execute().then(function (ActiveTypesQuery) {
        entity.ActiveType = ActiveTypesQuery.results[0];
    });
};