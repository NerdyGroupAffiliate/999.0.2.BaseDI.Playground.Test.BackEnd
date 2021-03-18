
using System;
using BaseDI.Script.Programming.Abstract_1;
using BaseDI.Script.Programming.Extensions_1;
using BaseDI.Script.Programming.Extensions_5;
using Newtonsoft.Json.Linq;
using NUnit.Framework;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BaseDI.Chapter.Page.Programming_5
{
    public class Page_5_7_Process_StoryResources_12_2_1_0 : aClass_Programming_ScriptPage_12_2_1_0
    {
        #region 1. Assign

        //A. Variable Declaration   

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public Page_5_7_Process_StoryResources_12_2_1_0(JObject storylineDetails, aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> repository)
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

        //A. Default state of story

        #endregion

        #region 4. Action

        //A. Page in motion (DO SOMETHING)
        public override async Task<JObject> Action()
        {
            #region VARIABLES: DESCRIBE the memories


            #endregion

            #region VARIABLES: DESCRIBE the memories


            #endregion

            #region **INPUT: PROCESS the memories*

            #endregion

            #region **OUTPUT: TELL the story*

            return await Task.FromResult<JObject>(StorylineDetails).ConfigureAwait(true);

            #endregion
        }

        #endregion
    }
}
