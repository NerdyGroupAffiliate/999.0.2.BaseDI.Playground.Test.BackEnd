﻿#region Imports

#region BaseDI

/////////////////////////////////////////////////////////////////////////////////////
//0. BaseDI Global Dependencies
/////////////////////////////////////////////////////////////////////////////////////
using BaseDI.Director.Programming_1;
using BaseDI.Script.Programming.Abstract_1;
using BaseDI.Script.Programming.Poco_1;
using BaseDI.Script.Programming_1;
/////////////////////////////////////////////////////////////////////////////////////

//1. Generate Brand Awareness
using BaseDI.Story.Advertising_1;

//2. Generate Brand Trust
using BaseDI.Story.Blogging_1;

//3. Generate Optin
using BaseDI.Story.Listing_Building_1;
using BaseDI.Story.Personal_Training_3;
using BaseDI.Story.Podcasting_2;

//4. Sell Low Ticket Offer
using BaseDI.Story.Supplements_1;

//5. Sell High Ticket Offer
using BaseDI.Story.Coaching_1;
using BaseDI.Story.Consulting_2;

//6. Sell Subscription Offer
using BaseDI.Story.Software_1;

//7. Sell Commission Offer
using BaseDI.Story.Affiliate_Revenue_1;

//8. Account Gain or Loss
using BaseDI.Story.Accounting_1;

//9. Improve Customer Service
using BaseDI.Story.Customer_Service_1;

//10. Perform Manual Task
using BaseDI.Story.Productivity_1;

//11. Automate Manual Task
using BaseDI.Story.Risk_Management_1;
using BaseDI.Story.Social_Media_3;

//12. Other
using BaseDI.Story.Careers_Employment_1;
using BaseDI.Story.Web_Development_1;
using BaseDI.Story.Programming_1;
using BaseDI.Story.CMS_1;
using BaseDI.Story.Security_1;

#endregion

#region .Net Core

using System;
using System.Collections.Generic;
using System.Globalization;

#endregion 

#region 3rd Party Core

using Newtonsoft.Json.Linq;
using Microsoft.Extensions.Configuration;

#endregion

#endregion

namespace BaseDI.Story.Programming_1
{
    public class ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 : aClass_Programming_ScriptMasterLeader_12_2_1_0
    {
        #region 1. Assign

        //A. Variable Declaration 

        public Exception Mistake { get; set; }

        private IConfiguration _storedAppSettings = null;

        private ExtraData_12_2_1_0 _storedExtraData = null;

        private aClass_Programming_ScriptRoutable_12_2_1_0 _storedClientRequestByObject = null;

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(aClass_Programming_ScriptRoutable_12_2_1_0 clientRequestByObject)
        {
            #region 1. INPUTS        

            #region MEMORIZE request datatype

            _storedClientRequestByObject = clientRequestByObject;

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE process defaults

            #region IDEAL CASE - USE defaults handler

            HandleStoryDefaults();

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #endregion
        }

        #endregion

        #region 3. Set

        //A. Default state
        private void HandleStoryDefaults()
        {
            #region 1. INPUTS        

            #region MEMORIZE masterleader reference

            _storedExtraData = new ExtraData_12_2_1_0();
            _storedExtraData.MasterLeader = this;

            #endregion

            #endregion

            #region 2. PROCESS


            #endregion

            #region 3. OUTPUT

            #endregion
        }

        #endregion

        #region 4. Action

        //A. Story in motion (DO SOMETHING)

        public aClass_Programming_ScriptRoutable_12_2_1_0 SetupStoryline(Dictionary<string, object> clientORserverInstance, JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData = null, string systemRequestByName = "", string clientRequestByName = "", string clientRequestByNameParameters = "")
        {
            #region 1. INPUTS        

            #region MEMORIZE app settings

            _storedAppSettings = (IConfiguration)clientORserverInstance["appSettings"];

            #endregion

            #region MEMORIZE extra data

            if (extraData != null)
                _storedExtraData = extraData;

            #endregion

            #region MEMORIZE request resolver

            Use_DesignPattern_Builder_Chapter_12_2_1_0 stored_ResolvedRequestHandler = new Use_DesignPattern_Builder_Chapter_12_2_1_0(clientORserverInstance, storylineDetails, storylineDetails_Parameters, _storedClientRequestByObject, _storedExtraData, systemRequestByName, clientRequestByName, clientRequestByNameParameters);

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #region DEFINE request handler

            object stored_ReferenceTo_RequestHandler = null;

            #endregion

            #endregion

            #region 2. PROCESS

            try
            {
                #region FIND request handler

                #region EDGE CASE - USE developer logger

                if (storedDeveloperMode)
                    Console.WriteLine("STEP 1 - EXECUTING REQUEST - ***BEGIN FINDING*** a request handler -> ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.cs -> SetupStoryline");

                #endregion

                #region IDEAL CASE - USE an experience OR a director request handler

                //NOTE: 1. The Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 is called "TWICE" per request.
                   //A: The first time is to "MERGE" the data objects of "StorylineDetails" and "StorylineDetails_Parameters" into ONE SINGLE data object.
                   //B: The second time is to call the "ACTION" method off the "ENTRYPOINT" property from inside the "IF" statement below.
                stored_ReferenceTo_RequestHandler = stored_ResolvedRequestHandler.Action();

                if (systemRequestByName != "")
                {                    
                    var entryPoint = (aClass_Programming_ScriptRoutable_12_2_1_0)stored_ReferenceTo_RequestHandler;

                    entryPoint.RequestID = systemRequestByName;
                    entryPoint.ClientOrServerInstance = clientORserverInstance;

                    _storedClientRequestByObject.ClientOrServerInstance = clientORserverInstance;

                    _storedClientRequestByObject.EntryPoint = entryPoint;
                    _storedClientRequestByObject.ExtraData = _storedExtraData;

                    _storedClientRequestByObject.MasterLeader = entryPoint.MasterLeader;

                    _storedClientRequestByObject.StorylineDetails = entryPoint.StorylineDetails;
                    _storedClientRequestByObject.StorylineDetails_Parameters = entryPoint.StorylineDetails_Parameters;

                    stored_ReferenceTo_RequestHandler = _storedClientRequestByObject;
                }

                #endregion

                #endregion
            }
            catch (Exception)
            {
                throw;
            }

            #endregion

            #region 3. OUTPUT

            #region RETURN request handler

            #region IDEAL CASE - USE an experience OR a director handler

            return (aClass_Programming_ScriptRoutable_12_2_1_0)stored_ReferenceTo_RequestHandler;

            #endregion

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

        private IConfiguration _storedAppSettings = null;

        internal Dictionary<string, object> _storedClientORserverInstance;

        internal JObject _storedStorylineDetails;
        internal JObject _storedStorylineDetails_Parameters;
        
        internal string _storedClientRequestByName;
        internal string _storedClientRequestByNameParameters;

        internal aClass_Programming_ScriptRoutable_12_2_1_0 _storedClientRequestByObject;
        internal string _storedSystemRequestByName;

        internal ExtraData_12_2_1_0 _storedExtraData;

        #endregion

        #region 2. Ready

        internal Use_DesignPattern_Builder_Chapter_12_2_1_0(Dictionary<string, object> clientORserverInstance, JObject storylineDetails, JObject storylineDetails_Parameters, aClass_Programming_ScriptRoutable_12_2_1_0 clientRequestByObject, ExtraData_12_2_1_0 extraData = null, string systemRequestByName = "", string clientRequestByName = "", string clientRequestByNameParameters = "")
        {
            #region 1. INPUTS        

            #region MEMORIZE app settings

            _storedAppSettings = (IConfiguration)clientORserverInstance["appSettings"];

            #endregion

            #region MEMORIZE clientOrServer instance

            _storedClientORserverInstance = clientORserverInstance;

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #region MEMORIZE extra data

            _storedExtraData = extraData;

            #endregion

            #region MEMORIZE request details

            _storedClientRequestByName = clientRequestByName;
            _storedClientRequestByNameParameters = clientRequestByNameParameters;

            _storedClientRequestByObject = clientRequestByObject;
            _storedSystemRequestByName = systemRequestByName;

            #endregion

            #region MEMORIZE storyline details

            _storedStorylineDetails = storylineDetails;
            _storedStorylineDetails_Parameters = storylineDetails_Parameters;

            #endregion

            #endregion

            #region 2. PROCESS


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

        internal object Action()
        {
            #region 1. INPUTS    

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #region MEMORIZE execution strategy

            var builder = new Implement_DesignPattern_Builder_Chapter_12_2_1_0(_storedClientORserverInstance, _storedStorylineDetails, _storedStorylineDetails_Parameters, _storedClientRequestByObject, _storedExtraData, _storedSystemRequestByName, _storedClientRequestByName, _storedClientRequestByNameParameters);

            #endregion

            #region MEMORIZE resolved request handler

            object stored_Resolved_EXPERIENCEorDIRECTOR_RequestHandler = null;

            #endregion

            #endregion

            #region 2. PROCESS

            #region FIND request handler

            #region IDEAL CASE - USE an experience OR a director request handler

            builder.Action_1_Begin_Process();
            stored_Resolved_EXPERIENCEorDIRECTOR_RequestHandler = builder.Action_10_End_Process();

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN request handler

            #region IDEAL CASE - USE an experience OR a director handler

            return stored_Resolved_EXPERIENCEorDIRECTOR_RequestHandler;

            #endregion

            #endregion

            #endregion
        }

        #endregion
    }

    #endregion

    #region 6. Action Implementation

    //A. Story in motion (DO SOMETHING) ACTING

    internal class Implement_DesignPattern_Builder_Chapter_12_2_1_0 : aClass_Programming_ScriptAction_12_2_1_0<object>
    {
        #region 1. Assign

        private IConfiguration _storedAppSettings = null;

        internal Dictionary<string, object> _storedClientORserverInstance;

        private JObject _storedStorylineDetails;
        private JObject _storedStorylineDetails_Parameters;

        private string _storedClientRequestByName = "";
        private string _storedClientRequestByNameParameters = "";
        private aClass_Programming_ScriptRoutable_12_2_1_0 _storedClientRequestByObject;
        private string _storedSystemRequestByName;

        private ExtraData_12_2_1_0 _storedExtraData;

        private string _storedRequestName = "";

        #endregion

        #region 2. Ready

        internal Implement_DesignPattern_Builder_Chapter_12_2_1_0(Dictionary<string, object> clientORserverInstance, JObject storylineDetails, JObject storylineDetails_Parameters, aClass_Programming_ScriptRoutable_12_2_1_0 clientRequestByObject, ExtraData_12_2_1_0 extraData = null, string systemRequestByName = "", string clientRequestByName = "", string clientRequestByNameParameters = "")
        {
            #region 1. INPUTS        

            #region MEMORIZE app settings

            _storedAppSettings = (IConfiguration)clientORserverInstance["appSettings"];

            #endregion

            #region MEMORIZE clientOrServer instance

            _storedClientORserverInstance = clientORserverInstance;

            #endregion

            #region MEMORIZE extra data

            _storedExtraData = extraData;

            #endregion

            #region MEMORIZE request details

            _storedClientRequestByName = clientRequestByName;
            _storedClientRequestByNameParameters = clientRequestByNameParameters;

            _storedClientRequestByObject = clientRequestByObject;
            _storedSystemRequestByName = systemRequestByName;

            #endregion

            #region MEMORIZE storyline details

            _storedStorylineDetails = storylineDetails;
            _storedStorylineDetails_Parameters = storylineDetails_Parameters;

            #endregion

            #endregion

            #region 2. PROCESS


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

        public override object Action_1_Begin_Process()
        {
            #region 1. INPUTS     

            #region MEMORIZE request name

            if (string.IsNullOrEmpty(_storedSystemRequestByName))
            {
                _storedRequestName = _storedClientRequestByObject.GetType().Name;
            }
            else
            {
                _storedRequestName = _storedSystemRequestByName;
            }

            #endregion

            #endregion

            #region 2. PROCESS


            #endregion

            #region 3. OUTPUT

            #region RETURN request handler

            #region IDEAL CASE - USE an experience OR a director handler

            return _storedRequestName;

            #endregion

            #endregion

            #endregion
        }

        public override object Action_10_End_Process()
        {
            #region 1. INPUTS  

            #region MEMORIZE experience request handler

            Implement_DesignPattern_Factory_Experience_12_2_1_0 storedExperienceRequestHandler = new Implement_DesignPattern_Factory_Experience_12_2_1_0(_storedClientORserverInstance, _storedStorylineDetails, _storedStorylineDetails_Parameters, _storedClientRequestByObject, _storedExtraData, _storedRequestName, _storedClientRequestByName, _storedClientRequestByNameParameters);

            #endregion

            #region MEMORIZE director request handler

            Implement_DesignPattern_Factory_Director_12_2_1_0 storedDirectorRequestHandler = new Implement_DesignPattern_Factory_Director_12_2_1_0(_storedClientORserverInstance, _storedStorylineDetails, _storedStorylineDetails_Parameters, _storedClientRequestByObject, _storedExtraData, _storedRequestName, _storedClientRequestByName, _storedClientRequestByNameParameters);

            #endregion


            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #endregion

            #region 2. PROCESS

            #region PICK experience OR director

            #region IDEAL CASE - USE director request handler

            if (_storedRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_"))
            {               
                return storedDirectorRequestHandler.Action_1_Begin_Process();
            }

            #endregion

            #region EDGE CASE - USE experience request handler

            if (_storedRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("EXPERIENCE_THE_"))
            {                
                return storedExperienceRequestHandler.Action_1_Begin_Process();
            }

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN exception message

            #region EDGE CASE - USE exception message

            throw new Exception("[DISTURBANCE ISSUE] - Bug - ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.cs -> Implement_DesignPattern_Builder_Chapter_12_2_1_0 -> Action_10_End_Process - BaseDI will not work without a request handler. Please make sure that clientRequestByName is not blank, null or begins with ***DIRECTOR_OF_*** or ***EXPERIENCE_THE_***!");

            #endregion

            #endregion

            #endregion
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

        private IConfiguration _storedAppSettings = null;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedStorer;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedDisturber;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedSensor;

        private Dictionary<string, object> _storedClientORserverInstance;

        private JObject _storedStorylineDetails;
        private JObject _storedStorylineDetails_Parameters;

        private aClass_Programming_ScriptRoutable_12_2_1_0 _storedClientRequestByObject;
        private string _storedSystemRequestByName;

        private ExtraData_12_2_1_0 _storedExtraData;

        private string _storedClientRequestByName = "";
        private string _storedClientRequestByNameParameters = "";
        private string _storedRequestName = "";

        #endregion

        #region 2. Ready

        internal Implement_DesignPattern_Factory_Director_12_2_1_0(Dictionary<string, object> clientORserverInstance, JObject storylineDetails, JObject storylineDetails_Parameters, aClass_Programming_ScriptRoutable_12_2_1_0 clientRequestByObject, ExtraData_12_2_1_0 extraData = null, string systemRequestByName = "", string clientRequestByName = "", string clientRequestByNameParameters = "")
        {
            #region 1. INPUTS     

            #region MEMORIZE app settings

            _storedAppSettings = (IConfiguration)clientORserverInstance["appSettings"];

            #endregion

            #region MEMORIZE clientOrServer instance

            _storedClientORserverInstance = clientORserverInstance;

            #endregion

            #region MEMORIZE centralized processes handlers   

            if (_storedCentralizedDisturber == null)
            {
                _storedCentralizedDisturber = new Implement_DesignPattern_Factory_Disturber_12_2_1_0(clientORserverInstance, storylineDetails, storylineDetails_Parameters, clientRequestByObject, extraData, systemRequestByName, clientRequestByName, clientRequestByNameParameters);
            }

            if (_storedCentralizedStorer == null)
            {
                _storedCentralizedStorer = new Implement_DesignPattern_Factory_Storer_12_2_1_0(clientORserverInstance, storylineDetails, storylineDetails_Parameters, clientRequestByObject, extraData, systemRequestByName, clientRequestByName, clientRequestByNameParameters);
            }

            if (_storedCentralizedSensor == null)
            {
                _storedCentralizedSensor = new Implement_DesignPattern_Factory_Sensor_12_2_1_0(clientORserverInstance, storylineDetails, storylineDetails_Parameters, clientRequestByObject, extraData, systemRequestByName, clientRequestByName, clientRequestByNameParameters);
            }

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #region MEMORIZE storyline details

            _storedStorylineDetails = storylineDetails;
            _storedStorylineDetails_Parameters = storylineDetails_Parameters;

            #endregion

            #region MEMORIZE extra data

            _storedExtraData = extraData;

            #endregion

            #region MEMORIZE request details

            _storedClientRequestByName = clientRequestByName;
            _storedClientRequestByNameParameters = clientRequestByNameParameters;
            _storedClientRequestByObject = clientRequestByObject;

            _storedRequestName = systemRequestByName;

            _storedSystemRequestByName = systemRequestByName;

            #endregion

            #endregion

            #region 2. PROCESS

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

        public override object Action_1_Begin_Process()
        {
            #region 1. INPUTS  

            #region DEFINE director request handlers

            AdvertisingFactoryImplementer_NicheMaster_1_1_1_0 _1_1_stored_Director_Of_Advertising_RequestHandler = null;
            
            BloggingFactoryImplementer_NicheMaster_2_1_1_0 _2_1_stored_Director_Of_Blogging_RequestHandler = null;
            PodcastingFactoryImplementer_NicheMaster_2_2_1_0 _2_2_stored_Director_Of_Podcasting_RequestHandler = null;
            SocialMediaFactoryImplementer_NicheMaster_2_3_1_0 _2_3_stored_Director_Of_SocialMedia_RequestHandler = null;

            ProgrammingFactoryImplementer_NicheMaster_12_2_1_0 _12_2_stored_Director_Of_Programming_RequestHandler = null;

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #endregion

            #region 2. PROCESS

            #region ASSIGN request handler

            try
            {
                #region IDEAL CASE - USE a director

                if (_storedSystemRequestByName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_PROGRAMMING"))
                {
                    #region 12. Other

                    _12_2_stored_Director_Of_Programming_RequestHandler = new ProgrammingFactoryImplementer_NicheMaster_12_2_1_0(_storedExtraData);
                    
                    _12_2_stored_Director_Of_Programming_RequestHandler.APILocationLocalDotNetCore = "http://localhost:8912/storyline/basedi/io/programming";
                    _12_2_stored_Director_Of_Programming_RequestHandler.APILocationLocalNodeJS = "http://localhost:9912/storyline/basedi/io/programming";
                    _12_2_stored_Director_Of_Programming_RequestHandler.APILocationRemote = "https://storyline.basedi.io/programming";

                    return _12_2_stored_Director_Of_Programming_RequestHandler.Action(_storedClientORserverInstance, _storedCentralizedStorer, _storedCentralizedDisturber, _storedCentralizedSensor, _storedClientRequestByObject, _storedStorylineDetails, _storedStorylineDetails_Parameters, _storedRequestName, _storedClientRequestByName, _storedClientRequestByNameParameters);

                    #endregion
                }
                else
                {
                    //This means our director of programming wanted us to play this storyline.
                    #region 1. Generate Brand Awareness Storylines

                    if (_storedSystemRequestByName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_ADVERTISING"))
                    {
                        _1_1_stored_Director_Of_Advertising_RequestHandler = new AdvertisingFactoryImplementer_NicheMaster_1_1_1_0(_storedExtraData);
                        
                        _1_1_stored_Director_Of_Advertising_RequestHandler.APILocationLocalDotNetCore = "http://localhost:8991/storyline/basedi/io/advertising";
                        _1_1_stored_Director_Of_Advertising_RequestHandler.APILocationLocalNodeJS = "http://localhost:9991/storyline/basedi/io/advertising";
                        _1_1_stored_Director_Of_Advertising_RequestHandler.APILocationRemote = "https://storyline.basedi.io/advertising";

                        return _1_1_stored_Director_Of_Advertising_RequestHandler.Action(_storedClientORserverInstance, _storedCentralizedStorer, _storedCentralizedDisturber, _storedCentralizedSensor, _storedClientRequestByObject, _storedStorylineDetails, _storedStorylineDetails_Parameters, _storedRequestName, _storedClientRequestByName, _storedClientRequestByNameParameters);
                    }

                    #endregion

                    #region 2. Generate Brand Trust Storylines

                    if (_storedSystemRequestByName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_BLOGGING"))
                    {
                        _2_1_stored_Director_Of_Blogging_RequestHandler = new BloggingFactoryImplementer_NicheMaster_2_1_1_0(_storedExtraData);
                        
                        _2_1_stored_Director_Of_Blogging_RequestHandler.APILocationLocalDotNetCore = "http://localhost:8992/storyline/basedi/io/blogging";
                        _2_1_stored_Director_Of_Blogging_RequestHandler.APILocationLocalNodeJS = "http://localhost:9992/storyline/basedi/io/blogging";
                        _2_1_stored_Director_Of_Blogging_RequestHandler.APILocationRemote = "https://storyline.basedi.io/blogging";

                        return _2_1_stored_Director_Of_Blogging_RequestHandler.Action(_storedClientORserverInstance, _storedCentralizedStorer, _storedCentralizedDisturber, _storedCentralizedSensor, _storedClientRequestByObject, _storedStorylineDetails, _storedStorylineDetails_Parameters, _storedRequestName, _storedClientRequestByName, _storedClientRequestByNameParameters);
                    }

                    if (_storedSystemRequestByName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_PODCASTING"))
                    {
                        _2_2_stored_Director_Of_Podcasting_RequestHandler = new PodcastingFactoryImplementer_NicheMaster_2_2_1_0(_storedExtraData);

                        _2_2_stored_Director_Of_Podcasting_RequestHandler.APILocationLocalDotNetCore = "http://localhost:8992/storyline/basedi/io/podcasting";
                        _2_2_stored_Director_Of_Podcasting_RequestHandler.APILocationLocalNodeJS = "http://localhost:9992/storyline/basedi/io/podcasting";
                        _2_2_stored_Director_Of_Podcasting_RequestHandler.APILocationRemote = "https://storyline.basedi.io/podcasting";

                        return _2_2_stored_Director_Of_Podcasting_RequestHandler.Action(_storedClientORserverInstance, _storedCentralizedStorer, _storedCentralizedDisturber, _storedCentralizedSensor, _storedClientRequestByObject, _storedStorylineDetails, _storedStorylineDetails_Parameters, _storedRequestName, _storedClientRequestByName, _storedClientRequestByNameParameters);
                    }

                    if (_storedSystemRequestByName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_SOCIALMEDIA"))
                    {
                        _2_3_stored_Director_Of_SocialMedia_RequestHandler = new SocialMediaFactoryImplementer_NicheMaster_2_3_1_0(_storedExtraData);

                        _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationLocalDotNetCore = "http://localhost:8992/storyline/basedi/io/socialmedia";
                        _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationLocalNodeJS = "http://localhost:9992/storyline/basedi/io/socialmedia";
                        _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationRemote = "https://storyline.basedi.io/socialmedia";

                        return _2_3_stored_Director_Of_SocialMedia_RequestHandler.Action(_storedClientORserverInstance, _storedCentralizedStorer, _storedCentralizedDisturber, _storedCentralizedSensor, _storedClientRequestByObject, _storedStorylineDetails, _storedStorylineDetails_Parameters, _storedRequestName, _storedClientRequestByName, _storedClientRequestByNameParameters);
                    }

                    #endregion

                    #region 3. Generate Optin Storylines

                    if (_storedSystemRequestByName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_LISTBUILDING"))
                    {
                        ListBuildingFactoryImplementer_NicheMaster_3_1_1_0 createDirector = new ListBuildingFactoryImplementer_NicheMaster_3_1_1_0(_storedExtraData);

                        createDirector.APILocationLocalDotNetCore = "http://localhost:8993/storyline/basedi/io/listbuilding";
                        createDirector.APILocationLocalNodeJS = "http://localhost:9993/storyline/basedi/io/listbuilding";

                        createDirector.APILocationRemote = "https://storyline.basedi.io/listbuilding";

                        return createDirector.Action(_storedClientORserverInstance, _storedCentralizedStorer, _storedCentralizedDisturber, _storedCentralizedSensor, _storedClientRequestByObject, _storedStorylineDetails, _storedStorylineDetails_Parameters, _storedRequestName, _storedClientRequestByName, _storedClientRequestByNameParameters);
                    }

                    #endregion

                    #region 4. Sell Low Ticket Offer Storylines

                    if (_storedSystemRequestByName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_SUPPLEMENTS"))
                    {
                        SupplementsFactoryImplementer_NicheMaster_4_1_1_0 createDirector = new SupplementsFactoryImplementer_NicheMaster_4_1_1_0(_storedExtraData);

                        createDirector.APILocationLocalDotNetCore = "http://localhost:8994/storyline/basedi/io/supplements";
                        createDirector.APILocationLocalNodeJS = "http://localhost:9994/storyline/basedi/io/supplements";

                        createDirector.APILocationRemote = "https://storyline.basedi.io/supplements";

                        return createDirector.Action(_storedClientORserverInstance, _storedCentralizedStorer, _storedCentralizedDisturber, _storedCentralizedSensor, _storedClientRequestByObject, _storedStorylineDetails, _storedStorylineDetails_Parameters, _storedRequestName, _storedClientRequestByName, _storedClientRequestByNameParameters);
                    }

                    #endregion

                    #region 5. Sell High Ticket Offer Storylines

                    if (_storedSystemRequestByName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_COACHING"))
                    {
                        CoachingFactoryImplementer_NicheMaster_5_1_1_0 createDirector = new CoachingFactoryImplementer_NicheMaster_5_1_1_0(_storedExtraData);

                        createDirector.APILocationLocalDotNetCore = "http://localhost:8995/storyline/basedi/io/coaching";
                        createDirector.APILocationLocalNodeJS = "http://localhost:9995/storyline/basedi/io/coaching";

                        createDirector.APILocationRemote = "https://storyline.basedi.io/coaching";

                        return createDirector.Action(_storedClientORserverInstance, _storedCentralizedStorer, _storedCentralizedDisturber, _storedCentralizedSensor, _storedClientRequestByObject, _storedStorylineDetails, _storedStorylineDetails_Parameters, _storedRequestName, _storedClientRequestByName, _storedClientRequestByNameParameters);
                    }

                    if (_storedSystemRequestByName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_CONSULTING"))
                    {
                        ConsultingFactoryImplementer_NicheMaster_5_2_1_0 createDirector = new ConsultingFactoryImplementer_NicheMaster_5_2_1_0(_storedExtraData);

                        createDirector.APILocationLocalDotNetCore = "http://localhost:8995/storyline/basedi/io/consulting";
                        createDirector.APILocationLocalNodeJS = "http://localhost:9995/storyline/basedi/io/consulting";

                        createDirector.APILocationRemote = "https://storyline.basedi.io/consulting";

                        return createDirector.Action(_storedClientORserverInstance, _storedCentralizedStorer, _storedCentralizedDisturber, _storedCentralizedSensor, _storedClientRequestByObject, _storedStorylineDetails, _storedStorylineDetails_Parameters, _storedRequestName, _storedClientRequestByName, _storedClientRequestByNameParameters);
                    }

                    if (_storedSystemRequestByName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_PERSONALTRAINING"))
                    {
                        PersonalTrainingFactoryImplementer_NicheMaster_5_3_1_0 createDirector = new PersonalTrainingFactoryImplementer_NicheMaster_5_3_1_0(_storedExtraData);

                        createDirector.APILocationLocalDotNetCore = "http://localhost:8995/storyline/basedi/io/personaltraining";
                        createDirector.APILocationLocalNodeJS = "http://localhost:9995/storyline/basedi/io/personaltraining";

                        createDirector.APILocationRemote = "https://storyline.basedi.io/personaltraining";

                        return createDirector.Action(_storedClientORserverInstance, _storedCentralizedStorer, _storedCentralizedDisturber, _storedCentralizedSensor, _storedClientRequestByObject, _storedStorylineDetails, _storedStorylineDetails_Parameters, _storedRequestName, _storedClientRequestByName, _storedClientRequestByNameParameters);
                    }

                    #endregion

                    #region 6. Sell Subscription Offer Storylines

                    if (_storedSystemRequestByName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_SOFTWARE"))
                    {
                        SoftwareFactoryImplementer_NicheMaster_6_1_1_0 createDirector = new SoftwareFactoryImplementer_NicheMaster_6_1_1_0(_storedExtraData);

                        createDirector.APILocationLocalDotNetCore = "http://localhost:8996/storyline/basedi/io/software";
                        createDirector.APILocationLocalNodeJS = "http://localhost:9996/storyline/basedi/io/software";

                        createDirector.APILocationRemote = "https://storyline.basedi.io/software";

                        return createDirector.Action(_storedClientORserverInstance, _storedCentralizedStorer, _storedCentralizedDisturber, _storedCentralizedSensor, _storedClientRequestByObject, _storedStorylineDetails, _storedStorylineDetails_Parameters, _storedRequestName, _storedClientRequestByName, _storedClientRequestByNameParameters);
                    }

                    #endregion

                    #region 7. Sell Commission Offer Storylines

                    if (_storedSystemRequestByName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_AFFILIATEREVENUE"))
                    {
                        AffiliateRevenueFactoryImplementer_NicheMaster_7_1_1_0 createDirector = new AffiliateRevenueFactoryImplementer_NicheMaster_7_1_1_0(_storedExtraData);

                        createDirector.APILocationLocalDotNetCore = "http://localhost:8997/storyline/basedi/io/affiliaterevenue";
                        createDirector.APILocationLocalNodeJS = "http://localhost:9997/storyline/basedi/io/affiliaterevenue";

                        createDirector.APILocationRemote = "https://storyline.basedi.io/affiliaterevenue";

                        return createDirector.Action(_storedClientORserverInstance, _storedCentralizedStorer, _storedCentralizedDisturber, _storedCentralizedSensor, _storedClientRequestByObject, _storedStorylineDetails, _storedStorylineDetails_Parameters, _storedRequestName, _storedClientRequestByName, _storedClientRequestByNameParameters);
                    }

                    #endregion

                    #region 8. Account Loss or Gain Storylines

                    if (_storedSystemRequestByName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_ACCOUNTING"))
                    {
                        AccountingFactoryImplementer_NicheMaster_8_1_1_0 createDirector = new AccountingFactoryImplementer_NicheMaster_8_1_1_0(_storedExtraData);

                        createDirector.APILocationLocalDotNetCore = "http://localhost:8998/storyline/basedi/io/accounting";
                        createDirector.APILocationLocalNodeJS = "http://localhost:9998/storyline/basedi/io/accounting";

                        createDirector.APILocationRemote = "https://storyline.basedi.io/accounting";

                        return createDirector.Action(_storedClientORserverInstance, _storedCentralizedStorer, _storedCentralizedDisturber, _storedCentralizedSensor, _storedClientRequestByObject, _storedStorylineDetails, _storedStorylineDetails_Parameters, _storedRequestName, _storedClientRequestByName, _storedClientRequestByNameParameters);
                    }

                    #endregion

                    #region 9. Customer Service Storylines

                    if (_storedSystemRequestByName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_CUSTOMERSERVICE"))
                    {
                        CustomerServiceFactoryImplementer_NicheMaster_9_1_1_0 createDirector = new CustomerServiceFactoryImplementer_NicheMaster_9_1_1_0(_storedExtraData);

                        createDirector.APILocationLocalDotNetCore = "http://localhost:8999/storyline/basedi/io/customerservice";
                        createDirector.APILocationLocalNodeJS = "http://localhost:9999/storyline/basedi/io/customerservice";

                        createDirector.APILocationRemote = "https://storyline.basedi.io/customerservice";

                        return createDirector.Action(_storedClientORserverInstance, _storedCentralizedStorer, _storedCentralizedDisturber, _storedCentralizedSensor, _storedClientRequestByObject, _storedStorylineDetails, _storedStorylineDetails_Parameters, _storedRequestName, _storedClientRequestByName, _storedClientRequestByNameParameters);
                    }

                    #endregion

                    #region 10. Perform Manual Task Storylines

                    if (_storedSystemRequestByName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_PRODUCTIVITY"))
                    {
                        ProductivityFactoryImplementer_NicheMaster_10_1_1_0 createDirector = new ProductivityFactoryImplementer_NicheMaster_10_1_1_0(_storedExtraData);

                        createDirector.APILocationLocalDotNetCore = "http://localhost:8910/storyline/basedi/io/productivity";
                        createDirector.APILocationLocalNodeJS = "http://localhost:9910/storyline/basedi/io/productivity";

                        createDirector.APILocationRemote = "https://storyline.basedi.io/productivity";

                        return createDirector.Action(_storedClientORserverInstance, _storedCentralizedStorer, _storedCentralizedDisturber, _storedCentralizedSensor, _storedClientRequestByObject, _storedStorylineDetails, _storedStorylineDetails_Parameters, _storedRequestName, _storedClientRequestByName, _storedClientRequestByNameParameters);
                    }

                    #endregion

                    #region 11. Automate Manual Task Storylines

                    if (_storedSystemRequestByName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_RISKMANAGEMENT"))
                    {
                        RiskManagementFactoryTester_NicheMaster_11_1_1_0 createDirector = new RiskManagementFactoryTester_NicheMaster_11_1_1_0(_storedExtraData);

                        createDirector.APILocationLocalDotNetCore = "http://localhost:8911/storyline/basedi/io/riskmanagement";
                        createDirector.APILocationLocalNodeJS = "http://localhost:9911/storyline/basedi/io/riskmanagement";

                        createDirector.APILocationRemote = "https://storyline.basedi.io/riskmanagement";

                        return createDirector.Action(_storedClientORserverInstance, _storedCentralizedStorer, _storedCentralizedDisturber, _storedCentralizedSensor, _storedClientRequestByObject, _storedStorylineDetails, _storedStorylineDetails_Parameters, _storedRequestName, _storedClientRequestByName, _storedClientRequestByNameParameters);
                    }

                    #endregion

                    #region 12. Other Storylines

                    if (_storedSystemRequestByName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_CAREERSEMPLOYMENT"))
                    {
                        CareersEmploymentFactoryImplementer_NicheMaster_12_1_1_0 createDirector = new CareersEmploymentFactoryImplementer_NicheMaster_12_1_1_0(_storedExtraData);

                        createDirector.APILocationLocalDotNetCore = "http://localhost:8912/storyline/basedi/io/careersemployment";
                        createDirector.APILocationLocalNodeJS = "http://localhost:9912/storyline/basedi/io/careersemployment";

                        createDirector.APILocationRemote = "https://storyline.basedi.io/careersemployment";

                        return createDirector.Action(_storedClientORserverInstance, _storedCentralizedStorer, _storedCentralizedDisturber, _storedCentralizedSensor, _storedClientRequestByObject, _storedStorylineDetails, _storedStorylineDetails_Parameters, _storedRequestName, _storedClientRequestByName, _storedClientRequestByNameParameters);
                    }

                    if (_storedSystemRequestByName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_WEBDEVELOPMENT"))
                    {
                        WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0 createDirector = new WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0(_storedExtraData);

                        createDirector.APILocationLocalDotNetCore = "http://localhost:8912/storyline/basedi/io/webdevelopment";
                        createDirector.APILocationLocalNodeJS = "http://localhost:9912/storyline/basedi/io/webdevelopment";

                        createDirector.APILocationRemote = "https://storyline.basedi.io/webdevelopment";

                        return createDirector.Action(_storedClientORserverInstance, _storedCentralizedStorer, _storedCentralizedDisturber, _storedCentralizedSensor, _storedClientRequestByObject, _storedStorylineDetails, _storedStorylineDetails_Parameters, _storedRequestName, _storedClientRequestByName, _storedClientRequestByNameParameters);
                    }

                    if (_storedSystemRequestByName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_CMS"))
                    {
                        CMSFactoryImplementer_NicheMaster_12_4_1_0 createDirector = new CMSFactoryImplementer_NicheMaster_12_4_1_0(_storedExtraData);

                        createDirector.APILocationLocalNodeJS = "http://localhost:8912/storyline/basedi/io/cms";
                        createDirector.APILocationLocalDotNetCore = "http://localhost:9912/storyline/basedi/io/cms";

                        createDirector.APILocationRemote = "https://storyline.basedi.io/cms";

                        return createDirector.Action(_storedClientORserverInstance, _storedCentralizedStorer, _storedCentralizedDisturber, _storedCentralizedSensor, _storedClientRequestByObject, _storedStorylineDetails, _storedStorylineDetails_Parameters, _storedRequestName, _storedClientRequestByName, _storedClientRequestByNameParameters);
                    }

                    if (_storedSystemRequestByName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_SECURITY"))
                    {
                        SecurityFactoryImplementer_NicheMaster_12_5_1_0 createDirector = new SecurityFactoryImplementer_NicheMaster_12_5_1_0(_storedExtraData);

                        createDirector.APILocationLocalDotNetCore = "http://localhost:8912/storyline/basedi/io/security";
                        createDirector.APILocationLocalNodeJS = "http://localhost:9912/storyline/basedi/io/security";

                        createDirector.APILocationRemote = "https://storyline.basedi.io/security";

                        return createDirector.Action(_storedClientORserverInstance, _storedCentralizedStorer, _storedCentralizedDisturber, _storedCentralizedSensor, _storedClientRequestByObject, _storedStorylineDetails, _storedStorylineDetails_Parameters, _storedRequestName, _storedClientRequestByName, _storedClientRequestByNameParameters);
                    }

                    #endregion
                }

                #endregion
            }
            catch
            {
                #region EDGE CASE - USE an exception message

                throw new Exception("NO DIRECTOR REQUEST HANDLER CAN BE FOUND FOR REQUEST - " + _storedSystemRequestByName.ToUpper() + " " + "ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.cs -> Implement_DesignPattern_Factory_Director_12_2_1_0 -> Action_1_Begin_Process ");

                #endregion
            }

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN empty object

            #region EDGE CASE - USE blank object

            return new object();

            #endregion

            #endregion

            #endregion
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

        private IConfiguration _storedAppSettings = null;
        private Dictionary<string, object> _storedClientORserverInstance;

        private JObject _storedStorylineDetails;
        private JObject _storedStorylineDetails_Parameters;

        private aClass_Programming_ScriptRoutable_12_2_1_0 _storedClientRequestByObject;

        private ExtraData_12_2_1_0 _storedExtraData;

        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedStorer;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedDisturber;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedSensor;

        private string _storedRequestName = "";
        private string _storedClientRequestByName = "";
        private string _storedClientRequestByNameParameters = "";
        private string _storedSystemRequestByName = "";

        #endregion

        #region 2. Ready

        internal Implement_DesignPattern_Factory_Experience_12_2_1_0(Dictionary<string, object> clientORserverInstance, JObject storylineDetails, JObject storylineDetails_Parameters, aClass_Programming_ScriptRoutable_12_2_1_0 clientRequestByObject, ExtraData_12_2_1_0 extraData = null, string systemRequestByName = "", string clientRequestByName = "", string clientRequestByNameParameters = "")
        {
            #region MEMORIZE app settings

            _storedAppSettings = (IConfiguration)clientORserverInstance["appSettings"];

            #endregion

            #region MEMORIZE clientOrServer instance

            _storedClientORserverInstance = clientORserverInstance;

            #endregion

            #region MEMORIZE centralized processes handlers   

            if (_storedCentralizedDisturber == null)
            {
                _storedCentralizedDisturber = new Implement_DesignPattern_Factory_Disturber_12_2_1_0(clientORserverInstance, storylineDetails, storylineDetails_Parameters, clientRequestByObject, extraData, systemRequestByName, clientRequestByName, clientRequestByNameParameters);
            }

            if (_storedCentralizedStorer == null)
            {
                _storedCentralizedStorer = new Implement_DesignPattern_Factory_Storer_12_2_1_0(clientORserverInstance, storylineDetails, storylineDetails_Parameters, clientRequestByObject, extraData, systemRequestByName, clientRequestByName, clientRequestByNameParameters);
            }

            if (_storedCentralizedSensor == null)
            {
                _storedCentralizedSensor = new Implement_DesignPattern_Factory_Sensor_12_2_1_0(clientORserverInstance, storylineDetails, storylineDetails_Parameters, clientRequestByObject, extraData, systemRequestByName, clientRequestByName, clientRequestByNameParameters);
            }

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #region MEMORIZE storyline details

            _storedStorylineDetails = storylineDetails;
            _storedStorylineDetails_Parameters = storylineDetails_Parameters;

            #endregion

            #region MEMORIZE extra data

            _storedExtraData = extraData;

            #endregion

            #region MEMORIZE request details

            _storedClientRequestByObject = clientRequestByObject;
            _storedSystemRequestByName = systemRequestByName;
            _storedRequestName = systemRequestByName;
            _storedClientRequestByName = clientRequestByName;
            _storedClientRequestByNameParameters = clientRequestByNameParameters;

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

        public override object Action_1_Begin_Process()
        {
            #region RETURN EXPERIENCE HANDLER

            //This means our director of programming wanted us to play this experience.
            #region 1. Generate Brand Awareness Storylines

            #endregion

            #region 2. Generate Brand Trust Storylines

            if (_storedRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("EXPERIENCE_THE_MOVEMENT_TOFACEBOOKPAGE_DATATRANSFER"))
            {
                SocialMediaFactoryImplementer_NicheMaster_2_3_1_0 createExperience = new SocialMediaFactoryImplementer_NicheMaster_2_3_1_0(_storedExtraData);

                createExperience.APILocationLocalDotNetCore = "http://localhost:8992/storyline/basedi/io/socialmedia";
                createExperience.APILocationLocalNodeJS = "http://localhost:9992/storyline/basedi/io/socialmedia";

                createExperience.APILocationRemote = "https://storyline.basedi.io/socialmedia";

                return createExperience.Action(_storedClientORserverInstance, _storedCentralizedStorer, _storedCentralizedDisturber, _storedCentralizedSensor, _storedClientRequestByObject, _storedStorylineDetails, _storedStorylineDetails_Parameters, _storedRequestName, _storedClientRequestByName, _storedClientRequestByNameParameters);
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

            if (_storedRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("EXPERIENCE_THE_HEAR_OFTHEAPISERVER_MESSAGE"))
            {
                #region 12. Other

                WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0 createExperience = new WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0(_storedExtraData);

                createExperience.APILocationLocalNodeJS = "http://localhost:8912/storyline/basedi/io/webdevelopment";
                createExperience.APILocationLocalDotNetCore = "http://localhost:9912/storyline/basedi/io/webdevelopment";

                createExperience.APILocationRemote = "https://storyline.basedi.io/webdevelopment";

                return createExperience.Action(_storedClientORserverInstance, _storedCentralizedStorer, _storedCentralizedDisturber, _storedCentralizedSensor, _storedClientRequestByObject, _storedStorylineDetails, _storedStorylineDetails_Parameters, _storedRequestName, _storedClientRequestByName, _storedClientRequestByNameParameters);

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

        private IConfiguration _storedAppSettings = null;

        private Dictionary<string, object> _storedClientORserverInstance;

        private JObject _storedStorylineDetails;
        private JObject _storedStorylineDetails_Parameters;

        private aClass_Programming_ScriptRoutable_12_2_1_0 _storedClientRequestByObject;

        private ExtraData_12_2_1_0 _storedExtraData;

        private string _storedRequestName = "";
        private string _storedClientRequestByName = "";
        private string _storedClientRequestByNameParameters = "";

        private string _storedSystemRequestByName = "";

        #endregion

        #region 2. Ready

        internal Implement_DesignPattern_Factory_Storer_12_2_1_0(Dictionary<string, object> clientORserverInstance, JObject storylineDetails, JObject storylineDetails_Parameters, aClass_Programming_ScriptRoutable_12_2_1_0 clientRequestByObject, ExtraData_12_2_1_0 extraData = null, string systemRequestByName = "", string clientRequestByName = "", string clientRequestByNameParameters = "")
        {
            #region MEMORIZE app settings

            _storedAppSettings = (IConfiguration)clientORserverInstance["appSettings"];

            #endregion

            #region MEMORIZE clientOrServer instance

            _storedClientORserverInstance = clientORserverInstance;

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #region MEMORIZE storyline details

            _storedStorylineDetails = storylineDetails;
            _storedStorylineDetails_Parameters = storylineDetails_Parameters;

            #endregion

            #region MEMORIZE extra data

            _storedExtraData = extraData;

            #endregion

            #region MEMORIZE request details

            _storedClientRequestByObject = clientRequestByObject;
            _storedSystemRequestByName = systemRequestByName;
            _storedRequestName = systemRequestByName;
            _storedClientRequestByName = clientRequestByName;
            _storedClientRequestByNameParameters = clientRequestByNameParameters;

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

        #region EXECUTE LOGIC INSTUCTIONS

        public override JObject Action_1_Begin_Process()
        {
            #region 1. INPUTS     

            #region DEFINE data response

            JObject storedDataResponse = null;

            #endregion

            #region OVERRIDE client request names

            _storedClientRequestByName = "Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0";
            _storedClientRequestByNameParameters = "Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0-P1_0";

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #endregion

            #region 2. PROCESS

            try
            {
                #region EXECUTE storage request

                #region IDEAL CASE - USE storage handler
                
                if (_storedAppSettings == null) throw new Exception("[DISTURBANCE ISSUE] - Bug - ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.cs -> Implement_DesignPattern_Factory_Storer_12_2_1_0 -> Action_1_Begin_Process - BaseDI C# version will not work without an StoredAppSettings object. Please make sure that StoredAppSettings have a REQUIRED [StoredAppSettings:APP_SETTING_CONVERSION_MODE] value.");

                return storedDataResponse = new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0())
                  .SetupStoryline(_storedClientORserverInstance, _storedStorylineDetails, null, _storedExtraData, "", _storedClientRequestByName, _storedClientRequestByNameParameters)
                  .Action().Result;

                #endregion

                #endregion
            }
            catch (Exception)
            {
                #region HANDLE execution mistakes

                #region EDGE CASE - USE exception handler


                #endregion

                #endregion
            }

            #endregion

            #region 3. OUTPUT

            #region HANDLE execution response

            #region IDEAL CASE - USE data object

            return storedDataResponse;

            #endregion

            #endregion

            #endregion
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

        private IConfiguration _storedAppSettings = null;

        private Dictionary<string, object> _storedClientORserverInstance;

        private JObject _storedStorylineDetails;
        private JObject _storedStorylineDetails_Parameters;

        private aClass_Programming_ScriptRoutable_12_2_1_0 _storedClientRequestByObject;

        private ExtraData_12_2_1_0 _storedExtraData;

        private string _storedRequestName = "";
        private string _storedClientRequestByName = "";
        private string _storedClientRequestByNameParameters = "";

        private string _storedSystemRequestByName = "";

        #endregion

        #region 2. Ready

        internal Implement_DesignPattern_Factory_Disturber_12_2_1_0(Dictionary<string, object> clientORserverInstance, JObject storylineDetails, JObject storylineDetails_Parameters, aClass_Programming_ScriptRoutable_12_2_1_0 clientRequestByObject, ExtraData_12_2_1_0 extraData = null, string systemRequestByName = "", string clientRequestByName = "", string clientRequestByNameParameters = "")
        {
            #region MEMORIZE app settings

            _storedAppSettings = (IConfiguration)clientORserverInstance["appSettings"];

            #endregion

            #region MEMORIZE clientOrServer instance

            _storedClientORserverInstance = clientORserverInstance;

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #region MEMORIZE storyline details

            _storedStorylineDetails = storylineDetails;
            _storedStorylineDetails_Parameters = storylineDetails_Parameters;

            #endregion

            #region MEMORIZE extra data

            _storedExtraData = extraData;

            #endregion

            #region MEMORIZE request details

            _storedClientRequestByObject = clientRequestByObject;
            _storedSystemRequestByName = systemRequestByName;
            _storedRequestName = systemRequestByName;
            _storedClientRequestByName = clientRequestByName;
            _storedClientRequestByNameParameters = clientRequestByNameParameters;

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

        #region EXECUTE LOGIC INSTUCTIONS

        public override JObject Action_1_Begin_Process()
        {
            #region 1. INPUTS     

            #region DEFINE data response

            JObject storedDataResponse = null;

            #endregion

            #region OVERRIDE client request names

            _storedClientRequestByName = "Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0";
            _storedClientRequestByNameParameters = "Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0-P1_0";

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #endregion

            #region 2. PROCESS

            try
            {
                #region EXECUTE exception request

                #region IDEAL CASE - USE exception handler

                if (_storedAppSettings == null) throw new Exception("[DISTURBANCE ISSUE] - Bug - ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.cs -> Implement_DesignPattern_Factory_Disturber_12_2_1_0 -> Action_1_Begin_Process - BaseDI C# version will not work without an StoredAppSettings object. Please make sure that StoredAppSettings have a REQUIRED [StoredAppSettings:APP_SETTING_CONVERSION_MODE] value.");

                return storedDataResponse = new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0())
                  .SetupStoryline(_storedClientORserverInstance, _storedStorylineDetails, null, _storedExtraData, "", _storedClientRequestByName, _storedClientRequestByNameParameters)
                  .Action().Result;

                #endregion

                #endregion
            }
            catch (Exception)
            {
                #region HANDLE execution mistakes

                #region EDGE CASE - USE exception handler


                #endregion

                #endregion
            }

            #endregion

            #region 3. OUTPUT

            #region HANDLE execution response

            #region IDEAL CASE - USE data object

            return storedDataResponse;

            #endregion

            #endregion

            #endregion
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

        private IConfiguration _storedAppSettings = null;

        private Dictionary<string, object> _storedClientORserverInstance;

        private JObject _storedStorylineDetails;
        private JObject _storedStorylineDetails_Parameters;

        private aClass_Programming_ScriptRoutable_12_2_1_0 _storedClientRequestByObject;

        private ExtraData_12_2_1_0 _storedExtraData;

        private string _storedRequestName = "";
        private string _storedClientRequestByName = "";
        private string _storedClientRequestByNameParameters = "";

        private string _storedSystemRequestByName = "";

        #endregion

        #region 2. Ready

        internal Implement_DesignPattern_Factory_Sensor_12_2_1_0(Dictionary<string, object> clientORserverInstance, JObject storylineDetails, JObject storylineDetails_Parameters, aClass_Programming_ScriptRoutable_12_2_1_0 clientRequestByObject, ExtraData_12_2_1_0 extraData = null, string systemRequestByName = "", string clientRequestByName = "", string clientRequestByNameParameters = "")
        {
            #region MEMORIZE app settings

            _storedAppSettings = (IConfiguration)clientORserverInstance["appSettings"];

            #endregion

            #region MEMORIZE clientOrServer instance

            _storedClientORserverInstance = clientORserverInstance;

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #region MEMORIZE storyline details

            _storedStorylineDetails = storylineDetails;
            _storedStorylineDetails_Parameters = storylineDetails_Parameters;

            #endregion

            #region MEMORIZE extra data

            _storedExtraData = extraData;

            #endregion

            #region MEMORIZE request details

            _storedClientRequestByObject = clientRequestByObject;
            _storedSystemRequestByName = systemRequestByName;
            _storedRequestName = systemRequestByName;
            _storedClientRequestByName = clientRequestByName;
            _storedClientRequestByNameParameters = clientRequestByNameParameters;

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

        #region EXECUTE LOGIC INSTUCTIONS

        public override JObject Action_1_Begin_Process()
        {
            #region 1. INPUTS     

            #region DEFINE data response

            JObject storedDataResponse = null;

            #endregion

            #region OVERRIDE client request names

            _storedClientRequestByName = "Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0";
            _storedClientRequestByNameParameters = "Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0-P1_0";

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #endregion

            #region 2. PROCESS

            try
            {
                #region EXECUTE exception request

                #region IDEAL CASE - USE exception handler

                if (_storedAppSettings == null) throw new Exception("[DISTURBANCE ISSUE] - Bug - ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.cs -> Implement_DesignPattern_Factory_Sensor_12_2_1_0 -> Action_1_Begin_Process - BaseDI C# version will not work without an StoredAppSettings object. Please make sure that StoredAppSettings have a REQUIRED [StoredAppSettings:APP_SETTING_CONVERSION_MODE] value.");

                return storedDataResponse = new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0())
                  .SetupStoryline(_storedClientORserverInstance, _storedStorylineDetails, null, _storedExtraData, "", _storedClientRequestByName, _storedClientRequestByNameParameters)
                  .Action().Result;

                #endregion

                #endregion
            }
            catch (Exception)
            {
                #region HANDLE execution mistakes

                #region EDGE CASE - USE exception handler


                #endregion

                #endregion
            }

            #endregion

            #region 3. OUTPUT

            #region HANDLE execution response

            #region IDEAL CASE - USE data object

            return storedDataResponse;

            #endregion

            #endregion

            #endregion
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

