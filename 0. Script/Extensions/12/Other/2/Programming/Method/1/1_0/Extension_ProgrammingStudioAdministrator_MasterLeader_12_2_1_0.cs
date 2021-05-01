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
        private static IConfiguration _storedProcessRequestSettings = null;

        //CLIENT/SERVER
        private static Dictionary<string, object> _storedProcessRequestTracker;

        //EXCEPTIONS
        private static Exception _storedProcessRequestMistake = null;

        //MISC
        private static ExtraData_12_2_1_0 _storedProcessRequestExtraData = null;

        #region JSON MANAGEMENT

        public static async Task<List<JToken>> Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS    

            #region VALIDATE input parameters

            Func<SingleParmPoco_12_2_1_0, Task<bool>> ValidateInputs = async (SingleParmPoco_12_2_1_0 parameterInputs) =>
            {
                #region 1. INPUTS

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

                IConfiguration storedProcessRequestSettings = (IConfiguration)storedProcessRequestTracker["parameterProcessRequestSettings"];

                #endregion

                #region MEMORIZE developer mode

                bool storedProcessRequestDeveloperMode = storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") ? storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") : false;

                SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

                //REQUIRED
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0 -> ValidateInputs");
                //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseOPTIONALMiddleOfProcess", true);

                #endregion

                #endregion

                #region 2. PROCESS

                #region EXECUTE validation process

                #region IDEAL CASE - USE valid information

                if (parameterInputs.Parameters.Count() > 0)
                {
                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestSettings"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestSettings*** cannot be blank or empty.\n"; ;
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestTracker"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestTracker*** cannot be blank or empty.\n"; ;
                        storedProcessRequestMistakeMade = true;
                    }
                    else
                    {
                        if (parameterInputs.Parameters["parameterProcessRequestTracker"]["storedProcessRequestSettings"] == null)
                        {
                            storedOutputResponseMessage += "***parameterProcessRequestTracker*** must contain a key of ***storedProcessRequestSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.Add(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterFilterData"))
                    {
                        storedOutputResponseMessage += "***parameterFilterData*** cannot be blank or empty.\n"; ;
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterFilterKeyValuePairKey"))
                    {
                        storedOutputResponseMessage += "***parameterFilterKeyValuePairKey*** cannot be blank or empty.\n"; ;
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterFilterKeyValuePairValue"))
                    {
                        storedOutputResponseMessage += "***parameterFilterKeyValuePairValue*** cannot be blank or empty.\n"; ;
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterFilterReturnValueAsArray"))
                    {
                        storedOutputResponseMessage += "***parameterFilterReturnValueAsArray*** cannot be blank or empty.\n"; ;
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

                            await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
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

            List<JToken> storedOutputResponseData = new List<JToken>();

            #endregion

            #region DEFINE event handlers

            Func<JToken, Dictionary<string, string>, string, bool> ExecuteConversionRequest = null;

            #endregion

            #region DEFINE parameter inputs

            SingleParmPoco_12_2_1_0 storedInputs = null;

            #endregion

            #region MEMORIZE control client server

            _storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

            #endregion

            #region MEMORIZE app settings

            _storedProcessRequestSettings = (IConfiguration)_storedProcessRequestTracker["parameterProcessRequestSettings"];

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") ? _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") : false;

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONVERTING filtered dataset");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", _storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseOPTIONALMiddleOfProcess", true);

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
                            if (!storedOutputResponseData.Contains(parameterToken))
                            {
                                storedOutputResponseData.Add(parameterToken);
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

            return storedOutputResponseData;

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
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "PREPARING logging request");
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.cs");
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Action -> ValidateInputs");

                #endregion

                #endregion

                #region 2. PROCESS

                #region EXECUTE validation process

                #region IDEAL CASE - USE valid information

                if (parameterInputs.Parameters.Count() > 0)
                {
                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestSettings"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestSettings*** cannot be blank or empty.\n"; ;
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestTracker"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestTracker*** cannot be blank or empty.\n"; ;
                        storedProcessRequestMistakeMade = true;
                    }
                    else
                    {
                        if (parameterInputs.Parameters["parameterProcessRequestTracker"]["storedProcessRequestSettings"] == null)
                        {
                            storedOutputResponseMessage += "***parameterProcessRequestTracker*** must contain a key of ***storedProcessRequestSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.Add(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterFilterData"))
                    {
                        storedOutputResponseMessage += "***parameterFilterData*** cannot be blank or empty.\n"; ;
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterFilterKeyValuePairKey"))
                    {
                        storedOutputResponseMessage += "***parameterFilterKeyValuePairKey*** cannot be blank or empty.\n"; ;
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterFilterKeyValuePairValue"))
                    {
                        storedOutputResponseMessage += "***parameterFilterKeyValuePairValue*** cannot be blank or empty.\n"; ;
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterFilterReturnValueAsArray"))
                    {
                        storedOutputResponseMessage += "***parameterFilterReturnValueAsArray*** cannot be blank or empty.\n"; ;
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

                            await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
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

            #endregion

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            #region DEFINE data response

            List<JToken> storedOutputResponseData = new List<JToken>();

            #endregion

            #region DEFINE event handlers

            Func<JToken, Action<JObject>, JToken> ExecuteConversionRequest = null;

            #endregion

            #region DEFINE parameter inputs

            SingleParmPoco_12_2_1_0 storedInputs = null;

            #endregion

            #region MEMORIZE control client server

            _storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

            #endregion

            #region MEMORIZE app settings

            _storedProcessRequestSettings = (IConfiguration)_storedProcessRequestTracker["parameterProcessRequestSettings"];

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") ? _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") : false;

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONVERTING filtered dataset");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", _storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_X_X_Framework_Convert_JsonDataSetToNodes_2_0");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseOPTIONALMiddleOfProcess", true);

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
                            storedOutputResponseData.Add(token);
                        }
                    }
                });
            }

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN converted data

            #region IDEAL CASE - USE json dataset

            return storedOutputResponseData;

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
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "PREPARING logging request");
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.cs");
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Action -> ValidateInputs");

                #endregion

                #endregion

                #region 2. PROCESS

                #region EXECUTE validation process

                #region IDEAL CASE - USE valid information

                if (parameterInputs != null || parameterInputs.Parameters != null)
                {

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequest3WordDescription"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequest3WordDescription*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterInputRequestActionName"))
                    {
                        storedOutputResponseMessage += "***parameterInputRequestActionName*** cannot be blank or empty.\n";
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
                            storedOutputResponseMessage += "***parameterProcessRequestTracker*** must contain a key of ***storedProcessRequestSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.Add(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                                                storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestFileName"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestFileName*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestMethodName"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestMethodName*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterMistakeTemplate"))
                    {
                        storedOutputResponseMessage += "***parameterMistakeTemplate*** cannot be blank or empty.\n";
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

                            await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
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

            string storedOutputResponseOPTIONALAccountingCostType = "";
            bool storedOutputResponseOPTIONALBeginOfProcess = false;
            bool storedOutputResponseOPTIONALMiddleOfProcess = false;
            bool storedOutputResponseOPTIONALEndOfProcess = false;
            bool storedOutputResponseOPTIONALMasterLeaderIsSecondStep = false;

            bool storedOutputResponseMistake = false;

            #endregion

            #region DEFINE data response

            string storedOutputResponseData = null;

            #endregion

            #region MEMORIZE action name

            string storedInputRequestActionName = parameterInputs.Parameters["parameterInputRequestActionName"];

            #endregion

            #region MEMORIZE control client server

            _storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

            #endregion

            #region MEMORIZE app settings

            _storedProcessRequestSettings = (IConfiguration)_storedProcessRequestTracker["parameterProcessRequestSettings"];

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONVERTING data into mistake");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", _storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_X_X_Framework_Output_JsonMistakeNode_1_0");

            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseMessageType", "Logging"); //Values = Logging or Mistake

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseOPTIONALAccountingCostType", "Storage"); //Values = Bandwidth, CPU, Memory, Setup, Storage, Uptime
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseOPTIONALBeginOfProcess", true);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseOPTIONALMiddleOfProcess", true);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseOPTIONALEndOfProcess", true);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALRunSilentMode", true);

            #endregion

            #region MEMORIZE mistake details

            string storedMistakeDescription = parameterInputs.Parameters["parameterProcessRequest3WordDescription"];
            string storedMistakeFileName = parameterInputs.Parameters["parameterProcessRequestFileName"];
            string storedMistakeMethodName = parameterInputs.Parameters["parameterProcessRequestMethodName"];

            string storedMistakeTemplate = parameterInputs.Parameters["parameterMistakeTemplate"];

            string storedMistakeBody = "{'baseDIMistakes': [{ 'mistake': { 'metadata': [{ 'calledByEntryPointName': '{calledByEntryPointName}' }, { 'calledByMethodName': '{calledByMethodName}' }, { 'calledByMethodReason': '{calledByMethodReason}' }, { 'item': {{item}} }] }}]}";
            string storedMistakeItem = "'details': [{details}]";

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE mistake creation

            #region IDEAL CASE - USE baseDi template

            Func<string, string, dynamic, string, string, string, Task<string>> ExecuteConversionRequest = async (string parameterMistakeTemplate, string parameterMistakeBody, dynamic parameterMistakeItem, string parameterMistakeFileName, string parameterMistakeMethodName, string parameterProcessRequest3WordDescription) =>
            {
                parameterMistakeBody = parameterMistakeBody.Replace("{item}", parameterMistakeItem);

                parameterMistakeBody = parameterMistakeBody.Replace("{calledByEntryPointName}", parameterMistakeFileName);
                parameterMistakeBody = parameterMistakeBody.Replace("{calledByMethodName}", parameterMistakeMethodName);
                parameterMistakeBody = parameterMistakeBody.Replace("{calledByMethodReason}", parameterProcessRequest3WordDescription);

                parameterMistakeBody = parameterMistakeBody.Replace("{details}", parameterMistakeTemplate);

                return parameterMistakeBody;
            };

            storedOutputResponseData = await ExecuteConversionRequest(storedMistakeTemplate, storedMistakeBody, storedMistakeItem, storedMistakeFileName, storedMistakeMethodName, storedMistakeDescription);

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN converted data

            #region IDEAL CASE - USE json dataset

            return storedOutputResponseData;

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
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "PREPARING logging request");
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.cs");
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Action -> ValidateInputs");

                #endregion

                #endregion

                #region 2. PROCESS

                #region EXECUTE validation process

                #region IDEAL CASE - USE valid information

                if (parameterInputs != null || parameterInputs.Parameters != null)
                {
                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequest3WordDescription"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequest3WordDescription*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterInputRequestActionName"))
                    {
                        storedOutputResponseMessage += "***parameterInputRequestActionName*** cannot be blank or empty.\n";
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
                            storedOutputResponseMessage += "***parameterProcessRequestTracker*** must contain a key of ***storedProcessRequestSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.Add(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterOutputResponseObservationFileName"))
                    {
                        storedOutputResponseMessage += "***parameterOutputResponseObservationFileName*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterOutputResponseObservationMethodName"))
                    {
                        storedOutputResponseMessage += "***parameterOutputResponseObservationMethodName*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterOutputResponseObservationPresentationTemplate"))
                    {
                        storedOutputResponseMessage += "***parameterOutputResponseObservationPresentationTemplate*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterOutputResponseObservationBusinessTemplate"))
                    {
                        storedOutputResponseMessage += "***parameterOutputResponseObservationBusinessTemplate*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterOutputResponseObservationServiceTemplate"))
                    {
                        storedOutputResponseMessage += "***parameterOutputResponseObservationServiceTemplate*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterOutputResponseObservationSecurityTemplate"))
                    {
                        storedOutputResponseMessage += "***parameterOutputResponseObservationSecurityTemplate*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterOutputResponseObservationDataTemplate"))
                    {
                        storedOutputResponseMessage += "***parameterOutputResponseObservationDataTemplate*** cannot be blank or empty.\n";
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

                            await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
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

                return true;

                #endregion

                #endregion

                #endregion
            };

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            #endregion

            #region DEFINE developer mode

            string storedOutputResponseOPTIONALAccountingCostType = "";
            bool storedOutputResponseOPTIONALBeginOfProcess = false;
            bool storedOutputResponseOPTIONALMiddleOfProcess = false;
            bool storedOutputResponseOPTIONALEndOfProcess = false;
            bool storedOutputResponseOPTIONALMasterLeaderIsSecondStep = false;

            bool storedOutputResponseMistake = false;

            #endregion

            #region DEFINE data response

            string storedOutputResponseData = null;

            #endregion

            #region MEMORIZE action name

            string storedInputRequestActionName = parameterInputs.Parameters["parameterInputRequestActionName"];

            #endregion

            #region MEMORIZE control client server

            _storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

            #endregion

            #region MEMORIZE app settings

            _storedProcessRequestSettings = (IConfiguration)_storedProcessRequestTracker["parameterProcessRequestSettings"];

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONVERTING data into observation");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", _storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_X_X_Framework_Output_JsonObservationNode_1_0");

            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseMessageType", "Logging"); //Values = Logging or Mistake

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseOPTIONALAccountingCostType", "Storage"); //Values = Bandwidth, CPU, Memory, Setup, Storage, Uptime
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseOPTIONALBeginOfProcess", true);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseOPTIONALMiddleOfProcess", true);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseOPTIONALEndOfProcess", true);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALRunSilentMode", true);

            #endregion

            #region MEMORIZE observation details

            string storedObservationDescription = parameterInputs.Parameters["parameterProcessRequest3WordDescription"];
            string storedObservationFileName = parameterInputs.Parameters["parameterOutputResponseObservationFileName"];
            string storedObservationMethodName = parameterInputs.Parameters["parameterOutputResponseObservationMethodName"];
            
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

            string storedObservationPresentationTemplate = parameterInputs.Parameters["parameterOutputResponseObservationPresentationTemplate"];
            string storedObservationBusinessTemplate = parameterInputs.Parameters["parameterOutputResponseObservationBusinessTemplate"];
            string storedObservationServiceTemplate = parameterInputs.Parameters["parameterOutputResponseObservationServiceTemplate"];
            string storedObservationSecurityTemplate = parameterInputs.Parameters["parameterOutputResponseObservationSecurityTemplate"];
            string storedObservationDataTemplate = parameterInputs.Parameters["parameterOutputResponseObservationDataTemplate"];

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE obversation creation

            #region IDEAL CASE - USE baseDi template

            Func<string, string, dynamic, string, string, string, string, string, string, string, string, Task<string>> ExecuteConversionRequest = async(string parameterObservationTemplate, string parameterObservationBody, dynamic parameterObservationItem, string parameterOutputResponseObservationFileName, string parameterOutputResponseObservationMethodName, string parameterProcessRequest3WordDescription, string parameterOutputResponseObservationPresentationTemplate, string parameterOutputResponseObservationBusinessTemplate, string parameterOutputResponseObservationServiceTemplate, string parameterOutputResponseObservationSecurityTemplate, string parameterOutputResponseObservationDataTemplate) => {
                parameterObservationBody = parameterObservationBody.Replace("{item}", parameterObservationItem);

                parameterObservationBody = parameterObservationBody.Replace("{calledByEntryPointName}", parameterOutputResponseObservationFileName);
                parameterObservationBody = parameterObservationBody.Replace("{calledByMethodName}", parameterOutputResponseObservationMethodName);
                parameterObservationBody = parameterObservationBody.Replace("{calledByMethodReason}", parameterProcessRequest3WordDescription);

                parameterObservationBody = parameterObservationBody.Replace("{presentation}", parameterOutputResponseObservationPresentationTemplate);
                parameterObservationBody = parameterObservationBody.Replace("{business}", parameterOutputResponseObservationBusinessTemplate);
                parameterObservationBody = parameterObservationBody.Replace("{service}", parameterOutputResponseObservationServiceTemplate);
                parameterObservationBody = parameterObservationBody.Replace("{security}", parameterOutputResponseObservationSecurityTemplate);
                parameterObservationBody = parameterObservationBody.Replace("{data}", parameterOutputResponseObservationDataTemplate);

                return parameterObservationBody;
            };

            storedOutputResponseData = await ExecuteConversionRequest(storedObservationTemplate, storedObservationBody, storedObservationItem, storedObservationFileName, storedObservationMethodName, storedObservationDescription, storedObservationPresentationTemplate, storedObservationBusinessTemplate, storedObservationServiceTemplate, storedObservationSecurityTemplate, storedObservationDataTemplate);
            
            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN converted data

            #region IDEAL CASE - USE json dataset

            return storedOutputResponseData;

            #endregion

            #endregion

            #endregion
        }

        #endregion
    }
}
