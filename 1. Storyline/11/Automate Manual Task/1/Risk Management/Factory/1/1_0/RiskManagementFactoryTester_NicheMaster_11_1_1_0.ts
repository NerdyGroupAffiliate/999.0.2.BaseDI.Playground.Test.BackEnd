//#region Imports

//#region BaseDI

//0. SCRIPT - ABSTRACT, BASE & INTERFACE CLASSES
import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0"
import * as aClass_Programming_ScriptNicheMaster_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptNicheMaster_12_2_1_0"
import * as aClass_Programming_ScriptRoutable_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptRoutable_12_2_1_0";

import * as ExtraData_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";

import * as Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0 from "../../../../../../../../0. Script/Extensions/11/Automate Manual Task/1/Risk Management/Method/0/1_0/Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0";
import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

import * as SingleParmPoco_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

//1. STORYLINE - CORE FEATURES
import * as Implement_DesignPattern_Factory_Master_12_2_1_0 from "../../../../../../../../1. Storyline/12/Other/2/Programming/Studio/1/1_0/ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

//4. EXPERIENCES - SHARED FEATURES

//6. STATE - LOCAL REPOSITORIES

import * as LocalFile_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "../../../../../../../../6. State/12/Other/2/Programming/Repository/1/1_0/LocalFile_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";
import * as LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0 from "../../../../../../../../6. State/12/Other/2/Programming/Repository/2/1_0/LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0";
import * as LocalFile_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0 from "../../../../../../../../6. State/12/Other/2/Programming/Repository/3/1_0/LocalFile_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0";
import * as LocalFile_Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0 from "../../../../../../../../6. State/12/Other/2/Programming/Repository/4/1_0/LocalFile_Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0";
import * as LocalFile_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0 from "../../../../../../../../6. State/12/Other/2/Programming/Repository/5/1_0/LocalFile_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0";

import * as LocalFile_Experience_The_Movement_OfTheAssets_Content_12_2_1_0 from "../../../../../../../../6. State/12/Other/2/Programming/Repository/6/1_0/LocalFile_Experience_The_Movement_OfTheAssets_Content_12_2_1_0";

//6. STATE - REMOTE REPOSITORIES


//7. DIRECTOR - PROPRIETARY FEATURES

import * as Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "../../../../../../../../7. Director/12/Other/2/Programming/Director/1/1_0/Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";
import * as Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0 from "../../../../../../../../7. Director/12/Other/2/Programming/Director/2/1_0/Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0";
import * as Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0 from "../../../../../../../../7. Director/12/Other/2/Programming/Director/3/1_0/Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0";
import * as Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0 from "../../../../../../../../7. Director/12/Other/2/Programming/Director/4/1_0/Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0";
import * as Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0 from "../../../../../../../../7. Director/12/Other/2/Programming/Director/5/1_0/Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0";

//#endregion

//#endregion

export namespace BaseDI.Professional.Story.Risk_Management_1 {
    export class RiskManagementFactoryTester_NicheMaster_11_1_1_0 extends aClass_Programming_ScriptNicheMaster_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptNicheMaster_12_2_1_0<object>
    {
        //#region 1. Assign

        //SETTINGS
        private _storedProcessRequestSettings: any = null;

        //CLIENT/SERVER
        private _storedProcessRequestTracker: any;

        private _storedClientRequestByName: string;
        private _storedClientRequestByNameParameters: string;

        private _storedClientRequestByObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        //DATASETS
        private _storedProcessRequestDataStorylineDetails: any;
        private _storedProcessRequestDataStorylineDetails_Parameters: any;

        //MISC
        private _storedProcessRequestExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //PLUMBING
        private _storedCentralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;;
        private _storedCentralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _storedCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        private _storedParameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = null;

        private _storedRequestName: String = "";
        private _storedSystemRequestByName: string;

        //#endregion

        //#region 2. Ready

        constructor(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) {
            super();

            //#region 1. INPUTS

            //#region DEFINE clientOrServer instance

            this._storedProcessRequestTracker = null;

            //#endregion

            //#region MEMORIZE extra data

            this._storedProcessRequestExtraData = parameterInputs.Parameters.getValue("parameterExtraData") ? parameterInputs.Parameters.getValue("parameterExtraData") : null;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region HANDLE niche setup

            //#region EDGE CASE - USE niche faults


            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT


            //#endregion
        }

        //#endregion

        //#region 3. Set

        //A. Default state of this part of the storyline
        //#region 1. INPUTS

        //#endregion

        //#region 2. PROCESS

        //#endregion

        //#region 3. OUTPUT

        //#endregion

        //#endregion

        //#region 4. Action
        public async Action(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<object> {
            //#region 1. INPUTS

            //#region VALIDATE input parameters

            const ValidateInputs = async (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<boolean> => {
                //#region 1. INPUTS

                //#region DEFINE parameter inputs

                let storedParameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

                //#endregion

                //#region DEFINE process checkpoint

                let storedProcessRequestMistakeMade: boolean = false;

                //#endregion

                //#region DEFINE stored message

                let storedOutputResponseMessage: string = "";

                //#endregion

                //#region MEMORIZE clientOrServer instance

                let storedProcessRequestTracker: any = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

                //#endregion

                //#region MEMORIZE app settings

                let storedProcessRequestSettings: any = storedProcessRequestTracker["storedProcessRequestSettings"];

                //#endregion

                //#region MEMORIZE developer mode

                let storedProcessRequestDeveloperMode: boolean = storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE ? storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE : false;

                let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

                //REQUIRED
                storedDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONFIGURATING request handler");
                storedDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
                storedDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "RiskManagementFactoryTester_NicheMaster_11_1_1_0.ts");
                storedDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Action -> ValidateInputs");

                //#endregion

                //#endregion

                //#region 2. PROCESS

                //#region EXECUTE validation process

                //#region IDEAL CASE - USE valid information

                if (parameterInputs != null || parameterInputs != undefined || parameterInputs.Parameters != null && parameterInputs.Parameters != undefined) {
                    if (process.env.APP_ENV == null || process.env.APP_ENV == undefined) {
                        storedOutputResponseMessage += "***process.env.APP_ENV*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestTracker")) {
                        storedOutputResponseMessage += "***parameterProcessRequestTracker*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }
                    else {
                        if (parameterInputs.Parameters.getValue("parameterProcessRequestTracker")["storedProcessRequestSettings"] == null || parameterInputs.Parameters.getValue("parameterProcessRequestTracker")["storedProcessRequestSettings"] == undefined) {
                            storedOutputResponseMessage += "***parameterProcessRequestTracker*** must contain a key of ***storedProcessRequestSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.setValue(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})"
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestSettings")) {
                        storedOutputResponseMessage += "***parameterProcessRequestSettings*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterInputRequestName")) {
                        storedOutputResponseMessage += "***parameterInputRequestName*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterInputRequestDataCacheKey")) {
                        storedOutputResponseMessage += "***parameterInputRequestDataCacheKey*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestCentralizedDisturber")) {
                        storedOutputResponseMessage += "***parameterProcessRequestCentralizedDisturber*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestCentralizedSensor")) {
                        storedOutputResponseMessage += "***parameterProcessRequestCentralizedSensor*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestCentralizedStorer")) {
                        storedOutputResponseMessage += "***parameterProcessRequestCentralizedStorer*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestDataStorylineDetails;")) {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails;*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestDataStorylineDetails;_Parameters")) {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails;_Parameters*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (storedProcessRequestMistakeMade) {
                        //#region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode) {
                            storedProcessRequestTracker["processStepNumber"] = storedProcessRequestTracker["processStepNumber"] + 1;

                            storedDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                            storedDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                            storedDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["processStepNumber"]);

                            Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                        }

                        //#endregion

                        //#region EDGE CASE - USE exception handler

                        throw new Error("PARSING parameter values failed");

                        //#endregion
                    }
                }
                else {
                    //#region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode) {
                        storedProcessRequestTracker["processStepNumber"] = storedProcessRequestTracker["processStepNumber"] + 1;

                        storedDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["processStepNumber"]);

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                    }

                    //#endregion

                    //#region EDGE CASE - USE exception handler

                    throw new Error("PARSING parameter values failed");

                    //#endregion
                }

                //#endregion

                //#endregion

                //#endregion

                //#region 3. OUTPUT

                //#region RETURN validation passed

                //#region IDEAL CASE - USE passed indicator

                return true;

                //#endregion

                //#endregion

                //#endregion
            }

            //BEGIN valdation process
            await ValidateInputs(parameterInputs);

            //#endregion

            //#region DEFINE request handler

            let storedRequestHandler: any = null;

            //#endregion

            //#region MEMORIZE clientOrServer instance

            this._storedProcessRequestTracker = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE app settings

            this._storedProcessRequestSettings = this._storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE centralized processes handlers

            this._storedCentralizedDisturber = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedDisturber");
            this._storedCentralizedSensor = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedSensor");
            this._storedCentralizedStorer = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedStorer");

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (parameterInputs.Parameters.getValue("parameterExtraData")?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") ? parameterInputs.Parameters.getValue("parameterExtraData")?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") : null);

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "ASSIGNING request handler");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", this._storedProcessRequestTracker["storedInputRequestActionName"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "ProductivityFactoryImplementer_NicheMaster_10_1_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Action");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALBeginOfProcess", true);

            //#endregion

            //#region MEMORIZE request details

            let storedClientRequestByName: string = parameterInputs.Parameters.getValue("parameterInputRequestName");
            let storedClientRequestByNameParameters: string = parameterInputs.Parameters.getValue("parameterInputRequestDataCacheKey");

            let storedSystemRequestByName: string = parameterInputs.Parameters.getValue("parameterSystemRequestByName") ? parameterInputs.Parameters.getValue("parameterSystemRequestByName") : "";

            this._storedRequestName = storedClientRequestByName;

            //#endregion

            //#region MEMORIZE extra data

            this._storedProcessRequestExtraData.KeyValuePairs.setValue("storedAPILocationLocalNodeJS", Object.assign(this.APILocationLocalNodeJS, Object));
            this._storedProcessRequestExtraData.KeyValuePairs.setValue("storedAPILocationLocalDotNetCore", Object.assign(this.APILocationLocalDotNetCore, Object));

            this._storedProcessRequestExtraData.KeyValuePairs.setValue("storedAPILocationRemote", Object.assign(this.APILocationRemote, Object));

            this._storedProcessRequestExtraData.KeyValuePairs.setValue("storedClientRequestByName", storedClientRequestByName);
            this._storedProcessRequestExtraData.KeyValuePairs.setValue("storedClientRequestByNameParameters", storedClientRequestByNameParameters);

            //#endregion

            //#region MEMORIZE storyline details

            this._storedProcessRequestDataStorylineDetails = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails;");
            this._storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails;_Parameters");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region ASSIGN request handler

            try {
                //#region IDEAL CASE - USE director or experience

                //switch (storedClientRequestByName.toUpperCase()) {
                //    case "DIRECTOR_OF_RISKMANAGEMENT_CHAPTER_11_1_PAGE_3_STORAGE_HANDLER_1_0":
                //        storedRequestHandler = this.Create_Director_Of_RiskManagement_Chapter_11_1_Page_3_Storage_Handler_1_0(storylineDetails, storylineDetails_Parameters, this._extraData);

                //        break;
                //    case "DIRECTOR_OF_RISKMANAGEMENT_CHAPTER_11_1_PAGE_4_DISTURBANCES_HANDLER_1_0":
                //        storedRequestHandler = this.Create_Director_Of_RiskManagement_Chapter_11_1_Page_4_Disturb_Handler_1_0(storylineDetails, storylineDetails_Parameters, this._extraData);

                //        break;
                //}

                //#endregion
            }
            catch (mistake) {
                //#region EDGE CASE - USE developer logger
                if (storedProcessRequestDeveloperMode) {
                    this._storedProcessRequestTracker["processStepNumber"] = this._storedProcessRequestTracker["processStepNumber"] + 1;

                    storedDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED configurating request handler");
                    storedDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                    storedDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", this._storedProcessRequestTracker["processStepNumber"]);

                    Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                }
                //#endregion

                //#region EDGE CASE - USE exception handler

                throw mistake;

                //#endregion
            }

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN request handler

            //#region IDEAL CASE - USE director of programming

            return storedRequestHandler;

            //#endregion


            //#endregion

            //#endregion
        }

        //#endregion 
    }
}
