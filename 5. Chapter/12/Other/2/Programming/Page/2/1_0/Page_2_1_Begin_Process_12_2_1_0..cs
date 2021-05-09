﻿#region Imports

#region BaseDI

using BaseDI.Professional.Script.Programming.Abstract_1;
using BaseDI.Professional.Script.Programming.Poco_1;
using BaseDI.Professional.Script.Programming.Repository_1;
using BaseDI.Professional.Script.Programming_1;

#endregion

#region .Net Core

using Microsoft.Extensions.Configuration;

using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

#endregion 

#region 3rd Party Core

using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

#endregion

#endregion

namespace BaseDI.Professional.Chapter.Page.Programming_2
{
    public class Page_2_1_Begin_Process_12_2_1_0 : aClass_Programming_ScriptPage_12_2_1_0
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

        private string _storedProcessRequestFileName = "LocalFile_Director_Of_Advertising_Chapter_1_1_Page_1_InputAdvertisement_Handler_1_0";
        private string _storedProcessRequestName = "";
        private IContract_Programming_Repository_12_2_1_0 _storedProcessRequestDataRepository;
        private string _storedProcessRequestByName;
        private List<JToken> _storedJSONKeyPlaceHolderName;

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public Page_2_1_Begin_Process_12_2_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
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

            _storedProcessRequestRequestHandler = parameterInputs.Parameters["parameterBusinessDirectorOrExperienceRequestHandler"];

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

            #region DEFINE data response

            JObject storedOutputResponseData = null;

            #endregion

            #region MEMORIZE action name

            string storedInputRequestActionName = ClientOrServerInstance["storedInputRequestActionName"] as string;

            #endregion

            #region MEMORIZE app settings

            _storedProcessRequestSettings = (IConfiguration)ClientOrServerInstance["storedProcessRequestSettings"];

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #region MEMORIZE control client server

            _storedProcessRequestTracker = ClientOrServerInstance;

            #endregion

            #region MEMORIZE repository clientOrServer instance

            Repository.ClientOrServerInstance = ClientOrServerInstance;

            #endregion

            #region MEMORIZE repository extra data

            Repository.ExtraData = ExtraData;

            #endregion

            #region MEMORIZE repository centralized processes

            Repository.MasterStorer = MasterStorer;

            #endregion

            #region MEMORIZE request details

            string storedInputRequestName = ExtraData.KeyValuePairs["RequestToProcess"].ToString();
            string storedInputRequestNameDataCacheKey = ExtraData.KeyValuePairs["RequestToProcessParameters"].ToString();

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE get dataset

            try
            {
                #region IDEAL CASE - USE data repository

                #region 2. OUTPUT data response

                Func<Task<JObject>> GetDataSet = async () =>
                {
                    storedOutputResponseData = Repository.Action_8_Process_CRUD().Result;

                    StorylineDetails = JObject.FromObject(storedOutputResponseData["StorylineDetails"]);
                    StorylineDetails_Parameters = JObject.FromObject(storedOutputResponseData["StorylineDetails_Parameters"]);

                    Step_1_0_Framework_Store_JSONStringPlaceHolder_1_0((JObject)StorylineDetails.SelectToken("resources[*].baseDIProfiles[*]"));
                    Step_2_0_Framework_Convert_JSONStringPlaceHolderIntoAppSettings_1_0();

                    return await Task.FromResult<JObject>(null).ConfigureAwait(true);
                };

                #endregion

                #region 1. INPUT data request

                await GetDataSet();

                #endregion

                #endregion
            }
            catch (Exception storedProcessRequestMistake)
            {
                #region EDGE CASE - USE developer logger

                if (storedProcessRequestDeveloperMode)
                {
                    ClientOrServerInstance["storedProcessRequestStepNumber"] = (int)ClientOrServerInstance["storedProcessRequestStepNumber"] + 1;

                    Console.WriteLine("STEP " + ClientOrServerInstance["storedProcessRequestStepNumber"] + ": ***LEAKY PIPE*** GETTING a dataset for request " + storedInputRequestActionName + " -> " + storedInputRequestName + " could not be completed successfully. Please check ***AppSettings.json*** for APP_SETTING_CONVERSION_MODE_XXX value.");
                }

                #endregion

                #region EDGE CASE - USE exception handler

                throw storedProcessRequestMistake;

                #endregion
            }

            #endregion

            #endregion    

            #region 3. OUTPUT

            #region RETURN process response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(StorylineDetails).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        #region STORE JSONSTRING PLACEHOLDER

        private void Step_1_0_Framework_Store_JSONStringPlaceHolder_1_0(JObject parameter_BaseDI_JSONDataSchema)
        {
            #region 1. INPUTS

            #region DEFINE data key/values

            List<JToken> storedJSONValuesList = new List<JToken>();

            #endregion

            #region MEMORIZE app settings

            _storedProcessRequestSettings = (IConfiguration)ClientOrServerInstance["storedProcessRequestSettings"];

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #region MEMORIZE request details

            string storedInputRequestName = ExtraData.KeyValuePairs["RequestToProcess"].ToString();
            string storedInputRequestNameDataCacheKey = ExtraData.KeyValuePairs["RequestToProcessParameters"].ToString();

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE jsonkey search

            try
            {
                #region IDEAL CASE - USE string placeholder

                if (parameter_BaseDI_JSONDataSchema != null)
                {
                    if (_storedJSONKeyPlaceHolderName == null)
                        _storedJSONKeyPlaceHolderName = new List<JToken>();

                    foreach (var storedJSONValue in parameter_BaseDI_JSONDataSchema.Children())
                    {
                        storedJSONValuesList.Add(storedJSONValue);
                    };

                    foreach (var storedJSONValue in storedJSONValuesList)
                    {
                        JProperty optionItem = (JProperty)storedJSONValue;

                        if (((JProperty)storedJSONValue).Name.ToString().ToUpper().Contains("_MAINPROFILE"))
                        {
                            _storedJSONKeyPlaceHolderName.Add(optionItem);
                        }
                    }
                }

                #endregion
            }
            catch
            {
                #region EDGE CASE - USE developer logger

                if (storedProcessRequestDeveloperMode)
                {
                    ClientOrServerInstance["storedProcessRequestStepNumber"] = (int)ClientOrServerInstance["storedProcessRequestStepNumber"] + 1;

                    Console.WriteLine("STEP " + ClientOrServerInstance["storedProcessRequestStepNumber"] + ": ***LEAKY PIPE*** GETTING a dataset for request " + storedInputRequestName + " could not be completed successfully. Please check ***AppSettings.json*** for APP_SETTING_CONVERSION_MODE_XXX value. [Page_2_1_Begin_Process_12_2_1_0 -> Step_1_0_Framework_Store_JSONStringPlaceHolder_1_0]");
                }

                #endregion
            }

            #endregion

            #endregion

            #region 3. OUTPUT

            #endregion
        }

        #endregion

        #region CONVERT JSONSTRING PLACEHOLDER
        private void Step_2_0_Framework_Convert_JSONStringPlaceHolderIntoAppSettings_1_0()
        {
            if (_storedJSONKeyPlaceHolderName.Any())
            {
                foreach(var profile in _storedJSONKeyPlaceHolderName)
                {
                    StorylineDetails.SelectToken(profile.Path).Replace(StorylineDetails_Parameters.SelectToken("baseDI_NerdyGroupAffiliates_DynamicWebsite_MainProfile.value"));
                }
            }
        }
        #endregion

        #endregion
    }

}

   