/// <reference path="../GeneratedArtifacts/viewModel.js" />
/// <reference path="../Scripts/c1ls-3.0.20132.17.js" />

if (typeof c1ls === "undefined") {
    window.location.href = "http://bit.ly/c1ls-nuget";
}

// http://bit.ly/c1ls-grid
//
myapp.ViewSalesOrderDetail.WijmoGrid_render = function (element, contentItem) {

    // Write code here.

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
 
            var data = $("#gridview").wijgrid("data");
 
            //Get the ID
 
            var id = data[rowIndex][0];
 
 
            //Get the record via an asynchronous call
 
            myapp.activeDataWorkspace.WijmoGridTestData.SalesOrderDetails_SingleOrDefault(x.data[0]).execute().then(function (SalesOrderDetailsQuery) {
 
                //Set the value of the column you're editing
 
                switch (args.cell.column().key) {
 
                    case "OrderQty":
 
                        SalesOrderDetailsQuery.results[0].OrderQty = value;
 
                        break;
 
                    case "LineTotal":
 
                        SalesOrderDetailsQuery.results[0].LineTotal = value;
 
                        break;
 
                    case "UnitPrice":
 
                        SalesOrderDetailsQuery.results[0].UnitPrice = value;
 
                        break;
 
                    case "UnitPriceDiscount":
 
                        SalesOrderDetailsQuery.results[0].UnitPriceDiscount = value;
 
                        break;
 
                }
 
                //Push the result back up to the viewmodel
 
                SalesOrderDetailsQuery.results.push();
 
                //Optionally, save changes. This can be done on a Save event as well
 
                myapp.activeDataWorkspace.WijmoGridTestData.saveChanges();
 
            });
 
        }


    };


};
myapp.ViewSalesOrderDetail.SalesOrderDetailID_postRender = function (element, contentItem) {
    // Write code here.

};