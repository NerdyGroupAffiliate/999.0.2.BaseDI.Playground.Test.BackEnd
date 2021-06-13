#region Imports

#region BaseDI

using BaseDI.Professional.Script.Programming.Abstract_1;
using BaseDI.Professional.Script.Programming.Repository_1;
using BaseDI.Professional.Script.Programming_1;

using BaseDI.Professional.Script.Programming.Extensions_0;
using BaseDI.Professional.Script.Programming.Extensions_1;
using BaseDI.Professional.Script.Programming.Poco_1;

using BaseDI.Professional.Script.Risk_Management.Extensions_0;
using BaseDI.Professional.Script.Web_Development.Extensions_0;

#endregion

#region .Net Core

using Microsoft.Extensions.Configuration;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

#endregion 

#region 3rd Party Core

using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

#endregion

#endregion

namespace BaseDI.Professional.Chapter.Page.Web_Development_9
{
    public class Page_9_5_Process_StorySetting_12_3_1_0 : aClass_Programming_ScriptPage_12_2_1_0
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

        private string _storedProcessRequestFileName = "LocalFile_Director_Of_Advertising_Chapter_1_1_Page_9_CreateAdvertisement_Handler_1_0";
        private string _storedProcessRequestName = "";
        private IContract_Programming_Repository_12_2_1_0 _storedProcessRequestDataRepository;
        private string _storedProcessRequestByName;

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public Page_9_5_Process_StorySetting_12_3_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS

            #region MEMORIZE control client server

            _storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

            #endregion

            #region MEMORIZE action name

            _storedInputRequestActionName = (string)parameterInputs.Parameters["parameterInputRequestActionName"];

            #endregion

            #region MEMORIZE app settings

            _storedProcessRequestSettings = (IConfiguration)_storedProcessRequestTracker["storedProcessRequestSettings"];

            #endregion

            #region MEMORIZE centralized processes handlers

            _storedProcessRequestCentralizedDisturber = parameterInputs.Parameters["parameterProcessRequestCentralizedDisturber"];
            _storedProcessRequestCentralizedSensor = parameterInputs.Parameters["parameterProcessRequestCentralizedSensor"];
            _storedProcessRequestCentralizedStorer = parameterInputs.Parameters["parameterProcessRequestCentralizedStorer"];

            #endregion

            #region MEMORIZE data repository

            _storedProcessRequestDataRepository = parameterInputs.Parameters["parameterProcessRequestDataRepository"];

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #region MEMORIZE storyline details

            _storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            _storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails_Parameters"];

            #endregion

            #region MEMORIZE extra data

            _storedProcessRequestExtraData = parameterInputs.Parameters.ContainsKey("parameterProcessRequestExtraData") ? parameterInputs.Parameters["parameterProcessRequestExtraData"] : null;

            #endregion

            #region MEMORIZE request details

            _storedInputRequestName = parameterInputs.Parameters["parameterInputRequestName"];
            _storedInputRequestNameDataCacheKey = parameterInputs.Parameters["parameterInputRequestNameDataCacheKey"];
            _storedProcessRequestHandler = parameterInputs.Parameters["parameterProcessRequestHandler"];

            _storedProcessRequestName = parameterInputs.Parameters["parameterProcessRequestName"];

            _storedProcessRequestByName = parameterInputs.Parameters["parameterProcessRequestName"];

            _storedProcessRequestRequestHandler = parameterInputs.Parameters["parameterProcessRequestHandler"];

            _storedInputs = parameterInputs;

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

        public override void HandleDefaults()
        {
            #region 1. INPUTS

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE process defaults


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

            #region DEFINE parameter inputs

            SingleParmPoco_12_2_1_0 storedInputs = null;

            #endregion

            #region DEFINE html details

            dynamic storedHtmlContainerJSON = "";
            dynamic storedHtmlRowsJSON = "";
            dynamic storedHtmlColumnsJSON = "";
            dynamic storedHtmlContentJSON = "";

            dynamic storedHtmlStylesFiltered = "";
            dynamic storedHtmlStylesJSON = "";

            string storedHtmlResultInlineStylesString = "";
            string storedHtmlResultString = "";

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") ? _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") : false;

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "CONVERTING json to html");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterInputRequestActionName", _parameterInputs.Parameters.getValue("parameterInputRequestActionName"));
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestTracker", _storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestFileName", "Director_Of_WebDevelopment_Chapter_12_3_Page_9_OutputHomeScreen_Handler_1_0 -> Page_9_5_Process_StorySetting_12_3_1_0.cs");
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Action");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters["parameterOPTIONALIgnoreDeveloperConsoleLog"));

            #endregion

            #region MEMORIZE observation details

            storedInputs = new SingleParmPoco_12_2_1_0();

            string storedOutputResponseObservationPresentationTemplateItem = @"{ 'htmlResult': '{htmlResult}' }";
            string storedOutputResponseObservationBusinessTemplateItem = "{}";
            string storedOutputResponseObservationServiceTemplateItem = "{}";
            string storedOutputResponseObservationSecurityTemplateItem = "{}";
            string storedOutputResponseObservationDataTemplateItem = "{}";

            storedInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "RENDER web page");
            storedInputs.Parameters.TryAdd("parameterInputRequestActionName", _storedInputRequestActionName);
            storedInputs.Parameters.TryAdd("parameterProcessRequestSettings", _storedProcessRequestSettings);
            storedInputs.Parameters.TryAdd("parameterProcessRequestTracker", _storedProcessRequestTracker);
            storedInputs.Parameters.TryAdd("parameterOutputResponseObservationFileName", "Page_9_5_Process_StorySetting_12_3_1_0.cs");
            storedInputs.Parameters.TryAdd("parameterOutputResponseObservationMethodName", "Action");
            storedInputs.Parameters.TryAdd("parameterOutputResponseObservationPresentationTemplate", storedOutputResponseObservationPresentationTemplateItem);
            storedInputs.Parameters.TryAdd("parameterOutputResponseObservationBusinessTemplate", storedOutputResponseObservationBusinessTemplateItem);
            storedInputs.Parameters.TryAdd("parameterOutputResponseObservationServiceTemplate", storedOutputResponseObservationServiceTemplateItem);
            storedInputs.Parameters.TryAdd("parameterOutputResponseObservationSecurityTemplate", storedOutputResponseObservationSecurityTemplateItem);
            storedInputs.Parameters.TryAdd("parameterOutputResponseObservationDataTemplate", storedOutputResponseObservationDataTemplateItem);

            string storedOutputResponseObservationItem = await Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.Step_X_X_Framework_Output_JsonObservationNode_1_0(storedInputs);

            #endregion

            #region MEMORIZE storyline details

            dynamic storedProcessRequestDataStorylineDetails = _storedProcessRequestDataStorylineDetails;

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE json to html conversion

            try
            {
                #region IDEAL CASE - USE baseDI converter

                #region 1. CONVERT html container

                try
                {
                    Func<Task<string>> ExecuteConversionRequest = async () =>
                    {
                        storedInputs = new SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.TryAdd("parameterProcessRequestSettings", _storedProcessRequestSettings);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestTracker", _storedProcessRequestTracker);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestDataToFilter", storedProcessRequestDataStorylineDetails);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestDataToFilterKey", "searchkey");
                        storedInputs.Parameters.TryAdd("parameterProcessRequestDataToFilterValue", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLContainer");
                        storedInputs.Parameters.TryAdd("parameterOutputResponseAsArray", false);

                        storedHtmlContainerJSON = Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(storedInputs).Result.SingleOrDefault().Parent.Parent;

                        storedInputs = new SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.TryAdd("parameterInputRequestHtmlContainerJSON", storedHtmlContainerJSON);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestTracker", _storedProcessRequestTracker);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestSettings", _storedProcessRequestSettings);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestCentralizedStorer", _storedProcessRequestCentralizedStorer);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);

                        storedHtmlResultString = await Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.Step_1_0_Framework_Convert_HtmlContainerJsonToHtml_1_0(storedInputs);

                        return storedHtmlResultString;
                    };

                    storedHtmlResultString = await ExecuteConversionRequest();
                }
                catch (Exception storedProcessRequestMistake)
                {
                    throw new Exception("converting html container", storedProcessRequestMistake);
                }
                #endregion

                #region 2. CONVERT html rows

                try
                {
                    Func<Task<string>> ExecuteConversionRequest = async () =>
                    {
                        storedInputs = new SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.TryAdd("parameterProcessRequestSettings", _storedProcessRequestSettings);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestTracker", _storedProcessRequestTracker);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestDataToFilter", storedProcessRequestDataStorylineDetails);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestDataToFilterKey", "searchkey");
                        storedInputs.Parameters.TryAdd("parameterProcessRequestDataToFilterValue", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLRows");
                        storedInputs.Parameters.TryAdd("parameterOutputResponseAsArray", false);

                        storedHtmlRowsJSON = Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(storedInputs).Result.SingleOrDefault().Parent.Parent;

                        storedInputs = new SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.TryAdd("parameterInputRequestHtmlRowsJSON", storedHtmlRowsJSON);
                        storedInputs.Parameters.TryAdd("parameterOutputResponseHtmlContainerString", storedHtmlResultString);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestTracker", _storedProcessRequestTracker);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestSettings", _storedProcessRequestSettings);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestCentralizedStorer", _storedProcessRequestCentralizedStorer);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);

                        storedHtmlResultString = await Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.Step_2_0_Framework_Convert_HtmlRowsJsonToHtml_1_0(storedInputs);

                        return storedHtmlResultString;
                    };

                    storedHtmlResultString = await ExecuteConversionRequest();
                }
                catch (Exception storedProcessRequestMistake)
                {
                    throw new Exception("converting html rows", storedProcessRequestMistake);
                }

                #endregion

                #region 3. CONVERT html columns

                try
                {
                    Func<Task<string>> ExecuteConversionRequest = async () =>
                    {
                        storedInputs = new SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.TryAdd("parameterProcessRequestSettings", _storedProcessRequestSettings);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestTracker", _storedProcessRequestTracker);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestDataToFilter", storedProcessRequestDataStorylineDetails);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestDataToFilterKey", "searchkey");
                        storedInputs.Parameters.TryAdd("parameterProcessRequestDataToFilterValue", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLColumns");
                        storedInputs.Parameters.TryAdd("parameterOutputResponseAsArray", false);

                        storedHtmlColumnsJSON = Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(storedInputs).Result.SingleOrDefault().Parent.Parent;

                        storedInputs = new SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.TryAdd("parameterInputRequestHtmlColumnsJSON", storedHtmlColumnsJSON);
                        storedInputs.Parameters.TryAdd("parameterOutputResponseHtmlRowString", storedHtmlResultString);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestTracker", _storedProcessRequestTracker);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestSettings", _storedProcessRequestSettings);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestCentralizedStorer", _storedProcessRequestCentralizedStorer);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);

                        storedHtmlResultString = await Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.Step_3_0_Framework_Convert_HtmlColumnsJsonToHtml_1_0(storedInputs);

                        return storedHtmlResultString;
                    };

                    storedHtmlResultString = await ExecuteConversionRequest();
                }
                catch (Exception storedProcessRequestMistake)
                {
                    throw new Exception("converting html rows", storedProcessRequestMistake);
                }

                #endregion

                #region 4. CONVERT html content

                try
                {
                    Func<Task<string>> ExecuteConversionRequest = async () =>
                    {
                        storedInputs = new SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.TryAdd("parameterProcessRequestSettings", _storedProcessRequestSettings);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestTracker", _storedProcessRequestTracker);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestDataToFilter", storedProcessRequestDataStorylineDetails);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestDataToFilterKey", "searchkey");
                        storedInputs.Parameters.TryAdd("parameterProcessRequestDataToFilterValue", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLContent");
                        storedInputs.Parameters.TryAdd("parameterOutputResponseAsArray", false);

                        storedHtmlContentJSON = Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(storedInputs).Result.SingleOrDefault().Parent.Parent;

                        storedInputs = new SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.TryAdd("parameterInputRequestHtmlContentJSON", storedHtmlContentJSON);
                        storedInputs.Parameters.TryAdd("parameterOutputResponseHtmlColumnString", storedHtmlResultString);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestTracker", _storedProcessRequestTracker);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestSettings", _storedProcessRequestSettings);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestCentralizedStorer", _storedProcessRequestCentralizedStorer);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);

                        storedHtmlResultString = await Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.Step_4_0_Framework_Convert_HtmlContentJsonToHtml_1_0(storedInputs);

                        return storedHtmlResultString;
                    };

                    storedHtmlResultString = await ExecuteConversionRequest();
                }
                catch (Exception storedProcessRequestMistake)
                {
                    throw new Exception("converting html content", storedProcessRequestMistake);
                }

                #endregion

                #region 5. CONVERT html inline styles

                try
                {
                    Func<Task<string>> ExecuteConversionRequest = async () =>
                    {
                        storedInputs = new SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.TryAdd("parameterProcessRequestSettings", _storedProcessRequestSettings);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestTracker", _storedProcessRequestTracker);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestDataToFilter", storedProcessRequestDataStorylineDetails);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestDataToFilterKey", "searchkey");
                        storedInputs.Parameters.TryAdd("parameterProcessRequestDataToFilterValue", "HTMLContentStylingDetails_SetImplementer_ProductCreation_WebDevelopment_CSS");
                        storedInputs.Parameters.TryAdd("parameterOutputResponseAsArray", false);

                        storedHtmlStylesFiltered  = Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_2_0(storedInputs).Result.SingleOrDefault();
                                            
                        storedHtmlStylesJSON = storedHtmlStylesFiltered.Count > 0 ? storedHtmlStylesFiltered[0].Parent.Parent :  null;

                        storedInputs = new SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.TryAdd("parameterInputRequestHtmlStylesJSON", storedHtmlStylesJSON);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestTracker", _storedProcessRequestTracker);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestSettings", _storedProcessRequestSettings);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestCentralizedStorer", _storedProcessRequestCentralizedStorer);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);

                        return await Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.Step_5_0_Framework_Convert_HtmlCssJSONToInlineStyles_1_0(storedInputs);
                    };

                    storedHtmlResultInlineStylesString = await ExecuteConversionRequest();
                }
                catch (Exception storedProcessRequestMistake)
                {
                    throw new Exception("converting html inline styles", storedProcessRequestMistake);
                }

                #endregion

                #region 6. CONVERT html inline scripts

                //TODO
                try
                {
                    Func<Task<string>> ExecuteConversionRequest = async () => {
                        return await Task.FromResult<string>("").ConfigureAwait(true);
                    };
                }
                catch (Exception storedProcessRequestMistake)
                {
                    throw new Exception("converting html inline scripts", storedProcessRequestMistake);
                }

                #endregion

                #region 7. CONVERT html inline metadata

                //TODO
                try
                {
                    Func<Task<string>> ExecuteConversionRequest = async () => {
                        return await Task.FromResult<string>("").ConfigureAwait(true);
                    };
                }
                catch (Exception storedProcessRequestMistake)
                {
                    throw new Exception("converting html inline metadata", storedProcessRequestMistake);
                }

                #endregion

                #region 8. OUTPUT html string

                try
                {
                    Func<Task<string>> ExecuteOutputResponse = async () =>
                    {
                        storedInputs = new SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.TryAdd("parameterInputRequestHtmlMetaData", "");
                        storedInputs.Parameters.TryAdd("parameterInputRequestHtmlTitle", "");
                        storedInputs.Parameters.TryAdd("parameterInputRequestHtmlScripts", "");
                        storedInputs.Parameters.TryAdd("parameterInputRequestHtmlStyles", storedHtmlResultInlineStylesString);
                        storedInputs.Parameters.TryAdd("parameterInputRequestHtmlAdditionalHeadData", "");
                        storedInputs.Parameters.TryAdd("parameterInputRequestHtmlBody", storedHtmlResultString);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestTracker", _storedProcessRequestTracker);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestSettings", _storedProcessRequestSettings);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestCentralizedStorer", _storedProcessRequestCentralizedStorer);
                        storedInputs.Parameters.TryAdd("parameterProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);

                        return await Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.Step_8_0_Framework_Convert_HtmlStructureToString_1_0(storedInputs);
                    };

                    storedHtmlResultString = await ExecuteOutputResponse();
                }
                catch (Exception storedProcessRequestMistake)
                {
                    throw new Exception("converting html content", storedProcessRequestMistake);
                }

                #endregion

                #region 9. STORE html string

                try
                {
                    Func<Task<JObject>> ExecuteOutputResponse = async () => {
                        storedOutputResponseObservationItem = storedOutputResponseObservationItem.Replace("'", "\"");
                        storedOutputResponseObservationItem = storedOutputResponseObservationItem.Replace("{htmlResult}", Regex.Unescape(storedHtmlResultString));

                        storedProcessRequestDataStorylineDetails.outputs[1].baseDIObservations.Add((JObject.Parse(storedOutputResponseObservationItem) as dynamic).baseDIObservations[0].observation);

                        return storedProcessRequestDataStorylineDetails;
                    };

                    StorylineDetails = await ExecuteOutputResponse();
                }
                catch (Exception storedProcessRequestMistake)
                {
                    throw new Exception("storing html string output observation", storedProcessRequestMistake);
                }

                #endregion

                #endregion
            }
            catch (Exception storedProcessRequestMistake)
            {
                #region EDGE CASE - USE developer logger

                if (storedProcessRequestDeveloperMode)
                {
                    _storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)_storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                    storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "FAILED converting json to html");
                    storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                    storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", _storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                    storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "Step_0_0_Framework_Store_HtmlAttributesToArray_1_0.ExecuteConversionRequest");
                    storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMistake",  storedProcessRequestMistake);

                    await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                }

                #endregion

                #region EDGE CASE - USE exception handler

                throw new Exception("CONVERSION request failed " +  storedProcessRequestMistake.ToString());

                #endregion
            }

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN process response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(StorylineDetails).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        #endregion
    }
}

