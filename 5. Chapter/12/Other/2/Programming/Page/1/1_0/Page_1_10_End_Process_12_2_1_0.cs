using BaseDI.Playground.Test.Backend.Director.Programming_1;
using BaseDI.Playground.Test.Backend.Script.Programming.Abstract_1;
using BaseDI.Playground.Test.Backend.Script.Programming.Repository_1;
using BaseDI.Playground.Test.Backend.Script.Programming_1;
using BaseDI.Playground.Test.Backend.Story.Programming_1;
using Newtonsoft.Json.Linq;
using System;
using System.Globalization;
using System.Threading.Tasks;

namespace BaseDI.Playground.Test.Backend.Chapter.Page.Programming_1
{
    public class Page_1_10_End_Process_12_2_1_0 : aClass_Programming_ScriptPage_12_2_1_0
    {
        #region 1. Assign

        //A. Variable Declaration   
 
        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public Page_1_10_End_Process_12_2_1_0(JObject storylineDetails, IContract_Programming_Repository_12_2_1_0 repository)
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
            //READ REQUEST NAME
            var requestName = Step_1_0_Read_The_RequestName_1_0();

            //ROUTE THE REQUEST
            return await Step_2_0_Route_The_Request_1_0(requestName).ConfigureAwait(true);        
        }

        #region READ REQUEST NAME

        private string Step_1_0_Read_The_RequestName_1_0()
        {
            JToken routeNameToken = StorylineDetails.SelectToken("resources[*].baseDIProfiles[*]..baseDIInstructions.business[?(@.key == 'Method')].values[0].value[0].key.name");

            string routeName = "";

            if (!string.IsNullOrEmpty(routeNameToken.Value<string>()) && EntryPoint == null)
                routeName = routeNameToken.Value<string>().ToUpper(CultureInfo.CurrentCulture);

            return routeName;
        }

        #endregion

        #region ROUTE THE REQUEST

        private async Task<JObject> Step_2_0_Route_The_Request_1_0(string requestName)
        {
            JObject armTemplateJSONOutput = StorylineDetails;

            try
            {
                if (EntryPoint == null || !string.IsNullOrEmpty(requestName))
                {
                    armTemplateJSONOutput = new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0<Director_Of_Programming_Chapter_12_2_Page_1_Request_Handler_1_0>()
                      .SetupStoryline(Client, StorylineDetails, StorylineDetails_Parameters, ExtraData, requestName)
                      .Action().Result;
                }
                else
                {
                    armTemplateJSONOutput = await Step_2_1_Execute_The_Request_1_0(EntryPoint).ConfigureAwait(true);
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

        #region EXECUTE THE REQUEST

        private async Task<JObject> Step_2_1_Execute_The_Request_1_0(aClass_Programming_ScriptRoutable_12_2_1_0 entryPoint)
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
