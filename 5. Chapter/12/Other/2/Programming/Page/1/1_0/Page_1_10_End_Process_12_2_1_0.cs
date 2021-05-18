﻿#region Imports

#region BaseDI

using BaseDI.Professional.Director.Programming_1;
using BaseDI.Professional.Script.Programming.Abstract_1;
using BaseDI.Professional.Script.Programming.Poco_1;
using BaseDI.Professional.Script.Programming.Repository_1;
using BaseDI.Professional.Script.Programming_1;
using BaseDI.Professional.Story.Programming_0;

#endregion

#region .Net Core

using Microsoft.Extensions.Configuration;

using System;
using System.Collections.Generic;
using System.Globalization;
using System.Threading.Tasks;

#endregion 

#region 3rd Party Core

using Newtonsoft.Json.Linq;

#endregion

#endregion

namespace BaseDI.Professional.Chapter.Page.Programming_1
{
    public class Page_1_10_End_Process_12_2_1_0 : aClass_Programming_ScriptPage_12_2_1_0
    {
        #region 1. Assign

        //SETTINGS
        private IConfiguration _storedProcessRequestSettings;

        private string _storedInputRequestApiAppId = "";
        private string _storedInputRequestApiAppSecret = "";
        private string _storedInputRequestApiAppToken = "";

        //CLIENT/SERVER
        private Dictionary<string, object> _storedProcessRequestTracker;

        private string _storedInputRequestName;
        private string _storedInputRequestNameDataCacheKey;

        private aClass_Programming_ScriptRoutable_12_2_1_0 _storedProcessRequestHandler;

        private Task<Dictionary<string, JToken>> _storedProcessRequestServerInstance = null;
        private object _storedProcessRequestServerInstanceExperienceRequestHandler = null;

        private string _storedProcessRequestServerHTTPRESTVerb = "";
        private string _storedProcessRequestServerHTTPRoutePath = "";

        //DATASET
        private JObject _storedProcessRequestDataStorylineDetails = null;
        private JObject _storedProcessRequestDataStorylineDetails_Parameters = null;

        private string _storedOutputResponseDataObservationTemplate = "";

        //MISC
        private ExtraData_12_2_1_0 _storedProcessRequestExtraData = null;

        //PLUMBING
        private string _storedInputRequestActionName = "";
        private aClass_Programming_ScriptRoutable_12_2_1_0 _storedProcessRequestRequestHandler;

        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedProcessRequestCentralizedDisturber;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedProcessRequestCentralizedSensor;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedProcessRequestCentralizedStorer;

        private SingleParmPoco_12_2_1_0 _storedInputs;

        private string _storedProcessRequestFileName = "LocalFile_Director_Of_Advertising_Chapter_1_1_Page_1_InputAdvertisement_Handler_1_0";
        private string _storedProcessRequestName = "";
        private IContract_Programming_Repository_12_2_1_0 _storedProcessRequestDataRepository;

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public Page_1_10_End_Process_12_2_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables



            #endregion

            #region DEFINE output variables

            #endregion

            ///////////////////////////////////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx


            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input action name

            _storedInputRequestActionName = parameterInputs.Parameters["parameterInputRequestActionName"];

            #endregion

            #region MEMORIZE input request details

            _storedInputRequestName = parameterInputs.Parameters["parameterInputRequestName"];
            _storedInputRequestNameDataCacheKey = parameterInputs.Parameters["parameterInputRequestNameDataCacheKey"];

            _storedInputs = parameterInputs;

            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process request tracker

            _storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

            #endregion

            #region MEMORIZE process request settings

            _storedProcessRequestSettings = (IConfiguration)_storedProcessRequestTracker["storedProcessRequestSettings"];

            #endregion

            #region MEMORIZE process centralized handlers

            _storedProcessRequestCentralizedDisturber = parameterInputs.Parameters["parameterProcessRequestCentralizedDisturber"];
            _storedProcessRequestCentralizedSensor = parameterInputs.Parameters["parameterProcessRequestCentralizedSensor"];
            _storedProcessRequestCentralizedStorer = parameterInputs.Parameters["parameterProcessRequestCentralizedStorer"];

            #endregion

            #region MEMORIZE process data repository

            _storedProcessRequestDataRepository = parameterInputs.Parameters["parameterProcessRequestDataRepository"];

            #endregion

            #region MEMORIZE process developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #region MEMORIZE process request storyline details

            _storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            _storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails_Parameters"];

            #endregion

            #region MEMORIZE process request extra data

            _storedProcessRequestExtraData = parameterInputs.Parameters["parameterProcessRequestExtraData"] ? parameterInputs.Parameters["parameterProcessRequestExtraData"] : null;

            #endregion

            #region MEMORIZE process request details

            _storedProcessRequestHandler = parameterInputs.Parameters["parameterProcessRequestHandler"];

            _storedProcessRequestName = parameterInputs.Parameters["parameterProcessRequestName"];
                  
            #endregion

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxxx


            #endregion

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE process defaults

            #region IDEAL CASE - USE defaults handler

            HandleDefaults();

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #endregion  
        }

        #endregion

        #region 3. Set

        //A. Default state
        public override void HandleDefaults()
        {
            #region 1. INPUTS

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables



            #endregion

            #region DEFINE output variables

            #endregion

            ///////////////////////////////////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx


            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input xxx xxxx


            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process xxx xxx



            #endregion

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxxx


            #endregion

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE process defaults

            #region IDEAL CASE - defaults handler


            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #endregion
        }

        #endregion

        #region 4. Action

        //A. Page in motion (DO SOMETHING)
        public override async Task<JObject> Action()
        {
            #region 1. INPUTS

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables



            #endregion

            #region DEFINE output variables

            JObject storedOutputResponseData = null;

            #endregion

            ///////////////////////////////////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx


            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input xxx xxxx


            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            if (_storedProcessRequestTracker["storedProcessRequestStepNumber"] == null)
                _storedProcessRequestTracker["storedProcessRequestStepNumber"] = 0;

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingStartUpProcessInputs = (_storedProcessRequestExtraData?.KeyValuePairs?["storedProcessRequestDeveloperLoggingInputs"] != null ? _storedProcessRequestExtraData?.KeyValuePairs?["storedProcessRequestDeveloperLoggingInputs"] as SingleParmPoco_12_2_1_0 : null);

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED

            //0. CONTROLLERS

            //1. INPUTS
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", _storedInputs.Parameters["parameterInputRequestActionName"]);

            //2. PROCESS
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "BEGIN handling request");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0 -> Page_1_10_End_Process_12_2_1_0.cs");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Action");

            //3. OUTPUTS

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseOPTIONALBeginOfProcess", true);

            #endregion

            #region MEMORIZE process request details

            _storedInputs.Parameters["parameterProcessRequestName"] = _storedInputRequestName;

            #endregion

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxx


            #endregion

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE request handler

            Func<Task<JObject>> ResolveOrExecuteRequest = async () =>
            {
                if (DirectorOrExperienceRequestHandler != null && !DirectorOrExperienceRequestHandler.RequestID.ToUpper().Contains("REQUEST_CONTROLLER_"))
                {
                    try
                    {
                        #region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode)
                        {
                            _storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)_storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                            Console.WriteLine("STEP " + _storedProcessRequestTracker["storedProcessRequestStepNumber"] + ": EXECUTING request handler " + _storedInputRequestActionName + " -> " + DirectorOrExperienceRequestHandler.RequestID);
                        }

                        #endregion

                        #region EDGE CASE - USE request executor

                        return await DirectorOrExperienceRequestHandler.Action();

                        #endregion
                    }
                    catch (Exception storedProcessRequestMistake)
                    {
                        #region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode)
                        {
                            _storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)_storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                            Console.WriteLine("STEP " + _storedProcessRequestTracker["storedProcessRequestStepNumber"] + ": ***LEAKY PIPE*** EXECUTING request handler " + _storedInputRequestActionName + " -> " + DirectorOrExperienceRequestHandler.RequestID + " could not be completed successfully. Please check ***Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0 -> Page_1_10_EndProcess*** for communication breakdown");
                        }

                        #endregion

                        #region EDGE CASE - USE exception handler

                        throw storedProcessRequestMistake;

                        #endregion
                    }
                }
                else
                {
                    try
                    {
                        #region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode)
                        {
                            _storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)_storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                            Console.WriteLine("STEP " + _storedProcessRequestTracker["storedProcessRequestStepNumber"] + ": RESOLVING request handler " + _storedInputRequestActionName + " -> " + _storedInputRequestName);
                        }

                        #endregion

                        #region IDEAL CASE - USE request resolver

                        return storedOutputResponseData = await new Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0(_storedInputs))
                            .SetupStoryline(_storedInputs)
                            .Action();

                        #endregion
                    }
                    catch (Exception storedProcessRequestMistake)
                    {
                        #region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode)
                        {
                            _storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)_storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                            Console.WriteLine("STEP " + ClientOrServerInstance["storedProcessRequestStepNumber"] + ": ***LEAKY PIPE*** RESOLVING request handler for request " + _storedInputRequestActionName + " -> " + _storedInputRequestName + " could not be completed successfully. Please check ***Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0 -> Page_1_10_EndProcess*** for communication breakdown");
                        }

                        #endregion

                        #region EDGE CASE - USE exception handler

                        throw storedProcessRequestMistake;

                        #endregion
                    }
                }
            };

            storedOutputResponseData = await ResolveOrExecuteRequest();

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN process response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(storedOutputResponseData).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        #endregion
    }
}
