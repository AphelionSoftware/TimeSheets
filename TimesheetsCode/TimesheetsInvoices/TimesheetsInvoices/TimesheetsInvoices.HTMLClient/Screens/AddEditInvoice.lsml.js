/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditInvoice.InvoiceTotal_postRender = function (element, contentItem) {
    // Write code here.
    function updateTotal() {
        // Compute the total for the invoice
        contentItem.screen.InvoiceTotal =
            Totalinvoices(contentItem.screen.InvoiceLines);

        contentItem.screen.InvoiceCalcedTotal =
            TotalCalcinvoices(contentItem.screen.InvoiceLines);

    }

    // Set a dataBind to update the value when the collection changes

    contentItem.dataBind("screen.InvoiceLines.count", updateTotal)

};




// Function to compute the calculated total for the invoice 

function TotalCalcinvoices(InvoiceLines) {

    // Start with 0

    var TotalAmountOfinvoices = 0;

    // Get the data for the collection passed

    var InvoiceLine = InvoiceLines.data;

    // Loop through each row

    InvoiceLine.forEach(function (invoiceL) {

        // Add each row to TotalAmountOfinvoices

        TotalAmountOfinvoices = parseFloat(TotalAmountOfinvoices) +

            parseFloat(invoiceL.InvoiceLineCalcedAmount );

    });

    // Return TotalAmountOfinvoices

    return TotalAmountOfinvoices;

}

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


myapp.AddEditInvoice.InvoiceLines_ItemTap_execute = function (screen) {
    // Write code here.
    myapp.showAddEditInvoiceLine(screen.InvoiceLines.selectedItem
        , {
            beforeShown: function ()
            {
            }
            ,
            afterClosed: function (addEditScreen, navigationAction) {
                // If the user commits the change,
                // update the selected Invoice on the Main screen
                if (navigationAction === msls.NavigateBackAction.commit) {
                    // The .refresh() method refreshes the Invoice
                    screen.InvoiceLines.selectedItem.details.refresh();
                    screen.Invoice.details.refresh();
                    
                }

            }
        }
        );


};
myapp.AddEditInvoice.created = function (screen) {
    // Write code here.

    // Write code here.
    if (screen.Invoice.entityState !== msls.EntityState.unchanged){
        screen.Invoice.details.refresh();
    }
    for ( i = 0; i < screen.Invoice.InvoiceLines.count; i++){
        if (screen.Invoice.InvoiceLines[i].entityState !== msls.EntityState.unchanged) {
            screen.Invoice.InvoiceLines[i].refresh();
        }
    }




};
myapp.AddEditInvoice.UseCalcedAmount_execute = function (screen) {
    // Write code here.
    screen.InvoiceLines.selectedItem.InvoiceLineAmount = screen.InvoiceLines.selectedItem.InvoiceLineCalcedAmount;
    screen.InvoiceLines.selectedItem.details.refresh();
    screen.Invoice.details.refresh();

};