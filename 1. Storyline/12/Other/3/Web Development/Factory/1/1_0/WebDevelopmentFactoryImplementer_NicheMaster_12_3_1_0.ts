//#region Imports

//#region BaseDI

//0. SCRIPT - ABSTRACT, BASE & INTERFACE CLASSES
import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0"
import * as aClass_Programming_ScriptNicheMaster_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptNicheMaster_12_2_1_0"
import * as aClass_Programming_ScriptRoutable_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptRoutable_12_2_1_0";

import * as Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0 from "../../../../../../../../0. Script/Extensions/11/Automate Manual Task/1/Risk Management/Method/0/1_0/Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0";
import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

import * as ExtraData_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";

import * as SingleParmPoco_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

//1. STORYLINE - CORE FEATURES
import * as Implement_DesignPattern_Factory_Master_12_2_1_0 from "../../../../../../../../1. Storyline/12/Other/2/Programming/Studio/1/1_0/ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

//4. EXPERIENCES - SHARED FEATURES
import * as Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0 from "../../../../../../../../4. Experience/6/Hear/12/Other/3/Web Development/Experience/13/1_0/Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0";

//6. STATE - LOCAL REPOSITORIES
//import * as LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0 from "../../../../../../../../6. State/12/Other/3/Web Development/Repository/1/1_0/LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0";
import * as LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0 from "../../../../../../../../6. State/12/Other/3/Web Development/Repository/1/1_0/LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0";
import * as LocalFile_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0 from "../../../../../../../../6. State/12/Other/3/Web Development/Repository/13/1_0/LocalFile_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0";

//6. STATE - REMOTE REPOSITORIES
//import * as RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0 from "../../../../../../../../6. State/12/Other/3/Web Development/Repository/1/1_0/RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0";
import * as RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0 from "../../../../../../../../6. State/12/Other/3/Web Development/Repository/1/1_0/RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0";
import * as RemoveService_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0 from "../../../../../../../../6. State/12/Other/3/Web Development/Repository/13/1_0/RemoveService_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0";

//7. DIRECTOR - PROPRIETARY FEATURES
//import * as Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0 from "../../../../../../../../7. Director/12/Other/3/Web Development/Director/1/1_0/Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0";
import * as Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0 from "../../../../../../../../7. Director/12/Other/3/Web Development/Director/1/1_0/Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0";
import * as Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0 from "../../../../../../../../7. Director/12/Other/3/Web Development/Director/2/1_0/Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0";
import * as Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0 from "../../../../../../../../7. Director/12/Other/3/Web Development/Director/3/1_0/Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0";
import * as Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0 from "../../../../../../../../7. Director/12/Other/3/Web Development/Director/4/1_0/Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0";
import * as Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0 from "../../../../../../../../7. Director/12/Other/3/Web Development/Director/5/1_0/Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0";
import * as Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0 from "../../../../../../../../7. Director/12/Other/3/Web Development/Director/6/1_0/Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0";
import * as Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0 from "../../../../../../../../7. Director/12/Other/3/Web Development/Director/7/1_0/Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0";
import * as Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0 from "../../../../../../../../7. Director/12/Other/3/Web Development/Director/8/1_0/Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0";
import * as Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0 from "../../../../../../../../7. Director/12/Other/3/Web Development/Director/9/1_0/Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0";
import * as Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0 from "../../../../../../../../7. Director/12/Other/3/Web Development/Director/10/1_0/Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0";
import * as Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0 from "../../../../../../../../7. Director/12/Other/3/Web Development/Director/11/1_0/Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0";
import * as Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0 from "../../../../../../../../7. Director/12/Other/3/Web Development/Director/12/1_0/Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0";

//#endregion

//#region 3rd Party Core

//#endregion

//#endregion

export namespace BaseDI.Professional.Story.Web_Development_1 {
    export class WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0 extends aClass_Programming_ScriptNicheMaster_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptNicheMaster_12_2_1_0<object>
    {
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
        constructor(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0)
        {
            super();

            //#region 1. INPUTS

            //#region DEFINE clientOrServer instance

            this._storedClientOrServerInstance = null;

            //#endregion

            //#region MEMORIZE extra data

            this._storedExtraData = parameterInputs.Parameters.getValue("parameterExtraData") ? parameterInputs.Parameters.getValue("parameterExtraData") : null;

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
                storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "ASSIGNING request handler");
                storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", storedClientOrServerInstance["storedActionName"]);
                storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", storedClientOrServerInstance["storedAppSettings"]);
                storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", storedClientOrServerInstance);
                storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0.ts");
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
                else
                {
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
            await ValidateInputs(parameterInputs);

            //#endregion

            //#region DEFINE request handler

            let storedRequestHandler: any = null;

            //#endregion

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

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (parameterInputs.Parameters.getValue("parameterExtraData")?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") ? parameterInputs.Parameters.getValue("parameterExtraData")?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") : null);

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "CONFIGURATING request handler");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", this._storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", this._storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Action");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALBeginOfProcess", true);

            //#endregion

            //#region MEMORIZE request details

            let storedClientRequestByName: string = parameterInputs.Parameters.getValue("parameterClientRequestByName");
            let storedClientRequestByNameParameters: string = parameterInputs.Parameters.getValue("parameterClientRequestByNameParameters");

            let storedSystemRequestByName: string = parameterInputs.Parameters.getValue("parameterSystemRequestByName") ? parameterInputs.Parameters.getValue("parameterSystemRequestByName") : "";

            this._storedRequestName = storedClientRequestByName;

            //#endregion

            //#region MEMORIZE extra data

            this._storedExtraData.KeyValuePairs.setValue("storedAPILocationLocalNodeJS", Object.assign(this.APILocationLocalNodeJS, Object));
            this._storedExtraData.KeyValuePairs.setValue("storedAPILocationLocalDotNetCore", Object.assign(this.APILocationLocalDotNetCore, Object));

            this._storedExtraData.KeyValuePairs.setValue("storedAPILocationRemote", Object.assign(this.APILocationRemote, Object));

            this._storedExtraData.KeyValuePairs.setValue("storedClientRequestByName", storedClientRequestByName);
            this._storedExtraData.KeyValuePairs.setValue("storedClientRequestByNameParameters", storedClientRequestByNameParameters);

            //#endregion

            //#region MEMORIZE storyline details

            this._storedStorylineDetails = parameterInputs.Parameters.getValue("parameterStorylineDetails");
            this._storedStorylineDetails_Parameters = parameterInputs.Parameters.getValue("parameterStorylineDetails_Parameters");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region ASSIGN request handler

            try
            {
                //#region IDEAL CASE - USE director or experience

                switch (storedClientRequestByName.toUpperCase())
                {
                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_1_CREATEHOMESCREENFORALL_HANDLER_1_0":
                        storedRequestHandler = this.Create_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0(parameterInputs);

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_1_READHOMESCREENFORALL_HANDLER_1_0":
                        storedRequestHandler = this.Create_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0(parameterInputs);

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_2_READPRESALESSCREENFORALL_HANDLER_1_0":
                        storedRequestHandler = this.Create_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0(parameterInputs);

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_3_READOPTINSCREENFORALL_HANDLER_1_0":
                        storedRequestHandler = this.Create_Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0(parameterInputs);

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_4_READTHANKYOUSCREENFORALL_HANDLER_1_0":
                        storedRequestHandler = this.Create_Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0(parameterInputs);

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_5_READSALESSCREENFORALL_HANDLER_1_0":
                        storedRequestHandler = this.Create_Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0(parameterInputs);

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_6_READORDERFORMSCREENFORALL_HANDLER_1_0":
                        storedRequestHandler = this.Create_Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0(parameterInputs);

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_7_READOTOSCREENFORALL_HANDLER_1_0":
                        storedRequestHandler = this.Create_Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0(parameterInputs);

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_8_READWEBINARSCREENFORALL_HANDLER_1_0":
                        storedRequestHandler = this.Create_Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0(parameterInputs);

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_9_READMEMBERSHIPSCREENFORALL_HANDLER_1_0":
                        storedRequestHandler = this.Create_Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0(parameterInputs);

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_10_READAFFILIATESCREENFORALL_HANDLER_1_0":
                        storedRequestHandler = this.Create_Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0(parameterInputs);

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_11_READOTHERSCREENFORALL_HANDLER_1_0":
                        storedRequestHandler = this.Create_Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0(parameterInputs);

                        break;

                    case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_12_READADVANCEDSCREENFORALL_HANDLER_1_0":
                        storedRequestHandler = this.Create_Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0(parameterInputs);

                        break;

                    case "EXPERIENCE_THE_HEAR_OFTHEAPISERVER_MESSAGE_12_3_1_0":
                        storedRequestHandler = this.Create_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0(parameterInputs);

                        break;
                }

                //#endregion
            }
            catch (mistake)
            {
                //#region EDGE CASE - USE developer logger
                if (storedDeveloperMode) {
                    this._storedClientOrServerInstance["processStepNumber"] = this._storedClientOrServerInstance["processStepNumber"] + 1;

                    storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "FAILED configurating request handler");
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

            //#region RETURN request handler

            //#region IDEAL CASE - USE experienece or director

            return storedRequestHandler;

            //#endregion

            //#endregion

            //#endregion
        }

        //#region Page 1
        private Create_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): object
        {
            //#region 1. INPUTS

            //#region MEMORIZE data repository

            let storedRepositoryType: string = process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER ? process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER : "LOCAL_FILE";

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (parameterInputs.Parameters.getValue("parameterExtraData")?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") ? parameterInputs.Parameters.getValue("parameterExtraData")?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") : null);

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "CONFIGURATING request handler");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", this._storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", this._storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Create_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALBeginOfProcess", true);

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region CONFIGURE request handler

            //#region IDEAL CASE - USE director

            let storedRequestHandler_Director = null; //new Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0.BaseDI.Professional.Director.Web_Development_3.Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0(parameterInputs);

            storedRequestHandler_Director.ClientOrServerInstance = this._storedClientOrServerInstance;

            storedRequestHandler_Director.ExtraData = this._storedExtraData;

            storedRequestHandler_Director.MasterStorer = this._storedCentralizedStorer;
            storedRequestHandler_Director.MasterDisturber = this._storedCentralizedDisturber;
            storedRequestHandler_Director.MasterSensor = this._storedCentralizedSensor;

            storedRequestHandler_Director.StorylineDetails = this._storedStorylineDetails;
            storedRequestHandler_Director.StorylineDetails_Parameters = this._storedStorylineDetails_Parameters;   

            switch (storedRepositoryType.toUpperCase()) {
                case "LOCAL_FILE":
                    storedRequestHandler_Director.Repository = null; //new 
                    storedRequestHandler_Director.Repository.RequestName = this._storedRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedRequestHandler_Director.Repository = null; //new 
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

        private Create_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): object
        {
            //#region 1. INPUTS

            //#region MEMORIZE data repository

            let storedRepositoryType: string = process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER ? process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER : "LOCAL_FILE";

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (parameterInputs.Parameters.getValue("parameterExtraData")?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") ? parameterInputs.Parameters.getValue("parameterExtraData")?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") : null);

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "CONFIGURATING request handler");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", this._storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", this._storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Create_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALBeginOfProcess", true);

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region CONFIGURE request handler

            //#region IDEAL CASE - USE director

            let storedRequestHandler_Director = new Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0.BaseDI.Professional.Director.Web_Development_1.Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0(parameterInputs);

            storedRequestHandler_Director.ClientOrServerInstance = this._storedClientOrServerInstance;

            storedRequestHandler_Director.ExtraData = this._storedExtraData;

            storedRequestHandler_Director.MasterStorer = this._storedCentralizedStorer;
            storedRequestHandler_Director.MasterDisturber = this._storedCentralizedDisturber;
            storedRequestHandler_Director.MasterSensor = this._storedCentralizedSensor;

            storedRequestHandler_Director.StorylineDetails = this._storedStorylineDetails;
            storedRequestHandler_Director.StorylineDetails_Parameters = this._storedStorylineDetails_Parameters;

            switch (storedRepositoryType.toUpperCase()) {
                case "LOCAL_FILE":
                    storedRequestHandler_Director.Repository = null; //new 
                    storedRequestHandler_Director.Repository.RequestName = this._storedRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedRequestHandler_Director.Repository = null; //new 
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

        //#region Page 2

        private Create_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): object
        {
            //#region 1. INPUTS

            //#region MEMORIZE data repository

            let storedRepositoryType: string = process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER ? process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER : "LOCAL_FILE";

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (parameterInputs.Parameters.getValue("parameterExtraData")?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") ? parameterInputs.Parameters.getValue("parameterExtraData")?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") : null);

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "CONFIGURATING request handler");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", this._storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", this._storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Create_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALBeginOfProcess", true);

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region CONFIGURE request handler

            //#region IDEAL CASE - USE director

            let storedRequestHandler_Director = new Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0.BaseDI.Professional.Director.Web_Development_2.Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0(parameterInputs);

            storedRequestHandler_Director.ClientOrServerInstance = this._storedClientOrServerInstance;

            storedRequestHandler_Director.ExtraData = this._storedExtraData;

            storedRequestHandler_Director.MasterStorer = this._storedCentralizedStorer;
            storedRequestHandler_Director.MasterDisturber = this._storedCentralizedDisturber;
            storedRequestHandler_Director.MasterSensor = this._storedCentralizedSensor;

            storedRequestHandler_Director.StorylineDetails = this._storedStorylineDetails;
            storedRequestHandler_Director.StorylineDetails_Parameters = this._storedStorylineDetails_Parameters;

            switch (storedRepositoryType.toUpperCase()) {
                case "LOCAL_FILE":
                    storedRequestHandler_Director.Repository = null; //new 
                    storedRequestHandler_Director.Repository.RequestName = this._storedRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedRequestHandler_Director.Repository = null; //new 
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

        //#region Page 3

        private Create_Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): object
        {
            //#region 1. INPUTS

            //#region MEMORIZE data repository

            let storedRepositoryType: string = process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER ? process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER : "LOCAL_FILE";

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (parameterInputs.Parameters.getValue("parameterExtraData")?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") ? parameterInputs.Parameters.getValue("parameterExtraData")?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") : null);

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "CONFIGURATING request handler");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", this._storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", this._storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Create_Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALBeginOfProcess", true);

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region CONFIGURE request handler

            //#region IDEAL CASE - USE director

            let storedRequestHandler_Director = new Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0.BaseDI.Professional.Director.Web_Development_3.Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0(parameterInputs);

            storedRequestHandler_Director.ClientOrServerInstance = this._storedClientOrServerInstance;

            storedRequestHandler_Director.ExtraData = this._storedExtraData;

            storedRequestHandler_Director.MasterStorer = this._storedCentralizedStorer;
            storedRequestHandler_Director.MasterDisturber = this._storedCentralizedDisturber;
            storedRequestHandler_Director.MasterSensor = this._storedCentralizedSensor;

            storedRequestHandler_Director.StorylineDetails = this._storedStorylineDetails;
            storedRequestHandler_Director.StorylineDetails_Parameters = this._storedStorylineDetails_Parameters;

            switch (storedRepositoryType.toUpperCase()) {
                case "LOCAL_FILE":
                    storedRequestHandler_Director.Repository = null; //new 
                    storedRequestHandler_Director.Repository.RequestName = this._storedRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedRequestHandler_Director.Repository = null; //new 
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

        //#region Page 4

        private Create_Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): object
        {
            //#region 1. INPUTS

            //#region MEMORIZE data repository

            let storedRepositoryType: string = process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER ? process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER : "LOCAL_FILE";

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (parameterInputs.Parameters.getValue("parameterExtraData")?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") ? parameterInputs.Parameters.getValue("parameterExtraData")?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") : null);

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "CONFIGURATING request handler");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", this._storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", this._storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Create_Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALBeginOfProcess", true);

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region CONFIGURE request handler

            //#region IDEAL CASE - USE director

            let storedRequestHandler_Director = new Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0.BaseDI.Professional.Director.Web_Development_4.Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0(parameterInputs);

            storedRequestHandler_Director.ClientOrServerInstance = this._storedClientOrServerInstance;

            storedRequestHandler_Director.ExtraData = this._storedExtraData;

            storedRequestHandler_Director.MasterStorer = this._storedCentralizedStorer;
            storedRequestHandler_Director.MasterDisturber = this._storedCentralizedDisturber;
            storedRequestHandler_Director.MasterSensor = this._storedCentralizedSensor;

            storedRequestHandler_Director.StorylineDetails = this._storedStorylineDetails;
            storedRequestHandler_Director.StorylineDetails_Parameters = this._storedStorylineDetails_Parameters;

            switch (storedRepositoryType.toUpperCase()) {
                case "LOCAL_FILE":
                    storedRequestHandler_Director.Repository = null; //new 
                    storedRequestHandler_Director.Repository.RequestName = this._storedRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedRequestHandler_Director.Repository = null; //new 
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

        //#region Page 5

        private Create_Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): object
        {
            //#region 1. INPUTS

            //#region MEMORIZE data repository

            let storedRepositoryType: string = process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER ? process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER : "LOCAL_FILE";

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (parameterInputs.Parameters.getValue("parameterExtraData")?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") ? parameterInputs.Parameters.getValue("parameterExtraData")?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") : null);

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "CONFIGURATING request handler");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", this._storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", this._storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Create_Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALBeginOfProcess", true);

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region CONFIGURE request handler

            //#region IDEAL CASE - USE director

            let storedRequestHandler_Director = new Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0.BaseDI.Professional.Director.Web_Development_5.Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0(parameterInputs);

            storedRequestHandler_Director.ClientOrServerInstance = this._storedClientOrServerInstance;

            storedRequestHandler_Director.ExtraData = this._storedExtraData;

            storedRequestHandler_Director.MasterStorer = this._storedCentralizedStorer;
            storedRequestHandler_Director.MasterDisturber = this._storedCentralizedDisturber;
            storedRequestHandler_Director.MasterSensor = this._storedCentralizedSensor;

            storedRequestHandler_Director.StorylineDetails = this._storedStorylineDetails;
            storedRequestHandler_Director.StorylineDetails_Parameters = this._storedStorylineDetails_Parameters;

            switch (storedRepositoryType.toUpperCase()) {
                case "LOCAL_FILE":
                    storedRequestHandler_Director.Repository = null; //new 
                    storedRequestHandler_Director.Repository.RequestName = this._storedRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedRequestHandler_Director.Repository = null; //new 
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

        //#region Page 6

        private Create_Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): object
        {
            //#region 1. INPUTS

            //#region MEMORIZE data repository

            let storedRepositoryType: string = process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER ? process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER : "LOCAL_FILE";

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (parameterInputs.Parameters.getValue("parameterExtraData")?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") ? parameterInputs.Parameters.getValue("parameterExtraData")?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") : null);

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "CONFIGURATING request handler");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", this._storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", this._storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Create_Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALBeginOfProcess", true);

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region CONFIGURE request handler

            //#region IDEAL CASE - USE director

            let storedRequestHandler_Director = new Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0.BaseDI.Professional.Director.Web_Development_6.Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0(parameterInputs);

            storedRequestHandler_Director.ClientOrServerInstance = this._storedClientOrServerInstance;

            storedRequestHandler_Director.ExtraData = this._storedExtraData;

            storedRequestHandler_Director.MasterStorer = this._storedCentralizedStorer;
            storedRequestHandler_Director.MasterDisturber = this._storedCentralizedDisturber;
            storedRequestHandler_Director.MasterSensor = this._storedCentralizedSensor;

            storedRequestHandler_Director.StorylineDetails = this._storedStorylineDetails;
            storedRequestHandler_Director.StorylineDetails_Parameters = this._storedStorylineDetails_Parameters;

            switch (storedRepositoryType.toUpperCase()) {
                case "LOCAL_FILE":
                    storedRequestHandler_Director.Repository = null; //new 
                    storedRequestHandler_Director.Repository.RequestName = this._storedRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedRequestHandler_Director.Repository = null; //new 
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

        //#region Page 7

        private Create_Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): object
        {
            //#region 1. INPUTS

            //#region MEMORIZE data repository

            let storedRepositoryType: string = process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER ? process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER : "LOCAL_FILE";

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (parameterInputs.Parameters.getValue("parameterExtraData")?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") ? parameterInputs.Parameters.getValue("parameterExtraData")?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") : null);

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "CONFIGURATING request handler");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", this._storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", this._storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Create_Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALBeginOfProcess", true);

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region CONFIGURE request handler

            //#region IDEAL CASE - USE director

            let storedRequestHandler_Director = new Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0.BaseDI.Professional.Director.Web_Development_7.Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0(parameterInputs);

            storedRequestHandler_Director.ClientOrServerInstance = this._storedClientOrServerInstance;

            storedRequestHandler_Director.ExtraData = this._storedExtraData;

            storedRequestHandler_Director.MasterStorer = this._storedCentralizedStorer;
            storedRequestHandler_Director.MasterDisturber = this._storedCentralizedDisturber;
            storedRequestHandler_Director.MasterSensor = this._storedCentralizedSensor;

            storedRequestHandler_Director.StorylineDetails = this._storedStorylineDetails;
            storedRequestHandler_Director.StorylineDetails_Parameters = this._storedStorylineDetails_Parameters;

            switch (storedRepositoryType.toUpperCase()) {
                case "LOCAL_FILE":
                    storedRequestHandler_Director.Repository = null; //new 
                    storedRequestHandler_Director.Repository.RequestName = this._storedRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedRequestHandler_Director.Repository = null; //new 
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

        //#region Page 8

        private Create_Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): object
        {
            //#region 1. INPUTS

            //#region MEMORIZE data repository

            let storedRepositoryType: string = process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER ? process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER : "LOCAL_FILE";

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (parameterInputs.Parameters.getValue("parameterExtraData")?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") ? parameterInputs.Parameters.getValue("parameterExtraData")?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") : null);

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "CONFIGURATING request handler");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", this._storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", this._storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Create_Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALBeginOfProcess", true);

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region CONFIGURE request handler

            //#region IDEAL CASE - USE director

            let storedRequestHandler_Director = new Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0.BaseDI.Professional.Director.Web_Development_8.Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0(parameterInputs);

            storedRequestHandler_Director.ClientOrServerInstance = this._storedClientOrServerInstance;

            storedRequestHandler_Director.ExtraData = this._storedExtraData;

            storedRequestHandler_Director.MasterStorer = this._storedCentralizedStorer;
            storedRequestHandler_Director.MasterDisturber = this._storedCentralizedDisturber;
            storedRequestHandler_Director.MasterSensor = this._storedCentralizedSensor;

            storedRequestHandler_Director.StorylineDetails = this._storedStorylineDetails;
            storedRequestHandler_Director.StorylineDetails_Parameters = this._storedStorylineDetails_Parameters;

            switch (storedRepositoryType.toUpperCase()) {
                case "LOCAL_FILE":
                    storedRequestHandler_Director.Repository = null; //new 
                    storedRequestHandler_Director.Repository.RequestName = this._storedRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedRequestHandler_Director.Repository = null; //new 
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

        //#region Page 9

        private Create_Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): object
        {
            //#region 1. INPUTS

            //#region MEMORIZE data repository

            let storedRepositoryType: string = process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER ? process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER : "LOCAL_FILE";

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (parameterInputs.Parameters.getValue("parameterExtraData")?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") ? parameterInputs.Parameters.getValue("parameterExtraData")?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") : null);

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "CONFIGURATING request handler");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", this._storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", this._storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Create_Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALBeginOfProcess", true);

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region CONFIGURE request handler

            //#region IDEAL CASE - USE director

            let storedRequestHandler_Director = new Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0.BaseDI.Professional.Director.Web_Development_9.Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0(parameterInputs);

            storedRequestHandler_Director.ClientOrServerInstance = this._storedClientOrServerInstance;

            storedRequestHandler_Director.ExtraData = this._storedExtraData;

            storedRequestHandler_Director.MasterStorer = this._storedCentralizedStorer;
            storedRequestHandler_Director.MasterDisturber = this._storedCentralizedDisturber;
            storedRequestHandler_Director.MasterSensor = this._storedCentralizedSensor;

            storedRequestHandler_Director.StorylineDetails = this._storedStorylineDetails;
            storedRequestHandler_Director.StorylineDetails_Parameters = this._storedStorylineDetails_Parameters;

            switch (storedRepositoryType.toUpperCase()) {
                case "LOCAL_FILE":
                    storedRequestHandler_Director.Repository = null; //new 
                    storedRequestHandler_Director.Repository.RequestName = this._storedRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedRequestHandler_Director.Repository = null; //new 
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

        //#region Page 10

        private Create_Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): object
        {
            //#region 1. INPUTS

            //#region MEMORIZE data repository

            let storedRepositoryType: string = process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER ? process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER : "LOCAL_FILE";

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (parameterInputs.Parameters.getValue("parameterExtraData")?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") ? parameterInputs.Parameters.getValue("parameterExtraData")?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") : null);

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "CONFIGURATING request handler");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", this._storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", this._storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Create_Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALBeginOfProcess", true);

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region CONFIGURE request handler

            //#region IDEAL CASE - USE director

            let storedRequestHandler_Director = new Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0.BaseDI.Professional.Director.Web_Development_10.Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0(parameterInputs);

            storedRequestHandler_Director.ClientOrServerInstance = this._storedClientOrServerInstance;

            storedRequestHandler_Director.ExtraData = this._storedExtraData;

            storedRequestHandler_Director.MasterStorer = this._storedCentralizedStorer;
            storedRequestHandler_Director.MasterDisturber = this._storedCentralizedDisturber;
            storedRequestHandler_Director.MasterSensor = this._storedCentralizedSensor;

            storedRequestHandler_Director.StorylineDetails = this._storedStorylineDetails;
            storedRequestHandler_Director.StorylineDetails_Parameters = this._storedStorylineDetails_Parameters;

            switch (storedRepositoryType.toUpperCase()) {
                case "LOCAL_FILE":
                    storedRequestHandler_Director.Repository = null; //new 
                    storedRequestHandler_Director.Repository.RequestName = this._storedRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedRequestHandler_Director.Repository = null; //new 
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

        //#region Page 11

        private Create_Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): object
        {
            //#region 1. INPUTS

            //#region MEMORIZE data repository

            let storedRepositoryType: string = process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER ? process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER : "LOCAL_FILE";

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (parameterInputs.Parameters.getValue("parameterExtraData")?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") ? parameterInputs.Parameters.getValue("parameterExtraData")?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") : null);

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "CONFIGURATING request handler");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", this._storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", this._storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Create_Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALBeginOfProcess", true);

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region CONFIGURE request handler

            //#region IDEAL CASE - USE director

            let storedRequestHandler_Director = new Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0.BaseDI.Professional.Director.Web_Development_11.Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0(parameterInputs);

            storedRequestHandler_Director.ClientOrServerInstance = this._storedClientOrServerInstance;

            storedRequestHandler_Director.ExtraData = this._storedExtraData;

            storedRequestHandler_Director.MasterStorer = this._storedCentralizedStorer;
            storedRequestHandler_Director.MasterDisturber = this._storedCentralizedDisturber;
            storedRequestHandler_Director.MasterSensor = this._storedCentralizedSensor;

            storedRequestHandler_Director.StorylineDetails = this._storedStorylineDetails;
            storedRequestHandler_Director.StorylineDetails_Parameters = this._storedStorylineDetails_Parameters;

            switch (storedRepositoryType.toUpperCase()) {
                case "LOCAL_FILE":
                    storedRequestHandler_Director.Repository = null; //new 
                    storedRequestHandler_Director.Repository.RequestName = this._storedRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedRequestHandler_Director.Repository = null; //new 
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

        //#region Page 12

        private Create_Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): object
        {
            //#region 1. INPUTS

            //#region MEMORIZE data repository

            let storedRepositoryType: string = process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER ? process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER : "LOCAL_FILE";

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (parameterInputs.Parameters.getValue("parameterExtraData")?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") ? parameterInputs.Parameters.getValue("parameterExtraData")?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") : null);

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "CONFIGURATING request handler");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", this._storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", this._storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Create_Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALBeginOfProcess", true);

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region CONFIGURE request handler

            //#region IDEAL CASE - USE director

            let storedRequestHandler_Director = new Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0.BaseDI.Professional.Director.Web_Development_12.Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0(parameterInputs);

            storedRequestHandler_Director.ClientOrServerInstance = this._storedClientOrServerInstance;

            storedRequestHandler_Director.ExtraData = this._storedExtraData;

            storedRequestHandler_Director.MasterStorer = this._storedCentralizedStorer;
            storedRequestHandler_Director.MasterDisturber = this._storedCentralizedDisturber;
            storedRequestHandler_Director.MasterSensor = this._storedCentralizedSensor;

            storedRequestHandler_Director.StorylineDetails = this._storedStorylineDetails;
            storedRequestHandler_Director.StorylineDetails_Parameters = this._storedStorylineDetails_Parameters;

            switch (storedRepositoryType.toUpperCase()) {
                case "LOCAL_FILE":
                    storedRequestHandler_Director.Repository = null; //new 
                    storedRequestHandler_Director.Repository.RequestName = this._storedRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedRequestHandler_Director.Repository = null; //new 
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

        //#region Page 13

        private Create_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): object
        {
            //#region 1. INPUTS

            //#region MEMORIZE data repository

            let storedRepositoryType: string = process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER ? process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER : "LOCAL_FILE";

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (parameterInputs.Parameters.getValue("parameterExtraData")?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") ? parameterInputs.Parameters.getValue("parameterExtraData")?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") : null);

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "CONFIGURATING request handler");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", this._storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", this._storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Create_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALBeginOfProcess", true);

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region CONFIGURE request handler

            //#region IDEAL CASE - USE director

            let storedRequestHandler_Experience = new Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.BaseDI.Professional.Experience.Hear.Web_Development_13.Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0(parameterInputs);

            storedRequestHandler_Experience.ClientOrServerInstance = this._storedClientOrServerInstance;

            storedRequestHandler_Experience.ExtraData = this._storedExtraData;

            storedRequestHandler_Experience.MasterStorer = this._storedCentralizedStorer;
            storedRequestHandler_Experience.MasterDisturber = this._storedCentralizedDisturber;
            storedRequestHandler_Experience.MasterSensor = this._storedCentralizedSensor;

            storedRequestHandler_Experience.StorylineDetails = this._storedStorylineDetails;
            storedRequestHandler_Experience.StorylineDetails_Parameters = this._storedStorylineDetails_Parameters;

            switch (storedRepositoryType.toUpperCase()) {
                case "LOCAL_FILE":
                    storedRequestHandler_Experience.Repository = new LocalFile_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.BaseDI.Professional.State.Web_Development_13.LocalFile_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0(parameterInputs);
                    storedRequestHandler_Experience.Repository.RequestName = this._storedRequestName;

                    break;
                case "REMOTE_SERVICE":
                    storedRequestHandler_Experience.Repository = new RemoveService_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.BaseDI.Professional.State.Web_Development_13.RemoveService_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0(parameterInputs);
                    storedRequestHandler_Experience.Repository.RequestName = this._storedRequestName;

                    break;
            }

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN request handler

            //#region IDEAL CASE - USE experienece or director

            return storedRequestHandler_Experience;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion

        //#endregion

    }
}