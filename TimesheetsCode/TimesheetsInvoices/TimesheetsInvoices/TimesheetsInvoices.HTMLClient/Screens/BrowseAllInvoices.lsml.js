/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseAllInvoices.Invoice_ItemTap_execute = function (screen) {
    // Write code here.
    myapp.showAddEditInvoice(null,
        {
            beforeShown: function (addEditInvoiceScreen) {
                addEditInvoiceScreen.Invoice = screen.Invoices.selectedItem;
            },
            afterClosed: function (addEditScreen, navigationAction) {
                // If the user commits the change,
                // update the selected Invoice on the Main screen
                if (navigationAction === msls.NavigateBackAction.commit) {
                    // The .refresh() method refreshes the Invoice
                    screen.Invoices.selectedItem.details.refresh();
                }

            }
        }
        );


        
};