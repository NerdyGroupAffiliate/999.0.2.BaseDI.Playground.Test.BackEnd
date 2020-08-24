﻿using BaseDI.BackEnd.Character_1;
using BaseDI.BackEnd.Script.Programming_1;
using BaseDI.BackEnd.Script.Programming.Abstract_1;

using ChapterPage = BaseDI.BackEnd.Chapter.Page.Programming_1;

using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using BaseDI.BackEnd.Script.Programming.Poco_1;
using BaseDI.BackEnd.Script.Programming.Repository_1;

namespace BaseDI.BackEnd.Director.Programming_1
{
    public class Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 : aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0
    {
        #region 1. Assign

        //A. Variable Declaration

        //Assign Characters involved in storyline
        private ProgrammingDotNet_Implementer_3_12_1_0 _dotNetDeveloper = null;
        private ExtraData_12_2_1_0 _extraData;

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(ExtraData_12_2_1_0 extraData = null)
        {
            #region 1. Assign    
            
            _extraData = extraData;

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

            if (EntryPoint != null && EntryPoint.Client != null)
            {
                Client = EntryPoint.Client;
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
            Use_DesignPattern_Builder_Chapter_12_2_Page_1 designPattern = new Use_DesignPattern_Builder_Chapter_12_2_Page_1(Client, MasterStorer, MasterDisturber, MasterSensor, StorylineDetails, StorylineDetails_Parameters, (aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>>)Repository, ExtraData, EntryPoint);

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

    internal class Use_DesignPattern_Builder_Chapter_12_2_Page_1
    {
        #region 1. Assign

        internal Dictionary<string, object> _client;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _centralizedStorer;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _centralizedDisturber;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _centralizedSensor;

        internal JObject _storylineDetails;
        internal JObject _storylineDetails_Parameters;

        internal aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> _repository;

        internal ExtraData_12_2_1_0 _extraData;
        internal aClass_Programming_ScriptRoutable_12_2_1_0 _entryPoint;

        #endregion

        #region 2. Ready

        internal Use_DesignPattern_Builder_Chapter_12_2_Page_1(Dictionary<string, object> client, aClass_Programming_ScriptAction_12_2_1_0<JObject> centralizedStorer, aClass_Programming_ScriptAction_12_2_1_0<JObject> centralizedDisturber, aClass_Programming_ScriptAction_12_2_1_0<JObject> centralizedSensor, JObject storylineDetails, JObject storylineDetails_Parameters, aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> repository, ExtraData_12_2_1_0 extraData, aClass_Programming_ScriptRoutable_12_2_1_0 entryPoint = null)
        {
            _centralizedStorer = centralizedStorer;
            _centralizedDisturber = centralizedDisturber;
            _centralizedSensor = centralizedSensor;

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

            var builder = new Implement_DesignPattern_Builder_Chapter_12_2_Page_1_1_0(_client, _centralizedStorer, _centralizedDisturber, _centralizedSensor, _storylineDetails, _storylineDetails_Parameters, _repository, _extraData, _entryPoint);

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

    internal class Implement_DesignPattern_Builder_Chapter_12_2_Page_1_1_0 : aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>>
    {
        #region 1. Assign

        private aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> _repository;

        private Dictionary<string, object> _client;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _centralizedStorer;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _centralizedDisturber;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _centralizedSensor;

        private JObject _storylineDetails = null;
        private JObject _storylineDetails_Parameters = null;

        private ExtraData_12_2_1_0 _extraData = null;

        private aClass_Programming_ScriptRoutable_12_2_1_0 _entryPoint;

        #endregion

        #region 2. Ready

        internal Implement_DesignPattern_Builder_Chapter_12_2_Page_1_1_0(Dictionary<string, object> client, aClass_Programming_ScriptAction_12_2_1_0<JObject> centralizedStorer, aClass_Programming_ScriptAction_12_2_1_0<JObject> centralizedDisturber, aClass_Programming_ScriptAction_12_2_1_0<JObject> centralizedSensor, JObject storylineDetails, JObject storylineDetails_Parameters, aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> repository, ExtraData_12_2_1_0 extraData, aClass_Programming_ScriptRoutable_12_2_1_0 entryPoint = null)
        {
            _client = client;

            _centralizedStorer = centralizedStorer;
            _centralizedDisturber = centralizedDisturber;
            _centralizedSensor = centralizedSensor;

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

            var page = new ChapterPage.Page_1_1_Begin_Process_12_2_1_0(_storylineDetails, _repository);

            page.Client = _client;

            page.EntryPoint = _entryPoint;
            page.ExtraData = _extraData;

            page.MasterStorer = _centralizedStorer;
            page.MasterDisturber = _centralizedDisturber;
            page.MasterSensor = _centralizedSensor;

            page.StorylineDetails_Parameters = _storylineDetails_Parameters;

            #endregion

            #region 2. Action              

            _storylineDetails = await page.Action().ConfigureAwait(true);

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        //Page 1-10
        public override async Task<JObject> Action_10_End_Process()
        {
            #region 1. Assign          

            var page = new ChapterPage.Page_1_10_End_Process_12_2_1_0(_storylineDetails, _repository);

            page.Client = _client;

            page.EntryPoint = _entryPoint;
            page.ExtraData = _extraData;

            page.MasterStorer = _centralizedStorer;
            page.MasterDisturber = _centralizedDisturber;
            page.MasterSensor = _centralizedSensor;

            page.StorylineDetails_Parameters = this._storylineDetails_Parameters;

            #endregion

            #region 2. Action              

            _storylineDetails = await page.Action().ConfigureAwait(true);

            #endregion

            #region 3. Observe                      

            #endregion

            return _storylineDetails;
        }

        #endregion

        #region NOT APART OF THE REQUEST PIPELINE AT THIS TIME

        //Page 1-2

        public override async Task<JObject> Action_2_Validate_Process()
        {

            #region 1. Assign          

            var page = new ChapterPage.Page_1_2_Validate_Process_12_2_1_0(_storylineDetails, _repository);

            page.ExtraData = _extraData;
            page.StorylineDetails_Parameters = _storylineDetails_Parameters;

            #endregion

            #region 2. Action              

            _storylineDetails = await page.Action().ConfigureAwait(true);

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        //Page 1-3
        public override async Task<JObject> Action_3_Process_StoryAuthor()
        {
            #region 1. Assign          

            var page = new ChapterPage.Page_1_3_Process_StoryAuthor_12_2_1_0(_storylineDetails, _repository);

            page.ExtraData = _extraData;
            page.StorylineDetails_Parameters = _storylineDetails_Parameters;

            #endregion

            #region 2. Action              

            _storylineDetails = await page.Action().ConfigureAwait(true);

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        //Page 1-4
        public override async Task<JObject> Action_4_Process_StoryCharacters()
        {
            #region 1. Assign          

            var page = new ChapterPage.Page_1_4_Process_StoryCharacters_12_2_1_0(_storylineDetails, _repository);

            page.ExtraData = _extraData;
            page.StorylineDetails_Parameters = _storylineDetails_Parameters;

            #endregion

            #region 2. Action              

            _storylineDetails = await page.Action().ConfigureAwait(true);

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        //Page 1-5
        public override async Task<JObject> Action_5_Process_StorySetting()
        {
            #region 1. Assign          

            var page = new ChapterPage.Page_1_5_Process_StorySetting_12_2_1_0(_storylineDetails, _repository);

            page.ExtraData = _extraData;
            page.StorylineDetails_Parameters = _storylineDetails_Parameters;

            #endregion

            #region 2. Action              

            _storylineDetails = await page.Action().ConfigureAwait(true);

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        //Page 1-6
        public override async Task<JObject> Action_6_Process_StoryExperiences()
        {
            #region 1. Assign          

            var page = new ChapterPage.Page_1_6_Process_StoryExperiences_12_2_1_0(_storylineDetails, _repository);

            page.ExtraData = _extraData;
            page.StorylineDetails_Parameters = _storylineDetails_Parameters;

            #endregion

            #region 2. Action              

            _storylineDetails = await page.Action().ConfigureAwait(true);

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        //Page 1-7
        public override async Task<JObject> Action_7_Process_StoryResources()
        {
            #region 1. Assign          

            var page = new ChapterPage.Page_1_7_Process_StoryResources_12_2_1_0(_storylineDetails, _repository);

            page.ExtraData = _extraData;
            page.StorylineDetails_Parameters = _storylineDetails_Parameters;

            #endregion

            #region 2. Action              

            _storylineDetails = await page.Action().ConfigureAwait(true);

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        //Page 1-8
        public override async Task<JObject> Action_8_Process_CRUD()
        {
            #region 1. Assign          

            var page = new ChapterPage.Page_1_8_Process_CRUD_12_2_1_0(_storylineDetails, _repository);

            page.ExtraData = _extraData;
            page.StorylineDetails_Parameters = _storylineDetails_Parameters;

            #endregion

            #region 2. Action              

            _storylineDetails = await page.Action().ConfigureAwait(true);

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        //Page 1-9
        public override async Task<JObject> Action_9_Verify_Process()
        {
            #region 1. Assign          

            var page = new ChapterPage.Page_1_2_Validate_Process_12_2_1_0(_storylineDetails, _repository);

            page.ExtraData = _extraData;
            page.StorylineDetails_Parameters = _storylineDetails_Parameters;

            #endregion

            #region 2. Action              

            _storylineDetails = await page.Action().ConfigureAwait(true);

            #endregion

            #region 3. Observe                      

            #endregion

            return _storylineDetails;
        }

        #endregion

        #endregion
    }

    #endregion
}
