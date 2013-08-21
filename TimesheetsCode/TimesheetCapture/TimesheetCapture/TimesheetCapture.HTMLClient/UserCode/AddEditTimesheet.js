

myapp.AddEditTimesheet.Timesheet_TimesheetDate_render = function (element, contentItem) {
    // Write code here.
    var shippedDate = $('<p id="TimesheetDate"></p>');
    shippedDate.appendTo($(element));
    contentItem.dataBind("stringValue", function (newValue) { shippedDate.text(newValue); });

    
};


myapp.AddEditTimesheet.GoHome_execute = function (screen) {
    // Write code here.
    myapp.navigateHome();
};
myapp.AddEditTimesheet.TS_render = function (element, contentItem) {

    //Give the table an ID as we'll use it later

    var Timesheet = $("<table id='gridview'/>");

    Timesheet.appendTo($(element));

    contentItem.value.oncollectionchange = function () {

        //This is the Component One code to get the data

        var grid = c1ls.getGridContent(table, contentItem);

        //In this line you set the first column to be hidden.

        grid.Columns[0].visible = false;

        //And this is the code to create the grid

        Timesheet.wijgrid({

            // initialization

            columns: grid.Columns,

            data: grid.Rows(),

            // sorting

            allowSorting: true,

            sorting: grid.Sorting,

            //editing

            allowEditing: true,

            //This function gets called after a cell is edited

            afterCellEdit: AfterCellEdit,

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

myapp.AddEditTimesheet.TSDetails_render = function (element, contentItem) {

    //Give the table an ID as we'll use it later

    var table = $("<table id='gridview'/>");

    table.appendTo($(element));

    contentItem.value.oncollectionchange = function () {

        //This is the Component One code to get the data

        var grid = c1ls.getGridContent(table, contentItem);

        //In this line you set the first column to be hidden.

        grid.Columns[0].visible = false;

        //And this is the code to create the grid

        table.wijgrid({

            // initialization

            columns: grid.Columns,

            data: grid.Rows(),

            // sorting

            allowSorting: true,

            sorting: grid.Sorting,

            //editing

            allowEditing: true,

            //This function gets called after a cell is edited

            afterCellEdit: AfterCellEdit,

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





