#region Imports

#region BaseDI

/////////////////////////////////////////////////////////////////////////////////////
//0. BaseDI Global Dependencies
/////////////////////////////////////////////////////////////////////////////////////
using BaseDI.Professional.Director.Programming_1;
using BaseDI.Professional.Script.Programming.Abstract_1;
using BaseDI.Professional.Script.Programming.Poco_1;
using BaseDI.Professional.Script.Programming_1;
/////////////////////////////////////////////////////////////////////////////////////

//1. Generate Brand Awareness
using BaseDI.Professional.Story.Advertising_1;

//2. Generate Brand Trust
using BaseDI.Professional.Story.Blogging_1;

//3. Generate Optin
using BaseDI.Professional.Story.Listing_Building_1;
using BaseDI.Professional.Story.Personal_Training_3;
using BaseDI.Professional.Story.Podcasting_2;

//4. Sell Low Ticket Offer
using BaseDI.Professional.Story.Supplements_1;

//5. Sell High Ticket Offer
using BaseDI.Professional.Story.Coaching_1;
using BaseDI.Professional.Story.Consulting_2;

//6. Sell Subscription Offer
using BaseDI.Professional.Story.Software_1;

//7. Sell Commission Offer
using BaseDI.Professional.Story.Affiliate_Revenue_1;

//8. Account Gain or Loss
using BaseDI.Professional.Story.Accounting_1;

//9. Improve Customer Service
using BaseDI.Professional.Story.Customer_Service_1;

//10. Perform Manual Task
using BaseDI.Professional.Story.Productivity_1;

//11. Automate Manual Task
using BaseDI.Professional.Script.Risk_Management.Extensions_0;
using BaseDI.Professional.Story.Risk_Management_1;
using BaseDI.Professional.Story.Social_Media_3;

//12. Other
using BaseDI.Professional.Story.Careers_Employment_1;
using BaseDI.Professional.Story.Web_Development_1;
using BaseDI.Professional.Story.Programming_1;
using BaseDI.Professional.Story.CMS_1;
using BaseDI.Professional.Story.Security_1;

#endregion

#region .Net Core

using Microsoft.Extensions.Configuration;

using System;
using System.Collections.Generic;
using System.Globalization;

#endregion 

#region 3rd Party Core

using Newtonsoft.Json.Linq;

#endregion

#endregion

namespace BaseDI.Professional.Story.Programming_1
{
    public class ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 : aClass_Programming_ScriptMasterLeader_12_2_1_0
    {
        #region 1. Assign

        //A. Variable Declaration 

        //SETTINGS
        private IConfiguration _storedProcessRequestSettings = null;

        //CLIENT/SERVER
        private aClass_Programming_ScriptRoutable_12_2_1_0 _storedClientRequestByObject = null;

        //MISC
        private ExtraData_12_2_1_0 _storedProcessRequestExtraData = null;

        //PLUMBING
        public Exception Mistake { get; set; }

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

            _storedProcessRequestExtraData = new ExtraData_12_2_1_0();
            _storedProcessRequestExtraData.MasterLeader = this;

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

        public aClass_Programming_ScriptRoutable_12_2_1_0 SetupStoryline(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS   

            #region VALIDATE input parameters

            Func<SingleParmPoco_12_2_1_0, bool> ValidateInputs = (SingleParmPoco_12_2_1_0 parameterInputs) =>
            {
                #region 1. INPUTS

                #region DEFINE process checkpoint

                bool storedProcessRequestMistakeMade = false;

                #endregion

                #region DEFINE stored message

                string storedOutputResponseMessage = "";

                #endregion

                #endregion

                #region 2. PROCESS

                #region EXECUTE validation process

                #region IDEAL CASE - USE valid information

                if (parameterInputs.Parameters.Count > 0)
                {
                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestTracker"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestTracker*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }
                    else
                    {
                        if (parameterInputs.Parameters["parameterProcessRequestTracker"]["storedProcessRequestSettings"] == null)
                        {
                            storedOutputResponseMessage += "***parameterProcessRequestTracker*** must contain a key of ***storedProcessRequestSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.Add(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestSettings"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestSettings*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestDataStorylineDetails"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestDataStorylineDetails_Parameters"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails_Parameters*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterInputRequestName"))
                    {
                        storedOutputResponseMessage += "***parameterInputRequestName*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterInputRequestNameDataCacheKey"))
                    {
                        storedOutputResponseMessage += "***parameterInputRequestNameDataCacheKey*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (storedProcessRequestMistakeMade)
                    {
                        #region EDGE CASE - USE exception handler

                        Console.WriteLine("\n***LEAKY PIPE*** PARSING parameter values failed!\n\n" + storedOutputResponseMessage);

                        #endregion
                    }
                }
                else
                {
                    #region EDGE CASE - USE blank return

                    return false;

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

            ///BEGIN valdation process
            ValidateInputs(parameterInputs);

            #endregion

            #region DEFINE request handler

            object stored_ReferenceTo_RequestHandler = null;

            #endregion

            #region DEFINE exception handler

            SingleParmPoco_12_2_1_0 stored_ExceptionDetails;

            #endregion

            #region MEMORIZE control client server

            Dictionary<string, object> storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

            parameterInputs.Parameters.Add("parameterClientRequestByObject", _storedClientRequestByObject);

            #endregion

            #region MEMORIZE app settings

            _storedProcessRequestSettings = (IConfiguration)storedProcessRequestTracker["storedProcessRequestSettings"];

            #endregion

            #region MEMORIZE action name

            string storedInputRequestActionName = storedProcessRequestTracker["storedInputRequestActionName"] as string;

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            if (storedProcessRequestTracker["storedProcessRequestStepNumber"] == null)
                storedProcessRequestTracker["storedProcessRequestStepNumber"] = 0;

            SingleParmPoco_12_2_1_0 storedDeveloperLoggingStartUpProcessInputs = (_storedProcessRequestExtraData?.KeyValuePairs?["storedProcessRequestDeveloperLoggingInputs"] != null ? _storedProcessRequestExtraData?.KeyValuePairs?["storedProcessRequestDeveloperLoggingInputs"] as SingleParmPoco_12_2_1_0 : null);

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "BEGIN processing request");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "SetupStoryline");

            //OPTIONAL
            storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseOPTIONALBeginOfProcess", true);

            if (storedDeveloperLoggingStartUpProcessInputs != null)
            {
                storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseOPTIONALMasterLeaderIsSecondStep", storedDeveloperLoggingStartUpProcessInputs.Parameters["parameterOutputResponseOPTIONALMasterLeaderIsSecondStep"]);

                if (storedDeveloperLoggingStartUpProcessInputs.Parameters["parameterOutputResponseOPTIONALMasterLeaderIsSecondStep"] == true)
                {
                    storedProcessRequestDeveloperLoggingInputs.Parameters["parameterOutputResponseOPTIONALBeginOfProcess"] = false;
                }
            }

            #endregion

            #region MEMORIZE extra data

            if (parameterInputs.Parameters["parameterExtraData"] != null)
                _storedProcessRequestExtraData = parameterInputs.Parameters["parameterExtraData"];

            #endregion

            #region MEMORIZE request details

            string storedClientRequestByName = parameterInputs.Parameters["parameterInputRequestName"];
            string storedClientRequestByNameParameters = parameterInputs.Parameters["parameterInputRequestNameDataCacheKey"];
           
            string storedSystemRequestByName = parameterInputs.Parameters["parameterSystemRequestByName"] ? parameterInputs.Parameters["parameterSystemRequestByName"] : "";

            #endregion

            #region MEMORIZE request resolver

            aClass_Programming_ScriptRoutable_12_2_1_0 stored_DirectorOrExperienceRequestHandler = null;
            Use_DesignPattern_Builder_Chapter_12_2_1_0 stored_ResolvedRequestHandler = new Use_DesignPattern_Builder_Chapter_12_2_1_0(parameterInputs);

            #endregion

            #region MEMORIZE storyline details

            JObject storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            JObject storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails_Parameters"];

            #endregion

            #endregion

            #region 2. PROCESS

            try
            {
                #region FIND request handler

                #region EDGE CASE - USE developer logger

                if (storedProcessRequestDeveloperMode && (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] == 0)
                    Console.WriteLine("STEP " + storedProcessRequestTracker["storedProcessRequestStepNumber"] + ": BEGIN processing request -> " + storedInputRequestActionName);

                #endregion

                #region IDEAL CASE - USE an experience OR a director request handler

                //NOTE: 1. The Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0 is called "TWICE" per request.
                   //A: The first time is to "MERGE" the data objects of "StorylineDetails" and "StorylineDetails_Parameters" into ONE SINGLE data object.
                   //B: The second time is to call the "ACTION" method off the "ENTRYPOINT" property from inside the "IF" statement below.
                stored_ReferenceTo_RequestHandler = stored_ResolvedRequestHandler.Action();

                if (storedSystemRequestByName != "")
                {
                    stored_DirectorOrExperienceRequestHandler = (aClass_Programming_ScriptRoutable_12_2_1_0)stored_ReferenceTo_RequestHandler;

                    stored_DirectorOrExperienceRequestHandler.RequestID = storedSystemRequestByName;
                    stored_DirectorOrExperienceRequestHandler.ClientOrServerInstance = storedProcessRequestTracker;

                    _storedClientRequestByObject.ClientOrServerInstance = storedProcessRequestTracker;

                    _storedClientRequestByObject.DirectorOrExperienceRequestHandler = stored_DirectorOrExperienceRequestHandler;
                    _storedClientRequestByObject.ExtraData = _storedProcessRequestExtraData;

                    _storedClientRequestByObject.MasterLeader = stored_DirectorOrExperienceRequestHandler.MasterLeader;

                    _storedClientRequestByObject.StorylineDetails = stored_DirectorOrExperienceRequestHandler.StorylineDetails;
                    _storedClientRequestByObject.StorylineDetails_Parameters = stored_DirectorOrExperienceRequestHandler.StorylineDetails_Parameters;

                    stored_ReferenceTo_RequestHandler = _storedClientRequestByObject;
                }

                #endregion

                #endregion
            }
            catch (Exception mistake)
            {
                #region EDGE CASE - USE exception handler

                stored_ExceptionDetails = new SingleParmPoco_12_2_1_0();

                stored_ExceptionDetails.Parameters.Add("storedClientRequestByName", storedClientRequestByName);
                stored_ExceptionDetails.Parameters.Add("storedClientRequestByNameParameters", storedClientRequestByNameParameters);

                stored_ExceptionDetails.Parameters.Add("storedProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);

                stored_ExceptionDetails.Parameters.Add("storedProcessRequestTracker", storedProcessRequestTracker);
                stored_ExceptionDetails.Parameters.Add("storedProcessRequestExtraData", _storedProcessRequestExtraData);
                stored_ExceptionDetails.Parameters.Add("storedProcessRequestMistakes", mistake);

                throw Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Control_DeveloperException_1_0(stored_ExceptionDetails).Result;

                #endregion
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

        //SETTINGS
        private IConfiguration _storedProcessRequestSettings = null;

        //CLIENT/SERVER
        private Dictionary<string, object> _storedProcessRequestTracker;

        private string _storedClientRequestByName;
        private string _storedClientRequestByNameParameters;

        private aClass_Programming_ScriptRoutable_12_2_1_0 _storedClientRequestByObject;

        //DATASETS
        private JObject _storedProcessRequestDataStorylineDetails;
        private JObject _storedProcessRequestDataStorylineDetails_Parameters;

        //MISC
        private ExtraData_12_2_1_0 _storedProcessRequestExtraData;

        //PLUMBING
        private SingleParmPoco_12_2_1_0 _storedParameterInputs;

        private string _storedRequestName = "";
        private string _storedSystemRequestByName;

        #endregion

        #region 2. Ready

        internal Use_DesignPattern_Builder_Chapter_12_2_1_0(SingleParmPoco_12_2_1_0 parameterInputs) //Dictionary<string, object> parameterProcessRequestTracker, JObject parameterProcessRequestDataStorylineDetails, JObject parameterProcessRequestDataStorylineDetails_Parameters, aClass_Programming_ScriptRoutable_12_2_1_0 parameterClientRequestByObject, ExtraData_12_2_1_0 parameterExtraData = null, string parameterSystemRequestByName = "", string parameterInputRequestName = "", string parameterInputRequestNameDataCacheKey = ""
        {
            #region 1. INPUTS     

            #region MEMORIZE control client server

            _storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

            #endregion

            #region MEMORIZE app settings

            _storedProcessRequestSettings = (IConfiguration)_storedProcessRequestTracker["storedProcessRequestSettings"];

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #region MEMORIZE extra data

            _storedProcessRequestExtraData = parameterInputs.Parameters["parameterExtraData"];

            #endregion

            #region MEMORIZE request details

            _storedClientRequestByName = parameterInputs.Parameters["parameterInputRequestName"];
            _storedClientRequestByNameParameters = parameterInputs.Parameters["parameterInputRequestNameDataCacheKey"];

            _storedClientRequestByObject = parameterInputs.Parameters["parameterClientRequestByObject"];

            _storedSystemRequestByName = parameterInputs.Parameters["parameterSystemRequestByName"];

            _storedParameterInputs = parameterInputs;

            #endregion

            #region MEMORIZE storyline details

            _storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            _storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails_Parameters"];

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

            #region MEMORIZE action name

            string storedInputRequestActionName = _storedProcessRequestTracker["storedInputRequestActionName"] as string;

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #region MEMORIZE execution strategy

            var storedExeuctionStragety = new Implement_DesignPattern_Builder_Chapter_12_2_1_0(_storedParameterInputs);

            #endregion

            #region MEMORIZE resolved request handler

            object stored_Resolved_EXPERIENCEorDIRECTOR_RequestHandler = null;

            #endregion

            #endregion

            #region 2. PROCESS

            #region FIND request handler

            try
            {
                #region IDEAL CASE - USE an experience OR a director request handler

                storedExeuctionStragety.Action_1_Begin_Process();
                stored_Resolved_EXPERIENCEorDIRECTOR_RequestHandler = storedExeuctionStragety.Action_10_End_Process();

                #endregion
            }
            catch (Exception mistake)
            {
                #region EDGE CASE - USE exception handler

                throw mistake;

                #endregion
            }

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

        //SETTINGS
        private IConfiguration _storedProcessRequestSettings = null;

        //CLIENT/SERVER
        internal Dictionary<string, object> _storedProcessRequestTracker;

        private string _storedClientRequestByName = "";
        private string _storedClientRequestByNameParameters = "";

        private aClass_Programming_ScriptRoutable_12_2_1_0 _storedClientRequestByObject;

        //DATASETS
        private JObject _storedProcessRequestDataStorylineDetails;
        private JObject _storedProcessRequestDataStorylineDetails_Parameters;

        //MISC
        private ExtraData_12_2_1_0 _storedProcessRequestExtraData;

        //PLUMBING
        private SingleParmPoco_12_2_1_0 _storedParameterInputs;

        private string _storedRequestName = "";
        private string _storedSystemRequestByName;

        #endregion

        #region 2. Ready

        internal Implement_DesignPattern_Builder_Chapter_12_2_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS        

            #region MEMORIZE control client server

            _storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

            #endregion

            #region MEMORIZE app settings

            _storedProcessRequestSettings = (IConfiguration)_storedProcessRequestTracker["storedProcessRequestSettings"];

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #region MEMORIZE extra data

            _storedProcessRequestExtraData = parameterInputs.Parameters["parameterExtraData"];

            #endregion

            #region MEMORIZE request details

            _storedClientRequestByName = parameterInputs.Parameters["parameterInputRequestName"];
            _storedClientRequestByNameParameters = parameterInputs.Parameters["parameterInputRequestNameDataCacheKey"];

            _storedClientRequestByObject = parameterInputs.Parameters["parameterClientRequestByObject"];

            _storedSystemRequestByName = parameterInputs.Parameters["parameterSystemRequestByName"];

            _storedParameterInputs = parameterInputs;

            #endregion

            #region MEMORIZE storyline details

            _storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            _storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails_Parameters"];

            #endregion/\

            #endregion

            #region 2. PROCESS


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

        public override object Action_1_Begin_Process()
        {
            #region 1. INPUTS   

            #endregion

            #region 2. PROCESS

            #region STORE request name

            #region IDEAL CASE - USE request by object

            if (string.IsNullOrEmpty(_storedSystemRequestByName))
            {
                _storedRequestName = _storedClientRequestByObject != null ? _storedClientRequestByObject.GetType().Name : _storedClientRequestByName;
            }
            else
            {
                _storedRequestName = _storedSystemRequestByName;
            }

            #endregion

            #endregion

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

            Implement_DesignPattern_Factory_Experience_12_2_1_0 storedExperienceRequestHandler = new Implement_DesignPattern_Factory_Experience_12_2_1_0(_storedParameterInputs);

            #endregion

            #region MEMORIZE director request handler

            Implement_DesignPattern_Factory_Director_12_2_1_0 _stored_DirectorRequestHandler = new Implement_DesignPattern_Factory_Director_12_2_1_0(_storedParameterInputs);

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #endregion

            #region 2. PROCESS

            #region PICK experience OR director

            try
            {
                #region IDEAL CASE - USE director request handler

                if (_storedRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_"))
                {
                    return _stored_DirectorRequestHandler.Action_1_Begin_Process();
                }

                #endregion

                #region EDGE CASE - USE experience request handler

                if (_storedRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("EXPERIENCE_THE_"))
                {
                    return storedExperienceRequestHandler.Action_1_Begin_Process();
                }

                #endregion
            }
            catch (Exception mistake)
            {
                #region EDGE CASE - USE exception handler

                throw mistake;

                #endregion
            }

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

        //SETTINGS
        private IConfiguration _storedProcessRequestSettings = null;

        //CLIENT/SERVER
        private Dictionary<string, object> _storedProcessRequestTracker;

        private aClass_Programming_ScriptRoutable_12_2_1_0 _storedClientRequestByObject;

        private string _storedClientRequestByName = "";
        private string _storedClientRequestByNameParameters = "";

        //DATASETS
        private JObject _storedProcessRequestDataStorylineDetails;
        private JObject _storedProcessRequestDataStorylineDetails_Parameters;

        //MISC
        private ExtraData_12_2_1_0 _storedProcessRequestExtraData;

        //PLUMBING
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedProcessRequestCentralizedStorer;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _stored_CentralizedDisturber;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _stored_CentralizedSensor;

        private SingleParmPoco_12_2_1_0 _storedParameterInputs;

        private string _storedRequestName = "";
        private string _storedSystemRequestByName;

        #endregion

        #region 2. Ready

        internal Implement_DesignPattern_Factory_Director_12_2_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS     

            #region MEMORIZE control client server

            _storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

            #endregion

            #region MEMORIZE app settings

            _storedProcessRequestSettings = (IConfiguration)_storedProcessRequestTracker["storedProcessRequestSettings"];

            #endregion

            #region MEMORIZE centralized processes handlers   

            if (_stored_CentralizedDisturber == null)
            {
                _stored_CentralizedDisturber = new Implement_DesignPattern_Factory_Disturber_12_2_1_0(_storedParameterInputs);

                parameterInputs.Parameters.Add("parameterProcessRequestCentralizedDisturber", _stored_CentralizedDisturber);
            }

            if (_stored_CentralizedSensor == null)
            {
                _stored_CentralizedSensor = new Implement_DesignPattern_Factory_Sensor_12_2_1_0(_storedParameterInputs);

                parameterInputs.Parameters.Add("parameterProcessRequestCentralizedSensor", _stored_CentralizedSensor);
            }

            if (_storedProcessRequestCentralizedStorer == null)
            {
                _storedProcessRequestCentralizedStorer = new Implement_DesignPattern_Factory_Storer_12_2_1_0(_storedParameterInputs);

                parameterInputs.Parameters.Add("parameterProcessRequestCentralizedStorer", _storedProcessRequestCentralizedStorer);
            }

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #region MEMORIZE storyline details

            _storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            _storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails_Parameters"];

            #endregion

            #region MEMORIZE extra data

            _storedProcessRequestExtraData = parameterInputs.Parameters["parameterExtraData"];

            #endregion

            #region MEMORIZE request details

            _storedClientRequestByName = parameterInputs.Parameters["parameterInputRequestName"];
            _storedClientRequestByNameParameters = parameterInputs.Parameters["parameterInputRequestNameDataCacheKey"];

            _storedClientRequestByObject = parameterInputs.Parameters["parameterClientRequestByObject"];

            _storedRequestName = parameterInputs.Parameters["parameterSystemRequestByName"];
            _storedSystemRequestByName = parameterInputs.Parameters["parameterSystemRequestByName"];

            _storedParameterInputs = parameterInputs;

            #endregion

            #endregion

            #region 2. PROCESS

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

        public override object Action_1_Begin_Process()
        {
            #region 1. INPUTS  

            #region DEFINE director request handlers

            AdvertisingFactoryImplementer_NicheMaster_1_1_1_0 _1_1_stored_Director_Of_Advertising_RequestHandler = null;
            
            BloggingFactoryImplementer_NicheMaster_2_1_1_0 _2_1_stored_Director_Of_Blogging_RequestHandler = null;
            PodcastingFactoryImplementer_NicheMaster_2_2_1_0 _2_2_stored_Director_Of_Podcasting_RequestHandler = null;
            SocialMediaFactoryImplementer_NicheMaster_2_3_1_0 _2_3_stored_Director_Of_SocialMedia_RequestHandler = null;

            ListBuildingFactoryImplementer_NicheMaster_3_1_1_0 _3_1_stored_Director_Of_ListBuilding_RequestHandler = null;

            SupplementsFactoryImplementer_NicheMaster_4_1_1_0 _4_1_stored_Director_Of_Supplements_RequestHandler = null;

            CoachingFactoryImplementer_NicheMaster_5_1_1_0 _5_1_stored_Director_Of_Coaching_RequestHandler = null;
            ConsultingFactoryImplementer_NicheMaster_5_2_1_0 _5_2_stored_Director_Of_Consulting_RequestHandler = null;
            PersonalTrainingFactoryImplementer_NicheMaster_5_3_1_0 _5_3_stored_Director_Of_PersonalTraining_RequestHandler = null;

            SoftwareFactoryImplementer_NicheMaster_6_1_1_0 _6_1_stored_Director_Of_Software_RequestHandler = null;

            AffiliateRevenueFactoryImplementer_NicheMaster_7_1_1_0 _7_1_stored_Director_Of_AffiliateRevenue_RequestHandler = null;

            AccountingFactoryImplementer_NicheMaster_8_1_1_0 _8_1_stored_Director_Of_Accounting_RequestHandler = null;

            CustomerServiceFactoryImplementer_NicheMaster_9_1_1_0 _9_1_stored_Director_Of_CustomerService_RequestHandler = null;

            ProductivityFactoryImplementer_NicheMaster_10_1_1_0 _10_1_stored_Director_Of_Productivity_RequestHandler = null;

            RiskManagementFactoryTester_NicheMaster_11_1_1_0 _11_1_stored_Director_Of_RiskManagement_RequestHandler = null;
            
            CareersEmploymentFactoryImplementer_NicheMaster_12_1_1_0 _12_1_stored_Director_Of_Careers_RequestHandler = null;
            ProgrammingFactoryImplementer_NicheMaster_12_2_1_0 _12_2_stored_Director_Of_Programming_RequestHandler = null;
            WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0 _12_3_stored_Director_Of_WebDevelopment_RequestHandler = null;
            CMSFactoryImplementer_NicheMaster_12_4_1_0 _12_4_stored_Director_Of_CMS_RequestHandler = null;
            SecurityFactoryImplementer_NicheMaster_12_5_1_0 _12_5_stored_Director_Of_Security_RequestHandler = null;


            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #endregion

            #region 2. PROCESS

            #region ASSIGN request handler

            try
            {
                #region IDEAL CASE - USE a director

                if (_storedRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_PROGRAMMING"))
                {
                    #region 12. Other

                    _12_2_stored_Director_Of_Programming_RequestHandler = new ProgrammingFactoryImplementer_NicheMaster_12_2_1_0(_storedParameterInputs);
                    
                    _12_2_stored_Director_Of_Programming_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6912/storyline/basedi/io/programming";
                    _12_2_stored_Director_Of_Programming_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7912/storyline/basedi/io/programming";

                    _12_2_stored_Director_Of_Programming_RequestHandler.APILocationLocalNodeJS = "https://localhost:8912/storyline/basedi/io/programming";
                    _12_2_stored_Director_Of_Programming_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9912/storyline/basedi/io/programming";

                    _12_2_stored_Director_Of_Programming_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/programming";

                    return _12_2_stored_Director_Of_Programming_RequestHandler.Action(_storedParameterInputs);

                    #endregion
                }
                else
                {
                    //This means our director of programming wanted us to play this storyline.
                    #region 1. Generate Brand Awareness Storylines

                    if (_storedRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_ADVERTISING"))
                    {
                        _1_1_stored_Director_Of_Advertising_RequestHandler = new AdvertisingFactoryImplementer_NicheMaster_1_1_1_0(_storedParameterInputs);

                        _1_1_stored_Director_Of_Advertising_RequestHandler.APILocationLocalDotNetCore = "http://localhost:6991/storyline/basedi/io/advertising";
                        _1_1_stored_Director_Of_Advertising_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7991/storyline/basedi/io/advertising";

                        _1_1_stored_Director_Of_Advertising_RequestHandler.APILocationLocalNodeJS = "https://localhost:8991/storyline/basedi/io/advertising";
                        _1_1_stored_Director_Of_Advertising_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9991/storyline/basedi/io/advertising";

                        _1_1_stored_Director_Of_Advertising_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/advertising";

                        return _1_1_stored_Director_Of_Advertising_RequestHandler.Action(_storedParameterInputs);
                    }

                    #endregion

                    #region 2. Generate Brand Trust Storylines

                    if (_storedRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_BLOGGING"))
                    {
                        _2_1_stored_Director_Of_Blogging_RequestHandler = new BloggingFactoryImplementer_NicheMaster_2_1_1_0(_storedParameterInputs);
                        
                        _2_1_stored_Director_Of_Blogging_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6992/storyline/basedi/io/blogging";
                        _2_1_stored_Director_Of_Blogging_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7992/storyline/basedi/io/blogging";

                        _2_1_stored_Director_Of_Blogging_RequestHandler.APILocationLocalNodeJS = "https://localhost:8992/storyline/basedi/io/blogging";
                        _2_1_stored_Director_Of_Blogging_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9992/storyline/basedi/io/blogging";

                        _2_1_stored_Director_Of_Blogging_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/blogging";

                        return _2_1_stored_Director_Of_Blogging_RequestHandler.Action(_storedParameterInputs);
                    }

                    if (_storedRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_PODCASTING"))
                    {
                        _2_2_stored_Director_Of_Podcasting_RequestHandler = new PodcastingFactoryImplementer_NicheMaster_2_2_1_0(_storedParameterInputs);

                        _2_2_stored_Director_Of_Podcasting_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6992/storyline/basedi/io/podcasting";
                        _2_2_stored_Director_Of_Podcasting_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7992/storyline/basedi/io/podcasting";

                        _2_2_stored_Director_Of_Podcasting_RequestHandler.APILocationLocalNodeJS = "https://localhost:8992/storyline/basedi/io/podcasting";
                        _2_2_stored_Director_Of_Podcasting_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9992/storyline/basedi/io/podcasting";

                        _2_2_stored_Director_Of_Podcasting_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/podcasting";

                        return _2_2_stored_Director_Of_Podcasting_RequestHandler.Action(_storedParameterInputs);
                    }

                    if (_storedRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_SOCIALMEDIA"))
                    {
                        _2_3_stored_Director_Of_SocialMedia_RequestHandler = new SocialMediaFactoryImplementer_NicheMaster_2_3_1_0(_storedParameterInputs);

                        _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6992/storyline/basedi/io/socialmedia";
                        _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7992/storyline/basedi/io/socialmedia";

                        _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationLocalNodeJS = "https://localhost:8992/storyline/basedi/io/socialmedia";
                        _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9992/storyline/basedi/io/socialmedia";

                        _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/socialmedia";

                        return _2_3_stored_Director_Of_SocialMedia_RequestHandler.Action(_storedParameterInputs);
                    }

                    #endregion

                    #region 3. Generate Optin Storylines

                    if (_storedRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_LISTBUILDING"))
                    {
                        _3_1_stored_Director_Of_ListBuilding_RequestHandler = new ListBuildingFactoryImplementer_NicheMaster_3_1_1_0(_storedParameterInputs);

                        _3_1_stored_Director_Of_ListBuilding_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6993/storyline/basedi/io/listbuilding";
                        _3_1_stored_Director_Of_ListBuilding_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7993/storyline/basedi/io/listbuilding";

                        _3_1_stored_Director_Of_ListBuilding_RequestHandler.APILocationLocalNodeJS = "https://localhost:8993/storyline/basedi/io/listbuilding";
                        _3_1_stored_Director_Of_ListBuilding_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9993/storyline/basedi/io/listbuilding";

                        _3_1_stored_Director_Of_ListBuilding_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/listbuilding";

                        return _3_1_stored_Director_Of_ListBuilding_RequestHandler.Action(_storedParameterInputs);
                    }

                    #endregion

                    #region 4. Sell Low Ticket Offer Storylines

                    if (_storedRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_SUPPLEMENTS"))
                    {
                        _4_1_stored_Director_Of_Supplements_RequestHandler = new SupplementsFactoryImplementer_NicheMaster_4_1_1_0(_storedParameterInputs);

                        _4_1_stored_Director_Of_Supplements_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6994/storyline/basedi/io/supplements";
                        _4_1_stored_Director_Of_Supplements_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7994/storyline/basedi/io/supplements";

                        _4_1_stored_Director_Of_Supplements_RequestHandler.APILocationLocalNodeJS = "https://localhost:8994/storyline/basedi/io/supplements";
                        _4_1_stored_Director_Of_Supplements_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9994/storyline/basedi/io/supplements";

                        _4_1_stored_Director_Of_Supplements_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/supplements";

                        return _4_1_stored_Director_Of_Supplements_RequestHandler.Action(_storedParameterInputs);
                    }

                    #endregion

                    #region 5. Sell High Ticket Offer Storylines

                    if (_storedRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_COACHING"))
                    {
                        _5_1_stored_Director_Of_Coaching_RequestHandler = new CoachingFactoryImplementer_NicheMaster_5_1_1_0(_storedParameterInputs);

                        _5_1_stored_Director_Of_Coaching_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6995/storyline/basedi/io/coaching";
                        _5_1_stored_Director_Of_Coaching_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7995/storyline/basedi/io/coaching";

                        _5_1_stored_Director_Of_Coaching_RequestHandler.APILocationLocalNodeJS = "https://localhost:8995/storyline/basedi/io/coaching";
                        _5_1_stored_Director_Of_Coaching_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9995/storyline/basedi/io/coaching";

                        _5_1_stored_Director_Of_Coaching_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/coaching";

                        return _5_1_stored_Director_Of_Coaching_RequestHandler.Action(_storedParameterInputs);
                    }

                    if (_storedRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_CONSULTING"))
                    {
                        _5_2_stored_Director_Of_Consulting_RequestHandler = new ConsultingFactoryImplementer_NicheMaster_5_2_1_0(_storedParameterInputs);

                        _5_2_stored_Director_Of_Consulting_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6995/storyline/basedi/io/consulting";
                        _5_2_stored_Director_Of_Consulting_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7995/storyline/basedi/io/consulting";

                        _5_2_stored_Director_Of_Consulting_RequestHandler.APILocationLocalNodeJS = "https://localhost:8995/storyline/basedi/io/consulting";
                        _5_2_stored_Director_Of_Consulting_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9995/storyline/basedi/io/consulting";

                        _5_2_stored_Director_Of_Consulting_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/consulting";

                        return _5_2_stored_Director_Of_Consulting_RequestHandler.Action(_storedParameterInputs);
                    }

                    if (_storedRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_PERSONALTRAINING"))
                    {
                        _5_3_stored_Director_Of_PersonalTraining_RequestHandler = new PersonalTrainingFactoryImplementer_NicheMaster_5_3_1_0(_storedParameterInputs);

                        _5_3_stored_Director_Of_PersonalTraining_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6995/storyline/basedi/io/personaltraining";
                        _5_3_stored_Director_Of_PersonalTraining_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7995/storyline/basedi/io/personaltraining";

                        _5_3_stored_Director_Of_PersonalTraining_RequestHandler.APILocationLocalNodeJS = "https://localhost:8995/storyline/basedi/io/personaltraining";
                        _5_3_stored_Director_Of_PersonalTraining_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9995/storyline/basedi/io/personaltraining";

                        _5_3_stored_Director_Of_PersonalTraining_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/personaltraining";

                        return _5_3_stored_Director_Of_PersonalTraining_RequestHandler.Action(_storedParameterInputs);
                    }

                    #endregion

                    #region 6. Sell Subscription Offer Storylines

                    if (_storedRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_SOFTWARE"))
                    {
                        _6_1_stored_Director_Of_Software_RequestHandler = new SoftwareFactoryImplementer_NicheMaster_6_1_1_0(_storedParameterInputs);

                        _6_1_stored_Director_Of_Software_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6996/storyline/basedi/io/software";
                        _6_1_stored_Director_Of_Software_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7996/storyline/basedi/io/software";

                        _6_1_stored_Director_Of_Software_RequestHandler.APILocationLocalNodeJS = "https://localhost:8996/storyline/basedi/io/software";
                        _6_1_stored_Director_Of_Software_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9996/storyline/basedi/io/software";

                        _6_1_stored_Director_Of_Software_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/software";

                        return _6_1_stored_Director_Of_Software_RequestHandler.Action(_storedParameterInputs);
                    }

                    #endregion

                    #region 7. Sell Commission Offer Storylines

                    if (_storedRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_AFFILIATEREVENUE"))
                    {
                        _7_1_stored_Director_Of_AffiliateRevenue_RequestHandler = new AffiliateRevenueFactoryImplementer_NicheMaster_7_1_1_0(_storedParameterInputs);

                        _7_1_stored_Director_Of_AffiliateRevenue_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6997/storyline/basedi/io/affiliaterevenue";
                        _7_1_stored_Director_Of_AffiliateRevenue_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7997/storyline/basedi/io/affiliaterevenue";

                        _7_1_stored_Director_Of_AffiliateRevenue_RequestHandler.APILocationLocalNodeJS = "https://localhost:8997/storyline/basedi/io/affiliaterevenue";
                        _7_1_stored_Director_Of_AffiliateRevenue_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9997/storyline/basedi/io/affiliaterevenue";

                        _7_1_stored_Director_Of_AffiliateRevenue_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/affiliaterevenue";

                        return _7_1_stored_Director_Of_AffiliateRevenue_RequestHandler.Action(_storedParameterInputs);
                    }

                    #endregion

                    #region 8. Account Loss or Gain Storylines

                    if (_storedRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_ACCOUNTING"))
                    {
                        _8_1_stored_Director_Of_Accounting_RequestHandler = new AccountingFactoryImplementer_NicheMaster_8_1_1_0(_storedParameterInputs);

                        _8_1_stored_Director_Of_Accounting_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6998/storyline/basedi/io/accounting";
                        _8_1_stored_Director_Of_Accounting_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7998/storyline/basedi/io/accounting";

                        _8_1_stored_Director_Of_Accounting_RequestHandler.APILocationLocalNodeJS = "https://localhost:8998/storyline/basedi/io/accounting";
                        _8_1_stored_Director_Of_Accounting_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9998/storyline/basedi/io/accounting";

                        _8_1_stored_Director_Of_Accounting_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/accounting";

                        return _8_1_stored_Director_Of_Accounting_RequestHandler.Action(_storedParameterInputs);
                    }

                    #endregion

                    #region 9. Customer Service Storylines

                    if (_storedRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_CUSTOMERSERVICE"))
                    {
                        _9_1_stored_Director_Of_CustomerService_RequestHandler = new CustomerServiceFactoryImplementer_NicheMaster_9_1_1_0(_storedParameterInputs);

                        _9_1_stored_Director_Of_CustomerService_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6999/storyline/basedi/io/customerservice";
                        _9_1_stored_Director_Of_CustomerService_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7999/storyline/basedi/io/customerservice";

                        _9_1_stored_Director_Of_CustomerService_RequestHandler.APILocationLocalNodeJS = "https://localhost:8999/storyline/basedi/io/customerservice";
                        _9_1_stored_Director_Of_CustomerService_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9999/storyline/basedi/io/customerservice";

                        _9_1_stored_Director_Of_CustomerService_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/customerservice";

                        return _9_1_stored_Director_Of_CustomerService_RequestHandler.Action(_storedParameterInputs);
                    }

                    #endregion

                    #region 10. Perform Manual Task Storylines

                    if (_storedRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_PRODUCTIVITY"))
                    {
                        _10_1_stored_Director_Of_Productivity_RequestHandler = new ProductivityFactoryImplementer_NicheMaster_10_1_1_0(_storedParameterInputs);

                        _10_1_stored_Director_Of_Productivity_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6910/storyline/basedi/io/productivity";
                        _10_1_stored_Director_Of_Productivity_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7910/storyline/basedi/io/productivity";

                        _10_1_stored_Director_Of_Productivity_RequestHandler.APILocationLocalNodeJS = "https://localhost:8910/storyline/basedi/io/productivity";
                        _10_1_stored_Director_Of_Productivity_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9910/storyline/basedi/io/productivity";

                        _10_1_stored_Director_Of_Productivity_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/productivity";

                        return _10_1_stored_Director_Of_Productivity_RequestHandler.Action(_storedParameterInputs);
                    }

                    #endregion

                    #region 11. Automate Manual Task Storylines

                    if (_storedRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_RISKMANAGEMENT"))
                    {
                        _11_1_stored_Director_Of_RiskManagement_RequestHandler = new RiskManagementFactoryTester_NicheMaster_11_1_1_0(_storedParameterInputs);

                        _11_1_stored_Director_Of_RiskManagement_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6911/storyline/basedi/io/riskmanagement";
                        _11_1_stored_Director_Of_RiskManagement_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7911/storyline/basedi/io/riskmanagement";

                        _11_1_stored_Director_Of_RiskManagement_RequestHandler.APILocationLocalNodeJS = "https://localhost:8911/storyline/basedi/io/riskmanagement";
                        _11_1_stored_Director_Of_RiskManagement_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9911/storyline/basedi/io/riskmanagement";

                        _11_1_stored_Director_Of_RiskManagement_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/riskmanagement";

                        return _11_1_stored_Director_Of_RiskManagement_RequestHandler.Action(_storedParameterInputs);
                    }

                    #endregion

                    #region 12. Other Storylines

                    if (_storedRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_CAREERSEMPLOYMENT"))
                    {
                        _12_1_stored_Director_Of_Careers_RequestHandler = new CareersEmploymentFactoryImplementer_NicheMaster_12_1_1_0(_storedParameterInputs);

                        _12_1_stored_Director_Of_Careers_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6912/storyline/basedi/io/careersemployment";
                        _12_1_stored_Director_Of_Careers_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7912/storyline/basedi/io/careersemployment";

                        _12_1_stored_Director_Of_Careers_RequestHandler.APILocationLocalNodeJS = "https://localhost:8912/storyline/basedi/io/careersemployment";
                        _12_1_stored_Director_Of_Careers_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9912/storyline/basedi/io/careersemployment";

                        _12_1_stored_Director_Of_Careers_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/careersemployment";

                        return _12_1_stored_Director_Of_Careers_RequestHandler.Action(_storedParameterInputs);
                    }

                    if (_storedRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_WEBDEVELOPMENT"))
                    {
                        _12_3_stored_Director_Of_WebDevelopment_RequestHandler = new WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0(_storedParameterInputs);

                        _12_3_stored_Director_Of_WebDevelopment_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6912/storyline/basedi/io/webdevelopment";
                        _12_3_stored_Director_Of_WebDevelopment_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7912/storyline/basedi/io/webdevelopment";

                        _12_3_stored_Director_Of_WebDevelopment_RequestHandler.APILocationLocalNodeJS = "https://localhost:8912/storyline/basedi/io/webdevelopment";
                        _12_3_stored_Director_Of_WebDevelopment_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9912/storyline/basedi/io/webdevelopment";

                        _12_3_stored_Director_Of_WebDevelopment_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/webdevelopment";

                        return _12_3_stored_Director_Of_WebDevelopment_RequestHandler.Action(_storedParameterInputs);
                    }

                    if (_storedRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_CMS"))
                    {
                        _12_4_stored_Director_Of_CMS_RequestHandler = new CMSFactoryImplementer_NicheMaster_12_4_1_0(_storedParameterInputs);

                        _12_4_stored_Director_Of_CMS_RequestHandler.APILocationLocalNodeJS = "https://localhost:6912/storyline/basedi/io/cms";
                        _12_4_stored_Director_Of_CMS_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:7912/storyline/basedi/io/cms";

                        _12_4_stored_Director_Of_CMS_RequestHandler.APILocationLocalDotNetCore = "https://localhost:8912/storyline/basedi/io/cms";
                        _12_4_stored_Director_Of_CMS_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:9912/storyline/basedi/io/cms";

                        _12_4_stored_Director_Of_CMS_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/cms";

                        return _12_4_stored_Director_Of_CMS_RequestHandler.Action(_storedParameterInputs);
                    }

                    if (_storedRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_SECURITY"))
                    {
                        _12_5_stored_Director_Of_Security_RequestHandler = new SecurityFactoryImplementer_NicheMaster_12_5_1_0(_storedParameterInputs);

                        _12_5_stored_Director_Of_Security_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6912/storyline/basedi/io/security";
                        _12_5_stored_Director_Of_Security_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7912/storyline/basedi/io/security";

                        _12_5_stored_Director_Of_Security_RequestHandler.APILocationLocalNodeJS = "https://localhost:8912/storyline/basedi/io/security";
                        _12_5_stored_Director_Of_Security_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9912/storyline/basedi/io/security";

                        _12_5_stored_Director_Of_Security_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/security";

                        return _12_5_stored_Director_Of_Security_RequestHandler.Action(_storedParameterInputs);
                    }

                    #endregion
                }

                #endregion
            }
            catch
            {
                #region EDGE CASE - USE an exception message

                throw new Exception("[DISTURBANCE ISSUE] - Bug - ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.cs -> Implement_DesignPattern_Factory_Director_12_2_1_0 -> Action_1_Begin_Process - No DIRECTOR can be found for request " + _storedRequestName.ToUpper() + " Please make sure a director is wired in the pipeline in the METHOD [Action_1_Begin_Process]");

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

        //SETTINGS
        private IConfiguration _storedProcessRequestSettings = null;

        //CLIENT/SERVER
        private Dictionary<string, object> _storedProcessRequestTracker;

        private string _storedClientRequestByName = "";
        private string _storedClientRequestByNameParameters = "";

        private aClass_Programming_ScriptRoutable_12_2_1_0 _storedClientRequestByObject;

        //DATASETS
        private JObject _storedProcessRequestDataStorylineDetails;
        private JObject _storedProcessRequestDataStorylineDetails_Parameters;

        //MISC
        private ExtraData_12_2_1_0 _storedProcessRequestExtraData;

        //PLUMBING
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedProcessRequestCentralizedStorer;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _stored_CentralizedDisturber;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _stored_CentralizedSensor;

        private SingleParmPoco_12_2_1_0 _storedParameterInputs;

        private string _storedRequestName = "";
        private string _storedSystemRequestByName = "";

        #endregion

        #region 2. Ready

        internal Implement_DesignPattern_Factory_Experience_12_2_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region MEMORIZE control client server

            _storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

            #endregion

            #region MEMORIZE app settings

            _storedProcessRequestSettings = (IConfiguration)_storedProcessRequestTracker["storedProcessRequestSettings"];

            #endregion

            #region MEMORIZE centralized processes handlers  

            if (_stored_CentralizedDisturber == null)
            {
                _stored_CentralizedDisturber = new Implement_DesignPattern_Factory_Disturber_12_2_1_0(_storedParameterInputs);

                parameterInputs.Parameters.Add("parameterProcessRequestCentralizedDisturber", _stored_CentralizedDisturber);
            }

            if (_stored_CentralizedSensor == null)
            {
                _stored_CentralizedSensor = new Implement_DesignPattern_Factory_Sensor_12_2_1_0(_storedParameterInputs);

                parameterInputs.Parameters.Add("parameterProcessRequestCentralizedSensor", _stored_CentralizedSensor);
            }

            if (_storedProcessRequestCentralizedStorer == null)
            {
                _storedProcessRequestCentralizedStorer = new Implement_DesignPattern_Factory_Storer_12_2_1_0(_storedParameterInputs);

                parameterInputs.Parameters.Add("parameterProcessRequestCentralizedStorer", _storedProcessRequestCentralizedStorer);
            }

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #region MEMORIZE storyline details

            _storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            _storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails_Parameters"];

            #endregion

            #region MEMORIZE extra data

            _storedProcessRequestExtraData = parameterInputs.Parameters["parameterExtraData"];

            #endregion

            #region MEMORIZE request details

            _storedClientRequestByName = parameterInputs.Parameters["parameterInputRequestName"];
            _storedClientRequestByNameParameters = parameterInputs.Parameters["parameterInputRequestNameDataCacheKey"];

            _storedClientRequestByObject = parameterInputs.Parameters["parameterClientRequestByObject"];

            _storedRequestName = parameterInputs.Parameters["parameterSystemRequestByName"];
            _storedSystemRequestByName = parameterInputs.Parameters["parameterSystemRequestByName"];

            _storedParameterInputs = parameterInputs;

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

        public override object Action_1_Begin_Process()
        {
            #region 1. INPUTS  

            #region DEFINE director request handlers

            SocialMediaFactoryImplementer_NicheMaster_2_3_1_0 _2_3_stored_Director_Of_SocialMedia_RequestHandler = null;

            WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0 _12_3_stored_Director_Of_WebDevelopment_RequestHandler = null;

            #endregion

            #endregion

            #region 2. PROCESS

            #region ASSIGN request handler

            try
            {
                #region IDEAL CASE - USE an experience

                #region 1. Generate Brand Awareness Storylines

                #endregion

                #region 2. Generate Brand Trust Storylines

                if (_storedRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("EXPERIENCE_THE_MOVEMENT_TOFACEBOOKPAGE_DATATRANSFER"))
                {
                    _2_3_stored_Director_Of_SocialMedia_RequestHandler = new SocialMediaFactoryImplementer_NicheMaster_2_3_1_0(_storedParameterInputs);

                    _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:8992/storyline/basedi/io/socialmedia";
                    _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9992/storyline/basedi/io/socialmedia";
                    _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/socialmedia";

                    return _2_3_stored_Director_Of_SocialMedia_RequestHandler.Action(_storedParameterInputs);
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

                    _12_3_stored_Director_Of_WebDevelopment_RequestHandler = new WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0(_storedParameterInputs);

                    _12_3_stored_Director_Of_WebDevelopment_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:8912/storyline/basedi/io/webdevelopment";
                    _12_3_stored_Director_Of_WebDevelopment_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:9912/storyline/basedi/io/webdevelopment";
                    _12_3_stored_Director_Of_WebDevelopment_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/webdevelopment";

                    return _12_3_stored_Director_Of_WebDevelopment_RequestHandler.Action(_storedParameterInputs);

                    #endregion
                }

                #endregion

                #endregion
            }
            catch
            {
                #region EDGE CASE - USE an exception message

                throw new Exception("[DISTURBANCE ISSUE] - Bug - ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.cs -> Implement_DesignPattern_Factory_Experience_12_2_1_0 -> Action_1_Begin_Process - No EXPERIENCE can be found for request " + _storedRequestName.ToUpper() + " Please make sure an experience is wired in the pipeline in the METHOD [Action_1_Begin_Process]");

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

    #region HANDLE CENTRALIZED STORAGE REQUEST

    internal class Implement_DesignPattern_Factory_Storer_12_2_1_0 : aClass_Programming_ScriptAction_12_2_1_0<JObject>
    {
        #region 1. Assign

        //SETTINGS
        private IConfiguration _storedProcessRequestSettings = null;

        //CLIENT/SERVER
        private Dictionary<string, object> _storedProcessRequestTracker;

        private string _storedClientRequestByName = "";
        private string _storedClientRequestByNameParameters = "";

        private aClass_Programming_ScriptRoutable_12_2_1_0 _storedClientRequestByObject;

        //DATASETS
        private JObject _storedProcessRequestDataStorylineDetails;
        private JObject _storedProcessRequestDataStorylineDetails_Parameters;

        //MISC
        private ExtraData_12_2_1_0 _storedProcessRequestExtraData;

        //PLUMBING
        private SingleParmPoco_12_2_1_0 _storedParameterInputs;

        private string _storedRequestName = "";
        private string _storedSystemRequestByName = "";

        #endregion

        #region 2. Ready

        internal Implement_DesignPattern_Factory_Storer_12_2_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {

            #region MEMORIZE control client server

            _storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

            #endregion

            #region MEMORIZE app settings

            _storedProcessRequestSettings = (IConfiguration)_storedProcessRequestTracker["storedProcessRequestSettings"];

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #region MEMORIZE storyline details

            _storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            _storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails_Parameters"];

            #endregion

            #region MEMORIZE extra data

            _storedProcessRequestExtraData = parameterInputs.Parameters["parameterExtraData"];

            #endregion

            #region MEMORIZE request details

            _storedClientRequestByName = parameterInputs.Parameters["parameterInputRequestName"];
            _storedClientRequestByNameParameters = parameterInputs.Parameters["parameterInputRequestNameDataCacheKey"];

            _storedClientRequestByObject = parameterInputs.Parameters["parameterClientRequestByObject"];

            _storedRequestName = parameterInputs.Parameters["parameterSystemRequestByName"];
            _storedSystemRequestByName = parameterInputs.Parameters["parameterSystemRequestByName"];

            _storedParameterInputs = parameterInputs;

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

        public override JObject Action_1_Begin_Process()
        {
            #region 1. INPUTS     

            #region DEFINE data response

            JObject storedOutputResponseData = null;

            #endregion

            #region OVERRIDE client request names

            _storedClientRequestByName = "Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0";
            _storedClientRequestByNameParameters = "Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0-P1_0";

            _storedParameterInputs.Parameters["parameterInputRequestName"] =_storedClientRequestByName;
            _storedParameterInputs.Parameters["parameterInputRequestNameDataCacheKey"] = _storedClientRequestByNameParameters;

            _storedParameterInputs.Parameters["parameterSystemRequestByName"] = "";

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #endregion

            #region 2. PROCESS

            try
            {
                #region EXECUTE storage request

                #region IDEAL CASE - USE storage handler
                
                if (_storedProcessRequestSettings == null) throw new Exception(": ***LEAKY PIPE * **FAILED STORING a value.BaseDI C# version will not work without AppSettings. Please make sure that AppSettings has the REQUIRED [AppSettings:APP_SETTING_CONVERSION_MODE] value set.  -> ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 -> Implement_DesignPattern_Factory_Storer_12_2_1_0");

                storedOutputResponseData = new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0(_storedParameterInputs))
                  .SetupStoryline(_storedParameterInputs)
                  .Action().Result;

                #endregion

                #endregion
            }
            catch
            {
                #region HANDLE execution mistakes

                #region EDGE CASE - USE exception handler

                throw;

                #endregion

                #endregion
            }

            #endregion

            #region 3. OUTPUT

            #region HANDLE execution response

            #region IDEAL CASE - USE data object

            return storedOutputResponseData;

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

    #region HANDLE CENTRALIZED DISTURBANCE REQUES

    internal class Implement_DesignPattern_Factory_Disturber_12_2_1_0 : aClass_Programming_ScriptAction_12_2_1_0<JObject>
    {
        #region 1. Assign

        //SETTINGS
        private IConfiguration _storedProcessRequestSettings = null;

        //CLIENT/SERVER
        private Dictionary<string, object> _storedProcessRequestTracker;

        private string _storedClientRequestByName = "";
        private string _storedClientRequestByNameParameters = "";

        private aClass_Programming_ScriptRoutable_12_2_1_0 _storedClientRequestByObject;

        //DATASETS
        private JObject _storedProcessRequestDataStorylineDetails;
        private JObject _storedProcessRequestDataStorylineDetails_Parameters;

        //MISC
        private ExtraData_12_2_1_0 _storedProcessRequestExtraData;

        //PLUMBING
        private SingleParmPoco_12_2_1_0 _storedParameterInputs;

        private string _storedRequestName = "";
        private string _storedSystemRequestByName = "";

        #endregion

        #region 2. Ready

        internal Implement_DesignPattern_Factory_Disturber_12_2_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region MEMORIZE control client server

            _storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

            #endregion

            #region MEMORIZE app settings

            _storedProcessRequestSettings = (IConfiguration)_storedProcessRequestTracker["storedProcessRequestSettings"];

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #region MEMORIZE storyline details

            _storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            _storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails_Parameters"];

            #endregion

            #region MEMORIZE extra data

            _storedProcessRequestExtraData = parameterInputs.Parameters["parameterExtraData"];

            #endregion

            #region MEMORIZE request details

            _storedClientRequestByName = parameterInputs.Parameters["parameterInputRequestName"];
            _storedClientRequestByNameParameters = parameterInputs.Parameters["parameterInputRequestNameDataCacheKey"];

            _storedClientRequestByObject = parameterInputs.Parameters["parameterClientRequestByObject"];

            _storedRequestName = parameterInputs.Parameters["parameterSystemRequestByName"];
            _storedSystemRequestByName = parameterInputs.Parameters["parameterSystemRequestByName"];

            _storedParameterInputs = parameterInputs;

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

        public override JObject Action_1_Begin_Process()
        {
            #region 1. INPUTS     

            #region DEFINE data response

            JObject storedOutputResponseData = null;

            #endregion

            #region OVERRIDE client request names

            _storedClientRequestByName = "Director_Of_Programming_Chapter_12_2_Page_4_DisturbanceRequest_Handler_1_0";
            _storedClientRequestByNameParameters = "Director_Of_Programming_Chapter_12_2_Page_4_DisturbanceRequest_Handler_1_0-P1_0";

            _storedParameterInputs.Parameters["parameterInputRequestName"] = _storedClientRequestByName;
            _storedParameterInputs.Parameters["parameterInputRequestNameDataCacheKey"] = _storedClientRequestByNameParameters;

            _storedParameterInputs.Parameters["parameterSystemRequestByName"] = "";

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #endregion

            #region 2. PROCESS

            try
            {
                #region EXECUTE exception request

                #region IDEAL CASE - USE exception handler

                if (_storedProcessRequestSettings == null) throw new Exception(": ***LEAKY PIPE*** FAILED HANDLING a distrubance. BaseDI C# version will not work without AppSettings. Please make sure that AppSettings has the REQUIRED [AppSettings:APP_SETTING_CONVERSION_MODE] value set. -> ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 -> Implement_DesignPattern_Factory_Disturber_12_2_1_0");

                storedOutputResponseData = new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0(_storedParameterInputs))
                  .SetupStoryline(_storedParameterInputs)
                  .Action().Result;

                #endregion

                #endregion
            }
            catch
            {
                #region HANDLE execution mistakes

                #region EDGE CASE - USE exception handler

                throw;

                #endregion

                #endregion
            }

            #endregion

            #region 3. OUTPUT

            #region HANDLE execution response

            #region IDEAL CASE - USE data object

            return storedOutputResponseData;

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

    #region HANDLE CENTRALIZED SENSOR REQUEST

    internal class Implement_DesignPattern_Factory_Sensor_12_2_1_0 : aClass_Programming_ScriptAction_12_2_1_0<JObject>
    {
        #region 1. Assign

        //SETTINGS
        private IConfiguration _storedProcessRequestSettings = null;

        //CLIENT/SERVER
        private Dictionary<string, object> _storedProcessRequestTracker;

        private string _storedClientRequestByName = "";
        private string _storedClientRequestByNameParameters = "";

        private aClass_Programming_ScriptRoutable_12_2_1_0 _storedClientRequestByObject;

        //DATASETS
        private JObject _storedProcessRequestDataStorylineDetails;
        private JObject _storedProcessRequestDataStorylineDetails_Parameters;

        //MISC
        private ExtraData_12_2_1_0 _storedProcessRequestExtraData;

        //PLUMBING
        private SingleParmPoco_12_2_1_0 _storedParameterInputs;

        private string _storedRequestName = "";
        private string _storedSystemRequestByName = "";

        #endregion

        #region 2. Ready

        internal Implement_DesignPattern_Factory_Sensor_12_2_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region MEMORIZE control client server

            _storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

            #endregion

            #region MEMORIZE app settings

            _storedProcessRequestSettings = (IConfiguration)_storedProcessRequestTracker["storedProcessRequestSettings"];

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #region MEMORIZE storyline details

            _storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            _storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails_Parameters"];

            #endregion

            #region MEMORIZE extra data

            _storedProcessRequestExtraData = parameterInputs.Parameters["parameterExtraData"];

            #endregion

            #region MEMORIZE request details

            _storedClientRequestByName = parameterInputs.Parameters["parameterInputRequestName"];
            _storedClientRequestByNameParameters = parameterInputs.Parameters["parameterInputRequestNameDataCacheKey"];

            _storedClientRequestByObject = parameterInputs.Parameters["parameterClientRequestByObject"];

            _storedRequestName = parameterInputs.Parameters["parameterSystemRequestByName"];
            _storedSystemRequestByName = parameterInputs.Parameters["parameterSystemRequestByName"];

            _storedParameterInputs = parameterInputs;

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

        public override JObject Action_1_Begin_Process()
        {
            #region 1. INPUTS     

            #region DEFINE data response

            JObject storedOutputResponseData = null;

            #endregion

            #region OVERRIDE client request names

            _storedClientRequestByName = "Director_Of_Programming_Chapter_12_2_Page_5_SensorRequest_Handler_1_0";
            _storedClientRequestByNameParameters = "Director_Of_Programming_Chapter_12_2_Page_5_SensorRequest_Handler_1_0-P1_0";

            _storedParameterInputs.Parameters["parameterInputRequestName"] = _storedClientRequestByName;
            _storedParameterInputs.Parameters["parameterInputRequestNameDataCacheKey"] = _storedClientRequestByNameParameters;

            _storedParameterInputs.Parameters["parameterSystemRequestByName"] = "";

            #endregion

            #region MEMORIZE developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #endregion

            #region 2. PROCESS

            try
            {
                #region EXECUTE exception request

                #region IDEAL CASE - USE exception handler

                if (_storedProcessRequestSettings == null) throw new Exception(": ***LEAKY PIPE*** FAILED REACTING to a situation. BaseDI C# version will not work without AppSettings. Please make sure that AppSettings has the REQUIRED [AppSettings:APP_SETTING_CONVERSION_MODE] value set. -> ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 -> Implement_DesignPattern_Factory_Sensor_12_2_1_0.");

                storedOutputResponseData = new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0(_storedParameterInputs))
                  .SetupStoryline(_storedParameterInputs)
                  .Action().Result;

                #endregion

                #endregion
            }
            catch
            {
                #region HANDLE execution mistakes

                #region EDGE CASE - USE exception handler

                throw;

                #endregion

                #endregion
            }

            #endregion

            #region 3. OUTPUT

            #region HANDLE execution response

            #region IDEAL CASE - USE data object

            return storedOutputResponseData;

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

