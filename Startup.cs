#region Imports

#region BaseDI

using BaseDI.Professional.Director.Programming_1;
using BaseDI.Professional.Script.Programming.Poco_1;
using BaseDI.Professional.Story.Programming_1;

#endregion

#region .Net Core

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Web;

#endregion 

#region 3rd Party Core

using Newtonsoft.Json.Linq;

#endregion 

#endregion

namespace BaseDI.Professional
{
    //SETUP
    #region HANDLE .net core pipeline
    
    public partial class Startup
    {
        #region 1. Assign   

        public IConfiguration Configuration { get; set; }

        public Func<JObject, IActionResult> StoredRequestCallBack = null;

        #endregion

        #region 2. Ready  

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        #endregion

        #region 3. Set   

        #endregion

        #region 4. Action   

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            #region 1. INPUTS

            #region MEMORIZE file metadata

            dynamic storedFilesMetaData = null;
            JArray storedFilesObservation = null;

            IActionResult storedStaticFilesResult = null;

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE copying static files

            #region IDEAL CASE - USE json metadata

            var storedCopiedFilesResult = Action("Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0-P1_0", Action_12_2_1_0._12_3_WEB_DEVELOPMENT_Server_Copy_Static_Files_1_0, null, Configuration).Result;

            #endregion

            #endregion

            #region EXECUTE mapping static files

            try
            {
                #region IDEAL CASE - USE json metadata

                StoredRequestCallBack = (JObject storedMappedStaticFiles) =>
                {
                    if (storedMappedStaticFiles != null)
                    {
                        storedFilesMetaData = JObject.Parse(storedMappedStaticFiles.ToString());
                        storedFilesObservation = storedFilesMetaData.outputs[1].baseDIObservations;

                        if (storedFilesObservation.Any())
                        {
                            foreach (dynamic item in storedFilesObservation.FirstOrDefault())
                            {
                                if (item.Value != null)
                                {
                                    if (!Directory.Exists(Path.Combine(item.Value.ToString())))
                                    {
                                        Directory.CreateDirectory(Path.Combine(item.Value.ToString()));
                                    }

                                    app.UseStaticFiles(new StaticFileOptions
                                    {
                                        FileProvider = new PhysicalFileProvider(Path.GetFullPath(Path.Combine(item.Value.ToString()))),
                                        RequestPath = "/StaticFiles"
                                    });
                                }
                            }
                        }
                        else
                        {
                            throw new Exception("USE EDGE CASE - hardcoded data");
                        }
                    }

                    return new OkResult();
                };

                storedStaticFilesResult = Action("Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0-P1_0", Action_12_2_1_0._12_3_WEB_DEVELOPMENT_Server_Map_Static_Files_1_0, StoredRequestCallBack, Configuration).Result;
                
                #endregion
            }
            catch
            {
                #region EDGE CASE - USE hardcoded data

                app.UseStaticFiles(new StaticFileOptions
                {
                    FileProvider = new PhysicalFileProvider(Path.GetFullPath(Path.Combine("wwwroot/Client/Images"))),
                    RequestPath = "/StaticFiles"
                });

                #endregion
            }

            #endregion

            #region EXECUTE configure server

            #region IDEAL CASE - USE .net core

            app.UseRouting();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #endregion
        }

        #endregion
    }

    #endregion

    #region HANDLE .net core pipeline baseDI task

    public partial class Startup
    {
        #region 1. Assign   

        #endregion

        #region 2. Ready   

        #endregion

        #region 3. Set   

        #endregion

        #region 4. Action   

        public static async Task<IActionResult> Action(string parameterRequestToProcess = "", string parameterRequestToProcessParameters = "", string parameterRequestActionName = "", Func<JObject, IActionResult> parameterStoredRequestCallBack = null, IConfiguration parameterStoredAppSettings = null)
        {
            #region 1. INPUTS

            #region MEMORIZE application settings

            var storedControllerInstance = new Startup_Controller();
            storedControllerInstance.StoredAppSettings = parameterStoredAppSettings;

            #endregion

            #region MEMORIZE process callback

            storedControllerInstance.StoredRequestCallBack = parameterStoredRequestCallBack;

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE request handler

            #region IDEAL CASE - USE baseDI pipeline

            IActionResult result = await storedControllerInstance.Action(parameterRequestToProcess, parameterRequestToProcessParameters, parameterRequestActionName);

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region HANDLE request response

            #region IDEAL CASE - USE ok result

            return new OkResult();

            #endregion

            #endregion

            #endregion
        }

        #endregion
    }

    #endregion


    //EXECUTION
    #region HANDLE baseDI http request

    public class Startup_Controller : ControllerBase
    {
        #region 1. Assign

        //SETTINGS
        public IConfiguration StoredAppSettings { get; set; }

        //CLIENT/SERVER
        private Dictionary<string, object> _storedClientORserverInfo;

        //DATASETS
        private JObject _storedStorylineDetails;
        private JObject _storedStorylineDetails_Parameters;

        //MISC
        private ExtraData_12_2_1_0 _storedExtraData;

        //PLUMBING
        public Func<SingleParmPoco_12_2_1_0, JObject> StoredStartUpCallBack = null;
        public Func<JObject, IActionResult> StoredRequestCallBack = null;

        #endregion

        #region 2. Ready

        public Startup_Controller(IConfiguration configuration = null)
        {
            #region 1. INPUTS

            #region DEFINE client/server info

            _storedClientORserverInfo = new Dictionary<string, object>();

            #endregion

            #region DEFINE extra data

            _storedExtraData = new ExtraData_12_2_1_0();

            #endregion

            #region DEFINE storyline details

            _storedStorylineDetails = new JObject();
            _storedStorylineDetails_Parameters = new JObject();

            #endregion

            #region MEMORIZE app settings

            if (configuration != null)
                StoredAppSettings = configuration;

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE process defaults

            #region EDGE CASE - USE defaults handler
            
            Setup();

            #endregion
            
            #endregion

            #endregion

            #region 3. OUTPUT

            #endregion
        }

        #endregion

        #region 3. Set

        //A. Default state of story
        public void Setup()
        {
            #region 1. INPUTS

            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            #endregion
        }

        #endregion

        #region 4. Action

        [HttpGet("")]
        public async Task<IActionResult> Action(string parameterClientRequestByName = "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0", string parameterClientRequestByNameParameters = "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0-P1_0", string parameterRequestChapterName = "Action_ProcessHttpRequest_1_0", string parameterRequestActionName = "Action_ProcessHttpRequest_1_0")
        {
            #region 1. INPUTS

            #region DEFINE client response

            ContentResult storedHttpResult = null;

            #endregion

            #region DEFINE data response

            JObject storedDataResponse = null;

            #endregion

            #region DEFINE error response

            JToken storedErrorResponse = null;

            #endregion

            #region DEFINE event handlers

            Func<string, string, ExtraData_12_2_1_0, JObject> Action = null;

            #endregion

            #region MEMORIZE action name

            if (parameterRequestActionName != "")
                _storedClientORserverInfo.Add("actionName", parameterRequestActionName);

            #endregion

            #region MEMORIZE application settings

            if (StoredAppSettings != null)
                _storedClientORserverInfo.Add("appSettings", StoredAppSettings);

            #endregion

            #region MEMORIZE chapter name

            if (parameterRequestActionName != "")
                _storedClientORserverInfo.Add("chapterName", parameterRequestChapterName);

            #endregion

            #region MEMORIZE request instance

            _storedClientORserverInfo.Add("request", Request);

            #endregion

            #region MEMORIZE server instance

            _storedClientORserverInfo.Add("serverInstance", this);

            #endregion

            #region MEMORIZE storyline details

            storedDataResponse = _storedStorylineDetails;

            #endregion

            #endregion

            #region 2. PROCESS

            try
            {
                #region EXECUTE client request

                #region EDGE CASE - USE updates handler

                StoredStartUpCallBack = (SingleParmPoco_12_2_1_0 parameterResponse) =>
                {
                    Action("", "", null);
                    return _storedStorylineDetails;
                };

                #endregion

                #region IDEAL CASE - USE request handler

                if (parameterClientRequestByName == "") throw new Exception("[DISTURBANCE ISSUE] - Bug - Startup.ts - BaseDI will not work without a request name. Please make sure that clientRequestByName is not blank or null!");
                if (StoredAppSettings == null) throw new Exception("[DISTURBANCE ISSUE] - Bug - Startup.ts - BaseDI C# version will not work without an StoredAppSettings object. Please make sure that StoredAppSettings have a REQUIRED [StoredAppSettings:APP_SETTING_CONVERSION_MODE] value.");

                Action = (string parameterClientRequestByName, string parameterClientRequestByNameParameters, ExtraData_12_2_1_0 parameterExtraData) =>
                {
                    return storedDataResponse = new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0())
                        .SetupStoryline(_storedClientORserverInfo, _storedStorylineDetails, null, parameterExtraData, "", parameterClientRequestByName, parameterClientRequestByNameParameters)
                        .Action().Result;
                };

                Action(parameterClientRequestByName, parameterClientRequestByNameParameters, _storedExtraData);

                #endregion

                #endregion
            }
            catch
            {
                #region HANDLE execution mistakes

                #region EDGE CASE - USE exception handler

                if (storedDataResponse != null)
                {
                    StringBuilder storedErrorResponsePrintOut = new StringBuilder();

                    storedErrorResponse = storedDataResponse.SelectToken("outputs..baseDIMistakes");
                    foreach (var programmingMistake in storedErrorResponse.Children())
                    {
                        var mistake = programmingMistake.Value<string>("mistake");

                        storedErrorResponsePrintOut.Append(mistake + System.Environment.NewLine);
                    }

                    Console.Write(storedErrorResponsePrintOut.ToString());
                }

                #endregion

                #endregion
            }

            #endregion

            #region 3. OUTPUT

            #region HANDLE execution response

            #region EDGE CASE - USE callback handler

            if (StoredRequestCallBack != null)
            {
                StoredRequestCallBack(storedDataResponse);

                return new OkResult();
            }

            #endregion

            #region IDEAL CASE - USE html responder

            if (storedDataResponse != null)
            {
                storedErrorResponse = storedDataResponse["outputs"];

                storedHttpResult = new ContentResult
                {
                    ContentType = "text/html",
                    StatusCode = (int)HttpStatusCode.OK,
                    Content = (string)storedDataResponse.SelectToken("outputs[1].baseDIObservations[0].metadata[3].item.presentation[0].htmlResult")
                };

                return await Task.FromResult<ContentResult>(storedHttpResult).ConfigureAwait(true);
            }

            #endregion

            #region EDGE CASE - USE blank response

            return await Task.FromResult<ContentResult>(new ContentResult()).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        #endregion
    }

    #endregion
}
