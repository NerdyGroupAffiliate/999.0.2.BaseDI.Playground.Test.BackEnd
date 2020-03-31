﻿/////////////////////////////////////////////////////////////////////////////////////
//0. System Dependencies
/////////////////////////////////////////////////////////////////////////////////////
using BaseDI.Playground.Test.Backend.Script.Programming.Abstract_1;
using BaseDI.Playground.Test.Backend.Script.Programming_1;
using BaseDI.Playground.Test.Backend.Script.Programming.Poco_1;
using BaseDI.Playground.Test.Backend.Script.Programming.Extensions_1;

using Newtonsoft.Json.Linq;

using System.Globalization;
using System.Collections.Generic;

using System;
using System.Threading.Tasks;
/////////////////////////////////////////////////////////////////////////////////////

//1. Generate Brand Awareness
using BaseDI.Playground.Test.Backend.Story.Advertising_1;

//2. Generate Brand Trust
using BaseDI.Playground.Test.Backend.Story.Blogging_1;
using BaseDI.Playground.Test.Backend.Story.Podcasting_2;
using BaseDI.Playground.Test.Backend.Story.Social_Media_3;

//3. Generate Optin
using BaseDI.Playground.Test.Backend.Story.Listing_Building_1;

//4. Sell Low Ticket Offer
using BaseDI.Playground.Test.Backend.Story.Supplements_1;

//5. Sell High Ticket Offer
using BaseDI.Playground.Test.Backend.Story.Coaching_1;
using BaseDI.Playground.Test.Backend.Story.Consulting_2;
using BaseDI.Playground.Test.Backend.Story.Personal_Training_3;

//6. Sell Subscription Offer
using BaseDI.Playground.Test.Backend.Story.Software_1;

//7. Sell Commission Offer
using BaseDI.Playground.Test.Backend.Story.Affiliate_Revenue_1;

//8. Account Gain or Loss
using BaseDI.Playground.Test.Backend.Story.Accounting_1;

//9. Improve Customer Service
using BaseDI.Playground.Test.Backend.Story.Customer_Service_1;

//10. Perform Manual Task
using BaseDI.Playground.Test.Backend.Story.Productivity_1;

//11. Automate Manual Task
using BaseDI.Playground.Test.Backend.Story.Risk_Management_1;

//12. Other
using BaseDI.Playground.Test.Backend.Story.Careers_Employment_1;
using BaseDI.Playground.Test.Backend.Story.Web_Development_3;
using BaseDI.Playground.Test.Backend.Director.Programming_2;
using BaseDI.Playground.Test.Backend.Director.Programming_1;

namespace BaseDI.Playground.Test.Backend.Story.Programming_1
{
    public class ProgrammingStudioAdministrator_MasterLeader_12_2_1_0<StoryRequest> : aClass_Programming_ScriptMasterLeader_12_2_1_0, IContract_Programming_Storyline_12_2_1_0<aClass_Programming_ScriptRoutable_12_2_1_0> where StoryRequest : aClass_Programming_ScriptRoutable_12_2_1_0, new()
    {
        #region 1. Assign

        //A. Variable Declaration 

        public Exception Mistake { get; set; }

        private ExtraData_12_2_1_0 _extraData = null;

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public ProgrammingStudioAdministrator_MasterLeader_12_2_1_0()
        {
            HandleStoryDefaults();
        }

        #endregion

        #region 3. Set

        //A. Default state
        private void HandleStoryDefaults()
        {
            _extraData = new ExtraData_12_2_1_0();
            _extraData.MasterLeader = this;
        }

        #endregion

        #region 4. Action

        //A. Story in motion (DO SOMETHING)

        public aClass_Programming_ScriptRoutable_12_2_1_0 SetupStoryline(Dictionary<string, object> client, JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData = null, string requestToResolveName = "")
        {
            #region 1. Assign  

            StoryRequest requestInspector = new StoryRequest();

            object director_Of_Programming_Chapter_12_2_Page_1_Request_Handler = null;

            if (extraData != null)
                _extraData = extraData;

            #endregion

            #region 2. Ready

            Use_DesignPattern_Builder_Chapter_12_2_1_0<StoryRequest> directorOrExperienceResolveBuilder = new Use_DesignPattern_Builder_Chapter_12_2_1_0<StoryRequest>(client, storylineDetails, storylineDetails_Parameters, requestInspector, _extraData, requestToResolveName);

            #endregion

            #region 3. Set

            #endregion

            #region 4. Action 

            try
            {
                #region FIND REQUEST HANDLER

                director_Of_Programming_Chapter_12_2_Page_1_Request_Handler = directorOrExperienceResolveBuilder.Action();

                if (requestInspector.GetType() != director_Of_Programming_Chapter_12_2_Page_1_Request_Handler.GetType())
                {
                    #region REQUEST HANDLER FOUND

                    var entryPoint = (aClass_Programming_ScriptRoutable_12_2_1_0)director_Of_Programming_Chapter_12_2_Page_1_Request_Handler;

                    requestInspector.Client = client;

                    requestInspector.EntryPoint = entryPoint;

                    requestInspector.MasterLeader = entryPoint.MasterLeader;

                    requestInspector.StorylineDetails = entryPoint.StorylineDetails;
                    requestInspector.StorylineDetails_Parameters = entryPoint.StorylineDetails_Parameters;

                    director_Of_Programming_Chapter_12_2_Page_1_Request_Handler = requestInspector;

                    #endregion
                }

                #endregion
            }
            catch (Exception storyLineMistake)
            {
                #region CHECK FOR MISTAKES

                //Inherited_Create_Experience_Movement_TriggerMasterController(this, Enumeration_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.RunMistake, storylineDetails, storylineDetails_Parameters, storyLineMistake, _extraData);

                throw storyLineMistake;

                #endregion
            }

            #region RETURN REQUEST HANDLER

            return (aClass_Programming_ScriptRoutable_12_2_1_0)director_Of_Programming_Chapter_12_2_Page_1_Request_Handler;

            #endregion  

            #endregion          
        }

        #endregion
    }

    #region 5. Action Script

    //A. Prepare for Action (SETUP WHAT WILL HAPPEN)

    internal class Use_DesignPattern_Builder_Chapter_12_2_1_0<StoryRequest>
    {
        #region 1. Assign

        internal Dictionary<string, object> _client;

        internal JObject _storylineDetails;
        internal JObject _storylineDetails_Parameters;

        internal StoryRequest _requestToResolveObject;
        internal string _requestToResolveString;

        internal ExtraData_12_2_1_0 _extraData;

        #endregion

        #region 2. Ready

        internal Use_DesignPattern_Builder_Chapter_12_2_1_0(Dictionary<string, object> client, JObject storylineDetails, JObject storylineDetails_Parameters, StoryRequest requestToResolveObject, ExtraData_12_2_1_0 extraData = null, string requestToResolveString = "")
        {
            _client = client;

            _extraData = extraData;

            _requestToResolveObject = requestToResolveObject;
            _requestToResolveString = requestToResolveString;

            _storylineDetails = storylineDetails;
            _storylineDetails_Parameters = storylineDetails_Parameters;
        }

        #endregion

        #region 3. Set

        //A. Default state of this part of the storyline

        #endregion

        #region 4. Action

        internal object Action()
        {
            #region BEGIN HANDLER SEARCH

            var builder = new Implement_DesignPattern_Builder_Chapter_12_2_1_0<StoryRequest>(_client, _storylineDetails, _storylineDetails_Parameters, _requestToResolveObject, _extraData, _requestToResolveString);

            builder.Action_1_Begin_Process();
            object resolvedRequest = builder.Action_10_End_Process();

            #endregion

            return resolvedRequest;
        }

        #endregion
    }

    #endregion

    #region 6. Action Implementation

    //A. Story in motion (DO SOMETHING) ACTING

    internal class Implement_DesignPattern_Builder_Chapter_12_2_1_0<StoryRequest> : aClass_Programming_ScriptAction_12_2_1_0<object>
    {
        #region 1. Assign

        internal Dictionary<string, object> _client;

        private JObject _storylineDetails;
        private JObject _storylineDetails_Parameters;

        private StoryRequest _requestToResolveObject;
        private string _requestToResolveString;

        private ExtraData_12_2_1_0 _extraData;

        private string _requestName = "";

        #endregion

        #region 2. Ready

        internal Implement_DesignPattern_Builder_Chapter_12_2_1_0(Dictionary<string, object> client, JObject storylineDetails, JObject storylineDetails_Parameters, StoryRequest requestToResolveObject, ExtraData_12_2_1_0 extraData = null, string requestToResolveString = "")
        {
            _client = client;

            _extraData = extraData;

            _requestToResolveObject = requestToResolveObject;
            _requestToResolveString = requestToResolveString;

            _storylineDetails = storylineDetails;
            _storylineDetails_Parameters = storylineDetails_Parameters;
        }

        #endregion

        #region 3. Set

        //A. Default state of this part of the storyline

        #endregion

        #region 4. Action

        public override object Action_1_Begin_Process()
        {
            #region INSPECT REQUEST NAME

            if (string.IsNullOrEmpty(_requestToResolveString))
            {
                _requestName = _requestToResolveObject.GetType().Name;
            }
            else
            {
                _requestName = _requestToResolveString;
            }

            #endregion

            return _requestToResolveObject;
        }

        public override object Action_10_End_Process()
        {
            #region DECIDE DIRECTOR REQUEST

            if (_requestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_"))
            {
                Implement_DesignPattern_Factory_Director_12_2_1_0<StoryRequest> pickDirector = new Implement_DesignPattern_Factory_Director_12_2_1_0<StoryRequest>(_client, _storylineDetails, _storylineDetails_Parameters, _requestToResolveObject, _extraData, _requestName);

                return pickDirector.Action_1_Begin_Process();
            }

            #endregion

            //OR

            #region DECIDE EXPERIENCE REQUEST

            if (_requestName.ToUpper(CultureInfo.CurrentCulture).Contains("EXPERIENCE_THE_"))
            {
                Implement_DesignPattern_Factory_Experience_12_2_1_0<StoryRequest> pickExperience = new Implement_DesignPattern_Factory_Experience_12_2_1_0<StoryRequest>(_client, _storylineDetails, _storylineDetails_Parameters, _requestToResolveObject, _extraData, _requestName);

                return pickExperience.Action_1_Begin_Process();
            }

            #endregion

            return default(StoryRequest);
        }

        #region NOT APART OF THE REQUEST PIPELINE AT THIS TIME

        public override object Action_2_Validate_Process()
        {
            throw new NotImplementedException();
        }

        public override object Action_3_Process_StoryAuthor()
        {
            throw new NotImplementedException();
        }

        public override object Action_4_Process_StoryCharacters()
        {
            throw new NotImplementedException();
        }

        public override object Action_5_Process_StorySetting()
        {
            throw new NotImplementedException();
        }

        public override object Action_6_Process_StoryExperiences()
        {
            throw new NotImplementedException();
        }

        public override object Action_7_Process_StoryResources()
        {
            throw new NotImplementedException();
        }

        public override object Action_8_Process_CRUD()
        {
            throw new NotImplementedException();
        }

        public override object Action_9_Verify_Process()
        {
            throw new NotImplementedException();
        }


        #endregion

        #endregion
    }

    #region RETURN DIRECTOR HANDLER

    internal class Implement_DesignPattern_Factory_Director_12_2_1_0<StoryRequest> : aClass_Programming_ScriptAction_12_2_1_0<object>
    {
        #region 1. Assign

        private Dictionary<string, object> _client;

        private JObject _storylineDetails;
        private JObject _storylineDetails_Parameters;

        private StoryRequest _requestToResolveObject;
        private string _requestToResolveString;

        private ExtraData_12_2_1_0 _extraData;

        private string _requestName = "";

        private Implement_DesignPattern_Factory_Master_12_2_1_0<StoryRequest> _centralizedMaster;

        #endregion

        #region 2. Ready

        internal Implement_DesignPattern_Factory_Director_12_2_1_0(Dictionary<string, object> client, JObject storylineDetails, JObject storylineDetails_Parameters, StoryRequest requestToResolveObject, ExtraData_12_2_1_0 extraData = null, string requestToResolveString = "")
        {
            _centralizedMaster = new Implement_DesignPattern_Factory_Master_12_2_1_0<StoryRequest>(_client, _storylineDetails, _storylineDetails_Parameters, _requestToResolveObject, _extraData, _requestToResolveString);

            _client = client;

            _extraData = extraData;

            _requestToResolveObject = requestToResolveObject;
            _requestToResolveString = requestToResolveString;

            _storylineDetails = storylineDetails;
            _storylineDetails_Parameters = storylineDetails_Parameters;
        }

        #endregion

        #region 3. Set

        //A. Default state of this part of the storyline

        #endregion

        #region 4. Action

        public override object Action_1_Begin_Process()
        {
            #region RETURN DIRECTOR HANDLER

            if (_requestToResolveString.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_PROGRAMMING"))
            {
                #region 12. Other

                ProgrammingFactoryImplementer_NicheMaster_12_2_1_0<StoryRequest> createDirector = new ProgrammingFactoryImplementer_NicheMaster_12_2_1_0<StoryRequest>(_extraData);

                createDirector.APILocationLocalDotNetCore = "http://localhost:8912/api/basedi/io/programming";
                createDirector.APILocationLocalNodeJS = "http://localhost:9912/api/basedi/io/programming";

                createDirector.APILocationRemote = "https://api.basedi.io/programming";

                return createDirector.Action(_client, _centralizedMaster, _requestToResolveObject, _storylineDetails, _storylineDetails_Parameters, _requestToResolveString);

                #endregion
            }
            else
            {
                //This means our director of programming wanted us to play this storyline.
                #region 1. Generate Brand Awareness Storylines

                if (_requestToResolveString.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_ADVERTISING"))
                {
                    AdvertisingFactoryImplementer_NicheMaster_1_1_1_0<StoryRequest> createDirector = new AdvertisingFactoryImplementer_NicheMaster_1_1_1_0<StoryRequest>(_extraData);

                    createDirector.APILocationLocalDotNetCore = "http://localhost:8991/api/basedi/io/advertising";
                    createDirector.APILocationLocalNodeJS = "http://localhost:9991/api/basedi/io/advertising";

                    createDirector.APILocationRemote = "https://api.basedi.io/advertising";

                    return createDirector.Action(_client, _centralizedMaster, _requestToResolveObject, _storylineDetails, _storylineDetails_Parameters, _requestName);
                }

                #endregion

                #region 2. Generate Brand Trust Storylines

                if (_requestToResolveString.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_BLOGGING"))
                {
                    BloggingFactoryImplementer_NicheMaster_2_1_1_0<StoryRequest> createDirector = new BloggingFactoryImplementer_NicheMaster_2_1_1_0<StoryRequest>(_extraData);

                    createDirector.APILocationLocalDotNetCore = "http://localhost:8992/api/basedi/io/blogging";
                    createDirector.APILocationLocalNodeJS = "http://localhost:9992/api/basedi/io/blogging";

                    createDirector.APILocationRemote = "https://api.basedi.io/blogging";

                    return createDirector.Action(_client, _centralizedMaster, _requestToResolveObject, _storylineDetails, _storylineDetails_Parameters, _requestName);
                }

                if (_requestToResolveString.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_PODCASTING"))
                {
                    PodcastingFactoryImplementer_NicheMaster_2_2_1_0<StoryRequest> createDirector = new PodcastingFactoryImplementer_NicheMaster_2_2_1_0<StoryRequest>(_extraData);

                    createDirector.APILocationLocalDotNetCore = "http://localhost:8992/api/basedi/io/podcasting";
                    createDirector.APILocationLocalNodeJS = "http://localhost:9992/api/basedi/io/podcasting";

                    createDirector.APILocationRemote = "https://api.basedi.io/podcasting";

                    return createDirector.Action(_client, _centralizedMaster, _requestToResolveObject, _storylineDetails, _storylineDetails_Parameters, _requestName);
                }

                if (_requestToResolveString.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_SOCIALMEDIA"))
                {
                    SocialMediaFactoryImplementer_NicheMaster_2_3_1_0<StoryRequest> createDirector = new SocialMediaFactoryImplementer_NicheMaster_2_3_1_0<StoryRequest>(_extraData);

                    createDirector.APILocationLocalDotNetCore = "http://localhost:8992/api/basedi/io/socialmedia";
                    createDirector.APILocationLocalNodeJS = "http://localhost:9992/api/basedi/io/socialmedia";

                    createDirector.APILocationRemote = "https://api.basedi.io/socialmedia";

                    return createDirector.Action(_client, _centralizedMaster, _requestToResolveObject, _storylineDetails, _storylineDetails_Parameters, _requestName);
                }

                #endregion

                #region 3. Generate Optin Storylines

                if (_requestToResolveString.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_LISTBUILDING"))
                {
                    ListBuildingFactoryImplementer_NicheMaster_3_1_1_0<StoryRequest> createDirector = new ListBuildingFactoryImplementer_NicheMaster_3_1_1_0<StoryRequest>(_extraData);

                    createDirector.APILocationLocalDotNetCore = "http://localhost:8993/api/basedi/io/listbuilding";
                    createDirector.APILocationLocalNodeJS = "http://localhost:9993/api/basedi/io/listbuilding";

                    createDirector.APILocationRemote = "https://api.basedi.io/listbuilding";

                    return createDirector.Action(_client, _centralizedMaster, _requestToResolveObject, _storylineDetails, _storylineDetails_Parameters, _requestName);
                }

                #endregion

                #region 4. Sell Low Ticket Offer Storylines

                if (_requestToResolveString.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_SUPPLEMENTS"))
                {
                    SupplementsFactoryImplementer_NicheMaster_4_1_1_0<StoryRequest> createDirector = new SupplementsFactoryImplementer_NicheMaster_4_1_1_0<StoryRequest>(_extraData);

                    createDirector.APILocationLocalDotNetCore = "http://localhost:8994/api/basedi/io/supplements";
                    createDirector.APILocationLocalNodeJS = "http://localhost:9994/api/basedi/io/supplements";

                    createDirector.APILocationRemote = "https://api.basedi.io/supplements";

                    return createDirector.Action(_client, _centralizedMaster, _requestToResolveObject, _storylineDetails, _storylineDetails_Parameters, _requestName);
                }

                #endregion

                #region 5. Sell High Ticket Offer Storylines

                if (_requestToResolveString.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_COACHING"))
                {
                    CoachingFactoryImplementer_NicheMaster_5_1_1_0<StoryRequest> createDirector = new CoachingFactoryImplementer_NicheMaster_5_1_1_0<StoryRequest>(_extraData);

                    createDirector.APILocationLocalDotNetCore = "http://localhost:8995/api/basedi/io/coaching";
                    createDirector.APILocationLocalNodeJS = "http://localhost:9995/api/basedi/io/coaching";

                    createDirector.APILocationRemote = "https://api.basedi.io/coaching";

                    return createDirector.Action(_client, _centralizedMaster, _requestToResolveObject, _storylineDetails, _storylineDetails_Parameters, _requestName);
                }

                if (_requestToResolveString.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_CONSULTING"))
                {
                    ConsultingFactoryImplementer_NicheMaster_5_2_1_0<StoryRequest> createDirector = new ConsultingFactoryImplementer_NicheMaster_5_2_1_0<StoryRequest>(_extraData);

                    createDirector.APILocationLocalDotNetCore = "http://localhost:8995/api/basedi/io/consulting";
                    createDirector.APILocationLocalNodeJS = "http://localhost:9995/api/basedi/io/consulting";

                    createDirector.APILocationRemote = "https://api.basedi.io/consulting";

                    return createDirector.Action(_client, _centralizedMaster, _requestToResolveObject, _storylineDetails, _storylineDetails_Parameters, _requestName);
                }

                if (_requestToResolveString.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_PERSONALTRAINING"))
                {
                    PersonalTrainingFactoryImplementer_NicheMaster_5_3_1_0<StoryRequest> createDirector = new PersonalTrainingFactoryImplementer_NicheMaster_5_3_1_0<StoryRequest>(_extraData);

                    createDirector.APILocationLocalDotNetCore = "http://localhost:8995/api/basedi/io/personaltraining";
                    createDirector.APILocationLocalNodeJS = "http://localhost:9995/api/basedi/io/personaltraining";

                    createDirector.APILocationRemote = "https://api.basedi.io/personaltraining";

                    return createDirector.Action(_client, _centralizedMaster, _requestToResolveObject, _storylineDetails, _storylineDetails_Parameters, _requestName);
                }

                #endregion

                #region 6. Sell Subscription Offer Storylines

                if (_requestToResolveString.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_SOFTWARE"))
                {
                    SoftwareFactoryImplementer_NicheMaster_6_1_1_0<StoryRequest> createDirector = new SoftwareFactoryImplementer_NicheMaster_6_1_1_0<StoryRequest>(_extraData);

                    createDirector.APILocationLocalDotNetCore = "http://localhost:8996/api/basedi/io/software";
                    createDirector.APILocationLocalNodeJS = "http://localhost:9996/api/basedi/io/software";

                    createDirector.APILocationRemote = "https://api.basedi.io/software";

                    return createDirector.Action(_client, _centralizedMaster, _requestToResolveObject, _storylineDetails, _storylineDetails_Parameters, _requestName);
                }

                #endregion

                #region 7. Sell Commission Offer Storylines

                if (_requestToResolveString.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_AFFILIATEREVENUE"))
                {
                    AffiliateRevenueFactoryImplementer_NicheMaster_7_1_1_0<StoryRequest> createDirector = new AffiliateRevenueFactoryImplementer_NicheMaster_7_1_1_0<StoryRequest>(_extraData);

                    createDirector.APILocationLocalDotNetCore = "http://localhost:8997/api/basedi/io/affiliaterevenue";
                    createDirector.APILocationLocalNodeJS = "http://localhost:9997/api/basedi/io/affiliaterevenue";

                    createDirector.APILocationRemote = "https://api.basedi.io/affiliaterevenue";

                    return createDirector.Action(_client, _centralizedMaster, _requestToResolveObject, _storylineDetails, _storylineDetails_Parameters, _requestName);
                }

                #endregion

                #region 8. Account Loss or Gain Storylines

                if (_requestToResolveString.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_ACCOUNTING"))
                {
                    AccountingFactoryImplementer_NicheMaster_8_1_1_0<StoryRequest> createDirector = new AccountingFactoryImplementer_NicheMaster_8_1_1_0<StoryRequest>(_extraData);

                    createDirector.APILocationLocalDotNetCore = "http://localhost:8998/api/basedi/io/accounting";
                    createDirector.APILocationLocalNodeJS = "http://localhost:9998/api/basedi/io/accounting";

                    createDirector.APILocationRemote = "https://api.basedi.io/accounting";

                    return createDirector.Action(_client, _centralizedMaster, _requestToResolveObject, _storylineDetails, _storylineDetails_Parameters, _requestName);
                }

                #endregion

                #region 9. Customer Service Storylines

                if (_requestToResolveString.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_CUSTOMERSERVICE"))
                {
                    CustomerServiceFactoryImplementer_NicheMaster_9_1_1_0<StoryRequest> createDirector = new CustomerServiceFactoryImplementer_NicheMaster_9_1_1_0<StoryRequest>(_extraData);

                    createDirector.APILocationLocalDotNetCore = "http://localhost:8999/api/basedi/io/customerservice";
                    createDirector.APILocationLocalNodeJS = "http://localhost:9999/api/basedi/io/customerservice";

                    createDirector.APILocationRemote = "https://api.basedi.io/customerservice";

                    return createDirector.Action(_client, _centralizedMaster, _requestToResolveObject, _storylineDetails, _storylineDetails_Parameters, _requestName);
                }

                #endregion

                #region 10. Perform Manual Task Storylines

                if (_requestToResolveString.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_PRODUCTIVITY"))
                {
                    ProductivityFactoryImplementer_NicheMaster_10_1_1_0<StoryRequest> createDirector = new ProductivityFactoryImplementer_NicheMaster_10_1_1_0<StoryRequest>(_extraData);

                    createDirector.APILocationLocalDotNetCore = "http://localhost:8910/api/basedi/io/productivity";
                    createDirector.APILocationLocalNodeJS = "http://localhost:9910/api/basedi/io/productivity";

                    createDirector.APILocationRemote = "https://api.basedi.io/productivity";

                    return createDirector.Action(_client, _centralizedMaster, _requestToResolveObject, _storylineDetails, _storylineDetails_Parameters, _requestName);
                }

                #endregion

                #region 11. Automate Manual Task Storylines

                if (_requestToResolveString.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_RISKMANAGEMENT"))
                {
                    RiskManagementFactoryTester_NicheMaster_11_1_1_0<StoryRequest> createDirector = new RiskManagementFactoryTester_NicheMaster_11_1_1_0<StoryRequest>(_extraData);

                    createDirector.APILocationLocalDotNetCore = "http://localhost:8911/api/basedi/io/riskmanagement";
                    createDirector.APILocationLocalNodeJS = "http://localhost:9911/api/basedi/io/riskmanagement";

                    createDirector.APILocationRemote = "https://api.basedi.io/riskmanagement";

                    return createDirector.Action(_client, _centralizedMaster, _requestToResolveObject, _storylineDetails, _storylineDetails_Parameters, _requestName);
                }

                #endregion

                #region 12. Other Storylines

                if (_requestToResolveString.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_CAREERSEMPLOYMENT"))
                {
                    CareersEmploymentFactoryImplementer_NicheMaster_12_1_1_0<StoryRequest> createDirector = new CareersEmploymentFactoryImplementer_NicheMaster_12_1_1_0<StoryRequest>(_extraData);

                    createDirector.APILocationLocalDotNetCore = "http://localhost:8912/api/basedi/io/careersemployment";
                    createDirector.APILocationLocalNodeJS = "http://localhost:9912/api/basedi/io/careersemployment";

                    createDirector.APILocationRemote = "https://api.basedi.io/careersemployment";

                    return createDirector.Action(_client, _centralizedMaster, _requestToResolveObject, _storylineDetails, _storylineDetails_Parameters, _requestName);
                }

                if (_requestToResolveString.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_WEBDEVELOPMENT"))
                {
                    WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0<StoryRequest> createDirector = new WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0<StoryRequest>(_extraData);

                    createDirector.APILocationLocalDotNetCore = "http://localhost:8912/api/basedi/io/webdevelopment";
                    createDirector.APILocationLocalNodeJS = "http://localhost:9912/api/basedi/io/webdevelopment";

                    createDirector.APILocationRemote = "https://api.basedi.io/webdevelopment";

                    return createDirector.Action(_client, _centralizedMaster, _requestToResolveObject, _storylineDetails, _storylineDetails_Parameters, _requestName);
                }

                #endregion
            }

            #endregion

            return default(StoryRequest);
        }

        #region NOT APART OF THE REQUEST PIPELINE AT THIS TIME

        public override object Action_10_End_Process()
        {
            return null;
        }

        public override object Action_2_Validate_Process()
        {
            return null;
        }

        public override object Action_3_Process_StoryAuthor()
        {
            return null;
        }

        public override object Action_4_Process_StoryCharacters()
        {
            return null;
        }

        public override object Action_5_Process_StorySetting()
        {
            return null;
        }

        public override object Action_6_Process_StoryExperiences()
        {
            return null;
        }

        public override object Action_7_Process_StoryResources()
        {
            return null;
        }

        public override object Action_8_Process_CRUD()
        {
            return null;
        }

        public override object Action_9_Verify_Process()
        {
            return null;
        }

        #endregion

        #endregion
    }


    #endregion

    #region RETURN EXPERIENCE HANDLER

    internal class Implement_DesignPattern_Factory_Experience_12_2_1_0<StoryRequest> : aClass_Programming_ScriptAction_12_2_1_0<object>
    {
        #region 1. Assign

        private Dictionary<string, object> _client;

        private JObject _storylineDetails;
        private JObject _storylineDetails_Parameters;

        private StoryRequest _requestToResolveObject;

        private ExtraData_12_2_1_0 _extraData;

        private Implement_DesignPattern_Factory_Master_12_2_1_0<StoryRequest> _centralizedMaster;

        private string _requestName = "";

        #endregion

        #region 2. Ready

        internal Implement_DesignPattern_Factory_Experience_12_2_1_0(Dictionary<string, object> client, JObject storylineDetails, JObject storylineDetails_Parameters, StoryRequest requestToResolveObject, ExtraData_12_2_1_0 extraData = null, string requestToResolveString = "")
        {
            _centralizedMaster = new Implement_DesignPattern_Factory_Master_12_2_1_0<StoryRequest>(client, storylineDetails, storylineDetails_Parameters, requestToResolveObject, extraData, requestToResolveString);

            _extraData = extraData;

            _requestToResolveObject = requestToResolveObject;
            _requestName = requestToResolveString;

            _storylineDetails = storylineDetails;
            _storylineDetails_Parameters = storylineDetails_Parameters;
        }

        #endregion

        #region 3. Set

        //A. Default state of this part of the storyline

        #endregion

        #region 4. Action

        public override object Action_1_Begin_Process()
        {
            #region RETURN EXPERIENCE HANDLER

            //This means our director of programming wanted us to play this experience.
            #region 1. Generate Brand Awareness Storylines

            #endregion

            #region 2. Generate Brand Trust Storylines

            if (_requestName.ToUpper(CultureInfo.CurrentCulture).Contains("EXPERIENCE_THE_MOVEMENT_TOFACEBOOKPAGE_DATATRANSFER"))
            {
                SocialMediaFactoryImplementer_NicheMaster_2_3_1_0<StoryRequest> createExperience = new SocialMediaFactoryImplementer_NicheMaster_2_3_1_0<StoryRequest>(_extraData);

                createExperience.APILocationLocalDotNetCore = "http://localhost:8992/api/basedi/io/socialmedia";
                createExperience.APILocationLocalNodeJS = "http://localhost:9992/api/basedi/io/socialmedia";

                createExperience.APILocationRemote = "https://api.basedi.io/socialmedia";

                return createExperience.Action(_client, _centralizedMaster, _requestToResolveObject, _storylineDetails, _storylineDetails_Parameters, _requestName);
            }

            #endregion

            #region 3. Generate Optin


            #endregion

            #region 4. Sell Low Ticket Offer

            #endregion

            #region 5. Sell High Ticket Offer

            #endregion

            #region 6. Sell Subscription Offer

            #endregion

            #region 7. Sell Commission Offer

            #endregion

            #region 8. Account Loss or Gain

            #endregion

            #region 9. Customer Service

            #endregion

            #region 10. Perform Manual Task

            #endregion

            #region 11. Automate Manual Task

            #endregion

            #region 12. Other

            if (_requestName.ToUpper(CultureInfo.CurrentCulture).Contains("EXPERIENCE_THE_HEAR_OFTHEAPISERVER_MESSAGE"))
            {
                #region 12. Other

                ProgrammingFactoryImplementer_NicheMaster_12_2_1_0<StoryRequest> createExperience = new ProgrammingFactoryImplementer_NicheMaster_12_2_1_0<StoryRequest>(_extraData);

                createExperience.APILocationLocalDotNetCore = "http://localhost:8912/api/basedi/io/programming";
                createExperience.APILocationLocalNodeJS = "http://localhost:9912/api/basedi/io/programming";

                createExperience.APILocationRemote = "https://api.basedi.io/programming";

                return createExperience.Action(_client, _centralizedMaster, _requestToResolveObject, _storylineDetails, _storylineDetails_Parameters, _requestName);

                #endregion
            }

            #endregion

            #endregion

            return default(StoryRequest);
        }

        #region NOT APART OF THE REQUEST PIPELINE AT THIS TIME

        public override object Action_10_End_Process()
        {
            throw new NotImplementedException();
        }

        public override object Action_2_Validate_Process()
        {
            throw new NotImplementedException();
        }

        public override object Action_3_Process_StoryAuthor()
        {
            throw new NotImplementedException();
        }

        public override object Action_4_Process_StoryCharacters()
        {
            throw new NotImplementedException();
        }

        public override object Action_5_Process_StorySetting()
        {
            throw new NotImplementedException();
        }

        public override object Action_6_Process_StoryExperiences()
        {
            throw new NotImplementedException();
        }

        public override object Action_7_Process_StoryResources()
        {
            throw new NotImplementedException();
        }

        public override object Action_8_Process_CRUD()
        {
            throw new NotImplementedException();
        }

        public override object Action_9_Verify_Process()
        {
            throw new NotImplementedException();
        }

        #endregion

        #endregion
    }

    #endregion

    #region RETURN CENTRAILZED MASTER

    internal class Implement_DesignPattern_Factory_Master_12_2_1_0<StoryRequest> : aClass_Programming_ScriptAction_12_2_1_0<object>
    {
        #region 1. Assign

        private Dictionary<string, object> _client;

        private JObject _storylineDetails;
        private JObject _storylineDetails_Parameters;

        private StoryRequest _requestToResolveObject;

        private ExtraData_12_2_1_0 _extraData;

        private string _requestName = "";

        #endregion

        #region 2. Ready

        internal Implement_DesignPattern_Factory_Master_12_2_1_0(Dictionary<string, object> client, JObject storylineDetails, JObject storylineDetails_Parameters, StoryRequest requestToResolveObject, ExtraData_12_2_1_0 extraData = null, string requestToResolveString = "")
        {
            _client = client;

            _extraData = extraData;

            _requestToResolveObject = requestToResolveObject;
            _requestName = requestToResolveString;

            _storylineDetails = storylineDetails;
            _storylineDetails_Parameters = storylineDetails_Parameters;
        }

        #endregion

        #region 3. Set

        //A. Default state of this part of the storyline

        #endregion

        #region 4. Action

        #region EXECUTE LOGIC INSTUCTIONS

        public override object Action_1_Begin_Process()
        {
            JObject armTemplateJSONOutput = null;

            armTemplateJSONOutput = new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0<Director_Of_Programming_Chapter_12_2_Page_1_Request_Handler_1_0>()
              .SetupStoryline(_client, _storylineDetails, _storylineDetails_Parameters, _extraData, "Director_Of_Programming_Chapter_12_2_Page_2_Request_Manager_1_0")
              .Action().Result;

            return armTemplateJSONOutput;
        }

        #endregion

        #region NOT APART OF THE REQUEST PIPELINE AT THIS TIME

        public override object Action_10_End_Process()
        {
            throw new NotImplementedException();
        }

        public override object Action_2_Validate_Process()
        {
            throw new NotImplementedException();
        }

        public override object Action_3_Process_StoryAuthor()
        {
            throw new NotImplementedException();
        }

        public override object Action_4_Process_StoryCharacters()
        {
            throw new NotImplementedException();
        }

        public override object Action_5_Process_StorySetting()
        {
            throw new NotImplementedException();
        }

        public override object Action_6_Process_StoryExperiences()
        {
            throw new NotImplementedException();
        }

        public override object Action_7_Process_StoryResources()
        {
            throw new NotImplementedException();
        }

        public override object Action_8_Process_CRUD()
        {
            throw new NotImplementedException();
        }

        public override object Action_9_Verify_Process()
        {
            throw new NotImplementedException();
        }

        #endregion

        #endregion
    }

    #endregion

    #endregion
}