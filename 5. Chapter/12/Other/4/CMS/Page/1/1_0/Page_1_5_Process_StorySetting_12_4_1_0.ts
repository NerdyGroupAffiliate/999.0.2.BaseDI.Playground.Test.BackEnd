import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptPage_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptPage_12_2_1_0";
import * as Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";
import * as Extension_Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/5/Security/Method/1/1_0/Extension_Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0";

import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

export namespace BaseDI.Professional.Chapter.Page.CMS_1 {
    export class Page_1_5_Process_StorySetting_12_4_1_0 extends aClass_Programming_ScriptPage_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptPage_12_2_1_0 {
        //#region 1. Assign

        private _apiMetaData: any = null;

        private _request: any = null;
        private _requestRoute: string = null;

        private _server: any = null;

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

        //#endregion
    }
}