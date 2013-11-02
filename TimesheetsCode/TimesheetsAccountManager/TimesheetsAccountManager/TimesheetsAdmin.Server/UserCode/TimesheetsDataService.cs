using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
using Microsoft.LightSwitch.Security.Server;
using System.Linq.Expressions;

namespace LightSwitchApplication
{
    public partial class TimesheetsDataService
    {
        partial void BillingDetails_Inserting(BillingDetail entity)
        {
            entity.sys_CreatedBy = Environment.UserName/*Application.User.FullName*/ /*"MarkGStacey"*/;
            entity.sys_CreatedOn = System.DateTime.Now;
            entity.sys_ModifiedBy = Environment.UserName/*Application.User.FullName*/ /*"MarkGStacey"*/;
            entity.sys_ModifiedOn = System.DateTime.Now;
            entity.BillingDetailSourceKey = entity.Person.PersonName + " at " + entity.Rate.ToString() + " for " + entity.Client.ClientName;
        }

        partial void BillingDetails_Updating(BillingDetail entity)
        {
            entity.sys_ModifiedBy = Environment.UserName/*Application.User.FullName*/ /*"MarkGStacey"*/;
            entity.sys_ModifiedOn = System.DateTime.Now;
            entity.BillingDetailSourceKey = entity.Person.PersonName + " at R" + entity.Rate.ToString() + " for " + entity.Client.ClientName;
        
        }

        partial void Clients_Inserting(Client entity)
        {
            entity.sys_CreatedBy = Environment.UserName/*Application.User.FullName*/ /*"MarkGStacey"*/;
            entity.sys_CreatedOn = System.DateTime.Now;
            entity.sys_ModifiedBy = Environment.UserName/*Application.User.FullName*/ /*"MarkGStacey"*/;
            entity.sys_ModifiedOn = System.DateTime.Now;
        }

        partial void Clients_Updating(Client entity)
        {
            entity.sys_ModifiedBy = Environment.UserName/*Application.User.FullName*/ /*"MarkGStacey"*/;
            entity.sys_ModifiedOn = System.DateTime.Now;
        }

        partial void People_Inserting(Person entity)
        {
            entity.sys_CreatedBy = Environment.UserName/*Application.User.FullName*/ /*"MarkGStacey"*/;
            entity.sys_CreatedOn = System.DateTime.Now;
            entity.sys_ModifiedBy = Environment.UserName/*Application.User.FullName*/ /*"MarkGStacey"*/;
            entity.sys_ModifiedOn = System.DateTime.Now;
        }

        partial void People_Updating(Person entity)
        {
            entity.sys_ModifiedBy = Environment.UserName/*Application.User.FullName*/ /*"MarkGStacey"*/;
            entity.sys_ModifiedOn = System.DateTime.Now;
        }

        partial void Projects_Inserting(Project entity)
        {
            entity.sys_CreatedBy = Environment.UserName/*Application.User.FullName*/ /*"MarkGStacey"*/;
            entity.sys_CreatedOn = System.DateTime.Now;
            entity.sys_ModifiedBy = Environment.UserName/*Application.User.FullName*/ /*"MarkGStacey"*/;
            entity.sys_ModifiedOn = System.DateTime.Now;
        }

        partial void Projects_Updating(Project entity)
        {
            entity.sys_ModifiedBy = Environment.UserName/*Application.User.FullName*/ /*"MarkGStacey"*/;
            entity.sys_ModifiedOn = System.DateTime.Now;
        }

        partial void TimesheetDetails_Inserting(TimesheetDetail entity)
        {
            entity.sys_CreatedBy = Environment.UserName/*Application.User.FullName*/ /*"MarkGStacey"*/;
            entity.sys_CreatedOn = System.DateTime.Now;
            entity.sys_ModifiedBy = Environment.UserName/*Application.User.FullName*/ /*"MarkGStacey"*/;
            entity.sys_ModifiedOn = System.DateTime.Now;
        }

        partial void TimesheetDetails_Updating(TimesheetDetail entity)
        {
            entity.sys_ModifiedBy = Environment.UserName/*Application.User.FullName*/ /*"MarkGStacey"*/;
            entity.sys_ModifiedOn = System.DateTime.Now;
        }

        partial void Timesheets_Inserting(Timesheet entity)
        {
            entity.sys_CreatedBy = Environment.UserName/*Application.User.FullName*/ /*"MarkGStacey"*/;
            entity.sys_CreatedOn = System.DateTime.Now;
            entity.sys_ModifiedBy = Environment.UserName/*Application.User.FullName*/ /*"MarkGStacey"*/;
            entity.sys_ModifiedOn = System.DateTime.Now;
        }

        partial void Timesheets_Updating(Timesheet entity)
        {
            entity.sys_ModifiedBy = Environment.UserName/*Application.User.FullName*/ /*"MarkGStacey"*/;
            entity.sys_ModifiedOn = System.DateTime.Now;
        }

        partial void TypeOfWorks_Inserting(TypeOfWork entity)
        {
            entity.sys_CreatedBy = Environment.UserName/*Application.User.FullName*/ /*"MarkGStacey"*/;
            entity.sys_CreatedOn = System.DateTime.Now;
            entity.sys_ModifiedBy = Environment.UserName/*Application.User.FullName*/ /*"MarkGStacey"*/;
            entity.sys_ModifiedOn = System.DateTime.Now;
        }

        partial void TypeOfWorks_Updating(TypeOfWork entity)
        {
            entity.sys_ModifiedBy = Environment.UserName/*Application.User.FullName*/ /*"MarkGStacey"*/;
            entity.sys_ModifiedOn = System.DateTime.Now;
        }

        partial void BillingStatusSet_Inserting(BillingStatus entity)
        {
            entity.sys_CreatedBy = Environment.UserName/*Application.User.FullName*/ /*"MarkGStacey"*/;
            entity.sys_CreatedOn = System.DateTime.Now;
            entity.sys_ModifiedBy = Environment.UserName/*Application.User.FullName*/ /*"MarkGStacey"*/;
            entity.sys_ModifiedOn = System.DateTime.Now;
        }

        partial void BillingStatusSet_Updating(BillingStatus entity)
        {
            entity.sys_ModifiedBy = Environment.UserName/*Application.User.FullName*/ /*"MarkGStacey"*/;
            entity.sys_ModifiedOn = System.DateTime.Now;
        }

        
        partial void ClientRoles_Inserting(ClientRole entity)
        {
            entity.sys_CreatedBy = Environment.UserName/*Application.User.FullName*/ /*"MarkGStacey"*/;
            entity.sys_CreatedOn = System.DateTime.Now;
            entity.sys_ModifiedBy = Environment.UserName/*Application.User.FullName*/ /*"MarkGStacey"*/;
            entity.sys_ModifiedOn = System.DateTime.Now;
        
        }

        partial void ClientRoles_Updating(ClientRole entity)
        {
            entity.sys_ModifiedBy = Environment.UserName/*Application.User.FullName*/ /*"MarkGStacey"*/;
            entity.sys_ModifiedOn = System.DateTime.Now;
        
        }

        partial void ActiveTypes_Inserting(ActiveType entity)
        {

        }

        partial void Projects_Filter(ref Expression<Func<Project, bool>> filter)
        {

            filter = (e => this.Application.User.Identity.Name.EndsWith(e.Client.Person.SharepointUserName)
                        || Environment.UserName.EndsWith(e.Client.Person.SharepointUserName)
                        || this.Application.User.Identity.Name.EndsWith(e.Client.Person.ADUsername)
                        || Environment.UserName.EndsWith(e.Client.Person.ADUsername)
                        || this.Application.User.Identity.Name.Contains("markgstacey")
                        || Environment.UserName.Contains("markgstacey")
                );

        }

        partial void Clients_Filter(ref Expression<Func<Client, bool>> filter)
        {
            // filter = e => e.IntegerProperty == 0;
            filter = (e => this.Application.User.Identity.Name.EndsWith(e.Person.SharepointUserName)
                        || Environment.UserName.EndsWith(e.Person.SharepointUserName)
                        || this.Application.User.Identity.Name.EndsWith(e.Person.ADUsername)
                        || Environment.UserName.EndsWith(e.Person.ADUsername)
                        || this.Application.User.Identity.Name.Contains("markgstacey")
                        || Environment.UserName.Contains("markgstacey")
                        
                        );

        }

        partial void Timesheets_Filter(ref Expression<Func<Timesheet, bool>> filter)
        {
           // filter = (e => this.Application.User.Identity.Name.EndsWith( e.TimesheetDetails.c  );
            //No easy way to filter by timesheets containing a client
        }

        partial void TimesheetDetails_Filter(ref Expression<Func<TimesheetDetail, bool>> filter)
        {
            // filter = e => e.IntegerProperty == 0;
            filter = (e => this.Application.User.Identity.Name.EndsWith(e.Project.Client.Person.SharepointUserName)
                        || Environment.UserName.EndsWith(e.Project.Client.Person.SharepointUserName)
                        || this.Application.User.Identity.Name.EndsWith(e.Project.Client.Person.ADUsername)
                        || Environment.UserName.EndsWith(e.Project.Client.Person.ADUsername)
                        || this.Application.User.Identity.Name.Contains("markgstacey")
                        || Environment.UserName.Contains("markgstacey"));
            
            
        }

        partial void BillingDetails_Filter(ref Expression<Func<BillingDetail, bool>> filter)
        {
            filter = (e => this.Application.User.Identity.Name.EndsWith(e.Client.Person.SharepointUserName)
                        || Environment.UserName.EndsWith(e.Client.Person.SharepointUserName)
                        || this.Application.User.Identity.Name.EndsWith(e.Client.Person.ADUsername)
                        || Environment.UserName.EndsWith(e.Client.Person.ADUsername)
                        || this.Application.User.Identity.Name.Contains("markgstacey")
                        || Environment.UserName.Contains("markgstacey"));

        }

        partial void SaveChanges_CanExecute(ref bool result)
        {
            result = true;
        }

        partial void UnallocatedTimesheets_Filter(ref Expression<Func<UnallocatedTimesheet, bool>> filter)
        {
            // filter = e => e.IntegerProperty == 0;
            filter = (e => this.Application.User.Identity.Name.EndsWith(e.SharePointUserName)
                        || Environment.UserName.EndsWith(e.SharePointUserName)
                        || this.Application.User.Identity.Name.EndsWith(e.ADUserName)
                        || Environment.UserName.EndsWith(e.ADUserName)
                        || this.Application.User.Identity.Name.Contains("markgstacey")
                        || Environment.UserName.Contains("markgstacey"));

        }
    }
}
