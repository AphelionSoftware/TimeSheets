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
        private static DateTime MinDate = new DateTime(2013, 1, 1);


        private void SetTrackingInfo<T>(T entity, bool pNew = true)
        {
            var type = entity.GetType();
            var properties = type.GetProperties();
            if (pNew)
            {
                var createdBy = properties.SingleOrDefault(_ => _.Name == "sys_CreatedBy");
                var createdOn = properties.SingleOrDefault(_ => _.Name == "sys_CreatedOn");
                if ((string)createdBy.GetValue(entity, null) == "NA")
                {
                    createdBy.SetValue(entity, Environment.UserName == "" ? "Authentication problem" : Environment.UserName, null);
                }

                if ((DateTime)createdOn.GetValue(entity, null) < MinDate)
                {
                    createdOn.SetValue(entity, System.DateTime.Now, null);
                }

            }
            var modifiedBy = properties.SingleOrDefault(_ => _.Name == "sys_ModifiedBy");
            var modifiedOn = properties.SingleOrDefault(_ => _.Name == "sys_ModifiedOn");


            modifiedBy.SetValue(entity, Environment.UserName == "" ? "Authentication problem" : Environment.UserName, null);
            modifiedOn.SetValue(entity, System.DateTime.Now, null);
        }

        partial void ResourcePlanByDays_Inserting(ResourcePlanByDay entity)
        {
            SetTrackingInfo(entity);
        }

        partial void ResourcePlanByDays_Updating(ResourcePlanByDay entity)
        {

            SetTrackingInfo(entity,false);
        }
    }
}
