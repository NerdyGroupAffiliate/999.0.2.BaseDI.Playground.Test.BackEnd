using BaseDI.Director.Programming_1;
using BaseDI.Script.Programming.Poco_1;
using BaseDI.Story.Programming_1;

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;

using Newtonsoft.Json.Linq;

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace BaseDI.Playground.Test.BackEnd
{
    public partial class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; set; }

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

            var copyFilesResult = Action("Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0-P1_0", Action_12_2_1_0._12_3_WEB_DEVELOPMENT_Server_Copy_Static_Files_1_0, null, Configuration).Result;

            #endregion

            #region MAP STATIC FILES

            var mapStaticFilesResult = Action("Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0-P1_0", Action_12_2_1_0._12_3_WEB_DEVELOPMENT_Server_Map_Static_Files_1_0, (JObject mapStaticFiles) => 
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
            }, Configuration).Result;

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
        public static async Task<IActionResult> Action(string requestToProcess = "", string requestToProcessParameters = "", string requestActionName = "", Func<JObject, IActionResult> requestCallBack = null, IConfiguration appSettings = null)
        {
            var process = new Startup_Controller();

            process.AppSettings = appSettings;
            process.RequestCallBack = requestCallBack;

            IActionResult result = await process.Action(requestToProcess, requestToProcessParameters, requestActionName);

            return new OkResult();
        }
    }

    public class Startup_Controller : ControllerBase
    {
        #region 1. Assign

        //A. Variable Declaration
        public IConfiguration AppSettings { get; set; }

        private Dictionary<string, object> _clientORserverInfo;

        private ExtraData_12_2_1_0 _extraData;

        public Func<SingleParmPoco_12_2_1_0, JObject> StartUpCallBack = null;

        private JObject _storylineDetails;
        private JObject _storylineDetails_Parameters;

        public Func<JObject, ExtraData_12_2_1_0, JObject> Update_Client = null;

        public Func<JObject, IActionResult> RequestCallBack = null;

        public List<RouteAttribute> routes = new List<RouteAttribute>();

        #endregion

        #region 2. Ready

        public Startup_Controller(IConfiguration configuration = null)
        {
            #region 1. Assign

            //SET WHAT is needed to create the storyline.
            _extraData = new ExtraData_12_2_1_0();

            _storylineDetails = new JObject();
            _storylineDetails_Parameters = new JObject();

            _clientORserverInfo = new Dictionary<string, object>();

            if (configuration != null)
                AppSettings = configuration;

            #endregion

            #region 2. Action

            Setup();

            #endregion

            #region 3. Observe

            #endregion
        }

        #endregion

        #region 3. Set

        //A. Default state of story
        public void Setup()
        {
            #region 1. Assign

            #endregion

            #region 2. Action

            _storylineDetails = null;
            _storylineDetails_Parameters = null;

            #endregion

            #region 3. Observe


            #endregion
        }

        #endregion

        #region 4. Action

        [HttpGet("")]
        public async Task<IActionResult> Action(string requestNameToProcess = "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0", string requestNameToProcessParameters = "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0-P1_0", string requestActionName = "Action_ProcessHttpRequest_1_0")
        {
            #region 1. Assign

            ContentResult result = null;

            Func<string?, string?, ExtraData_12_2_1_0?, JObject> Action = null;

            JObject handleObservation = null;

            JToken outputs = null;

            StringBuilder outputObservationsPrintOut = new StringBuilder();

            if(AppSettings != null)
                _clientORserverInfo.Add("appSettings", AppSettings);

            _clientORserverInfo.Add("request", Request);
            _clientORserverInfo.Add("serverInstance", this);

            if (requestActionName != "")
                _clientORserverInfo.Add("actionName", requestActionName);

            #endregion

            #region 2. Action

            try
            {
                #region TRY our logic

                #region PROCESS application updates

                StartUpCallBack = (SingleParmPoco_12_2_1_0 response) =>
                {
                    Action("", "", null);
                    return _storylineDetails;
                };

                #endregion

                Action = (string requestNameToProcess, string requestNameToProcessParameters, ExtraData_12_2_1_0 extraData) =>
                {
                    #region VALIDATE required values
                    if (requestNameToProcess == "") throw new Exception("[DISTURBANCE ISSUE] - Bug - Startup.ts - BaseDI will not work without a request name. Please make sure that requestNameToProcess is not blank or null!");
                    if(AppSettings == null) throw new Exception("[DISTURBANCE ISSUE] - Bug - Startup.ts - BaseDI C# version will not work without an appSettings object. Please make sure that appSettings have a REQUIRED [AppSettings:APP_SETTING_CONVERSION_MODE] value.");
                    #endregion

                    #region MAKE system request
                    return new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0())
                        .SetupStoryline(_clientORserverInfo, _storylineDetails, null, extraData, "", requestNameToProcess, requestNameToProcessParameters)
                        .Action().Result;
                    #endregion
                };

                #region GET system response
                handleObservation = Action(requestNameToProcess, requestNameToProcessParameters, _extraData);

                if (handleObservation != null)
                {
                    outputs = handleObservation["outputs"];
                }
                #endregion

                #endregion
            }
            catch (Exception ex)
            {
                #region PRINT out mistakes

                handleObservation = _storylineDetails;
                if (handleObservation != null)
                {
                    outputs = handleObservation.SelectToken("outputs..baseDIMistakes");
                    foreach (var programmingMistake in outputs.Children())
                    {
                        var mistake = programmingMistake.Value<string>("mistake");

                        outputObservationsPrintOut.Append(mistake + System.Environment.NewLine);
                    }
                    Console.Write(outputObservationsPrintOut.ToString());
                }
                #endregion
            }

            #endregion

            #region 3. Observe

            if (RequestCallBack != null)
            {
                RequestCallBack(handleObservation);

                return new OkResult();
            }
            else
            {
                if (handleObservation != null)
                {
                    result = new ContentResult
                    {
                        ContentType = "text/html",
                        StatusCode = (int)HttpStatusCode.OK,
                        Content = (string)handleObservation.SelectToken("outputs[1].baseDIObservations[0].metadata[3].item.presentation[0].htmlResult")
                    };
                    // return Content(armTemplateJSONOutput.ToString());
                }
            }

            if (result != null)
            {
                return await Task.FromResult<ContentResult>(result).ConfigureAwait(true);
            }
            else
            {
                return await Task.FromResult<ContentResult>(new ContentResult()).ConfigureAwait(true);
            }

            #endregion
        }

        #endregion
    }
}
