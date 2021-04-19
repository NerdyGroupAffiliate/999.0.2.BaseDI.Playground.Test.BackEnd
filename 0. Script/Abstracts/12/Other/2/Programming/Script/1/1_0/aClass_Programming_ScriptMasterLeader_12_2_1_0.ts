//#region Imports

//#region 3rd Party

//#endregion

//#region BaseDI

import * as ExtraData_12_2_1_0 from "../../../../../../../../Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";
import * as aClass_Programming_ScriptRoutable_12_2_1_0 from "../../../../../../../../Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptRoutable_12_2_1_0";
import * as IContract_Programming_Repository_12_2_1_0 from "../../../../../../../../Interfaces/12/Other/2/Programming/Contract/1/1_0/IContract_Programming_Repository_12_2_1_0";

import * as SingleParmPoco_12_2_1_0 from "../../../../../../../../../0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

//#endregion

//#endregion

export namespace BaseDI.Professional.Programming.Abstract_1
{
    export abstract class aClass_Programming_ScriptMasterLeader_12_2_1_0 implements IContract_Programming_Storyline_12_2_1_0<aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0>
    {
        //#region 1. Assign
        //public delegate void TriggerAutoBackUpHandler(JObject storylineDetails, JObject storylineDetails_Parameters, ExtraData_12_2_1_0 extraData);
        //public delegate void TriggerMistakeHandler(JObject storylineDetails, JObject storylineDetails_Parameters, Exception storyLineMistake, ExtraData_12_2_1_0 extraData);

        //public TriggerAutoBackUpHandler TriggerAutoBackUp;
        //public TriggerMistakeHandler TriggerMistake;
        public CallBack: (...args: any[]) => any = null;
        //#endregion

        //#region 2. Ready
        constructor() {
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
        //client: any, storylineDetails: any, storylineDetails_Parameters: any, extraData: any, requestToResolveName: string, requestToProcess: string, requestToProcessParameters: string
        public abstract SetupStoryline(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0
        //#endregion
    }
}