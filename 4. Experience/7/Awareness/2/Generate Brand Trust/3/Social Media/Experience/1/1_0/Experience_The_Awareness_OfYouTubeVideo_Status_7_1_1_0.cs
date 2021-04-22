using System;
using Newtonsoft.Json.Linq;
using System.Threading.Tasks;
using BaseDI.Professional.Script.Programming.Abstract_1;
using BaseDI.Professional.Script.Risk_Management.Extensions_0;
using BaseDI.Professional.Script.Programming.Poco_1;
using Microsoft.Extensions.Configuration;
using BaseDI.Professional.Script.Web_Development.Extensions_13;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using BaseDI.Professional.Script.Programming.Repository_1;

namespace BaseDI.Professional.Experience_
{
    public class Experience_The_Awareness_OfYouTubeVideo_Status_7_1_1_0 : aClass_Programming_ScriptExperience_BuilderPattern_12_2_1_0
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

        Experience_The_Movement_FromFacebookPage_DataTransfer_2_3_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {

            #region 1. INPUTS

            #region MEMORIZE input parameters

            _storedParameterInputs = parameterInputs;

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

                IConfiguration storedAppSettings = (IConfiguration)storedClientOrServerInstance["appSettings"];

                #endregion

                #region MEMORIZE developer mode

                bool storedDeveloperMode = storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") ? storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") : false;

                SingleParmPoco_12_2_1_0 storedDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

                //REQUIRED
                storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "EXECUTING request handler");
                storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", storedClientOrServerInstance["actionName"]);
                storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", storedClientOrServerInstance["appSettings"]);
                storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", storedClientOrServerInstance);
                storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Experience_The_Movement_FromFacebookPage_DataTransfer_2_3_1_0.cs");
                storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Action.ValidateInputs()");

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
                        if (parameterInputs.Parameters["parameterClientOrServerInstance"]["appSettings"] == null)
                        {
                            storedMessage += "***parameterClientOrServerInstance*** must contain a key of ***appSettings***.";
                            storedProcessCheckPointHit = true;
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

            Use_DesignPattern_Builder_Experience_2_3_1_0 storedRequestHandler_UsingBuilderPattern = null;

            #endregion

            #region MEMORIZE clientOrServer instance

            _storedClientOrServerInstance = _storedParameterInputs.Parameters["parameterClientOrServerInstance"];

            #endregion

            #region MEMORIZE app settings

            _storedAppSettings = (IConfiguration)_storedClientOrServerInstance["appSettings"];

            #endregion

            #region MEMORIZE centralized processes handlers

            _storedCentralizedDisturber = _storedParameterInputs.Parameters["parameterCentralizedDisturber"];
            _storedCentralizedSensor = _storedParameterInputs.Parameters["parameterCentralizedSensor"];
            _storedCentralizedStorer = _storedParameterInputs.Parameters["parameterCentralizedStorer"];

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingStartUpProcessInputs = (_storedParameterInputs.Parameters["parameterExtraData"]?.KeyValuePairs?["storedDeveloperLoggingInputs"] ? _storedParameterInputs.Parameters["parameterExtraData"]?.KeyValuePairs?["storedDeveloperLoggingInputs"] : null);

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "EXECUTING request handler");
            storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", _storedClientOrServerInstance["actionName"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", _storedClientOrServerInstance["appSettings"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Action");

            //OPTIONAL
            storedDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALMiddleOfProcess", true);

            #endregion

            #region MEMORIZE request details

            string storedClientRequestByName = _storedParameterInputs.Parameters["parameterClientRequestByName"];
            string storedClientRequestByNameParameters = _storedParameterInputs.Parameters["parameterClientRequestByNameParameters"];

            string storedSystemRequestByName = _storedParameterInputs.Parameters["parameterSystemRequestByName"] ? _storedParameterInputs.Parameters["parameterSystemRequestByName"] : "";

            _storedRequestName = storedClientRequestByName;

            #endregion

            #region MEMORIZE extra data

            _storedExtraData = _storedParameterInputs.Parameters["parameterExtraData"] ? _storedParameterInputs.Parameters["parameterExtraData"] : null;

            #endregion

            #region MEMORIZE storyline details

            _storedStorylineDetails = _storedParameterInputs.Parameters["parameterStorylineDetails"];
            _storedStorylineDetails_Parameters = _storedParameterInputs.Parameters["parameterStorylineDetails_Parameters"]s;

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
                storedRequestHandler_UsingBuilderPattern = new Use_DesignPattern_Builder_Experience_2_3_1_0(_storedParameterInputs);

                StorylineDetails = await storedRequestHandler_UsingBuilderPattern.Action();

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
        private IConfiguration _storedAppSettings;

        //CLIENT/SERVER
        internal Dictionary<string, object> _storedClientOrServerInstance;

        //DATASETS
        internal JObject _storedStorylineDetails;
        internal JObject _storedStorylineDetails_Parameters;

        internal aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> _storedRepository;

        //MISC
        internal ExtraData_12_2_1_0 _storedExtraData;

        //PLUMBING
        private SingleParmPoco_12_2_1_0 _storedParameterInputs;

        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedStorer;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _stored_CentralizedDisturber;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _stored_CentralizedSensor;

        internal aClass_Programming_ScriptRoutable_12_2_1_0 _stored_ExperienceRequestHandler;

        #endregion

        #region 2. Ready

        internal Use_DesignPattern_Builder_Experience_12_3_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS

            #region MEMORIZE app settings

            _storedAppSettings = parameterClientORserverInstance["appSettings"] as IConfiguration;

            #endregion

            #region MEMORIZE clientOrServer instance

            _storedClientOrServerInstance = parameterClientORserverInstance;

            #endregion

            #region MEMORIZE centralized processes 

            _stored_CentralizedDisturber = parameterCentralizedDisturber;
            _stored_CentralizedSensor = parameterCentralizedSensor;
            _storedCentralizedStorer = parameterCentralizedStorer;

            #endregion

            #region MEMORIZE data stragety

            _storedRepository = parameterDataRepository;

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #region MEMORIZE director request handler

            _stored_ExperienceRequestHandler = parameter_ExperienceRequestHandler;

            #endregion

            #region MEMORIZE extra data

            _storedExtraData = parameterExtraData;

            #endregion

            #region MEMORIZE request details

            _stored_ExperienceRequestHandler = parameter_ExperienceRequestHandler;

            _storedParameterInputs = parameterInputs;

            #endregion

            #region MEMORIZE storyline details

            _storedStorylineDetails = parameterStorylineDetails;
            _storedStorylineDetails_Parameters = parameterStorylineDetails_Parameters;

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


            #endregion

            #region 2. PROCESS

            #region ARRANGE execution order

            #region IDEAL CASE - USE builder pattern

            var builder = new Implement_DesignPattern_Builder_Experience_2_3_1_0(_storedParameterInputs);

            _storedStorylineDetails = await builder.Action_1_Begin_Process().ConfigureAwait(true);

            _storedStorylineDetails = await builder.Action_2_Validate_Process().ConfigureAwait(true);

            _storedStorylineDetails = await builder.Action_3_Process_StoryAuthor().ConfigureAwait(true);
            _storedStorylineDetails = await builder.Action_4_Process_StoryCharacters().ConfigureAwait(true);
            _storedStorylineDetails = await builder.Action_5_Process_StorySetting().ConfigureAwait(true);
            _storedStorylineDetails = await builder.Action_6_Process_StoryExperiences().ConfigureAwait(true);
            _storedStorylineDetails = await builder.Action_7_Process_StoryResources().ConfigureAwait(true);

            _storedStorylineDetails = await builder.Action_8_Process_CRUD().ConfigureAwait(true);

            _storedStorylineDetails = await builder.Action_9_Verify_Process().ConfigureAwait(true);

            _storedStorylineDetails = await builder.Action_10_End_Process().ConfigureAwait(true);

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

    internal class Implement_DesignPattern_Builder_Experience_2_3_1_0 : aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>>
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
        private HttpRequest _storedServerHTTPRequestInstance = null;

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

        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedDisturber;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedSensor;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedStorer;

        private SingleParmPoco_12_2_1_0 _storedParameterInputs;

        private string _storedRequestFileName = "Experience_The_Awareness_OfYouTubeVideo_Status_7_1_1_0";
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

            #region MEMORIZE clientOrServer instance

            _storedClientOrServerInstance = parameterInputs.Parameters["parameterClientOrServerInstance"];

            #endregion

            #region MEMORIZE action name

            _storedActionName = (string)_storedClientOrServerInstance["actionName"];

            #endregion

            #region MEMORIZE app settings

            _storedAppSettings = (IConfiguration)_storedClientOrServerInstance["appSettings"];

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

            try
            {
                #region IDEAL CASE - USE request parser


                #endregion
            }
            catch (Exception)
            {
                #region EDGE CASE - USE developer logger

                if (storedDeveloperMode)
                {
                    _storedClientOrServerInstance["processStepNumber"] = (int)_storedClientOrServerInstance["processStepNumber"] + 1;

                    Console.WriteLine("STEP " + _storedClientOrServerInstance["processStepNumber"] + " Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.cs -> Implement_DesignPattern_Builder_Experience_12_3_1_0 -> HandleDefaults -> [FAILED parsing a request [storedServerHTTPRequestInstance FROM storedClientOrServerInstance], [storedServerInstanceExperienceRequestHandler FROM storedClientOrServerInstance] or [stored_ExperienceRequestHandlerActionName FROM storedClientOrServerInstance] for ***Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0***");
                }

                #endregion

                throw;
            }

            #endregion

            #endregion

            #region 3. OUTPUT

            #endregion
        }

        #endregion

        #region 4. Action

        #region EXECUTE LOGIC INSTUCTIONS

        #region Action Methods

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
            //storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", _storedClientOrServerInstance["actionName"]);
            //storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", _storedClientOrServerInstance["appSettings"]);
            //storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
            //storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.ts");
            //storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_X_X_Framework_Control_ServerSetup_1_0");

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

        //Page 1-7
        public override async Task<JObject> Action_7_Process_StoryResources()
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
            //storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", _storedClientOrServerInstance["actionName"]);
            //storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", _storedClientOrServerInstance["appSettings"]);
            //storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
            //storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.ts");
            //storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_X_X_Framework_Control_ServerSetup_1_0");

            #endregion

            #endregion

            #region 2. PROCESS

            try
            {
                storedDataResponse = await Factory_Action_7_Process_StoryResources();
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

        #region Action Factories

        #region Factory_Action_5_Process_StorySetting

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
            //storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", _storedClientOrServerInstance["actionName"]);
            //storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", _storedClientOrServerInstance["appSettings"]);
            //storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
            //storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.ts");
            //storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_X_X_Framework_Control_ServerSetup_1_0");

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE process factory

            #region IDEAL CASE - USE factory method

            if (_storedActionName.ToUpper().Contains("PROCESSHTTPREQUEST_1_0"))
            {
                storedDataResponse = await Execute_Action_5_Process_StorySetting_ProcessHttpRequest();
            }

            #endregion

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

        #region Logic

        private async Task<JObject> Execute_Action_5_Process_StorySetting_ProcessHttpRequest()
        {
            #region 1. INPUTS

            #region DEFINE data response

            JObject storedDataResponse = null;

            #endregion

            #region DEFINE event handlers

            Func<string, string, ExtraData_12_2_1_0, JObject> Action = null;

            Func<JToken, JObject> Step_1_0_Framework_Control_ClientRequestToServer_1_0 = null;
            Func<object, string, string, object, object, HttpRequest, HttpResponse, string, JObject> Step_2_0_Framework_Output_ServerRequestToClient_1_0;

            #endregion

            #region DEFINE parameter inputs

            SingleParmPoco_12_2_1_0 storedParameterInputs = null;

            #endregion

            #region DEFINE route details

            JToken storedRouteListDetails = null;

            #endregion

            #region DEFINE server routing

            List<JToken> storedControllerRoutes = null;
            string storedControllerName = "";
            string storedControllerModelDataParameter = "";
            JObject storedControllerModelDataObject = null;
            JObject storedControllerModelDataRemote = null;

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONFIGURING web routes");
            storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", _storedClientOrServerInstance["actionName"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", _storedClientOrServerInstance["appSettings"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.cs");
            storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Action.Action_5_Process_StorySetting.Execute_Action_5_Process_StorySetting_ProcessHttpRequest");

            #endregion

            #endregion

            #region 2. PROCESS

            try
            {
                if (_storedServerHTTPRequestInstance != null && _storedServerHTTPRequestInstance is HttpRequest)
                {
                    #region SETUP http server

                    #region IDEAL CASE - USE baseDI pipeline

                    #region 3. OUTPUT server response                       

                    Step_2_0_Framework_Output_ServerRequestToClient_1_0 = (object parameterControllerRoute, string parameterControllerName, string parameterControllerModelDataParameter, object parameterControllerModelDataObject, object parameterControllerModelDataRemote, HttpRequest parameterRequest, HttpResponse parameterResponse, string parameterRequestActionVerb) =>
                    {
                        _storedClientOrServerInstance["actionName"] = Action_12_2_1_0._12_3_WEB_DEVELOPMENT_Server_Process_ROUTE_HTTP_Request_1_0;
                        _storedClientOrServerInstance["processStepNumber"] = 0;

                        #region EDGE CASE - USE developer logger
                        if (storedDeveloperMode)
                        {
                            storedDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALBeginOfProcess", true);
                            storedDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALMasterLeaderIsSecondStep", true);
                            storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "ROUTING information found - [" + parameterRequestActionVerb + ": '" + parameterRequest.Path);
                            storedDeveloperLoggingInputs.Parameters.Add("parameterMessageType", "Logging"); //Values = Logging or Mistake
                            storedDeveloperLoggingInputs.Parameters.Add("parameterStepNumberReplace", this._storedClientOrServerInstance["processStepNumber"]);

                            Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);

                            _storedExtraData.KeyValuePairs.Add("storedDeveloperLoggingInputs", storedDeveloperLoggingInputs);
                        }
                        #endregion

                        #region EDGE CASE - USE updates handler

                        StoredStartUpCallBack = (SingleParmPoco_12_2_1_0 parameterResponse) =>
                        {
                            Action("", "", null);
                            return _storedStorylineDetails;
                        };

                        #endregion

                        Action = (string parameterClientRequestByName, string parameterClientRequestByNameParameters, ExtraData_12_2_1_0 parameterExtraData) =>
                        {
                            return storedDataResponse = new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0())
                                .SetupStoryline(_storedClientOrServerInstance, null, null, parameterExtraData, "", parameterControllerName, parameterControllerModelDataParameter)
                                .Action().Result;
                        };

                        Action(parameterControllerName, parameterControllerModelDataParameter, _storedExtraData);

                        //OUTPUT http response
                        return storedDataResponse;
                    };

                    #endregion

                    #region 2. INPUT server details

                    Step_1_0_Framework_Control_ClientRequestToServer_1_0 = (JToken parameterRouteListDetails) =>
                    {
                        if (parameterRouteListDetails != null)
                        {
                            #region SEARCH routing list details

                            #region EDGE CASE - USE developer logger

                            if (storedDeveloperMode)
                            {
                                _storedClientOrServerInstance["processStepNumber"] = (int)_storedClientOrServerInstance["processStepNumber"] + 1;

                                Console.WriteLine("STEP " + _storedClientOrServerInstance["processStepNumber"] + " Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.cs -> Implement_DesignPattern_Builder_Chapter_12_2_Page_1_1_0 -> Action_5_Process_StorySetting - [BEGIN searching for route " + _storedServerRoutePath + " in storylineDetails DataSet]");
                            }

                            #endregion

                            foreach (var routeItemDetails in parameterRouteListDetails)
                            {
                                //STORE listing of routes
                                storedControllerRoutes = routeItemDetails.SelectToken("SetupItemTransportItemRoute.ControllerRoutes").Children().ToList(); //item.SetupItemTransportItemRoute.ControllerRoutes;

                                //STORE route controller name
                                storedControllerName = routeItemDetails.SelectToken("SetupItemTransportItemRoute.ControllerName").ToString();

                                //STORE route dataset details
                                storedControllerModelDataParameter = routeItemDetails.SelectToken("SetupItemTransportItemRoute.ModelDataParameter").ToString();
                                storedControllerModelDataObject = (JObject)routeItemDetails.SelectToken("SetupItemTransportItemRoute.ModelDataObject");

                                storedControllerModelDataRemote = (JObject)routeItemDetails.SelectToken("SetupItemTransportItemRoute.ModelDataRemote");

                                //DETERMINE if we have any routes
                                if (storedControllerRoutes != null && storedControllerRoutes.Count() > 0)
                                {
                                    var route = storedControllerRoutes.Where(r => r.ToString().ToUpper() == _storedServerRoutePath.ToUpper()).SingleOrDefault();

                                    if (route != null)
                                    {
                                        #region EDGE CASE - USE developer logger

                                        if (storedDeveloperMode)
                                        {
                                            _storedClientOrServerInstance["processStepNumber"] = (int)_storedClientOrServerInstance["processStepNumber"] + 1;

                                            Console.WriteLine("STEP " + _storedClientOrServerInstance["processStepNumber"] + " Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.cs -> Implement_DesignPattern_Builder_Chapter_12_2_Page_1_1_0 -> Action_5_Process_StorySetting - [SUCCESSFULLY found a route for " + _storedServerRoutePath + " in storylineDetails DataSet]");
                                        }

                                        #endregion

                                        return Step_2_0_Framework_Output_ServerRequestToClient_1_0(route.ToString(), storedControllerName, storedControllerModelDataParameter, storedControllerModelDataObject, storedControllerModelDataRemote, _storedServerHTTPRequestInstance, null, "GET");
                                    }
                                }
                                else
                                {
                                    #region EDGE CASE - USE exception message

                                    throw new Exception("[DISTURBANCE ISSUE] - Bug - Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.cs -> Implement_DesignPattern_Builder_Experience_12_3_1_0 -> Action_5_Process_StorySetting - BaseDI will not work without a routing details for a server side application . Please make sure that the information was added to the STORYLINEDETAILS object in the Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0 process!");

                                    #endregion
                                }
                            }

                            #endregion
                        }

                        return _storedStorylineDetails;
                    };

                    #endregion

                    #region 1. CONFIGURE server defaults

                    storedParameterInputs = new SingleParmPoco_12_2_1_0();

                    storedParameterInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
                    storedParameterInputs.Parameters.Add("parameterDirectorOrExperienceName", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0");
                    storedParameterInputs.Parameters.Add("parameterMasterStorer", _storedCentralizedStorer);
                    storedParameterInputs.Parameters.Add("parameterStorylineDetails", _storedStorylineDetails);

                    _storedServerInstance = Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.Step_X_X_Framework_Control_ServerSetup_1_0(storedParameterInputs);

                    storedRouteListDetails = _storedServerInstance.Result[_storedServerRequestRESTVerb.ToUpper()];

                    #endregion

                    #endregion

                    #endregion

                    #region START http server

                    #region IDEAL CASE - USE .netcore server

                    _storedStorylineDetails = Step_1_0_Framework_Control_ClientRequestToServer_1_0(storedRouteListDetails);

                    #endregion

                    #endregion
                }
            }
            catch
            {
                throw; //Let "Startup.cs -> Startup_Controller" handle the exception.
            }

            #endregion

            #region 3. OUTPUT

            #region RETURN http response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(_storedStorylineDetails).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        #endregion

        #endregion

        #region Factory_Action_7_Process_StoryResources

        private async Task<JObject> Factory_Action_7_Process_StoryResources()
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
            //storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", _storedClientOrServerInstance["actionName"]);
            //storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", _storedClientOrServerInstance["appSettings"]);
            //storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
            //storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.ts");
            //storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_X_X_Framework_Control_ServerSetup_1_0");

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE process factory

            #region IDEAL CASE - USE factory method

            if (_storedActionName.ToUpper().Contains("COPYSTATICFILES_1_0"))
            {
                storedDataResponse = await Execute_Factory_Action_7_Process_StoryResources_CopyStaticFiles();
            }

            if (_storedActionName.ToUpper().Contains("MAPSTATICFILES_1_0"))
            {
                storedDataResponse = await Execute_Factory_Action_7_Process_StoryResources_MapStaticFiles();
            }

            #endregion

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

        #region Logic

        private async Task<JObject> Execute_Factory_Action_7_Process_StoryResources_CopyStaticFiles()
        {
            #region 1. INPUTS

            #region DEFINE data response

            dynamic storedDataResponse = null;

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE copying static files

            #region IDEAL CASE - USE baseDI extension

            //Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.Step_X_X_Framework_Store_FilesToServer_1_0(_storedStorylineDetails);

            #endregion

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

        private async Task<JObject> Execute_Factory_Action_7_Process_StoryResources_MapStaticFiles()
        {
            #region 1. INPUTS

            #region DEFINE data response

            dynamic storedDataResponse = null;

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE mapping static files

            #region IDEAL CASE - USE baseDI extension

            storedDataResponse = null;//Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(_storedStorylineDetails, "searchkey", "SetupDetails_Servers_Server_1_0_ServerWeb_2_2_2_1_storedClientOrServerInstancermationSetupDetails", false).SingleOrDefault()?.Parent;

            if (storedDataResponse != null)
            {
                var setupItemEnvironmentClient = storedDataResponse?.Parent.value[0]._2_2_2_1_1_storedClientOrServerInstancermationSetupItem.value.SetupItemEnvironmentClient;

                storedDataResponse = _storedStorylineDetails;
                storedDataResponse.outputs[1].baseDIObservations.Add(setupItemEnvironmentClient);
            }

            #endregion

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

        #endregion

        #endregion

        #endregion

        #region NOT APART OF THE REQUEST PIPELINE AT THIS TIME

        #region Action Methods

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

        #endregion

        #region Action Factories

        #region Factory_Action_1_Begin_Process

        private async Task<JObject> Factory_Action_1_Begin_Process()
        {
            switch (_storedActionName.ToUpper())
            {
                default:
                    return await Task.FromResult<JObject>(null).ConfigureAwait(true);
            }
        }

        #region Logic

        #endregion

        #endregion

        #region Factory_Action_2_Validate_Process

        private async Task<JObject> Factory_Action_2_Validate_Process()
        {
            switch (_storedActionName.ToUpper())
            {
                default:
                    return await Task.FromResult<JObject>(null).ConfigureAwait(true);
            }
        }

        #region Logic

        #endregion

        #endregion

        #region Factory_Action_3_Process_StoryAuthor

        private async Task<JObject> Factory_Action_3_Process_StoryAuthor()
        {
            switch (_storedActionName.ToUpper())
            {
                default:
                    return await Task.FromResult<JObject>(null).ConfigureAwait(true);
            }
        }

        #region Logic

        #endregion

        #endregion

        #region Factory_Action_4_Process_StoryCharacters

        private async Task<JObject> Factory_Action_4_Process_StoryCharacters()
        {
            switch (_storedActionName.ToUpper())
            {
                default:
                    return await Task.FromResult<JObject>(null).ConfigureAwait(true);
            }
        }

        #region Logic

        #endregion

        #endregion

        #region Factory_Action_6_Process_StoryExperiences

        private async Task<JObject> Factory_Action_6_Process_StoryExperiences()
        {
            switch (_storedActionName.ToUpper())
            {
                default:
                    return await Task.FromResult<JObject>(null).ConfigureAwait(true);
            }
        }

        #region Logic

        #endregion

        #endregion

        #region Factory_Action_8_Process_CRUD

        private async Task<JObject> Factory_Action_8_Process_CRUD()
        {
            switch (_storedActionName.ToUpper())
            {
                default:
                    return await Task.FromResult<JObject>(null).ConfigureAwait(true);
            }
        }

        #region Logic

        #endregion

        #endregion

        #region Factory_Action_9_Verify_Process

        private async Task<JObject> Factory_Action_9_Verify_Process()
        {
            switch (_storedActionName.ToUpper())
            {
                default:
                    return await Task.FromResult<JObject>(null).ConfigureAwait(true);
            }
        }

        #region Logic

        #endregion

        #endregion

        #region Factory_Action_10_End_Process

        private async Task<JObject> Factory_Action_10_End_Process()
        {
            switch (_storedActionName.ToUpper())
            {
                default:
                    return await Task.FromResult<JObject>(null).ConfigureAwait(true);
            }
        }

        #region Logic

        #endregion

        #endregion

        #endregion

        #endregion

        #endregion
    }

    #endregion
}
