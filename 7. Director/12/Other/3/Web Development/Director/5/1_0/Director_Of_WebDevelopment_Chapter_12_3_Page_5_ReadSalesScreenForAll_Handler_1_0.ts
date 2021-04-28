//#region Imports

//#region BaseDI

import * as aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0";
import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptRoutable_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptRoutable_12_2_1_0";

import * as Action_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/Action Poco/1/1_0/Action_12_2_1_0";
import * as ExtraData_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";
import * as SingleParmPoco_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

import * as Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0 from "../../../../../../../../0. Script/Extensions/11/Automate Manual Task/1/Risk Management/Method/0/1_0/Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0";
import * as Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/3/Web Development/Method/13/1_0/Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0";
import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

import * as IContract_Programming_Repository_12_2_1_0 from "../../../../../../../../0. Script/Interfaces/12/Other/2/Programming/Contract/1/1_0/IContract_Programming_Repository_12_2_1_0";

import * as ChapterPage_Page_5_1_Begin_Process_12_3_1_0 from "../../../../../../../../5. Chapter/12/Other/3/Web Development/Page/5/1_0/Page_5_1_Begin_Process_12_3_1_0";
import * as ChapterPage_Page_5_2_Validate_Process_12_3_1_0 from "../../../../../../../../5. Chapter/12/Other/3/Web Development/Page/5/1_0/Page_5_2_Validate_Process_12_3_1_0";
import * as ChapterPage_Page_5_3_Process_StoryAuthor_12_3_1_0 from "../../../../../../../../5. Chapter/12/Other/3/Web Development/Page/5/1_0/Page_5_3_Process_StoryAuthor_12_3_1_0";
import * as ChapterPage_Page_5_4_Process_StoryCharacters_12_3_1_0 from "../../../../../../../../5. Chapter/12/Other/3/Web Development/Page/5/1_0/Page_5_4_Process_StoryCharacters_12_3_1_0";
import * as ChapterPage_Page_5_5_Process_StorySetting_12_3_1_0 from "../../../../../../../../5. Chapter/12/Other/3/Web Development/Page/5/1_0/Page_5_5_Process_StorySetting_12_3_1_0";
import * as ChapterPage_Page_5_6_Process_StoryExperiences_12_3_1_0 from "../../../../../../../../5. Chapter/12/Other/3/Web Development/Page/5/1_0/Page_5_6_Process_StoryExperiences_12_3_1_0";
import * as ChapterPage_Page_5_7_Process_StoryResources_12_3_1_0 from "../../../../../../../../5. Chapter/12/Other/3/Web Development/Page/5/1_0/Page_5_7_Process_StoryResources_12_3_1_0";
import * as ChapterPage_Page_5_8_Process_CRUD_12_3_1_0 from "../../../../../../../../5. Chapter/12/Other/3/Web Development/Page/5/1_0/Page_5_8_Process_CRUD_12_3_1_0";
import * as ChapterPage_Page_5_9_Verify_Process_12_3_1_0 from "../../../../../../../../5. Chapter/12/Other/3/Web Development/Page/5/1_0/Page_5_9_Verify_Process_12_3_1_0";
import * as ChapterPage_Page_5_10_End_Process_12_3_1_0 from "../../../../../../../../5. Chapter/12/Other/3/Web Development/Page/5/1_0/Page_5_10_End_Process_12_3_1_0";

//#endregion

//#endregion

export namespace BaseDI.Professional.Director.Web_Development_5 {
    export class Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0 extends aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0 {
        //#region 1. Assign

        //SETTINGS
        private _storedAppSettings: any = null;

        //CLIENT/SERVER
        private _storedClientOrServerInstance: any;

        private _storedClientRequestByName: string;
        private _storedClientRequestByNameParameters: string;

        private _storedClientRequestByObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        //DATASETS
        private _storedStorylineDetails: any;
        private _storedStorylineDetails_Parameters: any;

        //MISC
        private _storedExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

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

            //#region MEMORIZE input parameters

            this._storedParameterInputs = parameterInputs;

            //#endregion

            //#region MEMORIZE clientOrServer instance

            this._storedClientOrServerInstance = this._storedParameterInputs.Parameters.getValue("parameterClientOrServerInstance");

            //#endregion

            //#region MEMORIZE app settings

            this._storedAppSettings = this._storedClientOrServerInstance["storedAppSettings"];

            //#endregion

            //#region MEMORIZE centralized processes handlers

            this._storedCentralizedDisturber = this._storedParameterInputs.Parameters.getValue("parameterCentralizedDisturber");
            this._storedCentralizedSensor = this._storedParameterInputs.Parameters.getValue("parameterCentralizedSensor");
            this._storedCentralizedStorer = this._storedParameterInputs.Parameters.getValue("parameterCentralizedStorer");

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
        public async Action(): Promise<object> {
            //#region 1. INPUTS

            //#region VALIDATE input parameters

            const ValidateInputs = async (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<boolean> => {
                //#region 1. INPUTS

                //#region DEFINE parameter inputs

                let storedParameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

                //#endregion

                //#region DEFINE process checkpoint

                let storedProcessCheckPointHit: boolean = false;

                //#endregion

                //#region DEFINE stored message

                let storedMessage: string = "";

                //#endregion

                //#region MEMORIZE clientOrServer instance

                let storedClientOrServerInstance: any = parameterInputs.Parameters.getValue("parameterClientOrServerInstance");

                //#endregion

                //#region MEMORIZE app settings

                let storedAppSettings: any = storedClientOrServerInstance["storedAppSettings"];

                //#endregion

                //#region MEMORIZE developer mode

                let storedDeveloperMode: boolean = storedAppSettings.APP_SETTING_DEVELOPER_MODE ? storedAppSettings.APP_SETTING_DEVELOPER_MODE : false;

                let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

                //REQUIRED
                storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "VALIDATING request inputs");
                storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", storedClientOrServerInstance["storedActionName"]);
                storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", storedClientOrServerInstance["storedAppSettings"]);
                storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", storedClientOrServerInstance);
                storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0.ts");
                storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Action -> ValidateInputs");

                //#endregion

                //#endregion

                //#region 2. PROCESS

                //#region EXECUTE validation process

                //#region IDEAL CASE - USE valid information

                if (parameterInputs != null || parameterInputs != undefined || parameterInputs.Parameters != null && parameterInputs.Parameters != undefined) {
                    if (process.env.APP_ENV == null || process.env.APP_ENV == undefined) {
                        storedMessage += "***process.env.APP_ENV*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterClientOrServerInstance")) {
                        storedMessage += "***parameterClientOrServerInstance*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }
                    else {
                        if (parameterInputs.Parameters.getValue("parameterClientOrServerInstance")["storedAppSettings"] == null || parameterInputs.Parameters.getValue("parameterClientOrServerInstance")["storedAppSettings"] == undefined) {
                            storedMessage += "***parameterClientOrServerInstance*** must contain a key of ***storedAppSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.setValue(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})"
                            storedProcessCheckPointHit = true;
                        }
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterAppSettings")) {
                        storedMessage += "***parameterAppSettings*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterClientRequestByName")) {
                        storedMessage += "***parameterClientRequestByName*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterClientRequestByNameParameters")) {
                        storedMessage += "***parameterClientRequestByNameParameters*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterCentralizedDisturber")) {
                        storedMessage += "***parameterCentralizedDisturber*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterCentralizedSensor")) {
                        storedMessage += "***parameterCentralizedSensor*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterCentralizedStorer")) {
                        storedMessage += "***parameterCentralizedStorer*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterStorylineDetails")) {
                        storedMessage += "***parameterStorylineDetails*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterStorylineDetails_Parameters")) {
                        storedMessage += "***parameterStorylineDetails_Parameters*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (storedProcessCheckPointHit) {
                        //#region EDGE CASE - USE developer logger

                        if (storedDeveloperMode) {
                            storedClientOrServerInstance["processStepNumber"] = storedClientOrServerInstance["processStepNumber"] + 1;

                            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "PARSING parameter values failed");
                            storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                            storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", storedClientOrServerInstance["processStepNumber"]);

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

                    if (storedDeveloperMode) {
                        storedClientOrServerInstance["processStepNumber"] = storedClientOrServerInstance["processStepNumber"] + 1;

                        storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "PARSING parameter values failed");
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", storedClientOrServerInstance["processStepNumber"]);

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
            await ValidateInputs(this._storedParameterInputs);

            //#endregion

            //#region DEFINE request handler

            let storedRequestHandler_UsingBuilderPattern: Use_DesignPattern_Builder_Chapter_12_3_Page_5 = null;

            //#endregion  

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (this._storedParameterInputs.Parameters.getValue("parameterExtraData")?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") ? this._storedParameterInputs.Parameters.getValue("parameterExtraData")?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") : null);

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "EXECUTING request handler");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", this._storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", this._storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Action");

            //OPTIONAL
            storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALMiddleOfProcess", true);

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region BEGIN process execution

            //#region IDEAL CASE - USE builder pattern

            if (this.DirectorOrExperienceRequestHandler != null && (this.DirectorOrExperienceRequestHandler.ClientOrServerInstance != undefined && this.DirectorOrExperienceRequestHandler.ClientOrServerInstance != null)) {
                this.ClientOrServerInstance = this.DirectorOrExperienceRequestHandler.ClientOrServerInstance;
                this.MasterLeader = this.DirectorOrExperienceRequestHandler.MasterLeader;
                this.MasterController = this.DirectorOrExperienceRequestHandler.MasterController;
                this.MasterConverter = this.DirectorOrExperienceRequestHandler.MasterConverter;
                this.MasterDisturber = this.DirectorOrExperienceRequestHandler.MasterDisturber;
                this.MasterSensor = this.DirectorOrExperienceRequestHandler.MasterSensor;
                this.MasterStorer = this.DirectorOrExperienceRequestHandler.MasterStorer;
                this.MasterTransporter = this.DirectorOrExperienceRequestHandler.MasterTransporter;
                this.ExtraData = this.DirectorOrExperienceRequestHandler.ExtraData;
            }

            //REQUIRED: Implement one of the design patterns at https://www.dofactory.com/net/design-patterns
            const designPattern = new Use_DesignPattern_Builder_Chapter_12_3_Page_5(this.ClientOrServerInstance, this.MasterStorer, this.MasterDisturber, this.MasterSensor, this.StorylineDetails, this.StorylineDetails_Parameters, this.Repository, this.ExtraData, this.DirectorOrExperienceRequestHandler);

            this.StorylineDetails = await designPattern.Action();

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN request respnose

            //#region IDEAL CASE - USE populated data

            return this.StorylineDetails;

            //#endregion

            //#endregion

            //#endregion
        }
        //#endregion
    }

    //#region 5. Action Script
    export class Use_DesignPattern_Builder_Chapter_12_3_Page_5 {
        //#region 1. Assign

        //SETTINGS
        private _storedAppSettings: any = null;

        //CLIENT/SERVER
        private _storedClientOrServerInstance: any;

        private _storedClientRequestByName: string;
        private _storedClientRequestByNameParameters: string;

        private _storedClientRequestByObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        //DATASETS
        private _storedStorylineDetails: any;
        private _storedStorylineDetails_Parameters: any;

        //MISC
        private _storedExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //PLUMBING
        private _storedCentralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;;
        private _storedCentralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _storedCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        private _storedParameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = null;

        private _storedRequestName: String = "";
        private _storedRepository: IContract_Programming_Repository_12_2_1_0;
        private _storedSystemRequestByName: string;

        //#endregion

        //#region 2. Ready

        constructor(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) {
            //#region 1. INPUTS

            //#region MEMORIZE clientOrServer instance

            this._storedClientOrServerInstance = parameterInputs.Parameters.getValue("parameterClientOrServerInstance");

            //#endregion

            //#region MEMORIZE app settings

            this._storedAppSettings = this._storedClientOrServerInstance["storedAppSettings"];

            //#endregion

            //#region MEMORIZE centralized processes handlers

            this._storedCentralizedDisturber = parameterInputs.Parameters.getValue("parameterCentralizedDisturber");
            this._storedCentralizedSensor = parameterInputs.Parameters.getValue("parameterCentralizedSensor");
            this._storedCentralizedStorer = parameterInputs.Parameters.getValue("parameterCentralizedStorer");

            //#endregion

            //#region MEMORIZE data repository

            this._storedRepository = parameterInputs.Parameters.getValue("parameterDataRepository");

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#region MEMORIZE storyline details

            this._storedStorylineDetails = parameterInputs.Parameters.getValue("parameterStorylineDetails");
            this._storedStorylineDetails_Parameters = parameterInputs.Parameters.getValue("parameterStorylineDetails_Parameters");

            //#endregion

            //#region MEMORIZE extra data

            this._storedExtraData = parameterInputs.Parameters.getValue("parameterExtraData") ? parameterInputs.Parameters.getValue("parameterExtraData") : null;

            //#endregion

            //#region MEMORIZE request details

            this._storedClientRequestByName = parameterInputs.Parameters.getValue("parameterClientRequestByName");
            this._storedClientRequestByNameParameters = parameterInputs.Parameters.getValue("parameterClientRequestByNameParameters");
            this._storedClientRequestByObject = parameterInputs.Parameters.getValue("parameterClientRequestByObject");

            this._storedRequestName = parameterInputs.Parameters.getValue("parameterSystemRequestByName");

            this._storedSystemRequestByName = parameterInputs.Parameters.getValue("parameterSystemRequestByName");

            this._storedParameterInputs = parameterInputs;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process defaults

            //#region IDEAL CASE - USE defaults handler

            this.HandleDefaults();

            this.Action = this.Action.bind(this);

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#endregion
        }

        //#endregion        

        //#region 3. Set

        private HandleDefaults(): void {
            //#region 1. INPUTS

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#endregion

            //#region 2. PROCESS


            //#endregion

            //#region 3. OUTPUT

            //#endregion
        }

        //#endregion

        //#region 4. Action

        public async Action(): Promise<object> {
            //#region 1. INPUTS

            //#region DEFINE data response

            let storedDataResponse: any = null;

            //#endregion

            //#region DEFINE request handler

            let storedRequestHandler_UsingBuilderPattern: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object> = null;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region ARRANGE execution order

            //#region IDEAL CASE - USE builder pattern

            storedRequestHandler_UsingBuilderPattern = new Implement_DesignPattern_Builder_Chapter_12_3_Page_5_1_0(this._storedParameterInputs);

            await storedRequestHandler_UsingBuilderPattern.Action_1_Begin_Process();

            await storedRequestHandler_UsingBuilderPattern.Action_2_Validate_Process();

            await storedRequestHandler_UsingBuilderPattern.Action_3_Process_StoryAuthor();
            await storedRequestHandler_UsingBuilderPattern.Action_4_Process_StoryCharacters();
            await storedRequestHandler_UsingBuilderPattern.Action_5_Process_StorySetting();
            await storedRequestHandler_UsingBuilderPattern.Action_6_Process_StoryExperiences();
            await storedRequestHandler_UsingBuilderPattern.Action_7_Process_StoryResources();
            await storedRequestHandler_UsingBuilderPattern.Action_8_Process_CRUD();

            await storedRequestHandler_UsingBuilderPattern.Action_9_Verify_Process();

            storedDataResponse = await storedRequestHandler_UsingBuilderPattern.Action_10_End_Process();

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN request response

            //#region IDEAL CASE - USE baseDI dataset

            return storedDataResponse;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion
    }
    //#endregion

    //#region 6. Action Implementation
    export class Implement_DesignPattern_Builder_Chapter_12_3_Page_5_1_0 extends aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>
    {
        //#region 1. Assign

        //SETTINGS
        private _storedAppSettings: any;

        //CLIENT/SERVER
        private _storedClientOrServerInstance: any;

        private _storedClientRequestByName: string;
        private _storedClientRequestByNameParameters: string;

        private _storedClientRequestByObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        public _storedServerInstance: any;
        private _storedServerInstanceInfo: any;

        //DATASET
        private _storedStorylineDetails: object = new Object();
        private _storedStorylineDetails_Parameters: object = new Object();

        //MISC
        private _storedExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0 = new ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //PLUMBING
        private _storedActionName: string = "";
        private _storedBusinessDirectorOrExperienceRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        private _storedCentralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _storedCentralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _storedCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        private _storedParameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

        private _storedRequestFileName: string = "Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0";
        private _storedRequestName: string = "";
        private _storedRepository: IContract_Programming_Repository_12_2_1_0;
        private _storedSystemRequestByName: string;

        public StoredStartUpCallBack;

        //#endregion

        //#region 2. Ready

        constructor(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) {
            super();

            //#region 1. INPUTS

            //#region MEMORIZE clientOrServer instance

            this._storedClientOrServerInstance = parameterInputs.Parameters.getValue("parameterClientOrServerInstance");

            //#endregion

            //#region MEMORIZE action name

            this._storedActionName = this._storedClientOrServerInstance["storedActionName"];

            //#endregion

            //#region MEMORIZE app settings

            this._storedAppSettings = this._storedClientOrServerInstance["storedAppSettings"];

            //#endregion

            //#region MEMORIZE centralized processes handlers

            this._storedCentralizedDisturber = parameterInputs.Parameters.getValue("parameterCentralizedDisturber");
            this._storedCentralizedSensor = parameterInputs.Parameters.getValue("parameterCentralizedSensor");
            this._storedCentralizedStorer = parameterInputs.Parameters.getValue("parameterCentralizedStorer");

            //#endregion

            //#region MEMORIZE data repository

            this._storedRepository = parameterInputs.Parameters.getValue("parameterDataRepository");

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#region MEMORIZE storyline details

            this._storedStorylineDetails = parameterInputs.Parameters.getValue("parameterStorylineDetails");
            this._storedStorylineDetails_Parameters = parameterInputs.Parameters.getValue("parameterStorylineDetails_Parameters");

            //#endregion

            //#region MEMORIZE extra data

            this._storedExtraData = parameterInputs.Parameters.getValue("parameterExtraData") ? parameterInputs.Parameters.getValue("parameterExtraData") : null;

            //#endregion

            //#region MEMORIZE request details

            this._storedClientRequestByName = parameterInputs.Parameters.getValue("parameterClientRequestByName");
            this._storedClientRequestByNameParameters = parameterInputs.Parameters.getValue("parameterClientRequestByNameParameters");
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

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "HANDLING request defaults");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", this._storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", this._storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Implement_DesignPattern_Builder_Chapter_12_3_Page_5_1_0 -> HandleDefaults");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALMiddleOfProcess", true);

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process defaults

            try {
                //#region IDEAL CASE - USE request parser

                //#endregion
            }
            catch (mistake) {
                //#region EDGE CASE - USE developer logger
                if (storedDeveloperMode) {
                    this._storedClientOrServerInstance["processStepNumber"] = this._storedClientOrServerInstance["processStepNumber"] + 1;

                    storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "FAILED handling request defaults");
                    storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                    storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", this._storedClientOrServerInstance["processStepNumber"]);

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

            //#endregion
        }

        //#endregion

        //#region 4. Action

        //#region EXECUTE LOGIC INSTUCTIONS

        //#region A. Action Methods

        //Page 1-5

        public async Action_5_Process_StorySetting(): Promise<object> {
            //#region 1. INPUTS

            //#region DEFINE data response

            let storedDataResponse: any = null;

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "CONFIGURING web routes");
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", _storedClientOrServerInstance["storedActionName"]);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", _storedClientOrServerInstance["storedAppSettings"]);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", _storedClientOrServerInstance);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0.cs");
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Action -> Action_5_Process_StorySetting");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try {
                storedDataResponse = await this.Factory_Action_5_Process_StorySetting();
            }
            catch (mistake) {
                throw mistake; //Let "Startup.ts" handle the exception.
            }

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN http response

            //#region IDEAL CASE - USE baseDI dataset

            return storedDataResponse;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion

        //#region B. Action Factories

        //Page 1-5
        private async Factory_Action_5_Process_StorySetting(): Promise<object> {
            //#region 1. INPUTS

            //#region DEFINE data response

            let storedDataResponse: any = null;

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "CONFIGURING web routes");
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", _storedClientOrServerInstance["storedActionName"]);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", _storedClientOrServerInstance["storedAppSettings"]);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", _storedClientOrServerInstance);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0.cs");
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Action -> Factory_Action_1_Begin_Process -> Factory_Action_5_Process_StorySetting");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process factory

            try {
                //#region IDEAL CASE - USE factory method

                //if (_storedActionName.ToUpper().Contains("PROCESSHTTPREQUEST_1_0"))
                //{
                //    storedDataResponse = await Execute_Factory_Action_5_Process_StorySetting_OutputHtml();
                //}

                storedDataResponse = await this.Execute_Factory_Action_5_Process_StorySetting_OutputHtml();

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

            return storedDataResponse;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion

        //#region C. Action Logic

        //Page 1-5
        private async Execute_Factory_Action_5_Process_StorySetting_OutputHtml(): Promise<object> {
            //#region 1. INPUTS

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "CONFIGURING web routes");
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", _storedClientOrServerInstance["storedActionName"]);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", _storedClientOrServerInstance["storedAppSettings"]);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", _storedClientOrServerInstance);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0.cs");
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Action -> Factory_Action_5_Process_StorySetting -> Execute_Factory_Action_5_Process_StorySetting_OutputHtml");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process handler

            //#region IDEAL CASE - USE process handler
            var page = new ChapterPage_Page_5_5_Process_StorySetting_12_3_1_0.BaseDI.Professional.Chapter.Page.Web_Development_5.Page_5_5_Process_StorySetting_12_3_1_0(this._storedParameterInputs);

            page.ClientOrServerInstance = this._storedClientOrServerInstance;

            page.DirectorOrExperienceRequestHandler = this._storedBusinessDirectorOrExperienceRequestHandler;
            page.ExtraData = this._storedExtraData;

            page.MasterStorer = this._storedCentralizedStorer;
            page.MasterDisturber = this._storedCentralizedDisturber;
            page.MasterSensor = this._storedCentralizedSensor;

            page.StorylineDetails_Parameters = this._storedStorylineDetails_Parameters;

            this._storedStorylineDetails = await page.Action();

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            return this._storedStorylineDetails;

            //#endregion

            //#endregion

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

            return this._storedStorylineDetails;

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

            return this._storedStorylineDetails;

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

            return this._storedStorylineDetails;

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

            return this._storedStorylineDetails;

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

            return this._storedStorylineDetails;

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

            return this._storedStorylineDetails;

            //#endregion

            //#endregion

            //#endregion
        }

        //Page 1-8
        public async Action_8_Process_CRUD(): Promise<object> {
            //#region 1. INPUTS


            //#endregion

            //#region 2. PROCESS

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            return this._storedStorylineDetails;

            //#endregion

            //#endregion

            //#endregion
        }

        //Page 1-9
        public async Action_9_Verify_Process(): Promise<object> {
            //#region 1. INPUTS


            //#endregion

            //#region 2. PROCESS

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            return this._storedStorylineDetails;

            //#endregion

            //#endregion

            //#endregion
        }

        //Page 1-11
        public async Action_10_End_Process(): Promise<object> {
            //#region 1. INPUTS

            //#region DEFINE data response

            let storedDataResponse: any = null;

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "CONFIGURING web routes");
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", _storedClientOrServerInstance["storedActionName"]);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", _storedClientOrServerInstance["storedAppSettings"]);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", _storedClientOrServerInstance);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0.cs");
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Action -> Action_10_End_Process");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try {
                storedDataResponse = this.StorylineDetails; //await this.Factory_Action_10_End_Process();
            }
            catch (mistake) {
                throw mistake; //Let "Startup.ts" handle the exception.
            }

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN http response

            //#region IDEAL CASE - USE baseDI dataset

            return storedDataResponse;

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

        //Page 1-8
        private async Factory_Action_8_Process_CRUD(): Promise<object> {
            switch (this._storedActionName.toUpperCase()) {
                default:
                    return null;
            }
        }

        //Page 1-9
        private async Factory_Action_9_Verify_Process(): Promise<object> {
            switch (this._storedActionName.toUpperCase()) {
                default:
                    return null;
            }
        }

        //Page 1-11
        private async Factory_Action_10_End_Process(): Promise<object> {
            //#region 1. INPUTS

            //#region DEFINE data response

            let storedDataResponse: any = null;

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "CONFIGURING web routes");
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", _storedClientOrServerInstance["storedActionName"]);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", _storedClientOrServerInstance["storedAppSettings"]);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", _storedClientOrServerInstance);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0.cs");
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Action -> Factory_Action_10_End_Process -> Factory_Action_5_Process_StorySetting");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process factory

            try {
                //#region IDEAL CASE - USE factory method

                //if (_storedActionName.ToUpper().Contains("PROCESSHTTPREQUEST_1_0"))
                //{
                //    storedDataResponse = await Execute_Factory_Action_1_Begin_Process_StoreInputDataInMemory();
                //}

                storedDataResponse = this.StorylineDetails; //await this.Execute_Factory_Action_10_End_Process_TransportRequestToHandler();

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

            return storedDataResponse;

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
    //#endregion
}