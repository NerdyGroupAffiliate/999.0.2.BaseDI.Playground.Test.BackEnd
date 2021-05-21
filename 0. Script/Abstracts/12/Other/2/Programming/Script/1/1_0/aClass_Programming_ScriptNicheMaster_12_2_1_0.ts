import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptRoutable_12_2_1_0 from "../../../../../../../../Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptRoutable_12_2_1_0";

import * as SingleParmPoco_12_2_1_0 from "../../../../../../../../Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

export namespace BaseDI.Professional.Programming.Abstract_1
{
    export abstract class aClass_Programming_ScriptNicheMaster_12_2_1_0<StoryRequest>
    {
        //#region 1. Assign
        public AppSettings: string = "";

        public APILocationLocalNodeJS: string = "";
        public APILocationLocalNodeJS_SSL: string = "";

        public APILocationLocalDotNetCore: string = "";
        public APILocationLocalDotNetCore_SSL: string = "";

        public APILocationRemote: string = "";

        public CallBack: (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) => any = null;

        public Finalize: boolean = false;

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
        public abstract Action(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): StoryRequest;
        //#endregion
    }
}