/// <reference path="../GeneratedArtifacts/viewModel.js" />
/// <reference path="../Scripts/d3.Calendar.js" />

myapp.HomeScreen.TimesheetHours_render = function (element, contentItem) {
    // Write code here.
    div = $("<div class='calendarDiv' id='calendarDiv' ></div>");
    $(div).appendTo($(element));


    var url = contentItem.application.activeDataWorkspace.Timesheets_Data.TimesheetHours._requestUri + "?$format=json";
    calendarbyUrl(".calendarDiv", url);


};