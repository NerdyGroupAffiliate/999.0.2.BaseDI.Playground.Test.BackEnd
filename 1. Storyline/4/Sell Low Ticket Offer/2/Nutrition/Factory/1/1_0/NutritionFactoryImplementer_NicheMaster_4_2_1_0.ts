﻿//#region Imports

//#region BaseDI

//0. SCRIPT - ABSTRACT, BASE & INTERFACE CLASSES
import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0"
import * as aClass_Programming_ScriptNicheMaster_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptNicheMaster_12_2_1_0"
import * as aClass_Programming_ScriptRoutable_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptRoutable_12_2_1_0";

import * as ExtraData_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";

import * as Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0 from "../../../../../../../../0. Script/Extensions/11/Automate Manual Task/1/Risk Management/Method/0/1_0/Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0";
import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

import * as SingleParmPoco_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

//1. STORYLINE - CORE FEATURES
import * as Implement_DesignPattern_Factory_Master_12_2_1_0 from "../../../../../../../../1. Storyline/12/Other/2/Programming/Studio/1/1_0/ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

//4. EXPERIENCES - SHARED FEATURES

//6. STATE - LOCAL REPOSITORIES
import * as LocalFile_Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0 from "../../../../../../../../6. State/12/Other/2/Programming/Repository/1/1_0/LocalFile_Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0";
import * as LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0 from "../../../../../../../../6. State/12/Other/2/Programming/Repository/2/1_0/LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0";
import * as LocalFile_Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0 from "../../../../../../../../6. State/12/Other/2/Programming/Repository/3/1_0/LocalFile_Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0";
import * as LocalFile_Director_Of_Programming_Chapter_12_2_Page_4_DisturbanceRequest_Handler_1_0 from "../../../../../../../../6. State/12/Other/2/Programming/Repository/4/1_0/LocalFile_Director_Of_Programming_Chapter_12_2_Page_4_DisturbanceRequest_Handler_1_0";
import * as LocalFile_Director_Of_Programming_Chapter_12_2_Page_5_SensorRequest_Handler_1_0 from "../../../../../../../../6. State/12/Other/2/Programming/Repository/5/1_0/LocalFile_Director_Of_Programming_Chapter_12_2_Page_5_SensorRequest_Handler_1_0";

//6. STATE - REMOTE REPOSITORIES

//7. DIRECTOR - PROPRIETARY FEATURES

import * as Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0 from "../../../../../../../../7. Director/12/Other/2/Programming/Director/1/1_0/Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0";
import * as Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0 from "../../../../../../../../7. Director/12/Other/2/Programming/Director/2/1_0/Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0";
import * as Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0 from "../../../../../../../../7. Director/12/Other/2/Programming/Director/3/1_0/Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0";
import * as Director_Of_Programming_Chapter_12_2_Page_4_DisturbanceRequest_Handler_1_0 from "../../../../../../../../7. Director/12/Other/2/Programming/Director/4/1_0/Director_Of_Programming_Chapter_12_2_Page_4_DisturbanceRequest_Handler_1_0";
import * as Director_Of_Programming_Chapter_12_2_Page_5_SensorRequest_Handler_1_0 from "../../../../../../../../7. Director/12/Other/2/Programming/Director/5/1_0/Director_Of_Programming_Chapter_12_2_Page_5_SensorRequest_Handler_1_0";

//#endregion

//#endregion

export namespace BaseDI.Professional.Story.Nutrition_1 {
    export class NutritionFactoryImplementer_NicheMaster_4_2_1_0 extends aClass_Programming_ScriptNicheMaster_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptNicheMaster_12_2_1_0<object>
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

                let storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

                //#endregion

                //#region DEFINE process checkpoint

                let storedProcessRequestMistakeMade: boolean = false;

                //#endregion

                //#region DEFINE stored message

                let storedOutputResponseMessage: string = "";

                //#endregion

                //#region MEMORIZE control client server

                let storedProcessRequestTracker: any = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

                //#endregion

                //#region MEMORIZE app settings

                let storedProcessRequestSettings: any = storedProcessRequestTracker["storedProcessRequestSettings"];

                //#endregion

                //#region MEMORIZE developer mode

                let storedProcessRequestDeveloperMode: boolean = storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE ? storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE : false;

                let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

                //REQUIRED
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONFIGURATING request handler");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "NutritionFactoryImplementer_NicheMaster_4_2_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Action -> ValidateInputs");

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

                    if (!parameterInputs.Parameters.containsKey("parameterInputRequestNameDataCacheKey")) {
                        storedOutputResponseMessage += "***parameterInputRequestNameDataCacheKey*** cannot be blank or empty.\n"
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

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestDataStorylineDetails")) {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestDataStorylineDetails_Parameters")) {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails_Parameters*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (storedProcessRequestMistakeMade) {
                        //#region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode) {
                            storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                            Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
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
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
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

            //#region MEMORIZE control client server

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

            let storedDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (parameterInputs.Parameters.getValue("parameterExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") ? parameterInputs.Parameters.getValue("parameterExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") : null);

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "ASSIGNING request handler");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", this._storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "NutritionFactoryImplementer_NicheMaster_4_2_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Action");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALBeginOfProcess", true);

            //#endregion

            //#region MEMORIZE request details

            let storedClientRequestByName: string = parameterInputs.Parameters.getValue("parameterInputRequestName");
            let storedClientRequestByNameParameters: string = parameterInputs.Parameters.getValue("parameterInputRequestNameDataCacheKey");

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

            this._storedProcessRequestDataStorylineDetails = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            this._storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails_Parameters");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region ASSIGN request handler

            try {
                //#region IDEAL CASE - USE director or experience

                switch (storedClientRequestByName.toUpperCase()) {
                    //case "DIRECTOR_OF_SOCIALMEDIA_CHAPTER_2_3_PAGE_1_XXXXXX_HANDLER_1_0":
                    //    storedRequestHandler = this.Create_Director_Of_SocialMedia_Chapter_2_Page_1_XXXXXX_1_0(storylineDetails, storylineDetails_Parameters, this._extraData);

                    //    break;
                }

                //#endregion
            }
            catch (mistake) {
                //#region EDGE CASE - USE developer logger
                if (storedProcessRequestDeveloperMode) {
                    this._storedProcessRequestTracker["storedProcessRequestStepNumber"] = this._storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED configurating request handler");
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

            //#region RETURN request handler

            //#region IDEAL CASE - USE director of programming

            return storedRequestHandler;

            //#endregion


            //#endregion

            //#endregion
        }

        //#region Page 1
        private Create_Director_Of_SocialMedia_Chapter_2_Page_1_XXXXXX_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): object {
            //#region 1. INPUTS

            //#region MEMORIZE data repository

            let storedRepositoryType: string = process.env.APP_SETTING_CONVERSION_MODE_2_3_SOCIALMEDIA_NICHE_MASTER ? process.env.APP_SETTING_CONVERSION_MODE_2_3_SOCIALMEDIA_NICHE_MASTER : "LOCAL_FILE";

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (parameterInputs.Parameters.getValue("parameterExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") ? parameterInputs.Parameters.getValue("parameterExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") : null);

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONFIGURATING request handler");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", this._storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "SocialMediaFactoryImplementer_NicheMaster_2_3_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Create_Director_Of_SocialMedia_Chapter_2_Page_1_XXXXXX_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALBeginOfProcess", true);

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region CONFIGURE request handler

            //#region IDEAL CASE - USE director

            let storedRequestHandler_Director = null; //new Director_Of_SocialMedia_Chapter_2_Page_1_XXXXXX_1_0.BaseDI.Professional.Director.Advertising_1.Director_Of_Advertising_Chapter_1_1_Page_1_InputAdvertisement_Handler_1_0(parameterInputs);

            storedRequestHandler_Director.ClientOrServerInstance = this._storedProcessRequestTracker;

            storedRequestHandler_Director.ExtraData = this._storedProcessRequestExtraData;

            storedRequestHandler_Director.MasterStorer = this._storedCentralizedStorer;
            storedRequestHandler_Director.MasterDisturber = this._storedCentralizedDisturber;
            storedRequestHandler_Director.MasterSensor = this._storedCentralizedSensor;

            storedRequestHandler_Director.StorylineDetails = this._storedProcessRequestDataStorylineDetails;
            storedRequestHandler_Director.StorylineDetails_Parameters = this._storedProcessRequestDataStorylineDetails_Parameters;

            switch (storedRepositoryType.toUpperCase()) {
                case "LOCAL_FILE":
                    storedRequestHandler_Director.Repository = null; //new LocalFile_Director_Of_SocialMedia_Chapter_2_Page_1_XXXXXX_1_0.BaseDI.Professional.State.Advertising_1.LocalFile_Director_Of_Advertising_Chapter_1_1_Page_1_InputAdvertisement_Handler_1_0(parameterInputs);
                    storedRequestHandler_Director.Repository.RequestName = this._storedRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedRequestHandler_Director.Repository = null; //new RemoteService_Director_Of_SocialMedia_Chapter_2_Page_1_XXXXXX_1_0.BaseDI.Professional.State.Advertising_1.RemoteService_Director_Of_Advertising_Chapter_1_1_Page_1_InputAdvertisement_Handler_1_0(parameterInputs);
                    storedRequestHandler_Director.Repository.RequestName = this._storedRequestName;

                    break;
            }

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN request handler

            //#region IDEAL CASE - USE experienece or director

            return storedRequestHandler_Director;

            //#endregion

            //#endregion

            //#endregion
        }
        //#endregion 

        //#endregion 
    }
}