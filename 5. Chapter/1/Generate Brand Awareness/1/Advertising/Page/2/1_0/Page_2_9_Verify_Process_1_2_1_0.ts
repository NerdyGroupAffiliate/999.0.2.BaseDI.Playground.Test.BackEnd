﻿import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptPage_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptPage_12_2_1_0";
import * as Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";

export namespace BaseDI.Chapter.Page.Advertising_2 {
    export class Page_2_9_Verify_Process_1_2_1_0 extends aClass_Programming_ScriptPage_12_2_1_0.BaseDI.Programming.Abstract_1.aClass_Programming_ScriptPage_12_2_1_0 {
        //#region 1. Assign
        private _baseDIPlaceHolderValue = "{BASEDICUSTOMOPTION}";
        private _optionsProfiles: Array<string> = new Array();
        //#endregion

        //#region 2. Ready
        constructor(storylineDetails: object, repository: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<any>) {
            super();

            //region 1. Assign
            this.StorylineDetails = storylineDetails;
            this.Repository = repository;

            this.Action = this.Action.bind(this);
  
            //region 2. Action

            //region 3. Observe
        }
        //#endregion

        //#region 3. Set
        //#endregion

        //#region 4. Action
        public async Action(): Promise<object> {

            //#region VARIABLES: DESCRIBE the memories

            //#endregion

            //#region VARIABLES: DESCRIBE the memories

            //#endregion

            //#region **INPUT: PROCESS the memories*
            this.Step_1_0_Custom_Sense_BrandTrustGeneratedByVistor_1_0();

            //#endregion

            //#region **OUTPUT: TELL the story*

            //#endregion

            //Reference the MasterLeader.
            return await this.StorylineDetails;
        }
        //#endregion

        //#region THE VISION INSTRUCTIONS

        public Step_1_0_Custom_Sense_BrandTrustGeneratedByVistor_1_0(): any {

        }
       
        //#endregion
    }
}