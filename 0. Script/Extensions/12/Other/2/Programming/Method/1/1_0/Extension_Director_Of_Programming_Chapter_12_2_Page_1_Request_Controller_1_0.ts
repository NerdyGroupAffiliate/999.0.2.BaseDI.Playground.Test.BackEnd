import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

const objectScan = require('object-scan');
var _ = require('lodash');

export namespace BaseDI.Programming.Extensions_1
{
    export class Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0
    {      
        constructor() {
            
        }        

        //#region STORE 
        public static Step_X_X_Custom_Store_JSONSettingsIntoMemory_1_0(data:object, keyName: string, keyValue: any, returnAsArray:boolean): any
        {
            let returnValue: any = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(data, keyName, keyValue, returnAsArray);

            return returnValue;
        }

        public static Step_X_X_Custom_Store_RequestRoutes_1_0(data:object): Array<string> {
            const requests: Array<string> = new Array<string>();

            const businessLogicMetaData: any = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(data, "key_1", "Request", false);

            const businessLogicList: any = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(businessLogicMetaData, "values_2_2", "", false);

            for (var i = 0; i < businessLogicList.values_2_2.length; i++) {
                const businessLogicItem = businessLogicList.values_2_2[i];

                const businessLogicItemCallStackList = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(businessLogicItem, "EventCallStackItems", "", false);

                if (businessLogicItemCallStackList.EventCallStackItems != null &&
                    businessLogicItemCallStackList.EventCallStackItems.length > 0) {
                    for (var i2 = 0; i2 < businessLogicItemCallStackList.EventCallStackItems.length; i2++) {
                        const businessLogicItemCallStackItem = businessLogicItemCallStackList.EventCallStackItems[i2];

                        if (businessLogicItemCallStackItem.Events != null &&
                            businessLogicItemCallStackItem.Events.length > 0) {

                            let functionsEnabled: boolean = false;

                            for (var i3 = 0; i3 < businessLogicItemCallStackItem.Events.length; i3++) {
                                const businessLogicItemCallStackItemEvent = businessLogicItemCallStackItem.Events[i3];

                                if (businessLogicItemCallStackItemEvent.functionsEnabled != undefined) {
                                    if (businessLogicItemCallStackItemEvent.functionsEnabled.toUpperCase() == "TRUE") {
                                        functionsEnabled = true;
                                    }
                                }
                                else {
                                    if (functionsEnabled)
                                        requests.push(businessLogicItemCallStackItemEvent);
                                }
                            }
                        }
                    }
                }
            }

            return requests;
        }
        //#endregion


    }
}
