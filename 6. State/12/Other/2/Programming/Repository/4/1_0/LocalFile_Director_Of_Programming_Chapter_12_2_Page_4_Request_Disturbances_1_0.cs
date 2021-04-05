using BaseDI.Professional.Script.Programming.Abstract_1;
using BaseDI.Professional.Script.Programming.Repository_1;
using BaseDI.Professional.Script.Programming_1;

using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BaseDI.Professional.State.Programming_4
{
    public class LocalFile_Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0 : aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>>
    {
        #region 1. Assign

        //A. Variable Declaration
        private string _baseDIPlaceHolderValue = "{BASEDICUSTOMOPTION}";
        private JObject _storylineDetails = null;

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public LocalFile_Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0(JObject storylineDetails)
        {
            #region 1. Assign            

            _storylineDetails = storylineDetails;

            #endregion

            #region 2. Action

            #endregion

            #region 3. Observe

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
        public override Task<JObject> Action_10_End_Process()
        {
            throw new NotImplementedException();
        }

        public override Task<JObject> Action_1_Begin_Process()
        {
            throw new NotImplementedException();
        }

        public override Task<JObject> Action_2_Validate_Process()
        {
            throw new NotImplementedException();
        }

        public override Task<JObject> Action_3_Process_StoryAuthor()
        {
            throw new NotImplementedException();
        }

        public override Task<JObject> Action_4_Process_StoryCharacters()
        {
            throw new NotImplementedException();
        }

        public override Task<JObject> Action_5_Process_StorySetting()
        {
            throw new NotImplementedException();
        }

        public override Task<JObject> Action_6_Process_StoryExperiences()
        {
            throw new NotImplementedException();
        }

        public override Task<JObject> Action_7_Process_StoryResources()
        {
            throw new NotImplementedException();
        }

        public override Task<JObject> Action_8_Process_CRUD()
        {
            throw new NotImplementedException();
        }

        public override Task<JObject> Action_9_Verify_Process()
        {
            throw new NotImplementedException();
        }

        #endregion
    }
}
