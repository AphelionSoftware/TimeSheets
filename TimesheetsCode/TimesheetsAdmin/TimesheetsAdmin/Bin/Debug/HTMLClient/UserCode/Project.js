/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.Project.created = function (entity) {
    // Write code here.
    //Deliberately wrong so if model code is missed it's obvious
    entity.sys_CreatedBy = "NA";
    entity.sys_CreatedOn = "1999/01/01";
    entity.sys_ModifiedBy = "NA";
    entity.sys_ModifiedOn = "1999/01/01";
    entity.LoadDate = "1999/01/01";
    entity.Active = 1;
    entity.AdminProject = 0;
    entity.CommPercent = 0;
};