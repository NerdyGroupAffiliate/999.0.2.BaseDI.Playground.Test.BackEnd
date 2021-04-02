#region Imports

#region BaseDI

using BaseDI.Professional.Character_1;
using BaseDI.Professional.Script.Programming_1;
using BaseDI.Professional.Script.Programming.Abstract_1;

using BaseDI.Professional.Script.Programming.Poco_1;
using BaseDI.Professional.Script.Programming.Repository_1;

using ChapterPage = BaseDI.Professional.Chapter.Page.Programming_1;

using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

#endregion

#endregion

namespace BaseDI.Professional.Director.Programming_1
{
    public class Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 : aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0
    {
        #region 1. Assign

        //A. Variable Declaration

        //MISC
        private ExtraData_12_2_1_0 _storedExtraData;

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(ExtraData_12_2_1_0 parameterExtraData = null)
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

            if (EntryPoint != null && EntryPoint.ClientOrServerInstance != null)
            {
                ClientOrServerInstance = EntryPoint.ClientOrServerInstance;
                MasterLeader = EntryPoint.MasterLeader;
                MasterController = EntryPoint.MasterController;
                MasterConverter = EntryPoint.MasterConverter;
                MasterDisturber = EntryPoint.MasterDisturber;
                MasterSensor = EntryPoint.MasterSensor;
                MasterStorer = EntryPoint.MasterStorer;
                MasterTransporter = EntryPoint.MasterTransporter;
                ExtraData = EntryPoint.ExtraData;
            }

            //REQUIRED: Implement one of the design patterns at https://www.dofactory.com/net/design-patterns
            Use_DesignPattern_Builder_Chapter_12_2_Page_1 designPattern = new Use_DesignPattern_Builder_Chapter_12_2_Page_1(ClientOrServerInstance, MasterStorer, MasterDisturber, MasterSensor, StorylineDetails, StorylineDetails_Parameters, (aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>>)Repository, ExtraData, EntryPoint);

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

    internal class Use_DesignPattern_Builder_Chapter_12_2_Page_1
    {
        #region 1. Assign

        //CLIENT/SERVER
        internal Dictionary<string, object> _storedClientORserverInstance;

        //DATASETS
        internal JObject _storedStorylineDetails;
        internal JObject _storedStorylineDetails_Parameters;

        internal aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> _storedRepository;

        //MISC
        internal ExtraData_12_2_1_0 _extraData;

        //PLUMBING
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedStorer;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedDisturber;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedSensor;

        internal aClass_Programming_ScriptRoutable_12_2_1_0 _stored_DirectorRequestHandler;

        #endregion

        #region 2. Ready

        internal Use_DesignPattern_Builder_Chapter_12_2_Page_1(Dictionary<string, object> client, aClass_Programming_ScriptAction_12_2_1_0<JObject> centralizedStorer, aClass_Programming_ScriptAction_12_2_1_0<JObject> centralizedDisturber, aClass_Programming_ScriptAction_12_2_1_0<JObject> centralizedSensor, JObject storylineDetails, JObject storylineDetails_Parameters, aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> repository, ExtraData_12_2_1_0 extraData, aClass_Programming_ScriptRoutable_12_2_1_0 entryPoint = null)
        {
            _storedCentralizedStorer = centralizedStorer;
            _storedCentralizedStorer = centralizedDisturber;
            _storedCentralizedSensor = centralizedSensor;

            _storedClientORserverInstance = client;

            _extraData = extraData;

            _storedStorylineDetails = storylineDetails;
            _storedStorylineDetails_Parameters = storylineDetails_Parameters;

            _storedRepository = repository;

            _stored_DirectorRequestHandler = entryPoint;
        }

        #endregion

        #region 3. Set

        //A. Default state of this part of the storyline

        #endregion

        #region 4. Action

        internal async Task<JObject> Action()
        {
            #region ARRANGE LOGIC ORDER

            var builder = new Implement_DesignPattern_Builder_Chapter_12_2_Page_1_1_0(_storedClientORserverInstance, _storedCentralizedStorer, _storedCentralizedStorer, _storedCentralizedSensor, _storedStorylineDetails, _storedStorylineDetails_Parameters, _storedRepository, _extraData, _stored_DirectorRequestHandler);

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

            return await Task.FromResult<JObject>(_storedStorylineDetails).ConfigureAwait(true);
        }

        #endregion
    }

    #endregion

    #region 6. Action Implementation

    //A. Commence Storyline (ACT WHAT HAS HAPPENED)

    internal class Implement_DesignPattern_Builder_Chapter_12_2_Page_1_1_0 : aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>>
    {
        #region 1. Assign

        //SETTINGS
        private IConfiguration _storedAppSettings;

        //CLIENT/SERVER
        private Dictionary<string, object> _storedClientORserverInstance;

        private aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> _storedRepository;

        //DATASET
        private JObject _storedStorylineDetails = null;
        private JObject _storedStorylineDetails_Parameters = null;

        //MISC
        private ExtraData_12_2_1_0 _extraData = null;

        //PLUMBING
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedStorer;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedDisturber;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _storedCentralizedSensor;

        private aClass_Programming_ScriptRoutable_12_2_1_0 _stored_DirectorRequestHandler;

        #endregion

        #region 2. Ready

        internal Implement_DesignPattern_Builder_Chapter_12_2_Page_1_1_0(Dictionary<string, object> parameterClientORserverInstance, aClass_Programming_ScriptAction_12_2_1_0<JObject> parameterCentralizedStorer, aClass_Programming_ScriptAction_12_2_1_0<JObject> parameterCentralizedDisturber, aClass_Programming_ScriptAction_12_2_1_0<JObject> parameterCentralizedSensor, JObject parameterStorylineDetails, JObject parameterStorylineDetails_Parameters, aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> parameterRepository, ExtraData_12_2_1_0 parameterExtraData, aClass_Programming_ScriptRoutable_12_2_1_0 parameter_DirectorRequestHandler = null)
        {
            #region MEMORIZE app settings

            _storedAppSettings = (IConfiguration)parameterClientORserverInstance["appSettings"];

            #endregion

            #region MEMORIZE clientOrServer instance

            _storedClientORserverInstance = parameterClientORserverInstance;

            #endregion

            #region MEMORIZE app settings

            #endregion

            #region MEMORIZE app settings

            #endregion

            #region MEMORIZE app settings

            #endregion


            _storedCentralizedStorer = parameterCentralizedStorer;
            _storedCentralizedDisturber = parameterCentralizedDisturber;
            _storedCentralizedSensor = parameterCentralizedSensor;

            _storedStorylineDetails = parameterStorylineDetails;
            _storedStorylineDetails_Parameters = parameterStorylineDetails_Parameters;

            _storedRepository = parameterRepository;

            _extraData = parameterExtraData;

            _stored_DirectorRequestHandler = parameter_DirectorRequestHandler;

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
            aClass_Programming_ScriptRoutable_12_2_1_0 entryPoint = _stored_DirectorRequestHandler;

            if (entryPoint == null)
            {
                #region 1. Assign      

                var page = new ChapterPage.Page_1_1_Begin_Process_12_2_1_0(_storedStorylineDetails, _storedRepository);

                page.ClientOrServerInstance = _storedClientORserverInstance;

                page.EntryPoint = _stored_DirectorRequestHandler;
                page.ExtraData = _extraData;

                page.MasterStorer = _storedCentralizedStorer;
                page.MasterDisturber = _storedCentralizedStorer;
                page.MasterSensor = _storedCentralizedSensor;

                page.StorylineDetails_Parameters = _storedStorylineDetails_Parameters;

                #endregion

                #region 2. Action              

                _storedStorylineDetails = await page.Action().ConfigureAwait(true);

                #endregion

                #region 3. Observe                      

                #endregion                
            }

            return await Task.FromResult<JObject>(_storedStorylineDetails).ConfigureAwait(true);
        }

        //Page 1-10
        public override async Task<JObject> Action_10_End_Process()
        {
            #region 1. Assign       

            var page = new ChapterPage.Page_1_10_End_Process_12_2_1_0(_storedStorylineDetails, _storedRepository);

            page.ClientOrServerInstance = _storedClientORserverInstance;

            page.EntryPoint = _stored_DirectorRequestHandler;
            page.ExtraData = _extraData;

            page.MasterStorer = _storedCentralizedStorer;
            page.MasterDisturber = _storedCentralizedStorer;
            page.MasterSensor = _storedCentralizedSensor;

            page.StorylineDetails_Parameters = this._storedStorylineDetails_Parameters;

            #endregion

            #region 2. Action              

            _storedStorylineDetails = await page.Action().ConfigureAwait(true);

            #endregion

            #region 3. Observe                      

            #endregion

            return _storedStorylineDetails;
        }

        #endregion

        #region NOT APART OF THE REQUEST PIPELINE AT THIS TIME

        //Page 1-2

        public override async Task<JObject> Action_2_Validate_Process()
        {

            #region 1. Assign          

            var page = new ChapterPage.Page_1_2_Validate_Process_12_2_1_0(_storedStorylineDetails, _storedRepository);

            page.ExtraData = _extraData;
            page.StorylineDetails_Parameters = _storedStorylineDetails_Parameters;

            #endregion

            #region 2. Action              

            _storedStorylineDetails = await page.Action().ConfigureAwait(true);

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storedStorylineDetails).ConfigureAwait(true);
        }

        //Page 1-3
        public override async Task<JObject> Action_3_Process_StoryAuthor()
        {
            #region 1. Assign          

            var page = new ChapterPage.Page_1_3_Process_StoryAuthor_12_2_1_0(_storedStorylineDetails, _storedRepository);

            page.ExtraData = _extraData;
            page.StorylineDetails_Parameters = _storedStorylineDetails_Parameters;

            #endregion

            #region 2. Action              

            _storedStorylineDetails = await page.Action().ConfigureAwait(true);

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storedStorylineDetails).ConfigureAwait(true);
        }

        //Page 1-4
        public override async Task<JObject> Action_4_Process_StoryCharacters()
        {
            #region 1. Assign          

            var page = new ChapterPage.Page_1_4_Process_StoryCharacters_12_2_1_0(_storedStorylineDetails, _storedRepository);

            page.ExtraData = _extraData;
            page.StorylineDetails_Parameters = _storedStorylineDetails_Parameters;

            #endregion

            #region 2. Action              

            _storedStorylineDetails = await page.Action().ConfigureAwait(true);

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storedStorylineDetails).ConfigureAwait(true);
        }

        //Page 1-5
        public override async Task<JObject> Action_5_Process_StorySetting()
        {
            #region 1. Assign          

            var page = new ChapterPage.Page_1_5_Process_StorySetting_12_2_1_0(_storedStorylineDetails, _storedRepository);

            page.ExtraData = _extraData;
            page.StorylineDetails_Parameters = _storedStorylineDetails_Parameters;

            #endregion

            #region 2. Action              

            _storedStorylineDetails = await page.Action().ConfigureAwait(true);

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storedStorylineDetails).ConfigureAwait(true);
        }

        //Page 1-6
        public override async Task<JObject> Action_6_Process_StoryExperiences()
        {
            #region 1. Assign          

            var page = new ChapterPage.Page_1_6_Process_StoryExperiences_12_2_1_0(_storedStorylineDetails, _storedRepository);

            page.ExtraData = _extraData;
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
            #region 1. Assign          

            var page = new ChapterPage.Page_1_7_Process_StoryResources_12_2_1_0(_storedStorylineDetails, _storedRepository);

            page.ExtraData = _extraData;
            page.StorylineDetails_Parameters = _storedStorylineDetails_Parameters;

            #endregion

            #region 2. Action              

            _storedStorylineDetails = await page.Action().ConfigureAwait(true);

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storedStorylineDetails).ConfigureAwait(true);
        }

        //Page 1-8
        public override async Task<JObject> Action_8_Process_CRUD()
        {
            #region 1. Assign          

            var page = new ChapterPage.Page_1_8_Process_CRUD_12_2_1_0(_storedStorylineDetails, _storedRepository);

            page.ExtraData = _extraData;
            page.StorylineDetails_Parameters = _storedStorylineDetails_Parameters;

            #endregion

            #region 2. Action              

            _storedStorylineDetails = await page.Action().ConfigureAwait(true);

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storedStorylineDetails).ConfigureAwait(true);
        }

        //Page 1-9
        public override async Task<JObject> Action_9_Verify_Process()
        {
            #region 1. Assign          

            var page = new ChapterPage.Page_1_2_Validate_Process_12_2_1_0(_storedStorylineDetails, _storedRepository);

            page.ExtraData = _extraData;
            page.StorylineDetails_Parameters = _storedStorylineDetails_Parameters;

            #endregion

            #region 2. Action              

            _storedStorylineDetails = await page.Action().ConfigureAwait(true);

            #endregion

            #region 3. Observe                      

            #endregion

            return _storedStorylineDetails;
        }

        #endregion

        #endregion
    }

    #endregion
}
