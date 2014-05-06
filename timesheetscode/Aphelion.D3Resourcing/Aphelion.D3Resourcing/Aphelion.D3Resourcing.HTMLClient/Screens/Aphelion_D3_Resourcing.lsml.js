/// <reference path="../GeneratedArtifacts/viewModel.js" />
/// <reference path="../Scripts/d3.Calendar.js" />
/// 

myapp.Home.created = function (screen) {
    // Write code here.
    
};
myapp.Home.ScreenContent_render = function (element, contentItem) {
    // Write code here.
    
};
myapp.Home.ShowVis_execute = function (screen) {
    // Write code here.
   
};
myapp.Home.ResourcePlans_render = function (element, contentItem) {
    // Write code here.
    div = $("<div class='calendarDiv' id='calendarDiv' ></div>");
    $(div).appendTo($(element));
    //D3 takes a control name
    //calendar(".calendarDiv", "https://aphelion-testodata.azurewebsites.net/TimesheetsData.svc/ResourcePlans?$format=json");

    
    var url = contentItem.application.activeDataWorkspace.TimesheetsData.ResourcePlans._requestUri + "?$format=json";
    calendarbyUrl(".calendarDiv", url);

    
    };
