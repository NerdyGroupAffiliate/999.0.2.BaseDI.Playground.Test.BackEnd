using BaseDI.BackEnd.Script.Programming_1;
using BaseDI.BackEnd.Script.Programming.Abstract_1;

using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using BaseDI.BackEnd.Script.Programming.Repository_1;

namespace BaseDI.BackEnd.Chapter.Page.Risk_Management_1
{
    public class Page_1_8_Process_CRUD_11_1_1_0 : aClass_Programming_ScriptPage_12_2_1_0
    {
        #region 1. Assign

        //A. Variable Declaration   

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public Page_1_8_Process_CRUD_11_1_1_0(JObject storylineDetails, aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> repository)
        {
            #region 1. Assign

            //SET WHAT is needed to make this page of the story happen.
            StorylineDetails = storylineDetails;
            Repository = repository;

            #endregion

            #region 2. Action

            #endregion

            #region 3. Observe

            #endregion
        }

        #endregion

        #region 3. Set

        //A. Default state

        #endregion

        #region 4. Action

        //A. Page in motion (DO SOMETHING)
        public override async Task<JObject> Action()
        {  
            var storylineDetails = StorylineDetails;

            return await Task.FromResult<JObject>(storylineDetails).ConfigureAwait(true);
        }

        #endregion
    }
}
