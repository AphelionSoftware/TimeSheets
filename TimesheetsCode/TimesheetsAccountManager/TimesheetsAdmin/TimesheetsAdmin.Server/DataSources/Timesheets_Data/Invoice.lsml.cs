using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
namespace LightSwitchApplication
{
    public partial class Invoice
    {
        partial void InvoiceTotal_Compute(ref decimal result)
        {
            // Set result to the desired field value
            decimal dInvoiceTotal = 0.0M;

            var colInvoiceLines = from InvoiceLines in this.InvoiceLines
                                  select InvoiceLines;

            foreach (var InvoiceLine in colInvoiceLines)
            {
                dInvoiceTotal = dInvoiceTotal + (InvoiceLine.InvoiceLineAmount);

            }


            result = dInvoiceTotal;

        }
    }
}
