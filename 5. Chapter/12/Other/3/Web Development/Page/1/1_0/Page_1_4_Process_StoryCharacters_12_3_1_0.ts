import * as aClass_Programming_ScriptPage_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptPage_12_2_1_0";

export namespace BaseDI.Playground.Test.BackEnd.Chapter.Page.WebDevelopment_1 {
    export class Page_1_4_Process_StoryCharacters_12_3_1_0 extends aClass_Programming_ScriptPage_12_2_1_0.BaseDI.Playground.Test.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptPage_12_2_1_0 {
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
        public async Action(): Promise<object> {

            //Reference the MasterLeader.
            return await this.StorylineDetails;
        }
        //#endregion
    }
}