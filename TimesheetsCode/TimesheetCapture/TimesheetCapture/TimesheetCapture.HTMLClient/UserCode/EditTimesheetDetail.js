/// <reference path="../GeneratedArtifacts/viewModel.js" />
/// <reference path="../Scripts/c1ls-3.0.20132.20.js" />

if (typeof c1ls === "undefined") {
    window.location.href = "http://bit.ly/c1ls-nuget";
}

var grid;

// http://bit.ly/c1ls-grid
//
myapp.EditTimesheetDetail.WijmoGrid_render = function (element, contentItem) {

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

myapp.EditTimesheetDetail.AddNew_canExecute = function (screen) {
    return screen.TimesheetDetailsQuery.isLoaded;
};

myapp.EditTimesheetDetail.AddNew_execute = function (screen) {
    screen.TimesheetDetailsQuery.addNew();
    grid.EntityChanged(msls.EntityState.added);
};

myapp.EditTimesheetDetail.DeleteSelected_canExecute = function (screen) {
    $(".msls-footer").removeClass("slideup");
    return screen.TimesheetDetailsQuery.selectedItem != null;
};

myapp.EditTimesheetDetail.DeleteSelected_execute = function (screen) {
    screen.TimesheetDetailsQuery.deleteSelected();
    grid.EntityChanged(msls.EntityState.deleted);
};