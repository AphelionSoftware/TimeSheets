using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
namespace LightSwitchApplication
{
    public partial class ResourcePlan
    {
        partial void WeekEndingDate_Validate(EntityValidationResultsBuilder results)
        {
            // results.AddPropertyError("<Error-Message>");
            if (this.WeekEndingDate.DayOfWeek != DayOfWeek.Sunday)
            {
                results.AddPropertyError("Week ending must be a Sunday");
            }
        }
    }
}
