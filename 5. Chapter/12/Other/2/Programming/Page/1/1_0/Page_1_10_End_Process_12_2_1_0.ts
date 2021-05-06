//#region Imports

//#region BaseDI

import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptPage_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptPage_12_2_1_0";
import * as aClass_Programming_ScriptRoutable_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptRoutable_12_2_1_0";

import * as Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0 from "../../../../../../../../7. Director/12/Other/2/Programming/Director/1/1_0/Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0";

import * as Extension_Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0";
import * as Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/0/1_0/Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0";
import * as Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0 from "../../../../../../../../0. Script/Extensions/11/Automate Manual Task/1/Risk Management/Method/0/1_0/Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0";

import * as ExtraData_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";

import * as Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0 from "../../../../../../../../1. Storyline/12/Other/2/Programming/Studio/0/1_0/Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0";

import * as SingleParmPoco_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

//#endregion

//#endregion

export namespace BaseDI.Professional.Chapter.Page.Programming_1 {
    export class Page_1_10_End_Process_12_2_1_0 extends aClass_Programming_ScriptPage_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptPage_12_2_1_0
    {
        //#region 1. Assign

        //SETTINGS
        private _storedProcessRequestSettings: any;

        //CLIENT/SERVER
        private _storedProcessRequestTracker: any;

        private _storedInputRequestName: string;
        private _storedInputRequestNameParameters: string;

        private _storedProcessRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        public _storedServerInstance: any;
        private _storedServerInstanceInfo: any;

        //DATASET
        private _storedProcessRequestDataStorylineDetails: object = new Object();
        private _storedProcessRequestDataStorylineDetails_Parameters: object = new Object();

        //MISC
        private _storedProcessRequestExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0 = new ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //PLUMBING
        private _storedActionName: string = "";
        private _storedBusinessDirectorOrExperienceRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        private _storedCentralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _storedCentralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _storedCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        private _storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

        private _storedRequestFileName: string = "LocalFile_Director_Of_Advertising_Chapter_1_1_Page_1_InputAdvertisement_Handler_1_0 ";
        private _storedProcessRequestName: string = "";
        private _storedRepository: IContract_Programming_Repository_12_2_1_0;
        private _storedProcessRequestByName: string;

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

            this._storedProcessRequestExtraData = parameterInputs.Parameters.getValue("parameterProcessRequestExtraData") ? parameterInputs.Parameters.getValue("parameterProcessRequestExtraData") : null;

            //#endregion

            //#region MEMORIZE request details

            this._storedInputRequestName = parameterInputs.Parameters.getValue("parameterInputRequestName");
            this._storedInputRequestNameParameters = parameterInputs.Parameters.getValue("parameterInputRequestNameDataCacheKey");
            this._storedProcessRequestHandler = parameterInputs.Parameters.getValue("parameterProcessRequestHandler");

            this._storedProcessRequestName = parameterInputs.Parameters.getValue("parameterProcessRequestByName");

            this._storedProcessRequestByName = parameterInputs.Parameters.getValue("parameterProcessRequestByName");

            this._storedBusinessDirectorOrExperienceRequestHandler = parameterInputs.Parameters.getValue("parameterBusinessDirectorOrExperienceRequestHandler");

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
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", this.ClientOrServerInstance["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", this.ClientOrServerInstance["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", this.ClientOrServerInstance);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0.Page_1_10_End_Process_12_2_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Action");   


            //#endregion

            //#region MEMORIZE request details

            let storedRequestName: string = this.ExtraData.KeyValuePairs.getValue("RequestToProcess");
            let storedRequestNameParameters: string = this.ExtraData.KeyValuePairs.getValue("RequestToProcessParameters");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE request handler

            const ResolveOrExecuteRequest = async (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) => {
                if (this.DirectorOrExperienceRequestHandler != null && !this.DirectorOrExperienceRequestHandler.RequestID.toUpperCase().includes("REQUEST_CONTROLLER_")) {
                    try
                    {
                        //#region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode) {
                            this.ClientOrServerInstance["storedProcessRequestStepNumber"] = this.ClientOrServerInstance["storedProcessRequestStepNumber"] + 1;

                            parameterInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "EXECUTING request handler");
                            parameterInputs.Parameters.setValue("parameterOutputResponseMessageType", "Logging"); //Values = Logging or Mistake
                            parameterInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", this.ClientOrServerInstance["storedProcessRequestStepNumber"]);

                            Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(parameterInputs);
                        }

                        //#endregion

                        //#region EDGE CASE - USE request executor

                        return this.DirectorOrExperienceRequestHandler.Action().then(storedDataSet => {
                            return storedDataSet;
                        })

                        //#endregion
                    }
                    catch (storedProcessRequestMistake)
                    {
                        //#region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode) {
                            this.ClientOrServerInstance["storedProcessRequestStepNumber"] = this.ClientOrServerInstance["storedProcessRequestStepNumber"] + 1;

                            parameterInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED executing request");
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
                else
                {
                    try
                    {
                        //#region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode)
                        {
                            this.ClientOrServerInstance["storedProcessRequestStepNumber"] = this.ClientOrServerInstance["storedProcessRequestStepNumber"] + 1;

                            parameterInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "RESOLVING request handler");
                            parameterInputs.Parameters.setValue("parameterOutputResponseMessageType", "Logging"); //Values = Logging or Mistake
                            parameterInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", this.ClientOrServerInstance["storedProcessRequestStepNumber"]);

                            Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(parameterInputs);
                        }

                        //#endregion

                        //#region IDEAL CASE - USE request resolver

                        return storedOutputResponseData = new Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.BaseDI.Professional.Story.Programming_0.Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0.BaseDI.Professional.Director.Programming_1.Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0(this._storedInputs))
                            .SetupStoryline(this._storedInputs)
                            .Action().then(storedDataSet => {
                                return storedDataSet;
                            });

                        //#endregion
                    }
                    catch (storedProcessRequestMistake)
                    {
                        //#region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode) {
                            this.ClientOrServerInstance["storedProcessRequestStepNumber"] = this.ClientOrServerInstance["storedProcessRequestStepNumber"] + 1;

                            parameterInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED resolving request");
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
            }

            storedOutputResponseData = await ResolveOrExecuteRequest(storedProcessRequestDeveloperLoggingInputs); 

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            return storedOutputResponseData;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion
    }
}