let fs = null;
let localStorage = null;
let objectScan = null;
let path = null;

if (process.env.APP_ENV == "SERVER") {
    objectScan = require('copyfiles');
    fs = require('fs');
    path = require('path');

    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./wwwroot/Server/State');
}

import { resolve } from "dns";
import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";

import * as aClass_Programming_ScriptPage_12_2_1_0 from "../../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptPage_12_2_1_0";

import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0"

export namespace BaseDI.Professional.Programming.Extensions_3 {
    export class Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0 {
        constructor() {

        }

        //#region STORE 
        public static async Step_X_X_Custom_Control_LocalDataToServerMemory_1_0(masterLeader_masterStoreReference: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>, CRUDVerb: string, entryPointName: string, pageName: string, description: string, storylineDetails: any, data: any,  uniqueReferenceKey: string = ""): Promise<any> {
            if (masterLeader_masterStoreReference == undefined || masterLeader_masterStoreReference == null) return; //REQUIRED

            //console.log("AA");
            //console.log(JSON.stringify(storylineDetails.outputs[1].baseDIObservations));

            //#region VARIABLES

            let observationItem: String = "";

            const observationPresentationTemplateItem: string = "";
            const observationBusinessTemplateItem: string = "{}";
            const observationServiceTemplateItem: string = "{}";
            const observationSecurityTemplateItem: string = "{}";
            const observationDataTemplateItem: string = '{ "dataResult": "{dataResult}" }';

            let outputResult: any = null;

            let storageDictionary: Object = {};

            let storageKey: any = "StorageKey_" + entryPointName + "-" + CRUDVerb;
            let storageKeyFiltered: any = "";
            let storedPromise: Promise<object> = null;
            let storageVariables: any = null;

            //#endregion

            //#region VALUES

            //#endregion

            //#region INPUTS


            if (uniqueReferenceKey)
                storageKey += "-" + uniqueReferenceKey;

            if (data) {
                observationItem = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Professional.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Create_An_ObservationJsonNode_1_0(entryPointName, pageName, description, observationPresentationTemplateItem, observationBusinessTemplateItem, observationServiceTemplateItem, observationSecurityTemplateItem, observationDataTemplateItem);
               
                if(typeof(data) == "string") {
                    observationItem = observationItem.replace('{dataResult}', escape(data.trim()));
                }
                observationItem = observationItem.replace('{dataResult}', escape(JSON.stringify(data)));

                storageDictionary[storageKey] = observationItem.toString();
            }

            //#region OUTPUT

            //#region REMOVE OLD STORAGE

            storageKeyFiltered = storageKey.toString().replace("-Create", "");
            storageKeyFiltered = storageKeyFiltered.toString().replace("-Read", "");
            storageKeyFiltered = storageKeyFiltered.toString().replace("-Update", "");
            storageKeyFiltered = storageKeyFiltered.toString().replace("-Delete", "");
            storylineDetails.outputs[1].baseDIObservations.forEach(element => {
                delete element[storageKeyFiltered]
            });

            storylineDetails.outputs[1].baseDIObservations.forEach(element => {
                delete element[storageKey]
            });

            //#endregion

            //#region ADD STORAGE REQUEST
            storylineDetails.outputs[1].baseDIObservations.push(storageDictionary);
            //#endregion

            //#region EXECUTE STORAGE OPERATION

            storylineDetails = await masterLeader_masterStoreReference.Action_1_Begin_Process();            

            // storylineDetails.outputs[1].baseDIObservations.forEach(element => {
            //     delete element[storageKey]
            // });

            storylineDetails.outputs[1].baseDIObservations = storylineDetails.outputs[1].baseDIObservations.filter((value: {}) => Object.keys(value).length !== 0);

            //console.log(storylineDetails.outputs[1].baseDIObservations)

            //#endregion

            //#region FUTURE CODE EXAMPLE

            // In case If we need to remove based on verb

            // if(CRUDVerb.toUpperCase() == "CREATE") {
            //     console.log(CRUDVerb)
            //     console.log(storylineDetails.outputs[1].baseDIObservations)

            // } else if(CRUDVerb.toUpperCase() == "READ") {
            //     console.log(CRUDVerb)
            //     console.log(storylineDetails.outputs[1].baseDIObservations)
            // }
            // else if(CRUDVerb.toUpperCase() == "UPDATE") {
            //     console.log(CRUDVerb)
            // }
            // else if(CRUDVerb.toUpperCase() == "DELETE") {
            //     console.log(CRUDVerb)
            // }

            // if (chapter.MasterStorer.CallBack)
            //     chapter.MasterStorer.CallBack();

            //#endregion

            //#endregion

            //#endregion

            //#region OUTPUT

            return storylineDetails;

            //#endregion
        }

        public static async Step_X_X_Custom_Store_ServerLocalDataToMemory_1_0(storageAction: string, storageKey: String, storageValue: any): Promise<any> {
            //#region VARIABLES

            let storedCRUDActionRead: boolean = false
            let storageResult: any = null;
            let storedObservation: any = null;
            let storedObservationFiltered: Object = {};
            let storedObservationKey: string = null;

            //#endregion

            try {
                //#region VALUES
                storedObservationKey = (Object.keys(storageValue)[0]);

                if (storedObservationKey.toString().toUpperCase().includes("-READ")) {
                    storedCRUDActionRead = true;
                }

                storedObservationKey = storedObservationKey.toString().replace("-Create", "");
                storedObservationKey = storedObservationKey.toString().replace("-Read", "");
                storedObservationKey = storedObservationKey.toString().replace("-Update", "");
                storedObservationKey = storedObservationKey.toString().replace("-Delete", "");

                if (!storedCRUDActionRead) {
                    storedObservation = JSON.parse(storageValue[(Object.keys(storageValue)[0])]);

                    storedObservationFiltered[storedObservationKey] = storedObservation?.baseDIObservations[0];
                }

                //#endregion

                //#region INPUTS

                if (localStorage) {
                    switch (storageAction.toUpperCase()) {
                        case "CREATE":
                        case "UPDATE":
                            localStorage.setItem(storageKey, JSON.stringify(storedObservationFiltered));
                            break;
                        case "DELETE":
                            localStorage.removeItem(storageKey);
                            break;
                        case "READ":
                            storageResult = localStorage.getItem(storageKey);
                            break;

                    }
                }

                //#endregion
            }
            catch (mistake) {
                throw mistake;
            }

            //#region OUTPUT

            return storageResult;

            //#endregion
        }
        //#endregion
    }
}