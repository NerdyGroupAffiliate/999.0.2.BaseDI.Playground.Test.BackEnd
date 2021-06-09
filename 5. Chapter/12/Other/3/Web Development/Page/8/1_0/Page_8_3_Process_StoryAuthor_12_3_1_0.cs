#region Imports

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

namespace BaseDI.Professional.Chapter.Page.Web_Development_8
{
    public class Page_8_3_Process_StoryAuthor_12_3_1_0 : aClass_Programming_ScriptPage_12_2_1_0
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
        private aClass_Programming_ScriptRoutable_12_2_1_0 _storedProcessRequestRequestHandler;

        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedProcessRequestCentralizedDisturber;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedProcessRequestCentralizedSensor;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedProcessRequestCentralizedStorer;

        private SingleParmPoco_12_2_1_0 _storedInputs;

        private string _storedProcessRequestFileName = "LocalFile_Director_Of_Advertising_Chapter_1_1_Page_8_CreateAdvertisement_Handler_1_0";
        private string _storedProcessRequestName = "";
        private IContract_Programming_Repository_12_2_1_0 _storedProcessRequestDataRepository;
        private string _storedProcessRequestByName;

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public Page_8_3_Process_StoryAuthor_12_3_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS

            #region MEMORIZE control client server

            _storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

            #endregion

            #region MEMORIZE action name

            _storedInputRequestActionName = (string)_storedInputs.Parameters["parameterInputRequestActionName"];

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

            _storedProcessRequestExtraData = parameterInputs.Parameters.ContainsKey("parameterProcessRequestExtraData") ? parameterInputs.Parameters["parameterProcessRequestExtraData"] : null;

            #endregion

            #region MEMORIZE request details

            _storedInputRequestName = parameterInputs.Parameters["parameterInputRequestName"];
            _storedInputRequestNameDataCacheKey = parameterInputs.Parameters["parameterInputRequestNameDataCacheKey"];
            _storedProcessRequestHandler = parameterInputs.Parameters["parameterProcessRequestHandler"];

            _storedProcessRequestName = parameterInputs.Parameters["parameterProcessRequestName"];

            _storedProcessRequestByName = parameterInputs.Parameters["parameterProcessRequestName"];

            _storedProcessRequestRequestHandler = parameterInputs.Parameters["parameterProcessRequestHandler"];

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

        //A. Page in motion (DO SOMETHING)
        public override async Task<JObject> Action()
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

        #endregion
    }
}
