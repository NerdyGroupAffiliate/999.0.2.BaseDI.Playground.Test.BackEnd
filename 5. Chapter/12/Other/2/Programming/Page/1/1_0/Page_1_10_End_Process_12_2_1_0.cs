using BaseDI.BackEnd.Director.Programming_1;
using BaseDI.BackEnd.Script.Programming.Abstract_1;
using BaseDI.BackEnd.Script.Programming.Repository_1;
using BaseDI.BackEnd.Script.Programming_1;
using BaseDI.BackEnd.Story.Programming_1;
using Newtonsoft.Json.Linq;
using System;
using System.Globalization;
using System.Threading.Tasks;

namespace BaseDI.BackEnd.Chapter.Page.Programming_1
{
    public class Page_1_10_End_Process_12_2_1_0 : aClass_Programming_ScriptPage_12_2_1_0
    {
        #region 1. Assign

        //A. Variable Declaration   
 
        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public Page_1_10_End_Process_12_2_1_0(JObject storylineDetails, aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> repository)
        {
            #region 1. Assign

            //SET WHAT is needed to make this page of the story happen.
            StorylineDetails = storylineDetails;
            Repository = repository;

            #endregion

            #region 2. Action

            SetupDefaults();
           
            #endregion

            #region 3. Observe

            #endregion
        }

        #endregion

        #region 3. Set

        //A. Default state
        private void SetupDefaults()
        {
            
        }

        #endregion

        #region 4. Action

        //A. Page in motion (DO SOMETHING)
        public override async Task<JObject> Action()
        {
            //STORE REQUEST ROUTES
            var requestName = Step_1_0_Custom_Store_RequestRoutes_1_0();

            //TRANSPORT THE REQUEST
            return await Step_2_0_Custom_Transport_RequestToHandler_1_0(requestName).ConfigureAwait(true);        
        }

        #region STORE REQUEST ROUTES

        private string Step_1_0_Custom_Store_RequestRoutes_1_0()
        {
            JToken routeNameToken = StorylineDetails.SelectToken("resources[*].baseDIProfiles[*]..baseDIInstructions.business[?(@.key == 'Request')].values[0].value[0].key.name");

            string routeName = "";

            if (!string.IsNullOrEmpty(routeNameToken.Value<string>()) && EntryPoint == null)
                routeName = routeNameToken.Value<string>().ToUpper(CultureInfo.CurrentCulture);

            return routeName;
        }

        #endregion

        #region TRANSPORT THE REQUEST

        private async Task<JObject> Step_2_0_Custom_Transport_RequestToHandler_1_0(string requestName)
        {
            JObject armTemplateJSONOutput = StorylineDetails;

            try
            {
                if (EntryPoint == null || !string.IsNullOrEmpty(requestName))
                {
                    armTemplateJSONOutput = new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0<Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0>()
                      .SetupStoryline(Client, StorylineDetails, StorylineDetails_Parameters, ExtraData, requestName)
                      .Action().Result;
                }
                else
                {
                    armTemplateJSONOutput = await Step_2_1_Custom_Control_RequestToProcess_1_0(EntryPoint).ConfigureAwait(true);
                }
            }
            catch (Exception storyineMistake)
            {
                ExtraData.MasterLeader.TriggerMistake(StorylineDetails, StorylineDetails_Parameters, storyineMistake, ExtraData);

                throw;
            }

            return armTemplateJSONOutput;
        }

        #endregion

        #region CONTROL THE REQUEST

        private async Task<JObject> Step_2_1_Custom_Control_RequestToProcess_1_0(aClass_Programming_ScriptRoutable_12_2_1_0 entryPoint)
        {
            JObject result = StorylineDetails;

            if (EntryPoint != null)
            {
                EntryPoint.Client = Client;
                EntryPoint.MasterLeader = MasterLeader;

                result = await EntryPoint.Action().ConfigureAwait(true);
            }

            return result;
        }

        #endregion

        #endregion
    }
}
