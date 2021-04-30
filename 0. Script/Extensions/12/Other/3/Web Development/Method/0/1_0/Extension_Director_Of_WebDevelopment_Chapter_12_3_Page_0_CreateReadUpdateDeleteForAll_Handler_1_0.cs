#region Imports

#region BaseDI

using BaseDI.Professional.Script.Programming.Abstract_1;
using BaseDI.Professional.Script.Programming.Extensions_1;
using BaseDI.Professional.Script.Programming.Poco_1;
using BaseDI.Professional.Script.Risk_Management.Extensions_0;

#endregion

#region .Net Core

using Microsoft.AspNetCore.Html;

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Linq.Expressions;
using System.Text.RegularExpressions;
using System.Threading;
using System.Threading.Tasks;

#endregion 

#region 3rd Party Core

using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Microsoft.Extensions.Configuration;
using BaseDI.Professional.Script.Programming.Extensions_3;
using System.Collections;

#endregion

#endregion

namespace BaseDI.Professional.Script.Web_Development.Extensions_0
{
    public class Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0
    {
        #region HTML MANAGEMENT

        private static async Task<dynamic> Step_0_0_Framework_Store_HtmlAttributesToArray_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
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
                storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONVERTING json to html attributes");
                storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", storedClientOrServerInstance["storedActionName"]);
                storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", storedClientOrServerInstance["storedAppSettings"]);
                storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", storedClientOrServerInstance);
                storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.ts");
                storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_0_0_Framework_Store_HtmlAttributesToArray_1_0.ValidateInputs()");

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
                            storedMessage += "***parameterClientOrServerInstance*** must contain a key of ***storedAppSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.setValue(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessCheckPointHit = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterAppSettings"))
                    {
                        storedMessage += "***parameterAppSettings*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterHtmlAttributes"))
                    {
                        storedMessage += "***parameterHtmlAttributes*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterMasterStorer"))
                    {
                        storedMessage += "***parameterMasterStorer*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterStorylineDetails"))
                    {
                        storedMessage += "***parameterStorylineDetails*** cannot be blank or empty.\n";
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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            #endregion

            #region DEFINE data response

            dynamic storedDataResponse = null;

            #endregion

            #region DEFINE html inputs

            string storedHtmlBaseDIScriptName = "";

            #endregion

            #region DEFINE parameter inputs

            SingleParmPoco_12_2_1_0 storedParameterInputs;

            #endregion

            #region MEMORIZE centralized processes

            aClass_Programming_ScriptAction_12_2_1_0<JObject> stored_CentralizedStorer = parameterInputs.Parameters["parameterMasterStorer"];
            //this._stored_CentralizedSensor = parameterCentralizedSensor;
            //this._stored_CentralizedStorer = parameterCentralizedStorer;
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
            storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONVERTING json to html attributes");
            storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_0_0_Framework_Store_HtmlAttributesToArray_1_0");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters["parameterOPTIONALIgnoreDeveloperConsoleLog"));

            #endregion

            #region MEMORIZE html inputs

            dynamic storedHtmlAttributes = parameterInputs.Parameters["parameterHtmlAttributes"];

            #endregion

            #region MEMORIZE storyline details

            JObject storedStorylineDetails = parameterInputs.Parameters["parameterStorylineDetails"];
            //storedStorylineDetails_Parameters = parameterStorylineDetails_Parameters;

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE json to html conversion

            #region IDEAL CASE - USE json metadata

            Func<dynamic, ArrayList, Task<ArrayList>> ExecuteConversionRequest = async (dynamic parameterHtmlAttributes, ArrayList parameterHtmlAttributesOutput) => {
                try
                {
                    foreach (var parameterHtmlAttribute in parameterHtmlAttributes)
                    {              
                        foreach (var attributeKeyValue in parameterHtmlAttribute.ToObject<Dictionary<string, string>>())
                        {
                            parameterHtmlAttributesOutput.Add($"{attributeKeyValue.Key}='{attributeKeyValue.Value}'");
                        }
                    }
         
                    return await Task.FromResult<ArrayList>(parameterHtmlAttributesOutput).ConfigureAwait(true);
                }
                catch (Exception mistake)
                {
                    #region EDGE CASE - USE developer logger

                    if (storedDeveloperMode)
                    {
                        storedClientOrServerInstance["processStepNumber"] = (int)storedClientOrServerInstance["processStepNumber"] + 1;

                        storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "FAILED converting json to html attributes");
                        storedDeveloperLoggingInputs.Parameters.Add("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                        storedDeveloperLoggingInputs.Parameters.Add("parameterStepNumberReplace", storedClientOrServerInstance["processStepNumber"]);
                        storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_0_0_Framework_Store_HtmlAttributesToArray_1_0.ExecuteConversionRequest");

                        await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                    }

                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw new Exception("CONVERSION request failed " + mistake.ToString());

                    #endregion
                }
            };

            storedDataResponse = await ExecuteConversionRequest(storedHtmlAttributes, storedDataResponse);

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN converted data

            #region IDEAL CASE - USE html string

            return string.Join(" ", storedDataResponse);

            #endregion

            #endregion

            #endregion                                        
        }

        public static async Task<string> Step_1_0_Framework_Convert_HtmlContainerJsonToHtml_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
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
                storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONVERTING json to html container");
                storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", storedClientOrServerInstance["storedActionName"]);
                storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", storedClientOrServerInstance["storedAppSettings"]);
                storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", storedClientOrServerInstance);
                storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.ts");
                storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_0_0_Framework_Store_HtmlAttributesToArray_1_0.ValidateInputs()");

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
                            storedMessage += "***parameterClientOrServerInstance*** must contain a key of ***storedAppSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.setValue(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessCheckPointHit = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterAppSettings"))
                    {
                        storedMessage += "***parameterAppSettings*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterHtmlContainerJSON"))
                    {
                        storedMessage += "***parameterHtmlContainerJSON*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterMasterStorer"))
                    {
                        storedMessage += "***parameterMasterStorer*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterStorylineDetails"))
                    {
                        storedMessage += "***parameterStorylineDetails*** cannot be blank or empty.\n";
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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            #endregion

            #region DEFINE data response

            dynamic storedDataResponse = null;

            #endregion

            #region DEFINE html inputs

            string storedHtmlBaseDIScriptName = "";

            #endregion

            #region DEFINE parameter inputs

            SingleParmPoco_12_2_1_0 storedParameterInputs;

            #endregion

            #region MEMORIZE centralized processes

            aClass_Programming_ScriptAction_12_2_1_0<JObject> stored_CentralizedStorer = parameterInputs.Parameters["parameterMasterStorer"];
            //this._stored_CentralizedSensor = parameterCentralizedSensor;
            //this._stored_CentralizedStorer = parameterCentralizedStorer;
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
            storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONVERTING json to html container");
            storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_1_0_Framework_Convert_HtmlContainerJsonToHtml_1_0");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters["parameterOPTIONALIgnoreDeveloperConsoleLog"));

            #endregion

            #region MEMORIZE html inputs

            dynamic storedHtmlContainerJSON = parameterInputs.Parameters["parameterHtmlContainerJSON"];

            #endregion

            #region MEMORIZE storyline details

            JObject storedStorylineDetails = parameterInputs.Parameters["parameterStorylineDetails"];
            //storedStorylineDetails_Parameters = parameterStorylineDetails_Parameters;

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE json to html conversion

            #region IDEAL CASE - USE json metadata

            Func<dynamic, Task<string>> ExecuteConversionRequest = async (dynamic parameterHtmlContainerJSON) =>
            {
                try
                {
                    return await Task.FromResult<string>($@"<{parameterHtmlContainerJSON.value.HTMLContentItems[0].Tag} {Step_0_0_Framework_Store_HtmlAttributesToArray_1_0(parameterHtmlContainerJSON.value.HTMLContentItems[0].Attributes)}>{{HTMLRows_Replace}}</{parameterHtmlContainerJSON.value.HTMLContentItems[0].Tag}>").ConfigureAwait(true);
                }
                catch (Exception mistake)
                {
                    #region EDGE CASE - USE developer logger

                    if (storedDeveloperMode)
                    {
                        storedClientOrServerInstance["processStepNumber"] = (int)storedClientOrServerInstance["processStepNumber"] + 1;

                        storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "FAILED converting to html container");
                        storedDeveloperLoggingInputs.Parameters.Add("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                        storedDeveloperLoggingInputs.Parameters.Add("parameterStepNumberReplace", storedClientOrServerInstance["processStepNumber"]);
                        storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_1_0_Framework_Convert_HtmlContainerJsonToHtml_1_0.ExecuteConversionRequest");

                        await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                    }

                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw new Exception("STORAGE request failed " + mistake.ToString());

                    #endregion
                }
            };

            storedDataResponse = await ExecuteConversionRequest(storedHtmlContainerJSON);

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN converted data

            #region IDEAL CASE - USE html string

            return storedDataResponse;

            #endregion

            #endregion

            #endregion                              
        }

        public static async Task<string> Step_2_0_Framework_Convert_HtmlRowsJsonToHtml_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
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
                storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONVERTING json to html row");
                storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", storedClientOrServerInstance["storedActionName"]);
                storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", storedClientOrServerInstance["storedAppSettings"]);
                storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", storedClientOrServerInstance);
                storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.ts");
                storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_0_0_Framework_Store_HtmlAttributesToArray_1_0.ValidateInputs()");

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
                            storedMessage += "***parameterClientOrServerInstance*** must contain a key of ***storedAppSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.setValue(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessCheckPointHit = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterAppSettings"))
                    {
                        storedMessage += "***parameterAppSettings*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterHtmlContainerString"))
                    {
                        storedMessage += "***parameterHtmlContainerString*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterHtmlRowsJSON"))
                    {
                        storedMessage += "***parameterHtmlRowsJSON*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterMasterStorer"))
                    {
                        storedMessage += "***parameterMasterStorer*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterStorylineDetails"))
                    {
                        storedMessage += "***parameterStorylineDetails*** cannot be blank or empty.\n";
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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            #endregion

            #region DEFINE data response

            dynamic storedDataResponse = null;
            ArrayList storedDataResponseList = new ArrayList();

            #endregion

            #region DEFINE html inputs

            string storedHtmlBaseDIScriptName = "";

            #endregion

            #region DEFINE parameter inputs

            SingleParmPoco_12_2_1_0 storedParameterInputs;

            #endregion

            #region MEMORIZE centralized processes

            aClass_Programming_ScriptAction_12_2_1_0<JObject> stored_CentralizedStorer = parameterInputs.Parameters["parameterMasterStorer"];
            //this._stored_CentralizedSensor = parameterCentralizedSensor;
            //this._stored_CentralizedStorer = parameterCentralizedStorer;
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
            storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONVERTING json to html row");
            storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_2_0_Framework_Convert_HtmlRowsJsonToHtml_1_0");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters["parameterOPTIONALIgnoreDeveloperConsoleLog"));

            #endregion

            #region MEMORIZE html inputs

            dynamic storedHtmlContainerString = parameterInputs.Parameters["parameterHtmlContainerString"];
            dynamic storedHtmlRowsJSON = parameterInputs.Parameters["parameterHtmlRowsJSON"];

            #endregion

            #region MEMORIZE storyline details

            JObject storedStorylineDetails = parameterInputs.Parameters["parameterStorylineDetails"];
            //storedStorylineDetails_Parameters = parameterStorylineDetails_Parameters;

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE json to html conversion

            #region IDEAL CASE - USE json metadata

            Func<string, dynamic, ArrayList, Task<string>> ExecuteConversionRequest = async (string parameterHtmlContainerString, dynamic parameterHtmlRowsJSON, ArrayList parameterFilterDataResponseList) =>
            {
                try
                {
                    foreach (var storedHtmlRow in parameterHtmlRowsJSON.value.HTMLContentItems)
                    {
                        parameterFilterDataResponseList.Add($@"<{ storedHtmlRow.Tag } {Step_0_0_Framework_Store_HtmlAttributesToArray_1_0(storedHtmlRow.Attributes)}>{{{ storedHtmlRow.Attributes[0].id }_Replace}}</{storedHtmlRow.Tag}>");
                    }

                    return await Task.FromResult<string>(parameterHtmlContainerString.Replace("{HTMLRows_Replace}", string.Join("\n", parameterFilterDataResponseList))).ConfigureAwait(true);
                }
                catch (Exception mistake)
                {
                    #region EDGE CASE - USE developer logger

                    if (storedDeveloperMode)
                    {
                        storedClientOrServerInstance["processStepNumber"] = (int)storedClientOrServerInstance["processStepNumber"] + 1;

                        storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "FAILED converting json to html row");
                        storedDeveloperLoggingInputs.Parameters.Add("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                        storedDeveloperLoggingInputs.Parameters.Add("parameterStepNumberReplace", storedClientOrServerInstance["processStepNumber"]);
                        storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_2_0_Framework_Convert_HtmlRowsJsonToHtml_1_0.ExecuteConversionRequest");

                        await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                    }

                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw new Exception("STORAGE request failed " + mistake.ToString());

                    #endregion
                }
            };

            storedDataResponse = await ExecuteConversionRequest(storedHtmlContainerString, storedHtmlRowsJSON, storedDataResponseList);

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN converted data

            #region IDEAL CASE - USE html string

            return storedDataResponse;

            #endregion

            #endregion

            #endregion                              
        }

        public static async Task<string> Step_3_0_Framework_Convert_HtmlColumnsJsonToHtml_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
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
                storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONVERTING json to html column");
                storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", storedClientOrServerInstance["storedActionName"]);
                storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", storedClientOrServerInstance["storedAppSettings"]);
                storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", storedClientOrServerInstance);
                storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.ts");
                storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_3_0_Framework_Convert_HtmlColumnsJsonToHtml_1_0.ValidateInputs()");

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
                            storedMessage += "***parameterClientOrServerInstance*** must contain a key of ***storedAppSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.setValue(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessCheckPointHit = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterAppSettings"))
                    {
                        storedMessage += "***parameterAppSettings*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterHtmlRowString"))
                    {
                        storedMessage += "***parameterHtmlRowString*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterHtmlColumnsJSON"))
                    {
                        storedMessage += "***parameterHtmlColumnsJSON*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterMasterStorer"))
                    {
                        storedMessage += "***parameterMasterStorer*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterStorylineDetails"))
                    {
                        storedMessage += "***parameterStorylineDetails*** cannot be blank or empty.\n";
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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            #endregion

            #region DEFINE data response

            string storedColumnItem = "";

            dynamic storedDataResponse = null;
            
            #endregion

            #region DEFINE html inputs

            string storedHtmlBaseDIScriptName = "";

            #endregion

            #region DEFINE parameter inputs

            SingleParmPoco_12_2_1_0 storedParameterInputs;

            #endregion

            #region MEMORIZE centralized processes

            aClass_Programming_ScriptAction_12_2_1_0<JObject> stored_CentralizedStorer = parameterInputs.Parameters["parameterMasterStorer"];
            //this._stored_CentralizedSensor = parameterCentralizedSensor;
            //this._stored_CentralizedStorer = parameterCentralizedStorer;
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
            storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "PREPARING caching request");
            storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_3_0_Framework_Convert_HtmlColumnsJsonToHtml_1_0");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters["parameterOPTIONALIgnoreDeveloperConsoleLog"));

            #endregion

            #region MEMORIZE html inputs

            string storedHtmlRowString = parameterInputs.Parameters["parameterHtmlRowString"];
            dynamic storedHtmlColumnsJSON = parameterInputs.Parameters["parameterHtmlColumnsJSON"];

            #endregion

            #region MEMORIZE storyline details

            JObject storedStorylineDetails = parameterInputs.Parameters["parameterStorylineDetails"];
            //storedStorylineDetails_Parameters = parameterStorylineDetails_Parameters;

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE json to html conversion

            #region IDEAL CASE - USE json metadata

            Func<string, dynamic, string, Task<string>> ExecuteConversionRequest = async (string parameterHtmlRowString, dynamic parameterHtmlColumnsJSON, string parameterColumnItem) =>
            {
                try
                {
                    foreach (var storedHtmlColumn in parameterHtmlColumnsJSON.value.HTMLContentItems)
                    {
                        parameterColumnItem = $@"<{storedHtmlColumn.Tag} {Step_0_0_Framework_Store_HtmlAttributesToArray_1_0(storedHtmlColumn.Attributes)}>{{{storedHtmlColumn.Attributes[0].id}_Replace}}</{storedHtmlColumn.Tag}>\n";
                        parameterHtmlRowString = parameterHtmlRowString.Replace($@"{{{storedHtmlColumn.ParentHTMLContentItemAttributeID}_Replace}}", parameterColumnItem);
                    }

                    return parameterHtmlRowString;
                }
                catch (Exception mistake)
                {
                    #region EDGE CASE - USE developer logger

                    if (storedDeveloperMode)
                    {
                        storedClientOrServerInstance["processStepNumber"] = (int)storedClientOrServerInstance["processStepNumber"] + 1;

                        storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "FAILED converting json to html column");
                        storedDeveloperLoggingInputs.Parameters.Add("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                        storedDeveloperLoggingInputs.Parameters.Add("parameterStepNumberReplace", storedClientOrServerInstance["processStepNumber"]);
                        storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_3_0_Framework_Convert_HtmlColumnsJsonToHtml_1_0.ExecuteConversionRequest");

                        await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                    }

                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw new Exception("STORAGE request failed " + mistake.ToString());

                    #endregion
                }
            };

            storedDataResponse = await ExecuteConversionRequest(storedHtmlRowString, storedHtmlColumnsJSON, storedColumnItem);

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN converted data

            #region IDEAL CASE - USE html string

            return storedDataResponse;

            #endregion

            #endregion

            #endregion                              
        }

        public static async Task<string> Step_4_0_Framework_Convert_HtmlContentJsonToHtml_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
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
                storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONVERTING json to html content");
                storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", storedClientOrServerInstance["storedActionName"]);
                storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", storedClientOrServerInstance["storedAppSettings"]);
                storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", storedClientOrServerInstance);
                storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.ts");
                storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_4_0_Framework_Convert_HtmlContentJsonToHtml_1_0.ValidateInputs()");

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
                            storedMessage += "***parameterClientOrServerInstance*** must contain a key of ***storedAppSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.setValue(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessCheckPointHit = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterAppSettings"))
                    {
                        storedMessage += "***parameterAppSettings*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterHtmlColumnString"))
                    {
                        storedMessage += "***parameterHtmlColumnString*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterHtmlContentJSON"))
                    {
                        storedMessage += "***parameterHtmlContentJSON*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterMasterStorer"))
                    {
                        storedMessage += "***parameterMasterStorer*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterStorylineDetails"))
                    {
                        storedMessage += "***parameterStorylineDetails*** cannot be blank or empty.\n";
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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            #endregion

            #region DEFINE data response

            string storedContent = "";

            dynamic storedDataResponse = null;
            Dictionary<string, List<string>> storedDataResponseIdsAndContent = new Dictionary<string, List<string>>();

            #endregion

            #region DEFINE html inputs

            string storedHtmlBaseDIScriptName = "";

            #endregion

            #region DEFINE parameter inputs

            SingleParmPoco_12_2_1_0 storedParameterInputs;

            #endregion

            #region MEMORIZE centralized processes

            aClass_Programming_ScriptAction_12_2_1_0<JObject> stored_CentralizedStorer = parameterInputs.Parameters["parameterMasterStorer"];
            //this._stored_CentralizedSensor = parameterCentralizedSensor;
            //this._stored_CentralizedStorer = parameterCentralizedStorer;
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
            storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONVERTING json to html content");
            storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_4_0_Framework_Convert_HtmlContentJsonToHtml_1_0");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters["parameterOPTIONALIgnoreDeveloperConsoleLog"));

            #endregion

            #region MEMORIZE html inputs

            string storedHtmlColumnString = parameterInputs.Parameters["parameterHtmlColumnString"];
            dynamic storedHtmlContentJSON = parameterInputs.Parameters["parameterHtmlContentJSON"];

            #endregion

            #region MEMORIZE storyline details

            JObject storedStorylineDetails = parameterInputs.Parameters["parameterStorylineDetails"];
            //storedStorylineDetails_Parameters = parameterStorylineDetails_Parameters;

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE json to html conversion

            #region IDEAL CASE - USE json metadata

            Func<string, dynamic, Dictionary<string, List<string>>, dynamic, IConfiguration, Task<string>> ExecuteConversionRequest = async (string parameterHtmlColumnString, dynamic parameterHtmlContentJSON, Dictionary<string, List<string>> parameterFilterDataResponseIdsAndContent, dynamic parameterContent, IConfiguration parameterAppSettings) =>
            {
                try
                {
                    foreach (var storedContentItem in parameterHtmlContentJSON.value.HTMLContentItems)
                    {
                        if (!parameterFilterDataResponseIdsAndContent.ContainsKey(storedContentItem.ParentHTMLContentItemAttributeID))
                        {
                            parameterFilterDataResponseIdsAndContent.Add(storedContentItem.ParentHTMLContentItemAttributeID, new List<string>());

                            parameterFilterDataResponseIdsAndContent[storedContentItem.ParentHTMLContentItemAttributeID].Add(
                             $@"<{storedContentItem.Tag} {Step_0_0_Framework_Store_HtmlAttributesToArray_1_0(storedContentItem.Attributes)}>{
                                     storedContentItem.Value
                                 }</{storedContentItem.Tag}>\n");
                        }
                        else
                        {
                            parameterFilterDataResponseIdsAndContent[storedContentItem.ParentHTMLContentItemAttributeID].Add(
                                $@"<{storedContentItem.Tag} {Step_0_0_Framework_Store_HtmlAttributesToArray_1_0(storedContentItem.Attributes)}>{storedContentItem.Value}</{storedContentItem.Tag}>\n");
                        }
                    }

                    foreach (var storedIdAndContentItem in parameterFilterDataResponseIdsAndContent.Keys)
                    {
                        parameterHtmlColumnString = parameterHtmlColumnString.Replace($"{{{storedIdAndContentItem}_Replace}}", string.Join("\n", parameterFilterDataResponseIdsAndContent[storedIdAndContentItem]));
                    }

                    if (parameterAppSettings.GetValue<string>("AppSettings:APP_ENV") == "SERVER")
                    {
                        parameterHtmlColumnString = parameterHtmlColumnString.Replace("../999.0.3.BaseDI.Professional.QuickStart.Templates", "/StaticFiles");
                    }                    

                    return await Task.FromResult<string>(parameterHtmlColumnString).ConfigureAwait(true);

                }
                catch (Exception mistake)
                {
                    #region EDGE CASE - USE developer logger

                    if (storedDeveloperMode)
                    {
                        storedClientOrServerInstance["processStepNumber"] = (int)storedClientOrServerInstance["processStepNumber"] + 1;

                        storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "FAILED converting json to html content");
                        storedDeveloperLoggingInputs.Parameters.Add("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                        storedDeveloperLoggingInputs.Parameters.Add("parameterStepNumberReplace", storedClientOrServerInstance["processStepNumber"]);
                        storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_4_0_Framework_Convert_HtmlContentJsonToHtml_1_0.ExecuteConversionRequest");

                        await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                    }

                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw new Exception("STORAGE request failed " + mistake.ToString());

                    #endregion
                }
            };

            storedDataResponse = await ExecuteConversionRequest(storedHtmlColumnString, storedHtmlContentJSON, storedDataResponseIdsAndContent, storedContent, storedAppSettings);

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN converted data

            #region IDEAL CASE - USE html string

            return storedDataResponse;

            #endregion

            #endregion

            #endregion                              
        }

        public static async Task<string> Step_5_0_Framework_Convert_HtmlCssJSONToInlineStyles_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
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
                storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONVERTING json to html styles");
                storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", storedClientOrServerInstance["storedActionName"]);
                storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", storedClientOrServerInstance["storedAppSettings"]);
                storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", storedClientOrServerInstance);
                storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.ts");
                storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_5_0_Framework_Convert_HtmlCssJSONToInlineStyles_1_0.ValidateInputs()");

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
                            storedMessage += "***parameterClientOrServerInstance*** must contain a key of ***storedAppSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.setValue(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessCheckPointHit = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterAppSettings"))
                    {
                        storedMessage += "***parameterAppSettings*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterHtmlStylesJSON"))
                    {
                        storedMessage += "***parameterHtmlStylesJSON*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }
                    else
                    {
                        if (!parameterInputs.Parameters["parameterHtmlStylesJSON"].value[0]?._2_2_2_4_1_clientInformationHTMLContentStylingItem?.value?.HTMLContentStylingItemFiles[0]?.StyleFilePathLocal)
                        {
                            storedMessage += "***parameterHtmlStylesJSON*** [StyleFilePathLocal] cannot be blank or empty.\n";
                            storedProcessCheckPointHit = true;
                        }

                        if (!parameterInputs.Parameters["parameterHtmlStylesJSON"].value[0]?._2_2_2_4_1_clientInformationHTMLContentStylingItem?.value?.HTMLContentStylingItemFiles[0]?.StyleFiles)
                        {
                            storedMessage += "***parameterHtmlStylesJSON*** [StyleFiles] cannot be blank or empty.\n";
                            storedProcessCheckPointHit = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterMasterStorer"))
                    {
                        storedMessage += "***parameterMasterStorer*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterStorylineDetails"))
                    {
                        storedMessage += "***parameterStorylineDetails*** cannot be blank or empty.\n";
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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            #endregion

            #region DEFINE data response

            dynamic storedDataResponse = null;

            string storedHtmlCssString = "";

            string storedHtmlInlineCSSString = "";
            Dictionary<string, List<dynamic>> storedHtmlMediaQueryArray = new Dictionary<string, List<dynamic>>();
            ArrayList storedHtmlMediaQueryFeatures = new ArrayList();
            Dictionary<string, List<dynamic>> storedHtmlPropertyArray = new Dictionary<string, List<dynamic>>();

            #endregion

            #region DEFINE html inputs

            string storedHtmlBaseDIScriptName = "";

            #endregion

            #region DEFINE parameter inputs

            SingleParmPoco_12_2_1_0 storedParameterInputs;

            #endregion

            #region MEMORIZE centralized processes

            aClass_Programming_ScriptAction_12_2_1_0<JObject> stored_CentralizedStorer = parameterInputs.Parameters["parameterMasterStorer"];
            //this._stored_CentralizedSensor = parameterCentralizedSensor;
            //this._stored_CentralizedStorer = parameterCentralizedStorer;
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
            storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONVERTING json to html styles");
            storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_5_0_Framework_Convert_HtmlCssJSONToInlineStyles_1_0");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters["parameterOPTIONALIgnoreDeveloperConsoleLog"));

            #endregion

            #region MEMORIZE html inputs

            dynamic storedHtmlStylesJSON = parameterInputs.Parameters["parameterHtmlStylesJSON"];
            string storedHtmlStyleFilePathLocal = storedHtmlStylesJSON.value[0]._2_2_2_4_1_clientInformationHTMLContentStylingItem.value.HTMLContentStylingItemFiles[0].StyleFilePathLocal;
            dynamic storedHtmlFilesArray = storedHtmlStylesJSON.value[0]._2_2_2_4_1_clientInformationHTMLContentStylingItem.value.HTMLContentStylingItemFiles[0].StyleFiles;

            #endregion

            #region MEMORIZE storyline details

            JObject storedStorylineDetails = parameterInputs.Parameters["parameterStorylineDetails"];
            //storedStorylineDetails_Parameters = parameterStorylineDetails_Parameters;

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE json to html conversion

            #region IDEAL CASE - USE json metadata

            Func<Task<string>> ExecuteConversionRequest = async () =>
            {
                try
                {
                    foreach (var file in storedHtmlFilesArray)
                    {
                        foreach (var element in file.StyleFileUseProperties)
                        {
                            if ((string)element.IsHtmlTag == "true" && element.properties.Count > 0)
                            {
                                if (element.IsMediaQuery == "true")
                                {
                                    var MediaQueryFeatures = new List<string>();

                                    if (element.MediaQuery.type != "")
                                    {
                                        MediaQueryFeatures.Add($"only {element.MediaQuery.type}");
                                    }

                                    foreach (var feature in element.MediaQuery.features)
                                    {
                                        foreach (var kv in JsonConvert.DeserializeObject<Dictionary<string, string>>(feature.ToString()))
                                        {
                                            MediaQueryFeatures.Add(kv.Key == "operator"
                                                ? (string)kv.Value
                                                : $"({kv.Key}: {kv.Value})");
                                        }
                                    }

                                    foreach (var prop in element.properties)
                                    {
                                        if (prop.propertyName != "")
                                        {
                                            var values = new JArray();
                                            if (!storedHtmlMediaQueryArray.ContainsKey($"@media {string.Join(" ", MediaQueryFeatures)}"))
                                            {
                                                storedHtmlMediaQueryArray.Add($"@media {string.Join(" ", MediaQueryFeatures)}", new List<dynamic>());
                                                foreach (var value in prop.properyValues)
                                                {
                                                    values.Add($"{value};");
                                                }

                                                storedHtmlMediaQueryArray[$"@media {string.Join(" ", MediaQueryFeatures)}"].Add(new JObject
                                        {
                                            {"propName", $"{prop.propertyName}"},
                                            {"values", values}
                                        });
                                            }
                                            else
                                            {
                                                foreach (var value in prop.properyValues)
                                                {
                                                    values.Add($"{value};");
                                                }

                                                storedHtmlMediaQueryArray[$"@media {string.Join(" ", MediaQueryFeatures)}"]
                                                    .Add(new JObject
                                                    {
                                                {"propName", prop.propertyName},
                                                {"values", values}
                                                    });
                                            }
                                        }
                                    }
                                }
                                else
                                {
                                    foreach (var prop in element.properties)
                                    {
                                        if (prop.propertyName != "")
                                        {
                                            if (!storedHtmlPropertyArray.ContainsKey($"{prop.propertyName}"))
                                            {
                                                storedHtmlPropertyArray.Add($"{prop.propertyName}", new List<dynamic>());
                                                foreach (var value in prop.properyValues)
                                                {
                                                    storedHtmlPropertyArray[$"{prop.propertyName}"].Add($"{value};");
                                                }
                                            }
                                            else
                                            {
                                                foreach (var value in prop.properyValues)
                                                {
                                                    storedHtmlPropertyArray[$"{prop.propertyName}"].Add($"{value};");
                                                }
                                            }
                                        }
                                    }

                                }
                            }
                            else if (element.IsHtmlTag == "false" && element.properties.Count > 0)
                            {
                                var values = new JArray();
                                if (element.IsMediaQuery == "true")
                                {
                                    var MediaQueryFeatures = new List<string>();

                                    if (element.MediaQuery.type != "")
                                    {
                                        MediaQueryFeatures.Add($"only {element.MediaQuery.type}");
                                    }

                                    foreach (var feature in element.MediaQuery.features)
                                    {

                                        foreach (var kv in JsonConvert.DeserializeObject<Dictionary<string, string>>(feature.ToString()))
                                        {
                                            MediaQueryFeatures.Add(kv.Key == "operator"
                                                ? (string)kv.Value
                                                : $"({kv.Key}: {kv.Value})");

                                        }
                                    }

                                    foreach (var prop in element.properties)
                                    {
                                        if (prop.propertyName != "")
                                        {
                                            values.Add($"{prop.propertyName} : {prop.properyValues[0]};");
                                        }
                                    }

                                    if (!storedHtmlMediaQueryArray.ContainsKey($"@media {string.Join(" ", MediaQueryFeatures)}"))
                                    {
                                        storedHtmlMediaQueryArray.Add($"@media {string.Join(" ", MediaQueryFeatures)}",
                                            new List<dynamic>());

                                        storedHtmlMediaQueryArray[$"@media {string.Join(" ", MediaQueryFeatures)}"]
                                            .Add(new JObject
                                            {
                                        {"attributeID", element.attributeID},
                                        {"values", values}
                                            });
                                    }
                                    else
                                    {
                                        storedHtmlMediaQueryArray[$"@media {string.Join(" ", MediaQueryFeatures)}"].Add(new JObject
                                    {
                                        {"attributeID", element.attributeID },
                                        {"values", values}
                                    });


                                    }
                                }
                                else
                                {
                                    foreach (var prop in element.properties)
                                    {
                                        if (prop.propertyName != "")
                                        {
                                            values.Add($"{prop.propertyName} : {prop.properyValues[0]};");
                                        }
                                    }

                                    if (!storedHtmlPropertyArray.ContainsKey($"{element.attributeID}"))
                                    {
                                        storedHtmlPropertyArray.Add($"{element.attributeID}", new List<dynamic>());
                                        storedHtmlPropertyArray[$"{element.attributeID}"].Add(new JObject
                                {
                                    {"attributeID", element.attributeID },
                                    {"values", values}
                                });
                                    }
                                    else
                                    {
                                        foreach (var value in values)
                                        {
                                            storedHtmlPropertyArray[$"{element.attributeID}"].FirstOrDefault().values.Add(value);
                                        }
                                    }
                                }
                            }
                            else
                            {
                                Console.WriteLine("element.IsHtmlTag Missing!");
                            }
                        }
                    }

                    foreach (var key in storedHtmlPropertyArray.Keys)
                    {
                        var obj = storedHtmlPropertyArray[key];

                        if (obj.FirstOrDefault() is string)
                        {
                            storedHtmlCssString += $@"{ key }
                    {{ \n { string.Join(" ", obj.ToArray())} \n}}\n";
                        }
                        else
                        {

                            if (obj.Any())
                            {
                                string attributeID = obj.FirstOrDefault().attributeID;


                                if (attributeID.Contains("#"))
                                {
                                    storedHtmlCssString += @$"{ obj[0].attributeID}
                                {{ \n { string.Join("", obj.FirstOrDefault().values)} \n}}\n";
                                }
                                else
                                {
                                    storedHtmlCssString += $"#{obj.FirstOrDefault().attributeID} {{ \n {string.Join("", obj.FirstOrDefault().values)} \n}}\n";
                                }
                            }

                        }
                    }

                    foreach (var key in storedHtmlMediaQueryArray.Keys)
                    {
                        var obj = storedHtmlMediaQueryArray[key];
                        var innerCss = "";

                        if (obj != null)
                        {
                            foreach (var element in obj)
                            {
                                string attributeID = element.attributeID;
                                if (attributeID == null)
                                {
                                    innerCss += $"{element.propName} \n {{ \n {string.Join(" ", element.values)} \n}}\n";
                                }
                                else
                                {
                                    if (attributeID.Contains("#"))
                                    {
                                        innerCss += $"{ element.attributeID} \n {{ \n {string.Join(" ", element.values)} \n}}\n";
                                    }
                                    else
                                    {
                                        innerCss += $"#{element.attributeID} \n {{ \n {string.Join(" ", element.values)} \n}}\n";
                                    }
                                }
                                //Console.WriteLine(element.values);
                            }
                        }

                        storedHtmlCssString += $@"{ key}
                {{\n { innerCss} \n}}";
                    }

                    storedHtmlCssString = $"<style>{ storedHtmlCssString }</style>";

                    storedHtmlCssString = storedHtmlCssString.Replace("../999.0.3.BaseDI.Professional.QuickStart.Templates", "/StaticFiles");
                    storedHtmlCssString = Regex.Unescape(storedHtmlCssString);
                    
                    return await Task.FromResult<string>(storedHtmlCssString).ConfigureAwait(true);
                }
                catch (Exception mistake)
                {
                    #region EDGE CASE - USE developer logger

                    if (storedDeveloperMode)
                    {
                        storedClientOrServerInstance["processStepNumber"] = (int)storedClientOrServerInstance["processStepNumber"] + 1;

                        storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "FAILED converting json to html styles");
                        storedDeveloperLoggingInputs.Parameters.Add("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                        storedDeveloperLoggingInputs.Parameters.Add("parameterStepNumberReplace", storedClientOrServerInstance["processStepNumber"]);
                        storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_5_0_Framework_Convert_HtmlCssJSONToInlineStyles_1_0.ExecuteConversionRequest");

                        await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                    }

                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw new Exception("STORAGE request failed " + mistake.ToString());

                    #endregion
                }
            };

            storedDataResponse = await ExecuteConversionRequest();

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN converted data

            #region IDEAL CASE - USE html string

            return storedDataResponse;

            #endregion

            #endregion

            #endregion                              
        }

        public static async Task<string> Step_6_0_Framework_Convert_HtmlScriptsJSONToInlineScripts_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
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
                storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONVERTING json to html styles");
                storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", storedClientOrServerInstance["storedActionName"]);
                storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", storedClientOrServerInstance["storedAppSettings"]);
                storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", storedClientOrServerInstance);
                storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.ts");
                storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_6_0_Framework_Convert_HtmlScriptsJSONToInlineScripts_1_0.ValidateInputs()");

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
                            storedMessage += "***parameterClientOrServerInstance*** must contain a key of ***storedAppSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.setValue(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessCheckPointHit = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterAppSettings"))
                    {
                        storedMessage += "***parameterAppSettings*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterHtmlScriptsJSON"))
                    {
                        storedMessage += "***parameterHtmlScriptsJSON*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }
                    else
                    {
                        if (!parameterInputs.Parameters["parameterHtmlScriptsJSON"].value[0]?._2_2_2_5_1_clientInformationHTMLContentScriptItem?.value?.HTMLContentScriptItemFiles[0]?.ScriptFilePathLocal)
                        {
                            storedMessage += "***parameterHtmlScriptsJSON*** [ScriptFilePathLocal] cannot be blank or empty.\n";
                            storedProcessCheckPointHit = true;
                        }

                        if (!parameterInputs.Parameters["parameterHtmlScriptsJSON"].value[0]?._2_2_2_5_1_clientInformationHTMLContentScriptItem?.value?.HTMLContentScriptItemFiles[0]?.ScriptFiles)
                        {
                            storedMessage += "***parameterHtmlScriptsJSON*** [ScriptFiles] cannot be blank or empty.\n";
                            storedProcessCheckPointHit = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterMasterStorer"))
                    {
                        storedMessage += "***parameterMasterStorer*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterStorylineDetails"))
                    {
                        storedMessage += "***parameterStorylineDetails*** cannot be blank or empty.\n";
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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            #endregion

            #region DEFINE data response

            dynamic storedDataResponse = null;

            string storedHtmlCssString = "";

            string storedHtmlInlineCSSString = "";
            Dictionary<string, List<dynamic>> storedHtmlMediaQueryArray = new Dictionary<string, List<dynamic>>();
            ArrayList storedHtmlMediaQueryFeatures = new ArrayList();
            Dictionary<string, List<dynamic>> storedHtmlPropertyArray = new Dictionary<string, List<dynamic>>();

            #endregion

            #region DEFINE html inputs

            string storedHtmlBaseDIScriptName = "";

            #endregion

            #region DEFINE parameter inputs

            SingleParmPoco_12_2_1_0 storedParameterInputs;

            #endregion

            #region MEMORIZE centralized processes

            aClass_Programming_ScriptAction_12_2_1_0<JObject> stored_CentralizedStorer = parameterInputs.Parameters["parameterMasterStorer"];
            //this._stored_CentralizedSensor = parameterCentralizedSensor;
            //this._stored_CentralizedStorer = parameterCentralizedStorer;
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
            storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONVERTING json to html styles");
            storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_6_0_Framework_Convert_HtmlScriptsJSONToInlineScripts_1_0");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters["parameterOPTIONALIgnoreDeveloperConsoleLog"));

            #endregion

            #region MEMORIZE html inputs

            dynamic storedHtmlStylesJSON = parameterInputs.Parameters["parameterHtmlStylesJSON"];
            string storedHtmlStyleFilePathLocal = storedHtmlStylesJSON.value[0]._2_2_2_4_1_clientInformationHTMLContentStylingItem.value.HTMLContentStylingItemFiles[0].StyleFilePathLocal;
            dynamic storedHtmlFilesArray = storedHtmlStylesJSON.value[0]._2_2_2_4_1_clientInformationHTMLContentStylingItem.value.HTMLContentStylingItemFiles[0].StyleFiles;

            #endregion

            #region MEMORIZE storyline details

            JObject storedStorylineDetails = parameterInputs.Parameters["parameterStorylineDetails"];
            //storedStorylineDetails_Parameters = parameterStorylineDetails_Parameters;

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE json to html conversion

            #region IDEAL CASE - USE json metadata

            Func<Task<string>> ExecuteConversionRequest = async () =>
            {
                try
                {
                    return await Task.FromResult<string>("").ConfigureAwait(true);
                }
                catch (Exception mistake)
                {
                    #region EDGE CASE - USE developer logger

                    if (storedDeveloperMode)
                    {
                        storedClientOrServerInstance["processStepNumber"] = (int)storedClientOrServerInstance["processStepNumber"] + 1;

                        storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "FAILED converting json to html styles");
                        storedDeveloperLoggingInputs.Parameters.Add("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                        storedDeveloperLoggingInputs.Parameters.Add("parameterStepNumberReplace", storedClientOrServerInstance["processStepNumber"]);
                        storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_5_0_Framework_Convert_HtmlCssJSONToInlineStyles_1_0.ExecuteConversionRequest");

                        await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                    }

                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw new Exception("STORAGE request failed " + mistake.ToString());

                    #endregion
                }
            };

            storedDataResponse = await ExecuteConversionRequest();

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN converted data

            #region IDEAL CASE - USE html string

            return storedDataResponse;

            #endregion

            #endregion

            #endregion                              
        }

        public static async Task<string> Step_7_0_Framework_Convert_HtmlMetaDataJSONToInlineMetaData_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
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
                storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONVERTING json to html styles");
                storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", storedClientOrServerInstance["storedActionName"]);
                storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", storedClientOrServerInstance["storedAppSettings"]);
                storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", storedClientOrServerInstance);
                storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.ts");
                storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_7_0_Framework_Convert_HtmlMetaDataJSONToInlineMetaData_1_0.ValidateInputs()");

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
                            storedMessage += "***parameterClientOrServerInstance*** must contain a key of ***storedAppSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.setValue(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessCheckPointHit = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterAppSettings"))
                    {
                        storedMessage += "***parameterAppSettings*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterHtmlMetaDataJSON"))
                    {
                        storedMessage += "***parameterHtmlMetaDataJSON*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }
                    else
                    {
                        if (!parameterInputs.Parameters["parameterHtmlMetaDataJSON"].value[0]?._2_2_2_6_1_clientInformationHTMLContentScriptItem?.value?.HTMLContentScriptItemFiles[0]?.MetaDataFilePathLocal)
                        {
                            storedMessage += "***parameterHtmlMetaDataJSON*** [MetaDataFilePathLocal] cannot be blank or empty.\n";
                            storedProcessCheckPointHit = true;
                        }

                        if (!parameterInputs.Parameters["parameterHtmlScriptsJSON"].value[0]?._2_2_2_6_1_clientInformationHTMLContentScriptItem?.value?.HTMLContentScriptItemFiles[0]?.MetaDataFiles)
                        {
                            storedMessage += "***parameterHtmlMetaDataJSON*** [MetaDataFiles] cannot be blank or empty.\n";
                            storedProcessCheckPointHit = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterMasterStorer"))
                    {
                        storedMessage += "***parameterMasterStorer*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterStorylineDetails"))
                    {
                        storedMessage += "***parameterStorylineDetails*** cannot be blank or empty.\n";
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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            #endregion

            #region DEFINE data response

            dynamic storedDataResponse = null;

            string storedHtmlCssString = "";

            string storedHtmlInlineCSSString = "";
            Dictionary<string, List<dynamic>> storedHtmlMediaQueryArray = new Dictionary<string, List<dynamic>>();
            ArrayList storedHtmlMediaQueryFeatures = new ArrayList();
            Dictionary<string, List<dynamic>> storedHtmlPropertyArray = new Dictionary<string, List<dynamic>>();

            #endregion

            #region DEFINE html inputs

            string storedHtmlBaseDIScriptName = "";

            #endregion

            #region DEFINE parameter inputs

            SingleParmPoco_12_2_1_0 storedParameterInputs;

            #endregion

            #region MEMORIZE centralized processes

            aClass_Programming_ScriptAction_12_2_1_0<JObject> stored_CentralizedStorer = parameterInputs.Parameters["parameterMasterStorer"];
            //this._stored_CentralizedSensor = parameterCentralizedSensor;
            //this._stored_CentralizedStorer = parameterCentralizedStorer;
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
            storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONVERTING json to html styles");
            storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_7_0_Framework_Convert_HtmlMetaDataJSONToInlineMetaData_1_0");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters["parameterOPTIONALIgnoreDeveloperConsoleLog"));

            #endregion

            #region MEMORIZE html inputs

            dynamic storedHtmlStylesJSON = parameterInputs.Parameters["parameterHtmlStylesJSON"];
            string storedHtmlStyleFilePathLocal = storedHtmlStylesJSON.value[0]._2_2_2_4_1_clientInformationHTMLContentStylingItem.value.HTMLContentStylingItemFiles[0].StyleFilePathLocal;
            dynamic storedHtmlFilesArray = storedHtmlStylesJSON.value[0]._2_2_2_4_1_clientInformationHTMLContentStylingItem.value.HTMLContentStylingItemFiles[0].StyleFiles;

            #endregion

            #region MEMORIZE storyline details

            JObject storedStorylineDetails = parameterInputs.Parameters["parameterStorylineDetails"];
            //storedStorylineDetails_Parameters = parameterStorylineDetails_Parameters;

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE json to html conversion

            #region IDEAL CASE - USE json metadata

            Func<Task<string>> ExecuteConversionRequest = async () =>
            {
                try
                {
                    return await Task.FromResult<string>("").ConfigureAwait(true);
                }
                catch (Exception mistake)
                {
                    #region EDGE CASE - USE developer logger

                    if (storedDeveloperMode)
                    {
                        storedClientOrServerInstance["processStepNumber"] = (int)storedClientOrServerInstance["processStepNumber"] + 1;

                        storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "FAILED converting json to html styles");
                        storedDeveloperLoggingInputs.Parameters.Add("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                        storedDeveloperLoggingInputs.Parameters.Add("parameterStepNumberReplace", storedClientOrServerInstance["processStepNumber"]);
                        storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_5_0_Framework_Convert_HtmlCssJSONToInlineStyles_1_0.ExecuteConversionRequest");

                        await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                    }

                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw new Exception("STORAGE request failed " + mistake.ToString());

                    #endregion
                }
            };

            storedDataResponse = await ExecuteConversionRequest();

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN converted data

            #region IDEAL CASE - USE html string

            return storedDataResponse;

            #endregion

            #endregion

            #endregion                              
        }

        public static async Task<string> Step_8_0_Framework_Convert_HtmlStructureToString_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
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
                storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", storedClientOrServerInstance["storedActionName"]);
                storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", storedClientOrServerInstance["storedAppSettings"]);
                storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", storedClientOrServerInstance);
                storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.ts");
                storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_X_X_Framework_Store_CacheDataToPersistentStorage_1_0.ValidateInputs()");

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
                            storedMessage += "***parameterClientOrServerInstance*** must contain a key of ***storedAppSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.setValue(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessCheckPointHit = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterAppSettings"))
                    {
                        storedMessage += "***parameterAppSettings*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterHtmlMetaData"))
                    {
                        storedMessage += "***parameterHtmlMetaData*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterHtmlTitle"))
                    {
                        storedMessage += "***parameterTitle*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterHtmlAdditionalHeadData"))
                    {
                        storedMessage += "***parameterHtmlAdditionalHeadData*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterHtmlScripts"))
                    {
                        storedMessage += "***parameterHtmlScripts*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterHtmlStyles"))
                    {
                        storedMessage += "***parameterHtmlStyles*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterHtmlBody"))
                    {
                        storedMessage += "***parameterHtmlBody*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterMasterStorer"))
                    {
                        storedMessage += "***parameterMasterStorer*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterStorylineDetails"))
                    {
                        storedMessage += "***parameterStorylineDetails*** cannot be blank or empty.\n";
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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            #endregion

            #region DEFINE data response

            dynamic storedDataResponse = null;

            #endregion

            #region DEFINE html inputs

            string storedHtmlBaseDIScriptName = "";

            #endregion

            #region DEFINE parameter inputs

            SingleParmPoco_12_2_1_0 storedParameterInputs;

            #endregion

            #region MEMORIZE centralized processes

            aClass_Programming_ScriptAction_12_2_1_0<JObject> stored_CentralizedStorer = parameterInputs.Parameters["parameterMasterStorer"];
            //this._stored_CentralizedSensor = parameterCentralizedSensor;
            //this._stored_CentralizedStorer = parameterCentralizedStorer;
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
            storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "STORING html template");
            storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_6_0_Framework_Convert_HtmlStructureToString_1_0");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters["parameterOPTIONALIgnoreDeveloperConsoleLog"));

            #endregion

            #region MEMORIZE html inputs

            string storedHtmlPageTemplate = @"<!DOCTYPE html>
                <html lang='en'>
                <head>
                    {metaDataReplace}
                    <title>{titleReplace}</title>
                    {scriptsReplace}
                    {stylesReplace}
                    {additionalHeadData}
                </head>
                <body>
                    {bodyReplace}
                </body>
                </ html>";

            string storedHtmlMetaData = parameterInputs.Parameters["parameterHtmlMetaData"];
            string storedHtmlTitle = parameterInputs.Parameters["parameterHtmlTitle"];
            string storedHtmlScripts = parameterInputs.Parameters["parameterHtmlScripts"];
            string storedHtmlAdditionalHeadData = parameterInputs.Parameters["parameterHtmlAdditionalHeadData"];
            string storedHtmlStyles = parameterInputs.Parameters["parameterHtmlStyles"];
            string storedHtmlBody = parameterInputs.Parameters["parameterHtmlBody"];
            
            #endregion

            #region MEMORIZE storyline details

            JObject storedStorylineDetails = parameterInputs.Parameters["parameterStorylineDetails"];
            //storedStorylineDetails_Parameters = parameterStorylineDetails_Parameters;

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE json to html conversion

            #region IDEAL CASE - USE json metadata

            #region 1. READ cached baseDI script path

            Func<string, string, aClass_Programming_ScriptAction_12_2_1_0<JObject>, Dictionary<string, object>, JObject, dynamic, Task<string>> ExecuteStorageRequest = async (string parameterHtmlBaseDIScriptName, string parameterHtmlScripts, aClass_Programming_ScriptAction_12_2_1_0<JObject> parameterCentralizedStorer, Dictionary<string, object> parameterClientOrServerInstance, JObject parameterStorylineDetails, dynamic parameterFilterDataResponse) => {
                try
                {
                    storedParameterInputs = new SingleParmPoco_12_2_1_0();

                    storedParameterInputs.Parameters.Add("parameterClientOrServerInstance", parameterClientOrServerInstance);
                    storedParameterInputs.Parameters.Add("parameterCRUDVerb", "Read");
                    storedParameterInputs.Parameters.Add("parameterDirectorOrExperienceName", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0");
                    storedParameterInputs.Parameters.Add("parameterMasterStorer", parameterCentralizedStorer);
                    storedParameterInputs.Parameters.Add("parameterStorageValue", parameterStorylineDetails);
                    storedParameterInputs.Parameters.Add("parameterStorylineDetails", parameterStorylineDetails);
                    storedParameterInputs.Parameters.Add("parameterPageName", "");
                    storedParameterInputs.Parameters.Add("parameterStorageDescription", "READING client side BaseDI script SOURCE PATH");
                    storedParameterInputs.Parameters.Add("parameterUniqueStorageKey", "BaseDI_PresentationScript_SrcLocation");

                    parameterFilterDataResponse = await Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Store_CacheDataToPersistentStorage_1_0(storedParameterInputs);
                    //parameterFilterDataResponse = (parameterFilterDataResponse && parameterFilterDataResponse.outputs.length > 0) ? parameterFilterDataResponse.outputs[1].baseDIObservations[parameterFilterDataResponse.outputs[1].baseDIObservations.length - 1] : null;

                    //if (parameterFilterDataResponse)
                    //{
                    //    parameterHtmlBaseDIScriptName = parameterFilterDataResponse[Object.keys(parameterFilterDataResponse)[0]].observation.metadata[3].item.data[0].dataResult

                    //    parameterHtmlScripts += @"<script src = ""/scripts/${parameterHtmlBaseDIScriptName}"" type = ""text/javascript""></script>`";
                    //}

                    return ""; // parameterHtmlScripts;

                }
                catch (Exception mistake)
                {
                    #region EDGE CASE - USE developer logger

                    if (storedDeveloperMode)
                    {
                        storedClientOrServerInstance["processStepNumber"] = (int)storedClientOrServerInstance["processStepNumber"] + 1;

                        storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "FAILED reading cache");
                        storedDeveloperLoggingInputs.Parameters.Add("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                        storedDeveloperLoggingInputs.Parameters.Add("parameterStepNumberReplace", storedClientOrServerInstance["processStepNumber"]);
                        storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_6_0_Framework_Convert_HtmlStructureToString_1_0.ExecuteStorageRequest");

                        await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                    }

                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw new Exception("STORAGE request failed " + mistake.ToString());

                    #endregion
                }
            };

            if (storedAppSettings.GetValue<string>("AppSettings:APP_ENV") == "SERVER")
            {
                storedHtmlScripts = await ExecuteStorageRequest(storedHtmlBaseDIScriptName, storedHtmlScripts, stored_CentralizedStorer, storedClientOrServerInstance, storedStorylineDetails, storedDataResponse);
            }

            #endregion

            #region 2. CONVERT inputs to html template

            Func<string, string, string, string, string, string, string, Task<string>> ExecuteConversionRequest = async (string parameterHtmlPageTemplate, string parameterHtmlMetaData, string parameterHtmlTitle, string parameterHtmlScripts, string parameterHtmlStyles, string parameterHtmlBody, string parameterHtmlAdditionalHeadData) => {
                parameterHtmlPageTemplate = parameterHtmlPageTemplate.Replace("{metaDataReplace}", parameterHtmlMetaData);
                parameterHtmlPageTemplate = parameterHtmlPageTemplate.Replace("{titleReplace}", parameterHtmlTitle);
                parameterHtmlPageTemplate = parameterHtmlPageTemplate.Replace("{additionalHeadData}", parameterHtmlAdditionalHeadData);
                parameterHtmlPageTemplate = parameterHtmlPageTemplate.Replace("{scriptsReplace}", parameterHtmlScripts);
                parameterHtmlPageTemplate = parameterHtmlPageTemplate.Replace("{stylesReplace}", parameterHtmlStyles);
                parameterHtmlPageTemplate = parameterHtmlPageTemplate.Replace("{bodyReplace}", parameterHtmlBody);

                return await Task.FromResult<string>(parameterHtmlPageTemplate).ConfigureAwait(true);
            };

            storedHtmlPageTemplate = await ExecuteConversionRequest(storedHtmlPageTemplate, storedHtmlMetaData, storedHtmlTitle, storedHtmlScripts, storedHtmlStyles, storedHtmlBody, storedHtmlAdditionalHeadData);

            #endregion

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN converted data

            #region IDEAL CASE - USE html string

            return storedHtmlPageTemplate;

            #endregion

            #endregion

            #endregion          
        }


        #endregion
    }
}
