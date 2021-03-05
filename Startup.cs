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

            var copyFilesResult = Action("Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0-P1_0", "Action_CopyStaticFiles_1_0").Result;

            #endregion

            #region MAP STATIC FILES

            var mapStaticFilesResult = Action("Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0-P1_0", "Action_MapStaticFiles_1_0", (JObject mapStaticFiles) => 
            {
                if (mapStaticFiles != null)
                {
                    dynamic fileMetaDataFormatted = JObject.Parse(mapStaticFiles.ToString());
                    JArray setupItemEnvironmentClient = fileMetaDataFormatted.outputs[1].baseDIObservations;
                    Console.WriteLine(setupItemEnvironmentClient.Count);
                    if (setupItemEnvironmentClient.Any())
                    {
                        foreach (dynamic item in setupItemEnvironmentClient.FirstOrDefault())
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
                    else
                    {
                        app.UseStaticFiles(new StaticFileOptions
                        {
                            FileProvider = new PhysicalFileProvider(
                                Path.GetFullPath(Path.Combine("wwwroot/Client/Images"))),
                            RequestPath = "/StaticFiles"
                        });
                    }
                }

                return null; 
            }).Result;

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
        public static async Task<IActionResult> Action(string requestToProcess = "", string requestToProcessParameters = "", string requestActionName = "", Func<JObject, JObject> requestCallBack = null)
        {
            var process = new Experience_The_Hear_OfTheAPIServer_Message_12_3_1_1_Test();

            process.RequestCallBack = requestCallBack;

            IActionResult result = await process.Action(requestToProcess, requestToProcessParameters, requestActionName);

            return result;
        }
    }
}
