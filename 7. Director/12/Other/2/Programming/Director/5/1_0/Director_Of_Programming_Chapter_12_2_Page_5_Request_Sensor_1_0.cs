#region Imports

#region BaseDI

using BaseDI.Professional.Character_1;
using BaseDI.Professional.Script.Programming_1;
using BaseDI.Professional.Script.Programming.Abstract_1;

using BaseDI.Professional.Script.Programming.Poco_1;
using BaseDI.Professional.Script.Programming.Repository_1;

using ChapterPage = BaseDI.Professional.Chapter.Page.Programming_5;

#endregion

#region .Net Core

using Microsoft.Extensions.Configuration;

using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

#endregion 

#region 3rd Party Core

using Newtonsoft.Json;
using Newtonsoft.Json.Linq;


#endregion

#endregion

namespace BaseDI.Professional.Director.Programming_5
{
    public class Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0 : aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0
    {
        #region 1. Assign

        //A. Variable Declaration

        //MISC
        private ExtraData_12_2_1_0 _storedExtraData;

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0(ExtraData_12_2_1_0 parameterExtraData = null)
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
            Use_DesignPattern_Builder_Chapter_12_2_Page_2 designPattern = new Use_DesignPattern_Builder_Chapter_12_2_Page_2(ClientOrServerInstance, MasterStorer, MasterDisturber, MasterSensor, StorylineDetails, StorylineDetails_Parameters, (aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>>)Repository, ExtraData, DirectorOrExperienceRequestHandler);

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

    internal class Use_DesignPattern_Builder_Chapter_12_2_Page_2
    {
        #region 1. Assign

        //SETTINGS
        private IConfiguration _storedAppSettings;

        //CLIENT/SERVER
        internal Dictionary<string, object> _storedClientOrServerInstance;

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

        internal aClass_Programming_ScriptRoutable_12_2_1_0 _stored_DirectorRequestHandler;

        #endregion

        #region 2. Ready

        internal Use_DesignPattern_Builder_Chapter_12_2_Page_2(Dictionary<string, object> parameterClientORserverInstance, aClass_Programming_ScriptAction_12_2_1_0<JObject> parameterCentralizedStorer, aClass_Programming_ScriptAction_12_2_1_0<JObject> parameterCentralizedDisturber, aClass_Programming_ScriptAction_12_2_1_0<JObject> parameterCentralizedSensor, JObject parameterStorylineDetails, JObject parameterStorylineDetails_Parameters, aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> parameterRepository, ExtraData_12_2_1_0 parameterExtraData, aClass_Programming_ScriptRoutable_12_2_1_0 parameter_DirectorRequestHandler = null)
        {
            #region 1. INPUTS

            #region MEMORIZE app settings

            _storedAppSettings = parameterClientORserverInstance["appSettings"] as IConfiguration;

            #endregion

            #region MEMORIZE clientOrServer instance

            _storedClientOrServerInstance = parameterClientORserverInstance;

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

            _stored_DirectorRequestHandler = parameter_DirectorRequestHandler;

            #endregion

            #region MEMORIZE extra data

            _storedExtraData = parameterExtraData;

            #endregion

            #region MEMORIZE request details

            _stored_DirectorRequestHandler = parameter_DirectorRequestHandler;

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

            var builder = new Implement_DesignPattern_Builder_Chapter_12_2_Page_2_1_0(_storedClientOrServerInstance, _stored_CentralizedStorer, _stored_CentralizedStorer, _stored_CentralizedSensor, _storedStorylineDetails, _storedStorylineDetails_Parameters, _stored_Repository, _storedExtraData, _stored_DirectorRequestHandler);

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

    internal class Implement_DesignPattern_Builder_Chapter_12_2_Page_2_1_0 : aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>>
    {
        #region 1. Assign

        //SETTINGS
        private IConfiguration _storedAppSettings;

        //CLIENT/SERVER
        private Dictionary<string, object> _storedClientOrServerInstance;

        //DATASET
        private JObject _storedStorylineDetails = null;
        private JObject _storedStorylineDetails_Parameters = null;

        //MISC
        private ExtraData_12_2_1_0 _storedExtraData = null;

        //PLUMBING
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _stored_CentralizedStorer;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _stored_CentralizedDisturber;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _stored_CentralizedSensor;

        private aClass_Programming_ScriptRoutable_12_2_1_0 _stored_DirectorRequestHandler;

        private aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> _stored_Repository;

        #endregion

        #region 2. Ready

        internal Implement_DesignPattern_Builder_Chapter_12_2_Page_2_1_0(Dictionary<string, object> parameterClientORserverInstance, aClass_Programming_ScriptAction_12_2_1_0<JObject> parameterCentralizedStorer, aClass_Programming_ScriptAction_12_2_1_0<JObject> parameterCentralizedDisturber, aClass_Programming_ScriptAction_12_2_1_0<JObject> parameterCentralizedSensor, JObject parameterStorylineDetails, JObject parameterStorylineDetails_Parameters, aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> parameterRepository, ExtraData_12_2_1_0 parameterExtraData, aClass_Programming_ScriptRoutable_12_2_1_0 parameter_DirectorRequestHandler = null)
        {
            #region 1. INPUTS

            #region MEMORIZE app settings

            _storedAppSettings = (IConfiguration)parameterClientORserverInstance["appSettings"];

            #endregion

            #region MEMORIZE clientOrServer instance

            _storedClientOrServerInstance = parameterClientORserverInstance;

            #endregion

            #region MEMORIZE centralized processes 

            _stored_CentralizedDisturber = parameterCentralizedDisturber;
            _stored_CentralizedSensor = parameterCentralizedSensor;
            _stored_CentralizedStorer = parameterCentralizedStorer;

            #endregion

            #region MEMORIZE data stragety

            _stored_Repository = parameterRepository;

            #endregion

            #region MEMORIZE director request handler

            _stored_DirectorRequestHandler = parameter_DirectorRequestHandler;

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

            HandleDefaults();

            #endregion

            #endregion

            #endregion

            #region 3. OUTPUT

            #endregion  
        }

        #endregion

        #region 3. Set

        public override void HandleDefaults()
        {
            #region 1. INPUTS


            #endregion

            #region 2. PROCESS

            #endregion

            #region 3. OUTPUT

            #endregion
        }

        #endregion

        #region 4. Action

        #region EXECUTE LOGIC INSTUCTIONS

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

        //Page 1-5
        public override async Task<JObject> Action_5_Process_StorySetting()
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
            #region 1. Assign          

            var page = new ChapterPage.Page_5_6_Process_StoryExperiences_12_2_1_0(_storedStorylineDetails, _stored_Repository);

            page.ClientOrServerInstance = _storedClientOrServerInstance;

            page.DirectorOrExperienceRequestHandler = _stored_DirectorRequestHandler;
            page.ExtraData = _storedExtraData;

            page.MasterStorer = _stored_CentralizedStorer;

            page.StorylineDetails_Parameters = _storedStorylineDetails_Parameters;

            #endregion

            #region 2. Action              

            _storedStorylineDetails = await page.Action().ConfigureAwait(true);

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storedStorylineDetails).ConfigureAwait(true);
        }

        //Page 1-7
        public override async Task<JObject> Action_7_Process_StoryResources()
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
