/// <reference path="../GeneratedArtifacts/viewModel.js" />
/// <reference path="../Scripts/d3.Calendar.js" />
/// 


myapp.Aphelion_D3_Resourcing.ResourcePlans_render = function (element, contentItem) {
    // Write code here.
    div = $("<div class='calendarDiv' id='calendarDiv' ></div>");
    $(div).appendTo($(element));
    //D3 takes a control name
    //calendar(".calendarDiv", "https://aphelion-testodata.azurewebsites.net/TimesheetsData.svc/ResourcePlans?$format=json");


    var url = contentItem.application.activeDataWorkspace.TimesheetsData.ResourcePlans._requestUri + "?$format=json";
    calendarbyUrl(".calendarDiv", url);

};