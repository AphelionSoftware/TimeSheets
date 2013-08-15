// http://bit.ly/c1ls-grid
//
myapp.BrowseTimesheets.Timesheet_render = function (element, contentItem) {

    var table = $("<table/>");
    table.appendTo($(element));

    contentItem.value.oncollectionchange = function () {
        var grid = c1ls.getGridContent(table, contentItem);

        table.wijgrid({
            // initialization
            data: grid.Rows(),
            columns: [
                { dataKey: 0, headerText: "Period Ending", dataType: "datetime", dataFormatString: "dd-MM-yyyy"},
                { dataKey: 1, headerText: "Timesheet Name", dataType: "string" }
            ],

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
};

