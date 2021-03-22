import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";

import * as Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/3/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0";
import * as Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";

import * as Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/3/Web Development/Method/13/1_0/Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0";

export namespace BaseDI.State.Programming_3 {
    export class LocalFile_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0 extends aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<any>
    {
        //#region 1. Assign

        private _baseDIPlaceHolderValue = "{BASEDICUSTOMOPTION}";
        private _storylineDetails: any;

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

        public async Action_8_Process_CRUD(): Promise<any>
        {
            //#region VARIABLES 

            let storedAction: string;

            let storedCRUDValue: string = "";

            let storedDelimeterValue: Array<any> = null;

            let storedDictionary: Object = {};
        
            let storedObject: IStorylineDetails;

            let storedObservation: Array<Object>;
            let storedObservationCount: number;
            let storedObservationIndex: number;
            let storedObservations: Array<Object>;
            let storedObservationKey: string;
            let storedObservationKeys: Array<Object>;

            let storedResult:any = null;

            let storedServer: any;

            //#endregion

            //#region VALUES

            storedObservationIndex = 0;
            storedObservations = this._storylineDetails.outputs[1].baseDIObservations;
            storedObservationCount = this._storylineDetails.outputs[1].baseDIObservations.length == 0 ? 0 : this._storylineDetails.outputs[1].baseDIObservations.length;
            storedServer = this?.ClientOrServerInstance?.Server;

            //#endregion

            //#region INPUTS

            //EXECUTE THE PROCESS

            //#region CREATE STORAGE ENTRY

            if (storedObservations)
            {
                storedObservations.map(observation =>
                {
                    //STORE OBJECT KEYS
                    storedObservationKeys = Object.keys(observation);

                    //FIND STORAGE RELATED OBJECTS
                    storedObservationKeys.map(observationKey =>
                    {
                        storedObservationKey = observationKey.toString();

                        //DETERMINE IF OBJECT IS STORAGE KEY
                        if (observationKey.toString().toUpperCase().includes("STORAGEKEY"))
                        {
                            //DETERMINE CRUD ACTION NAME
                            storedDelimeterValue = observationKey.toString().split("-");
                            storedCRUDValue = storedDelimeterValue[1];
                            
                            // console.log("storedCRUDValue = " + storedCRUDValue);

                            storedObservationKey = storedObservationKey.toString().replace("-Create", "");
                            storedObservationKey = storedObservationKey.toString().replace("-Read", "");
                            storedObservationKey = storedObservationKey.toString().replace("-Update", "");
                            storedObservationKey = storedObservationKey.toString().replace("-Delete", "");

                            //CREATE THE PROCESS
                            const handleObservation = async (observation) => {
                                // tslint:disable-next-line:max-line-length
                                storedResult = Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.BaseDI.Programming.Extensions_3.Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.Step_X_X_Custom_Store_ServerLocalDataToMemory_1_0(storedCRUDValue, storedObservationKey, observation);

                                if(storedResult != null)
                                {                                  
                                    this._storylineDetails.outputs[1].baseDIObservations.push(JSON.parse(storedResult));
                                }
                            }

                            //START THE PROCESS
                            handleObservation(observation);                                
                        }

                        storedObservationIndex += 1;
                    })
                });
            }

            //#endregion

            //#endregion

            //#region OUTPUT

            return this._storylineDetails;

            //#endregion
        }

        public async Action_9_Verify_Process(): Promise<any> {
            return this._storylineDetails;
        }

        public async Action_10_End_Process(): Promise<any> {
            return this._storylineDetails;
        }

        //#endregion

        //#endregion
    }
}