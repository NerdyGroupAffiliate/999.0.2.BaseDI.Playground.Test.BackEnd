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

#endregion

#endregion

namespace BaseDI.Professional.State.Programming_2
{
    public class LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0 : aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>>
    {
        #region 1. Assign

        //A. Variable Declaration

        //1-1 - ADVERTISING
        private JObject stored_Director_Of_Advertising_Chapter_1_1_Page_2_CreateWhereaPersonBecameAwareOfTopic_Handler_1_0;
        private JObject stored_Director_Of_Advertising_Chapter_1_1_Page_2_CreateWhereaPersonBecameAwareOfTopic_Handler_1_0_p1_4_1_1;

        //12-2 - PROGRAMMING
        private JObject stored_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0;
        private JObject stored_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0_P1_0;

        //12-3 - WEB DEVELOPMENT
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0_P1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0_P1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0_P1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0_P1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0_P1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0_P1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0_P1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0_P1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0_P1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0_P1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0_P1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0;
        private JObject stored_Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0_P1_0;

        //12-5 - SECURITY
        private JObject stored_Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0;
        private JObject stored_Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0_P1_0;
       
        private JObject stored_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0;
        private JObject stored_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0_P1_0;

        //SETTINGS
        private IConfiguration _storedAppSettings;

        //DATASETS
        private JObject _storedStorylineDetails = null;

        //PLUMBING
        private string _storedBaseDIPlaceHolderValue = "{BASEDICUSTOMOPTION}";

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0(JObject parameterstoredStorylineDetails)
        {
            #region 1. INPUTS

            #region MEMORIZE 1-1 - advertising LOCAL DATASETs

            //stored_Director_Of_Advertising_Chapter_1_1_Page_2_CreateWhereaPersonBecameAwareOfTopic_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\1\Generate Brand Awareness\1\Advertising\Template\2\1_0\stored_Director_Of_Advertising_Chapter_1_1_Page_2_CreateWhereaPersonBecameAwareOfTopic_Handler_1_0.json"));
            //stored_Director_Of_Advertising_Chapter_1_1_Page_2_CreateWhereaPersonBecameAwareOfTopic_Handler_1_0_p1_4_1_1 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\1\Generate Brand Awareness\1\Advertising\Template\2\1_0\stored_Director_Of_Advertising_Chapter_1_1_Page_2_CreateWhereaPersonBecameAwareOfTopic_Handler_1_0-P1_4_1_1.json"));

            #endregion

            #region MEMORIZE 12-2 - programming LOCAL DATASETs

            stored_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\2\Programming\Template\5\1_0\stored_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0.json"));
            stored_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\2\Programming\Template\5\1_0\stored_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0-P1_0.json"));

            #endregion

            #region MEMORIZE 12-3 - web development LOCAL DATASETs

            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\1\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\1\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0-P1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\2\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\2\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0-P1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\3\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\3\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0-P1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\4\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\4\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0-P1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\5\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\5\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0-P1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\6\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\6\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0-P1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\7\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\7\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0-P1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\8\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\8\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0-P1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\9\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\9\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0-P1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\10\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\10\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0-P1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\11\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\11\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0-P1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\12\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0.json"));
            stored_Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\12\1_0\stored_Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0-P1_0.json"));

            stored_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\13\1_0\stored_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.json"));
            stored_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\13\1_0\stored_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0-P1_0.json"));

            #endregion

            #region MEMORIZE 12-5 - security LOCAL DATASETs

            stored_Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\5\Security\Template\1\1_0\stored_Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0.json"));
            stored_Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\5\Security\Template\1\1_0\stored_Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0-P1_0.json"));


            #endregion

            #region MEMORIZE storyline details

            _storedStorylineDetails = parameterstoredStorylineDetails;

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE process defaults

            #region IDEAL CASE - defaults handler

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

        #region EXECUTE LOGIC INSTUCTIONS

        //A. Story in motion (DO SOMETHING)
        public override Task<JObject> Action_8_Process_CRUD()
        {
            #region 1. INPUTS

            #region DEFINE process checkpoint

            bool storedProcessCheckPointHit = false;

            #endregion

            #region DEFINE storyline details

            JObject storedStorylineDetails = null;

            List<JToken> storedStorylineDetailsFiltered = null;
            JObject storedStorylineDetailsFilteredResult = null;

            JObject storedStorylineDetails_Parameters = null;

            #endregion

            #region MEMORIZE app settings

            _storedAppSettings = (IConfiguration)ClientOrServerInstance["storedAppSettings"];

            #endregion

            #region MEMORIZE action name

            string storedActionName = ClientOrServerInstance["storedActionName"] as string;

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

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
                        //    storedStorylineDetails = stored_Director_Of_Advertising_Chapter_1_1_Page_2_CreateWhereaPersonBecameAwareOfTopic_Handler_1_0;

                        //    switch (storedRequestNameParameters.ToUpper())
                        //    {
                        //        case "DIRECTOR_OF_ADVERTISING_CHAPTER_1_1_PAGE_2_CREATEWHEREAPERSONBECAMEAWAREOFTOPIC_HANDLER_1_0-P1_4_1_1":
                        //            storedStorylineDetails_Parameters = stored_Director_Of_Advertising_Chapter_1_1_Page_2_CreateWhereaPersonBecameAwareOfTopic_Handler_1_0_p1_4_1_1;
                        //            break;
                        //    }

                        //    storedProcessCheckPointHit = true;

                        //    break;
                    //}

                    if (storedProcessCheckPointHit == true)
                    {
                        #region EDGE CASE - USE developer logger

                        if (storedDeveloperMode)
                        {
                            ClientOrServerInstance["processStepNumber"] = (int)ClientOrServerInstance["processStepNumber"] + 1;

                            Console.WriteLine("STEP " + ClientOrServerInstance["processStepNumber"] + ": ***EXPENSE STORAGE***  SUCCESSFULLY retrieved ***ADVERTISING*** LOCAL DATASET for request " + storedRequestName);
                        }

                        #endregion

                        storedProcessCheckPointHit = false;
                    }
                }
                catch
                {
                    #region EDGE CASE - USE developer logger

                    if (storedDeveloperMode)
                    {
                        ClientOrServerInstance["processStepNumber"] = (int)ClientOrServerInstance["processStepNumber"] + 1;

                        Console.WriteLine("STEP " + this.ClientOrServerInstance["processStepNumber"] + ": ***LEAKY PIPE*** SEARCHING and FINDING an ADVERTISING dataset for request " + storedRequestName + " could not be completed successfully. Please check ***AppSettings.json*** for APP_SETTING_CONVERSION_MODE_XXX value. - LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0 - > Action_8_ProcessCRUD");
                    }

                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw new Exception("STEP " + this.ClientOrServerInstance["processStepNumber"] + ": ***LEAKY PIPE*** SEARCHING and FINDING an ADVERTISING dataset for request " + storedRequestName + " could not be completed successfully. Please check ***AppSettings.json*** for APP_SETTING_CONVERSION_MODE_XXX value. - LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0 - > Action_8_ProcessCRUD");

                    #endregion
                }

                #endregion

                #region 12-2 - Programming

                try
                {
                    switch (storedRequestName.ToUpper())
                    {
                        case "DIRECTOR_OF_PROGRAMMING_CHAPTER_12_2_PAGE_5_REQUEST_SENSOR_1_0":
                            storedStorylineDetails = stored_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0;

                            switch (storedRequestNameParameters.ToUpper())
                            {
                                case "DIRECTOR_OF_PROGRAMMING_CHAPTER_12_2_PAGE_5_REQUEST_SENSOR_1_0-P1_0":
                                    storedStorylineDetails_Parameters = stored_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0_P1_0;
                                    break;
                            }

                            break;
                    }

                    if (storedProcessCheckPointHit == true)
                    {
                        #region EDGE CASE - USE developer logger

                        if (storedDeveloperMode)
                        {
                            ClientOrServerInstance["processStepNumber"] = (int)ClientOrServerInstance["processStepNumber"] + 1;

                            Console.WriteLine("STEP " + ClientOrServerInstance["processStepNumber"] + ": ***EXPENSE STORAGE***  SUCCESSFULLY retrieved ***PROGRAMMING*** LOCAL DATASET for request " + storedActionName + " -> " + storedRequestName);
                        }

                        #endregion

                        storedProcessCheckPointHit = false;
                    }
                }
                catch
                {
                    #region EDGE CASE - USE developer logger

                    if (storedDeveloperMode)
                    {
                        ClientOrServerInstance["processStepNumber"] = (int)ClientOrServerInstance["processStepNumber"] + 1;

                        Console.WriteLine("STEP " + this.ClientOrServerInstance["processStepNumber"] + ": ***LEAKY PIPE*** SEARCHING and FINDING a PROGRAMMING dataset for request " + storedRequestName + " could not be completed successfully. Please check ***AppSettings.json*** for APP_SETTING_CONVERSION_MODE_XXX value. - LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0 - > Action_8_ProcessCRUD");
                    }

                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw new Exception("STEP " + this.ClientOrServerInstance["processStepNumber"] + ": ***LEAKY PIPE*** SEARCHING and FINDING a PROGRAMMING dataset for request " + storedRequestName + " could not be completed successfully. Please check ***AppSettings.json*** for APP_SETTING_CONVERSION_MODE_XXX value. - LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0 - > Action_8_ProcessCRUD");

                    #endregion
                }

                #endregion

                #region 12-3 - Web Development

                try
                {
                    switch (storedRequestName.ToUpper())
                    {
                        case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_1_READHOMESCREENFORALL_HANDLER_1_0":
                            storedStorylineDetails = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0;

                            switch (storedRequestNameParameters.ToUpper())
                            {
                                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_1_READHOMESCREENFORALL_HANDLER_1_0-P1_0":
                                    storedStorylineDetails_Parameters = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0_P1_0;
                                    break;
                            }

                            storedProcessCheckPointHit = true;

                            break;

                        case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_2_READPRESALESSCREENFORALL_HANDLER_1_0":
                            storedStorylineDetails = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0;

                            switch (storedRequestNameParameters.ToUpper())
                            {
                                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_2_READPRESALESSCREENFORALL_HANDLER_1_0-P1_0":
                                    storedStorylineDetails_Parameters = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0_P1_0;
                                    break;
                            }

                            break;

                        case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_3_READOPTINSCREENFORALL_HANDLER_1_0":
                            storedStorylineDetails = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0;

                            switch (storedRequestNameParameters.ToUpper())
                            {
                                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_3_READOPTINSCREENFORALL_HANDLER_1_0-P1_0":
                                    storedStorylineDetails_Parameters = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0_P1_0;
                                    break;
                            }

                            storedProcessCheckPointHit = true;

                            break;

                        case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_4_READTHANKYOUSCREENFORALL_HANDLER_1_0":
                            storedStorylineDetails = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0;

                            switch (storedRequestNameParameters.ToUpper())
                            {
                                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_4_READTHANKYOUSCREENFORALL_HANDLER_1_0-P1_0":
                                    storedStorylineDetails_Parameters = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0_P1_0;
                                    break;
                            }

                            storedProcessCheckPointHit = true;

                            break;

                        case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_5_READSALESSCREENFORALL_HANDLER_1_0":
                            storedStorylineDetails = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0;

                            switch (storedRequestNameParameters.ToUpper())
                            {
                                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_5_READSALESSCREENFORALL_HANDLER_1_0-P1_0":
                                    storedStorylineDetails_Parameters = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0_P1_0;
                                    break;
                            }

                            storedProcessCheckPointHit = true;

                            break;

                        case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_6_READORDERFORMSCREENFORALL_HANDLER_1_0":
                            storedStorylineDetails = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0;

                            switch (storedRequestNameParameters.ToUpper())
                            {
                                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_6_READORDERFORMSCREENFORALL_HANDLER_1_0-P1_0":
                                    storedStorylineDetails_Parameters = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0_P1_0;
                                    break;
                            }

                            storedProcessCheckPointHit = true;

                            break;

                        case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_7_READOTOSCREENFORALL_HANDLER_1_0":
                            storedStorylineDetails = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0;

                            switch (storedRequestNameParameters.ToUpper())
                            {
                                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_7_READOTOSCREENFORALL_HANDLER_1_0-P1_0":
                                    storedStorylineDetails_Parameters = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0_P1_0;
                                    break;
                            }

                            storedProcessCheckPointHit = true;

                            break;

                        case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_8_READWEBINARSCREENFORALL_HANDLER_1_0":
                            storedStorylineDetails = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0;

                            switch (storedRequestNameParameters.ToUpper())
                            {
                                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_8_READWEBINARSCREENFORALL_HANDLER_1_0-P1_0":
                                    storedStorylineDetails_Parameters = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0_P1_0;
                                    break;
                            }

                            storedProcessCheckPointHit = true;

                            break;

                        case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_9_READMEMBERSHIPSCREENFORALL_HANDLER_1_0":
                            storedStorylineDetails = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0;

                            switch (storedRequestNameParameters.ToUpper())
                            {
                                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_8_READWEBINARSCREENFORALL_HANDLER_1_0-P1_0":
                                    storedStorylineDetails_Parameters = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0_P1_0;
                                    break;
                            }

                            storedProcessCheckPointHit = true;

                            break;

                        case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_10_READAFFILIATESCREENFORALL_HANDLER_1_0":
                            storedStorylineDetails = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0;

                            switch (storedRequestNameParameters.ToUpper())
                            {
                                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_10_READAFFILIATESCREENFORALL_HANDLER_1_0-P1_0":
                                    storedStorylineDetails_Parameters = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0_P1_0;
                                    break;
                            }

                            storedProcessCheckPointHit = true;

                            break;

                        case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_11_READOTHERSCREENFORALL_HANDLER_1_0":
                            storedStorylineDetails = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0;

                            switch (storedRequestNameParameters.ToUpper())
                            {
                                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_11_READOTHERSCREENFORALL_HANDLER_1_0-P1_0":
                                    storedStorylineDetails_Parameters = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0_P1_0;
                                    break;
                            }

                            storedProcessCheckPointHit = true;

                            break;

                        case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_12_READADVANCEDSCREENFORALL_HANDLER_1_0":
                            storedStorylineDetails = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0;

                            switch (storedRequestNameParameters.ToUpper())
                            {
                                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_12_READADVANCEDSCREENFORALL_HANDLER_1_0-P1_0":
                                    storedStorylineDetails_Parameters = stored_Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0_P1_0;
                                    break;
                            }

                            storedProcessCheckPointHit = true;

                            break;

                        case "EXPERIENCE_THE_HEAR_OFTHEAPISERVER_MESSAGE_12_3_1_0":
                            storedStorylineDetails = stored_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0;

                            switch (storedRequestNameParameters.ToUpper())
                            {
                                case "EXPERIENCE_THE_HEAR_OFTHEAPISERVER_MESSAGE_12_3_1_0-P1_0":
                                    storedStorylineDetails_Parameters = stored_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0_P1_0;
                                    break;
                            }

                            storedProcessCheckPointHit = true;

                            break;

                    }

                    if (storedProcessCheckPointHit == true)
                    {
                        #region EDGE CASE - USE developer logger

                        if (storedDeveloperMode)
                        {
                            ClientOrServerInstance["processStepNumber"] = (int)ClientOrServerInstance["processStepNumber"] + 1;

                            Console.WriteLine("STEP " + ClientOrServerInstance["processStepNumber"] + ": ***EXPENSE STORAGE***  SUCCESSFULLY retrieved ***WEB DEVELOPMENT*** LOCAL DATASET for request " + storedActionName + " -> " + storedRequestName);
                        }

                        #endregion

                        storedProcessCheckPointHit = false;
                    }
                }
                catch
                {
                    #region EDGE CASE - USE developer logger

                    if (storedDeveloperMode)
                    {
                        ClientOrServerInstance["processStepNumber"] = (int)ClientOrServerInstance["processStepNumber"] + 1;

                        Console.WriteLine("STEP " + this.ClientOrServerInstance["processStepNumber"] + ": ***LEAKY PIPE*** SEARCHING and FINDING a WEB DEVELOPMENT dataset for request " + storedRequestName + " could not be completed successfully. Please check ***AppSettings.json*** for APP_SETTING_CONVERSION_MODE_XXX value. - LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0 - > Action_8_ProcessCRUD");
                    }

                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw new Exception("STEP " + this.ClientOrServerInstance["processStepNumber"] + ": ***LEAKY PIPE*** SEARCHING and FINDING a WEB DEVELOPMENT dataset for request " + storedRequestName + " could not be completed successfully. Please check ***AppSettings.json*** for APP_SETTING_CONVERSION_MODE_XXX value. - LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0 - > Action_8_ProcessCRUD");

                    #endregion
                }

                #endregion

                #region 12-5 - Security

                try
                {
                    switch (storedRequestName.ToUpper())
                    {
                        case "DIRECTOR_OF_SECURITY_CHAPTER_12_5_PAGE_1_READAUTHENTICATIONFORALL_HANDLER_1_0":
                            storedStorylineDetails = stored_Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0;

                            switch (storedRequestNameParameters.ToUpper())
                            {
                                case "DIRECTOR_OF_SECURITY_CHAPTER_12_5_PAGE_1_READAUTHENTICATIONFORALL_HANDLER_1_0-P1_0":
                                    storedStorylineDetails_Parameters = stored_Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0_P1_0;
                                    break;
                            }

                            storedProcessCheckPointHit = true;

                            break;
                    }

                    if (storedProcessCheckPointHit == true)
                    {
                        #region EDGE CASE - USE developer logger

                        if (storedDeveloperMode)
                        {
                            ClientOrServerInstance["processStepNumber"] = (int)ClientOrServerInstance["processStepNumber"] + 1;

                            Console.WriteLine("STEP " + ClientOrServerInstance["processStepNumber"] + ": ***EXPENSE STORAGE***  SUCCESSFULLY retrieved ***SECURITY*** LOCAL DATASET for request " + storedActionName + " -> " + storedRequestName);
                        }

                        #endregion

                        storedProcessCheckPointHit = false;
                    }
                }
                catch
                {
                    #region EDGE CASE - USE developer logger

                    if (storedDeveloperMode)
                    {
                        ClientOrServerInstance["processStepNumber"] = (int)ClientOrServerInstance["processStepNumber"] + 1;

                        Console.WriteLine("STEP " + ClientOrServerInstance["processStepNumber"] + ": ***LEAKY PIPE*** SEARCHING and FINDING a SECURITY dataset for request " + storedRequestName + " could not be completed successfully. Please check ***AppSettings.json*** for APP_SETTING_CONVERSION_MODE_XXX value. - LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0 - > Action_8_ProcessCRUD");
                    }

                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw new Exception("STEP " + ClientOrServerInstance["processStepNumber"] + ": ***LEAKY PIPE*** SEARCHING and FINDING a SECURITY dataset for request " + storedRequestName + " could not be completed successfully. Please check ***AppSettings.json*** for APP_SETTING_CONVERSION_MODE_XXX value. - LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0 - > Action_8_ProcessCRUD");

                    #endregion
                }

                #endregion

                #endregion
            }
            else
            {
                #region EDGE CASE - USE developer logger

                if (storedDeveloperMode)
                {
                    ClientOrServerInstance["processStepNumber"] = (int)ClientOrServerInstance["processStepNumber"] + 1;

                   Console.WriteLine("STEP " + ClientOrServerInstance["processStepNumber"] + ": ***LEAKY PIPE*** SEARCHING and FINDING a dataset could not be completed successfully because NO REQUEST NAME was inputted. Please check ***AppSettings.json*** for APP_SETTING_CONVERSION_MODE_XXX value. - LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0 - > Action_8_ProcessCRUD");
                }

                #endregion

                #region EDGE CASE - USE exception handler

                throw new Exception("STEP " + ClientOrServerInstance["processStepNumber"] + ": ***LEAKY PIPE*** SEARCHING and FINDING a dataset could not be completed successfully because NO REQUEST NAME was inputted. Please check ***AppSettings.json*** for APP_SETTING_CONVERSION_MODE_XXX value. - LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0 - > Action_8_ProcessCRUD");

                #endregion
            }

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN process response

            #region IDEAL CASE - USE baseDI dataset

            //storedStorylineDetailsFiltered = Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0.Step_X_X_Framework_Store_JSONSettingsIntoMemory_1_0(storedStorylineDetails, "", _storedBaseDIPlaceHolderValue, true);

            storedStorylineDetailsFilteredResult.Add("storedStorylineDetails", storedStorylineDetails);
            storedStorylineDetailsFilteredResult.Add("storedStorylineDetailsFiltered", storedStorylineDetailsFiltered.SingleOrDefault());
            storedStorylineDetailsFilteredResult.Add("storedStorylineDetails_Parameters", storedStorylineDetails_Parameters);

            return Task.FromResult<JObject>(storedStorylineDetailsFilteredResult);

            #endregion

            #endregion

            #endregion
        }

        #endregion

        #region NOT APART OF THE REQUEST PIPELINE AT THIS TIME

        public override Task<JObject> Action_10_End_Process()
        {
            throw new NotImplementedException();
        }

        public override Task<JObject> Action_1_Begin_Process()
        {
            throw new NotImplementedException();
        }

        public override Task<JObject> Action_2_Validate_Process()
        {
            throw new NotImplementedException();
        }

        public override Task<JObject> Action_3_Process_StoryAuthor()
        {
            throw new NotImplementedException();
        }

        public override Task<JObject> Action_4_Process_StoryCharacters()
        {
            throw new NotImplementedException();
        }

        public override Task<JObject> Action_5_Process_StorySetting()
        {
            throw new NotImplementedException();
        }

        public override Task<JObject> Action_6_Process_StoryExperiences()
        {
            throw new NotImplementedException();
        }

        public override Task<JObject> Action_7_Process_StoryResources()
        {
            throw new NotImplementedException();
        }

        public override Task<JObject> Action_9_Verify_Process()
        {
            throw new NotImplementedException();
        }

        #endregion

        #endregion
    }
}
