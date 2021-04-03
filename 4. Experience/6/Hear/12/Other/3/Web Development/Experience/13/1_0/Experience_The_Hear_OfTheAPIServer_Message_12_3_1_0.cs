#region Imports

#region BaseDI

using BaseDI.Professional.Director.Programming_1;

using BaseDI.Professional.Script.Programming.Abstract_1;
using BaseDI.Professional.Script.Programming.Extensions_1;
using BaseDI.Professional.Script.Programming.Poco_1;
using BaseDI.Professional.Script.Programming.Repository_1;

using BaseDI.Professional.Script.Web_Development.Extensions_13;

using BaseDI.Professional.Story.Programming_1;

#endregion

#region .Net Core

using Microsoft.AspNetCore.Http;

using Microsoft.Extensions.Configuration;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

#endregion 

#region 3rd Party Core

using Newtonsoft.Json.Linq;

#endregion

#endregion

namespace BaseDI.Professional.Experience.Hear.Web_Development_13
{
    public class Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0 : aClass_Programming_ScriptExperience_BuilderPattern_12_2_1_0
    {
        #region 1. Assign

        //A. Variable Declaration

        //MISC
        private ExtraData_12_2_1_0 _storedExtraData;

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0(ExtraData_12_2_1_0 parameterExtraData = null)
        {
            #region 1. INPUTS

            #region MEMORIZE extra data

            _storedExtraData = parameterExtraData;

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE process defaults

            #region IDEAL CASE - USE defaults handler


            #endregion

            #endregion

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

        //A. Story in motion (DO SOMETHING)
        public override async Task<JObject> Action()
        {
            #region 1. INPUTS

            #endregion

            #region 2. PROCESS

            #region BEGIN process execution

            #region IDEAL CASE - USE builder pattern

            if (DirectorOrExperienceRequestHandler != null && DirectorOrExperienceRequestHandler.ClientOrServerInstance != null)
            {
                ClientOrServerInstance = DirectorOrExperienceRequestHandler.ClientOrServerInstance;
                MasterLeader = DirectorOrExperienceRequestHandler.MasterLeader;
                MasterController = DirectorOrExperienceRequestHandler.MasterController;
                MasterConverter = DirectorOrExperienceRequestHandler.MasterConverter;
                MasterDisturber = DirectorOrExperienceRequestHandler.MasterDisturber;
                MasterSensor = DirectorOrExperienceRequestHandler.MasterSensor;
                MasterStorer = DirectorOrExperienceRequestHandler.MasterStorer;
                MasterTransporter = DirectorOrExperienceRequestHandler.MasterTransporter;
                ExtraData = DirectorOrExperienceRequestHandler.ExtraData;
            }

            //REQUIRED: Implement one of the design patterns at https://www.dofactory.com/net/design-patterns
            Use_DesignPattern_Builder_Experience_12_3_1_0 designPattern = new Use_DesignPattern_Builder_Experience_12_3_1_0(ClientOrServerInstance, MasterStorer, MasterDisturber, MasterSensor, StorylineDetails, StorylineDetails_Parameters, (aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>>)Repository, ExtraData, DirectorOrExperienceRequestHandler);

            StorylineDetails = await designPattern.Action().ConfigureAwait(true);

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN request respnose

            #region IDEAL CASE - USE populated data

            return await Task.FromResult<JObject>(StorylineDetails).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        #endregion
    }

    #region 5. Action Script

    //A. Prepare for Action (SETUP WHAT WILL HAPPEN)

    internal class Use_DesignPattern_Builder_Experience_12_3_1_0
    {
        #region 1. Assign

        //SETTINGS
        private IConfiguration _storedAppSettings;

        //CLIENT/SERVER
        internal Dictionary<string, object> _storedClientORserverInstance;

        //DATASETS
        internal JObject _storedStorylineDetails;
        internal JObject _storedStorylineDetails_Parameters;

        internal aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> _stored_Repository;

        //MISC
        internal ExtraData_12_2_1_0 _storedExtraData;

        //PLUMBING
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _stored_CentralizedStorer;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _stored_CentralizedDisturber;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _stored_CentralizedSensor;

        internal aClass_Programming_ScriptRoutable_12_2_1_0 _stored_ExperienceRequestHandler;

        #endregion

        #region 2. Ready

        internal Use_DesignPattern_Builder_Experience_12_3_1_0(Dictionary<string, object> parameterClientORserverInstance, aClass_Programming_ScriptAction_12_2_1_0<JObject> parameterCentralizedStorer, aClass_Programming_ScriptAction_12_2_1_0<JObject> parameterCentralizedDisturber, aClass_Programming_ScriptAction_12_2_1_0<JObject> parameterCentralizedSensor, JObject parameterStorylineDetails, JObject parameterStorylineDetails_Parameters, aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> parameterRepository, ExtraData_12_2_1_0 parameterExtraData, aClass_Programming_ScriptRoutable_12_2_1_0 parameter_ExperienceRequestHandler = null)
        {
            #region 1. INPUTS

            #region MEMORIZE app settings

            _storedAppSettings = parameterClientORserverInstance["appSettings"] as IConfiguration;

            #endregion

            #region MEMORIZE clientOrServer instance

            _storedClientORserverInstance = parameterClientORserverInstance;

            #endregion

            #region MEMORIZE centralized processes 

            _stored_CentralizedDisturber = parameterCentralizedDisturber;
            _stored_CentralizedSensor = parameterCentralizedSensor;
            _stored_CentralizedStorer = parameterCentralizedStorer;

            #endregion

            #region MEMORIZE data stragety

            _stored_Repository = parameterRepository;

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #region MEMORIZE director request handler

            _stored_ExperienceRequestHandler = parameter_ExperienceRequestHandler;

            #endregion

            #region MEMORIZE extra data

            _storedExtraData = parameterExtraData;

            #endregion

            #region MEMORIZE request details

            _stored_ExperienceRequestHandler = parameter_ExperienceRequestHandler;

            #endregion

            #region MEMORIZE storyline details

            _storedStorylineDetails = parameterStorylineDetails;
            _storedStorylineDetails_Parameters = parameterStorylineDetails_Parameters;

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

        internal async Task<JObject> Action()
        {
            #region 1. INPUTS


            #endregion

            #region 2. PROCESS

            #region ARRANGE execution order

            #region IDEAL CASE - USE builder pattern

            var builder = new Implement_DesignPattern_Builder_Chapter_12_2_Page_1_1_0(_storedClientORserverInstance, _stored_CentralizedStorer, _stored_CentralizedStorer, _stored_CentralizedSensor, _storedStorylineDetails, _storedStorylineDetails_Parameters, _stored_Repository, _storedExtraData, _stored_ExperienceRequestHandler);

            _storedStorylineDetails = await builder.Action_1_Begin_Process().ConfigureAwait(true);

            _storedStorylineDetails = await builder.Action_2_Validate_Process().ConfigureAwait(true);

            _storedStorylineDetails = await builder.Action_3_Process_StoryAuthor().ConfigureAwait(true);
            _storedStorylineDetails = await builder.Action_4_Process_StoryCharacters().ConfigureAwait(true);
            _storedStorylineDetails = await builder.Action_5_Process_StorySetting().ConfigureAwait(true);
            _storedStorylineDetails = await builder.Action_6_Process_StoryExperiences().ConfigureAwait(true);
            _storedStorylineDetails = await builder.Action_7_Process_StoryResources().ConfigureAwait(true);

            _storedStorylineDetails = await builder.Action_8_Process_CRUD().ConfigureAwait(true);

            _storedStorylineDetails = await builder.Action_9_Verify_Process().ConfigureAwait(true);

            _storedStorylineDetails = await builder.Action_10_End_Process().ConfigureAwait(true);

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #region RETURN request response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(_storedStorylineDetails).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        #endregion
    }

    #endregion

    #region 6. Action Implementation

    //A. Commence Storyline (ACT WHAT HAS HAPPENED)

    internal class Implement_DesignPattern_Builder_Experience_12_3_1_0 : aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>>
    {
        #region 1. Assign

        //SETTINGS
        private IConfiguration _storedAppSettings;

        private string _storedSettingSecurityAppId = "";
        private string _storedSettingSecurityAppSecret = "";
        private string _storedSettingSecurityAppToken = "";

        //CLIENT/SERVER
        internal Dictionary<string, object> _storedClientORserverInstance;

        private Dictionary<string, JToken> _storedServerInstance = null;
        private object _storedServerInstanceExperienceRequestHandler = null;
        private HttpRequest _storedServerHTTPRequestInstance = null;

        private string _storedServerRequestRESTVerb = "";
        private string _storedServerRoutePath = "";

        //DATASET
        private JObject _storedStorylineDetails = null;
        private JObject _storedStorylineDetails_Parameters = null;

        private string _storedDataObservationTemplate = "";

        //MISC
        private ExtraData_12_2_1_0 _storedExtraData = null;

        //PLUMBING
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _stored_CentralizedStorer;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _stored_CentralizedDisturber;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _stored_CentralizedSensor;

        private aClass_Programming_ScriptRoutable_12_2_1_0 _stored_ExperienceRequestHandler;

        private string _stored_ExperienceRequestHandlerName = "Experience_The_Movement_ToFacebookPage_DataTransfer_12_2_1_0";
        private string _stored_ExperienceRequestHandlerActionName = "";

        private aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> _stored_Repository;


        private Func<JObject, ExtraData_12_2_1_0, JObject> Step_1_0_Custom_Control_ClientRequestToServer_1_0 = null;
        private Func<JObject, ExtraData_12_2_1_0, JObject> Step_2_0_Custom_Output_ServerRequestToClient_1_0 = null;

        private Func<SingleParmPoco_12_2_1_0, JObject> StoredStartUpCallBack = null;

        #endregion

        #region 2. Ready

        internal Implement_DesignPattern_Builder_Experience_12_3_1_0(Dictionary<string, object> parameterClientORserverInstance, aClass_Programming_ScriptAction_12_2_1_0<JObject> parameterCentralizedStorer, aClass_Programming_ScriptAction_12_2_1_0<JObject> parameterCentralizedDisturber, aClass_Programming_ScriptAction_12_2_1_0<JObject> parameterCentralizedSensor, JObject parameterStorylineDetails, JObject parameterStorylineDetails_Parameters, aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> parameterRepository, ExtraData_12_2_1_0 parameterExtraData, aClass_Programming_ScriptRoutable_12_2_1_0 parameter_ExperienceRequestHandler = null)
        {
            #region 1. INPUTS

            #region MEMORIZE clientOrServer instance

            _storedClientORserverInstance = parameterClientORserverInstance;

            #endregion

            #region MEMORIZE centralized processes 

            _stored_CentralizedDisturber = parameterCentralizedDisturber;
            _stored_CentralizedSensor = parameterCentralizedSensor;
            _stored_CentralizedStorer = parameterCentralizedStorer;

            #endregion

            #region MEMORIZE data stragety

            _stored_Repository = parameterRepository;

            #endregion

            #region MEMORIZE experience request handler

            _stored_ExperienceRequestHandler = parameter_ExperienceRequestHandler;

            #endregion

            #region MEMORIZE extra data

            _storedExtraData = parameterExtraData;

            #endregion

            #region MEMORIZE storyline details

            _storedStorylineDetails = parameterStorylineDetails;
            _storedStorylineDetails_Parameters = parameterStorylineDetails_Parameters;

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE process defaults

            #region IDEAL CASE - USE defaults handler

            HandleChapterDefaults();

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #endregion  
        }

        #endregion

        #region 3. Set

        private void HandleChapterDefaults()
        {
            #region 1. INPUTS

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #endregion

            #region 2. PROCESS

            #region EXECUTE process defaults

            try
            {
                #region IDEAL CASE - USE request parser

                //STORE request http instance
                _storedServerHTTPRequestInstance = _storedClientORserverInstance.ContainsKey("request") ? (HttpRequest)_storedClientORserverInstance["request"] : null;

                //STORE request server instance
                _storedServerInstanceExperienceRequestHandler = _storedClientORserverInstance.ContainsKey("Server") ? _storedClientORserverInstance["Server"] : null;

                //STORE request action name
                _stored_ExperienceRequestHandlerActionName = _storedClientORserverInstance.ContainsKey("actionName") ? (string)_storedClientORserverInstance["actionName"] : null;

                #endregion
            }
            catch (Exception)
            {
                #region EDGE CASE - USE developer logger

                if (storedDeveloperMode)
                {
                    _storedClientORserverInstance["processStepNumber"] = (int)_storedClientORserverInstance["processStepNumber"] + 1;

                    Console.WriteLine("STEP " + _storedClientORserverInstance["processStepNumber"] + " Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.cs -> Implement_DesignPattern_Builder_Experience_12_3_1_0 -> HandleChapterDefaults -> [FAILED parsing a request [storedServerHTTPRequestInstance FROM storedClientORserverInstance], [storedServerInstanceExperienceRequestHandler FROM storedClientORserverInstance] or [stored_ExperienceRequestHandlerActionName FROM storedClientORserverInstance] for ***Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0***");
                }

                #endregion

                throw;
            }

            #region EDGE CASE - USE routing parser

            if (_storedServerHTTPRequestInstance != null)
            {
                _storedServerRoutePath = _storedServerHTTPRequestInstance.Path;
                _storedServerRequestRESTVerb = _storedServerHTTPRequestInstance.Method;
            }

            #endregion

            #region EDGE CASE - USE developer logger

            if (storedDeveloperMode)
            {
                _storedClientORserverInstance["processStepNumber"] = (int)_storedClientORserverInstance["processStepNumber"] + 1;

                Console.WriteLine("STEP " + _storedClientORserverInstance["processStepNumber"] + " Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.cs -> Implement_DesignPattern_Builder_Experience_12_3_1_0 -> HandleChapterDefaults - [FINISHED parsing routing information of " + _storedServerRequestRESTVerb + "/" + _storedServerRoutePath + "]");
            }

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #endregion
        }

        #endregion

        #region 4. Action

        #region EXECUTE LOGIC INSTUCTIONS

        //Page 1-5
        public override async Task<JObject> Action_5_Process_StorySetting()
        {
            #region 1. INPUTS

            #region DEFINE data response

            JObject storedDataResponse = null;

            #endregion

            #region DEFINE event handlers

            Func<string, string, ExtraData_12_2_1_0, JObject> Action = null;

            Func<JToken, JObject> Step_1_0_Custom_Control_ClientRequestToServer_1_0 = null;
            Func<object, string, string, object, object, HttpRequest, HttpResponse, JObject> Step_2_0_Custom_Output_ServerRequestToClient_1_0;

            #endregion

            #region DEFINE route details

            JToken storedRouteListDetails = null;

            #endregion

            #region DEFINE server routing

            List<JToken> storedControllerRoutes = null;
            string storedControllerName = "";
            string storedControllerModelDataLocalParameter = "";
            JObject storedControllerModelDataLocalObject = null;
            JObject storedControllerModelDataRemote = null;   

            #endregion

            #region MEMORIZE developer mode

            bool storedDeveloperMode = _storedAppSettings.GetValue<bool>("AppSettings:APP_SETTING_DEVELOPER_MODE");

            #endregion

            #region MEMORIZE server instance

            //STORE routing details
            _storedServerInstance = Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.Step_X_X_Custom_Store_ServerDefaultSettingsToMemory_1_0(_storedStorylineDetails);
            storedRouteListDetails = _storedServerInstance[_storedServerRequestRESTVerb.ToUpper()];

            #endregion

            #endregion

            #region 2. PROCESS

            try
            {
                if (_stored_ExperienceRequestHandlerActionName != null && _stored_ExperienceRequestHandlerActionName.ToString().ToUpper().Contains("PROCESSHTTPREQUEST_1_0"))
                {
                    if (_storedServerHTTPRequestInstance != null && _storedServerHTTPRequestInstance is HttpRequest)
                    {
                        #region EXECUTE http request

                        #region IDEAL CASE - USE baseDI pipeline

                        #region 2. OUTPUT http response                        

                        Step_2_0_Custom_Output_ServerRequestToClient_1_0 = (object parameterControllerRoute, string parameterControllerName, string parameterControllerModelDataLocalParameter, object parameterControllerModelDataLocalObject, object parameterControllerModelDataRemote, HttpRequest parameterRequest, HttpResponse parameterResponse) =>
                        {
                            #region EDGE CASE - USE updates handler

                            StoredStartUpCallBack = (SingleParmPoco_12_2_1_0 parameterResponse) =>
                            {
                                Action("", "", null);
                                return _storedStorylineDetails;
                            };

                            #endregion

                            Action = (string parameterClientRequestByName, string parameterClientRequestByNameParameters, ExtraData_12_2_1_0 parameterExtraData) =>
                            {
                                return storedDataResponse = new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0())
                                    .SetupStoryline(_storedClientORserverInstance, null, null, _storedExtraData, "", parameterControllerName, parameterControllerModelDataLocalParameter)
                                    .Action().Result;
                            };

                            Action(parameterControllerName, parameterControllerModelDataLocalParameter, _storedExtraData);

                            //OUTPUT http response
                            return storedDataResponse;
                        };

                        #endregion

                        #region 1. INPUT http request

                        Step_1_0_Custom_Control_ClientRequestToServer_1_0 = (JToken parameterRouteListDetails) =>
                        {
                            if (parameterRouteListDetails != null)
                            {
                                #region SEARCH routing list details

                                #region EDGE CASE - USE developer logger

                                if (storedDeveloperMode)
                                {
                                    _storedClientORserverInstance["processStepNumber"] = (int)_storedClientORserverInstance["processStepNumber"] + 1;

                                    Console.WriteLine("STEP " + _storedClientORserverInstance["processStepNumber"] + " Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.cs -> Implement_DesignPattern_Builder_Chapter_12_2_Page_1_1_0 -> Action_5_Process_StorySetting - [BEGIN searching for route " + _storedServerRoutePath + " in storylineDetails DataSet]");
                                }

                                #endregion

                                foreach (var routeItemDetails in parameterRouteListDetails)
                                {
                                    //STORE listing of routes
                                    storedControllerRoutes = routeItemDetails.SelectToken("SetupItemTransportItemRoute.ControllerRoutes").Children().ToList(); //item.SetupItemTransportItemRoute.ControllerRoutes;

                                    //STORE route controller name
                                    storedControllerName = routeItemDetails.SelectToken("SetupItemTransportItemRoute.ControllerName").ToString();

                                    //STORE route dataset details
                                    storedControllerModelDataLocalParameter = routeItemDetails.SelectToken("SetupItemTransportItemRoute.ModelDataLocalParameter").ToString();
                                    storedControllerModelDataLocalObject = (JObject)routeItemDetails.SelectToken("SetupItemTransportItemRoute.ModelDataLocalObject");

                                    storedControllerModelDataRemote = (JObject)routeItemDetails.SelectToken("SetupItemTransportItemRoute.ModelDataRemote");

                                    //DETERMINE if we have any routes
                                    if (storedControllerRoutes != null && storedControllerRoutes.Count() > 0)
                                    {
                                        var route = storedControllerRoutes.Where(r => r.ToString().ToUpper() == _storedServerRoutePath.ToUpper()).SingleOrDefault();

                                        if (route != null)
                                        {
                                            #region EDGE CASE - USE developer logger

                                            if (storedDeveloperMode)
                                            {
                                                _storedClientORserverInstance["processStepNumber"] = (int)_storedClientORserverInstance["processStepNumber"] + 1;

                                                Console.WriteLine("STEP " + _storedClientORserverInstance["processStepNumber"] + " Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.cs -> Implement_DesignPattern_Builder_Chapter_12_2_Page_1_1_0 -> Action_5_Process_StorySetting - [SUCCESSFULLY found a route for " + _storedServerRoutePath + " in storylineDetails DataSet]");
                                            }

                                            #endregion

                                            return Step_2_0_Custom_Output_ServerRequestToClient_1_0(route.ToString(), storedControllerName, storedControllerModelDataLocalParameter, storedControllerModelDataLocalObject, storedControllerModelDataRemote, _storedServerHTTPRequestInstance, null);
                                        }
                                    }
                                    else
                                    {
                                        #region EDGE CASE - USE exception message

                                        throw new Exception("[DISTURBANCE ISSUE] - Bug - Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.cs -> Implement_DesignPattern_Builder_Experience_12_3_1_0 -> Action_5_Process_StorySetting - BaseDI will not work without a routing details for a server side application . Please make sure that the information was added to the STORYLINEDETAILS object in the Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0 process!");

                                        #endregion
                                    }
                                }

                                #endregion
                            }

                            return _storedStorylineDetails;
                        };

                        //INPUT http request
                        _storedStorylineDetails = Step_1_0_Custom_Control_ClientRequestToServer_1_0(storedRouteListDetails);

                        #endregion

                        #endregion

                        #endregion
                    }
                }
            }
            catch
            {
                throw; //Let "Startup.cs -> Startup_Controller" handle the exception.
            }

            #endregion

            #region 3. OUTPUT

            #region RETURN process response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(_storedStorylineDetails).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion

        }

        //Page 1-7

        public override async Task<JObject> Action_7_Process_StoryResources()
        {
            #region 1. INPUTS

            #region DEFINE dynamic data

            dynamic storedDynamicData = null;

            #endregion

            #endregion

            #region 2. PROCESS

            try
            {
                if (_stored_ExperienceRequestHandlerActionName != null && _stored_ExperienceRequestHandlerActionName.ToString().ToUpper().Contains("COPYSTATICFILES_1_0"))
                {
                    #region EXECUTE copying static files

                    #region IDEAL CASE - USE baseDI extension

                    Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.Step_X_X_Custom_Store_LocalFilesToServer_1_0(_storedStorylineDetails);

                    #endregion

                    #endregion
                }

                if (_stored_ExperienceRequestHandlerActionName != null && _stored_ExperienceRequestHandlerActionName.ToString().ToUpper().Contains("MAPSTATICFILES_1_0"))
                {
                    #region EXECUTE mapping static files

                    #region IDEAL CASE - USE baseDI extension

                    storedDynamicData = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode_1_0(_storedStorylineDetails, "searchkey", "SetupDetails_Servers_Server_1_0_ServerWeb_2_2_2_1_storedClientORserverInstancermationSetupDetails", false).SingleOrDefault()?.Parent;

                    if (storedDynamicData != null)
                    {
                        var setupItemEnvironmentClient = storedDynamicData?.Parent.value[0]._2_2_2_1_1_storedClientORserverInstancermationSetupItem.value.SetupItemEnvironmentClient;
                        
                        storedDynamicData = _storedStorylineDetails;
                        storedDynamicData.outputs[1].baseDIObservations.Add(setupItemEnvironmentClient);

                        return await Task.FromResult<JObject>(storedDynamicData).ConfigureAwait(true);
                    }

                    #endregion

                    #endregion
                }
            }
            catch
            {
                throw; //Let "Startup.cs -> Startup_Controller" handle the exception.
            }

            #endregion

            #region 3. OUTPUT

            #region RETURN process response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(_storedStorylineDetails).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        #endregion

        #region NOT APART OF THE REQUEST PIPELINE AT THIS TIME

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

            return await Task.FromResult<JObject>(_storedStorylineDetails).ConfigureAwait(true);

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

            return await Task.FromResult<JObject>(_storedStorylineDetails).ConfigureAwait(true);

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

            return await Task.FromResult<JObject>(_storedStorylineDetails).ConfigureAwait(true);

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

            return await Task.FromResult<JObject>(_storedStorylineDetails).ConfigureAwait(true);

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

            return await Task.FromResult<JObject>(_storedStorylineDetails).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        //Page 1-8
        public override async Task<JObject> Action_8_Process_CRUD()
        {
            #region 1. INPUTS


            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            #region RETURN process response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(_storedStorylineDetails).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        //Page 1-9
        public override async Task<JObject> Action_9_Verify_Process()
        {
            #region 1. INPUTS


            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            #region RETURN process response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(_storedStorylineDetails).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        //Page 1-10
        public override async Task<JObject> Action_10_End_Process()
        {
            #region 1. INPUTS


            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            #region RETURN process response

            #region IDEAL CASE - USE baseDI dataset

            return await Task.FromResult<JObject>(_storedStorylineDetails).ConfigureAwait(true);

            #endregion

            #endregion

            #endregion
        }

        #endregion

        #endregion
    }

    #endregion
}
