import * as ExtraData_12_2_1_0 from "../../../../../../../../Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";

import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptRoutable_12_2_1_0 from "../../../../../../../../Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptRoutable_12_2_1_0";

export namespace BaseDI.BackEnd.Programming.Abstract_1
{
    export abstract class aClass_Programming_ScriptPage_12_2_1_0
    {
        //#region 1. Assign
        public Repository: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<any>;

        public StorylineDetails: object = new Object();

        public StorylineDetails_Parameters: object = new Object();

        public ExtraData: ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0 = new ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0;

        public EntryPoint: any;

        public MasterLeader: any;

        public MasterController: any;

        public MasterTransporter: any;

        public MasterConverter: any;

        public MasterStorer: any;

        public MasterDisturber: any;

        public MasterSensor: any;

        public Client: any;
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
        public abstract async Action(): Promise<object>;
        //#endregion
    }
}