#region Imports

#region BaseDI

using BaseDI.Professional.Director.Programming_1;
using BaseDI.Professional.Script.Programming.Poco_1;
using BaseDI.Professional.Script.Risk_Management.Extensions_0;
using BaseDI.Professional.Story.Programming_0;

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

        //CLIENT/SERVER
        private dynamic _storedControlRequestClientOrServer;

        //SETTINGS
        public IConfiguration _storedProcessRequestSettings { get; set; }
        private Dictionary<string, object> _storedProcessRequestTracker = new Dictionary<string, object>();

        //DATASETS

        //MISC
        private ExtraData_12_2_1_0 _storedProcessRequestExtraData = new ExtraData_12_2_1_0();

        //PLUMBING
        public Func<JObject, IActionResult> ExecuteControlRequest = null;

        #endregion

        #region 2. Ready  

        public Startup(IConfiguration parameterProcessRequestSettings)
        {
            #region 1. INPUTS

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables


            #endregion

            #region DEFINE output variables


            #endregion

            ///////////////////////////////////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control client server

            _storedControlRequestClientOrServer = this;

            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input xxx xxxx


            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process request settings

            _storedProcessRequestSettings = parameterProcessRequestSettings;

            #endregion

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxxx

            #endregion

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE process defaults

            #region EDGE CASE - USE defaults handler

            HandleDefaults();

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT


            #endregion       
        }

        #endregion

        #region 3. Set   

        //A. Default state
        public void HandleDefaults()
        {
            #region 1. INPUTS

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables


            #endregion

            #region DEFINE output variables


            #endregion

            ///////////////////////////////////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx

            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input xxx xxxx


            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process xxx xxx


            #endregion

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxxx

            #endregion

            #endregion

            #endregion

            #region 2. PROCESS

            #region HANDLE application defaults

            #region IDEAL CASE - USE hardcoded values            

            _storedProcessRequestTracker["storedProcessRequestIgnoreDeveloperConsoleLog"] = false;

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #endregion
        }

        #endregion

        #region 4. Action   

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection parameterControlRequestServices)
        {
            #region 1. INPUTS

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables


            #endregion

            #region DEFINE output variables


            #endregion

            ///////////////////////////////////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control client server

            _storedControlRequestClientOrServer = this;

            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input xxx xxxx


            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process extra data

            _storedProcessRequestExtraData.KeyValuePairs.TryAdd("storedControlRequest_IServiceCollection", parameterControlRequestServices);

            #endregion

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxxx

            #endregion

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE process .net services

            #region EDGE CASE - USE .net pipeline

            parameterControlRequestServices.AddControllers();

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT


            #endregion       
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder parameterControlRequest_IApplicationBuilder, IWebHostEnvironment parameterControlRequest_IWebHostEnvironment)
        {
            #region 1. INPUTS

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables

            SingleParmPoco_12_2_1_0 storedInputs1 = null;
            SingleParmPoco_12_2_1_0 storedInputs2 = null;

            #endregion

            #region DEFINE process variables


            #endregion

            #region DEFINE output variables

            IActionResult storedOutputResponseActionResult = null;

            #endregion

            ///////////////////////////////////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx

            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input request file copy

            storedInputs1 = new SingleParmPoco_12_2_1_0();

            //1. CONTROLLERS
            storedInputs1.Parameters.TryAdd("parameterControlRequestClientOrServer", this);

            //2. INPUTS
            storedInputs1.Parameters.TryAdd("parameterInputRequestActionName", Action_12_2_1_0._12_3_WEB_DEVELOPMENT_Server_Copy_Static_Files_1_0);
            storedInputs1.Parameters.TryAdd("parameterInputRequestName", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0");
            storedInputs1.Parameters.TryAdd("parameterInputRequestNameDataCacheKey", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0-P1_0");

            //3. PROCESS
            storedInputs1.Parameters.TryAdd("parameterProcessRequestCallBack", null);
            storedInputs1.Parameters.TryAdd("parameterProcessRequestSettings", _storedProcessRequestSettings);

            //4. OUTPUTS
            storedInputs1.Parameters.TryAdd("parameterOutputResponseControlID", "");

            #endregion

            #region MEMORIZE input request file mapping

            storedInputs2 = new SingleParmPoco_12_2_1_0();

            //1. CONTROLLERS
            storedInputs2.Parameters.TryAdd("parameterControlRequestClientOrServer", this);

            //2. INPUTS
            storedInputs2.Parameters.TryAdd("parameterInputRequestActionName", Action_12_2_1_0._12_3_WEB_DEVELOPMENT_Server_Map_Static_Files_1_0);
            storedInputs2.Parameters.TryAdd("parameterInputRequestName", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0");
            storedInputs2.Parameters.TryAdd("parameterInputRequestNameDataCacheKey", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0-P1_0");

            //3. PROCESS
            storedInputs2.Parameters.TryAdd("parameterProcessRequestCallBack", null);
            storedInputs2.Parameters.TryAdd("parameterProcessRequestSettings", _storedProcessRequestSettings);

            //4. OUTPUTS
            storedInputs2.Parameters.TryAdd("parameterOutputResponseControlID", "");

            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process configure instances

            IApplicationBuilder storedControlRequest_IApplicationBuilder = parameterControlRequest_IApplicationBuilder;
            IWebHostEnvironment storedControlRequest_IWebHostEnvironment = parameterControlRequest_IWebHostEnvironment;

            #endregion

            #region MEMORIZE process request settings

            _storedProcessRequestTracker.Add("storedProcessRequestSettings", _storedProcessRequestSettings);

            #endregion

            #region MEMORIZE process developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") ? _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") : false;

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "CONVERTING json to html");
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestTracker", _storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestFileName", "Startup.cs");
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Configure");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters["parameterOPTIONALIgnoreDeveloperConsoleLog"));

            #endregion

            #region MEMORIZE process extra data

            _storedProcessRequestExtraData.KeyValuePairs.TryAdd("storedControlRequest_IApplicationBuilder", storedControlRequest_IApplicationBuilder);
            _storedProcessRequestExtraData.KeyValuePairs.TryAdd("storedControlRequest_IWebHostEnvironment", storedControlRequest_IWebHostEnvironment);

            _storedProcessRequestTracker.Add("storedProcessRequestExtraData", _storedProcessRequestExtraData);

            #endregion

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxxx

            #endregion

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE copying static files

            #region IDEAL CASE - USE json metadata

            try
            {
                #region A. INPUT request

                _storedProcessRequestTracker.Remove("storedInputRequestActionName");
                _storedProcessRequestTracker.Remove("storedProcessRequestStepNumber");                

                _storedProcessRequestTracker.Add("storedInputRequestActionName", Action_12_2_1_0._12_3_WEB_DEVELOPMENT_Server_Copy_Static_Files_1_0);
                _storedProcessRequestTracker.Add("storedProcessRequestStepNumber", 0);

                storedInputs1.Parameters.TryAdd("parameterProcessRequestTracker", _storedProcessRequestTracker);

                #endregion

                #region B. PROCESS request

                storedOutputResponseActionResult = Action(storedInputs1).Result;

                #endregion
            }
            catch (Exception storedProcessRequestMistake)
            {
                #region EDGE CASE - USE developer logger

                if (storedProcessRequestDeveloperMode)
                {
                    _storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)_storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                    //storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterInputRequestActionName", _parameterInputs.Parameters.getValue("parameterInputRequestActionName"));

                    storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "FAILED copying static files");
                    storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", _storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                    storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Configure");
                    storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMistake",  storedProcessRequestMistake);

                    storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                    Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs).ConfigureAwait(true);
                }

                #endregion

                #region EDGE CASE - USE exception handler

                throw new Exception("CONVERSION request failed " +  storedProcessRequestMistake.ToString());

                #endregion
            }

            #endregion

            #endregion

            #region EXECUTE mapping static files

            try
            {
                #region IDEAL CASE - USE json metadata

                #region A. INPUT request

                _storedProcessRequestTracker.Remove("storedInputRequestActionName");
                _storedProcessRequestTracker.Remove("storedProcessRequestStepNumber");

                _storedProcessRequestTracker.Add("storedInputRequestActionName", Action_12_2_1_0._12_3_WEB_DEVELOPMENT_Server_Map_Static_Files_1_0);
                _storedProcessRequestTracker.Add("storedProcessRequestStepNumber", 0);

                storedInputs2.Parameters.TryAdd("parameterProcessRequestTracker", _storedProcessRequestTracker);
                storedInputs2.Parameters.TryAdd("parameterProcessRequestCallBack", ExecuteControlRequest);

                #endregion

                #region B. PROCESS request

                storedOutputResponseActionResult = Action(storedInputs2).Result;

                #endregion

                #endregion
            }
            catch (Exception storedProcessRequestMistake)
            {
                #region EDGE CASE - USE developer logger

                if (storedProcessRequestDeveloperMode)
                {
                    _storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)_storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                    //storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterInputRequestActionName", _parameterInputs.Parameters.getValue("parameterInputRequestActionName"));

                    storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "FAILED mapping static files");
                    storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", _storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                    storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Configure");
                    storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMistake",  storedProcessRequestMistake);

                    storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                    Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs).ConfigureAwait(true);
                }

                #endregion

                #region EDGE CASE - USE exception handler

                throw new Exception("CONVERSION request failed " +  storedProcessRequestMistake.ToString());

                #endregion
            }

            #endregion

            #region EXECUTE configure server

            #region IDEAL CASE - USE .net core

            storedControlRequest_IApplicationBuilder.UseRouting();
            storedControlRequest_IApplicationBuilder.UseEndpoints(endpoints =>
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

        public static async Task<IActionResult> Action(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS

            #region DEFINE control variables

            Startup_Controller storedControlRequestStartServer = new Startup_Controller();

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables


            #endregion

            #region DEFINE output variables


            #endregion

            ///////////////////////////////////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx

            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input xxx xxxx


            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process request settings

            IConfiguration storedProcessRequestSettings = parameterInputs.Parameters["parameterProcessRequestSettings"];

            #endregion

            #region MEMORIZE process request tracker

            Dictionary<string, object> storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

            #endregion

            #region MEMORIZE process developer mode

            bool storedProcessRequestDeveloperMode = storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") ? storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") : false;

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterInputRequestActionName", parameterInputs.Parameters["parameterInputRequestActionName"]);

            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "CONFIGURING web server");            
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestSettings", storedProcessRequestSettings);
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestFileName", "Startup.cs");
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Configure");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters["parameterOPTIONALIgnoreDeveloperConsoleLog"));

            #endregion

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxxx

            #endregion

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE request handler

            try
            {
                #region IDEAL CASE - USE baseDI pipeline

                IActionResult result = await storedControlRequestStartServer.Action(parameterInputs);

                #endregion
            }
            catch (Exception storedProcessRequestMistake)
            {
                #region EDGE CASE - USE developer logger

                if (storedProcessRequestDeveloperMode)
                {
                    storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                    storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterInputRequestActionName", parameterInputs.Parameters["parameterInputRequestActionName"]);

                    storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "FAILED configurating server");
                    storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                    storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Configure");
                    storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMistake",  storedProcessRequestMistake);

                    storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                    await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs).ConfigureAwait(true);
                }

                #endregion

                #region EDGE CASE - USE exception handler

                throw new Exception("CONTROL request failed " +  storedProcessRequestMistake.ToString());

                #endregion
            }

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

        //CLIENT/SERVER
        private dynamic _storedControlRequestClientOrServer;

        //SETTINGS
        public IConfiguration _storedProcessRequestSettings { get; set; }

        //DATASETS
        private JObject _storedProcessRequestDataStorylineDetails;
        private JObject _storedProcessRequestDataStorylineDetails_Parameters;

        //MISC
        private ExtraData_12_2_1_0 _storedProcessRequestExtraData;

        //PLUMBING
        private Dictionary<string, object> _storedProcessRequestTracker;
        public Func<JObject, IActionResult> ExecuteControlRequest = null;

        #endregion

        #region 2. Ready

        public Startup_Controller(IConfiguration parameterProcessRequestSettings = null)
        {
            #region 1. INPUTS

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables

            _storedProcessRequestDataStorylineDetails = new JObject();
            _storedProcessRequestDataStorylineDetails_Parameters = new JObject();

            _storedProcessRequestExtraData = new ExtraData_12_2_1_0();
            _storedProcessRequestTracker = new Dictionary<string, object>();

            #endregion

            #region DEFINE output variables



            #endregion

            ///////////////////////////////////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control client server

            _storedControlRequestClientOrServer = this;

            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input xxx xxxx


            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process request settings

            if (parameterProcessRequestSettings != null)
                _storedProcessRequestSettings = parameterProcessRequestSettings;

            #endregion

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxx


            #endregion

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE process defaults

            #region EDGE CASE - USE defaults handler

            HandleDefaults();

            #endregion
            
            #endregion

            #endregion

            #region 3. OUTPUT

            #endregion
        }

        #endregion

        #region 3. Set

        //A. Default state of story
        public void HandleDefaults()
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
        public async Task<IActionResult> Action(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS

            #region VALIDATE input parameters

            Func<SingleParmPoco_12_2_1_0, Task<bool>> ValidateInputs = async (SingleParmPoco_12_2_1_0 parameterInputs) =>
            {
                #region 1. INPUTS

                #region DEFINE control variables

                #endregion

                #region DEFINE input variables


                #endregion

                #region DEFINE process variables

                bool storedProcessRequestMistakeMade = false;

                #endregion

                #region DEFINE output variables

                string storedOutputResponseMessage = "";

                #endregion

                ///////////////////////////////////////////////////////////

                #region MEMORIZE control variables

                #region MEMORIZE control xxx xxx


                #endregion

                #endregion

                #region MEMORIZE input variables

                #region MEMORIZE input xxx xxxx


                #endregion

                #endregion

                #region MEMORIZE process variables

                #region MEMORIZE process request tracker

                Dictionary<string, object> storedProcessRequestTracker = _storedProcessRequestTracker;

                #endregion

                #region MEMORIZE process request settings

                IConfiguration storedProcessRequestSettings = (IConfiguration)storedProcessRequestTracker["storedProcessRequestSettings"];

                #endregion

                #region MEMORIZE process developer mode

                bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

                _storedProcessRequestTracker["storedProcessRequestStepNumber"] = 0;

                SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

                //REQUIRED

                //0. CONTROLLERS

                //1. INPUTS
                //storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterInputRequestActionName", _parameterInputs.Parameters.getValue("parameterInputRequestActionName"));

                //2. PROCESS
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "STARING system request");
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestTracker", _storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestFileName", "Start.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Action");

                //3. OUTPUTS

                #endregion

                #endregion

                #region MEMORIZE output variables

                #region MEMORIZE output xxx xxx


                #endregion

                #endregion

                #endregion

                #region 2. PROCESS

                #region EXECUTE validation process

                #region IDEAL CASE - USE valid information

                if (parameterInputs != null && parameterInputs.Parameters != null)
                {
                    //0. CONTROLLERS
                    if (!parameterInputs.Parameters.ContainsKey("parameterControlRequestClientOrServer"))
                    {
                        storedOutputResponseMessage += "***parameterControlRequestClientOrServer*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    //1. INPUTS
                    if (!parameterInputs.Parameters.ContainsKey("parameterInputRequestActionName"))
                    {
                        storedOutputResponseMessage += "***parameterInputRequestActionName*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterInputRequestName"))
                    {
                        storedOutputResponseMessage += "***parameterInputRequestName*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterInputRequestNameDataCacheKey"))
                    {
                        storedOutputResponseMessage += "***parameterInputRequestNameDataCacheKey*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    //2. PROCESS
                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestCallBack"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestCallBack*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestSettings"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestSettings*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestTracker"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestTracker*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterOutputResponseControlID"))
                    {
                        storedOutputResponseMessage += "***parameterOutputResponseControlID*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (storedProcessRequestMistakeMade)
                    {
                        #region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode)
                        {
                            storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                            await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                        }

                        #endregion

                        #region EDGE CASE - USE exception handler

                        throw new Exception("PARSING parameter values failed");

                        #endregion
                    }
                }
                else
                {
                    #region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode)
                    {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                        await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw new Exception("PARSING parameter values failed");

                    #endregion
                }

                #endregion

                #endregion

                #endregion

                #region 3. OUTPUT

                #region RETURN validation passed

                #region IDEAL CASE - USE passed indicator

                return await Task.FromResult<bool>(true).ConfigureAwait(true);

                #endregion

                #endregion

                #endregion
            };

            //BEGIN valdation process
            await ValidateInputs(parameterInputs);

            #endregion

            ///////////////////////////////////////////////////////////

            #region DEFINE control variables

            Func<SingleParmPoco_12_2_1_0, Task<JObject>> Action = null;

            #endregion

            #region DEFINE input variables

            SingleParmPoco_12_2_1_0 storedInputs = null;

            #endregion

            #region DEFINE process variables

            #endregion

            #region DEFINE output variables

            dynamic storedOutputResponseData = null;

            IActionResult storedOutputResponseActionResult = null;

            #endregion

            ///////////////////////////////////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx



            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input action name

            string storedInputRequestActionName = parameterInputs.Parameters["parameterInputRequestActionName"];
           
            #endregion

            #region MEMORIZE input request name

            string storedInputRequestName = parameterInputs.Parameters["parameterInputRequestName"];

            #endregion

            #region MEMORIZE input request name data cache key

            string storedInputRequestNameDataCacheKey = parameterInputs.Parameters["parameterInputRequestNameDataCacheKey"];

            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process request callback

            dynamic storedProcessRequestCallBack = parameterInputs.Parameters["parameterProcessRequestCallBack"];

            #endregion

            #region MEMORIZE process request settings

            _storedProcessRequestSettings = (IConfiguration)_storedProcessRequestTracker["storedProcessRequestSettings"];

            #endregion

            #region MEMORIZE process request tracker

            _storedProcessRequestTracker.Add("storedProcessRequestSettings", _storedProcessRequestSettings);
            _storedProcessRequestTracker.Add("storedProcessRequestStepNumber", 0);

            #endregion

            #region MEMORIZE process developer mode

            bool storedProcessRequestDeveloperMode =_storedProcessRequestSettings.GetValue<bool>("AppSetting:APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED

            //0. CONTROLLERS

            //1. INPUTS
            //storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterInputRequestActionName", _parameterInputs.Parameters.getValue("parameterInputRequestActionName"));

            //2. PROCESS
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "STARING web request");                      
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestTracker", _storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestFileName", "Start.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Action");

            //3. OUTPUTS

            #endregion  

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output response controlID

            string storedOutputResponseControlID = parameterInputs.Parameters["parameterOutputResponseControlID"];
            _storedProcessRequestTracker["storedOutputResponseControlID"] = storedOutputResponseControlID;

            #endregion

            #endregion

            #endregion

            #region 2. PROCESS

            try
            {
                #region EXECUTE client request

                #region IDEAL CASE - USE request handler

                #region A. INPUT request

                storedInputs = new SingleParmPoco_12_2_1_0();

                //0. CONTROLLERS
                storedInputs.Parameters.TryAdd("parameterControlRequestClientOrServer", this);

                //1. INPUTS
                storedInputs.Parameters.TryAdd("parameterInputRequestActionName", storedInputRequestActionName);
                storedInputs.Parameters.TryAdd("parameterInputRequestName", storedInputRequestName);
                storedInputs.Parameters.TryAdd("parameterInputRequestNameDataCacheKey", storedInputRequestNameDataCacheKey);

                //2. PROCESS            
                storedInputs.Parameters.TryAdd("parameterProcessRequestCallBack", storedProcessRequestCallBack);
                storedInputs.Parameters.TryAdd("parameterProcessRequestSettings", _storedProcessRequestSettings);
                storedInputs.Parameters.TryAdd("parameterProcessRequestTracker", _storedProcessRequestTracker);
                
                storedInputs.Parameters.TryAdd("parameterProcessRequestDataStorylineDetails", null);
                storedInputs.Parameters.TryAdd("parameterProcessRequestDataStorylineDetails_Parameters", null);
                storedInputs.Parameters.TryAdd("parameterProcessRequestDataStorylineDetails_CallBack", null);

                //3. OUTPUTS
                storedInputs.Parameters.TryAdd("parameterOutputResponseControlID", storedOutputResponseControlID);

                #endregion

                Action = (SingleParmPoco_12_2_1_0 parameterInputs) =>
                {
                    return storedOutputResponseData = new Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0(parameterInputs))
                        .SetupStoryline(parameterInputs)
                        .Action().Result;
                };

                await Action(parameterInputs);

                #endregion

                #endregion
            }
            catch
            {
                #region HANDLE execution mistakes

                #region EDGE CASE - USE exception handler

                if (storedOutputResponseData != null)
                {
            
                }

                #endregion

                #endregion
            }

            #endregion

            #region 3. OUTPUT

            #region HANDLE execution response

            #region EDGE CASE - USE callback handler

            if (ExecuteControlRequest != null)
            {
                ExecuteControlRequest(storedOutputResponseData);

                return new OkResult();
            }

            #endregion

            #region IDEAL CASE - USE html responder

            if (storedOutputResponseData != null)
            {
                storedOutputResponseData = storedOutputResponseData["outputs"];
                
                if(storedOutputResponseData.SelectToken("outputs[1].baseDIObservations[0].metadata[3].item.presentation[0].htmlResult") != null)
                {
                    storedOutputResponseActionResult = new ContentResult
                    {
                        ContentType = "text/html",
                        StatusCode = (int)HttpStatusCode.OK,
                        Content = (string)storedOutputResponseData.SelectToken("outputs[1].baseDIObservations[0].metadata[3].item.presentation[0].htmlResult")
                    };

                    return await Task.FromResult<ContentResult>((ContentResult)storedOutputResponseActionResult).ConfigureAwait(true);
                }
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
