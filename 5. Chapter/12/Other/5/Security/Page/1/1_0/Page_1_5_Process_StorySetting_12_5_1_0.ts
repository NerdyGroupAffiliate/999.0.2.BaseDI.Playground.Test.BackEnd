import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptPage_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptPage_12_2_1_0";
import * as Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";
import * as Extension_Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/5/Security/Method/1/1_0/Extension_Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0";

import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

export namespace BaseDI.Professional.Chapter.Page.Security_1 {
    export class Page_1_5_Process_StorySetting_12_5_1_0 extends aClass_Programming_ScriptPage_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptPage_12_2_1_0 {
        //#region 1. Assign

        //#endregion

        //#region 2. Ready
        constructor(storylineDetails: object, repository: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<any>) {
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

        //A. Default state
        public HandleDefaults(): void {
            //#region 1. INPUTS


            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process defaults

            //#region IDEAL CASE - defaults handler


            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#endregion
        }

        //#endregion

        //#region 4. Action
        public async Action(): Promise<object>
        {
            //#region VARIABLES

            //#endregion

            //#region VARIABLES

            //#endregion

            //#region INPUTS


            //#endregion

            //#region OUTPUT

            return await this.StorylineDetails;

            //#endregion
        }

        //#region CLIENT SIDE CODE

        //#endregion

        //#region SERVER SIDE CODE

        public async Step_1_0_Custom_Control_ServerAuthenticationRequestToAPI_1_0()
        {
            //#region VARIABLES

            //#endregion

            //#region VARIABLES


            //#endregion

            //#region INPUTS


            //#endregion

            //#region OUTPUT

            //#endregion
        }

        public async Step_2_0_Custom_Transport_ServerAuthenticationRequestToAPI_1_0() {

            //#region VARIABLES

            //#endregion

            //#region VARIABLES

            //#endregion

            //#region INPUTS

            //#endregion

            //#region OUTPUT

            //#endregion
        }

        private async Step_3_0_Custom_Output_ServerAuthenticationResponseFromAPI_1_0() {
            //#region VARIABLES

            //#endregion

            //#region VARIABLES

            //#endregion

            //#region INPUTS

            //#endregion

            //#region OUTPUT

            //#endregion
        }

        //#region MICROSOFT

        private async Step_2_1_Custom_Transport_ServerAuthenticationRequestToAPI_1_0_Microsoft() {
            //#region VARIABLES

            //#endregion

            //#region VARIABLES

            //#endregion

            //#region INPUTS

            //#endregion

            //#region OUTPUT

            //#endregion
        }

        private async Step_3_1_Custom_Output_ServerAuthenticationResponseFromAPI_1_0_Microsoft() {
            //#region VARIABLES

            //#endregion

            //#region VARIABLES

            //#endregion

            //#region INPUTS

            //#endregion

            //#region OUTPUT

            //#endregion
        }

        //#endregion

        //#endregion

        //#endregion
    }
}