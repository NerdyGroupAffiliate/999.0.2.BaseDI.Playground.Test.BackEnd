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
            Repository.ClientOrServerInstance = ClientOrServerInstance;
            Repository.ExtraData = ExtraData;
            Repository.MasterStorer = MasterStorer;

            //CREATE THE PROCESS
            Func<bool> processMetaData = null;

            processMetaData = () =>
            {
                //EXECUTE THE PROCESS
                var metaData = Repository.Action_9_Verify_Process().Result;

                //STORE META DATA
                StorylineDetails = JObject.FromObject(metaData["StorylineDetails"]);
                StorylineDetails_Parameters = JObject.FromObject(metaData["StorylineDetails_Parameters"]);

                //STORE JSONSTRING PLACEHOLDER
                Step_1_0_Custom_Store_JSONStringPlaceHolder_1_0((JObject)StorylineDetails.SelectToken("resources[*].baseDIProfiles[*]"));
                
                //CONVERT JSONSTRING PLACEHOLDER
                Step_2_0_Custom_Convert_JSONStringPlaceHolderIntoAppSettings_1_0();

                return true;
            };

            //START THE PROCESS
            processMetaData();

            //RETURN OUTPUTTED APPSETTINGS
            return await Task.FromResult<JObject>(StorylineDetails).ConfigureAwait(true);
        }

        #region STORE JSONSTRING PLACEHOLDER
        private void Step_1_0_Custom_Store_JSONStringPlaceHolder_1_0(JObject settingsList)
        {
            if (settingsList != null)
            {
                List<JToken> options = new List<JToken>();

                foreach (var settng in settingsList.Children())
                {
                    options.Add(settng);
                };

                foreach (var option in options)
                {
                    JProperty optionItem = (JProperty)option;

                    if (optionItem.Name.ToString().ToUpper().Contains("_MAINPROFILE"))
                    {
                        _stored_JSONKeyPlaceHolderName.Add(optionItem);
                    }
                }
            }
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

   