import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptPage_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptPage_12_2_1_0";
import * as aClass_Programming_ScriptRoutable_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptRoutable_12_2_1_0";

import * as Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";
import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

import * as ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../1. Storyline/12/Other/2/Programming/Studio/1/1_0/ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

import * as Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "../../../../../../../../7. Director/12/Other/2/Programming/Director/1/1_0/Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";

export namespace BaseDI.BackEnd.Chapter.Page.Programming_1 {
    export class Page_1_10_End_Process_12_2_1_0 extends aClass_Programming_ScriptPage_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptPage_12_2_1_0
    {
        //#region 1. Assign
        //#endregion

        //#region 2. Ready
        constructor(storylineDetails: object, repository: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<any>) {
            super();

            //#region 1. Assign
            this.StorylineDetails = storylineDetails;
            this.Repository = repository;

            this.Action = this.Action.bind(this);

            this.Step_1_0_Custom_Transport_ConvertedDataToController_1_0 = this.Step_1_0_Custom_Transport_ConvertedDataToController_1_0.bind(this);

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
            //#region 1. Assign

            //#endregion

            //#region 2. Action

            this.StorylineDetails = await this.Step_1_0_Custom_Transport_ConvertedDataToController_1_0();

            //#endregion

            //#region 3. Observe

            return this.StorylineDetails;

            //#endregion
        }

        //#region TRANSPORT THE REQUEST

        private async Step_1_0_Custom_Transport_ConvertedDataToController_1_0()
        {
            //#region 1. Assign

            let entryPoint: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

            const requestNameToProcess: string = this.ExtraData.KeyValuePairs.getValue("RequestToProcess").toString();
            const requestNameToProcessParameters: string = this.ExtraData.KeyValuePairs.getValue("RequestToProcessParameters").toString();

            let handleObservation: any;

            //#endregion

            //#region 2. Action

            //#region Transport

            //CREATE THE PROCESS
            const Transport = async () =>
            {
                //EXECUTE THE PROCESS
                entryPoint = this.EntryPoint;

                if (entryPoint != null && entryPoint.RequestID != undefined && !entryPoint.RequestID.toUpperCase().includes("REQUEST_CONTROLLER_1_0"))
                {
                    return this.EntryPoint.Action().then(response => {
                        return response;
                    });
                }
                else
                {
                    return handleObservation = new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Story.Programming_1.ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0.BaseDI.BackEnd.Director.Programming_1.Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(this.ExtraData))
                        .SetupStoryline(this.Client, this.StorylineDetails, this.StorylineDetails_Parameters, this.ExtraData, requestNameToProcess, requestNameToProcess, requestNameToProcessParameters)
                        .Action().then(response => {
                            return response;
                        });
                }
            }

            //START THE PROCESS
            handleObservation = await Transport();

            //#endregion

            //#endregion

            //#region 3. Observe

            return handleObservation;

            //#endregion
        }

        //#endregion

        //#endregion
    }
}