using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json.Linq;

namespace BaseDI.Playground.Test.BackEnd
{
    public partial class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            #region COPY STATIC FILES

            var copyFilesResult = Action("Step_1_0_CopyLocalFiles", "Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0", "Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0-P1_0").Result;

            #endregion

            #region MAP STATIC FILES

            var mapStaticFilesResult = Action("Step_1_0_ReadStaticFiles", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0-P1_0").Result;

            if (mapStaticFilesResult is OkObjectResult)
            {
                var mapStaticFiles = ((OkObjectResult)mapStaticFilesResult).Value;

                if (mapStaticFiles != null)
                {
                    dynamic fileMetaDataFormatted = JObject.Parse(mapStaticFiles.ToString());
                    Console.WriteLine(fileMetaDataFormatted);
                    JObject setupItemEnvironmentClient = fileMetaDataFormatted.outputs[1].baseDIObservations[0];
                    foreach (var item in setupItemEnvironmentClient)
                    {
                        if (item.Value != null)
                        {
                            if (!Directory.Exists(Path.Combine(item.Value.ToString())))
                            {
                                Directory.CreateDirectory(Path.Combine(item.Value.ToString()));
                            }
                            app.UseStaticFiles(new StaticFileOptions
                            {
                                FileProvider = new PhysicalFileProvider(
                                    Path.GetFullPath(Path.Combine(item.Value.ToString()))),
                                RequestPath = "/StaticFiles"
                            });
                        }
                    }

                }

            }

            #endregion

            app.UseRouting();            
            
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }

    public partial class Startup
    {
        public static async Task<IActionResult> Action(string processGoalName = "", string requestToProcess = "", string requestToProcessParameters = "")
        {
            var process = new Experience_The_Hear_OfTheAPIServer_Message_12_3_1_1_Test();

            IActionResult result = await process.Action(processGoalName, requestToProcess, requestToProcessParameters);

            return result;
        }
    }
}
