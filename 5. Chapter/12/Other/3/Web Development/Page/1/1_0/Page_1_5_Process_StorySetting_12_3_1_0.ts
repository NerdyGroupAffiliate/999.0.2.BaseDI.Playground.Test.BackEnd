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

            let htmlContainer: any = "";
            let htmlRows: any = "";
            let htmlColumns: any = "";
            let htmlContent: any = "";
            let htmlStyles: any = "";

            let htmlResultInlineStyles: string = "";
            let htmlResult: string = "";

            //#endregion

            //#region RECALL THE MEMORIES

            observationItem = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Playground.Test.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Create_An_ObservationJsonNode_1_0(entryPointName, "Page_1_5_Process_StorySetting_12_3_1_0", "GENERATING html page", observationPresentationTemplateItem, observationBusinessTemplateItem, observationServiceTemplateItem, observationSecurityTemplateItem, observationDataTemplateItem);

            htmlContainer = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Playground.Test.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(this.StorylineDetails,"searchkey", "HTMLContentDetails_SetImplementer_ProductCreation_WebDevelopment_HTML", false); 
            htmlRows = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Playground.Test.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(this.StorylineDetails, "searchkey", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLRows", false); 
            htmlColumns = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Playground.Test.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(this.StorylineDetails, "searchkey", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLColumns", false); 
            htmlContent = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Playground.Test.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(this.StorylineDetails, "searchkey", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLContent", false); 
            htmlStyles = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Playground.Test.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(this.StorylineDetails, "searchkey", "HTMLContentStylingDetails_SetImplementer_ProductCreation_WebDevelopment_CSS", false); 

            //#endregion

            //#region EXECUTE THE VISION

            htmlResult = "<h3>Hello World<\/h3>";
            htmlResult = this.Step_1_0_Custom_Convert_HTMLContainerJSONtoHTML_1_0(htmlContainer);            
            htmlResult = this.Step_2_0_Custom_Convert_HTMLRowsJSONtoHTML_1_0(htmlRows, htmlResult);
            htmlResult = this.Step_3_0_Custom_Convert_HTMLColumnsJSONtoHTML_1_0(htmlColumns, htmlResult);
            htmlResult = this.Step_4_0_Custom_Convert_HTMLContentJSONtoHTML_1_0(htmlContent, htmlResult);
            htmlResultInlineStyles = this.Step_5_0_Create_HTMLInlineStyles_1_0(htmlStyles);

            htmlResult = Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0.BaseDI.Playground.Test.BackEnd.Web_Development.Extensions_1.Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0.Step_X_X_Create_A_HTMLHomePageTemplate_1_0("", "", "", htmlResultInlineStyles, htmlResult);

            const observation: any = JSON.stringify(observationItem = observationItem.replace('{htmlResult}', htmlResult)); htmlResult

            //#endregion

            //#region REPORT THE FEEDBACK

            storylineDetails.outputs[1].baseDIObservations.push(JSON.parse(observation));

            this.StorylineDetails = storylineDetails;

            //#endregion

            return await this.StorylineDetails;
        }

        //#region THE VISION INSTRUCTIONS

        public Step_1_0_Custom_Convert_HTMLContainerJSONtoHTML_1_0(htmlContainerJSON: any) {
            //#region DESCRIBE THE MEMORIES
            let htmlContainer: string = "";

            //#endregion

            //#region RECALL THE MEMORIES


            //#endregion

            return htmlContainer;
        }

        public Step_2_0_Custom_Convert_HTMLRowsJSONtoHTML_1_0(htmlRowsJSON: any, htmlContainerString: string) {
            //#region DESCRIBE THE MEMORIES
            let htmlRows: string = "";

            //#endregion

            //#region RECALL THE MEMORIES


            //#endregion

            return htmlRows;
        }

        public Step_3_0_Custom_Convert_HTMLColumnsJSONtoHTML_1_0(htmlColumnsJSON: any, htmlRowsString: string) {
            //#region DESCRIBE THE MEMORIES
            let htmlColumns: string = "";

            //#endregion

            //#region RECALL THE MEMORIES


            //#endregion

            return htmlColumns;
        }

        public Step_4_0_Custom_Convert_HTMLContentJSONtoHTML_1_0(htmlContentJSON: any, htmlColumnsString: string) {
            //#region DESCRIBE THE MEMORIES
            let htmlContent: string = "";

            //#endregion

            //#region RECALL THE MEMORIES


            //#endregion

            return htmlContent;
        }

        public Step_5_0_Create_HTMLInlineStyles_1_0(htmlStyles: any) {
            //#region DESCRIBE THE MEMORIES
            let htmlContent: string = "";

            //#endregion

            //#region RECALL THE MEMORIES


            //#endregion

            return htmlContent;
        }

        //#endregion

        //#endregion
    }
}