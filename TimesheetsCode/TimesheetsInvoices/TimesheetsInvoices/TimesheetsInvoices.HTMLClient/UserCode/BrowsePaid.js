/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowsePaid.InvoiceTotal_postRender = function (element, contentItem) {
    // Write code here.
    function updateTotal() {
        // Compute the total for the Order
        contentItem.screen.InvoiceTotal =
            TotalPaidInvoices(contentItem.screen.InvoiceLinesSorted);
    }
    // Set a dataBind to update the value when the collection changes
    contentItem.dataBind("screen.InvoiceLinesSorted.count", updateTotal)


};

// Function to compute the total for the Order 

function TotalPaidInvoices(InvoiceLines) {

    var TotalInvoiceAmount = 0;
    // Get the data for the collection passed
    var InvoiceLines = InvoiceLines.data;

    // Loop through each row
    InvoiceLines.forEach(function (line) {
        TotalInvoiceAmount = TotalInvoiceAmount +
            (line.InvoiceLineAmount);

    });

    // Return TotalInvoiceAmount

    return TotalInvoiceAmount;

}
