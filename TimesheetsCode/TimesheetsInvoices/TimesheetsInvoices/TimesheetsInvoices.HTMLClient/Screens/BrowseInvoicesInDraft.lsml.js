﻿/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseInvoicesInDraft.InvoiceDraft_ItemTap_execute = function (screen) {
    // Write code here.
    //myapp.showAddEditInvoice(null);
    myapp.showAddEditInvoice(screen.InvoicesInDraft.selectedItem
        , {

            afterClosed: function (addEditScreen, navigationAction) {
                // If the user commits the change,
                // update the selected Invoice on the Main screen
                if (navigationAction === msls.NavigateBackAction.commit) {
                    // The .refresh() method refreshes the Invoice
                    screen.InvoicesInDraft.selectedItem.details.refresh();
                }

            }
        }
        );


};