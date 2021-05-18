//#region Imports

//#region BaseDI

import * as aClass_Programming_ScriptExperience_BuilderPattern_12_2_1_0 from "../../../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptExperience_BuilderPattern_12_2_1_0";

import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptRoutable_12_2_1_0 from "../../../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptRoutable_12_2_1_0";

import * as Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0 from "../../../../../../../../../../7. Director/12/Other/2/Programming/Director/1/1_0/Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0";

import * as Action_12_2_1_0 from "../../../../../../../../../../0. Script/Parameters/12/Other/2/Programming/Action Poco/1/1_0/Action_12_2_1_0";
import * as ExtraData_12_2_1_0 from "../../../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";
import * as SingleParmPoco_12_2_1_0 from "../../../../../../../../../../0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

import * as Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0 from "../../../../../../../../../../0. Script/Extensions/11/Automate Manual Task/1/Risk Management/Method/0/1_0/Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0";
import * as Extension_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0 from "../../../../../../../../../../0. Script/Extensions/12/Other/3/Web Development/Method/13/1_0/Extension_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0";
import * as Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0 from "../../../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/0/1_0/Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0";

import * as Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0 from "../../../../../../../../../../1. Storyline/12/Other/2/Programming/Studio/0/1_0/Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0";

//#endregion

//#endregion

export namespace BaseDI.Professional.Experience.Hear.Web_Development_13
{
    export class Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0 extends aClass_Programming_ScriptExperience_BuilderPattern_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptExperience_BuilderPattern_12_2_1_0
    {
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

        public async Action(): Promise<object>
        {
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
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0.ts");
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

            let storedProcessRequestHandler_UsingBuilderPattern: Use_DesignPattern_Builder_Experience_12_3_1_0 = null;

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
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Action");

            //3. OUTPUTS  

            //OPTIONAL
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALMiddleOfProcess", true);

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE request handler

            try
            {
                //#region EDGE CASE - USE developer logger

                if (storedProcessRequestDeveloperMode && this._storedProcessRequestTracker["storedProcessRequestStepNumber"] == 0) {
                    this._storedProcessRequestTracker["storedProcessRequestStepNumber"] += 1;

                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Logging"); //Values = Logging or Mistake
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", this._storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                    Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                }

                //#endregion

                //#region IDEAL CASE - USE design pattern

                //REQUIRED: Implement one of the design patterns at https://www.dofactory.com/net/design-patterns
                storedProcessRequestHandler_UsingBuilderPattern = new Use_DesignPattern_Builder_Experience_12_3_1_0(this._storedInputs);

                this.StorylineDetails = await storedProcessRequestHandler_UsingBuilderPattern.Action();

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

        constructor(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0)
        {
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

        private HandleDefaults(): void
        {
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

        public async Action(): Promise<object>
        {
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

            storedProcessRequestHandler_UsingBuilderPattern = new Implement_DesignPattern_Builder_Experience_12_2_1_0(this._storedInputs);

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

    export class Implement_DesignPattern_Builder_Experience_12_2_1_0 extends aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>
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

        public HandleDefaults(): void
        {
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

        //Page 1-5
        public async Action_5_Process_StorySetting(): Promise<object>
        {
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


            //#region 1. INPUTS

            //#region DEFINE data response

            let storedOutputResponseData: any = null;

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONFIGURING web routes");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", this._storedInputs.Parameters.getValue("parameterInputRequestActionName"));
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestTracker["storedProcessRequestSettings"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.ts");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Action_5_Process_StorySetting");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try
            {
                storedOutputResponseData = await this.Factory_Action_5_Process_StorySetting();
            }
            catch (storedProcessRequestMistake)
            {
                throw storedProcessRequestMistake; //Let "Startup.ts" handle the exception.
            }

            //#endregion

            //#region 3. OUTPUT

            //#region HANDLE execution response
    

            //#endregion

            return storedOutputResponseData;

            //#endregion
        }

        //Page 1-7
        public async Action_7_Process_StoryResources(): Promise<object>
        {
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

            //#region 1. INPUTS

            //#region DEFINE data response

            let storedOutputResponseData: any = null;

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONFIGURING web routes");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", this._storedInputs.Parameters.getValue("parameterInputRequestActionName"));
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestTracker["storedProcessRequestSettings"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.ts");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Action_7_Process_StoryResources");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try
            {
                storedOutputResponseData = await this.Factory_Action_7_Process_StoryResources();
            }
            catch (storedProcessRequestMistake)
            {
                throw storedProcessRequestMistake; //Let "Startup.ts" handle the exception.
            }
            
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

        //Page 1-5
        private async Factory_Action_5_Process_StorySetting(): Promise<object>
        {
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

            //#region 1. INPUTS

            //#region DEFINE data response

            let storedOutputResponseData: any = null;

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONFIGURING web routes");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", _parameterInputs.Parameters.getValue("parameterInputRequestActionName"));
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", _storedProcessRequestTracker);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.cs");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Action -> Action_5_Process_StorySetting -> Factory_Action_5_Process_StorySetting");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process factory

            try
            {
                //#region IDEAL CASE - USE factory method

                if (this._storedInputRequestActionName.toUpperCase() == Action_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.Action_12_2_1_0._12_3_WEB_DEVELOPMENT_Server_OnLoad_1_0.toUpperCase()) {
                    storedOutputResponseData = await this.Execute_Action_5_Process_StorySetting_ProcessHttpRequest();
                }

                //#endregion
            }
            catch (storedProcessRequestMistake)
            {
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
        private async Factory_Action_7_Process_StoryResources(): Promise<object>
        {
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

            //#region 1. INPUTS

            //#region DEFINE data response

            let storedOutputResponseData: any = null;

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

            //REQUIRED
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONFIGURING web routes");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", _parameterInputs.Parameters.getValue("parameterInputRequestActionName"));
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", _storedProcessRequestTracker);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.cs");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Action -> Action_5_Process_StorySetting -> Factory_Action_5_Process_StorySetting");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process factory

            try
            {
                //#region IDEAL CASE - USE factory method

                if (this._storedInputRequestActionName.toUpperCase() == Action_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.Action_12_2_1_0._12_3_WEB_DEVELOPMENT_Server_Copy_Static_Files_1_0.toUpperCase()) {
                    storedOutputResponseData = await this.Execute_Factory_Action_7_Process_StoryResources_CopyStaticFiles();
                }

                //#endregion
            }
            catch (storedProcessRequestMistake)
            {
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

        //Page 1-5
        private async Execute_Action_5_Process_StorySetting_ProcessHttpRequest(): Promise<any>
        {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables

            let storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            let storedInputRequestRoute: any = null;
            let storedInputRequestRoutesFound: boolean = false;

            let storedInputRequestRouteListDetailsDELETE: Array<any> = null;
            let storedInputRequestRouteListDetailsGET: Array<any> = null;
            let storedInputRequestRouteListDetailsPOST: Array<any> = null;
            let storedInputRequestRouteListDetailsPUT: Array<any> = null;

            let storedInputRequestControllerRoutes: any = null;
            let storedInputRequestControllerName: string = "";
            let storedInputRequestControllerModelDataParameter: string = "";
            let storedInputRequestControllerModelDataObject: any = null;
            let storedInputRequestControllerModelDataRemote: any = null;

            //#endregion

            //#region DEFINE process variables

            let Action = null;
            let Step_1_0_Framework_Control_ClientRequestToServer_1_0 = null;
            let Step_2_0_Framework_Output_ServerRequestToClient_1_0 = null;

            let storedProcessRequestExtraData = new ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

            let storedProcessRequestServerInstance: any = null;

            //#endregion

            //#region DEFINE output variables

            let storedOutputResponse: any = null;
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


            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", _parameterInputs.Parameters.getValue("parameterInputRequestActionName"));

            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONFIGURING web routes");           
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", _storedProcessRequestTracker);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.cs");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Action -> Action_5_Process_StorySetting -> Factory_Action_5_Process_StorySetting -> Execute_Action_5_Process_StorySetting_ProcessHttpRequest");

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try
            {
                //#region 1. EXECUTE request management

                //#region IDEAL CASE - USE baseDI pipeline

                //#region C. OUTPUT server response

                const ExecuteOutputResponse = (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) => {                 
                    
                    //#region EDGE CASE - USE developer logger
                    if (storedProcessRequestDeveloperMode)
                    {                        
                        this._storedProcessRequestTracker["storedProcessRequestStepNumber"] = 0;

                        this._storedProcessRequestExtraData = parameterInputs.Parameters.getValue("parameterProcessRequestExtraData");  

                        //0. CONTROLLES

                        //1. INPUTS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", Action_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.Action_12_2_1_0._12_3_WEB_DEVELOPMENT_Server_Process_ROUTE_HTTP_Request_1_0);

                        //2. PROCESS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "ROUTING information found - [" + parameterInputs.Parameters.getValue("parameterProcessRequestHttpRouteVerb") + ": '" + this._storedProcessRequestExtraData.KeyValuePairs.getValue("storedProcessRequestServerHTTPRequestInstance").url.match('^[^?]*')[0] + "']");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", this._storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                        //3. OUTPUTS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Logging"); //Values = Logging or Mistake
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALBeginOfProcess", true);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALMasterLeaderIsSecondStep", true);
      
                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);

                        this._storedProcessRequestExtraData.KeyValuePairs.setValue("storedProcessRequestDeveloperLoggingInputs", storedProcessRequestDeveloperLoggingInputs);
                    }
                    //#endregion

                    //#region EDGE CASE - USE updates handler

                    this._storedProcessRequestTracker["StartUpCallBackServer"] = (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): any => {
                        return this._storedProcessRequestDataStorylineDetails;
                    }

                    //#endregion

                    //#region 1. INPUT request details

                    const Action = (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) => {
                        storedOutputResponseData = new Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.BaseDI.Professional.Story.Programming_0.Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0.BaseDI.Professional.Director.Programming_1.Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0(parameterInputs))
                            .SetupStoryline(parameterInputs)
                            .Action();
                    }

                    Action(parameterInputs);

                    //#endregion

                    //#region 2. OUTPUT server response

                    storedProcessRequestServerInstance = this._storedProcessRequestExtraData.KeyValuePairs.getValue("storedProcessRequestServerInstance");

                    storedOutputResponseData.then(storedHttpResponse =>
                    {
                        storedHttpResponse?.outputs[1].baseDIObservations.map(storedOutputResponseObservation => {
                            if (Object.keys(storedOutputResponseObservation).length > 0 && Object.keys(storedOutputResponseObservation)[0].toUpperCase().includes("HTML")) {
                                storedOutputResponse = unescape(storedOutputResponseObservation[Object.keys(storedOutputResponseObservation)[0]].baseDIObservations[0].observation.metadata[3].item.presentation[0].htmlResult)

                                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "SUCCESSFULLY rendered webpage");
                            }
                        });

                        if (storedProcessRequestServerInstance)
                        {
                            //#region EDGE CASE - USE developer logger

                            if (storedProcessRequestDeveloperMode) {
                                this._storedProcessRequestTracker["storedProcessRequestStepNumber"] = this._storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                                //0. CONTROLLES

                                //1. INPUTS

                                //2. PROCESS
                                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", this._storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                                //3. OUTPUTS
                                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Logging"); //Values = Logging or Mistake
                                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALBeginOfProcess", false);
                                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALEndOfProcess", true);

                                Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                            }

                            //#endregion

                            storedProcessRequestServerInstance.send(storedOutputResponse);
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
                            switch ((parameterInputs.Parameters["parameterProcessRequestHttpRouteVerb"] as string).toUpperCase())
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
                    catch (storedProcessRequestMistake)
                    {
                        //#region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode) {
                            this._storedProcessRequestTracker["storedProcessRequestStepNumber"] = this._storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                            //0. CONTROLLES

                            //1. INPUTS

                            //2. PROCESS
                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED retrieving route details");                           
                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", this._storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMistake", storedProcessRequestMistake);

                            //3. OUTPUTS
                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                            await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                        }

                        //#endregion

                        //#region EDGE CASE - USE exception handler

                        throw storedProcessRequestMistake;

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
                                parameterInputs.Parameters.getValue("parameterRouteListDetails").map(storedInputRequestRouteItemDetail =>
                                {
                                    //#region A. STORE controller details

                                    //STORE listing of routes
                                    storedInputRequestControllerRoutes = storedInputRequestRouteItemDetail.HandleDefaultsItemTransportItemRoute.ControllerRoutes;

                                    //STORE route controller name
                                    storedInputRequestControllerName = storedInputRequestRouteItemDetail.HandleDefaultsItemTransportItemRoute.ControllerName;

                                    //STORE route dataset details
                                    storedInputRequestControllerModelDataParameter = storedInputRequestRouteItemDetail.HandleDefaultsItemTransportItemRoute.ModelDataParameter;
                                    storedInputRequestControllerModelDataObject = storedInputRequestRouteItemDetail.HandleDefaultsItemTransportItemRoute.ModelDataObject;

                                    storedInputRequestControllerModelDataRemote = storedInputRequestRouteItemDetail.HandleDefaultsItemTransportItemRoute.ModelDataRemote;

                                    //#endregion

                                    if (storedInputRequestControllerRoutes != null && storedInputRequestControllerRoutes.length > 0)
                                    {
                                        storedInputRequestControllerRoutes.map(storedInputRequestRoute =>
                                        {
                                            //#region B. STORE route details

                                            this._storedProcessRequestExtraData.KeyValuePairs.remove("storedInputRequestControllerModelDataRemote");
                                            this._storedProcessRequestExtraData.KeyValuePairs.setValue("storedInputRequestControllerModelDataRemote", storedInputRequestControllerModelDataRemote);

                                            this._storedProcessRequestExtraData.KeyValuePairs.remove("storedControllerRoute");
                                            this._storedProcessRequestExtraData.KeyValuePairs.setValue("storedControllerRoute", storedInputRequestRoute);

                                            storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

                                            storedInputs.Parameters.setValue("parameterInputRequestName", storedInputRequestControllerName);
                                            storedInputs.Parameters.setValue("parameterInputRequestNameDataCacheKey", storedInputRequestControllerModelDataParameter);

                                            storedInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
                                            storedInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestSettings);

                                            storedInputs.Parameters.setValue("parameterProcessRequestDataStorylineDetails", (storedInputRequestControllerModelDataObject != null) ? storedInputRequestControllerModelDataObject : null);
                                            storedInputs.Parameters.setValue("parameterProcessRequestDataStorylineDetails_Parameters", null);
                                            storedInputs.Parameters.setValue("parameterProcessRequestDataStorylineDetails_CallBack", storedInputRequestControllerModelDataRemote);

                                            storedInputs.Parameters.setValue("parameterProcessRequestHttpRouteVerb", parameterInputs.Parameters.getValue("parameterProcessRequestHttpRouteVerb"));
                                                             
                                            //#endregion

                                            //#region C. CONTROL request response

                                            switch ((parameterInputs.Parameters.getValue("parameterProcessRequestHttpRouteVerb") as string).toUpperCase())
                                            {
                                                case "DELETE":
                                                    this._storedProcessRequestServerInstance.Server.Instance.delete(storedInputRequestRoute, (parameterRequest: any, parameterResponse: any) =>
                                                    {
                                                        this._storedProcessRequestExtraData.KeyValuePairs.remove("storedProcessRequestServerHTTPRequestInstance");
                                                        this._storedProcessRequestExtraData.KeyValuePairs.setValue("storedProcessRequestServerHTTPRequestInstance", parameterRequest);

                                                        this._storedProcessRequestExtraData.KeyValuePairs.remove("storedProcessRequestServerInstance");
                                                        this._storedProcessRequestExtraData.KeyValuePairs.setValue("storedProcessRequestServerInstance", this._storedProcessRequestServerInstance.Server.Instance);
                                                        
                                                        storedInputs.Parameters.setValue("parameterProcessRequestExtraData", this._storedProcessRequestExtraData);

                                                        //SET instance of our response object.         
                                                        ExecuteOutputResponse(storedInputs);
                                                    });
                                                    break;

                                                case "GET":
                                                    this._storedProcessRequestServerInstance.Server.Instance.get(storedInputRequestRoute, (parameterRequest: any, parameterResponse: any) => {
                                                        this._storedProcessRequestExtraData.KeyValuePairs.remove("storedProcessRequestServerHTTPRequestInstance");
                                                        this._storedProcessRequestExtraData.KeyValuePairs.setValue("storedProcessRequestServerHTTPRequestInstance", parameterRequest);

                                                        this._storedProcessRequestExtraData.KeyValuePairs.remove("storedProcessRequestServerInstance");
                                                        this._storedProcessRequestExtraData.KeyValuePairs.setValue("storedProcessRequestServerInstance", this._storedProcessRequestServerInstance.Server.Instance);

                                                        storedInputs.Parameters.setValue("parameterProcessRequestExtraData", this._storedProcessRequestExtraData);

                                                        //SET instance of our response object.         
                                                        ExecuteOutputResponse(storedInputs);
                                                    });
                                                    break;

                                                case "POST":
                                                    this._storedProcessRequestServerInstance.Server.Instance.post(storedInputRequestRoute, (parameterRequest: any, parameterResponse: any) => {
                                                        this._storedProcessRequestExtraData.KeyValuePairs.remove("storedProcessRequestServerHTTPRequestInstance");
                                                        this._storedProcessRequestExtraData.KeyValuePairs.setValue("storedProcessRequestServerHTTPRequestInstance", parameterRequest);

                                                        this._storedProcessRequestExtraData.KeyValuePairs.remove("storedProcessRequestServerInstance");
                                                        this._storedProcessRequestExtraData.KeyValuePairs.setValue("storedProcessRequestServerInstance", this._storedProcessRequestServerInstance.Server.Instance);

                                                        storedInputs.Parameters.setValue("parameterProcessRequestExtraData", this._storedProcessRequestExtraData);

                                                        //SET instance of our response object.         
                                                        ExecuteOutputResponse(storedInputs);
                                                    });
                                                    break;

                                                case "PUT":
                                                    this._storedProcessRequestServerInstance.Server.Instance.put(storedInputRequestRoute, (parameterRequest: any, parameterResponse: any) => {
                                                        this._storedProcessRequestExtraData.KeyValuePairs.remove("storedProcessRequestServerHTTPRequestInstance");
                                                        this._storedProcessRequestExtraData.KeyValuePairs.setValue("storedProcessRequestServerHTTPRequestInstance", parameterRequest);

                                                        this._storedProcessRequestExtraData.KeyValuePairs.remove("storedProcessRequestServerInstance");
                                                        this._storedProcessRequestExtraData.KeyValuePairs.setValue("storedProcessRequestServerInstance", this._storedProcessRequestServerInstance.Server.Instance);

                                                        storedInputs.Parameters.setValue("parameterProcessRequestExtraData", this._storedProcessRequestExtraData);

                                                        //SET instance of our response object.         
                                                        ExecuteOutputResponse(storedInputs);
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
                    catch (storedProcessRequestMistake) {
                        //#region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode) {
                            this._storedProcessRequestTracker["storedProcessRequestStepNumber"] = this._storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                            //0. CONTROLLES

                            //1. INPUTS

                            //2. PROCESS
                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED outputing response");                           
                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", this._storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMistake", storedProcessRequestMistake);

                            //3. OUTPUTS
                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                            await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                        }

                        //#endregion

                        //#region EDGE CASE - USE exception handler

                        throw storedProcessRequestMistake;

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
                        storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

                        //0. CONTROLLES

                        //1. INPUTS

                        //2. PROCESS
                        storedInputs.Parameters.setValue("parameterProcessRequestTracker", Object.assign(this._storedProcessRequestTracker, Object));
                        storedInputs.Parameters.setValue("parameterProcessRequestHandler", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0");
                        storedInputs.Parameters.setValue("parameterProcessRequestCentralizedStorer", Object.assign(this._storedProcessRequestCentralizedDisturber, Object));
                        storedInputs.Parameters.setValue("parameterProcessRequestDataStorylineDetails", Object.assign(this._storedProcessRequestDataStorylineDetails, Object));

                        //3. OUTPUTS

                        this._storedProcessRequestServerInstance = await Extension_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.BaseDI.Professional.Web_Development.Extensions_13.Extension_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.Step_X_X_Framework_Control_ServerHandleDefaults_1_0(storedInputs);

                        return true;
                    }

                    await ExecuteStorageRequest();

                    //#region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode) {
                        this._storedProcessRequestTracker["storedProcessRequestStepNumber"] = this._storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        //0. CONTROLLES

                        //1. INPUTS

                        //2. PROCESS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "SUCCESSFULLY configured request prerequisites");                       
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", this._storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                        //3. OUTPUTS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Logging"); //Values = Logging or Mistake

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    //#endregion

                }
                catch (storedProcessRequestMistake) {
                    //#region EDGE CASE - USE developer logger
                    if (storedProcessRequestDeveloperMode) {
                        this._storedProcessRequestTracker["storedProcessRequestStepNumber"] = this._storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        //0. CONTROLLES

                        //1. INPUTS

                        //2. PROCESS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED storing server configurations to memory");                        
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", this._storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMistake", storedProcessRequestMistake);

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

                //#region 2. CONFIGURE route goals

                //#region A. STORE routes configurations to memory

                try
                {
                    const ExecuteStorageRequest = async (): Promise<boolean> => {
                        storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

                        //CONFIGURE delete routes
                        if (this?._storedProcessRequestServerInstance?.Server?.Verbs?.Delete != undefined && this?._storedProcessRequestServerInstance?.Server?.Verbs?.Delete != null) {
                            storedInputRequestRouteListDetailsDELETE = this?._storedProcessRequestServerInstance?.Server?.Verbs?.Delete as Array<any>;

                            storedInputs.Parameters.setValue("parameterRouteListDetailsDELETE", storedInputRequestRouteListDetailsDELETE);
                        }

                        //CONFIGURE get routes
                        if (this?._storedProcessRequestServerInstance?.Server?.Verbs?.Get != undefined && this?._storedProcessRequestServerInstance?.Server?.Verbs?.Get != null) {
                            storedInputRequestRouteListDetailsGET = this?._storedProcessRequestServerInstance?.Server?.Verbs?.Get as Array<any>;

                            storedInputs.Parameters.setValue("parameterRouteListDetailsGET", storedInputRequestRouteListDetailsGET);
                        }

                        //CONFIGURE post routes
                        if (this?._storedProcessRequestServerInstance?.Server?.Verbs?.Post != undefined && this?._storedProcessRequestServerInstance?.Server?.Verbs?.Post != null) {
                            storedInputRequestRouteListDetailsPOST = this?._storedProcessRequestServerInstance?.Server?.Verbs?.Post as Array<any>;

                            storedInputs.Parameters.setValue("parameterRouteListDetailsPOST", storedInputRequestRouteListDetailsPOST);
                        }

                        //CONFIGURE put routes
                        if (this?._storedProcessRequestServerInstance?.Server?.Verbs?.Put != undefined && this?._storedProcessRequestServerInstance?.Server?.Verbs?.Put != null) {
                            storedInputRequestRouteListDetailsPUT = this?._storedProcessRequestServerInstance?.Server?.Verbs?.Put as Array<any>;

                            storedInputs.Parameters.setValue("parameterRouteListDetailsPUT", storedInputRequestRouteListDetailsPUT);
                        }

                        if (storedInputs.Parameters.containsKey("parameterRouteListDetailsDELETE") ||
                            storedInputs.Parameters.containsKey("parameterRouteListDetailsGET") ||
                            storedInputs.Parameters.containsKey("parameterRouteListDetailsPOST") ||
                            storedInputs.Parameters.containsKey("parameterRouteListDetailsPUT")) {

                            return true;
                        }

                        return false;
                        
                    }

                    storedInputRequestRoutesFound = await ExecuteStorageRequest();
                }
                catch (storedProcessRequestMistake)
                {
                    //#region EDGE CASE - USE developer logger
                    if (storedProcessRequestDeveloperMode) {
                        this._storedProcessRequestTracker["storedProcessRequestStepNumber"] = this._storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        //0. CONTROLLES

                        //1. INPUTS

                        //2. PROCESS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED storing routes to memory");                       
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", this._storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMistake", storedProcessRequestMistake);

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

                //#region B. INPUT routes configurations

                try
                {
                    //#region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode && storedInputRequestRoutesFound) {
                        this._storedProcessRequestTracker["storedProcessRequestStepNumber"] = this._storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        //0. CONTROLLES

                        //1. INPUTS

                        //2. PROCESS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "SUCCESSFULLY configured routes");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", this._storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                        //3. OUTPUTS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Logging"); //Values = Logging or Mistake

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    //#endregion

                    if (storedInputRequestRoutesFound) {
                        storedInputs.Parameters.setValue("parameterProcessRequestHttpRouteVerb", "DELETE");
                        await ExecuteInputRequest(storedInputs);

                        storedInputs.Parameters.remove("parameterProcessRequestHttpRouteVerb");
                        storedInputs.Parameters.setValue("parameterProcessRequestHttpRouteVerb", "GET");
                        await ExecuteInputRequest(storedInputs);

                        storedInputs.Parameters.remove("parameterProcessRequestHttpRouteVerb");
                        storedInputs.Parameters.setValue("parameterProcessRequestHttpRouteVerb", "POST");
                        await ExecuteInputRequest(storedInputs);

                        storedInputs.Parameters.remove("parameterProcessRequestHttpRouteVerb");
                        storedInputs.Parameters.setValue("parameterProcessRequestHttpRouteVerb", "PUT");
                        await ExecuteInputRequest(storedInputs);
                    }
                    else
                    {
                        throw new Error("FAILED configurating routes");
                    }
                }
                catch (storedProcessRequestMistake)
                {
                    //#region EDGE CASE - USE developer logger
                    if (storedProcessRequestDeveloperMode) {
                        this._storedProcessRequestTracker["storedProcessRequestStepNumber"] = this._storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        //0. CONTROLLES

                        //1. INPUTS

                        //2. PROCESS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED configurating routes");                       
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", this._storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMistake", storedProcessRequestMistake);

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

                //#endregion

                //#endregion

                //#endregion

                //#region 2. EXECUTE response management

                //#region EDGE CASE - USE developer logger

                if (storedProcessRequestDeveloperMode) {
                    this._storedProcessRequestTracker["storedProcessRequestStepNumber"] = this._storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                    //0. CONTROLLES

                    //1. INPUTS

                    //2. PROCESS
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "BOOTING web server");
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", this._storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                    //3. OUTPUTS
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Logging"); //Values = Logging or Mistake
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALMiddleOfProcess", true);

                    Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);

                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALMiddleOfProcess", false);
                }

                //#endregion

                //#region IDEAL CASE - USE express server

                //#region A. CONTROL request response

                try
                {
                    const ExecuteControllerRequest = async () => {
                        this._storedProcessRequestServerInstance.Server.Instance.listen(this._storedProcessRequestServerInstance.Server.Port, () => {
                            //#region EDGE CASE - USE developer logger

                            if (storedProcessRequestDeveloperMode) {
                                this._storedProcessRequestTracker["storedProcessRequestStepNumber"] = this._storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                                //0. CONTROLLES

                                //1. INPUTS

                                //2. PROCESS
                                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "STARTING web server");                                
                                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", this._storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                                //3. OUTPUTS
                                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Logging"); //Values = Logging or Mistake
                                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALEndOfProcess", true);

                                Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);

                                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALEndOfProcess", false);
                            }

                            //#endregion

                            console.log(`server started at http://localhost:${this._storedProcessRequestServerInstance.Server.Port}`);
                        });
                    }

                    await ExecuteControllerRequest();
                }
                catch (storedProcessRequestMistake)
                {
                    //#region EDGE CASE - USE developer logger
                    if (storedProcessRequestDeveloperMode) {
                        this._storedProcessRequestTracker["storedProcessRequestStepNumber"] = this._storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        //0. CONTROLLES

                        //1. INPUTS

                        //2. PROCESS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED starting server");                        
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", this._storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMistake", storedProcessRequestMistake);

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

                //#endregion
            }
            catch (storedProcessRequestMistake)
            {
                //#region EDGE CASE - USE developer logger
                if (storedProcessRequestDeveloperMode) {
                    this._storedProcessRequestTracker["storedProcessRequestStepNumber"] = this._storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                    //0. CONTROLLES

                    //1. INPUTS

                    //2. PROCESS
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED configuring server");
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

            //#region 3. OUTPUT

            //#region HANDLE execution response

            //#region IDEAL CASE - USE baseDI dataset

            return storedOutputResponseData;

            //#endregion

            //#endregion

            //#endregion
        }

        //Page 1-7
        private async Execute_Factory_Action_7_Process_StoryResources_CopyStaticFiles(): Promise<any>
        {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables

            let storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //#endregion

            //#region DEFINE process variables

            let Action = null;
            let Step_1_0_Framework_Control_ClientRequestToServer_1_0 = null;
            let Step_2_0_Framework_Output_ServerRequestToClient_1_0 = null;

            let storedProcessRequestExtraData = new ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

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

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONFIGURING web routes");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", _parameterInputs.Parameters.getValue("parameterInputRequestActionName"));
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", _storedProcessRequestTracker["storedProcessRequestSettings"]);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", _storedProcessRequestTracker);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.cs");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Action -> Action_7_Process_StoryResources -> Factory_Action_7_Process_StoryResources -> Execute_Factory_Action_7_Process_StoryResources_CopyStaticFiles");

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try
            {
                //#region EXECUTE copying static files

                //#region IDEAL CASE - USE baseDI extension

                storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

                //0. CONTROLLES

                //1. INPUTS

                //2. PROCESS
                storedInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
                storedInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestSettings);
                storedInputs.Parameters.setValue("parameterProcessRequestDataStorylineDetails", this._storedProcessRequestDataStorylineDetails);

                //3. OUTPUTS
                await Extension_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.BaseDI.Professional.Web_Development.Extensions_13.Extension_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.Step_X_X_Framework_Store_FilesToServer_1_0(storedInputs);

                //#endregion

                //#endregion
            }
            catch (storedProcessRequestMistake) {
                //#region EDGE CASE - USE developer logger
                if (storedProcessRequestDeveloperMode) {
                    this._storedProcessRequestTracker["storedProcessRequestStepNumber"] = this._storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                    //0. CONTROLLES

                    //1. INPUTS

                    //2. PROCESS
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED configuring server");                  
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

            //#region 3. OUTPUT

            //#region HANDLE execution response

            //#region IDEAL CASE - USE baseDI dataset

            return storedOutputResponseData;

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

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables



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

            try {
                storedOutputResponseData = null; //await this.Factory_Action_7_Process_StoryResources();
            }
            catch (storedProcessRequestMistake) {
                throw storedProcessRequestMistake; //Let "Startup.ts" handle the exception.
            }

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

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables



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

            try {
                storedOutputResponseData = null; //await this.Factory_Action_7_Process_StoryResources();
            }
            catch (storedProcessRequestMistake) {
                throw storedProcessRequestMistake; //Let "Startup.ts" handle the exception.
            }

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

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables



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

            try {
                storedOutputResponseData = null; //await this.Factory_Action_7_Process_StoryResources();
            }
            catch (storedProcessRequestMistake) {
                throw storedProcessRequestMistake; //Let "Startup.ts" handle the exception.
            }

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

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables



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

            try {
                storedOutputResponseData = null; //await this.Factory_Action_7_Process_StoryResources();
            }
            catch (storedProcessRequestMistake) {
                throw storedProcessRequestMistake; //Let "Startup.ts" handle the exception.
            }

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

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables



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

            try {
                storedOutputResponseData = null; //await this.Factory_Action_7_Process_StoryResources();
            }
            catch (storedProcessRequestMistake) {
                throw storedProcessRequestMistake; //Let "Startup.ts" handle the exception.
            }

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            return this._storedProcessRequestDataStorylineDetails;

            //#endregion

            //#endregion

            //#endregion
        }

        //Page 1-8
        public async Action_8_Process_CRUD(): Promise<object> {
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

            try {
                storedOutputResponseData = null; //await this.Factory_Action_7_Process_StoryResources();
            }
            catch (storedProcessRequestMistake) {
                throw storedProcessRequestMistake; //Let "Startup.ts" handle the exception.
            }

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

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables



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

            try {
                storedOutputResponseData = null; //await this.Factory_Action_7_Process_StoryResources();
            }
            catch (storedProcessRequestMistake) {
                throw storedProcessRequestMistake; //Let "Startup.ts" handle the exception.
            }

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
        public async Action_10_End_Process(): Promise<object> {
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

            try {
                storedOutputResponseData = null; //await this.Factory_Action_7_Process_StoryResources();
            }
            catch (storedProcessRequestMistake) {
                throw storedProcessRequestMistake; //Let "Startup.ts" handle the exception.
            }

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
        private async Factory_Action_1_Begin_Process(): Promise<object> {
            switch (this._storedInputRequestActionName.toUpperCase()) {
                default:
                    return null;
            }
        }

        //Page 1-2
        private async Factory_Action_2_Validate_Process(): Promise<object> {
            switch (this._storedInputRequestActionName.toUpperCase()) {
                default:
                    return null;
            }
        }

        //Page 1-3
        private async Factory_Action_3_Process_StoryAuthor(): Promise<object> {
            switch (this._storedInputRequestActionName.toUpperCase()) {
                default:
                    return null;
            }
        }

        //Page 1-4
        private async Factory_Action_4_Process_StoryCharacters(): Promise<object> {
            switch (this._storedInputRequestActionName.toUpperCase()) {
                default:
                    return null;
            }
        }

        //Page 1-5
        private async Factory_Action_6_Process_StoryExperiences(): Promise<object> {
            switch (this._storedInputRequestActionName.toUpperCase()) {
                default:
                    return null;
            }
        }

        //Page 1-6
        private async Factory_Action_8_Process_CRUD(): Promise<object> {
            switch (this._storedInputRequestActionName.toUpperCase()) {
                default:
                    return null;
            }
        }

        //Page 1-7
        private async Factory_Action_9_Verify_Process(): Promise<object> {
            switch (this._storedInputRequestActionName.toUpperCase()) {
                default:
                    return null;
            }
        }

        //Page 1-8
        private async Factory_Action_10_End_Process(): Promise<object> {
            switch (this._storedInputRequestActionName.toUpperCase()) {
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