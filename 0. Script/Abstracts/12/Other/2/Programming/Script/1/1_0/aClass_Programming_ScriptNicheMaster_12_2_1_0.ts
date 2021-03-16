import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptRoutable_12_2_1_0 from "../../../../../../../../Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptRoutable_12_2_1_0";

export namespace BaseDI.Programming.Abstract_1
{
    export abstract class aClass_Programming_ScriptNicheMaster_12_2_1_0<StoryRequest>
    {
        //#region 1. Assign
        public AppSettings: string = "";
        public APILocationLocalNodeJS: string = "";
        public APILocationLocalDotNetCore: string = "";

        public APILocationRemote: string = "";

        public CallBack: (...args: any[]) => any = null;
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
        public abstract Action(client: any, centralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>, centralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>, centralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>, requestToResolve: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0, storylineDetails: object, storylineDetails_Parameters: object, requestName: string, requestToProcess: string, requestToProcessParameters: string): StoryRequest;
        //#endregion
    }
}