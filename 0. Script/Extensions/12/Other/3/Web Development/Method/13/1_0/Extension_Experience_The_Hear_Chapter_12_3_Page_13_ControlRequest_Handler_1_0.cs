#region Imports

#region BaseDI

using BaseDI.Professional.Script.Programming.Abstract_1;
using BaseDI.Professional.Script.Programming.Extensions_0;
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
using System.Runtime.InteropServices;
using System.Text;
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
    public class Extension_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0
    {
        //SETTINGS
        private static IConfiguration _storedProcessRequestSettings = null;

        //CLIENT/SERVER
        private static Dictionary<string, object> _storedProcessRequestTracker;

        //EXCEPTIONS
        private static Exception _storedProcessRequestMistake = null;

        //MISC
        private static ExtraData_12_2_1_0 _storedProcessRequestExtraData = null;

        #region API MANAGEMENT

        public static async Task<Object> Step_X_X_Framework_Transport_ApiRequestToServer_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
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

                bool storedProcessRequestDeveloperMode = storedProcessRequestSettings.GetValue<bool>("AppSetting:APP_SETTING_DEVELOPER_MODE") ? storedProcessRequestSettings.GetValue<bool>("AppSetting:APP_SETTING_DEVELOPER_MODE") : false;

                SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

                //REQUIRED
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONVERTING json to html container");
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Extension_Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_1_0_Framework_Convert_HtmlContainerJsonToHtml_1_0.ValidateInputs()");

                #endregion

                #endregion

                #region 2. PROCESS

                #region EXECUTE validation process

                #region IDEAL CASE - USE valid information

                if (parameterInputs != null || parameterInputs.Parameters != null) {

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestSettings")) {
                        storedOutputResponseMessage += "***parameterProcessRequestSettings*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterApiRequestCallBack")) {
                        storedOutputResponseMessage += "***parameterApiRequestCallBack*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterApiRequestEndPointAddress")) {
                        storedOutputResponseMessage += "***parameterApiRequestEndPointAddress*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterApiRequestData")) {
                        storedOutputResponseMessage += "***parameterApiRequestData*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterApiRequestVerb")) {
                        storedOutputResponseMessage += "***parameterApiRequestVerb*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (storedProcessRequestMistakeMade) {
                        #region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode) {
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

                    if (storedProcessRequestDeveloperMode) {
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

            #region DEFINE api inputs

            byte[] storedApiDataMemoryBuffer = null;
            dynamic storedApiDataMemoryLength = null;
            Stream storedApiDataMemoryStream = null;
            
            dynamic storedApiInit = null;

            #endregion

            #region DEFINE data response

            dynamic storedOutputResponseData = null;
            bool storedDataResponseFailed = false;

            #endregion

            #region DEFINE parameter inputs

            SingleParmPoco_12_2_1_0 storedInputs;

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
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Extension_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_X_X_Framework_Transport_ApiRequestToServer_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters["parameterOPTIONALIgnoreDeveloperConsoleLog"));

            #endregion

            #region MEMORIZE api inputs

            var storedApiControllerUsingCurl = CurlNative.Init();

            Func<dynamic> storedApiRequestCallBack = parameterInputs.Parameters["parameterApiRequestCallBack"];
            string storedApiRequestEndPointAddress = parameterInputs.Parameters["parameterApiRequestEndPointAddress"];
            dynamic storedApiRequestData = parameterInputs.Parameters["parameterApiRequestData"];
            string storedApiRequestVerb = parameterInputs.Parameters["parameterApiRequestVerb"];

            #endregion


            #endregion

            #region 2. PROCESS

            #region EXECUTE api transport

            if (storedProcessRequestSettings.GetValue<string>("AppSettings:APP_ENV").ToUpper() == "SERVER") {
                #region IDEAL CASE - USE server module

                try
                {
                    Func<dynamic, string, dynamic, string, dynamic, Stream, byte[], dynamic, string, Task<dynamic>> ExecuteTransportRequest = async (dynamic parameterApiRequestCallBack, string parameterApiRequestEndPointAddress, dynamic parameterApiRequestData, string parameterApiRequestVerb, dynamic parameterApiInit, Stream parameterApiDataMemoryStream, byte[] parameterApiDataMemoryBuffer, dynamic parameterApiDataMemoryLength, string parameterPostData) =>
                    {

                    switch (parameterApiRequestVerb.ToUpper()) 
                    {
                            case "DELETE":
                                break;

                            case "GET":
                                parameterApiDataMemoryStream = new MemoryStream();

                                parameterApiInit = CurlNative.Easy.SetOpt(CurlNative.Easy.Init(), CurlThin.Enums.CURLoption.URL, parameterApiRequestEndPointAddress);


                                //CurlNative.Easy.SetOpt(parameterApiInit, CurlThin.Enums.CURLoption.WRITEFUNCTION, (parameterData, parameterSize, parameterNmemb, user) =>
                                //{
                                //    var storedLength = (int)parameterSize * (int)parameterNmemb;
                                //    var buffer = new byte[storedLength];
                                //    Marshal.Copy(parameterData, buffer, 0, storedLength);
                                //    parameterApiDataMemoryStream.Write(buffer, 0, storedLength);
                                //    //return (UIntPtr)storedLength;
                             
                                //});

                                return CurlNative.Easy.Perform(parameterApiInit);

                            case "HEAD":
                                //storedApiControllerUsingCurl.head(parameterApiRequestEndPointAddress, parameterApiRequestData, function (storedError, storedResponse) {
                                //    if (!storedError) {
                                //        parameterApiRequestCallBack(storedResponse);
                                //    }
                                //    else {
                                //        throw Error(storedError.toString());
                                //    }
                                //});

                                break;

                            case "POST":
                                parameterApiDataMemoryStream = new MemoryStream();
                                parameterApiInit = CurlNative.Easy.SetOpt(CurlNative.Easy.Init(), CurlThin.Enums.CURLoption.URL, parameterApiRequestEndPointAddress);

                                //CurlNative.Easy.SetOpt(parameterApiInit, CurlThin.Enums.CURLoption.POSTFIELDSIZE, Encoding.ASCII.GetByteCount(parameterPostData));
                                //CurlNative.Easy.SetOpt(parameterApiInit, CurlThin.Enums.CURLoption.COPYPOSTFIELDS, parameterPostData);
                                //CurlNative.Easy.SetOpt(parameterApiInit, CurlThin.Enums.CURLoption.WRITEFUNCTION, (parameterData, parameterSize, parameterNmemb, user) =>
                                //{
                                //    parameterApiDataMemoryLength = ((int)parameterSize * (int)parameterNmemb);
                                //    parameterApiDataMemoryBuffer = new byte[parameterApiDataMemoryLength];

                                //    Marshal.Copy(parameterData, new byte[parameterApiDataMemoryLength], 0, parameterApiDataMemoryLength);
                                //    parameterApiDataMemoryStream.Write(parameterApiDataMemoryBuffer, 0, parameterApiDataMemoryLength);
                                //    //return (UIntPtr)parameterApiDataMemoryLength;

                                //    return null;
                                //});

                                return CurlNative.Easy.Perform(parameterApiInit);

                            case "PUT":
                                //storedApiControllerUsingCurl.put(parameterApiRequestEndPointAddress, parameterApiRequestData, function (storedError, storedResponse) {
                                //    if (!storedError) {
                                //        parameterApiRequestCallBack(storedResponse);
                                //    }
                                //    else {
                                //        throw Error(storedError.toString());
                                //    }
                                //});

                                break;
                        }

                        return await Task.FromResult<dynamic>(true).ConfigureAwait(true);
                    };

                    //storedOutputResponseData = await ExecuteTransportRequest(storedApiRequestCallBack, storedApiRequestEndPointAddress, storedApiRequestData, storedApiRequestVerb);

                }
                catch (Exception mistake)
                {
                    #region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode) {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "FAILED calling api");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_X_X_Framework_Transport_ApiRequestToServer_1_0.ExecuteTransportRequest");

                        await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw new Exception("API request failed " + mistake.ToString());

                    #endregion
                }
        
                #endregion
            }

            if (storedProcessRequestSettings.GetValue<string>("AppSettings:APP_ENV").ToUpper() == "CLIENT") {
                #region EDGE CASE - USE client module

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

        #region FILE MANAGEMENT

        public static async Task Step_X_X_Framework_Store_FilesToServer_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
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

                #endregion

                #region 2. PROCESS

                #region EXECUTE validation process

                #region IDEAL CASE - USE valid information

                if (parameterInputs.Parameters.Count() > 0)
                {
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

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestDataStorylineDetails"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }


                    if (storedProcessRequestMistakeMade)
                    {
                        #region EDGE CASE - USE exception handler

                        Console.WriteLine("\n***LEAKY PIPE*** PARSING parameter values failed!\n\n" + storedOutputResponseMessage);

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
            dynamic storedJSONParent = null;

            bool storedDataResponseUserData = false;

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
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONVERTING data into filtered version");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", _storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Extension_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_X_X_Framework_Store_FilesToServer_1_0");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseOPTIONALMiddleOfProcess", true);

            #endregion

            #region MEMORIZE file metadata

            JArray storedSetupItemEnvironmentServerMetaDataPaths = null;

            #endregion

            #region MEMORIZE filter metadata

            JObject storedData = parameterInputs.Parameters["parameterProcessRequestDataToFilter"];

            string storedKeyValuePairKey = parameterInputs.Parameters["parameterProcessRequestDataToFilterKey"];
            string storedKeyValuePairValue = parameterInputs.Parameters["parameterProcessRequestDataToFilterValue"];

            bool storedReturnValueAsArray = parameterInputs.Parameters["parameterOutputResponseAsArray"];

            #endregion

            #region MEMORIZE storyline details

            dynamic storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE conversion request

            //CONVERT dataset to a filtered down version
            Func<Task<List<JToken>>> ExecuteConversionRequest = async () => {
                try
                {
                    #region IDEAL CASE - USE user data

                    storedInputs = new SingleParmPoco_12_2_1_0();

                    storedInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
                    storedInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestSettings);
                    storedInputs.Parameters.Add("parameterProcessRequestDataToFilter", storedProcessRequestDataStorylineDetails);

                    storedInputs.Parameters.Add("parameterProcessRequestDataToFilterKey", "searchkey");
                    storedInputs.Parameters.Add("parameterProcessRequestDataToFilterValue", "SetupItem_SetBuyer_ProductLaunching_Software_SenseEnvironment");

                    storedInputs.Parameters.Add("parameterOutputResponseAsArray", false);

                    storedOutputResponseData = Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_2_0(storedInputs).Result;

                    storedDataResponseUserData = true;

                    #endregion
                }
                catch
                {
                    try
                    {
                        #region EDGE CASE - USE default data

                        storedInputs = new SingleParmPoco_12_2_1_0();

                        storedInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
                        storedInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestSettings);
                        storedInputs.Parameters.Add("parameterProcessRequestDataToFilter", storedProcessRequestDataStorylineDetails);

                        storedInputs.Parameters.Add("parameterProcessRequestDataToFilterKey", "searchkey");
                        storedInputs.Parameters.Add("parameterProcessRequestDataToFilterValue", "Default_SetupItem_SetBuyer_ProductLaunching_Software_SenseEnvironment");

                        storedInputs.Parameters.Add("parameterOutputResponseAsArray", false);

                        storedOutputResponseData = Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_2_0(storedInputs).Result;

                        #endregion
                    }
                    catch (Exception mistake)
                    {
                        #region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode)
                        {
                            _storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)_storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "FAILED converting data into filtered version");
                            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestStepNumberReplace", _storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                            await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                        }

                        #endregion

                        #region EDGE CASE - USE exception handler

                        throw mistake;

                        #endregion
                    }
                }

                return storedOutputResponseData;
            };

            storedOutputResponseData = await ExecuteConversionRequest();

            if (storedDataResponseUserData)
            {
                storedJSONParent = storedOutputResponseData.Count > 0 ? storedOutputResponseData[0].Parent.Parent : null;
            }
            else
            {
                storedJSONParent = storedOutputResponseData.Count > 0 ? storedOutputResponseData[1].Parent.Parent : storedOutputResponseData[0].Parent.Parent;
            }

            #endregion

            #region EXECUTE transport request

            //TRANSPORT local files from one place to another
            Func<dynamic, JArray, Task<JToken>> ExecuteTransportRequest = async (dynamic parameterJSONParent, JArray parameterSetupItemEnvironmentServerMetaDataPaths) => {
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

            await ExecuteTransportRequest(storedJSONParent, storedSetupItemEnvironmentServerMetaDataPaths);

            #endregion

            #endregion

            #region 3. OUTPUT

            #endregion
        }

        #endregion

        #region SERVER MANAGEMENT

        public static async Task<Dictionary<string, JToken>> Step_X_X_Framework_Control_ServerSetup_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
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

                Dictionary<string, object> storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"] as Dictionary<string, object>;

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
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Extension_Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_X_X_Framework_Store_CacheDataToPersistentStorage_1_0.ValidateInputs()");

                #endregion

                #endregion

                #region 2. PROCESS

                #region EXECUTE validation process

                #region IDEAL CASE - USE valid information

                if (parameterInputs != null | parameterInputs.Parameters != null)
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
                            storedOutputResponseMessage += "***parameterProcessRequestTracker*** must contain a key of ***storedProcessRequestSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.Add(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterDirectorOrExperienceName"))
                    {
                        storedOutputResponseMessage += "***parameterDirectorOrExperienceName*** cannot be blank or empty.\n";
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

                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

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

                return await Task.FromResult<bool>(true).ConfigureAwait(true);

                #endregion

                #endregion

                #endregion
            };

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            #endregion

            #region DEFINE parameter inputs

            SingleParmPoco_12_2_1_0 storedInputs = null;

            #endregion

            #region DEFINE process outputs

            Dictionary<string, JToken> storedOutput = new Dictionary<string, JToken>();

            #endregion

            #region MEMORIZE centralized processes

            aClass_Programming_ScriptAction_12_2_1_0<object> storedProcessRequestCentralizedStorer = parameterInputs.Parameters["parameterProcessRequestMasterStorer"];
            //this._stored_CentralizedSensor = parameterProcessRequestCentralizedSensor;
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
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONFIGURING web server");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Extension_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_X_X_Framework_Control_ServerSetup_1_0");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseOPTIONALMiddleOfProcess", true);

            #endregion

            #region MEMORIZE request details

            string storedRequestName = parameterInputs.Parameters["parameterDirectorOrExperienceName"];
            //let storedRequestNameParameters: string = this.ExtraData.KeyValuePairs["RequestToProcessParameters");

            #endregion

            #region MEMORIZE storyline details

            dynamic storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

            #endregion

            #region MEMORIZE server details

            ControllerBase storedServerInstance = null;

            dynamic storedServerDetails = null; //Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(storedProcessRequestDataStorylineDetails, "searchkey", "SetupItem_SetBuyer_ProductLaunching_Software_TransportEnvironment", false).SingleOrDefault();

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

            #region EXECUTE controller configuration

            #region EDGE CASE - USE developer logger

            if (storedProcessRequestDeveloperMode)
            {
                storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseMessageType", "Logging"); //Values = Logging or Mistake
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);

                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseOPTIONALMiddleOfProcess", false);
            }

            #endregion

            if (storedProcessRequestCentralizedStorer != null)
            {
                try
                {
                    #region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode)
                    {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "ATTEMPTING to store " + storedServerScriptName);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseMessageType", "Logging"); //Values = Logging or Mistake
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                        await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);

                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "ATTEMPTING to store " + storedProcessRequestSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER"));
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseMessageType", "Logging"); //Values = Logging or Mistake
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                        await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    #endregion

                    #region EDGE CASE - USE local storage
                    storedInputs = new SingleParmPoco_12_2_1_0();

                    //STATIC inputs               
                    storedInputs.Parameters.Add("parameterProcessRequestTracker", storedProcessRequestTracker);
                    storedInputs.Parameters.Add("parameterCRUDVerb", "Create");

                    storedInputs.Parameters.Add("parameterDirectorOrExperienceName", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0");

                    storedInputs.Parameters.Add("parameterProcessRequestMasterStorer", storedProcessRequestCentralizedStorer);

                    storedInputs.Parameters.Add("parameterPageName", "Step_X_X_Framework_Control_ServerSetup_1_0");

                    storedInputs.Parameters.Add("parameterProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);

                    storedInputs.Parameters.Add("parameterOPTIONALIgnoreDeveloperConsoleLog", true);

                    //DYNAMIC inputs
                    storedInputs.Parameters.Add("parameterStorageDescription", "STORING client side BaseDI script SOURCE PATH");
                    storedInputs.Parameters.Add("parameterStorageValue", storedServerScriptName);
                    storedInputs.Parameters.Add("parameterUniqueStorageKey", "BaseDI_PresentationScript_SrcLocation");

                    //STORE it
                    await Extension_Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0.Step_X_X_Framework_Store_CacheDataToPersistentStorage_1_0(storedInputs);

                    //DYNAMIC inputs

                    storedInputs.Parameters.Add("parameterProcessRequestTracker", storedProcessRequestTracker);

                    storedInputs.Parameters.Remove("parameterStorageDescription");
                    storedInputs.Parameters.Add("parameterStorageDescription", "STORING server side data CONVERSION REPOSITORY mode");

                    storedInputs.Parameters.Remove("parameterStorageValue");
                    storedInputs.Parameters.Add("parameterStorageValue", storedProcessRequestSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER"));

                    storedInputs.Parameters.Remove("parameterUniqueStorageKey");
                    storedInputs.Parameters.Add("parameterUniqueStorageKey", "BaseDI_DataConverter_Mode");

                    storedInputs.Parameters.Add("parameterOPTIONALIgnoreDeveloperConsoleLog", false);

                    //STORE it
                    await Extension_Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0.Step_X_X_Framework_Store_CacheDataToPersistentStorage_1_0(storedInputs);

                    #endregion
                }
                catch (Exception mistake)
                {
                    #region EDGE CASE - USE developer logger
                    if (storedProcessRequestDeveloperMode)
                    {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "FAILED configurating server");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                        storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                        await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }
                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw mistake;

                    #endregion
                }
            }

            #region IDEAL CASE - USE dotnet server

            Func<Task<bool>> ExecuteControllerSetup = async () =>
            {
                return await Task.FromResult<bool>(true).ConfigureAwait(true);
            };

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
    }
}
