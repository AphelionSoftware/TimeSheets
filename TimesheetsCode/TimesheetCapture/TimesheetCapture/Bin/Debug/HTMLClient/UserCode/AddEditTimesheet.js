

myapp.AddEditTimesheet.Timesheet_TimesheetDate_render = function (element, contentItem) {
    // Write code here.
    var shippedDate = $('<p id="TimesheetDate"></p>');
    shippedDate.appendTo($(element));
    contentItem.dataBind("stringValue", function (newValue) { shippedDate.text(newValue); });

    
};

