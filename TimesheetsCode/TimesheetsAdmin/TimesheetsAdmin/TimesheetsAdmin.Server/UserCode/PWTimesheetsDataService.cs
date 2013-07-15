using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
using Microsoft.LightSwitch.Security.Server;
namespace LightSwitchApplication
{
    public partial class PWTimesheetsDataService
    {
        partial void BillingDetails_Inserting(BillingDetail entity)
        {
            entity.sys_CreatedBy = /*Application.User.FullName*/"MarkGStacey";
            entity.sys_CreatedOn = System.DateTime.Now;
            entity.sys_ModifiedBy = /*Application.User.FullName*/"MarkGStacey";
            entity.sys_ModifiedOn = System.DateTime.Now;
            entity.BillingDetailSourceKey = entity.Person.PersonName + " at " + entity.Rate.ToString() + " for " + entity.Client.ClientName;
        }

        partial void BillingDetails_Updating(BillingDetail entity)
        {
            entity.sys_ModifiedBy = /*Application.User.FullName*/"MarkGStacey";
            entity.sys_ModifiedOn = System.DateTime.Now;
            entity.BillingDetailSourceKey = entity.Person.PersonName + " at R" + entity.Rate.ToString() + " for " + entity.Client.ClientName;
        
        }

        partial void Clients_Inserting(Client entity)
        {
            entity.sys_CreatedBy = /*Application.User.FullName*/"MarkGStacey";
            entity.sys_CreatedOn = System.DateTime.Now;
            entity.sys_ModifiedBy = /*Application.User.FullName*/"MarkGStacey";
            entity.sys_ModifiedOn = System.DateTime.Now;
        }

        partial void Clients_Updating(Client entity)
        {
            entity.sys_ModifiedBy = /*Application.User.FullName*/"MarkGStacey";
            entity.sys_ModifiedOn = System.DateTime.Now;
        }

        partial void People_Inserting(Person entity)
        {
            entity.sys_CreatedBy = /*Application.User.FullName*/"MarkGStacey";
            entity.sys_CreatedOn = System.DateTime.Now;
            entity.sys_ModifiedBy = /*Application.User.FullName*/"MarkGStacey";
            entity.sys_ModifiedOn = System.DateTime.Now;
        }

        partial void People_Updating(Person entity)
        {
            entity.sys_ModifiedBy = /*Application.User.FullName*/"MarkGStacey";
            entity.sys_ModifiedOn = System.DateTime.Now;
        }

        partial void Projects_Inserting(Project entity)
        {
            entity.sys_CreatedBy = /*Application.User.FullName*/"MarkGStacey";
            entity.sys_CreatedOn = System.DateTime.Now;
            entity.sys_ModifiedBy = /*Application.User.FullName*/"MarkGStacey";
            entity.sys_ModifiedOn = System.DateTime.Now;
        }

        partial void Projects_Updating(Project entity)
        {
            entity.sys_ModifiedBy = /*Application.User.FullName*/"MarkGStacey";
            entity.sys_ModifiedOn = System.DateTime.Now;
        }

        partial void TimesheetDetails_Inserting(TimesheetDetail entity)
        {
            entity.sys_CreatedBy = /*Application.User.FullName*/"MarkGStacey";
            entity.sys_CreatedOn = System.DateTime.Now;
            entity.sys_ModifiedBy = /*Application.User.FullName*/"MarkGStacey";
            entity.sys_ModifiedOn = System.DateTime.Now;
        }

        partial void TimesheetDetails_Updating(TimesheetDetail entity)
        {
            entity.sys_ModifiedBy = /*Application.User.FullName*/"MarkGStacey";
            entity.sys_ModifiedOn = System.DateTime.Now;
        }

        partial void Timesheets_Inserting(Timesheet entity)
        {
            entity.sys_CreatedBy = /*Application.User.FullName*/"MarkGStacey";
            entity.sys_CreatedOn = System.DateTime.Now;
            entity.sys_ModifiedBy = /*Application.User.FullName*/"MarkGStacey";
            entity.sys_ModifiedOn = System.DateTime.Now;
        }

        partial void Timesheets_Updating(Timesheet entity)
        {
            entity.sys_ModifiedBy = /*Application.User.FullName*/"MarkGStacey";
            entity.sys_ModifiedOn = System.DateTime.Now;
        }

        partial void TypeOfWorks_Inserting(TypeOfWork entity)
        {
            entity.sys_CreatedBy = /*Application.User.FullName*/"MarkGStacey";
            entity.sys_CreatedOn = System.DateTime.Now;
            entity.sys_ModifiedBy = /*Application.User.FullName*/"MarkGStacey";
            entity.sys_ModifiedOn = System.DateTime.Now;
        }

        partial void TypeOfWorks_Updating(TypeOfWork entity)
        {
            entity.sys_ModifiedBy = /*Application.User.FullName*/"MarkGStacey";
            entity.sys_ModifiedOn = System.DateTime.Now;
        }

        partial void BillingStatusSet_Inserting(BillingStatus entity)
        {
            entity.sys_CreatedBy = /*Application.User.FullName*/"MarkGStacey";
            entity.sys_CreatedOn = System.DateTime.Now;
            entity.sys_ModifiedBy = /*Application.User.FullName*/"MarkGStacey";
            entity.sys_ModifiedOn = System.DateTime.Now;
        }

        partial void BillingStatusSet_Updating(BillingStatus entity)
        {
            entity.sys_ModifiedBy = /*Application.User.FullName*/"MarkGStacey";
            entity.sys_ModifiedOn = System.DateTime.Now;
        }

        
        partial void ClientRoles_Inserting(ClientRole entity)
        {
            entity.sys_CreatedBy = /*Application.User.FullName*/"MarkGStacey";
            entity.sys_CreatedOn = System.DateTime.Now;
            entity.sys_ModifiedBy = /*Application.User.FullName*/"MarkGStacey";
            entity.sys_ModifiedOn = System.DateTime.Now;
        
        }

        partial void ClientRoles_Updating(ClientRole entity)
        {
            entity.sys_ModifiedBy = /*Application.User.FullName*/"MarkGStacey";
            entity.sys_ModifiedOn = System.DateTime.Now;
        
        }

        partial void ActiveTypes_Inserting(ActiveType entity)
        {

        }
    }
}
