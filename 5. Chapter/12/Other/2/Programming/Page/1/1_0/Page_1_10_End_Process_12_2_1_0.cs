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
            var storylineDetails = await Step_1_0_Custom_Transport_ConvertedDataToController_1_0();

            return await Task.FromResult<JObject>(storylineDetails).ConfigureAwait(true);
        }

        #region TRANSPORT THE REQUEST

        private Task<JObject> Step_1_0_Custom_Transport_ConvertedDataToController_1_0()
        {
            #region 1. Assign

            aClass_Programming_ScriptRoutable_12_2_1_0 entryPoint;

            string requestNameToProcess = ExtraData.KeyValuePairs["RequestToProcess"].ToString();
            string requestNameToProcessParameters = ExtraData.KeyValuePairs["RequestToProcessParameters"].ToString();

            dynamic handleObservation;

            #endregion

            #region 2. Action

            #region Transport

            //CREATE THE PROCESS
            Func<JObject> Transport = null;

            Transport = () =>
            {
                //EXECUTE THE PROCESS
                entryPoint = EntryPoint;

                if (entryPoint != null && !string.IsNullOrEmpty(entryPoint.RequestID) && !entryPoint.RequestID.ToUpper().Contains("REQUEST_CONTROLLER_1_0"))
                {
                    return EntryPoint.Action().Result;
                }
                else
                {
                    return handleObservation = new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(ExtraData))
                        .SetupStoryline(Client, StorylineDetails, StorylineDetails_Parameters, ExtraData, requestNameToProcess, requestNameToProcess, requestNameToProcessParameters)
                        .Action().Result;
                }
            };

            //START THE PROCESS
            handleObservation = Transport();

            #endregion

            #endregion

            #region 3. Observe

            return handleObservation;

            #endregion
        }

        #endregion

        #endregion
    }
}
