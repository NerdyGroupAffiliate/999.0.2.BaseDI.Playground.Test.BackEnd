//#region Imports

//#region BaseDI

import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";

import * as Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0 from "../../../../../../../../0. Script/Extensions/11/Automate Manual Task/1/Risk Management/Method/0/1_0/Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0";

import * as Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/3/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0";
import * as Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";

import * as Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/3/Web Development/Method/13/1_0/Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0";

import * as SingleParmPoco_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

//#endregion

//#endregion

export namespace BaseDI.Professional.State.Programming_3 {
    export class LocalFile_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0 extends aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<any>
    {
        //#region 1. Assign

        //SETTINGS
        private _storedAppSettings: any;

        //CLIENT/SERVER
        private _storedClientOrServerInstance: any;

         //DATASETS
        private _storedStorylineDetails: any;

        //#endregion

        //#region 2. Ready
        constructor(parameterStorylineDetails: object) {
            super();

            //#region 1. INPUTS

            //#region MEMORIZE storyline details

            this._storedStorylineDetails = parameterStorylineDetails;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process defaults

            //#region IDEAL CASE - USE defaults handler


            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#endregion
        }
        //#endregion

        //#region 3. Set

        //A. Default state
        public HandleDefaults(): void {
            //#region 1. INPUTS


            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process defaults

            //#region IDEAL CASE - defaults handler


            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#endregion
        }

        //#endregion

        //#region 4. Action

        //#region EXECUTE LOGIC INSTUCTIONS

        public async Action_8_Process_CRUD(): Promise<any>
        {
            //#region 1. INPUTS

            //#region DEFINE data response

            let storedDataResponse: any = null;

            //#endregion

            //#region DEFINE parameter inputs

            let storedParameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //#endregion

            //#region DEFINE storyline details outputs

            let storedOutPut_ObservationKey: string = "";
            let storedOutPut_ObservationKeyDelimeterValue: string = "";
            let storedOutPut_ObservationKeys: any = null;
            let storedOutPut_ObservationsIndex: number = 0;

            let storedOutPut_ObservationStorageCRUDValue: string = "";
       
            //#endregion

            //#region MEMORIZE action name

            let storedActionName: string = this.ClientOrServerInstance["actionName"] as string;

            //#endregion

            //#region MEMORIZE app settings

            this._storedAppSettings = this.ClientOrServerInstance["appSettings"];

            //#endregion

            //#region MEMORIZE clientOrServer instance

            this._storedClientOrServerInstance = this.ClientOrServerInstance;

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;
            let storedDeveloperModeParameters: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = this.ExtraData.KeyValuePairs.getValue("storedDeveloperLoggingInputs");
            let storedDeveloperModeSkipConsole: boolean = (storedDeveloperModeParameters?.Parameters?.getValue("parameterOPTIONALIgnoreDeveloperConsoleLog")) ? storedDeveloperModeParameters?.Parameters?.getValue("parameterOPTIONALIgnoreDeveloperConsoleLog") : false;
            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", this.ClientOrServerInstance["actionName"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", this.ClientOrServerInstance["appSettings"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", this.ClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0.Page_1_10_End_Process_12_2_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Action");

            //#endregion

            //#region MEMORIZE request details

            let storedRequestName: string = this.ExtraData.KeyValuePairs.getValue("RequestToProcess");
            let storedRequestNameParameters: string = this.ExtraData.KeyValuePairs.getValue("RequestToProcessParameters");

            //#endregion

            //#region MEMORIZE server details

            let storedServer:any = this?.ClientOrServerInstance?.Server;

            //#endregion

            //#region MEMORIZE storyline details outputs

            const storedOutPut_Observations: Array<Object> = this._storedStorylineDetails.outputs[1].baseDIObservations;;
            const storedOutPut_ObservationsCount: number = this._storedStorylineDetails.outputs[1].baseDIObservations.length == 0 ? 0 : this._storedStorylineDetails.outputs[1].baseDIObservations.length;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region HANDLE storage request

            try
            {
                //#region IDEAL CASE - USE baseDI extension

                //#region 1. SEARCH for storage item

                if (storedOutPut_Observations)
                {
                    storedOutPut_Observations.map(storedOutPut_Observation => {
                        storedOutPut_ObservationKeys = Object.keys(storedOutPut_Observation);

                        storedOutPut_ObservationKeys.map(storedOutPut_ObservationKey =>
                        {                            
                            storedOutPut_ObservationKey = storedOutPut_ObservationKey.toString(); 
                            //OUTPUT EXAMPLE: storedOutPut_ObservationKey = "StorageKey_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0-Create-BaseDI_DataConverter_Mode"

                            if (storedOutPut_ObservationKey.toString().toUpperCase().includes("STORAGEKEY"))
                            {
                                storedOutPut_ObservationKeyDelimeterValue = storedOutPut_ObservationKey.toString().split("-");

                                storedOutPut_ObservationStorageCRUDValue = storedOutPut_ObservationKeyDelimeterValue[1];
                                //OUTPUT EXAMPLE: storedOutPut_ObservationStorageCRUDValue = "Create"

                                storedOutPut_ObservationKey = storedOutPut_ObservationKey.toString().replace("-Create", "");
                                storedOutPut_ObservationKey = storedOutPut_ObservationKey.toString().replace("-Read", "");
                                storedOutPut_ObservationKey = storedOutPut_ObservationKey.toString().replace("-Update", "");
                                storedOutPut_ObservationKey = storedOutPut_ObservationKey.toString().replace("-Delete", "");
                                //OUTPUT EXAMPLE: storedOutPut_ObservationKey = "StorageKey_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0-BaseDI_DataConverter_Mode"
                                                              

                                //CREATE THE PROCESS
                                const handleObservation = async (storedOutPutObservation) => {
                                    storedParameterInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

                                    storedParameterInputs.Parameters.setValue("parameterClientOrServerInstance", Object.assign(this.ClientOrServerInstance, Object));
                                    storedParameterInputs.Parameters.setValue("parameterStorageAction", storedOutPut_ObservationStorageCRUDValue);
                                    storedParameterInputs.Parameters.setValue("parameterStorageKey", storedOutPut_ObservationKey as string);
                                    storedParameterInputs.Parameters.setValue("parameterStorageValue", Object.assign(storedOutPutObservation, Object));
                                    storedParameterInputs.Parameters.setValue("parameterStorylineDetails", Object.assign(this._storedStorylineDetails, Object));

                                    storedDataResponse = await Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.BaseDI.Professional.Programming.Extensions_3.Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.Step_X_X_Custom_Store_ServerLocalDataToMemory_1_0(storedParameterInputs);

                                    if (storedOutPut_ObservationStorageCRUDValue.toUpperCase() == "READ")
                                    {
                                        this._storedStorylineDetails.outputs[1].baseDIObservations.push(JSON.parse(storedDataResponse));

                                        //#region EDGE CASE - USE developer logger

                                        if (storedDeveloperMode && !storedDeveloperModeSkipConsole && storedDataResponse != null) {
                                            this.ClientOrServerInstance["processStepNumber"] = this.ClientOrServerInstance["processStepNumber"] + 1;

                                            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "SUCCESSFULLY retrieved cached key ***" + storedOutPut_ObservationKey + "***");
                                            storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Logging"); //Values = Logging or Mistake
                                            storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", this.ClientOrServerInstance["processStepNumber"]);

                                            Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Custom_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                                        }

                                        //#endregion
                                    }
                                    else
                                    {
                                        //#region EDGE CASE - USE developer logger

                                        if (storedDeveloperMode && !storedDeveloperModeSkipConsole) {
                                            this.ClientOrServerInstance["processStepNumber"] = this.ClientOrServerInstance["processStepNumber"] + 1;

                                            if (storedOutPut_ObservationStorageCRUDValue.toUpperCase() == "CREATE") {
                                                storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "SUCCESSFULLY created cached key ***" + storedOutPut_ObservationKey + "***");
                                            }

                                            if (storedOutPut_ObservationStorageCRUDValue.toUpperCase() == "DELETE") {
                                                storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "SUCCESSFULLY deleted cached key " + storedOutPut_ObservationKey);
                                            }

                                            if (storedOutPut_ObservationStorageCRUDValue.toUpperCase() == "UPDATE") {
                                                storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "SUCCESSFULLY updated cached key " + storedOutPut_ObservationKey);
                                            }

                                            storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Logging"); //Values = Logging or Mistake
                                            storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", this.ClientOrServerInstance["processStepNumber"]);
                                            storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALAccountingCostType", "STORAGE"); //Values = Logging or Mistake

                                            Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Custom_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                                        }

                                        //#endregion
                                    }
                                }
                                //START THE PROCESS
                                handleObservation(storedOutPut_Observation);
                            }

                            storedOutPut_ObservationsIndex += 1;
                        })
                    });
                }

                //#endregion

                //#endregion
            }
            catch (mistake)
            {
                //#region EDGE CASE - USE developer logger
                if (storedDeveloperMode) {
                    this._storedClientOrServerInstance["processStepNumber"] = this._storedClientOrServerInstance["processStepNumber"] + 1;

                    storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "FAILED handling storage request");
                    storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                    storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", this._storedClientOrServerInstance["processStepNumber"]);

                    Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Custom_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                }
                //#endregion

                //#region EDGE CASE - USE exception handler

                throw mistake;

                //#endregion
            }

            //#endregion


            //#endregion

            //#region 3. OUTPUT

            return this._storedStorylineDetails;

            //#endregion
        }

        //#endregion

        //#region NOT APART OF THE REQUEST PIPELINE AT THIS TIME

        public async Action_1_Begin_Process(): Promise<any> {
            return this._storedStorylineDetails;
        }

        public async Action_2_Validate_Process(): Promise<any> {
            return this._storedStorylineDetails;
        }

        public async Action_3_Process_StoryAuthor(): Promise<any> {
            return this._storedStorylineDetails;
        }

        public async Action_4_Process_StoryCharacters(): Promise<any> {
            return this._storedStorylineDetails;
        }

        public async Action_5_Process_StorySetting(): Promise<any> {
            return this._storedStorylineDetails;
        }

        public async Action_6_Process_StoryExperiences(): Promise<any> {
            return this._storedStorylineDetails;
        }

        public async Action_7_Process_StoryResources(): Promise<any> {
            return this._storedStorylineDetails;
        }

        public async Action_9_Verify_Process(): Promise<any> {
            return this._storedStorylineDetails;
        }

        public async Action_10_End_Process(): Promise<any> {
            return this._storedStorylineDetails;
        }

        //#endregion

        //#endregion
    }
}