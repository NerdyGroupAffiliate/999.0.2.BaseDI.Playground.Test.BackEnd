
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

namespace BaseDI.Playground.Test.Backend.Chapter.Page.Advertising_
{
    public class Page_2_4_Process_StoryCharacters_1_1_1_0 : aClass_Programming_ScriptPage_12_2_1_0
    {
        #region 1. Assign

        //A. Variable Declaration   

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public Page_2_4_Process_StoryCharacters_1_1_1_0(JObject storylineDetails, IContract_Programming_Repository_12_2_1_0 repository)
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
            //Lines 2 & 8: The opening tag will be produced by the table column to the right.

            //Lines 2 & 8: The opening tag will be an “ID” value called “PartTypeID” which is
            //references the 1 - 1 - 2_Building_Part_Type - 1 - 0 table.

            //Lines 2 & 8: 
            //  1. This is the hard coded “Prefix” of each foundation’s row.
            //  2. This is the hard coded “Suffix” of each foundation’s row.
            //  3. This is the RowCoordinate of each foundation’s row’s.
            //     For example: It could look like “1 - 1” which is a string.

            //     In this case...It will appear in the RowCoordinate column
            //     As “1 - 1” and the RowCoordinateNumeric column as 11.

            //     Numbers can be faster when searching through a database.

            //     For this use case...
            //     ForEach<row>...RowCoordinate=x+1...Where x = 0 

            //  4. This will store the div tag in the value column and 
            //     provide the div tag with a new PartTypeID

            //Set a reference to our the details of our storyline.
            var storylineDetails = StorylineDetails;

            //Get container detail.
            //var detail = storylineDetails.StoryScenery.Location.Stage.Details.Where(d => d.Key.ToUpper() == "PAGE_2_1_PROCESS_LAYOUTROWS").SingleOrDefault();

            //Parse HTML into Linq to HTML object.
            //var HTMLdocument = HDocument.Parse(detail.Value);

            return await Task.FromResult<JObject>(storylineDetails).ConfigureAwait(true);
        }

        #endregion
    }
}
