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
    public partial class ApplicationDataService
    {
        partial void ResourcePlanRanges_Inserting(ResourcePlanRange entity)
        {
            using (SqlConnection connection = new SqlConnection())
            {
                string connectionStringName = this.DataWorkspace.Timesheets_Data.Details.Name;
                connection.ConnectionString = ConfigurationManager.ConnectionStrings[connectionStringName].ConnectionString;

                string procedure = "dbo.InsertResourcing";
                using (SqlCommand command = new SqlCommand(procedure, connection))
                {
                    command.CommandType = CommandType.StoredProcedure;

                    command.Parameters.Add(
                        new SqlParameter("@Comments", entity.Comments));
                    command.Parameters.Add(
                        new SqlParameter("@StartDate", entity.StartDate));
                    command.Parameters.Add(
                        new SqlParameter("@EndDate", entity.EndDate));
                    command.Parameters.Add(
                        new SqlParameter("@Blocks", entity.Blocks));
                    command.Parameters.Add(
                        new SqlParameter("@PersonID", entity.Person_PersonID));
                    command.Parameters.Add(
                        new SqlParameter("@ProjectID", entity.Project_ProjectID));

                    connection.Open();
                    command.ExecuteNonQuery();
                }
            }

            this.Details.DiscardChanges();

        }
    }
}
