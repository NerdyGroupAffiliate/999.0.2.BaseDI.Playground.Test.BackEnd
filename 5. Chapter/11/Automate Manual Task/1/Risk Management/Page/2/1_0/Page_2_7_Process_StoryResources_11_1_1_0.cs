﻿
using BaseDI.Playground.Test.Backend.Script.Programming.Abstract_1;
using BaseDI.Playground.Test.Backend.Script.Programming.Repository_1;
using BaseDI.Playground.Test.Backend.Script.Programming_1;

using Bitlush.LinqToHtml;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BaseDI.Playground.Test.Backend.Chapter.Page.Risk_Management_2
{
    public class Page_2_7_Process_StoryResources_11_1_1_0 : aClass_Programming_ScriptPage_12_2_1_0
    {
        #region 1. Assign

        //A. Variable Declaration   

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public Page_2_7_Process_StoryResources_11_1_1_0(JObject storylineDetails, IContract_Programming_Repository_12_2_1_0 repository)
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
            //Set a reference to our the details of our storyline.
            var storylineDetails = StorylineDetails;

            //Get container detail.
            //var detail = storylineDetails.StoryScenery.Location.Stage.Details.Where(d => d.Key.ToUpper() == "PAGE_6_1_PROCESS_STORYLINEENDING").SingleOrDefault();

            //Parse HTML into Linq to HTML object.
            //var HTMLdocument = HDocument.Parse(detail.Value);

            return await Task.FromResult<JObject>(storylineDetails).ConfigureAwait(true);
        }

        #endregion
    }
}
