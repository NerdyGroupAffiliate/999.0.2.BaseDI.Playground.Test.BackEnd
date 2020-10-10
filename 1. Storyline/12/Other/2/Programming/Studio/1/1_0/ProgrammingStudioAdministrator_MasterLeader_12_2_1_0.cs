//3rd Party
using Newtonsoft.Json.Linq;

using System;
using System.Collections.Generic;
using System.Globalization;

/////////////////////////////////////////////////////////////////////////////////////
//0. BaseDI Global Dependencies
/////////////////////////////////////////////////////////////////////////////////////
using BaseDI.BackEnd.Director.Programming_1;
using BaseDI.BackEnd.Script.Programming.Abstract_1;
using BaseDI.BackEnd.Script.Programming.Poco_1;
using BaseDI.BackEnd.Script.Programming_1;
/////////////////////////////////////////////////////////////////////////////////////

//1. Generate Brand Awareness
using BaseDI.BackEnd.Story.Advertising_1;

//2. Generate Brand Trust
using BaseDI.BackEnd.Story.Blogging_1;

//3. Generate Optin
using BaseDI.BackEnd.Story.Listing_Building_1;
using BaseDI.BackEnd.Story.Personal_Training_3;
using BaseDI.BackEnd.Story.Podcasting_2;

//4. Sell Low Ticket Offer
using BaseDI.BackEnd.Story.Supplements_1;

//5. Sell High Ticket Offer
using BaseDI.BackEnd.Story.Coaching_1;
using BaseDI.BackEnd.Story.Consulting_2;

//6. Sell Subscription Offer
using BaseDI.BackEnd.Story.Software_1;

//7. Sell Commission Offer
using BaseDI.BackEnd.Story.Affiliate_Revenue_1;

//8. Account Gain or Loss
using BaseDI.BackEnd.Story.Accounting_1;

//9. Improve Customer Service
using BaseDI.BackEnd.Story.Customer_Service_1;

//10. Perform Manual Task
using BaseDI.BackEnd.Story.Productivity_1;

//11. Automate Manual Task
using BaseDI.BackEnd.Story.Risk_Management_1;
using BaseDI.BackEnd.Story.Social_Media_3;

//12. Other
using BaseDI.BackEnd.Story.Careers_Employment_1;
using BaseDI.BackEnd.Story.Web_Development_1;
using BaseDI.BackEnd.Story.Programming_1;
using BaseDI.BackEnd.Story.Security_1;
using BaseDI.BackEnd.Story.CMS_1;

namespace BaseDI.BackEnd.Story.Programming_1
{
    public class ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 : aClass_Programming_ScriptMasterLeader_12_2_1_0
    {
        #region 1. Assign

        //A. Variable Declaration 

        public Exception Mistake { get; set; }

        private ExtraData_12_2_1_0 _extraData = null;

        private aClass_Programming_ScriptRoutable_12_2_1_0 _requestInspector = null;

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(aClass_Programming_ScriptRoutable_12_2_1_0 requestType)
        {
            //1. Assign
            _requestInspector = requestType;

            //2. Action
            HandleStoryDefaults();

            //3. Observe
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

        public aClass_Programming_ScriptRoutable_12_2_1_0 SetupStoryline(Dictionary<string, object> client, JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData = null, string controlHandlerName = "", string requestToProcess = "", string requestToProcessParameters = "")
        {
            #region 1. Assign  

            object director_Of_Programming_Chapter_12_2_Page_1_Request_Handler = null;

            if (extraData != null)
                _extraData = extraData;

            #endregion

            #region 2. Ready

            Use_DesignPattern_Builder_Chapter_12_2_1_0 directorOrExperienceResolveBuilder = new Use_DesignPattern_Builder_Chapter_12_2_1_0(client, storylineDetails, storylineDetails_Parameters, _requestInspector, _extraData, controlHandlerName, requestToProcess, requestToProcessParameters);

            #endregion

            #region 3. Set

            #endregion

            #region 4. Action 

            try
            {
                #region FIND REQUEST HANDLER

                director_Of_Programming_Chapter_12_2_Page_1_Request_Handler = directorOrExperienceResolveBuilder.Action();

                if (controlHandlerName != "")
                {
                    #region REQUEST HANDLER FOUND

                    var controller = (aClass_Programming_ScriptRoutable_12_2_1_0)director_Of_Programming_Chapter_12_2_Page_1_Request_Handler;

                    controller.RequestID = controlHandlerName;
                    controller.Client = client;

                    controller.ExtraData = _extraData;

                    controller.EntryPoint = _requestInspector;

                    director_Of_Programming_Chapter_12_2_Page_1_Request_Handler = controller;

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

    internal class Use_DesignPattern_Builder_Chapter_12_2_1_0
    {
        #region 1. Assign

        internal Dictionary<string, object> _client;

        internal JObject _storylineDetails;
        internal JObject _storylineDetails_Parameters;
        
        internal string _requestToProcess;
        internal string _requestToProcessParameters;

        internal aClass_Programming_ScriptRoutable_12_2_1_0 _requestToResolveObject;
        internal string _requestToResolveString;

        internal ExtraData_12_2_1_0 _extraData;

        #endregion

        #region 2. Ready

        internal Use_DesignPattern_Builder_Chapter_12_2_1_0(Dictionary<string, object> client, JObject storylineDetails, JObject storylineDetails_Parameters, aClass_Programming_ScriptRoutable_12_2_1_0 requestToResolveObject, ExtraData_12_2_1_0 extraData = null, string requestToResolveString = "", string requestToProcess = "", string requestToProcessParameters = "")
        {
            _client = client;

            _storylineDetails = storylineDetails;
            _storylineDetails_Parameters = storylineDetails_Parameters;

            _requestToProcess = requestToProcess;
            _requestToProcessParameters = requestToProcessParameters;

            _requestToResolveObject = requestToResolveObject;
            _requestToResolveString = requestToResolveString;

            _extraData = extraData;
        }

        #endregion

        #region 3. Set

        //A. Default state of this part of the storyline

        #endregion

        #region 4. Action

        internal object Action()
        {
            #region BEGIN HANDLER SEARCH

            var builder = new Implement_DesignPattern_Builder_Chapter_12_2_1_0(_client, _storylineDetails, _storylineDetails_Parameters, _requestToResolveObject, _extraData, _requestToResolveString, _requestToProcess, _requestToProcessParameters);

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

    internal class Implement_DesignPattern_Builder_Chapter_12_2_1_0 : aClass_Programming_ScriptAction_12_2_1_0<object>
    {
        #region 1. Assign

        internal Dictionary<string, object> _client;

        private JObject _storylineDetails;
        private JObject _storylineDetails_Parameters;

        private string _requestToProcess = "";
        private string _requestToProcessParameters = "";
        private aClass_Programming_ScriptRoutable_12_2_1_0 _requestToResolveObject;
        private string _requestToResolveString;

        private ExtraData_12_2_1_0 _extraData;

        private string _requestName = "";

        #endregion

        #region 2. Ready

        internal Implement_DesignPattern_Builder_Chapter_12_2_1_0(Dictionary<string, object> client, JObject storylineDetails, JObject storylineDetails_Parameters, aClass_Programming_ScriptRoutable_12_2_1_0 requestToResolveObject, ExtraData_12_2_1_0 extraData = null, string requestToResolveString = "", string requestToProcess = "", string requestToProcessParameters = "")
        {
            _client = client;

            _storylineDetails = storylineDetails;
            _storylineDetails_Parameters = storylineDetails_Parameters;

            _requestToProcess = requestToProcess;
            _requestToProcessParameters = requestToProcessParameters;

            _requestToResolveObject = requestToResolveObject;
            _requestToResolveString = requestToResolveString;

            _extraData = extraData;
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
            #region SCHEDULE THE REQUEST

            #region DECIDE DIRECTOR REQUEST

            if (_requestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_"))
            {
                Implement_DesignPattern_Factory_Director_12_2_1_0 pickDirector = new Implement_DesignPattern_Factory_Director_12_2_1_0(_client, _storylineDetails, _storylineDetails_Parameters, _requestToResolveObject, _extraData, _requestName, _requestToProcess, _requestToProcessParameters);

                return pickDirector.Action_1_Begin_Process();
            }

            #endregion

            //OR

            #region DECIDE EXPERIENCE REQUEST

            if (_requestName.ToUpper(CultureInfo.CurrentCulture).Contains("EXPERIENCE_THE_"))
            {
                Implement_DesignPattern_Factory_Experience_12_2_1_0 pickExperience = new Implement_DesignPattern_Factory_Experience_12_2_1_0(_client, _storylineDetails, _storylineDetails_Parameters, _requestToResolveObject, _extraData, _requestName, _requestToProcess, _requestToProcessParameters);

                return pickExperience.Action_1_Begin_Process();
            }

            #endregion

            #endregion

            return _storylineDetails;
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

    internal class Implement_DesignPattern_Factory_Director_12_2_1_0 : aClass_Programming_ScriptAction_12_2_1_0<object>
    {
        #region 1. Assign

        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _centralizedStorer;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _centralizedDisturber;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _centralizedSensor;

        private Dictionary<string, object> _client;

        private JObject _storylineDetails;
        private JObject _storylineDetails_Parameters;

        private aClass_Programming_ScriptRoutable_12_2_1_0 _requestToResolveObject;
        private string _requestToResolveString;

        private ExtraData_12_2_1_0 _extraData;

        private string _requestToProcess = "";
        private string _requestToProcessParameters = "";
        private string _requestName = "";

        #endregion

        #region 2. Ready

        internal Implement_DesignPattern_Factory_Director_12_2_1_0(Dictionary<string, object> client, JObject storylineDetails, JObject storylineDetails_Parameters, aClass_Programming_ScriptRoutable_12_2_1_0 requestToResolveObject, ExtraData_12_2_1_0 extraData = null, string requestToResolveString = "", string requestToProcess = "", string requestToProcessParameters = "")
        {
            _client = client;

            if (_centralizedDisturber == null)
            {
                _centralizedDisturber = new Implement_DesignPattern_Factory_Disturber_12_2_1_0(client, storylineDetails, storylineDetails_Parameters, requestToResolveObject, extraData, requestToResolveString, requestToProcess, requestToProcessParameters);
            }

            if (_centralizedStorer == null)
            {
                _centralizedStorer = new Implement_DesignPattern_Factory_Storer_12_2_1_0(client, storylineDetails, storylineDetails_Parameters, requestToResolveObject, extraData, requestToResolveString, requestToProcess, requestToProcessParameters);
            }

            if (_centralizedSensor == null)
            {
                _centralizedSensor = new Implement_DesignPattern_Factory_Sensor_12_2_1_0(client, storylineDetails, storylineDetails_Parameters, requestToResolveObject, extraData, requestToResolveString, requestToProcess, requestToProcessParameters);
            }

            _storylineDetails = storylineDetails;
            _storylineDetails_Parameters = storylineDetails_Parameters;

            _requestToResolveObject = requestToResolveObject;
            _requestToResolveString = requestToResolveString;
            _requestName = requestToResolveString;
            _requestToProcess = requestToProcess;
            _requestToProcessParameters = requestToProcessParameters;

            _extraData = extraData;
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
                
                ProgrammingFactoryImplementer_NicheMaster_12_2_1_0 createDirector = new ProgrammingFactoryImplementer_NicheMaster_12_2_1_0(_extraData);

                createDirector.APILocationLocalDotNetCore = "http://localhost:8912/storyline/basedi/io/programming";
                createDirector.APILocationLocalNodeJS = "http://localhost:9912/storyline/basedi/io/programming";

                createDirector.APILocationRemote = "https://storyline.basedi.io/programming";

                return createDirector.Action(_client, _centralizedStorer, _centralizedDisturber, _centralizedSensor, _requestToResolveObject, _storylineDetails, _storylineDetails_Parameters, _requestName, _requestToProcess, _requestToProcessParameters);

                #endregion
            }
            else
            {
                //This means our director of programming wanted us to play this storyline.
                #region 1. Generate Brand Awareness Storylines

                if (_requestToResolveString.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_ADVERTISING"))
                {
                    AdvertisingFactoryImplementer_NicheMaster_1_1_1_0 createDirector = new AdvertisingFactoryImplementer_NicheMaster_1_1_1_0(_extraData);

                    createDirector.APILocationLocalDotNetCore = "http://localhost:8991/storyline/basedi/io/advertising";
                    createDirector.APILocationLocalNodeJS = "http://localhost:9991/storyline/basedi/io/advertising";

                    createDirector.APILocationRemote = "https://storyline.basedi.io/advertising";

                    return createDirector.Action(_client, _centralizedStorer, _centralizedDisturber, _centralizedSensor, _requestToResolveObject, _storylineDetails, _storylineDetails_Parameters, _requestName, _requestToProcess, _requestToProcessParameters);
                }

                #endregion

                #region 2. Generate Brand Trust Storylines

                if (_requestToResolveString.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_BLOGGING"))
                {
                    BloggingFactoryImplementer_NicheMaster_2_1_1_0 createDirector = new BloggingFactoryImplementer_NicheMaster_2_1_1_0(_extraData);

                    createDirector.APILocationLocalDotNetCore = "http://localhost:8992/storyline/basedi/io/blogging";
                    createDirector.APILocationLocalNodeJS = "http://localhost:9992/storyline/basedi/io/blogging";

                    createDirector.APILocationRemote = "https://storyline.basedi.io/blogging";

                    return createDirector.Action(_client, _centralizedStorer, _centralizedDisturber, _centralizedSensor, _requestToResolveObject, _storylineDetails, _storylineDetails_Parameters, _requestName, _requestToProcess, _requestToProcessParameters);
                }

                if (_requestToResolveString.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_PODCASTING"))
                {
                    PodcastingFactoryImplementer_NicheMaster_2_2_1_0 createDirector = new PodcastingFactoryImplementer_NicheMaster_2_2_1_0(_extraData);

                    createDirector.APILocationLocalDotNetCore = "http://localhost:8992/storyline/basedi/io/podcasting";
                    createDirector.APILocationLocalNodeJS = "http://localhost:9992/storyline/basedi/io/podcasting";

                    createDirector.APILocationRemote = "https://storyline.basedi.io/podcasting";

                    return createDirector.Action(_client, _centralizedStorer, _centralizedDisturber, _centralizedSensor, _requestToResolveObject, _storylineDetails, _storylineDetails_Parameters, _requestName, _requestToProcess, _requestToProcessParameters);
                }

                if (_requestToResolveString.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_SOCIALMEDIA"))
                {
                    SocialMediaFactoryImplementer_NicheMaster_2_3_1_0 createDirector = new SocialMediaFactoryImplementer_NicheMaster_2_3_1_0(_extraData);

                    createDirector.APILocationLocalDotNetCore = "http://localhost:8992/storyline/basedi/io/socialmedia";
                    createDirector.APILocationLocalNodeJS = "http://localhost:9992/storyline/basedi/io/socialmedia";

                    createDirector.APILocationRemote = "https://storyline.basedi.io/socialmedia";

                    return createDirector.Action(_client, _centralizedStorer, _centralizedDisturber, _centralizedSensor, _requestToResolveObject, _storylineDetails, _storylineDetails_Parameters, _requestName, _requestToProcess, _requestToProcessParameters);
                }

                #endregion

                #region 3. Generate Optin Storylines

                if (_requestToResolveString.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_LISTBUILDING"))
                {
                    ListBuildingFactoryImplementer_NicheMaster_3_1_1_0 createDirector = new ListBuildingFactoryImplementer_NicheMaster_3_1_1_0(_extraData);

                    createDirector.APILocationLocalDotNetCore = "http://localhost:8993/storyline/basedi/io/listbuilding";
                    createDirector.APILocationLocalNodeJS = "http://localhost:9993/storyline/basedi/io/listbuilding";

                    createDirector.APILocationRemote = "https://storyline.basedi.io/listbuilding";

                    return createDirector.Action(_client, _centralizedStorer, _centralizedDisturber, _centralizedSensor, _requestToResolveObject, _storylineDetails, _storylineDetails_Parameters, _requestName, _requestToProcess, _requestToProcessParameters);
                }

                #endregion

                #region 4. Sell Low Ticket Offer Storylines

                if (_requestToResolveString.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_SUPPLEMENTS"))
                {
                    SupplementsFactoryImplementer_NicheMaster_4_1_1_0 createDirector = new SupplementsFactoryImplementer_NicheMaster_4_1_1_0(_extraData);

                    createDirector.APILocationLocalDotNetCore = "http://localhost:8994/storyline/basedi/io/supplements";
                    createDirector.APILocationLocalNodeJS = "http://localhost:9994/storyline/basedi/io/supplements";

                    createDirector.APILocationRemote = "https://storyline.basedi.io/supplements";

                    return createDirector.Action(_client, _centralizedStorer, _centralizedDisturber, _centralizedSensor, _requestToResolveObject, _storylineDetails, _storylineDetails_Parameters, _requestName, _requestToProcess, _requestToProcessParameters);
                }

                #endregion

                #region 5. Sell High Ticket Offer Storylines

                if (_requestToResolveString.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_COACHING"))
                {
                    CoachingFactoryImplementer_NicheMaster_5_1_1_0 createDirector = new CoachingFactoryImplementer_NicheMaster_5_1_1_0(_extraData);

                    createDirector.APILocationLocalDotNetCore = "http://localhost:8995/storyline/basedi/io/coaching";
                    createDirector.APILocationLocalNodeJS = "http://localhost:9995/storyline/basedi/io/coaching";

                    createDirector.APILocationRemote = "https://storyline.basedi.io/coaching";

                    return createDirector.Action(_client, _centralizedStorer, _centralizedDisturber, _centralizedSensor, _requestToResolveObject, _storylineDetails, _storylineDetails_Parameters, _requestName, _requestToProcess, _requestToProcessParameters);
                }

                if (_requestToResolveString.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_CONSULTING"))
                {
                    ConsultingFactoryImplementer_NicheMaster_5_2_1_0 createDirector = new ConsultingFactoryImplementer_NicheMaster_5_2_1_0(_extraData);

                    createDirector.APILocationLocalDotNetCore = "http://localhost:8995/storyline/basedi/io/consulting";
                    createDirector.APILocationLocalNodeJS = "http://localhost:9995/storyline/basedi/io/consulting";

                    createDirector.APILocationRemote = "https://storyline.basedi.io/consulting";

                    return createDirector.Action(_client, _centralizedStorer, _centralizedDisturber, _centralizedSensor, _requestToResolveObject, _storylineDetails, _storylineDetails_Parameters, _requestName, _requestToProcess, _requestToProcessParameters);
                }

                if (_requestToResolveString.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_PERSONALTRAINING"))
                {
                    PersonalTrainingFactoryImplementer_NicheMaster_5_3_1_0 createDirector = new PersonalTrainingFactoryImplementer_NicheMaster_5_3_1_0(_extraData);

                    createDirector.APILocationLocalDotNetCore = "http://localhost:8995/storyline/basedi/io/personaltraining";
                    createDirector.APILocationLocalNodeJS = "http://localhost:9995/storyline/basedi/io/personaltraining";

                    createDirector.APILocationRemote = "https://storyline.basedi.io/personaltraining";

                    return createDirector.Action(_client, _centralizedStorer, _centralizedDisturber, _centralizedSensor, _requestToResolveObject, _storylineDetails, _storylineDetails_Parameters, _requestName, _requestToProcess, _requestToProcessParameters);
                }

                #endregion

                #region 6. Sell Subscription Offer Storylines

                if (_requestToResolveString.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_SOFTWARE"))
                {
                    SoftwareFactoryImplementer_NicheMaster_6_1_1_0 createDirector = new SoftwareFactoryImplementer_NicheMaster_6_1_1_0(_extraData);

                    createDirector.APILocationLocalDotNetCore = "http://localhost:8996/storyline/basedi/io/software";
                    createDirector.APILocationLocalNodeJS = "http://localhost:9996/storyline/basedi/io/software";

                    createDirector.APILocationRemote = "https://storyline.basedi.io/software";

                    return createDirector.Action(_client, _centralizedStorer, _centralizedDisturber, _centralizedSensor, _requestToResolveObject, _storylineDetails, _storylineDetails_Parameters, _requestName, _requestToProcess, _requestToProcessParameters);
                }

                #endregion

                #region 7. Sell Commission Offer Storylines

                if (_requestToResolveString.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_AFFILIATEREVENUE"))
                {
                    AffiliateRevenueFactoryImplementer_NicheMaster_7_1_1_0 createDirector = new AffiliateRevenueFactoryImplementer_NicheMaster_7_1_1_0(_extraData);

                    createDirector.APILocationLocalDotNetCore = "http://localhost:8997/storyline/basedi/io/affiliaterevenue";
                    createDirector.APILocationLocalNodeJS = "http://localhost:9997/storyline/basedi/io/affiliaterevenue";

                    createDirector.APILocationRemote = "https://storyline.basedi.io/affiliaterevenue";

                    return createDirector.Action(_client, _centralizedStorer, _centralizedDisturber, _centralizedSensor, _requestToResolveObject, _storylineDetails, _storylineDetails_Parameters, _requestName, _requestToProcess, _requestToProcessParameters);
                }

                #endregion

                #region 8. Account Loss or Gain Storylines

                if (_requestToResolveString.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_ACCOUNTING"))
                {
                    AccountingFactoryImplementer_NicheMaster_8_1_1_0 createDirector = new AccountingFactoryImplementer_NicheMaster_8_1_1_0(_extraData);

                    createDirector.APILocationLocalDotNetCore = "http://localhost:8998/storyline/basedi/io/accounting";
                    createDirector.APILocationLocalNodeJS = "http://localhost:9998/storyline/basedi/io/accounting";

                    createDirector.APILocationRemote = "https://storyline.basedi.io/accounting";

                    return createDirector.Action(_client, _centralizedStorer, _centralizedDisturber, _centralizedSensor, _requestToResolveObject, _storylineDetails, _storylineDetails_Parameters, _requestName, _requestToProcess, _requestToProcessParameters);
                }

                #endregion

                #region 9. Customer Service Storylines

                if (_requestToResolveString.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_CUSTOMERSERVICE"))
                {
                    CustomerServiceFactoryImplementer_NicheMaster_9_1_1_0 createDirector = new CustomerServiceFactoryImplementer_NicheMaster_9_1_1_0(_extraData);

                    createDirector.APILocationLocalDotNetCore = "http://localhost:8999/storyline/basedi/io/customerservice";
                    createDirector.APILocationLocalNodeJS = "http://localhost:9999/storyline/basedi/io/customerservice";

                    createDirector.APILocationRemote = "https://storyline.basedi.io/customerservice";

                    return createDirector.Action(_client, _centralizedStorer, _centralizedDisturber, _centralizedSensor, _requestToResolveObject, _storylineDetails, _storylineDetails_Parameters, _requestName, _requestToProcess, _requestToProcessParameters);
                }

                #endregion

                #region 10. Perform Manual Task Storylines

                if (_requestToResolveString.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_PRODUCTIVITY"))
                {
                    ProductivityFactoryImplementer_NicheMaster_10_1_1_0 createDirector = new ProductivityFactoryImplementer_NicheMaster_10_1_1_0(_extraData);

                    createDirector.APILocationLocalDotNetCore = "http://localhost:8910/storyline/basedi/io/productivity";
                    createDirector.APILocationLocalNodeJS = "http://localhost:9910/storyline/basedi/io/productivity";

                    createDirector.APILocationRemote = "https://storyline.basedi.io/productivity";

                    return createDirector.Action(_client, _centralizedStorer, _centralizedDisturber, _centralizedSensor, _requestToResolveObject, _storylineDetails, _storylineDetails_Parameters, _requestName, _requestToProcess, _requestToProcessParameters);
                }

                #endregion

                #region 11. Automate Manual Task Storylines

                if (_requestToResolveString.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_RISKMANAGEMENT"))
                {
                    RiskManagementFactoryTester_NicheMaster_11_1_1_0 createDirector = new RiskManagementFactoryTester_NicheMaster_11_1_1_0(_extraData);

                    createDirector.APILocationLocalDotNetCore = "http://localhost:8911/storyline/basedi/io/riskmanagement";
                    createDirector.APILocationLocalNodeJS = "http://localhost:9911/storyline/basedi/io/riskmanagement";

                    createDirector.APILocationRemote = "https://storyline.basedi.io/riskmanagement";

                    return createDirector.Action(_client, _centralizedStorer, _centralizedDisturber, _centralizedSensor, _requestToResolveObject, _storylineDetails, _storylineDetails_Parameters, _requestName, _requestToProcess, _requestToProcessParameters);
                }

                #endregion

                #region 12. Other Storylines

                if (_requestToResolveString.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_CAREERSEMPLOYMENT"))
                {
                    CareersEmploymentFactoryImplementer_NicheMaster_12_1_1_0 createDirector = new CareersEmploymentFactoryImplementer_NicheMaster_12_1_1_0(_extraData);

                    createDirector.APILocationLocalDotNetCore = "http://localhost:8912/storyline/basedi/io/careersemployment";
                    createDirector.APILocationLocalNodeJS = "http://localhost:9912/storyline/basedi/io/careersemployment";

                    createDirector.APILocationRemote = "https://storyline.basedi.io/careersemployment";

                    return createDirector.Action(_client, _centralizedStorer, _centralizedDisturber, _centralizedSensor, _requestToResolveObject, _storylineDetails, _storylineDetails_Parameters, _requestName, _requestToProcess, _requestToProcessParameters);
                }

                if (_requestToResolveString.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_WEBDEVELOPMENT"))
                {
                    WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0 createDirector = new WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0(_extraData);

                    createDirector.APILocationLocalDotNetCore = "http://localhost:8912/storyline/basedi/io/webdevelopment";
                    createDirector.APILocationLocalNodeJS = "http://localhost:9912/storyline/basedi/io/webdevelopment";

                    createDirector.APILocationRemote = "https://storyline.basedi.io/webdevelopment";

                    return createDirector.Action(_client, _centralizedStorer, _centralizedDisturber, _centralizedSensor, _requestToResolveObject, _storylineDetails, _storylineDetails_Parameters, _requestName, _requestToProcess, _requestToProcessParameters);
                }

                if (_requestToResolveString.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_CMS"))
                {


                    CMSFactoryImplementer_NicheMaster_12_4_1_0 createDirector = new CMSFactoryImplementer_NicheMaster_12_4_1_0(_extraData);

                    createDirector.APILocationLocalNodeJS = "http://localhost:8912/storyline/basedi/io/cms";
                    createDirector.APILocationLocalDotNetCore = "http://localhost:9912/storyline/basedi/io/cms";

                    createDirector.APILocationRemote = "https://storyline.basedi.io/cms";

                    return createDirector.Action(_client, _centralizedStorer, _centralizedDisturber, _centralizedSensor, _requestToResolveObject, _storylineDetails, _storylineDetails_Parameters, _requestName, _requestToProcess, _requestToProcessParameters);
                }

                if (_requestToResolveString.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_SECURITY"))
                {
                    SecurityFactoryImplementer_NicheMaster_12_5_1_0 createDirector = new SecurityFactoryImplementer_NicheMaster_12_5_1_0(_extraData);

                    createDirector.APILocationLocalDotNetCore = "http://localhost:8912/storyline/basedi/io/security";
                    createDirector.APILocationLocalNodeJS = "http://localhost:9912/storyline/basedi/io/security";

                    createDirector.APILocationRemote = "https://storyline.basedi.io/security";

                    return createDirector.Action(_client, _centralizedStorer, _centralizedDisturber, _centralizedSensor, _requestToResolveObject, _storylineDetails, _storylineDetails_Parameters, _requestName, _requestToProcess, _requestToProcessParameters);
                }

                #endregion
            }

            #endregion

            return new object();
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

    internal class Implement_DesignPattern_Factory_Experience_12_2_1_0 : aClass_Programming_ScriptAction_12_2_1_0<object>
    {
        #region 1. Assign

        private Dictionary<string, object> _client;

        private JObject _storylineDetails;
        private JObject _storylineDetails_Parameters;

        private aClass_Programming_ScriptRoutable_12_2_1_0 _requestToResolveObject;

        private ExtraData_12_2_1_0 _extraData;

        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _centralizedStorer;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _centralizedDisturber;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _centralizedSensor;

        private string _requestName = "";
        private string _requestToProcess = "";
        private string _requestToProcessParameters = "";

        #endregion

        #region 2. Ready

        internal Implement_DesignPattern_Factory_Experience_12_2_1_0(Dictionary<string, object> client, JObject storylineDetails, JObject storylineDetails_Parameters, aClass_Programming_ScriptRoutable_12_2_1_0 requestToResolveObject, ExtraData_12_2_1_0 extraData = null, string requestToResolveString = "", string requestToProcess = "", string requestToProcessParameters = "")
        {
            if (_centralizedDisturber == null)
            {
                _centralizedDisturber = new Implement_DesignPattern_Factory_Disturber_12_2_1_0(client, storylineDetails, storylineDetails_Parameters, requestToResolveObject, extraData, requestToResolveString, requestToProcess, requestToProcessParameters);
            }

            if (_centralizedStorer == null)
            {
                _centralizedStorer = new Implement_DesignPattern_Factory_Storer_12_2_1_0(client, storylineDetails, storylineDetails_Parameters, requestToResolveObject, extraData, requestToResolveString, requestToProcess, requestToProcessParameters);
            }

            if (_centralizedSensor == null)
            {
                _centralizedSensor = new Implement_DesignPattern_Factory_Sensor_12_2_1_0(client, storylineDetails, storylineDetails_Parameters, requestToResolveObject, extraData, requestToResolveString, requestToProcess, requestToProcessParameters);
            }

            _extraData = extraData;

            _requestToResolveObject = requestToResolveObject;
            _requestName = requestToResolveString;
            _requestToProcess = requestToProcess;
            _requestToProcessParameters = requestToProcessParameters;

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
                SocialMediaFactoryImplementer_NicheMaster_2_3_1_0 createExperience = new SocialMediaFactoryImplementer_NicheMaster_2_3_1_0(_extraData);

                createExperience.APILocationLocalDotNetCore = "http://localhost:8992/storyline/basedi/io/socialmedia";
                createExperience.APILocationLocalNodeJS = "http://localhost:9992/storyline/basedi/io/socialmedia";

                createExperience.APILocationRemote = "https://storyline.basedi.io/socialmedia";

                return createExperience.Action(_client, _centralizedStorer, _centralizedDisturber, _centralizedSensor, _requestToResolveObject, _storylineDetails, _storylineDetails_Parameters, _requestName, _requestToProcess, _requestToProcessParameters);
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

                WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0 createExperience = new WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0(_extraData);

                createExperience.APILocationLocalNodeJS = "http://localhost:8912/storyline/basedi/io/webdevelopment";
                createExperience.APILocationLocalDotNetCore = "http://localhost:9912/storyline/basedi/io/webdevelopment";

                createExperience.APILocationRemote = "https://storyline.basedi.io/webdevelopment";

                return createExperience.Action(_client, _centralizedStorer, _centralizedDisturber, _centralizedSensor, _requestToResolveObject, _storylineDetails, _storylineDetails_Parameters, _requestName, _requestToProcess, _requestToProcessParameters);

                #endregion
            }

            #endregion

            #endregion

            return new object();
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

    #region HANDLE REQUEST STORAGE

    internal class Implement_DesignPattern_Factory_Storer_12_2_1_0 : aClass_Programming_ScriptAction_12_2_1_0<JObject>
    {
        #region 1. Assign

        private Dictionary<string, object> _client;

        private JObject _storylineDetails;
        private JObject _storylineDetails_Parameters;

        private aClass_Programming_ScriptRoutable_12_2_1_0 _requestToResolveObject;

        private ExtraData_12_2_1_0 _extraData;

        private string _requestName = "";
        private string _requestToProcess = "";
        private string _requestToProcessParameters = "";

        #endregion

        #region 2. Ready

        internal Implement_DesignPattern_Factory_Storer_12_2_1_0(Dictionary<string, object> client, JObject storylineDetails, JObject storylineDetails_Parameters, aClass_Programming_ScriptRoutable_12_2_1_0 requestToResolveObject, ExtraData_12_2_1_0 extraData = null, string requestToResolveString = "", string requestToProcess = "", string requestToProcessParameters = "")
        {
            _client = client;

            _extraData = extraData;

            _requestToResolveObject = requestToResolveObject;
            _requestName = requestToResolveString;
            _requestToProcess = requestToProcess;
            _requestToProcessParameters = requestToProcessParameters;

            _storylineDetails = storylineDetails;
            _storylineDetails_Parameters = storylineDetails_Parameters;
        }

        #endregion

        #region 3. Set

        //A. Default state of this part of the storyline

        #endregion

        #region 4. Action

        #region EXECUTE LOGIC INSTUCTIONS

        public override JObject Action_1_Begin_Process()
        {
            JObject armTemplateJSONOutput = null;

            armTemplateJSONOutput = new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0())
              .SetupStoryline(_client, _storylineDetails, _storylineDetails_Parameters, _extraData, "", "Director_Of_Programming_Chapter_12_2_Page_2_Request_Storer_1_0", "Director_Of_Programming_Chapter_12_2_Page_2_Request_Storer_1_0-P1_0")
              .Action().Result;

            return armTemplateJSONOutput;
        }

        #endregion

        #region NOT APART OF THE REQUEST PIPELINE AT THIS TIME

        public override JObject Action_10_End_Process()
        {
            throw new NotImplementedException();
        }

        public override JObject Action_2_Validate_Process()
        {
            throw new NotImplementedException();
        }

        public override JObject Action_3_Process_StoryAuthor()
        {
            throw new NotImplementedException();
        }

        public override JObject Action_4_Process_StoryCharacters()
        {
            throw new NotImplementedException();
        }

        public override JObject Action_5_Process_StorySetting()
        {
            throw new NotImplementedException();
        }

        public override JObject Action_6_Process_StoryExperiences()
        {
            throw new NotImplementedException();
        }

        public override JObject Action_7_Process_StoryResources()
        {
            throw new NotImplementedException();
        }

        public override JObject Action_8_Process_CRUD()
        {
            throw new NotImplementedException();
        }

        public override JObject Action_9_Verify_Process()
        {
            throw new NotImplementedException();
        }

        #endregion

        #endregion
    }

    #endregion

    #region HANDLE REQUEST DISTURBANCE

    internal class Implement_DesignPattern_Factory_Disturber_12_2_1_0 : aClass_Programming_ScriptAction_12_2_1_0<JObject>
    {
        #region 1. Assign

        private Dictionary<string, object> _client;

        private JObject _storylineDetails;
        private JObject _storylineDetails_Parameters;

        private aClass_Programming_ScriptRoutable_12_2_1_0 _requestToResolveObject;

        private ExtraData_12_2_1_0 _extraData;

        private string _requestName = "";
        private string _requestToProcess = "";
        private string _requestToProcessParameters = "";

        #endregion

        #region 2. Ready

        internal Implement_DesignPattern_Factory_Disturber_12_2_1_0(Dictionary<string, object> client, JObject storylineDetails, JObject storylineDetails_Parameters, aClass_Programming_ScriptRoutable_12_2_1_0 requestToResolveObject, ExtraData_12_2_1_0 extraData = null, string requestToResolveString = "", string requestToProcess = "", string requestToProcessParameters = "")
        {
            _client = client;

            _extraData = extraData;

            _requestToResolveObject = requestToResolveObject;
            _requestName = requestToResolveString;
            _requestToProcess = requestToProcess;
            _requestToProcessParameters = requestToProcessParameters;

            _storylineDetails = storylineDetails;
            _storylineDetails_Parameters = storylineDetails_Parameters;
        }

        #endregion

        #region 3. Set

        //A. Default state of this part of the storyline

        #endregion

        #region 4. Action

        #region EXECUTE LOGIC INSTUCTIONS

        public override JObject Action_1_Begin_Process()
        {
            JObject armTemplateJSONOutput = null;

            armTemplateJSONOutput = new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0())
              .SetupStoryline(_client, _storylineDetails, _storylineDetails_Parameters, _extraData, "", "Director_Of_RiskManagement_Chapter_11_1_Page_1_Disturb_Handler_1_0", "Director_Of_RiskManagement_Chapter_11_1_Page_1_Disturb_Handler_1_0-P1_0")
              .Action().Result;

            return armTemplateJSONOutput;
        }

        #endregion

        #region NOT APART OF THE REQUEST PIPELINE AT THIS TIME

        public override JObject Action_10_End_Process()
        {
            throw new NotImplementedException();
        }

        public override JObject Action_2_Validate_Process()
        {
            throw new NotImplementedException();
        }

        public override JObject Action_3_Process_StoryAuthor()
        {
            throw new NotImplementedException();
        }

        public override JObject Action_4_Process_StoryCharacters()
        {
            throw new NotImplementedException();
        }

        public override JObject Action_5_Process_StorySetting()
        {
            throw new NotImplementedException();
        }

        public override JObject Action_6_Process_StoryExperiences()
        {
            throw new NotImplementedException();
        }

        public override JObject Action_7_Process_StoryResources()
        {
            throw new NotImplementedException();
        }

        public override JObject Action_8_Process_CRUD()
        {
            throw new NotImplementedException();
        }

        public override JObject Action_9_Verify_Process()
        {
            throw new NotImplementedException();
        }

        #endregion

        #endregion
    }

    #endregion

    #region HANDLE REQUEST SENSOR

    internal class Implement_DesignPattern_Factory_Sensor_12_2_1_0 : aClass_Programming_ScriptAction_12_2_1_0<JObject>
    {
        #region 1. Assign

        private Dictionary<string, object> _client;

        private JObject _storylineDetails;
        private JObject _storylineDetails_Parameters;

        private aClass_Programming_ScriptRoutable_12_2_1_0 _requestToResolveObject;

        private ExtraData_12_2_1_0 _extraData;

        private string _requestName = "";
        private string _requestToProcess = "";
        private string _requestToProcessParameters = "";

        #endregion

        #region 2. Ready

        internal Implement_DesignPattern_Factory_Sensor_12_2_1_0(Dictionary<string, object> client, JObject storylineDetails, JObject storylineDetails_Parameters, aClass_Programming_ScriptRoutable_12_2_1_0 requestToResolveObject, ExtraData_12_2_1_0 extraData = null, string requestToResolveString = "", string requestToProcess = "", string requestToProcessParameters = "")
        {
            _client = client;

            _extraData = extraData;

            _requestToResolveObject = requestToResolveObject;
            _requestName = requestToResolveString;
            _requestToProcess = requestToProcess;
            _requestToProcessParameters = requestToProcessParameters;

            _storylineDetails = storylineDetails;
            _storylineDetails_Parameters = storylineDetails_Parameters;
        }

        #endregion

        #region 3. Set

        //A. Default state of this part of the storyline

        #endregion

        #region 4. Action

        #region EXECUTE LOGIC INSTUCTIONS

        public override JObject Action_1_Begin_Process()
        {
            JObject armTemplateJSONOutput = null;

            armTemplateJSONOutput = new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0())
              .SetupStoryline(_client, _storylineDetails, _storylineDetails_Parameters, _extraData, "", "Director_Of_Programming_Chapter_12_2_Page_X_Request_Sensor_1_0", "Director_Of_Programming_Chapter_12_2_Page_X_Request_Sensor_1_0-P1_0")
              .Action().Result;

            return armTemplateJSONOutput;
        }

        #endregion

        #region NOT APART OF THE REQUEST PIPELINE AT THIS TIME

        public override JObject Action_10_End_Process()
        {
            throw new NotImplementedException();
        }

        public override JObject Action_2_Validate_Process()
        {
            throw new NotImplementedException();
        }

        public override JObject Action_3_Process_StoryAuthor()
        {
            throw new NotImplementedException();
        }

        public override JObject Action_4_Process_StoryCharacters()
        {
            throw new NotImplementedException();
        }

        public override JObject Action_5_Process_StorySetting()
        {
            throw new NotImplementedException();
        }

        public override JObject Action_6_Process_StoryExperiences()
        {
            throw new NotImplementedException();
        }

        public override JObject Action_7_Process_StoryResources()
        {
            throw new NotImplementedException();
        }

        public override JObject Action_8_Process_CRUD()
        {
            throw new NotImplementedException();
        }

        public override JObject Action_9_Verify_Process()
        {
            throw new NotImplementedException();
        }

        #endregion

        #endregion
    }

    #endregion

    #endregion
}