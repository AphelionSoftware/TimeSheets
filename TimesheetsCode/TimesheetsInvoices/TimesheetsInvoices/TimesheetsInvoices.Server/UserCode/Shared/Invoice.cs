using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
namespace LightSwitchApplication
{
    public partial class Invoice
    {
        partial void Invoice_Created()
        {

        }

        partial void InvoiceTotal_Compute(ref decimal result)
        {
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
