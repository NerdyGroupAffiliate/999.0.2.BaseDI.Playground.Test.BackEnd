﻿#region Imports

#region BaseDI

using BaseDI.Professional.Script.Programming.Abstract_1;
using BaseDI.Professional.Script.Programming.Repository_1;
using BaseDI.Professional.Script.Programming_1;

using BaseDI.Professional.Script.Programming.Poco_1;

#endregion

#region .Net Core

using Microsoft.Extensions.Configuration;

using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

#endregion 

#region 3rd Party Core

using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

#endregion

#endregion

namespace BaseDI.Professional.State.Programming_4
{
    public class RemoteService_Director_Of_Programming_Chapter_12_2_Page_4_DisturbanceRequest_Handler_1_0 : aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>>,  IContract_Programming_Repository_12_2_1_0
    {
        #region 1. Assign

        //SETTINGS
        private IConfiguration _storedProcessRequestSettings;

        private string _storedInputRequestApiAppId = "";
        private string _storedInputRequestApiAppSecret = "";
        private string _storedInputRequestApiAppToken = "";

        //CLIENT/SERVER
        private Dictionary<string, object> _storedProcessRequestTracker;

        private string _storedInputRequestName;
        private string _storedInputRequestNameDataCacheKey;

        private aClass_Programming_ScriptRoutable_12_2_1_0 _storedProcessRequestHandler;

        private Task<Dictionary<string, JToken>> _storedProcessRequestServerInstance = null;
        private object _storedProcessRequestServerInstanceExperienceRequestHandler = null;

        private string _storedProcessRequestServerHTTPRESTVerb = "";
        private string _storedProcessRequestServerHTTPRoutePath = "";

        //DATASET
        private JObject _storedProcessRequestDataStorylineDetails = null;
        private JObject _storedProcessRequestDataStorylineDetails_Parameters = null;

        private string _storedOutputResponseDataObservationTemplate = "";

        //MISC
        private ExtraData_12_2_1_0 _storedProcessRequestExtraData = null;

        //PLUMBING
        private string _storedInputRequestActionName = "";
        private aClass_Programming_ScriptRoutable_12_2_1_0 _storedBusinessDirectorOrExperienceRequestHandler;

        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedProcessRequestCentralizedDisturber;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedProcessRequestCentralizedSensor;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedProcessRequestCentralizedStorer;

        private SingleParmPoco_12_2_1_0 _storedInputs;

        private string _storedProcessRequestFileName = "LocalFile_Director_Of_Advertising_Chapter_1_1_Page_1_InputAdvertisement_Handler_1_0";
        private string _storedProcessRequestName = "";
        private IContract_Programming_Repository_12_2_1_0 _storedProcessRequestDataRepository;
        private string _storedProcessRequestByName;

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public RemoteService_Director_Of_Programming_Chapter_12_2_Page_4_DisturbanceRequest_Handler_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS

            #region MEMORIZE control client server

            _storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

            #endregion

            #region MEMORIZE action name

            _storedInputRequestActionName = (string)_storedProcessRequestTracker["storedInputRequestActionName"];

            #endregion

            #region MEMORIZE app settings

            _storedProcessRequestSettings = (IConfiguration)_storedProcessRequestTracker["storedProcessRequestSettings"];

            #endregion

            #region MEMORIZE centralized processes handlers

            _storedProcessRequestCentralizedDisturber = parameterInputs.Parameters["parameterProcessRequestCentralizedDisturber"];
            _storedProcessRequestCentralizedSensor = parameterInputs.Parameters["parameterProcessRequestCentralizedSensor"];
            _storedProcessRequestCentralizedStorer = parameterInputs.Parameters["parameterProcessRequestCentralizedStorer"];

            #endregion

            #region MEMORIZE data repository

            _storedProcessRequestDataRepository = parameterInputs.Parameters["parameterProcessRequestDataRepository"];

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #region MEMORIZE storyline details

            _storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            _storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails_Parameters"];

            #endregion

            #region MEMORIZE extra data

            _storedProcessRequestExtraData = parameterInputs.Parameters["parameterProcessRequestExtraData"] ? parameterInputs.Parameters["parameterProcessRequestExtraData"] : null;

            #endregion

            #region MEMORIZE request details

            _storedInputRequestName = parameterInputs.Parameters["parameterInputRequestName"];
            _storedInputRequestNameDataCacheKey = parameterInputs.Parameters["parameterInputRequestNameDataCacheKey"];
            _storedProcessRequestHandler = parameterInputs.Parameters["parameterProcessRequestHandler"];

            _storedProcessRequestName = parameterInputs.Parameters["parameterProcessRequestByName"];

            _storedProcessRequestByName = parameterInputs.Parameters["parameterProcessRequestByName"];

            _storedBusinessDirectorOrExperienceRequestHandler = parameterInputs.Parameters["parameterBusinessDirectorOrExperienceRequestHandler"];

            _storedInputs = parameterInputs;

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE process defaults

            #region IDEAL CASE - USE defaults handler

            HandleDefaults();

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #endregion  
        }

        #endregion

        #region 3. Set

        public override void HandleDefaults()
        {
            #region 1. INPUTS

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE process defaults


            #endregion

            #endregion

            #region 3. OUTPUT

            #endregion
        }

        #endregion

        #region 4. Action

        #region A. Action Methods

        //A. Story in motion (DO SOMETHING)

        #region EXECUTE LOGIC INSTUCTIONS

        #region A. Action Methods

        #endregion

        #region B. Action Factories

        #endregion

        #region C. Action Logic

        #endregion

        #endregion

        #region NOT APART OF THE REQUEST PIPELINE AT THIS TIME

        #region A. Action Methods

        //Page 1-1
        public override async Task<JObject> Action_1_Begin_Process()
        {
            #region 1. INPUTS


            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            #region RETURN process response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(_storedProcessRequestDataStorylineDetails).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        //Page 1-2
        public override async Task<JObject> Action_2_Validate_Process()
        {
            #region 1. INPUTS


            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            #region RETURN process response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(_storedProcessRequestDataStorylineDetails).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        //Page 1-3
        public override async Task<JObject> Action_3_Process_StoryAuthor()
        {
            #region 1. INPUTS


            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            #region RETURN process response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(_storedProcessRequestDataStorylineDetails).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        //Page 1-4
        public override async Task<JObject> Action_4_Process_StoryCharacters()
        {
            #region 1. INPUTS


            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            #region RETURN process response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(_storedProcessRequestDataStorylineDetails).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        //Page 1-5
        public override async Task<JObject> Action_5_Process_StorySetting()
        {
            #region 1. INPUTS


            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            #region RETURN process response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(_storedProcessRequestDataStorylineDetails).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        //Page 1-6
        public override async Task<JObject> Action_6_Process_StoryExperiences()
        {
            #region 1. INPUTS


            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            #region RETURN process response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(_storedProcessRequestDataStorylineDetails).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        //Page 1-7
        public override async Task<JObject> Action_7_Process_StoryResources()
        {
            #region 1. INPUTS


            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            #region RETURN process response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(_storedProcessRequestDataStorylineDetails).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        //Page 1-8
        public override async Task<JObject> Action_8_Process_CRUD()
        {
            #region 1. INPUTS


            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            #region RETURN process response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(_storedProcessRequestDataStorylineDetails).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        //Page 1-9
        public override async Task<JObject> Action_9_Verify_Process()
        {
            #region 1. INPUTS

            #region DEFINE data response

            JObject storedOutputResponseData = null;

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONFIGURING web routes");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", _storedProcessRequestTracker["storedInputRequestActionName"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Director_Of_Security_Chapter_12_5_Page_1_StoreAuthentication_Handler_1_0.cs");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Action -> Action_5_Process_StorySetting");

            #endregion

            #endregion

            #region 2. PROCESS

            try
            {
                storedOutputResponseData = await Factory_Action_9_Verify_Process();
            }
            catch
            {
                throw; //Let "Startup.cs -> Startup_Controller" handle the exception.
            }

            #endregion

            #region 3. OUTPUT

            #region RETURN http response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(storedOutputResponseData).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        //Page 1-10
        public override async Task<JObject> Action_10_End_Process()
        {
            #region 1. INPUTS

            #region DEFINE data response

            JObject storedOutputResponseData = null;

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONFIGURING web routes");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", _storedProcessRequestTracker["storedInputRequestActionName"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.cs");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Action -> Action_5_Process_StorySetting");

            #endregion

            #endregion

            #region 2. PROCESS

            try
            {
                storedOutputResponseData = StorylineDetails; //await Factory_Action_10_End_Process();
            }
            catch
            {
                throw; //Let "Startup.cs -> Startup_Controller" handle the exception.
            }

            #endregion

            #region 3. OUTPUT

            #region RETURN http response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(storedOutputResponseData).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        #endregion

        #region B. Action Factories

        //Page 1-1
        private async Task<JObject> Factory_Action_1_Begin_Process()
        {
            switch (_storedInputRequestActionName.ToUpper())
            {
                default:
                    return await Task.FromResult<JObject>(null).ConfigureAwait(true);
            }
        }

        //Page 1-2
        private async Task<JObject> Factory_Action_2_Validate_Process()
        {
            switch (_storedInputRequestActionName.ToUpper())
            {
                default:
                    return await Task.FromResult<JObject>(null).ConfigureAwait(true);
            }
        }

        //Page 1-3
        private async Task<JObject> Factory_Action_3_Process_StoryAuthor()
        {
            switch (_storedInputRequestActionName.ToUpper())
            {
                default:
                    return await Task.FromResult<JObject>(null).ConfigureAwait(true);
            }
        }

        //Page 1-4
        private async Task<JObject> Factory_Action_4_Process_StoryCharacters()
        {
            switch (_storedInputRequestActionName.ToUpper())
            {
                default:
                    return await Task.FromResult<JObject>(null).ConfigureAwait(true);
            }
        }

        //Page 1-5
        private async Task<JObject> Factory_Action_5_Process_StorySetting()
        {
            switch (_storedInputRequestActionName.ToUpper())
            {
                default:
                    return await Task.FromResult<JObject>(null).ConfigureAwait(true);
            }
        }

        //Page 1-6
        private async Task<JObject> Factory_Action_6_Process_StoryExperiences()
        {
            switch (_storedInputRequestActionName.ToUpper())
            {
                default:
                    return await Task.FromResult<JObject>(null).ConfigureAwait(true);
            }
        }

        //Page 1-7
        private async Task<JObject> Factory_Action_7_Process_StoryResources()
        {
            switch (_storedInputRequestActionName.ToUpper())
            {
                default:
                    return await Task.FromResult<JObject>(null).ConfigureAwait(true);
            }
        }

        //Page 1-8
        private async Task<JObject> Factory_Action_8_Process_CRUD()
        {
            switch (_storedInputRequestActionName.ToUpper())
            {
                default:
                    return await Task.FromResult<JObject>(null).ConfigureAwait(true);
            }
        }

        //Page 1-9
        private async Task<JObject> Factory_Action_9_Verify_Process()
        {
            #region 1. INPUTS

            #region DEFINE data response

            JObject storedOutputResponseData = null;

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONFIGURING web routes");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", _storedProcessRequestTracker["storedInputRequestActionName"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Director_Of_Security_Chapter_12_5_Page_1_StoreAuthentication_Handler_1_0.cs");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Action -> Action_8_Process_CRUD -> Factory_Action_8_Process_CRUD");

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE process factory

            try
            {
                #region IDEAL CASE - USE factory method

                //if (_storedInputRequestActionName.ToUpper().Contains("PROCESSHTTPREQUEST_1_0"))
                //{
                //    storedOutputResponseData = await Execute_Factory_Action_9_Verify_Process_OutputApiToken();
                //}

                #endregion
            }
            catch
            {
                throw; //Let "Startup.cs -> Startup_Controller" handle the exception.
            }

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN http response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(storedOutputResponseData).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        //Page 1-10
        private async Task<JObject> Factory_Action_10_End_Process()
        {
            #region 1. INPUTS

            #region DEFINE data response

            JObject storedOutputResponseData = null;

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONFIGURING web routes");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", _storedProcessRequestTracker["storedInputRequestActionName"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Director_Of_Security_Chapter_12_5_Page_1_StoreAuthentication_Handler_1_0.cs");         
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Action -> Factory_Action_10_End_Process -> Factory_Action_7_Process_StoryResources");

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE process factory

            try
            {
                #region IDEAL CASE - USE factory method

                if (_storedInputRequestActionName.ToUpper() == Action_12_2_1_0._12_3_WEB_DEVELOPMENT_Server_Copy_Static_Files_1_0.ToUpper())
                {
                    //storedOutputResponseData = await Execute_Factory_Action_10_End_Process_TransportRequestToHandler();
                }

                #endregion
            }
            catch
            {
                throw; //Let "Startup.cs -> Startup_Controller" handle the exception.
            }

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN http response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(storedOutputResponseData).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        #endregion

        #region C. Action Logic

        #endregion

        #endregion

        #endregion

        #endregion
    }
}
