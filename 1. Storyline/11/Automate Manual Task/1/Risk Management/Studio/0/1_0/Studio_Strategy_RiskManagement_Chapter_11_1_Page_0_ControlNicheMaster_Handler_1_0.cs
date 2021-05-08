#region Imports

#region BaseDI

using BaseDI.Professional.Director.Programming_1;
using BaseDI.Professional.Director.Programming_2;
using BaseDI.Professional.Director.Programming_3;
using BaseDI.Professional.Director.Programming_4;
using BaseDI.Professional.Director.Programming_5;

using BaseDI.Professional.Script.Programming.Abstract_1;
using BaseDI.Professional.Script.Programming.Extensions_1;
using BaseDI.Professional.Script.Programming.Poco_1;
using BaseDI.Professional.Script.Programming_1;

using BaseDI.Professional.Script.Risk_Management.Extensions_0;

using BaseDI.Professional.State.Programming_1;
using BaseDI.Professional.State.Programming_2;
using BaseDI.Professional.State.Programming_3;
using BaseDI.Professional.State.Programming_4;
using BaseDI.Professional.State.Programming_5;
using BaseDI.Professional.State.Programming_6;

#endregion

#region .Net Core

using Microsoft.Extensions.Configuration;

using System;
using System.Collections.Generic;
using System.Globalization;
using System.Text;
using System.Threading.Tasks;

#endregion 

#region 3rd Party Core

using Newtonsoft.Json.Linq;

#endregion

#endregion


namespace BaseDI.Professional.Story.Risk_Management_0
{
    #region 6. Action Implementation

    //A. Story in motion (DO SOMETHING) ACTING
    internal class Studio_Strategy_RiskManagement_Chapter_11_1_Page_0_ControlNicheMaster_Handler : aClass_Programming_ScriptNicheMaster_12_2_1_0<object>
    {
        #region 1. Assign

        //SETTINGS
        private IConfiguration _storedProcessRequestSettings = null;

        //CLIENT/SERVER
        private Dictionary<string, object> _storedProcessRequestTracker;

        private string _storedInputRequestName;
        private string _storedInputRequestDataCacheKey;

        private aClass_Programming_ScriptRoutable_12_2_1_0 _storedInputRequestDataCustom;

        //DATASETS
        private JObject _storedProcessRequestDataStorylineDetails;
        private JObject _storedProcessRequestDataStorylineDetails_Parameters;

        //MISC
        private ExtraData_12_2_1_0 _storedProcessRequestExtraData;

        //PLUMBING
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedProcessRequestCentralizedDisturber;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedProcessRequestCentralizedSensor;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedProcessRequestCentralizedStorer;

        private SingleParmPoco_12_2_1_0 _storedInputs = null;

        private string _storedProcessRequestName = "";
        private string _storedProcessRequestProcessRequestByName = "";

        #endregion

        #region 2. Ready

        internal Studio_Strategy_RiskManagement_Chapter_11_1_Page_0_ControlNicheMaster_Handler(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables

            _storedProcessRequestTracker = null;

            #endregion

            #region DEFINE output variables

            #endregion

            ///////////////////////////////////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx


            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input xxx xxxx


            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process extra data

            _storedProcessRequestExtraData = parameterInputs.Parameters["parameterProcessRequestExtraData"] != null ? parameterInputs.Parameters["parameterProcessRequestExtraData"] : null;

            #endregion

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxx

            #endregion

            #endregion

            #endregion

            #region 2. PROCESS

            #region HANDLE niche setup

            #region EDGE CASE - USE niche faults



            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT


            #endregion
        }

        #endregion

        #region 3. Set

        //A. Default state
        public void HandleDefaults()
        {
            #region 1. INPUTS

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables



            #endregion

            #region DEFINE output variables

            #endregion

            ///////////////////////////////////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx


            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input xxx xxxx


            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process xxx xxx



            #endregion

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxx


            #endregion

            #endregion

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

        public override async Task<object> Action(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS

            #region VALIDATE input parameters

            Func<SingleParmPoco_12_2_1_0, Task<bool>> ValidateInputs = async (SingleParmPoco_12_2_1_0 parameterInputs) =>
            {
                #region 1. INPUTS

                #region DEFINE control variables

                #endregion

                #region DEFINE input variables


                #endregion

                #region DEFINE process variables

                bool storedProcessRequestMistakeMade = false;

                #endregion

                #region DEFINE output variables

                string storedOutputResponseMessage = "";

                #endregion

                ///////////////////////////////////////////////////////////

                #region MEMORIZE control variables

                #region MEMORIZE control xxx xxx


                #endregion

                #endregion

                #region MEMORIZE input variables

                #region MEMORIZE input xxx xxxx


                #endregion

                #endregion

                #region MEMORIZE process variables

                #region MEMORIZE process request tracker

                Dictionary<string, object> storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

                #endregion

                #region MEMORIZE process request settings

                IConfiguration storedProcessRequestSettings = (IConfiguration)storedProcessRequestTracker["storedProcessRequestSettings"];

                #endregion

                #region MEMORIZE process developer mode

                bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

                _storedProcessRequestTracker["storedProcessRequestStepNumber"] = 0;

                SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

                //REQUIRED

                //0. CONTROLLERS
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", _storedProcessRequestTracker["storedInputRequestActionName"]);

                //1. INPUTS

                //2. PROCESS
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONFIGURATING request handler");

                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Studio_Strategy_RiskManagement_Chapter_11_1_Page_0_ControlNicheMaster_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "SetupStoryline -> ValidateInputs");

                //3. OUTPUTS

                #endregion

                #endregion

                #region MEMORIZE output variables

                #region MEMORIZE output xxx xxx


                #endregion

                #endregion

                #endregion

                #region 2. PROCESS

                #region EXECUTE validation process

                #region IDEAL CASE - USE valid information

                if (parameterInputs != null || parameterInputs.Parameters != null)
                {
                    //0. CONTROLLERS
                    if (!parameterInputs.Parameters.ContainsKey("parameterControlRequestClientOrServer"))
                    {
                        storedOutputResponseMessage += "***parameterControlRequestClientOrServer*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    //1. INPUTS
                    if (!parameterInputs.Parameters.ContainsKey("parameterInputRequestActionName"))
                    {
                        storedOutputResponseMessage += "***parameterInputRequestActionName*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterInputRequestName"))
                    {
                        storedOutputResponseMessage += "***parameterInputRequestName*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterInputRequestNameDataCacheKey"))
                    {
                        storedOutputResponseMessage += "***parameterInputRequestNameDataCacheKey*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    //2. PROCESS
                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestCallBack"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestCallBack*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestSettings"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestSettings*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestTracker"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestTracker*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }
                    else
                    {
                        if (parameterInputs.Parameters["parameterProcessRequestTracker"]["storedProcessRequestSettings"] == null)
                        {
                            storedOutputResponseMessage += "***parameterProcessRequestTracker*** must contain a key of ***storedProcessRequestSettings***.";
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestDataStorylineDetails"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestDataStorylineDetails_Parameters"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails_Parameters*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestDataStorylineDetails_CallBack"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails_CallBack*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestCentralizedDisturber"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestCentralizedDisturber*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestCentralizedSensor"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestCentralizedSensor*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestCentralizedStorer"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestCentralizedStorer*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    //3. OUTPUTS
                    if (!parameterInputs.Parameters.ContainsKey("parameterOutputResponseControlID"))
                    {
                        storedOutputResponseMessage += "***parameterOutputResponseControlID*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (storedProcessRequestMistakeMade)
                    {
                        #region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode)
                        {
                            storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                            await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                        }

                        #endregion

                        #region EDGE CASE - USE exception handler

                        throw new Exception("PARSING parameter values failed");

                        #endregion
                    }
                }
                else
                {
                    #region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode)
                    {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        //0. CONTROLLERS

                        //1. INPUTS

                        //2. PROCESS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                        //3. OUTPUTS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                        await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw new Exception("PARSING parameter values failed");

                    #endregion
                }

                #endregion

                #endregion

                #endregion

                #region 3. OUTPUT

                #region RETURN validation passed

                #region IDEAL CASE - USE passed indicator

                return true;

                #endregion

                #endregion

                #endregion
            };

            //BEGIN valdation process
            await ValidateInputs(parameterInputs);

            #endregion

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables

            dynamic storedProcessRequestHandler = null;

            #endregion

            #region DEFINE output variables

            #endregion

            ///////////////////////////////////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx


            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input request details

            string storedInputRequestName = parameterInputs.Parameters["parameterInputRequestName"];
            string storedInputRequestDataCustomCacheKey = parameterInputs.Parameters["parameterInputRequestNameDataCacheKey"];

            #endregion

            #region MEMORIZE input extra data

            _storedProcessRequestExtraData.KeyValuePairs.Add("storedInputRequestName", storedInputRequestName);
            _storedProcessRequestExtraData.KeyValuePairs.Add("storedInputRequestDataCustomCacheKey", storedInputRequestDataCustomCacheKey);

            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process request tracker

            _storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

            #endregion

            #region MEMORIZE process request settings

            _storedProcessRequestSettings = (IConfiguration)_storedProcessRequestTracker["storedProcessRequestSettings"];

            #endregion

            #region MEMORIZE process centralized handlers

            _storedProcessRequestCentralizedDisturber = parameterInputs.Parameters["parameterProcessRequestCentralizedDisturber"];
            _storedProcessRequestCentralizedSensor = parameterInputs.Parameters["parameterProcessRequestCentralizedSensor"];
            _storedProcessRequestCentralizedStorer = parameterInputs.Parameters["parameterProcessRequestCentralizedStorer"];

            #endregion

            #region MEMORIZE process developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingStartUpProcessInputs = (parameterInputs.Parameters["parameterProcessRequestExtraData"]?.KeyValuePairs?["storedProcessRequestDeveloperLoggingInputs"] ? parameterInputs.Parameters["parameterProcessRequestExtraData"]?.KeyValuePairs?["storedProcessRequestDeveloperLoggingInputs"] : null);

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED

            //0. CONTROLLERS

            //1. INPUTS
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", _storedProcessRequestTracker["storedInputRequestActionName"]);

            //2. PROCESS
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "ASSIGNING request handler");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Studio_Strategy_RiskManagement_Chapter_11_1_Page_0_ControlNicheMaster_Handler_1_0.cs");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Action");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseOPTIONALBeginOfProcess", true);

            //3. OUTPUTS

            #endregion

            #region MEMORIZE process request details

            string storedProcessRequestProcessRequestByName = parameterInputs.Parameters["parameterProcessRequestByName"] ? parameterInputs.Parameters["parameterProcessRequestByName"] : "";

            _storedProcessRequestName = storedInputRequestName;

            #endregion

            #region MEMORIZE process extra data

            _storedProcessRequestExtraData.KeyValuePairs.Add("{storedProcessRequestMethodName}APILocationLocalNodeJS", APILocationLocalNodeJS);
            _storedProcessRequestExtraData.KeyValuePairs.Add("{storedProcessRequestMethodName}APILocationLocalDotNetCore", APILocationLocalDotNetCore);

            _storedProcessRequestExtraData.KeyValuePairs.Add("{storedProcessRequestMethodName}APILocationRemote", APILocationRemote);

            #endregion

            #region MEMORIZE process storyline details

            _storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            _storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails_Parameters"];

            #endregion

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxxx


            #endregion

            #endregion

            #endregion

            #region 2. PROCESS

            #region ASSIGN request handler

            try
            {
                #region IDEAL CASE - USE director or experience

                //switch (storedInputRequestName.ToUpper())
                //{
                //    case "DIRECTOR_OF_RISKMANAGEMENT_CHAPTER_11_1_PAGE_3_STORAGE_HANDLER_1_0":
                //        storedProcessRequestHandler = Create_Director_Of_RiskManagement_Chapter_11_1_Page_3_Storage_Handler_1_0(parameterInputs);

                //        break;
                //    case "DIRECTOR_OF_RISKMANAGEMENT_CHAPTER_11_1_PAGE_4_DISTURBANCES_HANDLER_1_0":
                //        storedProcessRequestHandler = Create_Director_Of_RiskManagement_Chapter_11_1_Page_4_Disturb_Handler_1_0(parameterInputs);

                //        break;
                //}

                #endregion
            }
            catch (Exception storedProcessRequestMistake)
            {
                #region EDGE CASE - USE developer logger

                if (storedProcessRequestDeveloperMode)
                {
                    _storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)_storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                    storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "FAILED configurating request handler");
                    storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                    storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestStepNumberReplace", _storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                    await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                }

                #endregion

                #region EDGE CASE - USE exception handler

                throw storedProcessRequestMistake;

                #endregion
            }

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN request handler

            #region IDEAL CASE - USE experienece or director

            return storedProcessRequestHandler;

            #endregion

            #endregion

            #endregion
        }

        #endregion
    }

    #endregion
}
