/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditInvoice.InvoiceTotal_postRender = function (element, contentItem) {
    // Write code here.

    // Get the Order on the screen

    var invoice = contentItem.screen.Invoice;

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

    contentItem.dataBind("value", function (value) {
        if (value) {
            $(element).text(value.toFixed(2));
        }
    });


};