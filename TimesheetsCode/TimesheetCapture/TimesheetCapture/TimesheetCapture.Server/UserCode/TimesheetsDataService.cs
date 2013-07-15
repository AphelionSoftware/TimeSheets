using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
using Microsoft.LightSwitch.Security.Server;
namespace LightSwitchApplication
{
   
    public class BillingPeriod
    {
        
        public static DateTime WeekEnding()
        {
            DimDate setting = ( from dimDates in Application.Current.CreateDataWorkspace().TimesheetsData.DimDates
                                     where dimDates.c_Date <= System.DateTime.Now
                                     orderby dimDates.DateID descending
                                     select dimDates).FirstOrDefault();
            return setting != null ? setting.WeekEnding.Value : System.DateTime.Now;
        }

        public static string DayOfWeek()
        {
            DateTime WE = BillingPeriod.WeekEnding();
            DimDate setting = (from dimDates in Application.Current.CreateDataWorkspace().TimesheetsData.DimDates
                               where dimDates.c_Date == WE
                               orderby dimDates.DateID descending
                               select dimDates).FirstOrDefault();
            return setting != null ? setting.DayOfWeek : "Sunday";
        }
    }
        
    public partial class TimesheetsDataService
    {
        
           



        partial void Timesheets_Inserting(Timesheet entity)
        {
                  

            entity.sys_CreatedBy = Environment.UserName;
            entity.sys_CreatedOn = System.DateTime.Now;
            entity.sys_ModifiedBy = Environment.UserName;
            entity.sys_ModifiedOn = System.DateTime.Now;
            entity.TimesheetPerson = Environment.UserName;
            entity.TimesheetName = Environment.UserName + "_" + entity.DimDate.ToString().Replace("-", "").Replace("/", "") + "_" + "Lightswitch";
            entity.TimesheetCode = Environment.UserName + "_" + entity.DimDate.ToString().Replace("-", "").Replace("/", "") + "_" + "Lightswitch";
            entity.TimesheetFileName = Environment.UserName + "_" + entity.DimDate.ToString().Replace("-", "").Replace("/", "") + "_" + "Lightswitch";
            entity.TimesheetSourceKey = Environment.UserName + "_" + entity.DimDate.ToString().Replace("-", "").Replace("/", "") + "_" + "Lightswitch";            
            entity.LoadDate = System.DateTime.Now;
            entity.TimesheetDate = entity.DimDate.ToString();
            entity.TimesheetFromDateID = (from d in Application.Current.CreateDataWorkspace().TimesheetsData.DimDates
                                          where d.WeekEnding == entity.DimDate.WeekEnding
                               orderby d.DateID descending
                               select d.DateID).FirstOrDefault();
            entity.TimesheetToDateID = (from d in Application.Current.CreateDataWorkspace().TimesheetsData.DimDates
                                          where d.WeekEnding == entity.DimDate.WeekEnding
                               orderby d.DateID ascending
                               select d.DateID).FirstOrDefault();

        }

        partial void SaveChanges_CanExecute(ref bool result)
        {
            result = true;
        }

        partial void TimesheetDate_PreprocessQuery(ref IQueryable<DimDate> query)
        {
            string dow = BillingPeriod.DayOfWeek();
            query = (from dimDates in query
                     where dimDates.DayOfWeek == dow
                     where dimDates.c_Date <= System.DateTime.Now
                     orderby dimDates.DateID descending
                     select dimDates);
        }

        partial void TimesheetsUser_PreprocessQuery(DateTime? StartDate, DateTime? EndDate, ref IQueryable<Timesheet> query)
        {
            string TimesheetPerson = Environment.UserName;

            if (StartDate == null)
            {
                query = (from Timesheets in query
                         where Timesheets.TimesheetPerson == TimesheetPerson
                         orderby Timesheets.PeriodEnding descending
                         select Timesheets);
            }
            else
            {
                DateTime SD = new DateTime(StartDate.Value.Year, StartDate.Value.Month, StartDate.Value.Day, 0, 0, 0);
                query = (from Timesheets in query
                         where Timesheets.TimesheetPerson == TimesheetPerson
                         where Timesheets.PeriodEnding >= SD
                         orderby Timesheets.PeriodEnding descending
                         select Timesheets);

                if (EndDate != null)
                {
                    DateTime ED = new DateTime(EndDate.Value.Year, EndDate.Value.Month, EndDate.Value.Day, 23, 59, 59);

                    query = (from Timesheets in query
                             where Timesheets.TimesheetPerson == TimesheetPerson
                             where (Timesheets.PeriodEnding >= SD.Date && Timesheets.PeriodEnding <= ED.Date)
                             orderby Timesheets.PeriodEnding descending
                             select Timesheets);
                }
            }

        }

        partial void TimesheetDetailDate_PreprocessQuery(DateTime? PeriodEndDate, ref IQueryable<DimDate> query)
        {

        }

        

        

       
        

       
    }
}
