#region Imports

#region BaseDI

using BaseDI.Professional.Director.Web_Development_1;
using BaseDI.Professional.Director.Web_Development_10;
using BaseDI.Professional.Director.Web_Development_11;
using BaseDI.Professional.Director.Web_Development_12;
using BaseDI.Professional.Director.Web_Development_2;
using BaseDI.Professional.Director.Web_Development_3;
using BaseDI.Professional.Director.Web_Development_4;
using BaseDI.Professional.Director.Web_Development_5;
using BaseDI.Professional.Director.Web_Development_6;
using BaseDI.Professional.Director.Web_Development_7;
using BaseDI.Professional.Director.Web_Development_8;
using BaseDI.Professional.Director.Web_Development_9;

using BaseDI.Professional.Experience.Hear.Web_Development_13;

using BaseDI.Professional.Script.Programming.Abstract_1;
using BaseDI.Professional.Script.Programming.Extensions_1;
using BaseDI.Professional.Script.Programming.Poco_1;
using BaseDI.Professional.Script.Programming_1;

using BaseDI.Professional.Script.Risk_Management.Extensions_0;

using BaseDI.Professional.State.Web_Development_1;
using BaseDI.Professional.State.Web_Development_10;
using BaseDI.Professional.State.Web_Development_11;
using BaseDI.Professional.State.Web_Development_12;
using BaseDI.Professional.State.Web_Development_13;
using BaseDI.Professional.State.Web_Development_2;
using BaseDI.Professional.State.Web_Development_3;
using BaseDI.Professional.State.Web_Development_4;
using BaseDI.Professional.State.Web_Development_5;
using BaseDI.Professional.State.Web_Development_6;
using BaseDI.Professional.State.Web_Development_7;
using BaseDI.Professional.State.Web_Development_8;
using BaseDI.Professional.State.Web_Development_9;

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

namespace BaseDI.Professional.Story.Web_Development_1
{
    #region 6. Action Implementation

    //A. Story in motion (DO SOMETHING) ACTING
    internal class WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0 : aClass_Programming_ScriptNicheMaster_12_2_1_0<object>
    {
        #region 1. Assign

        //SETTINGS
        private IConfiguration _storedAppSettings = null;

        //CLIENT/SERVER
        private Dictionary<string, object> _storedClientOrServerInstance;

        private string _storedClientRequestByName;
        private string _storedClientRequestByNameParameters;

        private aClass_Programming_ScriptRoutable_12_2_1_0 _storedClientRequestByObject;

        //DATASETS
        private JObject _storedStorylineDetails;
        private JObject _storedStorylineDetails_Parameters;

        //MISC
        private ExtraData_12_2_1_0 _storedExtraData;

        //PLUMBING
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedDisturber;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedSensor;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedStorer;

        private SingleParmPoco_12_2_1_0 _storedParameterInputs = null;

        private string _storedRequestName = "";
        private string _storedSystemRequestByName = "";

        #endregion

        #region 2. Ready

        WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS

            #region DEFINE clientOrServer instance

            _storedClientOrServerInstance = null;

            #endregion

            #region MEMORIZE extra data

            _storedExtraData = parameterInputs.Parameters["parameterExtraData"] != null ? parameterInputs.Parameters["parameterExtraData"] : null;

            #endregion

            #endregion

            #region 2. PROCESS

            #region HANDLE niche setup

            #region EDGE CASE - USE niche faults



            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT


            #endregion
        }

        #endregion

        #region 3. Set

        //A. Default state of this part of the storyline
        #region 1. INPUTS

        #endregion

        #region 2. PROCESS

        #endregion

        #region 3. OUTPUT

        #endregion

        #endregion

        #region 4. Action

        #endregion

        public override async Task<object> Action(SingleParmPoco_12_2_1_0 parameterInputs)
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
                storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONFIGURATING request handler");
                storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", storedClientOrServerInstance["storedActionName"]);
                storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", storedClientOrServerInstance["storedAppSettings"]);
                storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", storedClientOrServerInstance);
                storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0.cs");
                storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Action -> ValidateInputs");

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
                            storedMessage += "***parameterClientOrServerInstance*** must contain a key of ***storedAppSettings***.";
                            storedProcessCheckPointHit = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterAppSettings"))
                    {
                        storedMessage += "***parameterAppSettings*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterClientRequestByName"))
                    {
                        storedMessage += "***parameterClientRequestByName*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterClientRequestByNameParameters"))
                    {
                        storedMessage += "***parameterClientRequestByNameParameters*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterCentralizedDisturber"))
                    {
                        storedMessage += "***parameterCentralizedDisturber*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterCentralizedSensor"))
                    {
                        storedMessage += "***parameterCentralizedSensor*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterCentralizedStorer"))
                    {
                        storedMessage += "***parameterCentralizedStorer*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterStorylineDetails"))
                    {
                        storedMessage += "***parameterStorylineDetails*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterStorylineDetails_Parameters"))
                    {
                        storedMessage += "***parameterStorylineDetails_Parameters*** cannot be blank or empty.\n";
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

            //BEGIN valdation process
            await ValidateInputs(parameterInputs);

            #endregion

            #region DEFINE request handler

            dynamic storedRequestHandler = null;

            #endregion

            #region MEMORIZE clientOrServer instance

            _storedClientOrServerInstance = parameterInputs.Parameters["parameterClientOrServerInstance"];

            #endregion

            #region MEMORIZE app settings

            _storedAppSettings = (IConfiguration)_storedClientOrServerInstance["storedAppSettings"];

            #endregion

            #region MEMORIZE centralized processes handlers

            _storedCentralizedDisturber = parameterInputs.Parameters["parameterCentralizedDisturber"];
            _storedCentralizedSensor = parameterInputs.Parameters["parameterCentralizedSensor"];
            _storedCentralizedStorer = parameterInputs.Parameters["parameterCentralizedStorer"];

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingStartUpProcessInputs = (parameterInputs.Parameters["parameterExtraData"]?.KeyValuePairs?["storedDeveloperLoggingInputs"] ? parameterInputs.Parameters["parameterExtraData"]?.KeyValuePairs?["storedDeveloperLoggingInputs"] : null);

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "ASSIGNING request handler");
            storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", _storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", _storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0.cs");
            storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Action");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALBeginOfProcess", true);

            #endregion

            #region MEMORIZE request details

            string storedClientRequestByName = parameterInputs.Parameters["parameterClientRequestByName"];
            string storedClientRequestByNameParameters = parameterInputs.Parameters["parameterClientRequestByNameParameters"];

            string storedSystemRequestByName = parameterInputs.Parameters["parameterSystemRequestByName"] ? parameterInputs.Parameters["parameterSystemRequestByName"] : "";

            _storedRequestName = storedClientRequestByName;

            #endregion

            #region MEMORIZE extra data

            _storedExtraData.KeyValuePairs.Add("storedAPILocationLocalNodeJS", APILocationLocalNodeJS);
            _storedExtraData.KeyValuePairs.Add("storedAPILocationLocalDotNetCore", APILocationLocalDotNetCore);

            _storedExtraData.KeyValuePairs.Add("storedAPILocationRemote", APILocationRemote);

            _storedExtraData.KeyValuePairs.Add("storedClientRequestByName", storedClientRequestByName);
            _storedExtraData.KeyValuePairs.Add("storedClientRequestByNameParameters", storedClientRequestByNameParameters);

            #endregion

            #region MEMORIZE storyline details

            _storedStorylineDetails = parameterInputs.Parameters["parameterStorylineDetails"];
            _storedStorylineDetails_Parameters = parameterInputs.Parameters["parameterStorylineDetails_Parameters"];

            #endregion

            #endregion

            #region 2. PROCESS

            #region ASSIGN request handler

            try
            {
                #region IDEAL CASE - USE director or experience

                switch (storedClientRequestByName.ToUpper())
                {
                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_1_CREATEHOMESCREENFORALL_HANDLER_1_0":
                        storedRequestHandler = Create_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0(parameterInputs);

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_1_READHOMESCREENFORALL_HANDLER_1_0":
                        storedRequestHandler = Create_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0(parameterInputs);

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_2_READPRESALESSCREENFORALL_HANDLER_1_0":
                        storedRequestHandler = Create_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0(parameterInputs);

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_3_READOPTINSCREENFORALL_HANDLER_1_0":
                        storedRequestHandler = Create_Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0(parameterInputs);

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_4_READTHANKYOUSCREENFORALL_HANDLER_1_0":
                        storedRequestHandler = Create_Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0(parameterInputs);

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_5_READSALESSCREENFORALL_HANDLER_1_0":
                        storedRequestHandler = Create_Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0(parameterInputs);

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_6_READORDERFORMSCREENFORALL_HANDLER_1_0":
                        storedRequestHandler = Create_Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0(parameterInputs);

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_7_READOTOSCREENFORALL_HANDLER_1_0":
                        storedRequestHandler = Create_Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0(parameterInputs);

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_8_READWEBINARSCREENFORALL_HANDLER_1_0":
                        storedRequestHandler = Create_Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0(parameterInputs);

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_9_READMEMBERSHIPSCREENFORALL_HANDLER_1_0":
                        storedRequestHandler = Create_Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0(parameterInputs);

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_10_READAFFILIATESCREENFORALL_HANDLER_1_0":
                        storedRequestHandler = Create_Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0(parameterInputs);

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_11_READOTHERSCREENFORALL_HANDLER_1_0":
                        storedRequestHandler = Create_Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0(parameterInputs);

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_12_READADVANCEDSCREENFORALL_HANDLER_1_0":
                        storedRequestHandler = Create_Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0(parameterInputs);

                        break;

                    case "EXPERIENCE_THE_HEAR_OFTHEAPISERVER_MESSAGE_12_3_1_0":
                        storedRequestHandler = Create_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0(parameterInputs);

                        break;
                }

                #endregion
            }
            catch (Exception mistake)
            {
                #region EDGE CASE - USE developer logger
                if (storedDeveloperMode)
                {
                    _storedClientOrServerInstance["processStepNumber"] = (int)_storedClientOrServerInstance["processStepNumber"] + 1;

                    storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "FAILED configurating request handler");
                    storedDeveloperLoggingInputs.Parameters.Add("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                    storedDeveloperLoggingInputs.Parameters.Add("parameterStepNumberReplace", _storedClientOrServerInstance["processStepNumber"]);

                    await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                }
                #endregion

                #region EDGE CASE - USE exception handler

                throw mistake;

                #endregion
            }

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN request handler

            #region IDEAL CASE - USE experienece or director

            return storedRequestHandler;

            #endregion

            #endregion

            #endregion
        }

        #region Page 1

        private object Create_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS

            #region MEMORIZE data repository

            string storedRepositoryType = !string.IsNullOrEmpty(_storedAppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER")) ? _storedAppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER") : "LOCAL_FILE";

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:.APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingStartUpProcessInputs = (parameterInputs.Parameters["parameterExtraData"]?.KeyValuePairs?["storedDeveloperLoggingInputs"] ? parameterInputs.Parameters["parameterExtraData"]?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") : null);

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONFIGURATING request handler");
            storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", _storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", _storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0.cs");
            storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Create_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALBeginOfProcess", true);

            #endregion

            #endregion

            #region 2. PROCESS

            #region CONFIGURE request handler

            #region IDEAL CASE - USE director

            aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0 storedRequestHandler_Director = null;// new Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0(parameterInputs);

            storedRequestHandler_Director.ClientOrServerInstance = _storedClientOrServerInstance;

            storedRequestHandler_Director.ExtraData = _storedExtraData;

            storedRequestHandler_Director.MasterStorer = _storedCentralizedStorer;
            storedRequestHandler_Director.MasterDisturber = _storedCentralizedDisturber;
            storedRequestHandler_Director.MasterSensor = _storedCentralizedSensor;

            storedRequestHandler_Director.StorylineDetails = _storedStorylineDetails;
            storedRequestHandler_Director.StorylineDetails_Parameters = _storedStorylineDetails_Parameters;

            switch (storedRepositoryType.ToUpper())
            {
                case "LOCAL_FILE":
                    storedRequestHandler_Director.Repository = null; //new 
                    storedRequestHandler_Director.Repository.RequestName = _storedRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedRequestHandler_Director.Repository = null; //new 
                    storedRequestHandler_Director.Repository.RequestName = _storedRequestName;

                    break;
            }

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN request handler

            #region IDEAL CASE - USE experienece or director

            return storedRequestHandler_Director;

            #endregion

            #endregion

            #endregion
        }

        private object Create_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS

            #region MEMORIZE data repository

            string storedRepositoryType = !string.IsNullOrEmpty(_storedAppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER")) ? _storedAppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER") : "LOCAL_FILE";

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:.APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingStartUpProcessInputs = (parameterInputs.Parameters["parameterExtraData"]?.KeyValuePairs?["storedDeveloperLoggingInputs"] ? parameterInputs.Parameters["parameterExtraData"]?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") : null);

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONFIGURATING request handler");
            storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", _storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", _storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0.cs");
            storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Create_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALBeginOfProcess", true);

            #endregion

            #endregion

            #region 2. PROCESS

            #region CONFIGURE request handler

            #region IDEAL CASE - USE director

            aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0 storedRequestHandler_Director = new Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0(parameterInputs);

            storedRequestHandler_Director.ClientOrServerInstance = _storedClientOrServerInstance;

            storedRequestHandler_Director.ExtraData = _storedExtraData;

            storedRequestHandler_Director.MasterStorer = _storedCentralizedStorer;
            storedRequestHandler_Director.MasterDisturber = _storedCentralizedDisturber;
            storedRequestHandler_Director.MasterSensor = _storedCentralizedSensor;

            storedRequestHandler_Director.StorylineDetails = _storedStorylineDetails;
            storedRequestHandler_Director.StorylineDetails_Parameters = _storedStorylineDetails_Parameters;

            switch (storedRepositoryType.ToUpper())
            {
                case "LOCAL_FILE":
                    storedRequestHandler_Director.Repository = new LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0(parameterInputs); //new 
                    storedRequestHandler_Director.Repository.RequestName = _storedRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedRequestHandler_Director.Repository = new RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0(parameterInputs); //new 
                    storedRequestHandler_Director.Repository.RequestName = _storedRequestName;

                    break;
            }

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN request handler

            #region IDEAL CASE - USE experienece or director

            return storedRequestHandler_Director;

            #endregion

            #endregion

            #endregion
        }

        #endregion

        #region Page 2

        private object Create_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS

            #region MEMORIZE data repository

            string storedRepositoryType = !string.IsNullOrEmpty(_storedAppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER")) ? _storedAppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER") : "LOCAL_FILE";

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:.APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingStartUpProcessInputs = (parameterInputs.Parameters["parameterExtraData"]?.KeyValuePairs?["storedDeveloperLoggingInputs"] ? parameterInputs.Parameters["parameterExtraData"]?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") : null);

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONFIGURATING request handler");
            storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", _storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", _storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0.cs");
            storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Create_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALBeginOfProcess", true);

            #endregion

            #endregion

            #region 2. PROCESS

            #region CONFIGURE request handler

            #region IDEAL CASE - USE director

            aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0 storedRequestHandler_Director = new Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0(parameterInputs);

            storedRequestHandler_Director.ClientOrServerInstance = _storedClientOrServerInstance;

            storedRequestHandler_Director.ExtraData = _storedExtraData;

            storedRequestHandler_Director.MasterStorer = _storedCentralizedStorer;
            storedRequestHandler_Director.MasterDisturber = _storedCentralizedDisturber;
            storedRequestHandler_Director.MasterSensor = _storedCentralizedSensor;

            storedRequestHandler_Director.StorylineDetails = _storedStorylineDetails;
            storedRequestHandler_Director.StorylineDetails_Parameters = _storedStorylineDetails_Parameters;

            switch (storedRepositoryType.ToUpper())
            {
                case "LOCAL_FILE":
                    storedRequestHandler_Director.Repository = new LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0(parameterInputs); //new 
                    storedRequestHandler_Director.Repository.RequestName = _storedRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedRequestHandler_Director.Repository = new RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0(parameterInputs); //new 
                    storedRequestHandler_Director.Repository.RequestName = _storedRequestName;

                    break;
            }

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN request handler

            #region IDEAL CASE - USE experienece or director

            return storedRequestHandler_Director;

            #endregion

            #endregion

            #endregion
        }

        #endregion

        #region Page 3

        private object Create_Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS

            #region MEMORIZE data repository

            string storedRepositoryType = !string.IsNullOrEmpty(_storedAppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER")) ? _storedAppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER") : "LOCAL_FILE";

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:.APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingStartUpProcessInputs = (parameterInputs.Parameters["parameterExtraData"]?.KeyValuePairs?["storedDeveloperLoggingInputs"] ? parameterInputs.Parameters["parameterExtraData"]?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") : null);

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONFIGURATING request handler");
            storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", _storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", _storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0.cs");
            storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Create_Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALBeginOfProcess", true);

            #endregion

            #endregion

            #region 2. PROCESS

            #region CONFIGURE request handler

            #region IDEAL CASE - USE director

            aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0 storedRequestHandler_Director = new Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0(parameterInputs);

            storedRequestHandler_Director.ClientOrServerInstance = _storedClientOrServerInstance;

            storedRequestHandler_Director.ExtraData = _storedExtraData;

            storedRequestHandler_Director.MasterStorer = _storedCentralizedStorer;
            storedRequestHandler_Director.MasterDisturber = _storedCentralizedDisturber;
            storedRequestHandler_Director.MasterSensor = _storedCentralizedSensor;

            storedRequestHandler_Director.StorylineDetails = _storedStorylineDetails;
            storedRequestHandler_Director.StorylineDetails_Parameters = _storedStorylineDetails_Parameters;

            switch (storedRepositoryType.ToUpper())
            {
                case "LOCAL_FILE":
                    storedRequestHandler_Director.Repository = new LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0(parameterInputs); //new 
                    storedRequestHandler_Director.Repository.RequestName = _storedRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedRequestHandler_Director.Repository = new RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0(parameterInputs); //new 
                    storedRequestHandler_Director.Repository.RequestName = _storedRequestName;

                    break;
            }

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN request handler

            #region IDEAL CASE - USE experienece or director

            return storedRequestHandler_Director;

            #endregion

            #endregion

            #endregion
        }

        #endregion

        #region Page 4

        private object Create_Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS

            #region MEMORIZE data repository

            string storedRepositoryType = !string.IsNullOrEmpty(_storedAppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER")) ? _storedAppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER") : "LOCAL_FILE";

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:.APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingStartUpProcessInputs = (parameterInputs.Parameters["parameterExtraData"]?.KeyValuePairs?["storedDeveloperLoggingInputs"] ? parameterInputs.Parameters["parameterExtraData"]?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") : null);

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONFIGURATING request handler");
            storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", _storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", _storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0.cs");
            storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Create_Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALBeginOfProcess", true);

            #endregion

            #endregion

            #region 2. PROCESS

            #region CONFIGURE request handler

            #region IDEAL CASE - USE director

            aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0 storedRequestHandler_Director = new Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0(parameterInputs);

            storedRequestHandler_Director.ClientOrServerInstance = _storedClientOrServerInstance;

            storedRequestHandler_Director.ExtraData = _storedExtraData;

            storedRequestHandler_Director.MasterStorer = _storedCentralizedStorer;
            storedRequestHandler_Director.MasterDisturber = _storedCentralizedDisturber;
            storedRequestHandler_Director.MasterSensor = _storedCentralizedSensor;

            storedRequestHandler_Director.StorylineDetails = _storedStorylineDetails;
            storedRequestHandler_Director.StorylineDetails_Parameters = _storedStorylineDetails_Parameters;

            switch (storedRepositoryType.ToUpper())
            {
                case "LOCAL_FILE":
                    storedRequestHandler_Director.Repository = new LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0(parameterInputs); //new 
                    storedRequestHandler_Director.Repository.RequestName = _storedRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedRequestHandler_Director.Repository = new RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0(parameterInputs); //new 
                    storedRequestHandler_Director.Repository.RequestName = _storedRequestName;

                    break;
            }

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN request handler

            #region IDEAL CASE - USE experienece or director

            return storedRequestHandler_Director;

            #endregion

            #endregion

            #endregion
        }

        #endregion

        #region Page 5

        private object Create_Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS

            #region MEMORIZE data repository

            string storedRepositoryType = !string.IsNullOrEmpty(_storedAppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER")) ? _storedAppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER") : "LOCAL_FILE";

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:.APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingStartUpProcessInputs = (parameterInputs.Parameters["parameterExtraData"]?.KeyValuePairs?["storedDeveloperLoggingInputs"] ? parameterInputs.Parameters["parameterExtraData"]?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") : null);

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONFIGURATING request handler");
            storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", _storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", _storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0.cs");
            storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Create_Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALBeginOfProcess", true);

            #endregion

            #endregion

            #region 2. PROCESS

            #region CONFIGURE request handler

            #region IDEAL CASE - USE director

            aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0 storedRequestHandler_Director = new Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0(parameterInputs);

            storedRequestHandler_Director.ClientOrServerInstance = _storedClientOrServerInstance;

            storedRequestHandler_Director.ExtraData = _storedExtraData;

            storedRequestHandler_Director.MasterStorer = _storedCentralizedStorer;
            storedRequestHandler_Director.MasterDisturber = _storedCentralizedDisturber;
            storedRequestHandler_Director.MasterSensor = _storedCentralizedSensor;

            storedRequestHandler_Director.StorylineDetails = _storedStorylineDetails;
            storedRequestHandler_Director.StorylineDetails_Parameters = _storedStorylineDetails_Parameters;

            switch (storedRepositoryType.ToUpper())
            {
                case "LOCAL_FILE":
                    storedRequestHandler_Director.Repository = new LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0(parameterInputs); //new 
                    storedRequestHandler_Director.Repository.RequestName = _storedRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedRequestHandler_Director.Repository = new RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0(parameterInputs); //new 
                    storedRequestHandler_Director.Repository.RequestName = _storedRequestName;

                    break;
            }

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN request handler

            #region IDEAL CASE - USE experienece or director

            return storedRequestHandler_Director;

            #endregion

            #endregion

            #endregion
        }

        #endregion

        #region Page 6

        private object Create_Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS

            #region MEMORIZE data repository

            string storedRepositoryType = !string.IsNullOrEmpty(_storedAppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER")) ? _storedAppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER") : "LOCAL_FILE";

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:.APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingStartUpProcessInputs = (parameterInputs.Parameters["parameterExtraData"]?.KeyValuePairs?["storedDeveloperLoggingInputs"] ? parameterInputs.Parameters["parameterExtraData"]?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") : null);

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONFIGURATING request handler");
            storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", _storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", _storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0.cs");
            storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Create_Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALBeginOfProcess", true);

            #endregion

            #endregion

            #region 2. PROCESS

            #region CONFIGURE request handler

            #region IDEAL CASE - USE director

            aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0 storedRequestHandler_Director = new Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0(parameterInputs);

            storedRequestHandler_Director.ClientOrServerInstance = _storedClientOrServerInstance;

            storedRequestHandler_Director.ExtraData = _storedExtraData;

            storedRequestHandler_Director.MasterStorer = _storedCentralizedStorer;
            storedRequestHandler_Director.MasterDisturber = _storedCentralizedDisturber;
            storedRequestHandler_Director.MasterSensor = _storedCentralizedSensor;

            storedRequestHandler_Director.StorylineDetails = _storedStorylineDetails;
            storedRequestHandler_Director.StorylineDetails_Parameters = _storedStorylineDetails_Parameters;

            switch (storedRepositoryType.ToUpper())
            {
                case "LOCAL_FILE":
                    storedRequestHandler_Director.Repository = new LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0(parameterInputs); //new 
                    storedRequestHandler_Director.Repository.RequestName = _storedRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedRequestHandler_Director.Repository = new RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0(parameterInputs); //new 
                    storedRequestHandler_Director.Repository.RequestName = _storedRequestName;

                    break;
            }

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN request handler

            #region IDEAL CASE - USE experienece or director

            return storedRequestHandler_Director;

            #endregion

            #endregion

            #endregion
        }

        #endregion

        #region Page 7

        private object Create_Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS

            #region MEMORIZE data repository

            string storedRepositoryType = !string.IsNullOrEmpty(_storedAppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER")) ? _storedAppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER") : "LOCAL_FILE";

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:.APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingStartUpProcessInputs = (parameterInputs.Parameters["parameterExtraData"]?.KeyValuePairs?["storedDeveloperLoggingInputs"] ? parameterInputs.Parameters["parameterExtraData"]?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") : null);

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONFIGURATING request handler");
            storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", _storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", _storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0.cs");
            storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Create_Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALBeginOfProcess", true);

            #endregion

            #endregion

            #region 2. PROCESS

            #region CONFIGURE request handler

            #region IDEAL CASE - USE director

            aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0 storedRequestHandler_Director = new Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0(parameterInputs);

            storedRequestHandler_Director.ClientOrServerInstance = _storedClientOrServerInstance;

            storedRequestHandler_Director.ExtraData = _storedExtraData;

            storedRequestHandler_Director.MasterStorer = _storedCentralizedStorer;
            storedRequestHandler_Director.MasterDisturber = _storedCentralizedDisturber;
            storedRequestHandler_Director.MasterSensor = _storedCentralizedSensor;

            storedRequestHandler_Director.StorylineDetails = _storedStorylineDetails;
            storedRequestHandler_Director.StorylineDetails_Parameters = _storedStorylineDetails_Parameters;

            switch (storedRepositoryType.ToUpper())
            {
                case "LOCAL_FILE":
                    storedRequestHandler_Director.Repository = new LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0(parameterInputs); //new 
                    storedRequestHandler_Director.Repository.RequestName = _storedRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedRequestHandler_Director.Repository = new RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0(parameterInputs); //new 
                    storedRequestHandler_Director.Repository.RequestName = _storedRequestName;

                    break;
            }

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN request handler

            #region IDEAL CASE - USE experienece or director

            return storedRequestHandler_Director;

            #endregion

            #endregion

            #endregion
        }

        #endregion  

        #region Page 8

        private object Create_Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS

            #region MEMORIZE data repository

            string storedRepositoryType = !string.IsNullOrEmpty(_storedAppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER")) ? _storedAppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER") : "LOCAL_FILE";

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:.APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingStartUpProcessInputs = (parameterInputs.Parameters["parameterExtraData"]?.KeyValuePairs?["storedDeveloperLoggingInputs"] ? parameterInputs.Parameters["parameterExtraData"]?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") : null);

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONFIGURATING request handler");
            storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", _storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", _storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0.cs");
            storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Create_Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALBeginOfProcess", true);

            #endregion

            #endregion

            #region 2. PROCESS

            #region CONFIGURE request handler

            #region IDEAL CASE - USE director

            aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0 storedRequestHandler_Director = new Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0(parameterInputs);

            storedRequestHandler_Director.ClientOrServerInstance = _storedClientOrServerInstance;

            storedRequestHandler_Director.ExtraData = _storedExtraData;

            storedRequestHandler_Director.MasterStorer = _storedCentralizedStorer;
            storedRequestHandler_Director.MasterDisturber = _storedCentralizedDisturber;
            storedRequestHandler_Director.MasterSensor = _storedCentralizedSensor;

            storedRequestHandler_Director.StorylineDetails = _storedStorylineDetails;
            storedRequestHandler_Director.StorylineDetails_Parameters = _storedStorylineDetails_Parameters;

            switch (storedRepositoryType.ToUpper())
            {
                case "LOCAL_FILE":
                    storedRequestHandler_Director.Repository = new LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0(parameterInputs); //new 
                    storedRequestHandler_Director.Repository.RequestName = _storedRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedRequestHandler_Director.Repository = new RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0(parameterInputs); //new 
                    storedRequestHandler_Director.Repository.RequestName = _storedRequestName;

                    break;
            }

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN request handler

            #region IDEAL CASE - USE experienece or director

            return storedRequestHandler_Director;

            #endregion

            #endregion

            #endregion
        }

        #endregion

        #region Page 9

        private object Create_Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS

            #region MEMORIZE data repository

            string storedRepositoryType = !string.IsNullOrEmpty(_storedAppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER")) ? _storedAppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER") : "LOCAL_FILE";

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:.APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingStartUpProcessInputs = (parameterInputs.Parameters["parameterExtraData"]?.KeyValuePairs?["storedDeveloperLoggingInputs"] ? parameterInputs.Parameters["parameterExtraData"]?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") : null);

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONFIGURATING request handler");
            storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", _storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", _storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0.cs");
            storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Create_Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALBeginOfProcess", true);

            #endregion

            #endregion

            #region 2. PROCESS

            #region CONFIGURE request handler

            #region IDEAL CASE - USE director

            aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0 storedRequestHandler_Director = new Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0(parameterInputs);

            storedRequestHandler_Director.ClientOrServerInstance = _storedClientOrServerInstance;

            storedRequestHandler_Director.ExtraData = _storedExtraData;

            storedRequestHandler_Director.MasterStorer = _storedCentralizedStorer;
            storedRequestHandler_Director.MasterDisturber = _storedCentralizedDisturber;
            storedRequestHandler_Director.MasterSensor = _storedCentralizedSensor;

            storedRequestHandler_Director.StorylineDetails = _storedStorylineDetails;
            storedRequestHandler_Director.StorylineDetails_Parameters = _storedStorylineDetails_Parameters;

            switch (storedRepositoryType.ToUpper())
            {
                case "LOCAL_FILE":
                    storedRequestHandler_Director.Repository = new LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0(parameterInputs); //new 
                    storedRequestHandler_Director.Repository.RequestName = _storedRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedRequestHandler_Director.Repository = new RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0(parameterInputs); //new 
                    storedRequestHandler_Director.Repository.RequestName = _storedRequestName;

                    break;
            }

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN request handler

            #region IDEAL CASE - USE experienece or director

            return storedRequestHandler_Director;

            #endregion

            #endregion

            #endregion
        }

        #endregion

        #region Page 10

        private object Create_Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS

            #region MEMORIZE data repository

            string storedRepositoryType = !string.IsNullOrEmpty(_storedAppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER")) ? _storedAppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER") : "LOCAL_FILE";

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:.APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingStartUpProcessInputs = (parameterInputs.Parameters["parameterExtraData"]?.KeyValuePairs?["storedDeveloperLoggingInputs"] ? parameterInputs.Parameters["parameterExtraData"]?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") : null);

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONFIGURATING request handler");
            storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", _storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", _storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0.cs");
            storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Create_Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALBeginOfProcess", true);

            #endregion

            #endregion

            #region 2. PROCESS

            #region CONFIGURE request handler

            #region IDEAL CASE - USE director

            aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0 storedRequestHandler_Director = new Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0(parameterInputs);

            storedRequestHandler_Director.ClientOrServerInstance = _storedClientOrServerInstance;

            storedRequestHandler_Director.ExtraData = _storedExtraData;

            storedRequestHandler_Director.MasterStorer = _storedCentralizedStorer;
            storedRequestHandler_Director.MasterDisturber = _storedCentralizedDisturber;
            storedRequestHandler_Director.MasterSensor = _storedCentralizedSensor;

            storedRequestHandler_Director.StorylineDetails = _storedStorylineDetails;
            storedRequestHandler_Director.StorylineDetails_Parameters = _storedStorylineDetails_Parameters;

            switch (storedRepositoryType.ToUpper())
            {
                case "LOCAL_FILE":
                    storedRequestHandler_Director.Repository = new LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0(parameterInputs); //new 
                    storedRequestHandler_Director.Repository.RequestName = _storedRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedRequestHandler_Director.Repository = new RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0(parameterInputs); //new 
                    storedRequestHandler_Director.Repository.RequestName = _storedRequestName;

                    break;
            }

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN request handler

            #region IDEAL CASE - USE experienece or director

            return storedRequestHandler_Director;

            #endregion

            #endregion

            #endregion
        }

        #endregion

        #region Page 11

        private object Create_Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS

            #region MEMORIZE data repository

            string storedRepositoryType = !string.IsNullOrEmpty(_storedAppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER")) ? _storedAppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER") : "LOCAL_FILE";

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:.APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingStartUpProcessInputs = (parameterInputs.Parameters["parameterExtraData"]?.KeyValuePairs?["storedDeveloperLoggingInputs"] ? parameterInputs.Parameters["parameterExtraData"]?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") : null);

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONFIGURATING request handler");
            storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", _storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", _storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0.cs");
            storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Create_Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALBeginOfProcess", true);

            #endregion

            #endregion

            #region 2. PROCESS

            #region CONFIGURE request handler

            #region IDEAL CASE - USE director

            aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0 storedRequestHandler_Director = new Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0(parameterInputs);

            storedRequestHandler_Director.ClientOrServerInstance = _storedClientOrServerInstance;

            storedRequestHandler_Director.ExtraData = _storedExtraData;

            storedRequestHandler_Director.MasterStorer = _storedCentralizedStorer;
            storedRequestHandler_Director.MasterDisturber = _storedCentralizedDisturber;
            storedRequestHandler_Director.MasterSensor = _storedCentralizedSensor;

            storedRequestHandler_Director.StorylineDetails = _storedStorylineDetails;
            storedRequestHandler_Director.StorylineDetails_Parameters = _storedStorylineDetails_Parameters;

            switch (storedRepositoryType.ToUpper())
            {
                case "LOCAL_FILE":
                    storedRequestHandler_Director.Repository = new LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0(parameterInputs); //new 
                    storedRequestHandler_Director.Repository.RequestName = _storedRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedRequestHandler_Director.Repository = new RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0(parameterInputs); //new 
                    storedRequestHandler_Director.Repository.RequestName = _storedRequestName;

                    break;
            }

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN request handler

            #region IDEAL CASE - USE experienece or director

            return storedRequestHandler_Director;

            #endregion

            #endregion

            #endregion
        }

        #endregion

        #region Page 12

        private object Create_Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS

            #region MEMORIZE data repository

            string storedRepositoryType = !string.IsNullOrEmpty(_storedAppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER")) ? _storedAppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER") : "LOCAL_FILE";

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:.APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingStartUpProcessInputs = (parameterInputs.Parameters["parameterExtraData"]?.KeyValuePairs?["storedDeveloperLoggingInputs"] ? parameterInputs.Parameters["parameterExtraData"]?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") : null);

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONFIGURATING request handler");
            storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", _storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", _storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0.cs");
            storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Create_Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALBeginOfProcess", true);

            #endregion

            #endregion

            #region 2. PROCESS

            #region CONFIGURE request handler

            #region IDEAL CASE - USE director

            aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0 storedRequestHandler_Director = new Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0(parameterInputs);

            storedRequestHandler_Director.ClientOrServerInstance = _storedClientOrServerInstance;

            storedRequestHandler_Director.ExtraData = _storedExtraData;

            storedRequestHandler_Director.MasterStorer = _storedCentralizedStorer;
            storedRequestHandler_Director.MasterDisturber = _storedCentralizedDisturber;
            storedRequestHandler_Director.MasterSensor = _storedCentralizedSensor;

            storedRequestHandler_Director.StorylineDetails = _storedStorylineDetails;
            storedRequestHandler_Director.StorylineDetails_Parameters = _storedStorylineDetails_Parameters;

            switch (storedRepositoryType.ToUpper())
            {
                case "LOCAL_FILE":
                    storedRequestHandler_Director.Repository = new LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0(parameterInputs); //new 
                    storedRequestHandler_Director.Repository.RequestName = _storedRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedRequestHandler_Director.Repository = new RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0(parameterInputs); //new 
                    storedRequestHandler_Director.Repository.RequestName = _storedRequestName;

                    break;
            }

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN request handler

            #region IDEAL CASE - USE experienece or director

            return storedRequestHandler_Director;

            #endregion

            #endregion

            #endregion
        }

        #endregion

        #region Page 13

        private object Create_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS

            #region MEMORIZE data repository

            string storedRepositoryType = !string.IsNullOrEmpty(_storedAppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER")) ? _storedAppSettings.GetValue<string>("AppSettings:APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER") : "LOCAL_FILE";

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:.APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingStartUpProcessInputs = (parameterInputs.Parameters["parameterExtraData"]?.KeyValuePairs?["storedDeveloperLoggingInputs"] ? parameterInputs.Parameters["parameterExtraData"]?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") : null);

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONFIGURATING request handler");
            storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", _storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", _storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0.cs");
            storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Create_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALBeginOfProcess", true);

            #endregion

            #endregion

            #region 2. PROCESS

            #region CONFIGURE request handler

            #region IDEAL CASE - USE director

            aClass_Programming_ScriptExperience_BuilderPattern_12_2_1_0 storedRequestHandler_Experience = new Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0(parameterInputs);

            storedRequestHandler_Experience.ClientOrServerInstance = _storedClientOrServerInstance;

            storedRequestHandler_Experience.ExtraData = _storedExtraData;

            storedRequestHandler_Experience.MasterStorer = _storedCentralizedStorer;
            storedRequestHandler_Experience.MasterDisturber = _storedCentralizedDisturber;
            storedRequestHandler_Experience.MasterSensor = _storedCentralizedSensor;

            storedRequestHandler_Experience.StorylineDetails = _storedStorylineDetails;
            storedRequestHandler_Experience.StorylineDetails_Parameters = _storedStorylineDetails_Parameters;

            switch (storedRepositoryType.ToUpper())
            {
                case "LOCAL_FILE":
                    storedRequestHandler_Experience.Repository = new LocalFile_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0(parameterInputs); //new 
                    storedRequestHandler_Experience.Repository.RequestName = _storedRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedRequestHandler_Experience.Repository = new RemoteService_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0(parameterInputs); //new 
                    storedRequestHandler_Experience.Repository.RequestName = _storedRequestName;

                    break;
            }

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN request handler

            #region IDEAL CASE - USE experienece or director

            return storedRequestHandler_Experience;

            #endregion

            #endregion

            #endregion
        }

        #endregion  
    }

    #endregion
}
