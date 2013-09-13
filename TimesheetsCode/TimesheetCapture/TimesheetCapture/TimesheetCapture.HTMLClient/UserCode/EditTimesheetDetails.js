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
            selectionMode: "multirow", //allow multi-row delete
            showRowHeader: true,
            showSelectionOnRender: true,
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
    // Write code here.


};
 
myapp.EditTimesheetDetails.Instructions_postRender = function (element, contentItem) {
    // Write code here.
    contentItem.dataBind("value", function (value) {
        
        $(element).text = "Click on the grid to populate the drop-down boxes.";
    });

};