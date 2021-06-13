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
using BaseDI.Professional.Story.Advertising_0;

//2. Generate Brand Trust
using BaseDI.Professional.Story.Blogging_0;

//3. Generate Optin
using BaseDI.Professional.Story.Listing_Building_0;
using BaseDI.Professional.Story.Personal_Training_0;
using BaseDI.Professional.Story.Podcasting_0;

//4. Sell Low Ticket Offer
using BaseDI.Professional.Story.Supplements_0;

//5. Sell High Ticket Offer
using BaseDI.Professional.Story.Coaching_0;
using BaseDI.Professional.Story.Consulting_0;

//6. Sell Subscription Offer
using BaseDI.Professional.Story.Software_0;

//7. Sell Commission Offer
using BaseDI.Professional.Story.Affiliate_Revenue_0;

//8. Account Gain or Loss
using BaseDI.Professional.Story.Accounting_0;

//9. Improve Customer Service
using BaseDI.Professional.Story.Customer_Service_0;

//10. Perform Manual Task
using BaseDI.Professional.Story.Productivity_0;

//11. Automate Manual Task
using BaseDI.Professional.Script.Risk_Management.Extensions_0;
using BaseDI.Professional.Story.Risk_Management_0;
using BaseDI.Professional.Story.Social_Media_0;

//12. Other
using BaseDI.Professional.Story.Careers_Employment_0;
using BaseDI.Professional.Story.Web_Development_0;
using BaseDI.Professional.Story.Programming_0;
using BaseDI.Professional.Story.CMS_0;
using BaseDI.Professional.Story.Security_0;

#endregion

#region .Net Core

using Microsoft.Extensions.Configuration;

using System;
using System.Collections.Generic;
using System.Globalization;
using System.Threading.Tasks;

#endregion 

#region 3rd Party Core

using Newtonsoft.Json.Linq;

#endregion

#endregion

namespace BaseDI.Professional.Story.Programming_0
{
    public class Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0 : aClass_Programming_ScriptMasterLeader_12_2_1_0
    {
        #region 1. Assign

        //A. Variable Declaration 

        //SETTINGS
        private IConfiguration _storedProcessRequestSettings = null;

        //CLIENT/SERVER
        private aClass_Programming_ScriptRoutable_12_2_1_0 _storedProcessRequestHandler = null;
        private Dictionary<string, object> _storedProcessRequestTracker;

        //MISC
        private ExtraData_12_2_1_0 _storedProcessRequestExtraData = null;

        //PLUMBING
 
        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0(aClass_Programming_ScriptRoutable_12_2_1_0 parameterProcessRequestHandler)
        {
            #region 1. INPUTS

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables

            _storedProcessRequestExtraData = new ExtraData_12_2_1_0();
            _storedProcessRequestTracker = new Dictionary<string, object>();

            #endregion

            #region DEFINE output variables

            #endregion

            ///////////////////////////////////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx


            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input xxx xxxx


            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process request details

            _storedProcessRequestHandler = parameterProcessRequestHandler;

            #endregion

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxx


            #endregion

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

        //A. Default state
        private void HandleDefaults()
        {
            #region 1. INPUTS

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables

            _storedProcessRequestExtraData = new ExtraData_12_2_1_0();

            #endregion

            #region DEFINE output variables

            #endregion

            ///////////////////////////////////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx


            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input xxx xxxx


            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process extra data

            _storedProcessRequestExtraData.MasterLeader = this;

            #endregion

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxx


            #endregion

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

            Func<SingleParmPoco_12_2_1_0, Task<bool>> ValidateInputs = async (SingleParmPoco_12_2_1_0 parameterInputs) =>
            {
                #region 1. INPUTS

                #region DEFINE control variables

                #endregion

                #region DEFINE input variables


                #endregion

                #region DEFINE process variables

                bool storedProcessRequestMistakeMade = false;

                #endregion

                #region DEFINE output variables

                string storedOutputResponseMessage = "";

                #endregion

                ///////////////////////////////////////////////////////////

                #region MEMORIZE control variables

                #region MEMORIZE control xxx xxx


                #endregion

                #endregion

                #region MEMORIZE input variables

                #region MEMORIZE input xxx xxxx


                #endregion

                #endregion

                #region MEMORIZE process variables

                #region MEMORIZE process request tracker

                Dictionary<string, object> storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

                #endregion

                #region MEMORIZE process request settings

                IConfiguration storedProcessRequestSettings = (IConfiguration)storedProcessRequestTracker["storedProcessRequestSettings"];

                #endregion

                #region MEMORIZE process developer mode

                bool storedProcessRequestDeveloperMode = storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

                _storedProcessRequestTracker["storedProcessRequestStepNumber"] = 0;

                SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

                //REQUIRED

                //0. CONTROLLERS
                //storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterInputRequestActionName", _parameterInputs.Parameters.getValue("parameterInputRequestActionName"));

                //1. INPUTS

                //2. PROCESS
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "BEGIN processing request");

                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestFileName", "Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.cs");
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "SetupStoryline -> ValidateInputs");

                //3. OUTPUTS

                #endregion

                #endregion

                #region MEMORIZE output variables

                #region MEMORIZE output xxx xxx


                #endregion

                #endregion

                #endregion

                #region 2. PROCESS

                #region EXECUTE validation process

                #region IDEAL CASE - USE valid information

                if (parameterInputs != null && parameterInputs.Parameters != null)
                {
                    //0. CONTROLLERS
                    if (!parameterInputs.Parameters.ContainsKey("parameterControlRequestClientOrServer"))
                    {
                        storedOutputResponseMessage += "***parameterControlRequestClientOrServer*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    //1. INPUTS
                    if (!parameterInputs.Parameters.ContainsKey("parameterInputRequestActionName"))
                    {
                        storedOutputResponseMessage += "***parameterInputRequestActionName*** cannot be blank or empty.\n";
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

                    //2. PROCESS
                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestCallBack"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestCallBack*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestSettings"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestSettings*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestTracker"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestTracker*** cannot be blank or empty.\n";
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

                    if (!parameterInputs.Parameters.ContainsKey("parameterProcessRequestDataStorylineDetails_CallBack"))
                    {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails_CallBack*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    //3. OUTPUTS
                    if (!parameterInputs.Parameters.ContainsKey("parameterOutputResponseControlID"))
                    {
                        storedOutputResponseMessage += "***parameterOutputResponseControlID*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (storedProcessRequestMistakeMade)
                    {
                        #region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode)
                        {
                            storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                            await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                        }

                        #endregion

                        #region EDGE CASE - USE exception handler

                        throw new Exception("PARSING parameter values failed");

                        #endregion
                    }
                }
                else
                {
                    #region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode)
                    {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                        storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                        await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    #endregion

                    #region EDGE CASE - USE exception handler

                    throw new Exception("PARSING parameter values failed");

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

            //BEGIN valdation process
            ValidateInputs(parameterInputs);

            #endregion

            ///////////////////////////////////////////////////////////

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables

            object storedProcessRequestHandler = null;
            SingleParmPoco_12_2_1_0 storedProcessRequestExceptionDetails = null;

            aClass_Programming_ScriptRoutable_12_2_1_0 storedProcessRequestExperienceOrDirectorHandler = null;
            Use_DesignPattern_Builder_Chapter_12_2_1_0 storedProcessRequestResolvedHandler = new Use_DesignPattern_Builder_Chapter_12_2_1_0(parameterInputs);

            #endregion

            #region DEFINE output variables

            #endregion

            ///////////////////////////////////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control client server

            dynamic storedControlRequestClientOrServer = parameterInputs.Parameters["parameterControlRequestClientOrServer"];

            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input action name

            string storedInputRequestActionName = parameterInputs.Parameters["parameterInputRequestActionName"] as string;

            #endregion

            #region MEMORIZE input request details

            string storedInputRequestName = parameterInputs.Parameters["parameterInputRequestName"];
            string storedInputRequestNameDataCacheKey = parameterInputs.Parameters["parameterInputRequestNameDataCacheKey"];

            string storedProcessRequestByName = parameterInputs.Parameters.ContainsKey("parameterProcessRequestName") ? parameterInputs.Parameters["parameterProcessRequestName"] : "";

            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process request details

            _storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

            if (parameterInputs.Parameters.ContainsKey("parameterProcessRequestHandler"))
            {
                parameterInputs.Parameters["parameterProcessRequestHandler"] = _storedProcessRequestHandler;
            }
            else
            {
                parameterInputs.Parameters.TryAdd("parameterProcessRequestHandler", _storedProcessRequestHandler);
            }

            #endregion

            #region MEMORIZE process request settings

            _storedProcessRequestSettings = (IConfiguration)_storedProcessRequestTracker["storedProcessRequestSettings"];

            #endregion

            #region MEMORIZE process developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            if (_storedProcessRequestTracker["storedProcessRequestStepNumber"] == null)
                _storedProcessRequestTracker["storedProcessRequestStepNumber"] = 0;

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingStartUpProcessInputs = (_storedProcessRequestExtraData?.KeyValuePairs?.ContainsKey("storedProcessRequestDeveloperLoggingInputs") == true ? _storedProcessRequestExtraData?.KeyValuePairs?["storedProcessRequestDeveloperLoggingInputs"] as SingleParmPoco_12_2_1_0 : null);

            SingleParmPoco_12_2_1_0 storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0();

            //REQUIRED

            //0. CONTROLLERS

            //1. INPUTS
            //storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterInputRequestActionName", _parameterInputs.Parameters.getValue("parameterInputRequestActionName"));

            //2. PROCESS
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequest3WordDescription", "BEGIN processing request");          
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestTracker", _storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestFileName", "Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.cs");
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterProcessRequestMethodName", "SetupStoryline");

            //3. OUTPUTS

            //OPTIONAL
            storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseOPTIONALBeginOfProcess", true);

            if (storedProcessRequestDeveloperLoggingStartUpProcessInputs != null)
            {
                storedProcessRequestDeveloperLoggingInputs.Parameters.TryAdd("parameterOutputResponseOPTIONALMasterLeaderIsSecondStep", storedProcessRequestDeveloperLoggingStartUpProcessInputs.Parameters["parameterOutputResponseOPTIONALMasterLeaderIsSecondStep"]);

                if (storedProcessRequestDeveloperLoggingStartUpProcessInputs.Parameters["parameterOutputResponseOPTIONALMasterLeaderIsSecondStep"] == true)
                {
                    storedProcessRequestDeveloperLoggingInputs.Parameters["parameterOutputResponseOPTIONALBeginOfProcess"] = false;
                }
            }

            #endregion

            #region MEMORIZE process extra data

            if (parameterInputs.Parameters.ContainsKey("parameterProcessRequestExtraData"))
            {
                _storedProcessRequestExtraData = parameterInputs.Parameters["parameterProcessRequestExtraData"];
            }
            else 
            {
                parameterInputs.Parameters.TryAdd("parameterProcessRequestExtraData", new ExtraData_12_2_1_0());
                (parameterInputs.Parameters["parameterProcessRequestExtraData"] as ExtraData_12_2_1_0).KeyValuePairs.TryAdd("storedProcessRequestDeveloperLoggingInputs", new SingleParmPoco_12_2_1_0());

                _storedProcessRequestExtraData = parameterInputs.Parameters["parameterProcessRequestExtraData"];
            }

            #endregion

            #region MEMORIZE process storyline details

            JObject storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            JObject storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails_Parameters"];

            #endregion

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxx


            #endregion

            #endregion

            #endregion

            #region 2. PROCESS

            try
            {
                #region FIND request handler

                #region EDGE CASE - USE developer logger

                if (storedProcessRequestDeveloperMode && (int)_storedProcessRequestTracker["storedProcessRequestStepNumber"] == 0)
                {
                    _storedProcessRequestTracker["storedProcessRequestStepNumber"] = (int)_storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                    //0. CONTROLLERS

                    //1. INPUTS                    
                    storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequestStepNumberReplace"] = _storedProcessRequestTracker["storedProcessRequestStepNumber"];
                    storedProcessRequestDeveloperLoggingInputs.Parameters["parameterProcessRequestCentralizedStorer"] = new Implement_DesignPattern_Factory_Storer_12_2_1_0(parameterInputs);

                    //2. PROCESS
                    storedProcessRequestDeveloperLoggingInputs.Parameters["parameterOutputResponseMessageType"] = "Logging"; //Values = Logging or Mistake

                    //3. OUTPUTS
                    Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                }

                #endregion

                #region IDEAL CASE - USE an experience OR a director request handler

                //NOTE: 1. The Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0 is called "TWICE" per request.
                //A: The first time is to "MERGE" the data objects of "StorylineDetails" and "StorylineDetails_Parameters" into ONE SINGLE data object.
                //B: The second time is to call the "ACTION" method off the "ENTRYPOINT" property from inside the "IF" statement below.
                storedProcessRequestHandler = storedProcessRequestResolvedHandler.Action();

                if (storedProcessRequestByName != null && storedProcessRequestByName != "")
                {
                    storedProcessRequestExperienceOrDirectorHandler = (aClass_Programming_ScriptRoutable_12_2_1_0)storedProcessRequestHandler;

                    storedProcessRequestExperienceOrDirectorHandler.RequestID = storedProcessRequestByName;
                    storedProcessRequestExperienceOrDirectorHandler.ClientOrServerInstance = _storedProcessRequestTracker;

                    _storedProcessRequestHandler.ClientOrServerInstance = _storedProcessRequestTracker;

                    _storedProcessRequestHandler.DirectorOrExperienceRequestHandler = storedProcessRequestExperienceOrDirectorHandler;
                    _storedProcessRequestHandler.ExtraData = _storedProcessRequestExtraData;

                    _storedProcessRequestHandler.MasterLeader = storedProcessRequestExperienceOrDirectorHandler.MasterLeader;

                    _storedProcessRequestHandler.StorylineDetails = storedProcessRequestExperienceOrDirectorHandler.StorylineDetails;
                    _storedProcessRequestHandler.StorylineDetails_Parameters = storedProcessRequestExperienceOrDirectorHandler.StorylineDetails_Parameters;

                    storedProcessRequestHandler = _storedProcessRequestHandler;
                }

                #endregion

                #endregion
            }
            catch (Exception storedProcessRequestMistake)
            {
                #region EDGE CASE - USE exception handler

                storedProcessRequestExceptionDetails = new SingleParmPoco_12_2_1_0();

                //0. CONTROLLERS

                //1. INPUTS
                storedProcessRequestExceptionDetails.Parameters.TryAdd("storedInputs", parameterInputs);
                storedProcessRequestExceptionDetails.Parameters.TryAdd("storedInputRequestName", storedInputRequestName);
                storedProcessRequestExceptionDetails.Parameters.TryAdd("storedInputRequestNameDataCacheKey", storedInputRequestNameDataCacheKey);

                //2. PROCESS
                storedProcessRequestExceptionDetails.Parameters.TryAdd("storedProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);
                storedProcessRequestExceptionDetails.Parameters.TryAdd("storedProcessRequestTracker", _storedProcessRequestTracker);
                storedProcessRequestExceptionDetails.Parameters.TryAdd("storedProcessRequestExtraData", _storedProcessRequestExtraData);
                storedProcessRequestExceptionDetails.Parameters.TryAdd("storedProcessRequestMistake", storedProcessRequestMistake);

                //3. OUTPUTS

                throw Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Control_DeveloperException_1_0(storedProcessRequestExceptionDetails).Result;

                #endregion
            }
            
            #endregion

            #region 3. OUTPUT

            #region RETURN request handler

            #region IDEAL CASE - USE an experience OR a director handler

            return (aClass_Programming_ScriptRoutable_12_2_1_0)storedProcessRequestHandler;

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

        private string _storedInputRequestName;
        private string _storedInputRequestNameDataCacheKey;

        private aClass_Programming_ScriptRoutable_12_2_1_0 _storedProcessRequestHandler;

        //DATASETS
        private JObject _storedProcessRequestDataStorylineDetails;
        private JObject _storedProcessRequestDataStorylineDetails_Parameters;

        //MISC
        private ExtraData_12_2_1_0 _storedProcessRequestExtraData;

        //PLUMBING
        private SingleParmPoco_12_2_1_0 _storedInputs;

        private string _storedProcessRequestName = "";
        private string _storedProcessRequestByName;

        #endregion

        #region 2. Ready

        internal Use_DesignPattern_Builder_Chapter_12_2_1_0(SingleParmPoco_12_2_1_0 parameterInputs) //Dictionary<string, object> parameterProcessRequestTracker, JObject parameterProcessRequestDataStorylineDetails, JObject parameterProcessRequestDataStorylineDetails_Parameters, aClass_Programming_ScriptRoutable_12_2_1_0 parameterProcessRequestHandler, ExtraData_12_2_1_0 parameterProcessRequestExtraData = null, string parameterProcessRequestName = "", string parameterInputRequestName = "", string parameterInputRequestNameDataCacheKey = ""
        {
            #region 1. INPUTS   

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables

      
            #endregion

            #region DEFINE output variables

            #endregion

            ///////////////////////////////////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx


            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input action name

            string storedInputRequestActionName = parameterInputs.Parameters["parameterInputRequestActionName"] as string;

            #endregion

            #region MEMORIZE input request details

            string storedInputRequestName = parameterInputs.Parameters["parameterInputRequestName"];
            string storedInputRequestNameDataCacheKey = parameterInputs.Parameters["parameterInputRequestNameDataCacheKey"];

            string storedProcessRequestByName = parameterInputs.Parameters.ContainsKey("parameterProcessRequestName") ? parameterInputs.Parameters["parameterProcessRequestName"] : "";

            _storedInputs = parameterInputs;

            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process request details

            _storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

            #endregion

            #region MEMORIZE process request settings

            _storedProcessRequestSettings = (IConfiguration)_storedProcessRequestTracker["storedProcessRequestSettings"];

            #endregion

            #region MEMORIZE process developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");
            
            #endregion

            #region MEMORIZE process extra data

            if (parameterInputs.Parameters["parameterProcessRequestExtraData"] != null)
                _storedProcessRequestExtraData = parameterInputs.Parameters["parameterProcessRequestExtraData"];

            #endregion

            #region MEMORIZE process storyline details

            JObject storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            JObject storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails_Parameters"];

            #endregion

            #region MEMORIZE process request details

            _storedProcessRequestHandler = parameterInputs.Parameters["parameterProcessRequestHandler"];

            _storedProcessRequestByName = parameterInputs.Parameters["parameterProcessRequestName"];

            #endregion

            #region MEMORIZE process storyline details

            _storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            _storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails_Parameters"];

            #endregion

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxx


            #endregion

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

        #region DEFINE control variables

        #endregion

        #region DEFINE input variables


        #endregion

        #region DEFINE process variables

  

        #endregion

        #region DEFINE output variables

        #endregion

        ///////////////////////////////////////////////////////////

        #region MEMORIZE control variables

        #region MEMORIZE control xxx xxx


        #endregion

        #endregion

        #region MEMORIZE input variables

        #region MEMORIZE input xxx xxxx


        #endregion

        #endregion

        #region MEMORIZE process variables

        #region MEMORIZE process xxx xxx



        #endregion

        #endregion

        #region MEMORIZE output variables

        #region MEMORIZE output xxx xxx


        #endregion

        #endregion

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

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables

            aClass_Programming_ScriptAction_12_2_1_0<object> storedProcessRequestExecutionStragety = new Implement_DesignPattern_Builder_Chapter_12_2_1_0(_storedInputs);
            dynamic storedProcessRequestResolvedHandler = null;

            #endregion

            #region DEFINE output variables

            #endregion

            ///////////////////////////////////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx


            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input action name

            string storedInputRequestActionName = _storedInputs.Parameters["parameterInputRequestActionName"] as string;

            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxx


            #endregion


            #endregion

            #endregion

            #region 2. PROCESS

            #region FIND request handler

            try
            {
                #region IDEAL CASE - USE an experience OR a director request handler

                storedProcessRequestExecutionStragety.Action_1_Begin_Process();
                storedProcessRequestResolvedHandler = storedProcessRequestExecutionStragety.Action_10_End_Process();

                #endregion
            }
            catch (Exception storedProcessRequestMistake)
            {
                #region EDGE CASE - USE exception handler

                throw storedProcessRequestMistake;

                #endregion
            }

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN request handler

            #region IDEAL CASE - USE an experience OR a director handler

            return storedProcessRequestResolvedHandler;

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

        private string _storedInputRequestName = "";
        private string _storedInputRequestNameDataCacheKey = "";

        private aClass_Programming_ScriptRoutable_12_2_1_0 _storedProcessRequestHandler;

        //DATASETS
        private JObject _storedProcessRequestDataStorylineDetails;
        private JObject _storedProcessRequestDataStorylineDetails_Parameters;

        //MISC
        private ExtraData_12_2_1_0 _storedProcessRequestExtraData;

        //PLUMBING
        private SingleParmPoco_12_2_1_0 _storedInputs;

        private string _storedProcessRequestName = "";

        #endregion

        #region 2. Ready

        internal Implement_DesignPattern_Builder_Chapter_12_2_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS       

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables


            #endregion

            #region DEFINE output variables

            #endregion

            ///////////////////////////////////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx


            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input action name

            string storedInputRequestActionName = parameterInputs.Parameters["parameterInputRequestActionName"] as string;

            #endregion

            #region MEMORIZE input request details

            _storedInputRequestName = parameterInputs.Parameters["parameterInputRequestName"];
            _storedInputRequestNameDataCacheKey = parameterInputs.Parameters["parameterInputRequestNameDataCacheKey"];

            _storedInputs = parameterInputs;

            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process request tracker

            _storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

            #endregion

            #region MEMORIZE process request settings

            _storedProcessRequestSettings = (IConfiguration)_storedProcessRequestTracker["storedProcessRequestSettings"];

            #endregion

            #region MEMORIZE process developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #region MEMORIZE process extra data

            _storedProcessRequestExtraData = parameterInputs.Parameters["parameterProcessRequestExtraData"];

            #endregion

            #region MEMORIZE process request details

            _storedProcessRequestHandler = parameterInputs.Parameters["parameterProcessRequestHandler"];

            _storedProcessRequestName = parameterInputs.Parameters["parameterProcessRequestName"];

            #endregion

            #region MEMORIZE storyline details

            _storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            _storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails_Parameters"];

            #endregion

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxx


            #endregion


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

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables



            #endregion

            #region DEFINE output variables

            #endregion

            ///////////////////////////////////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx


            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input xxx xxxx


            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process xxx xxx



            #endregion

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxx


            #endregion

            #endregion

            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            #endregion
        }

        #endregion

        #region 4. Action

        public override object Action_1_Begin_Process()
        {
            #region 1. INPUTS

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables



            #endregion

            #region DEFINE output variables

            #endregion

            ///////////////////////////////////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx


            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input xxx xxxx


            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process xxx xxx



            #endregion

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxx


            #endregion

            #endregion

            #endregion

            #region 2. PROCESS

            #region STORE request name

            #region IDEAL CASE - USE request by object

            if (string.IsNullOrEmpty(_storedProcessRequestName))
            {
                _storedProcessRequestName = _storedProcessRequestHandler != null ? _storedProcessRequestHandler.GetType().Name : _storedInputRequestName;
            }

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN request handler

            #region IDEAL CASE - USE an experience OR a director handler

            return _storedProcessRequestName;

            #endregion

            #endregion

            #endregion
        }

        public override object Action_10_End_Process()
        {
            #region 1. INPUTS

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables

            if (_storedInputs.Parameters.ContainsKey("parameterProcessRequestName"))
            {
                _storedInputs.Parameters["parameterProcessRequestName"] = _storedProcessRequestName;
            }
            else
            {
                _storedInputs.Parameters.TryAdd("parameterProcessRequestName", _storedProcessRequestName);
            }


            Implement_DesignPattern_Factory_Experience_12_2_1_0 storedProcessRequestExperienceHandler = new Implement_DesignPattern_Factory_Experience_12_2_1_0(_storedInputs);
            Implement_DesignPattern_Factory_Director_12_2_1_0 storedProcessRequestDirectorHandler = new Implement_DesignPattern_Factory_Director_12_2_1_0(_storedInputs);

            #endregion

            #region DEFINE output variables

            #endregion

            ///////////////////////////////////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx


            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input xxx xxx


            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxxx


            #endregion

            #endregion

            #endregion

            #region 2. PROCESS

            #region PICK experience OR director

            try
            {
                #region IDEAL CASE - USE director request handler

                if (_storedProcessRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_"))
                {
                    return storedProcessRequestDirectorHandler.Action_1_Begin_Process();
                }

                #endregion

                #region EDGE CASE - USE experience request handler

                if (_storedProcessRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("EXPERIENCE_THE_"))
                {
                    return storedProcessRequestExperienceHandler.Action_1_Begin_Process();
                }

                #endregion
            }
            catch (Exception storedProcessRequestMistake)
            {
                #region EDGE CASE - USE exception handler

                throw storedProcessRequestMistake;

                #endregion
            }

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN exception message

            #region EDGE CASE - USE exception message

            throw new Exception("No request handler found");

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

        private aClass_Programming_ScriptRoutable_12_2_1_0 _storedProcessRequestHandler;

        private string _storedInputRequestName = "";
        private string _storedInputRequestNameDataCacheKey = "";

        //DATASETS
        private JObject _storedProcessRequestDataStorylineDetails;
        private JObject _storedProcessRequestDataStorylineDetails_Parameters;

        //MISC
        private ExtraData_12_2_1_0 _storedProcessRequestExtraData;

        //PLUMBING
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedProcessRequestCentralizedStorer;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedProcessRequestCentralizedDisturber;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedProcessRequestCentralizedSensor;

        private SingleParmPoco_12_2_1_0 _storedInputs;

        private string _storedProcessRequestName = "";
        private string _storedProcessRequestByName;

        #endregion

        #region 2. Ready

        internal Implement_DesignPattern_Factory_Director_12_2_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS     

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables


            #endregion

            #region DEFINE output variables

            #endregion

            ///////////////////////////////////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx


            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input action name

            string storedInputRequestActionName = parameterInputs.Parameters["parameterInputRequestActionName"] as string;

            #endregion

            #region MEMORIZE input request details

            _storedInputRequestName = parameterInputs.Parameters["parameterInputRequestName"];
            _storedInputRequestNameDataCacheKey = parameterInputs.Parameters["parameterInputRequestNameDataCacheKey"];

            _storedInputs = parameterInputs;

            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process request tracker

            _storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

            #endregion

            #region MEMORIZE process request settings

            _storedProcessRequestSettings = (IConfiguration)_storedProcessRequestTracker["storedProcessRequestSettings"];

            #endregion

            #region MEMORIZE process centralized handlers  

            if (_storedProcessRequestCentralizedDisturber == null)
            {
                _storedProcessRequestCentralizedDisturber = new Implement_DesignPattern_Factory_Disturber_12_2_1_0(_storedInputs);

                if (parameterInputs.Parameters.ContainsKey("parameterProcessRequestCentralizedDisturber"))
                {
                    parameterInputs.Parameters["parameterProcessRequestCentralizedDisturber"] = _storedProcessRequestCentralizedDisturber;
                }
                else
                {
                    parameterInputs.Parameters.TryAdd("parameterProcessRequestCentralizedDisturber", _storedProcessRequestCentralizedDisturber);
                }
            }

            if (_storedProcessRequestCentralizedSensor == null)
            {
                _storedProcessRequestCentralizedSensor = new Implement_DesignPattern_Factory_Sensor_12_2_1_0(_storedInputs);

                if (parameterInputs.Parameters.ContainsKey("parameterProcessRequestCentralizedSensor"))
                {
                    parameterInputs.Parameters["parameterProcessRequestCentralizedSensor"] = _storedProcessRequestCentralizedSensor;
                }
                else
                {
                    parameterInputs.Parameters.TryAdd("parameterProcessRequestCentralizedSensor", _storedProcessRequestCentralizedSensor);
                }
            }

            if (_storedProcessRequestCentralizedStorer == null)
            {
                _storedProcessRequestCentralizedStorer = new Implement_DesignPattern_Factory_Storer_12_2_1_0(_storedInputs);

                if (parameterInputs.Parameters.ContainsKey("parameterProcessRequestCentralizedStorer"))
                {
                    parameterInputs.Parameters["parameterProcessRequestCentralizedStorer"] = _storedProcessRequestCentralizedStorer;
                }
                else
                {
                    parameterInputs.Parameters.TryAdd("parameterProcessRequestCentralizedStorer", _storedProcessRequestCentralizedStorer);
                }
            }

            #endregion

            #region MEMORIZE process developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #region MEMORIZE process extra data

            _storedProcessRequestExtraData = parameterInputs.Parameters["parameterProcessRequestExtraData"];

            #endregion

            #region MEMORIZE process request details

            _storedProcessRequestHandler = parameterInputs.Parameters["parameterProcessRequestHandler"];
 
            _storedProcessRequestName = parameterInputs.Parameters["parameterProcessRequestName"];

            #endregion

            #region MEMORIZE process request tracker

            _storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

            #endregion

            #region MEMORIZE process request settings

            _storedProcessRequestSettings = (IConfiguration)_storedProcessRequestTracker["storedProcessRequestSettings"];

            #endregion

            #region MEMORIZE storyline details

            _storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            _storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails_Parameters"];

            #endregion

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxx


            #endregion

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

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables



            #endregion

            #region DEFINE output variables

            #endregion

            ///////////////////////////////////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx


            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input xxx xxxx


            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process xxx xxx



            #endregion

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxx


            #endregion

            #endregion

            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            #endregion
        }

        #endregion

        #region 4. Action

        public override object Action_1_Begin_Process()
        {
            #region 1. INPUTS     

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables

            Studio_AudienceTesting_Advertising_Chapter_1_1_Page_0_ControlNicheMaster_Handler_1_0 _1_1_stored_Director_Of_Advertising_RequestHandler = null;

            Studio_AudienceTesting_Blogging_Chapter_2_1_Page_0_ControlNicheMaster_Handler_1_0 _2_1_stored_Director_Of_Blogging_RequestHandler = null;
            Studio_AudienceTesting_Podcasting_Chapter_2_2_Page_0_ControlNicheMaster_Handler_1_0 _2_2_stored_Director_Of_Podcasting_RequestHandler = null;
            Studio_AudienceTesting_SocialMedia_Chapter_2_3_Page_0_ControlNicheMaster_Handler_1_0 _2_3_stored_Director_Of_SocialMedia_RequestHandler = null;

            Studio_AudienceTesting_ListBuilding_Chapter_3_1_Page_0_ControlNicheMaster_Handler_1_0 _3_1_stored_Director_Of_ListBuilding_RequestHandler = null;

            Studio_OfferDevelopment_Supplements_Chapter_4_1_Page_0_ControlNicheMaster_Handler_1_0 _4_1_stored_Director_Of_Supplements_RequestHandler = null;

            Studio_OfferDevelopment_Coaching_Chapter_5_1_Page_0_ControlNicheMaster_Handler_1_0 _5_1_stored_Director_Of_Coaching_RequestHandler = null;
            Studio_OfferDevelopment_Consulting_Chapter_5_2_Page_0_ControlNicheMaster_Handler_1_0 _5_2_stored_Director_Of_Consulting_RequestHandler = null;
            Studio_OfferDevelopment_PersonalTraining_Chapter_5_3_Page_0_ControlNicheMaster_Handler_1_0 _5_3_stored_Director_Of_PersonalTraining_RequestHandler = null;

            Studio_OfferDevelopment_Software_Chapter_6_1_Page_0_ControlNicheMaster_Handler_1_0 _6_1_stored_Director_Of_Software_RequestHandler = null;

            Studio_OfferDevelopment_AffiliateRevenue_Chapter_7_1_Page_0_ControlNicheMaster_Handler_1_0 _7_1_stored_Director_Of_AffiliateRevenue_RequestHandler = null;

            Studio_Strategy_Accounting_Chapter_8_1_Page_0_ControlNicheMaster_Handler_1_0 _8_1_stored_Director_Of_Accounting_RequestHandler = null;

            Studio_Strategy_CustomerService_Chapter_9_1_Page_0_ControlNicheMaster_Handler_1_0 _9_1_stored_Director_Of_CustomerService_RequestHandler = null;

            Studio_Strategy_Productivity_Chapter_10_1_Page_0_ControlNicheMaster_Handler _10_1_stored_Director_Of_Productivity_RequestHandler = null;

            Studio_Strategy_RiskManagement_Chapter_11_1_Page_0_ControlNicheMaster_Handler _11_1_stored_Director_Of_RiskManagement_RequestHandler = null;

            Studio_Strategy_CareersEmployment_Chapter_12_1_Page_0_ControlNicheMaster_Handler _12_1_stored_Director_Of_Careers_RequestHandler = null;
            Studio_Automation_Programming_Chapter_12_2_Page_0_ControlNicheMaster_Handler_1_0 _12_2_stored_Director_Of_Programming_RequestHandler = null;
            Studio_Automation_WebDevelopment_Chapter_12_3_Page_0_ControlNicheMaster_Handler_1_0 _12_3_stored_Director_Of_WebDevelopment_RequestHandler = null;
            Studio_AudienceTesting_CMS_Chapter_12_4_Page_0_ControlNicheMaster_Handler_1_0 _12_4_stored_Director_Of_CMS_RequestHandler = null;
            Studio_Automation_Security_Chapter_12_4_Page_0_ControlNicheMaster_Handler_1_0 _12_5_stored_Director_Of_Security_RequestHandler = null;

            #endregion

            #region DEFINE output variables

            #endregion

            ///////////////////////////////////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx


            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input action name

            string storedInputRequestActionName = _storedInputs.Parameters["parameterInputRequestActionName"] as string;

            #endregion

            #region MEMORIZE input request details

            _storedInputRequestName = _storedInputs.Parameters["parameterInputRequestName"];
            _storedInputRequestNameDataCacheKey = _storedInputs.Parameters["parameterInputRequestNameDataCacheKey"];

            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process request tracker

            _storedProcessRequestTracker = _storedInputs.Parameters["parameterProcessRequestTracker"];

            #endregion

            #region MEMORIZE process request settings

            _storedProcessRequestSettings = (IConfiguration)_storedProcessRequestTracker["storedProcessRequestSettings"];

            #endregion
            
            #region MEMORIZE process developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion          

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxx


            #endregion

            #endregion

            #endregion

            #region 2. PROCESS

            #region ASSIGN request handler

            try
            {
                #region IDEAL CASE - USE a director

                if (_storedProcessRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_PROGRAMMING"))
                {
                    #region 12. Other

                    _12_2_stored_Director_Of_Programming_RequestHandler = new Studio_Automation_Programming_Chapter_12_2_Page_0_ControlNicheMaster_Handler_1_0(_storedInputs);
                    
                    _12_2_stored_Director_Of_Programming_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6912/storyline/basedi/io/programming";
                    _12_2_stored_Director_Of_Programming_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7912/storyline/basedi/io/programming";

                    _12_2_stored_Director_Of_Programming_RequestHandler.APILocationLocalNodeJS = "https://localhost:8912/storyline/basedi/io/programming";
                    _12_2_stored_Director_Of_Programming_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9912/storyline/basedi/io/programming";

                    _12_2_stored_Director_Of_Programming_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/programming";

                    return _12_2_stored_Director_Of_Programming_RequestHandler.Action(_storedInputs);

                    #endregion
                }
                else
                {
                    //This means our director of programming wanted us to play this storyline.
                    #region 1. Generate Brand Awareness Storylines

                    if (_storedProcessRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_ADVERTISING"))
                    {
                        _1_1_stored_Director_Of_Advertising_RequestHandler = new Studio_AudienceTesting_Advertising_Chapter_1_1_Page_0_ControlNicheMaster_Handler_1_0(_storedInputs);

                        _1_1_stored_Director_Of_Advertising_RequestHandler.APILocationLocalDotNetCore = "http://localhost:6991/storyline/basedi/io/advertising";
                        _1_1_stored_Director_Of_Advertising_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7991/storyline/basedi/io/advertising";

                        _1_1_stored_Director_Of_Advertising_RequestHandler.APILocationLocalNodeJS = "https://localhost:8991/storyline/basedi/io/advertising";
                        _1_1_stored_Director_Of_Advertising_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9991/storyline/basedi/io/advertising";

                        _1_1_stored_Director_Of_Advertising_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/advertising";

                        return _1_1_stored_Director_Of_Advertising_RequestHandler.Action(_storedInputs);
                    }

                    #endregion

                    #region 2. Generate Brand Trust Storylines

                    if (_storedProcessRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_BLOGGING"))
                    {
                        _2_1_stored_Director_Of_Blogging_RequestHandler = new Studio_AudienceTesting_Blogging_Chapter_2_1_Page_0_ControlNicheMaster_Handler_1_0(_storedInputs);
                        
                        _2_1_stored_Director_Of_Blogging_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6992/storyline/basedi/io/blogging";
                        _2_1_stored_Director_Of_Blogging_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7992/storyline/basedi/io/blogging";

                        _2_1_stored_Director_Of_Blogging_RequestHandler.APILocationLocalNodeJS = "https://localhost:8992/storyline/basedi/io/blogging";
                        _2_1_stored_Director_Of_Blogging_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9992/storyline/basedi/io/blogging";

                        _2_1_stored_Director_Of_Blogging_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/blogging";

                        return _2_1_stored_Director_Of_Blogging_RequestHandler.Action(_storedInputs);
                    }

                    if (_storedProcessRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_PODCASTING"))
                    {
                        _2_2_stored_Director_Of_Podcasting_RequestHandler = new Studio_AudienceTesting_Podcasting_Chapter_2_2_Page_0_ControlNicheMaster_Handler_1_0(_storedInputs);

                        _2_2_stored_Director_Of_Podcasting_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6992/storyline/basedi/io/podcasting";
                        _2_2_stored_Director_Of_Podcasting_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7992/storyline/basedi/io/podcasting";

                        _2_2_stored_Director_Of_Podcasting_RequestHandler.APILocationLocalNodeJS = "https://localhost:8992/storyline/basedi/io/podcasting";
                        _2_2_stored_Director_Of_Podcasting_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9992/storyline/basedi/io/podcasting";

                        _2_2_stored_Director_Of_Podcasting_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/podcasting";

                        return _2_2_stored_Director_Of_Podcasting_RequestHandler.Action(_storedInputs);
                    }

                    if (_storedProcessRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_SOCIALMEDIA"))
                    {
                        _2_3_stored_Director_Of_SocialMedia_RequestHandler = new Studio_AudienceTesting_SocialMedia_Chapter_2_3_Page_0_ControlNicheMaster_Handler_1_0(_storedInputs);

                        _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6992/storyline/basedi/io/socialmedia";
                        _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7992/storyline/basedi/io/socialmedia";

                        _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationLocalNodeJS = "https://localhost:8992/storyline/basedi/io/socialmedia";
                        _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9992/storyline/basedi/io/socialmedia";

                        _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/socialmedia";

                        return _2_3_stored_Director_Of_SocialMedia_RequestHandler.Action(_storedInputs);
                    }

                    #endregion

                    #region 3. Generate Optin Storylines

                    if (_storedProcessRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_LISTBUILDING"))
                    {
                        _3_1_stored_Director_Of_ListBuilding_RequestHandler = new Studio_AudienceTesting_ListBuilding_Chapter_3_1_Page_0_ControlNicheMaster_Handler_1_0(_storedInputs);

                        _3_1_stored_Director_Of_ListBuilding_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6993/storyline/basedi/io/listbuilding";
                        _3_1_stored_Director_Of_ListBuilding_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7993/storyline/basedi/io/listbuilding";

                        _3_1_stored_Director_Of_ListBuilding_RequestHandler.APILocationLocalNodeJS = "https://localhost:8993/storyline/basedi/io/listbuilding";
                        _3_1_stored_Director_Of_ListBuilding_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9993/storyline/basedi/io/listbuilding";

                        _3_1_stored_Director_Of_ListBuilding_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/listbuilding";

                        return _3_1_stored_Director_Of_ListBuilding_RequestHandler.Action(_storedInputs);
                    }

                    #endregion

                    #region 4. Sell Low Ticket Offer Storylines

                    if (_storedProcessRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_SUPPLEMENTS"))
                    {
                        _4_1_stored_Director_Of_Supplements_RequestHandler = new Studio_OfferDevelopment_Supplements_Chapter_4_1_Page_0_ControlNicheMaster_Handler_1_0(_storedInputs);

                        _4_1_stored_Director_Of_Supplements_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6994/storyline/basedi/io/supplements";
                        _4_1_stored_Director_Of_Supplements_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7994/storyline/basedi/io/supplements";

                        _4_1_stored_Director_Of_Supplements_RequestHandler.APILocationLocalNodeJS = "https://localhost:8994/storyline/basedi/io/supplements";
                        _4_1_stored_Director_Of_Supplements_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9994/storyline/basedi/io/supplements";

                        _4_1_stored_Director_Of_Supplements_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/supplements";

                        return _4_1_stored_Director_Of_Supplements_RequestHandler.Action(_storedInputs);
                    }

                    #endregion

                    #region 5. Sell High Ticket Offer Storylines

                    if (_storedProcessRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_COACHING"))
                    {
                        _5_1_stored_Director_Of_Coaching_RequestHandler = new Studio_OfferDevelopment_Coaching_Chapter_5_1_Page_0_ControlNicheMaster_Handler_1_0(_storedInputs);

                        _5_1_stored_Director_Of_Coaching_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6995/storyline/basedi/io/coaching";
                        _5_1_stored_Director_Of_Coaching_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7995/storyline/basedi/io/coaching";

                        _5_1_stored_Director_Of_Coaching_RequestHandler.APILocationLocalNodeJS = "https://localhost:8995/storyline/basedi/io/coaching";
                        _5_1_stored_Director_Of_Coaching_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9995/storyline/basedi/io/coaching";

                        _5_1_stored_Director_Of_Coaching_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/coaching";

                        return _5_1_stored_Director_Of_Coaching_RequestHandler.Action(_storedInputs);
                    }

                    if (_storedProcessRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_CONSULTING"))
                    {
                        _5_2_stored_Director_Of_Consulting_RequestHandler = new Studio_OfferDevelopment_Consulting_Chapter_5_2_Page_0_ControlNicheMaster_Handler_1_0(_storedInputs);

                        _5_2_stored_Director_Of_Consulting_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6995/storyline/basedi/io/consulting";
                        _5_2_stored_Director_Of_Consulting_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7995/storyline/basedi/io/consulting";

                        _5_2_stored_Director_Of_Consulting_RequestHandler.APILocationLocalNodeJS = "https://localhost:8995/storyline/basedi/io/consulting";
                        _5_2_stored_Director_Of_Consulting_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9995/storyline/basedi/io/consulting";

                        _5_2_stored_Director_Of_Consulting_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/consulting";

                        return _5_2_stored_Director_Of_Consulting_RequestHandler.Action(_storedInputs);
                    }

                    if (_storedProcessRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_PERSONALTRAINING"))
                    {
                        _5_3_stored_Director_Of_PersonalTraining_RequestHandler = new Studio_OfferDevelopment_PersonalTraining_Chapter_5_3_Page_0_ControlNicheMaster_Handler_1_0(_storedInputs);

                        _5_3_stored_Director_Of_PersonalTraining_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6995/storyline/basedi/io/personaltraining";
                        _5_3_stored_Director_Of_PersonalTraining_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7995/storyline/basedi/io/personaltraining";

                        _5_3_stored_Director_Of_PersonalTraining_RequestHandler.APILocationLocalNodeJS = "https://localhost:8995/storyline/basedi/io/personaltraining";
                        _5_3_stored_Director_Of_PersonalTraining_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9995/storyline/basedi/io/personaltraining";

                        _5_3_stored_Director_Of_PersonalTraining_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/personaltraining";

                        return _5_3_stored_Director_Of_PersonalTraining_RequestHandler.Action(_storedInputs);
                    }

                    #endregion

                    #region 6. Sell Subscription Offer Storylines

                    if (_storedProcessRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_SOFTWARE"))
                    {
                        _6_1_stored_Director_Of_Software_RequestHandler = new Studio_OfferDevelopment_Software_Chapter_6_1_Page_0_ControlNicheMaster_Handler_1_0(_storedInputs);

                        _6_1_stored_Director_Of_Software_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6996/storyline/basedi/io/software";
                        _6_1_stored_Director_Of_Software_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7996/storyline/basedi/io/software";

                        _6_1_stored_Director_Of_Software_RequestHandler.APILocationLocalNodeJS = "https://localhost:8996/storyline/basedi/io/software";
                        _6_1_stored_Director_Of_Software_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9996/storyline/basedi/io/software";

                        _6_1_stored_Director_Of_Software_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/software";

                        return _6_1_stored_Director_Of_Software_RequestHandler.Action(_storedInputs);
                    }

                    #endregion

                    #region 7. Sell Commission Offer Storylines

                    if (_storedProcessRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_AFFILIATEREVENUE"))
                    {
                        _7_1_stored_Director_Of_AffiliateRevenue_RequestHandler = new Studio_OfferDevelopment_AffiliateRevenue_Chapter_7_1_Page_0_ControlNicheMaster_Handler_1_0(_storedInputs);

                        _7_1_stored_Director_Of_AffiliateRevenue_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6997/storyline/basedi/io/affiliaterevenue";
                        _7_1_stored_Director_Of_AffiliateRevenue_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7997/storyline/basedi/io/affiliaterevenue";

                        _7_1_stored_Director_Of_AffiliateRevenue_RequestHandler.APILocationLocalNodeJS = "https://localhost:8997/storyline/basedi/io/affiliaterevenue";
                        _7_1_stored_Director_Of_AffiliateRevenue_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9997/storyline/basedi/io/affiliaterevenue";

                        _7_1_stored_Director_Of_AffiliateRevenue_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/affiliaterevenue";

                        return _7_1_stored_Director_Of_AffiliateRevenue_RequestHandler.Action(_storedInputs);
                    }

                    #endregion

                    #region 8. Account Loss or Gain Storylines

                    if (_storedProcessRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_ACCOUNTING"))
                    {
                        _8_1_stored_Director_Of_Accounting_RequestHandler = new Studio_Strategy_Accounting_Chapter_8_1_Page_0_ControlNicheMaster_Handler_1_0(_storedInputs);

                        _8_1_stored_Director_Of_Accounting_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6998/storyline/basedi/io/accounting";
                        _8_1_stored_Director_Of_Accounting_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7998/storyline/basedi/io/accounting";

                        _8_1_stored_Director_Of_Accounting_RequestHandler.APILocationLocalNodeJS = "https://localhost:8998/storyline/basedi/io/accounting";
                        _8_1_stored_Director_Of_Accounting_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9998/storyline/basedi/io/accounting";

                        _8_1_stored_Director_Of_Accounting_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/accounting";

                        return _8_1_stored_Director_Of_Accounting_RequestHandler.Action(_storedInputs);
                    }

                    #endregion

                    #region 9. Customer Service Storylines

                    if (_storedProcessRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_CUSTOMERSERVICE"))
                    {
                        _9_1_stored_Director_Of_CustomerService_RequestHandler = new Studio_Strategy_CustomerService_Chapter_9_1_Page_0_ControlNicheMaster_Handler_1_0(_storedInputs);

                        _9_1_stored_Director_Of_CustomerService_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6999/storyline/basedi/io/customerservice";
                        _9_1_stored_Director_Of_CustomerService_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7999/storyline/basedi/io/customerservice";

                        _9_1_stored_Director_Of_CustomerService_RequestHandler.APILocationLocalNodeJS = "https://localhost:8999/storyline/basedi/io/customerservice";
                        _9_1_stored_Director_Of_CustomerService_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9999/storyline/basedi/io/customerservice";

                        _9_1_stored_Director_Of_CustomerService_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/customerservice";

                        return _9_1_stored_Director_Of_CustomerService_RequestHandler.Action(_storedInputs);
                    }

                    #endregion

                    #region 10. Perform Manual Task Storylines

                    if (_storedProcessRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_PRODUCTIVITY"))
                    {
                        _10_1_stored_Director_Of_Productivity_RequestHandler = new Studio_Strategy_Productivity_Chapter_10_1_Page_0_ControlNicheMaster_Handler(_storedInputs);

                        _10_1_stored_Director_Of_Productivity_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6910/storyline/basedi/io/productivity";
                        _10_1_stored_Director_Of_Productivity_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7910/storyline/basedi/io/productivity";

                        _10_1_stored_Director_Of_Productivity_RequestHandler.APILocationLocalNodeJS = "https://localhost:8910/storyline/basedi/io/productivity";
                        _10_1_stored_Director_Of_Productivity_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9910/storyline/basedi/io/productivity";

                        _10_1_stored_Director_Of_Productivity_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/productivity";

                        return _10_1_stored_Director_Of_Productivity_RequestHandler.Action(_storedInputs);
                    }

                    #endregion

                    #region 11. Automate Manual Task Storylines

                    if (_storedProcessRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_RISKMANAGEMENT"))
                    {
                        _11_1_stored_Director_Of_RiskManagement_RequestHandler = new Studio_Strategy_RiskManagement_Chapter_11_1_Page_0_ControlNicheMaster_Handler(_storedInputs);

                        _11_1_stored_Director_Of_RiskManagement_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6911/storyline/basedi/io/riskmanagement";
                        _11_1_stored_Director_Of_RiskManagement_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7911/storyline/basedi/io/riskmanagement";

                        _11_1_stored_Director_Of_RiskManagement_RequestHandler.APILocationLocalNodeJS = "https://localhost:8911/storyline/basedi/io/riskmanagement";
                        _11_1_stored_Director_Of_RiskManagement_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9911/storyline/basedi/io/riskmanagement";

                        _11_1_stored_Director_Of_RiskManagement_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/riskmanagement";

                        return _11_1_stored_Director_Of_RiskManagement_RequestHandler.Action(_storedInputs);
                    }

                    #endregion

                    #region 12. Other Storylines

                    if (_storedProcessRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_CAREERSEMPLOYMENT"))
                    {
                        _12_1_stored_Director_Of_Careers_RequestHandler = new Studio_Strategy_CareersEmployment_Chapter_12_1_Page_0_ControlNicheMaster_Handler(_storedInputs);

                        _12_1_stored_Director_Of_Careers_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6912/storyline/basedi/io/careersemployment";
                        _12_1_stored_Director_Of_Careers_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7912/storyline/basedi/io/careersemployment";

                        _12_1_stored_Director_Of_Careers_RequestHandler.APILocationLocalNodeJS = "https://localhost:8912/storyline/basedi/io/careersemployment";
                        _12_1_stored_Director_Of_Careers_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9912/storyline/basedi/io/careersemployment";

                        _12_1_stored_Director_Of_Careers_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/careersemployment";

                        return _12_1_stored_Director_Of_Careers_RequestHandler.Action(_storedInputs);
                    }

                    if (_storedProcessRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_WEBDEVELOPMENT"))
                    {
                        _12_3_stored_Director_Of_WebDevelopment_RequestHandler = new Studio_Automation_WebDevelopment_Chapter_12_3_Page_0_ControlNicheMaster_Handler_1_0(_storedInputs);

                        _12_3_stored_Director_Of_WebDevelopment_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6912/storyline/basedi/io/webdevelopment";
                        _12_3_stored_Director_Of_WebDevelopment_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7912/storyline/basedi/io/webdevelopment";

                        _12_3_stored_Director_Of_WebDevelopment_RequestHandler.APILocationLocalNodeJS = "https://localhost:8912/storyline/basedi/io/webdevelopment";
                        _12_3_stored_Director_Of_WebDevelopment_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9912/storyline/basedi/io/webdevelopment";

                        _12_3_stored_Director_Of_WebDevelopment_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/webdevelopment";

                        return _12_3_stored_Director_Of_WebDevelopment_RequestHandler.Action(_storedInputs);
                    }

                    if (_storedProcessRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_CMS"))
                    {
                        _12_4_stored_Director_Of_CMS_RequestHandler = new Studio_AudienceTesting_CMS_Chapter_12_4_Page_0_ControlNicheMaster_Handler_1_0(_storedInputs);

                        _12_4_stored_Director_Of_CMS_RequestHandler.APILocationLocalNodeJS = "https://localhost:6912/storyline/basedi/io/cms";
                        _12_4_stored_Director_Of_CMS_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:7912/storyline/basedi/io/cms";

                        _12_4_stored_Director_Of_CMS_RequestHandler.APILocationLocalDotNetCore = "https://localhost:8912/storyline/basedi/io/cms";
                        _12_4_stored_Director_Of_CMS_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:9912/storyline/basedi/io/cms";

                        _12_4_stored_Director_Of_CMS_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/cms";

                        return _12_4_stored_Director_Of_CMS_RequestHandler.Action(_storedInputs);
                    }

                    if (_storedProcessRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("DIRECTOR_OF_SECURITY"))
                    {
                        _12_5_stored_Director_Of_Security_RequestHandler = new Studio_Automation_Security_Chapter_12_4_Page_0_ControlNicheMaster_Handler_1_0(_storedInputs);

                        _12_5_stored_Director_Of_Security_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6912/storyline/basedi/io/security";
                        _12_5_stored_Director_Of_Security_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7912/storyline/basedi/io/security";

                        _12_5_stored_Director_Of_Security_RequestHandler.APILocationLocalNodeJS = "https://localhost:8912/storyline/basedi/io/security";
                        _12_5_stored_Director_Of_Security_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9912/storyline/basedi/io/security";

                        _12_5_stored_Director_Of_Security_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/security";

                        return _12_5_stored_Director_Of_Security_RequestHandler.Action(_storedInputs);
                    }

                    #endregion
                }

                #endregion
            }
            catch
            {
                #region EDGE CASE - USE an exception message

                throw new Exception("No DIRECTOR request handler found for " + _storedProcessRequestName.ToUpper());

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

        private string _storedInputRequestName = "";
        private string _storedInputRequestNameDataCacheKey = "";

        private aClass_Programming_ScriptRoutable_12_2_1_0 _storedProcessRequestHandler;

        //DATASETS
        private JObject _storedProcessRequestDataStorylineDetails;
        private JObject _storedProcessRequestDataStorylineDetails_Parameters;

        //MISC
        private ExtraData_12_2_1_0 _storedProcessRequestExtraData;

        //PLUMBING
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedProcessRequestCentralizedStorer;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedProcessRequestCentralizedDisturber;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedProcessRequestCentralizedSensor;

        private SingleParmPoco_12_2_1_0 _storedInputs;

        private string _storedProcessRequestName = "";
        private string _storedProcessRequestByName = "";

        #endregion

        #region 2. Ready

        internal Implement_DesignPattern_Factory_Experience_12_2_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS     

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables


            #endregion

            #region DEFINE output variables

            #endregion

            ///////////////////////////////////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx


            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input action name

            string storedInputRequestActionName = parameterInputs.Parameters["parameterInputRequestActionName"] as string;

            #endregion

            #region MEMORIZE input request details

            _storedInputRequestName = parameterInputs.Parameters["parameterInputRequestName"];
            _storedInputRequestNameDataCacheKey = parameterInputs.Parameters["parameterInputRequestNameDataCacheKey"];

            _storedInputs = parameterInputs;

            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process request tracker

            _storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

            #endregion

            #region MEMORIZE process request settings

            _storedProcessRequestSettings = (IConfiguration)_storedProcessRequestTracker["storedProcessRequestSettings"];

            #endregion

            #region MEMORIZE process centralized handlers  

            if (_storedProcessRequestCentralizedDisturber == null)
            {
                _storedProcessRequestCentralizedDisturber = new Implement_DesignPattern_Factory_Disturber_12_2_1_0(_storedInputs);

                if (parameterInputs.Parameters.ContainsKey("parameterProcessRequestCentralizedDisturber"))
                {
                    parameterInputs.Parameters["parameterProcessRequestCentralizedDisturber"] = _storedProcessRequestCentralizedDisturber;
                }
                else
                {
                    parameterInputs.Parameters.TryAdd("parameterProcessRequestCentralizedDisturber", _storedProcessRequestCentralizedDisturber);
                }                
            }

            if (_storedProcessRequestCentralizedSensor == null)
            {
                _storedProcessRequestCentralizedSensor = new Implement_DesignPattern_Factory_Sensor_12_2_1_0(_storedInputs);

                if (parameterInputs.Parameters.ContainsKey("parameterProcessRequestCentralizedSensor"))
                {
                    parameterInputs.Parameters["parameterProcessRequestCentralizedSensor"] = _storedProcessRequestCentralizedSensor;
                }
                else
                {
                    parameterInputs.Parameters.TryAdd("parameterProcessRequestCentralizedSensor", _storedProcessRequestCentralizedSensor);
                }
            }

            if (_storedProcessRequestCentralizedStorer == null)
            {
                _storedProcessRequestCentralizedStorer = new Implement_DesignPattern_Factory_Storer_12_2_1_0(_storedInputs);

                if (parameterInputs.Parameters.ContainsKey("parameterProcessRequestCentralizedStorer"))
                {
                    parameterInputs.Parameters["parameterProcessRequestCentralizedStorer"] = _storedProcessRequestCentralizedStorer;
                }
                else
                {
                    parameterInputs.Parameters.TryAdd("parameterProcessRequestCentralizedStorer", _storedProcessRequestCentralizedStorer);
                }
            }

            #endregion

            #region MEMORIZE process developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #region MEMORIZE process extra data

            _storedProcessRequestExtraData = parameterInputs.Parameters["parameterProcessRequestExtraData"];

            #endregion

            #region MEMORIZE process request details

            _storedProcessRequestHandler = parameterInputs.Parameters["parameterProcessRequestHandler"];

            _storedProcessRequestByName = parameterInputs.Parameters["parameterProcessRequestName"];

            #endregion

            #region MEMORIZE process request tracker

            _storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

            #endregion

            #region MEMORIZE process request settings

            _storedProcessRequestSettings = (IConfiguration)_storedProcessRequestTracker["storedProcessRequestSettings"];

            #endregion

            #region MEMORIZE storyline details

            _storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            _storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails_Parameters"];

            #endregion

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxx


            #endregion

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

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables



            #endregion

            #region DEFINE output variables

            #endregion

            ///////////////////////////////////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx


            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input xxx xxxx


            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process xxx xxx



            #endregion

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxx


            #endregion

            #endregion

            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            #endregion
        }

        #endregion

        #region 4. Action

        public override object Action_1_Begin_Process()
        {
            #region 1. INPUTS     

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables

            Studio_AudienceTesting_SocialMedia_Chapter_2_3_Page_0_ControlNicheMaster_Handler_1_0 _2_3_stored_Director_Of_SocialMedia_RequestHandler = null;

            Studio_Automation_WebDevelopment_Chapter_12_3_Page_0_ControlNicheMaster_Handler_1_0 _12_3_stored_Director_Of_WebDevelopment_RequestHandler = null;

            #endregion

            #region DEFINE output variables

            #endregion

            ///////////////////////////////////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx


            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input action name

            string storedInputRequestActionName = _storedInputs.Parameters["parameterInputRequestActionName"] as string;

            #endregion

            #region MEMORIZE input request details

            _storedInputRequestName = _storedInputs.Parameters["parameterInputRequestName"];
            _storedInputRequestNameDataCacheKey = _storedInputs.Parameters["parameterInputRequestNameDataCacheKey"];

            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process request tracker

            _storedProcessRequestTracker = _storedInputs.Parameters["parameterProcessRequestTracker"];

            #endregion

            #region MEMORIZE process request settings

            _storedProcessRequestSettings = (IConfiguration)_storedProcessRequestTracker["storedProcessRequestSettings"];

            #endregion

            #region MEMORIZE process developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion          

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxx


            #endregion

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

                if (_storedProcessRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("EXPERIENCE_THE_MOVEMENT_TOFACEBOOKPAGE_DATATRANSFER"))
                {
                    _2_3_stored_Director_Of_SocialMedia_RequestHandler = new Studio_AudienceTesting_SocialMedia_Chapter_2_3_Page_0_ControlNicheMaster_Handler_1_0(_storedInputs);

                    _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:8992/storyline/basedi/io/socialmedia";
                    _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9992/storyline/basedi/io/socialmedia";
                    _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/socialmedia";

                    return _2_3_stored_Director_Of_SocialMedia_RequestHandler.Action(_storedInputs);
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

                if (_storedProcessRequestName.ToUpper(CultureInfo.CurrentCulture).Contains("EXPERIENCE_THE_HEAR_OFTHEAPISERVER_MESSAGE"))
                {
                    #region 12. Other

                    _12_3_stored_Director_Of_WebDevelopment_RequestHandler = new Studio_Automation_WebDevelopment_Chapter_12_3_Page_0_ControlNicheMaster_Handler_1_0(_storedInputs);

                    _12_3_stored_Director_Of_WebDevelopment_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:8912/storyline/basedi/io/webdevelopment";
                    _12_3_stored_Director_Of_WebDevelopment_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:9912/storyline/basedi/io/webdevelopment";
                    _12_3_stored_Director_Of_WebDevelopment_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/webdevelopment";

                    return _12_3_stored_Director_Of_WebDevelopment_RequestHandler.Action(_storedInputs);

                    #endregion
                }

                #endregion

                #endregion
            }
            catch
            {
                #region EDGE CASE - USE an exception message

                throw new Exception("No EXPERIENCE request handler found for " + _storedProcessRequestName.ToUpper());

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

        private string _storedInputRequestName = "";
        private string _storedInputRequestNameDataCacheKey = "";

        private aClass_Programming_ScriptRoutable_12_2_1_0 _storedProcessRequestHandler;

        //DATASETS
        private JObject _storedProcessRequestDataStorylineDetails;
        private JObject _storedProcessRequestDataStorylineDetails_Parameters;

        //MISC
        private ExtraData_12_2_1_0 _storedProcessRequestExtraData;

        //PLUMBING
        private SingleParmPoco_12_2_1_0 _storedInputs;

        private string _storedProcessRequestName = "";
        private string _storedProcessRequestByName = "";

        #endregion

        #region 2. Ready

        internal Implement_DesignPattern_Factory_Storer_12_2_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS     

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables


            #endregion

            #region DEFINE output variables

            #endregion

            ///////////////////////////////////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx


            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input action name

            string storedInputRequestActionName = parameterInputs.Parameters["parameterInputRequestActionName"] as string;

            #endregion

            #region MEMORIZE input request details

            _storedInputRequestName = parameterInputs.Parameters["parameterInputRequestName"];
            _storedInputRequestNameDataCacheKey = parameterInputs.Parameters["parameterInputRequestNameDataCacheKey"];

            _storedInputs = parameterInputs;

            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process request tracker

            _storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

            #endregion

            #region MEMORIZE process request settings

            _storedProcessRequestSettings = (IConfiguration)_storedProcessRequestTracker["storedProcessRequestSettings"];

            #endregion

            #region MEMORIZE process developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #region MEMORIZE process extra data

            _storedProcessRequestExtraData = parameterInputs.Parameters["parameterProcessRequestExtraData"];

            #endregion

            #region MEMORIZE process request details

            _storedProcessRequestHandler = parameterInputs.Parameters["parameterProcessRequestHandler"];

            _storedProcessRequestByName = parameterInputs.Parameters["parameterProcessRequestName"];

            #endregion

            #region MEMORIZE storyline details

            _storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            _storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails_Parameters"];

            #endregion

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxx


            #endregion

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

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables



            #endregion

            #region DEFINE output variables

            #endregion

            ///////////////////////////////////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx


            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input xxx xxxx


            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process xxx xxx



            #endregion

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxx


            #endregion

            #endregion

            #endregion

            #region 2. PROCESS

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

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables



            #endregion

            #region DEFINE output variables

            JObject storedOutputResponseData = null;

            #endregion

            ///////////////////////////////////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx


            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input request details

            _storedInputRequestName = "Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0";
            _storedInputRequestNameDataCacheKey = "Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0-P1_0";

            _storedInputs.Parameters["parameterInputRequestName"] = _storedInputRequestName;
            _storedInputs.Parameters["parameterInputRequestNameDataCacheKey"] = _storedInputRequestNameDataCacheKey;

            _storedInputs.Parameters["parameterProcessRequestName"] = "";

            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxx


            #endregion

            #endregion

            #endregion

            #region 2. PROCESS

            try
            {
                #region EXECUTE storage request

                #region IDEAL CASE - USE storage handler
   
                storedOutputResponseData = new Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0(_storedInputs))
                  .SetupStoryline(_storedInputs)
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

        private string _storedInputRequestName = "";
        private string _storedInputRequestNameDataCacheKey = "";

        private aClass_Programming_ScriptRoutable_12_2_1_0 _storedProcessRequestHandler;

        //DATASETS
        private JObject _storedProcessRequestDataStorylineDetails;
        private JObject _storedProcessRequestDataStorylineDetails_Parameters;

        //MISC
        private ExtraData_12_2_1_0 _storedProcessRequestExtraData;

        //PLUMBING
        private SingleParmPoco_12_2_1_0 _storedInputs;

        private string _storedProcessRequestName = "";
        private string _storedProcessRequestByName = "";

        #endregion

        #region 2. Ready

        internal Implement_DesignPattern_Factory_Disturber_12_2_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS     

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables


            #endregion

            #region DEFINE output variables

            #endregion

            ///////////////////////////////////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx


            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input action name

            string storedInputRequestActionName = parameterInputs.Parameters["parameterInputRequestActionName"] as string;

            #endregion

            #region MEMORIZE input request details

            _storedInputRequestName = parameterInputs.Parameters["parameterInputRequestName"];
            _storedInputRequestNameDataCacheKey = parameterInputs.Parameters["parameterInputRequestNameDataCacheKey"];

            _storedInputs = parameterInputs;

            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process request tracker

            _storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

            #endregion

            #region MEMORIZE process request settings

            _storedProcessRequestSettings = (IConfiguration)_storedProcessRequestTracker["storedProcessRequestSettings"];

            #endregion

            #region MEMORIZE process developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #region MEMORIZE process extra data

            _storedProcessRequestExtraData = parameterInputs.Parameters["parameterProcessRequestExtraData"];

            #endregion

            #region MEMORIZE process request details

            _storedProcessRequestHandler = parameterInputs.Parameters["parameterProcessRequestHandler"];

            _storedProcessRequestByName = parameterInputs.Parameters["parameterProcessRequestName"];

            #endregion

            #region MEMORIZE storyline details

            _storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            _storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails_Parameters"];

            #endregion

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxx


            #endregion

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

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables



            #endregion

            #region DEFINE output variables

            #endregion

            ///////////////////////////////////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx


            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input xxx xxxx


            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process xxx xxx



            #endregion

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxx


            #endregion

            #endregion

            #endregion

            #region 2. PROCESS

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

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables



            #endregion

            #region DEFINE output variables

            JObject storedOutputResponseData = null;

            #endregion

            ///////////////////////////////////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx


            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input request details

            _storedInputRequestName = "Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0";
            _storedInputRequestNameDataCacheKey = "Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0-P1_0";

            _storedInputs.Parameters["parameterInputRequestName"] = _storedInputRequestName;
            _storedInputs.Parameters["parameterInputRequestNameDataCacheKey"] = _storedInputRequestNameDataCacheKey;

            _storedInputs.Parameters["parameterProcessRequestName"] = "";

            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxx


            #endregion

            #endregion

            #endregion

            #region 2. PROCESS

            try
            {
                #region EXECUTE exception request

                #region IDEAL CASE - USE exception handler

                storedOutputResponseData = new Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0(_storedInputs))
                  .SetupStoryline(_storedInputs)
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

        private string _storedInputRequestName = "";
        private string _storedInputRequestNameDataCacheKey = "";

        private aClass_Programming_ScriptRoutable_12_2_1_0 _storedProcessRequestHandler;

        //DATASETS
        private JObject _storedProcessRequestDataStorylineDetails;
        private JObject _storedProcessRequestDataStorylineDetails_Parameters;

        //MISC
        private ExtraData_12_2_1_0 _storedProcessRequestExtraData;

        //PLUMBING
        private SingleParmPoco_12_2_1_0 _storedInputs;

        private string _storedProcessRequestName = "";
        private string _storedProcessRequestByName = "";

        #endregion

        #region 2. Ready

        internal Implement_DesignPattern_Factory_Sensor_12_2_1_0(SingleParmPoco_12_2_1_0 parameterInputs)
        {
            #region 1. INPUTS     

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables


            #endregion

            #region DEFINE output variables

            #endregion

            ///////////////////////////////////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx


            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input action name

            string storedInputRequestActionName = parameterInputs.Parameters["parameterInputRequestActionName"] as string;

            #endregion

            #region MEMORIZE input request details

            _storedInputRequestName = parameterInputs.Parameters["parameterInputRequestName"];
            _storedInputRequestNameDataCacheKey = parameterInputs.Parameters["parameterInputRequestNameDataCacheKey"];

            _storedInputs = parameterInputs;

            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process request tracker

            _storedProcessRequestTracker = parameterInputs.Parameters["parameterProcessRequestTracker"];

            #endregion

            #region MEMORIZE process request settings

            _storedProcessRequestSettings = (IConfiguration)_storedProcessRequestTracker["storedProcessRequestSettings"];

            #endregion

            #region MEMORIZE process developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #region MEMORIZE process extra data

            _storedProcessRequestExtraData = parameterInputs.Parameters["parameterProcessRequestExtraData"];

            #endregion

            #region MEMORIZE process request details

            _storedProcessRequestHandler = parameterInputs.Parameters["parameterProcessRequestHandler"];

            _storedProcessRequestByName = parameterInputs.Parameters["parameterProcessRequestName"];

            #endregion

            #region MEMORIZE storyline details

            _storedProcessRequestDataStorylineDetails = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails"];
            _storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters["parameterProcessRequestDataStorylineDetails_Parameters"];

            #endregion

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxx


            #endregion

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

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables



            #endregion

            #region DEFINE output variables

            #endregion

            ///////////////////////////////////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx


            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input xxx xxxx


            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process xxx xxx



            #endregion

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxx


            #endregion

            #endregion

            #endregion

            #region 2. PROCESS

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

            #region DEFINE control variables

            #endregion

            #region DEFINE input variables


            #endregion

            #region DEFINE process variables



            #endregion

            #region DEFINE output variables

            JObject storedOutputResponseData = null;

            #endregion

            ///////////////////////////////////////////////////////////

            #region MEMORIZE control variables

            #region MEMORIZE control xxx xxx


            #endregion

            #endregion

            #region MEMORIZE input variables

            #region MEMORIZE input request details

            _storedInputRequestName = "Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0";
            _storedInputRequestNameDataCacheKey = "Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0-P1_0";

            _storedInputs.Parameters["parameterInputRequestName"] = _storedInputRequestName;
            _storedInputs.Parameters["parameterInputRequestNameDataCacheKey"] = _storedInputRequestNameDataCacheKey;

            _storedInputs.Parameters["parameterProcessRequestName"] = "";

            #endregion

            #endregion

            #region MEMORIZE process variables

            #region MEMORIZE process developer mode

            bool storedProcessRequestDeveloperMode = _storedProcessRequestSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #endregion

            #region MEMORIZE output variables

            #region MEMORIZE output xxx xxx


            #endregion

            #endregion

            #endregion

            #region 2. PROCESS

            try
            {
                #region EXECUTE exception request

                #region IDEAL CASE - USE exception handler

                storedOutputResponseData = new Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0(_storedInputs))
                  .SetupStoryline(_storedInputs)
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

