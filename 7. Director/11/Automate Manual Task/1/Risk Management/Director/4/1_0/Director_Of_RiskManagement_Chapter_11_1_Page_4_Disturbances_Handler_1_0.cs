﻿using BaseDI.Professional.Script.Programming_1;
using BaseDI.Professional.Script.Programming.Abstract_1;

using ChapterPage = BaseDI.Professional.Chapter.Page.Risk_Management_4;

using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using BaseDI.Professional.Character_1;
using BaseDI.Professional.Script.Programming.Poco_1;
using BaseDI.Professional.Script.Programming.Repository_1;

namespace BaseDI.Professional.Director.Risk_Management_4
{
    public class Director_Of_RiskManagement_Chapter_11_1_Page_4_Disturbances_Handler_1_0 : aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0
    {
        #region 1. Assign

        //A. Variable Declaration

        //Assign Characters involved in storyline
        private ProgrammingDotNet_Implementer_3_12_1_0 _dotNetDeveloper = null;

        #endregion

        #region 2. Ready
        
        //A. Constructor Instantiation
        public Director_Of_RiskManagement_Chapter_11_1_Page_4_Disturbances_Handler_1_0()
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
            #region 1. Assign

            #region PICK DESIGN PATTERN

            //REQUIRED: Implement one of the design patterns at https://www.dofactory.com/net/design-patterns            
            Use_DesignPattern_Builder_Chapter_11_1_Page_1 designPattern = new Use_DesignPattern_Builder_Chapter_11_1_Page_1(ClientOrServerInstance, MasterStorer, MasterDisturber, MasterSensor, StorylineDetails, StorylineDetails_Parameters, (aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>>)Repository, ExtraData, DirectorOrExperienceRequestHandler);

            #endregion

            #endregion

            #region 2. Action

            StorylineDetails = await designPattern.Action().ConfigureAwait(true);

            #endregion

            #region 3. Observe

            #endregion

            return await Task.FromResult<JObject>(StorylineDetails).ConfigureAwait(true);
        }

        #endregion
    }

    #region 5. Action Script

    //A. Prepare for Action (SETUP WHAT WILL HAPPEN)

    internal class Use_DesignPattern_Builder_Chapter_11_1_Page_1
    {
        #region 1. Assign

        private Dictionary<string, object> _clientORserverInstance;
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

        internal Use_DesignPattern_Builder_Chapter_11_1_Page_1(Dictionary<string, object> clientORserverInstance, aClass_Programming_ScriptAction_12_2_1_0<JObject> centralizedStorer, aClass_Programming_ScriptAction_12_2_1_0<JObject> centralizedDisturber, aClass_Programming_ScriptAction_12_2_1_0<JObject> centralizedSensor, JObject storylineDetails, JObject storylineDetails_Parameters, aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> repository, ExtraData_12_2_1_0 extraData, aClass_Programming_ScriptRoutable_12_2_1_0 entryPoint = null)
        {
            _centralizedStorer = centralizedStorer;
            _centralizedDisturber = centralizedDisturber;
            _centralizedSensor = centralizedSensor;

            _clientORserverInstance = clientORserverInstance;

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

            var builder = new Implement_DesignPattern_Builder_Chapter_11_1_Page_1_1_0(_clientORserverInstance, _centralizedStorer, _centralizedDisturber, _centralizedSensor, _storylineDetails, _storylineDetails_Parameters, _repository, _extraData, _entryPoint);

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

    internal class Implement_DesignPattern_Builder_Chapter_11_1_Page_1_1_0 : aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>>
    {
        #region 1. Assign

        private aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> _repository;

        private Dictionary<string, object> _clientORserverInstance;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _centralizedStorer;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _centralizedDisturber;
        private aClass_Programming_ScriptAction_12_2_1_0<JObject> _centralizedSensor;

        private JObject _storylineDetails = null;
        private JObject _storylineDetails_Parameters = null;

        private ExtraData_12_2_1_0 _extraData = null;

        private aClass_Programming_ScriptRoutable_12_2_1_0 _entryPoint;

        #endregion

        #region 2. Ready

        internal Implement_DesignPattern_Builder_Chapter_11_1_Page_1_1_0(Dictionary<string, object> clientORserverInstance, aClass_Programming_ScriptAction_12_2_1_0<JObject> centralizedStorer, aClass_Programming_ScriptAction_12_2_1_0<JObject> centralizedDisturber, aClass_Programming_ScriptAction_12_2_1_0<JObject> centralizedSensor, JObject storylineDetails, JObject storylineDetails_Parameters, aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> repository, ExtraData_12_2_1_0 extraData, aClass_Programming_ScriptRoutable_12_2_1_0 entryPoint = null)
        {
            _centralizedStorer = centralizedStorer;
            _centralizedDisturber = centralizedDisturber;
            _centralizedSensor = centralizedSensor;

            _clientORserverInstance = clientORserverInstance;

            _storylineDetails = storylineDetails;
            _storylineDetails_Parameters = storylineDetails_Parameters;

            _repository = repository;

            _extraData = extraData;

            _entryPoint = entryPoint;

            HandleDefaults();
        }

        #endregion

        #region 3. Set

        public override void HandleDefaults()
        {

        }

        #endregion

        #region 4. Action

        #region EXECUTE LOGIC INSTUCTIONS

        //Page 1-10
        public override async Task<JObject> Action_10_End_Process()
        {
            #region 1. Assign          

            var page = new ChapterPage.Page_4_10_End_Process_11_1_1_0(_storylineDetails, _repository);
            
            page.ClientOrServerInstance = _clientORserverInstance;

            page.DirectorOrExperienceRequestHandler = _entryPoint;
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

        #endregion

        #region NOT APART OF THE REQUEST PIPELINE AT THIS TIME

        //Page 1-1

        public override async Task<JObject> Action_1_Begin_Process()
        {
            #region 1. Assign          

            var page = new ChapterPage.Page_4_1_Begin_Process_11_1_1_0(_storylineDetails, _repository);

            page.ExtraData = _extraData;

            #endregion

            #region 2. Action              

            await page.Action();

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        //Page 1-2

        public override async Task<JObject> Action_2_Validate_Process()
        {

            #region 1. Assign          

            var page = new ChapterPage.Page_4_2_Validate_Process_11_1_1_0(_storylineDetails, _repository);

            page.ExtraData = _extraData;

            #endregion

            #region 2. Action              

            await page.Action();

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        //Page 1-3
        public override async Task<JObject> Action_3_Process_StoryAuthor()
        {
            #region 1. Assign          

            var page = new ChapterPage.Page_4_3_Process_StoryAuthor_11_1_1_0(_storylineDetails, _repository);

            page.ExtraData = _extraData;

            #endregion

            #region 2. Action              

            await page.Action();

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        //Page 1-4
        public override async Task<JObject> Action_4_Process_StoryCharacters()
        {
            #region 1. Assign          

            var page = new ChapterPage.Page_4_4_Process_StoryCharacters_11_1_1_0(_storylineDetails, _repository);

            page.ExtraData = _extraData;

            #endregion

            #region 2. Action              

            await page.Action();

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        //Page 1-5
        public override async Task<JObject> Action_5_Process_StorySetting()
        {
            #region 1. Assign          

            var page = new ChapterPage.Page_4_5_Process_StorySetting_11_1_1_0(_storylineDetails, _repository);

            page.ExtraData = _extraData;

            #endregion

            #region 2. Action              

            await page.Action();

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        //Page 1-6
        public override async Task<JObject> Action_6_Process_StoryExperiences()
        {
            #region 1. Assign          

            var page = new ChapterPage.Page_4_6_Process_StoryExperiences_11_1_1_0(_storylineDetails, _repository);

            page.ExtraData = _extraData;

            #endregion

            #region 2. Action              

            await page.Action();

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        //Page 1-7
        public override async Task<JObject> Action_7_Process_StoryResources()
        {
            #region 1. Assign          

            var page = new ChapterPage.Page_4_7_Process_StoryResources_11_1_1_0(_storylineDetails, _repository);

            page.ExtraData = _extraData;

            #endregion

            #region 2. Action              

            await page.Action();

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        //Page 1-8
        public override async Task<JObject> Action_8_Process_CRUD()
        {
            #region 1. Assign          

            var page = new ChapterPage.Page_4_8_Process_CRUD_11_1_1_0(_storylineDetails, _repository);

            page.ExtraData = _extraData;

            #endregion

            #region 2. Action              

            await page.Action();

            #endregion

            #region 3. Observe                      

            #endregion

            return await Task.FromResult<JObject>(_storylineDetails).ConfigureAwait(true);
        }

        //Page 1-9
        public override async Task<JObject> Action_9_Verify_Process()
        {
            #region 1. Assign          

            var page = new ChapterPage.Page_4_9_Verify_Process_11_1_1_0(_storylineDetails, _repository);

            page.ExtraData = _extraData;

            #endregion

            #region 2. Action              

            await page.Action();

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
