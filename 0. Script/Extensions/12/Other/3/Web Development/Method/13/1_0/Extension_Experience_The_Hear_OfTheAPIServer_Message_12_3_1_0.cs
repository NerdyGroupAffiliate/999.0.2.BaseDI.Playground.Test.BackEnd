﻿#region Imports

#region BaseDI

using BaseDI.Professional.Script.Programming.Abstract_1;
using BaseDI.Professional.Script.Programming.Extensions_1;
using BaseDI.Professional.Script.Programming.Extensions_3;
using BaseDI.Professional.Script.Programming.Poco_1;
using BaseDI.Professional.Script.Risk_Management.Extensions_0;

#endregion

#region .Net Core

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Web;

#endregion 

#region 3rd Party Core

using CurlThin;

using Newtonsoft.Json.Linq;

#endregion

#endregion

namespace BaseDI.Professional.Script.Web_Development.Extensions_13
{
    public class Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0
    {
        //SETTINGS
        private static IConfiguration _storedAppSettings = null;

        //CLIENT/SERVER
        private static Dictionary<string, object> _storedClientOrServerInstance;

        //EXCEPTIONS
        private static Exception _storedExceptionDetails = null;

        //MISC
        private static ExtraData_12_2_1_0 _storedExtraData = null;


        #region SERVER SIDE CODE

        #region SERVER API REQUEST

        public static Object Step_X_X_Custom_Output_ServerResponseToCaller_1_0(object server, string url, string verbName, Object options, Func<Object, Object> callback)
        {
            if (server == null) return null;
            if (verbName == null || verbName == "") return null;

            switch (verbName.ToUpper())
            {
                case "DELETE":
                    return Step_X_X_Custom_Output_ServerResponseToCaller_1_1_DELETE(server, url, options, callback);
                case "GET":
                    return Step_X_X_Custom_Output_ServerResponseToCaller_1_1_GET(server, url, options, callback);
                case "HEAD":
                    return Step_X_X_Custom_Output_ServerResponseToCaller_1_1_HEAD(server, url, options, callback);
                case "POST":
                    return Step_X_X_Custom_Output_ServerResponseToCaller_1_1_POST(server, url, options, callback);
                case "PUT":
                    return Step_X_X_Custom_Output_ServerResponseToCaller_1_1_PUT(server, url, options, callback);
                default:
                    return null;
            }
        }

        private static Func<Object> Step_X_X_Custom_Output_ServerResponseToCaller_1_1_DELETE(object server, string url, Object options, Func<Object, Object> callback)
        {
            return null;
        }

        private static Func<Object> Step_X_X_Custom_Output_ServerResponseToCaller_1_1_GET(object server, string url, Object options, Func<Object, Object> callback)
        {
            return null;
        }

        private static Func<Object> Step_X_X_Custom_Output_ServerResponseToCaller_1_1_HEAD(object server, string url, Object options, Func<Object, Object> callback)
        {
            return null;
        }

        private static Func<Object> Step_X_X_Custom_Output_ServerResponseToCaller_1_1_POST(object server, string url, Object options, Func<Object, Object> callback)
        {
            return null;
        }

        private static Func<Object> Step_X_X_Custom_Output_ServerResponseToCaller_1_1_PUT(object server, string url, Object options, Func<Object, Object> callback)
        {
            return null;
        }

        #endregion

        #region SERVER ASSET MANAGEMENT

        public static async void Step_X_X_Custom_Store_LocalFilesToServer_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
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

                    if (!parameterInputs.Parameters.ContainsKey("parameterStorylineDetails"))
                    {
                        storedMessage += "***parameterData*** cannot be blank or empty.\n";
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
            dynamic storedJSONParent = null;

            bool storedDataResponseUserData = false;

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
            storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONVERTING data into filtered version");
            storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", _storedClientOrServerInstance["actionName"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", _storedClientOrServerInstance["appSettings"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_X_X_Custom_Store_LocalFilesToServer_1_0");
            //storedDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALMiddleOfProcess", true);

            #endregion

            #region MEMORIZE file metadata

            JArray storedSetupItemEnvironmentServerMetaDataPaths = null;

            #endregion

            #region MEMORIZE filter metadata

            JObject storedData = parameterInputs.Parameters["parameterData"];

            string storedKeyValuePairKey = parameterInputs.Parameters["parameterKeyValuePairKey"];
            string storedKeyValuePairValue = parameterInputs.Parameters["parameterKeyValuePairValue"];

            bool storedReturnValueAsArray = parameterInputs.Parameters["parameterReturnValueAsArray"];

            #endregion

            #region MEMORIZE storyline details

            dynamic storedStorylineDetails = parameterInputs.Parameters["parameterStorylineDetails"];
            //storedStorylineDetails_Parameters = parameterStorylineDetails_Parameters;

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE conversion process

            //CONVERT dataset to a filtered down version
            Func<Task<List<JToken>>> ExecuteConversionProcess = async () => {
                try
                {
                    #region IDEAL CASE - USE user data

                    storedParameterInputs = new SingleParmPoco_12_2_1_0();

                    storedParameterInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
                    storedParameterInputs.Parameters.Add("parameterAppSettings", _storedAppSettings);
                    storedParameterInputs.Parameters.Add("parameterData", storedStorylineDetails);

                    storedParameterInputs.Parameters.Add("parameterKeyValuePairKey", "searchkey");
                    storedParameterInputs.Parameters.Add("parameterKeyValuePairValue", "SetupItem_SetBuyer_ProductLaunching_Software_SenseEnvironment");

                    storedParameterInputs.Parameters.Add("parameterReturnValueAsArray", false);

                    storedDataResponse = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode_2_0(storedParameterInputs).Result;

                    storedDataResponseUserData = true;

                    #endregion
                }
                catch
                {
                    try
                    {
                        #region EDGE CASE - USE default data

                        storedParameterInputs = new SingleParmPoco_12_2_1_0();

                        storedParameterInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
                        storedParameterInputs.Parameters.Add("parameterAppSettings", _storedAppSettings);
                        storedParameterInputs.Parameters.Add("parameterData", storedStorylineDetails);

                        storedParameterInputs.Parameters.Add("parameterKeyValuePairKey", "searchkey");
                        storedParameterInputs.Parameters.Add("parameterKeyValuePairValue", "Default_SetupItem_SetBuyer_ProductLaunching_Software_SenseEnvironment");

                        storedParameterInputs.Parameters.Add("parameterReturnValueAsArray", false);

                        storedDataResponse = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode_2_0(storedParameterInputs).Result;

                        #endregion
                    }
                    catch (Exception mistake)
                    {
                        #region EDGE CASE - USE developer logger

                        if (storedDeveloperMode)
                        {
                            _storedClientOrServerInstance["processStepNumber"] = (int)_storedClientOrServerInstance["processStepNumber"] + 1;

                            storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "FAILED converting data into filtered version");
                            storedDeveloperLoggingInputs.Parameters.Add("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                            storedDeveloperLoggingInputs.Parameters.Add("parameterStepNumberReplace", _storedClientOrServerInstance["processStepNumber"]);

                            await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Custom_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                        }

                        #endregion

                        #region EDGE CASE - USE exception handler

                        throw mistake;

                        #endregion
                    }
                }

                return storedDataResponse;
            };

            storedDataResponse = await ExecuteConversionProcess();

            if(storedDataResponseUserData)
            {
                storedJSONParent = storedDataResponse.Count > 0 ? storedDataResponse[0].Parent.Parent : null;
            }
            else
            {
                storedJSONParent = storedDataResponse.Count > 0 ? storedDataResponse[1].Parent.Parent : storedDataResponse[0].Parent.Parent;
            }

            #endregion

            #region EXECUTE transport process

            //TRANSPORT local files from one place to another
            Func<dynamic, JArray, Task<JToken>> ExecuteTransportProcess = async (dynamic parameterJSONParent, JArray parameterSetupItemEnvironmentServerMetaDataPaths) => {
                parameterSetupItemEnvironmentServerMetaDataPaths = (JArray)parameterJSONParent.SelectToken("value.SetupItemEnvironmentServer.SetupItemEnvironmentServerMetaDataPaths");

                foreach (var storedSetupItemEnvironmentServerMetaDataPaths in parameterSetupItemEnvironmentServerMetaDataPaths)
                {
                    dynamic obj = JObject.Parse(await File.ReadAllTextAsync(storedSetupItemEnvironmentServerMetaDataPaths.SelectToken("MetaDataLocalPath")?.ToString()));

                    var contentItems = obj.baseDI_NerdyGroupAffiliates_DynamicWebsite_MainProfile.value.baseDIInstructions.presentation[0].values_2[0].values_2_2[0].values_2_2_2[0]._2_2_2_3_clientInformationHTMLContentDetails.value[0];
                    var stylingItemFiles = obj.baseDI_NerdyGroupAffiliates_DynamicWebsite_MainProfile.value.baseDIInstructions.presentation[0].values_2[0].values_2_2[0].values_2_2_2[0]._2_2_2_4_clientInformationHTMLContentStylingDetails.value[0]._2_2_2_4_1_clientInformationHTMLContentStylingItem.value.HTMLContentStylingItemFiles[0].StyleFiles;
                    var currentDir = Environment.CurrentDirectory;

                    foreach (var file in stylingItemFiles)
                    {
                        foreach (var property in file.StyleFileUseProperties)
                        {
                            foreach (var prop in property.properties)
                            {
                                foreach (string element in prop.properyValues)
                                {
                                    if (element.Contains("url"))
                                    {
                                        var url = Regex.Replace(element, @"(^.*\(|\).*$)", "");
                                        var filepath = Path.GetFullPath(Path.Combine(currentDir, HttpUtility.UrlDecode(url)));

                                        if (File.Exists(filepath))
                                        {
                                            var fileDirName = Path.GetDirectoryName(filepath);
                                            var shortDirName = fileDirName.Replace("C:\\Programming\\999.0.3.BaseDI.Professional.QuickStart.Templates\\", "");
                                            var dest = $"wwwroot/Client/Images/{shortDirName}";

                                            if (!Directory.Exists(dest))
                                            {
                                                Directory.CreateDirectory(dest);
                                            }

                                            File.Copy(filepath, $"{dest}/{Path.GetFileName(filepath)}", true);
                                        }
                                        else
                                        {
                                            Console.WriteLine($"File Not Found:  {filepath}");
                                        }
                                    }

                                }
                            }
                        }

                        foreach (var x in contentItems)
                        {
                            var key = ((JProperty)(x)).Name;
                            var jvalue = ((JProperty)(x)).Value;

                            var val = contentItems[key];
                            var HTMLContentItems = val.value.HTMLContentItems;

                            foreach (var item in HTMLContentItems)
                            {
                                var attributes = item.Attributes;

                                foreach (var att in attributes)
                                {
                                    if (att.src != null)
                                    {
                                        try
                                        {
                                            var src = Regex.Replace(HttpUtility.UrlDecode(att.src.Value), @"(^.*\(|\).*$)", "");

                                            var filepath = Path.GetFullPath(Path.Combine(currentDir, src));

                                            if (File.Exists(filepath))
                                            {
                                                var fileDirName = Path.GetDirectoryName(filepath);
                                                var shortDirName = fileDirName.Replace("C:\\Programming\\999.0.3.BaseDI.Professional.QuickStart.Templates\\", "");
                                                var dest = $"wwwroot/Client/Images/{shortDirName}";

                                                if (!Directory.Exists(dest))
                                                {
                                                    Directory.CreateDirectory(dest);
                                                }

                                                File.Copy(filepath, $"{dest}/{Path.GetFileName(filepath)}", true);
                                            }
                                            else
                                            {
                                                Console.WriteLine($"File Not Found:  {filepath}");
                                            }
                                        }
                                        catch (Exception e)
                                        {
                                            Console.WriteLine(e);
                                            // throw;
                                        }
                                    }
                                }
                            }

                        }
                    }
                }

                return null;
            };

            await ExecuteTransportProcess(storedJSONParent, storedSetupItemEnvironmentServerMetaDataPaths);

            #endregion

            #endregion

            #region 3. OUTPUT

            #endregion
        }

        #endregion

        #region SERVER CONFIGURATION

        public static async Task<Dictionary<string, JToken>> Step_X_X_Custom_Store_ServerDefaultSettingsToMemory_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
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

                IConfiguration storedAppSettings = (IConfiguration)storedClientOrServerInstance["appSettings"];

                #endregion

                #region MEMORIZE developer mode

                bool storedDeveloperMode = storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") ? storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") : false;

                SingleParmPoco_12_2_1_0 storedDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

                //REQUIRED
                storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", storedClientOrServerInstance["actionName"]);
                storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", storedClientOrServerInstance["appSettings"]);
                storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", storedClientOrServerInstance);
                storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.ts");
                storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_X_X_Custom_Control_LocalDataToServerMemory_1_0.ValidateInputs()");

                #endregion

                #endregion

                #region 2. PROCESS

                #region EXECUTE validation process

                #region IDEAL CASE - USE valid information

                if (parameterInputs != null | parameterInputs.Parameters != null)
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
                            storedMessage += "***parameterClientOrServerInstance*** must contain a key of ***appSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.Add(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessCheckPointHit = true;
                        }
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

                            Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Custom_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
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

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Custom_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
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

                return await Task.FromResult<bool>(true).ConfigureAwait(true);

                #endregion

                #endregion

                #endregion
            };

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            #endregion

            #region DEFINE parameter inputs

            SingleParmPoco_12_2_1_0 storedParameterInputs = null;

            #endregion

            #region DEFINE process outputs

            Dictionary<string, JToken> storedOutput = new Dictionary<string, JToken>();

            #endregion

            #region MEMORIZE centralized processes

            aClass_Programming_ScriptAction_12_2_1_0<object> stored_CentralizedStorer = parameterInputs.Parameters["parameterMasterStorer"];
            //this._stored_CentralizedSensor = parameterCentralizedSensor;
            //this._stored_CentralizedStorer = parameterCentralizedStorer;

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
            storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONFIGURING web server");
            storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", storedClientOrServerInstance["actionName"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", storedClientOrServerInstance["appSettings"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_X_X_Custom_Store_ServerDefaultSettingsToMemory_1_0");
            storedDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALMiddleOfProcess", true);

            #endregion

            #region MEMORIZE request details

            string storedRequestName = parameterInputs.Parameters["parameterDirectorOrExperienceName"];
            //let storedRequestNameParameters: string = this.ExtraData.KeyValuePairs["RequestToProcessParameters");

            #endregion

            #region MEMORIZE storyline details

            dynamic storedStorylineDetails = parameterInputs.Parameters["parameterStorylineDetails"];
            //storedStorylineDetails_Parameters = parameterStorylineDetails_Parameters;

            #endregion

            #region MEMORIZE server details

            ControllerBase storedServerInstance = null;

            dynamic storedServerDetails = null; //Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode_1_0(storedStorylineDetails, "searchkey", "SetupItem_SetBuyer_ProductLaunching_Software_TransportEnvironment", false).SingleOrDefault();

            //DOMAIN url
            string storedServerDomainName = (string)storedServerDetails.Parent.SelectToken("value.SetupItemEnvironmentDomainName");

            //PORT number
            int storedServerPort = (int)storedServerDetails.Parent.SelectToken("value.SetupItemEnvironmentPort");

            //STATIC paths

            //DOCUMENTS
            string storedServerDocumentPath = (string)storedServerDetails.Parent.SelectToken("value.SetupItemEnvironmentClient.SetupItemDataPath");

            //FONTS
            string storedServerFontsPath = (string)storedServerDetails.Parent.SelectToken("value.SetupItemEnvironmentClient.SetupItemFontPath");
            string storedServerImagesPath = (string)storedServerDetails.Parent.SelectToken("value.SetupItemEnvironmentClient.SetupItemImagePath");

            //SCRIPTS
            string storedServerScriptsPath = (string)storedServerDetails.Parent.SelectToken("value.SetupItemEnvironmentClient.SetupItemScriptPath");
            string storedServerScriptName = (string)storedServerDetails.Parent.SelectToken("value.SetupItemEnvironmentClient.SetupItemScriptName");

            //ROUTES 
            JToken storedServerRoutesGET = storedServerDetails.Parent.SelectToken("value.SetupItemEnvironmentServer.SetupItemTransportItemRoutesGET"); // serverEnvironment?.value?.SetupItemEnvironmentServer?.SetupItemTransportItemRoutesGET;
            JToken storedServerRoutesPOST = storedServerDetails.Parent.SelectToken("value.SetupItemEnvironmentServer.SetupItemTransportItemRoutesPOST");
            JToken storedServerRoutesPUT = storedServerDetails.Parent.SelectToken("value.SetupItemEnvironmentServer.SetupItemTransportItemRoutesPUT");
            JToken storedServerRoutesDELETE = storedServerDetails.Parent.SelectToken("value.SetupItemEnvironmentServer.SetupItemTransportItemRoutesDELETE");

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE configuration process

            #region EDGE CASE - USE developer logger

            if (storedDeveloperMode)
            {
                storedClientOrServerInstance["processStepNumber"] = (int)storedClientOrServerInstance["processStepNumber"] + 1;

                storedDeveloperLoggingInputs.Parameters.Add("parameterMessageType", "Logging"); //Values = Logging or Mistake
                storedDeveloperLoggingInputs.Parameters.Add("parameterStepNumberReplace", storedClientOrServerInstance["processStepNumber"]);

                await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Custom_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);

                storedDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALMiddleOfProcess", false);
            }

            #endregion

            if (stored_CentralizedStorer != null)
            {
                try
                {
                    #region EDGE CASE - USE developer logger

                    if (storedDeveloperMode)
                    {
                        storedClientOrServerInstance["processStepNumber"] = (int)storedClientOrServerInstance["processStepNumber"] + 1;

                        storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "ATTEMPTING to store " + storedServerScriptName);
                        storedDeveloperLoggingInputs.Parameters.Add("parameterMessageType", "Logging"); //Values = Logging or Mistake
                        storedDeveloperLoggingInputs.Parameters.Add("parameterStepNumberReplace", storedClientOrServerInstance["processStepNumber"]);

                        await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Custom_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);

                        storedClientOrServerInstance["processStepNumber"] = (int)storedClientOrServerInstance["processStepNumber"] + 1;
                        
                        storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "ATTEMPTING to store " + storedAppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER"));
                        storedDeveloperLoggingInputs.Parameters.Add("parameterMessageType", "Logging"); //Values = Logging or Mistake
                        storedDeveloperLoggingInputs.Parameters.Add("parameterStepNumberReplace", storedClientOrServerInstance["processStepNumber"]);

                        await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Custom_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                    }

                    #endregion

                    #region EDGE CASE - USE local storage
                    storedParameterInputs = new SingleParmPoco_12_2_1_0();

                    //STATIC inputs               
                    storedParameterInputs.Parameters.Add("parameterClientOrServerInstance", storedClientOrServerInstance);
                    storedParameterInputs.Parameters.Add("parameterCRUDVerb", "Create");

                    storedParameterInputs.Parameters.Add("parameterDirectorOrExperienceName", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0");

                    storedParameterInputs.Parameters.Add("parameterMasterStorer", stored_CentralizedStorer);

                    storedParameterInputs.Parameters.Add("parameterPageName", "Step_X_X_Custom_Store_ServerDefaultSettingsToMemory_1_0");

                    storedParameterInputs.Parameters.Add("parameterStorylineDetails", storedStorylineDetails);

                    storedParameterInputs.Parameters.Add("parameterOPTIONALIgnoreDeveloperConsoleLog", true);

                    //DYNAMIC inputs
                    storedParameterInputs.Parameters.Add("parameterStorageDescription", "STORING client side BaseDI script SOURCE PATH");
                    storedParameterInputs.Parameters.Add("parameterStorageValue", storedServerScriptName);
                    storedParameterInputs.Parameters.Add("parameterUniqueStorageKey", "BaseDI_PresentationScript_SrcLocation");

                    //STORE it
                    await Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.Step_X_X_Custom_Control_LocalDataToServerMemory_1_0(storedParameterInputs);

                    //DYNAMIC inputs

                    storedParameterInputs.Parameters.Add("parameterClientOrServerInstance", storedClientOrServerInstance);

                    storedParameterInputs.Parameters.Remove("parameterStorageDescription");
                    storedParameterInputs.Parameters.Add("parameterStorageDescription", "STORING server side data CONVERSION REPOSITORY mode");

                    storedParameterInputs.Parameters.Remove("parameterStorageValue");
                    storedParameterInputs.Parameters.Add("parameterStorageValue", storedAppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER"));

                    storedParameterInputs.Parameters.Remove("parameterUniqueStorageKey");
                    storedParameterInputs.Parameters.Add("parameterUniqueStorageKey", "BaseDI_DataConverter_Mode");

                    storedParameterInputs.Parameters.Add("parameterOPTIONALIgnoreDeveloperConsoleLog", false);

                    //STORE it
                    await Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.Step_X_X_Custom_Control_LocalDataToServerMemory_1_0(storedParameterInputs);

                    #endregion
                }
                catch (Exception mistake)
                {
                    #region EDGE CASE - USE developer logger
                    if (storedDeveloperMode)
                    {
                        storedClientOrServerInstance["processStepNumber"] = (int)storedClientOrServerInstance["processStepNumber"] + 1;

                        storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "FAILED configurating server");
                        storedDeveloperLoggingInputs.Parameters.Add("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                        storedDeveloperLoggingInputs.Parameters.Add("parameterStepNumberReplace", storedClientOrServerInstance["processStepNumber"]);

                        await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Custom_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                    }
                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw mistake;

                    #endregion
                }
            }

            #region IDEAL CASE - USE dotnet server


            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN server details

            #region IDEAL CASE - USE server details

            storedOutput.Add("GET", storedServerRoutesGET);
            storedOutput.Add("POST", storedServerRoutesPOST);
            storedOutput.Add("PUT", storedServerRoutesPUT);
            storedOutput.Add("DELETE", storedServerRoutesDELETE);

            return storedOutput;

            #endregion

            #endregion

            #endregion
        }

        #endregion

        #endregion
    }
}
