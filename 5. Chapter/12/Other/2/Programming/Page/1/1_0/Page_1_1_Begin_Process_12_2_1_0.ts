import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptPage_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptPage_12_2_1_0";
import * as aClass_Programming_ScriptRoutable_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptRoutable_12_2_1_0";

import * as Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";
import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

import * as ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../1. Storyline/12/Other/2/Programming/Studio/1/1_0/ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

import * as Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "../../../../../../../../7. Director/12/Other/2/Programming/Director/1/1_0/Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";
import * as Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0 from "../../../../../../../../7. Director/12/Other/2/Programming/Director/2/1_0/Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0";

export namespace BaseDI.Chapter.Page.Programming_1
{
    export class Page_1_1_Begin_Process_12_2_1_0 extends aClass_Programming_ScriptPage_12_2_1_0.BaseDI.Programming.Abstract_1.aClass_Programming_ScriptPage_12_2_1_0
    {
        //#region 1. Assign
        //#endregion

        //#region 2. Ready
        constructor(storylineDetails: object, repository: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<any>) {
            super();

            //#region 1. Assign
            this.StorylineDetails = storylineDetails;
            this.Repository = repository;

            this.Action = this.Action.bind(this);

            this.Step_1_0_Custom_Transport_InputToConverter_1_0 = this.Step_1_0_Custom_Transport_InputToConverter_1_0.bind(this);
   
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

            if (!this.StorylineDetails)
                this.StorylineDetails = await this.Step_1_0_Custom_Transport_InputToConverter_1_0();

            //#endregion

            //#region 3. Observe

            return this.StorylineDetails;

            //#endregion
        }

        //#region TRANSPORT THE REQUEST

        private async Step_1_0_Custom_Transport_InputToConverter_1_0()
        {
            //#region 1. Assign

            const requestNameToProcess: string = this.ExtraData.KeyValuePairs.getValue("RequestToProcess").toString();
            const requestNameToProcessParameters: string = this.ExtraData.KeyValuePairs.getValue("RequestToProcessParameters").toString();

            let handleObservation: any;

            //#endregion

            //#region 2. Action

            //#region Conversion

            //CREATE THE PROCESS
            const Convert = async () =>
            {
                //EXECUTE THE PROCESS
                return handleObservation = new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Story.Programming_1.ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(new Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0.BaseDI.Director.Programming_2.Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0(this.ExtraData))
                    .SetupStoryline(this.ClientOrServerInstance, null, null, this.ExtraData, "", requestNameToProcess, requestNameToProcessParameters)
                    .Action().then(response => {
                        return response;
                    });
            }

            //START THE PROCESS
            handleObservation = await Convert();

            //#endregion

            //#endregion

            //#region 3. Observe

            return handleObservation.StorylineDetails;

            //#endregion
        }

        //#endregion

        //#endregion
    }
}