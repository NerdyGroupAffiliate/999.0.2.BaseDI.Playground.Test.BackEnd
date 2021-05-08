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
    public class Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0
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
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONVERTING json to html attributes");
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_0_0_Framework_Store_HtmlAttributesToArray_1_0.ValidateInputs()");

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
                            storedOutputResponseMessage += "***parameterProcessRequestTracker*** must contain a key of ***storedProcessRequestSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.setValue(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestSettings"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestSettings*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterHtmlAttributes"))
                    {
                        storedOutputResponseMessage += "***parameterHtmlAttributes*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestMasterStorer"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestMasterStorer*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestDataStorylineDetails"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails*** cannot be blank or empty.\n";
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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            #endregion

            #region DEFINE data response

            dynamic storedOutputResponseData = null;

            #endregion

            #region DEFINE html inputs


            #endregion

            #region DEFINE parameter inputs


            #endregion

            #region MEMORIZE centralized processes

            aClass_Programming_ScriptAction_12_2_1_0<JObject> storedProcessRequestCentralizedStorer = parameterInputs.Parameters["parameterProcessRequestMasterStorer"];
            //this._storedProcessRequestCentralizedSensor = parameterProcessRequestCentralizedSensor;
            //this._storedProcessRequestCentralizedStorer = parameterProcessRequestCentralizedStorer;
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
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONVERTING json to html attributes");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_0_0_Framework_Store_HtmlAttributesToArray_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters["parameterOPTIONALIgnoreDeveloperConsoleLog"));

            #endregion

            #region MEMORIZE html inputs

            dynamic storedHtmlAttributes = parameterInputs.Parameters["parameterHtmlAttributes"];

            #endregion

            #region MEMORIZE storyline details

            JObject storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

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
                catch (Exception storedProcessRequestMistake)
                {
                    #region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode)
                    {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "FAILED converting json to html attributes");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_0_0_Framework_Store_HtmlAttributesToArray_1_0.ExecuteConversionRequest");

                        await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw new Exception("CONVERSION request failed " +  storedProcessRequestMistake.ToString());

                    #endregion
                }
            };

            storedOutputResponseData = await ExecuteConversionRequest(storedHtmlAttributes, storedOutputResponseData);

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN converted data

            #region IDEAL CASE - USE html string

            return string.Join(" ", storedOutputResponseData);

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
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONVERTING json to html container");
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_0_0_Framework_Store_HtmlAttributesToArray_1_0.ValidateInputs()");

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
                            storedOutputResponseMessage += "***parameterProcessRequestTracker*** must contain a key of ***storedProcessRequestSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.setValue(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestSettings"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestSettings*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterHtmlContainerJSON"))
                    {
                        storedOutputResponseMessage += "***parameterHtmlContainerJSON*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestMasterStorer"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestMasterStorer*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestDataStorylineDetails"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails*** cannot be blank or empty.\n";
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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            #endregion

            #region DEFINE data response

            dynamic storedOutputResponseData = null;

            #endregion

            #region DEFINE html inputs


            #endregion

            #region DEFINE parameter inputs


            #endregion

            #region MEMORIZE centralized processes

            aClass_Programming_ScriptAction_12_2_1_0<JObject> storedProcessRequestCentralizedStorer = parameterInputs.Parameters["parameterProcessRequestMasterStorer"];
            //this._storedProcessRequestCentralizedSensor = parameterProcessRequestCentralizedSensor;
            //this._storedProcessRequestCentralizedStorer = parameterProcessRequestCentralizedStorer;
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
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONVERTING json to html container");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_1_0_Framework_Convert_HtmlContainerJsonToHtml_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters["parameterOPTIONALIgnoreDeveloperConsoleLog"));

            #endregion

            #region MEMORIZE html inputs

            dynamic storedHtmlContainerJSON = parameterInputs.Parameters["parameterHtmlContainerJSON"];

            #endregion

            #region MEMORIZE storyline details

            JObject storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

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
                catch (Exception storedProcessRequestMistake)
                {
                    #region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode)
                    {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "FAILED converting to html container");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_1_0_Framework_Convert_HtmlContainerJsonToHtml_1_0.ExecuteConversionRequest");

                        await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw new Exception("STORAGE request failed " +  storedProcessRequestMistake.ToString());

                    #endregion
                }
            };

            storedOutputResponseData = await ExecuteConversionRequest(storedHtmlContainerJSON);

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN converted data

            #region IDEAL CASE - USE html string

            return storedOutputResponseData;

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
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONVERTING json to html row");
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_0_0_Framework_Store_HtmlAttributesToArray_1_0.ValidateInputs()");

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
                            storedOutputResponseMessage += "***parameterProcessRequestTracker*** must contain a key of ***storedProcessRequestSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.setValue(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestSettings"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestSettings*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterHtmlContainerString"))
                    {
                        storedOutputResponseMessage += "***parameterHtmlContainerString*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterHtmlRowsJSON"))
                    {
                        storedOutputResponseMessage += "***parameterHtmlRowsJSON*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestMasterStorer"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestMasterStorer*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestDataStorylineDetails"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails*** cannot be blank or empty.\n";
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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            #endregion

            #region DEFINE data response

            dynamic storedOutputResponseData = null;
            ArrayList storedDataResponseList = new ArrayList();

            #endregion

            #region DEFINE html inputs


            #endregion

            #region DEFINE parameter inputs


            #endregion

            #region MEMORIZE centralized processes

            aClass_Programming_ScriptAction_12_2_1_0<JObject> storedProcessRequestCentralizedStorer = parameterInputs.Parameters["parameterProcessRequestMasterStorer"];
            //this._storedProcessRequestCentralizedSensor = parameterProcessRequestCentralizedSensor;
            //this._storedProcessRequestCentralizedStorer = parameterProcessRequestCentralizedStorer;
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
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONVERTING json to html row");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_2_0_Framework_Convert_HtmlRowsJsonToHtml_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters["parameterOPTIONALIgnoreDeveloperConsoleLog"));

            #endregion

            #region MEMORIZE html inputs

            dynamic storedHtmlContainerString = parameterInputs.Parameters["parameterHtmlContainerString"];
            dynamic storedHtmlRowsJSON = parameterInputs.Parameters["parameterHtmlRowsJSON"];

            #endregion

            #region MEMORIZE storyline details

            JObject storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

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
                catch (Exception storedProcessRequestMistake)
                {
                    #region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode)
                    {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "FAILED converting json to html row");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_2_0_Framework_Convert_HtmlRowsJsonToHtml_1_0.ExecuteConversionRequest");

                        await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw new Exception("STORAGE request failed " +  storedProcessRequestMistake.ToString());

                    #endregion
                }
            };

            storedOutputResponseData = await ExecuteConversionRequest(storedHtmlContainerString, storedHtmlRowsJSON, storedDataResponseList);

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN converted data

            #region IDEAL CASE - USE html string

            return storedOutputResponseData;

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
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONVERTING json to html column");
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_3_0_Framework_Convert_HtmlColumnsJsonToHtml_1_0.ValidateInputs()");

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
                            storedOutputResponseMessage += "***parameterProcessRequestTracker*** must contain a key of ***storedProcessRequestSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.setValue(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestSettings"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestSettings*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterHtmlRowString"))
                    {
                        storedOutputResponseMessage += "***parameterHtmlRowString*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterHtmlColumnsJSON"))
                    {
                        storedOutputResponseMessage += "***parameterHtmlColumnsJSON*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestMasterStorer"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestMasterStorer*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestDataStorylineDetails"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails*** cannot be blank or empty.\n";
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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            #endregion

            #region DEFINE data response

            string storedColumnItem = "";

            dynamic storedOutputResponseData = null;

            #endregion

            #region DEFINE html inputs


            #endregion

            #region DEFINE parameter inputs


            #endregion

            #region MEMORIZE centralized processes

            aClass_Programming_ScriptAction_12_2_1_0<JObject> storedProcessRequestCentralizedStorer = parameterInputs.Parameters["parameterProcessRequestMasterStorer"];
            //this._storedProcessRequestCentralizedSensor = parameterProcessRequestCentralizedSensor;
            //this._storedProcessRequestCentralizedStorer = parameterProcessRequestCentralizedStorer;
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
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "PREPARING caching request");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_3_0_Framework_Convert_HtmlColumnsJsonToHtml_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters["parameterOPTIONALIgnoreDeveloperConsoleLog"));

            #endregion

            #region MEMORIZE html inputs

            string storedHtmlRowString = parameterInputs.Parameters["parameterHtmlRowString"];
            dynamic storedHtmlColumnsJSON = parameterInputs.Parameters["parameterHtmlColumnsJSON"];

            #endregion

            #region MEMORIZE storyline details

            JObject storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

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
                catch (Exception storedProcessRequestMistake)
                {
                    #region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode)
                    {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "FAILED converting json to html column");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_3_0_Framework_Convert_HtmlColumnsJsonToHtml_1_0.ExecuteConversionRequest");

                        await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw new Exception("STORAGE request failed " +  storedProcessRequestMistake.ToString());

                    #endregion
                }
            };

            storedOutputResponseData = await ExecuteConversionRequest(storedHtmlRowString, storedHtmlColumnsJSON, storedColumnItem);

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN converted data

            #region IDEAL CASE - USE html string

            return storedOutputResponseData;

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
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONVERTING json to html content");
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_4_0_Framework_Convert_HtmlContentJsonToHtml_1_0.ValidateInputs()");

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
                            storedOutputResponseMessage += "***parameterProcessRequestTracker*** must contain a key of ***storedProcessRequestSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.setValue(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestSettings"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestSettings*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterHtmlColumnString"))
                    {
                        storedOutputResponseMessage += "***parameterHtmlColumnString*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterHtmlContentJSON"))
                    {
                        storedOutputResponseMessage += "***parameterHtmlContentJSON*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestMasterStorer"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestMasterStorer*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestDataStorylineDetails"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails*** cannot be blank or empty.\n";
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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            #endregion

            #region DEFINE data response

            string storedContent = "";

            dynamic storedOutputResponseData = null;
            Dictionary<string, List<string>> storedDataResponseIdsAndContent = new Dictionary<string, List<string>>();

            #endregion

            #region DEFINE html inputs


            #endregion

            #region DEFINE parameter inputs


            #endregion

            #region MEMORIZE centralized processes

            aClass_Programming_ScriptAction_12_2_1_0<JObject> storedProcessRequestCentralizedStorer = parameterInputs.Parameters["parameterProcessRequestMasterStorer"];
            //this._storedProcessRequestCentralizedSensor = parameterProcessRequestCentralizedSensor;
            //this._storedProcessRequestCentralizedStorer = parameterProcessRequestCentralizedStorer;
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
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONVERTING json to html content");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_4_0_Framework_Convert_HtmlContentJsonToHtml_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters["parameterOPTIONALIgnoreDeveloperConsoleLog"));

            #endregion

            #region MEMORIZE html inputs

            string storedHtmlColumnString = parameterInputs.Parameters["parameterHtmlColumnString"];
            dynamic storedHtmlContentJSON = parameterInputs.Parameters["parameterHtmlContentJSON"];

            #endregion

            #region MEMORIZE storyline details

            JObject storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE json to html conversion

            #region IDEAL CASE - USE json metadata

            Func<string, dynamic, Dictionary<string, List<string>>, dynamic, IConfiguration, Task<string>> ExecuteConversionRequest = async (string parameterHtmlColumnString, dynamic parameterHtmlContentJSON, Dictionary<string, List<string>> parameterFilterDataResponseIdsAndContent, dynamic parameterContent, IConfiguration parameterProcessRequestSettings) =>
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

                    if (parameterProcessRequestSettings.GetValue<string>("AppSettings:APP_ENV") == "SERVER")
                    {
                        parameterHtmlColumnString = parameterHtmlColumnString.Replace("../999.0.3.BaseDI.Professional.QuickStart.Templates", "/StaticFiles");
                    }                    

                    return await Task.FromResult<string>(parameterHtmlColumnString).ConfigureAwait(true);

                }
                catch (Exception storedProcessRequestMistake)
                {
                    #region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode)
                    {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "FAILED converting json to html content");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_4_0_Framework_Convert_HtmlContentJsonToHtml_1_0.ExecuteConversionRequest");

                        await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw new Exception("STORAGE request failed " +  storedProcessRequestMistake.ToString());

                    #endregion
                }
            };

            storedOutputResponseData = await ExecuteConversionRequest(storedHtmlColumnString, storedHtmlContentJSON, storedDataResponseIdsAndContent, storedContent, storedProcessRequestSettings);

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN converted data

            #region IDEAL CASE - USE html string

            return storedOutputResponseData;

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
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONVERTING json to html styles");
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_5_0_Framework_Convert_HtmlCssJSONToInlineStyles_1_0.ValidateInputs()");

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
                            storedOutputResponseMessage += "***parameterProcessRequestTracker*** must contain a key of ***storedProcessRequestSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.setValue(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestSettings"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestSettings*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterHtmlStylesJSON"))
                    {
                        storedOutputResponseMessage += "***parameterHtmlStylesJSON*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }
                    else
                    {
                        if (!parameterInputs.Parameters["parameterHtmlStylesJSON"].value[0]?._2_2_2_4_1_clientInformationHTMLContentStylingItem?.value?.HTMLContentStylingItemFiles[0]?.StyleFilePathLocal)
                        {
                            storedOutputResponseMessage += "***parameterHtmlStylesJSON*** [StyleFilePathLocal] cannot be blank or empty.\n";
                            storedProcessRequestMistakeMade = true;
                        }

                        if (!parameterInputs.Parameters["parameterHtmlStylesJSON"].value[0]?._2_2_2_4_1_clientInformationHTMLContentStylingItem?.value?.HTMLContentStylingItemFiles[0]?.StyleFiles)
                        {
                            storedOutputResponseMessage += "***parameterHtmlStylesJSON*** [StyleFiles] cannot be blank or empty.\n";
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestMasterStorer"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestMasterStorer*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestDataStorylineDetails"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails*** cannot be blank or empty.\n";
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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            #endregion

            #region DEFINE data response

            dynamic storedOutputResponseData = null;

            string storedHtmlCssString = "";
            Dictionary<string, List<dynamic>> storedHtmlMediaQueryArray = new Dictionary<string, List<dynamic>>();
            ArrayList storedHtmlMediaQueryFeatures = new ArrayList();
            Dictionary<string, List<dynamic>> storedHtmlPropertyArray = new Dictionary<string, List<dynamic>>();

            #endregion

            #region DEFINE html inputs


            #endregion

            #region DEFINE parameter inputs


            #endregion

            #region MEMORIZE centralized processes

            aClass_Programming_ScriptAction_12_2_1_0<JObject> storedProcessRequestCentralizedStorer = parameterInputs.Parameters["parameterProcessRequestMasterStorer"];
            //this._storedProcessRequestCentralizedSensor = parameterProcessRequestCentralizedSensor;
            //this._storedProcessRequestCentralizedStorer = parameterProcessRequestCentralizedStorer;
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
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONVERTING json to html styles");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_5_0_Framework_Convert_HtmlCssJSONToInlineStyles_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters["parameterOPTIONALIgnoreDeveloperConsoleLog"));

            #endregion

            #region MEMORIZE html inputs

            dynamic storedHtmlStylesJSON = parameterInputs.Parameters["parameterHtmlStylesJSON"];
            string storedHtmlStyleFilePathLocal = storedHtmlStylesJSON.value[0]._2_2_2_4_1_clientInformationHTMLContentStylingItem.value.HTMLContentStylingItemFiles[0].StyleFilePathLocal;
            dynamic storedHtmlFilesArray = storedHtmlStylesJSON.value[0]._2_2_2_4_1_clientInformationHTMLContentStylingItem.value.HTMLContentStylingItemFiles[0].StyleFiles;

            #endregion

            #region MEMORIZE storyline details

            JObject storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

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
                catch (Exception storedProcessRequestMistake)
                {
                    #region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode)
                    {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "FAILED converting json to html styles");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_5_0_Framework_Convert_HtmlCssJSONToInlineStyles_1_0.ExecuteConversionRequest");

                        await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw new Exception("STORAGE request failed " +  storedProcessRequestMistake.ToString());

                    #endregion
                }
            };

            storedOutputResponseData = await ExecuteConversionRequest();

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN converted data

            #region IDEAL CASE - USE html string

            return storedOutputResponseData;

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
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONVERTING json to html styles");
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_6_0_Framework_Convert_HtmlScriptsJSONToInlineScripts_1_0.ValidateInputs()");

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
                            storedOutputResponseMessage += "***parameterProcessRequestTracker*** must contain a key of ***storedProcessRequestSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.setValue(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestSettings"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestSettings*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterHtmlScriptsJSON"))
                    {
                        storedOutputResponseMessage += "***parameterHtmlScriptsJSON*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }
                    else
                    {
                        if (!parameterInputs.Parameters["parameterHtmlScriptsJSON"].value[0]?._2_2_2_5_1_clientInformationHTMLContentScriptItem?.value?.HTMLContentScriptItemFiles[0]?.ScriptFilePathLocal)
                        {
                            storedOutputResponseMessage += "***parameterHtmlScriptsJSON*** [ScriptFilePathLocal] cannot be blank or empty.\n";
                            storedProcessRequestMistakeMade = true;
                        }

                        if (!parameterInputs.Parameters["parameterHtmlScriptsJSON"].value[0]?._2_2_2_5_1_clientInformationHTMLContentScriptItem?.value?.HTMLContentScriptItemFiles[0]?.ScriptFiles)
                        {
                            storedOutputResponseMessage += "***parameterHtmlScriptsJSON*** [ScriptFiles] cannot be blank or empty.\n";
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestMasterStorer"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestMasterStorer*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestDataStorylineDetails"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails*** cannot be blank or empty.\n";
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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            #endregion

            #region DEFINE data response

            dynamic storedOutputResponseData = null;
            Dictionary<string, List<dynamic>> storedHtmlMediaQueryArray = new Dictionary<string, List<dynamic>>();
            ArrayList storedHtmlMediaQueryFeatures = new ArrayList();
            Dictionary<string, List<dynamic>> storedHtmlPropertyArray = new Dictionary<string, List<dynamic>>();

            #endregion

            #region DEFINE html inputs


            #endregion

            #region DEFINE parameter inputs


            #endregion

            #region MEMORIZE centralized processes

            aClass_Programming_ScriptAction_12_2_1_0<JObject> storedProcessRequestCentralizedStorer = parameterInputs.Parameters["parameterProcessRequestMasterStorer"];
            //this._storedProcessRequestCentralizedSensor = parameterProcessRequestCentralizedSensor;
            //this._storedProcessRequestCentralizedStorer = parameterProcessRequestCentralizedStorer;
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
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONVERTING json to html styles");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_6_0_Framework_Convert_HtmlScriptsJSONToInlineScripts_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters["parameterOPTIONALIgnoreDeveloperConsoleLog"));

            #endregion

            #region MEMORIZE html inputs

            dynamic storedHtmlStylesJSON = parameterInputs.Parameters["parameterHtmlStylesJSON"];
            string storedHtmlStyleFilePathLocal = storedHtmlStylesJSON.value[0]._2_2_2_4_1_clientInformationHTMLContentStylingItem.value.HTMLContentStylingItemFiles[0].StyleFilePathLocal;
            dynamic storedHtmlFilesArray = storedHtmlStylesJSON.value[0]._2_2_2_4_1_clientInformationHTMLContentStylingItem.value.HTMLContentStylingItemFiles[0].StyleFiles;

            #endregion

            #region MEMORIZE storyline details

            JObject storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

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
                catch (Exception storedProcessRequestMistake)
                {
                    #region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode)
                    {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "FAILED converting json to html styles");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_5_0_Framework_Convert_HtmlCssJSONToInlineStyles_1_0.ExecuteConversionRequest");

                        await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw new Exception("STORAGE request failed " +  storedProcessRequestMistake.ToString());

                    #endregion
                }
            };

            storedOutputResponseData = await ExecuteConversionRequest();

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN converted data

            #region IDEAL CASE - USE html string

            return storedOutputResponseData;

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
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONVERTING json to html styles");
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_7_0_Framework_Convert_HtmlMetaDataJSONToInlineMetaData_1_0.ValidateInputs()");

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
                            storedOutputResponseMessage += "***parameterProcessRequestTracker*** must contain a key of ***storedProcessRequestSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.setValue(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestSettings"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestSettings*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterHtmlMetaDataJSON"))
                    {
                        storedOutputResponseMessage += "***parameterHtmlMetaDataJSON*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }
                    else
                    {
                        if (!parameterInputs.Parameters["parameterHtmlMetaDataJSON"].value[0]?._2_2_2_6_1_clientInformationHTMLContentScriptItem?.value?.HTMLContentScriptItemFiles[0]?.MetaDataFilePathLocal)
                        {
                            storedOutputResponseMessage += "***parameterHtmlMetaDataJSON*** [MetaDataFilePathLocal] cannot be blank or empty.\n";
                            storedProcessRequestMistakeMade = true;
                        }

                        if (!parameterInputs.Parameters["parameterHtmlScriptsJSON"].value[0]?._2_2_2_6_1_clientInformationHTMLContentScriptItem?.value?.HTMLContentScriptItemFiles[0]?.MetaDataFiles)
                        {
                            storedOutputResponseMessage += "***parameterHtmlMetaDataJSON*** [MetaDataFiles] cannot be blank or empty.\n";
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestMasterStorer"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestMasterStorer*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestDataStorylineDetails"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails*** cannot be blank or empty.\n";
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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            #endregion

            #region DEFINE data response

            dynamic storedOutputResponseData = null;
            Dictionary<string, List<dynamic>> storedHtmlMediaQueryArray = new Dictionary<string, List<dynamic>>();
            ArrayList storedHtmlMediaQueryFeatures = new ArrayList();
            Dictionary<string, List<dynamic>> storedHtmlPropertyArray = new Dictionary<string, List<dynamic>>();

            #endregion

            #region DEFINE html inputs


            #endregion

            #region DEFINE parameter inputs


            #endregion

            #region MEMORIZE centralized processes

            aClass_Programming_ScriptAction_12_2_1_0<JObject> storedProcessRequestCentralizedStorer = parameterInputs.Parameters["parameterProcessRequestMasterStorer"];
            //this._storedProcessRequestCentralizedSensor = parameterProcessRequestCentralizedSensor;
            //this._storedProcessRequestCentralizedStorer = parameterProcessRequestCentralizedStorer;
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
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONVERTING json to html styles");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_7_0_Framework_Convert_HtmlMetaDataJSONToInlineMetaData_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters["parameterOPTIONALIgnoreDeveloperConsoleLog"));

            #endregion

            #region MEMORIZE html inputs

            dynamic storedHtmlStylesJSON = parameterInputs.Parameters["parameterHtmlStylesJSON"];
            string storedHtmlStyleFilePathLocal = storedHtmlStylesJSON.value[0]._2_2_2_4_1_clientInformationHTMLContentStylingItem.value.HTMLContentStylingItemFiles[0].StyleFilePathLocal;
            dynamic storedHtmlFilesArray = storedHtmlStylesJSON.value[0]._2_2_2_4_1_clientInformationHTMLContentStylingItem.value.HTMLContentStylingItemFiles[0].StyleFiles;

            #endregion

            #region MEMORIZE storyline details

            JObject storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

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
                catch (Exception storedProcessRequestMistake)
                {
                    #region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode)
                    {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "FAILED converting json to html styles");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_5_0_Framework_Convert_HtmlCssJSONToInlineStyles_1_0.ExecuteConversionRequest");

                        await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw new Exception("STORAGE request failed " +  storedProcessRequestMistake.ToString());

                    #endregion
                }
            };

            storedOutputResponseData = await ExecuteConversionRequest();

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN converted data

            #region IDEAL CASE - USE html string

            return storedOutputResponseData;

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
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_X_X_Framework_Store_CacheDataToPersistentStorage_1_0.ValidateInputs()");

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
                            storedOutputResponseMessage += "***parameterProcessRequestTracker*** must contain a key of ***storedProcessRequestSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.setValue(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestSettings"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestSettings*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterHtmlMetaData"))
                    {
                        storedOutputResponseMessage += "***parameterHtmlMetaData*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterHtmlTitle"))
                    {
                        storedOutputResponseMessage += "***parameterTitle*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterHtmlAdditionalHeadData"))
                    {
                        storedOutputResponseMessage += "***parameterHtmlAdditionalHeadData*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterHtmlScripts"))
                    {
                        storedOutputResponseMessage += "***parameterHtmlScripts*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterHtmlStyles"))
                    {
                        storedOutputResponseMessage += "***parameterHtmlStyles*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterHtmlBody"))
                    {
                        storedOutputResponseMessage += "***parameterHtmlBody*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestMasterStorer"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestMasterStorer*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestDataStorylineDetails"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails*** cannot be blank or empty.\n";
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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            #endregion

            #region DEFINE data response

            dynamic storedOutputResponseData = null;

            #endregion

            #region DEFINE html inputs

            string storedHtmlBaseDIScriptName = "";

            #endregion

            #region DEFINE parameter inputs

            SingleParmPoco_12_2_1_0 storedInputs;

            #endregion

            #region MEMORIZE centralized processes

            aClass_Programming_ScriptAction_12_2_1_0<JObject> storedProcessRequestCentralizedStorer = parameterInputs.Parameters["parameterProcessRequestMasterStorer"];
            //this._storedProcessRequestCentralizedSensor = parameterProcessRequestCentralizedSensor;
            //this._storedProcessRequestCentralizedStorer = parameterProcessRequestCentralizedStorer;
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
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "STORING html template");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_6_0_Framework_Convert_HtmlStructureToString_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters["parameterOPTIONALIgnoreDeveloperConsoleLog"));

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

            JObject storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE json to html conversion

            #region IDEAL CASE - USE json metadata

            #region 1. READ cached baseDI script path

            Func<string, string, aClass_Programming_ScriptAction_12_2_1_0<JObject>, Dictionary<string, object>, JObject, dynamic, Task<string>> ExecuteStorageRequest = async (string parameterHtmlBaseDIScriptName, string parameterHtmlScripts, aClass_Programming_ScriptAction_12_2_1_0<JObject> parameterProcessRequestCentralizedStorer, Dictionary<string, object> parameterProcessRequestTracker, JObject parameterProcessRequestDataStorylineDetails, dynamic parameterFilterDataResponse) => {
                try
                {
                    storedInputs = new SingleParmPoco_12_2_1_0();

                    storedInputs.Parameters.Add("parameterProcessRequestTracker", storedProcessRequestTracker);
                    storedInputs.Parameters.Add("parameterCRUDVerb", "Read");
                    storedInputs.Parameters.Add("parameterProcessRequestHandler", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0");
                    storedInputs.Parameters.Add("parameterProcessRequestMasterStorer", storedProcessRequestCentralizedStorer);
                    storedInputs.Parameters.Add("parameterStorageValue", storedProcessRequestDataStorylineDetails);
                    storedInputs.Parameters.Add("parameterProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);
                    storedInputs.Parameters.Add("parameterPageName", "");
                    storedInputs.Parameters.Add("parameterStorageDescription", "READING client side BaseDI script SOURCE PATH");
                    storedInputs.Parameters.Add("parameterUniqueStorageKey", "BaseDI_PresentationScript_SrcLocation");

                    parameterFilterDataResponse = await Extension_Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0.Step_X_X_Framework_Store_CacheDataToPersistentStorage_1_0(storedInputs);
                    //parameterFilterDataResponse = (parameterFilterDataResponse && parameterFilterDataResponse.outputs.length > 0) ? parameterFilterDataResponse.outputs[1].baseDIObservations[parameterFilterDataResponse.outputs[1].baseDIObservations.length - 1] : null;

                    //if (parameterFilterDataResponse)
                    //{
                    //    parameterHtmlBaseDIScriptName = parameterFilterDataResponse[Object.keys(parameterFilterDataResponse)[0]].observation.metadata[3].item.data[0].dataResult

                    //    parameterHtmlScripts += @"<script src = ""/scripts/${parameterHtmlBaseDIScriptName}"" type = ""text/javascript""></script>`";
                    //}

                    return ""; // parameterHtmlScripts;

                }
                catch (Exception storedProcessRequestMistake)
                {
                    #region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode)
                    {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "FAILED reading cache");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_6_0_Framework_Convert_HtmlStructureToString_1_0.ExecuteStorageRequest");

                        await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw new Exception("STORAGE request failed " +  storedProcessRequestMistake.ToString());

                    #endregion
                }
            };

            if (storedProcessRequestSettings.GetValue<string>("AppSettings:APP_ENV") == "SERVER")
            {
                storedHtmlScripts = await ExecuteStorageRequest(storedHtmlBaseDIScriptName, storedHtmlScripts, storedProcessRequestCentralizedStorer, storedProcessRequestTracker, storedProcessRequestDataStorylineDetails, storedOutputResponseData);
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
