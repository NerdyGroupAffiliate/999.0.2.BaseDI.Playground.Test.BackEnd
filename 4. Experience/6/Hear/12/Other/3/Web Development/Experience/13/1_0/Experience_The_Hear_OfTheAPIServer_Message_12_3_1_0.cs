using BaseDI.BackEnd.Director.Programming_1;
using BaseDI.BackEnd.Script.Programming.Abstract_1;
using BaseDI.BackEnd.Script.Programming.Poco_1;
using BaseDI.BackEnd.Script.Programming.Repository_1;
using BaseDI.BackEnd.Script.Web_Development.Extensions_13;
using BaseDI.BackEnd.Story.Programming_1;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BaseDI.BackEnd.Script.Programming.Extensions_1;

namespace BaseDI.BackEnd.Experience.Hear.Web_Development_13
{
    public class Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0 : aClass_Programming_ScriptExperience_BuilderPattern_12_2_1_0
    {
        #region 1. Assign

        //A. Variable Declaration

        //Assign Characters involved in storyline
        //private ProgrammingDotNet_Implementer_3_12_1_0 _dotNetDeveloper = null;

        private ExtraData_12_2_1_0 _extraData = null;

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0()
        {
            #region 1. Assign            


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
        public override async Task<JObject> Action()
        {
            #region 1. Assign

            #region PICK DESIGN PATTERN

            //REQUIRED: Implement one of the design patterns at https://www.dofactory.com/net/design-patterns            
            Use_DesignPattern_Builder_Experience_12_3_1_0 designPattern = new Use_DesignPattern_Builder_Experience_12_3_1_0(Client, MasterLeader, StorylineDetails, StorylineDetails_Parameters, (aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>>)Repository, ExtraData, EntryPoint);

            #endregion

            #endregion

            #region 2. Action

            #region START LOGIC EXECUTION

            StorylineDetails = await designPattern.Action().ConfigureAwait(true);

            #endregion

            #endregion

            #region 3. Observe

            #endregion

            return await Task.FromResult<JObject>(StorylineDetails).ConfigureAwait(true);
        }

        #endregion
    }

    #region 5. Action Script

    //A. Prepare for Action (SETUP WHAT WILL HAPPEN)

    internal class Use_DesignPattern_Builder_Experience_12_3_1_0
    {
        #region 1. Assign

        internal object _centralizedStorer;
        internal object _client;

        internal JObject _storylineDetails;
        internal JObject _storylineDetails_Parameters;

        internal aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> _repository;

        internal ExtraData_12_2_1_0 _extraData;
        internal aClass_Programming_ScriptRoutable_12_2_1_0 _entryPoint;

        #endregion

        #region 2. Ready
        internal Use_DesignPattern_Builder_Experience_12_3_1_0(object client, object centralizedStorer, JObject storylineDetails, JObject storylineDetails_Parameters, aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> repository, ExtraData_12_2_1_0 extraData, aClass_Programming_ScriptRoutable_12_2_1_0 entryPoint = null)
        {
            _centralizedStorer = centralizedStorer;
            _client = client;

            _extraData = extraData;

            _storylineDetails = storylineDetails;
            _storylineDetails_Parameters = storylineDetails_Parameters;

            _repository = repository;

            _entryPoint = entryPoint;
        }

        #endregion

        #region 3. Set

        //A. Default state of this part of the storyline

        #endregion

        #region 4. Action

        internal async Task<JObject> Action()
        {
            #region ARRANGE LOGIC ORDER

            var builder = new Implement_DesignPattern_Builder_Experience_12_3_1_0(_client, _centralizedStorer, _storylineDetails, _storylineDetails_Parameters, _repository, _extraData, _entryPoint);

            _storylineDetails = await builder.Action_1_Begin_Process().ConfigureAwait(true);

            _storylineDetails = await builder.Action_2_Validate_Process().ConfigureAwait(true);

            _storylineDetails = await builder.Action_3_Process_StoryAuthor().ConfigureAwait(true);
            _storylineDetails = await builder.Action_4_Process_StoryCharacters().ConfigureAwait(true);
            _storylineDetails = await builder.Action_5_Process_StorySetting().ConfigureAwait(true);
            _storylineDetails = await builder.Action_6_Process_StoryExperiences().ConfigureAwait(true);
            _storylineDetails = await builder.Action_7_Process_StoryResources().ConfigureAwait(true);

            _storylineDetails = await builder.Action_8_Process_CRUD().ConfigureAwait(true);

            _storylineDetails = await builder.Action_9_Verify_Process().ConfigureAwait(true);

            _storylineDetails = await builder.Action_10_End_Process().ConfigureAwait(true);

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        #endregion
    }

    #endregion

    #region 6. Action Implementation

    //A. Commence Storyline (ACT WHAT HAS HAPPENED)

    internal class Implement_DesignPattern_Builder_Experience_12_3_1_0 : aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>>
    {
        #region 1. Assign

        //Coding information
        private string _entryPointName = "Experience_The_Movement_ToFacebookPage_DataTransfer_12_2_1_0";

        private aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> _repository;

        internal object _centralizedStorer;
        internal Dictionary<string, object> _serverInfo;

        private ExtraData_12_2_1_0 _extraData = null;

        private string _route = "";
        private string _actionName = "";
        private HttpRequest _request = null;
        private string _verb = "";

        private Dictionary<string, JToken> _server = null;
        private object _serverEntryPoint = null;

        private JObject _storylineDetails = null;
        private JObject _storylineDetails_Parameters = null;

        private aClass_Programming_ScriptRoutable_12_2_1_0 _entryPoint;

        //Available Repositories
        //private RemoteServiceVendor_Experience_The_Movement_ToFacebookPage_DataTransfer_12_2_1_0 _experienceRepository_12_2_1_0;

        //Response Observation template
        private string _dataObservationTemplate = "";

        //API Information
        private List<JToken> _parameterTokens = null;

        private string _securityAppId = "";
        private string _securityAppSecret = "";
        private string _securityToken = "";

        private Func<JObject, ExtraData_12_2_1_0, JObject> Step_1_0_Custom_Control_ClientRequestToServer_1_0 = null;
        private Func<JObject, ExtraData_12_2_1_0, JObject> Step_2_0_Custom_Output_ServerRequestToClient_1_0 = null;

        private Func<JObject, ExtraData_12_2_1_0, JObject> Update_Server = null;

        #endregion

        #region 2. Ready

        internal Implement_DesignPattern_Builder_Experience_12_3_1_0(object client, object centralizedStorer, JObject storylineDetails, JObject storylineDetails_Parameters, aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> repository, ExtraData_12_2_1_0 extraData, aClass_Programming_ScriptRoutable_12_2_1_0 entryPoint = null)
        {
            _centralizedStorer = centralizedStorer;
            _serverInfo = (Dictionary<string, object>)client;

            _storylineDetails = storylineDetails;
            _storylineDetails_Parameters = storylineDetails_Parameters;

            _repository = repository;

            _extraData = extraData;

            _entryPoint = entryPoint;

            HandleChapterDefaults();
        }

        #endregion

        #region 3. Set

        private void HandleChapterDefaults()
        {
            _actionName = _serverInfo.ContainsKey("actionName") ? (string)_serverInfo["actionName"] : null;

            _request = _serverInfo.ContainsKey("Request") ? (HttpRequest)_serverInfo["Request"] : null;

            if (_request != null)
            {
                _route = _request.Path;
                _verb = _request.Method;
            }

            _serverEntryPoint = _serverInfo.ContainsKey("Server") ? _serverInfo["Server"] : null;
        }

        #endregion

        #region 4. Action

        #region EXECUTE LOGIC INSTUCTIONS

        //Page 1-5
        public override async Task<JObject> Action_5_Process_StorySetting()
        {
            try
            {
                if (_actionName != null && _actionName.ToString().ToUpper().Contains("PROCESSREQUEST_1_0"))
                {
                    if (_request != null && _request is HttpRequest)
                    {
                        #region 1. Assign

                        #region MEMORIZE SERVER OPTIONS

                        _server = Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.Step_X_X_Custom_Store_ServerDefaultSettingsToMemory_1_0(_storylineDetails);

                        #endregion

                        #endregion

                        #region 2. Action

                        #region OUTPUT THE RESPONSE

                        Func<object, string, object, string, object, HttpRequest, HttpResponse, JObject> Step_2_0_Custom_Output_ServerRequestToClient_1_0;

                        Step_2_0_Custom_Output_ServerRequestToClient_1_0 = (object controllerRoute, string controllerName, object controllerModelDataLocalObject, string controllerModelDataLocalParameter, object controllerModelDataRemote, HttpRequest req, HttpResponse res) =>
                        {
                            #region 1. Assign

                            JObject armTemplateJSONOutput = null;

                            JToken outputs = null;

                            #endregion

                            #region 2. Action

                            try
                            {
                                #region EXECUTE OUR LOGIC

                                #region PROCESS LOGIC UPDATES

                                Update_Server = (JObject storylineDetails, ExtraData_12_2_1_0 extraData) =>
                                {
                                    _extraData = extraData;
                                    _storylineDetails = storylineDetails;

                                    return _storylineDetails;
                                };

                                #endregion

                                armTemplateJSONOutput = new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0())
                                    .SetupStoryline(_serverInfo, null, null, _extraData, "", controllerName, controllerModelDataLocalParameter)
                                    .Action().Result;

                                return armTemplateJSONOutput;

                                //if (armTemplateJSONOutput != null)
                                //{
                                //    outputs = armTemplateJSONOutput["outputs"];
                                //}

                                #endregion
                            }
                            catch (Exception storyMistake)
                            {
                                #region PRINT OUT MISTAKES

                                Console.Write(storyMistake.ToString());

                                #endregion
                            }

                            #endregion

                            #region 3. Observe

                            return armTemplateJSONOutput;

                            #endregion
                        };

                        #endregion

                        #region INPUT THE REQUEST

                        Func<JToken, JObject> Step_1_0_Custom_Control_ClientRequestToServer_1_0 = null;

                        Step_1_0_Custom_Control_ClientRequestToServer_1_0 = (JToken serverEnvironmentServerRoutes) =>
                        {
                            if (serverEnvironmentServerRoutes != null)
                            {
                                foreach (var item in serverEnvironmentServerRoutes)
                                {
                                    var controllerRoutes = item.SelectToken("SetupItemTransportItemRoute.ControllerRoutes").Children().ToList(); //item.SetupItemTransportItemRoute.ControllerRoutes;
                                    var controllerName = item.SelectToken("SetupItemTransportItemRoute.ControllerName").ToString();
                                    var controllerModelDataLocalObject = (JObject)item.SelectToken("SetupItemTransportItemRoute.ModelDataLocalObject");
                                    var controllerModelDataLocalParameter = item.SelectToken("SetupItemTransportItemRoute.ModelDataLocalParameter").ToString();
                                    var controllerModelDataRemote = (JObject)item.SelectToken("SetupItemTransportItemRoute.ModelDataRemote");

                                    if (controllerRoutes != null && controllerRoutes.Count() > 0)
                                    {
                                        var route = controllerRoutes.Where(r => r.ToString().ToUpper() == _route.ToUpper()).SingleOrDefault();

                                        if (route != null)
                                        {
                                            return Step_2_0_Custom_Output_ServerRequestToClient_1_0(route.ToString(), controllerName, controllerModelDataLocalObject, controllerModelDataLocalParameter, controllerModelDataRemote, _request, null);
                                        }
                                    }
                                }
                            }

                            return _storylineDetails;
                        };

                        //READ ROUTES
                        _storylineDetails = Step_1_0_Custom_Control_ClientRequestToServer_1_0(_server[_verb.ToUpper()]);

                        #endregion

                        #endregion

                        #region 3. Observe

                        #endregion
                    }
                }
            }
            catch (Exception ex)
            {
                Console.Write(ex.ToString());
            }

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);

        }

        //Page 1-7

        public override async Task<JObject> Action_7_Process_StoryResources()
        {
            try
            {
                if (_actionName != null && _actionName.ToString().ToUpper().Contains("COPYSTATICFILES_1_0"))
                {
                    #region DESCRIBE THE MEMORIES

                    #endregion

                    #region RECALL THE MEMORIES

                    #endregion

                    #region EXECUTE THE VISION

                    Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.Step_X_X_Custom_Store_LocalFilesToServer_1_0(_storylineDetails);

                    #endregion

                    #region REPORT THE FEEDBACK

                    #endregion
                }

                if (_actionName != null && _actionName.ToString().ToUpper().Contains("MAPSTATICFILES_1_0"))
                {
                    #region DESCRIBE THE MEMORIES

                    dynamic staticSettingDetails = Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.Step_X_X_Custom_Store_ServerDefaultSettingsToMemory_1_1(_storylineDetails);
                    var jContainer = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode_1_0(_storylineDetails, "searchkey", "SetupDetails_Servers_Server_2_0_ServerWeb_2_2_2_1_serverInformationSetupDetails", false).SingleOrDefault()?.Parent;

                    #endregion

                    #region RECALL THE MEMORIES

                    #endregion

                    #region EXECUTE THE VISION

                    if (jContainer != null)
                    {
                        dynamic obJContainer = jContainer?.Parent;

                        var setupItemEnvironmentClient = obJContainer.value[0]._2_2_2_1_1_serverInformationSetupItem.value
                            .SetupItemEnvironmentClient;
                        dynamic storylineDetails = _storylineDetails;

                        storylineDetails.outputs[1].baseDIObservations.Add(setupItemEnvironmentClient);

                        return storylineDetails;
                    }

                    #endregion

                    #region REPORT THE FEEDBACK

                    #endregion
                }
              
            }
            catch (Exception ex)
            {
                Console.Write(ex.ToString());
            }

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        #endregion

        #region NOT APART OF THE REQUEST PIPELINE AT THIS TIME

        //Page 1-1
        public override async Task<JObject> Action_1_Begin_Process()
        {
            #region 1. Assign          

            #endregion

            #region 2. Action              

            //_storylineDetails = await page.Action().ConfigureAwait(true);

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        //Page 1-2

        public override async Task<JObject> Action_2_Validate_Process()
        {
            #region 1. Assign          

            //var page = new ChapterPage.Page_1_7_Process_CRUD_1_1_0(_storylineDetails, _repository);

            #endregion

            #region 2. Action              

            //_storylineDetails = await page.Action().ConfigureAwait(true);

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        //Page 1-3
        public override async Task<JObject> Action_3_Process_StoryAuthor()
        {
            #region 1. Assign          

            //var page = new ChapterPage.Page_1_3_Process_HTMLLayoutContainer_1_1_0(_storylineDetails, _repository);

            #endregion

            #region 2. Action              

            //_storylineDetails = await page.Action().ConfigureAwait(true);

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        //Page 1-4
        public override async Task<JObject> Action_4_Process_StoryCharacters()
        {
            #region 1. Assign          

            //var page = new ChapterPage.Page_1_4_Process_HTMLLayoutRows_1_1_0(_storylineDetails, _repository);

            #endregion

            #region 2. Action              

            //_storylineDetails = await page.Action().ConfigureAwait(true);

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        //Page 1-6
        public override async Task<JObject> Action_6_Process_StoryExperiences()
        {
            #region 1. Assign          

            //var page = new ChapterPage.Page_1_6_Process_HTMLLayoutZoneColumns_1_1_0(_storylineDetails, _repository);

            #endregion

            #region 2. Action              

            //_storylineDetails = await page.Action().ConfigureAwait(true);

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        //Page 1-8
        public override async Task<JObject> Action_8_Process_CRUD()
        {
            #region 1. Assign          

            #endregion

            #region 2. Action              

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        //Page 1-9
        public override async Task<JObject> Action_9_Verify_Process()
        {
            #region 1. Assign          

            //var page = new ChapterPage.Page_1_8_Verify_Process_1_1_0(_storylineDetails, _repository);

            #endregion

            #region 2. Action              

            //_storylineDetails = await page.Action().ConfigureAwait(true);

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        //Page 1-10
        public override async Task<JObject> Action_10_End_Process()
        {
            #region 1. Assign          

            #endregion

            #region 2. Action              

            //_storylineDetails = await page.Action().ConfigureAwait(true);

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        #endregion

        #endregion
    }

    #endregion
}
