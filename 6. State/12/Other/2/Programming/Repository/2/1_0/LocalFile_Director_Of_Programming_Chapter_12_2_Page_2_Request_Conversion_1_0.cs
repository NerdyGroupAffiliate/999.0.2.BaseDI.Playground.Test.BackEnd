using BaseDI.BackEnd.Script.Programming.Abstract_1;
using BaseDI.BackEnd.Script.Programming.Extensions_1;
using BaseDI.BackEnd.Script.Programming.Repository_1;
using BaseDI.BackEnd.Script.Programming_1;

using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace BaseDI.BackEnd.State.Programming_2
{
    public class LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0 : aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>>
    {
        #region 1. Assign

        //A. Variable Declaration
        private string _baseDIPlaceHolderValue = "{BASEDICUSTOMOPTION}";
        private JObject _storylineDetails = null;

        private JObject state_Director_Of_Advertising_Chapter_1_1_Page_2_CreateWhereaPersonBecameAwareOfTopic_Handler_1_0;
        private JObject state_Director_Of_Advertising_Chapter_1_1_Page_2_CreateWhereaPersonBecameAwareOfTopic_Handler_1_0_p1_4_1_1;
        private JObject state_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0;
        private JObject state_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0_P1_0;
        private JObject state_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0;
        private JObject state_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0_P1_0;
        private JObject state_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0;
        private JObject state_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0_P1_0;
        private JObject state_Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0;
        private JObject state_Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0_P1_0;
        private JObject state_Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0;
        private JObject state_Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0_P1_0;
        private JObject state_Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0;
        private JObject state_Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0_P1_0;
        private JObject state_Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0;
        private JObject state_Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0_P1_0;
        private JObject state_Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0;
        private JObject state_Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0_P1_0;
        private JObject state_Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0;
        private JObject state_Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0;
        private JObject state_Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0_P1_0;
        private JObject state_Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0_P1_0;
        private JObject state_Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0;
        private JObject state_Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0_P1_0;
        private JObject state_Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0;
        private JObject state_Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0_P1_0;
        private JObject state_Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0;
        private JObject state_Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0_P1_0;
        private JObject state_Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0;
        private JObject state_Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0_P1_0;
        private JObject state_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0;
        private JObject state_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0_P1_0;

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0(JObject storylineDetails)
        {
            #region 1. Assign            

            _storylineDetails = storylineDetails;

            state_Director_Of_Advertising_Chapter_1_1_Page_2_CreateWhereaPersonBecameAwareOfTopic_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.QuickStart.Templates\2. Data Movement\ARM Templates\1\Generate Brand Awareness\1\Advertising\Template\2\1_0\state_Director_Of_Advertising_Chapter_1_1_Page_2_CreateWhereaPersonBecameAwareOfTopic_Handler_1_0.json"));
            state_Director_Of_Advertising_Chapter_1_1_Page_2_CreateWhereaPersonBecameAwareOfTopic_Handler_1_0_p1_4_1_1 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.QuickStart.Templates\2. Data Movement\ARM Templates\1\Generate Brand Awareness\1\Advertising\Template\2\1_0\state_Director_Of_Advertising_Chapter_1_1_Page_2_CreateWhereaPersonBecameAwareOfTopic_Handler_1_0-P1_4_1_1.json"));
            
            state_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\2\Programming\Template\5\1_0\state_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0.json"));
            state_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\2\Programming\Template\5\1_0\state_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0-P1_0.json"));
            
            state_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\1\1_0\State_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0.json"));
            state_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\1\1_0\State_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0-P1_0.json"));
            state_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\2\1_0\State_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0.json"));
            state_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\2\1_0\State_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0-P1_0.json"));
            state_Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\3\1_0\State_Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0.json"));
            state_Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\3\1_0\State_Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0-P1_0.json"));
            state_Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\4\1_0\State_Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0.json"));
            state_Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\4\1_0\State_Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0-P1_0.json"));
            state_Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\5\1_0\State_Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0.json"));
            state_Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\5\1_0\State_Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0-P1_0.json"));
            state_Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\6\1_0\State_Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0.json"));
            state_Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\6\1_0\State_Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0-P1_0.json"));
            state_Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\7\1_0\State_Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0.json"));
            state_Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\7\1_0\State_Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0-P1_0.json"));
            state_Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\8\1_0\State_Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0.json"));
            state_Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\8\1_0\State_Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0-P1_0.json"));
            state_Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\9\1_0\State_Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0.json"));
            state_Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\9\1_0\State_Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0-P1_0.json"));
            state_Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\10\1_0\State_Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0.json"));
            state_Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\10\1_0\State_Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0-P1_0.json"));
            state_Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\11\1_0\State_Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0.json"));
            state_Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\11\1_0\State_Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0-P1_0.json"));
            state_Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\12\1_0\State_Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0.json"));
            state_Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\12\1_0\State_Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0-P1_0.json"));
            
            state_Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\5\Security\Template\1\1_0\State_Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0.json"));
            state_Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\5\Security\Template\1\1_0\State_Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0-P1_0.json"));
            
            state_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\13\1_0\State_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.json"));
            state_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0_P1_0 = JObject.Parse(File.ReadAllText(@"C:\Programming\999.0.3.BaseDI.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\3\Web Development\Template\13\1_0\State_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0-P1_0.json"));

            #endregion

            #region 2. Action

            #endregion

            #region 3. Observe

            #endregion
        }

        #endregion

        #region 3. Set

        //A. Default state of this part of the storyline

        #endregion

        #region 4. Action

        //A. Story in motion (DO SOMETHING)
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

        public override Task<JObject> Action_8_Process_CRUD()
        {
            throw new NotImplementedException();
        }

        public override Task<JObject> Action_9_Verify_Process()
        {
            //STORE META DATA
            string requestName= "";
            string requestNameParameters= "";

            JObject metaData = new JObject();

            JObject storylineDetails = new JObject();
            List<JToken> storylineDetailsFiltered;
            JObject storylineDetails_Parameters = new JObject();

            if (ExtraData.KeyValuePairs.GetValueOrDefault("RequestToProcess") != null)
            {
                requestName = this.ExtraData.KeyValuePairs.GetValueOrDefault("RequestToProcess").ToString();
                requestNameParameters = this.ExtraData.KeyValuePairs.GetValueOrDefault("RequestToProcessParameters").ToString();

                switch (requestName.ToUpper())
                {
                    case "DIRECTOR_OF_ADVERTISING_CHAPTER_1_1_PAGE_2_CREATEWHEREAPERSONBECAMEAWAREOFTOPIC_HANDLER_1_0":
                        storylineDetails = state_Director_Of_Advertising_Chapter_1_1_Page_2_CreateWhereaPersonBecameAwareOfTopic_Handler_1_0;

                        switch (requestNameParameters.ToUpper())
                        {
                            case "DIRECTOR_OF_ADVERTISING_CHAPTER_1_1_PAGE_2_CREATEWHEREAPERSONBECAMEAWAREOFTOPIC_HANDLER_1_0-P1_4_1_1":
                                storylineDetails_Parameters = state_Director_Of_Advertising_Chapter_1_1_Page_2_CreateWhereaPersonBecameAwareOfTopic_Handler_1_0_p1_4_1_1;
                                break;
                        }

                        break;
                    case "DIRECTOR_OF_PROGRAMMING_CHAPTER_12_2_PAGE_5_REQUEST_SENSOR_1_0":
                        storylineDetails = state_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0;

                        switch (requestNameParameters.ToUpper())
                        {
                            case "DIRECTOR_OF_PROGRAMMING_CHAPTER_12_2_PAGE_5_REQUEST_SENSOR_1_0-P1_0":
                                storylineDetails_Parameters = state_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0_P1_0;
                                break;
                        }

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_1_READHOMESCREENFORALL_HANDLER_1_0":
                        storylineDetails = state_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0;

                        switch (requestNameParameters.ToUpper())
                        {
                            case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_1_READHOMESCREENFORALL_HANDLER_1_0-P1_0":
                                storylineDetails_Parameters = state_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0_P1_0;
                                break;
                        }

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_2_READPRESALESSCREENFORALL_HANDLER_1_0":
                        storylineDetails = state_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0;

                        switch (requestNameParameters.ToUpper())
                        {
                            case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_2_READPRESALESSCREENFORALL_HANDLER_1_0-P1_0":
                                storylineDetails_Parameters = state_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0_P1_0;
                                break;
                        }

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_3_READOPTINSCREENFORALL_HANDLER_1_0":
                        storylineDetails = state_Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0;

                        switch (requestNameParameters.ToUpper())
                        {
                            case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_3_READOPTINSCREENFORALL_HANDLER_1_0-P1_0":
                                storylineDetails_Parameters = state_Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0_P1_0;
                                break;
                        }

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_4_READTHANKYOUSCREENFORALL_HANDLER_1_0":
                        storylineDetails = state_Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0;

                        switch (requestNameParameters.ToUpper())
                        {
                            case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_4_READTHANKYOUSCREENFORALL_HANDLER_1_0-P1_0":
                                storylineDetails_Parameters = state_Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0_P1_0;
                                break;
                        }

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_5_READSALESSCREENFORALL_HANDLER_1_0":
                        storylineDetails = state_Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0;

                        switch (requestNameParameters.ToUpper())
                        {
                            case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_5_READSALESSCREENFORALL_HANDLER_1_0-P1_0":
                                storylineDetails_Parameters = state_Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0_P1_0;
                                break;
                        }

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_6_READORDERFORMSCREENFORALL_HANDLER_1_0":
                        storylineDetails = state_Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0;

                        switch (requestNameParameters.ToUpper())
                        {
                            case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_6_READORDERFORMSCREENFORALL_HANDLER_1_0-P1_0":
                                storylineDetails_Parameters = state_Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0_P1_0;
                                break;
                        }

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_7_READOTOSCREENFORALL_HANDLER_1_0":
                        storylineDetails = state_Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0;

                        switch (requestNameParameters.ToUpper())
                        {
                            case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_7_READOTOSCREENFORALL_HANDLER_1_0-P1_0":
                                storylineDetails_Parameters = state_Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0_P1_0;
                                break;
                        }

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_8_READWEBINARSCREENFORALL_HANDLER_1_0":
                        storylineDetails = state_Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0;

                        switch (requestNameParameters.ToUpper())
                        {
                            case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_8_READWEBINARSCREENFORALL_HANDLER_1_0-P1_0":
                                storylineDetails_Parameters = state_Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0_P1_0;
                                break;
                        }

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_9_READMEMBERSHIPSCREENFORALL_HANDLER_1_0":
                        storylineDetails = state_Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0;

                        switch (requestNameParameters.ToUpper())
                        {
                            case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_8_READWEBINARSCREENFORALL_HANDLER_1_0-P1_0":
                                storylineDetails_Parameters = state_Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0_P1_0;
                                break;
                        }

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_10_READAFFILIATESCREENFORALL_HANDLER_1_0":
                        storylineDetails = state_Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0;

                        switch (requestNameParameters.ToUpper())
                        {
                            case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_10_READAFFILIATESCREENFORALL_HANDLER_1_0-P1_0":
                                storylineDetails_Parameters = state_Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0_P1_0;
                                break;
                        }

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_11_READOTHERSCREENFORALL_HANDLER_1_0":
                        storylineDetails = state_Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0;

                        switch (requestNameParameters.ToUpper())
                        {
                            case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_11_READOTHERSCREENFORALL_HANDLER_1_0-P1_0":
                                storylineDetails_Parameters = state_Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0_P1_0;
                                break;
                        }

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_12_READADVANCEDSCREENFORALL_HANDLER_1_0":
                        storylineDetails = state_Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0;

                        switch (requestNameParameters.ToUpper())
                        {
                            case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_12_READADVANCEDSCREENFORALL_HANDLER_1_0-P1_0":
                                storylineDetails_Parameters = state_Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0_P1_0;
                                break;
                        }

                        break;

                    case "DIRECTOR_OF_SECURITY_CHAPTER_12_5_PAGE_1_READAUTHENTICATIONFORALL_HANDLER_1_0":
                        storylineDetails = state_Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0;

                        switch (requestNameParameters.ToUpper())
                        {
                            case "DIRECTOR_OF_SECURITY_CHAPTER_12_5_PAGE_1_READAUTHENTICATIONFORALL_HANDLER_1_0-P1_0":
                                storylineDetails_Parameters = state_Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0_P1_0;
                                break;
                        }

                        break;

                    case "EXPERIENCE_THE_HEAR_OFTHEAPISERVER_MESSAGE_12_3_1_0":
                        storylineDetails = state_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0;

                        switch (requestNameParameters.ToUpper())
                        {
                            case "EXPERIENCE_THE_HEAR_OFTHEAPISERVER_MESSAGE_12_3_1_0-P1_0":
                                storylineDetails_Parameters = state_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0_P1_0;
                                break;
                        }

                        break;

                    default:
                        Console.WriteLine("Request Name Parameter Not found!");
                        break;
                }
            }

            storylineDetailsFiltered = Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0.Step_X_X_Custom_Store_JSONSettingsIntoMemory_1_0(storylineDetails, "", _baseDIPlaceHolderValue, true);

            metaData.Add("StorylineDetails", storylineDetails);
            metaData.Add("StorylineDetailsFiltered", storylineDetailsFiltered.SingleOrDefault());
            metaData.Add("StorylineDetails_Parameters", storylineDetails_Parameters);

            return Task.FromResult<JObject>(metaData);
        }

        #endregion
    }
}
