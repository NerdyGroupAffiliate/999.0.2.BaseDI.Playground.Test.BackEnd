#region Imports

#region BaseDI

using BaseDI.Professional.Script.Programming.Abstract_1;
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
    public class Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0
    {
        private static LocalStorage _3rdParty_DotNetLocalStorage_LocalStorage = new LocalStorage();

        public Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0()
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

                Dictionary<string, object> storedClientOrServerInstance = parameterInputs.Parameters["parameterClientOrServerInstance"] as Dictionary<string, object>;

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
                storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.ts");
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
                            storedMessage += "***parameterClientOrServerInstance*** must contain a key of ***storedAppSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.Add(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessCheckPointHit = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterCRUDVerb"))
                    {
                        storedMessage += "***parameterCRUDVerb*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterDirectorOrExperienceName"))
                    {
                        storedMessage += "***parameterDirectorOrExperienceName*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterMasterStorer"))
                    {
                        storedMessage += "***parameterMasterStorer*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterStorageValue"))
                    {
                        storedMessage += "***parameterStorageValue*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterStorylineDetails"))
                    {
                        storedMessage += "***parameterStorylineDetails*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterPageName"))
                    {
                        storedMessage += "***parameterPageName*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterStorageDescription"))
                    {
                        storedMessage += "***parameterStorageDescription*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterUniqueStorageKey"))
                    {
                        storedMessage += "***parameterUniqueStorageKey*** cannot be blank or empty.\n";
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

                            Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
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

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
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

            #region DEFINE storage details

            string storedFilteredStorageKey = "";
            Dictionary<string, dynamic> storedStorageDictionary = new Dictionary<string, dynamic>();

            #endregion

            #region DEFINE parameter inputs

            SingleParmPoco_12_2_1_0 storedParameterInputs;

            #endregion

            #region DEFINE storyline details outputs

            string storedOutPut_ObservationPresentationTemplateItem = "";
            string storedOutPut_ObservationItem = "";

            #endregion

            #region MEMORIZE centralized processes

            aClass_Programming_ScriptAction_12_2_1_0<dynamic> stored_CentralizedStorer = parameterInputs.Parameters["parameterMasterStorer"] as aClass_Programming_ScriptAction_12_2_1_0<dynamic>;
            //this._stored_CentralizedSensor = parameterCentralizedSensor;
            //this._stored_CentralizedStorer = parameterCentralizedStorer;
            #endregion

            #region MEMORIZE clientOrServer instance

            Dictionary<string, object> storedClientOrServerInstance = parameterInputs.Parameters["parameterClientOrServerInstance"] as Dictionary<string, object>;

            #endregion

            #region MEMORIZE app settings

            IConfiguration storedAppSettings = (IConfiguration)storedClientOrServerInstance["storedAppSettings"];

            #endregion

            #region MEMORIZE CRUD verb

            string storedCRUDVerb = parameterInputs.Parameters["parameterCRUDVerb"];

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") ? storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") : false;

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "PREPARING caching request");
            storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_X_X_Framework_Store_CacheDataToPersistentStorage_1_0");

            //OPTIONAL
            storedDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters["parameterOPTIONALIgnoreDeveloperConsoleLog"]);

            #endregion

            #region MEMORIZE request details

            string storedDirectorOrExperienceName = parameterInputs.Parameters["parameterDirectorOrExperienceName"];

            #endregion

            #region MEMORIZE page name

            string storedPageName = parameterInputs.Parameters["parameterPageName"];

            #endregion

            #region MEMORIZE storage details

            string storedStorageDescription = parameterInputs.Parameters["parameterStorageDescription"];
            dynamic storedStorageValue = parameterInputs.Parameters["parameterStorageValue"];
            string storedStorageKey = "StorageKey_" + storedDirectorOrExperienceName + "-" + storedCRUDVerb;
            string storedUniqueStorageKey = parameterInputs.Parameters["parameterUniqueStorageKey"];

            if (!string.IsNullOrEmpty(storedUniqueStorageKey))
                storedStorageKey += "-" + storedUniqueStorageKey;

            #endregion

            #region MEMORIZE storyline details

            dynamic storedStorylineDetails = parameterInputs.Parameters["parameterStorylineDetails"];
            //storedStorylineDetails_Parameters = parameterStorylineDetails_Parameters;

            #endregion

            #region MEMORIZE storyline details outputs

            string storedOutPut_ObservationBusinessTemplateItem = "{}";
            string storedOutPut_ObservationServiceTemplateItem = "{}";
            string storedOutPut_ObservationSecurityTemplateItem = "{}";
            string storedOutPut_ObservationDataTemplateItem = @"{ 'dataResult': '{dataResult}' }";

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE local storage process

            #region IDEAL CASE - USE npm node-localstorage

            //DETERMINE if we have something to store.
            if (storedStorageValue)
            {
                #region 1. CREATE new storage item

                storedParameterInputs = new SingleParmPoco_12_2_1_0();

                storedParameterInputs.Parameters.Add("parameterActionName", storedClientOrServerInstance["storedActionName"]);
                storedParameterInputs.Parameters.Add("parameterClientOrServerInstance", storedClientOrServerInstance);
                storedParameterInputs.Parameters.Add("parameterAppSettings", storedAppSettings);

                storedParameterInputs.Parameters.Add("parameter3WordDescription", "CREATING storage output item");
                storedParameterInputs.Parameters.Add("parameterObservationFileName", "Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0");
                storedParameterInputs.Parameters.Add("parameterObservationMethodName", "Step_X_X_Framework_Store_CacheDataToPersistentStorage_1_0");

                storedParameterInputs.Parameters.Add("parameterObservationPresentationTemplate", storedOutPut_ObservationPresentationTemplateItem);
                storedParameterInputs.Parameters.Add("parameterObservationBusinessTemplate", storedOutPut_ObservationBusinessTemplateItem);
                storedParameterInputs.Parameters.Add("parameterObservationServiceTemplate", storedOutPut_ObservationServiceTemplateItem);
                storedParameterInputs.Parameters.Add("parameterObservationSecurityTemplate", storedOutPut_ObservationSecurityTemplateItem);
                storedParameterInputs.Parameters.Add("parameterObservationDataTemplate", storedOutPut_ObservationDataTemplateItem);

                storedOutPut_ObservationItem = await Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Framework_Output_JsonObservationNode_1_0(storedParameterInputs);

                //DETERMINE if we are storing a string value.
                if (storedStorageValue is string)
                {
                    //PREPARING to store a string value.
                    storedOutPut_ObservationItem = storedOutPut_ObservationItem.Replace("{dataResult}", Regex.Unescape(storedStorageValue.trim()));
                }
                else
                {
                    //PREPARING to store an object value.
                    storedOutPut_ObservationItem = storedOutPut_ObservationItem.Replace("{dataResult}", Regex.Unescape(storedStorageValue.ToString(Formatting.None)));
                    storedStorageDictionary[storedStorageKey] = storedOutPut_ObservationItem.ToString();
                }

                #endregion

                #region 2. REMOVE previous stored item

                storedFilteredStorageKey = storedStorageKey.ToString().Replace("-Create", "");
                storedFilteredStorageKey = storedFilteredStorageKey.ToString().Replace("-Read", "");
                storedFilteredStorageKey = storedFilteredStorageKey.ToString().Replace("-Update", "");
                storedFilteredStorageKey = storedFilteredStorageKey.ToString().Replace("-Delete", "");

                foreach (var storedObservation in storedStorylineDetails.outputs[1].baseDIObservations)
                {

                }

                foreach (var storedObservation in storedStorylineDetails.outputs[1].baseDIObservations)
                {

                }
                //storedStorylineDetails.outputs[1].baseDIObservations.forEach(element => {
                //    delete element[storedFilteredStorageKey]
                //                });

                //storedStorylineDetails.outputs[1].baseDIObservations.forEach(element => {
                //    delete element[storedStorageKey]
                //                });

                #endregion

                #region 3. CREATE storage request

                storedStorylineDetails.outputs[1].baseDIObservations.push(storedStorageDictionary);

                #endregion

                #region 4. EXECUTE storage request

                if (storedDeveloperMode)
                {
                    storedClientOrServerInstance["processStepNumber"] = (int)storedClientOrServerInstance["processStepNumber"] + 1;

                    storedDeveloperLoggingInputs.Parameters.Add("parameterMessageType", "Logging"); //Values = Logging or Mistake
                    storedDeveloperLoggingInputs.Parameters.Add("parameterStepNumberReplace", storedClientOrServerInstance["processStepNumber"]);

                    Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                }

                stored_CentralizedStorer.ExtraData.KeyValuePairs.Add("parametersInputs", parameterInputs);
                stored_CentralizedStorer.ExtraData.KeyValuePairs.Add("storedDeveloperLoggingInputs", storedDeveloperLoggingInputs);

                storedStorylineDetails = await stored_CentralizedStorer?.Action_1_Begin_Process();
                //storedStorylineDetails.outputs[1].baseDIObservations = (storedStorylineDetails && storedStorylineDetails.ouputs) ? storedStorylineDetails?.outputs[1]?.baseDIObservations?.filter((value: { }) => Object.keys(value).length !== 0) : storedStorylineDetails.outputs[1].baseDIObservations;

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

            return storedStorylineDetails;

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

                Dictionary<string, object> storedClientOrServerInstance = parameterInputs.Parameters["parameterClientOrServerInstance"] as Dictionary<string, object>;

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
                storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.ts");
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
                            storedMessage += "***parameterClientOrServerInstance*** must contain a key of ***storedAppSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.Add(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessCheckPointHit = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterStorageAction"))
                    {
                        storedMessage += "***parameterStorageAction*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterStorageKey"))
                    {
                        storedMessage += "***parameterStorageKey*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterStorageValue"))
                    {
                        storedMessage += "***parameterStorageValue*** cannot be blank or empty.\n";
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

                            Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
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

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
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

            #region DEFINE storyline details outputs

            dynamic storedOutPut_Observation = "";
            dynamic storedOutPut_ObservationFiltered = null;
            string storedOutPut_ObservationKey = "";

            #endregion

            #region MEMORIZE clientOrServer instance

            Dictionary<string, object> storedClientOrServerInstance = parameterInputs.Parameters["parameterClientOrServerInstance"] as Dictionary<string, object>;

            #endregion

            #region MEMORIZE app settings

            IConfiguration storedAppSettings = (IConfiguration)storedClientOrServerInstance["storedAppSettings"];

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") ? storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") : false;

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "RESOLVING request handler");
            storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0.Page_1_10_End_Process_12_2_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Action");

            #endregion

            #region MEMORIZE storage details

            string storedStorageAction = parameterInputs.Parameters["parameterStorageAction"];
            bool storedStorageCRUDActionRead = false;
            string storedStorageKey = parameterInputs.Parameters["parameterStorageKey"];
            dynamic storedStorageValue = parameterInputs.Parameters["parameterStorageValue"];

            #endregion

            #region MEMORIZE storyline details

            dynamic storedStorylineDetails = parameterInputs.Parameters["parameterStorylineDetails"];
            //storedStorylineDetails_Parameters = parameterStorylineDetails_Parameters;

            #endregion

            #region MEMORIZE storyline details outputs

            string storedOutPut_ObservationBusinessTemplateItem = "{}";
            string storedOutPut_ObservationServiceTemplateItem = "{}";
            string storedOutPut_ObservationSecurityTemplateItem = "{}";
            string storedOutPut_ObservationDataTemplateItem = @"{ 'dataResult': '{dataResult}' }";

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
                        storedOutPut_ObservationKey = ((JObject)storedStorageValue).Properties().Select(p => p.Name).FirstOrDefault();  //(Object.keys(storedStorageValue)[0]);
                        //EXAMPLE OUTPUT: storedOutPut_ObservationKey = "StorageKey_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0-Create-BaseDI_DataConverter_Mode"

                        if (storedOutPut_ObservationKey.ToString().ToUpper().Contains("-READ"))
                        {
                            storedStorageCRUDActionRead = true;
                        }

                        storedOutPut_ObservationKey = storedOutPut_ObservationKey.ToString().Replace("-Create", "");
                        storedOutPut_ObservationKey = storedOutPut_ObservationKey.ToString().Replace("-Read", "");
                        storedOutPut_ObservationKey = storedOutPut_ObservationKey.ToString().Replace("-Update", "");
                        storedOutPut_ObservationKey = storedOutPut_ObservationKey.ToString().Replace("-Delete", "");
                        //EXAMPLE OUTPUT: storedOutPut_ObservationKey = "StorageKey_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0-BaseDI_DataConverter_Mode"

                        if (!storedStorageCRUDActionRead)
                        {
                            storedOutPut_Observation = JObject.Parse(storedStorageValue[((JObject)storedStorageValue).Properties().Select(p => p.Name).FirstOrDefault()]);

                            storedOutPut_ObservationFiltered[storedOutPut_ObservationKey] = storedOutPut_Observation?.baseDIObservations[0];
                        }

                    }
                    catch (Exception mistake)
                    {
                        #region EDGE CASE - USE developer logger

                        if (storedDeveloperMode)
                        {
                            storedClientOrServerInstance["processStepNumber"] = (int)storedClientOrServerInstance["processStepNumber"] + 1;

                            storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "FAILED CRUD setup attempt");
                            storedDeveloperLoggingInputs.Parameters.Add("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                            storedDeveloperLoggingInputs.Parameters.Add("parameterStepNumberReplace", storedClientOrServerInstance["processStepNumber"]);

                            Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                        }

                        #endregion

                        #region EDGE CASE - USE exception handler

                        throw mistake;

                        #endregion
                    }

                    #endregion

                    if (storedAppSettings.GetValue<string>("AppSettings:APP_ENV").ToUpper() == "SERVER")
                    {
                        #region IDEAL CASE - USE server storage

                        if (_3rdParty_DotNetLocalStorage_LocalStorage != null)
                        {
                            switch (storedStorageAction.ToUpper())
                            {
                                case "CREATE":
                                case "UPDATE":
                                    _3rdParty_DotNetLocalStorage_LocalStorage.Store(storedStorageKey, storedOutPut_ObservationFiltered);
                                    break;
                                case "DELETE":
                                    _3rdParty_DotNetLocalStorage_LocalStorage.Remove(storedStorageKey);
                                    break;
                                case "READ":
                                    storedDataResponse = _3rdParty_DotNetLocalStorage_LocalStorage.Get(storedStorageKey);
                                    break;

                            }
                        }

                        #endregion
                    }
                    else
                    {
                        if (storedAppSettings.GetValue<string>("AppSettings:APP_ENV").ToUpper() == "CLIENT")
                        {
                            #region EDGE CASE - USE client storage

                            #endregion
                        }
                    }

                    return await Task.FromResult<bool>(true).ConfigureAwait(true);
                };

                await ExecuteStorageRequest();
            }
            catch (Exception mistake)
            {
                #region EDGE CASE - USE developer logger

                if (storedDeveloperMode)
                {
                    storedClientOrServerInstance["processStepNumber"] = (int)storedClientOrServerInstance["processStepNumber"] + 1;

                    storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "FAILED CRUD setup attempt");
                    storedDeveloperLoggingInputs.Parameters.Add("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                    storedDeveloperLoggingInputs.Parameters.Add("parameterStepNumberReplace", storedClientOrServerInstance["processStepNumber"]);

                    Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                }

                #endregion

                #region EDGE CASE - USE exception handler

                throw mistake;

                #endregion
            }

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN storyline details

            #region IDEAL CASE - USE baseDI dataset

            return storedDataResponse;

            #endregion

            #endregion

            #endregion
        }

        #endregion
    }
}
