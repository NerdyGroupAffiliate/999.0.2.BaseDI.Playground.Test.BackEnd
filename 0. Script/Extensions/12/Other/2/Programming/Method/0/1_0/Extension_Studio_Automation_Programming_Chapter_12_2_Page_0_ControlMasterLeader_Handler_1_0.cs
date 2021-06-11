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

namespace BaseDI.Professional.Script.Programming.Extensions_0
{
    public static class Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0
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

                #region DEFINE control variables

                #endregion

                #region DEFINE input variables

                SingleParmPoco_12_2_1_0 storedInputs;

                #endregion

                #region DEFINE process variables

                bool storedProcessRequestMistakeMade = false;

                #endregion

                #region DEFINE output variables

                string storedOutputResponseMessage = "";

                #endregion

                ///////////////////////////////

                #region MEMORIZE control variables

                #region MEMORIZE control xxx xxx


                #endregion

                #endregion

                #region MEMORIZE input variables

                #region MEMORIZE input xxx xxxx


                #endregion

                #endregion

                #region MEMORIZE process variables

                #region MEMORIZE input action name

                string storedInputRequestActionName = parameterInputs.Parameters["parameterInputRequestActionName"];

                #endregion                

                #region MEMORIZE process request tracker

                Dictionary<string, object> storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

                #endregion

                #region MEMORIZE process request settings

                IConfiguration storedProcessRequestSettings = (IConfiguration)storedProcessRequestTracker["storedProcessRequestSettings"];

                #endregion

                #region MEMORIZE process developer mode

                bool storedProcessRequestDeveloperMode = storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") ? storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") : false;

                SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

                //REQUIRED

                //0. CONTROLLERS

                //1. INPUTS
                storedProcessRequestDeveloperLoggingInputs.Parameters["parameterInputRequestActionName"] = storedInputRequestActionName;

                //2. PROCESS
                storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequest3WordDescription"] = "VALIDATING request inputs";
                storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequestSettings"] = storedProcessRequestTracker["storedProcessRequestSettings"];
                storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequestTracker"] = storedProcessRequestTracker;
                storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequestFileName"] = "Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.cs";
                storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequestMethodName"] = "Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0 -> ValidateInputs";

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

                if (parameterInputs.Parameters.Count > 0)
                {
                    //0. CONTROLLERS

                    //1. INPUTS

                    //2. PROCESS
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
                            storedOutputResponseMessage += "***parameterProcessRequestTracker*** must contain a key of ***storedProcessRequestSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.setValue(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestDataToFilter"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestDataToFilter*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestDataToFilterKey"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestDataToFilterKey*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestDataToFilterValue"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestDataToFilterValue*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    //3. OUTPUTS
                    if (!parameterInputs.Parameters.ContainsKey("parameterOutputResponseAsArray"))
                    {
                        storedOutputResponseMessage += "***parameterOutputResponseAsArray*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (storedProcessRequestMistakeMade)
                    {
                        #region EDGE CASE - USE developer logger

                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        //0. CONTROLLERS

                        //1. INPUTS

                        //2. PROCESS
                        storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequest3WordDescription"] = "PARSING parameter values failed";
                        storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequestStepNumberReplace"] = storedProcessRequestTracker["storedProcessRequestStepNumber"];

                        //3. OUTPUTS
                        storedProcessRequestDeveloperLoggingInputs.Parameters["parameterOutputResponseMessageType"] = "Mistake"; //Values = Logging or Mistake

                        await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);

                        #endregion

                        #region EDGE CASE - USE exception handler

                        throw new Exception("PARSING parameter values failed");

                        #endregion
                    }
                }
                else
                {
                    #region EDGE CASE - USE blank return

                    return false;

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

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables


            #endregion

            #region DEFINE output variables

            List<JToken> storedOutputResponseData = new List<JToken>();

            #endregion

            ///////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx


            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input action name

            string storedInputRequestActionName = parameterInputs.Parameters["parameterInputRequestActionName"];

            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process request tracker

            _storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

            #endregion

            #region MEMORIZE process request settings

            _storedProcessRequestSettings = (IConfiguration)_storedProcessRequestTracker["storedProcessRequestSettings"];

            #endregion

            #region MEMORIZE process developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") ? _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") : false;

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED

            //0. CONTROLLERS

            //1. INPUTS
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", storedInputRequestActionName);

            //2. PROCESS
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONVERTING filtered dataset");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseOPTIONALMiddleOfProcess", true);

            //3. OUTPUTS

            #endregion


            #region MEMORIZE process filter data

            JObject storedProcessRequestDataToFilter = parameterInputs.Parameters["parameterProcessRequestDataToFilter"];

            string storedProcessRequestDataToFilterKey = parameterInputs.Parameters["parameterProcessRequestDataToFilterKey"];
            string storedProcessRequestDataToFilterValue = parameterInputs.Parameters["parameterProcessRequestDataToFilterValue"];

            #endregion

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output response options

            bool storedOutputResponseAsArray = parameterInputs.Parameters["parameterOutputResponseAsArray"];

            #endregion

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE conversion request

            #region IDEAL CASE - USE recursive filter

            Func<JToken, Dictionary<string, string>, string, bool> ExecuteConversionRequest = null;

            if (storedProcessRequestDataToFilter != null)
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
                        if (parameterToken.ToString().ToUpper(CultureInfo.CurrentCulture) == storedProcessRequestDataToFilterValue.ToUpper(CultureInfo.CurrentCulture))
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

                ExecuteConversionRequest(storedProcessRequestDataToFilter, null, "");
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

                #region DEFINE control variables

                #endregion

                #region DEFINE input variables

                SingleParmPoco_12_2_1_0 storedInputs;

                #endregion

                #region DEFINE process variables

                bool storedProcessRequestMistakeMade = false;

                #endregion

                #region DEFINE output variables

                string storedOutputResponseMessage = "";

                #endregion

                ///////////////////////////////

                #region MEMORIZE control variables

                #region MEMORIZE control xxx xxx


                #endregion

                #endregion

                #region MEMORIZE input variables

                #region MEMORIZE input xxx xxxx


                #endregion

                #endregion

                #region MEMORIZE process variables

                #region MEMORIZE input action name

                string storedInputRequestActionName = parameterInputs.Parameters["parameterInputRequestActionName"];

                #endregion                

                #region MEMORIZE process request tracker

                Dictionary<string, object> storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

                #endregion

                #region MEMORIZE process request settings

                IConfiguration storedProcessRequestSettings = (IConfiguration)storedProcessRequestTracker["storedProcessRequestSettings"];

                #endregion

                #region MEMORIZE process developer mode

                bool storedProcessRequestDeveloperMode = storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") ? storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") : false;

                SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

                //REQUIRED

                //0. CONTROLLERS

                //1. INPUTS
                storedProcessRequestDeveloperLoggingInputs.Parameters["parameterInputRequestActionName"] = storedInputRequestActionName;

                //2. PROCESS
                storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequest3WordDescription"] = "VALIDATING request inputs";
                storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequestSettings"] = storedProcessRequestTracker["storedProcessRequestSettings"];
                storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequestTracker"] = storedProcessRequestTracker;
                storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequestFileName"] = "Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.cs";
                storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequestMethodName"] = "Step_X_X_Framework_Convert_JsonDataSetToNodes_2_0 -> ValidateInputs";

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

                if (parameterInputs.Parameters.Count > 0)
                {
                    //0. CONTROLLERS

                    //1. INPUTS

                    //2. PROCESS
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
                            storedOutputResponseMessage += "***parameterProcessRequestTracker*** must contain a key of ***storedProcessRequestSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.setValue(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestDataToFilter"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestDataToFilter*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestDataToFilterKey"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestDataToFilterKey*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestDataToFilterValue"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestDataToFilterValue*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    //3. OUTPUTS
                    if (!parameterInputs.Parameters.ContainsKey("parameterOutputResponseAsArray"))
                    {
                        storedOutputResponseMessage += "***parameterOutputResponseAsArray*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (storedProcessRequestMistakeMade)
                    {
                        #region EDGE CASE - USE developer logger

                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        //0. CONTROLLERS

                        //1. INPUTS

                        //2. PROCESS
                        storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequest3WordDescription"] = "PARSING parameter values failed";
                        storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequestStepNumberReplace"] = storedProcessRequestTracker["storedProcessRequestStepNumber"];

                        //3. OUTPUTS
                        storedProcessRequestDeveloperLoggingInputs.Parameters["parameterOutputResponseMessageType"] = "Mistake"; //Values = Logging or Mistake

                        await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);

                        #endregion

                        #region EDGE CASE - USE exception handler

                        throw new Exception("PARSING parameter values failed");

                        #endregion
                    }
                }
                else
                {
                    #region EDGE CASE - USE blank return

                    return false;

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

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables


            #endregion

            #region DEFINE output variables

            List<JToken> storedOutputResponseData = new List<JToken>();

            #endregion

            ///////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx


            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input action name

            string storedInputRequestActionName = parameterInputs.Parameters["parameterInputRequestActionName"];

            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process request tracker

            _storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

            #endregion

            #region MEMORIZE process request settings

            _storedProcessRequestSettings = (IConfiguration)_storedProcessRequestTracker["storedProcessRequestSettings"];

            #endregion

            #region MEMORIZE process developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") ? _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") : false;

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED

            //0. CONTROLLERS

            //1. INPUTS
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", storedInputRequestActionName);

            //2. PROCESS
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONVERTING filtered dataset");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_X_X_Framework_Convert_JsonDataSetToNodes_2_0");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseOPTIONALMiddleOfProcess", true);

            //3. OUTPUTS

            #endregion


            #region MEMORIZE process filter data

            JObject storedProcessRequestDataToFilter = parameterInputs.Parameters["parameterProcessRequestDataToFilter"];

            string storedProcessRequestDataToFilterKey = parameterInputs.Parameters["parameterProcessRequestDataToFilterKey"];
            string storedProcessRequestDataToFilterValue = parameterInputs.Parameters["parameterProcessRequestDataToFilterValue"];

            #endregion

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output response options

            bool storedOutputResponseAsArray = parameterInputs.Parameters["parameterOutputResponseAsArray"];

            #endregion

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE conversion request

            #region IDEAL CASE - USE recursive filter

            if (storedProcessRequestDataToFilter != null)
            {
                Func<JToken, Action<JObject>, bool> ExecuteConversionRequest = null;

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

                    return true;
                };

                ExecuteConversionRequest(storedProcessRequestDataToFilter, n =>
                {
                    JToken token = n[storedProcessRequestDataToFilterKey];

                    if (token != null && token.Type == JTokenType.String)
                    {
                        if (storedProcessRequestDataToFilterValue == token.Value<string>())
                        {
                            storedOutputResponseData.Add(token);
                        }
                    }
                });
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

        public static async Task<string> Step_X_X_Framework_Output_JsonMistakeNode_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS    

            #region VALIDATE input parameters

            Func<SingleParmPoco_12_2_1_0, Task<bool>> ValidateInputs = async (SingleParmPoco_12_2_1_0 parameterInputs) =>
            {
                #region 1. INPUTS

                #region DEFINE control variables

                #endregion

                #region DEFINE input variables

                SingleParmPoco_12_2_1_0 storedInputs;

                #endregion

                #region DEFINE process variables

                bool storedProcessRequestMistakeMade = false;

                #endregion

                #region DEFINE output variables

                string storedOutputResponseMessage = "";

                #endregion

                ///////////////////////////////

                #region MEMORIZE control variables

                #region MEMORIZE control xxx xxx


                #endregion

                #endregion

                #region MEMORIZE input variables

                #region MEMORIZE input xxx xxxx


                #endregion

                #endregion

                #region MEMORIZE process variables

                #region MEMORIZE input action name

                string storedInputRequestActionName = parameterInputs.Parameters["parameterInputRequestActionName"];

                #endregion                

                #region MEMORIZE process request tracker

                Dictionary<string, object> storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

                #endregion

                #region MEMORIZE process request settings

                IConfiguration storedProcessRequestSettings = (IConfiguration)storedProcessRequestTracker["storedProcessRequestSettings"];

                #endregion

                #region MEMORIZE process developer mode

                bool storedProcessRequestDeveloperMode = storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") ? storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") : false;

                SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

                //REQUIRED

                //0. CONTROLLERS

                //1. INPUTS
                storedProcessRequestDeveloperLoggingInputs.Parameters["parameterInputRequestActionName"] = storedInputRequestActionName;

                //2. PROCESS
                storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequest3WordDescription"] = "VALIDATING request inputs";
                storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequestSettings"] = storedProcessRequestTracker["storedProcessRequestSettings"];
                storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequestTracker"] = storedProcessRequestTracker;
                storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequestFileName"] = "Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.cs";
                storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequestMethodName"] = "Step_X_X_Framework_Output_JsonMistakeNode_1_0 -> ValidateInputs";

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

                if (parameterInputs.Parameters.Count > 0)
                {
                    //0. CONTROLLERS

                    //1. INPUTS
                    if (!parameterInputs.Parameters.ContainsKey("parameterInputRequestActionName"))
                    {
                        storedOutputResponseMessage += "***parameterInputRequestActionName*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    //2. PROCESS
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
                            storedOutputResponseMessage += "***parameterProcessRequestTracker*** must contain a key of ***storedProcessRequestSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.setValue(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    //3. OUTPUTS
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

                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        //0. CONTROLLERS

                        //1. INPUTS

                        //2. PROCESS
                        storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequest3WordDescription"] = "PARSING parameter values failed";
                        storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequestStepNumberReplace"] = storedProcessRequestTracker["storedProcessRequestStepNumber"];

                        //3. OUTPUTS
                        storedProcessRequestDeveloperLoggingInputs.Parameters["parameterOutputResponseMessageType"] = "Mistake"; //Values = Logging or Mistake

                        await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);

                        #endregion

                        #region EDGE CASE - USE exception handler

                        throw new Exception("PARSING parameter values failed");

                        #endregion
                    }
                }
                else
                {
                    #region EDGE CASE - USE blank return

                    return false;

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

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables


            #endregion

            #region DEFINE output variables

            string storedOutputResponseData = "";

            #endregion

            ///////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx


            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input action name

            string storedInputRequestActionName = parameterInputs.Parameters["parameterInputRequestActionName"];

            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process request tracker

            _storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

            #endregion

            #region MEMORIZE process request settings

            _storedProcessRequestSettings = (IConfiguration)_storedProcessRequestTracker["storedProcessRequestSettings"];

            #endregion

            #region MEMORIZE process developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") ? _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") : false;

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED

            //0. CONTROLLERS

            //1. INPUTS
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", storedInputRequestActionName);

            //2. PROCESS
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONVERTING filtered dataset");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_X_X_Framework_Output_JsonMistakeNode_1_0");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseOPTIONALMiddleOfProcess", true);

            //3. OUTPUTS

            #endregion


            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output observation details

            string storedOutputResponseObservationDescription = parameterInputs.Parameters["parameterProcessRequest3WordDescription"];
            string storedOutputResponseObservationFileName = parameterInputs.Parameters["parameterOutputResponseObservationFileName"];
            string storedOutputResponseObservationMethodName = parameterInputs.Parameters["parameterOutputResponseObservationMethodName"];

            string storedOutputResponseObservationBody = "{'baseDIMistakes': [{ 'mistake': { 'metadata': [{ 'calledByEntryPointName': '{calledByEntryPointName}' }, { 'calledByMethodName': '{calledByMethodName}' }, { 'calledByMethodReason': '{calledByMethodReason}' }, { 'item': {{item}} }] }}]}";
            string storedOutputResponseObservationItem = "'details': [{details}]";

            string storedOutputResponseObservationPresentationTemplate = parameterInputs.Parameters["parameterOutputResponseObservationPresentationTemplate"];
            string storedOutputResponseObservationBusinessTemplate = parameterInputs.Parameters["parameterOutputResponseObservationBusinessTemplate"];
            string storedOutputResponseObservationServiceTemplate = parameterInputs.Parameters["parameterOutputResponseObservationServiceTemplate"];
            string storedOutputResponseObservationSecurityTemplate = parameterInputs.Parameters["parameterOutputResponseObservationSecurityTemplate"];
            string storedOutputResponseObservationDataTemplate = parameterInputs.Parameters["parameterOutputResponseObservationDataTemplate"];

            #endregion

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE mistake creation

            #region IDEAL CASE - USE baseDi template

            Func<string> ExecuteConversionRequest = () =>
            {
                storedOutputResponseObservationBody = storedOutputResponseObservationBody.Replace("{item}", storedOutputResponseObservationItem);

                storedOutputResponseObservationBody = storedOutputResponseObservationBody.Replace("{calledByEntryPointName}", storedOutputResponseObservationFileName);
                storedOutputResponseObservationBody = storedOutputResponseObservationBody.Replace("{calledByMethodName}", storedOutputResponseObservationMethodName);
                storedOutputResponseObservationBody = storedOutputResponseObservationBody.Replace("{calledByMethodReason}", storedOutputResponseObservationDescription);

                storedOutputResponseObservationBody = storedOutputResponseObservationBody.Replace("{presentation}", storedOutputResponseObservationPresentationTemplate);
                storedOutputResponseObservationBody = storedOutputResponseObservationBody.Replace("{business}", storedOutputResponseObservationBusinessTemplate);
                storedOutputResponseObservationBody = storedOutputResponseObservationBody.Replace("{service}", storedOutputResponseObservationServiceTemplate);
                storedOutputResponseObservationBody = storedOutputResponseObservationBody.Replace("{security}", storedOutputResponseObservationSecurityTemplate);
                storedOutputResponseObservationBody = storedOutputResponseObservationBody.Replace("{data}", storedOutputResponseObservationDataTemplate);

                return storedOutputResponseObservationBody;
            };

            storedOutputResponseData = ExecuteConversionRequest();

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

            Func<SingleParmPoco_12_2_1_0, Task<bool>> ValidateInputs = async (SingleParmPoco_12_2_1_0 parameterInputs) =>
            {
                #region 1. INPUTS

                #region DEFINE control variables

                #endregion

                #region DEFINE input variables

                SingleParmPoco_12_2_1_0 storedInputs;

                #endregion

                #region DEFINE process variables

                bool storedProcessRequestMistakeMade = false;

                #endregion

                #region DEFINE output variables

                string storedOutputResponseMessage = "";

                #endregion

                ///////////////////////////////

                #region MEMORIZE control variables

                #region MEMORIZE control xxx xxx


                #endregion

                #endregion

                #region MEMORIZE input variables

                #region MEMORIZE input xxx xxxx


                #endregion

                #endregion

                #region MEMORIZE process variables

                #region MEMORIZE input action name

                string storedInputRequestActionName = parameterInputs.Parameters["parameterInputRequestActionName"];

                #endregion                

                #region MEMORIZE process request tracker

                Dictionary<string, object> storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

                #endregion

                #region MEMORIZE process request settings

                IConfiguration storedProcessRequestSettings = (IConfiguration)storedProcessRequestTracker["storedProcessRequestSettings"];

                #endregion

                #region MEMORIZE process developer mode

                bool storedProcessRequestDeveloperMode = storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") ? storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") : false;

                SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

                //REQUIRED

                //0. CONTROLLERS

                //1. INPUTS
                storedProcessRequestDeveloperLoggingInputs.Parameters["parameterInputRequestActionName"] = storedInputRequestActionName;

                //2. PROCESS
                storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequest3WordDescription"] = "VALIDATING request inputs";
                storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequestSettings"] = storedProcessRequestTracker["storedProcessRequestSettings"];
                storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequestTracker"] = storedProcessRequestTracker;
                storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequestFileName"] = "Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.cs";
                storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequestMethodName"] = "Step_X_X_Framework_Output_JsonObservationNode_1_0 -> ValidateInputs";

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

                if (parameterInputs.Parameters.Count > 0)
                {
                    //0. CONTROLLERS

                    //1. INPUTS
                    if (!parameterInputs.Parameters.ContainsKey("parameterInputRequestActionName"))
                    {
                        storedOutputResponseMessage += "***parameterInputRequestActionName*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    //2. PROCESS
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
                            storedOutputResponseMessage += "***parameterProcessRequestTracker*** must contain a key of ***storedProcessRequestSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.setValue(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    //3. OUTPUTS
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

                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        //0. CONTROLLERS

                        //1. INPUTS

                        //2. PROCESS
                        storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequest3WordDescription"] = "PARSING parameter values failed";
                        storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequestStepNumberReplace"] = storedProcessRequestTracker["storedProcessRequestStepNumber"];

                        //3. OUTPUTS
                        storedProcessRequestDeveloperLoggingInputs.Parameters["parameterOutputResponseMessageType"] = "Mistake"; //Values = Logging or Mistake

                        await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);

                        #endregion

                        #region EDGE CASE - USE exception handler

                        throw new Exception("PARSING parameter values failed");

                        #endregion
                    }
                }
                else
                {
                    #region EDGE CASE - USE blank return

                    return false;

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

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables


            #endregion

            #region DEFINE output variables

            string storedOutputResponseData = "";

            #endregion

            ///////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx


            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input action name

            string storedInputRequestActionName = parameterInputs.Parameters["parameterInputRequestActionName"];

            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process request tracker

            _storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

            #endregion

            #region MEMORIZE process request settings

            _storedProcessRequestSettings = (IConfiguration)_storedProcessRequestTracker["storedProcessRequestSettings"];

            #endregion

            #region MEMORIZE process developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") ? _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") : false;

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED

            //0. CONTROLLERS

            //1. INPUTS
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", storedInputRequestActionName);

            //2. PROCESS
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONVERTING filtered dataset");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_X_X_Framework_Output_JsonObservationNode_1_0");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseOPTIONALMiddleOfProcess", true);

            //3. OUTPUTS

            #endregion


            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output observation details

            string storedOutputResponseObservationDescription = parameterInputs.Parameters["parameterProcessRequest3WordDescription"];
            string storedOutputResponseObservationFileName = parameterInputs.Parameters["parameterOutputResponseObservationFileName"];
            string storedOutputResponseObservationMethodName = parameterInputs.Parameters["parameterOutputResponseObservationMethodName"];

            string storedOutputResponseObservationBody = "{'baseDIMistakes': [{ 'mistake': { 'metadata': [{ 'calledByEntryPointName': '{calledByEntryPointName}' }, { 'calledByMethodName': '{calledByMethodName}' }, { 'calledByMethodReason': '{calledByMethodReason}' }, { 'item': {{item}} }] }}]}";
            string storedOutputResponseObservationItem = "'details': [{details}]";

            string storedOutputResponseObservationPresentationTemplate = parameterInputs.Parameters["parameterOutputResponseObservationPresentationTemplate"];
            string storedOutputResponseObservationBusinessTemplate = parameterInputs.Parameters["parameterOutputResponseObservationBusinessTemplate"];
            string storedOutputResponseObservationServiceTemplate = parameterInputs.Parameters["parameterOutputResponseObservationServiceTemplate"];
            string storedOutputResponseObservationSecurityTemplate = parameterInputs.Parameters["parameterOutputResponseObservationSecurityTemplate"];
            string storedOutputResponseObservationDataTemplate = parameterInputs.Parameters["parameterOutputResponseObservationDataTemplate"];

            #endregion

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE mistake creation

            #region IDEAL CASE - USE baseDi template

            Func<string> ExecuteConversionRequest = () =>
            {
                storedOutputResponseObservationBody = storedOutputResponseObservationBody.Replace("{item}", storedOutputResponseObservationItem);

                storedOutputResponseObservationBody = storedOutputResponseObservationBody.Replace("{calledByEntryPointName}", storedOutputResponseObservationFileName);
                storedOutputResponseObservationBody = storedOutputResponseObservationBody.Replace("{calledByMethodName}", storedOutputResponseObservationMethodName);
                storedOutputResponseObservationBody = storedOutputResponseObservationBody.Replace("{calledByMethodReason}", storedOutputResponseObservationDescription);

                storedOutputResponseObservationBody = storedOutputResponseObservationBody.Replace("{presentation}", storedOutputResponseObservationPresentationTemplate);
                storedOutputResponseObservationBody = storedOutputResponseObservationBody.Replace("{business}", storedOutputResponseObservationBusinessTemplate);
                storedOutputResponseObservationBody = storedOutputResponseObservationBody.Replace("{service}", storedOutputResponseObservationServiceTemplate);
                storedOutputResponseObservationBody = storedOutputResponseObservationBody.Replace("{security}", storedOutputResponseObservationSecurityTemplate);
                storedOutputResponseObservationBody = storedOutputResponseObservationBody.Replace("{data}", storedOutputResponseObservationDataTemplate);

                return storedOutputResponseObservationBody;
            };

            storedOutputResponseData = ExecuteConversionRequest();

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
