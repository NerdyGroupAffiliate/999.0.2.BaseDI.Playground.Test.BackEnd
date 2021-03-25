using BaseDI.Professional.Script.Programming.Abstract_1;
using BaseDI.Professional.Script.Programming.Repository_1;
using BaseDI.Professional.Script.Programming_1;

using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BaseDI.Professional.Chapter.Page.Web_Development_2
{
    public class Page_2_8_Process_CRUD_12_3_1_0 : aClass_Programming_ScriptPage_12_2_1_0
    {
        #region 1. Assign

        //A. Variable Declaration   

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public Page_2_8_Process_CRUD_12_3_1_0(JObject storylineDetails, aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> repository)
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
            //Line 1: The opening “div” tag will hard coded by the software program.

            //Line 1: The “class attribute class prefix” of “The_WebClient-Help_Build_Website_Foundation-“
            //will be hard coded by the software program.

            //Line 1: 
            //  1. This is the “Theme’s Brand Name” produced by the table column to the right.
            //  2. This is the “Theme’s Brand Product Name” produced by the table column to the right.
            //  3. This is the “Theme’s Version Number” produced by the table column to the right.
            //  4. This is the “Foundation’s Secondary Niche” produced by the table column to the right.
            //  5. This is the “Foundation’s Main Niche” produced by the table column to the right.
            //     4 and 5 are refers to an Ezines.com Niche
            //     These are referenced in the PerformanceArts database that holds storyline information.
            //  6. This is the “Foundation’s Version Number” produced by the table column to the right.

            //Example: The_WebClient_1 – Help_Build_Website_Foundation – Apple_iTunes–1-1-WebDesign_Music–1_0

            //Set a reference to our the details of our storyline.
            var storylineDetails = StorylineDetails;

            return await Task.FromResult<JObject>(storylineDetails).ConfigureAwait(true);
        }

        #endregion
    }
}
