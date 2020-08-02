import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";

import * as IContract_Programming_Repository_12_2_1_0 from "../../../../../../../../Interfaces/12/Other/2/Programming/Contract/1/1_0/IContract_Programming_Repository_12_2_1_0";
import * as ExtraData_12_2_1_0 from "../../../../../../../../Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";

export namespace BaseDI.BackEnd.Programming.Abstract_1
{
    export abstract class aClass_Programming_ScriptAction_12_2_1_0<ChapterAction> implements IContract_Programming_Repository_12_2_1_0
    {
        //#region 1. Assign
        public ExtraData: ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0 = new ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0;

        public MasterLeader: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        public MasterController: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        public MasterTransporter: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        public MasterConverter: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        public MasterStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        public MasterDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        public MasterSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        public RequestName: String;

        public StorylineDetails: Object;

        public StorylineDetails_Parameters: Object;

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
        public abstract Action_1_Begin_Process(): ChapterAction;

        public abstract Action_2_Validate_Process(): ChapterAction;

        public abstract Action_3_Process_StoryAuthor(): ChapterAction;

        public abstract Action_4_Process_StoryCharacters(): ChapterAction;

        public abstract Action_5_Process_StorySetting(): ChapterAction;

        public abstract Action_6_Process_StoryExperiences(): ChapterAction;

        public abstract Action_7_Process_StoryResources(): ChapterAction;

        public abstract Action_8_Process_CRUD(): ChapterAction;

        public abstract Action_9_Verify_Process(): ChapterAction;

        public abstract Action_10_End_Process(): ChapterAction;
        //#endregion
    }
}
