import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptPage_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptPage_12_2_1_0";
import * as aClass_Programming_ScriptRoutable_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptRoutable_12_2_1_0";

import * as Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";
import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

import * as ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../1. Storyline/12/Other/2/Programming/Studio/1/1_0/ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

import * as Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "../../../../../../../../7. Director/12/Other/2/Programming/Director/1/1_0/Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";

export namespace BaseDI.BackEnd.Chapter.Page.Programming_1 {
    export class Page_1_10_End_Process_12_2_1_0 extends aClass_Programming_ScriptPage_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptPage_12_2_1_0 {
        //#region 1. Assign
        //#endregion

        //#region 2. Ready
        constructor(storylineDetails: object, repository: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<any>) {
            super();

            //#region 1. Assign
            this.StorylineDetails = storylineDetails;
            this.Repository = repository;

            this.Action = this.Action.bind(this);

            this.Step_1_0_Custom_Store_RequestRoutes_1_0 = this.Step_1_0_Custom_Store_RequestRoutes_1_0.bind(this);
            this.Step_2_0_Custom_Transport_RequestToHandler_1_0 = this.Step_2_0_Custom_Transport_RequestToHandler_1_0.bind(this);
            this.Step_2_1_Custom_Control_RequestToProcess_1_0 = this.Step_2_1_Custom_Control_RequestToProcess_1_0.bind(this);

            
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
            //#region STORE REQUEST ROUTES
            const requestList = this.Step_1_0_Custom_Store_RequestRoutes_1_0();
            //#endregion

            //#region TRANSPORT THE REQUEST
            return this.Step_2_0_Custom_Transport_RequestToHandler_1_0(requestList);
            //#endregion
        }

        //#region STORE REQUEST ROUTES
        private Step_1_0_Custom_Store_RequestRoutes_1_0(): Array<string> {
            const requests: Array<string> = new Array<string>();

            const businessLogicMetaData: any = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(this.StorylineDetails, "key_1", "Functions", false);

            const businessLogicList: any = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(businessLogicMetaData, "values_2_2", "", false);

            for (var i = 0; i < businessLogicList.values_2_2.length; i++) {
                const businessLogicItem = businessLogicList.values_2_2[i];

                const businessLogicItemCallStackList = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(businessLogicItem, "EventCallStackItems", "", false);

                if (businessLogicItemCallStackList.EventCallStackItems != null &&
                    businessLogicItemCallStackList.EventCallStackItems.length > 0)
                {
                    for (var i2 = 0; i2 < businessLogicItemCallStackList.EventCallStackItems.length; i2++) {
                        const businessLogicItemCallStackItem = businessLogicItemCallStackList.EventCallStackItems[i2];

                        if (businessLogicItemCallStackItem.Events != null &&
                            businessLogicItemCallStackItem.Events.length > 0) {

                            let functionsEnabled: boolean = false;

                            for (var i3 = 0; i3 < businessLogicItemCallStackItem.Events.length; i3++) {
                                const businessLogicItemCallStackItemEvent = businessLogicItemCallStackItem.Events[i3];

                                if (businessLogicItemCallStackItemEvent.functionsEnabled != undefined) {
                                    if (businessLogicItemCallStackItemEvent.functionsEnabled.toUpperCase() == "TRUE") {
                                        functionsEnabled = true;
                                    }
                                }
                                else
                                {
                                    if (functionsEnabled)
                                        requests.push(businessLogicItemCallStackItemEvent); 
                                }
                            }
                        }
                    }
                }
            }
            
            return requests;
        }
        //#endregion

        //#region TRANSPORT THE REQUEST
        private async Step_2_0_Custom_Transport_RequestToHandler_1_0(requestList: any): Promise<any> {
            if (requestList != null) {
                let armTemplateJSONOutput: any = this.StorylineDetails;

                try
                {
                    if (this.EntryPoint == null || this.EntryPoint.constructor.name == "Object")
                    {
                        requestList.forEach(request => {
                            const requestName = request.functionName;

                            if (this.EntryPoint == null || this.EntryPoint.constructor.name == "Object") {
                                armTemplateJSONOutput = new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Story.Programming_1.ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0.BaseDI.BackEnd.Director.Programming_1.Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(this.EntryPoint))
                                    .SetupStoryline(this.Client, this.StorylineDetails, this.StorylineDetails_Parameters, this.ExtraData, requestName, "")
                                    .Action();
                            }
                        });
                    }
                    else
                    {
                        armTemplateJSONOutput = await this.Step_2_1_Custom_Control_RequestToProcess_1_0(this.EntryPoint);
                    }
                }
                catch (e)
                {
                    console.log(e);
                }

                return armTemplateJSONOutput;
            }
        }
        //#endregion

        //#region CONTROL THE REQUEST
        private async Step_2_1_Custom_Control_RequestToProcess_1_0(entryPoint: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0): Promise<any> {
            let result: object = this.StorylineDetails;

            if (this.EntryPoint != null) {
                result = await this.EntryPoint.Action();
            }

            return result;
        }
        //#endregion

        //#endregion
    }
}