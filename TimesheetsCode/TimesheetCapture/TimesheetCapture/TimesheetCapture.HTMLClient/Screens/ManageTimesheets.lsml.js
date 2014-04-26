/// <reference path="../GeneratedArtifacts/viewModel.js" />
/// <reference path="../Scripts/d3.Calendar.js" />





myapp.ManageTimesheets.ShowTimesheetDetails_Tap_canExecute = function (screen) {
    // Write code here.
    return screen.ShowDetails;
};

myapp.ManageTimesheets.created = function (screen) {
    // Write code here.
    screen.ShowDetails = false;
};
myapp.ManageTimesheets.Timesheet_ItemTap_execute = function (screen) {
    // Write code here.
    screen.ShowDetails = true;
}
myapp.ManageTimesheets.TimesheetHours_render = function (element, contentItem) {
    // Write code here.
    div = $("<div class='calendarDiv' id='calendarDiv' ></div>");
    $(div).appendTo($(element));


    var url = contentItem.application.activeDataWorkspace.TimesheetsData.TimesheetHours._requestUri + "?$format=json";
    calendarbyUrl(".calendarDiv", url);

};