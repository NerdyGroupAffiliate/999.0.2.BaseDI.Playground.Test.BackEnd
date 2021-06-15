﻿#region Imports

#region BaseDI

using BaseDI.Professional.Script.Programming.Abstract_1;
using BaseDI.Professional.Script.Programming.Extensions_0;
using BaseDI.Professional.Script.Programming.Extensions_1;
using BaseDI.Professional.Script.Programming.Poco_1;
using BaseDI.Professional.Script.Risk_Management.Extensions_0;

#endregion

#region .Net Core

using Microsoft.Extensions.Configuration;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

#endregion 

#region 3rd Party Core

using Hanssens.Net;

using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

#endregion

#endregion

namespace BaseDI.Professional.Script.Programming.Extensions_3
{
    public class Extension_Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0
    {
        private static LocalStorage _3rdParty_DotNetLocalStorage_LocalStorage = new LocalStorage();

        public Extension_Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0()
        {
            #region 1. INPUTS

            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            #endregion
        }

        #region CACHE MANAGEMENT

        public static async Task<JObject> Step_X_X_Framework_Store_CacheDataToPersistentStorage_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS

            #region VALIDATE input parameters

            Func<SingleParmPoco_12_2_1_0, Task<bool>> ValidateInputs = async (SingleParmPoco_12_2_1_0 parameterInputs) =>
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
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestFileName", "Extension_Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Step_X_X_Framework_Store_CacheDataToPersistentStorage_1_0 -> ValidateInputs");

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

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestCRUDVerb"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestCRUDVerb*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestHandler"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestHandler*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestCentralizedStorer"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestCentralizedStorer*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestStorageValue"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestStorageValue*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestDataStorylineDetails"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestPageName"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestPageName*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestStorageDescription"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestStorageDescription*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestStorageUniqueKey"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestStorageUniqueKey*** cannot be blank or empty.\n";
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

            SingleParmPoco_12_2_1_0 storedInputs = null;

            #endregion

            #region DEFINE process variables

            string storedProcessRequestFilteredStorageKey = "";
            Dictionary<string, dynamic> storedProcessRequestStorageDictionary = new Dictionary<string, dynamic>();

            #endregion

            #region DEFINE output variables

            string storedOutputResponseObservationPresentationTemplateItem = "";
            string storedOutputResponseObservationItem = "";

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
            StorylineDetails storedProcessRequestDataStorylineDetailsStrongTyped = storedProcessRequestDataStorylineDetails.ToObject<StorylineDetails>();
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

            #endregion

            #region MEMORIZE process CRUD verb

            string storedProcessRequestCRUDVerb = parameterInputs.Parameters["parameterProcessRequestCRUDVerb"];

            #endregion

            #region MEMORIZE process request details

            string storedProcessRequestDirectorOrExperienceName = parameterInputs.Parameters["parameterProcessRequestHandler"];
            string storedProcessRequestPageName = parameterInputs.Parameters["parameterProcessRequestPageName"];

            #endregion
             
            #region MEMORIZE process storage details

            string storedProcessRequestStorageDescription = parameterInputs.Parameters["parameterProcessRequestStorageDescription"];
            dynamic storedProcessRequestStorageValue = parameterInputs.Parameters["parameterProcessRequestStorageValue"];
            string storedProcessRequestStorageKey = "StorageKey_" + storedProcessRequestDirectorOrExperienceName + "-" + storedProcessRequestCRUDVerb;
            string storedProcessRequestStorageUniqueKey = parameterInputs.Parameters["parameterProcessRequestStorageUniqueKey"];

            if (!string.IsNullOrEmpty(storedProcessRequestStorageUniqueKey))
                storedProcessRequestStorageKey += "-" + storedProcessRequestStorageUniqueKey;

            #endregion

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output response observations

            string storedOutputResponseObservationBusinessTemplateItem = "{}";
            string storedOutputResponseObservationServiceTemplateItem = "{}";
            string storedOutputResponseObservationSecurityTemplateItem = "{}";
            string storedOutputResponseObservationDataTemplateItem = @"{ 'dataResult': '{dataResult}' }";

            #endregion

            #endregion    

            #endregion

            #region 2. PROCESS

            #region EXECUTE local storage process

            #region IDEAL CASE - USE npm node-localstorage

            //DETERMINE if we have something to store.
            if (storedProcessRequestStorageValue)
            {
                #region 1. CREATE new storage item

                storedInputs = new SingleParmPoco_12_2_1_0();

                storedInputs.Parameters.TryAdd("parameterInputRequestActionName", parameterInputs.Parameters["parameterInputRequestActionName"]);
                
                storedInputs.Parameters.TryAdd("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedInputs.Parameters.TryAdd("parameterProcessRequestSettings", storedProcessRequestSettings);
                storedInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "CREATING storage output item");
                
                storedInputs.Parameters.TryAdd("parameterOutputResponseObservationFileName", "Extension_Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0");
                storedInputs.Parameters.TryAdd("parameterOutputResponseObservationMethodName", "Step_X_X_Framework_Store_CacheDataToPersistentStorage_1_0");
                storedInputs.Parameters.TryAdd("parameterOutputResponseObservationPresentationTemplate", storedOutputResponseObservationPresentationTemplateItem);
                storedInputs.Parameters.TryAdd("parameterOutputResponseObservationBusinessTemplate", storedOutputResponseObservationBusinessTemplateItem);
                storedInputs.Parameters.TryAdd("parameterOutputResponseObservationServiceTemplate", storedOutputResponseObservationServiceTemplateItem);
                storedInputs.Parameters.TryAdd("parameterOutputResponseObservationSecurityTemplate", storedOutputResponseObservationSecurityTemplateItem);
                storedInputs.Parameters.TryAdd("parameterOutputResponseObservationDataTemplate", storedOutputResponseObservationDataTemplateItem);

                storedOutputResponseObservationItem = await Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.Step_X_X_Framework_Output_JsonObservationNode_1_0(storedInputs);

                //DETERMINE if we are storing a string value.
                if (storedProcessRequestStorageValue is string)
                {
                    //PREPARING to store a string value.
                    storedOutputResponseObservationItem = storedOutputResponseObservationItem.Replace("{dataResult}", Regex.Unescape(storedProcessRequestStorageValue.trim()));
                }
                else
                {
                    //PREPARING to store an object value.
                    storedOutputResponseObservationItem = storedOutputResponseObservationItem.Replace("{dataResult}", Regex.Unescape(storedProcessRequestStorageValue.ToString(Formatting.None)));
                    storedProcessRequestStorageDictionary[storedProcessRequestStorageKey] = storedOutputResponseObservationItem.ToString();
                }

                #endregion

                #region 2. REMOVE previous stored item

                storedProcessRequestFilteredStorageKey = storedProcessRequestStorageKey.ToString().Replace("-Create", "");
                storedProcessRequestFilteredStorageKey = storedProcessRequestFilteredStorageKey.ToString().Replace("-Read", "");
                storedProcessRequestFilteredStorageKey = storedProcessRequestFilteredStorageKey.ToString().Replace("-Update", "");
                storedProcessRequestFilteredStorageKey = storedProcessRequestFilteredStorageKey.ToString().Replace("-Delete", "");

                foreach (var storedOutputResponseObservation in storedProcessRequestDataStorylineDetailsStrongTyped.outputs[1].baseDIObservations)
                {

                }

                foreach (var storedOutputResponseObservation in storedProcessRequestDataStorylineDetailsStrongTyped.outputs[1].baseDIObservations)
                {

                }
                //storedProcessRequestDataStorylineDetails.outputs[1].baseDIObservations.forEach(element => {
                //    delete element[storedProcessRequestFilteredStorageKey]
                //                });

                //storedProcessRequestDataStorylineDetails.outputs[1].baseDIObservations.forEach(element => {
                //    delete element[storedProcessRequestStorageKey]
                //                });

                #endregion

                #region 3. CREATE storage request

                storedProcessRequestDataStorylineDetailsStrongTyped.outputs[1].baseDIObservations.Add(storedProcessRequestStorageDictionary);

                #endregion

                #region 4. EXECUTE storage request

                if (storedProcessRequestDeveloperMode)
                {
                    storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                    storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Logging"); //Values = Logging or Mistake
                    storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                    Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                }

                storedProcessRequestCentralizedStorer.ExtraData.KeyValuePairs.TryAdd("parametersInputs", parameterInputs);
                storedProcessRequestCentralizedStorer.ExtraData.KeyValuePairs.TryAdd("storedProcessRequestDeveloperLoggingInputs", storedProcessRequestDeveloperLoggingInputs);

                storedProcessRequestDataStorylineDetails = storedProcessRequestCentralizedStorer?.Action_1_Begin_Process();
                //storedProcessRequestDataStorylineDetails.outputs[1].baseDIObservations = (storedProcessRequestDataStorylineDetails && storedProcessRequestDataStorylineDetails.ouputs) ? storedProcessRequestDataStorylineDetails?.outputs[1]?.baseDIObservations?.filter((value: { }) => Object.keys(value).length !== 0) : storedProcessRequestDataStorylineDetails.outputs[1].baseDIObservations;

                #endregion

                #region FUTURE CODE EXAMPLE

                // In case If we need to remove based on verb

                // if(CRUDVerb.toUpperCase() == "CREATE") {
                //     console.log(CRUDVerb)
                //     console.log(storylineDetails.outputs[1].baseDIObservations)

                // } else if(CRUDVerb.toUpperCase() == "READ") {
                //     console.log(CRUDVerb)
                //     console.log(storylineDetails.outputs[1].baseDIObservations)
                // }
                // else if(CRUDVerb.toUpperCase() == "UPDATE") {
                //     console.log(CRUDVerb)
                // }
                // else if(CRUDVerb.toUpperCase() == "DELETE") {
                //     console.log(CRUDVerb)
                // }

                // if (chapter.MasterStorer.CallBack)
                //     chapter.MasterStorer.CallBack();

                #endregion
            }

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN storyline details

            #region IDEAL CASE - USE baseDI dataset

            return storedProcessRequestDataStorylineDetails;

            #endregion

            #endregion

            #endregion
        }

        public static async Task<JObject> Step_X_X_Framework_Store_CacheDataToPersistentStorage_1_1(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS

            #region VALIDATE input parameters

            Func<SingleParmPoco_12_2_1_0, Task<bool>> ValidateInputs = async (SingleParmPoco_12_2_1_0 parameterInputs) =>
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
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestFileName", "Extension_Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Step_X_X_Framework_Store_CacheDataToPersistentStorage_1_1 -> ValidateInputs");

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

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestStorageAction"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestStorageAction*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterOutputResponseObservationKey"))
                    {
                        storedOutputResponseMessage += "***parameterOutputResponseObservationKey*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestStorageValue"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestStorageValue*** cannot be blank or empty.\n";
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

            #region DEFINE storyline details outputs

            dynamic storedOutputResponseObservation = "";
            dynamic storedOutputResponseObservationFiltered = null;
            string storedOutputResponseObservationKey = "";

            #endregion

            #region MEMORIZE control client server

            Dictionary<string, object> storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"] as Dictionary<string, object>;

            #endregion

            #region MEMORIZE app settings

            IConfiguration storedProcessRequestSettings = (IConfiguration)storedProcessRequestTracker["storedProcessRequestSettings"];

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") ? storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") : false;

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "RESOLVING request handler");
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterInputRequestActionName", parameterInputs.Parameters["parameterInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestFileName", "Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0.Page_1_10_End_Process_12_2_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Action");

            #endregion

            #region MEMORIZE storage details

            string storedStorageAction = parameterInputs.Parameters["parameterProcessRequestStorageAction"];
            bool storedStorageCRUDActionRead = false;
            string storedProcessRequestStorageKey = parameterInputs.Parameters["parameterOutputResponseObservationKey"];
            dynamic storedProcessRequestStorageValue = parameterInputs.Parameters["parameterProcessRequestStorageValue"];

            #endregion

            #region MEMORIZE storyline details

            dynamic storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

            #endregion

            #region MEMORIZE storyline details outputs


            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE storage process

            try
            {
                Func<Task<bool>> ExecuteStorageRequest = async () =>
                {
                    #region SETUP storage item

                    try
                    {
                        storedOutputResponseObservationKey = ((JObject)storedProcessRequestStorageValue).Properties().Select(p => p.Name).FirstOrDefault();  //(Object.keys(storedProcessRequestStorageValue)[0]);
                        //EXAMPLE OUTPUT: storedOutputResponseObservationKey = "StorageKey_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0-Create-BaseDI_DataConverter_Mode"

                        if (storedOutputResponseObservationKey.ToString().ToUpper().Contains("-READ"))
                        {
                            storedStorageCRUDActionRead = true;
                        }

                        storedOutputResponseObservationKey = storedOutputResponseObservationKey.ToString().Replace("-Create", "");
                        storedOutputResponseObservationKey = storedOutputResponseObservationKey.ToString().Replace("-Read", "");
                        storedOutputResponseObservationKey = storedOutputResponseObservationKey.ToString().Replace("-Update", "");
                        storedOutputResponseObservationKey = storedOutputResponseObservationKey.ToString().Replace("-Delete", "");
                        //EXAMPLE OUTPUT: storedOutputResponseObservationKey = "StorageKey_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0-BaseDI_DataConverter_Mode"

                        if (!storedStorageCRUDActionRead)
                        {
                            storedOutputResponseObservation = JObject.Parse(storedProcessRequestStorageValue[((JObject)storedProcessRequestStorageValue).Properties().Select(p => p.Name).FirstOrDefault()]);

                            storedOutputResponseObservationFiltered[storedOutputResponseObservationKey] = storedOutputResponseObservation?.baseDIObservations[0];
                        }

                    }
                    catch (Exception storedProcessRequestMistake)
                    {
                        #region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode)
                        {
                            storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "FAILED CRUD setup attempt");
                            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                            Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                        }

                        #endregion

                        #region EDGE CASE - USE exception handler

                        throw storedProcessRequestMistake;

                        #endregion
                    }

                    #endregion

                    if (storedProcessRequestSettings.GetValue<string>("AppSettings:APP_ENV").ToUpper() == "SERVER")
                    {
                        #region IDEAL CASE - USE server storage

                        if (_3rdParty_DotNetLocalStorage_LocalStorage != null)
                        {
                            switch (storedStorageAction.ToUpper())
                            {
                                case "CREATE":
                                case "UPDATE":
                                    _3rdParty_DotNetLocalStorage_LocalStorage.Store(storedProcessRequestStorageKey, storedOutputResponseObservationFiltered);
                                    break;
                                case "DELETE":
                                    _3rdParty_DotNetLocalStorage_LocalStorage.Remove(storedProcessRequestStorageKey);
                                    break;
                                case "READ":
                                    storedOutputResponseData = _3rdParty_DotNetLocalStorage_LocalStorage.Get(storedProcessRequestStorageKey);
                                    break;

                            }
                        }

                        #endregion
                    }
                    else
                    {
                        if (storedProcessRequestSettings.GetValue<string>("AppSettings:APP_ENV").ToUpper() == "CLIENT")
                        {
                            #region EDGE CASE - USE client storage

                            #endregion
                        }
                    }

                    return await Task.FromResult<bool>(true).ConfigureAwait(true);
                };

                await ExecuteStorageRequest();
            }
            catch (Exception storedProcessRequestMistake)
            {
                #region EDGE CASE - USE developer logger

                if (storedProcessRequestDeveloperMode)
                {
                    storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                    storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "FAILED CRUD setup attempt");
                    storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                    storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                    Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                }

                #endregion

                #region EDGE CASE - USE exception handler

                throw storedProcessRequestMistake;

                #endregion
            }

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN storyline details

            #region IDEAL CASE - USE baseDI dataset

            return storedOutputResponseData;

            #endregion

            #endregion

            #endregion
        }

        #endregion
    }
}
