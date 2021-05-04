#region Imports

#region BaseDI

using BaseDI.Professional.Script.Programming.Abstract_1;
using BaseDI.Professional.Script.Programming.Extensions_1;
using BaseDI.Professional.Script.Programming.Repository_1;
using BaseDI.Professional.Script.Programming_1;

#endregion

#region .Net Core

using Microsoft.Extensions.Configuration;

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

using System.Threading.Tasks;

#endregion

#region 3rd Party Core

using Newtonsoft.Json.Linq;
using BaseDI.Professional.Script.Programming.Poco_1;

#endregion

#endregion

namespace BaseDI.Professional.State.Programming_2
{
    public class LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0 : aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>>
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
        //1-1 - ADVERTISING
        private JObject stored_Director_Of_Advertising_Chapter_1_1_Page_2_CreateWhereaPersonBecameAwareOfTopic_Handler_1_0;
        private JObject stored_Director_Of_Advertising_Chapter_1_1_Page_2_CreateWhereaPersonBecameAwareOfTopic_Handler_1_0_p1_4_1_1;

        //12-2 - PROGRAMMING
        private JObject stored_Director_Of_Programming_Chapter_12_2_Page_5_SensorRequest_Handler_1_0;
        private JObject stored_Director_Of_Programming_Chapter_12_2_Page_5_SensorRequest_Handler_1_0_P1_0;

        //12-3 - WEB DEVELOPMENT
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_1_OutputHomeScreen_Handler_1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_1_OutputHomeScreen_Handler_1_0_P1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_2_OutputPresalesScreen_Handler_1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_2_OutputPresalesScreen_Handler_1_0_P1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_3_OutputOptinScreen_Handler_1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_3_OutputOptinScreen_Handler_1_0_P1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_4_OutputThankYouScreen_Handler_1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_4_OutputThankYouScreen_Handler_1_0_P1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_5_OutputSalesScreen_Handler_1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_5_OutputSalesScreen_Handler_1_0_P1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_6_OutputOrderFormScreen_Handler_1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_6_OutputOrderFormScreen_Handler_1_0_P1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_7_OutputOTOScreen_Handler_1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_7_OutputOTOScreen_Handler_1_0_P1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_8_OutputWebinarScreen_Handler_1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_9_OutputMembershipScreen_Handler_1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_8_OutputWebinarScreen_Handler_1_0_P1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_9_OutputMembershipScreen_Handler_1_0_P1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_10_OutputAffiliateScreen_Handler_1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_10_OutputAffiliateScreen_Handler_1_0_P1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_11_OutputOtherScreen_Handler_1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_11_OutputOtherScreen_Handler_1_0_P1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_12_OutputAdvancedScreen_Handler_1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_12_OutputAdvancedScreen_Handler_1_0_P1_0;

        //12-5 - SECURITY
        private JObject stored_Director_Of_Security_Chapter_12_5_Page_1_StoreAuthentication_Handler_1_0;
        private JObject stored_Director_Of_Security_Chapter_12_5_Page_1_StoreAuthentication_Handler_1_0_P1_0;

        private JObject stored_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0;
        private JObject stored_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0_P1_0;

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

        private string _storedRequestFileName = "LocalFile_Director_Of_Advertising_Chapter_1_1_Page_1_InputAdvertisement_Handler_1_0";
        private string _storedRequestName = "";
        private IContract_Programming_Repository_12_2_1_0 _storedRepository;
        private string _storedSystemRequestByName;

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS

            #region MEMORIZE 1-1 - advertising LOCAL DATASETs

            //stored_Director_Of_Advertising_Chapter_1_1_Page_2_CreateWhereaPersonBecameAwareOfTopic_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\1\Generate Brand Awareness\1\Advertising\Template\2\1_0\stored_Director_Of_Advertising_Chapter_1_1_Page_2_CreateWhereaPersonBecameAwareOfTopic_Handler_1_0.json"));
            //stored_Director_Of_Advertising_Chapter_1_1_Page_2_CreateWhereaPersonBecameAwareOfTopic_Handler_1_0_p1_4_1_1 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\1\Generate Brand Awareness\1\Advertising\Template\2\1_0\stored_Director_Of_Advertising_Chapter_1_1_Page_2_CreateWhereaPersonBecameAwareOfTopic_Handler_1_0-P1_4_1_1.json"));

            #endregion

            #region MEMORIZE 12-2 - programming LOCAL DATASETs

            stored_Director_Of_Programming_Chapter_12_2_Page_5_SensorRequest_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\2\Programming\Template\5\1_0\stored_Director_Of_Programming_Chapter_12_2_Page_5_SensorRequest_Handler_1_0.json"));
            stored_Director_Of_Programming_Chapter_12_2_Page_5_SensorRequest_Handler_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\2\Programming\Template\5\1_0\stored_Director_Of_Programming_Chapter_12_2_Page_5_SensorRequest_Handler_1_0-P1_0.json"));

            #endregion

            #region MEMORIZE 12-3 - web development LOCAL DATASETs

            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_1_OutputHomeScreen_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\1\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_1_OutputHomeScreen_Handler_1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_1_OutputHomeScreen_Handler_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\1\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_1_OutputHomeScreen_Handler_1_0-P1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_2_OutputPresalesScreen_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\2\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_2_OutputPresalesScreen_Handler_1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_2_OutputPresalesScreen_Handler_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\2\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_2_OutputPresalesScreen_Handler_1_0-P1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_3_OutputOptinScreen_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\3\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_3_OutputOptinScreen_Handler_1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_3_OutputOptinScreen_Handler_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\3\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_3_OutputOptinScreen_Handler_1_0-P1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_4_OutputThankYouScreen_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\4\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_4_OutputThankYouScreen_Handler_1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_4_OutputThankYouScreen_Handler_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\4\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_4_OutputThankYouScreen_Handler_1_0-P1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_5_OutputSalesScreen_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\5\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_5_OutputSalesScreen_Handler_1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_5_OutputSalesScreen_Handler_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\5\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_5_OutputSalesScreen_Handler_1_0-P1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_6_OutputOrderFormScreen_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\6\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_6_OutputOrderFormScreen_Handler_1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_6_OutputOrderFormScreen_Handler_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\6\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_6_OutputOrderFormScreen_Handler_1_0-P1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_7_OutputOTOScreen_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\7\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_7_OutputOTOScreen_Handler_1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_7_OutputOTOScreen_Handler_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\7\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_7_OutputOTOScreen_Handler_1_0-P1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_8_OutputWebinarScreen_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\8\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_8_OutputWebinarScreen_Handler_1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_8_OutputWebinarScreen_Handler_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\8\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_8_OutputWebinarScreen_Handler_1_0-P1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_9_OutputMembershipScreen_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\9\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_9_OutputMembershipScreen_Handler_1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_9_OutputMembershipScreen_Handler_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\9\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_9_OutputMembershipScreen_Handler_1_0-P1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_10_OutputAffiliateScreen_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\10\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_10_OutputAffiliateScreen_Handler_1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_10_OutputAffiliateScreen_Handler_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\10\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_10_OutputAffiliateScreen_Handler_1_0-P1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_11_OutputOtherScreen_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\11\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_11_OutputOtherScreen_Handler_1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_11_OutputOtherScreen_Handler_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\11\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_11_OutputOtherScreen_Handler_1_0-P1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_12_OutputAdvancedScreen_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\12\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_12_OutputAdvancedScreen_Handler_1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_12_OutputAdvancedScreen_Handler_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\12\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_12_OutputAdvancedScreen_Handler_1_0-P1_0.json"));

            stored_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\13\1_0\stored_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.json"));
            stored_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\13\1_0\stored_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0-P1_0.json"));

            #endregion

            #region MEMORIZE 12-5 - security LOCAL DATASETs

            stored_Director_Of_Security_Chapter_12_5_Page_1_StoreAuthentication_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\5\Security\Template\1\1_0\stored_Director_Of_Security_Chapter_12_5_Page_1_StoreAuthentication_Handler_1_0.json"));
            stored_Director_Of_Security_Chapter_12_5_Page_1_StoreAuthentication_Handler_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\5\Security\Template\1\1_0\stored_Director_Of_Security_Chapter_12_5_Page_1_StoreAuthentication_Handler_1_0-P1_0.json"));


            #endregion

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

        //A. Story in motion (DO SOMETHING)

        #region EXECUTE LOGIC INSTUCTIONS

        #region A. Action Methods

        //Page 1-8
        public override async Task<JObject> Action_8_Process_CRUD()
        {
            #region 1. INPUTS

            #region DEFINE data response

            JObject storedOutputResponseData = null;

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONFIGURING web routes");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", _storedProcessRequestTracker["storedInputRequestActionName"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.cs");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Action -> Action_5_Process_StorySetting");

            #endregion

            #endregion

            #region 2. PROCESS

            try
            {
                storedOutputResponseData = await Factory_Action_8_Process_CRUD();
            }
            catch
            {
                throw; //Let "Startup.cs -> Startup_Controller" handle the exception.
            }

            #endregion

            #region 3. OUTPUT

            #region RETURN http response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(storedOutputResponseData).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }


        #endregion

        #region B. Action Factories

        //Page 1-8
        private async Task<JObject> Factory_Action_8_Process_CRUD()
        {
            #region 1. INPUTS

            #region DEFINE data response

            JObject storedOutputResponseData = null;

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONFIGURING web routes");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", _storedProcessRequestTracker["storedInputRequestActionName"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Director_Of_Security_Chapter_12_5_Page_1_StoreAuthentication_Handler_1_0.cs");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Action -> Action_8_Process_CRUD -> Factory_Action_8_Process_CRUD");

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE process factory

            try
            {
                #region IDEAL CASE - USE factory method

                //if (_storedActionName.ToUpper().Contains("PROCESSHTTPREQUEST_1_0"))
                //{
                //    storedOutputResponseData = await Execute_Factory_Action_8_Process_CRUD_StoreDataInCache();
                //}

                storedOutputResponseData = await Execute_Factory_Action_8_Process_CRUD_StoreDataInCache();

                #endregion
            }
            catch
            {
                throw; //Let "Startup.cs -> Startup_Controller" handle the exception.
            }

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN http response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(storedOutputResponseData).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        #endregion

        #region C. Action Logic

        //Page 1-8
        private async Task<JObject> Execute_Factory_Action_8_Process_CRUD_StoreDataInCache()
        {
            #region 1. INPUTS

            #region DEFINE process checkpoint

            bool storedProcessRequestMistakeMade = false;

            #endregion

            #region DEFINE storyline details

            JObject storedProcessRequestDataStorylineDetails = null;

            List<JToken> storedProcessRequestDataStorylineDetailsFiltered = null;
            JObject storedProcessRequestDataStorylineDetailsFilteredResult = null;

            JObject storedProcessRequestDataStorylineDetails_Parameters = null;

            #endregion

            #region MEMORIZE app settings

            _storedProcessRequestSettings = (IConfiguration)ClientOrServerInstance["storedProcessRequestSettings"];

            #endregion

            #region MEMORIZE action name

            string storedInputRequestActionName = ClientOrServerInstance["storedInputRequestActionName"] as string;

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #region MEMORIZE request details

            string storedRequestName = ExtraData.KeyValuePairs["RequestToProcess"].ToString();
            string storedRequestNameParameters = ExtraData.KeyValuePairs["RequestToProcessParameters"].ToString();

            #endregion

            #endregion

            #region 2. PROCESS

            #region GET LOCAL DATASET

            if (!string.IsNullOrEmpty(storedRequestName))
            {
                #region IDEAL CASE - USE LOCAL DATASET

                #region 1-1 - Advertising

                try
                {
                    //switch (storedRequestName.ToUpper())
                    //{
                    //case "DIRECTOR_OF_ADVERTISING_CHAPTER_1_1_PAGE_2_CREATEWHEREAPERSONBECAMEAWAREOFTOPIC_HANDLER_1_0":
                    //    storedProcessRequestDataStorylineDetails = stored_Director_Of_Advertising_Chapter_1_1_Page_2_CreateWhereaPersonBecameAwareOfTopic_Handler_1_0;

                    //    switch (storedRequestNameParameters.ToUpper())
                    //    {
                    //        case "DIRECTOR_OF_ADVERTISING_CHAPTER_1_1_PAGE_2_CREATEWHEREAPERSONBECAMEAWAREOFTOPIC_HANDLER_1_0-P1_4_1_1":
                    //            storedProcessRequestDataStorylineDetails_Parameters = stored_Director_Of_Advertising_Chapter_1_1_Page_2_CreateWhereaPersonBecameAwareOfTopic_Handler_1_0_p1_4_1_1;
                    //            break;
                    //    }

                    //    storedProcessRequestMistakeMade = true;

                    //    break;
                    //}

                    if (storedProcessRequestMistakeMade == true)
                    {
                        #region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode)
                        {
                            ClientOrServerInstance["storedProcessRequestStepNumber"] = (int)ClientOrServerInstance["storedProcessRequestStepNumber"] + 1;

                            Console.WriteLine("STEP " + ClientOrServerInstance["storedProcessRequestStepNumber"] + ": ***EXPENSE STORAGE***  SUCCESSFULLY retrieved ***ADVERTISING*** LOCAL DATASET for request " + storedRequestName);
                        }

                        #endregion

                        storedProcessRequestMistakeMade = false;
                    }
                }
                catch
                {
                    #region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode)
                    {
                        ClientOrServerInstance["storedProcessRequestStepNumber"] = (int)ClientOrServerInstance["storedProcessRequestStepNumber"] + 1;

                        Console.WriteLine("STEP " + this.ClientOrServerInstance["storedProcessRequestStepNumber"] + ": ***LEAKY PIPE*** SEARCHING and FINDING an ADVERTISING dataset for request " + storedRequestName + " could not be completed successfully. Please check ***AppSettings.json*** for APP_SETTING_CONVERSION_MODE_XXX value. - LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0 - > Action_8_ProcessCRUD");
                    }

                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw new Exception("STEP " + this.ClientOrServerInstance["storedProcessRequestStepNumber"] + ": ***LEAKY PIPE*** SEARCHING and FINDING an ADVERTISING dataset for request " + storedRequestName + " could not be completed successfully. Please check ***AppSettings.json*** for APP_SETTING_CONVERSION_MODE_XXX value. - LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0 - > Action_8_ProcessCRUD");

                    #endregion
                }

                #endregion

                #region 12-2 - Programming

                try
                {
                    switch (storedRequestName.ToUpper())
                    {
                        case "DIRECTOR_OF_PROGRAMMING_CHAPTER_12_2_PAGE_5_REQUEST_SENSOR_1_0":
                            storedProcessRequestDataStorylineDetails = stored_Director_Of_Programming_Chapter_12_2_Page_5_SensorRequest_Handler_1_0;

                            switch (storedRequestNameParameters.ToUpper())
                            {
                                case "DIRECTOR_OF_PROGRAMMING_CHAPTER_12_2_PAGE_5_REQUEST_SENSOR_1_0-P1_0":
                                    storedProcessRequestDataStorylineDetails_Parameters = stored_Director_Of_Programming_Chapter_12_2_Page_5_SensorRequest_Handler_1_0_P1_0;
                                    break;
                            }

                            break;
                    }

                    if (storedProcessRequestMistakeMade == true)
                    {
                        #region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode)
                        {
                            ClientOrServerInstance["storedProcessRequestStepNumber"] = (int)ClientOrServerInstance["storedProcessRequestStepNumber"] + 1;

                            Console.WriteLine("STEP " + ClientOrServerInstance["storedProcessRequestStepNumber"] + ": ***EXPENSE STORAGE***  SUCCESSFULLY retrieved ***PROGRAMMING*** LOCAL DATASET for request " + storedInputRequestActionName + " -> " + storedRequestName);
                        }

                        #endregion

                        storedProcessRequestMistakeMade = false;
                    }
                }
                catch
                {
                    #region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode)
                    {
                        ClientOrServerInstance["storedProcessRequestStepNumber"] = (int)ClientOrServerInstance["storedProcessRequestStepNumber"] + 1;

                        Console.WriteLine("STEP " + this.ClientOrServerInstance["storedProcessRequestStepNumber"] + ": ***LEAKY PIPE*** SEARCHING and FINDING a PROGRAMMING dataset for request " + storedRequestName + " could not be completed successfully. Please check ***AppSettings.json*** for APP_SETTING_CONVERSION_MODE_XXX value. - LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0 - > Action_8_ProcessCRUD");
                    }

                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw new Exception("STEP " + this.ClientOrServerInstance["storedProcessRequestStepNumber"] + ": ***LEAKY PIPE*** SEARCHING and FINDING a PROGRAMMING dataset for request " + storedRequestName + " could not be completed successfully. Please check ***AppSettings.json*** for APP_SETTING_CONVERSION_MODE_XXX value. - LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0 - > Action_8_ProcessCRUD");

                    #endregion
                }

                #endregion

                #region 12-3 - Web Development

                try
                {
                    switch (storedRequestName.ToUpper())
                    {
                        case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_1_READHOMESCREENFORALL_HANDLER_1_0":
                            storedProcessRequestDataStorylineDetails = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_1_OutputHomeScreen_Handler_1_0;

                            switch (storedRequestNameParameters.ToUpper())
                            {
                                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_1_READHOMESCREENFORALL_HANDLER_1_0-P1_0":
                                    storedProcessRequestDataStorylineDetails_Parameters = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_1_OutputHomeScreen_Handler_1_0_P1_0;
                                    break;
                            }

                            storedProcessRequestMistakeMade = true;

                            break;

                        case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_2_READPRESALESSCREENFORALL_HANDLER_1_0":
                            storedProcessRequestDataStorylineDetails = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_2_OutputPresalesScreen_Handler_1_0;

                            switch (storedRequestNameParameters.ToUpper())
                            {
                                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_2_READPRESALESSCREENFORALL_HANDLER_1_0-P1_0":
                                    storedProcessRequestDataStorylineDetails_Parameters = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_2_OutputPresalesScreen_Handler_1_0_P1_0;
                                    break;
                            }

                            break;

                        case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_3_READOPTINSCREENFORALL_HANDLER_1_0":
                            storedProcessRequestDataStorylineDetails = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_3_OutputOptinScreen_Handler_1_0;

                            switch (storedRequestNameParameters.ToUpper())
                            {
                                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_3_READOPTINSCREENFORALL_HANDLER_1_0-P1_0":
                                    storedProcessRequestDataStorylineDetails_Parameters = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_3_OutputOptinScreen_Handler_1_0_P1_0;
                                    break;
                            }

                            storedProcessRequestMistakeMade = true;

                            break;

                        case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_4_READTHANKYOUSCREENFORALL_HANDLER_1_0":
                            storedProcessRequestDataStorylineDetails = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_4_OutputThankYouScreen_Handler_1_0;

                            switch (storedRequestNameParameters.ToUpper())
                            {
                                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_4_READTHANKYOUSCREENFORALL_HANDLER_1_0-P1_0":
                                    storedProcessRequestDataStorylineDetails_Parameters = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_4_OutputThankYouScreen_Handler_1_0_P1_0;
                                    break;
                            }

                            storedProcessRequestMistakeMade = true;

                            break;

                        case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_5_READSALESSCREENFORALL_HANDLER_1_0":
                            storedProcessRequestDataStorylineDetails = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_5_OutputSalesScreen_Handler_1_0;

                            switch (storedRequestNameParameters.ToUpper())
                            {
                                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_5_READSALESSCREENFORALL_HANDLER_1_0-P1_0":
                                    storedProcessRequestDataStorylineDetails_Parameters = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_5_OutputSalesScreen_Handler_1_0_P1_0;
                                    break;
                            }

                            storedProcessRequestMistakeMade = true;

                            break;

                        case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_6_READORDERFORMSCREENFORALL_HANDLER_1_0":
                            storedProcessRequestDataStorylineDetails = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_6_OutputOrderFormScreen_Handler_1_0;

                            switch (storedRequestNameParameters.ToUpper())
                            {
                                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_6_READORDERFORMSCREENFORALL_HANDLER_1_0-P1_0":
                                    storedProcessRequestDataStorylineDetails_Parameters = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_6_OutputOrderFormScreen_Handler_1_0_P1_0;
                                    break;
                            }

                            storedProcessRequestMistakeMade = true;

                            break;

                        case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_7_READOTOSCREENFORALL_HANDLER_1_0":
                            storedProcessRequestDataStorylineDetails = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_7_OutputOTOScreen_Handler_1_0;

                            switch (storedRequestNameParameters.ToUpper())
                            {
                                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_7_READOTOSCREENFORALL_HANDLER_1_0-P1_0":
                                    storedProcessRequestDataStorylineDetails_Parameters = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_7_OutputOTOScreen_Handler_1_0_P1_0;
                                    break;
                            }

                            storedProcessRequestMistakeMade = true;

                            break;

                        case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_8_READWEBINARSCREENFORALL_HANDLER_1_0":
                            storedProcessRequestDataStorylineDetails = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_8_OutputWebinarScreen_Handler_1_0;

                            switch (storedRequestNameParameters.ToUpper())
                            {
                                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_8_READWEBINARSCREENFORALL_HANDLER_1_0-P1_0":
                                    storedProcessRequestDataStorylineDetails_Parameters = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_8_OutputWebinarScreen_Handler_1_0_P1_0;
                                    break;
                            }

                            storedProcessRequestMistakeMade = true;

                            break;

                        case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_9_READMEMBERSHIPSCREENFORALL_HANDLER_1_0":
                            storedProcessRequestDataStorylineDetails = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_9_OutputMembershipScreen_Handler_1_0;

                            switch (storedRequestNameParameters.ToUpper())
                            {
                                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_8_READWEBINARSCREENFORALL_HANDLER_1_0-P1_0":
                                    storedProcessRequestDataStorylineDetails_Parameters = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_9_OutputMembershipScreen_Handler_1_0_P1_0;
                                    break;
                            }

                            storedProcessRequestMistakeMade = true;

                            break;

                        case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_10_READAFFILIATESCREENFORALL_HANDLER_1_0":
                            storedProcessRequestDataStorylineDetails = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_10_OutputAffiliateScreen_Handler_1_0;

                            switch (storedRequestNameParameters.ToUpper())
                            {
                                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_10_READAFFILIATESCREENFORALL_HANDLER_1_0-P1_0":
                                    storedProcessRequestDataStorylineDetails_Parameters = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_10_OutputAffiliateScreen_Handler_1_0_P1_0;
                                    break;
                            }

                            storedProcessRequestMistakeMade = true;

                            break;

                        case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_11_READOTHERSCREENFORALL_HANDLER_1_0":
                            storedProcessRequestDataStorylineDetails = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_11_OutputOtherScreen_Handler_1_0;

                            switch (storedRequestNameParameters.ToUpper())
                            {
                                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_11_READOTHERSCREENFORALL_HANDLER_1_0-P1_0":
                                    storedProcessRequestDataStorylineDetails_Parameters = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_11_OutputOtherScreen_Handler_1_0_P1_0;
                                    break;
                            }

                            storedProcessRequestMistakeMade = true;

                            break;

                        case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_12_READADVANCEDSCREENFORALL_HANDLER_1_0":
                            storedProcessRequestDataStorylineDetails = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_12_OutputAdvancedScreen_Handler_1_0;

                            switch (storedRequestNameParameters.ToUpper())
                            {
                                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_12_READADVANCEDSCREENFORALL_HANDLER_1_0-P1_0":
                                    storedProcessRequestDataStorylineDetails_Parameters = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_12_OutputAdvancedScreen_Handler_1_0_P1_0;
                                    break;
                            }

                            storedProcessRequestMistakeMade = true;

                            break;

                        case "EXPERIENCE_THE_HEAR_OFTHEAPISERVER_MESSAGE_12_3_1_0":
                            storedProcessRequestDataStorylineDetails = stored_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0;

                            switch (storedRequestNameParameters.ToUpper())
                            {
                                case "EXPERIENCE_THE_HEAR_OFTHEAPISERVER_MESSAGE_12_3_1_0-P1_0":
                                    storedProcessRequestDataStorylineDetails_Parameters = stored_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0_P1_0;
                                    break;
                            }

                            storedProcessRequestMistakeMade = true;

                            break;

                    }

                    if (storedProcessRequestMistakeMade == true)
                    {
                        #region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode)
                        {
                            ClientOrServerInstance["storedProcessRequestStepNumber"] = (int)ClientOrServerInstance["storedProcessRequestStepNumber"] + 1;

                            Console.WriteLine("STEP " + ClientOrServerInstance["storedProcessRequestStepNumber"] + ": ***EXPENSE STORAGE***  SUCCESSFULLY retrieved ***WEB DEVELOPMENT*** LOCAL DATASET for request " + storedInputRequestActionName + " -> " + storedRequestName);
                        }

                        #endregion

                        storedProcessRequestMistakeMade = false;
                    }
                }
                catch
                {
                    #region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode)
                    {
                        ClientOrServerInstance["storedProcessRequestStepNumber"] = (int)ClientOrServerInstance["storedProcessRequestStepNumber"] + 1;

                        Console.WriteLine("STEP " + this.ClientOrServerInstance["storedProcessRequestStepNumber"] + ": ***LEAKY PIPE*** SEARCHING and FINDING a WEB DEVELOPMENT dataset for request " + storedRequestName + " could not be completed successfully. Please check ***AppSettings.json*** for APP_SETTING_CONVERSION_MODE_XXX value. - LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0 - > Action_8_ProcessCRUD");
                    }

                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw new Exception("STEP " + this.ClientOrServerInstance["storedProcessRequestStepNumber"] + ": ***LEAKY PIPE*** SEARCHING and FINDING a WEB DEVELOPMENT dataset for request " + storedRequestName + " could not be completed successfully. Please check ***AppSettings.json*** for APP_SETTING_CONVERSION_MODE_XXX value. - LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0 - > Action_8_ProcessCRUD");

                    #endregion
                }

                #endregion

                #region 12-5 - Security

                try
                {
                    switch (storedRequestName.ToUpper())
                    {
                        case "DIRECTOR_OF_SECURITY_CHAPTER_12_5_PAGE_1_READAUTHENTICATIONFORALL_HANDLER_1_0":
                            storedProcessRequestDataStorylineDetails = stored_Director_Of_Security_Chapter_12_5_Page_1_StoreAuthentication_Handler_1_0;

                            switch (storedRequestNameParameters.ToUpper())
                            {
                                case "DIRECTOR_OF_SECURITY_CHAPTER_12_5_PAGE_1_READAUTHENTICATIONFORALL_HANDLER_1_0-P1_0":
                                    storedProcessRequestDataStorylineDetails_Parameters = stored_Director_Of_Security_Chapter_12_5_Page_1_StoreAuthentication_Handler_1_0_P1_0;
                                    break;
                            }

                            storedProcessRequestMistakeMade = true;

                            break;
                    }

                    if (storedProcessRequestMistakeMade == true)
                    {
                        #region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode)
                        {
                            ClientOrServerInstance["storedProcessRequestStepNumber"] = (int)ClientOrServerInstance["storedProcessRequestStepNumber"] + 1;

                            Console.WriteLine("STEP " + ClientOrServerInstance["storedProcessRequestStepNumber"] + ": ***EXPENSE STORAGE***  SUCCESSFULLY retrieved ***SECURITY*** LOCAL DATASET for request " + storedInputRequestActionName + " -> " + storedRequestName);
                        }

                        #endregion

                        storedProcessRequestMistakeMade = false;
                    }
                }
                catch
                {
                    #region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode)
                    {
                        ClientOrServerInstance["storedProcessRequestStepNumber"] = (int)ClientOrServerInstance["storedProcessRequestStepNumber"] + 1;

                        Console.WriteLine("STEP " + ClientOrServerInstance["storedProcessRequestStepNumber"] + ": ***LEAKY PIPE*** SEARCHING and FINDING a SECURITY dataset for request " + storedRequestName + " could not be completed successfully. Please check ***AppSettings.json*** for APP_SETTING_CONVERSION_MODE_XXX value. - LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0 - > Action_8_ProcessCRUD");
                    }

                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw new Exception("STEP " + ClientOrServerInstance["storedProcessRequestStepNumber"] + ": ***LEAKY PIPE*** SEARCHING and FINDING a SECURITY dataset for request " + storedRequestName + " could not be completed successfully. Please check ***AppSettings.json*** for APP_SETTING_CONVERSION_MODE_XXX value. - LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0 - > Action_8_ProcessCRUD");

                    #endregion
                }

                #endregion

                #endregion
            }
            else
            {
                #region EDGE CASE - USE developer logger

                if (storedProcessRequestDeveloperMode)
                {
                    ClientOrServerInstance["storedProcessRequestStepNumber"] = (int)ClientOrServerInstance["storedProcessRequestStepNumber"] + 1;

                    Console.WriteLine("STEP " + ClientOrServerInstance["storedProcessRequestStepNumber"] + ": ***LEAKY PIPE*** SEARCHING and FINDING a dataset could not be completed successfully because NO REQUEST NAME was inputted. Please check ***AppSettings.json*** for APP_SETTING_CONVERSION_MODE_XXX value. - LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0 - > Action_8_ProcessCRUD");
                }

                #endregion

                #region EDGE CASE - USE exception handler

                throw new Exception("STEP " + ClientOrServerInstance["storedProcessRequestStepNumber"] + ": ***LEAKY PIPE*** SEARCHING and FINDING a dataset could not be completed successfully because NO REQUEST NAME was inputted. Please check ***AppSettings.json*** for APP_SETTING_CONVERSION_MODE_XXX value. - LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0 - > Action_8_ProcessCRUD");

                #endregion
            }

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN process response

            #region IDEAL CASE - USE baseDI dataset

            //storedProcessRequestDataStorylineDetailsFiltered = Extension_Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0.Step_X_X_Framework_Store_JSONSettingsIntoMemory_1_0(storedProcessRequestDataStorylineDetails, "", _storedBaseDIPlaceHolderValue, true);

            storedProcessRequestDataStorylineDetailsFilteredResult.Add("storedProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);
            storedProcessRequestDataStorylineDetailsFilteredResult.Add("storedProcessRequestDataStorylineDetailsFiltered", storedProcessRequestDataStorylineDetailsFiltered.SingleOrDefault());
            storedProcessRequestDataStorylineDetailsFilteredResult.Add("storedProcessRequestDataStorylineDetails_Parameters", storedProcessRequestDataStorylineDetails_Parameters);

            return await Task.FromResult<JObject>(storedProcessRequestDataStorylineDetailsFilteredResult);

            #endregion

            #endregion

            #endregion
        }

        #endregion

        #endregion

        #region NOT APART OF THE REQUEST PIPELINE AT THIS TIME

        #region A. Action Methods

        //Page 1-1
        public override async Task<JObject> Action_1_Begin_Process()
        {
            #region 1. INPUTS


            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            #region RETURN process response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(_storedProcessRequestDataStorylineDetails).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        //Page 1-2
        public override async Task<JObject> Action_2_Validate_Process()
        {
            #region 1. INPUTS


            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            #region RETURN process response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(_storedProcessRequestDataStorylineDetails).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        //Page 1-3
        public override async Task<JObject> Action_3_Process_StoryAuthor()
        {
            #region 1. INPUTS


            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            #region RETURN process response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(_storedProcessRequestDataStorylineDetails).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        //Page 1-4
        public override async Task<JObject> Action_4_Process_StoryCharacters()
        {
            #region 1. INPUTS


            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            #region RETURN process response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(_storedProcessRequestDataStorylineDetails).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        //Page 1-5
        public override async Task<JObject> Action_5_Process_StorySetting()
        {
            #region 1. INPUTS


            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            #region RETURN process response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(_storedProcessRequestDataStorylineDetails).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        //Page 1-6
        public override async Task<JObject> Action_6_Process_StoryExperiences()
        {
            #region 1. INPUTS


            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            #region RETURN process response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(_storedProcessRequestDataStorylineDetails).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        //Page 1-7
        public override async Task<JObject> Action_7_Process_StoryResources()
        {
            #region 1. INPUTS


            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            #region RETURN process response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(_storedProcessRequestDataStorylineDetails).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        //Page 1-9
        public override async Task<JObject> Action_9_Verify_Process()
        {
            #region 1. INPUTS

            #region DEFINE data response

            JObject storedOutputResponseData = null;

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONFIGURING web routes");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", _storedProcessRequestTracker["storedInputRequestActionName"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Director_Of_Security_Chapter_12_5_Page_1_StoreAuthentication_Handler_1_0.cs");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Action -> Action_5_Process_StorySetting");

            #endregion

            #endregion

            #region 2. PROCESS

            try
            {
                storedOutputResponseData = await Factory_Action_9_Verify_Process();
            }
            catch
            {
                throw; //Let "Startup.cs -> Startup_Controller" handle the exception.
            }

            #endregion

            #region 3. OUTPUT

            #region RETURN http response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(storedOutputResponseData).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        //Page 1-10
        public override async Task<JObject> Action_10_End_Process()
        {
            #region 1. INPUTS

            #region DEFINE data response

            JObject storedOutputResponseData = null;

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONFIGURING web routes");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", _storedProcessRequestTracker["storedInputRequestActionName"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.cs");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Action -> Action_5_Process_StorySetting");

            #endregion

            #endregion

            #region 2. PROCESS

            try
            {
                storedOutputResponseData = StorylineDetails; //await Factory_Action_10_End_Process();
            }
            catch
            {
                throw; //Let "Startup.cs -> Startup_Controller" handle the exception.
            }

            #endregion

            #region 3. OUTPUT

            #region RETURN http response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(storedOutputResponseData).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        #endregion

        #region B. Action Factories

        //Page 1-1
        private async Task<JObject> Factory_Action_1_Begin_Process()
        {
            switch (_storedActionName.ToUpper())
            {
                default:
                    return await Task.FromResult<JObject>(null).ConfigureAwait(true);
            }
        }

        //Page 1-2
        private async Task<JObject> Factory_Action_2_Validate_Process()
        {
            switch (_storedActionName.ToUpper())
            {
                default:
                    return await Task.FromResult<JObject>(null).ConfigureAwait(true);
            }
        }

        //Page 1-3
        private async Task<JObject> Factory_Action_3_Process_StoryAuthor()
        {
            switch (_storedActionName.ToUpper())
            {
                default:
                    return await Task.FromResult<JObject>(null).ConfigureAwait(true);
            }
        }

        //Page 1-4
        private async Task<JObject> Factory_Action_4_Process_StoryCharacters()
        {
            switch (_storedActionName.ToUpper())
            {
                default:
                    return await Task.FromResult<JObject>(null).ConfigureAwait(true);
            }
        }

        //Page 1-5
        private async Task<JObject> Factory_Action_5_Process_StorySetting()
        {
            switch (_storedActionName.ToUpper())
            {
                default:
                    return await Task.FromResult<JObject>(null).ConfigureAwait(true);
            }
        }

        //Page 1-6
        private async Task<JObject> Factory_Action_6_Process_StoryExperiences()
        {
            switch (_storedActionName.ToUpper())
            {
                default:
                    return await Task.FromResult<JObject>(null).ConfigureAwait(true);
            }
        }

        //Page 1-7
        private async Task<JObject> Factory_Action_7_Process_StoryResources()
        {
            switch (_storedActionName.ToUpper())
            {
                default:
                    return await Task.FromResult<JObject>(null).ConfigureAwait(true);
            }
        }

        //Page 1-9
        private async Task<JObject> Factory_Action_9_Verify_Process()
        {
            #region 1. INPUTS

            #region DEFINE data response

            JObject storedOutputResponseData = null;

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONFIGURING web routes");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", _storedProcessRequestTracker["storedInputRequestActionName"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Director_Of_Security_Chapter_12_5_Page_1_StoreAuthentication_Handler_1_0.cs");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Action -> Action_8_Process_CRUD -> Factory_Action_8_Process_CRUD");

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE process factory

            try
            {
                #region IDEAL CASE - USE factory method

                //if (_storedActionName.ToUpper().Contains("PROCESSHTTPREQUEST_1_0"))
                //{
                //    storedOutputResponseData = await Execute_Factory_Action_9_Verify_Process_OutputApiToken();
                //}

                #endregion
            }
            catch
            {
                throw; //Let "Startup.cs -> Startup_Controller" handle the exception.
            }

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN http response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(storedOutputResponseData).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        //Page 1-10
        private async Task<JObject> Factory_Action_10_End_Process()
        {
            #region 1. INPUTS

            #region DEFINE data response

            JObject storedOutputResponseData = null;

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONFIGURING web routes");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", _storedProcessRequestTracker["storedInputRequestActionName"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Director_Of_Security_Chapter_12_5_Page_1_StoreAuthentication_Handler_1_0.cs");         
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Action -> Factory_Action_10_End_Process -> Factory_Action_7_Process_StoryResources");

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE process factory

            try
            {
                #region IDEAL CASE - USE factory method

                if (_storedActionName.ToUpper() == Action_12_2_1_0._12_3_WEB_DEVELOPMENT_Server_Copy_Static_Files_1_0.ToUpper())
                {
                    //storedOutputResponseData = await Execute_Factory_Action_10_End_Process_TransportRequestToHandler();
                }

                #endregion
            }
            catch
            {
                throw; //Let "Startup.cs -> Startup_Controller" handle the exception.
            }

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN http response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(storedOutputResponseData).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        #endregion

        #region C. Action Logic



        #endregion


        #endregion

        #endregion
    }
}
