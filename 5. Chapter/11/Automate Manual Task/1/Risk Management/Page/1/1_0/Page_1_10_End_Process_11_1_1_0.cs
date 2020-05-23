using BaseDI.BackEnd.Script.Programming.Abstract_1;
using BaseDI.BackEnd.Script.Programming.Extensions_1;
using BaseDI.BackEnd.Script.Programming.Poco_1;
using BaseDI.BackEnd.Script.Programming.Repository_1;
using BaseDI.BackEnd.Script.Programming_1;

using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BaseDI.BackEnd.Chapter.Page.Risk_Management_1
{
    public class Page_1_10_End_Process_11_1_1_0 : aClass_Programming_ScriptPage_12_2_1_0
    {
        #region 1. Assign

        //A. Variable Declaration   

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public Page_1_10_End_Process_11_1_1_0(JObject storylineDetails, aClass_Programming_ScriptAction_12_2_1_0<JObject> repository)
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
            //Instruction 1: Set error message template

            //Instruction 2: Append error message to storyline details.

            ExtraData_12_2_1_0 extraData = ExtraData;

            //Instruction 1
            string jsonTemplate = "";

            string message = "MISSING repository setting";
            
            //Instruction 2
            var storylineDetails = StorylineDetails;

            //if (extraData != null &&
            //    extraData.MasterLeader != null &&
            //    extraData.Mistake != null &&
            //    extraData.Mistake.Message != null)
            //{
            //    jsonTemplate = "{'mistake':'" + message + "'}";

            //    try
            //    {
            //        var token = storylineDetails.Step_X_X_Read_And_FindJSONNode("baseDiMistakes")[0] as JArray;

            //        token.Add(JObject.Parse(jsonTemplate));
 
            //        storylineDetails.Merge(token, new JsonMergeSettings
            //        {
            //            // union array values together to avoid duplicates
            //            MergeArrayHandling = MergeArrayHandling.Concat
            //        });
            //    }
            //    catch
            //    {
            //        throw;
            //    }

            //}

            var a = storylineDetails.ToString();

            return await Task.FromResult<JObject>(storylineDetails).ConfigureAwait(true);
        }

        #endregion
    }
}
