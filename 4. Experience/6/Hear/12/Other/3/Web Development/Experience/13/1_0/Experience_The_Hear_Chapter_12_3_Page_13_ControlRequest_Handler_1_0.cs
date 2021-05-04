﻿#region Imports

#region BaseDI

using BaseDI.Professional.Director.Programming_1;

using BaseDI.Professional.Script.Programming.Abstract_1;
using BaseDI.Professional.Script.Programming.Extensions_1;
using BaseDI.Professional.Script.Programming.Poco_1;
using BaseDI.Professional.Script.Programming.Repository_1;

using BaseDI.Professional.Script.Risk_Management.Extensions_0;

using BaseDI.Professional.Script.Web_Development.Extensions_13;

using BaseDI.Professional.Story.Programming_1;

#endregion

#region .Net Core

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

using Microsoft.Extensions.Configuration;

using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.IO;

#endregion 

#region 3rd Party Core

using Newtonsoft.Json.Linq;

#endregion

#endregion

namespace BaseDI.Professional.Experience.Hear.Web_Development_13
{
    public class Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0 : aClass_Programming_ScriptExperience_BuilderPattern_12_2_1_0
    {
        #region 1. Assign

        //SETTINGS
        private IConfiguration _storedProcessRequestSettings = null;

        //CLIENT/SERVER
        private Dictionary<string, object> _storedProcessRequestTracker;

        private string _storedClientRequestByName;
        private string _storedClientRequestByNameParameters;

        private aClass_Programming_ScriptRoutable_12_2_1_0 _storedClientRequestByObject;

        //DATASETS
        private JObject _storedProcessRequestDataStorylineDetails;
        private JObject _storedProcessRequestDataStorylineDetails_Parameters;

        //MISC
        private ExtraData_12_2_1_0 _storedProcessRequestExtraData;

        //PLUMBING
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedDisturber;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedSensor;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedStorer;

        private SingleParmPoco_12_2_1_0 _storedParameterInputs;

        private string _storedRequestName = "";
        private string _storedSystemRequestByName = "";

        #endregion

        #region 2. Ready

        public Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS

            #region MEMORIZE input parameters

            _storedParameterInputs = parameterInputs;

            #endregion

            #region MEMORIZE control client server

            _storedProcessRequestTracker = _storedParameterInputs.Parameters["parameterProcessRequestTracker"];

            #endregion

            #region MEMORIZE app settings

            _storedProcessRequestSettings = (IConfiguration)_storedProcessRequestTracker["storedProcessRequestSettings"];

            #endregion

            #region MEMORIZE centralized processes handlers

            _storedCentralizedDisturber = _storedParameterInputs.Parameters["parameterProcessRequestCentralizedDisturber"];
            _storedCentralizedSensor = _storedParameterInputs.Parameters["parameterProcessRequestCentralizedSensor"];
            _storedCentralizedStorer = _storedParameterInputs.Parameters["parameterProcessRequestCentralizedStorer"];

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

        //A. Default state of this part of the storyline
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

        //A. Story in motion (DO SOMETHING)
        public override async Task<JObject> Action()
        {
            #region 1. INPUTS

            #region VALIDATE input parameters

            Func<SingleParmPoco_12_2_1_0, Task<bool>> ValidateInputs = async (SingleParmPoco_12_2_1_0 parameterInputs) =>
            {
                #region 1. INPUTS

                #region DEFINE parameter inputs

                SingleParmPoco_12_2_1_0 storedInputs;

                #endregion

                #region DEFINE process checkpoint

                bool storedProcessRequestMistakeMade = false;

                #endregion

                #region DEFINE stored message

                string storedOutputResponseMessage = "";

                #endregion

                #region MEMORIZE control client server

                Dictionary<string, object> storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

                #endregion

                #region MEMORIZE app settings

                IConfiguration storedProcessRequestSettings = (IConfiguration)storedProcessRequestTracker["storedProcessRequestSettings"];

                #endregion

                #region MEMORIZE developer mode

                bool storedProcessRequestDeveloperMode = storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") ? storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") : false;

                SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

                //REQUIRED
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "VALIDATING request inputs");
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.cs");
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Action -> ValidateInputs");

                #endregion

                #endregion

                #region 2. PROCESS

                #region EXECUTE validation process

                #region IDEAL CASE - USE valid information

                if (parameterInputs != null || parameterInputs.Parameters != null)
                {
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

                        if (parameterInputs.Parameters["parameterProcessRequestTracker"]["storedHttpRequest"] == null)
                        {
                            storedOutputResponseMessage += "***parameterProcessRequestTracker*** must contain a key of ***storedHttpRequest***.";
                            storedProcessRequestMistakeMade = true;
                        }
                        else
                        {
                            if(!parameterInputs.Parameters["parameterProcessRequestTracker"]["storedHttpRequest"] is HttpRequest)
                            {
                                storedOutputResponseMessage += "***parameterProcessRequestTracker*** must contain a key of ***storedHttpRequest*** which must be a type of ***HttpRequest*** .";
                                storedProcessRequestMistakeMade = true;
                            }
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestSettings"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestSettings*** cannot be blank or empty.\n";
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
            await ValidateInputs(_storedParameterInputs);

            #endregion

            #region DEFINE request handler

            Use_DesignPattern_Builder_Experience_12_3_1_0 storedRequestHandler_UsingBuilderPattern = null;

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingStartUpProcessInputs = (_storedParameterInputs.Parameters["parameterExtraData"]?.KeyValuePairs?["storedProcessRequestDeveloperLoggingInputs"] ? _storedParameterInputs.Parameters["parameterExtraData"]?.KeyValuePairs?["storedProcessRequestDeveloperLoggingInputs"] : null);

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "EXECUTING request handler");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", _storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.cs");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Action");

            //OPTIONAL
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseOPTIONALMiddleOfProcess", true);

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE request handler

            try
            {
                #region EDGE CASE - USE developer logger

                if (storedProcessRequestDeveloperMode && (int)_storedProcessRequestTracker["storedProcessRequestStepNumber"] == 0)
                {
                    _storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)_storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                    storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseMessageType", "Logging"); //Values = Logging or Mistake
                    storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestStepNumberReplace", _storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                    await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                }

                #endregion

                #region IDEAL CASE - USE design pattern

                if (DirectorOrExperienceRequestHandler != null && DirectorOrExperienceRequestHandler.ClientOrServerInstance != null)
                {
                    ClientOrServerInstance = DirectorOrExperienceRequestHandler.ClientOrServerInstance;
                    MasterLeader = DirectorOrExperienceRequestHandler.MasterLeader;
                    MasterController = DirectorOrExperienceRequestHandler.MasterController;
                    MasterConverter = DirectorOrExperienceRequestHandler.MasterConverter;
                    MasterDisturber = DirectorOrExperienceRequestHandler.MasterDisturber;
                    MasterSensor = DirectorOrExperienceRequestHandler.MasterSensor;
                    MasterStorer = DirectorOrExperienceRequestHandler.MasterStorer;
                    MasterTransporter = DirectorOrExperienceRequestHandler.MasterTransporter;
                    ExtraData = DirectorOrExperienceRequestHandler.ExtraData;
                }

                //REQUIRED: Implement one of the design patterns at https://www.dofactory.com/net/design-patterns
                storedRequestHandler_UsingBuilderPattern = new Use_DesignPattern_Builder_Experience_12_3_1_0(_storedParameterInputs);

                StorylineDetails = await storedRequestHandler_UsingBuilderPattern.Action().ConfigureAwait(true);

                #endregion
            }
            catch (Exception mistake)
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

                throw mistake;

                #endregion
            }

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN request handler

            #region IDEAL CASE - USE baseID dataset

            return StorylineDetails;

            #endregion

            #endregion

            #endregion
        }

        #endregion
    }

    #region 5. Action Script

    //A. Prepare for Action (SETUP WHAT WILL HAPPEN)

    internal class Use_DesignPattern_Builder_Experience_12_3_1_0
    {
        #region 1. Assign

        //SETTINGS
        private IConfiguration _storedProcessRequestSettings;

        //CLIENT/SERVER
        private Dictionary<string, object> _storedProcessRequestTracker;

        private string _storedClientRequestByName;
        private string _storedClientRequestByNameParameters;

        private aClass_Programming_ScriptRoutable_12_2_1_0 _storedClientRequestByObject;

        //DATASETS
        private JObject _storedProcessRequestDataStorylineDetails;
        private JObject _storedProcessRequestDataStorylineDetails_Parameters;


        //MISC
        private ExtraData_12_2_1_0 _storedProcessRequestExtraData;

        //PLUMBING

        private SingleParmPoco_12_2_1_0 _storedParameterInputs;

        private string _storedRequestName = "";
        private IContract_Programming_Repository_12_2_1_0 _storedRepository;
        private string _storedSystemRequestByName;

        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedDisturber;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedSensor;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedStorer;

        internal aClass_Programming_ScriptRoutable_12_2_1_0 _stored_ExperienceRequestHandler;

        #endregion

        #region 2. Ready

        internal Use_DesignPattern_Builder_Experience_12_3_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS

            #region MEMORIZE control client server

            _storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

            #endregion

            #region MEMORIZE app settings

            _storedProcessRequestSettings = (IConfiguration)_storedProcessRequestTracker["storedProcessRequestSettings"];

            #endregion

            #region MEMORIZE centralized processes handlers

            _storedCentralizedDisturber = parameterInputs.Parameters["parameterProcessRequestCentralizedDisturber"];
            _storedCentralizedSensor = parameterInputs.Parameters["parameterProcessRequestCentralizedSensor"];
            _storedCentralizedStorer = parameterInputs.Parameters["parameterProcessRequestCentralizedStorer"];

            #endregion

            #region MEMORIZE data repository

            _storedRepository = parameterInputs.Parameters["parameterDataRepository"];

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #region MEMORIZE storyline details

            _storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            _storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails_Parameters"];

            #endregion

            #region MEMORIZE extra data

            _storedProcessRequestExtraData = parameterInputs.Parameters["parameterExtraData"] ? parameterInputs.Parameters["parameterExtraData"] : null;

            #endregion

            #region MEMORIZE request details

            _storedClientRequestByName = parameterInputs.Parameters["parameterInputRequestName"];
            _storedClientRequestByNameParameters = parameterInputs.Parameters["parameterInputRequestNameDataCacheKey"];
            _storedClientRequestByObject = parameterInputs.Parameters["parameterClientRequestByObject"];

            _storedRequestName = parameterInputs.Parameters["parameterSystemRequestByName"];

            _storedSystemRequestByName = parameterInputs.Parameters["parameterSystemRequestByName"];

            _storedParameterInputs = parameterInputs;

            #endregion

            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            #endregion
        }

        #endregion

        #region 3. Set

        //A. Default state of this part of the storyline

        #region 1. INPUTS


        #endregion

        #region 2. PROCESS

        #endregion

        #region 3. OUTPUT

        #endregion

        #endregion

        #region 4. Action

        internal async Task<JObject> Action()
        {
            #region 1. INPUTS

            #region DEFINE data response

            dynamic storedOutputResponseData = null;

            #endregion

            #region DEFINE request handler

            aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> storedRequestHandler_UsingBuilderPattern;

            #endregion

            #endregion

            #region 2. PROCESS

            #region ARRANGE execution order

            #region IDEAL CASE - USE builder pattern

            storedRequestHandler_UsingBuilderPattern = new Implement_DesignPattern_Builder_Experience_12_3_1_0(_storedParameterInputs);

            await storedRequestHandler_UsingBuilderPattern.Action_1_Begin_Process();

            await storedRequestHandler_UsingBuilderPattern.Action_2_Validate_Process();

            await storedRequestHandler_UsingBuilderPattern.Action_3_Process_StoryAuthor();
            await storedRequestHandler_UsingBuilderPattern.Action_4_Process_StoryCharacters();
            await storedRequestHandler_UsingBuilderPattern.Action_5_Process_StorySetting();
            await storedRequestHandler_UsingBuilderPattern.Action_6_Process_StoryExperiences();
            await storedRequestHandler_UsingBuilderPattern.Action_7_Process_StoryResources();
            await storedRequestHandler_UsingBuilderPattern.Action_8_Process_CRUD();

            await storedRequestHandler_UsingBuilderPattern.Action_9_Verify_Process();

            storedOutputResponseData = await storedRequestHandler_UsingBuilderPattern.Action_10_End_Process();


            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN request response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(_storedProcessRequestDataStorylineDetails).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        #endregion
    }

    #endregion

    #region 6. Action Implementation

    //A. Commence Storyline (ACT WHAT HAS HAPPENED)

    internal class Implement_DesignPattern_Builder_Experience_12_3_1_0 : aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>>
    {
        #region 1. Assign

        //SETTINGS
        private IConfiguration _storedProcessRequestSettings;

        private string _storedSettingSecurityAppId = "";
        private string _storedSettingSecurityAppSecret = "";
        private string _storedSettingSecurityAppToken = "";

        //CLIENT/SERVER
        private Dictionary<string, object> _storedProcessRequestTracker;

        private string _storedClientRequestByName;
        private string _storedClientRequestByNameParameters;

        private aClass_Programming_ScriptRoutable_12_2_1_0 _storedClientRequestByObject;

        private Task<Dictionary<string, JToken>> _storedServerInstance = null;
        private object _storedServerInstanceExperienceRequestHandler = null;
        private HttpRequest _storedServerHTTPRequestInstance = null;

        private string _storedServerRequestRESTVerb = "";
        private string _storedServerRoutePath = "";

        //DATASET
        private JObject _storedProcessRequestDataStorylineDetails = null;
        private JObject _storedProcessRequestDataStorylineDetails_Parameters = null;

        private string _storedDataObservationTemplate = "";

        //MISC
        private ExtraData_12_2_1_0 _storedProcessRequestExtraData = null;

        //PLUMBING
        private string _storedActionName = "";

        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedDisturber;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedSensor;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedStorer;

        private SingleParmPoco_12_2_1_0 _storedParameterInputs;

        private string _storedRequestFileName = "Experience_The_Movement_ToFacebookPage_DataTransfer_12_2_1_0";
        private string _storedRequestName = "";
        private IContract_Programming_Repository_12_2_1_0 _storedRepository;
        private string _storedSystemRequestByName;

        private Func<JObject, ExtraData_12_2_1_0, JObject> Step_1_0_Framework_Control_ClientRequestToServer_1_0 = null;
        private Func<JObject, ExtraData_12_2_1_0, JObject> Step_2_0_Framework_Output_ServerRequestToClient_1_0 = null;

        private Func<SingleParmPoco_12_2_1_0, JObject> StoredStartUpCallBack = null;

        #endregion

        #region 2. Ready

        internal Implement_DesignPattern_Builder_Experience_12_3_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS

            #region MEMORIZE control client server

            _storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

            #endregion

            #region MEMORIZE action name

            _storedActionName = (string)_storedProcessRequestTracker["storedInputRequestActionName"];

            #endregion

            #region MEMORIZE app settings

            _storedProcessRequestSettings = (IConfiguration)_storedProcessRequestTracker["storedProcessRequestSettings"];

            #endregion

            #region MEMORIZE centralized processes handlers

            _storedCentralizedDisturber = parameterInputs.Parameters["parameterProcessRequestCentralizedDisturber"];
            _storedCentralizedSensor = parameterInputs.Parameters["parameterProcessRequestCentralizedSensor"];
            _storedCentralizedStorer = parameterInputs.Parameters["parameterProcessRequestCentralizedStorer"];

            #endregion

            #region MEMORIZE data repository

            _storedRepository = parameterInputs.Parameters["parameterDataRepository"];

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #region MEMORIZE storyline details

            _storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            _storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails_Parameters"];

            #endregion

            #region MEMORIZE extra data

            _storedProcessRequestExtraData = parameterInputs.Parameters["parameterExtraData"] ? parameterInputs.Parameters["parameterExtraData"] : null;

            #endregion

            #region MEMORIZE request details

            _storedClientRequestByName = parameterInputs.Parameters["parameterInputRequestName"];
            _storedClientRequestByNameParameters = parameterInputs.Parameters["parameterInputRequestNameDataCacheKey"];
            _storedClientRequestByObject = parameterInputs.Parameters["parameterClientRequestByObject"];

            _storedRequestName = parameterInputs.Parameters["parameterSystemRequestByName"];

            _storedSystemRequestByName = parameterInputs.Parameters["parameterSystemRequestByName"];

            _storedParameterInputs = parameterInputs;

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

        public override void HandleDefaults()
        {
            #region 1. INPUTS

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") ? _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") : false;

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "HANDLING request defaults");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", _storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.cs");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Implement_DesignPattern_Builder_Experience_12_3_1_0 -> HandleDefaults");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseOPTIONALMiddleOfProcess", true);

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE process defaults

            try
            {
                #region IDEAL CASE - USE request parser

                //STORE request http instance
                _storedServerHTTPRequestInstance = _storedProcessRequestTracker.ContainsKey("storedHttpRequest") ? (HttpRequest)_storedProcessRequestTracker["storedHttpRequest"] : null;

                #endregion
            }
            catch (Exception mistake)
            {
                #region EDGE CASE - USE developer logger

                if (storedProcessRequestDeveloperMode)
                {
                    _storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)_storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                    storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "FAILED handling request defaults");
                    storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                    storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestStepNumberReplace", _storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                    Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs).ConfigureAwait(true);
                }

                #endregion

                #region EDGE CASE - USE exception handler

                throw mistake;

                #endregion
            }

            #region EDGE CASE - USE routing parser

            if (_storedServerHTTPRequestInstance != null)
            {
                _storedServerRoutePath = _storedServerHTTPRequestInstance.Path;
                _storedServerRequestRESTVerb = _storedServerHTTPRequestInstance.Method;
            }

            #endregion

            #region EDGE CASE - USE developer logger

            if (storedProcessRequestDeveloperMode)
            {
                _storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)_storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                Console.WriteLine("STEP " + _storedProcessRequestTracker["storedProcessRequestStepNumber"] + " Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.cs -> Implement_DesignPattern_Builder_Experience_12_3_1_0 -> HandleDefaults - [FINISHED parsing routing information of " + _storedServerRequestRESTVerb + "/" + _storedServerRoutePath + "]");
            }

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #endregion
        }

        #endregion

        #region 4. Action

        #region EXECUTE LOGIC INSTUCTIONS

        #region A. Action Methods

        //Page 1-5
        public override async Task<JObject> Action_5_Process_StorySetting()
        {
            #region 1. INPUTS

            #region DEFINE data response

            JObject storedOutputResponseData = null;

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs= new SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONFIGURING web routes");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", _storedProcessRequestTracker["storedInputRequestActionName"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.cs");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Action -> Action_5_Process_StorySetting");

            #endregion

            #endregion

            #region 2. PROCESS

            try
            {
                storedOutputResponseData = await Factory_Action_5_Process_StorySetting();
            }
            catch
            {
                throw; //Let "Startup.cs -> Startup_Controller" handle the exception.
            }

            #endregion

            #region 3. OUTPUT

            #region RETURN http response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(storedOutputResponseData).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        //Page 1-7
        public override async Task<JObject> Action_7_Process_StoryResources()
        {
            #region 1. INPUTS

            #region DEFINE data response

            JObject storedOutputResponseData = null;

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONFIGURING web routes");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", _storedProcessRequestTracker["storedInputRequestActionName"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.cs");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Action -> Action_7_Process_StoryResources");

            #endregion

            #endregion

            #region 2. PROCESS

            try
            {
                storedOutputResponseData = await Factory_Action_7_Process_StoryResources();
            }
            catch
            {
                throw; //Let "Startup.cs -> Startup_Controller" handle the exception.
            }

            #endregion

            #region 3. OUTPUT

            #region RETURN http response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(storedOutputResponseData).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        #endregion

        #region B. Action Factories

        //Page 1-5
        private async Task<JObject> Factory_Action_5_Process_StorySetting()
        {
            #region 1. INPUTS

            #region DEFINE data response

            JObject storedOutputResponseData = null;

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONFIGURING web routes");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", _storedProcessRequestTracker["storedInputRequestActionName"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.cs");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Action -> Action_5_Process_StorySetting -> Factory_Action_5_Process_StorySetting");

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE process factory

            try
            {
                #region IDEAL CASE - USE factory method

                if (_storedActionName.ToUpper().Contains("PROCESSHTTPREQUEST_1_0"))
                {
                    storedOutputResponseData = await Execute_Action_5_Process_StorySetting_ProcessHttpRequest();
                }

                #endregion

            }
            catch
            {
                throw; //Let "Startup.cs -> Startup_Controller" handle the exception.
            }

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN http response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(storedOutputResponseData).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        //Page 1-7
        private async Task<JObject> Factory_Action_7_Process_StoryResources()
        {
            #region 1. INPUTS

            #region DEFINE data response

            JObject storedOutputResponseData = null;

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONFIGURING web routes");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", _storedProcessRequestTracker["storedInputRequestActionName"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Extension_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.cs");         
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Action -> Action_7_Process_StoryResources -> Factory_Action_7_Process_StoryResources");

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE process factory

            try
            {
                #region IDEAL CASE - USE factory method

                if (_storedActionName.ToUpper() == Action_12_2_1_0._12_3_WEB_DEVELOPMENT_Server_Copy_Static_Files_1_0.ToUpper())
                {
                    storedOutputResponseData = await Execute_Factory_Action_7_Process_StoryResources_CopyStaticFiles();
                }

                if (_storedActionName.ToUpper() == Action_12_2_1_0._12_3_WEB_DEVELOPMENT_Server_Map_Static_Files_1_0.ToUpper())
                {
                    storedOutputResponseData = await Execute_Factory_Action_7_Process_StoryResources_MapStaticFiles();
                }

                #endregion
            }
            catch
            {
                throw; //Let "Startup.cs -> Startup_Controller" handle the exception.
            }

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN http response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(storedOutputResponseData).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        #endregion

        #region C. Action Logic

        //Page 1-5
        private async Task<JObject> Execute_Action_5_Process_StorySetting_ProcessHttpRequest()
        {
            #region 1. INPUTS

            #region DEFINE data response

            JObject storedOutputResponseData = null;

            #endregion

            #region DEFINE event handlers

            Func<SingleParmPoco_12_2_1_0, JObject> Action = null;
            SingleParmPoco_12_2_1_0 parameterInputs = null;

            Func<SingleParmPoco_12_2_1_0, Task<JObject>> ExecuteInputRequest = null;
            Func<SingleParmPoco_12_2_1_0, Task<JObject>> ExecuteOutputResponse;

            #endregion

            #region DEFINE parameter inputs

            SingleParmPoco_12_2_1_0 storedInputs = null;

            #endregion

            #region DEFINE route details

            dynamic storedRoute = null;
            bool storedRoutesFound = false;

            #endregion

            #region DEFINE server instance

            JToken storedRouteListDetailsDELETE = null;
            JToken storedRouteListDetailsGET = null;
            JToken storedRouteListDetailsPOST = null;
            JToken storedRouteListDetailsPUT = null;

            #endregion

            #region DEFINE server routing

            List<JToken> storedControllerRoutes = null;
            string storedControllerName = "";
            string storedControllerModelDataParameter = "";
            JObject storedControllerModelDataObject = null;
            JObject storedControllerModelDataRemote = null;

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONFIGURING web routes");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", _storedProcessRequestTracker["storedInputRequestActionName"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.cs");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Action -> Action_5_Process_StorySetting -> Factory_Action_5_Process_StorySetting -> Execute_Action_5_Process_StorySetting_ProcessHttpRequest");

            #endregion

            #endregion

            #region 2. PROCESS

            try
            {
                #region 1. EXECUTE request management

                #region IDEAL CASE - USE baseDI pipeline

                #region C. OUTPUT server response                       

                ExecuteOutputResponse = async (SingleParmPoco_12_2_1_0 parameterInputs) =>
                {
                    #region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode)
                    {
                        _storedProcessRequestTracker["storedInputRequestActionName"] = Action_12_2_1_0._12_3_WEB_DEVELOPMENT_Server_Process_ROUTE_HTTP_Request_1_0;
                        _storedProcessRequestTracker["storedProcessRequestStepNumber"] = 0;

                        _storedProcessRequestExtraData = parameterInputs.Parameters["parameterExtraData"];

                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseOPTIONALBeginOfProcess", true);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseOPTIONALMasterLeaderIsSecondStep", true);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "ROUTING information found - [" + parameterInputs.Parameters["parameterRouteVerb"] + ": '" + ((HttpRequest)_storedProcessRequestExtraData.KeyValuePairs["storedServerHTTPRequestInstance"]).Path);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseMessageType", "Logging"); //Values = Logging or Mistake
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestStepNumberReplace", _storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                        await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);

                        _storedProcessRequestExtraData.KeyValuePairs.Add("storedProcessRequestDeveloperLoggingInputs", storedProcessRequestDeveloperLoggingInputs);
                    }
                    #endregion

                    #region EDGE CASE - USE updates handler

                    StoredStartUpCallBack = (SingleParmPoco_12_2_1_0 parameterOutputs) =>
                    {
                        Action(parameterOutputs);
                        return _storedProcessRequestDataStorylineDetails;
                    };

                    #endregion

                    #region 1. INPUT request details

                    Action = (SingleParmPoco_12_2_1_0 parameterInputs) =>
                    {
                        return storedOutputResponseData = new Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0(parameterInputs))
                            .SetupStoryline(parameterInputs)
                            .Action().Result;
                    };

                    Action(storedInputs);

                    #endregion

                    #region 2. OUTPUT server response

                    return storedOutputResponseData;

                    #endregion
                };

                #endregion

                #region B. CONTROL server request

                ExecuteInputRequest = async (SingleParmPoco_12_2_1_0 parameterInputs) =>
                {
                    #region 1. INPUT request routes

                    try
                    {
                        Func<Task<JToken>> ExecuteInputRequest = async () =>
                        {
                            switch (((string)parameterInputs.Parameters["parameterRouteVerb"]).ToUpper())
                            {
                                case "DELETE":
                                    return parameterInputs.Parameters["parameterRouteListDetailsDELETE"];

                                case "GET":
                                    return parameterInputs.Parameters["parameterRouteListDetailsGET"];

                                case "POST":
                                    return parameterInputs.Parameters["parameterRouteListDetailsPOST"];

                                case "PUT":
                                    return parameterInputs.Parameters["parameterRouteListDetailsPUT"];

                                default:
                                    return null;
                            }
                        };

                        parameterInputs.Parameters.Add("parameterRouteListDetails", await ExecuteInputRequest());
                    }
                    catch (Exception mistake)
                    {
                        #region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode)
                        {
                            _storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)_storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "FAILED retrieving route details");
                            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestStepNumberReplace", _storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMistake", mistake);

                            await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                        }

                        #endregion

                        #region EDGE CASE - USE exception handler

                        throw mistake;

                        #endregion
                    }

                    #endregion

                    #region 2. CONTROL request routes

                    try
                    {
                        Func<Task<bool>> ExecuteControllerRequest = async () =>
                        {
                            if (parameterInputs.Parameters["parameterRouteListDetails"] != null)
                            {
                                foreach (var storedRouteItemDetail in parameterInputs.Parameters["parameterRouteListDetails"])
                                {
                                    #region A. STORE controller details

                                    //STORE listing of routes
                                    storedControllerRoutes = storedRouteItemDetail.SelectToken("SetupItemTransportItemRoute.ControllerRoutes").Children().ToList(); //item.SetupItemTransportItemRoute.ControllerRoutes;

                                    //STORE route controller name
                                    storedControllerName = storedRouteItemDetail.SelectToken("SetupItemTransportItemRoute.ControllerName").ToString();

                                    //STORE route dataset details
                                    storedControllerModelDataParameter = storedRouteItemDetail.SelectToken("SetupItemTransportItemRoute.ModelDataParameter").ToString();
                                    storedControllerModelDataObject = (JObject)storedRouteItemDetail.SelectToken("SetupItemTransportItemRoute.ModelDataObject");

                                    storedControllerModelDataRemote = (JObject)storedRouteItemDetail.SelectToken("SetupItemTransportItemRoute.ModelDataRemote");

                                    #endregion

                                    if (storedControllerRoutes != null && storedControllerRoutes.Count() > 0)
                                    {
                                        storedRoute = storedControllerRoutes.Where(r => r.ToString().ToUpper() == _storedServerRoutePath.ToUpper()).SingleOrDefault();

                                        if (storedRoute != null)
                                        {
                                            #region B. STORE route details

                                            _storedProcessRequestExtraData.KeyValuePairs.Add("storedControllerModelDataRemote", storedControllerModelDataRemote);
                                            _storedProcessRequestExtraData.KeyValuePairs.Add("storedControllerRoute", storedRoute);
                                            _storedProcessRequestExtraData.KeyValuePairs.Add("storedServerHTTPRequestInstance", _storedServerHTTPRequestInstance);

                                            storedInputs = new SingleParmPoco_12_2_1_0();

                                            storedInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
                                            storedInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestSettings);

                                            storedInputs.Parameters.Add("parameterProcessRequestDataStorylineDetails", (storedControllerModelDataObject != null) ? storedControllerModelDataObject : null);
                                            storedInputs.Parameters.Add("parameterProcessRequestDataStorylineDetails_Parameters", null);
                                            storedInputs.Parameters.Add("parameterProcessRequestDataStorylineDetails_CallBack", storedControllerModelDataRemote);

                                            storedInputs.Parameters.Add("parameterExtraData", _storedProcessRequestExtraData);

                                            storedInputs.Parameters.Add("parameterInputRequestName", storedControllerName);
                                            storedInputs.Parameters.Add("parameterInputRequestNameDataCacheKey", storedControllerModelDataParameter);

                                            storedInputs.Parameters.Add("parameterRouteVerb", storedControllerModelDataParameter);
                                            
                                            #endregion

                                            #region C. CONTROL request response

                                            await ExecuteOutputResponse(storedInputs);

                                            #endregion
                                        }
                                        else
                                        {
                                            throw new Exception("FAILED inputing routes");
                                        }
                                    }
                                    else
                                    {
                                        throw new Exception("FAILED inputing routes");
                                    }
                                    
                                }
                            }

                            return await Task.FromResult<bool>(true).ConfigureAwait(true);
                        };

                        await ExecuteControllerRequest();

                        return _storedProcessRequestDataStorylineDetails;
                    }
                    catch (Exception mistake)
                    {
                        #region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode)
                        {
                            _storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)_storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "FAILED outputing response");
                            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestStepNumberReplace", _storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMistake", mistake);

                            await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                        }

                        #endregion

                        #region EDGE CASE - USE exception handler

                        throw mistake;

                        #endregion
                    }

                    #endregion                    
                };

                #endregion

                #region A. CONFIGURE server goals

                #region 1. CONFIGURE request goals

                #region A. CONFIGURE request prerequisites

                try
                {
                    Func<Task<bool>> ExecuteStorageRequest = async () =>
                    {
                        storedInputs = new SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
                        storedInputs.Parameters.Add("parameterDirectorOrExperienceName", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0");
                        storedInputs.Parameters.Add("parameterProcessRequestMasterStorer", _storedCentralizedStorer);
                        storedInputs.Parameters.Add("parameterProcessRequestDataStorylineDetails", _storedProcessRequestDataStorylineDetails);

                        _storedServerInstance = Extension_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.Step_X_X_Framework_Control_ServerSetup_1_0(storedInputs);

                        return await Task.FromResult<bool>(true).ConfigureAwait(true);
                    };

                    await ExecuteStorageRequest();

                    #region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode)
                    {
                        _storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)_storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "SUCCESSFULLY configured request prerequisites");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseMessageType", "Logging"); //Values = Logging or Mistake
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestStepNumberReplace", this._storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                        await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    #endregion
                }
                catch (Exception mistake)
                {
                    #region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode)
                    {
                        _storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)_storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "FAILED storing server configurations to memory");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestStepNumberReplace", _storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMistake", mistake);

                        await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw mistake;

                    #endregion
                }

                #endregion

                #endregion

                #region 2. CONFIGURE route goals

                #region A. STORE routes configurations to memory

                try
                {                    
                    Func<Task<bool>> ExecuteStorageRequest = async () =>
                    {
                        storedInputs = new SingleParmPoco_12_2_1_0();

                        //CONFIGURE delete routes
                        if (_storedServerInstance.Result["DELETE"] != null)
                        {
                            storedRouteListDetailsDELETE = _storedServerInstance.Result["DELETE"];

                            storedInputs.Parameters.Add("parameterRouteListDetailsDELETE", storedRouteListDetailsDELETE);
                        }

                        //CONFIGURE get routes
                        if (_storedServerInstance.Result["GET"] != null)
                        {
                            storedRouteListDetailsGET = _storedServerInstance.Result["GET"];

                            storedInputs.Parameters.Add("parameterRouteListDetailsGET", storedRouteListDetailsGET);
                        }

                        //CONFIGURE post routes
                        if (_storedServerInstance.Result["POST"] != null)
                        {
                            storedRouteListDetailsPOST = _storedServerInstance.Result["POST"];

                            storedInputs.Parameters.Add("parameterRouteListDetailsPOST", storedRouteListDetailsPOST);
                        }

                        //CONFIGURE put routes
                        if (_storedServerInstance.Result["PUT"] != null)
                        {
                            storedRouteListDetailsPUT = _storedServerInstance.Result["PUT"];

                            storedInputs.Parameters.Add("parameterRouteListDetailsPUT", storedRouteListDetailsPUT);
                        }

                        if (storedInputs.Parameters.ContainsKey("parameterRouteListDetailsDELETE") ||
                            storedInputs.Parameters.ContainsKey("parameterRouteListDetailsGET") ||
                            storedInputs.Parameters.ContainsKey("parameterRouteListDetailsPOST") ||
                            storedInputs.Parameters.ContainsKey("parameterRouteListDetailsPUT"))
                        {
                            storedInputs.Parameters.Add("parameterRouteVerb", _storedServerHTTPRequestInstance.HttpContext.Request.Method.ToUpper());

                            return await Task.FromResult<bool>(true).ConfigureAwait(true);
                        }                        

                        return await Task.FromResult<bool>(false).ConfigureAwait(true);
                    };

                    storedRoutesFound = await ExecuteStorageRequest();
                }
                catch (Exception mistake)
                {
                    #region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode)
                    {
                        _storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)_storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "FAILED storing routes to memory");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestStepNumberReplace", _storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMistake", mistake);

                        await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw mistake;

                    #endregion
                }

                #endregion

                #region B. INPUT routes configurations

                try
                {
                    #region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode && storedRoutesFound)
                    {
                        _storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)_storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "SUCCESSFULLY configured routes");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseMessageType", "Logging"); //Values = Logging or Mistake
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestStepNumberReplace", this._storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                        await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    #endregion

                    if(storedRoutesFound) {
                        _storedProcessRequestDataStorylineDetails = await ExecuteInputRequest(storedInputs);
                    }
                    else
                    {
                        throw new Exception("FAILED configurating routes");
                    }

                }
                catch (Exception mistake)
                {
                    #region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode)
                    {
                        _storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)_storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "FAILED configurating routes");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestStepNumberReplace", _storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMistake", mistake);

                        await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw mistake;

                    #endregion
                }

                #endregion

                #endregion

                #endregion

                #endregion

                #endregion

                #region 2. EXECUTE response management

                #region EDGE CASE - USE developer logger

                //if (storedProcessRequestDeveloperMode)
                //{
                //    _storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)_storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                //    storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "PROCESSING web request");
                //    storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseMessageType", "Logging"); //Values = Logging or Mistake
                //    storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestStepNumberReplace", _storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                //    storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseOPTIONALMiddleOfProcess", true);

                //    await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);

                //    storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseOPTIONALMiddleOfProcess", false);
                //}

                #endregion

                #region IDEAL CASE - USE .netcore server

                #region A. CONTROL request response

                #endregion

                #endregion

                #endregion
            }
            catch (Exception mistake)
            {
                #region EDGE CASE - USE developer logger

                if (storedProcessRequestDeveloperMode)
                {
                    _storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)_storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                    storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "FAILED resolving route");
                    storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                    storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestStepNumberReplace", this._storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                    await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                }

                #endregion

                #region EDGE CASE - USE exception handler

                throw mistake;

                #endregion
            }

            #endregion

            #region 3. OUTPUT

            #region RETURN http response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(_storedProcessRequestDataStorylineDetails).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        //Page 1-7
        private async Task<JObject> Execute_Factory_Action_7_Process_StoryResources_CopyStaticFiles()
        {
            #region 1. INPUTS

            #region DEFINE data response

            JObject storedOutputResponseData = null;

            #endregion

            #region DEFINE parameter inputs

            SingleParmPoco_12_2_1_0 storedInputs = null;

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONFIGURING web routes");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", _storedProcessRequestTracker["storedInputRequestActionName"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Extension_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.cs");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Action -> Action_7_Process_StoryResources -> Factory_Action_7_Process_StoryResources -> Execute_Factory_Action_7_Process_StoryResources_CopyStaticFiles");

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE copying static files

            try
            {
                #region IDEAL CASE - USE baseDI extension

                storedInputs = new SingleParmPoco_12_2_1_0();
                storedInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
                storedInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestSettings);
                storedInputs.Parameters.Add("parameterProcessRequestDataStorylineDetails", _storedProcessRequestDataStorylineDetails);

                await Extension_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.Step_X_X_Framework_Store_FilesToServer_1_0(storedInputs);

                #endregion
            }
            catch
            {
                throw; //Let "Startup.cs -> Startup_Controller" handle the exception.
            }

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN http response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(storedOutputResponseData).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        private async Task<JObject> Execute_Factory_Action_7_Process_StoryResources_MapStaticFiles()
        {
            #region 1. INPUTS

            #region DEFINE data response

            dynamic storedOutputResponseData = null;

            #endregion

            #region DEFINE input variables

            dynamic storedInputRequestFilesMetaData = null;

            #endregion

            #region DEFINE parameter inputs

            SingleParmPoco_12_2_1_0 storedInputs = null;

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", _storedProcessRequestTracker["storedInputRequestActionName"]);

            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONFIGURING web routes");            
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.cs");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Action -> Action_7_Process_StoryResources -> Factory_Action_7_Process_StoryResources -> Execute_Factory_Action_7_Process_StoryResources_MapStaticFiles");

            #endregion

            #region MEMORIZE process extra data

            IApplicationBuilder storedControlRequest_IApplicationBuilder = (_storedProcessRequestExtraData.KeyValuePairs["storedControlRequest_IApplicationBuilder"] != null) ? (IApplicationBuilder)_storedProcessRequestExtraData.KeyValuePairs["storedControlRequest_IApplicationBuilder"] : null;
            IServiceCollection storedControlRequest_IServiceCollection = (_storedProcessRequestExtraData.KeyValuePairs["storedControlRequest_IServiceCollection"] != null) ? (IServiceCollection)_storedProcessRequestExtraData.KeyValuePairs["storedControlRequest_IServiceCollection"] : null;
            IWebHostEnvironment storedControlRequest_IWebHostEnvironment = (_storedProcessRequestExtraData.KeyValuePairs["storedControlRequest_IWebHostEnvironment"] != null) ? (IWebHostEnvironment)_storedProcessRequestExtraData.KeyValuePairs["storedControlRequest_IWebHostEnvironment"] : null;

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE mapping static files

            try
            {
                #region IDEAL CASE - USE baseDI extension

                #region A. CONVERT dataset to filtered file data

                try
                {
                    Func<Task<dynamic>> ExecuteConversionRequest = async () =>
                    {
                        storedInputs = new SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
                        storedInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestSettings);

                        storedInputs.Parameters.Add("parameterProcessRequestDataToFilter", _storedProcessRequestDataStorylineDetails);
                        storedInputs.Parameters.Add("parameterProcessRequestDataToFilterKey", "searchkey");
                        storedInputs.Parameters.Add("parameterProcessRequestDataToFilterValue", "SetupDetails_Servers_Server_1_0_ServerWeb_2_2_2_1_serverInformationSetupDetails");

                        storedInputs.Parameters.Add("parameterOutputResponseAsArray", false);

                        storedOutputResponseData = await Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(storedInputs); //.SingleOrDefault()?.Parent;

                        if (storedOutputResponseData != null)
                        {
                            var setupItemEnvironmentClient = storedOutputResponseData?.Parent.value[0]._2_2_2_1_1_storedProcessRequestTrackerrmationSetupItem.value.SetupItemEnvironmentClient;

                            storedOutputResponseData = _storedProcessRequestDataStorylineDetails;
                            storedOutputResponseData.outputs[1].baseDIObservations.Add(setupItemEnvironmentClient);
                        }

                        return storedOutputResponseData;
                    };

                    storedOutputResponseData = await ExecuteConversionRequest();
                }
                catch (Exception mistake)
                {
                    throw new Exception("FAILED to convert dataset to static folder data", mistake);
                }

                #endregion

                #region B. STORE memory reference to filtered file data

                try
                {
                    Func<Task<dynamic>> ExecuteStorageRequest = async () =>
                    {
                        if (storedOutputResponseData != null)
                        {
                            storedInputRequestFilesMetaData = JObject.Parse(storedOutputResponseData.ToString());
                            storedOutputResponseData = storedInputRequestFilesMetaData.outputs[1].baseDIObservations;

                            if (storedOutputResponseData.Any())
                            {
                                foreach (dynamic storedOutputResponseDataItem in storedOutputResponseData.FirstOrDefault())
                                {
                                    if (storedOutputResponseDataItem.Value != null)
                                    {
                                        if (!Directory.Exists(Path.Combine(storedOutputResponseDataItem.Value.ToString())))
                                        {
                                            Directory.CreateDirectory(Path.Combine(storedOutputResponseDataItem.Value.ToString()));
                                        }

                                        storedControlRequest_IApplicationBuilder.UseStaticFiles(new StaticFileOptions
                                        {
                                            FileProvider = new PhysicalFileProvider(Path.GetFullPath(Path.Combine(storedOutputResponseDataItem.Value.ToString()))),
                                            RequestPath = "/StaticFiles"
                                        });
                                    }
                                }
                            }
                            else
                            {
                                throw new Exception("USE EDGE CASE - hardcoded data");
                            }
                        }

                        return await Task.FromResult<bool>(true).ConfigureAwait(true);
                    };

                    await ExecuteStorageRequest();
                }
                catch
                {
                    #region EDGE CASE - USE hardcoded data

                    storedControlRequest_IApplicationBuilder.UseStaticFiles(new StaticFileOptions
                    {
                        FileProvider = new PhysicalFileProvider(Path.GetFullPath(Path.Combine("wwwroot/Client/Images"))),
                        RequestPath = "/StaticFiles"
                    });

                    #endregion

                    #region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode)
                    {
                        _storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)_storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", _storedProcessRequestTracker["storedInputRequestActionName"]);

                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "FAILED mapping static files...USING hardcoded values");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestStepNumberReplace", _storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Action -> Action_7_Process_StoryResources -> Factory_Action_7_Process_StoryResources -> Execute_Factory_Action_7_Process_StoryResources_MapStaticFiles");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMistake", null);

                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                        await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs).ConfigureAwait(true);
                    }

                    #endregion
                }

                #endregion

                #endregion
            }
            catch
            {
                throw; //Let "Startup.cs -> Startup_Controller" handle the exception.
            }

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN http response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(storedOutputResponseData).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        #endregion

        #endregion

        #region NOT APART OF THE REQUEST PIPELINE AT THIS TIME

        #region A. Action Methods

        //Page 1-1
        public override async Task<JObject> Action_1_Begin_Process()
        {
            #region 1. INPUTS


            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            #region RETURN process response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(_storedProcessRequestDataStorylineDetails).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        //Page 1-2

        public override async Task<JObject> Action_2_Validate_Process()
        {
            #region 1. INPUTS


            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            #region RETURN process response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(_storedProcessRequestDataStorylineDetails).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        //Page 1-3
        public override async Task<JObject> Action_3_Process_StoryAuthor()
        {
            #region 1. INPUTS


            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            #region RETURN process response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(_storedProcessRequestDataStorylineDetails).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        //Page 1-4
        public override async Task<JObject> Action_4_Process_StoryCharacters()
        {
            #region 1. INPUTS


            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            #region RETURN process response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(_storedProcessRequestDataStorylineDetails).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        //Page 1-6
        public override async Task<JObject> Action_6_Process_StoryExperiences()
        {
            #region 1. INPUTS


            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            #region RETURN process response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(_storedProcessRequestDataStorylineDetails).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        //Page 1-8
        public override async Task<JObject> Action_8_Process_CRUD()
        {
            #region 1. INPUTS


            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            #region RETURN process response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(_storedProcessRequestDataStorylineDetails).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        //Page 1-9
        public override async Task<JObject> Action_9_Verify_Process()
        {
            #region 1. INPUTS


            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            #region RETURN process response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(_storedProcessRequestDataStorylineDetails).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        //Page 1-10
        public override async Task<JObject> Action_10_End_Process()
        {
            #region 1. INPUTS


            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            #region RETURN process response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(_storedProcessRequestDataStorylineDetails).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        #endregion

        #region B. Action Factories

        //Page 1-1
        private async Task<JObject> Factory_Action_1_Begin_Process()
        {
            switch (_storedActionName.ToUpper())
            {
                default:
                    return await Task.FromResult<JObject>(null).ConfigureAwait(true);
            }
        }

        //Page 1-2
        private async Task<JObject> Factory_Action_2_Validate_Process()
        {
            switch (_storedActionName.ToUpper())
            {
                default:
                    return await Task.FromResult<JObject>(null).ConfigureAwait(true);
            }
        }

        //Page 1-3
        private async Task<JObject> Factory_Action_3_Process_StoryAuthor()
        {
            switch (_storedActionName.ToUpper())
            {
                default:
                    return await Task.FromResult<JObject>(null).ConfigureAwait(true);
            }
        }

        //Page 1-4
        private async Task<JObject> Factory_Action_4_Process_StoryCharacters()
        {
            switch (_storedActionName.ToUpper())
            {
                default:
                    return await Task.FromResult<JObject>(null).ConfigureAwait(true);
            }
        }

        //Page 1-6
        private async Task<JObject> Factory_Action_6_Process_StoryExperiences()
        {
            switch (_storedActionName.ToUpper())
            {
                default:
                    return await Task.FromResult<JObject>(null).ConfigureAwait(true);
            }
        }

        //Page 1-8
        private async Task<JObject> Factory_Action_8_Process_CRUD()
        {
            switch (_storedActionName.ToUpper())
            {
                default:
                    return await Task.FromResult<JObject>(null).ConfigureAwait(true);
            }
        }

        //Page 1-9
        private async Task<JObject> Factory_Action_9_Verify_Process()
        {
            switch (_storedActionName.ToUpper())
            {
                default:
                    return await Task.FromResult<JObject>(null).ConfigureAwait(true);
            }
        }

        //Page 1-10
        private async Task<JObject> Factory_Action_10_End_Process()
        {
            switch (_storedActionName.ToUpper())
            {
                default:
                    return await Task.FromResult<JObject>(null).ConfigureAwait(true);
            }
        }

        #endregion

        #region C. Action Logic

        #endregion

        #endregion

        #endregion
    }

    #endregion
}