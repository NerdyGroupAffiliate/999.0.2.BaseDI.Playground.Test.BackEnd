import * as aClass_Programming_ScriptPage_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptPage_12_2_1_0";

import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

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

            let htmlResult: string = "";

            //#endregion

            //#region RECALL THE MEMORIES

            observationItem = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Playground.Test.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Create_An_ObservationJsonNode_1_0(entryPointName, "Page_1_5_Process_StorySetting_12_3_1_0", "GENERATING html page", observationPresentationTemplateItem, observationBusinessTemplateItem, observationServiceTemplateItem, observationSecurityTemplateItem, observationDataTemplateItem);

            //#endregion

            //#region EXECUTE THE VISION

            htmlResult = "<h3>Hello World<\/h3>";

            const observation: any = JSON.stringify(observationItem = observationItem.replace('{htmlResult}', htmlResult));

            //#endregion

            //#region REPORT THE FEEDBACK

            storylineDetails.outputs[1].baseDIObservations.push(JSON.parse(observation));

            this.StorylineDetails = storylineDetails;

            //#endregion

            return await this.StorylineDetails;
        }
        //#endregion
    }
}