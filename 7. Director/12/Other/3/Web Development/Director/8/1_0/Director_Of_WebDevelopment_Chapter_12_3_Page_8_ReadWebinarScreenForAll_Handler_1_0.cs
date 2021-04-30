﻿#region Imports

#region BaseDI

using BaseDI.Professional.Character_1;
using BaseDI.Professional.Script.Programming_1;
using BaseDI.Professional.Script.Programming.Abstract_1;

using BaseDI.Professional.Script.Programming.Poco_1;
using BaseDI.Professional.Script.Programming.Repository_1;
using BaseDI.Professional.Script.Risk_Management.Extensions_0;

using ChapterPage = BaseDI.Professional.Chapter.Page.Web_Development_8;

#endregion

#region .Net Core

using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;

using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

#endregion 

#region 3rd Party Core

using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

#endregion

#endregion

namespace BaseDI.Professional.Director.Web_Development_8
{
    public class Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0 : aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0
    {
        #region 1. Assign

        //SETTINGS
        private IConfiguration _storedAppSettings = null;

        //CLIENT/SERVER
        private Dictionary<string, object> _storedClientOrServerInstance;

        private string _storedClientRequestByName;
        private string _storedClientRequestByNameParameters;

        private aClass_Programming_ScriptRoutable_12_2_1_0 _storedClientRequestByObject;

        //DATASETS
        private JObject _storedStorylineDetails;
        private JObject _storedStorylineDetails_Parameters;

        //MISC
        private ExtraData_12_2_1_0 _storedExtraData;

        //PLUMBING
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedDisturber;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedSensor;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedStorer;

        private SingleParmPoco_12_2_1_0 _storedParameterInputs;

        private string _storedRequestName = "";
        private string _storedSystemRequestByName = "";

        #endregion

        #region 2. Ready

        public Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS

            #region MEMORIZE input parameters

            _storedParameterInputs = parameterInputs;

            #endregion

            #region MEMORIZE clientOrServer instance

            _storedClientOrServerInstance = _storedParameterInputs.Parameters["parameterClientOrServerInstance"];

            #endregion

            #region MEMORIZE app settings

            _storedAppSettings = (IConfiguration)_storedClientOrServerInstance["storedAppSettings"];

            #endregion

            #region MEMORIZE centralized processes handlers

            _storedCentralizedDisturber = _storedParameterInputs.Parameters["parameterCentralizedDisturber"];
            _storedCentralizedSensor = _storedParameterInputs.Parameters["parameterCentralizedSensor"];
            _storedCentralizedStorer = _storedParameterInputs.Parameters["parameterCentralizedStorer"];

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

                SingleParmPoco_12_2_1_0 storedParameterInputs;

                #endregion

                #region DEFINE process checkpoint

                bool storedProcessCheckPointHit = false;

                #endregion

                #region DEFINE stored message

                string storedMessage = "";

                #endregion

                #region MEMORIZE clientOrServer instance

                Dictionary<string, object> storedClientOrServerInstance = parameterInputs.Parameters["parameterClientOrServerInstance"];

                #endregion

                #region MEMORIZE app settings

                IConfiguration storedAppSettings = (IConfiguration)storedClientOrServerInstance["storedAppSettings"];

                #endregion

                #region MEMORIZE developer mode

                bool storedDeveloperMode = storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") ? storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") : false;

                SingleParmPoco_12_2_1_0 storedDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

                //REQUIRED
                storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "VALIDATING request inputs");
                storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", storedClientOrServerInstance["storedActionName"]);
                storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", storedClientOrServerInstance["storedAppSettings"]);
                storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", storedClientOrServerInstance);
                storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0.cs");
                storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Action -> ValidateInputs");

                #endregion

                #endregion

                #region 2. PROCESS

                #region EXECUTE validation process

                #region IDEAL CASE - USE valid information

                if (parameterInputs != null || parameterInputs.Parameters != null)
                {
                    if (!parameterInputs.Parameters.ContainsKey("parameterClientOrServerInstance"))
                    {
                        storedMessage += "***parameterClientOrServerInstance*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }
                    else
                    {
                        if (parameterInputs.Parameters["parameterClientOrServerInstance"]["storedAppSettings"] == null)
                        {
                            storedMessage += "***parameterClientOrServerInstance*** must contain a key of ***storedAppSettings***.";
                            storedProcessCheckPointHit = true;
                        }

                        if (parameterInputs.Parameters["parameterClientOrServerInstance"]["storedHttpRequest"] == null)
                        {
                            storedMessage += "***parameterClientOrServerInstance*** must contain a key of ***storedHttpRequest***.";
                            storedProcessCheckPointHit = true;
                        }
                        else
                        {
                            if (!parameterInputs.Parameters["parameterClientOrServerInstance"]["storedHttpRequest"] is HttpRequest)
                            {
                                storedMessage += "***parameterClientOrServerInstance*** must contain a key of ***storedHttpRequest*** which must be a type of ***HttpRequest*** .";
                                storedProcessCheckPointHit = true;
                            }
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterAppSettings"))
                    {
                        storedMessage += "***parameterAppSettings*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterClientRequestByName"))
                    {
                        storedMessage += "***parameterClientRequestByName*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterClientRequestByNameParameters"))
                    {
                        storedMessage += "***parameterClientRequestByNameParameters*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterCentralizedDisturber"))
                    {
                        storedMessage += "***parameterCentralizedDisturber*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterCentralizedSensor"))
                    {
                        storedMessage += "***parameterCentralizedSensor*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterCentralizedStorer"))
                    {
                        storedMessage += "***parameterCentralizedStorer*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterStorylineDetails"))
                    {
                        storedMessage += "***parameterStorylineDetails*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterStorylineDetails_Parameters"))
                    {
                        storedMessage += "***parameterStorylineDetails_Parameters*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (storedProcessCheckPointHit)
                    {
                        #region EDGE CASE - USE developer logger

                        if (storedDeveloperMode)
                        {
                            storedClientOrServerInstance["processStepNumber"] = (int)storedClientOrServerInstance["processStepNumber"] + 1;

                            storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "PARSING parameter values failed");
                            storedDeveloperLoggingInputs.Parameters.Add("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                            storedDeveloperLoggingInputs.Parameters.Add("parameterStepNumberReplace", storedClientOrServerInstance["processStepNumber"]);

                            await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
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

                    if (storedDeveloperMode)
                    {
                        storedClientOrServerInstance["processStepNumber"] = (int)storedClientOrServerInstance["processStepNumber"] + 1;

                        storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "PARSING parameter values failed");
                        storedDeveloperLoggingInputs.Parameters.Add("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                        storedDeveloperLoggingInputs.Parameters.Add("parameterStepNumberReplace", storedClientOrServerInstance["processStepNumber"]);

                        await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
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

            Use_DesignPattern_Builder_Chapter_12_3_Page_8 storedRequestHandler_UsingBuilderPattern = null;

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingStartUpProcessInputs = (_storedParameterInputs.Parameters["parameterExtraData"]?.KeyValuePairs?["storedDeveloperLoggingInputs"] ? _storedParameterInputs.Parameters["parameterExtraData"]?.KeyValuePairs?["storedDeveloperLoggingInputs"] : null);

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "EXECUTING request handler");
            storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", _storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", _storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0.cs");
            storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Action");

            //OPTIONAL
            storedDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALMiddleOfProcess", true);

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE request handler

            try
            {
                #region EDGE CASE - USE developer logger

                if (storedDeveloperMode && (int)_storedClientOrServerInstance["processStepNumber"] == 0)
                {
                    _storedClientOrServerInstance["processStepNumber"] = (int)_storedClientOrServerInstance["processStepNumber"] + 1;

                    storedDeveloperLoggingInputs.Parameters.Add("parameterMessageType", "Logging"); //Values = Logging or Mistake
                    storedDeveloperLoggingInputs.Parameters.Add("parameterStepNumberReplace", _storedClientOrServerInstance["processStepNumber"]);

                    await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                }

                #endregion

                #region IDEAL CASE - USE design pattern

                //REQUIRED: Implement one of the design patterns at https://www.dofactory.com/net/design-patterns
                storedRequestHandler_UsingBuilderPattern = new Use_DesignPattern_Builder_Chapter_12_3_Page_8(_storedParameterInputs);

                StorylineDetails = await storedRequestHandler_UsingBuilderPattern.Action().ConfigureAwait(true);

                #endregion
            }
            catch (Exception mistake)
            {
                #region EDGE CASE - USE developer logger

                if (storedDeveloperMode)
                {
                    _storedClientOrServerInstance["processStepNumber"] = (int)_storedClientOrServerInstance["processStepNumber"] + 1;

                    storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "FAILED configurating request handler");
                    storedDeveloperLoggingInputs.Parameters.Add("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                    storedDeveloperLoggingInputs.Parameters.Add("parameterStepNumberReplace", _storedClientOrServerInstance["processStepNumber"]);

                    await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
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

            return await Task.FromResult<JObject>(StorylineDetails).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        #endregion
    }

    #region 5. Action Script

    //A. Prepare for Action (SETUP WHAT WILL HAPPEN)

    internal class Use_DesignPattern_Builder_Chapter_12_3_Page_8
    {
        #region 1. Assign

        //SETTINGS
        private IConfiguration _storedAppSettings;

        //CLIENT/SERVER
        private Dictionary<string, object> _storedClientOrServerInstance;

        private string _storedClientRequestByName;
        private string _storedClientRequestByNameParameters;

        private aClass_Programming_ScriptRoutable_12_2_1_0 _storedClientRequestByObject;

        //DATASETS
        private JObject _storedStorylineDetails;
        private JObject _storedStorylineDetails_Parameters;

        //MISC
        private ExtraData_12_2_1_0 _storedExtraData;

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

        internal Use_DesignPattern_Builder_Chapter_12_3_Page_8(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS

            #region MEMORIZE clientOrServer instance

            _storedClientOrServerInstance = parameterInputs.Parameters["parameterClientOrServerInstance"];

            #endregion

            #region MEMORIZE app settings

            _storedAppSettings = (IConfiguration)_storedClientOrServerInstance["storedAppSettings"];

            #endregion

            #region MEMORIZE centralized processes handlers

            _storedCentralizedDisturber = parameterInputs.Parameters["parameterCentralizedDisturber"];
            _storedCentralizedSensor = parameterInputs.Parameters["parameterCentralizedSensor"];
            _storedCentralizedStorer = parameterInputs.Parameters["parameterCentralizedStorer"];

            #endregion

            #region MEMORIZE data repository

            _storedRepository = parameterInputs.Parameters["parameterDataRepository"];

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #region MEMORIZE storyline details

            _storedStorylineDetails = parameterInputs.Parameters["parameterStorylineDetails"];
            _storedStorylineDetails_Parameters = parameterInputs.Parameters["parameterStorylineDetails_Parameters"];

            #endregion

            #region MEMORIZE extra data

            _storedExtraData = parameterInputs.Parameters["parameterExtraData"] ? parameterInputs.Parameters["parameterExtraData"] : null;

            #endregion

            #region MEMORIZE request details

            _storedClientRequestByName = parameterInputs.Parameters["parameterClientRequestByName"];
            _storedClientRequestByNameParameters = parameterInputs.Parameters["parameterClientRequestByNameParameters"];
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

            dynamic storedDataResponse = null;

            #endregion

            #region DEFINE request handler

            aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> storedRequestHandler_UsingBuilderPattern;

            #endregion

            #endregion

            #region 2. PROCESS

            #region ARRANGE execution order

            #region IDEAL CASE - USE builder pattern

            storedRequestHandler_UsingBuilderPattern = new Implement_DesignPattern_Builder_Chapter_12_3_Page_8_1_0(_storedParameterInputs);

            await storedRequestHandler_UsingBuilderPattern.Action_1_Begin_Process();

            await storedRequestHandler_UsingBuilderPattern.Action_2_Validate_Process();

            await storedRequestHandler_UsingBuilderPattern.Action_3_Process_StoryAuthor();
            await storedRequestHandler_UsingBuilderPattern.Action_4_Process_StoryCharacters();
            await storedRequestHandler_UsingBuilderPattern.Action_5_Process_StorySetting();
            await storedRequestHandler_UsingBuilderPattern.Action_6_Process_StoryExperiences();
            await storedRequestHandler_UsingBuilderPattern.Action_7_Process_StoryResources();
            await storedRequestHandler_UsingBuilderPattern.Action_8_Process_CRUD();

            await storedRequestHandler_UsingBuilderPattern.Action_9_Verify_Process();

            storedDataResponse = await storedRequestHandler_UsingBuilderPattern.Action_10_End_Process();


            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN request response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(_storedStorylineDetails).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        #endregion
    }

    #endregion

    #region 6. Action Implementation

    //A. Commence Storyline (ACT WHAT HAS HAPPENED)

    internal class Implement_DesignPattern_Builder_Chapter_12_3_Page_8_1_0 : aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>>
    {
        #region 1. Assign

        //SETTINGS
        private IConfiguration _storedAppSettings;

        private string _storedSettingSecurityAppId = "";
        private string _storedSettingSecurityAppSecret = "";
        private string _storedSettingSecurityAppToken = "";

        //CLIENT/SERVER
        private Dictionary<string, object> _storedClientOrServerInstance;

        private string _storedClientRequestByName;
        private string _storedClientRequestByNameParameters;

        private aClass_Programming_ScriptRoutable_12_2_1_0 _storedClientRequestByObject;

        private Task<Dictionary<string, JToken>> _storedServerInstance = null;
        private object _storedServerInstanceExperienceRequestHandler = null;

        private string _storedServerRequestRESTVerb = "";
        private string _storedServerRoutePath = "";

        //DATASET
        private JObject _storedStorylineDetails = null;
        private JObject _storedStorylineDetails_Parameters = null;

        private string _storedDataObservationTemplate = "";

        //MISC
        private ExtraData_12_2_1_0 _storedExtraData = null;

        //PLUMBING
        private string _storedActionName = "";
        private aClass_Programming_ScriptRoutable_12_2_1_0 _storedBusinessDirectorOrExperienceRequestHandler;

        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedDisturber;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedSensor;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedStorer;

        private SingleParmPoco_12_2_1_0 _storedParameterInputs;

        private string _storedRequestFileName = "Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0";
        private string _storedRequestName = "";
        private IContract_Programming_Repository_12_2_1_0 _storedRepository;
        private string _storedSystemRequestByName;

        #endregion

        #region 2. Ready

        internal Implement_DesignPattern_Builder_Chapter_12_3_Page_8_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS

            #region MEMORIZE clientOrServer instance

            _storedClientOrServerInstance = parameterInputs.Parameters["parameterClientOrServerInstance"];

            #endregion

            #region MEMORIZE action name

            _storedActionName = (string)_storedClientOrServerInstance["storedActionName"];

            #endregion

            #region MEMORIZE app settings

            _storedAppSettings = (IConfiguration)_storedClientOrServerInstance["storedAppSettings"];

            #endregion

            #region MEMORIZE centralized processes handlers

            _storedCentralizedDisturber = parameterInputs.Parameters["parameterCentralizedDisturber"];
            _storedCentralizedSensor = parameterInputs.Parameters["parameterCentralizedSensor"];
            _storedCentralizedStorer = parameterInputs.Parameters["parameterCentralizedStorer"];

            #endregion

            #region MEMORIZE data repository

            _storedRepository = parameterInputs.Parameters["parameterDataRepository"];

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #region MEMORIZE storyline details

            _storedStorylineDetails = parameterInputs.Parameters["parameterStorylineDetails"];
            _storedStorylineDetails_Parameters = parameterInputs.Parameters["parameterStorylineDetails_Parameters"];

            #endregion

            #region MEMORIZE extra data

            _storedExtraData = parameterInputs.Parameters["parameterExtraData"] ? parameterInputs.Parameters["parameterExtraData"] : null;

            #endregion

            #region MEMORIZE request details

            _storedClientRequestByName = parameterInputs.Parameters["parameterClientRequestByName"];
            _storedClientRequestByNameParameters = parameterInputs.Parameters["parameterClientRequestByNameParameters"];
            _storedClientRequestByObject = parameterInputs.Parameters["parameterClientRequestByObject"];

            _storedRequestName = parameterInputs.Parameters["parameterSystemRequestByName"];

            _storedSystemRequestByName = parameterInputs.Parameters["parameterSystemRequestByName"];

            _storedBusinessDirectorOrExperienceRequestHandler = parameterInputs.Parameters["parameterBusinessDirectorOrExperienceRequestHandler"];

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

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE process defaults


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

            JObject storedDataResponse = null;

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONFIGURING web routes");
            //storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", _storedClientOrServerInstance["storedActionName"]);
            //storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", _storedClientOrServerInstance["storedAppSettings"]);
            //storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
            //storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0.cs");
            //storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Action -> Action_5_Process_StorySetting");

            #endregion

            #endregion

            #region 2. PROCESS

            try
            {
                storedDataResponse = await Factory_Action_5_Process_StorySetting();
            }
            catch
            {
                throw; //Let "Startup.cs -> Startup_Controller" handle the exception.
            }

            #endregion

            #region 3. OUTPUT

            #region RETURN http response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(storedDataResponse).ConfigureAwait(true);

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

            JObject storedDataResponse = null;

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONFIGURING web routes");
            //storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", _storedClientOrServerInstance["storedActionName"]);
            //storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", _storedClientOrServerInstance["storedAppSettings"]);
            //storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
            //storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0.cs");
            //storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Action -> Action_8_Process_CRUD -> Factory_Action_8_Process_CRUD");

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE process factory

            try
            {
                #region IDEAL CASE - USE factory method

                //if (_storedActionName.ToUpper().Contains("PROCESSHTTPREQUEST_1_0"))
                //{
                //    storedDataResponse = await Execute_Factory_Action_5_Process_StorySetting_OutputHtml();
                //}

                storedDataResponse = await Execute_Factory_Action_5_Process_StorySetting_OutputHtml();

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

            return await Task.FromResult<JObject>(storedDataResponse).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        #endregion

        #region C. Action Logic

        //Page 1-5
        private async Task<JObject> Execute_Factory_Action_5_Process_StorySetting_OutputHtml()
        {
            #region 1. INPUTS

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE process handler

            #region IDEAL CASE - USE process handler 

            var page = new ChapterPage.Page_8_5_Process_StorySetting_12_3_1_0(_storedParameterInputs);

            page.ClientOrServerInstance = _storedClientOrServerInstance;

            page.DirectorOrExperienceRequestHandler = _storedBusinessDirectorOrExperienceRequestHandler;
            page.ExtraData = _storedExtraData;

            page.MasterStorer = _storedCentralizedStorer;
            page.MasterDisturber = _storedCentralizedDisturber;
            page.MasterSensor = _storedCentralizedSensor;

            page.StorylineDetails_Parameters = _storedStorylineDetails_Parameters;

            _storedStorylineDetails = await page.Action().ConfigureAwait(true);

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN process response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(_storedStorylineDetails).ConfigureAwait(true);

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

            return await Task.FromResult<JObject>(_storedStorylineDetails).ConfigureAwait(true);

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

            return await Task.FromResult<JObject>(_storedStorylineDetails).ConfigureAwait(true);

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

            return await Task.FromResult<JObject>(_storedStorylineDetails).ConfigureAwait(true);

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

            return await Task.FromResult<JObject>(_storedStorylineDetails).ConfigureAwait(true);

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

            return await Task.FromResult<JObject>(_storedStorylineDetails).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        //Page 1-7
        public override async Task<JObject> Action_7_Process_StoryResources()
        {
            #region 1. INPUTS


            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            #region RETURN process response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(_storedStorylineDetails).ConfigureAwait(true);

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

            return await Task.FromResult<JObject>(_storedStorylineDetails).ConfigureAwait(true);

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

            return await Task.FromResult<JObject>(_storedStorylineDetails).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        //Page 1-10
        public override async Task<JObject> Action_10_End_Process()
        {
            #region 1. INPUTS

            #region DEFINE data response

            JObject storedDataResponse = null;

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONFIGURING web routes");
            //storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", _storedClientOrServerInstance["storedActionName"]);
            //storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", _storedClientOrServerInstance["storedAppSettings"]);
            //storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
            //storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.cs");
            //storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Action -> Action_5_Process_StorySetting");

            #endregion

            #endregion

            #region 2. PROCESS

            try
            {
                storedDataResponse = StorylineDetails; //await Factory_Action_10_End_Process();
            }
            catch
            {
                throw; //Let "Startup.cs -> Startup_Controller" handle the exception.
            }

            #endregion

            #region 3. OUTPUT

            #region RETURN http response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(storedDataResponse).ConfigureAwait(true);

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

        //Page 1-7
        private async Task<JObject> Factory_Action_7_Process_StoryResources()
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
            #region 1. INPUTS

            #region DEFINE data response

            JObject storedDataResponse = null;

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONFIGURING web routes");
            //storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", _storedClientOrServerInstance["storedActionName"]);
            //storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", _storedClientOrServerInstance["storedAppSettings"]);
            //storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
            //storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0.cs");         
            //storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Action -> Factory_Action_10_End_Process -> Factory_Action_7_Process_StoryResources");

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE process factory

            try
            {
                #region IDEAL CASE - USE factory method

                if (_storedActionName.ToUpper() == Action_12_2_1_0._12_3_WEB_DEVELOPMENT_Server_Copy_Static_Files_1_0.ToUpper())
                {
                    //storedDataResponse = await Execute_Factory_Action_10_End_Process_TransportRequestToHandler();
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

            return await Task.FromResult<JObject>(storedDataResponse).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        #endregion

        #region C. Action Logic

        #endregion

        #endregion

        #endregion
    }

    #endregion
}
