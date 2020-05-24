import *  as ExtraData_12_2_1_0 from "../../../../../../../../Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";

export namespace BaseDI.BackEnd.Programming.Abstract_1
{
    export abstract class aClass_Programming_ScriptCharacter_12_2_1_0
    {
        //#region 1. Assign
        
        //A. Variable Declaration       

        public ID: string = "";

        public TypeID: number = 0;

        public FirstName: string = "";

        public LastName: string = "";

        public IsActive: boolean = false;

        public Created: Date = new Date();

        public Updated: Date = new Date();

        public Deleted: Date = new Date();

        public ARMData: object = new Object();

        public ExtraData_12_2_1_0: ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0 = new ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0;
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
        //#endregion
    }
}