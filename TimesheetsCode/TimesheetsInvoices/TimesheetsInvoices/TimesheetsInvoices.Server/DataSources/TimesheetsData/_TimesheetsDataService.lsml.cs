using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
using Microsoft.LightSwitch.Security.Server;
using System.Data.Sql;
using System.Data.SqlClient;

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

        }

        partial void InvoiceLines_Updating(InvoiceLine entity)
        {
            entity.sys_ModifiedBy = strUser()/*Application.User.FullName*/ /*"MarkGStacey"*/;
            entity.sys_ModifiedOn = System.DateTime.Now;

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

    }
}
