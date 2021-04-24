#region Imports

#region BaseDI

using BaseDI.Professional.Director.Programming_1;
using BaseDI.Professional.Director.Programming_2;
using BaseDI.Professional.Script.Programming.Abstract_1;
using BaseDI.Professional.Script.Programming.Poco_1;
using BaseDI.Professional.Script.Programming.Repository_1;
using BaseDI.Professional.Script.Programming_1;
using BaseDI.Professional.Story.Programming_1;

#endregion

#region .Net Core

using Microsoft.Extensions.Configuration;

using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

#endregion 

#region 3rd Party Core

using Newtonsoft.Json.Linq;

#endregion

#endregion

namespace BaseDI.Professional.Chapter.Page.Programming_1
{
    public class Page_1_1_Begin_Process_12_2_1_0 : aClass_Programming_ScriptPage_12_2_1_0
    {
        #region 1. Assign

        //A. Variable Declaration

        //SETTINGS
        private IConfiguration _storedAppSettings;

        //CLIENT/SERVER
        internal Dictionary<string, object> _storedClientOrServerInstance;

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

        internal aClass_Programming_ScriptRoutable_12_2_1_0 _stored_DirectorRequestHandler;

        internal string _storedRequestName = "";
        internal string _storedSystemRequestByName;

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public Page_1_1_Begin_Process_12_2_1_0(JObject parameterStorylineDetails, aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> parameterDataRepository)
        {
            #region 1. INPUTS

            #region MEMORIZE data stragety

            Repository = parameterDataRepository;

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

            #region DEFINE event handlers

            Func<JObject> GetDataResponse = null;

            #endregion

            #region MEMORIZE action name

            string storedActionName = ClientOrServerInstance["storedActionName"] as string;

            #endregion

            #region MEMORIZE app settings

            _storedAppSettings = (IConfiguration)ClientOrServerInstance["storedAppSettings"];

            #endregion

            #region MEMORIZE clientOrServer instance

            _storedClientOrServerInstance = ClientOrServerInstance;

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

            #region EXECUTE data retrival

            try
            {
                if(StorylineDetails == null)
                {
                    #region IDEAL CASE - USE data retriever

                    #region 2. OUTPUT data response

                    #region EDGE CASE - USE developer logger

                    if (storedDeveloperMode)
                    {
                        ClientOrServerInstance["processStepNumber"] = (int)ClientOrServerInstance["processStepNumber"] + 1;

                        Console.WriteLine("STEP " + ClientOrServerInstance["processStepNumber"] + ": RETRIEVING dataset for request " + storedActionName + " -> " + storedRequestName);
                    }

                    #endregion

                    GetDataResponse = () =>
                    {
                        return new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(new Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0())
                            .SetupStoryline(_storedClientOrServerInstance, null, null, ExtraData, "", storedRequestName, storedRequestNameParameters)
                            .Action().Result;
                    };

                    #endregion

                    #region 1. INPUT data request

                    StorylineDetails = GetDataResponse();

                    #endregion

                    #endregion
                }
            }
            catch(Exception mistake)
            {
                #region EDGE CASE - USE developer logger

                if (storedDeveloperMode)
                {
                    ClientOrServerInstance["processStepNumber"] = (int)ClientOrServerInstance["processStepNumber"] + 1;

                    Console.WriteLine("STEP " + ClientOrServerInstance["processStepNumber"] + ": ***LEAKY PIPE*** DATA RETRIVAL for request " + storedActionName + " -> " + storedRequestName + " could not be completed successfully. Please check ***AppSettings.json*** for APP_SETTING_CONVERSION_MODE_XXX value.");
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

        #endregion
    }
}
