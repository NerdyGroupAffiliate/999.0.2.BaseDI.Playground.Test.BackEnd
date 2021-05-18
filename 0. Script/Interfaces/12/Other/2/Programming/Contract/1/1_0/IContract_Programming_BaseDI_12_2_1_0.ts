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

export namespace BaseDI.Professional.Programming.Interfaces_1
{

}

declare global {
    interface IContract_Programming_Storyline_12_2_1_0<T> {
        SetupStoryline(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): T;
    }


    interface Parms {
    }

    interface Variable {
    }

    interface Resource {
    }

    interface Output {
        baseDIMistakes: any[];
        baseDIObservations: any[];
    }

    interface IStorylineDetails {
        $schema: string;
        contentVersion: string;
        parameters: Parms;
        variables: Variable[];
        resources: Resource[];
        outputs: Output[];
    }
}






