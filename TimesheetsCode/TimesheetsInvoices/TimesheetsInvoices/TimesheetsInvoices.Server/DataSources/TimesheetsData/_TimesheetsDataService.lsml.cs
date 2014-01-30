using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
using Microsoft.LightSwitch.Security.Server;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

namespace LightSwitchApplication
{
    public partial class TimesheetsDataService
    {

        private string strUser()
        {
            try
            {
                string strUser = "External User Fail";
                if (Environment.UserName != null)
                {
                    strUser = Environment.UserName;
                }
                if (this.Application == null)
                {
                    return strUser;
                }
                if (this.Application.User == null)
                {
                    return strUser;
                }
                if (this.Application.User.PersonId == null)
                {
                    return strUser;
                }
                return this.Application.User.PersonId;
            }
            catch (Exception ex)
            {
                return "External user failed with error " + ex.InnerException.ToString();
            }
        }


        partial void Invoices_Inserting(Invoice entity)
        {
            try { 
            entity.sys_CreatedBy = strUser()/*Application.User.FullName*/ /*"MarkGStacey"*/;
            entity.sys_CreatedOn = System.DateTime.Now;
            entity.sys_ModifiedBy = strUser()/*Application.User.FullName*/ /*"MarkGStacey"*/;
            entity.sys_ModifiedOn = System.DateTime.Now;
            entity.LoadDate = System.DateTime.Now; 
        }
            catch { };

        }

        
        partial void Invoices_Updating(Invoice entity)
        {
            try
            {
                entity.sys_ModifiedBy = strUser()/*Application.User.FullName*/ /*"MarkGStacey"*/;
                entity.sys_ModifiedOn = System.DateTime.Now;
            }
            catch { };

        }


        partial void InvoiceLines_Inserting(InvoiceLine entity)
        {
            entity.sys_CreatedBy = strUser()/*Application.User.FullName*/ /*"MarkGStacey"*/;
            entity.sys_CreatedOn = System.DateTime.Now;
            entity.sys_ModifiedBy = strUser()/*Application.User.FullName*/ /*"MarkGStacey"*/;
            entity.sys_ModifiedOn = System.DateTime.Now;
            entity.LoadDate = System.DateTime.Now;
            if (entity.InvoiceLineAmount == null)
            {
                entity.InvoiceLineAmount = entity.InvoiceLineCalcedAmount;
            }


        }

        partial void InvoiceLines_Updating(InvoiceLine entity)
        {
            entity.sys_ModifiedBy = strUser()/*Application.User.FullName*/ /*"MarkGStacey"*/;
            entity.sys_ModifiedOn = System.DateTime.Now;
            if (entity.InvoiceLineAmount == null)
            {
                entity.InvoiceLineAmount = entity.InvoiceLineCalcedAmount;
            }

        }

        
        partial void SaveChanges_Executing()
        {

        }

        partial void Clients_Inserting(Client entity)
        {
            entity.sys_CreatedBy = strUser()/*Application.User.FullName*/ /*"MarkGStacey"*/;
            entity.sys_CreatedOn = System.DateTime.Now;
            entity.sys_ModifiedBy = strUser()/*Application.User.FullName*/ /*"MarkGStacey"*/;
            entity.sys_ModifiedOn = System.DateTime.Now;
            entity.LoadDate = System.DateTime.Now; 

        }

        partial void Clients_Updating(Client entity)
        {
            entity.sys_ModifiedBy = strUser()/*Application.User.FullName*/ /*"MarkGStacey"*/;
            entity.sys_ModifiedOn = System.DateTime.Now;

        }

        partial void Clients_Validate(Client entity, EntitySetValidationResultsBuilder results)
        {

        }

        partial void Invoices_Inserted(Invoice entity)
        {
            

        }

        partial void Clients_Inserted(Client entity)
        {
            Project p = this.DataWorkspace.TimesheetsData.Projects.AddNew();
            p.Client = entity;
            p.sys_CreatedBy = strUser()/*Application.User.FullName*/ /*"MarkGStacey"*/;
            p.sys_CreatedOn = System.DateTime.Now;
            p.sys_ModifiedBy = strUser()/*Application.User.FullName*/ /*"MarkGStacey"*/;
            p.sys_ModifiedOn = System.DateTime.Now;
            p.LoadDate = System.DateTime.Now;
            p.ProjectName = entity.ClientName;
            p.ProjectSourceKey = entity.ClientSourceKey;
            p.ProjectCode = entity.ClientCode;
            //this.DataWorkspace.TimesheetsData.SaveChanges();
            
        }

        partial void FilteredDates_PreprocessQuery(ref IQueryable<DimDate> query)
        {
            DateTime endDate = DateTime.Now.AddMonths(2).AddDays(-1);
            DateTime startDate = new DateTime(  DateTime.Now.Year, 1, 1).AddMonths(-4);
            query = (from dimDates in query
                     where dimDates.c_Date >= startDate
                     where dimDates.c_Date <= endDate
                     orderby dimDates.DateID descending
                     select dimDates);
        
        }

        partial void TimesheetDetails_Updated(TimesheetDetail entity)
        {
            //RecalcInvoiceAmounts();

        }

        private void RecalcInvoiceAmounts()
        {
            using (SqlConnection connection = new SqlConnection())
            {
                string connectionStringName = this.DataWorkspace.TimesheetsData.Details.Name;
                connection.ConnectionString = ConfigurationManager.ConnectionStrings[connectionStringName].ConnectionString;

                string procedure = "dbo.invInsertInvoiceLines";
                using (SqlCommand command = new SqlCommand(procedure, connection))
                {
                    command.CommandType = CommandType.StoredProcedure;


                    connection.Open();
                    command.ExecuteNonQuery();
                    connection.Close();
                }
            }

            this.Details.DiscardChanges();
        }

        partial void InvoiceLines_Updated(InvoiceLine entity)
        {
            RecalcInvoiceAmounts();
        }

        partial void InvoiceLines_Inserted(InvoiceLine entity)
        {
            RecalcInvoiceAmounts();
        }

        partial void Invoices_Updated(Invoice entity)
        {

        }

        partial void SaveChanges_Executed()
        {

            RecalcInvoiceAmounts();
        }

    }
}
