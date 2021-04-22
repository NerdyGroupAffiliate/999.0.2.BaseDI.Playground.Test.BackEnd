#region Imports

#region BaseDI

using BaseDI.Professional.Character_1;
using BaseDI.Professional.Script.Programming.Abstract_1;
using BaseDI.Professional.Script.Programming.Extensions_1;
using BaseDI.Professional.Script.Programming.Poco_1;
using BaseDI.Professional.Script.Programming.Repository_1;
using BaseDI.Professional.Script.Programming_1;
using BaseDI.Professional.State.Social_Media_;

#endregion

#region .Net Core

using Microsoft.Extensions.Configuration;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

#endregion 

#region 3rd Party Core

using Newtonsoft.Json.Linq;
using BaseDI.Professional.Script.Risk_Management.Extensions_0;

#endregion

#endregion

namespace BaseDI.Professional.Experience.Movement.Social_Media_1
{
    public class Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0 : aClass_Programming_ScriptExperience_BuilderPattern_12_2_1_0
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

        Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
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
                storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0.cs");
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

    internal class Use_DesignPattern_Builder_Experience_2_3_1_0
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
        private IContract_Programming_Repository_12_2_1_0 _storedRepository;
        private string _storedSystemRequestByName;

        #endregion

        #region 2. Ready

        Use_DesignPattern_Builder_Experience_2_3_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS

            #region MEMORIZE clientOrServer instance

            _storedClientOrServerInstance = parameterInputs.Parameters["parameterClientOrServerInstance"];

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

            _storedRepository = parameterInputs.Parameters["parameterRepository"];

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

            storedRequestHandler_UsingBuilderPattern = new Implement_DesignPattern_Builder_Experience_2_3_1_0(_storedParameterInputs);

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

            return storedDataResponse;

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
        private string _storedActionName = "";

        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedDisturber;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedSensor;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedStorer;

        private SingleParmPoco_12_2_1_0 _storedParameterInputs;

        private string _storedRequestName = "";
        private IContract_Programming_Repository_12_2_1_0 _storedRepository;
        private string _storedSystemRequestByName;

        #endregion

        #region 2. Ready

        internal Implement_DesignPattern_Builder_Experience_2_3_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
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

            _storedRepository = parameterInputs.Parameters["parameterRepository"];

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

        #region EXECUTE LOGIC INSTUCTIONS

        //Page 1-1
        public override async Task<JObject> Action_1_Begin_Process()
        {
            #region 1. INPUTS

            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            return await Task.FromResult<JObject>(null).ConfigureAwait(true);

            #endregion
        }

        #region Factories

        #region Action_1_Begin_Process

        private async Task<JObject> Action_1_Begin_Process_Factory()
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

        #region Action_2_Validate_Process

        private async Task<JObject> Action_2_Validate_Process_Factory()
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

        #region Action_3_Process_StoryAuthor

        private async Task<JObject> Action_3_Process_StoryAuthor_Factory()
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

        #region Action_4_Process_StoryCharacters

        private async Task<JObject> Action_4_Process_StoryCharacters_Factory()
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

        #region Action_5_Process_StorySetting

        private async Task<JObject> Action_5_Process_StorySetting_Factory()
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

        #region Action_6_Process_StoryExperiences

        private async Task<JObject> Action_6_Process_StoryExperiences_Factory()
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

        #region Action_7_Process_StoryResources

        private async Task<JObject> Action_7_Process_StoryResources_Factory()
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

        #region Action_8_Process_CRUD

        private async Task<JObject> Action_8_Process_CRUD_Factory()
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

        #region Action_9_Verify_Process

        private async Task<JObject> Action_9_Verify_Process_Factory()
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

        #region Action_10_End_Process

        private async Task<JObject> Action_10_End_Process_Factory()
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

        #region NOT APART OF THE REQUEST PIPELINE AT THIS TIME

        //Page 1-2
        public override async Task<JObject> Action_2_Validate_Process() {
            #region 1. INPUTS

            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            return await Task.FromResult<JObject>(null).ConfigureAwait(true);

            #endregion
        }

        //Page 1-3
        public override async Task<JObject> Action_3_Process_StoryAuthor() {
            #region 1. INPUTS

            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            return await Task.FromResult<JObject>(null).ConfigureAwait(true);

            #endregion
        }

        //Page 1-4
        public override async Task<JObject> Action_4_Process_StoryCharacters() {
            #region 1. INPUTS

            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            return await Task.FromResult<JObject>(null).ConfigureAwait(true);

            #endregion
        }

        //Page 1-5
        public override async Task<JObject> Action_5_Process_StorySetting() {
            #region 1. INPUTS

            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            return await Task.FromResult<JObject>(null).ConfigureAwait(true);

            #endregion
        }

        //Page 1-6
        public override async Task<JObject> Action_6_Process_StoryExperiences() {
            #region 1. INPUTS

            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            return await Task.FromResult<JObject>(null).ConfigureAwait(true);

            #endregion
        }

        //Page 1-7
        public override async Task<JObject> Action_7_Process_StoryResources() {
            #region 1. INPUTS

            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            return await Task.FromResult<JObject>(null).ConfigureAwait(true);

            #endregion
        }

        //Page 1-8
        public override async Task<JObject> Action_8_Process_CRUD() {
            #region 1. INPUTS

            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            return await Task.FromResult<JObject>(null).ConfigureAwait(true);

            #endregion
        }

        //Page 1-9
        public override async Task<JObject> Action_9_Verify_Process() {
            #region 1. INPUTS

            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            return await Task.FromResult<JObject>(null).ConfigureAwait(true);

            #endregion
        }

        //Page 1-10
        public override async Task<JObject> Action_10_End_Process() {
            #region 1. INPUTS

            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            return await Task.FromResult<JObject>(null).ConfigureAwait(true);

            #endregion
        }

        #endregion

        #endregion
    }

    #endregion
}
