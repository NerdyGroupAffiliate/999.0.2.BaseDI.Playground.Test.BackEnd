import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";

export namespace BaseDI.BackEnd.State.Programming_1 {
    export class RemoteService_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 extends aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<any>
    {
        //#region 1. Assign

        private _baseDIPlaceHolderValue = "{BASEDICUSTOMOPTION}";
        private _storylineDetails: object;

        //#endregion

        //#region 2. Ready
        constructor(storylineDetails: object) {
            super();

            //#region 1. Assign
            this._storylineDetails = storylineDetails;
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

        //#region EXECUTE LOGIC INSTUCTIONS

        public async Action_9_Verify_Process(): Promise<any> {
            //STORE META DATA
            const metaData = Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0.Step_X_X_Custom_Store_JSONSettingsIntoMemory_1_0(this._storylineDetails, "", this._baseDIPlaceHolderValue, true);

            return metaData;
        }

        //#endregion

        //#region NOT APART OF THE REQUEST PIPELINE AT THIS TIME

        public async Action_1_Begin_Process(): Promise<any> {
            return this._storylineDetails;
        }

        public async Action_2_Validate_Process(): Promise<any> {
            return this._storylineDetails;
        }

        public async Action_3_Process_StoryAuthor(): Promise<any> {
            return this._storylineDetails;
        }

        public async Action_4_Process_StoryCharacters(): Promise<any> {
            return this._storylineDetails;
        }

        public async Action_5_Process_StorySetting(): Promise<any> {
            return this._storylineDetails;
        }

        public async Action_6_Process_StoryExperiences(): Promise<any> {
            return this._storylineDetails;
        }

        public async Action_7_Process_StoryResources(): Promise<any> {
            return this._storylineDetails;
        }

        public async Action_8_Process_CRUD(): Promise<any> {
            return this._storylineDetails;
        }

        public async Action_10_End_Process(): Promise<any> {
            return this._storylineDetails;
        }

        //#endregion

        //#endregion
    }
}