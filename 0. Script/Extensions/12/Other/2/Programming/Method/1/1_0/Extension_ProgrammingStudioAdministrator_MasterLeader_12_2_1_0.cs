#region Imports

#region BaseDI

using BaseDI.Professional.Script.Programming.Poco_1;

#endregion

#region .Net Core

using Microsoft.Extensions.Configuration;

using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

#endregion 

#region 3rd Party Core

using Newtonsoft.Json.Linq;
using BaseDI.Professional.Script.Risk_Management.Extensions_0;

#endregion

#endregion

namespace BaseDI.Professional.Script.Programming.Extensions_1
{
    public static class Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0
    {
        //SETTINGS
        private static IConfiguration _storedAppSettings = null;

        //CLIENT/SERVER
        private static Dictionary<string, object> _storedClientOrServerInstance;

        //EXCEPTIONS
        private static Exception _storedExceptionDetails = null;

        //MISC
        private static ExtraData_12_2_1_0 _storedExtraData = null;

        #region JSON MANAGEMENT

        public static async Task<List<JToken>> Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS    

            #region VALIDATE input parameters

            Func<SingleParmPoco_12_2_1_0, Task<bool>> ValidateInputs = async (SingleParmPoco_12_2_1_0 parameterInputs) =>
            {
                #region 1. INPUTS

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

                IConfiguration storedAppSettings = (IConfiguration)storedClientOrServerInstance["parameterAppSettings"];

                #endregion

                #region MEMORIZE developer mode

                bool storedDeveloperMode = storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") ? storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") : false;

                SingleParmPoco_12_2_1_0 storedDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

                //REQUIRED
                storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", storedClientOrServerInstance["storedActionName"]);
                storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", storedClientOrServerInstance["storedAppSettings"]);
                storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", storedClientOrServerInstance);
                storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.ts");
                storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0 -> ValidateInputs");
                //storedDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALMiddleOfProcess", true);

                #endregion

                #endregion

                #region 2. PROCESS

                #region EXECUTE validation process

                #region IDEAL CASE - USE valid information

                if (parameterInputs.Parameters.Count() > 0)
                {
                    if (!parameterInputs.Parameters.ContainsKey("parameterAppSettings"))
                    {
                        storedMessage += "***parameterAppSettings*** cannot be blank or empty.\n"; ;
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterClientOrServerInstance"))
                    {
                        storedMessage += "***parameterClientOrServerInstance*** cannot be blank or empty.\n"; ;
                        storedProcessCheckPointHit = true;
                    }
                    else
                    {
                        if (parameterInputs.Parameters["parameterClientOrServerInstance"]["storedAppSettings"] == null)
                        {
                            storedMessage += "***parameterClientOrServerInstance*** must contain a key of ***storedAppSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.Add(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessCheckPointHit = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterFilterData"))
                    {
                        storedMessage += "***parameterFilterData*** cannot be blank or empty.\n"; ;
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterFilterKeyValuePairKey"))
                    {
                        storedMessage += "***parameterFilterKeyValuePairKey*** cannot be blank or empty.\n"; ;
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterFilterKeyValuePairValue"))
                    {
                        storedMessage += "***parameterFilterKeyValuePairValue*** cannot be blank or empty.\n"; ;
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterFilterReturnValueAsArray"))
                    {
                        storedMessage += "***parameterFilterReturnValueAsArray*** cannot be blank or empty.\n"; ;
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
                    #region EDGE CASE - USE blank return

                    return await Task.FromResult<bool>(false).ConfigureAwait(true);

                    #endregion                    
                }

                #endregion

                #endregion

                #endregion

                #region 3. OUTPUT

                #region RETURN validation passed

                #region IDEAL CASE - USE passed indicator

                return await Task.FromResult<bool>(true).ConfigureAwait(true);

                #endregion

                #endregion

                #endregion

            };

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            #endregion

            #region DEFINE data response

            List<JToken> storedDataResponse = new List<JToken>();

            #endregion

            #region DEFINE event handlers

            Func<JToken, Dictionary<string, string>, string, bool> ExecuteConversionRequest = null;

            #endregion

            #region DEFINE parameter inputs

            SingleParmPoco_12_2_1_0 storedParameterInputs = null;

            #endregion

            #region MEMORIZE clientOrServer instance

            _storedClientOrServerInstance = parameterInputs.Parameters["parameterClientOrServerInstance"];

            #endregion

            #region MEMORIZE app settings

            _storedAppSettings = (IConfiguration)_storedClientOrServerInstance["parameterAppSettings"];

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") ? _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") : false;

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONVERTING filtered dataset");
            storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", _storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", _storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0");
            //storedDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALMiddleOfProcess", true);

            #endregion

            #region MEMORIZE filter metadata

            JObject storedData = parameterInputs.Parameters["parameterFilterData"];

            string storedKeyValuePairKey = parameterInputs.Parameters["parameterFilterKeyValuePairKey"];
            string storedKeyValuePairValue = parameterInputs.Parameters["parameterFilterKeyValuePairValue"];

            bool storedReturnValueAsArray = parameterInputs.Parameters["parameterFilterReturnValueAsArray"];

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE conversion request

            #region IDEAL CASE - USE recursive filter

            if (storedData != null)
            {
                ExecuteConversionRequest = (JToken parameterToken, Dictionary<string, string> parameterNodes, string parameterParentLocation) =>
                {
                    if (parameterToken.HasValues)
                    {
                        foreach (JToken parameterTokenChild in parameterToken.Children())
                        {
                            if (parameterToken.Type == JTokenType.Property)
                            {
                                if (parameterParentLocation == "")
                                {
                                    parameterParentLocation = ((JProperty)parameterToken).Name;
                                }
                                else
                                {
                                    parameterParentLocation += "." + ((JProperty)parameterToken).Name;
                                }
                            }

                            ExecuteConversionRequest(parameterTokenChild, parameterNodes, parameterParentLocation);
                        }

                        // we are done parsing and this is a parent node
                        return true;
                    }
                    else
                    {
                        // leaf of the tree
                        if (parameterToken.ToString().ToUpper(CultureInfo.CurrentCulture) == storedKeyValuePairValue.ToUpper(CultureInfo.CurrentCulture))
                        {
                            if (!storedDataResponse.Contains(parameterToken))
                            {
                                storedDataResponse.Add(parameterToken);
                            }

                            return false;
                        }
                    };

                    return true;
                };

                ExecuteConversionRequest(storedData, null, "");
            }

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN converted data

            #region IDEAL CASE - USE json dataset

            return storedDataResponse;

            #endregion

            #endregion

            #endregion           
        }

        public static async Task<List<JToken>> Step_X_X_Framework_Convert_JsonDataSetToNodes_2_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS    

            #region VALIDATE input parameters

            Func<SingleParmPoco_12_2_1_0, Task<bool>> ValidateInputs = async (SingleParmPoco_12_2_1_0 parameterInputs) =>
            {
                #region 1. INPUTS

                #region DEFINE process checkpoint

                bool storedProcessCheckPointHit = false;

                #endregion

                #region DEFINE stored message

                string storedMessage = "";

                #endregion

                #endregion

                #region 2. PROCESS

                #region EXECUTE validation process

                #region IDEAL CASE - USE valid information

                if (parameterInputs.Parameters.Count() > 0)
                {
                    if (!parameterInputs.Parameters.ContainsKey("parameterAppSettings"))
                    {
                        storedMessage += "***parameterAppSettings*** cannot be blank or empty.\n"; ;
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterClientOrServerInstance"))
                    {
                        storedMessage += "***parameterClientOrServerInstance*** cannot be blank or empty.\n"; ;
                        storedProcessCheckPointHit = true;
                    }
                    else
                    {
                        if (parameterInputs.Parameters["parameterClientOrServerInstance"]["storedAppSettings"] == null)
                        {
                            storedMessage += "***parameterClientOrServerInstance*** must contain a key of ***storedAppSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.Add(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessCheckPointHit = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterFilterData"))
                    {
                        storedMessage += "***parameterFilterData*** cannot be blank or empty.\n"; ;
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterFilterKeyValuePairKey"))
                    {
                        storedMessage += "***parameterFilterKeyValuePairKey*** cannot be blank or empty.\n"; ;
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterFilterKeyValuePairValue"))
                    {
                        storedMessage += "***parameterFilterKeyValuePairValue*** cannot be blank or empty.\n"; ;
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterFilterReturnValueAsArray"))
                    {
                        storedMessage += "***parameterFilterReturnValueAsArray*** cannot be blank or empty.\n"; ;
                        storedProcessCheckPointHit = true;
                    }

                    if (storedProcessCheckPointHit)
                    {
                        #region EDGE CASE - USE exception handler

                        Console.WriteLine("\n***LEAKY PIPE*** PARSING parameter values failed!\n\n" + storedMessage);

                        #endregion
                    }
                }
                else
                {
                    #region EDGE CASE - USE blank return

                    return await Task.FromResult<bool>(false).ConfigureAwait(true);

                    #endregion                    
                }

                #endregion

                #endregion

                #endregion

                #region 3. OUTPUT

                #region RETURN validation passed

                #region IDEAL CASE - USE passed indicator

                return await Task.FromResult<bool>(true).ConfigureAwait(true);

                #endregion

                #endregion

                #endregion

            };

            #endregion

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            #region DEFINE data response

            List<JToken> storedDataResponse = new List<JToken>();

            #endregion

            #region DEFINE event handlers

            Func<JToken, Action<JObject>, JToken> ExecuteConversionRequest = null;

            #endregion

            #region DEFINE parameter inputs

            SingleParmPoco_12_2_1_0 storedParameterInputs = null;

            #endregion

            #region MEMORIZE clientOrServer instance

            _storedClientOrServerInstance = parameterInputs.Parameters["parameterClientOrServerInstance"];

            #endregion

            #region MEMORIZE app settings

            _storedAppSettings = (IConfiguration)_storedClientOrServerInstance["parameterAppSettings"];

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") ? _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") : false;

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONVERTING filtered dataset");
            storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", _storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", _storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_X_X_Framework_Convert_JsonDataSetToNodes_2_0");
            //storedDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALMiddleOfProcess", true);

            #endregion

            #region MEMORIZE filter metadata

            JObject storedData = parameterInputs.Parameters["parameterFilterData"];

            string storedKeyValuePairKey = parameterInputs.Parameters["parameterFilterKeyValuePairKey"];
            string storedKeyValuePairValue = parameterInputs.Parameters["parameterFilterKeyValuePairValue"];

            bool storedReturnValueAsArray = parameterInputs.Parameters["parameterFilterReturnValueAsArray"];

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE conversion request

            if (storedData != null)
            {
                ExecuteConversionRequest = (JToken parameterNode, Action<JObject> parameterAction) =>
                {
                    if (parameterNode.Type == JTokenType.Object)
                    {
                        parameterAction((JObject)parameterNode);

                        foreach (JProperty child in parameterNode.Children<JProperty>())
                        {
                            ExecuteConversionRequest(child.Value, parameterAction);
                        }
                    }
                    else if (parameterNode.Type == JTokenType.Array)
                    {
                        foreach (JToken child in parameterNode.Children())
                        {
                            ExecuteConversionRequest(child, parameterAction);
                        }
                    }

                    return null;
                };

                ExecuteConversionRequest(storedData, n =>
                {
                    JToken token = n[storedKeyValuePairKey];

                    if (token != null && token.Type == JTokenType.String)
                    {
                        if (storedKeyValuePairValue == token.Value<string>())
                        {
                            storedDataResponse.Add(token);
                        }
                    }
                });
            }

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN converted data

            #region IDEAL CASE - USE json dataset

            return storedDataResponse;

            #endregion

            #endregion

            #endregion
        }

        public static async Task<string> Step_X_X_Framework_Output_JsonMistakeNode_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS

            #region VALIDATE input parameters

            Func<SingleParmPoco_12_2_1_0, Task<bool>> ValidateInputs = async (SingleParmPoco_12_2_1_0 parameterInputs) =>
            {
                #region 1. INPUTS

                #region DEFINE process checkpoint

                bool storedProcessCheckPointHit = false;

                #endregion

                #region DEFINE stored message

                string storedMessage = "";

                #endregion

                #endregion

                #region 2. PROCESS

                #region EXECUTE validation process

                #region IDEAL CASE - USE valid information

                if (parameterInputs != null || parameterInputs.Parameters != null)
                {

                    if (!parameterInputs.Parameters.ContainsKey("parameter3WordDescription"))
                    {
                        storedMessage += "***parameter3WordDescription*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterActionName"))
                    {
                        storedMessage += "***parameterActionName*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterAppSettings"))
                    {
                        storedMessage += "***parameterAppSettings*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterClientOrServerInstance"))
                    {
                        storedMessage += "***parameterClientOrServerInstance*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }
                    else
                    {
                        if (parameterInputs.Parameters["parameterClientOrServerInstance"]["storedAppSettings"] == null)
                        {
                            storedMessage += "***parameterClientOrServerInstance*** must contain a key of ***storedAppSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.Add(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                                                storedProcessCheckPointHit = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterFileName"))
                    {
                        storedMessage += "***parameterFileName*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterMethodName"))
                    {
                        storedMessage += "***parameterMethodName*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterMistakeTemplate"))
                    {
                        storedMessage += "***parameterMistakeTemplate*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (storedProcessCheckPointHit)
                    {
                        #region EDGE CASE - USE exception handler

                        Console.WriteLine("\n***LEAKY PIPE*** PARSING parameter values failed!\n\n" + storedMessage);

                        #endregion
                    }
                }
                else
                {
                    #region EDGE CASE - USE blank return

                    return await Task.FromResult<bool>(true).ConfigureAwait(true);

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

            #region DEFINE developer mode

            string storedOPTIONALAccountingCostType = "";
            bool storedOPTIONALBeginOfProcess = false;
            bool storedOPTIONALMiddleOfProcess = false;
            bool storedOPTIONALEndOfProcess = false;
            bool storedOPTIONALMasterLeaderIsSecondStep = false;

            bool storedMistake = false;

            #endregion

            #region DEFINE data response

            string storedDataResponse = null;

            #endregion

            #region MEMORIZE action name

            string storedActionName = parameterInputs.Parameters["parameterActionName"];

            #endregion

            #region MEMORIZE clientOrServer instance

            _storedClientOrServerInstance = parameterInputs.Parameters["parameterClientOrServerInstance"];

            #endregion

            #region MEMORIZE app settings

            _storedAppSettings = (IConfiguration)_storedClientOrServerInstance["parameterAppSettings"];

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONVERTING data into mistake");
            storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", _storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", _storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_X_X_Framework_Output_JsonMistakeNode_1_0");

            storedDeveloperLoggingInputs.Parameters.Add("parameterMessageType", "Logging"); //Values = Logging or Mistake

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALAccountingCostType", "Storage"); //Values = Bandwidth, CPU, Memory, Setup, Storage, Uptime
            //storedDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALBeginOfProcess", true);
            //storedDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALMiddleOfProcess", true);
            //storedDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALEndOfProcess", true);
            //storedDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALRunSilentMode", true);

            #endregion

            #region MEMORIZE mistake details

            string storedMistakeDescription = parameterInputs.Parameters["parameter3WordDescription"];
            string storedMistakeFileName = parameterInputs.Parameters["parameterFileName"];
            string storedMistakeMethodName = parameterInputs.Parameters["parameterMethodName"];

            string storedMistakeTemplate = parameterInputs.Parameters["parameterMistakeTemplate"];

            string storedMistakeBody = "{'baseDIMistakes': [{ 'mistake': { 'metadata': [{ 'calledByEntryPointName': '{calledByEntryPointName}' }, { 'calledByMethodName': '{calledByMethodName}' }, { 'calledByMethodReason': '{calledByMethodReason}' }, { 'item': {{item}} }] }}]}";
            string storedMistakeItem = "'details': [{details}]";

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE mistake creation

            #region IDEAL CASE - USE baseDi template

            Func<string, string, dynamic, string, string, string, Task<string>> ExecuteConversionRequest = async (string parameterMistakeTemplate, string parameterMistakeBody, dynamic parameterMistakeItem, string parameterMistakeFileName, string parameterMistakeMethodName, string parameter3WordDescription) =>
            {
                parameterMistakeBody = parameterMistakeBody.Replace("{item}", parameterMistakeItem);

                parameterMistakeBody = parameterMistakeBody.Replace("{calledByEntryPointName}", parameterMistakeFileName);
                parameterMistakeBody = parameterMistakeBody.Replace("{calledByMethodName}", parameterMistakeMethodName);
                parameterMistakeBody = parameterMistakeBody.Replace("{calledByMethodReason}", parameter3WordDescription);

                parameterMistakeBody = parameterMistakeBody.Replace("{details}", parameterMistakeTemplate);

                return parameterMistakeBody;
            };

            storedDataResponse = await ExecuteConversionRequest(storedMistakeTemplate, storedMistakeBody, storedMistakeItem, storedMistakeFileName, storedMistakeMethodName, storedMistakeDescription);

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN converted data

            #region IDEAL CASE - USE json dataset

            return storedDataResponse;

            #endregion

            #endregion

            #endregion
        }

        public static async Task<string> Step_X_X_Framework_Output_JsonObservationNode_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS

            #region VALIDATE input parameters

            Func<SingleParmPoco_12_2_1_0, Task<bool>> ValidateInputs = async (SingleParmPoco_12_2_1_0 parameterInputs) => {
                #region 1. INPUTS

                #region DEFINE process checkpoint

                bool storedProcessCheckPointHit = false;

                #endregion

                #region DEFINE stored message

                string storedMessage = "";

                #endregion

                #endregion

                #region 2. PROCESS

                #region EXECUTE validation process

                #region IDEAL CASE - USE valid information

                if (parameterInputs != null || parameterInputs.Parameters != null)
                {
                    if (!parameterInputs.Parameters.ContainsKey("parameter3WordDescription"))
                    {
                        storedMessage += "***parameter3WordDescription*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterActionName"))
                    {
                        storedMessage += "***parameterActionName*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterAppSettings"))
                    {
                        storedMessage += "***parameterAppSettings*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterClientOrServerInstance"))
                    {
                        storedMessage += "***parameterClientOrServerInstance*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }
                    else
                    {
                        if (parameterInputs.Parameters["parameterClientOrServerInstance"]["storedAppSettings"] == null)
                        {
                            storedMessage += "***parameterClientOrServerInstance*** must contain a key of ***storedAppSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.Add(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterObservationFileName"))
                    {
                        storedMessage += "***parameterObservationFileName*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterObservationMethodName"))
                    {
                        storedMessage += "***parameterObservationMethodName*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterObservationPresentationTemplate"))
                    {
                        storedMessage += "***parameterObservationPresentationTemplate*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterObservationBusinessTemplate"))
                    {
                        storedMessage += "***parameterObservationBusinessTemplate*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterObservationServiceTemplate"))
                    {
                        storedMessage += "***parameterObservationServiceTemplate*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterObservationSecurityTemplate"))
                    {
                        storedMessage += "***parameterObservationSecurityTemplate*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterObservationDataTemplate"))
                    {
                        storedMessage += "***parameterObservationDataTemplate*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (storedProcessCheckPointHit)
                    {
                        #region EDGE CASE - USE exception handler

                        Console.WriteLine("\n***LEAKY PIPE*** PARSING parameter values failed!\n\n" + storedMessage);

                        #endregion
                    }
                }
                else
                {
                    #region EDGE CASE - USE blank return

                    return await Task.FromResult<bool>(false).ConfigureAwait(true);

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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            #endregion

            #region DEFINE developer mode

            string storedOPTIONALAccountingCostType = "";
            bool storedOPTIONALBeginOfProcess = false;
            bool storedOPTIONALMiddleOfProcess = false;
            bool storedOPTIONALEndOfProcess = false;
            bool storedOPTIONALMasterLeaderIsSecondStep = false;

            bool storedMistake = false;

            #endregion

            #region DEFINE data response

            string storedDataResponse = null;

            #endregion

            #region MEMORIZE action name

            string storedActionName = parameterInputs.Parameters["parameterActionName"];

            #endregion

            #region MEMORIZE clientOrServer instance

            _storedClientOrServerInstance = parameterInputs.Parameters["parameterClientOrServerInstance"];

            #endregion

            #region MEMORIZE app settings

            _storedAppSettings = (IConfiguration)_storedClientOrServerInstance["parameterAppSettings"];

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONVERTING data into observation");
            storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", _storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", _storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_X_X_Framework_Output_JsonObservationNode_1_0");

            storedDeveloperLoggingInputs.Parameters.Add("parameterMessageType", "Logging"); //Values = Logging or Mistake

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALAccountingCostType", "Storage"); //Values = Bandwidth, CPU, Memory, Setup, Storage, Uptime
            //storedDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALBeginOfProcess", true);
            //storedDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALMiddleOfProcess", true);
            //storedDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALEndOfProcess", true);
            //storedDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALRunSilentMode", true);

            #endregion

            #region MEMORIZE observation details

            string storedObservationDescription = parameterInputs.Parameters["parameter3WordDescription"];
            string storedObservationFileName = parameterInputs.Parameters["parameterObservationFileName"];
            string storedObservationMethodName = parameterInputs.Parameters["parameterObservationMethodName"];
            
            string storedObservationTemplate = parameterInputs.Parameters["parameterObservationTemplate"];
            
            string storedObservationBody = @"{'baseDIObservations': [{
                                                'observation':
                                                {
                                                    'metadata': [{'calledByEntryPointName':'{calledByEntryPointName}'},{'calledByMethodName':'{calledByMethodName}'},{'calledByMethodReason':'{calledByMethodReason}'},{'item':{{item}}}]
                                                }
                                            }]
                                         }";
            string storedObservationItem = @"'presentation': [{presentation}],
                                             'business': [{business}],
                                             'service': [{service}],
                                             'security': [{security}],
                                             'data': [{data}]";

            string storedObservationPresentationTemplate = parameterInputs.Parameters["parameterObservationPresentationTemplate"];
            string storedObservationBusinessTemplate = parameterInputs.Parameters["parameterObservationBusinessTemplate"];
            string storedObservationServiceTemplate = parameterInputs.Parameters["parameterObservationServiceTemplate"];
            string storedObservationSecurityTemplate = parameterInputs.Parameters["parameterObservationSecurityTemplate"];
            string storedObservationDataTemplate = parameterInputs.Parameters["parameterObservationDataTemplate"];

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE obversation creation

            #region IDEAL CASE - USE baseDi template

            Func<string, string, dynamic, string, string, string, string, string, string, string, string, Task<string>> ExecuteConversionRequest = async(string parameterObservationTemplate, string parameterObservationBody, dynamic parameterObservationItem, string parameterObservationFileName, string parameterObservationMethodName, string parameter3WordDescription, string parameterObservationPresentationTemplate, string parameterObservationBusinessTemplate, string parameterObservationServiceTemplate, string parameterObservationSecurityTemplate, string parameterObservationDataTemplate) => {
                parameterObservationBody = parameterObservationBody.Replace("{item}", parameterObservationItem);

                parameterObservationBody = parameterObservationBody.Replace("{calledByEntryPointName}", parameterObservationFileName);
                parameterObservationBody = parameterObservationBody.Replace("{calledByMethodName}", parameterObservationMethodName);
                parameterObservationBody = parameterObservationBody.Replace("{calledByMethodReason}", parameter3WordDescription);

                parameterObservationBody = parameterObservationBody.Replace("{presentation}", parameterObservationPresentationTemplate);
                parameterObservationBody = parameterObservationBody.Replace("{business}", parameterObservationBusinessTemplate);
                parameterObservationBody = parameterObservationBody.Replace("{service}", parameterObservationServiceTemplate);
                parameterObservationBody = parameterObservationBody.Replace("{security}", parameterObservationSecurityTemplate);
                parameterObservationBody = parameterObservationBody.Replace("{data}", parameterObservationDataTemplate);

                return parameterObservationBody;
            };

            storedDataResponse = await ExecuteConversionRequest(storedObservationTemplate, storedObservationBody, storedObservationItem, storedObservationFileName, storedObservationMethodName, storedObservationDescription, storedObservationPresentationTemplate, storedObservationBusinessTemplate, storedObservationServiceTemplate, storedObservationSecurityTemplate, storedObservationDataTemplate);
            
            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN converted data

            #region IDEAL CASE - USE json dataset

            return storedDataResponse;

            #endregion

            #endregion

            #endregion
        }

        #endregion
    }
}
