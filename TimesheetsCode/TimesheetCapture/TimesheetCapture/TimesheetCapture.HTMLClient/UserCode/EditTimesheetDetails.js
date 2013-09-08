/// <reference path="../GeneratedArtifacts/viewModel.js" />
/// <reference path="../Scripts/c1ls-3.0.20132.20.js" />

if (typeof c1ls === "undefined") {
    window.location.href = "http://bit.ly/c1ls-nuget";
}

var grid;

// http://bit.ly/c1ls-grid
//
myapp.EditTimesheetDetails.WijmoGrid_render = function (element, contentItem) {

    var table = $("<table/>");
    table.appendTo($(element));

    contentItem.value.oncollectionchange = function () {
        grid = c1ls.getGridContent(table, contentItem, { autoHide: true });

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
            showRowHeader: true,
            showSelectionOnRender: false,
            cellClicked: grid.OnCellClicked,
            cellStyleFormatter: grid.OnCellFormat
        });
    };

    c1ls.renderControl(contentItem);
};

myapp.EditTimesheetDetails.AddNew_canExecute = function (screen) {
    return screen.TimesheetDetailsQuery.isLoaded;
};

myapp.EditTimesheetDetails.AddNew_execute = function (screen) {
    var row = screen.TimesheetDetailsQuery.addNew();
    myapp.activeDataWorkspace.TimesheetsData.Timesheets_SingleOrDefault(screen.__TimesheetID).execute().then(function (Query) {
        row.setTimesheet (Query.results[0]);
    });

    grid.EntityChanged(msls.EntityState.added);
    
    contentItem = screen.findContentItem("TimesheetID");
    dropdown = screen.findContentItem("TimesheetDetailsQuery_selectedItem_Timesheet");
 };

myapp.EditTimesheetDetails.DeleteSelected_canExecute = function (screen) {
    $(".msls-footer").removeClass("slideup");
    return screen.TimesheetDetailsQuery.selectedItem != null;
};

myapp.EditTimesheetDetails.DeleteSelected_execute = function (screen) {
    screen.TimesheetDetailsQuery.deleteSelected();
    grid.EntityChanged(msls.EntityState.deleted);
    
};





myapp.EditTimesheetDetails.created = function (screen) {

    /*
    var LSTable = screen.TimesheetDetailsQuery;
    // Can only safely do this if the LSTable is not modified.
    if (LSTable.details.entityState !== msls.EntityState.unchanged) {
            return msls.showMessageBox(
            "Cannot refresh the page because it was changed.",
       {
            title: "Cannot refresh"
        });
    }
   

    // Get the current LSTable ID

    var TimesheetID = screen.__TimesheetID;

    // Construct a new data workspace that is isolated from the
    // application’s data workspace and load a separate instance
    // of this LSTable from server.



    var dataWorkspace = new myapp.DataWorkspace();
    return dataWorkspace.TimesheetsData.TimesheetDetailsQuery(TimesheetID).execute().then(function (result) {
        // Query succeeded. If the LSTable still exists on
        // server, merge it.
        var serverLSTable = result.results[0];

        if (serverLSTable) {

            // Replace the raw JSON object representing the
            // LSTable.
            screen.details._ = serverLSTable.details._;


            // Raise changes notification for all storage
            // properties, so the UI can update.
            screen.details.properties.all().forEach(

           function (prop) {
               if (prop instanceof
                msls.Entity.Details.StorageProperty) {

                   // The property’s value.
                   prop.dispatchChange("value");

                   // The entity’s property value.
                   LSTable.dispatchChange(prop.name);
               }
           });
        }

    }, function (error) {

        msls.showMessageBox(error, {
            title: "Refresh failed"
        });
    });

};
*/
};
