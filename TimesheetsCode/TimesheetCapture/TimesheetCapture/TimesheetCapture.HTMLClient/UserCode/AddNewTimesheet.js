myapp.AddNewTimesheet.Timesheet_TimesheetDate_render = function (element, contentItem) {
    // Write code here.
    var TimesheetDate = $('<p id="TimesheetDate"></p>');
    TimesheetDate.appendTo($(element));
    contentItem.dataBind("stringValue", function (newValue) { TimesheetDate.text(newValue); });


};
myapp.AddNewTimesheet.created = function (entity) {
    
    entity.LoadDate = "1999/01/01";
    entity.TimesheetDate = "1999/01/01";
    myapp.activeDataWorkspace.TimesheetsData.ActiveTypes_SingleOrDefault(1).execute().then(function (ActiveTypesQuery) {
        entity.ActiveType = ActiveTypesQuery.results[0];
    });

    entity.TimesheetName = "";
    entity.TimesheetCode = "";
    entity.TimesheetFileName = "Lightswitch";
    entity.TimesheetFromDateID = 0;
    entity.TimesheetToDateID = 0;
    entity.TimesheetPerson = "N/A";
    myapp.activeDataWorkspace.TimesheetsData.OverallStatus_SingleOrDefault(1).execute().then(function (OverallStatusQuery) {
        entity.OverallStatus = OverallStatusQuery.results[0];
    });
    
    entity.sys_CreatedBy = "N/A";
    entity.sys_CreatedOn = "1999/01/01";
    entity.sys_ModifiedBy = "N/A";
    entity.sys_ModifiedOn = "1999/01/01";


   
};