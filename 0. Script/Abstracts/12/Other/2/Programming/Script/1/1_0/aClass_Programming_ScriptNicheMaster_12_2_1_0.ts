﻿import * as aClass_Programming_ScriptRoutable_12_2_1_0 from "../../../../../../../../Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptRoutable_12_2_1_0";

export namespace BaseDI.Playground.Test.BackEnd.Programming.Abstract_1
{
    export abstract class aClass_Programming_ScriptNicheMaster_12_2_1_0<StoryRequest>
    {
        //#region 1. Assign
        public APILocationLocalNodeJS: string = "";
        public APILocationLocalDotNetCore: string = "";

        public APILocationRemote: string = "";
        //#endregion

        //#region 2. Ready
        constructor()
        {
            //#region 1. Assign
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
        public abstract Action(client: any, centralizedMaster: any, requestToResolve: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Playground.Test.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0, storylineDetails: object, storylineDetails_Parameters: object, requestName: string): StoryRequest;
        //#endregion
    }
}