using BaseDI.Professional.Director.Programming_1;
using BaseDI.Professional.Director.Programming_2;
using BaseDI.Professional.Script.Programming.Abstract_1;
using BaseDI.Professional.Script.Programming.Repository_1;
using BaseDI.Professional.Script.Programming_1;
using BaseDI.Professional.Story.Programming_1;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BaseDI.Professional.Chapter.Page.Programming_1
{
    public class Page_1_1_Begin_Process_12_2_1_0 : aClass_Programming_ScriptPage_12_2_1_0
    {
        #region 1. Assign

        //A. Variable Declaration   

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public Page_1_1_Begin_Process_12_2_1_0(JObject storylineDetails, aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> repository)
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
            #region 1. Assign

            #endregion

            #region 2. Action

            if (StorylineDetails == null)
                StorylineDetails = await Step_1_0_Custom_Transport_InputToConverter_1_0();

            #endregion

            #region 3. Observe

            return await Task.FromResult<JObject>(StorylineDetails).ConfigureAwait(true);

            #endregion
        }

        #region TRANSPORT THE REQUEST

        private async Task<JObject> Step_1_0_Custom_Transport_InputToConverter_1_0()
        {
            #region 1. Assign

            string requestNameToProcess = ExtraData.KeyValuePairs["RequestToProcess"].ToString();
            string requestNameToProcessParameters = ExtraData.KeyValuePairs["RequestToProcessParameters"].ToString();

            dynamic handleObservation;

            #endregion

            #region 2. Action

            //#region Conversion

            //CREATE THE PROCESS
            Func<JObject> Convert = null;

            Convert = () =>
            {
                //EXECUTE THE PROCESS
                return handleObservation = new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(new Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0())
                    .SetupStoryline(this.ClientOrServerInstance, null, null, this.ExtraData, "", requestNameToProcess, requestNameToProcessParameters)
                    .Action().Result;
            };

            //START THE PROCESS
            handleObservation = Convert();

            //#endregion

            #endregion

            #region 3. Observe

            return handleObservation;

            #endregion
        }

        #endregion

        #endregion
    }
}
