import * as aClass_Programming_ScriptPage_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptPage_12_2_1_0";

import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";
import * as Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/3/Web Development/Method/1/1_0/Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0";

export namespace BaseDI.Playground.Test.BackEnd.Chapter.Page.WebDevelopment_1 {
    export class Page_1_5_Process_StorySetting_12_3_1_0 extends aClass_Programming_ScriptPage_12_2_1_0.BaseDI.Playground.Test.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptPage_12_2_1_0 {
        //#region 1. Assign
        //#endregion

        //#region 2. Ready
        constructor(storylineDetails: object, repository: IContract_Programming_Repository_12_2_1_0) {
            super();

            //#region 1. Assign
            this.StorylineDetails = storylineDetails;
            this.Repository = repository;

            this.Action = this.Action.bind(this);
            //#endregion

            //#region 2. Action
            //#endregion

            //#region 3. Observe
            //#endregion
        }
        //#endregion

        //#region 3. Set
        //#endregion

        //#region 4. Action
        public async Action(): Promise<object>
        {
            //#region DESCRIBE THE MEMORIES
            const entryPointName: string = "Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0";

            let observationItem: String = "";

            const observationPresentationTemplateItem: string = "{ 'htmlResult': '{htmlResult}' }";
            const observationBusinessTemplateItem: string = "{}";
            const observationServiceTemplateItem: string = "{}";
            const observationSecurityTemplateItem: string = "{}";
            const observationDataTemplateItem: string = "{}";

            const observationDataTemplateBuilder: string = "";

            const storylineDetails: any = this.StorylineDetails;

            let htmlContainerJSON: any = "";
            let htmlRowsJSON: any = "";
            let htmlColumnsJSON: any = "";
            let htmlContentJSON: any = "";
            let htmlStylesJSON: any = "";

            let htmlResultInlineStylesString: string = "";
            let htmlResultString: string = "";

            //#endregion

            //#region RECALL THE MEMORIES

            observationItem = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Playground.Test.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Create_An_ObservationJsonNode_1_0(entryPointName, "Page_1_5_Process_StorySetting_12_3_1_0", "GENERATING html page", observationPresentationTemplateItem, observationBusinessTemplateItem, observationServiceTemplateItem, observationSecurityTemplateItem, observationDataTemplateItem);

            htmlContainerJSON = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Playground.Test.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(this.StorylineDetails,"searchkey", "HTMLContentDetails_SetImplementer_ProductCreation_WebDevelopment_HTML", false); 
            htmlRowsJSON = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Playground.Test.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(this.StorylineDetails, "searchkey", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLRows", false); 
            htmlColumnsJSON = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Playground.Test.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(this.StorylineDetails, "searchkey", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLColumns", false); 
            htmlContentJSON = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Playground.Test.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(this.StorylineDetails, "searchkey", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLContent", false); 
            htmlStylesJSON = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Playground.Test.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(this.StorylineDetails, "searchkey", "HTMLContentStylingDetails_SetImplementer_ProductCreation_WebDevelopment_CSS", false); 

            //#endregion

            //#region EXECUTE THE VISION

            htmlResultString = "<h3>Hello World<\/h3>";
            htmlResultString = this.Step_1_0_Custom_Convert_HTMLContainerJSONtoHTML_1_0(htmlContainerJSON);            
            htmlResultString = this.Step_2_0_Custom_Convert_HTMLRowsJSONtoHTML_1_0(htmlRowsJSON, htmlResultString);
            htmlResultString = this.Step_3_0_Custom_Convert_HTMLColumnsJSONtoHTML_1_0(htmlColumnsJSON, htmlResultString);
            htmlResultString = this.Step_4_0_Custom_Convert_HTMLContentJSONtoHTML_1_0(htmlContentJSON, htmlResultString);
            htmlResultInlineStylesString = this.Step_5_0_Create_HTMLInlineStyles_1_0(htmlStylesJSON);

            htmlResultString = Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0.BaseDI.Playground.Test.BackEnd.Web_Development.Extensions_1.Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0.Step_X_X_Create_A_HTMLHomePageTemplate_1_0("", "", "", htmlResultInlineStylesString, htmlResultString);

            const observation: any = JSON.stringify(observationItem = observationItem.replace('{htmlResult}', htmlResultString)); 

            //#endregion

            //#region REPORT THE FEEDBACK

            storylineDetails.outputs[1].baseDIObservations.push(JSON.parse(observation));

            this.StorylineDetails = storylineDetails;

            //#endregion

            return await this.StorylineDetails;
        }

        //#region THE VISION INSTRUCTIONS

        public Step_1_0_Custom_Convert_HTMLContainerJSONtoHTML_1_0(htmlContainerJSON: any): string {
            //#region DESCRIBE THE MEMORIES
            let htmlContainerString: string = "";

            //#endregion

            //#region RECALL THE MEMORIES


            //#endregion

            return htmlContainerString;
        }

        public Step_2_0_Custom_Convert_HTMLRowsJSONtoHTML_1_0(htmlRowsJSON: any, htmlContainerString: string): string {
            //#region DESCRIBE THE MEMORIES
            let htmlRowsString: string = "";

            //#endregion

            //#region RECALL THE MEMORIES


            //#endregion

            return htmlRowsString;
        }

        public Step_3_0_Custom_Convert_HTMLColumnsJSONtoHTML_1_0(htmlColumnsJSON: any, htmlRowsString: string): string {
            //#region DESCRIBE THE MEMORIES
            let htmlColumnsString: string = "";

            //#endregion

            //#region RECALL THE MEMORIES


            //#endregion

            return htmlColumnsString;
        }

        public Step_4_0_Custom_Convert_HTMLContentJSONtoHTML_1_0(htmlContentJSON: any, htmlColumnsString: string): string {
            //#region DESCRIBE THE MEMORIES
            let htmlContentString: string = "";

            //#endregion

            //#region RECALL THE MEMORIES


            //#endregion

            return htmlContentString;
        }

        public Step_5_0_Create_HTMLInlineStyles_1_0(htmlStylesJSON: any) : string {
            //#region DESCRIBE THE MEMORIES
            let htmlInlineCSSString: string = "";

            //#endregion

            //#region RECALL THE MEMORIES


            //#endregion

            return htmlInlineCSSString;
        }

        //#endregion

        //#endregion
    }
}