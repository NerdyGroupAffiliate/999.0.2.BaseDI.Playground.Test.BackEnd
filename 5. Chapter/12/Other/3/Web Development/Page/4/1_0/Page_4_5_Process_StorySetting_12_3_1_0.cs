#region Imports

#region BaseDI

using BaseDI.Professional.Script.Programming.Abstract_1;
using BaseDI.Professional.Script.Programming.Repository_1;
using BaseDI.Professional.Script.Programming_1;

using BaseDI.Professional.Script.Programming.Extensions_1;
using BaseDI.Professional.Script.Programming.Poco_1;

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
using BaseDI.Professional.Script.Risk_Management.Extensions_0;

#endregion

#endregion

namespace BaseDI.Professional.Chapter.Page.Web_Development_4
{
    public class Page_4_5_Process_StorySetting_12_3_1_0 : aClass_Programming_ScriptPage_12_2_1_0
    {
        #region 1. Assign

        //SETTINGS
        private IConfiguration _storedAppSettings;

        private string _storedSettingSecurityAppId = "";
        private string _storedSettingSecurityAppSecret = "";
        private string _storedSettingSecurityAppToken = "";

        //CLIENT/SERVER
        private Dictionary<string, object> _storedClientOrServerInstance;

        private string _storedClientRequestByName;
        private string _storedClientRequestByNameParameters;

        private aClass_Programming_ScriptRoutable_12_2_1_0 _storedClientRequestByObject;

        private Task<Dictionary<string, JToken>> _storedServerInstance = null;
        private object _storedServerInstanceExperienceRequestHandler = null;

        private string _storedServerRequestRESTVerb = "";
        private string _storedServerRoutePath = "";

        //DATASET
        private JObject _storedStorylineDetails = null;
        private JObject _storedStorylineDetails_Parameters = null;

        private string _storedDataObservationTemplate = "";

        //MISC
        private ExtraData_12_2_1_0 _storedExtraData = null;

        //PLUMBING
        private string _storedActionName = "";
        private aClass_Programming_ScriptRoutable_12_2_1_0 _storedBusinessDirectorOrExperienceRequestHandler;

        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedDisturber;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedSensor;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedStorer;

        private SingleParmPoco_12_2_1_0 _storedParameterInputs;

        private string _storedRequestFileName = "LocalFile_Director_Of_Advertising_Chapter_1_1_Page_4_CreateAdvertisementForAll_Handler_1_0";
        private string _storedRequestName = "";
        private IContract_Programming_Repository_12_2_1_0 _storedRepository;
        private string _storedSystemRequestByName;

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public Page_4_5_Process_StorySetting_12_3_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS

            #region MEMORIZE clientOrServer instance

            _storedClientOrServerInstance = parameterInputs.Parameters["parameterClientOrServerInstance"];

            #endregion

            #region MEMORIZE action name

            _storedActionName = (string)_storedClientOrServerInstance["storedActionName"];

            #endregion

            #region MEMORIZE app settings

            _storedAppSettings = (IConfiguration)_storedClientOrServerInstance["storedAppSettings"];

            #endregion

            #region MEMORIZE centralized processes handlers

            _storedCentralizedDisturber = parameterInputs.Parameters["parameterCentralizedDisturber"];
            _storedCentralizedSensor = parameterInputs.Parameters["parameterCentralizedSensor"];
            _storedCentralizedStorer = parameterInputs.Parameters["parameterCentralizedStorer"];

            #endregion

            #region MEMORIZE data repository

            _storedRepository = parameterInputs.Parameters["parameterDataRepository"];

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #region MEMORIZE storyline details

            _storedStorylineDetails = parameterInputs.Parameters["parameterStorylineDetails"];
            _storedStorylineDetails_Parameters = parameterInputs.Parameters["parameterStorylineDetails_Parameters"];

            #endregion

            #region MEMORIZE extra data

            _storedExtraData = parameterInputs.Parameters["parameterExtraData"] ? parameterInputs.Parameters["parameterExtraData"] : null;

            #endregion

            #region MEMORIZE request details

            _storedClientRequestByName = parameterInputs.Parameters["parameterClientRequestByName"];
            _storedClientRequestByNameParameters = parameterInputs.Parameters["parameterClientRequestByNameParameters"];
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

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

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

            SingleParmPoco_12_2_1_0 storedParameterInputs = null;

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

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") ? storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE") : false;

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "CONVERTING json to html");
            storedDeveloperLoggingInputs.Parameters.Add("parameterActionName", _storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterAppSettings", _storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.Add("parameterFileName", "Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadHomeScreenForAll_Handler_1_0 -> Page_4_5_Process_StorySetting_12_3_1_0.cs");
            storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Action");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters["parameterOPTIONALIgnoreDeveloperConsoleLog"));

            #endregion

            #region MEMORIZE observation details

            storedParameterInputs = new SingleParmPoco_12_2_1_0();

            string storedObservationPresentationTemplateItem = @"{ 'htmlResult': '{htmlResult}' }";
            string storedObservationBusinessTemplateItem = "{}";
            string storedObservationServiceTemplateItem = "{}";
            string storedObservationSecurityTemplateItem = "{}";
            string storedObservationDataTemplateItem = "{}";

            string storedObservationDataTemplateBuilder = "";

            storedParameterInputs.Parameters.Add("parameter3WordDescription", "RENDER web page");
            storedParameterInputs.Parameters.Add("parameterActionName", _storedActionName);
            storedParameterInputs.Parameters.Add("parameterAppSettings", _storedAppSettings);
            storedParameterInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
            storedParameterInputs.Parameters.Add("parameterObservationFileName", "Page_4_5_Process_StorySetting_12_3_1_0.cs");
            storedParameterInputs.Parameters.Add("parameterObservationMethodName", "Action");
            storedParameterInputs.Parameters.Add("parameterObservationPresentationTemplate", storedObservationPresentationTemplateItem);
            storedParameterInputs.Parameters.Add("parameterObservationBusinessTemplate", storedObservationBusinessTemplateItem);
            storedParameterInputs.Parameters.Add("parameterObservationServiceTemplate", storedObservationServiceTemplateItem);
            storedParameterInputs.Parameters.Add("parameterObservationSecurityTemplate", storedObservationSecurityTemplateItem);
            storedParameterInputs.Parameters.Add("parameterObservationDataTemplate", storedObservationDataTemplateItem);

            string storedObservationItem = await Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Framework_Output_JsonObservationNode_1_0(storedParameterInputs);

            #endregion

            #region MEMORIZE storyline details

            dynamic storedStorylineDetails = _storedStorylineDetails;

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
                        storedParameterInputs = new SingleParmPoco_12_2_1_0();
                        storedParameterInputs.Parameters.Add("parameterAppSettings", _storedAppSettings);
                        storedParameterInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
                        storedParameterInputs.Parameters.Add("parameterFilterData", storedStorylineDetails);
                        storedParameterInputs.Parameters.Add("parameterFilterKeyValuePairKey", "searchkey");
                        storedParameterInputs.Parameters.Add("parameterFilterKeyValuePairValue", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLContainer");
                        storedParameterInputs.Parameters.Add("parameterFilterReturnValueAsArray", false);

                        storedHtmlContainerJSON = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(storedParameterInputs).Result.SingleOrDefault().Parent.Parent;

                        storedParameterInputs = new SingleParmPoco_12_2_1_0();
                        storedParameterInputs.Parameters.Add("parameterHtmlContainerJSON", storedHtmlContainerJSON);
                        storedParameterInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
                        storedParameterInputs.Parameters.Add("parameterAppSettings", _storedAppSettings);
                        storedParameterInputs.Parameters.Add("parameterMasterStorer", _storedCentralizedStorer);
                        storedParameterInputs.Parameters.Add("parameterStorylineDetails", storedStorylineDetails);

                        storedHtmlResultString = await Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_1_0_Framework_Convert_HtmlContainerJsonToHtml_1_0(storedParameterInputs);

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
                        storedParameterInputs = new SingleParmPoco_12_2_1_0();
                        storedParameterInputs.Parameters.Add("parameterAppSettings", _storedAppSettings);
                        storedParameterInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
                        storedParameterInputs.Parameters.Add("parameterFilterData", storedStorylineDetails);
                        storedParameterInputs.Parameters.Add("parameterFilterKeyValuePairKey", "searchkey");
                        storedParameterInputs.Parameters.Add("parameterFilterKeyValuePairValue", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLRows");
                        storedParameterInputs.Parameters.Add("parameterFilterReturnValueAsArray", false);

                        storedHtmlRowsJSON = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(storedParameterInputs).Result.SingleOrDefault().Parent.Parent;

                        storedParameterInputs = new SingleParmPoco_12_2_1_0();
                        storedParameterInputs.Parameters.Add("parameterHtmlRowsJSON", storedHtmlRowsJSON);
                        storedParameterInputs.Parameters.Add("parameterHtmlContainerString", storedHtmlResultString);
                        storedParameterInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
                        storedParameterInputs.Parameters.Add("parameterAppSettings", _storedAppSettings);
                        storedParameterInputs.Parameters.Add("parameterMasterStorer", _storedCentralizedStorer);
                        storedParameterInputs.Parameters.Add("parameterStorylineDetails", storedStorylineDetails);

                        storedHtmlResultString = await Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_2_0_Framework_Convert_HtmlRowsJsonToHtml_1_0(storedParameterInputs);

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
                        storedParameterInputs = new SingleParmPoco_12_2_1_0();
                        storedParameterInputs.Parameters.Add("parameterAppSettings", _storedAppSettings);
                        storedParameterInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
                        storedParameterInputs.Parameters.Add("parameterFilterData", storedStorylineDetails);
                        storedParameterInputs.Parameters.Add("parameterFilterKeyValuePairKey", "searchkey");
                        storedParameterInputs.Parameters.Add("parameterFilterKeyValuePairValue", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLColumns");
                        storedParameterInputs.Parameters.Add("parameterFilterReturnValueAsArray", false);

                        storedHtmlColumnsJSON = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(storedParameterInputs).Result.SingleOrDefault().Parent.Parent;

                        storedParameterInputs = new SingleParmPoco_12_2_1_0();
                        storedParameterInputs.Parameters.Add("parameterHtmlColumnsJSON", storedHtmlColumnsJSON);
                        storedParameterInputs.Parameters.Add("parameterHtmlRowString", storedHtmlResultString);
                        storedParameterInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
                        storedParameterInputs.Parameters.Add("parameterAppSettings", _storedAppSettings);
                        storedParameterInputs.Parameters.Add("parameterMasterStorer", _storedCentralizedStorer);
                        storedParameterInputs.Parameters.Add("parameterStorylineDetails", storedStorylineDetails);

                        storedHtmlResultString = await Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_3_0_Framework_Convert_HtmlColumnsJsonToHtml_1_0(storedParameterInputs);

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
                        storedParameterInputs = new SingleParmPoco_12_2_1_0();
                        storedParameterInputs.Parameters.Add("parameterAppSettings", _storedAppSettings);
                        storedParameterInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
                        storedParameterInputs.Parameters.Add("parameterFilterData", storedStorylineDetails);
                        storedParameterInputs.Parameters.Add("parameterFilterKeyValuePairKey", "searchkey");
                        storedParameterInputs.Parameters.Add("parameterFilterKeyValuePairValue", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLContent");
                        storedParameterInputs.Parameters.Add("parameterFilterReturnValueAsArray", false);

                        storedHtmlContentJSON = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(storedParameterInputs).Result.SingleOrDefault().Parent.Parent;

                        storedParameterInputs = new SingleParmPoco_12_2_1_0();
                        storedParameterInputs.Parameters.Add("parameterHtmlContentJSON", storedHtmlContentJSON);
                        storedParameterInputs.Parameters.Add("parameterHtmlColumnString", storedHtmlResultString);
                        storedParameterInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
                        storedParameterInputs.Parameters.Add("parameterAppSettings", _storedAppSettings);
                        storedParameterInputs.Parameters.Add("parameterMasterStorer", _storedCentralizedStorer);
                        storedParameterInputs.Parameters.Add("parameterStorylineDetails", storedStorylineDetails);

                        storedHtmlResultString = await Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_4_0_Framework_Convert_HtmlContentJsonToHtml_1_0(storedParameterInputs);

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
                        storedParameterInputs = new SingleParmPoco_12_2_1_0();
                        storedParameterInputs.Parameters.Add("parameterAppSettings", _storedAppSettings);
                        storedParameterInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
                        storedParameterInputs.Parameters.Add("parameterFilterData", storedStorylineDetails);
                        storedParameterInputs.Parameters.Add("parameterFilterKeyValuePairKey", "searchkey");
                        storedParameterInputs.Parameters.Add("parameterFilterKeyValuePairValue", "HTMLContentStylingDetails_SetImplementer_ProductCreation_WebDevelopment_CSS");
                        storedParameterInputs.Parameters.Add("parameterFilterReturnValueAsArray", false);

                        storedHtmlStylesFiltered  = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_2_0(storedParameterInputs).Result.SingleOrDefault();
                                            
                        storedHtmlStylesJSON = storedHtmlStylesFiltered.Count > 0 ? storedHtmlStylesFiltered[0].Parent.Parent :  null;

                        storedParameterInputs = new SingleParmPoco_12_2_1_0();
                        storedParameterInputs.Parameters.Add("parameterHtmlStylesJSON", storedHtmlStylesJSON);
                        storedParameterInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
                        storedParameterInputs.Parameters.Add("parameterAppSettings", _storedAppSettings);
                        storedParameterInputs.Parameters.Add("parameterMasterStorer", _storedCentralizedStorer);
                        storedParameterInputs.Parameters.Add("parameterStorylineDetails", storedStorylineDetails);

                        return await Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_5_0_Framework_Convert_HtmlCssJSONToInlineStyles_1_0(storedParameterInputs);
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
                    Func<Task<string>> ExecuteOutputRequest = async () =>
                    {
                        storedParameterInputs = new SingleParmPoco_12_2_1_0();
                        storedParameterInputs.Parameters.Add("parameterHtmlMetaData", "");
                        storedParameterInputs.Parameters.Add("parameterHtmlTitle", "");
                        storedParameterInputs.Parameters.Add("parameterHtmlScripts", "");
                        storedParameterInputs.Parameters.Add("parameterHtmlStyles", storedHtmlResultInlineStylesString);
                        storedParameterInputs.Parameters.Add("parameterHtmlAdditionalHeadData", "");
                        storedParameterInputs.Parameters.Add("parameterHtmlBody", storedHtmlResultString);
                        storedParameterInputs.Parameters.Add("parameterClientOrServerInstance", _storedClientOrServerInstance);
                        storedParameterInputs.Parameters.Add("parameterAppSettings", _storedAppSettings);
                        storedParameterInputs.Parameters.Add("parameterMasterStorer", _storedCentralizedStorer);
                        storedParameterInputs.Parameters.Add("parameterStorylineDetails", storedStorylineDetails);

                        return await Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_8_0_Framework_Convert_HtmlStructureToString_1_0(storedParameterInputs);
                    };

                    storedHtmlResultString = await ExecuteOutputRequest();
                }
                catch (Exception mistake)
                {
                    throw new Exception("converting html content", mistake);
                }

                #endregion

                #region 9. STORE html string

                try
                {
                    Func<Task<JObject>> ExecuteOutputRequest = async () => {
                        storedObservationItem = storedObservationItem.Replace("'", "\"");
                        storedObservationItem = storedObservationItem.Replace("{htmlResult}", Regex.Unescape(storedHtmlResultString));

                        storedStorylineDetails.outputs[1].baseDIObservations.Add((JObject.Parse(storedObservationItem) as dynamic).baseDIObservations[0].observation);

                        return storedStorylineDetails;
                    };

                    StorylineDetails = await ExecuteOutputRequest();
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

                if (storedDeveloperMode)
                {
                    _storedClientOrServerInstance["processStepNumber"] = (int)_storedClientOrServerInstance["processStepNumber"] + 1;

                    storedDeveloperLoggingInputs.Parameters.Add("parameter3WordDescription", "FAILED converting json to html");
                    storedDeveloperLoggingInputs.Parameters.Add("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                    storedDeveloperLoggingInputs.Parameters.Add("parameterStepNumberReplace", _storedClientOrServerInstance["processStepNumber"]);
                    storedDeveloperLoggingInputs.Parameters.Add("parameterMethodName", "Step_0_0_Framework_Store_HtmlAttributesToArray_1_0.ExecuteConversionRequest");
                    storedDeveloperLoggingInputs.Parameters.Add("parameterMistake", mistake);

                    await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
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

