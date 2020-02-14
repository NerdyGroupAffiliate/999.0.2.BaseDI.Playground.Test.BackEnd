using BaseDI.Playground.Test.Backend.Director.Programming_1;
using BaseDI.Playground.Test.Backend.Script.Programming.Abstract_1;
using BaseDI.Playground.Test.Backend.Script.Programming.Repository_1;
using BaseDI.Playground.Test.Backend.Script.Programming_1;

using Newtonsoft.Json.Linq;
using System;
using System.Globalization;
using System.Threading.Tasks;

namespace BaseDI.Playground.Test.Backend.Chapter.Page.Programming_2
{
    public class Page_1_10_End_Process_12_2_1_0 : aClass_Programming_ScriptPage_12_2_1_0
    {
        #region 1. Assign

        //A. Variable Declaration   
 
        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public Page_1_10_End_Process_12_2_1_0(JObject storylineDetails, IContract_Programming_Repository_12_2_1_0 repository)
        {
            #region 1. Assign

            //SET WHAT is needed to make this page of the story happen.
            StorylineDetails = storylineDetails;
            Repository = repository;

            #endregion

            #region 2. Action

            SetupDefaults();
           
            #endregion

            #region 3. Observe

            #endregion
        }

        #endregion

        #region 3. Set

        //A. Default state
        private void SetupDefaults()
        {
            
        }

        #endregion

        #region 4. Action

        //A. Page in motion (DO SOMETHING)
        public override async Task<JObject> Action()
        {
            return await Task.FromResult(StorylineDetails).ConfigureAwait(true);
        }

        #endregion
    }
}
