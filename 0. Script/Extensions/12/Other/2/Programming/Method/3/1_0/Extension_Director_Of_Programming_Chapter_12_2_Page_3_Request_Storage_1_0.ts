if (process.env.APP_ENV == "SERVER") {
    var objectScan = require('copyfiles');
    var fs = require('fs');
    var path = require('path');
}

import { resolve } from "dns";
import * as aClass_Programming_ScriptPage_12_2_1_0 from "../../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptPage_12_2_1_0";
import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0"

export namespace BaseDI.BackEnd.Programming.Extensions_3 {
    export class Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0 {
        constructor() {

        }

        //#region STORE 
        public static async Step_X_X_Custom_Control_LocalDataToServerMemory_1_0(chapter: aClass_Programming_ScriptPage_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptPage_12_2_1_0, CRUDVerb: string, entryPointName: string, pageName: string, description: string, storylineDetails: any, data: any): Promise<any> {
            //#region DESCRIBE THE MEMORIES

            let observationItem: String = "";

            const observationPresentationTemplateItem: string = "";
            const observationBusinessTemplateItem: string = "{}";
            const observationServiceTemplateItem: string = "{}";
            const observationSecurityTemplateItem: string = "{}";
            const observationDataTemplateItem: string = '{ "dataResult": "{dataResult}" }';

            let outputResult: any = null;

            let storageDictionary: Object = {};

            let storageKey: any = "StorageKey_" + entryPointName + "-" + CRUDVerb;
            let storedPromise: Promise<object> = null;
            let storageVariables: any = null;

            //#endregion

            //#region RECALL THE MEMORIES
            storageDictionary[storageKey] = {};

            if (data) {
                observationItem = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Create_An_ObservationJsonNode_1_0(entryPointName, pageName, description, observationPresentationTemplateItem, observationBusinessTemplateItem, observationServiceTemplateItem, observationSecurityTemplateItem, observationDataTemplateItem);
                observationItem = observationItem.replace('{dataResult}', escape(JSON.stringify(data)));

                storageDictionary[storageKey] = observationItem.toString();
            }

            //#endregion

            //#region EXECUTE THE VISION

            //#region OUTPUT

            storylineDetails.outputs[1].baseDIObservations.push(storageDictionary);

            //const payload: string = unescape(this.StorylineDetails?.outputs[1].baseDIObservations[0].baseDIObservations[0].observation.metadata[3].item.data[0].dataResult);

            //console.log(JSON.parse(JSON.parse(payload).payload).access_token);

            //TEST ACCESS TOKEN OUTPUT

            storylineDetails = await chapter.MasterStorer.Action_1_Begin_Process();
            

            storylineDetails.outputs[1].baseDIObservations.forEach(element => {
                delete element[storageKey]
            });

            storylineDetails.outputs[1].baseDIObservations = storylineDetails.outputs[1].baseDIObservations.filter((value: {}) => Object.keys(value).length !== 0);

            console.log(storylineDetails.outputs[1].baseDIObservations)

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

            //#region REPORT THE FEEDBACK

            return storylineDetails;

            //#endregion
        }
        //#endregion
    }
}