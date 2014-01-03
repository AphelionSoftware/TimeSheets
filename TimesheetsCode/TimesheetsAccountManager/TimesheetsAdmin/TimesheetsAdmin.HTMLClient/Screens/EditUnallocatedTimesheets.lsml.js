/// <reference path="../GeneratedArtifacts/viewModel.js" />
/// <reference path="../Scripts/c1ls-3.0.20132.20.js" />

if (typeof c1ls === "undefined") {
    window.location.href = "http://bit.ly/c1ls-nuget";
}

var grid;

// http://bit.ly/c1ls-grid
//
myapp.EditUnallocatedTimesheets.WijmoGrid_render = function (element, contentItem) {

    var table = $("<table/>");
    table.appendTo($(element));

    contentItem.value.oncollectionchange = function () {
        grid = c1ls.getGridContent(table, contentItem, { autoHide: true });

        table.wijgrid({
            // initialization
            columns: grid.Columns,
            data: grid.Rows(),

            //edit
            beforeCellEdit: onBeforeCellEdit,
            afterCellEdit: onAfterCellEdit,

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


// create custom editors for columns
function onBeforeCellEdit(e, args) {
    switch (args.cell.column().key) {
        case "BillingStatusID":
            createCombo(args);
            args.handled = true;
            break;
            }
}



// delete custom editors when done
function onAfterCellEdit(e, args) {
    switch (args.cell.column().key) {
        case "BillingStatusID":
            args.cell.container().find("input").wijcombobox("destroy");
            break;
        }
}

function createCombo(args) {

    // build options array
    var arr = [];
    var x = myapp.activeDataWorkspace.Timesheets_Data.BillingStatusSet.load().then(function (Query) {


        for (var i = 0; i < Query.results.length; i++) {
            arr.push({ label: Query.results[i].details._.BillingStatusName, value: Query.results[i].details._.BillingStatusID });
        }

        // build combo and place it in the cell
        $("<input id='tagsinput'/>")
            .width("100%")
            .val(args.cell.value())
            .appendTo(args.cell.container().empty())
            .wijcombobox({
                data: $.map($.extend(true, [], arr), function (item, index) {
                    if (item.value === args.cell.value()) {
                        item.selected = true;
                    }
                    return item;
                }),
                isEditable: false
            })
            .focus();
        $("#tagsinput").bind("wijcomboboxselect", function(e, data) {
            data.label = data.value;
        } );
        

    });
}


myapp.EditUnallocatedTimesheets.AddNew_canExecute = function (screen) {
    return screen.UnallocatedTimesheetsSorted.isLoaded;
};

myapp.EditUnallocatedTimesheets.AddNew_execute = function (screen) {
    screen.UnallocatedTimesheetsSorted.addNew();
    grid.EntityChanged(msls.EntityState.added);
};

myapp.EditUnallocatedTimesheets.DeleteSelected_canExecute = function (screen) {
    $(".msls-footer").removeClass("slideup");
    return screen.UnallocatedTimesheetsSorted.selectedItem != null;
};

myapp.EditUnallocatedTimesheets.DeleteSelected_execute = function (screen) {
    screen.UnallocatedTimesheetsSorted.deleteSelected();
    grid.EntityChanged(msls.EntityState.deleted);
};
