/// <reference path="../GeneratedArtifacts/viewModel.js" />
/// <reference path="../Scripts/c1ls-3.0.20132.20.js" />

if (typeof c1ls === "undefined") {
    window.location.href = "http://bit.ly/c1ls-nuget";
}

var grid;

// http://bit.ly/c1ls-grid
//
myapp.TimesheetDetails.WijmoGrid_render = function (element, contentItem) {

    var table = $("<table/>");
    table.appendTo($(element));

    contentItem.value.oncollectionchange = function () {
        grid = c1ls.getGridContent(table, contentItem, { autoHide: true });

        table.wijgrid({
            // initialization
            columns: grid.Columns,
            data: grid.Rows(),

            // editing
            allowEditing: false,
            afterCellUpdate: grid.OnCellUpdate,

            // sorting
            allowSorting: true,
            sorting: grid.Sorting,

            // filtering
            showFilter: false,
            filtering: grid.Filtering,

            // selection
            selectionMode: "singleRow",
            showRowHeader: true,
            showSelectionOnRender: false,
            cellClicked: grid.OnCellClicked,
            cellStyleFormatter: grid.OnCellFormat
        });
    };

    c1ls.renderControl(contentItem);
};


myapp.TimesheetDetails.Refresh_execute = function (screen) {
    // Write code here.
    screen.TimesheetDetailsQuery.load();
};




myapp.TimesheetDetails.EditTimesheetDetail_Tap_execute = function (screen) {
        myapp.showEditTimesheetDetails(screen.__TimesheetID,screen.__WeekEnding, {
             afterClosed: function () {
                 screen.TimesheetDetailsQuery.load(); // manual refresh
                    }
        });

};