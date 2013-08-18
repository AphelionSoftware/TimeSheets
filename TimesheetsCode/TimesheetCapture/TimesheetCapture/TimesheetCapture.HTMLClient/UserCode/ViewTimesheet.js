/// <reference path="../GeneratedArtifacts/viewModel.js" />

/// <reference path="../Scripts/c1ls-3.0.20132.17.js" />

if (typeof c1ls === "undefined") {
    window.location.href = "http://bit.ly/c1ls-nuget";
}




// http://bit.ly/c1ls-grid
//
myapp.ViewTimesheet.TimesheetDetails1_render = function (element, contentItem) {

    var table = $("<table/>");
    table.appendTo($(element));

    contentItem.value.oncollectionchange = function () {
        var grid = c1ls.getGridContent(table, contentItem);
        grid.Columns[0].visible = false;

        table.wijgrid({
            // initialization
            columns: grid.Columns,
            data: grid.Rows(),

            // sorting
            allowSorting: true,
            sorting: grid.Sorting,

            // filtering
            showFilter: false,
            filtering: grid.Filtering,

            //editing
            allowEditing: true,

            // selection
            selectionMode: "singleRow",
            showRowHeader: grid.ShowRowHeader,
            showSelectionOnRender: false,
            cellClicked: grid.OnCellClicked,
            cellStyleFormatter: grid.OnCellFormat
        });
    };
};

