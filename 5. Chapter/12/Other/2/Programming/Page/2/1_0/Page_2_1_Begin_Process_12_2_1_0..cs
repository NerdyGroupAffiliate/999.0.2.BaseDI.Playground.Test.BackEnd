using BaseDI.Script.Programming.Abstract_1;
using BaseDI.Script.Programming.Repository_1;
using BaseDI.Script.Programming_1;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BaseDI.Chapter.Page.Programming_2
{
    public class Page_2_1_Begin_Process_12_2_1_0 : aClass_Programming_ScriptPage_12_2_1_0
    {
        #region 1. Assign
        public List<JToken> _optionsProfiles = new List<JToken>();


        //A. Variable Declaration   

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public Page_2_1_Begin_Process_12_2_1_0(JObject storylineDetails, aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> repository)
        {
            #region 1. Assign

            //SET WHAT is needed to make this page of the story happen.
            StorylineDetails = storylineDetails;
            Repository = repository;


            #endregion

            #region 2. Action

            #endregion

            #region 3. Observe

            #endregion
        }

        #endregion

        #region 3. Set

        //A. Default state

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

        //#region STORE JSONSTRING PLACEHOLDER
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
                        _optionsProfiles.Add(optionItem);
                    }
                }
            }
        }
        //#endregion

        //#region CONVERT JSONSTRING PLACEHOLDER
        private void Step_2_0_Custom_Convert_JSONStringPlaceHolderIntoAppSettings_1_0()
        {
            if (_optionsProfiles.Any())
            {
                foreach(var profile in _optionsProfiles)
                {
                    StorylineDetails.SelectToken(profile.Path).Replace(StorylineDetails_Parameters.SelectToken("baseDI_NerdyGroupAffiliates_DynamicWebsite_MainProfile.value"));
                }
            }
            //#endregion

            #endregion
        }
    }

}

   