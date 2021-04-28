//#region Imports

//#region BaseDI

import * as aClass_Programming_ScriptExperience_BuilderPattern_12_2_1_0 from "../../../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptExperience_BuilderPattern_12_2_1_0";

import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptRoutable_12_2_1_0 from "../../../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptRoutable_12_2_1_0";

import * as Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "../../../../../../../../../../7. Director/12/Other/2/Programming/Director/1/1_0/Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";

import * as Action_12_2_1_0 from "../../../../../../../../../../0. Script/Parameters/12/Other/2/Programming/Action Poco/1/1_0/Action_12_2_1_0";
import * as ExtraData_12_2_1_0 from "../../../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";
import * as SingleParmPoco_12_2_1_0 from "../../../../../../../../../../0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

import * as Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0 from "../../../../../../../../../../0. Script/Extensions/11/Automate Manual Task/1/Risk Management/Method/0/1_0/Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0";
import * as Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0 from "../../../../../../../../../../0. Script/Extensions/12/Other/3/Web Development/Method/13/1_0/Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0";
import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

import * as ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../../../1. Storyline/12/Other/2/Programming/Studio/1/1_0/ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

//#endregion

//#endregion

export namespace BaseDI.Professional.Experience.Hear.Web_Development_13
{
    export class Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0 extends aClass_Programming_ScriptExperience_BuilderPattern_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptExperience_BuilderPattern_12_2_1_0
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

        public async Action(): Promise<object>
        {
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
                storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0.ts");
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
            await ValidateInputs(this._storedParameterInputs);

            //#endregion

            //#region DEFINE request handler

            let storedRequestHandler_UsingBuilderPattern: Use_DesignPattern_Builder_Experience_12_3_1_0 = null;

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
            storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Action");

            //OPTIONAL
            storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALMiddleOfProcess", true);

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE request handler

            try
            {
                //#region EDGE CASE - USE developer logger

                if (storedDeveloperMode && this._storedClientOrServerInstance["processStepNumber"] == 0) {
                    this._storedClientOrServerInstance["processStepNumber"] += 1;

                    storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Logging"); //Values = Logging or Mistake
                    storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", this._storedClientOrServerInstance["processStepNumber"]);

                    Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                }

                //#endregion

                //#region IDEAL CASE - USE design pattern

                //REQUIRED: Implement one of the design patterns at https://www.dofactory.com/net/design-patterns
                storedRequestHandler_UsingBuilderPattern = new Use_DesignPattern_Builder_Experience_12_3_1_0(this._storedParameterInputs);

                this.StorylineDetails = await storedRequestHandler_UsingBuilderPattern.Action();

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

            //#region IDEAL CASE - USE baseID dataset

            return this.StorylineDetails;

            //#endregion


            //#endregion

            //#endregion
        }

        //#endregion
    }

    //#region 5. Action Script
    export class Use_DesignPattern_Builder_Experience_12_3_1_0
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
        private _storedRepository: IContract_Programming_Repository_12_2_1_0;
        private _storedSystemRequestByName: string;

        //#endregion

        //#region 2. Ready

        constructor(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0)
        {
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

        private HandleDefaults(): void
        {
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

            storedRequestHandler_UsingBuilderPattern = new Implement_DesignPattern_Builder_Experience_12_2_1_0(this._storedParameterInputs);

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

    export class Implement_DesignPattern_Builder_Experience_12_2_1_0 extends aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>
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

        private _storedCentralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _storedCentralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _storedCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;      

        private _storedParameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

        private _storedRequestFileName: string = "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0";
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

        public HandleDefaults() : void
        {
            //#region 1. INPUTS

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "HANDLING request defaults");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", this._storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", this._storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Implement_DesignPattern_Builder_Experience_12_2_1_0 -> HandleDefaults");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALMiddleOfProcess", true);

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process defaults

            try
            {
                //#region IDEAL CASE - USE request parser

                //#endregion
            }
            catch (mistake)
            {
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
        public async Action_5_Process_StorySetting(): Promise<object>
        {
            //#region 1. INPUTS

            //#region DEFINE data response

            let storedDataResponse: any = null;

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            //storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "CONFIGURING web routes");
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", this._storedClientOrServerInstance["storedActionName"]);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", this._storedClientOrServerInstance["storedAppSettings"]);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.ts");
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Action_5_Process_StorySetting");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try
            {
                storedDataResponse = await this.Factory_Action_5_Process_StorySetting();
            }
            catch(mistake)
            {
                throw mistake; //Let "Startup.ts" handle the exception.
            }

            //#endregion

            //#region 3. OUTPUT

            //#region HANDLE execution response
    

            //#endregion

            return storedDataResponse;

            //#endregion
        }

        //Page 1-7
        public async Action_7_Process_StoryResources(): Promise<object>
        {
            //#region 1. INPUTS

            //#region DEFINE data response

            let storedDataResponse: any = null;

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            //storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "CONFIGURING web routes");
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", this._storedClientOrServerInstance["storedActionName"]);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", this._storedClientOrServerInstance["storedAppSettings"]);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.ts");
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Action_7_Process_StoryResources");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try
            {
                storedDataResponse = await this.Factory_Action_7_Process_StoryResources();
            }
            catch (mistake)
            {
                throw mistake; //Let "Startup.ts" handle the exception.
            }
            
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

        //#region B. Action Factories

        //Page 1-5
        private async Factory_Action_5_Process_StorySetting(): Promise<object>
        {
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
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.cs");
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Action -> Action_5_Process_StorySetting -> Factory_Action_5_Process_StorySetting");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process factory

            try
            {
                //#region IDEAL CASE - USE factory method

                if (this._storedActionName.toUpperCase() == Action_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.Action_12_2_1_0._12_3_WEB_DEVELOPMENT_Server_OnLoad_1_0.toUpperCase()) {
                    storedDataResponse = await this.Execute_Action_5_Process_StorySetting_ProcessHttpRequest();
                }

                //#endregion
            }
            catch (mistake)
            {
                throw mistake; //Let "Startup.cs -> Startup_Controller" handle the exception.
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

        //Page 1-7
        private async Factory_Action_7_Process_StoryResources(): Promise<object>
        {
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
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.cs");
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Action -> Action_5_Process_StorySetting -> Factory_Action_5_Process_StorySetting");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process factory

            try
            {
                //#region IDEAL CASE - USE factory method

                if (this._storedActionName.toUpperCase() == Action_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.Action_12_2_1_0._12_3_WEB_DEVELOPMENT_Server_Copy_Static_Files_1_0.toUpperCase()) {
                    storedDataResponse = await this.Execute_Factory_Action_7_Process_StoryResources_CopyStaticFiles();
                }

                //#endregion
            }
            catch (mistake)
            {
                throw mistake; //Let "Startup.cs -> Startup_Controller" handle the exception.
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
        private async Execute_Action_5_Process_StorySetting_ProcessHttpRequest(): Promise<any>
        {
            //#region 1. INPUTS

            //#region DEFINE client response

            let storedClientResponse: any = null;

            //#endregion

            //#region DEFINE data response

            let storedDataResponse: any = null;

            //#endregion

            //#region DEFINE event handlers

            let Action = null;
            let Step_1_0_Framework_Control_ClientRequestToServer_1_0 = null;
            let Step_2_0_Framework_Output_ServerRequestToClient_1_0 = null;

            //#endregion

            //#region DEFINE extra data

            let storedExtraData = new ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

            //#endregion

            //#region DEFINE parameter inputs

            let storedParameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //#endregion

            //#region DEFINE route details

            let storedRoute: any = null;
            let storedRoutesFound: boolean = false;

            //#endregion

            //#region DEFINE server instance

            let storedRouteListDetailsDELETE: Array<any> = null;
            let storedRouteListDetailsGET: Array<any> = null;
            let storedRouteListDetailsPOST: Array<any> = null;
            let storedRouteListDetailsPUT: Array<any> = null;

            let storedServerInstance: any = null;

            //#endregion

            //#region DEFINE server routing

            let storedControllerRoutes: any = null;
            let storedControllerName: string = "";
            let storedControllerModelDataParameter: string = "";
            let storedControllerModelDataObject: any = null;
            let storedControllerModelDataRemote: any = null;

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            //storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "CONFIGURING web routes");
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", _storedClientOrServerInstance["storedActionName"]);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", _storedClientOrServerInstance["storedAppSettings"]);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", _storedClientOrServerInstance);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.cs");
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Action -> Action_5_Process_StorySetting -> Factory_Action_5_Process_StorySetting -> Execute_Action_5_Process_StorySetting_ProcessHttpRequest");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try
            {
                //#region 1. EXECUTE request management

                //#region IDEAL CASE - USE baseDI pipeline

                //#region C. OUTPUT server response

                const ExecuteOutputRequest = (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) => {                 
                    
                    //#region EDGE CASE - USE developer logger
                    if (storedDeveloperMode)
                    {
                        this._storedClientOrServerInstance["storedActionName"] = Action_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.Action_12_2_1_0._12_3_WEB_DEVELOPMENT_Server_Process_ROUTE_HTTP_Request_1_0;
                        this._storedClientOrServerInstance["processStepNumber"] = 0;

                        this._storedExtraData = parameterInputs.Parameters.getValue("parameterExtraData");  

                        storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", this._storedClientOrServerInstance["storedActionName"]);
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALBeginOfProcess", true);
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALMasterLeaderIsSecondStep", true);
                        storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "ROUTING information found - [" + parameterInputs.Parameters.getValue("parameterRouteVerb") + ": '" + this._storedExtraData.KeyValuePairs.getValue("storedServerHTTPRequestInstance").url.match('^[^?]*')[0] + "']");
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Logging"); //Values = Logging or Mistake
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", this._storedClientOrServerInstance["processStepNumber"]);

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);

                        this._storedExtraData.KeyValuePairs.setValue("storedDeveloperLoggingInputs", storedDeveloperLoggingInputs);
                    }
                    //#endregion

                    //#region EDGE CASE - USE updates handler

                    this._storedClientOrServerInstance["StartUpCallBackServer"] = (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): any => {
                        return this._storedStorylineDetails;
                    }

                    //#endregion

                    //#region 1. INPUT request details

                    const Action = (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) => {
                        storedDataResponse = new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Professional.Story.Programming_1.ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0.BaseDI.Professional.Director.Programming_1.Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(storedExtraData))
                            .SetupStoryline(parameterInputs)
                            .Action();
                    }

                    Action(parameterInputs);

                    //#endregion

                    //#region 2. OUTPUT server response

                    storedServerInstance = this._storedExtraData.KeyValuePairs.getValue("storedServerInstance");

                    storedDataResponse.then(storedHttpResponse =>
                    {
                        storedHttpResponse?.outputs[1].baseDIObservations.map(storedObservation => {
                            if (Object.keys(storedObservation).length > 0 && Object.keys(storedObservation)[0].toUpperCase().includes("HTML")) {
                                storedClientResponse = unescape(storedObservation[Object.keys(storedObservation)[0]].baseDIObservations[0].observation.metadata[3].item.presentation[0].htmlResult)

                                storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "SUCCESSFULLY rendered webpage");
                            }
                        });

                        if (storedServerInstance)
                        {
                            //#region EDGE CASE - USE developer logger

                            if (storedDeveloperMode) {
                                this._storedClientOrServerInstance["processStepNumber"] = this._storedClientOrServerInstance["processStepNumber"] + 1;

                                storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Logging"); //Values = Logging or Mistake
                                storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", this._storedClientOrServerInstance["processStepNumber"]);
                                storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALBeginOfProcess", false);
                                storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALEndOfProcess", true);

                                Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                            }

                            //#endregion

                            storedServerInstance.send(storedClientResponse);
                        }
                        else
                        {
                            //#region EDGE CASE - USE exception handler

                            throw new Error("FAILED configuring server");

                            //#endregion
                        }
                    });

                    //#endregion
                }

                //#endregion

                //#region B. CONTROL server request

                const ExecuteInputRequest = async (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) =>
                {
                    //#region 1. INPUT request routes

                    try
                    {
                        const ExecuteInputRequest = async () : Promise<any> =>
                        {
                            switch ((parameterInputs.Parameters["parameterRouteVerb"] as string).toUpperCase())
                            {
                                case "DELETE":
                                    return parameterInputs.Parameters.getValue("parameterRouteListDetailsDELETE");

                                case "GET":
                                    return parameterInputs.Parameters.getValue("parameterRouteListDetailsGET");

                                case "POST":
                                    return parameterInputs.Parameters.getValue("parameterRouteListDetailsPOST");

                                case "PUT":
                                    return parameterInputs.Parameters.getValue("parameterRouteListDetailsPUT");

                                default:
                                    return null;
                            }
                        };

                        parameterInputs.Parameters.setValue("parameterRouteListDetails", await ExecuteInputRequest());
                    }
                    catch (mistake)
                    {
                        //#region EDGE CASE - USE developer logger

                        if (storedDeveloperMode) {
                            this._storedClientOrServerInstance["processStepNumber"] = this._storedClientOrServerInstance["processStepNumber"] + 1;

                            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "FAILED retrieving route details");
                            storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                            storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", this._storedClientOrServerInstance["processStepNumber"]);
                            storedDeveloperLoggingInputs.Parameters.setValue("parameterMistake", mistake);

                            await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                        }

                        //#endregion

                        //#region EDGE CASE - USE exception handler

                        throw mistake;

                        //#endregion
                    }

                    //#endregion

                    //#region 2. CONTROL request routes

                    try
                    {
                        const ExecuteControllerRequest = async (): Promise<any> =>
                        {
                            if (parameterInputs.Parameters.getValue("parameterRouteListDetails") != undefined && parameterInputs.Parameters.getValue("parameterRouteListDetails") != null)
                            {
                                parameterInputs.Parameters.getValue("parameterRouteListDetails").map(storedRouteItemDetail =>
                                {
                                    //#region A. STORE controller details

                                    //STORE listing of routes
                                    storedControllerRoutes = storedRouteItemDetail.SetupItemTransportItemRoute.ControllerRoutes;

                                    //STORE route controller name
                                    storedControllerName = storedRouteItemDetail.SetupItemTransportItemRoute.ControllerName;

                                    //STORE route dataset details
                                    storedControllerModelDataParameter = storedRouteItemDetail.SetupItemTransportItemRoute.ModelDataParameter;
                                    storedControllerModelDataObject = storedRouteItemDetail.SetupItemTransportItemRoute.ModelDataObject;

                                    storedControllerModelDataRemote = storedRouteItemDetail.SetupItemTransportItemRoute.ModelDataRemote;

                                    //#endregion

                                    if (storedControllerRoutes != null && storedControllerRoutes.length > 0)
                                    {
                                        storedControllerRoutes.map(storedRoute =>
                                        {
                                            //#region B. STORE route details

                                            this._storedExtraData.KeyValuePairs.remove("storedControllerModelDataRemote");
                                            this._storedExtraData.KeyValuePairs.setValue("storedControllerModelDataRemote", storedControllerModelDataRemote);

                                            this._storedExtraData.KeyValuePairs.remove("storedControllerRoute");
                                            this._storedExtraData.KeyValuePairs.setValue("storedControllerRoute", storedRoute);

                                            storedParameterInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

                                            storedParameterInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
                                            storedParameterInputs.Parameters.setValue("parameterAppSettings", this._storedAppSettings);

                                            storedParameterInputs.Parameters.setValue("parameterStorylineDetails", (storedControllerModelDataObject != null) ? storedControllerModelDataObject : null);
                                            storedParameterInputs.Parameters.setValue("parameterStorylineDetails_Parameters", null);
                                            storedParameterInputs.Parameters.setValue("parameterStorylineDetails_Remote", storedControllerModelDataRemote);

                                            storedParameterInputs.Parameters.setValue("parameterClientRequestByName", storedControllerName);
                                            storedParameterInputs.Parameters.setValue("parameterClientRequestByNameParameters", storedControllerModelDataParameter);

                                            storedParameterInputs.Parameters.setValue("parameterRouteVerb", parameterInputs.Parameters.getValue("parameterRouteVerb"));
                                                             
                                            //#endregion

                                            //#region C. CONTROL request response

                                            switch ((parameterInputs.Parameters.getValue("parameterRouteVerb") as string).toUpperCase())
                                            {
                                                case "DELETE":
                                                    this._storedServerInstance.Server.Instance.delete(storedRoute, (parameterRequest: any, parameterResponse: any) =>
                                                    {
                                                        this._storedExtraData.KeyValuePairs.remove("storedServerHTTPRequestInstance");
                                                        this._storedExtraData.KeyValuePairs.setValue("storedServerHTTPRequestInstance", parameterRequest);

                                                        this._storedExtraData.KeyValuePairs.remove("storedServerInstance");
                                                        this._storedExtraData.KeyValuePairs.setValue("storedServerInstance", this._storedServerInstance.Server.Instance);
                                                        
                                                        storedParameterInputs.Parameters.setValue("parameterExtraData", this._storedExtraData);

                                                        //SET instance of our response object.         
                                                        ExecuteOutputRequest(storedParameterInputs);
                                                    });
                                                    break;

                                                case "GET":
                                                    this._storedServerInstance.Server.Instance.get(storedRoute, (parameterRequest: any, parameterResponse: any) => {
                                                        this._storedExtraData.KeyValuePairs.remove("storedServerHTTPRequestInstance");
                                                        this._storedExtraData.KeyValuePairs.setValue("storedServerHTTPRequestInstance", parameterRequest);

                                                        this._storedExtraData.KeyValuePairs.remove("storedServerInstance");
                                                        this._storedExtraData.KeyValuePairs.setValue("storedServerInstance", this._storedServerInstance.Server.Instance);

                                                        storedParameterInputs.Parameters.setValue("parameterExtraData", this._storedExtraData);

                                                        //SET instance of our response object.         
                                                        ExecuteOutputRequest(storedParameterInputs);
                                                    });
                                                    break;

                                                case "POST":
                                                    this._storedServerInstance.Server.Instance.post(storedRoute, (parameterRequest: any, parameterResponse: any) => {
                                                        this._storedExtraData.KeyValuePairs.remove("storedServerHTTPRequestInstance");
                                                        this._storedExtraData.KeyValuePairs.setValue("storedServerHTTPRequestInstance", parameterRequest);

                                                        this._storedExtraData.KeyValuePairs.remove("storedServerInstance");
                                                        this._storedExtraData.KeyValuePairs.setValue("storedServerInstance", this._storedServerInstance.Server.Instance);

                                                        storedParameterInputs.Parameters.setValue("parameterExtraData", this._storedExtraData);

                                                        //SET instance of our response object.         
                                                        ExecuteOutputRequest(storedParameterInputs);
                                                    });
                                                    break;

                                                case "PUT":
                                                    this._storedServerInstance.Server.Instance.put(storedRoute, (parameterRequest: any, parameterResponse: any) => {
                                                        this._storedExtraData.KeyValuePairs.remove("storedServerHTTPRequestInstance");
                                                        this._storedExtraData.KeyValuePairs.setValue("storedServerHTTPRequestInstance", parameterRequest);

                                                        this._storedExtraData.KeyValuePairs.remove("storedServerInstance");
                                                        this._storedExtraData.KeyValuePairs.setValue("storedServerInstance", this._storedServerInstance.Server.Instance);

                                                        storedParameterInputs.Parameters.setValue("parameterExtraData", this._storedExtraData);

                                                        //SET instance of our response object.         
                                                        ExecuteOutputRequest(storedParameterInputs);
                                                    });
                                                    break;
                                            }

                                            //#endregion
                                        });
                                    }
                                    else
                                    {
                                        throw new Error("FAILED inputing routes");
                                    }
                                });
                            }
                            else
                            {
                                throw new Error("FAILED inputing routes");
                            }
                        }

                        await ExecuteControllerRequest();
                    }
                    catch (mistake) {
                        //#region EDGE CASE - USE developer logger

                        if (storedDeveloperMode) {
                            this._storedClientOrServerInstance["processStepNumber"] = this._storedClientOrServerInstance["processStepNumber"] + 1;

                            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "FAILED outputing response");
                            storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                            storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", this._storedClientOrServerInstance["processStepNumber"]);
                            storedDeveloperLoggingInputs.Parameters.setValue("parameterMistake", mistake);

                            await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                        }

                        //#endregion

                        //#region EDGE CASE - USE exception handler

                        throw mistake;

                        //#endregion
                    }

                    //#endregion
                }

                //#endregion

                //#region A. CONFIGURE server goals

                //#region 1. CONFIGURE request goals

                //#region A. CONFIGURE request prerequisites

                try
                {
                    const ExecuteStorageRequest = async (): Promise<boolean> => {
                        storedParameterInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

                        storedParameterInputs.Parameters.setValue("parameterClientOrServerInstance", Object.assign(this._storedClientOrServerInstance, Object));
                        storedParameterInputs.Parameters.setValue("parameterDirectorOrExperienceName", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0");
                        storedParameterInputs.Parameters.setValue("parameterMasterStorer", Object.assign(this._storedCentralizedDisturber, Object));
                        storedParameterInputs.Parameters.setValue("parameterStorylineDetails", Object.assign(this._storedStorylineDetails, Object));

                        this._storedServerInstance = await Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.BaseDI.Professional.Web_Development.Extensions_13.Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.Step_X_X_Framework_Control_ServerSetup_1_0(storedParameterInputs);

                        return true;
                    }

                    await ExecuteStorageRequest();

                    //#region EDGE CASE - USE developer logger

                    if (storedDeveloperMode) {
                        this._storedClientOrServerInstance["processStepNumber"] = this._storedClientOrServerInstance["processStepNumber"] + 1;

                        storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "SUCCESSFULLY configured request prerequisites");
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Logging"); //Values = Logging or Mistake
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", this._storedClientOrServerInstance["processStepNumber"]);

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                    }

                    //#endregion

                }
                catch (mistake) {
                    //#region EDGE CASE - USE developer logger
                    if (storedDeveloperMode) {
                        this._storedClientOrServerInstance["processStepNumber"] = this._storedClientOrServerInstance["processStepNumber"] + 1;

                        storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "FAILED storing server configurations to memory");
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", this._storedClientOrServerInstance["processStepNumber"]);
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterMistake", mistake);

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                    }
                    //#endregion

                    //#region EDGE CASE - USE exception handler

                    throw mistake;

                    //#endregion
                }

                //#endregion

                //#endregion

                //#region 2. CONFIGURE route goals

                //#region A. STORE routes configurations to memory

                try
                {
                    const ExecuteStorageRequest = async (): Promise<boolean> => {
                        storedParameterInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

                        //CONFIGURE delete routes
                        if (this?._storedServerInstance?.Server?.Verbs?.Delete != undefined && this?._storedServerInstance?.Server?.Verbs?.Delete != null) {
                            storedRouteListDetailsDELETE = this?._storedServerInstance?.Server?.Verbs?.Delete as Array<any>;

                            storedParameterInputs.Parameters.setValue("parameterRouteListDetailsDELETE", storedRouteListDetailsDELETE);
                        }

                        //CONFIGURE get routes
                        if (this?._storedServerInstance?.Server?.Verbs?.Get != undefined && this?._storedServerInstance?.Server?.Verbs?.Get != null) {
                            storedRouteListDetailsGET = this?._storedServerInstance?.Server?.Verbs?.Get as Array<any>;

                            storedParameterInputs.Parameters.setValue("parameterRouteListDetailsGET", storedRouteListDetailsGET);
                        }

                        //CONFIGURE post routes
                        if (this?._storedServerInstance?.Server?.Verbs?.Post != undefined && this?._storedServerInstance?.Server?.Verbs?.Post != null) {
                            storedRouteListDetailsPOST = this?._storedServerInstance?.Server?.Verbs?.Post as Array<any>;

                            storedParameterInputs.Parameters.setValue("parameterRouteListDetailsPOST", storedRouteListDetailsPOST);
                        }

                        //CONFIGURE put routes
                        if (this?._storedServerInstance?.Server?.Verbs?.Put != undefined && this?._storedServerInstance?.Server?.Verbs?.Put != null) {
                            storedRouteListDetailsPUT = this?._storedServerInstance?.Server?.Verbs?.Put as Array<any>;

                            storedParameterInputs.Parameters.setValue("parameterRouteListDetailsPUT", storedRouteListDetailsPUT);
                        }

                        if (storedParameterInputs.Parameters.containsKey("parameterRouteListDetailsDELETE") ||
                            storedParameterInputs.Parameters.containsKey("parameterRouteListDetailsGET") ||
                            storedParameterInputs.Parameters.containsKey("parameterRouteListDetailsPOST") ||
                            storedParameterInputs.Parameters.containsKey("parameterRouteListDetailsPUT")) {

                            return true;
                        }

                        return false;
                        
                    }

                    storedRoutesFound = await ExecuteStorageRequest();
                }
                catch (mistake)
                {
                    //#region EDGE CASE - USE developer logger
                    if (storedDeveloperMode) {
                        this._storedClientOrServerInstance["processStepNumber"] = this._storedClientOrServerInstance["processStepNumber"] + 1;

                        storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "FAILED storing routes to memory");
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", this._storedClientOrServerInstance["processStepNumber"]);
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterMistake", mistake);

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                    }
                    //#endregion

                    //#region EDGE CASE - USE exception handler

                    throw mistake;

                    //#endregion
                }

                //#endregion

                //#region B. INPUT routes configurations

                try
                {
                    //#region EDGE CASE - USE developer logger

                    if (storedDeveloperMode && storedRoutesFound) {
                        this._storedClientOrServerInstance["processStepNumber"] = this._storedClientOrServerInstance["processStepNumber"] + 1;

                        storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "SUCCESSFULLY configured routes");
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Logging"); //Values = Logging or Mistake
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", this._storedClientOrServerInstance["processStepNumber"]);

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                    }

                    //#endregion

                    if (storedRoutesFound) {
                        storedParameterInputs.Parameters.setValue("parameterRouteVerb", "DELETE");
                        await ExecuteInputRequest(storedParameterInputs);

                        storedParameterInputs.Parameters.remove("parameterRouteVerb");
                        storedParameterInputs.Parameters.setValue("parameterRouteVerb", "GET");
                        await ExecuteInputRequest(storedParameterInputs);

                        storedParameterInputs.Parameters.remove("parameterRouteVerb");
                        storedParameterInputs.Parameters.setValue("parameterRouteVerb", "POST");
                        await ExecuteInputRequest(storedParameterInputs);

                        storedParameterInputs.Parameters.remove("parameterRouteVerb");
                        storedParameterInputs.Parameters.setValue("parameterRouteVerb", "PUT");
                        await ExecuteInputRequest(storedParameterInputs);
                    }
                    else
                    {
                        throw new Error("FAILED configurating routes");
                    }
                }
                catch (mistake)
                {
                    //#region EDGE CASE - USE developer logger
                    if (storedDeveloperMode) {
                        this._storedClientOrServerInstance["processStepNumber"] = this._storedClientOrServerInstance["processStepNumber"] + 1;

                        storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "FAILED configurating routes");
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", this._storedClientOrServerInstance["processStepNumber"]);
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterMistake", mistake);

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                    }
                    //#endregion

                    //#region EDGE CASE - USE exception handler

                    throw mistake;

                    //#endregion
                }

                //#endregion

                //#endregion

                //#endregion

                //#endregion

                //#endregion

                //#region 2. EXECUTE response management

                //#region EDGE CASE - USE developer logger

                if (storedDeveloperMode) {
                    this._storedClientOrServerInstance["processStepNumber"] = this._storedClientOrServerInstance["processStepNumber"] + 1;

                    storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "BOOTING web server");
                    storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Logging"); //Values = Logging or Mistake
                    storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", this._storedClientOrServerInstance["processStepNumber"]);
                    storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALMiddleOfProcess", true);

                    Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);

                    storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALMiddleOfProcess", false);
                }

                //#endregion

                //#region IDEAL CASE - USE express server

                //#region A. CONTROL request response

                try
                {
                    const ExecuteControllerRequest = async () => {
                        this._storedServerInstance.Server.Instance.listen(this._storedServerInstance.Server.Port, () => {
                            //#region EDGE CASE - USE developer logger

                            if (storedDeveloperMode) {
                                this._storedClientOrServerInstance["processStepNumber"] = this._storedClientOrServerInstance["processStepNumber"] + 1;

                                storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "STARTING web server");
                                storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Logging"); //Values = Logging or Mistake
                                storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", this._storedClientOrServerInstance["processStepNumber"]);
                                storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALEndOfProcess", true);

                                Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);

                                storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALEndOfProcess", false);
                            }

                            //#endregion

                            console.log(`server started at http://localhost:${this._storedServerInstance.Server.Port}`);
                        });
                    }

                    await ExecuteControllerRequest();
                }
                catch (mistake)
                {
                    //#region EDGE CASE - USE developer logger
                    if (storedDeveloperMode) {
                        this._storedClientOrServerInstance["processStepNumber"] = this._storedClientOrServerInstance["processStepNumber"] + 1;

                        storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "FAILED starting server");
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", this._storedClientOrServerInstance["processStepNumber"]);
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterMistake", mistake);

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                    }
                    //#endregion

                    //#region EDGE CASE - USE exception handler

                    throw mistake;

                    //#endregion
                }

                //#endregion

                //#endregion

                //#endregion
            }
            catch (mistake)
            {
                //#region EDGE CASE - USE developer logger
                if (storedDeveloperMode) {
                    this._storedClientOrServerInstance["processStepNumber"] = this._storedClientOrServerInstance["processStepNumber"] + 1;

                    storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "FAILED configuring server");
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

            //#region 3. OUTPUT

            //#region HANDLE execution response

            //#region IDEAL CASE - USE baseDI dataset

            return storedDataResponse;

            //#endregion

            //#endregion

            //#endregion
        }

        //Page 1-7
        private async Execute_Factory_Action_7_Process_StoryResources_CopyStaticFiles(): Promise<any> {
            //#region 1. INPUTS

            //#region DEFINE client response

            let storedClientResponse: any = null;

            //#endregion

            //#region DEFINE data response

            let storedDataResponse: any = null;

            //#endregion

            //#region DEFINE event handlers

            let Action = null;
            let Step_1_0_Framework_Control_ClientRequestToServer_1_0 = null;
            let Step_2_0_Framework_Output_ServerRequestToClient_1_0 = null;

            //#endregion

            //#region DEFINE extra data

            let storedExtraData = new ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

            //#endregion

            //#region DEFINE parameter inputs

            let storedParameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //#endregion

            //#region DEFINE route details

            let storedRouteListDetails: any = null;

            //#endregion

            //#region DEFINE server instance

            let storedRouteListDetailsDELETE: any = null;
            let storedRouteListDetailsGET: any = null;
            let storedRouteListDetailsPOST: any = null;
            let storedRouteListDetailsPUT: any = null;

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            //storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "CONFIGURING web routes");
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", _storedClientOrServerInstance["storedActionName"]);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", _storedClientOrServerInstance["storedAppSettings"]);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", _storedClientOrServerInstance);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.cs");
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Action -> Action_7_Process_StoryResources -> Factory_Action_7_Process_StoryResources -> Execute_Factory_Action_7_Process_StoryResources_CopyStaticFiles");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try
            {
                //#region EXECUTE copying static files

                //#region IDEAL CASE - USE baseDI extension

                storedParameterInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                storedParameterInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
                storedParameterInputs.Parameters.setValue("parameterAppSettings", this._storedAppSettings);
                storedParameterInputs.Parameters.setValue("parameterStorylineDetails", this._storedStorylineDetails);

                await Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.BaseDI.Professional.Web_Development.Extensions_13.Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.Step_X_X_Framework_Store_FilesToServer_1_0(storedParameterInputs);

                //#endregion

                //#endregion
            }
            catch (mistake) {
                //#region EDGE CASE - USE developer logger
                if (storedDeveloperMode) {
                    this._storedClientOrServerInstance["processStepNumber"] = this._storedClientOrServerInstance["processStepNumber"] + 1;

                    storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "FAILED configuring server");
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

            //#region 3. OUTPUT

            //#region HANDLE execution response

            //#region IDEAL CASE - USE baseDI dataset

            return storedDataResponse;

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

            //#region DEFINE data response

            let storedDataResponse: any = null;

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            //storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "CONFIGURING web routes");
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", this._storedClientOrServerInstance["storedActionName"]);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", this._storedClientOrServerInstance["storedAppSettings"]);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.ts");
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Action_7_Process_StoryResources");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try {
                storedDataResponse = null; //await this.Factory_Action_7_Process_StoryResources();
            }
            catch (mistake) {
                throw mistake; //Let "Startup.ts" handle the exception.
            }

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

            //#region DEFINE data response

            let storedDataResponse: any = null;

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            //storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "CONFIGURING web routes");
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", this._storedClientOrServerInstance["storedActionName"]);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", this._storedClientOrServerInstance["storedAppSettings"]);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.ts");
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Action_7_Process_StoryResources");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try {
                storedDataResponse = null; //await this.Factory_Action_7_Process_StoryResources();
            }
            catch (mistake) {
                throw mistake; //Let "Startup.ts" handle the exception.
            }

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

            //#region DEFINE data response

            let storedDataResponse: any = null;

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            //storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "CONFIGURING web routes");
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", this._storedClientOrServerInstance["storedActionName"]);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", this._storedClientOrServerInstance["storedAppSettings"]);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.ts");
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Action_7_Process_StoryResources");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try {
                storedDataResponse = null; //await this.Factory_Action_7_Process_StoryResources();
            }
            catch (mistake) {
                throw mistake; //Let "Startup.ts" handle the exception.
            }

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

            //#region DEFINE data response

            let storedDataResponse: any = null;

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            //storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "CONFIGURING web routes");
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", this._storedClientOrServerInstance["storedActionName"]);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", this._storedClientOrServerInstance["storedAppSettings"]);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.ts");
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Action_7_Process_StoryResources");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try {
                storedDataResponse = null; //await this.Factory_Action_7_Process_StoryResources();
            }
            catch (mistake) {
                throw mistake; //Let "Startup.ts" handle the exception.
            }

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

            //#region DEFINE data response

            let storedDataResponse: any = null;

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            //storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "CONFIGURING web routes");
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", this._storedClientOrServerInstance["storedActionName"]);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", this._storedClientOrServerInstance["storedAppSettings"]);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.ts");
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Action_7_Process_StoryResources");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try {
                storedDataResponse = null; //await this.Factory_Action_7_Process_StoryResources();
            }
            catch (mistake) {
                throw mistake; //Let "Startup.ts" handle the exception.
            }

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

            //#region DEFINE data response

            let storedDataResponse: any = null;

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            //storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "CONFIGURING web routes");
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", this._storedClientOrServerInstance["storedActionName"]);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", this._storedClientOrServerInstance["storedAppSettings"]);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.ts");
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Action_7_Process_StoryResources");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try {
                storedDataResponse = null; //await this.Factory_Action_7_Process_StoryResources();
            }
            catch (mistake) {
                throw mistake; //Let "Startup.ts" handle the exception.
            }

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

            //#region DEFINE data response

            let storedDataResponse: any = null;

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            //storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "CONFIGURING web routes");
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", this._storedClientOrServerInstance["storedActionName"]);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", this._storedClientOrServerInstance["storedAppSettings"]);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.ts");
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Action_7_Process_StoryResources");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try {
                storedDataResponse = null; //await this.Factory_Action_7_Process_StoryResources();
            }
            catch (mistake) {
                throw mistake; //Let "Startup.ts" handle the exception.
            }

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            return this._storedStorylineDetails;

            //#endregion

            //#endregion

            //#endregion
        }

        //Page 1-10
        public async Action_10_End_Process(): Promise<object> {
            //#region 1. INPUTS

            //#region DEFINE data response

            let storedDataResponse: any = null;

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            //storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "CONFIGURING web routes");
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", this._storedClientOrServerInstance["storedActionName"]);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", this._storedClientOrServerInstance["storedAppSettings"]);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.ts");
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Action_7_Process_StoryResources");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try {
                storedDataResponse = null; //await this.Factory_Action_7_Process_StoryResources();
            }
            catch (mistake) {
                throw mistake; //Let "Startup.ts" handle the exception.
            }

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
        private async Factory_Action_6_Process_StoryExperiences(): Promise<object> {
            switch (this._storedActionName.toUpperCase()) {
                default:
                    return null;
            }
        }

        //Page 1-6
        private async Factory_Action_8_Process_CRUD(): Promise<object> {
            switch (this._storedActionName.toUpperCase()) {
                default:
                    return null;
            }
        }

        //Page 1-7
        private async Factory_Action_9_Verify_Process(): Promise<object> {
            switch (this._storedActionName.toUpperCase()) {
                default:
                    return null;
            }
        }

        //Page 1-8
        private async Factory_Action_10_End_Process(): Promise<object> {
            switch (this._storedActionName.toUpperCase()) {
                default:
                    return null;
            }
        }

        //#endregion        

        //#region C. Action Logic

        //#endregion

        //#endregion

        //#endregion        
    }

    //#endregion
}