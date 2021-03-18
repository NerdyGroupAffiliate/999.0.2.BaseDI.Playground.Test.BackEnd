#region Imports

#region BaseDI

using BaseDI.Director.Programming_1;
using BaseDI.Script.Programming.Poco_1;
using BaseDI.Story.Programming_1;

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

namespace BaseDI
{
    #region HANDLE .net core pipeline
    
    public partial class Startup
    {
        #region 1. Assign   

        public IConfiguration Configuration { get; set; }

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
            #region 1. VARIABLES: DESCRIBE the memories

            #endregion

            #region 2. VALUES: RECALL the memories

            #endregion

            #region 3. **INPUT: PROCESS the memories*

            #region HANDLE file copying

            #region *IDEAL case*

            #region COPY local files
            var storedCopiedFilesResult = Action("Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0-P1_0", Action_12_2_1_0._12_3_WEB_DEVELOPMENT_Server_Copy_Static_Files_1_0, null, Configuration).Result;
            #endregion

            #endregion

            #endregion

            #region HANDLE file mapping

            #region START new block
            var storedStaticFilesResult = Action("Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0-P1_0", Action_12_2_1_0._12_3_WEB_DEVELOPMENT_Server_Map_Static_Files_1_0, (JObject storedMappedStaticFiles) =>
            {
                if (storedMappedStaticFiles != null)
                {
                    #region 1. VARIABLES: DESCRIBE the memories

                    #endregion

                    #region 2. VALUES: RECALL the memories

                    #region MEMORIZE file directories

                    dynamic storedFilesMetaData = JObject.Parse(storedMappedStaticFiles.ToString());
                    JArray storedFilesObservation = storedFilesMetaData.outputs[1].baseDIObservations;

                    #endregion

                    #endregion



                    #region 3. **INPUT: PROCESS the memories*

                    #region HANDLE mapping process

                    if (storedFilesObservation.Any())
                    {
                        #region *IDEAL case*

                        #region PERFORM a search
                        foreach (dynamic item in storedFilesObservation.FirstOrDefault())
                        {
                            if (item.Value != null)
                            {
                                #region IF NEEDED: CREATE a directory 
                                if (!Directory.Exists(Path.Combine(item.Value.ToString())))
                                {
                                    Directory.CreateDirectory(Path.Combine(item.Value.ToString()));
                                }
                                #endregion

                                #region MAP server folder
                                app.UseStaticFiles(new StaticFileOptions
                                {
                                    FileProvider = new PhysicalFileProvider(Path.GetFullPath(Path.Combine(item.Value.ToString()))),
                                    RequestPath = "/StaticFiles"
                                });
                                #endregion
                            }
                        }
                        #endregion

                        #endregion
                    }
                    else
                    {
                        #region EDGE case

                        #region MAP server folder

                        app.UseStaticFiles(new StaticFileOptions
                        {
                            FileProvider = new PhysicalFileProvider(Path.GetFullPath(Path.Combine("wwwroot/Client/Images"))),
                            RequestPath = "/StaticFiles"
                        });

                        #endregion

                        #endregion
                    }
                    #endregion

                    #endregion



                    #region 4. **OUTPUT: TELL the story*

                    #endregion
                }

                return null;
            }, Configuration).Result;

            #endregion

            #endregion

            #region HANDLE server configurations

            #region *IDEAL case*

            #region SETUP application routing

            app.UseRouting();

            #endregion

            #region SETUP application endpoints

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            #endregion

            #endregion

            #endregion

            #endregion

            #region 4. **OUTPUT: TELL the story*

            #endregion
        }

        #endregion
    }

    #endregion

    #region HANDLE baseDI startup task

    public partial class Startup
    {
        #region 1. Assign   

        #endregion

        #region 2. Ready   

        #endregion

        #region 3. Set   

        #endregion

        #region 4. Action   

        public static async Task<IActionResult> Action(string requestToProcess = "", string requestToProcessParameters = "", string requestActionName = "", Func<JObject, IActionResult> StoredRequestCallBack = null, IConfiguration StoredAppSettings = null)
        {
            #region 1. VARIABLES: DESCRIBE the memories

            var storedControllerInstance = new Startup_Controller();

            #endregion

            #region 2. VALUES: RECALL the memories

            #region MEMORIZE application settings

            storedControllerInstance.StoredAppSettings = StoredAppSettings;

            #endregion

            #region MEMORIZE process callback

            storedControllerInstance.StoredRequestCallBack = StoredRequestCallBack;

            #endregion

            #endregion

            #region 3. *INPUT: PROCESS the memories*

            #region HANDLE our logic

            #region *IDEAL case*

            #region PROCESS our request
            
            IActionResult result = await storedControllerInstance.Action(requestToProcess, requestToProcessParameters, requestActionName);

            #endregion

            #endregion

            #endregion

            #endregion

            #region 4. *OUTPUT: TELL the story*

            #region HANDLE process response

            #region *IDEAL case*

            #region DISPLAY some response

            return new OkResult();

            #endregion

            #endregion

            #endregion

            #endregion
        }

        #endregion
    }

    #endregion

    #region HANDLE baseDI http request

    public class Startup_Controller : ControllerBase
    {
        #region 1. Assign

        public IConfiguration StoredAppSettings { get; set; }

        private Dictionary<string, object> _storedClientORserverInfo;

        private ExtraData_12_2_1_0 _storedExtraData;

        public Func<SingleParmPoco_12_2_1_0, JObject> StoredStartUpCallBack = null;

        private JObject _storedStorylineDetails;
        private JObject _storedStorylineDetails_Parameters;

        public Func<JObject, IActionResult> StoredRequestCallBack = null;

        #endregion

        #region 2. Ready

        public Startup_Controller(IConfiguration configuration = null)
        {
            #region 1. Assign

            //SET WHAT is needed to create the storyline.
            _storedExtraData = new ExtraData_12_2_1_0();

            _storedStorylineDetails = new JObject();
            _storedStorylineDetails_Parameters = new JObject();

            _storedClientORserverInfo = new Dictionary<string, object>();

            if (configuration != null)
                StoredAppSettings = configuration;

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

            _storedStorylineDetails = null;
            _storedStorylineDetails_Parameters = null;

            #endregion

            #region 3. Observe


            #endregion
        }

        #endregion

        #region 4. Action

        [HttpGet("")]
        public async Task<IActionResult> Action(string requestNameToProcess = "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0", string requestNameToProcessParameters = "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0-P1_0", string requestActionName = "Action_ProcessHttpRequest_1_0")
        {
            #region 1. VARIABLES: DESCRIBE the memories

            ContentResult storedResult = null;

            Func<string?, string?, ExtraData_12_2_1_0?, JObject> Action = null;

            JObject storedObservation = null;

            JToken storedOutput = null;

            StringBuilder storedOutputPrintOut = new StringBuilder();

            #endregion

            #region 2. VALUES: RECALL the memories

            #region MEMORIZE application settings
            if (StoredAppSettings != null)
                _storedClientORserverInfo.Add("StoredAppSettings", StoredAppSettings);
            #endregion

            #region MEMORIZE request instance
            _storedClientORserverInfo.Add("request", Request);
            #endregion

            #region MEMORIZE server instance
            _storedClientORserverInfo.Add("serverInstance", this);
            #endregion

            #region MEMORIZE action name
            if (requestActionName != "")
                _storedClientORserverInfo.Add("actionName", requestActionName);
            #endregion

            #endregion

            #region 3. **INPUT: PROCESS the memories*

            try
            {
                #region HANDLE our logic

                #region EDGE case

                #region PROCESS application updates

                StoredStartUpCallBack = (SingleParmPoco_12_2_1_0 response) =>
                {
                    Action("", "", null);
                    return _storedStorylineDetails;
                };

                #endregion

                #endregion

                #region EDGE case

                #region VALIDATE required values
                
                if (requestNameToProcess == "") throw new Exception("[DISTURBANCE ISSUE] - Bug - Startup.ts - BaseDI will not work without a request name. Please make sure that requestNameToProcess is not blank or null!");
                if (StoredAppSettings == null) throw new Exception("[DISTURBANCE ISSUE] - Bug - Startup.ts - BaseDI C# version will not work without an StoredAppSettings object. Please make sure that StoredAppSettings have a REQUIRED [StoredAppSettings:APP_SETTING_CONVERSION_MODE] value.");

                #endregion

                #endregion

                #region *IDEAL case*

                #region HANDLE system request

                Action = (string requestNameToProcess, string requestNameToProcessParameters, ExtraData_12_2_1_0 extraData) =>
                {
                    #region RETURN system response
                    
                    return new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0())
                        .SetupStoryline(_storedClientORserverInfo, _storedStorylineDetails, null, extraData, "", requestNameToProcess, requestNameToProcessParameters)
                        .Action().Result;

                    #endregion
                };

                #endregion

                #region START system request

                storedObservation = Action(requestNameToProcess, requestNameToProcessParameters, _storedExtraData);

                if (storedObservation != null)
                {
                    storedOutput = storedObservation["outputs"];
                }

                #endregion

                #endregion

                #endregion
            }
            catch (Exception ex)
            {
                #region HANDLE our mistakes

                #region START new block

                #region 1. VARIABLES: DESCRIBE the memories

                #endregion

                #region 2. VALUES: RECALL the memories

                #region MEMORIZE storyline details
                storedObservation = _storedStorylineDetails;
                #endregion

                #endregion



                #region 3. **INPUT: PROCESS the memories*

                #region HANDLE mistake response

                #region EDGE case
                if (storedObservation != null)
                {
                    #region PERFORM a search

                    storedOutput = storedObservation.SelectToken("outputs..baseDIMistakes");
                    foreach (var programmingMistake in storedOutput.Children())
                    {
                        #region BUILD response message
                        var mistake = programmingMistake.Value<string>("mistake");

                        storedOutputPrintOut.Append(mistake + System.Environment.NewLine);
                        #endregion
                    }
                    #endregion

                    Console.Write(storedOutputPrintOut.ToString());
                }
                #endregion

                #endregion

                #endregion



                #region 4. **OUTPUT: TELL the story*

                #endregion



                #endregion

                #endregion
            }

            #endregion

            #region 4. **OUTPUT: TELL the story*

            #region HANDLE callback response

            #region EDGE case

            #region PROCESS startup callback

            if (StoredRequestCallBack != null)
            {
                StoredRequestCallBack(storedObservation);

                return new OkResult();                
            }

            #endregion

            #endregion

            #endregion
            else
            #region HANDLE interface response
            {
                #region *IDEAL case*

                #region DISPLAY html response

                if (storedObservation != null)
                {
                    storedResult = new ContentResult
                    {
                        ContentType = "text/html",
                        StatusCode = (int)HttpStatusCode.OK,
                        Content = (string)storedObservation.SelectToken("outputs[1].baseDIObservations[0].metadata[3].item.presentation[0].htmlResult")
                    };

                    return await Task.FromResult<ContentResult>(storedResult).ConfigureAwait(true);
                }

                #endregion

                #endregion

                #region EDGE case

                #region DISPLAY blank response

                return await Task.FromResult<ContentResult>(new ContentResult()).ConfigureAwait(true);

                #endregion

                #endregion
            }
            #endregion

            #endregion
        }

        #endregion
    }

    #endregion
}
