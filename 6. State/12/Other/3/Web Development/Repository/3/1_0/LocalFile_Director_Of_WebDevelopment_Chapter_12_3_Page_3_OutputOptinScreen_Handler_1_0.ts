//#region Imports

//#region BaseDI

import * as aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0";
import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptRoutable_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptRoutable_12_2_1_0";

import * as Action_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/Action Poco/1/1_0/Action_12_2_1_0";
import * as ExtraData_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";
import * as SingleParmPoco_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

import * as Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0 from "../../../../../../../../0. Script/Extensions/11/Automate Manual Task/1/Risk Management/Method/0/1_0/Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0";

import * as Extension_Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0";
import * as Extension_Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/3/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0";

import * as Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/0/1_0/Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0";

//#endregion

//#endregion
export namespace BaseDI.Professional.State.Web_Development_3 {
    export class LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_3_OutputOptinScreen_Handler_1_0 extends aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>
    {
        //#region 1. Assign

        //SETTINGS
        private _storedProcessRequestSettings: any;

        //CLIENT/SERVER
        private _storedProcessRequestTracker: any;

        private _storedClientRequestByName: string;
        private _storedClientRequestByNameParameters: string;

        private _storedClientRequestByObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        public _storedServerInstance: any;
        private _storedServerInstanceInfo: any;

        //DATASET
        private _storedProcessRequestDataStorylineDetails: any;
        private _storedProcessRequestDataStorylineDetails_Parameters: any;

        //MISC
        private _storedProcessRequestExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0 = new ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //PLUMBING
        private _storedActionName: string = "";
        private _storedBusinessDirectorOrExperienceRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        private _storedCentralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _storedCentralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _storedCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        private _storedParameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

        private _storedRequestFileName: string = "LocalFile_Director_Of_Advertising_Chapter_1_1_Page_3_InputWhichTopicAPersonIsAwareOf_Handler_1_0 ";
        private _storedRequestName: string = "";
        private _storedRepository: IContract_Programming_Repository_12_2_1_0;
        private _storedSystemRequestByName: string;

        public StoredStartUpCallBack;

        //#endregion

        //#region 2. Ready

        constructor(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) {
            super();

            //#region 1. INPUTS

            //#region MEMORIZE control client server

            this._storedProcessRequestTracker = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE action name

            this._storedActionName = this._storedProcessRequestTracker["storedInputRequestActionName"];

            //#endregion

            //#region MEMORIZE app settings

            this._storedProcessRequestSettings = this._storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE centralized processes handlers

            this._storedCentralizedDisturber = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedDisturber");
            this._storedCentralizedSensor = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedSensor");
            this._storedCentralizedStorer = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedStorer");

            //#endregion

            //#region MEMORIZE data repository

            this._storedRepository = parameterInputs.Parameters.getValue("parameterDataRepository");

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#region MEMORIZE storyline details

            this._storedProcessRequestDataStorylineDetails = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            this._storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails_Parameters");

            //#endregion

            //#region MEMORIZE extra data

            this._storedProcessRequestExtraData = parameterInputs.Parameters.getValue("parameterExtraData") ? parameterInputs.Parameters.getValue("parameterExtraData") : null;

            //#endregion

            //#region MEMORIZE request details

            this._storedClientRequestByName = parameterInputs.Parameters.getValue("parameterInputRequestName");
            this._storedClientRequestByNameParameters = parameterInputs.Parameters.getValue("parameterInputRequestNameDataCacheKey");
            this._storedClientRequestByObject = parameterInputs.Parameters.getValue("parameterClientRequestByObject");

            this._storedRequestName = parameterInputs.Parameters.getValue("parameterSystemRequestByName");

            this._storedSystemRequestByName = parameterInputs.Parameters.getValue("parameterSystemRequestByName");

            this._storedBusinessDirectorOrExperienceRequestHandler = parameterInputs.Parameters.getValue("parameterBusinessDirectorOrExperienceRequestHandler");

            this._storedParameterInputs = parameterInputs;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process defaults

            //#region IDEAL CASE - USE defaults handler

            this.Action_1_Begin_Process = this.Action_1_Begin_Process.bind(this);
            this.Action_2_Validate_Process = this.Action_2_Validate_Process.bind(this);
            this.Action_3_Process_StoryAuthor = this.Action_3_Process_StoryAuthor.bind(this);
            this.Action_4_Process_StoryCharacters = this.Action_4_Process_StoryCharacters.bind(this);
            this.Action_5_Process_StorySetting = this.Action_5_Process_StorySetting.bind(this);
            this.Action_6_Process_StoryExperiences = this.Action_6_Process_StoryExperiences.bind(this);
            this.Action_7_Process_StoryResources = this.Action_7_Process_StoryResources.bind(this);
            this.Action_8_Process_CRUD = this.Action_8_Process_CRUD.bind(this);
            this.Action_9_Verify_Process = this.Action_9_Verify_Process.bind(this);
            this.Action_10_End_Process = this.Action_10_End_Process.bind(this);

            this.HandleDefaults = this.HandleDefaults.bind(this);

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#endregion
        }

        //#endregion

        //#region 3. Set

        public HandleDefaults(): void {
            //#region 1. INPUTS

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process defaults


            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#endregion
        }

        //#endregion

        //#region 4. Action

        //#region EXECUTE LOGIC INSTUCTIONS

        //#region A. Action Methods

        //Page 1-8
        public async Action_8_Process_CRUD(): Promise<object> {
            //#region 1. INPUTS


            //#endregion

            //#region 2. PROCESS

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            return this._storedProcessRequestDataStorylineDetails;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion

        //#region B. Action Factories

        //Page 1-8
        private async Factory_Action_8_Process_CRUD(): Promise<object> {
            //#region 1. INPUTS

            //#region DEFINE data response

            let storedOutputResponseData: any = null;

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONFIGURING web routes");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", _storedProcessRequestTracker["storedInputRequestActionName"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", _storedProcessRequestTracker);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Director_Of_Security_Chapter_12_5_Page_1_StoreAuthentication_Handler_1_0.cs");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Action -> Factory_Action_1_Begin_Process -> Factory_Action_5_Process_StorySetting");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process factory

            try {
                //#region IDEAL CASE - USE factory method

                //if (_storedActionName.ToUpper().Contains("PROCESSHTTPREQUEST_1_0"))
                //{
                //    storedOutputResponseData = await Execute_Factory_Action_8_Process_CRUD_StoreDataInCache();
                //}

                storedOutputResponseData = await this.Execute_Factory_Action_8_Process_CRUD_ControlDataInCache();

                //#endregion
            }
            catch (mistake) {
                throw mistake; //Let "Startup.ts" handle the exception.
            }

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN http response

            //#region IDEAL CASE - USE baseDI dataset

            return storedOutputResponseData;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion

        //#region C. Action Logic

        private async Execute_Factory_Action_8_Process_CRUD_ControlDataInCache(): Promise<any> {
            //#region 1. INPUTS

            //#region DEFINE data response

            let storedOutputResponseData: any = null;

            //#endregion

            //#region DEFINE parameter inputs

            let storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //#endregion

            //#region DEFINE storyline details outputs

            let storedOutPut_ObservationKey: string = "";
            let storedOutPut_ObservationKeyDelimeterValue: string = "";
            let storedOutPut_ObservationKeys: any = null;
            let storedOutPut_ObservationsIndex: number = 0;

            let storedOutPut_ObservationStorageCRUDValue: string = "";

            //#endregion

            //#region MEMORIZE action name

            let storedInputRequestActionName: string = this.ClientOrServerInstance["storedInputRequestActionName"] as string;

            //#endregion

            //#region MEMORIZE app settings

            this._storedProcessRequestSettings = this.ClientOrServerInstance["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE control client server

            this._storedProcessRequestTracker = this.ClientOrServerInstance;

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;
            let storedProcessRequestDeveloperModeParameters: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = this.ExtraData.KeyValuePairs.getValue("storedProcessRequestDeveloperLoggingInputs");
            let storedProcessRequestDeveloperModeSkipConsole: boolean = (storedProcessRequestDeveloperModeParameters?.Parameters?.getValue("parameterOPTIONALIgnoreDeveloperConsoleLog")) ? storedProcessRequestDeveloperModeParameters?.Parameters?.getValue("parameterOPTIONALIgnoreDeveloperConsoleLog") : false;
            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", this.ClientOrServerInstance["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", this.ClientOrServerInstance["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", this.ClientOrServerInstance);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "LocalFile_Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0.Page_1_10_End_Process_12_2_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Action");

            //#endregion

            //#region MEMORIZE request details

            let storedRequestName: string = this.ExtraData.KeyValuePairs.getValue("RequestToProcess");
            let storedRequestNameParameters: string = this.ExtraData.KeyValuePairs.getValue("RequestToProcessParameters");

            //#endregion

            //#region MEMORIZE server details

            let storedServer: any = this?.ClientOrServerInstance?.Server;

            //#endregion

            //#region MEMORIZE storyline details outputs

            const storedOutPut_Observations: Array<Object> = this._storedProcessRequestDataStorylineDetails.outputs[1].baseDIObservations;;
            const storedOutPut_ObservationsCount: number = this._storedProcessRequestDataStorylineDetails.outputs[1].baseDIObservations.length == 0 ? 0 : this._storedProcessRequestDataStorylineDetails.outputs[1].baseDIObservations.length;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region HANDLE storage request

            try {
                //#region IDEAL CASE - USE baseDI extension

                //#region 1. SEARCH for storage item

                if (storedOutPut_Observations) {
                    storedOutPut_Observations.map(storedOutPut_Observation => {
                        storedOutPut_ObservationKeys = Object.keys(storedOutPut_Observation);

                        storedOutPut_ObservationKeys.map(storedOutPut_ObservationKey => {
                            storedOutPut_ObservationKey = storedOutPut_ObservationKey.toString();
                            //OUTPUT EXAMPLE: storedOutPut_ObservationKey = "StorageKey_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0-Create-BaseDI_DataConverter_Mode"

                            if (storedOutPut_ObservationKey.toString().toUpperCase().includes("STORAGEKEY")) {
                                storedOutPut_ObservationKeyDelimeterValue = storedOutPut_ObservationKey.toString().split("-");

                                storedOutPut_ObservationStorageCRUDValue = storedOutPut_ObservationKeyDelimeterValue[1];
                                //OUTPUT EXAMPLE: storedOutPut_ObservationStorageCRUDValue = "Create"

                                storedOutPut_ObservationKey = storedOutPut_ObservationKey.toString().replace("-Create", "");
                                storedOutPut_ObservationKey = storedOutPut_ObservationKey.toString().replace("-Read", "");
                                storedOutPut_ObservationKey = storedOutPut_ObservationKey.toString().replace("-Update", "");
                                storedOutPut_ObservationKey = storedOutPut_ObservationKey.toString().replace("-Delete", "");
                                //OUTPUT EXAMPLE: storedOutPut_ObservationKey = "StorageKey_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0-BaseDI_DataConverter_Mode"


                                //CREATE THE PROCESS
                                const handleObservation = async (storedOutPutObservation) => {
                                    storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

                                    storedInputs.Parameters.setValue("parameterProcessRequestTracker", Object.assign(this.ClientOrServerInstance, Object));
                                    storedInputs.Parameters.setValue("parameterStorageAction", storedOutPut_ObservationStorageCRUDValue);
                                    storedInputs.Parameters.setValue("parameterStorageKey", storedOutPut_ObservationKey as string);
                                    storedInputs.Parameters.setValue("parameterStorageValue", Object.assign(storedOutPutObservation, Object));
                                    storedInputs.Parameters.setValue("parameterProcessRequestDataStorylineDetails", Object.assign(this._storedProcessRequestDataStorylineDetails, Object));

                                    storedOutputResponseData = await Extension_Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0.BaseDI.Professional.Programming.Extensions_3.Extension_Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0.Step_X_X_Framework_Store_CacheDataToPersistentStorage_1_1(storedInputs);

                                    if (storedOutPut_ObservationStorageCRUDValue.toUpperCase() == "READ") {
                                        this._storedProcessRequestDataStorylineDetails.outputs[1].baseDIObservations.push(JSON.parse(storedOutputResponseData));

                                        //#region EDGE CASE - USE developer logger

                                        if (storedProcessRequestDeveloperMode && !storedProcessRequestDeveloperModeSkipConsole && storedOutputResponseData != null) {
                                            this.ClientOrServerInstance["storedProcessRequestStepNumber"] = this.ClientOrServerInstance["storedProcessRequestStepNumber"] + 1;

                                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "SUCCESSFULLY retrieved cached key ***" + storedOutPut_ObservationKey + "***");
                                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Logging"); //Values = Logging or Mistake
                                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", this.ClientOrServerInstance["storedProcessRequestStepNumber"]);

                                            Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                                        }

                                        //#endregion
                                    }
                                    else {
                                        //#region EDGE CASE - USE developer logger

                                        if (storedProcessRequestDeveloperMode && !storedProcessRequestDeveloperModeSkipConsole) {
                                            this.ClientOrServerInstance["storedProcessRequestStepNumber"] = this.ClientOrServerInstance["storedProcessRequestStepNumber"] + 1;

                                            if (storedOutPut_ObservationStorageCRUDValue.toUpperCase() == "CREATE") {
                                                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "SUCCESSFULLY created cached key ***" + storedOutPut_ObservationKey + "***");
                                            }

                                            if (storedOutPut_ObservationStorageCRUDValue.toUpperCase() == "DELETE") {
                                                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "SUCCESSFULLY deleted cached key " + storedOutPut_ObservationKey);
                                            }

                                            if (storedOutPut_ObservationStorageCRUDValue.toUpperCase() == "UPDATE") {
                                                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "SUCCESSFULLY updated cached key " + storedOutPut_ObservationKey);
                                            }

                                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Logging"); //Values = Logging or Mistake
                                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", this.ClientOrServerInstance["storedProcessRequestStepNumber"]);
                                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALAccountingCostType", "STORAGE"); //Values = Logging or Mistake

                                            Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
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
            catch (mistake) {
                //#region EDGE CASE - USE developer logger
                if (storedProcessRequestDeveloperMode) {
                    this._storedProcessRequestTracker["storedProcessRequestStepNumber"] = this._storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED handling storage request");
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", this._storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                    Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                }
                //#endregion

                //#region EDGE CASE - USE exception handler

                throw mistake;

                //#endregion
            }

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            return this._storedProcessRequestDataStorylineDetails;

            //#endregion
        }

        //#endregion

        //#endregion

        //#region NOT APART OF THE REQUEST PIPELINE AT THIS TIME

        //#region A. Action Methods

        //Page 1-1
        public async Action_1_Begin_Process(): Promise<object> {
            //#region 1. INPUTS


            //#endregion

            //#region 2. PROCESS

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            return this._storedProcessRequestDataStorylineDetails;

            //#endregion

            //#endregion

            //#endregion
        }

        //Page 1-2
        public async Action_2_Validate_Process(): Promise<object> {
            //#region 1. INPUTS


            //#endregion

            //#region 2. PROCESS

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            return this._storedProcessRequestDataStorylineDetails;

            //#endregion

            //#endregion

            //#endregion
        }

        //Page 1-3
        public async Action_3_Process_StoryAuthor(): Promise<object> {
            //#region 1. INPUTS


            //#endregion

            //#region 2. PROCESS

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            return this._storedProcessRequestDataStorylineDetails;

            //#endregion

            //#endregion

            //#endregion
        }

        //Page 1-4
        public async Action_4_Process_StoryCharacters(): Promise<object> {
            //#region 1. INPUTS


            //#endregion

            //#region 2. PROCESS

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            return this._storedProcessRequestDataStorylineDetails;

            //#endregion

            //#endregion

            //#endregion
        }

        //Page 1-5
        public async Action_5_Process_StorySetting(): Promise<object> {
            //#region 1. INPUTS


            //#endregion

            //#region 2. PROCESS

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            return this._storedProcessRequestDataStorylineDetails;

            //#endregion

            //#endregion

            //#endregion
        }

        //Page 1-6
        public async Action_6_Process_StoryExperiences(): Promise<object> {
            //#region 1. INPUTS


            //#endregion

            //#region 2. PROCESS

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            return this._storedProcessRequestDataStorylineDetails;

            //#endregion

            //#endregion

            //#endregion
        }

        //Page 1-7
        public async Action_7_Process_StoryResources(): Promise<object> {
            //#region 1. INPUTS


            //#endregion

            //#region 2. PROCESS

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            return this._storedProcessRequestDataStorylineDetails;

            //#endregion

            //#endregion

            //#endregion
        }

        //Page 1-9
        public async Action_9_Verify_Process(): Promise<object> {
            //#region 1. INPUTS

            //#region DEFINE data response

            let storedOutputResponseData: any = null;

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONFIGURING web routes");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", _storedProcessRequestTracker["storedInputRequestActionName"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", _storedProcessRequestTracker);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Director_Of_Security_Chapter_12_5_Page_1_StoreAuthentication_Handler_1_0 .cs");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Action -> Action_5_Process_StorySetting");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try {
                storedOutputResponseData = await this.Factory_Action_9_Verify_Process();
            }
            catch (mistake) {
                throw mistake; //Let "Startup.ts" handle the exception.
            }

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN http response

            //#region IDEAL CASE - USE baseDI dataset

            return storedOutputResponseData;

            //#endregion

            //#endregion

            //#endregion
        }

        //Page 1-10
        public async Action_10_End_Process(): Promise<object> {
            //#region 1. INPUTS

            //#region DEFINE data response

            let storedOutputResponseData: any = null;

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONFIGURING web routes");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", _storedProcessRequestTracker["storedInputRequestActionName"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", _storedProcessRequestTracker);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Director_Of_Security_Chapter_12_5_Page_1_StoreAuthentication_Handler_1_0.cs");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Action -> Action_10_End_Process");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try {
                storedOutputResponseData = this.StorylineDetails; //await this.Factory_Action_10_End_Process();
            }
            catch (mistake) {
                throw mistake; //Let "Startup.ts" handle the exception.
            }

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN http response

            //#region IDEAL CASE - USE baseDI dataset

            return storedOutputResponseData;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion

        //#region B. Action Factories

        //Page 1-1
        private async Factory_Action_1_Begin_Process(): Promise<object> {
            switch (this._storedActionName.toUpperCase()) {
                default:
                    return null;
            }
        }

        //Page 1-2
        private async Factory_Action_2_Validate_Process(): Promise<object> {
            switch (this._storedActionName.toUpperCase()) {
                default:
                    return null;
            }
        }

        //Page 1-3
        private async Factory_Action_3_Process_StoryAuthor(): Promise<object> {
            switch (this._storedActionName.toUpperCase()) {
                default:
                    return null;
            }
        }

        //Page 1-4
        private async Factory_Action_4_Process_StoryCharacters(): Promise<object> {
            switch (this._storedActionName.toUpperCase()) {
                default:
                    return null;
            }
        }

        //Page 1-5
        private async Factory_Action_5_Process_StorySetting(): Promise<object> {
            switch (this._storedActionName.toUpperCase()) {
                default:
                    return null;
            }
        }

        //Page 1-6
        private async Factory_Action_6_Process_StoryExperiences(): Promise<object> {
            switch (this._storedActionName.toUpperCase()) {
                default:
                    return null;
            }
        }

        //Page 1-7
        private async Factory_Action_7_Process_StoryResources(): Promise<object> {
            switch (this._storedActionName.toUpperCase()) {
                default:
                    return null;
            }
        }

        //Page 1-9
        private async Factory_Action_9_Verify_Process(): Promise<object> {
            //#region 1. INPUTS

            //#region DEFINE data response

            let storedOutputResponseData: any = null;

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONFIGURING web routes");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", _storedProcessRequestTracker["storedInputRequestActionName"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", _storedProcessRequestTracker);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Director_Of_Security_Chapter_12_5_Page_1_StoreAuthentication_Handler_1_0.cs");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Action -> Factory_Action_1_Begin_Process -> Factory_Action_5_Process_StorySetting");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process factory

            try {
                //#region IDEAL CASE - USE factory method

                //if (_storedActionName.ToUpper().Contains("PROCESSHTTPREQUEST_1_0"))
                //{
                //    storedOutputResponseData = await Execute_Factory_Action_9_Verify_Process_OutputApiToken();
                //}

                //#endregion
            }
            catch (mistake) {
                throw mistake; //Let "Startup.ts" handle the exception.
            }

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN http response

            //#region IDEAL CASE - USE baseDI dataset

            return storedOutputResponseData;

            //#endregion

            //#endregion

            //#endregion
        }

        //Page 1-10
        private async Factory_Action_10_End_Process(): Promise<object> {
            //#region 1. INPUTS

            //#region DEFINE data response

            let storedOutputResponseData: any = null;

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONFIGURING web routes");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", _storedProcessRequestTracker["storedInputRequestActionName"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", _storedProcessRequestTracker);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Director_Of_Security_Chapter_12_5_Page_1_StoreAuthentication_Handler_1_0.cs");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Action -> Factory_Action_10_End_Process -> Factory_Action_5_Process_StorySetting");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process factory

            try {
                //#region IDEAL CASE - USE factory method

                //if (_storedActionName.ToUpper().Contains("PROCESSHTTPREQUEST_1_0"))
                //{
                //    storedOutputResponseData = await Execute_Factory_Action_1_Begin_Process_StoreInputDataInMemory();
                //}

                storedOutputResponseData = this.StorylineDetails; //await this.Execute_Factory_Action_10_End_Process_TransportRequestToHandler();

                //#endregion
            }
            catch (mistake) {
                throw mistake; //Let "Startup.ts" handle the exception.
            }

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN http response

            //#region IDEAL CASE - USE baseDI dataset

            return storedOutputResponseData;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion

        //#region C. Action Logic

        //#endregion

        //#endregion

        //#endregion
    }
}