//#region Imports

//#region BaseDI

//0. SCRIPT - ABSTRACT, BASE & INTERFACE CLASSES
import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0"
import * as aClass_Programming_ScriptNicheMaster_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptNicheMaster_12_2_1_0"
import * as aClass_Programming_ScriptRoutable_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptRoutable_12_2_1_0";

import * as Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0 from "../../../../../../../../0. Script/Extensions/11/Automate Manual Task/1/Risk Management/Method/0/1_0/Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0";
import * as Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/0/1_0/Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0";

import * as ExtraData_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";

import * as SingleParmPoco_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

//1. STORYLINE - CORE FEATURES
import * as Implement_DesignPattern_Factory_Master_12_2_1_0 from "../../../../../../../../1. Storyline/12/Other/2/Programming/Studio/0/1_0/Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0";

//4. EXPERIENCES - SHARED FEATURES
import * as Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0 from "../../../../../../../../4. Experience/6/Hear/12/Other/3/Web Development/Experience/13/1_0/Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0";

//6. STATE - LOCAL REPOSITORIES
//import * as LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreen_Handler_1_0 from "../../../../../../../../6. State/12/Other/3/Web Development/Repository/1/1_0/LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreen_Handler_1_0";
import * as LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_1_OutputHomeScreen_Handler_1_0 from "../../../../../../../../6. State/12/Other/3/Web Development/Repository/1/1_0/LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_1_OutputHomeScreen_Handler_1_0";
import * as LocalFile_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0 from "../../../../../../../../6. State/12/Other/3/Web Development/Repository/13/1_0/LocalFile_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0";

//6. STATE - REMOTE REPOSITORIES
//import * as RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreen_Handler_1_0 from "../../../../../../../../6. State/12/Other/3/Web Development/Repository/1/1_0/RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreen_Handler_1_0";
import * as RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_OutputHomeScreen_Handler_1_0 from "../../../../../../../../6. State/12/Other/3/Web Development/Repository/1/1_0/RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_OutputHomeScreen_Handler_1_0";
import * as RemoteService_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0 from "../../../../../../../../6. State/12/Other/3/Web Development/Repository/13/1_0/RemoteService_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0";

//7. DIRECTOR - PROPRIETARY FEATURES
//import * as Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreen_Handler_1_0 from "../../../../../../../../7. Director/12/Other/3/Web Development/Director/1/1_0/Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreen_Handler_1_0";
import * as Director_Of_WebDevelopment_Chapter_12_3_Page_1_OutputHomeScreen_Handler_1_0 from "../../../../../../../../7. Director/12/Other/3/Web Development/Director/1/1_0/Director_Of_WebDevelopment_Chapter_12_3_Page_1_OutputHomeScreen_Handler_1_0";
import * as Director_Of_WebDevelopment_Chapter_12_3_Page_2_OutputPresalesScreen_Handler_1_0 from "../../../../../../../../7. Director/12/Other/3/Web Development/Director/2/1_0/Director_Of_WebDevelopment_Chapter_12_3_Page_2_OutputPresalesScreen_Handler_1_0";
import * as Director_Of_WebDevelopment_Chapter_12_3_Page_3_OutputOptinScreen_Handler_1_0 from "../../../../../../../../7. Director/12/Other/3/Web Development/Director/3/1_0/Director_Of_WebDevelopment_Chapter_12_3_Page_3_OutputOptinScreen_Handler_1_0";
import * as Director_Of_WebDevelopment_Chapter_12_3_Page_4_OutputThankYouScreen_Handler_1_0 from "../../../../../../../../7. Director/12/Other/3/Web Development/Director/4/1_0/Director_Of_WebDevelopment_Chapter_12_3_Page_4_OutputThankYouScreen_Handler_1_0";
import * as Director_Of_WebDevelopment_Chapter_12_3_Page_5_OutputSalesScreen_Handler_1_0 from "../../../../../../../../7. Director/12/Other/3/Web Development/Director/5/1_0/Director_Of_WebDevelopment_Chapter_12_3_Page_5_OutputSalesScreen_Handler_1_0";
import * as Director_Of_WebDevelopment_Chapter_12_3_Page_6_OutputOrderFormScreen_Handler_1_0 from "../../../../../../../../7. Director/12/Other/3/Web Development/Director/6/1_0/Director_Of_WebDevelopment_Chapter_12_3_Page_6_OutputOrderFormScreen_Handler_1_0";
import * as Director_Of_WebDevelopment_Chapter_12_3_Page_7_OutputOTOScreen_Handler_1_0 from "../../../../../../../../7. Director/12/Other/3/Web Development/Director/7/1_0/Director_Of_WebDevelopment_Chapter_12_3_Page_7_OutputOTOScreen_Handler_1_0";
import * as Director_Of_WebDevelopment_Chapter_12_3_Page_8_OutputWebinarScreen_Handler_1_0 from "../../../../../../../../7. Director/12/Other/3/Web Development/Director/8/1_0/Director_Of_WebDevelopment_Chapter_12_3_Page_8_OutputWebinarScreen_Handler_1_0";
import * as Director_Of_WebDevelopment_Chapter_12_3_Page_9_OutputMembershipScreen_Handler_1_0 from "../../../../../../../../7. Director/12/Other/3/Web Development/Director/9/1_0/Director_Of_WebDevelopment_Chapter_12_3_Page_9_OutputMembershipScreen_Handler_1_0";
import * as Director_Of_WebDevelopment_Chapter_12_3_Page_10_OutputAffiliateScreen_Handler_1_0 from "../../../../../../../../7. Director/12/Other/3/Web Development/Director/10/1_0/Director_Of_WebDevelopment_Chapter_12_3_Page_10_OutputAffiliateScreen_Handler_1_0";
import * as Director_Of_WebDevelopment_Chapter_12_3_Page_11_OutputOtherScreen_Handler_1_0 from "../../../../../../../../7. Director/12/Other/3/Web Development/Director/11/1_0/Director_Of_WebDevelopment_Chapter_12_3_Page_11_OutputOtherScreen_Handler_1_0";
import * as Director_Of_WebDevelopment_Chapter_12_3_Page_12_OutputAdvancedScreen_Handler_1_0 from "../../../../../../../../7. Director/12/Other/3/Web Development/Director/12/1_0/Director_Of_WebDevelopment_Chapter_12_3_Page_12_OutputAdvancedScreen_Handler_1_0";

//#endregion

//#region 3rd Party Core

//#endregion

//#endregion

export namespace BaseDI.Professional.Story.Web_Development_0 {
    export class Studio_Automation_WebDevelopment_Chapter_12_3_Page_0_ControlNicheMaster_Handler_1_0 extends aClass_Programming_ScriptNicheMaster_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptNicheMaster_12_2_1_0<object>
    {
        //#region 1. Assign

        //SETTINGS
        private _storedProcessRequestSettings: any = null;

        //CLIENT/SERVER
        private _storedProcessRequestTracker: any;

        private _storedInputRequestName: string;
        private _storedInputRequestNameParameters: string;

        private _storedProcessRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        //DATASETS
        private _storedProcessRequestDataStorylineDetails: any;
        private _storedProcessRequestDataStorylineDetails_Parameters: any;

        //MISC
        private _storedProcessRequestExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //PLUMBING
        private _storedProcessRequestCentralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;;             
        private _storedProcessRequestCentralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _storedProcessRequestCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        private _storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = null;

        private _storedProcessRequestName: String = "";
        private _storedProcessRequestByName: string;

        //#endregion

        //#region 2. Ready
        constructor(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0)
        {
            super();

            //#region 1. INPUTS

            //#region DEFINE clientOrServer instance

            this._storedProcessRequestTracker = null;

            //#endregion

            //#region MEMORIZE extra data

            this._storedProcessRequestExtraData = parameterInputs.Parameters.getValue("parameterProcessRequestExtraData") ? parameterInputs.Parameters.getValue("parameterProcessRequestExtraData") : null;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process defaults

            //#region IDEAL CASE - USE defaults handler

            this.Action = this.Action.bind(this);

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
        public async Action(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<object>
        {
            //#region 1. INPUTS

            //#region VALIDATE input parameters

            const ValidateInputs = async (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) : Promise<boolean> => {
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
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "ASSIGNING request handler");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Studio_Automation_WebDevelopment_Chapter_12_3_Page_0_ControlNicheMaster_Handler_1_0.ts");
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
                else
                {
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

            let storedProcessRequestHandler: any = null;

            //#endregion

            //#region MEMORIZE control client server

            this._storedProcessRequestTracker = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE app settings

            this._storedProcessRequestSettings = this._storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE centralized processes handlers

            this._storedProcessRequestCentralizedDisturber = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedDisturber");
            this._storedProcessRequestCentralizedSensor = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedSensor");
            this._storedProcessRequestCentralizedStorer = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedStorer");

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (parameterInputs.Parameters.getValue("parameterProcessRequestExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") ? parameterInputs.Parameters.getValue("parameterProcessRequestExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") : null);

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONFIGURATING request handler");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", this._storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Studio_Automation_WebDevelopment_Chapter_12_3_Page_0_ControlNicheMaster_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Action");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALBeginOfProcess", true);

            //#endregion

            //#region MEMORIZE request details

            let storedInputRequestName: string = parameterInputs.Parameters.getValue("parameterInputRequestName");
            let storedInputRequestNameParameters: string = parameterInputs.Parameters.getValue("parameterInputRequestNameDataCacheKey");

            let storedProcessRequestByName: string = parameterInputs.Parameters.getValue("parameterProcessRequestByName") ? parameterInputs.Parameters.getValue("parameterProcessRequestByName") : "";

            this._storedProcessRequestName = storedInputRequestName;

            //#endregion

            //#region MEMORIZE extra data

            this._storedProcessRequestExtraData.KeyValuePairs.setValue("storedAPILocationLocalNodeJS", Object.assign(this.APILocationLocalNodeJS, Object));
            this._storedProcessRequestExtraData.KeyValuePairs.setValue("storedAPILocationLocalDotNetCore", Object.assign(this.APILocationLocalDotNetCore, Object));

            this._storedProcessRequestExtraData.KeyValuePairs.setValue("storedAPILocationRemote", Object.assign(this.APILocationRemote, Object));

            this._storedProcessRequestExtraData.KeyValuePairs.setValue("storedInputRequestName", storedInputRequestName);
            this._storedProcessRequestExtraData.KeyValuePairs.setValue("storedInputRequestNameParameters", storedInputRequestNameParameters);

            //#endregion

            //#region MEMORIZE storyline details

            this._storedProcessRequestDataStorylineDetails = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            this._storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails_Parameters");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region ASSIGN request handler

            try
            {
                //#region IDEAL CASE - USE director or experience

                switch (storedInputRequestName.toUpperCase())
                {
                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_1_CREATEHOMESCREENFORALL_HANDLER_1_0":
                        storedProcessRequestHandler = this.Create_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreen_Handler_1_0(parameterInputs);

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_1_READHOMESCREENFORALL_HANDLER_1_0":
                        storedProcessRequestHandler = this.Create_Director_Of_WebDevelopment_Chapter_12_3_Page_1_OutputHomeScreen_Handler_1_0(parameterInputs);

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_2_READPRESALESSCREENFORALL_HANDLER_1_0":
                        storedProcessRequestHandler = this.Create_Director_Of_WebDevelopment_Chapter_12_3_Page_2_OutputPresalesScreen_Handler_1_0(parameterInputs);

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_3_READOPTINSCREENFORALL_HANDLER_1_0":
                        storedProcessRequestHandler = this.Create_Director_Of_WebDevelopment_Chapter_12_3_Page_3_OutputOptinScreen_Handler_1_0(parameterInputs);

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_4_READTHANKYOUSCREENFORALL_HANDLER_1_0":
                        storedProcessRequestHandler = this.Create_Director_Of_WebDevelopment_Chapter_12_3_Page_4_OutputThankYouScreen_Handler_1_0(parameterInputs);

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_5_READSALESSCREENFORALL_HANDLER_1_0":
                        storedProcessRequestHandler = this.Create_Director_Of_WebDevelopment_Chapter_12_3_Page_5_OutputSalesScreen_Handler_1_0(parameterInputs);

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_6_READORDERFORMSCREENFORALL_HANDLER_1_0":
                        storedProcessRequestHandler = this.Create_Director_Of_WebDevelopment_Chapter_12_3_Page_6_OutputOrderFormScreen_Handler_1_0(parameterInputs);

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_7_READOTOSCREENFORALL_HANDLER_1_0":
                        storedProcessRequestHandler = this.Create_Director_Of_WebDevelopment_Chapter_12_3_Page_7_OutputOTOScreen_Handler_1_0(parameterInputs);

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_8_READWEBINARSCREENFORALL_HANDLER_1_0":
                        storedProcessRequestHandler = this.Create_Director_Of_WebDevelopment_Chapter_12_3_Page_8_OutputWebinarScreen_Handler_1_0(parameterInputs);

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_9_READMEMBERSHIPSCREENFORALL_HANDLER_1_0":
                        storedProcessRequestHandler = this.Create_Director_Of_WebDevelopment_Chapter_12_3_Page_9_OutputMembershipScreen_Handler_1_0(parameterInputs);

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_10_READAFFILIATESCREENFORALL_HANDLER_1_0":
                        storedProcessRequestHandler = this.Create_Director_Of_WebDevelopment_Chapter_12_3_Page_10_OutputAffiliateScreen_Handler_1_0(parameterInputs);

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_11_READOTHERSCREENFORALL_HANDLER_1_0":
                        storedProcessRequestHandler = this.Create_Director_Of_WebDevelopment_Chapter_12_3_Page_11_OutputOtherScreen_Handler_1_0(parameterInputs);

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_12_READADVANCEDSCREENFORALL_HANDLER_1_0":
                        storedProcessRequestHandler = this.Create_Director_Of_WebDevelopment_Chapter_12_3_Page_12_OutputAdvancedScreen_Handler_1_0(parameterInputs);

                        break;

                    case "EXPERIENCE_THE_HEAR_OFTHEAPISERVER_MESSAGE_12_3_1_0":
                        storedProcessRequestHandler = this.Create_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0(parameterInputs);

                        break;
                }

                //#endregion
            }
            catch (storedProcessRequestMistake)
            {
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

                throw storedProcessRequestMistake;

                //#endregion
            }

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN request handler

            //#region IDEAL CASE - USE experienece or director

            return storedProcessRequestHandler;

            //#endregion

            //#endregion

            //#endregion
        }

        //#region Page 1
        private Create_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreen_Handler_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): object
        {
            //#region 1. INPUTS

            //#region MEMORIZE data repository

            let storedRepositoryType: string = process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER ? process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER : "LOCAL_FILE";

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (parameterInputs.Parameters.getValue("parameterProcessRequestExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") ? parameterInputs.Parameters.getValue("parameterProcessRequestExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") : null);

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONFIGURATING request handler");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", this._storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Studio_Automation_WebDevelopment_Chapter_12_3_Page_0_ControlNicheMaster_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Create_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreen_Handler_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALBeginOfProcess", true);

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region CONFIGURE request handler

            //#region IDEAL CASE - USE director

            let storedProcessRequestHandler_Director = null; //new Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreen_Handler_1_0.BaseDI.Professional.Director.Web_Development_3.Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreen_Handler_1_0(parameterInputs);

            storedProcessRequestHandler_Director.ClientOrServerInstance = this._storedProcessRequestTracker;

            storedProcessRequestHandler_Director.ExtraData = this._storedProcessRequestExtraData;

            storedProcessRequestHandler_Director.MasterStorer = this._storedProcessRequestCentralizedStorer;
            storedProcessRequestHandler_Director.MasterDisturber = this._storedProcessRequestCentralizedDisturber;
            storedProcessRequestHandler_Director.MasterSensor = this._storedProcessRequestCentralizedSensor;

            storedProcessRequestHandler_Director.StorylineDetails = this._storedProcessRequestDataStorylineDetails;
            storedProcessRequestHandler_Director.StorylineDetails_Parameters = this._storedProcessRequestDataStorylineDetails_Parameters;   

            switch (storedRepositoryType.toUpperCase()) {
                case "LOCAL_FILE":
                    storedProcessRequestHandler_Director.Repository = null; //new 
                    storedProcessRequestHandler_Director.Repository.RequestName = this._storedProcessRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedProcessRequestHandler_Director.Repository = null; //new 
                    storedProcessRequestHandler_Director.Repository.RequestName = this._storedProcessRequestName;

                    break;
            }

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN request handler

            //#region IDEAL CASE - USE experienece or director

            return storedProcessRequestHandler_Director;

            //#endregion

            //#endregion

            //#endregion
        }

        private Create_Director_Of_WebDevelopment_Chapter_12_3_Page_1_OutputHomeScreen_Handler_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): object
        {
            //#region 1. INPUTS

            //#region MEMORIZE data repository

            let storedRepositoryType: string = process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER ? process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER : "LOCAL_FILE";

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (parameterInputs.Parameters.getValue("parameterProcessRequestExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") ? parameterInputs.Parameters.getValue("parameterProcessRequestExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") : null);

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONFIGURATING request handler");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", this._storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Studio_Automation_WebDevelopment_Chapter_12_3_Page_0_ControlNicheMaster_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Create_Director_Of_WebDevelopment_Chapter_12_3_Page_1_OutputHomeScreen_Handler_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALBeginOfProcess", true);

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region CONFIGURE request handler

            //#region IDEAL CASE - USE director

            let storedProcessRequestHandler_Director = new Director_Of_WebDevelopment_Chapter_12_3_Page_1_OutputHomeScreen_Handler_1_0.BaseDI.Professional.Director.Web_Development_1.Director_Of_WebDevelopment_Chapter_12_3_Page_1_OutputHomeScreen_Handler_1_0(parameterInputs);

            storedProcessRequestHandler_Director.ClientOrServerInstance = this._storedProcessRequestTracker;

            storedProcessRequestHandler_Director.ExtraData = this._storedProcessRequestExtraData;

            storedProcessRequestHandler_Director.MasterStorer = this._storedProcessRequestCentralizedStorer;
            storedProcessRequestHandler_Director.MasterDisturber = this._storedProcessRequestCentralizedDisturber;
            storedProcessRequestHandler_Director.MasterSensor = this._storedProcessRequestCentralizedSensor;

            storedProcessRequestHandler_Director.StorylineDetails = this._storedProcessRequestDataStorylineDetails;
            storedProcessRequestHandler_Director.StorylineDetails_Parameters = this._storedProcessRequestDataStorylineDetails_Parameters;

            switch (storedRepositoryType.toUpperCase()) {
                case "LOCAL_FILE":
                    storedProcessRequestHandler_Director.Repository = null; //new 
                    storedProcessRequestHandler_Director.Repository.RequestName = this._storedProcessRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedProcessRequestHandler_Director.Repository = null; //new 
                    storedProcessRequestHandler_Director.Repository.RequestName = this._storedProcessRequestName;

                    break;
            }

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN request handler

            //#region IDEAL CASE - USE experienece or director

            return storedProcessRequestHandler_Director;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion

        //#region Page 2

        private Create_Director_Of_WebDevelopment_Chapter_12_3_Page_2_OutputPresalesScreen_Handler_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): object
        {
            //#region 1. INPUTS

            //#region MEMORIZE data repository

            let storedRepositoryType: string = process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER ? process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER : "LOCAL_FILE";

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (parameterInputs.Parameters.getValue("parameterProcessRequestExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") ? parameterInputs.Parameters.getValue("parameterProcessRequestExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") : null);

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONFIGURATING request handler");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", this._storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Studio_Automation_WebDevelopment_Chapter_12_3_Page_0_ControlNicheMaster_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Create_Director_Of_WebDevelopment_Chapter_12_3_Page_2_OutputPresalesScreen_Handler_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALBeginOfProcess", true);

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region CONFIGURE request handler

            //#region IDEAL CASE - USE director

            let storedProcessRequestHandler_Director = new Director_Of_WebDevelopment_Chapter_12_3_Page_2_OutputPresalesScreen_Handler_1_0.BaseDI.Professional.Director.Web_Development_2.Director_Of_WebDevelopment_Chapter_12_3_Page_2_OutputPresalesScreen_Handler_1_0(parameterInputs);

            storedProcessRequestHandler_Director.ClientOrServerInstance = this._storedProcessRequestTracker;

            storedProcessRequestHandler_Director.ExtraData = this._storedProcessRequestExtraData;

            storedProcessRequestHandler_Director.MasterStorer = this._storedProcessRequestCentralizedStorer;
            storedProcessRequestHandler_Director.MasterDisturber = this._storedProcessRequestCentralizedDisturber;
            storedProcessRequestHandler_Director.MasterSensor = this._storedProcessRequestCentralizedSensor;

            storedProcessRequestHandler_Director.StorylineDetails = this._storedProcessRequestDataStorylineDetails;
            storedProcessRequestHandler_Director.StorylineDetails_Parameters = this._storedProcessRequestDataStorylineDetails_Parameters;

            switch (storedRepositoryType.toUpperCase()) {
                case "LOCAL_FILE":
                    storedProcessRequestHandler_Director.Repository = null; //new 
                    storedProcessRequestHandler_Director.Repository.RequestName = this._storedProcessRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedProcessRequestHandler_Director.Repository = null; //new 
                    storedProcessRequestHandler_Director.Repository.RequestName = this._storedProcessRequestName;

                    break;
            }

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN request handler

            //#region IDEAL CASE - USE experienece or director

            return storedProcessRequestHandler_Director;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion

        //#region Page 3

        private Create_Director_Of_WebDevelopment_Chapter_12_3_Page_3_OutputOptinScreen_Handler_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): object
        {
            //#region 1. INPUTS

            //#region MEMORIZE data repository

            let storedRepositoryType: string = process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER ? process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER : "LOCAL_FILE";

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (parameterInputs.Parameters.getValue("parameterProcessRequestExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") ? parameterInputs.Parameters.getValue("parameterProcessRequestExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") : null);

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONFIGURATING request handler");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", this._storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Studio_Automation_WebDevelopment_Chapter_12_3_Page_0_ControlNicheMaster_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Create_Director_Of_WebDevelopment_Chapter_12_3_Page_3_OutputOptinScreen_Handler_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALBeginOfProcess", true);

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region CONFIGURE request handler

            //#region IDEAL CASE - USE director

            let storedProcessRequestHandler_Director = new Director_Of_WebDevelopment_Chapter_12_3_Page_3_OutputOptinScreen_Handler_1_0.BaseDI.Professional.Director.Web_Development_3.Director_Of_WebDevelopment_Chapter_12_3_Page_3_OutputOptinScreen_Handler_1_0(parameterInputs);

            storedProcessRequestHandler_Director.ClientOrServerInstance = this._storedProcessRequestTracker;

            storedProcessRequestHandler_Director.ExtraData = this._storedProcessRequestExtraData;

            storedProcessRequestHandler_Director.MasterStorer = this._storedProcessRequestCentralizedStorer;
            storedProcessRequestHandler_Director.MasterDisturber = this._storedProcessRequestCentralizedDisturber;
            storedProcessRequestHandler_Director.MasterSensor = this._storedProcessRequestCentralizedSensor;

            storedProcessRequestHandler_Director.StorylineDetails = this._storedProcessRequestDataStorylineDetails;
            storedProcessRequestHandler_Director.StorylineDetails_Parameters = this._storedProcessRequestDataStorylineDetails_Parameters;

            switch (storedRepositoryType.toUpperCase()) {
                case "LOCAL_FILE":
                    storedProcessRequestHandler_Director.Repository = null; //new 
                    storedProcessRequestHandler_Director.Repository.RequestName = this._storedProcessRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedProcessRequestHandler_Director.Repository = null; //new 
                    storedProcessRequestHandler_Director.Repository.RequestName = this._storedProcessRequestName;

                    break;
            }

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN request handler

            //#region IDEAL CASE - USE experienece or director

            return storedProcessRequestHandler_Director;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion

        //#region Page 4

        private Create_Director_Of_WebDevelopment_Chapter_12_3_Page_4_OutputThankYouScreen_Handler_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): object
        {
            //#region 1. INPUTS

            //#region MEMORIZE data repository

            let storedRepositoryType: string = process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER ? process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER : "LOCAL_FILE";

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (parameterInputs.Parameters.getValue("parameterProcessRequestExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") ? parameterInputs.Parameters.getValue("parameterProcessRequestExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") : null);

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONFIGURATING request handler");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", this._storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Studio_Automation_WebDevelopment_Chapter_12_3_Page_0_ControlNicheMaster_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Create_Director_Of_WebDevelopment_Chapter_12_3_Page_4_OutputThankYouScreen_Handler_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALBeginOfProcess", true);

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region CONFIGURE request handler

            //#region IDEAL CASE - USE director

            let storedProcessRequestHandler_Director = new Director_Of_WebDevelopment_Chapter_12_3_Page_4_OutputThankYouScreen_Handler_1_0.BaseDI.Professional.Director.Web_Development_4.Director_Of_WebDevelopment_Chapter_12_3_Page_4_OutputThankYouScreen_Handler_1_0(parameterInputs);

            storedProcessRequestHandler_Director.ClientOrServerInstance = this._storedProcessRequestTracker;

            storedProcessRequestHandler_Director.ExtraData = this._storedProcessRequestExtraData;

            storedProcessRequestHandler_Director.MasterStorer = this._storedProcessRequestCentralizedStorer;
            storedProcessRequestHandler_Director.MasterDisturber = this._storedProcessRequestCentralizedDisturber;
            storedProcessRequestHandler_Director.MasterSensor = this._storedProcessRequestCentralizedSensor;

            storedProcessRequestHandler_Director.StorylineDetails = this._storedProcessRequestDataStorylineDetails;
            storedProcessRequestHandler_Director.StorylineDetails_Parameters = this._storedProcessRequestDataStorylineDetails_Parameters;

            switch (storedRepositoryType.toUpperCase()) {
                case "LOCAL_FILE":
                    storedProcessRequestHandler_Director.Repository = null; //new 
                    storedProcessRequestHandler_Director.Repository.RequestName = this._storedProcessRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedProcessRequestHandler_Director.Repository = null; //new 
                    storedProcessRequestHandler_Director.Repository.RequestName = this._storedProcessRequestName;

                    break;
            }

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN request handler

            //#region IDEAL CASE - USE experienece or director

            return storedProcessRequestHandler_Director;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion

        //#region Page 5

        private Create_Director_Of_WebDevelopment_Chapter_12_3_Page_5_OutputSalesScreen_Handler_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): object
        {
            //#region 1. INPUTS

            //#region MEMORIZE data repository

            let storedRepositoryType: string = process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER ? process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER : "LOCAL_FILE";

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (parameterInputs.Parameters.getValue("parameterProcessRequestExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") ? parameterInputs.Parameters.getValue("parameterProcessRequestExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") : null);

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONFIGURATING request handler");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", this._storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Studio_Automation_WebDevelopment_Chapter_12_3_Page_0_ControlNicheMaster_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Create_Director_Of_WebDevelopment_Chapter_12_3_Page_5_OutputSalesScreen_Handler_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALBeginOfProcess", true);

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region CONFIGURE request handler

            //#region IDEAL CASE - USE director

            let storedProcessRequestHandler_Director = new Director_Of_WebDevelopment_Chapter_12_3_Page_5_OutputSalesScreen_Handler_1_0.BaseDI.Professional.Director.Web_Development_5.Director_Of_WebDevelopment_Chapter_12_3_Page_5_OutputSalesScreen_Handler_1_0(parameterInputs);

            storedProcessRequestHandler_Director.ClientOrServerInstance = this._storedProcessRequestTracker;

            storedProcessRequestHandler_Director.ExtraData = this._storedProcessRequestExtraData;

            storedProcessRequestHandler_Director.MasterStorer = this._storedProcessRequestCentralizedStorer;
            storedProcessRequestHandler_Director.MasterDisturber = this._storedProcessRequestCentralizedDisturber;
            storedProcessRequestHandler_Director.MasterSensor = this._storedProcessRequestCentralizedSensor;

            storedProcessRequestHandler_Director.StorylineDetails = this._storedProcessRequestDataStorylineDetails;
            storedProcessRequestHandler_Director.StorylineDetails_Parameters = this._storedProcessRequestDataStorylineDetails_Parameters;

            switch (storedRepositoryType.toUpperCase()) {
                case "LOCAL_FILE":
                    storedProcessRequestHandler_Director.Repository = null; //new 
                    storedProcessRequestHandler_Director.Repository.RequestName = this._storedProcessRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedProcessRequestHandler_Director.Repository = null; //new 
                    storedProcessRequestHandler_Director.Repository.RequestName = this._storedProcessRequestName;

                    break;
            }

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN request handler

            //#region IDEAL CASE - USE experienece or director

            return storedProcessRequestHandler_Director;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion

        //#region Page 6

        private Create_Director_Of_WebDevelopment_Chapter_12_3_Page_6_OutputOrderFormScreen_Handler_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): object
        {
            //#region 1. INPUTS

            //#region MEMORIZE data repository

            let storedRepositoryType: string = process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER ? process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER : "LOCAL_FILE";

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (parameterInputs.Parameters.getValue("parameterProcessRequestExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") ? parameterInputs.Parameters.getValue("parameterProcessRequestExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") : null);

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONFIGURATING request handler");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", this._storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Studio_Automation_WebDevelopment_Chapter_12_3_Page_0_ControlNicheMaster_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Create_Director_Of_WebDevelopment_Chapter_12_3_Page_6_OutputOrderFormScreen_Handler_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALBeginOfProcess", true);

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region CONFIGURE request handler

            //#region IDEAL CASE - USE director

            let storedProcessRequestHandler_Director = new Director_Of_WebDevelopment_Chapter_12_3_Page_6_OutputOrderFormScreen_Handler_1_0.BaseDI.Professional.Director.Web_Development_6.Director_Of_WebDevelopment_Chapter_12_3_Page_6_OutputOrderFormScreen_Handler_1_0(parameterInputs);

            storedProcessRequestHandler_Director.ClientOrServerInstance = this._storedProcessRequestTracker;

            storedProcessRequestHandler_Director.ExtraData = this._storedProcessRequestExtraData;

            storedProcessRequestHandler_Director.MasterStorer = this._storedProcessRequestCentralizedStorer;
            storedProcessRequestHandler_Director.MasterDisturber = this._storedProcessRequestCentralizedDisturber;
            storedProcessRequestHandler_Director.MasterSensor = this._storedProcessRequestCentralizedSensor;

            storedProcessRequestHandler_Director.StorylineDetails = this._storedProcessRequestDataStorylineDetails;
            storedProcessRequestHandler_Director.StorylineDetails_Parameters = this._storedProcessRequestDataStorylineDetails_Parameters;

            switch (storedRepositoryType.toUpperCase()) {
                case "LOCAL_FILE":
                    storedProcessRequestHandler_Director.Repository = null; //new 
                    storedProcessRequestHandler_Director.Repository.RequestName = this._storedProcessRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedProcessRequestHandler_Director.Repository = null; //new 
                    storedProcessRequestHandler_Director.Repository.RequestName = this._storedProcessRequestName;

                    break;
            }

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN request handler

            //#region IDEAL CASE - USE experienece or director

            return storedProcessRequestHandler_Director;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion

        //#region Page 7

        private Create_Director_Of_WebDevelopment_Chapter_12_3_Page_7_OutputOTOScreen_Handler_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): object
        {
            //#region 1. INPUTS

            //#region MEMORIZE data repository

            let storedRepositoryType: string = process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER ? process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER : "LOCAL_FILE";

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (parameterInputs.Parameters.getValue("parameterProcessRequestExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") ? parameterInputs.Parameters.getValue("parameterProcessRequestExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") : null);

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONFIGURATING request handler");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", this._storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Studio_Automation_WebDevelopment_Chapter_12_3_Page_0_ControlNicheMaster_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Create_Director_Of_WebDevelopment_Chapter_12_3_Page_7_OutputOTOScreen_Handler_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALBeginOfProcess", true);

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region CONFIGURE request handler

            //#region IDEAL CASE - USE director

            let storedProcessRequestHandler_Director = new Director_Of_WebDevelopment_Chapter_12_3_Page_7_OutputOTOScreen_Handler_1_0.BaseDI.Professional.Director.Web_Development_7.Director_Of_WebDevelopment_Chapter_12_3_Page_7_OutputOTOScreen_Handler_1_0(parameterInputs);

            storedProcessRequestHandler_Director.ClientOrServerInstance = this._storedProcessRequestTracker;

            storedProcessRequestHandler_Director.ExtraData = this._storedProcessRequestExtraData;

            storedProcessRequestHandler_Director.MasterStorer = this._storedProcessRequestCentralizedStorer;
            storedProcessRequestHandler_Director.MasterDisturber = this._storedProcessRequestCentralizedDisturber;
            storedProcessRequestHandler_Director.MasterSensor = this._storedProcessRequestCentralizedSensor;

            storedProcessRequestHandler_Director.StorylineDetails = this._storedProcessRequestDataStorylineDetails;
            storedProcessRequestHandler_Director.StorylineDetails_Parameters = this._storedProcessRequestDataStorylineDetails_Parameters;

            switch (storedRepositoryType.toUpperCase()) {
                case "LOCAL_FILE":
                    storedProcessRequestHandler_Director.Repository = null; //new 
                    storedProcessRequestHandler_Director.Repository.RequestName = this._storedProcessRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedProcessRequestHandler_Director.Repository = null; //new 
                    storedProcessRequestHandler_Director.Repository.RequestName = this._storedProcessRequestName;

                    break;
            }

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN request handler

            //#region IDEAL CASE - USE experienece or director

            return storedProcessRequestHandler_Director;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion

        //#region Page 8

        private Create_Director_Of_WebDevelopment_Chapter_12_3_Page_8_OutputWebinarScreen_Handler_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): object
        {
            //#region 1. INPUTS

            //#region MEMORIZE data repository

            let storedRepositoryType: string = process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER ? process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER : "LOCAL_FILE";

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (parameterInputs.Parameters.getValue("parameterProcessRequestExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") ? parameterInputs.Parameters.getValue("parameterProcessRequestExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") : null);

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONFIGURATING request handler");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", this._storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Studio_Automation_WebDevelopment_Chapter_12_3_Page_0_ControlNicheMaster_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Create_Director_Of_WebDevelopment_Chapter_12_3_Page_8_OutputWebinarScreen_Handler_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALBeginOfProcess", true);

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region CONFIGURE request handler

            //#region IDEAL CASE - USE director

            let storedProcessRequestHandler_Director = new Director_Of_WebDevelopment_Chapter_12_3_Page_8_OutputWebinarScreen_Handler_1_0.BaseDI.Professional.Director.Web_Development_8.Director_Of_WebDevelopment_Chapter_12_3_Page_8_OutputWebinarScreen_Handler_1_0(parameterInputs);

            storedProcessRequestHandler_Director.ClientOrServerInstance = this._storedProcessRequestTracker;

            storedProcessRequestHandler_Director.ExtraData = this._storedProcessRequestExtraData;

            storedProcessRequestHandler_Director.MasterStorer = this._storedProcessRequestCentralizedStorer;
            storedProcessRequestHandler_Director.MasterDisturber = this._storedProcessRequestCentralizedDisturber;
            storedProcessRequestHandler_Director.MasterSensor = this._storedProcessRequestCentralizedSensor;

            storedProcessRequestHandler_Director.StorylineDetails = this._storedProcessRequestDataStorylineDetails;
            storedProcessRequestHandler_Director.StorylineDetails_Parameters = this._storedProcessRequestDataStorylineDetails_Parameters;

            switch (storedRepositoryType.toUpperCase()) {
                case "LOCAL_FILE":
                    storedProcessRequestHandler_Director.Repository = null; //new 
                    storedProcessRequestHandler_Director.Repository.RequestName = this._storedProcessRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedProcessRequestHandler_Director.Repository = null; //new 
                    storedProcessRequestHandler_Director.Repository.RequestName = this._storedProcessRequestName;

                    break;
            }

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN request handler

            //#region IDEAL CASE - USE experienece or director

            return storedProcessRequestHandler_Director;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion

        //#region Page 9

        private Create_Director_Of_WebDevelopment_Chapter_12_3_Page_9_OutputMembershipScreen_Handler_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): object
        {
            //#region 1. INPUTS

            //#region MEMORIZE data repository

            let storedRepositoryType: string = process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER ? process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER : "LOCAL_FILE";

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (parameterInputs.Parameters.getValue("parameterProcessRequestExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") ? parameterInputs.Parameters.getValue("parameterProcessRequestExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") : null);

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONFIGURATING request handler");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", this._storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Studio_Automation_WebDevelopment_Chapter_12_3_Page_0_ControlNicheMaster_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Create_Director_Of_WebDevelopment_Chapter_12_3_Page_9_OutputMembershipScreen_Handler_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALBeginOfProcess", true);

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region CONFIGURE request handler

            //#region IDEAL CASE - USE director

            let storedProcessRequestHandler_Director = new Director_Of_WebDevelopment_Chapter_12_3_Page_9_OutputMembershipScreen_Handler_1_0.BaseDI.Professional.Director.Web_Development_9.Director_Of_WebDevelopment_Chapter_12_3_Page_9_OutputMembershipScreen_Handler_1_0(parameterInputs);

            storedProcessRequestHandler_Director.ClientOrServerInstance = this._storedProcessRequestTracker;

            storedProcessRequestHandler_Director.ExtraData = this._storedProcessRequestExtraData;

            storedProcessRequestHandler_Director.MasterStorer = this._storedProcessRequestCentralizedStorer;
            storedProcessRequestHandler_Director.MasterDisturber = this._storedProcessRequestCentralizedDisturber;
            storedProcessRequestHandler_Director.MasterSensor = this._storedProcessRequestCentralizedSensor;

            storedProcessRequestHandler_Director.StorylineDetails = this._storedProcessRequestDataStorylineDetails;
            storedProcessRequestHandler_Director.StorylineDetails_Parameters = this._storedProcessRequestDataStorylineDetails_Parameters;

            switch (storedRepositoryType.toUpperCase()) {
                case "LOCAL_FILE":
                    storedProcessRequestHandler_Director.Repository = null; //new 
                    storedProcessRequestHandler_Director.Repository.RequestName = this._storedProcessRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedProcessRequestHandler_Director.Repository = null; //new 
                    storedProcessRequestHandler_Director.Repository.RequestName = this._storedProcessRequestName;

                    break;
            }

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN request handler

            //#region IDEAL CASE - USE experienece or director

            return storedProcessRequestHandler_Director;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion

        //#region Page 10

        private Create_Director_Of_WebDevelopment_Chapter_12_3_Page_10_OutputAffiliateScreen_Handler_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): object
        {
            //#region 1. INPUTS

            //#region MEMORIZE data repository

            let storedRepositoryType: string = process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER ? process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER : "LOCAL_FILE";

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (parameterInputs.Parameters.getValue("parameterProcessRequestExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") ? parameterInputs.Parameters.getValue("parameterProcessRequestExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") : null);

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONFIGURATING request handler");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", this._storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Studio_Automation_WebDevelopment_Chapter_12_3_Page_0_ControlNicheMaster_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Create_Director_Of_WebDevelopment_Chapter_12_3_Page_10_OutputAffiliateScreen_Handler_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALBeginOfProcess", true);

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region CONFIGURE request handler

            //#region IDEAL CASE - USE director

            let storedProcessRequestHandler_Director = new Director_Of_WebDevelopment_Chapter_12_3_Page_10_OutputAffiliateScreen_Handler_1_0.BaseDI.Professional.Director.Web_Development_10.Director_Of_WebDevelopment_Chapter_12_3_Page_10_OutputAffiliateScreen_Handler_1_0(parameterInputs);

            storedProcessRequestHandler_Director.ClientOrServerInstance = this._storedProcessRequestTracker;

            storedProcessRequestHandler_Director.ExtraData = this._storedProcessRequestExtraData;

            storedProcessRequestHandler_Director.MasterStorer = this._storedProcessRequestCentralizedStorer;
            storedProcessRequestHandler_Director.MasterDisturber = this._storedProcessRequestCentralizedDisturber;
            storedProcessRequestHandler_Director.MasterSensor = this._storedProcessRequestCentralizedSensor;

            storedProcessRequestHandler_Director.StorylineDetails = this._storedProcessRequestDataStorylineDetails;
            storedProcessRequestHandler_Director.StorylineDetails_Parameters = this._storedProcessRequestDataStorylineDetails_Parameters;

            switch (storedRepositoryType.toUpperCase()) {
                case "LOCAL_FILE":
                    storedProcessRequestHandler_Director.Repository = null; //new 
                    storedProcessRequestHandler_Director.Repository.RequestName = this._storedProcessRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedProcessRequestHandler_Director.Repository = null; //new 
                    storedProcessRequestHandler_Director.Repository.RequestName = this._storedProcessRequestName;

                    break;
            }

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN request handler

            //#region IDEAL CASE - USE experienece or director

            return storedProcessRequestHandler_Director;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion

        //#region Page 11

        private Create_Director_Of_WebDevelopment_Chapter_12_3_Page_11_OutputOtherScreen_Handler_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): object
        {
            //#region 1. INPUTS

            //#region MEMORIZE data repository

            let storedRepositoryType: string = process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER ? process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER : "LOCAL_FILE";

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (parameterInputs.Parameters.getValue("parameterProcessRequestExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") ? parameterInputs.Parameters.getValue("parameterProcessRequestExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") : null);

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONFIGURATING request handler");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", this._storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Studio_Automation_WebDevelopment_Chapter_12_3_Page_0_ControlNicheMaster_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Create_Director_Of_WebDevelopment_Chapter_12_3_Page_11_OutputOtherScreen_Handler_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALBeginOfProcess", true);

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region CONFIGURE request handler

            //#region IDEAL CASE - USE director

            let storedProcessRequestHandler_Director = new Director_Of_WebDevelopment_Chapter_12_3_Page_11_OutputOtherScreen_Handler_1_0.BaseDI.Professional.Director.Web_Development_11.Director_Of_WebDevelopment_Chapter_12_3_Page_11_OutputOtherScreen_Handler_1_0(parameterInputs);

            storedProcessRequestHandler_Director.ClientOrServerInstance = this._storedProcessRequestTracker;

            storedProcessRequestHandler_Director.ExtraData = this._storedProcessRequestExtraData;

            storedProcessRequestHandler_Director.MasterStorer = this._storedProcessRequestCentralizedStorer;
            storedProcessRequestHandler_Director.MasterDisturber = this._storedProcessRequestCentralizedDisturber;
            storedProcessRequestHandler_Director.MasterSensor = this._storedProcessRequestCentralizedSensor;

            storedProcessRequestHandler_Director.StorylineDetails = this._storedProcessRequestDataStorylineDetails;
            storedProcessRequestHandler_Director.StorylineDetails_Parameters = this._storedProcessRequestDataStorylineDetails_Parameters;

            switch (storedRepositoryType.toUpperCase()) {
                case "LOCAL_FILE":
                    storedProcessRequestHandler_Director.Repository = null; //new 
                    storedProcessRequestHandler_Director.Repository.RequestName = this._storedProcessRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedProcessRequestHandler_Director.Repository = null; //new 
                    storedProcessRequestHandler_Director.Repository.RequestName = this._storedProcessRequestName;

                    break;
            }

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN request handler

            //#region IDEAL CASE - USE experienece or director

            return storedProcessRequestHandler_Director;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion

        //#region Page 12

        private Create_Director_Of_WebDevelopment_Chapter_12_3_Page_12_OutputAdvancedScreen_Handler_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): object
        {
            //#region 1. INPUTS

            //#region MEMORIZE data repository

            let storedRepositoryType: string = process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER ? process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER : "LOCAL_FILE";

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (parameterInputs.Parameters.getValue("parameterProcessRequestExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") ? parameterInputs.Parameters.getValue("parameterProcessRequestExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") : null);

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONFIGURATING request handler");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", this._storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Studio_Automation_WebDevelopment_Chapter_12_3_Page_0_ControlNicheMaster_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Create_Director_Of_WebDevelopment_Chapter_12_3_Page_12_OutputAdvancedScreen_Handler_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALBeginOfProcess", true);

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region CONFIGURE request handler

            //#region IDEAL CASE - USE director

            let storedProcessRequestHandler_Director = new Director_Of_WebDevelopment_Chapter_12_3_Page_12_OutputAdvancedScreen_Handler_1_0.BaseDI.Professional.Director.Web_Development_12.Director_Of_WebDevelopment_Chapter_12_3_Page_12_OutputAdvancedScreen_Handler_1_0(parameterInputs);

            storedProcessRequestHandler_Director.ClientOrServerInstance = this._storedProcessRequestTracker;

            storedProcessRequestHandler_Director.ExtraData = this._storedProcessRequestExtraData;

            storedProcessRequestHandler_Director.MasterStorer = this._storedProcessRequestCentralizedStorer;
            storedProcessRequestHandler_Director.MasterDisturber = this._storedProcessRequestCentralizedDisturber;
            storedProcessRequestHandler_Director.MasterSensor = this._storedProcessRequestCentralizedSensor;

            storedProcessRequestHandler_Director.StorylineDetails = this._storedProcessRequestDataStorylineDetails;
            storedProcessRequestHandler_Director.StorylineDetails_Parameters = this._storedProcessRequestDataStorylineDetails_Parameters;

            switch (storedRepositoryType.toUpperCase()) {
                case "LOCAL_FILE":
                    storedProcessRequestHandler_Director.Repository = null; //new 
                    storedProcessRequestHandler_Director.Repository.RequestName = this._storedProcessRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedProcessRequestHandler_Director.Repository = null; //new 
                    storedProcessRequestHandler_Director.Repository.RequestName = this._storedProcessRequestName;

                    break;
            }

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN request handler

            //#region IDEAL CASE - USE experienece or director

            return storedProcessRequestHandler_Director;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion

        //#region Page 13

        private Create_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): object
        {
            //#region 1. INPUTS

            //#region MEMORIZE data repository

            let storedRepositoryType: string = process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER ? process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER : "LOCAL_FILE";

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (parameterInputs.Parameters.getValue("parameterProcessRequestExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") ? parameterInputs.Parameters.getValue("parameterProcessRequestExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") : null);

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONFIGURATING request handler");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", this._storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Studio_Automation_WebDevelopment_Chapter_12_3_Page_0_ControlNicheMaster_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Create_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALBeginOfProcess", true);

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region CONFIGURE request handler

            //#region IDEAL CASE - USE director

            let storedProcessRequestHandler_Experience = new Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.BaseDI.Professional.Experience.Hear.Web_Development_13.Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0(parameterInputs);

            storedProcessRequestHandler_Experience.ClientOrServerInstance = this._storedProcessRequestTracker;

            storedProcessRequestHandler_Experience.ExtraData = this._storedProcessRequestExtraData;

            storedProcessRequestHandler_Experience.MasterStorer = this._storedProcessRequestCentralizedStorer;
            storedProcessRequestHandler_Experience.MasterDisturber = this._storedProcessRequestCentralizedDisturber;
            storedProcessRequestHandler_Experience.MasterSensor = this._storedProcessRequestCentralizedSensor;

            storedProcessRequestHandler_Experience.StorylineDetails = this._storedProcessRequestDataStorylineDetails;
            storedProcessRequestHandler_Experience.StorylineDetails_Parameters = this._storedProcessRequestDataStorylineDetails_Parameters;

            switch (storedRepositoryType.toUpperCase()) {
                case "LOCAL_FILE":
                    storedProcessRequestHandler_Experience.Repository = new LocalFile_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.BaseDI.Professional.State.Web_Development_13.LocalFile_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0(parameterInputs);
                    storedProcessRequestHandler_Experience.Repository.RequestName = this._storedProcessRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedProcessRequestHandler_Experience.Repository = new RemoteService_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.BaseDI.Professional.State.Web_Development_13.RemoteService_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0(parameterInputs);
                    storedProcessRequestHandler_Experience.Repository.RequestName = this._storedProcessRequestName;

                    break;
            }

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN request handler

            //#region IDEAL CASE - USE experienece or director

            return storedProcessRequestHandler_Experience;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion

        //#endregion

    }
}