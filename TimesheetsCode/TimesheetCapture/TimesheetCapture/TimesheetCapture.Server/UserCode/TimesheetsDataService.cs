using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
using Microsoft.LightSwitch.Security.Server;
namespace LightSwitchApplication
{

    public partial class TimesheetsDataService
    {
        public static DateTime WeekEnding()
        {
            DimDate setting = (from dimDates in Application.Current.CreateDataWorkspace().TimesheetsData.DimDates
                               where dimDates.c_Date <= System.DateTime.Now
                               orderby dimDates.DateID descending
                               select dimDates).FirstOrDefault();
            return setting != null ? setting.WeekEnding.Value : System.DateTime.Now;
        }

        private string strDayOfWeek = "";
        public string DayOfWeek
        {
            get
            {
                if (strDayOfWeek == "" || strDayOfWeek == null)
                {
                    DateTime WE = WeekEnding();
                    strDayOfWeek = (from dimDates in DataWorkspace.TimesheetsData.DimDates
                                    where dimDates.c_Date == WE
                                    orderby dimDates.DateID descending
                                    select dimDates.DayOfWeek).FirstOrDefault();
                }

                return strDayOfWeek;
            }
        }

        private string strUser = "";
        public string UserName
        {
            get
            {
                if (strUser == "")
                {
                    switch (Application.User.Name)
                    {
                        case "TestUser":
                            strUser = Environment.UserName;
                            break;
                        case "":
                            strUser = Environment.UserName;
                            break;
                        default:
                            strUser = Application.User.Name.Split('|')[2];
                            break;
                    }


                }
                return strUser;
            }
        }

        private string str_tsPerson = "";
        public string tsPerson
        {
            get
            {
                if (str_tsPerson == "")
                {
                    string strUserName = UserName;
                    str_tsPerson = (from p in DataWorkspace.TimesheetsData.People
                                    where p.ADUsername == strUserName || p.SharepointUserName == strUserName
                                    select p.PersonName).FirstOrDefault();


                }
                return str_tsPerson;
            }
        }

        private Int32 int_tsPersonID = 0;
        public Int32 tsPersonID
        {
            get
            {
                if (int_tsPersonID == 0)
                {
                    string strUserName = UserName;
                    int_tsPersonID = (from p in DataWorkspace.TimesheetsData.People
                                      where p.ADUsername == strUserName || p.SharepointUserName == strUserName
                                      select p.PersonID).FirstOrDefault();


                }
                return int_tsPersonID;
            }
        }

        partial void Timesheets_Inserting(Timesheet entity)
        {
            string strTimesheetDate = entity.DimDate.c_Date.ToString("yyyyMMdd");

            entity.sys_CreatedBy = UserName;
            entity.sys_CreatedOn = System.DateTime.Now;
            entity.sys_ModifiedBy = UserName;
            entity.sys_ModifiedOn = System.DateTime.Now;
            entity.TimesheetPerson = tsPerson.Replace(" ", "");
            entity.Person = DataWorkspace.TimesheetsData.People_SingleOrDefault(tsPersonID);
            entity.TimesheetName = UserName + "_" + strTimesheetDate + "_" + "Lightswitch";
            entity.TimesheetCode = UserName + "_" + strTimesheetDate + "_" + "Lightswitch";
            entity.TimesheetFileName = UserName + "_" + strTimesheetDate + "_" + "Lightswitch";
            entity.TimesheetSourceKey = UserName + "_" + strTimesheetDate + "_" + "Lightswitch";
            entity.LoadDate = System.DateTime.Now;
            entity.TimesheetDate = strTimesheetDate;
            entity.TimesheetFromDateID = (from d in DataWorkspace.TimesheetsData.DimDates
                                          where d.WeekEnding == entity.DimDate.WeekEnding
                                          orderby d.DateID descending
                                          select d.DateID).FirstOrDefault();
            entity.TimesheetToDateID = (from d in DataWorkspace.TimesheetsData.DimDates
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
            DateTime FilterDate = DateTime.Now.AddDays(7);
            string dow = DayOfWeek;
            query = (from dimDates in query
                     where dimDates.DayOfWeek == dow
                     where dimDates.c_Date <= FilterDate
                     orderby dimDates.DateID descending
                     select dimDates);
        }

        partial void TimesheetsUser_PreprocessQuery(DateTime? StartDate, DateTime? EndDate, ref IQueryable<Timesheet> query)
        {
            Int32 TimesheetPersonID = tsPersonID;

            if (StartDate == null)
            {
                query = (from Timesheets in query
                         where Timesheets.Person.PersonID == TimesheetPersonID
                         orderby Timesheets.PeriodEnding descending
                         select Timesheets);
            }
            else
            {
                DateTime SD = new DateTime(StartDate.Value.Year, StartDate.Value.Month, StartDate.Value.Day, 0, 0, 0);
                query = (from Timesheets in query
                         where Timesheets.Person.PersonID == TimesheetPersonID
                         where Timesheets.PeriodEnding >= SD
                         orderby Timesheets.PeriodEnding descending
                         select Timesheets);

                if (EndDate != null)
                {
                    DateTime ED = new DateTime(EndDate.Value.Year, EndDate.Value.Month, EndDate.Value.Day, 23, 59, 59);
                    query = (from Timesheets in query
                             where Timesheets.Person.PersonID == TimesheetPersonID
                             where (Timesheets.PeriodEnding >= SD.Date && Timesheets.PeriodEnding <= ED.Date)
                             orderby Timesheets.PeriodEnding descending
                             select Timesheets);
                }
            }


        }

        partial void TimesheetDetails_Inserting(TimesheetDetail entity)
        {

            entity.sys_CreatedBy = UserName;
            entity.sys_CreatedOn = System.DateTime.Now;
            entity.sys_ModifiedBy = UserName;
            entity.sys_ModifiedOn = System.DateTime.Now;
            entity.PersonItem = DataWorkspace.TimesheetsData.People_SingleOrDefault(tsPersonID);
            entity.TimesheetDetailName = "N/A";
            entity.TimesheetDetailCode = tsPerson;
            entity.TimesheetDetailFileName = "Lightswitch";
            entity.LoadDate = System.DateTime.Now;

        }
        partial void TimesheetDetails_Updating(TimesheetDetail entity)
        {

            entity.sys_ModifiedBy = UserName;
            entity.sys_ModifiedOn = System.DateTime.Now;
            entity.PersonItem = DataWorkspace.TimesheetsData.People_SingleOrDefault(tsPersonID);
            entity.LastUpdateDate = System.DateTime.Now;

        }
    }
}
