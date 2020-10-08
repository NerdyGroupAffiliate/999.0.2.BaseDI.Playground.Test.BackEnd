using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
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
            var fileMetaDataResult = Action("", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0-P1_0", "Step_1_0_ReadStaticFiles").Result;

            if(fileMetaDataResult is OkObjectResult)
            {
                var fileMetaData = ((OkObjectResult)fileMetaDataResult).Value;

                if(fileMetaData != null)
                {
                    JObject fileMetaDataFormatted = JObject.Parse(fileMetaData.ToString());
                }
                //app.UseStaticFiles(new StaticFileOptions
                //{

                //    FileProvider = new PhysicalFileProvider(
                //            Path.Combine(fileMetaData.ToString(), "MyStaticFiles")),
                //    RequestPath = "/StaticFiles"
                //});
            }

            app.UseRouting();            
            
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }

    public partial class Startup
    {
        public static async Task<IActionResult> Action(string unitTestName = "", string requestToProcess = "", string requestToProcessParameters = "", object extraData = null)
        {
            var process = new Experience_The_Hear_OfTheAPIServer_Message_12_3_1_1_Test();

            IActionResult result = await process.Action(unitTestName, requestToProcess, requestToProcessParameters, extraData);

            return result;
        }
    }
}
