﻿
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

        public static string Step_X_X_Create_An_ObservationJsonNode_1_0(string metaDataCalledByEntryPointName, string metaDataCalledByMethodName, string metaDataCalledByMethodReason, string presentationTemplate = "{}", string businessTemplate = "{}", string serviceTemplate = "{}", string securityTemplate = "{}", string dataTemplate = "{}")
        {
            string outputObservationBody = @"{'baseDIObservations': [{
                                                'observation':
                                                {
                                                    'metadata': [{'calledByEntryPointName':'{calledByEntryPointName}'},{'calledByMethodName':'{calledByMethodName}'},{'calledByMethodReason':'{calledByMethodReason}'},{'item':{{item}}}]
                                                }
                                            }]
                                         }";

            string outputObservationItem = @"'presentation': [{presentation}],
                                             'business': [{business}],
                                             'service': [{service}],
                                             'security': [{security}],
                                             'data': [{data}]";

            outputObservationBody = outputObservationBody.Replace("{item}", outputObservationItem);

            outputObservationBody = outputObservationBody.Replace("{calledByEntryPointName}", metaDataCalledByEntryPointName);
            outputObservationBody = outputObservationBody.Replace("{calledByMethodName}", metaDataCalledByMethodName);
            outputObservationBody = outputObservationBody.Replace("{calledByMethodReason}", metaDataCalledByMethodReason);

            outputObservationBody = outputObservationBody.Replace("{presentation}", presentationTemplate);
            outputObservationBody = outputObservationBody.Replace("{business}", businessTemplate);
            outputObservationBody = outputObservationBody.Replace("{service}", serviceTemplate);
            outputObservationBody = outputObservationBody.Replace("{security}", securityTemplate);
            outputObservationBody = outputObservationBody.Replace("{data}", dataTemplate);

            return outputObservationBody;
        }

        //JObject data, string keyName, string keyValue, bool returnAsArray

        public static async Task<List<JToken>> Step_X_X_Read_And_FindJSONNode_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. Inputs    

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
                        if (parameterInputs.Parameters["parameterClientOrServerInstance"]["appSettings"] == null)
                        {
                            storedMessage += "***parameterClientOrServerInstance*** must contain a key of ***appSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.setValue(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessCheckPointHit = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterData"))
                    {
                        storedMessage += "***parameterData*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterKeyValuePairKey"))
                    {
                        storedMessage += "***parameterKeyValuePairKey*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterKeyValuePairValue"))
                    {
                        storedMessage += "***parameterKeyValuePairValue*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterReturnValueAsArray"))
                    {
                        storedMessage += "***parameterReturnValueAsArray*** cannot be blank or empty.\n";
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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            #endregion

            #region DEFINE data response

            List<JToken> storedDataResponse = new List<JToken>();

            #endregion

            #region DEFINE event handlers

            Func<JToken, Dictionary<string, string>, string, bool> ExecuteConversionProcess = null;

            #endregion

            #region DEFINE parameter inputs

            SingleParmPoco_12_2_1_0 storedParameterInputs = null;

            #endregion

            #region MEMORIZE client / server instance

            _storedClientOrServerInstance = parameterInputs.Parameters["parameterClientOrServerInstance"];

            #endregion

            #region MEMORIZE app settings

            _storedAppSettings = (IConfiguration)_storedClientOrServerInstance["parameterAppSettings"];

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") ? _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") : false;

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONFIGURING web server");
            storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", _storedClientOrServerInstance["actionName"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", _storedClientOrServerInstance["appSettings"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_X_X_Read_And_FindJSONNode_1_0");
            //storedDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALMiddleOfProcess", true);

            #endregion

            #region MEMORIZE filter metadata

            JObject storedData = parameterInputs.Parameters["parameterData"];

            string storedKeyValuePairKey = parameterInputs.Parameters["parameterKeyValuePairKey"];
            string storedKeyValuePairValue = parameterInputs.Parameters["parameterKeyValuePairValue"];

            bool storedReturnValueAsArray = parameterInputs.Parameters["parameterReturnValueAsArray"];

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE conversion process

            #region IDEAL CASE - USE recursive filter

            if (storedData != null)
            {
                ExecuteConversionProcess = (JToken parameterToken, Dictionary<string, string> parameterNodes, string parameterParentLocation) =>
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

                            ExecuteConversionProcess(parameterTokenChild, parameterNodes, parameterParentLocation);
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

                ExecuteConversionProcess(storedData, null, "");
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

        //JObject data, string keyName, string keyValue, bool returnAsArray

        public static async Task<List<JToken>> Step_X_X_Read_And_FindJSONNode_2_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. Inputs    

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
                        if (parameterInputs.Parameters["parameterClientOrServerInstance"]["appSettings"] == null)
                        {
                            storedMessage += "***parameterClientOrServerInstance*** must contain a key of ***appSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.setValue(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessCheckPointHit = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterData"))
                    {
                        storedMessage += "***parameterData*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterKeyValuePairKey"))
                    {
                        storedMessage += "***parameterKeyValuePairKey*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterKeyValuePairValue"))
                    {
                        storedMessage += "***parameterKeyValuePairValue*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterReturnValueAsArray"))
                    {
                        storedMessage += "***parameterReturnValueAsArray*** cannot be blank or empty.\n";
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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            #endregion

            #region DEFINE data response

            List<JToken> storedDataResponse = new List<JToken>();

            #endregion

            #region DEFINE event handlers

            Func<JToken, Action<JObject>, JToken> ExecuteConversionProcess = null;

            #endregion

            #region DEFINE parameter inputs

            SingleParmPoco_12_2_1_0 storedParameterInputs = null;

            #endregion

            #region MEMORIZE client / server instance

            _storedClientOrServerInstance = parameterInputs.Parameters["parameterClientOrServerInstance"];

            #endregion

            #region MEMORIZE app settings

            _storedAppSettings = (IConfiguration)_storedClientOrServerInstance["parameterAppSettings"];

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") ? _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") : false;

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONFIGURING web server");
            storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", _storedClientOrServerInstance["actionName"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", _storedClientOrServerInstance["appSettings"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_X_X_Read_And_FindJSONNode_2_0");
            //storedDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALMiddleOfProcess", true);

            #endregion

            #region MEMORIZE filter metadata

            JObject storedData = parameterInputs.Parameters["parameterData"];

            string storedKeyValuePairKey = parameterInputs.Parameters["parameterKeyValuePairKey"];
            string storedKeyValuePairValue = parameterInputs.Parameters["parameterKeyValuePairValue"];

            bool storedReturnValueAsArray = parameterInputs.Parameters["parameterReturnValueAsArray"];

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE conversion process

            if (storedData != null)
            {
                ExecuteConversionProcess = (JToken parameterNode, Action<JObject> parameterAction) =>
                {
                    if (parameterNode.Type == JTokenType.Object)
                    {
                        parameterAction((JObject)parameterNode);

                        foreach (JProperty child in parameterNode.Children<JProperty>())
                        {
                            ExecuteConversionProcess(child.Value, parameterAction);
                        }
                    }
                    else if (parameterNode.Type == JTokenType.Array)
                    {
                        foreach (JToken child in parameterNode.Children())
                        {
                            ExecuteConversionProcess(child, parameterAction);
                        }
                    }

                    return null;
                };

                ExecuteConversionProcess(storedData, n =>
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

            #region RETURN filtered data

            #region IDEAL CASE - USE json dataset

            return storedDataResponse;

            #endregion

            #endregion

            #endregion
        }
    }
}
