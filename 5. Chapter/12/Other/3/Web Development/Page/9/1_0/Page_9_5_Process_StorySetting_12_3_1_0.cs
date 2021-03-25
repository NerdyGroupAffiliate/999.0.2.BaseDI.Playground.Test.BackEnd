using System;
using System.Linq;
using System.Text.RegularExpressions;
using BaseDI.Professional.Script.Programming.Abstract_1;
using BaseDI.Professional.Script.Programming.Extensions_1;
using Newtonsoft.Json.Linq;
using System.Threading.Tasks;
using BaseDI.Professional.Script.Web_Development.Extensions_0;

namespace BaseDI.Professional.Chapter.Page.Web_Development_9
{
    public class Page_9_5_Process_StorySetting_12_3_1_0 : aClass_Programming_ScriptPage_12_2_1_0
    {
        #region 1. Assign

        //A. Variable Declaration   

        #endregion

        #region 2. Ready

        //A. Constructor Instantiation
        public Page_9_5_Process_StorySetting_12_3_1_0(JObject storylineDetails, aClass_Programming_ScriptAction_12_2_1_0<Task<JObject>> repository)
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
            dynamic storylineDetails = StorylineDetails;

            //Get container detail.
            //var detail = storylineDetails.StoryScenery.Location.Stage.Details.Where(d => d.Key.ToUpper() == "PAGE_3_1_PROCESS_LAYOUTZONES").SingleOrDefault();

            //Parse HTML into Linq to HTML object.
            //var HTMLdocument = HDocument.Parse(detail.Value);
            //#region VARIABLES
            string entryPointName = "Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0";

            string observationItem = "";

            string observationPresentationTemplateItem = @"{ 'htmlResult': '{htmlResult}' }";
            string observationBusinessTemplateItem = "{}";
            string observationServiceTemplateItem = "{}";
            string observationSecurityTemplateItem = "{}";
            string observationDataTemplateItem = "{}";

            string observationDataTemplateBuilder = "";


            dynamic htmlContainerJSON = "";
            dynamic htmlRowsJSON = "";
            dynamic htmlColumnsJSON = "";
            dynamic htmlContentJSON = "";
            dynamic htmlStylesJSON = "";

            string htmlResultInlineStylesString = "";
            string htmlResultString = "";

            //#endregion

            //#region VARIABLES

            observationItem = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Create_An_ObservationJsonNode_1_0(entryPointName, "Page_1_5_Process_StorySetting_12_3_1_0", "GENERATING html page", observationPresentationTemplateItem, observationBusinessTemplateItem, observationServiceTemplateItem, observationSecurityTemplateItem, observationDataTemplateItem);
            
            htmlContainerJSON = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode_1_0(this.StorylineDetails, "searchkey", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLContainer", false).SingleOrDefault().Parent.Parent;

            htmlRowsJSON = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode_1_0(this.StorylineDetails, "searchkey", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLRows", false).SingleOrDefault().Parent.Parent;
            htmlColumnsJSON = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode_1_0(this.StorylineDetails, "searchkey", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLColumns", false).SingleOrDefault().Parent.Parent;
            htmlContentJSON = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode_1_0(this.StorylineDetails, "searchkey", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLContent", false).SingleOrDefault().Parent.Parent;
            //htmlStylesJSON = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode_1_0(this.StorylineDetails, "searchkey", "HTMLContentStylingDetails_SetImplementer_ProductCreation_WebDevelopment_CSS", false).SingleOrDefault().Parent.Parent;
            var styles = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode_2_0(this.StorylineDetails, "searchkey", "HTMLContentStylingDetails_SetImplementer_ProductCreation_WebDevelopment_CSS", false);

            htmlStylesJSON = styles.Count > 0 ? styles[1].Parent.Parent : styles[0].Parent.Parent;

            //#region INPUTS

            htmlResultString = Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_1_0_Custom_Convert_HTMLContainerJSONtoHTML_1_0(htmlContainerJSON);
            htmlResultString = Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_2_0_Custom_Convert_HTMLRowsJSONtoHTML_1_0(htmlRowsJSON, htmlResultString);
            htmlResultString = Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_3_0_Custom_Convert_HTMLColumnsJSONtoHTML_1_0(htmlColumnsJSON, htmlResultString);
            htmlResultString = Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_4_0_Custom_Convert_HTMLContentJSONtoHTML_1_0(htmlContentJSON, htmlResultString);

            htmlResultInlineStylesString = Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_5_0_Custom_Convert_CSSJSONToInlineStyles_1_0(htmlStylesJSON);

            htmlResultString = Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Custom_Store_HTMLStructureToString_1_0("", "", "", htmlResultInlineStylesString, htmlResultString);

            observationItem = observationItem.Replace("'","\"");
            
            observationItem = observationItem.Replace("{htmlResult}", Regex.Unescape(htmlResultString));

            dynamic observation = JObject.Parse(observationItem);

           // Console.WriteLine(observation.baseDIObservations[0].observation);

            storylineDetails.outputs[1].baseDIObservations.Add(observation.baseDIObservations[0].observation);
            this.StorylineDetails = storylineDetails;


            return await Task.FromResult<JObject>(storylineDetails).ConfigureAwait(true);
        }

        #endregion
    }
}
