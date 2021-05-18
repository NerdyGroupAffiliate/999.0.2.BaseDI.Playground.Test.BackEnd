//#region Imports

//#region BaseDI

import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptPage_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptPage_12_2_1_0";
import * as aClass_Programming_ScriptRoutable_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptRoutable_12_2_1_0";

import * as Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0 from "../../../../../../../../0. Script/Extensions/11/Automate Manual Task/1/Risk Management/Method/0/1_0/Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0";
import * as ExtraData_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";
import * as Extension_Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0";

import * as SingleParmPoco_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

//#endregion

//#endregion

export namespace BaseDI.Professional.Chapter.Page.Programming_3 {
    export class Page_3_8_Process_CRUD_12_2_1_0 extends aClass_Programming_ScriptPage_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptPage_12_2_1_0 {
        //#region 1. Assign

        //SETTINGS
        private _storedProcessRequestSettings: any;

        //CLIENT/SERVER
        private _storedProcessRequestTracker: any;

        private _storedInputRequestName: string;
        private _storedInputRequestNameDataCacheKey: string;

        private _storedProcessRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        public _storedProcessRequestServerInstance: any;
        private _storedProcessRequestServerInstanceInfo: any;

        //DATASET
        private _storedProcessRequestDataStorylineDetails: object = new Object();
        private _storedProcessRequestDataStorylineDetails_Parameters: object = new Object();

        //MISC
        private _storedProcessRequestExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0 = new ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //PLUMBING
        private _storedInputRequestActionName: string = "";
        private _storedProcessRequestRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        private _storedProcessRequestCentralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _storedProcessRequestCentralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _storedProcessRequestCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        private _storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

        private _storedProcessRequestFileName: string = "LocalFile_Director_Of_Advertising_Chapter_1_1_Page_1_InputAdvertisement_Handler_1_0 ";
        private _storedProcessRequestName: string = "";
        private _storedProcessRequestDataRepository: IContract_Programming_Repository_12_2_1_0;
        private _storedProcessRequestByName: string;

        public StartUpCallBack;

        //#endregion

        //#region 2. Ready

        constructor(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) {
            super();

            //#region 1. INPUTS

            //#region MEMORIZE control client server

            this._storedProcessRequestTracker = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE action name

            this._storedInputRequestActionName = this._storedInputs.Parameters.getValue("parameterInputRequestActionName");

            //#endregion

            //#region MEMORIZE app settings

            this._storedProcessRequestSettings = this._storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE centralized processes handlers

            this._storedProcessRequestCentralizedDisturber = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedDisturber");
            this._storedProcessRequestCentralizedSensor = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedSensor");
            this._storedProcessRequestCentralizedStorer = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedStorer");

            //#endregion

            //#region MEMORIZE data repository

            this._storedProcessRequestDataRepository = parameterInputs.Parameters.getValue("parameterProcessRequestDataRepository");

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#region MEMORIZE storyline details

            this._storedProcessRequestDataStorylineDetails = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            this._storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails_Parameters");

            //#endregion

            //#region MEMORIZE extra data

            this._storedProcessRequestExtraData = parameterInputs.Parameters.getValue("parameterProcessRequestExtraData") ? parameterInputs.Parameters.getValue("parameterProcessRequestExtraData") : null;

            //#endregion

            //#region MEMORIZE request details

            this._storedInputRequestName = parameterInputs.Parameters.getValue("parameterInputRequestName");
            this._storedInputRequestNameDataCacheKey = parameterInputs.Parameters.getValue("parameterInputRequestNameDataCacheKey");
            this._storedProcessRequestHandler = parameterInputs.Parameters.getValue("parameterProcessRequestHandler");

            this._storedProcessRequestName = parameterInputs.Parameters.getValue("parameterProcessRequestName");

            this._storedProcessRequestByName = parameterInputs.Parameters.getValue("parameterProcessRequestName");

            this._storedProcessRequestRequestHandler = parameterInputs.Parameters.getValue("parameterBusinessDirectorOrExperienceRequestHandler");

            this._storedInputs = parameterInputs;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process defaults

            //#region IDEAL CASE - USE defaults handler

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
        public async Action(): Promise<object>
        {
            //#region 1. INPUTS

            //#region DEFINE data response

            let storedOutputResponseData: any = null;

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

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", this._storedInputs.Parameters.getValue("parameterInputRequestActionName"));
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0.Page_3_8_Process_CRUD_12_2_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Action");

            //#endregion

            //#region MEMORIZE request details

            let storedInputRequestName: string = this.ExtraData.KeyValuePairs.getValue("RequestToProcess");
            let storedInputRequestNameDataCacheKey: string = this.ExtraData.KeyValuePairs.getValue("RequestToProcessParameters");

            //#endregion

            //#region MEMORIZE repository clientOrServer instance
            this.Repository.ClientOrServerInstance = this._storedProcessRequestTracker;

            //#endregion

            //#region MEMORIZE repository extra data

            this.Repository.ExtraData = this.ExtraData;

            //#endregion

            //#region MEMORIZE repository centralized processes

            this.Repository.MasterStorer = this.MasterStorer;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE storage request

            const ExecuteStorageRequest = async (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) =>
            {
                try
                {
                    //#region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode) {
                        this.ClientOrServerInstance["storedProcessRequestStepNumber"] = this.ClientOrServerInstance["storedProcessRequestStepNumber"] + 1;

                        parameterInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "STARTING storage request");
                        parameterInputs.Parameters.setValue("parameterOutputResponseMessageType", "Logging"); //Values = Logging or Mistake
                        parameterInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", this.ClientOrServerInstance["storedProcessRequestStepNumber"]);

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(parameterInputs);
                    }

                    //#endregion

                    //#region EDGE CASE - USE storage repository

                    this.Repository.Action_8_Process_CRUD().then(storedDataSet => {
                        this.StorylineDetails = storedDataSet;

                        return;
                    })

                    //#endregion
                }
                catch (storedProcessRequestMistake)
                {
                    //#region EDGE CASE - USE developer logger
                    if (storedProcessRequestDeveloperMode) {
                        this.ClientOrServerInstance["storedProcessRequestStepNumber"] = this.ClientOrServerInstance["storedProcessRequestStepNumber"] + 1;

                        parameterInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED caching data");
                        parameterInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                        parameterInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", this.ClientOrServerInstance["storedProcessRequestStepNumber"]);

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(parameterInputs);
                    }
                    //#endregion

                    //#region EDGE CASE - USE exception handler

                    throw storedProcessRequestMistake;

                    //#endregion
                }
            }

            storedOutputResponseData = await ExecuteStorageRequest(storedProcessRequestDeveloperLoggingInputs); 

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            return await this.StorylineDetails;

            //#endregion

            //#endregion

            //#endregion
        }
        //#endregion
    }
}