#region Imports

#region BaseDI

using BaseDI.Professional.Script.Programming.Abstract_1;
using BaseDI.Professional.Script.Programming.Extensions_1;
using BaseDI.Professional.Script.Programming.Poco_1;
using BaseDI.Professional.Script.Risk_Management.Extensions_0;

using BaseDI.Professional.Script.Programming.Extensions_3;

using BaseDI.Professional.Script.Programming.Extensions_0;
using BaseDI.Professional.Setting.Software.Web_Development_0;

#endregion

#region .Net Core

using Microsoft.AspNetCore.Html;

using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Linq.Expressions;
using System.Text.RegularExpressions;
using System.Threading;
using System.Threading.Tasks;

#endregion 

#region 3rd Party Core

using Microsoft.Extensions.Configuration;

using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

#endregion

#endregion

namespace BaseDI.Professional.Script.Web_Development.Extensions_0
{
    public class Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0
    {
        #region HTML MANAGEMENT

        public static async Task<dynamic> Step_0_0_Framework_Convert_HtmlToJSON_1_0(SingleParmPoco_12_2_1_0 parameterInputs) 
        {
            #region 1. INPUTS

            #region VALIDATE input parameters

            Func<SingleParmPoco_12_2_1_0, Task<bool>> ValidateInputs = (SingleParmPoco_12_2_1_0 parameterInputs) => {
                #region 1. INPUTS

                #region DEFINE control variables

                #endregion

                #region DEFINE input variables

                SingleParmPoco_12_2_1_0 storedInputs = null;

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

                #region MEMORIZE input action name

                string storedInputRequestActionName = parameterInputs.Parameters["parameterInputRequestActionName"];

                #endregion 

                #endregion

                #region MEMORIZE process variables   

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
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterInputRequestActionName", storedInputRequestActionName);

                //2. PROCESS
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "VALIDATING request inputs");
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Step_0_0_Framework_Convert_HtmlToJSON_1_0 -> ValidateInputs");

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

                if (parameterInputs != null || parameterInputs.Parameters != null) {
                    //0. CONTROLLERS

                    //1. INPUTS


                    //2. PROCESS
                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestTracker")) {
                        storedOutputResponseMessage += "***parameterProcessRequestTracker*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }
                    else {
                        if (parameterInputs.Parameters["parameterProcessRequestTracker"]["storedProcessRequestSettings"] == null) {
                            storedOutputResponseMessage += "***parameterProcessRequestTracker*** must contain a key of ***storedProcessRequestSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.TryAdd(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestSettings")) {
                        storedOutputResponseMessage += "***parameterProcessRequestSettings*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestCentralizedDisturber")) {
                        storedOutputResponseMessage += "***parameterProcessRequestCentralizedDisturber*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestCentralizedSensor")) {
                        storedOutputResponseMessage += "***parameterProcessRequestCentralizedSensor*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestCentralizedStorer")) {
                        storedOutputResponseMessage += "***parameterProcessRequestCentralizedStorer*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestDataStorylineDetails")) {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestRequestHandlerFileName")) {
                        storedOutputResponseMessage += "***parameterProcessRequestRequestHandlerFileName*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (storedProcessRequestMistakeMade) {
                        #region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode) {
                            storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                            //0. CONTROLLERS

                            //1. INPUTS

                            //2. PROCESS
                            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                            //3. OUTPUTS
                            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                            Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                        }

                        #endregion

                        #region EDGE CASE - USE exception handler

                        throw new Exception("PARSING parameter values failed");

                        #endregion
                    }
                }
                else {
                    #region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode) {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        //0. CONTROLLERS

                        //1. INPUTS

                        //2. PROCESS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                        //3. OUTPUT
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
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

                return Task.FromResult<bool>(true);

                #endregion

                #endregion

                #endregion
            };

            //BEGIN valdation process
            await ValidateInputs(parameterInputs);

            #endregion

            #region DEFINE control variables
            
            #endregion

            #region DEFINE input variables

            SingleParmPoco_12_2_1_0 storedInputs = null;

            HtmlSection storedInputRequestHtmlContainerJSON = null;
            HtmlSection storedInputRequestHtmlRowsJSON = null;
            HtmlSection storedInputRequestHtmlColumnsJSON = null;
            HtmlSection storedInputRequestHtmlContentJSON = null;

            dynamic storedInputRequestHtmlStylesFiltered = null;
            dynamic storedInputRequestHtmlStylesJSON = null;

            #endregion

            #region DEFINE process variables


            #endregion

            #region DEFINE output variables

            dynamic storedOutputResponseData = null;

            string storedOutputResponseHtmlResultInlineStylesString = "";
            string storedOutputResponseHtmlResultString = "";

            dynamic storedOutputResponseObservationItem;

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

            Dictionary<string, object> storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

            #endregion

            #region MEMORIZE process request settings

            IConfiguration storedProcessRequestSettings = (IConfiguration)storedProcessRequestTracker["storedProcessRequestSettings"];

            #endregion  
            
            #region MEMORIZE process developer mode

            bool storedProcessRequestDeveloperMode = storedProcessRequestSettings.GetValue<bool>("AppSetting:APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingStartUpProcessInputs = (parameterInputs.Parameters["parameterProcessRequestExtraData"]?.KeyValuePairs.ContainsKey("storedProcessRequestDeveloperLoggingInputs") ? parameterInputs.Parameters["parameterProcessRequestExtraData"]?.KeyValuePairs["storedProcessRequestDeveloperLoggingInputs"] : null);

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED

            //0. CONTROLLERS
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterInputRequestActionName", storedInputRequestActionName);

            //1. INPUTS

            //2. PROCESS
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "CONVERTING json to html");
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Step_0_0_Framework_Convert_HtmlToJSON_1_0");

            //3. OUTPUTS  

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseOPTIONALMiddleOfProcess", true);

            #endregion

            #region MEMORIZE process storyline details

            dynamic storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];

            #endregion

            #region MEMORIZE process centralized handlers

            aClass_Programming_ScriptAction_12_2_1_0<JObject> storedProcessRequestCentralizedDisturber = parameterInputs.Parameters["parameterProcessRequestCentralizedDisturber"];
            aClass_Programming_ScriptAction_12_2_1_0<JObject> storedProcessRequestCentralizedSensor = parameterInputs.Parameters["parameterProcessRequestCentralizedSensor"];
            aClass_Programming_ScriptAction_12_2_1_0<JObject> storedProcessRequestCentralizedStorer = parameterInputs.Parameters["parameterProcessRequestCentralizedStorer"];

            #endregion

            #region MEMORIZE process storage details

            string storedProcessRequestStorageKeyUniqueness = parameterInputs.Parameters["parameterProcessRequestRequestHandlerFileName"]; 
            int storedProcessRequestStorageCounter = 0;

            JObject storedProcessRequestStorageDictionary = new JObject();
            string storedProcessRequestStorageKey = "StorageKey_" + storedProcessRequestStorageKeyUniqueness + "-" + "Read-BaseDI_PresentationHTML_Content";

            bool storedProcessRequestStorageUpdateMode = false;

            #endregion            

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output observation details

            storedInputs = new SingleParmPoco_12_2_1_0();

            string storedOutputResponseObservationPresentationTemplateItem = "{ \"htmlResult\": \"{htmlResult}\" }";
            string storedOutputResponseObservationBusinessTemplateItem = "{}";
            string storedOutputResponseObservationServiceTemplateItem = "{}";
            string storedOutputResponseObservationSecurityTemplateItem = "{}";
            string storedOutputResponseObservationDataTemplateItem = "{}";

            string storedOutputResponseObservationDataTemplateBuilder = "";

            //0. CONTROLLERS

            //1. INPUTS
            storedInputs.Parameters.TryAdd("parameterInputRequestActionName", storedInputRequestActionName);

            //2. PROCESS
            storedInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "RENDER web page");
            storedInputs.Parameters.TryAdd("parameterProcessRequestSettings", storedProcessRequestSettings);
            storedInputs.Parameters.TryAdd("parameterProcessRequestTracker", storedProcessRequestTracker);

            //3. OUTPUTS
            storedInputs.Parameters.TryAdd("parameterOutputResponseObservationFileName", "Page_1_5_Process_StorySetting_12_3_1_0.cs");
            storedInputs.Parameters.TryAdd("parameterOutputResponseObservationMethodName", "Action");
            storedInputs.Parameters.TryAdd("parameterOutputResponseObservationPresentationTemplate", storedOutputResponseObservationPresentationTemplateItem);
            storedInputs.Parameters.TryAdd("parameterOutputResponseObservationBusinessTemplate", storedOutputResponseObservationBusinessTemplateItem);
            storedInputs.Parameters.TryAdd("parameterOutputResponseObservationServiceTemplate", storedOutputResponseObservationServiceTemplateItem);
            storedInputs.Parameters.TryAdd("parameterOutputResponseObservationSecurityTemplate", storedOutputResponseObservationSecurityTemplateItem);
            storedInputs.Parameters.TryAdd("parameterOutputResponseObservationDataTemplate", storedOutputResponseObservationDataTemplateItem);

            storedOutputResponseObservationItem = await Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.Step_X_X_Framework_Output_JsonObservationNode_1_0(storedInputs);

            #endregion

            #endregion
            
            #endregion

            #region 2. PROCESS

            #region EXECUTE json to html conversion

            try
            {
                #region IDEAL CASE - USE baseDI converter

                #region A. CONVERT html container

                try
                 {
                    Func<string> ExecuteConversionRequest = () => 
                    {
                        storedInputs = new SingleParmPoco_12_2_1_0();

                        //0. CONTROLLERS

                        //1. INPUTS
                        storedInputs.Parameters.TryAdd("parameterInputRequestActionName", storedInputRequestActionName);

                        //2. PROCESS                        
                        storedInputs.Parameters.TryAdd("parameterProcessRequestSettings", storedProcessRequestSettings);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestTracker", storedProcessRequestTracker);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestDataToFilter", storedProcessRequestDataStorylineDetails);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestDataToFilterKey", "searchkey");
                        storedInputs.Parameters.TryAdd("parameterProcessRequestDataToFilterValue", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLContainer");

                        //3. OUTPUTS
                        storedInputs.Parameters.TryAdd("parameterOutputResponseAsArray", false);

                        storedInputRequestHtmlContainerJSON = Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0<HtmlSection>(storedInputs).Result;

                        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                        storedInputs = new SingleParmPoco_12_2_1_0();

                        //0. CONTROLLERS

                        //1. INPUTS
                        storedInputs.Parameters.TryAdd("parameterInputRequestActionName", storedInputRequestActionName);
                        storedInputs.Parameters.TryAdd("parameterInputRequestHtmlContainerJSON", storedInputRequestHtmlContainerJSON);

                        //2. PROCESS
                        storedInputs.Parameters.TryAdd("parameterProcessRequestTracker", storedProcessRequestTracker);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestSettings", storedProcessRequestSettings);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestCentralizedStorer", storedProcessRequestCentralizedStorer);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);

                        //3. OUTPUTS

                        storedOutputResponseHtmlResultString = Step_1_0_Framework_Convert_HtmlContainerJsonToHtml_1_0(storedInputs).Result;

                        return storedOutputResponseHtmlResultString;
                    };

                    storedOutputResponseHtmlResultString = ExecuteConversionRequest();
                }
                catch (Exception storedProcessRequestMistake) {
                    throw new Exception("converting html container", storedProcessRequestMistake);
                }
                #endregion

                #region B. CONVERT html rows

                try {
                    Func<string> ExecuteConversionRequest = () => {
                        storedInputs = new SingleParmPoco_12_2_1_0();

                        //0. CONTROLLERS

                        //1. INPUTS
                        storedInputs.Parameters.TryAdd("parameterInputRequestActionName", storedInputRequestActionName);

                        //2. PROCESS                             
                        storedInputs.Parameters.TryAdd("parameterProcessRequestSettings", storedProcessRequestSettings);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestTracker", storedProcessRequestTracker);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestDataToFilter", storedProcessRequestDataStorylineDetails);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestDataToFilterKey", "searchkey");
                        storedInputs.Parameters.TryAdd("parameterProcessRequestDataToFilterValue", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLRows");

                        //3. OUTPUTS
                        storedInputs.Parameters.TryAdd("parameterOutputResponseAsArray", false);

                        storedInputRequestHtmlRowsJSON = Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0<HtmlSection>(storedInputs).Result;

                        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                        
                        storedInputs = new SingleParmPoco_12_2_1_0();

                        //0. CONTROLLERS

                        //1. INPUTS                        
                        storedInputs.Parameters.TryAdd("parameterInputRequestActionName", storedInputRequestActionName);
                        storedInputs.Parameters.TryAdd("parameterInputRequestHtmlRowsJSON", storedInputRequestHtmlRowsJSON);
                        
                        //2. PROCESS
                        storedInputs.Parameters.TryAdd("parameterProcessRequestTracker", storedProcessRequestTracker);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestSettings", storedProcessRequestSettings);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestCentralizedStorer", storedProcessRequestCentralizedStorer);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);

                        //3. OUTPUTS
                        storedInputs.Parameters.TryAdd("parameterOutputResponseHtmlContainerString", storedOutputResponseHtmlResultString);

                        storedOutputResponseHtmlResultString = Step_2_0_Framework_Convert_HtmlRowsJsonToHtml_1_0(storedInputs).Result;

                        return storedOutputResponseHtmlResultString;
                    };

                    storedOutputResponseHtmlResultString = ExecuteConversionRequest();
                }
                catch (Exception storedProcessRequestMistake) {
                    throw new Exception("converting html rows", storedProcessRequestMistake);
                }

                #endregion

                #region C. CONVERT html columns

                try {
                    Func<string> ExecuteConversionRequest = () => {
                        storedInputs = new SingleParmPoco_12_2_1_0();

                        //0. CONTROLLERS

                        //1. INPUTS    
                        storedInputs.Parameters.TryAdd("parameterInputRequestActionName", storedInputRequestActionName);

                        //2. PROCESS
                        storedInputs.Parameters.TryAdd("parameterProcessRequestSettings", storedProcessRequestSettings);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestTracker", storedProcessRequestTracker);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestDataToFilter", storedProcessRequestDataStorylineDetails);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestDataToFilterKey", "searchkey");
                        storedInputs.Parameters.TryAdd("parameterProcessRequestDataToFilterValue", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLColumns");

                        storedInputs.Parameters.TryAdd("parameterOutputResponseAsArray", false);

                        storedInputRequestHtmlColumnsJSON = Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0<HtmlSection>(storedInputs).Result;

                        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                        storedInputs = new SingleParmPoco_12_2_1_0();

                        //0. CONTROLLERS

                        //1. INPUTS                            
                        storedInputs.Parameters.TryAdd("parameterInputRequestActionName", storedInputRequestActionName);
                        storedInputs.Parameters.TryAdd("parameterInputRequestHtmlColumnsJSON", storedInputRequestHtmlColumnsJSON);
                        
                        //2. PROCESS
                        storedInputs.Parameters.TryAdd("parameterProcessRequestTracker", storedProcessRequestTracker);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestSettings", storedProcessRequestSettings);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestCentralizedStorer", storedProcessRequestCentralizedStorer);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);

                        //3. OUTPUTS
                        storedInputs.Parameters.TryAdd("parameterOutputResponseHtmlRowString", storedOutputResponseHtmlResultString);

                        storedOutputResponseHtmlResultString = Step_3_0_Framework_Convert_HtmlColumnsJsonToHtml_1_0(storedInputs).Result;

                        return storedOutputResponseHtmlResultString;
                    };

                    storedOutputResponseHtmlResultString = ExecuteConversionRequest();
                }
                catch (Exception storedProcessRequestMistake) {
                    throw new Exception("converting html rows", storedProcessRequestMistake);
                }

                #endregion

                #region D. CONVERT html content

                try 
                {
                    Func<string> ExecuteConversionRequest = () => {
                        storedInputs = new SingleParmPoco_12_2_1_0();

                        //0. CONTROLLERS

                        //1. INPUTS    
                        storedInputs.Parameters.TryAdd("parameterInputRequestActionName", storedInputRequestActionName);

                        //2. PROCESS                        
                        storedInputs.Parameters.TryAdd("parameterProcessRequestSettings", storedProcessRequestSettings);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestTracker", storedProcessRequestTracker);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestDataToFilter", storedProcessRequestDataStorylineDetails);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestDataToFilterKey", "searchkey");
                        storedInputs.Parameters.TryAdd("parameterProcessRequestDataToFilterValue", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLContent");

                        //3. OUTPUTS
                        storedInputs.Parameters.TryAdd("parameterOutputResponseAsArray", false);

                        storedInputRequestHtmlContentJSON = Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0<HtmlSection>(storedInputs).Result;

                        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                        storedInputs = new SingleParmPoco_12_2_1_0();

                        //0. CONTROLLERS

                        //1. INPUTS                          
                        storedInputs.Parameters.TryAdd("parameterInputRequestActionName", storedInputRequestActionName);
                        storedInputs.Parameters.TryAdd("parameterInputRequestHtmlContentJSON", storedInputRequestHtmlContentJSON);

                        //2. PROCESS  
                        storedInputs.Parameters.TryAdd("parameterProcessRequestTracker", storedProcessRequestTracker);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestSettings", storedProcessRequestSettings);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestCentralizedStorer", storedProcessRequestCentralizedStorer);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);

                        //3. OUTPUTS
                        storedInputs.Parameters.TryAdd("parameterOutputResponseHtmlColumnString", storedOutputResponseHtmlResultString);

                        storedOutputResponseHtmlResultString = Step_4_0_Framework_Convert_HtmlContentJsonToHtml_1_0(storedInputs).Result;

                        return storedOutputResponseHtmlResultString;
                    };

                    storedOutputResponseHtmlResultString = ExecuteConversionRequest();
                }
                catch (Exception storedProcessRequestMistake) {
                    throw new Exception("converting html content", storedProcessRequestMistake);
                }

                #endregion

                #region E. CONVERT html inline styles

                try 
                {
                    Func<string> ExecuteConversionRequest = () => {
                        storedInputs = new SingleParmPoco_12_2_1_0();

                        //0. CONTROLLERS

                        //1. INPUTS    
                        storedInputs.Parameters.TryAdd("parameterInputRequestActionName", storedInputRequestActionName);

                        //2. PROCESS                                
                        storedInputs.Parameters.TryAdd("parameterProcessRequestSettings", storedProcessRequestSettings);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestTracker", storedProcessRequestTracker);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestDataToFilter", storedProcessRequestDataStorylineDetails);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestDataToFilterKey", "searchkey");
                        storedInputs.Parameters.TryAdd("parameterProcessRequestDataToFilterValue", "HTMLContentStylingDetails_SetImplementer_ProductCreation_WebDevelopment_CSS");

                        //3. OUTPUTS
                        storedInputs.Parameters.TryAdd("parameterOutputResponseAsArray", false);

                        storedInputRequestHtmlStylesJSON = Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0<HtmlSection>(storedInputs).Result;

                        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                        storedInputs = new SingleParmPoco_12_2_1_0();

                        //0. CONTROLLERS

                        //1. INPUTS
                        storedInputs.Parameters.TryAdd("parameterInputRequestActionName", storedInputRequestActionName);
                        storedInputs.Parameters.TryAdd("parameterInputRequestHtmlStylesJSON", storedInputRequestHtmlStylesJSON);

                        //2. PROCESS 
                        storedInputs.Parameters.TryAdd("parameterProcessRequestTracker", storedProcessRequestTracker);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestSettings", storedProcessRequestSettings);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestCentralizedStorer", storedProcessRequestCentralizedStorer);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);

                        //3. OUTPUTS
                        return Step_5_0_Framework_Convert_HtmlCssJSONToInlineStyles_1_0(storedInputs).Result;
                    };

                    storedOutputResponseHtmlResultInlineStylesString = ExecuteConversionRequest();
                }
                catch (Exception storedProcessRequestMistake) {
                    throw new Exception("converting html inline styles", storedProcessRequestMistake);
                }

                #endregion

                #region F. CONVERT html inline scripts

                //TODO
                try 
                {
                    //Func<string> ExecuteConversionRequest = () =>
                    //{

                    //};
                }
                catch (Exception storedProcessRequestMistake) {
                    throw new Exception("converting html inline scripts", storedProcessRequestMistake);
                }

                #endregion

                #region G. CONVERT html inline metadata

                //TODO
                try 
                {
                    //Func<string> ExecuteConversionRequest = () => {

                    //}
                }
                catch (Exception storedProcessRequestMistake) {
                    throw new Exception("converting html inline metadata", storedProcessRequestMistake);
                }

                #endregion

                #region H. OUTPUT html string

                try 
                {
                    Func<string> ExecuteOutputResponse = () => 
                    {
                        storedInputs = new SingleParmPoco_12_2_1_0();

                        //0. CONTROLLERS

                        //1. INPUTS
                        storedInputs.Parameters.TryAdd("parameterInputRequestActionName", storedInputRequestActionName);
                        storedInputs.Parameters.TryAdd("parameterInputRequestHtmlMetaData", "");
                        storedInputs.Parameters.TryAdd("parameterInputRequestHtmlTitle", "");
                        storedInputs.Parameters.TryAdd("parameterInputRequestHtmlScripts", "");
                        storedInputs.Parameters.TryAdd("parameterInputRequestHtmlStyles", storedOutputResponseHtmlResultInlineStylesString);
                        storedInputs.Parameters.TryAdd("parameterInputRequestHtmlAdditionalHeadData", "");
                        storedInputs.Parameters.TryAdd("parameterInputRequestHtmlBody", storedOutputResponseHtmlResultString);

                        //2. PROCESS
                        storedInputs.Parameters.TryAdd("parameterProcessRequestTracker", storedProcessRequestTracker);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestSettings", storedProcessRequestSettings);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestCentralizedStorer", storedProcessRequestCentralizedStorer);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);

                        //3. OUTPUTS
                        return Step_8_0_Framework_Convert_HtmlStructureToString_1_0(storedInputs).Result;
                    };

                    storedOutputResponseHtmlResultString = ExecuteOutputResponse();
                }
                catch (Exception storedProcessRequestMistake) {
                    throw new Exception("converting html content", storedProcessRequestMistake);
                }

                #endregion

                #region I. STORE html string

                try 
                {
                    Func<string> ExecuteStorageRequest = () => 
                    {
                        storedOutputResponseObservationItem = storedOutputResponseObservationItem.Replace("'", "\"");
                        storedOutputResponseObservationItem = storedOutputResponseObservationItem.Replace("{htmlResult}", storedOutputResponseHtmlResultString);

                        storedProcessRequestStorageDictionary[storedProcessRequestStorageKey] = storedOutputResponseObservationItem.toString();

                        #region USE existing output observation item

                        foreach (var storedOutputResponseObservation in storedProcessRequestDataStorylineDetails.outputs[1].baseDIObservations)
                        {
                            //if (Object.keys(storedOutputResponseObservation).length > 0 && Object.keys(storedOutputResponseObservation)[0].toUpperCase() == storedProcessRequestStorageKey.toUpperCase()) {
                            //    storedProcessRequestDataStorylineDetails.outputs[1].baseDIObservations[storedProcessRequestStorageCounter][storedProcessRequestStorageKey] = JSON.parse(storedOutputResponseHtmlResultString.toString());

                            //    storedOutputResponseData = storedProcessRequestDataStorylineDetails;

                            //    storedProcessRequestStorageUpdateMode = true;

                            //    return;
                            //}

                            //storedProcessRequestStorageCounter += 1;
                        }          

                        #endregion

                        #region USE new output observation item

                        if (!storedProcessRequestStorageUpdateMode) {
                            //storedProcessRequestDataStorylineDetails.outputs[1].baseDIObservations.Add(storedProcessRequestStorageDictionary);
                        }
                        #endregion

                        return storedProcessRequestDataStorylineDetails;
                    };

                    storedOutputResponseData = ExecuteStorageRequest();
                }
                catch (Exception storedProcessRequestMistake) {
                    throw new Exception("storing html string output observation", storedProcessRequestMistake);
                }

                #endregion

                #endregion
            }
            catch (Exception storedProcessRequestMistake) 
            {
                #region EDGE CASE - USE developer logger

                if (storedProcessRequestDeveloperMode) {
                    storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                    //0. CONTROLLERS

                    //1. INPUTS

                    //2. PROCESS
                    storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "FAILED converting json to html");                  
                    storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                    storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Action");
                    storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMistake", storedProcessRequestMistake);

                    //3. OUTPUTS
                    storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                    await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                }

                #endregion

                #region EDGE CASE - USE exception handler

                throw new Exception("CONVERSION request failed " + storedProcessRequestMistake);

                #endregion
            }

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN process response

            #region IDEAL CASE - USE baseDI dataset

            return storedOutputResponseData;

            #endregion

            #endregion

            #endregion
        }

        private static string Step_0_0_Framework_Store_HtmlAttributesToArray_1_0(SingleParmPoco_12_2_1_0 parameterInputs)  {
            #region 1. INPUTS

            #region VALIDATE input parameters

            Func<SingleParmPoco_12_2_1_0, Task<bool>> ValidateInputs = (SingleParmPoco_12_2_1_0 parameterInputs) => {
                #region 1. INPUTS

                #region DEFINE control variables

                #endregion

                #region DEFINE input variables

                SingleParmPoco_12_2_1_0 storedInputs = null;

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

                #region MEMORIZE input action name

                string storedInputRequestActionName = parameterInputs.Parameters["parameterInputRequestActionName"];

                #endregion 

                #endregion

                #region MEMORIZE process variables   

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
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterInputRequestActionName", storedInputRequestActionName);

                //2. PROCESS
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "VALIDATING request inputs");
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Step_0_0_Framework_Store_HtmlAttributesToArray_1_0 -> ValidateInputs");

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

                if (parameterInputs != null || parameterInputs.Parameters != null)
                {
                    //0. CONTROLLERS

                    //1. INPUTS

                    //2. PROCESS                    
                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestTracker")) {
                        storedOutputResponseMessage += "***parameterProcessRequestTracker*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }
                    else {
                        if (parameterInputs.Parameters["parameterProcessRequestTracker"]["storedProcessRequestSettings"] == null) {
                            storedOutputResponseMessage += "***parameterProcessRequestTracker*** must contain a key of ***storedProcessRequestSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.TryAdd(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestSettings")) {
                        storedOutputResponseMessage += "***parameterProcessRequestSettings*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestHtmlAttributes")) {
                        storedOutputResponseMessage += "***parameterProcessRequestHtmlAttributes*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestCentralizedStorer")) {
                        storedOutputResponseMessage += "***parameterProcessRequestCentralizedStorer*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestDataStorylineDetails")) {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    //3. OUTPUTS  
                    if (storedProcessRequestMistakeMade) {
                        #region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode) {
                            storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                            //0. CONTROLLERS

                            //1. INPUTS

                            //2. PROCESS     
                            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                            //3. OUTPUTS 
                            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                            Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                        }

                        #endregion

                        #region EDGE CASE - USE exception handler

                        throw new Exception("PARSING parameter values failed");

                        #endregion
                    }
                }
                else {
                    #region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode) {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        //0. CONTROLLERS

                        //1. INPUTS

                        //2. PROCESS                         
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                        //3. OUTPUTS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
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

                return Task.FromResult<bool>(true);

                #endregion

                #endregion

                #endregion
            };

            //BEGIN valdation process
            ValidateInputs(parameterInputs);

            #endregion

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables

            SingleParmPoco_12_2_1_0 storedInputs = null;

             #endregion

            #region DEFINE process variables


            #endregion

            #region DEFINE output variables

            List<string> storedOutputResponseData;
            List<string> storedOutputResponseHtmlAttributesOutput = new List<string>();

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

            #region MEMORIZE process request html

            List<HtmlAttribute> storedProcessRequestHtmlAttributes = parameterInputs.Parameters["parameterProcessRequestHtmlAttributes"];

            #endregion

            #region MEMORIZE process request tracker

            Dictionary<string, object> storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

            #endregion

            #region MEMORIZE process request settings

            IConfiguration storedProcessRequestSettings = (IConfiguration)storedProcessRequestTracker["storedProcessRequestSettings"];

            #endregion  

            #region MEMORIZE process developer mode

            bool storedProcessRequestDeveloperMode = storedProcessRequestSettings.GetValue<bool>("AppSetting:APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingStartUpProcessInputs = (parameterInputs.Parameters["parameterProcessRequestExtraData"]?.KeyValuePairs.ContainsKey("storedProcessRequestDeveloperLoggingInputs") ? parameterInputs.Parameters["parameterProcessRequestExtraData"]?.KeyValuePairs["storedProcessRequestDeveloperLoggingInputs"] : null);

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED

            //0. CONTROLLERS
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterInputRequestActionName", storedInputRequestActionName);

            //1. INPUTS

            //2. PROCESS
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "CONVERTING json to html attributes");
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Step_0_0_Framework_Store_HtmlAttributesToArray_1_0");

            //3. OUTPUTS  

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseOPTIONALMiddleOfProcess", true);

            #endregion

            #region MEMORIZE process storyline details

            JObject storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];

            #endregion

            #region MEMORIZE process centralized handlers

            //aClass_Programming_ScriptAction_12_2_1_0<JObject> storedProcessRequestCentralizedDisturber = parameterInputs.Parameters["parameterProcessRequestCentralizedDisturber"];
            //aClass_Programming_ScriptAction_12_2_1_0<JObject> storedProcessRequestCentralizedSensor = parameterInputs.Parameters["parameterProcessRequestCentralizedSensor"];
            //aClass_Programming_ScriptAction_12_2_1_0<JObject> storedProcessRequestCentralizedStorer = parameterInputs.Parameters["parameterProcessRequestCentralizedStorer"];

            #endregion

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxx


            #endregion

            #endregion


            #endregion

            #region 2. PROCESS

            #region EXECUTE json to html conversion

            #region IDEAL CASE - USE json metadata

            Func<List<string>> ExecuteConversionRequest = () =>
            {
                try
                {
                    foreach (var storedProcessRequestHtmlAttribute in storedProcessRequestHtmlAttributes)
                    {
                        dynamic a = Type.GetType("BaseDI.Professional.Setting.Software.Web_Development_0.HtmlSection").GetProperties();

                        a = a;

                        //storedOutputResponseHtmlAttributesOutput.Add($"{storedProcessRequestHtmlAttributeKeyValue.Key}='{storedProcessRequestHtmlAttributeKeyValue.Value}'");
                    }

                    return storedOutputResponseHtmlAttributesOutput;
                }
                catch (Exception storedProcessRequestMistake)
                {
                    #region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode) {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        //0. CONTROLLERS

                        //1. INPUTS

                        //2. PROCESS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "FAILED converting json to html attributes");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Step_0_0_Framework_Store_HtmlAttributesToArray_1_0.ExecuteConversionRequest");

                        //3. OUTPUTS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw new Exception("CONVERSION request failed " + storedProcessRequestMistake.ToString());

                    #endregion
                }
            };

            storedOutputResponseData = ExecuteConversionRequest();

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

            Func<SingleParmPoco_12_2_1_0, Task<bool>> ValidateInputs = (SingleParmPoco_12_2_1_0 parameterInputs) => {
                #region 1. INPUTS

                #region DEFINE control variables

                #endregion

                #region DEFINE input variables

                SingleParmPoco_12_2_1_0 storedInputs = null;

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

                #region MEMORIZE input action name

                string storedInputRequestActionName = parameterInputs.Parameters["parameterInputRequestActionName"];

                #endregion 

                #endregion

                #region MEMORIZE process variables   

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
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterInputRequestActionName", storedInputRequestActionName);

                //2. PROCESS
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "VALIDATING request inputs");
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Step_1_0_Framework_Convert_HtmlContainerJsonToHtml_1_0 -> ValidateInputs");

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

                if (parameterInputs != null || parameterInputs.Parameters != null) {
                    //0. CONTROLLERS

                    //1. INPUTS

                    //2. PROCESS                     
                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestTracker")) {
                        storedOutputResponseMessage += "***parameterProcessRequestTracker*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }
                    else {
                        if (parameterInputs.Parameters["parameterProcessRequestTracker"]["storedProcessRequestSettings"] == null) {
                            storedOutputResponseMessage += "***parameterProcessRequestTracker*** must contain a key of ***storedProcessRequestSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.TryAdd(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestSettings")) {
                        storedOutputResponseMessage += "***parameterProcessRequestSettings*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterInputRequestHtmlContainerJSON")) {
                        storedOutputResponseMessage += "***parameterInputRequestHtmlContainerJSON*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestCentralizedStorer")) {
                        storedOutputResponseMessage += "***parameterProcessRequestCentralizedStorer*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestDataStorylineDetails")) {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    //3. OUTPUTS

                    if (storedProcessRequestMistakeMade) {
                        #region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode) {
                            storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                            //0. CONTROLLERS

                            //1. INPUTS

                            //2. PROCESS                             
                            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                            //3. OUTPUTS  
                            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                            Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                        }

                        #endregion

                        #region EDGE CASE - USE exception handler

                        throw new Exception("PARSING parameter values failed");

                        #endregion
                    }
                }
                else {
                    #region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode) {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        //0. CONTROLLERS

                        //1. INPUTS

                        //2. PROCESS                          
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                        //3. OUTPUTS  
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
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

                return Task.FromResult<bool>(true);

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

            SingleParmPoco_12_2_1_0 storedInputs = null;

            #endregion

            #region DEFINE process variables



            #endregion

            #region DEFINE output variables

            dynamic storedOutputResponseData = null;

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

            #region MEMORIZE input request html

            HtmlSection storedInputRequestHtmlContainerJSON = parameterInputs.Parameters["parameterInputRequestHtmlContainerJSON"];

            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process centralized processes

            //aClass_Programming_ScriptAction_12_2_1_0<object> storedProcessRequestCentralizedStorer = parameterInputs.Parameters["parameterProcessRequestCentralizedStorer"];

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
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterInputRequestActionName", storedInputRequestActionName);

            //1. INPUTS                        

            //2. PROCESS
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "CONVERTING json to html container");
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Step_1_0_Framework_Convert_HtmlContainerJsonToHtml_1_0");

            //3. OUTPUTS

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters.getValue("parameterOPTIONALIgnoreDeveloperConsoleLog"));

            #endregion

            #region MEMORIZE process storyline details

            JObject storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

            #endregion            

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxx


            #endregion

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE json to html conversion

            #region IDEAL CASE - USE json metadata

            Func<Task<dynamic>> ExecuteConversionRequest = async () => {
                try
                {
                    parameterInputs.Parameters.Remove("parameterProcessRequestHtmlAttributes");
                    parameterInputs.Parameters.TryAdd("parameterProcessRequestHtmlAttributes", storedInputRequestHtmlContainerJSON.value.HTMLContentItems[0].Attributes);

                    storedOutputResponseData = Step_0_0_Framework_Store_HtmlAttributesToArray_1_0(parameterInputs);

                    //OUTPUT: <div                                                                  id="container_xxx">         {HTMLRows_Replace}</div>
                    return await Task.FromResult<string>($@"<{storedInputRequestHtmlContainerJSON.value.HTMLContentItems[0].Tag} {Step_0_0_Framework_Store_HtmlAttributesToArray_1_0(parameterInputs)}>{{HTMLRows_Replace}}</{storedInputRequestHtmlContainerJSON.value.HTMLContentItems[0].Tag}>").ConfigureAwait(true);
                }
                catch (Exception storedProcessRequestMistake) {
                    #region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode) {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        //0. CONTROLLERS

                        //1. INPUTS

                        //2. PROCESS                        
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "FAILED converting to html container");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Step_1_0_Framework_Convert_HtmlContainerJsonToHtml_1_0.ExecuteConversionRequest");

                        //3. OUTPUTS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                        await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw new Exception("STORAGE request failed " + storedProcessRequestMistake.ToString());

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

        public static async Task<string> Step_2_0_Framework_Convert_HtmlRowsJsonToHtml_1_0(SingleParmPoco_12_2_1_0 parameterInputs) 
        {
            #region 1. INPUTS

            #region VALIDATE input parameters

            Func<SingleParmPoco_12_2_1_0, Task<bool>> ValidateInputs = (SingleParmPoco_12_2_1_0 parameterInputs) => {
                #region 1. INPUTS

                #region DEFINE control variables

                #endregion

                #region DEFINE input variables

                SingleParmPoco_12_2_1_0 storedInputs = null;

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

                #region MEMORIZE input action name

                string storedInputRequestActionName = parameterInputs.Parameters["parameterInputRequestActionName"];

                #endregion 

                #endregion

                #region MEMORIZE process variables   

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
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterInputRequestActionName", storedInputRequestActionName);

                //2. PROCESS
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "VALIDATING request inputs");
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Step_2_0_Framework_Convert_HtmlRowsJsonToHtml_1_0 -> ValidateInputs");

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

                if (parameterInputs != null || parameterInputs.Parameters != null)
                {
                    //0. CONTROLLERS

                    //1. INPUTS

                    //2. PROCESS                     
                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestTracker")) {
                        storedOutputResponseMessage += "***parameterProcessRequestTracker*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }
                    else {
                        if (parameterInputs.Parameters["parameterProcessRequestTracker"]["storedProcessRequestSettings"] == null) {
                            storedOutputResponseMessage += "***parameterProcessRequestTracker*** must contain a key of ***storedProcessRequestSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.TryAdd(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestSettings")) {
                        storedOutputResponseMessage += "***parameterProcessRequestSettings*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterOutputResponseHtmlContainerString")) {
                        storedOutputResponseMessage += "***parameterOutputResponseHtmlContainerString*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterInputRequestHtmlRowsJSON")) {
                        storedOutputResponseMessage += "***parameterInputRequestHtmlRowsJSON*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestCentralizedStorer")) {
                        storedOutputResponseMessage += "***parameterProcessRequestCentralizedStorer*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestDataStorylineDetails")) {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    //3. OUTPUTS
                    if (storedProcessRequestMistakeMade) {
                        #region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode) {
                            storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                            //0. CONTROLLERS

                            //1. INPUTS

                            //2. PROCESS                             
                            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                            //3. OUTPUTS 
                            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                            Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                        }

                        #endregion

                        #region EDGE CASE - USE exception handler

                        throw new Exception("PARSING parameter values failed");

                        #endregion
                    }
                }
                else {
                    #region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode) {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        //0. CONTROLLERS

                        //1. INPUTS

                        //2. PROCESS                         
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                        //3. OUTPUTS 
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
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

                return Task.FromResult<bool>(true);

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

            SingleParmPoco_12_2_1_0 storedInputs = null;

            #endregion

            #region DEFINE process variables



            #endregion

            #region DEFINE output variables

            dynamic storedOutputResponseData = null;
            List<string> storedOutputResponseDataList = new List<string>();

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

            #region MEMORIZE input request html

            HtmlSection storedInputRequestHtmlRowsJSON = parameterInputs.Parameters["parameterInputRequestHtmlRowsJSON"];

            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process centralized processes

            aClass_Programming_ScriptAction_12_2_1_0<JObject> storedProcessRequestCentralizedStorer = parameterInputs.Parameters["parameterProcessRequestCentralizedStorer"];
                
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
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterInputRequestActionName", storedInputRequestActionName);

            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "CONVERTING json to html row");
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Step_2_0_Framework_Convert_HtmlRowsJsonToHtml_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters.getValue("parameterOPTIONALIgnoreDeveloperConsoleLog"));

            #endregion

            #region MEMORIZE process storyline details

            JObject storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

            #endregion            

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output response html

            string storedOutputResponseHtmlContainerString = parameterInputs.Parameters["parameterOutputResponseHtmlContainerString"];

            #endregion

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE json to html conversion

            #region IDEAL CASE - USE json metadata

            Func<Task<string>> ExecuteConversionRequest = async () =>
            {
                try
                {
                    foreach (var storedProcessRequestHtmlRow in storedInputRequestHtmlRowsJSON.value.HTMLContentItems)
                    {
                        parameterInputs.Parameters.Remove("parameterProcessRequestHtmlAttributes");
                        parameterInputs.Parameters.TryAdd("parameterProcessRequestHtmlAttributes", storedProcessRequestHtmlRow.Attributes);

                        storedOutputResponseData = Step_0_0_Framework_Store_HtmlAttributesToArray_1_0(parameterInputs);

                        //OUTPUT:                          <div                                id="row-_A_1_xxx">          {row_A-1_xxx_Replace}                                    </div>
                        storedOutputResponseDataList.Add($@"<{ storedProcessRequestHtmlRow.Tag } {Step_0_0_Framework_Store_HtmlAttributesToArray_1_0(parameterInputs)}>{{{ storedProcessRequestHtmlRow.Attributes[0].id }_Replace}}</{storedProcessRequestHtmlRow.Tag}>");
                    }

                    return await Task.FromResult<string>(storedOutputResponseHtmlContainerString.Replace("{HTMLRows_Replace}", string.Join("\n", storedOutputResponseDataList))).ConfigureAwait(true);
                }
                catch (Exception storedProcessRequestMistake)
                {
                    #region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode) {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        //0. CONTROLLERS

                        //1. INPUTS

                        //2. PROCESS                        
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "FAILED converting json to html row");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Step_2_0_Framework_Convert_HtmlRowsJsonToHtml_1_0.ExecuteConversionRequest");

                        //3. OUTPUTS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw new Exception("CONVERSION request failed " + storedProcessRequestMistake.ToString());

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

        public static async Task<string> Step_3_0_Framework_Convert_HtmlColumnsJsonToHtml_1_0(SingleParmPoco_12_2_1_0 parameterInputs) 
        {
            #region 1. INPUTS

            #region VALIDATE input parameters

            Func<SingleParmPoco_12_2_1_0, Task<bool>> ValidateInputs = (SingleParmPoco_12_2_1_0 parameterInputs) =>
            {
                #region 1. INPUTS

                #region DEFINE control variables

                #endregion

                #region DEFINE input variables

                SingleParmPoco_12_2_1_0 storedInputs = null;

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

                #region MEMORIZE input action name

                string storedInputRequestActionName = parameterInputs.Parameters["parameterInputRequestActionName"];

                #endregion 

                #endregion

                #region MEMORIZE process variables   

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
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterInputRequestActionName", storedInputRequestActionName);

                //2. PROCESS
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "VALIDATING request inputs");
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Step_3_0_Framework_Convert_HtmlColumnsJsonToHtml_1_0 -> ValidateInputs");

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

                if (parameterInputs != null || parameterInputs.Parameters != null)
                {
                    //0. CONTROLLERS

                    //1. INPUTS

                    //2. PROCESS                       
                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestTracker"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestTracker*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }
                    else
                    {
                        if (parameterInputs.Parameters["parameterProcessRequestTracker"]["storedProcessRequestSettings"] == null)
                        {
                            storedOutputResponseMessage += "***parameterProcessRequestTracker*** must contain a key of ***storedProcessRequestSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.TryAdd(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestSettings"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestSettings*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterOutputResponseHtmlRowString"))
                    {
                        storedOutputResponseMessage += "***parameterOutputResponseHtmlRowString*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterInputRequestHtmlColumnsJSON"))
                    {
                        storedOutputResponseMessage += "***parameterInputRequestHtmlColumnsJSON*** cannot be blank or empty.\n";
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

                    //3. OUTPUTS

                    if (storedProcessRequestMistakeMade)
                    {
                        #region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode)
                        {
                            storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                            //0. CONTROLLERS

                            //1. INPUTS

                            //2. PROCESS                               
                            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                            //3. OUTPUTS  
                            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                            Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
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

                        //0. CONTROLLERS

                        //1. INPUTS

                        //2. PROCESS                         
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                        //3. OUTPUTS  
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
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

                return Task.FromResult<bool>(true);

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

            SingleParmPoco_12_2_1_0 storedInputs = null;

            #endregion

            #region DEFINE process variables

            string storedProcessRequestHtmlColumnString = "";

            #endregion

            #region DEFINE output variables

            dynamic storedOutputResponseData = null;
            List<string> storedOutputResponseDataList = new List<string>();

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

            #region MEMORIZE input request html

            HtmlSection storedInputRequestHtmlColumnsJSON = parameterInputs.Parameters["parameterInputRequestHtmlColumnsJSON"];

            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process centralized processes

            aClass_Programming_ScriptAction_12_2_1_0<JObject> storedProcessRequestCentralizedStorer = parameterInputs.Parameters["parameterProcessRequestCentralizedStorer"];
                
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
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterInputRequestActionName", storedInputRequestActionName);

            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "CONVERTING json to html row");
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Step_3_0_Framework_Convert_HtmlColumnsJsonToHtml_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters.getValue("parameterOPTIONALIgnoreDeveloperConsoleLog"));

            #endregion

            #region MEMORIZE process storyline details

            JObject storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

            #endregion            

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output response html

            string storedOutputResponseHtmlRowString = parameterInputs.Parameters["parameterOutputResponseHtmlRowString"];

            #endregion

            #endregion            

            #endregion

            #region 2. PROCESS

            #region EXECUTE json to html conversion

            #region IDEAL CASE - USE json metadata

            Func<string> ExecuteConversionRequest = () =>
            {
                try
                {
                    foreach (var storedProcessRequestHtmlColumn in storedInputRequestHtmlColumnsJSON.value.HTMLContentItems)
                    {
                        //OUTPUT 1: 
                        storedOutputResponseHtmlRowString = "<div id=\"row-_A_1_xxx\">{row_A-1_xxx_Replace}</div>";

                        parameterInputs.Parameters.Remove("parameterProcessRequestHtmlAttributes");
                        parameterInputs.Parameters.TryAdd("parameterProcessRequestHtmlAttributes", storedProcessRequestHtmlColumn.Attributes);

                        storedOutputResponseData = Step_0_0_Framework_Store_HtmlAttributesToArray_1_0(parameterInputs);

                        //OUTPUT 2:                              <div                                    id="column_A_1_1_xxx">     {column_A_1_1_xxx_Replace}                                   </div>
                        storedProcessRequestHtmlColumnString = $@"<${storedProcessRequestHtmlColumn.Tag} ${storedOutputResponseData}>{{{storedProcessRequestHtmlColumn.Attributes[0].id}_Replace}}</{storedProcessRequestHtmlColumn.Tag}>\n";

                        //OUTPUT 3:                                                                     "row_A-1_xxx_Replace                                                          ***SEE OUTPUT 2 ABOVE***
                        storedOutputResponseHtmlRowString = storedOutputResponseHtmlRowString.Replace($@"{{{storedProcessRequestHtmlColumn.ParentHTMLContentItemAttributeID}_Replace}}", storedProcessRequestHtmlColumnString);

                        //OUTPUT 4: 
                        //storedOutputResponseHtmlRowString = <div id="row-_A_1_xxx">
                        //                                          <div id="column_A_1_1_xxx">{column_A_1_1_xxx_Replace}</div>   
                        //                                    </div>  
                    };

                    return storedOutputResponseHtmlRowString;
                }
                catch (Exception storedProcessRequestMistake)
                {
                    #region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode) {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        //0. CONTROLLERS

                        //1. INPUTS

                        //2. PROCESS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "FAILED converting json to html column");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Step_3_0_Framework_Convert_HtmlColumnsJsonToHtml_1_0.ExecuteConversionRequest");

                        //3. OUTPUTS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw new Exception("CONVERSION request failed " + storedProcessRequestMistake.ToString());

                    #endregion
                }
            };

            storedOutputResponseData = ExecuteConversionRequest();

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

            Func<SingleParmPoco_12_2_1_0, Task<bool>> ValidateInputs = (SingleParmPoco_12_2_1_0 parameterInputs) => {
                #region 1. INPUTS

                #region DEFINE control variables

                #endregion

                #region DEFINE input variables

                SingleParmPoco_12_2_1_0 storedInputs = null;

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

                #region MEMORIZE input action name

                string storedInputRequestActionName = parameterInputs.Parameters["parameterInputRequestActionName"];

                #endregion 

                #endregion

                #region MEMORIZE process variables   

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
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterInputRequestActionName", storedInputRequestActionName);

                //2. PROCESS
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "VALIDATING request inputs");
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Step_4_0_Framework_Convert_HtmlContentJsonToHtml_1_0 -> ValidateInputs");

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

                if (parameterInputs != null || parameterInputs.Parameters != null) {
                    //0. CONTROLLERS

                    //1. INPUTS

                    //2. PROCESS                    
                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestTracker")) {
                        storedOutputResponseMessage += "***parameterProcessRequestTracker*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }
                    else {
                        if (parameterInputs.Parameters["parameterProcessRequestTracker"]["storedProcessRequestSettings"] == null) {
                            storedOutputResponseMessage += "***parameterProcessRequestTracker*** must contain a key of ***storedProcessRequestSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.TryAdd(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestSettings")) {
                        storedOutputResponseMessage += "***parameterProcessRequestSettings*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterOutputResponseHtmlColumnString")) {
                        storedOutputResponseMessage += "***parameterOutputResponseHtmlColumnString*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterInputRequestHtmlContentJSON")) {
                        storedOutputResponseMessage += "***parameterInputRequestHtmlContentJSON*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestCentralizedStorer")) {
                        storedOutputResponseMessage += "***parameterProcessRequestCentralizedStorer*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestDataStorylineDetails")) {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    //3. OUTPUTS

                    if (storedProcessRequestMistakeMade) {
                        #region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode) {
                            storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                            //0. CONTROLLERS

                            //1. INPUTS

                            //2. PROCESS                            
                            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                            //3. OUTPUTS
                            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                            Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                        }

                        #endregion

                        #region EDGE CASE - USE exception handler

                        throw new Exception("PARSING parameter values failed");

                        #endregion
                    }
                }
                else {
                    #region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode) {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        //0. CONTROLLERS

                        //1. INPUTS

                        //2. PROCESS                          
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                        //3. OUTPUTS  
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
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

                return Task.FromResult<bool>(true);

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

            SingleParmPoco_12_2_1_0 storedInputs = null;

            #endregion

            #region DEFINE process variables

            string storedProcesseRequestContent = "";

            #endregion

            #region DEFINE output variables

            dynamic storedOutputResponseData = null;
            Dictionary<string, List<string>> storedOutputResponseDataIdsAndContent = new Dictionary<string, List<string>>();
            dynamic storedOutputResponseHtmlAttributeKeyValuePairs = null;

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

            #region MEMORIZE input request html

            HtmlSection storedInputRequestHtmlContentJSON = parameterInputs.Parameters["parameterInputRequestHtmlContentJSON"];

            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process centralized processes

            aClass_Programming_ScriptAction_12_2_1_0<JObject> storedProcessRequestCentralizedStorer = parameterInputs.Parameters["parameterProcessRequestCentralizedStorer"];
                
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
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterInputRequestActionName", storedInputRequestActionName);

            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "CONVERTING json to html content");
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Step_4_0_Framework_Convert_HtmlContentJsonToHtml_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters.getValue("parameterOPTIONALIgnoreDeveloperConsoleLog"));

            #endregion

            #region MEMORIZE process storyline details

            JObject storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

            #endregion            

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output response html

            string storedOutputResponseHtmlColumnString = parameterInputs.Parameters["parameterOutputResponseHtmlColumnString"];

            #endregion

            #endregion       

            #endregion

            #region 2. PROCESS

            #region EXECUTE json to html conversion

            #region IDEAL CASE - USE json metadata

            Func<string> ExecuteConversionRequest = () =>
            {
                try
                {
                    foreach(var storedProcessRequestHtmlContent in storedInputRequestHtmlContentJSON.value.HTMLContentItems) 
                    {
                        //OUTPUT 1: 
                        //storedOutputResponseHtmlColumnString =  <div id="row-_A_1_xxx">
                        //                                              <div id="column_A_1_1_xxx">{column_A_1_1_xxx_Replace}</div>   
                        //                                       </div>     
                        if (!storedOutputResponseDataIdsAndContent.ContainsKey(storedProcessRequestHtmlContent.ParentHTMLContentItemAttributeID))
                        {
                            storedOutputResponseDataIdsAndContent.Add(storedProcessRequestHtmlContent.ParentHTMLContentItemAttributeID, new List<string>());

                            parameterInputs.Parameters.Remove("parameterProcessRequestHtmlAttributes");
                            parameterInputs.Parameters.TryAdd("parameterProcessRequestHtmlAttributes", storedProcessRequestHtmlContent.Attributes);

                            //OUTPUT 2:                          //column_A_1_1_xxx                                                       <div                                    id="content_A-1-1-1_xxx"                                              <img id="content_A-1-1-1_xxx">          </img>
                            storedOutputResponseDataIdsAndContent[storedProcessRequestHtmlContent.ParentHTMLContentItemAttributeID].Add($@"<{storedProcessRequestHtmlContent.Tag} {Step_0_0_Framework_Store_HtmlAttributesToArray_1_0(parameterInputs)}>{storedProcessRequestHtmlContent.Value}</{storedProcessRequestHtmlContent.Tag}>\n");
                        }
                        else
                        {
                            parameterInputs.Parameters.Remove("parameterProcessRequestHtmlAttributes");
                            parameterInputs.Parameters.TryAdd("parameterProcessRequestHtmlAttributes", storedProcessRequestHtmlContent.Attributes);

                            storedOutputResponseHtmlAttributeKeyValuePairs = Step_0_0_Framework_Store_HtmlAttributesToArray_1_0(parameterInputs);

                            //OUTPUT 2:                          //column_A_1_1_xxx                                                       <div                                    id="content_A-1-1-1_xxx"                                              <img id="content_A-1-1-1_xxx">          </img>
                            storedOutputResponseDataIdsAndContent[storedProcessRequestHtmlContent.ParentHTMLContentItemAttributeID].Add($@"<{storedProcessRequestHtmlContent.Tag} {Step_0_0_Framework_Store_HtmlAttributesToArray_1_0(parameterInputs)}>{storedProcessRequestHtmlContent.Value}</{storedProcessRequestHtmlContent.Tag}>\n");
                        }
                    }

                    //OUTPUT 4: 
                    //storedProcesseRequestContent = <img id="content_A-1-1-1_xxx" alt="xxx" src=""></img>
                    //                               <img id="content_A-1-1-2_xxx" alt="xxx" src=""></img>
                    //                               <img id="content_A-1-1-3_xxx" alt="xxx" src=""></img>
                    foreach (var storedOutputResponseDataIdAndContent in storedOutputResponseDataIdsAndContent.Keys)
                    {
                        //OUTPUT 5:                            <img id="content_A-1-1-3_xxx" alt="xxx" src="/...999.0.3.BaseDI.Professional.QuickStart.Templates/image.jpg"> CONVERT TO <img id="content_A-1-1-3_xxx" alt="xxx" src="/Images/image.jpg">
                        storedOutputResponseHtmlColumnString = storedOutputResponseHtmlColumnString.Replace($"{{{storedOutputResponseDataIdAndContent}_Replace}}", string.Join("\n", storedOutputResponseDataIdsAndContent[storedOutputResponseDataIdAndContent]));
                    }

                    if (storedProcessRequestSettings.GetValue<string>("AppSettings:APP_ENV") == "SERVER")
                    {
                        //OUTPUT 5:                            <img id="content_A-1-1-3_xxx" alt="xxx" src="/...999.0.3.BaseDI.Professional.QuickStart.Templates/image.jpg"> CONVERT TO <img id="content_A-1-1-3_xxx" alt="xxx" src="/Images/image.jpg">
                        storedOutputResponseHtmlColumnString = storedOutputResponseHtmlColumnString.Replace("../999.0.3.BaseDI.Professional.QuickStart.Templates", "/StaticFiles");
                    }                    

                    return storedOutputResponseHtmlColumnString;
                }
                catch (Exception storedProcessRequestMistake) 
                {
                    #region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode) {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        //0. CONTROLLERS

                        //1. INPUTS

                        //2. PROCESS                        
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "FAILED converting json to html content");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Step_4_0_Framework_Convert_HtmlContentJsonToHtml_1_0.ExecuteConversionRequest");

                        //3. OUTPUTS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw new Exception("CONVERSION request failed " + storedProcessRequestMistake.ToString());

                    #endregion
                }
            };

            storedOutputResponseData = ExecuteConversionRequest();

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

            Func<SingleParmPoco_12_2_1_0, Task<bool>> ValidateInputs = (SingleParmPoco_12_2_1_0 parameterInputs) => {
                #region 1. INPUTS

                #region DEFINE control variables

                #endregion

                #region DEFINE input variables

                SingleParmPoco_12_2_1_0 storedInputs = null;

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

                #region MEMORIZE input action name

                string storedInputRequestActionName = parameterInputs.Parameters["parameterInputRequestActionName"];

                #endregion 

                #endregion

                #region MEMORIZE process variables   

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
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterInputRequestActionName", storedInputRequestActionName);

                //2. PROCESS
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "VALIDATING request inputs");
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Step_5_0_Framework_Convert_HtmlCssJSONToInlineStyles_1_0 -> ValidateInputs");

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

                if (parameterInputs != null || parameterInputs.Parameters != null) {
                    //0. CONTROLLERS

                    //1. INPUTS

                    //2. PROCESS                     
                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestTracker")) {
                        storedOutputResponseMessage += "***parameterProcessRequestTracker*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }
                    else {
                        if (parameterInputs.Parameters["parameterProcessRequestTracker"]["storedProcessRequestSettings"] == null) {
                            storedOutputResponseMessage += "***parameterProcessRequestTracker*** must contain a key of ***storedProcessRequestSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.TryAdd(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestSettings")) {
                        storedOutputResponseMessage += "***parameterProcessRequestSettings*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterInputRequestHtmlStylesJSON")) {
                        storedOutputResponseMessage += "***parameterInputRequestHtmlStylesJSON*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }
                    else 
                    {
                        //if (!(parameterInputs.Parameters["parameterInputRequestHtmlStylesJSON"] as dynamic)?.value[0]?._2_2_2_4_1_clientInformationHTMLContentStylingItem?.value?.HTMLContentStylingItemFiles[0]?.StyleFilePathLocal)
                        //{
                        //    storedOutputResponseMessage += "***parameterInputRequestHtmlStylesJSON*** [StyleFilePathLocal] cannot be blank or empty.\n";
                        //    storedProcessRequestMistakeMade = true;
                        //}

                        //if (!parameterInputs.Parameters["parameterInputRequestHtmlStylesJSON"]?.value[0]?._2_2_2_4_1_clientInformationHTMLContentStylingItem?.value?.HTMLContentStylingItemFiles[0]?.StyleFiles)
                        //{
                        //    storedOutputResponseMessage += "***parameterInputRequestHtmlStylesJSON*** [StyleFiles] cannot be blank or empty.\n";
                        //    storedProcessRequestMistakeMade = true;
                        //}
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestCentralizedStorer")) {
                        storedOutputResponseMessage += "***parameterProcessRequestCentralizedStorer*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestDataStorylineDetails")) {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    //3. OUTPUTS
                    if (storedProcessRequestMistakeMade) {
                        #region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode) {
                            storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                            //0. CONTROLLERS

                            //1. INPUTS

                            //2. PROCESS                            
                            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                            //3. OUTPUTS   
                            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                            Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                        }

                        #endregion

                        #region EDGE CASE - USE exception handler

                        throw new Exception("PARSING parameter values failed");

                        #endregion
                    }
                }
                else {
                    #region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode) {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        //0. CONTROLLERS

                        //1. INPUTS

                        //2. PROCESS                           
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                        //3. OUTPUTS   
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
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

                return Task.FromResult<bool>(true);

                #endregion

                #endregion

                #endregion
            };

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            #endregion

            #region DEFINE control variables

            Func<string> storedControlRequestExecutionConversionRequest = null;

            #endregion

            #region DEFINE input variables

            SingleParmPoco_12_2_1_0 storedInputs = null;

            #endregion

            #region DEFINE process variables

            List<CssStyleFileUseProperty> storedProcessRequestCssStyleList = new List<CssStyleFileUseProperty>();
            List<CssStyleFileUseProperty> storedProcessRequestCssGlobalStyleList = new List<CssStyleFileUseProperty>();
            List<CssStyleFileUseProperty> storedProcessRequestCssContainerStyleList = new List<CssStyleFileUseProperty>();
            List<CssStyleFileUseProperty> storedProcessRequestCssRowStyleList = new List<CssStyleFileUseProperty>();
            List<CssStyleFileUseProperty> storedProcessRequestCssColumnStyleList = new List<CssStyleFileUseProperty>();
            List<CssStyleFileUseProperty> storedProcessRequestCssContentStyleList = new List<CssStyleFileUseProperty>();

            string storedProcessRequestCssOutputContentContainer = "";
            string storedProcessRequestCssOutputContentContainer2 = "";
            string storedProcessRequestCssOutputContentBody = "";
            List<string> storedProcessRequestCssOutputContentBodyList = new List<string>();
            List<string> storedProcessRequestCssOutputContentList = new List<string>();
            List<string> storedProcessRequestCssOutputContentListMediaQueries = new List<string>();
            List<string> storedProcessRequestCssOutputContentListGlobal = new List<string>();
            List<string> storedProcessRequestCssOutputContentListGlobalMediaQueries = new List<string>();
            List<string> storedProcessRequestCssOutputContentListContainers = new List<string>();
            List<string> storedProcessRequestCssOutputContentListContainersMediaQueries = new List<string>();
            List<string> storedProcessRequestCssOutputContentListRows = new List<string>();
            List<string> storedProcessRequestCssOutputContentListRowsMediaQueries = new List<string>();
            List<string> storedProcessRequestCssOutputContentListColumns = new List<string>();
            List<string> storedProcessRequestCssOutputContentListColumnsMediaQueries = new List<string>();
            List<string> storedProcessRequestCssOutputContentListContent = new List<string>();
            List<string> storedProcessRequestCssOutputContentListContentMediaQueries = new List<string>();
            string storedProcessRequestCssOutputContentProperty = "";
            bool storedProcessRequestCssOutputContentValid = false;
            
            #endregion

            #region DEFINE output variables

            dynamic storedOutputResponseData = null;
            string storedOutputResponseHtmlCssString = "";

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

            #region MEMORIZE input request html

            HTMLContentStylingDetails_SetImplementer_ProductCreation_WebDevelopment_CSS storedInputRequestHtmlStylesJSON = parameterInputs.Parameters["parameterInputRequestHtmlStylesJSON"];
            
            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process centralized processes

            aClass_Programming_ScriptAction_12_2_1_0<JObject> storedProcessRequestCentralizedStorer = parameterInputs.Parameters["parameterProcessRequestCentralizedStorer"];
                
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
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterInputRequestActionName", storedInputRequestActionName);

            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "CONVERTING json to css inline styles");
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Step_5_0_Framework_Convert_HtmlCssJSONToInlineStyles_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters.getValue("parameterOPTIONALIgnoreDeveloperConsoleLog"));

            #endregion

            #region MEMORIZE process css details
            
            List<CssStyleFile> storedProcessRequestCssStyleFilesArray = storedInputRequestHtmlStylesJSON?.value[0]._2_2_2_4_1_clientInformationHTMLContentStylingItem?.value?.HTMLContentStylingItemFiles[0]?.StyleFiles;

            string storedProcessRequestCssStyleContainerPattern1 = "{styleID} {\n  {stylePropertiesKeyValues}\n}\n\n";
            string storedProcessRequestCssStyleContainerPattern2 = "{styleID}:{styleSelector} {\n  {stylePropertiesKeyValues}\n}\n\n";
            string storedProcessRequestCssStyleContainerPattern3 = "{styleID}:{styleSelector}(n) {\n  {stylePropertiesKeyValues}\n}\n\n";
            string storedProcessRequestCssStyleContainerPattern4 = "{styleID}::{styleSelector} {\n  {stylePropertiesKeyValues}\n}\n\n";
            string storedProcessRequestCssStyleContainerPattern5 = "@media {styleMediaQueryNotOnly} {styleMediaQueryType} and ({styleMediaQueryFeature1} {styleMediaQueryNotOrNot} {styleMediaQueryFeature2}) {\n  {stylePropertiesKeyValues}\n}\n\n";
            string storedProcessRequestCssStyleContainerPattern6 = "@media {styleMediaQueryType} and ({styleMediaQueryFeature1} {styleMediaQueryNotOrNot} {styleMediaQueryFeature2}) {\n  {stylePropertiesKeyValues}\n}\n\n";
            string storedProcessRequestCssStyleContainerPattern7 = "{styleID} {\n  {stylePropertiesKeyValues}\n  }";

            string storedProcessRequestCssStyleCommentPattern0 = "/* *************************************************** */\n";
            storedProcessRequestCssStyleCommentPattern0            += "/*                   ALL SCREENS                       */\n";                                                       
            storedProcessRequestCssStyleCommentPattern0            += "/* *************************************************** */\n\n";

            string storedProcessRequestCssStyleCommentPattern1 = "/* GENERAL LAYOUT */\n\n";
            string storedProcessRequestCssStyleCommentPattern2 = "/* CONTAINER */\n\n";
            string storedProcessRequestCssStyleCommentPattern3 = "/* ROWS */\n\n";
            string storedProcessRequestCssStyleCommentPattern4 = "/* COLUMNS */\n\n";
            string storedProcessRequestCssStyleCommentPattern5 = "/* CONTENT */\n\n";

            string storedProcessRequestCssStyleCommentPattern6 = "/* *************************************************** */\n";
            storedProcessRequestCssStyleCommentPattern6            += "/*                   MOBILE SCREENS                    */\n";                                                       
            storedProcessRequestCssStyleCommentPattern6            += "/* *************************************************** */\n\n";

            string storedProcessRequestCssStyleBodyPattern1 = "  {stylePropertyKey}: {stylePropertyValue};";

            #endregion

            #region MEMORIZE process storyline details

            JObject storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

            #endregion            

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxx



            #endregion

            #endregion       

            #endregion

            #region 2. PROCESS

            #region EXECUTE json to html conversion

            try
            {
                #region IDEAL CASE - USE json metadata

                Func<SingleParmPoco_12_2_1_0, Task<bool>> ExecuteProcessHelper = (SingleParmPoco_12_2_1_0 parameterInputs) =>
                {
                    storedProcessRequestCssStyleList = parameterInputs.Parameters["parameterProcessRequestCssStyleList"];
                    storedProcessRequestCssOutputContentList = parameterInputs.Parameters["parameterProcessRequestCssOutputContentList"];
                    storedProcessRequestCssOutputContentListMediaQueries = parameterInputs.Parameters["parameterProcessRequestCssOutputContentListMediaQueries"];

                    foreach (var storedProcessRequestCssStyleItem in storedProcessRequestCssStyleList)
                    {
                        if (!string.IsNullOrEmpty(storedProcessRequestCssStyleItem.attributeID))
                        {
                            //OUTPUT EXAMPLE: storedProcessRequestCssOutputRowContent = body {\n  {stylePropertiesKeyValues}\n}
                            storedProcessRequestCssOutputContentContainer = storedProcessRequestCssStyleContainerPattern1.Replace("{styleID}", storedProcessRequestCssStyleItem.attributeID);

                            #region CONVERT from css properties from json to array list
                            foreach (var storedProcessRequestCssGlobalStyleItemProperty in storedProcessRequestCssStyleItem.properties)
                            {
                                if (!string.IsNullOrEmpty(storedProcessRequestCssGlobalStyleItemProperty.propertyName))
                                {
                                    //OUTPUT EXAMPLE: storedProcessRequestCssOutputContentBody = border:
                                    storedProcessRequestCssOutputContentBody = storedProcessRequestCssStyleBodyPattern1.Replace("{stylePropertyKey}", storedProcessRequestCssGlobalStyleItemProperty.propertyName);

                                    foreach (var storedProcessRequestCssGlobalStyleItemPropertyValue in storedProcessRequestCssGlobalStyleItemProperty.properyValues)
                                    {
                                        if (!storedProcessRequestCssOutputContentValid) {
                                            storedProcessRequestCssOutputContentValid = true;
                                        }

                                        if (storedProcessRequestCssOutputContentProperty == "") {
                                            //OUTPUT EXAMPLE: storedProcessRequestCssOutputContentProperty = 1px
                                            storedProcessRequestCssOutputContentProperty = storedProcessRequestCssGlobalStyleItemPropertyValue;
                                        }
                                        else {
                                            //OUTPUT EXAMPLE: storedProcessRequestCssOutputContentProperty = 1px solid
                                            storedProcessRequestCssOutputContentProperty = storedProcessRequestCssOutputContentProperty + " " + storedProcessRequestCssGlobalStyleItemPropertyValue;
                                        }
                                    };

                                    //OUTPUT EXAMPLE: storedProcessRequestCssOutputContentBody = border: 1px solid
                                    storedProcessRequestCssOutputContentBody = storedProcessRequestCssOutputContentBody.Replace("{stylePropertyValue}", storedProcessRequestCssOutputContentProperty);

                                    storedProcessRequestCssOutputContentBodyList.Add(storedProcessRequestCssOutputContentBody);

                                    storedProcessRequestCssOutputContentProperty = "";
                                }
                            }

                            storedProcessRequestCssOutputContentBody = "";

                            if (storedProcessRequestCssOutputContentValid == true)
                            {
                                foreach (var storedProcessRequestCssOutputContentItem in storedProcessRequestCssOutputContentBodyList)
                                {
                                    if (storedProcessRequestCssOutputContentBody == "") {
                                        storedProcessRequestCssOutputContentBody = storedProcessRequestCssOutputContentItem;
                                    }
                                    else {
                                        storedProcessRequestCssOutputContentBody += "\n  " + storedProcessRequestCssOutputContentItem;
                                    }
                                };

                                storedProcessRequestCssOutputContentContainer = storedProcessRequestCssOutputContentContainer.Replace("{stylePropertiesKeyValues}", storedProcessRequestCssOutputContentBody);

                                //OUTPUT EXAMPLE: storedProcessRequestCssOutputContentContainer = body { border: 1px solid }
                                storedProcessRequestCssOutputContentList.Add(storedProcessRequestCssOutputContentContainer);

                                storedProcessRequestCssOutputContentBody = "";
                                storedProcessRequestCssOutputContentBodyList = new List<string>();

                                storedProcessRequestCssOutputContentContainer = "";

                                storedProcessRequestCssOutputContentProperty = "";

                                storedProcessRequestCssOutputContentValid = false;
                            }
                            #endregion

                            #region CONVERT from css media queries from json to array list
                            if (storedProcessRequestCssStyleItem.IsMediaQuery.ToUpper() == "TRUE" && storedProcessRequestCssStyleItem.MediaQueryResolutions.Count > 0) {

                                foreach (var storedProcessRequestCssGlobalStyleMediaQueryResolutionItem in storedProcessRequestCssStyleItem.MediaQueryResolutions)
                                {
                                    if (storedProcessRequestCssGlobalStyleMediaQueryResolutionItem.resolutions != null &&
                                        !string.IsNullOrEmpty(storedProcessRequestCssGlobalStyleMediaQueryResolutionItem.resolutions.mediaQuery)) {

                                        //OUTPUT EXAMPLE: storedProcessRequestCssOutputRowContent = @media only {styleMediaQueryType} and ({styleMediaQueryFeature1} {styleMediaQueryNotOrNot} {styleMediaQueryFeature2}) {\n  {stylePropertiesKeyValues}\n}
                                        storedProcessRequestCssOutputContentContainer = storedProcessRequestCssGlobalStyleMediaQueryResolutionItem.resolutions.mediaQuery;

                                        if (storedProcessRequestCssGlobalStyleMediaQueryResolutionItem.properties != null &&
                                            storedProcessRequestCssGlobalStyleMediaQueryResolutionItem.properties.Count > 0)
                                        {
                                            foreach (var storedProcessRequestCssGlobalStyleMediaResolutionItemProperty in storedProcessRequestCssGlobalStyleMediaQueryResolutionItem.properties) {
                                                if (!string.IsNullOrEmpty(storedProcessRequestCssGlobalStyleMediaResolutionItemProperty.propertyName))
                                                {
                                                    //OUTPUT EXAMPLE: storedProcessRequestCssOutputContentBody = border:
                                                    storedProcessRequestCssOutputContentBody = storedProcessRequestCssStyleBodyPattern1.Replace("{stylePropertyKey}", storedProcessRequestCssGlobalStyleMediaResolutionItemProperty.propertyName);

                                                    foreach (var storedProcessRequestCssGlobalStyleMediaResolutionItemPropertyValue in storedProcessRequestCssGlobalStyleMediaResolutionItemProperty.properyValues)
                                                    {
                                                        if (!storedProcessRequestCssOutputContentValid) {
                                                            storedProcessRequestCssOutputContentValid = true;
                                                        }

                                                        if (storedProcessRequestCssOutputContentProperty == "")
                                                        {
                                                            //OUTPUT EXAMPLE: storedProcessRequestCssOutputContentProperty = 1px
                                                            storedProcessRequestCssOutputContentProperty = storedProcessRequestCssGlobalStyleMediaResolutionItemPropertyValue;
                                                        }
                                                        else
                                                        {
                                                            //OUTPUT EXAMPLE: storedProcessRequestCssOutputContentProperty = 1px solid
                                                            storedProcessRequestCssOutputContentProperty = storedProcessRequestCssOutputContentProperty + " " + storedProcessRequestCssGlobalStyleMediaResolutionItemPropertyValue;
                                                        }
                                                    }

                                                    //OUTPUT EXAMPLE: storedProcessRequestCssOutputContentBody = border: 1px solid
                                                    storedProcessRequestCssOutputContentBody = storedProcessRequestCssOutputContentBody.Replace("{stylePropertyValue}", storedProcessRequestCssOutputContentProperty);
                                                    storedProcessRequestCssOutputContentBodyList.Add(storedProcessRequestCssOutputContentBody);

                                                    storedProcessRequestCssOutputContentProperty = "";
                                                }
                                            }
                                        }
                                    }
                                }

                                storedProcessRequestCssOutputContentBody = "";

                                if (storedProcessRequestCssOutputContentValid == true)
                                {
                                    foreach (var storedProcessRequestCssOutputContentItem in storedProcessRequestCssOutputContentBodyList)
                                    {
                                        if (storedProcessRequestCssOutputContentBody == "")
                                        {
                                            //OUTPUT EXAMPLE: storedProcessRequestCssOutputContentBody = border: 1px solid
                                            storedProcessRequestCssOutputContentBody = storedProcessRequestCssOutputContentItem;
                                        }
                                        else
                                        {
                                            //OUTPUT EXAMPLE: storedProcessRequestCssOutputContentBody = 
                                            //                                                           border: 1px solid;
                                            //                                                           color: red;
                                            storedProcessRequestCssOutputContentBody += "\n  " + storedProcessRequestCssOutputContentItem;
                                        }
                                    }

                                    storedProcessRequestCssOutputContentContainer2 = storedProcessRequestCssStyleContainerPattern7.Replace("{styleID}", storedProcessRequestCssStyleItem.attributeID);
                                    storedProcessRequestCssOutputContentBody = storedProcessRequestCssOutputContentContainer2.Replace("{stylePropertiesKeyValues}", storedProcessRequestCssOutputContentBody);
                                    storedProcessRequestCssOutputContentContainer = storedProcessRequestCssOutputContentContainer.Replace("{stylePropertiesKeyValues}", storedProcessRequestCssOutputContentBody);

                                    //OUTPUT EXAMPLE: storedProcessRequestCssOutputContentContainer = body { border: 1px solid }
                                    storedProcessRequestCssOutputContentListMediaQueries.Add(storedProcessRequestCssOutputContentContainer);

                                    storedProcessRequestCssOutputContentBody = "";
                                    storedProcessRequestCssOutputContentBodyList = new List<string>();

                                    storedProcessRequestCssOutputContentContainer = "";

                                    storedProcessRequestCssOutputContentProperty = "";

                                    storedProcessRequestCssOutputContentValid = false;
                                }
                            }
                            #endregion
                        }
                    }

                    return Task.FromResult<bool>(true);
                };

                #region A. CONVERT css sections
                
                try
                {
                    Func<Task<bool>> ExecuteConversionRequest = () =>
                    {
                        //OUTPUT EXAMPLE: storedProcessRequestHtmlFile = {
                        //   "StyleFileName": "Style_Alignments_Setting_XXX",
                        //   "StyleFileSupportedProperties": ["position", "top", "bottom", xxx],
                        //   "StyleFileUseProperties": [
                        //                               { 
                        //                                   "attributeID": "#column_D-1-1 button", 
                        //                                   "properties": [
                        //                                                       {
                        //                                                             "propertyName":"background",
                        //                                                             "properyValues":[ "darkblue" ],
                        //                                                       }
                        //                                                 ],
                        //                                   "IsMediaQuery": "true",
                        //                                   "IsHtmlTag": "false",
                        //                                   "MediaQueryResolutions": [
                        //                                                               {
                        //                                                                   "resolutions":["1600px"],
                        //                                                                   "propertyName":"top",
                        //                                                                   "properyValues":[ "330px" ]
                        //                                                               }
                        //                                                            ]
                        //                               }
                        //                             ]
                        //}
                        foreach (var storedProcessRequestHtmlFile in storedProcessRequestCssStyleFilesArray)
                        {
                            foreach (var storedProcessRequestStyleFileUseProperty in storedProcessRequestHtmlFile.StyleFileUseProperties)
                            {
                                #region 1. CONVERT json to list of GLOBAL styles

                                if(storedProcessRequestStyleFileUseProperty.attributeID == null ||
                                    storedProcessRequestStyleFileUseProperty.attributeID == "body")
                                {
                                    storedProcessRequestCssGlobalStyleList.Add(storedProcessRequestStyleFileUseProperty);

                                    continue;
                                }

                                #endregion

                                #region 2. CONVERT json to list of CONTAINER styles

                                if (storedProcessRequestStyleFileUseProperty.attributeID != null &&
                                    storedProcessRequestStyleFileUseProperty.attributeID.ToUpper().Contains("CONTAINER_"))
                                {
                                    storedProcessRequestCssContainerStyleList.Add(storedProcessRequestStyleFileUseProperty);

                                    continue;
                                }

                                #endregion

                                #region 3. CONVERT json to list of ROW styles

                                if (storedProcessRequestStyleFileUseProperty.attributeID != null &&
                                    storedProcessRequestStyleFileUseProperty.attributeID.ToUpper().Contains("ROW_"))
                                {
                                    storedProcessRequestCssRowStyleList.Add(storedProcessRequestStyleFileUseProperty);

                                    continue;
                                }

                                #endregion

                                #region 4. CONVERT json to list of COLUMN styles

                                if (storedProcessRequestStyleFileUseProperty.attributeID != null &&
                                    storedProcessRequestStyleFileUseProperty.attributeID.ToUpper().Contains("COLUMN_"))
                                {
                                    storedProcessRequestCssColumnStyleList.Add(storedProcessRequestStyleFileUseProperty);

                                    continue;
                                }

                                #endregion

                                #region 5. CONVERT json to list of CONTENT styles

                                if (storedProcessRequestStyleFileUseProperty.attributeID != null &&
                                    storedProcessRequestStyleFileUseProperty.attributeID.ToUpper().Contains("CONTENT_"))
                                {
                                    storedProcessRequestCssContentStyleList.Add(storedProcessRequestStyleFileUseProperty);

                                    continue;
                                }

                                #endregion
                            }
                        }

                        return Task.FromResult<bool>(false);
                    };

                    await ExecuteConversionRequest();
                }
                catch (Exception storedProcessRequestMistake) {
                    throw new Exception("converting json to list of sections", storedProcessRequestMistake);
                }

                #endregion

                #region B. CONVERT css section global

                try
                {
                    Func<Task<dynamic>> ExecuteConversionRequest = async () =>
                    {
                        storedInputs = new SingleParmPoco_12_2_1_0();

                        storedInputs.Parameters.TryAdd("parameterProcessRequestCssStyleList", storedProcessRequestCssGlobalStyleList);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestCssOutputContentList", storedProcessRequestCssOutputContentListGlobal);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestCssOutputContentListMediaQueries", storedProcessRequestCssOutputContentListGlobalMediaQueries);

                        return await ExecuteProcessHelper(storedInputs);
                    };

                    storedOutputResponseData = await ExecuteConversionRequest();
                }
                catch (Exception storedProcessRequestMistake) {
                    throw new Exception("converting css section global", storedProcessRequestMistake);
                }

                #endregion

                #region C. CONVERT css section containers

                try
                {
                    Func<Task<dynamic>> ExecuteConversionRequest = async () =>
                    {
                        storedInputs = new SingleParmPoco_12_2_1_0();

                        storedInputs.Parameters.TryAdd("parameterProcessRequestCssStyleList", storedProcessRequestCssContainerStyleList);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestCssOutputContentList", storedProcessRequestCssOutputContentListContainers);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestCssOutputContentListMediaQueries", storedProcessRequestCssOutputContentListContainersMediaQueries);

                        return await ExecuteProcessHelper(storedInputs);
                    };

                    storedOutputResponseData = await ExecuteConversionRequest();
                }
                catch (Exception storedProcessRequestMistake) {
                    throw new Exception("converting css section containers", storedProcessRequestMistake);
                }

                #endregion
                
                #region D. CONVERT css section rows

                try
                {
                    Func<Task<dynamic>> ExecuteConversionRequest = async () =>
                    {
                        storedInputs = new SingleParmPoco_12_2_1_0();

                        storedInputs.Parameters.TryAdd("parameterProcessRequestCssStyleList", storedProcessRequestCssRowStyleList);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestCssOutputContentList", storedProcessRequestCssOutputContentListRows);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestCssOutputContentListMediaQueries", storedProcessRequestCssOutputContentListRowsMediaQueries);

                        return await ExecuteProcessHelper(storedInputs);
                    };

                    storedOutputResponseData = await ExecuteConversionRequest();
                }
                catch (Exception storedProcessRequestMistake) {
                    throw new Exception("converting css section containers", storedProcessRequestMistake);
                }

                #endregion
                
                #region E. CONVERT css section columns

                try
                {
                    Func<Task<dynamic>> ExecuteConversionRequest = async () =>
                    {
                        storedInputs = new SingleParmPoco_12_2_1_0();

                        storedInputs.Parameters.TryAdd("parameterProcessRequestCssStyleList", storedProcessRequestCssColumnStyleList);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestCssOutputContentList", storedProcessRequestCssOutputContentListColumns);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestCssOutputContentListMediaQueries", storedProcessRequestCssOutputContentListColumnsMediaQueries);

                        return await ExecuteProcessHelper(storedInputs);
                    };

                    storedOutputResponseData = await ExecuteConversionRequest();
                }
                catch (Exception storedProcessRequestMistake) {
                    throw new Exception("converting css section containers", storedProcessRequestMistake);
                }

                #endregion
                
                #region F. CONVERT css section content

                try
                {
                    Func<Task<dynamic>> ExecuteConversionRequest = async () =>
                    {
                        storedInputs = new SingleParmPoco_12_2_1_0();

                        storedInputs.Parameters.TryAdd("parameterProcessRequestCssStyleList", storedProcessRequestCssContentStyleList);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestCssOutputContentList", storedProcessRequestCssOutputContentListContent);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestCssOutputContentListMediaQueries", storedProcessRequestCssOutputContentListContentMediaQueries);

                        return await ExecuteProcessHelper(storedInputs);
                    };

                    storedOutputResponseData = await ExecuteConversionRequest();
                }
                catch (Exception storedProcessRequestMistake) {
                    throw new Exception("converting css section containers", storedProcessRequestMistake);
                }

                #endregion             

                #region G. OUTPUT css inline code

                Func<Task<string>> ExcuteOutputResponse = async () =>
                {

                    //OUTPUT EXAMPLE: /* *******************ALL SCREENS******************* */
                    storedOutputResponseHtmlCssString = storedProcessRequestCssStyleCommentPattern0;

                    //OUTPUT EXAMPLE: /* GENERAL LAYOUT */
                    storedOutputResponseHtmlCssString += storedProcessRequestCssStyleCommentPattern1;

                    foreach (var storedProcessRequestCssOutputContentItemGlobal in storedProcessRequestCssOutputContentListGlobal)
                    {
                        //OUTPUT EXAMPLE: body {
                        //                  "color:blue";
                        //                }
                        storedOutputResponseHtmlCssString += storedProcessRequestCssOutputContentItemGlobal;
                    }

                    //OUTPUT EXAMPLE: /* CONTAINER */
                    storedOutputResponseHtmlCssString += storedProcessRequestCssStyleCommentPattern2;

                    foreach (var storedProcessRequestCssOutputContentItemContainer in storedProcessRequestCssOutputContentListContainers)
                    {
                        //OUTPUT EXAMPLE: #container_xxx {
                        //                  "height:125px";
                        //                }
                        storedOutputResponseHtmlCssString += storedProcessRequestCssOutputContentItemContainer;
                    }

                    //OUTPUT EXAMPLE: /* ROWS */
                    storedOutputResponseHtmlCssString += storedProcessRequestCssStyleCommentPattern3;

                    foreach (var storedProcessRequestCssOutputContentItemRow in storedProcessRequestCssOutputContentListContainers)
                    {
                        //OUTPUT EXAMPLE: #row_xxx {
                        //                  "height:250px";
                        //                  "width:1020px";
                        //                }
                        storedOutputResponseHtmlCssString += storedProcessRequestCssOutputContentItemRow;
                    }

                    //OUTPUT EXAMPLE: /* COLUMNS */
                    storedOutputResponseHtmlCssString += storedProcessRequestCssStyleCommentPattern4;

                    foreach (var storedProcessRequestCssOutputContentItemColumn in storedProcessRequestCssOutputContentListColumns)
                    {
                        //OUTPUT EXAMPLE: #column_xxx {
                        //                  "height:250px";
                        //                  "width:120px";
                        //                }
                        storedOutputResponseHtmlCssString += storedProcessRequestCssOutputContentItemColumn;
                    }

                    //OUTPUT EXAMPLE: /* CONTENT */
                    storedOutputResponseHtmlCssString += storedProcessRequestCssStyleCommentPattern5;

                    foreach (var storedProcessRequestCssOutputContentItemContent in storedProcessRequestCssOutputContentListContainers)
                    {
                        //OUTPUT EXAMPLE: #content_xxx {
                        //                  "height:250px";
                        //                  "width:120px";
                        //                }
                        storedOutputResponseHtmlCssString += storedProcessRequestCssOutputContentItemContent;
                    }

                    if (storedProcessRequestCssOutputContentListGlobalMediaQueries.Count > 0 ||
                        storedProcessRequestCssOutputContentListContainersMediaQueries.Count > 0 ||
                        storedProcessRequestCssOutputContentListRowsMediaQueries.Count > 0 ||
                        storedProcessRequestCssOutputContentListColumnsMediaQueries.Count > 0 ||
                        storedProcessRequestCssOutputContentListContentMediaQueries.Count > 0)
                    {

                        //OUTPUT EXAMPLE: /* *******************MOBILE SCREENS******************* */
                        storedOutputResponseHtmlCssString += storedProcessRequestCssStyleCommentPattern6;

                        //OUTPUT EXAMPLE: /* GENERAL LAYOUT */
                        storedOutputResponseHtmlCssString += storedProcessRequestCssStyleCommentPattern1;

                        foreach (var storedProcessRequestCssOutputContentItemGlobalMediaQuery in storedProcessRequestCssOutputContentListGlobalMediaQueries)
                        {
                            //OUTPUT EXAMPLE: @media only screen (max-width: 1600px) {
                            //                   body {
                            //                      "color:blue";
                            //                   }
                            //                }
                            storedOutputResponseHtmlCssString += storedProcessRequestCssOutputContentItemGlobalMediaQuery;
                        }

                        //OUTPUT EXAMPLE: /* CONTAINER */
                        storedOutputResponseHtmlCssString += storedProcessRequestCssStyleCommentPattern2;

                        foreach (var storedProcessRequestCssOutputContentItemContainerMediaQuery in storedProcessRequestCssOutputContentListContainersMediaQueries)
                        {
                            //OUTPUT EXAMPLE: @media only screen (max-width: 1600px) {
                            //                   #container_xxx {
                            //                      "height:125px";
                            //                   }
                            //                }
                            storedOutputResponseHtmlCssString += storedProcessRequestCssOutputContentItemContainerMediaQuery;
                        }

                        //OUTPUT EXAMPLE: /* ROWS */
                        storedOutputResponseHtmlCssString += storedProcessRequestCssStyleCommentPattern3;

                        foreach (var storedProcessRequestCssOutputContentItemRowMediaQuery in storedProcessRequestCssOutputContentListRowsMediaQueries)
                        {
                            //OUTPUT EXAMPLE: @media only screen (max-width: 1600px) {
                            //                   #row_xxx {
                            //                      "height:250px";
                            //                      "width:1020px";
                            //                   }
                            //                }
                            storedOutputResponseHtmlCssString += storedProcessRequestCssOutputContentItemRowMediaQuery;
                        }

                        //OUTPUT EXAMPLE: /* COLUMNS */
                        storedOutputResponseHtmlCssString += storedProcessRequestCssStyleCommentPattern4;

                        foreach (var storedProcessRequestCssOutputContentItemColumnMediaQuery in storedProcessRequestCssOutputContentListColumnsMediaQueries)
                        {
                            //OUTPUT EXAMPLE: @media only screen (max-width: 1600px) {
                            //                   #column_xxx {
                            //                      "height:250px";
                            //                      "width:1020px";
                            //                   }
                            //                }
                            storedOutputResponseHtmlCssString += storedProcessRequestCssOutputContentItemColumnMediaQuery;
                        }

                        //OUTPUT EXAMPLE: /* CONTENT */
                        storedOutputResponseHtmlCssString += storedProcessRequestCssStyleCommentPattern5;

                        foreach (var storedProcessRequestCssOutputContentItemContentMediaQuery in storedProcessRequestCssOutputContentListContentMediaQueries)
                        {
                            //OUTPUT EXAMPLE: @media only screen (max-width: 1600px) {
                            //                   #content_xxx {
                            //                      "height:250px";
                            //                      "width:1020px";
                            //                   }
                            //                }
                            storedOutputResponseHtmlCssString += storedProcessRequestCssOutputContentItemContentMediaQuery;
                        }
                    }

                    return await Task.FromResult<string>("<style>" + Environment.NewLine + storedOutputResponseHtmlCssString + Environment.NewLine + "</style>").ConfigureAwait(true);
                };

                storedOutputResponseData = await ExcuteOutputResponse();

                #endregion

                #endregion
            }
            catch (Exception storedProcessRequestMistake) {
                #region EDGE CASE - USE developer logger

                if (storedProcessRequestDeveloperMode) {
                    storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                    //0. CONTROLLERS

                    //1. INPUTS

                    //2. PROCESS
                    storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "FAILED converting json to css");
                    storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                    storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Action");
                    storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMistake", storedProcessRequestMistake);

                    //3. OUTPUTS
                    storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                    await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                }

                #endregion

                #region EDGE CASE - USE exception handler

                throw new Exception("CONVERSION request failed " + storedProcessRequestMistake);

                #endregion
            }

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

            Func<SingleParmPoco_12_2_1_0, Task<bool>> ValidateInputs = (SingleParmPoco_12_2_1_0 parameterInputs) =>
            {
                #region 1. INPUTS

                #region DEFINE control variables

                #endregion

                #region DEFINE input variables

                SingleParmPoco_12_2_1_0 storedInputs = null;

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

                #region MEMORIZE input action name

                string storedInputRequestActionName = parameterInputs.Parameters["parameterInputRequestActionName"];

                #endregion 

                #endregion

                #region MEMORIZE process variables   

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
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterInputRequestActionName", storedInputRequestActionName);

                //2. PROCESS
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "VALIDATING request inputs");
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Step_6_0_Framework_Convert_HtmlScriptsJSONToInlineScripts_1_0 -> ValidateInputs");

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

                if (parameterInputs != null || parameterInputs.Parameters != null)
                {
                    //0. CONTROLLERS

                    //1. INPUTS

                    //2. PROCESS                    
                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestTracker"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestTracker*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }
                    else
                    {
                        if (parameterInputs.Parameters["parameterProcessRequestTracker"]["storedProcessRequestSettings"] == null)
                        {
                            storedOutputResponseMessage += "***parameterProcessRequestTracker*** must contain a key of ***storedProcessRequestSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.TryAdd(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestSettings"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestSettings*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterInputRequestHtmlScriptsJSON"))
                    {
                        storedOutputResponseMessage += "***parameterInputRequestHtmlStylesJSON*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }
                    else
                    {
                        //if (!parameterInputs.Parameters["parameterInputRequestHtmlScriptsJSON"]?.value[0]?._2_2_2_5_1_clientInformationHTMLContentScriptItem?.value?.HTMLContentScriptItemFiles[0]?.ScriptFilePathLocal) {
                        //    storedOutputResponseMessage += "***parameterInputRequestHtmlStylesJSON*** [ScriptsFilePathLocal] cannot be blank or empty.\n";
                        //    storedProcessRequestMistakeMade = true;
                        //}

                        //if (!parameterInputs.Parameters["parameterInputRequestHtmlScriptsJSON"]?.value[0]?._2_2_2_5_1_clientInformationHTMLContentScriptItem?.value?.HTMLContentScriptItemFiles[0]?.ScriptFiles) {
                        //    storedOutputResponseMessage += "***parameterInputRequestHtmlStylesJSON*** [ScriptsFiles] cannot be blank or empty.\n";
                        //    storedProcessRequestMistakeMade = true;
                        //}
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

                    //3. OUTPUTS
                    if (storedProcessRequestMistakeMade)
                    {
                        #region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode)
                        {
                            storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                            //0. CONTROLLERS

                            //1. INPUTS

                            //2. PROCESS                              
                            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                            //3. OUTPUTS 
                            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                            Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
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

                        //0. CONTROLLERS

                        //1. INPUTS

                        //2. PROCESS                        
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                        //3. OUTPUTS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
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

                return Task.FromResult<bool>(true);

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

            SingleParmPoco_12_2_1_0 storedInputs = null;

            #endregion

            #region DEFINE process variables

            string storedProcesseRequestContent = "";

            #endregion

            #region DEFINE output variables

            dynamic storedOutputResponseData = null;
  

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

            #region MEMORIZE input request html

            dynamic storedInputRequestHtmlContentJSON = parameterInputs.Parameters["parameterInputRequestHtmlContentJSON"];            

            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process centralized processes

            aClass_Programming_ScriptAction_12_2_1_0<JObject> storedProcessRequestCentralizedStorer = parameterInputs.Parameters["parameterProcessRequestCentralizedStorer"];
                
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
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterInputRequestActionName", storedInputRequestActionName);

            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "CONVERTING json to html content");
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Step_6_0_Framework_Convert_HtmlScriptsJSONToInlineScripts_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters.getValue("parameterOPTIONALIgnoreDeveloperConsoleLog"));

            #endregion

            #region MEMORIZE process storyline details

            JObject storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

            #endregion            

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output response html

            string storedOutputResponseHtmlColumnString = parameterInputs.Parameters["parameterOutputResponseHtmlColumnString"];

            #endregion

            #endregion     

            #endregion

            #region 2. PROCESS

            #region EXECUTE json to html conversion

            #region IDEAL CASE - USE json metadata

            Func<Task<string>> ExecuteConversionRequest = () =>
            {
                try
                {

                    return Task.FromResult<string>("");
                }
                catch (Exception storedProcessRequestMistake)
                {
                    #region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode)
                    {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        //0. CONTROLLERS

                        //1. INPUTS

                        //2. PROCESS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "FAILED converting json to inline scripts");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Step_6_0_Framework_Convert_HtmlScriptsJSONToInlineScripts_1_0.ExecuteConversionRequest");

                        //3. OUTPUTS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw new Exception("CONVERSION request failed " + storedProcessRequestMistake.ToString());

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

            Func<SingleParmPoco_12_2_1_0, Task<bool>> ValidateInputs = (SingleParmPoco_12_2_1_0 parameterInputs) =>
            {
                #region 1. INPUTS

                #region DEFINE control variables

                #endregion

                #region DEFINE input variables

                SingleParmPoco_12_2_1_0 storedInputs = null;

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

                #region MEMORIZE input action name

                string storedInputRequestActionName = parameterInputs.Parameters["parameterInputRequestActionName"];

                #endregion 

                #endregion

                #region MEMORIZE process variables   

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
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterInputRequestActionName", storedInputRequestActionName);

                //2. PROCESS
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "VALIDATING request inputs");
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Step_7_0_Framework_Convert_HtmlMetaDataJSONToInlineMetaData_1_0 -> ValidateInputs");

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

                if (parameterInputs != null || parameterInputs.Parameters != null)
                {
                    //0. CONTROLLERS

                    //1. INPUTS

                    //2. PROCESS                    
                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestTracker"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestTracker*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }
                    else
                    {
                        if (parameterInputs.Parameters["parameterProcessRequestTracker"]["storedProcessRequestSettings"] == null)
                        {
                            storedOutputResponseMessage += "***parameterProcessRequestTracker*** must contain a key of ***storedProcessRequestSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.TryAdd(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestSettings"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestSettings*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterInputRequestHtmlMetaDataJSON"))
                    {
                        storedOutputResponseMessage += "***parameterInputRequestHtmlMetaDataJSON*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }
                    else
                    {
                        //if (!parameterInputs.Parameters["parameterInputRequestHtmlMetaDataJSON"]?.value[0]?._2_2_2_6_1_clientInformationHTMLContentMetaDataItem?.value?.HTMLContentMetaDataItemFiles[0]?.MetaDataFilePathLocal) {
                        //    storedOutputResponseMessage += "***parameterInputRequestHtmlMetaDataJSON*** [ScriptsFilePathLocal] cannot be blank or empty.\n";
                        //    storedProcessRequestMistakeMade = true;
                        //}

                        //if (!parameterInputs.Parameters["parameterInputRequestHtmlMetaDataJSON"]?.value[0]?._2_2_2_6_1_clientInformationHTMLContentMetaDataItem?.value?.HTMLContentMetaDataItemFiles[0]?.MetaDataFiles) {
                        //    storedOutputResponseMessage += "***parameterInputRequestHtmlMetaDataJSON*** [ScriptsFiles] cannot be blank or empty.\n";
                        //    storedProcessRequestMistakeMade = true;
                        //}
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

                    //3. OUTPUTS

                    if (storedProcessRequestMistakeMade)
                    {
                        #region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode)
                        {
                            storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                            //0. CONTROLLERS

                            //1. INPUTS

                            //2. PROCESS                              
                            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                            //3. OUTPUTS
                            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                            Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
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

                        //0. CONTROLLERS

                        //1. INPUTS

                        //2. PROCESS                          
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                        //3. OUTPUTS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
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

                return Task.FromResult<bool>(true);

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

            SingleParmPoco_12_2_1_0 storedInputs = null;

            #endregion

            #region DEFINE process variables

            string storedProcesseRequestContent = "";

            #endregion

            #region DEFINE output variables

            dynamic storedOutputResponseData = null;

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

            #region MEMORIZE input request html

            dynamic storedInputRequestHtmlContentJSON = parameterInputs.Parameters["parameterInputRequestHtmlContentJSON"];            

            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process centralized processes

            aClass_Programming_ScriptAction_12_2_1_0<JObject> storedProcessRequestCentralizedStorer = parameterInputs.Parameters["parameterProcessRequestCentralizedStorer"];
                
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
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterInputRequestActionName", storedInputRequestActionName);

            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "CONVERTING json to inline meta data");
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Step_7_0_Framework_Convert_HtmlMetaDataJSONToInlineMetaData_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters.getValue("parameterOPTIONALIgnoreDeveloperConsoleLog"));

            #endregion

            #region MEMORIZE process storyline details

            JObject storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

            #endregion            

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output response html

            string storedOutputResponseHtmlColumnString = parameterInputs.Parameters["parameterOutputResponseHtmlColumnString"];

            #endregion

            #endregion    

            #endregion

            #region 2. PROCESS

            #region EXECUTE json to html conversion

            #region IDEAL CASE - USE json metadata

            Func<Task<string>> ExecuteConversionRequest = () =>
            {
                try 
                {

                    return Task.FromResult<string>("");
                }
                catch (Exception storedProcessRequestMistake) {
                    #region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode) {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        //0. CONTROLLERS

                        //1. INPUTS

                        //2. PROCESS                        
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "FAILED converting json to html styles");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Step_5_0_Framework_Convert_HtmlCssJSONToInlineStyles_1_0.ExecuteConversionRequest");

                        //3. OUTPUTS      
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw new Exception("CONVERSION request failed " + storedProcessRequestMistake.ToString());

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

        public static async Task<string> Step_8_0_Framework_Convert_HtmlStructureToString_1_0(SingleParmPoco_12_2_1_0 parameterInputs) {
            #region 1. INPUTS

            #region VALIDATE input parameters

            Func<SingleParmPoco_12_2_1_0, Task<bool>> ValidateInputs = (SingleParmPoco_12_2_1_0 parameterInputs) =>
            {
                #region 1. INPUTS

                #region DEFINE control variables

                #endregion

                #region DEFINE input variables

                SingleParmPoco_12_2_1_0 storedInputs = null;

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

                #region MEMORIZE input action name

                string storedInputRequestActionName = parameterInputs.Parameters["parameterInputRequestActionName"];

                #endregion 

                #endregion

                #region MEMORIZE process variables   

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
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterInputRequestActionName", storedInputRequestActionName);

                //2. PROCESS
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "VALIDATING request inputs");
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Step_8_0_Framework_Convert_HtmlStructureToString_1_0 -> ValidateInputs");

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

                if (parameterInputs != null || parameterInputs.Parameters != null)
                {
                    //0. CONTROLLERS

                    //1. INPUTS
                    if (!parameterInputs.Parameters.ContainsKey("parameterInputRequestHtmlTitle"))
                    {
                        storedOutputResponseMessage += "***parameterTitle*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterInputRequestHtmlAdditionalHeadData"))
                    {
                        storedOutputResponseMessage += "***parameterInputRequestHtmlAdditionalHeadData*** cannot be blank or empty.\n"; ;
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterInputRequestHtmlScripts"))
                    {
                        storedOutputResponseMessage += "***parameterInputRequestHtmlScripts*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterInputRequestHtmlStyles"))
                    {
                        storedOutputResponseMessage += "***parameterInputRequestHtmlStyles*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterInputRequestHtmlBody"))
                    {
                        storedOutputResponseMessage += "***parameterInputRequestHtmlBody*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterInputRequestHtmlMetaData"))
                    {
                        storedOutputResponseMessage += "***parameterInputRequestHtmlMetaData*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    //2. PROCESS
                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestTracker"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestTracker*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }
                    else
                    {
                        if (parameterInputs.Parameters["parameterProcessRequestTracker"]["storedProcessRequestSettings"] == null)
                        {
                            storedOutputResponseMessage += "***parameterProcessRequestTracker*** must contain a key of ***storedProcessRequestSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.TryAdd(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestSettings"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestSettings*** cannot be blank or empty.\n";
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

                    //3. OUTPUTS

                    if (storedProcessRequestMistakeMade)
                    {
                        #region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode)
                        {
                            storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                            //0. CONTROLLERS

                            //1. INPUTS

                            //2. PROCESS                            
                            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                            //3. OUTPUTS
                            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                            Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
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

                        //0. CONTROLLERS

                        //1. INPUTS                        

                        //2. PROCESS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                        //3. OUTPUTS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
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

                return Task.FromResult<bool>(true);

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

            SingleParmPoco_12_2_1_0 storedInputs = null;

            #endregion

            #region DEFINE process variables

            string storedProcessRequestHtmlBaseDIScriptName = "";

            #endregion

            #region DEFINE output variables

            dynamic storedOutputResponseData = null;
            dynamic storedOutputResponseDataCached = null;

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


            #region MEMORIZE input request html

            string storedInputRequestHtmlPageTemplate = "<!DOCTYPE html>" +
                "<html lang=\"en\">" +
                    "<head>" +
                        "{metaDataReplace}" +
                        "<title>{titleReplace}</title>" +
                        "{scriptsReplace}" +
                        "{stylesReplace}" +
                    "</head>" +
                    "<body>" +
                    "    {bodyReplace}" +
                    "</body>" +
                "</html>";

            string storedInputRequestHtmlMetaData = parameterInputs.Parameters["parameterInputRequestHtmlMetaData"];
            string storedInputRequestHtmlTitle = parameterInputs.Parameters["parameterInputRequestHtmlTitle"];
            string storedInputRequestHtmlScripts = parameterInputs.Parameters["parameterInputRequestHtmlScripts"];
            string storedInputRequestHtmlAdditionalHeadData = parameterInputs.Parameters["parameterInputRequestHtmlAdditionalHeadData"];
            string storedInputRequestHtmlStyles = parameterInputs.Parameters["parameterInputRequestHtmlStyles"];
            string storedInputRequestHtmlBody = parameterInputs.Parameters["parameterInputRequestHtmlBody"];

            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process centralized processes

            aClass_Programming_ScriptAction_12_2_1_0<JObject> storedProcessRequestCentralizedStorer = parameterInputs.Parameters["parameterProcessRequestCentralizedStorer"];
                
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
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterInputRequestActionName", storedInputRequestActionName);

            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "CONVERTING json to inline meta data");
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Step_8_0_Framework_Convert_HtmlStructureToString_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters.getValue("parameterOPTIONALIgnoreDeveloperConsoleLog"));

            #endregion

            #region MEMORIZE process storyline details

            JObject storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

            #endregion            

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output response html

            string storedOutputResponseHtmlColumnString = parameterInputs.Parameters["parameterOutputResponseHtmlColumnString"];

            #endregion

            #endregion    

            #endregion

            #region 2. PROCESS

            #region EXECUTE json to html conversion

            #region IDEAL CASE - USE json metadata

            #region 1. READ cached baseDI script path

            Func<Task<string>> ExecuteStorageRequest = async () =>
            {
                try
                {
                    storedInputs = new SingleParmPoco_12_2_1_0();

                    //0. CONTROLLERS

                    //1. INPUTS

                    //2. PROCESS                      
                    storedInputs.Parameters.TryAdd("parameterProcessRequestTracker", storedProcessRequestTracker);
                    storedInputs.Parameters.TryAdd("parameterProcessRequestCRUDVerb", "Read");
                    storedInputs.Parameters.TryAdd("parameterProcessRequestHandler", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0");
                    storedInputs.Parameters.TryAdd("parameterProcessRequestCentralizedStorer", storedProcessRequestCentralizedStorer);
                    storedInputs.Parameters.TryAdd("parameterProcessRequestStorageValue", storedProcessRequestDataStorylineDetails);
                    storedInputs.Parameters.TryAdd("parameterProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);
                    storedInputs.Parameters.TryAdd("parameterProcessRequestPageName", "");
                    storedInputs.Parameters.TryAdd("parameterProcessRequestStorageDescription", "READING client side BaseDI script SOURCE PATH");
                    storedInputs.Parameters.TryAdd("parameterProcessRequestStorageUniqueKey", "BaseDI_PresentationScript_SrcLocation");

                    //4. OUTPUTS
                    storedOutputResponseDataCached = await Extension_Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0.Step_X_X_Framework_Store_CacheDataToPersistentStorage_1_0(storedInputs);
                    //storedOutputResponseDataCached = (storedOutputResponseDataCached && storedOutputResponseDataCached.outputs.length > 0) ? storedOutputResponseDataCached.outputs[1].baseDIObservations[storedOutputResponseDataCached.outputs[1].baseDIObservations.length - 1] : null;

                    if (storedOutputResponseDataCached) {
                        //storedProcessRequestHtmlBaseDIScriptName = storedOutputResponseDataCached[Object.keys(storedOutputResponseDataCached)[0]].observation.metadata[3].item.data[0].dataResult

                        storedInputRequestHtmlScripts += "<script src=\"/scripts/${storedProcessRequestHtmlBaseDIScriptName}\" type=\"text/javascript\"></script>";
                    }

                    return storedInputRequestHtmlScripts;

                }
                catch (Exception storedProcessRequestMistake) {
                    #region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode) {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        //0. CONTROLLERS

                        //1. INPUTS

                        //2. PROCESS                          
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "FAILED reading cache");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Step_6_0_Framework_Convert_HtmlStructureToString_1_0.ExecuteStorageRequest");

                        //4. OUTPUTS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw new Exception("STORAGE request failed " + storedProcessRequestMistake.ToString());

                    #endregion
                }
            };
            
            if (storedProcessRequestSettings.GetValue<string>("AppSettings:APP_ENV") == "SERVER") {
                storedInputRequestHtmlScripts = await ExecuteStorageRequest();
            }

            #endregion

            #region 2. CONVERT inputs to html template

            Func<Task<string>> ExecuteConversionRequest = async () =>
            {
                storedInputRequestHtmlPageTemplate = storedInputRequestHtmlPageTemplate.Replace("{metaDataReplace}", storedInputRequestHtmlMetaData);
                storedInputRequestHtmlPageTemplate = storedInputRequestHtmlPageTemplate.Replace("{titleReplace}", storedInputRequestHtmlTitle);
                storedInputRequestHtmlPageTemplate = storedInputRequestHtmlPageTemplate.Replace("{additionalHeadData}", storedInputRequestHtmlAdditionalHeadData);
                storedInputRequestHtmlPageTemplate = storedInputRequestHtmlPageTemplate.Replace("{scriptsReplace}", storedInputRequestHtmlScripts);
                storedInputRequestHtmlPageTemplate = storedInputRequestHtmlPageTemplate.Replace("{stylesReplace}", storedInputRequestHtmlStyles);
                storedInputRequestHtmlPageTemplate = storedInputRequestHtmlPageTemplate.Replace("{bodyReplace}", storedInputRequestHtmlBody);

                return storedInputRequestHtmlPageTemplate;
            };

            storedInputRequestHtmlPageTemplate = await ExecuteConversionRequest();
            #endregion

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN converted data

            #region IDEAL CASE - USE html string

            return storedInputRequestHtmlPageTemplate;

            #endregion

            #endregion

            #endregion
        }

        public static async Task<string> Step_X_X_Framework_Convert_StorylineDetailsObservationToString_1_0(SingleParmPoco_12_2_1_0 parameterInputs) 
        {
            #region 1. INPUTS

            #region VALIDATE input parameters

            Func<SingleParmPoco_12_2_1_0, Task<bool>> ValidateInputs = (SingleParmPoco_12_2_1_0 parameterInputs) =>
            {
                #region 1. INPUTS

                #region DEFINE control variables

                #endregion

                #region DEFINE input variables

                SingleParmPoco_12_2_1_0 storedInputs = null;

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

                #region MEMORIZE input action name

                string storedInputRequestActionName = parameterInputs.Parameters["parameterInputRequestActionName"];

                #endregion 

                #endregion

                #region MEMORIZE process variables   

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
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterInputRequestActionName", storedInputRequestActionName);

                //2. PROCESS
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "VALIDATING request inputs");
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Step_8_0_Framework_Convert_HtmlStructureToString_1_0 -> ValidateInputs");

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

                if (parameterInputs != null || parameterInputs.Parameters != null)
                {
                    //0. CONTROLLERS

                    //1. INPUTS

                    //2. PROCESS
                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestTracker"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestTracker*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }
                    else
                    {
                        if (parameterInputs.Parameters["parameterProcessRequestTracker"]["storedProcessRequestSettings"] == null)
                        {
                            storedOutputResponseMessage += "***parameterProcessRequestTracker*** must contain a key of ***storedProcessRequestSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.TryAdd(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestSettings"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestSettings*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestRequestHandlerFileName"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestRequestHandlerFileName*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestDataStorylineDetails"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    //3. OUTPUTS
                    if (!parameterInputs.Parameters.ContainsKey("parameterOutputResponseType"))
                    {
                        storedOutputResponseMessage += "***parameterOutputResponseType*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (storedProcessRequestMistakeMade)
                    {
                        #region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode)
                        {
                            storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                            //0. CONTROLLERS

                            //1. INPUTS

                            //2. PROCESS                            
                            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                            //3. OUTPUTS
                            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                            Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
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

                        //0. CONTROLLERS

                        //1. INPUTS                        

                        //2. PROCESS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                        //3. OUTPUTS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
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

                return Task.FromResult<bool>(true);

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

            SingleParmPoco_12_2_1_0 storedInputs = null;

            #endregion

            #region DEFINE process variables



            #endregion

            #region DEFINE output variables

            dynamic storedOutputResponseData = null;
 
            #endregion

            ///////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx


            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input xxx xxx

            string storedInputRequestActionName = parameterInputs.Parameters["parameterInputRequestActionName"];

            #endregion            

            #endregion

            #region MEMORIZE process variables

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
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterInputRequestActionName", storedInputRequestActionName);

            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "CONVERTING json to inline meta data");
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Step_X_X_Framework_Convert_StorylineDetailsObservationToString_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters.getValue("parameterOPTIONALIgnoreDeveloperConsoleLog"));

            #endregion

            #region MEMORIZE process storage details

            string storedProcessRequestStorageKeyUniqueness = parameterInputs.Parameters["parameterProcessRequestRequestHandlerFileName"];
            int storedProcessRequestStorageCounter = 0;

            Dictionary<string, string> storedProcessRequestStorageDictionary = new Dictionary<string, string>();
            string storedProcessRequestStorageKeyJSON = "StorageKey_" + storedProcessRequestStorageKeyUniqueness + "-" + "Read-BaseDI_PresentationJSON_Content";
            string storedProcessRequestStorageKeyHTML = "StorageKey_" + storedProcessRequestStorageKeyUniqueness + "-" + "Read-BaseDI_PresentationHTML_Content";
            string storedProcessRequestStorageKeyXML = "StorageKey_" + storedProcessRequestStorageKeyUniqueness + "-" + "Read-BaseDI_PresentationXML_Content";

            bool storedProcessRequestStorageUpdateMode = false;

            #endregion     

            #region MEMORIZE process storyline details

            JObject storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

            #endregion            

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output response type

            string storedOutputResponseType = parameterInputs.Parameters["parameterOutputResponseType"];
    
            #endregion

            #endregion    

            #endregion

            #region 2. PROCESS

            #region EXECUTE json to html conversion

            #region IDEAL CASE - USE storyline details

            try
            {
                //Func<Task<dynamic>> ExecuteConversionRequest = () =>
                //{
                    //storedProcessRequestDataStorylineDetails?.outputs[1].baseDIObservations.map(storedProcessRequestObservation => {
                    //    if (Object.keys(storedProcessRequestObservation).length > 0 &&
                    //        (Object.keys(storedProcessRequestObservation)[0].toUpperCase() == storedProcessRequestStorageKeyJSON.toUpperCase() ||
                    //            Object.keys(storedProcessRequestObservation)[0].toUpperCase() == storedProcessRequestStorageKeyHTML.toUpperCase() ||
                    //            Object.keys(storedProcessRequestObservation)[0].toUpperCase() == storedProcessRequestStorageKeyXML.toUpperCase()))
                    //    {
                    //        switch (storedOutputResponseType.toUpperCase())
                    //        {
                    //            case "HTML":
                    //                storedOutputResponseData = unescape(storedProcessRequestObservation[storedProcessRequestStorageKeyHTML].observation.metadata[3].item.presentation[0].htmlResult);

                    //                break;
                    //            case "JSON":
                    //                storedOutputResponseData = storedProcessRequestObservation[storedProcessRequestStorageKeyJSON].observation.metadata[3].item.presentation[0].jsonResult;

                    //                break;
                    //            case "XML":
                    //                storedOutputResponseData = storedProcessRequestObservation[storedProcessRequestStorageKeyXML].observation.metadata[3].item.presentation[0].xmlResult;

                    //                break;
                    //        }

                    //        #region EDGE CASE - USE developer logger

                    //        if (storedProcessRequestDeveloperMode) {
                    //            //0. CONTROLLERS

                    //            //1. INPUTS

                    //            //2. PROCESS
                    //            storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                    //            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "SUCCESSFULLY converted StorylineDetails");
                    //            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                    //            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestCentralizedStorer", parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedStorer"));

                    //            //3. OUTPUTS
                    //            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Logging"); //Values = Logging or Mistake
                    //            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseOPTIONALEndOfProcess", true);

                    //            Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    //        }

                    //        #endregion
                    //    }
                    //});
                //};

                //storedOutputResponseData = await ExecuteConversionRequest();
            }
            catch (Exception storedProcessRequestMistake) {
                throw new Exception("converting json to html string", storedProcessRequestMistake);
            }

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN converted data

            #region IDEAL CASE - USE string value

            return storedOutputResponseData;

            #endregion

            #endregion

            #endregion
        }

        #endregion
    }
}
