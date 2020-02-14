using BaseDI.Playground.Test.Backend.Character_1;
using BaseDI.Playground.Test.Backend.Script.Programming.Abstract_1;
using BaseDI.Playground.Test.Backend.Script.Programming.Extensions_1;
using BaseDI.Playground.Test.Backend.Script.Programming.Poco_1;
using BaseDI.Playground.Test.Backend.Script.Programming.Repository_1;
using BaseDI.Playground.Test.Backend.Script.Programming_1;
using BaseDI.Playground.Test.Backend.State.Social_Media_;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace BaseDI.Playground.Test.Backend.Experience.Movement.Social_Media_1
{
    public class Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0 : aClass_Programming_ScriptExperience_BuilderPattern_12_2_1_0
    {
        #region 1. Assign

        //A. Variable Declaration

        //Assign Characters involved in storyline
        private ProgrammingDotNet_Implementer_3_12_1_0 _dotNetDeveloper = null;

        private ExtraData_12_2_1_0 _extraData = null;

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0()
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
            Use_DesignPattern_Builder_Experience_2_3_1_0 designPattern = new Use_DesignPattern_Builder_Experience_2_3_1_0(Client, MasterLeader, StorylineDetails, StorylineDetails_Parameters, (IContract_Programming_Repository_12_2_1_0)Repository, ExtraData, EntryPoint);

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

    internal class Use_DesignPattern_Builder_Experience_2_3_1_0
    {
        #region 1. Assign

        internal object _centralizedMaster;
        internal Dictionary<string, object> _client;

        internal JObject _storylineDetails;
        internal JObject _storylineDetails_Parameters;

        internal IContract_Programming_Repository_12_2_1_0 _repository;

        internal ExtraData_12_2_1_0 _extraData;
        internal aClass_Programming_ScriptRoutable_12_2_1_0 _entryPoint;

        #endregion

        #region 2. Ready
        internal Use_DesignPattern_Builder_Experience_2_3_1_0(Dictionary<string, object> client, object centralizedMaster, JObject storylineDetails, JObject storylineDetails_Parameters, IContract_Programming_Repository_12_2_1_0 repository, ExtraData_12_2_1_0 extraData, aClass_Programming_ScriptRoutable_12_2_1_0 entryPoint = null)
        {
            _centralizedMaster = centralizedMaster;
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

            var builder = new Implement_DesignPattern_Builder_Experience_2_3_1_0(_client, _centralizedMaster, _storylineDetails, _storylineDetails_Parameters, _repository, _extraData, _entryPoint);

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

    internal class Implement_DesignPattern_Builder_Experience_2_3_1_0 : aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>>
    {
        #region 1. Assign

        //Coding information
        private string _entryPointName = "Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0";

        private IContract_Programming_Repository_12_2_1_0 _repository;

        internal object _centralizedMaster;
        internal Dictionary<string, object> _client;
         
        private JObject _storylineDetails = null;
        private JObject _storylineDetails_Parameters = null;

        private ExtraData_12_2_1_0 _extraData = null;

        private aClass_Programming_ScriptRoutable_12_2_1_0 _entryPoint;

        //Available Repositories
        private RemoteServiceVendor_Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0 _experienceRepository_2_3_1_0;

        //Response Observation template
        private string _dataObservationTemplate = "";

        //API Information
        private List<JToken> _parameterTokens = null;

        private string _securityAppId = "";
        private string _securityAppSecret = "";
        private string _securityToken = "";

        #endregion

        #region 2. Ready

        internal Implement_DesignPattern_Builder_Experience_2_3_1_0(object client, object centralizedMaster, JObject storylineDetails, JObject storylineDetails_Parameters, IContract_Programming_Repository_12_2_1_0 repository, ExtraData_12_2_1_0 extraData, aClass_Programming_ScriptRoutable_12_2_1_0 entryPoint = null)
        {
            _centralizedMaster = centralizedMaster;
            _client = (Dictionary<string, object>)client;

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

        }

        #endregion

        #region 4. Action

        #region EXECUTE LOGIC INSTUCTIONS

        //Page 1-1

        public override async Task<JObject> Action_1_Begin_Process()
        {
            #region 1. Assign 

            //ACCESS THE CLIENT
            _storylineDetails = _client.Step_X_X_Update_The_Client_1_0(_storylineDetails);

            #region CREATE OBSERVATION TEMPLATE

            StringBuilder dataObservationParameterItemTemplateBuilder = new StringBuilder();

            string presentationItemTemplate = "{}";
            string businessItemTemplate = "{ 'parameters': [{parameters}] }";
            string serviceItemTemplate = "{}";
            string securityItemTemplate = @"{ 'appId': '{securityAppId}','appSecret': '{securityAppSecret}','token': '{securityToken}'  }";
            string dataItemTemplate = "{}";
            string dataItem = @"{ 'key': '{key}','value': '{value}' }";

            _dataObservationTemplate = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Create_An_ObservationJsonNode_1_0(_entryPointName, "Action_1_Begin_Process", "PARSING out Facebook API data from JSON", presentationItemTemplate, businessItemTemplate, serviceItemTemplate, securityItemTemplate, dataItemTemplate);

            #endregion

            #endregion

            #region 2. Action     

            #region READ BUSINESS INFORMATION

            string businessParametersPath = "resources[0].baseDIProfiles[0].baseDI_Facebook_APIPage_MainProfile.value.baseDIInstructions.business[?(@.key == 'Parameters')].values[0].value";

            _parameterTokens = _storylineDetails.SelectTokens(businessParametersPath).Children().ToList();

            foreach (JToken parameter in _parameterTokens)
            {
                JProperty key = (JProperty)parameter["key"].Children().Single();

                string item = dataItem;

                item = dataItem.Replace("{key}", key.Name);
                item = item.Replace("{value}", key.Value.ToString());

                if (dataObservationParameterItemTemplateBuilder.Length == 0)
                {
                    dataObservationParameterItemTemplateBuilder.Append(item);
                }
                else
                {
                    dataObservationParameterItemTemplateBuilder.Append(",");
                    dataObservationParameterItemTemplateBuilder.Append(item);
                }
            }

            _dataObservationTemplate = _dataObservationTemplate.Replace("{parameters}", dataObservationParameterItemTemplateBuilder.ToString());

            #endregion

            #region READ SECURITY INFORMATION

            string securityAppIdPath = "resources[0].baseDIProfiles[0].baseDI_Facebook_APIPage_MainProfile.value.baseDIInstructions.security[0].values[0].value[0].key.appId";
            string securityAppSecretPath = "resources[0].baseDIProfiles[0].baseDI_Facebook_APIPage_MainProfile.value.baseDIInstructions.security[0].values[1].value[0].key.appSecret";
            string securityTokenPath = "resources[0].baseDIProfiles[0].baseDI_Facebook_APIPage_MainProfile.value.baseDIInstructions.security[0].values[2].value[0].key.token";

            _securityAppId = _storylineDetails.SelectToken(securityAppIdPath).Value<string>();
            _securityAppSecret = _storylineDetails.SelectToken(securityAppSecretPath).Value<string>();
            _securityToken = _storylineDetails.SelectToken(securityTokenPath).Value<string>();

            _dataObservationTemplate = _dataObservationTemplate.Replace("{securityAppId}", _securityAppId);
            _dataObservationTemplate = _dataObservationTemplate.Replace("{securityAppSecret}", _securityAppSecret);
            _dataObservationTemplate = _dataObservationTemplate.Replace("{securityToken}", _securityToken);

            #endregion

            #region UPDATE CLIENT JSON

            var mergeSettings = new JsonMergeSettings
            {
                MergeArrayHandling = MergeArrayHandling.Concat
            };

            JObject dataObservation = JObject.Parse(_dataObservationTemplate);

            (_storylineDetails.SelectToken("outputs[*].baseDIObservations") as JArray).Merge(dataObservation.SelectToken("baseDIObservations"), mergeSettings);

            #endregion

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        //Page 1-7
        public override async Task<JObject> Action_7_Process_StoryResources()
        {
            #region 1. Assign          

            #region DETERMINE THE REPOSITORY

            var repositoryType = _repository.GetType();

            switch (repositoryType)
            {
                case Type _ when repositoryType == typeof(RemoteServiceVendor_Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0):
                    _experienceRepository_2_3_1_0 = (RemoteServiceVendor_Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0)_repository;

                    break;
            }

            #endregion

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

            #region SEND TO FACEBOOK

            if (_experienceRepository_2_3_1_0 != null)
                _storylineDetails = await _experienceRepository_2_3_1_0.Action_8_Process_CRUD().ConfigureAwait(true);

            #endregion

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        #endregion

        #region NOT APART OF THE REQUEST PIPELINE AT THIS TIME

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

        //Page 1-5
        public override async Task<JObject> Action_5_Process_StorySetting()
        {
            #region 1. Assign          

            //var page = new ChapterPage.Page_1_5_Process_HTMLLayoutZones_1_1_0(_storylineDetails, _repository);

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

            //var page = new ChapterPage.Page_1_9_End_Process_1_1_0(_storylineDetails, _repository);

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
