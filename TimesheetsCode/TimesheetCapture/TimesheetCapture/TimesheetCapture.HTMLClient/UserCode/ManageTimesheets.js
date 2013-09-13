/// <reference path="../GeneratedArtifacts/viewModel.js" />
/// <reference path="../Scripts/c1ls-3.0.20132.20.js" />

if (typeof c1ls === "undefined") {
    window.location.href = "http://bit.ly/c1ls-nuget";
}

// http://bit.ly/c1ls-grid
//
myapp.ManageTimesheets.WijmoGrid_render = function (element, contentItem) {

    var table = $("<table/>");
    table.appendTo($(element));

    contentItem.value.oncollectionchange = function () {
        var grid = c1ls.getGridContent(table, contentItem);

        table.wijgrid({
            // initialization
            columns: grid.Columns,
            data: grid.Rows(),

            // editing
            allowEditing: true,
            afterCellUpdate: grid.OnCellUpdate,

            // sorting
            allowSorting: true,
            sorting: grid.Sorting,

            // filtering
            showFilter: false,
            filtering: grid.Filtering,

            // selection
            selectionMode: "singleRow",
            showRowHeader: grid.ShowRowHeader,
            showSelectionOnRender: false,
            cellClicked: grid.OnCellClicked,
            cellStyleFormatter: grid.OnCellFormat
        });
    };

    c1ls.renderControl(contentItem);
};



myapp.ManageTimesheets.ShowTimesheetDetails_Tap_execute = function (screen) {
    var TimesheetID = screen.TimesheetsUser.selectedItem.TimesheetID;
    var WeekEnding = screen.TimesheetsUser.selectedItem.DimDate.getC_Date()._value;
    var Instructions = "Click on the grid to populate the drop-down boxes."
    myapp.showEditTimesheetDetails(TimesheetID, WeekEnding,Instructions);
};






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