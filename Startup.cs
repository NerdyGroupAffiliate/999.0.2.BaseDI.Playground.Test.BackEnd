using BaseDI.BackEnd.Director.Programming_1;
using BaseDI.BackEnd.Script.Programming.Poco_1;
using BaseDI.BackEnd.Story.Programming_1;

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
            var process = new Startup_Controller();

            process.RequestCallBack = requestCallBack;

            IActionResult result = await process.Action(requestToProcess, requestToProcessParameters, requestActionName);

            return result;
        }
    }

    public class Startup_Controller : ControllerBase
    {
        #region 1. Assign

        //A. Variable Declaration
        private object _additionalClientInfo = null;

        private string _baseDIArmTemplateSchema = "";
        private string _baseDIArmTemplateSchemaEmbeddedResource = "BaseDI.BackEnd._8._Templates._2._Data_Movement.ARM_Templates._2.Generate_Brand_Trust._3.Social_Media.Template._1._1_0.State_Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0.json";
        private string _baseDIArmTemplateSchemaParameters = "";
        private string _baseDIArmTemplateSchemaParametersEmbeddedResource = "BaseDI.BackEnd._8._Templates._2._Data_Movement.ARM_Templates._2.Generate_Brand_Trust._3.Social_Media.Template._1._1_0.State_Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0-P.json";

        private Dictionary<string, object> _serverInfo;

        private ExtraData_12_2_1_0 _extraData;

        private object _presentation;

        private string _requestToProcess = "";
        private string _requestToProcessParameters = "";

        private JObject _storylineDetails;
        private JObject _storylineDetails_Parameters;

        public Func<JObject, ExtraData_12_2_1_0, JObject> Update_Client = null;

        public Func<JObject, JObject> RequestCallBack = null;

        public List<RouteAttribute> routes = new List<RouteAttribute>();

        #endregion

        #region 2. Ready

        public Startup_Controller()
        {
            #region 1. Assign

            //SET WHAT is needed to create the storyline.
            _extraData = new ExtraData_12_2_1_0();

            _presentation = null;

            _storylineDetails = new JObject();
            _storylineDetails_Parameters = new JObject();

            _serverInfo = new Dictionary<string, object>();

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

            //READ OPTIONS TEMPLATE
            //using (Stream resourceStream = Assembly.GetExecutingAssembly().GetManifestResourceStream(_baseDIArmTemplateSchemaEmbeddedResource))
            //{
            //    using (StreamReader reader = new StreamReader(resourceStream))
            //    {
            //        //NOTE: YOU CAN OVERRIDE THIS IN REGION "4. ACTION" BELOW
            //        _baseDIArmTemplateSchema = reader.ReadToEnd();
            //    }
            //}

            //READ USER OPTIONS
            //using (Stream resourceStream = Assembly.GetExecutingAssembly().GetManifestResourceStream(_baseDIArmTemplateSchemaParametersEmbeddedResource))
            //{
            //    using (StreamReader reader = new StreamReader(resourceStream))
            //    {
            //        //NOTE: YOU CAN OVERRIDE THIS IN REGION "4. ACTION" BELOW
            //        _baseDIArmTemplateSchemaParameters = reader.ReadToEnd();
            //    }
            //}

            _storylineDetails = null;
            _storylineDetails_Parameters = null;

            #endregion

            #region 3. Observe

            if (!string.IsNullOrEmpty(_baseDIArmTemplateSchema))
            {
                _storylineDetails = JObject.Parse(_baseDIArmTemplateSchema);
            }

            if (!string.IsNullOrEmpty(_baseDIArmTemplateSchemaParameters))
            {
                _storylineDetails_Parameters = JObject.Parse(_baseDIArmTemplateSchemaParameters);
            }

            #endregion
        }

        #endregion

        #region 4. Action

        [HttpGet("")]
        public async Task<IActionResult> Action(string requestToProcess = "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0", string requestToProcessParameters = "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0-P1_0", string requestActionName = "Action_ProcessRequest_1_0")
        {
            #region 1. Assign

            JObject armTemplateJSONOutput = null;

            JToken outputs = null;

            StringBuilder outputObservationsPrintOut = new StringBuilder();

            //SETUP SERVR INFO
            _serverInfo.Add("request", Request);
            _serverInfo.Add("server", this);

            if (requestActionName != "")
                _serverInfo.Add("actionName", requestActionName);

            ContentResult result = null;

            #endregion

            #region 2. Action

            try
            {
                #region TEST OUR LOGIC

                #region PROCESS LOGIC UPDATES

                Update_Client = (JObject storylineDetails, ExtraData_12_2_1_0 extraData) =>
                {
                    _extraData = extraData;
                    _storylineDetails = storylineDetails;

                    return _storylineDetails;
                };

                #endregion

                armTemplateJSONOutput = new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0())
                    .SetupStoryline(_serverInfo, _storylineDetails, null, _extraData, "", requestToProcess, requestToProcessParameters)
                    .Action().Result;

                if (armTemplateJSONOutput != null)
                {
                    outputs = armTemplateJSONOutput["outputs"];
                }

                #endregion
            }
            catch (Exception ex)
            {
                #region PRINT OUT MISTAKES

                armTemplateJSONOutput = _storylineDetails;
                if (armTemplateJSONOutput != null)
                {
                    outputs = armTemplateJSONOutput.SelectToken("outputs..baseDIMistakes");
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
                RequestCallBack(armTemplateJSONOutput);

                return null;
            }

            if (armTemplateJSONOutput != null)
            {
                result = new ContentResult
                {
                    ContentType = "text/html",
                    StatusCode = (int)HttpStatusCode.OK,
                    Content = (string)armTemplateJSONOutput.SelectToken("outputs[1].baseDIObservations[0].metadata[3].item.presentation[0].htmlResult")
                };
                // return Content(armTemplateJSONOutput.ToString());
            }

            return await Task.FromResult<ContentResult>(result).ConfigureAwait(true);

            #endregion
        }

        #endregion
    }
}
