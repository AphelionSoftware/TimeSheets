/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseIssuedButNotPaid.InvoiceTotal_postRender = function (element, contentItem) {
        function updateTotal() {
            // Compute the total for the Order
            contentItem.screen.InvoiceTotal =
                TotalIssuedInvoices(contentItem.screen.InvoiceLinesSorted);
        }
        // Set a dataBind to update the value when the collection changes
        contentItem.dataBind("screen.InvoiceLinesSorted.count", updateTotal)


    };

    // Function to compute the total for the Order 

    function TotalIssuedInvoices(InvoiceLines) {

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
