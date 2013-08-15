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
                { dataKey: 0, headerText: "TimesheetID", dataType: "string" },
                { dataKey: 1, headerText: "Period Ending", dataType: "datetime", dataFormatString: "dd-MM-yyyy"},
                { dataKey: 2, headerText: "Timesheet Name", dataType: "string" }
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
        //In this line you set the first column to be hidden.
        var cols = table.wijgrid("columns");
        cols[0].option("visible",false);

        table.wijgrid("doRefresh");
        
    };
};

