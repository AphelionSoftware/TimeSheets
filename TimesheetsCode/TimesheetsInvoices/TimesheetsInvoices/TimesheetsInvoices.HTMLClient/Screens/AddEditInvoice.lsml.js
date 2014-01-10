/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditInvoice.InvoiceTotal_postRender = function (element, contentItem) {
    // Write code here.
    function updateTotal() {
        // Compute the total for the invoice
        contentItem.screen.InvoiceTotal =

            Totalinvoices(contentItem.screen.InvoiceLines);

    }

    // Set a dataBind to update the value when the collection changes

    contentItem.dataBind("screen.InvoiceLines.count", updateTotal)

};


// Function to compute the total for the invoice 

function Totalinvoices(InvoiceLines) {

    // Start with 0

    var TotalAmountOfinvoices = 0;

    // Get the data for the collection passed

    var InvoiceLine = InvoiceLines.data;

    // Loop through each row

    InvoiceLine.forEach(function (invoiceL) {

        // Add each row to TotalAmountOfinvoices

        TotalAmountOfinvoices = parseFloat(TotalAmountOfinvoices) +

            parseFloat(invoiceL.InvoiceLineAmount);

    });

    // Return TotalAmountOfinvoices

    return TotalAmountOfinvoices;

}

