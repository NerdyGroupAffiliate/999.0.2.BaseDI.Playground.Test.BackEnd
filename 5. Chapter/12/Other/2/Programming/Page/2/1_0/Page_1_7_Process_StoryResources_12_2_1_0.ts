import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptPage_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptPage_12_2_1_0";

import * as Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";
import * as Extension_Director_Of_Programming_Chapter_12_2_Page_2_Request_Sensor_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/2/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_2_Request_Sensor_1_0";

import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

export namespace BaseDI.BackEnd.Chapter.Page.Programming_2 {
    export class Page_1_7_Process_StoryResources_12_2_1_0 extends aClass_Programming_ScriptPage_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptPage_12_2_1_0 {
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
        public async Action(): Promise<object> {

            //#region DESCRIBE THE MEMORIES
 

            //#endregion

            //#region RECALL THE MEMORIES


            //#endregion

            //#region EXECUTE THE VISION

            this.Step_1_0_Custom_Sense_SystemDisturbances_1_0();

            //#endregion

            //#region REPORT THE FEEDBACK

            return await this.StorylineDetails;

            //#endregion
        }

        //region THE VISION STEPS
        private Step_1_0_Custom_Sense_SystemDisturbances_1_0(): void
        {
            //#region DESCRIBE THE MEMORIES

            let businessMetaData: string = "";
            let businessFunctionParameterName: string = "Step_1_0_Custom_Transport_LocalAssetToServer_1_0";

            console.log(businessFunctionParameterName);
            //#endregion

            //#region RECALL THE MEMORIES

            businessMetaData = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(this.StorylineDetails, "searchkey", "SetImplementer_ProductCreation_Software_BusinessFuction", false);

            //#endregion

            //#region EXECUTE THE VISION

            switch (businessFunctionParameterName.toLocaleUpperCase()) {
                case "STEP_1_0_CUSTOM_TRANSPORT_LOCALASSETTOSERVER_1_0":
                    this.Step_1_0_Custom_Transport_LocalAssetToServer_1_0();

                    break;
            }

            //#endregion

            //#region REPORT THE FEEDBACK

            //#endregion
        }

        private Step_1_0_Custom_Transport_LocalAssetToServer_1_0(): void {
            //#region DESCRIBE THE MEMORIES
   
            //#endregion

            //#region RECALL THE MEMORIES

     
            //#endregion

            //#region EXECUTE THE VISION

            Extension_Director_Of_Programming_Chapter_12_2_Page_2_Request_Sensor_1_0.BaseDI.BackEnd.Programming.Extensions_2.Extension_Director_Of_Programming_Chapter_12_2_Page_2_Request_Sensor_1_0.Step_X_X_Custom_Store_LocalFilesToServer_1_0(this.StorylineDetails);

            //#endregion

            //#region REPORT THE FEEDBACK

            //#endregion
        }
        //#endregion

        //#endregion

    }
}