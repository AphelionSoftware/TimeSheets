/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseTimesheetsUser.ScreenContent_render = function (element, contentItem) {

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