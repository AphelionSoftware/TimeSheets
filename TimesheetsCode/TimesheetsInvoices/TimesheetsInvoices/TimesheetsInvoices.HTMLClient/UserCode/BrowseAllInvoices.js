/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseAllInvoices.InvoiceTotal_postRender = function (element, contentItem) {
    
    // Get the Order on the screen

    /*var invoice = contentItem.screen.AllInvoices.selectedItem;

    // Show the current count

    element.innerText = invoice.getInvoiceAmount();
    // Method that will be called on update of count
    function updateValue() {
        element.innerText = invoice.getInvoiceAmount();
    }
    // Add event listener
    invoice.InvoiceLines.addEventListener(

        "collectionchange", updateValue);


    // Trigger load of OrderDetails

    invoice.getInvoiceAmount();


    // Clean up event listener

    contentItem.handleViewDispose(function () {

        parent.Children.removeEventListener(

            "collectionchange", updateValue);

    });
    */



};

// Function to compute the total for the Order 

function TotalAllInvoices(InvoiceLines) {

    var TotalInvoiceAmount = 0;
    // Get the data for the collection passed
    var InvoiceLines = InvoiceLines.data;

    // Loop through each row
    InvoiceLines.forEach(function (line) {
        TotalInvoiceAmount = parseFloat(TotalInvoiceAmount).toFixed(2) +
            parseFloat(line.InvoiceLineAmount).toFixed(2);

    });

    // Return TotalInvoiceAmount

    return TotalInvoiceAmount;

}
