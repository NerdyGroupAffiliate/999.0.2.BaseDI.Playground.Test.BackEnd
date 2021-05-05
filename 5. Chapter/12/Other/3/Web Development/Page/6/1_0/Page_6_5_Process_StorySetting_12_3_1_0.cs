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

namespace BaseDI.Professional.Chapter.Page.Web_Development_6
{
    public class Page_6_5_Process_StorySetting_12_3_1_0 : aClass_Programming_ScriptPage_12_2_1_0
    {
        #region 1. Assign

        //SETTINGS
        private IConfiguration _storedProcessRequestSettings;

        private string _storedSettingSecurityAppId = "";
        private string _storedSettingSecurityAppSecret = "";
        private string _storedSettingSecurityAppToken = "";

        //CLIENT/SERVER
        private Dictionary<string, object> _storedProcessRequestTracker;

        private string _storedClientRequestByName;
        private string _storedClientRequestByNameParameters;

        private aClass_Programming_ScriptRoutable_12_2_1_0 _storedClientRequestByObject;

        private Task<Dictionary<string, JToken>> _storedServerInstance = null;
        private object _storedServerInstanceExperienceRequestHandler = null;

        private string _storedServerRequestRESTVerb = "";
        private string _storedServerRoutePath = "";

        //DATASET
        private JObject _storedProcessRequestDataStorylineDetails = null;
        private JObject _storedProcessRequestDataStorylineDetails_Parameters = null;

        private string _storedDataObservationTemplate = "";

        //MISC
        private ExtraData_12_2_1_0 _storedProcessRequestExtraData = null;

        //PLUMBING
        private string _storedActionName = "";
        private aClass_Programming_ScriptRoutable_12_2_1_0 _storedBusinessDirectorOrExperienceRequestHandler;

        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedDisturber;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedSensor;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedStorer;

        private SingleParmPoco_12_2_1_0 _storedParameterInputs;

        private string _storedRequestFileName = "LocalFile_Director_Of_Advertising_Chapter_1_1_Page_6_CreateAdvertisement_Handler_1_0";
        private string _storedRequestName = "";
        private IContract_Programming_Repository_12_2_1_0 _storedRepository;
        private string _storedSystemRequestByName;

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public Page_6_5_Process_StorySetting_12_3_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS

            #region MEMORIZE control client server

            _storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

            #endregion

            #region MEMORIZE action name

            _storedActionName = (string)_storedProcessRequestTracker["storedInputRequestActionName"];

            #endregion

            #region MEMORIZE app settings

            _storedProcessRequestSettings = (IConfiguration)_storedProcessRequestTracker["storedProcessRequestSettings"];

            #endregion

            #region MEMORIZE centralized processes handlers

            _storedCentralizedDisturber = parameterInputs.Parameters["parameterProcessRequestCentralizedDisturber"];
            _storedCentralizedSensor = parameterInputs.Parameters["parameterProcessRequestCentralizedSensor"];
            _storedCentralizedStorer = parameterInputs.Parameters["parameterProcessRequestCentralizedStorer"];

            #endregion

            #region MEMORIZE data repository

            _storedRepository = parameterInputs.Parameters["parameterDataRepository"];

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #region MEMORIZE storyline details

            _storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            _storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails_Parameters"];

            #endregion

            #region MEMORIZE extra data

            _storedProcessRequestExtraData = parameterInputs.Parameters["parameterExtraData"] ? parameterInputs.Parameters["parameterExtraData"] : null;

            #endregion

            #region MEMORIZE request details

            _storedClientRequestByName = parameterInputs.Parameters["parameterInputRequestName"];
            _storedClientRequestByNameParameters = parameterInputs.Parameters["parameterInputRequestNameDataCacheKey"];
            _storedClientRequestByObject = parameterInputs.Parameters["parameterClientRequestByObject"];

            _storedRequestName = parameterInputs.Parameters["parameterSystemRequestByName"];

            _storedSystemRequestByName = parameterInputs.Parameters["parameterSystemRequestByName"];

            _storedBusinessDirectorOrExperienceRequestHandler = parameterInputs.Parameters["parameterBusinessDirectorOrExperienceRequestHandler"];

            _storedParameterInputs = parameterInputs;

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
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONVERTING json to html");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", _storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Director_Of_WebDevelopment_Chapter_12_3_Page_6_OutputHomeScreen_Handler_1_0 -> Page_6_5_Process_StorySetting_12_3_1_0.cs");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Action");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters["parameterOPTIONALIgnoreDeveloperConsoleLog"));

            #endregion

            #region MEMORIZE observation details

            storedInputs = new SingleParmPoco_12_2_1_0();

            string storedObservationPresentationTemplateItem = @"{ 'htmlResult': '{htmlResult}' }";
            string storedObservationBusinessTemplateItem = "{}";
            string storedObservationServiceTemplateItem = "{}";
            string storedObservationSecurityTemplateItem = "{}";
            string storedObservationDataTemplateItem = "{}";

            storedInputs.Parameters.Add("parameterProcessRequest3WordDescription", "RENDER web page");
            storedInputs.Parameters.Add("parameterInputRequestActionName", _storedActionName);
            storedInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestSettings);
            storedInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            storedInputs.Parameters.Add("parameterOutputResponseObservationFileName", "Page_6_5_Process_StorySetting_12_3_1_0.cs");
            storedInputs.Parameters.Add("parameterOutputResponseObservationMethodName", "Action");
            storedInputs.Parameters.Add("parameterOutputResponseObservationPresentationTemplate", storedObservationPresentationTemplateItem);
            storedInputs.Parameters.Add("parameterOutputResponseObservationBusinessTemplate", storedObservationBusinessTemplateItem);
            storedInputs.Parameters.Add("parameterOutputResponseObservationServiceTemplate", storedObservationServiceTemplateItem);
            storedInputs.Parameters.Add("parameterOutputResponseObservationSecurityTemplate", storedObservationSecurityTemplateItem);
            storedInputs.Parameters.Add("parameterOutputResponseObservationDataTemplate", storedObservationDataTemplateItem);

            string storedObservationItem = await Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.Step_X_X_Framework_Output_JsonObservationNode_1_0(storedInputs);

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
                        storedInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestSettings);
                        storedInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
                        storedInputs.Parameters.Add("parameterProcessRequestDataToFilter", storedProcessRequestDataStorylineDetails);
                        storedInputs.Parameters.Add("parameterProcessRequestDataToFilterKey", "searchkey");
                        storedInputs.Parameters.Add("parameterProcessRequestDataToFilterValue", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLContainer");
                        storedInputs.Parameters.Add("parameterOutputResponseAsArray", false);

                        storedHtmlContainerJSON = Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(storedInputs).Result.SingleOrDefault().Parent.Parent;

                        storedInputs = new SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.Add("parameterHtmlContainerJSON", storedHtmlContainerJSON);
                        storedInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
                        storedInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestSettings);
                        storedInputs.Parameters.Add("parameterProcessRequestMasterStorer", _storedCentralizedStorer);
                        storedInputs.Parameters.Add("parameterProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);

                        storedHtmlResultString = await Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.Step_1_0_Framework_Convert_HtmlContainerJsonToHtml_1_0(storedInputs);

                        return storedHtmlResultString;
                    };

                    storedHtmlResultString = await ExecuteConversionRequest();
                }
                catch (Exception mistake)
                {
                    throw new Exception("converting html container", mistake);
                }
                #endregion

                #region 2. CONVERT html rows

                try
                {
                    Func<Task<string>> ExecuteConversionRequest = async () =>
                    {
                        storedInputs = new SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestSettings);
                        storedInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
                        storedInputs.Parameters.Add("parameterProcessRequestDataToFilter", storedProcessRequestDataStorylineDetails);
                        storedInputs.Parameters.Add("parameterProcessRequestDataToFilterKey", "searchkey");
                        storedInputs.Parameters.Add("parameterProcessRequestDataToFilterValue", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLRows");
                        storedInputs.Parameters.Add("parameterOutputResponseAsArray", false);

                        storedHtmlRowsJSON = Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(storedInputs).Result.SingleOrDefault().Parent.Parent;

                        storedInputs = new SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.Add("parameterHtmlRowsJSON", storedHtmlRowsJSON);
                        storedInputs.Parameters.Add("parameterHtmlContainerString", storedHtmlResultString);
                        storedInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
                        storedInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestSettings);
                        storedInputs.Parameters.Add("parameterProcessRequestMasterStorer", _storedCentralizedStorer);
                        storedInputs.Parameters.Add("parameterProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);

                        storedHtmlResultString = await Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.Step_2_0_Framework_Convert_HtmlRowsJsonToHtml_1_0(storedInputs);

                        return storedHtmlResultString;
                    };

                    storedHtmlResultString = await ExecuteConversionRequest();
                }
                catch (Exception mistake)
                {
                    throw new Exception("converting html rows", mistake);
                }

                #endregion

                #region 3. CONVERT html columns

                try
                {
                    Func<Task<string>> ExecuteConversionRequest = async () =>
                    {
                        storedInputs = new SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestSettings);
                        storedInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
                        storedInputs.Parameters.Add("parameterProcessRequestDataToFilter", storedProcessRequestDataStorylineDetails);
                        storedInputs.Parameters.Add("parameterProcessRequestDataToFilterKey", "searchkey");
                        storedInputs.Parameters.Add("parameterProcessRequestDataToFilterValue", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLColumns");
                        storedInputs.Parameters.Add("parameterOutputResponseAsArray", false);

                        storedHtmlColumnsJSON = Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(storedInputs).Result.SingleOrDefault().Parent.Parent;

                        storedInputs = new SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.Add("parameterHtmlColumnsJSON", storedHtmlColumnsJSON);
                        storedInputs.Parameters.Add("parameterHtmlRowString", storedHtmlResultString);
                        storedInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
                        storedInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestSettings);
                        storedInputs.Parameters.Add("parameterProcessRequestMasterStorer", _storedCentralizedStorer);
                        storedInputs.Parameters.Add("parameterProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);

                        storedHtmlResultString = await Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.Step_3_0_Framework_Convert_HtmlColumnsJsonToHtml_1_0(storedInputs);

                        return storedHtmlResultString;
                    };

                    storedHtmlResultString = await ExecuteConversionRequest();
                }
                catch (Exception mistake)
                {
                    throw new Exception("converting html rows", mistake);
                }

                #endregion

                #region 4. CONVERT html content

                try
                {
                    Func<Task<string>> ExecuteConversionRequest = async () =>
                    {
                        storedInputs = new SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestSettings);
                        storedInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
                        storedInputs.Parameters.Add("parameterProcessRequestDataToFilter", storedProcessRequestDataStorylineDetails);
                        storedInputs.Parameters.Add("parameterProcessRequestDataToFilterKey", "searchkey");
                        storedInputs.Parameters.Add("parameterProcessRequestDataToFilterValue", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLContent");
                        storedInputs.Parameters.Add("parameterOutputResponseAsArray", false);

                        storedHtmlContentJSON = Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(storedInputs).Result.SingleOrDefault().Parent.Parent;

                        storedInputs = new SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.Add("parameterHtmlContentJSON", storedHtmlContentJSON);
                        storedInputs.Parameters.Add("parameterHtmlColumnString", storedHtmlResultString);
                        storedInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
                        storedInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestSettings);
                        storedInputs.Parameters.Add("parameterProcessRequestMasterStorer", _storedCentralizedStorer);
                        storedInputs.Parameters.Add("parameterProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);

                        storedHtmlResultString = await Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.Step_4_0_Framework_Convert_HtmlContentJsonToHtml_1_0(storedInputs);

                        return storedHtmlResultString;
                    };

                    storedHtmlResultString = await ExecuteConversionRequest();
                }
                catch (Exception mistake)
                {
                    throw new Exception("converting html content", mistake);
                }

                #endregion

                #region 5. CONVERT html inline styles

                try
                {
                    Func<Task<string>> ExecuteConversionRequest = async () =>
                    {
                        storedInputs = new SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestSettings);
                        storedInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
                        storedInputs.Parameters.Add("parameterProcessRequestDataToFilter", storedProcessRequestDataStorylineDetails);
                        storedInputs.Parameters.Add("parameterProcessRequestDataToFilterKey", "searchkey");
                        storedInputs.Parameters.Add("parameterProcessRequestDataToFilterValue", "HTMLContentStylingDetails_SetImplementer_ProductCreation_WebDevelopment_CSS");
                        storedInputs.Parameters.Add("parameterOutputResponseAsArray", false);

                        storedHtmlStylesFiltered  = Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_2_0(storedInputs).Result.SingleOrDefault();
                                            
                        storedHtmlStylesJSON = storedHtmlStylesFiltered.Count > 0 ? storedHtmlStylesFiltered[0].Parent.Parent :  null;

                        storedInputs = new SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.Add("parameterHtmlStylesJSON", storedHtmlStylesJSON);
                        storedInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
                        storedInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestSettings);
                        storedInputs.Parameters.Add("parameterProcessRequestMasterStorer", _storedCentralizedStorer);
                        storedInputs.Parameters.Add("parameterProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);

                        return await Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.Step_5_0_Framework_Convert_HtmlCssJSONToInlineStyles_1_0(storedInputs);
                    };

                    storedHtmlResultInlineStylesString = await ExecuteConversionRequest();
                }
                catch (Exception mistake)
                {
                    throw new Exception("converting html inline styles", mistake);
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
                catch (Exception mistake)
                {
                    throw new Exception("converting html inline scripts", mistake);
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
                catch (Exception mistake)
                {
                    throw new Exception("converting html inline metadata", mistake);
                }

                #endregion

                #region 8. OUTPUT html string

                try
                {
                    Func<Task<string>> ExecuteOutputResponse = async () =>
                    {
                        storedInputs = new SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.Add("parameterHtmlMetaData", "");
                        storedInputs.Parameters.Add("parameterHtmlTitle", "");
                        storedInputs.Parameters.Add("parameterHtmlScripts", "");
                        storedInputs.Parameters.Add("parameterHtmlStyles", storedHtmlResultInlineStylesString);
                        storedInputs.Parameters.Add("parameterHtmlAdditionalHeadData", "");
                        storedInputs.Parameters.Add("parameterHtmlBody", storedHtmlResultString);
                        storedInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
                        storedInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestSettings);
                        storedInputs.Parameters.Add("parameterProcessRequestMasterStorer", _storedCentralizedStorer);
                        storedInputs.Parameters.Add("parameterProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);

                        return await Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.Step_8_0_Framework_Convert_HtmlStructureToString_1_0(storedInputs);
                    };

                    storedHtmlResultString = await ExecuteOutputResponse();
                }
                catch (Exception mistake)
                {
                    throw new Exception("converting html content", mistake);
                }

                #endregion

                #region 9. STORE html string

                try
                {
                    Func<Task<JObject>> ExecuteOutputResponse = async () => {
                        storedObservationItem = storedObservationItem.Replace("'", "\"");
                        storedObservationItem = storedObservationItem.Replace("{htmlResult}", Regex.Unescape(storedHtmlResultString));

                        storedProcessRequestDataStorylineDetails.outputs[1].baseDIObservations.Add((JObject.Parse(storedObservationItem) as dynamic).baseDIObservations[0].observation);

                        return storedProcessRequestDataStorylineDetails;
                    };

                    StorylineDetails = await ExecuteOutputResponse();
                }
                catch (Exception mistake)
                {
                    throw new Exception("storing html string output observation", mistake);
                }

                #endregion

                #endregion
            }
            catch (Exception mistake)
            {
                #region EDGE CASE - USE developer logger

                if (storedProcessRequestDeveloperMode)
                {
                    _storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)_storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                    storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "FAILED converting json to html");
                    storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                    storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestStepNumberReplace", _storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                    storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Step_0_0_Framework_Store_HtmlAttributesToArray_1_0.ExecuteConversionRequest");
                    storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMistake", mistake);

                    await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                }

                #endregion

                #region EDGE CASE - USE exception handler

                throw new Exception("CONVERSION request failed " + mistake.ToString());

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

