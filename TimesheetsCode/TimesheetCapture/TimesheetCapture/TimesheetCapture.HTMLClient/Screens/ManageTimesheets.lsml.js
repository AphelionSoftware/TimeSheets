/// <reference path="../GeneratedArtifacts/viewModel.js" />
/// <reference path="../Scripts/d3.Calendar.js" />





myapp.ManageTimesheets.ShowTimesheetDetails_Tap_canExecute = function (screen) {
    // Write code here.
    return screen.ShowDetails;
};

myapp.ManageTimesheets.created = function (screen) {
    // Write code here.
    screen.ShowDetails = false;

    //screen.TimesheetHours.details.refresh();

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
myapp.ManageTimesheets.CurrentUser_render = function (element, contentItem) {
    // Write code here.


    msls.promiseOperation(CallGetUserName).then(function PromiseSuccess(PromiseResult) {
        // Set the result of the CallGetUserName function to the 
        // UserName of the entity
        //entity.UserName = PromiseResult;
        //var user = GetUserName
        div = $("<div class='calendarDiv' id='calendarDiv' >" + PromiseResult+ "</div>");
        $(div).appendTo($(element));

    });

    // This function will be wrapped in a Promise object

    function CallGetUserName(operation) {
        $.ajax({
            type: 'post',
            data: {},
            url: '../web/GetUserName.ashx',
            success: operation.code(function AjaxSuccess(AjaxResult) {
                operation.complete(AjaxResult);
            })
        });
    }



    

};