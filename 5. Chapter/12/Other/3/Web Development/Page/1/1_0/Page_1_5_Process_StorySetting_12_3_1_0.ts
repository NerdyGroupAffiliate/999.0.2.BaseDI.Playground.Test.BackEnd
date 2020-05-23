import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptPage_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptPage_12_2_1_0";
import * as Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";

import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";
import * as Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/3/Web Development/Method/1/1_0/Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0";
import { json } from "express";

export namespace BaseDI.BackEnd.Chapter.Page.WebDevelopment_1 {
    export class Page_1_5_Process_StorySetting_12_3_1_0 extends aClass_Programming_ScriptPage_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptPage_12_2_1_0 {
        //#region 1. Assign
        //#endregion

        //#region 2. Ready
        constructor(storylineDetails: object, repository: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<any>) {
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

            const observationPresentationTemplateItem: string = '{ "htmlResult": "{htmlResult}" }';
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

            observationItem = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Create_An_ObservationJsonNode_1_0(entryPointName, "Page_1_5_Process_StorySetting_12_3_1_0", "GENERATING html page", observationPresentationTemplateItem, observationBusinessTemplateItem, observationServiceTemplateItem, observationSecurityTemplateItem, observationDataTemplateItem);

            htmlContainerJSON = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(this.StorylineDetails, "searchkey", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLContainer", false); 
            htmlRowsJSON = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(this.StorylineDetails, "searchkey", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLRows", false); 
            htmlColumnsJSON = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(this.StorylineDetails, "searchkey", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLColumns", false); 
            htmlContentJSON = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(this.StorylineDetails, "searchkey", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLContent", false); 
            htmlStylesJSON = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(this.StorylineDetails, "searchkey", "HTMLContentStylingDetails_SetImplementer_ProductCreation_WebDevelopment_CSS", false); 

            //#endregion

            //#region EXECUTE THE VISION

            // htmlResultString = "<h3>Hello World<\/h3>";
            htmlResultString = this.Step_1_0_Custom_Convert_HTMLContainerJSONtoHTML_1_0(htmlContainerJSON);            
            htmlResultString = this.Step_2_0_Custom_Convert_HTMLRowsJSONtoHTML_1_0(htmlRowsJSON, htmlResultString);
            htmlResultString = this.Step_3_0_Custom_Convert_HTMLColumnsJSONtoHTML_1_0(htmlColumnsJSON, htmlResultString);
            htmlResultString = this.Step_4_0_Custom_Convert_HTMLContentJSONtoHTML_1_0(htmlContentJSON, htmlResultString);
            htmlResultInlineStylesString = this.Step_5_0_Custom_Convert_CSSJSONToInlineStyles_1_0(htmlStylesJSON);

            htmlResultString = Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0.BaseDI.BackEnd.Web_Development.Extensions_1.Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0.Step_X_X_Create_A_HTMLHomePageTemplate_1_0("", "", "", htmlResultInlineStylesString, htmlResultString);
           
           
            observationItem = observationItem.replace('{htmlResult}', escape(htmlResultString))
            const observation = observationItem;
            // const observation: any = JSON.stringify(observationItem = observationItem.replace('{htmlResult}', htmlResultString)); 
            //#endregion
            //#region REPORT THE FEEDBACK
            storylineDetails.outputs[1].baseDIObservations.push(JSON.parse(observation.toString()));
            this.StorylineDetails = storylineDetails;

            //#endregion

            return await this.StorylineDetails;
        }

        //#region THE VISION INSTRUCTIONS

        private getAttributes(attributes) {
            var attrs = [];
            for(var attribute in attributes ) {
                attrs.push(`${Object.keys(attributes[attribute])[0]}="${Object.values(attributes[attribute])[0]}"`)
            }
            return attrs.join(" ");
        }

        public Step_1_0_Custom_Convert_HTMLContainerJSONtoHTML_1_0(htmlContainerJSON: any): string {
            //#region DESCRIBE THE MEMORIES
            let htmlContainerString: string = "";    
            htmlContainerString = `<${htmlContainerJSON.value.HTMLContentItems[0].Tag} ${this.getAttributes(htmlContainerJSON.value.HTMLContentItems[0].Attributes)}>{HTMLRows_Replace}</${htmlContainerJSON.value.HTMLContentItems[0].Tag}>`;


            //#endregion

            //#region RECALL THE MEMORIES


            //#endregion

            return htmlContainerString;
        }

        public Step_2_0_Custom_Convert_HTMLRowsJSONtoHTML_1_0(htmlRowsJSON: any, htmlContainerString: string): string {
            //#region DESCRIBE THE MEMORIES
            let htmlRowsString: string = "";
            let rows = [];
            htmlRowsJSON.value.HTMLContentItems.forEach(row => {
                rows.push(`<${row.Tag} ${this.getAttributes(row.Attributes)}>{${row.Attributes[0].id}_Replace}</${row.Tag}>`)
            });
            htmlRowsString = htmlContainerString.replace("{HTMLRows_Replace}", rows.join("\n"))
            //#endregion
            //#region RECALL THE MEMORIES


            //#endregion

            return htmlRowsString;
        }

        public Step_3_0_Custom_Convert_HTMLColumnsJSONtoHTML_1_0(htmlColumnsJSON: any, htmlRowsString: string): string {
            //#region DESCRIBE THE MEMORIES
            let htmlColumnsString: string = htmlRowsString;
            //#endregion
            htmlColumnsJSON.value.HTMLContentItems.forEach(col => {
                let colItem = `<${col.Tag} ${this.getAttributes(col.Attributes)}>{${col.Attributes[0].id}_Replace}</${col.Tag}>\n`;
                htmlColumnsString = htmlColumnsString.replace(`{${col.ParentHTMLContentItemAttributeID}_Replace}`, colItem);
            });
            //#region RECALL THE MEMORIES


            //#endregion

            return htmlColumnsString;
        }

        public Step_4_0_Custom_Convert_HTMLContentJSONtoHTML_1_0(htmlContentJSON: any, htmlColumnsString: string): string {
            //#region DESCRIBE THE MEMORIES
            let htmlContentString: string = htmlColumnsString;
            // console.log(htmlContentJSON)
            let idsAndContant = {}
            htmlContentJSON.value.HTMLContentItems.forEach(con => {
                if(idsAndContant[con.ParentHTMLContentItemAttributeID] == undefined) {
                    idsAndContant[con.ParentHTMLContentItemAttributeID] = new Array();
                    idsAndContant[con.ParentHTMLContentItemAttributeID].push(`<${con.Tag} ${this.getAttributes(con.Attributes)}>${con.Value}</${con.Tag}>\n`);
                }
                else {
                    idsAndContant[con.ParentHTMLContentItemAttributeID].push(`<${con.Tag} ${this.getAttributes(con.Attributes)}>${con.Value}</${con.Tag}>\n`);
                }
                // content.push(`<${con.Tag} ${this.getAttributes(con.Attributes)}>${con.Value}</${con.Tag}>\n`);
            });

            Object.keys(idsAndContant).forEach(item => {
                let content = idsAndContant[item].join('\n')
                htmlContentString = htmlContentString.replace(`{${item}_Replace}`, content);
             });
            // console.log(idsAndContant)
            // htmlContentString = htmlContentString.replace(`{${con.ParentHTMLContentItemAttributeID}_Replace}`, content.join('\n'));

            //#endregion

            //#region RECALL THE MEMORIES


            //#endregion

            return htmlContentString;
        }

        public Step_5_0_Custom_Convert_CSSJSONToInlineStyles_1_0(htmlStylesJSON: any) : string {
            //#region DESCRIBE THE MEMORIES
            let htmlInlineCSSString: string = "";
            let styleFilePathLocal = htmlStylesJSON.value[0]._2_2_2_4_1_clientInformationHTMLContentStylingItem.value.HTMLContentStylingItemFiles[0].StyleFilePathLocal
            let filesArray = htmlStylesJSON.value[0]._2_2_2_4_1_clientInformationHTMLContentStylingItem.value.HTMLContentStylingItemFiles[0].StyleFiles
            let files = [];
            filesArray.forEach(file => {
                files.push(`<link rel="stylesheet" href="${styleFilePathLocal}${file.StyleFileName}.css" />\n`)
            });
            htmlInlineCSSString = files.join("\n");
            //#endregion

            //#region RECALL THE MEMORIES


            //#endregion

            return htmlInlineCSSString;
        }

        //#endregion

        //#endregion
    }
}