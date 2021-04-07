#region Imports

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

        //A. Variable Declaration

        //SETTINGS
        private IConfiguration _storedAppSettings;

        //CLIENT/SERVER
        internal Dictionary<string, object> _storedClientORserverInstance;

        //DATASETS
        internal JObject _storedStorylineDetails;
        internal JObject _storedStorylineDetails_Parameters;

        internal aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> _stored_Repository;

        //MISC
        internal ExtraData_12_2_1_0 _storedExtraData;

        //PLUMBING
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _stored_CentralizedStorer;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _stored_CentralizedDisturber;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _stored_CentralizedSensor;

        public List<JToken> _stored_JSONKeyPlaceHolderName = new List<JToken>();

        internal aClass_Programming_ScriptRoutable_12_2_1_0 _stored_DirectorRequestHandler;

        internal string _storedRequestName = "";
        internal string _storedSystemRequestByName;

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public Page_2_1_Begin_Process_12_2_1_0(JObject parameterStorylineDetails, aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> parameterRepository)
        {
            #region 1. INPUTS

            #region MEMORIZE data stragety

            Repository = parameterRepository;

            #endregion

            #region MEMORIZE storyline details

            StorylineDetails = parameterStorylineDetails;

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

        //A. Default state
        public override void HandleDefaults()
        {
            #region 1. INPUTS


            #endregion

            #region 2. PROCESS

            #region EXECUTE process defaults

            #region IDEAL CASE - defaults handler


            #endregion

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

            JObject storedDataResponse = null;

            #endregion

            #region MEMORIZE action name

            string storedActionName = ClientOrServerInstance["actionName"] as string;

            #endregion

            #region MEMORIZE app settings

            _storedAppSettings = (IConfiguration)ClientOrServerInstance["appSettings"];

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #region MEMORIZE clientOrServer instance

            _storedClientORserverInstance = ClientOrServerInstance;

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

            string storedRequestName = ExtraData.KeyValuePairs["RequestToProcess"].ToString();
            string storedRequestNameParameters = ExtraData.KeyValuePairs["RequestToProcessParameters"].ToString();

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
                    storedDataResponse = Repository.Action_9_Verify_Process().Result;

                    StorylineDetails = JObject.FromObject(storedDataResponse["StorylineDetails"]);
                    StorylineDetails_Parameters = JObject.FromObject(storedDataResponse["StorylineDetails_Parameters"]);

                    Step_1_0_Custom_Store_JSONStringPlaceHolder_1_0((JObject)StorylineDetails.SelectToken("resources[*].baseDIProfiles[*]"));
                    Step_2_0_Custom_Convert_JSONStringPlaceHolderIntoAppSettings_1_0();

                    return await Task.FromResult<JObject>(null).ConfigureAwait(true);
                };

                #endregion

                #region 1. INPUT data request

                await GetDataSet();

                #endregion

                #endregion
            }
            catch (Exception mistake)
            {
                #region EDGE CASE - USE developer logger

                if (storedDeveloperMode)
                {
                    ClientOrServerInstance["processStepNumber"] = (int)ClientOrServerInstance["processStepNumber"] + 1;

                    Console.WriteLine("STEP " + ClientOrServerInstance["processStepNumber"] + ": ***LEAKY PIPE*** GETTING a dataset for request " + storedActionName + " -> " + storedRequestName + " could not be completed successfully. Please check ***AppSettings.json*** for APP_SETTING_CONVERSION_MODE_XXX value.");
                }

                #endregion

                #region EDGE CASE - USE exception handler

                throw mistake;

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

        private void Step_1_0_Custom_Store_JSONStringPlaceHolder_1_0(JObject parameter_BaseDI_JSONDataSchema)
        {
            #region 1. INPUTS

            #region DEFINE data key/values

            List<JToken> storedJSONValuesList = new List<JToken>();

            #endregion

            #region MEMORIZE app settings

            _storedAppSettings = (IConfiguration)ClientOrServerInstance["appSettings"];

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #region MEMORIZE request details

            string storedRequestName = ExtraData.KeyValuePairs["RequestToProcess"].ToString();
            string storedRequestNameParameters = ExtraData.KeyValuePairs["RequestToProcessParameters"].ToString();

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE jsonkey search

            try
            {
                #region IDEAL CASE - USE string placeholder

                if (parameter_BaseDI_JSONDataSchema != null)
                {
                    if (_stored_JSONKeyPlaceHolderName == null)
                        _stored_JSONKeyPlaceHolderName = new List<JToken>();

                    foreach (var storedJSONValue in parameter_BaseDI_JSONDataSchema.Children())
                    {
                        storedJSONValuesList.Add(storedJSONValue);
                    };

                    foreach (var storedJSONValue in storedJSONValuesList)
                    {
                        JProperty optionItem = (JProperty)storedJSONValue;

                        if (((JProperty)storedJSONValue).Name.ToString().ToUpper().Contains("_MAINPROFILE"))
                        {
                            _stored_JSONKeyPlaceHolderName.Add(optionItem);
                        }
                    }
                }

                #endregion
            }
            catch
            {
                #region EDGE CASE - USE developer logger

                if (storedDeveloperMode)
                {
                    ClientOrServerInstance["processStepNumber"] = (int)ClientOrServerInstance["processStepNumber"] + 1;

                    Console.WriteLine("STEP " + ClientOrServerInstance["processStepNumber"] + ": ***LEAKY PIPE*** GETTING a dataset for request " + storedRequestName + " could not be completed successfully. Please check ***AppSettings.json*** for APP_SETTING_CONVERSION_MODE_XXX value. [Page_2_1_Begin_Process_12_2_1_0 -> Step_1_0_Custom_Store_JSONStringPlaceHolder_1_0]");
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
        private void Step_2_0_Custom_Convert_JSONStringPlaceHolderIntoAppSettings_1_0()
        {
            if (_stored_JSONKeyPlaceHolderName.Any())
            {
                foreach(var profile in _stored_JSONKeyPlaceHolderName)
                {
                    StorylineDetails.SelectToken(profile.Path).Replace(StorylineDetails_Parameters.SelectToken("baseDI_NerdyGroupAffiliates_DynamicWebsite_MainProfile.value"));
                }
            }
        }
        #endregion

        #endregion
    }

}

   