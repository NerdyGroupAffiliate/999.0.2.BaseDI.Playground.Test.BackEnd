//#region Imports

//#region BaseDI

import * as aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0";
import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptRoutable_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptRoutable_12_2_1_0";

import * as Action_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/Action Poco/1/1_0/Action_12_2_1_0";
import * as ExtraData_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";
import * as SingleParmPoco_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

import * as Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0 from "../../../../../../../../0. Script/Extensions/11/Automate Manual Task/1/Risk Management/Method/0/1_0/Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0";
import * as Extension_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/3/Web Development/Method/13/1_0/Extension_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0";
import * as Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/0/1_0/Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0";

import * as IContract_Programming_Repository_12_2_1_0 from "../../../../../../../../0. Script/Interfaces/12/Other/2/Programming/Contract/1/1_0/IContract_Programming_Repository_12_2_1_0";

import * as ChapterPage_Page_1_1_Begin_Process_12_5_1_0 from "../../../../../../../../5. Chapter/12/Other/5/Security/Page/1/1_0/Page_1_1_Begin_Process_12_5_1_0";
import * as ChapterPage_Page_1_2_Validate_Process_12_5_1_0 from "../../../../../../../../5. Chapter/12/Other/5/Security/Page/1/1_0/Page_1_2_Validate_Process_12_5_1_0";
import * as ChapterPage_Page_1_3_Process_StoryAuthor_12_5_1_0 from "../../../../../../../../5. Chapter/12/Other/5/Security/Page/1/1_0/Page_1_3_Process_StoryAuthor_12_5_1_0";
import * as ChapterPage_Page_1_4_Process_StoryCharacters_12_5_1_0 from "../../../../../../../../5. Chapter/12/Other/5/Security/Page/1/1_0/Page_1_4_Process_StoryCharacters_12_5_1_0";
import * as ChapterPage_Page_1_5_Process_StorySetting_12_5_1_0 from "../../../../../../../../5. Chapter/12/Other/5/Security/Page/1/1_0/Page_1_5_Process_StorySetting_12_5_1_0";
import * as ChapterPage_Page_1_6_Process_StoryExperiences_12_5_1_0 from "../../../../../../../../5. Chapter/12/Other/5/Security/Page/1/1_0/Page_1_6_Process_StoryExperiences_12_5_1_0";
import * as ChapterPage_Page_1_7_Process_StoryResources_12_5_1_0 from "../../../../../../../../5. Chapter/12/Other/5/Security/Page/1/1_0/Page_1_7_Process_StoryResources_12_5_1_0";
import * as ChapterPage_Page_1_8_Process_CRUD_12_5_1_0 from "../../../../../../../../5. Chapter/12/Other/5/Security/Page/1/1_0/Page_1_8_Process_CRUD_12_5_1_0";
import * as ChapterPage_Page_1_9_Verify_Process_12_5_1_0 from "../../../../../../../../5. Chapter/12/Other/5/Security/Page/1/1_0/Page_1_9_Verify_Process_12_5_1_0";
import * as ChapterPage_Page_1_10_End_Process_12_5_1_0 from "../../../../../../../../5. Chapter/12/Other/5/Security/Page/1/1_0/Page_1_10_End_Process_12_5_1_0";

//#endregion

//#endregion

export namespace BaseDI.Professional.Director.Security_1  {
    export class Director_Of_Security_Chapter_12_5_Page_1_StoreAuthentication_Handler_1_0 extends aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0 {
        //#region 1. Assign

        //SETTINGS
        private _storedProcessRequestSettings: any = null;

        //CLIENT/SERVER
        private _storedProcessRequestTracker: any;

        private _storedInputRequestName: string;
        private _storedInputRequestNameDataCacheKey: string;

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

        constructor(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) {
            super();

            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables

            this._storedProcessRequestTracker = null;

            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input parameters

            this._storedInputs = parameterInputs;

            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process request tracker

            this._storedProcessRequestTracker = this._storedInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE process request settings

            this._storedProcessRequestSettings = this._storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE process centralized handlers

            this._storedProcessRequestCentralizedDisturber = this._storedInputs.Parameters.getValue("parameterProcessRequestCentralizedDisturber");
            this._storedProcessRequestCentralizedSensor = this._storedInputs.Parameters.getValue("parameterProcessRequestCentralizedSensor");
            this._storedProcessRequestCentralizedStorer = this._storedInputs.Parameters.getValue("parameterProcessRequestCentralizedStorer");

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxx

            //#endregion

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

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables



            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process xxx xxx



            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxx


            //#endregion

            //#endregion

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

                //#region DEFINE control variables

                //#endregion

                //#region DEFINE input variables

                let storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

                //#endregion

                //#region DEFINE process variables

                let storedProcessRequestMistakeMade: boolean = false;

                //#endregion

                //#region DEFINE output variables

                let storedOutputResponseMessage: string = "";

                //#endregion

                ///////////////////////////////

                //#region MEMORIZE control variables

                //#region MEMORIZE control xxx xxx


                //#endregion

                //#endregion

                //#region MEMORIZE input variables

                //#region MEMORIZE input xxx xxxx


                //#endregion

                //#endregion

                //#region MEMORIZE process variables

                //#region MEMORIZE process request tracker

                let storedProcessRequestTracker: any = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

                //#endregion

                //#region MEMORIZE process request settings

                let storedProcessRequestSettings: any = storedProcessRequestTracker["storedProcessRequestSettings"];

                //#endregion

                //#region MEMORIZE process developer mode

                let storedProcessRequestDeveloperMode: boolean = storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE ? storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE : false;

                let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

                //REQUIRED

                //0. CONTROLLERS

                //1. INPUTS
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", parameterInputs.Parameters.getValue("parameterInputRequestActionName"));

                //2. PROCESS
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "VALIDATING request inputs");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Director_Of_Security_Chapter_12_5_Page_1_StoreAuthentication_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Action -> ValidateInputs");

                //3. OUTPUTS

                //#endregion

                //#endregion

                //#region MEMORIZE output variables

                //#region MEMORIZE output xxx xxx


                //#endregion

                //#endregion

                //#endregion

                //#region 2. PROCESS

                //#region EXECUTE validation process

                //#region IDEAL CASE - USE valid information

                if (parameterInputs != null || parameterInputs != undefined || parameterInputs.Parameters != null && parameterInputs.Parameters != undefined) {
                    //0. CONTROLLERS

                    //1. INPUTS
                    if (!parameterInputs.Parameters.containsKey("parameterInputRequestName")) {
                        storedOutputResponseMessage += "***parameterInputRequestName*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterInputRequestNameDataCacheKey")) {
                        storedOutputResponseMessage += "***parameterInputRequestNameDataCacheKey*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    //2. PROCESS
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

                            //0. CONTROLLERS

                            //1. INPUTS

                            //2. PROCESS
                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                            //3. OUTPUTS
                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

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

                        //0. CONTROLLERS

                        //1. INPUTS

                        //2. PROCESS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                        //3. OUTPUT
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

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
            await ValidateInputs(this._storedInputs);

            //#endregion

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables

            let storedProcessRequestHandler_UsingBuilderPattern: Use_DesignPattern_Builder_Chapter_12_5_Page_1 = null;

            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedProcessRequestDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (this._storedInputs.Parameters.getValue("parameterProcessRequestExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") ? this._storedInputs.Parameters.getValue("parameterProcessRequestExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") : null);

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED

            //0. CONTROLLERS
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", this._storedInputs.Parameters.getValue("parameterInputRequestActionName"));

            //1. INPUTS

            //2. PROCESS
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "EXECUTING request handler");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Director_Of_Security_Chapter_12_5_Page_1_StoreAuthentication_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Action");

            //3. OUTPUTS  

            //OPTIONAL
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALMiddleOfProcess", true);

            //#endregion

            //#region MEMORIZE process handler details

            this._storedInputs.Parameters.setValue("parameterProcessRequestDataRepository", this.Repository);

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE request handler

            try {
                //#region EDGE CASE - USE developer logger

                if (storedProcessRequestDeveloperMode && this._storedProcessRequestTracker["storedProcessRequestStepNumber"] == 0) {
                    this._storedProcessRequestTracker["storedProcessRequestStepNumber"] += 1;

                    //0. CONTROLLERS

                    //1. INPUTS

                    //2. PROCESS                    
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", this._storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                    //3. OUTPUTS
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Logging"); //Values = Logging or Mistake

                    Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                }

                //#endregion

                //#region IDEAL CASE - USE design pattern

                //REQUIRED: Implement one of the design patterns at https://www.dofactory.com/net/design-patterns
                storedProcessRequestHandler_UsingBuilderPattern = new Use_DesignPattern_Builder_Chapter_12_5_Page_1(this._storedInputs);

                this.StorylineDetails = await storedProcessRequestHandler_UsingBuilderPattern.Action();

                //#endregion
            }
            catch (storedProcessRequestMistake) {
                //#region EDGE CASE - USE developer logger

                if (storedProcessRequestDeveloperMode) {
                    this._storedProcessRequestTracker["storedProcessRequestStepNumber"] = this._storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                    //0. CONTROLLERS

                    //1. INPUTS

                    //2. PROCESS
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED configurating request handler");
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", this._storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                    //3. OUTPUTS
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

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

            //#region IDEAL CASE - USE baseID dataset

            return this.StorylineDetails;

            //#endregion


            //#endregion

            //#endregion
        }

        //#endregion
    }

    //#region 5. Action Script

    export class Use_DesignPattern_Builder_Chapter_12_5_Page_1 {
        //#region 1. Assign

        //SETTINGS
        private _storedProcessRequestSettings: any = null;

        //CLIENT/SERVER
        private _storedProcessRequestTracker: any;

        private _storedInputRequestActionName: string;
        private _storedInputRequestName: string;
        private _storedInputRequestNameDataCacheKey: string;

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
        private _storedProcessRequestDataRepository: IContract_Programming_Repository_12_2_1_0;
        private _storedProcessRequestByName: string;

        //#endregion

        //#region 2. Ready

        constructor(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables



            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input action name

            this._storedInputRequestActionName = parameterInputs.Parameters.getValue("parameterInputRequestActionName");

            //#endregion

            //#region MEMORIZE input request details

            this._storedInputRequestName = parameterInputs.Parameters.getValue("parameterInputRequestName");
            this._storedInputRequestNameDataCacheKey = parameterInputs.Parameters.getValue("parameterInputRequestNameDataCacheKey");

            this._storedInputs = parameterInputs;

            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process request tracker

            this._storedProcessRequestTracker = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE process request settings

            this._storedProcessRequestSettings = this._storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE process centralized handlers

            this._storedProcessRequestCentralizedDisturber = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedDisturber");
            this._storedProcessRequestCentralizedSensor = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedSensor");
            this._storedProcessRequestCentralizedStorer = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedStorer");

            //#endregion

            //#region MEMORIZE process data repository

            this._storedProcessRequestDataRepository = parameterInputs.Parameters.getValue("parameterProcessRequestDataRepository");

            //#endregion

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#region MEMORIZE process storyline details

            this._storedProcessRequestDataStorylineDetails = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            this._storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails_Parameters");

            //#endregion

            //#region MEMORIZE process extra data

            this._storedProcessRequestExtraData = parameterInputs.Parameters.getValue("parameterProcessRequestExtraData") ? parameterInputs.Parameters.getValue("parameterProcessRequestExtraData") : null;

            //#endregion

            //#region MEMORIZE processs request details

            this._storedProcessRequestHandler = parameterInputs.Parameters.getValue("parameterProcessRequestHandler");

            this._storedProcessRequestName = parameterInputs.Parameters.getValue("parameterProcessRequestName");

            this._storedProcessRequestByName = parameterInputs.Parameters.getValue("parameterProcessRequestName");

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

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

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables



            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process xxx xxx



            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxx


            //#endregion

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

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables

            let storedProcessRequestHandler_UsingBuilderPattern: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object> = null;

            //#endregion

            //#region DEFINE output variables

            let storedOutputResponseData: any = null;

            //#endregion

            ///////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process xxx xxx



            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region ARRANGE execution order

            //#region IDEAL CASE - USE builder pattern

            storedProcessRequestHandler_UsingBuilderPattern = new Implement_DesignPattern_Builder_Chapter_12_5_Page_1_1_0(this._storedInputs);

            await storedProcessRequestHandler_UsingBuilderPattern.Action_1_Begin_Process();

            await storedProcessRequestHandler_UsingBuilderPattern.Action_2_Validate_Process();

            await storedProcessRequestHandler_UsingBuilderPattern.Action_3_Process_StoryAuthor();
            await storedProcessRequestHandler_UsingBuilderPattern.Action_4_Process_StoryCharacters();
            await storedProcessRequestHandler_UsingBuilderPattern.Action_5_Process_StorySetting();
            await storedProcessRequestHandler_UsingBuilderPattern.Action_6_Process_StoryExperiences();
            await storedProcessRequestHandler_UsingBuilderPattern.Action_7_Process_StoryResources();
            await storedProcessRequestHandler_UsingBuilderPattern.Action_8_Process_CRUD();

            await storedProcessRequestHandler_UsingBuilderPattern.Action_9_Verify_Process();

            storedOutputResponseData = await storedProcessRequestHandler_UsingBuilderPattern.Action_10_End_Process();

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN request response

            //#region IDEAL CASE - USE baseDI dataset

            return storedOutputResponseData;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion
    }

    //#endregion

    //#region 6. Action Implementation
    export class Implement_DesignPattern_Builder_Chapter_12_5_Page_1_1_0 extends aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>
    {
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
        private _storedProcessRequestDataStorylineDetails_Altered: object = new Object();

        //MISC
        private _storedProcessRequestExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0 = new ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //PLUMBING
        private _storedInputRequestActionName: string = "";

        private _storedProcessRequestCentralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _storedProcessRequestCentralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _storedProcessRequestCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        private _storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

        private _storedProcessRequestFileName: string = "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0";
        private _storedProcessRequestName: string = "";
        private _storedProcessRequestDataRepository: IContract_Programming_Repository_12_2_1_0;
        private _storedProcessRequestByName: string;

        public StartUpCallBack;

        //#endregion

        //#region 2. Ready

        constructor(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) {
            super();

            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables



            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input action name

            this._storedInputRequestActionName = parameterInputs.Parameters.getValue("parameterInputRequestActionName");

            //#endregion

            //#region MEMORIZE input request details

            this._storedInputRequestName = parameterInputs.Parameters.getValue("parameterInputRequestName");
            this._storedInputRequestNameDataCacheKey = parameterInputs.Parameters.getValue("parameterInputRequestNameDataCacheKey");

            this._storedInputs = parameterInputs;

            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process request tracker

            this._storedProcessRequestTracker = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE process request settings

            this._storedProcessRequestSettings = this._storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE process centralized handlers

            this._storedProcessRequestCentralizedDisturber = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedDisturber");
            this._storedProcessRequestCentralizedSensor = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedSensor");
            this._storedProcessRequestCentralizedStorer = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedStorer");

            //#endregion

            //#region MEMORIZE process data repository

            this._storedProcessRequestDataRepository = parameterInputs.Parameters.getValue("parameterProcessRequestDataRepository");

            //#endregion

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#region MEMORIZE process storyline details

            this._storedProcessRequestDataStorylineDetails = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            this._storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails_Parameters");

            //#endregion

            //#region MEMORIZE process extra data

            this._storedProcessRequestExtraData = parameterInputs.Parameters.getValue("parameterProcessRequestExtraData") ? parameterInputs.Parameters.getValue("parameterProcessRequestExtraData") : null;

            //#endregion

            //#region MEMORIZE processs request details

            this._storedProcessRequestHandler = parameterInputs.Parameters.getValue("parameterProcessRequestHandler");

            this._storedProcessRequestName = parameterInputs.Parameters.getValue("parameterProcessRequestName");

            this._storedProcessRequestByName = parameterInputs.Parameters.getValue("parameterProcessRequestName");

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

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

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables



            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process xxx xxx



            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS


            //#endregion

            //#region 3. OUTPUT

            //#endregion
        }

        //#endregion

        //#region 4. Action

        //#region EXECUTE LOGIC INSTUCTIONS

        //#region A. Action Methods

        //Page 1-9
        public async Action_9_Verify_Process(): Promise<any> {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables



            //#endregion

            //#region DEFINE output variables

            let storedOutputResponseData: any = null;

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONFIGURING web routes");
            ////storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", _parameterInputs.Parameters.getValue("parameterInputRequestActionName"));
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.cs");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Action -> Action_5_Process_StorySetting");

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try {
                storedOutputResponseData = await this.Factory_Action_9_Verify_Process();
            }
            catch(storedProcessRequestMistake)
            {
                throw storedProcessRequestMistake; //Let "Startup.ts" handle the exception.
            }

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

        //#region B. Action Factories

        //Page 1-9
        private async Factory_Action_9_Verify_Process(): Promise<any> {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables

            let storedOutputResponseData: any = null;

            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process xxx xxx



            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process factory

            try {
                //#region IDEAL CASE - USE factory method

                //if (_storedInputRequestActionName.toUpperCase().Contains("PROCESSHTTPREQUEST_1_0"))
                //{
                //    storedOutputResponseData = await Execute_Factory_Action_9_Verify_Process_OutputApiToken();
                //}

                storedOutputResponseData = await this.Execute_Factory_Action_9_Verify_Process_OutputApiToken();

                //#endregion
            }
            catch (storedProcessRequestMistake) {
                throw storedProcessRequestMistake; //Let "Startup.ts" handle the exception.
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

        //Page 1-9
        private async Execute_Factory_Action_9_Verify_Process_OutputApiToken() : Promise<object> {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables



            //#endregion

            //#region DEFINE output variables

            let storedOutputResponseData: any = null;

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONFIGURING web routes");
            ////storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", _parameterInputs.Parameters.getValue("parameterInputRequestActionName"));
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.cs");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Action -> Action_5_Process_StorySetting");

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process handler

            //#region IDEAL CASE - USE process handler

            var page = new ChapterPage_Page_1_9_Verify_Process_12_5_1_0.BaseDI.Professional.Chapter.Page.Security_1.Page_1_9_Verify_Process_12_5_1_0(this._storedInputs);

            page.ClientOrServerInstance = this._storedProcessRequestTracker;

            page.DirectorOrExperienceRequestHandler = this._storedProcessRequestHandler;
            page.ExtraData = this._storedProcessRequestExtraData;

            page.MasterStorer = this._storedProcessRequestCentralizedStorer;
            page.MasterDisturber = this._storedProcessRequestCentralizedDisturber;
            page.MasterSensor = this._storedProcessRequestCentralizedSensor;

            page.StorylineDetails_Parameters = this._storedProcessRequestDataStorylineDetails_Parameters;

            this._storedProcessRequestDataStorylineDetails_Altered = await page.Action();

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            return this._storedProcessRequestDataStorylineDetails_Altered;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion

        //#endregion

        //#region NOT APART OF THE REQUEST PIPELINE AT THIS TIME

        //#region A. Action Methods

        //Page 1-1
        public async Action_1_Begin_Process(): Promise<any> {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables



            //#endregion

            //#region DEFINE output variables

            let storedOutputResponseData: any = null;

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONFIGURING web routes");
            ////storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", _parameterInputs.Parameters.getValue("parameterInputRequestActionName"));
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.cs");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Action -> Action_5_Process_StorySetting");

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

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

        public async Action_2_Validate_Process(): Promise<any> {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables



            //#endregion

            //#region DEFINE output variables

            let storedOutputResponseData: any = null;

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONFIGURING web routes");
            ////storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", _parameterInputs.Parameters.getValue("parameterInputRequestActionName"));
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.cs");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Action -> Action_5_Process_StorySetting");

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

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
        public async Action_3_Process_StoryAuthor(): Promise<any> {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables



            //#endregion

            //#region DEFINE output variables

            let storedOutputResponseData: any = null;

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONFIGURING web routes");
            ////storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", _parameterInputs.Parameters.getValue("parameterInputRequestActionName"));
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.cs");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Action -> Action_5_Process_StorySetting");

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

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
        public async Action_4_Process_StoryCharacters(): Promise<any> {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables



            //#endregion

            //#region DEFINE output variables

            let storedOutputResponseData: any = null;

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONFIGURING web routes");
            ////storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", _parameterInputs.Parameters.getValue("parameterInputRequestActionName"));
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.cs");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Action -> Action_5_Process_StorySetting");

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

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
        public async Action_5_Process_StorySetting(): Promise<any> {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables



            //#endregion

            //#region DEFINE output variables

            let storedOutputResponseData: any = null;

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONFIGURING web routes");
            ////storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", _parameterInputs.Parameters.getValue("parameterInputRequestActionName"));
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.cs");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Action -> Action_5_Process_StorySetting");

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try {
                storedOutputResponseData = await this.Factory_Action_5_Process_StorySetting();
            }
            catch (storedProcessRequestMistake) {
                throw storedProcessRequestMistake; //Let "Startup.cs -> Startup_Controller" handle the exception.
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

        //Page 1-6
        public async Action_6_Process_StoryExperiences(): Promise<any> {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables



            //#endregion

            //#region DEFINE output variables

            let storedOutputResponseData: any = null;

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONFIGURING web routes");
            ////storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", _parameterInputs.Parameters.getValue("parameterInputRequestActionName"));
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.cs");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Action -> Action_5_Process_StorySetting");

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

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
        public async Action_7_Process_StoryResources(): Promise<any> {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables



            //#endregion

            //#region DEFINE output variables

            let storedOutputResponseData: any = null;

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONFIGURING web routes");
            ////storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", _parameterInputs.Parameters.getValue("parameterInputRequestActionName"));
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.cs");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Action -> Action_5_Process_StorySetting");

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try {
                storedOutputResponseData = await this.Factory_Action_7_Process_StoryResources();
            }
            catch (storedProcessRequestMistake) {
                throw storedProcessRequestMistake; //Let "Startup.cs -> Startup_Controller" handle the exception.
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

        //Page 1-8
        public async Action_8_Process_CRUD(): Promise<any> {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables



            //#endregion

            //#region DEFINE output variables

            let storedOutputResponseData: any = null;

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONFIGURING web routes");
            ////storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", _parameterInputs.Parameters.getValue("parameterInputRequestActionName"));
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.cs");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Action -> Action_5_Process_StorySetting");

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

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

        //Page 1-10
        public async Action_10_End_Process(): Promise<any> {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables



            //#endregion

            //#region DEFINE output variables

            let storedOutputResponseData: any = null;

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONFIGURING web routes");
            ////storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", _parameterInputs.Parameters.getValue("parameterInputRequestActionName"));
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.cs");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Action -> Action_5_Process_StorySetting");

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

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

        //Page 1-1
        private async Factory_Action_1_Begin_Process(): Promise<any> {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables

            let storedOutputResponseData: any = null;

            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process xxx xxx



            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process factory

            try {
                //#region IDEAL CASE - USE factory method

                //if (_storedInputRequestActionName.toUpperCase().Contains("PROCESSHTTPREQUEST_1_0"))
                //{
                //    storedOutputResponseData = await Execute_Factory_Action_1_Begin_Process_OutputApiToken();
                //}

                //#endregion
            }
            catch (storedProcessRequestMistake) {
                throw storedProcessRequestMistake; //Let "Startup.cs -> Startup_Controller" handle the exception.
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

        //Page 1-2
        private async Factory_Action_2_Validate_Process(): Promise<any> {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables

            let storedOutputResponseData: any = null;

            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process xxx xxx



            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process factory

            try {
                //#region IDEAL CASE - USE factory method

                //if (_storedInputRequestActionName.toUpperCase().Contains("PROCESSHTTPREQUEST_1_0"))
                //{
                //    storedOutputResponseData = await Execute_Factory_Action_2_Validate_Process_OutputApiToken();
                //}

                //#endregion
            }
            catch (storedProcessRequestMistake) {
                throw storedProcessRequestMistake; //Let "Startup.cs -> Startup_Controller" handle the exception.
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

        //Page 1-3
        private async Factory_Action_3_Process_StoryAuthor(): Promise<any> {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables

            let storedOutputResponseData: any = null;

            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process xxx xxx



            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process factory

            try {
                //#region IDEAL CASE - USE factory method

                //if (_storedInputRequestActionName.toUpperCase().Contains("PROCESSHTTPREQUEST_1_0"))
                //{
                //    storedOutputResponseData = await Execute_Factory_Action_3_Process_StoryAuthor_OutputApiToken();
                //}

                //#endregion
            }
            catch (storedProcessRequestMistake) {
                throw storedProcessRequestMistake; //Let "Startup.cs -> Startup_Controller" handle the exception.
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

        //Page 1-4
        private async Factory_Action_4_Process_StoryCharacters(): Promise<any> {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables

            let storedOutputResponseData: any = null;

            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process xxx xxx



            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process factory

            try {
                //#region IDEAL CASE - USE factory method

                //if (_storedInputRequestActionName.toUpperCase().Contains("PROCESSHTTPREQUEST_1_0"))
                //{
                //    storedOutputResponseData = await Execute_Factory_Action_4_Process_StoryCharacters_OutputApiToken();
                //}

                //#endregion
            }
            catch (storedProcessRequestMistake) {
                throw storedProcessRequestMistake; //Let "Startup.cs -> Startup_Controller" handle the exception.
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

        //Page 1-5
        private async Factory_Action_5_Process_StorySetting(): Promise<any> {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables



            //#endregion

            //#region DEFINE output variables

            let storedOutputResponseData: any = null;

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONFIGURING web routes");
            ////storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", _parameterInputs.Parameters.getValue("parameterInputRequestActionName"));
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.cs");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Action -> Action_5_Process_StorySetting");

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process factory

            try {
                //#region IDEAL CASE - USE factory method

                if (this._storedInputRequestActionName.toUpperCase().includes("PROCESSHTTPREQUEST_1_0")) {
                    //storedOutputResponseData = await Execute_Action_5_Process_StorySetting_ProcessHttpRequest();
                }

                //#endregion

            }
            catch (storedProcessRequestMistake) {
                throw storedProcessRequestMistake; //Let "Startup.cs -> Startup_Controller" handle the exception.
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

        //Page 1-6
        private async Factory_Action_6_Process_StoryExperiences(): Promise<any> {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables

            let storedOutputResponseData: any = null;

            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process xxx xxx



            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process factory

            try {
                //#region IDEAL CASE - USE factory method

                //if (_storedInputRequestActionName.toUpperCase().Contains("PROCESSHTTPREQUEST_1_0"))
                //{
                //    storedOutputResponseData = await Execute_Factory_Action_6_Process_StoryExperiences_OutputApiToken();
                //}

                //#endregion
            }
            catch (storedProcessRequestMistake) {
                throw storedProcessRequestMistake; //Let "Startup.cs -> Startup_Controller" handle the exception.
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

        //Page 1-7
        private async Factory_Action_7_Process_StoryResources(): Promise<any> {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables



            //#endregion

            //#region DEFINE output variables

            let storedOutputResponseData: any = null;

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequest3WordDescription", "CONFIGURING web routes");
            ////storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterInputRequestActionName", _parameterInputs.Parameters.getValue("parameterInputRequestActionName"));
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestTracker", _storedProcessRequestTracker);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestFileName", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.cs");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterProcessRequestMethodName", "Action -> Action_5_Process_StorySetting");

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process factory

            try {
                //#region IDEAL CASE - USE factory method

                //if (_storedInputRequestActionName.toUpperCase() == Action_12_2_1_0._12_3_WEB_DEVELOPMENT_Server_Copy_Static_Files_1_0.toUpperCase())
                //{
                //    storedOutputResponseData = await Execute_Factory_Action_7_Process_StoryResources_CopyStaticFiles();
                //}

                //#endregion
            }
            catch (storedProcessRequestMistake) {
                throw storedProcessRequestMistake; //Let "Startup.cs -> Startup_Controller" handle the exception.
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

        //Page 1-8
        private async Factory_Action_8_Process_CRUD(): Promise<any> {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables

            let storedOutputResponseData: any = null;

            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process xxx xxx



            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process factory

            try {
                //#region IDEAL CASE - USE factory method

                //if (_storedInputRequestActionName.toUpperCase().Contains("PROCESSHTTPREQUEST_1_0"))
                //{
                //    storedOutputResponseData = await Execute_Factory_Action_8_Process_CRUD_OutputApiToken();
                //}

                //#endregion
            }
            catch (storedProcessRequestMistake) {
                throw storedProcessRequestMistake; //Let "Startup.cs -> Startup_Controller" handle the exception.
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
        private async Factory_Action_10_End_Process(): Promise<any> {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables

            let storedOutputResponseData: any = null;

            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process xxx xxx



            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process factory

            try {
                //#region IDEAL CASE - USE factory method

                if (this._storedInputRequestActionName.toUpperCase() == Action_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.Action_12_2_1_0._12_3_WEB_DEVELOPMENT_Server_Copy_Static_Files_1_0.toUpperCase()) {
                    //storedOutputResponseData = await Execute_Factory_Action_10_End_Process_TransportRequestToHandler();
                }

                //#endregion
            }
            catch (storedProcessRequestMistake) {
                throw storedProcessRequestMistake; //Let "Startup.cs -> Startup_Controller" handle the exception.
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
    //#endregion
}