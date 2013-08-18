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

            //This function gets called after a cell is edited
            afterCellEdit: AfterCellEdit,


            // selection
            selectionMode: "singleRow",
            showRowHeader: grid.ShowRowHeader,
            showSelectionOnRender: false,
            cellClicked: grid.OnCellClicked,
            cellStyleFormatter: grid.OnCellFormat
        });
        //Function called by the Grid

        function AfterCellEdit(e, args) {

            //Get the changed value

            var value = args.cell.value();

            //Get the current row

            var x = args.cell.row();


            //Get the ID we have in our hidden first column

            //Start with the rowindex

            var rowIndex = args.cell.rowIndex();

            //Get the data in the grid

            var data = table.wijgrid("data");

            //Get the ID

            var id = data[rowIndex][0];


            //Get the record via an asynchronous call

            myapp.activeDataWorkspace.TimesheetsData.TimesheetDetails_SingleOrDefault(x.data[0]).execute().then(function (TimesheetDetailsQuery) {

                //Set the value of the column you're editing
                var ColumnKey = args.cell.column().key;
                
                switch (args.cell.column().key) {

                    case "StandardDate":

                        TimesheetDetailsQuery.results[0].setDimDate = value;

                        break;

                    case "ProjectSourceKey":

                        TimesheetDetailsQuery.results[0].setProject = value;

                        break;

                    case "TypeOfWorkSourceKey":

                        TimesheetDetailsQuery.results[0].setTypeOfWork = value;

                        break;

                    case "Hours":

                        TimesheetDetailsQuery.results[0].Hours = value;

                        break;

                    case "Comments":

                        TimesheetDetailsQuery.results[0].Comments = value;

                        break;

                }

                //Push the result back up to the viewmodel

                TimesheetDetailsQuery.results.push();

                //Optionally, save changes. This can be done on a Save event as well
                myapp.activeDataWorkspace.TimesheetsData.saveChanges();

                
            });
        }
    };
};

myapp.ViewTimesheet.SaveChanges_execute = function (screen) {

    

};