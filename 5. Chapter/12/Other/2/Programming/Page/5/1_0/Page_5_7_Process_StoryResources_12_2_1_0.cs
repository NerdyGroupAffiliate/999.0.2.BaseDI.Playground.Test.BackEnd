
using BaseDI.BackEnd.Script.Programming.Abstract_1;
using BaseDI.BackEnd.Script.Programming.Extensions_1;
using BaseDI.BackEnd.Script.Programming.Extensions_5;
using Newtonsoft.Json.Linq;
using NUnit.Framework;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BaseDI.BackEnd.Chapter.Page.Programming_5
{
    public class Page_5_7_Process_StoryResources_12_2_1_0 : aClass_Programming_ScriptPage_12_2_1_0
    {
        #region 1. Assign

        //A. Variable Declaration   

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public Page_5_7_Process_StoryResources_12_2_1_0(JObject storylineDetails, aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> repository)
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

        //A. Default state of story

        #endregion

        #region 4. Action

        //A. Page in motion (DO SOMETHING)
        public override async Task<JObject> Action()
        {
            #region DESCRIBE THE MEMORIES


            #endregion

            #region RECALL THE MEMORIES


            #endregion

            #region EXECUTE THE VISION

            Step_1_0_Custom_Sense_SystemDisturbances_1_0();

            #endregion

            #region REPORT THE FEEDBACK

            return await Task.FromResult<JObject>(StorylineDetails).ConfigureAwait(true);

            #endregion
        }

        #region THE VISION STEPS

        private void Step_1_0_Custom_Sense_SystemDisturbances_1_0() 
        {
            #region DESCRIBE THE MEMORIES

            List<JToken> businessMetaData = null;
            var businessFunctionParameterName = "Step_1_0_Custom_Transport_LocalAssetToServer_1_0";

            #endregion

            #region RECALL THE MEMORIES
                                                                                              
            businessMetaData = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode_1_0(StorylineDetails, "searchkey", "SetImplementer_ProductCreation_Software_BusinessFuction", false);
            
            #endregion

            #region EXECUTE THE VISION

            switch (businessFunctionParameterName.ToUpper()) 
            {
                case "STEP_1_0_CUSTOM_TRANSPORT_LOCALASSETTOSERVER_1_0":
                    Step_1_0_Custom_Transport_LocalAssetToServer_1_0();

                    break;
            }

            #endregion

            #region REPORT THE FEEDBACK

            #endregion
        }

        private void Step_1_0_Custom_Transport_LocalAssetToServer_1_0()
        {
            #region DESCRIBE THE MEMORIES

            #endregion

            #region RECALL THE MEMORIES


            #endregion

            #region EXECUTE THE VISION

            Extension_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0.Step_X_X_Custom_Store_LocalFilesToServer_1_0(this.StorylineDetails);

            #endregion

            #region REPORT THE FEEDBACK

            #endregion
        }
        //#endregion

        #endregion

        #endregion
    }
}
