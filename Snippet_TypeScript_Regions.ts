//#region Imports

//#region BaseDI
import * as Action_12_2_1_0 from "./0. Script/Parameters/12/Other/2/Programming/Action Poco/1/1_0/Action_12_2_1_0";

import * as ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "./1. Storyline/12/Other/2/Programming/Studio/1/1_0/ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

import * as Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0 from "./7. Director/12/Other/2/Programming/Director/1/1_0/Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0";
import * as Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0 from "./0. Script/Extensions/11/Automate Manual Task/1/Risk Management/Method/0/1_0/Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0";

import * as ExtraData_12_2_1_0 from "./0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";

import * as SingleParmPoco_12_2_1_0 from "./0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";
//#endregion

//#region Modules

//#endregion

//#endregion

export class BusinessLogicTemplate {
    //#region 1. Assign

    //CLIENT/SERVER
    private _storedControlRequestClientOrServer: any;

    //SETTINGS
    private _storedProcessRequestSettings: any = null;

    //DATASETS
    private _storedProcessRequestDataStorylineDetails: object = null;
    private _storedProcessRequestDataStorylineDetails_Parameters: object = null;

    //MISC
    private _storedProcessRequestExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

    //PLUMBING
    private _storedProcessRequestTracker: Object = new Object();

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

        this._storedProcessRequestExtraData = new ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0();

        //#endregion

        //#region DEFINE output variables

        let storedOutputResponseData: Promise<any>;

        //#endregion

        //#region MEMORIZE control variables

        //#region MEMORIZE control client server

        this._storedControlRequestClientOrServer = parameterInputs.Parameters.getValue("parameterControlRequestClientOrServer");

        //#endregion

        //#endregion

        //#region MEMORIZE input variables

        //#region MEMORIZE input xxx xxx
  
        //#endregion

        //#endregion

        //#region MEMORIZE process variables

        //#endregion

        //#region MEMORIZE output variables

        //#region MEMORIZE output xxx xxxx

        //#endregion

        //#endregion
  
        //#endregion

        //#region 2. PROCESS

        //#region EXECUTE process defaults

        //#region EDGE CASE - USE defaults handler

        this.HandleDefaults = this.HandleDefaults.bind(this);
        this.HandleDefaults();

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

        //#region HANDLE application defaults

        //#region IDEAL CASE - USE hardcoded values

        if (process.env.APP_ENV != undefined && process.env.APP_ENV != null && process.env.APP_ENV.toUpperCase() == "SERVER") {
            this._storedProcessRequestTracker = {
                "storedProcessRequestSettings": process.env,
                "serverInstance": this._storedControlRequestClientOrServer,
                "serverStartUp": this
            }
        }
        else {
            this._storedProcessRequestTracker = {
                "storedProcessRequestSettings": process.env,
                "clientInstance": this._storedControlRequestClientOrServer,
                "clientStartUp": this
            }
        }

        this._storedProcessRequestTracker["storedProcessRequestIgnoreDeveloperConsoleLog"] = false;

        //#endregion

        //#endregion

        //#endregion

        //#region 3. OUTPUT

        //#endregion
    }

    //#endregion

    //#region 4. Action

    public async Action(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<any> {
        //#region 1. INPUTS

        //#region VALIDATE input parameters

        const ValidateInputs = async (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<boolean> => {
            //#region 1. INPUTS

            //#region DEFINE input variables

            let storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //#endregion

            //#region DEFINE process variables

            let storedProcessRequestMistakeMade: boolean = false;

            //#endregion

            //#region DEFINE output variables

            let storedOutputResponseData: Promise<any>;
            let storedOutputResponseMessage: string = "";

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process request tracker

            let storedProcessRequestTracker: any = this._storedProcessRequestTracker;

            //#endregion

            //#region MEMORIZE process request settings

            let storedProcessRequestSettings: any = storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE ? storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE : false;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);

            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "VALIDATING request inputs");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Startup.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Action -> ValidateInputs");

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
                if (process.env.APP_ENV == null || process.env.APP_ENV == undefined) {
                    storedOutputResponseMessage += "***process.env.APP_ENV*** cannot be blank or empty.\n"
                    storedProcessRequestMistakeMade = true;
                }

                if (!parameterInputs.Parameters.containsKey("parameterOutputResponseControlID")) {
                    storedOutputResponseMessage += "***parameterOutputResponseControlID*** cannot be blank or empty.\n"
                    storedProcessRequestMistakeMade = true;
                }

                if (!parameterInputs.Parameters.containsKey("parameterInputRequestName")) {
                    storedOutputResponseMessage += "***parameterInputRequestName*** cannot be blank or empty.\n"
                    storedProcessRequestMistakeMade = true;
                }

                if (!parameterInputs.Parameters.containsKey("parameterInputRequestActionName")) {
                    storedOutputResponseMessage += "***parameterInputRequestActionName*** cannot be blank or empty.\n"
                    storedProcessRequestMistakeMade = true;
                }

                if (!parameterInputs.Parameters.containsKey("parameterInputRequestNameDataCacheKey")) {
                    storedOutputResponseMessage += "***parameterInputRequestNameDataCacheKey*** cannot be blank or empty.\n"
                    storedProcessRequestMistakeMade = true;
                }

                if (!parameterInputs.Parameters.containsKey("parameterProcessRequestCallBack")) {
                    storedOutputResponseMessage += "***parameterProcessRequestCallBack*** cannot be blank or empty.\n"
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

        //#region DEFINE control variables

        //#endregion

        //#region DEFINE input variables

        let storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

        //#endregion

        //#region DEFINE process variables

        //#endregion

        //#region DEFINE output variables

        let storedOutputResponseData: Promise<any>;

        //#endregion

        //#region MEMORIZE control variables

        //#region MEMORIZE control xxx xxx

 
        //#endregion

        //#endregion

        //#region MEMORIZE input variables

        //#region MEMORIZE input action name

        this._storedProcessRequestTracker["storedInputRequestActionName"] = parameterInputs.Parameters.getValue("parameterInputRequestActionName");

        //#endregion

        //#endregion

        //#region MEMORIZE process variables

        //#region MEMORIZE process request settings

        this._storedProcessRequestSettings = this._storedProcessRequestTracker["storedProcessRequestSettings"];

        //#endregion

        //#region MEMORIZE process developer mode

        let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

        this._storedProcessRequestTracker["storedProcessRequestStepNumber"] = 0;

        let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

        //REQUIRED
        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "STARING web request");
        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", this._storedProcessRequestTracker["storedInputRequestActionName"]);
        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestTracker["storedProcessRequestSettings"]);
        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Start.ts");
        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Action");

        //#endregion

        //#endregion

        //#region MEMORIZE output variables

        //#region MEMORIZE output xxx xxxx

        //#endregion

        //#endregion

        //#endregion
    }

    //#endregion
}

export class DefaultRegionsTemplate {
    //#region 1. Assign

    //CLIENT/SERVER
    private _storedControlRequestClientOrServer: any;

    //SETTINGS
    private _storedProcessRequestSettings: any = null;

    //DATASETS
    private _storedProcessRequestDataStorylineDetails: object = null;
    private _storedProcessRequestDataStorylineDetails_Parameters: object = null;

    //MISC
    private _storedProcessRequestExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

    //PLUMBING
    private _storedProcessRequestTracker: Object = new Object();

    //#endregion

    //#region 2. Ready

    constructor(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) {
        //#region 1. INPUTS

        //#region DEFINE control variables

        //#endregion

        //#region DEFINE input variables

        let storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

        //#endregion

        //#region DEFINE process variables

        //#endregion

        //#region DEFINE output variables

        let storedOutputResponseData: Promise<any>;

        //#endregion

        //#region MEMORIZE control variables

        //#region MEMORIZE control xxx xxx


        //#endregion

        //#endregion

        //#region MEMORIZE input variables

        //#region MEMORIZE input xxx xxxx


        //#endregion

        //#endregion

        //#region MEMORIZE process variables

        //#region MEMORIZE process xxx xxxx

        //#endregion

        //#region MEMORIZE process developer mode

        let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

        this._storedProcessRequestTracker["storedProcessRequestStepNumber"] = 0;

        let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

        //REQUIRED
        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "STARING web request");
        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", this._storedProcessRequestTracker["storedInputRequestActionName"]);
        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestTracker["storedProcessRequestSettings"]);
        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Start.ts");
        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Action");

        //#endregion

        //#endregion

        //#region MEMORIZE output variables

        //#region MEMORIZE output xxx xxxx

        //#endregion

        //#endregion

        //#endregion

        //#region 2. PROCESS

        //#region EXECUTE process defaults

        //#region EDGE CASE - USE defaults handler

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

        let storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

        //#endregion

        //#region DEFINE process variables

        //#endregion

        //#region DEFINE output variables

        let storedOutputResponseData: Promise<any>;

        //#endregion

        //#region MEMORIZE control variables

        //#region MEMORIZE control xxx xxx


        //#endregion

        //#endregion

        //#region MEMORIZE input variables

        //#region MEMORIZE input xxx xxxx


        //#endregion

        //#endregion

        //#region MEMORIZE process variables

        //#region MEMORIZE process xxx xxxx

        //#endregion

        //#region MEMORIZE process developer mode

        let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

        this._storedProcessRequestTracker["storedProcessRequestStepNumber"] = 0;

        let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

        //REQUIRED
        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "STARING web request");
        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", this._storedProcessRequestTracker["storedInputRequestActionName"]);
        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestTracker["storedProcessRequestSettings"]);
        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Start.ts");
        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Action");

        //#endregion

        //#endregion

        //#region MEMORIZE output variables

        //#region MEMORIZE output xxx xxxx

        //#endregion

        //#endregion

        //#endregion

        //#region 2. PROCESS

        //#region HANDLE application defaults

        //#region IDEAL CASE - USE hardcoded values


        //#endregion

        //#endregion

        //#endregion

        //#region 3. OUTPUT

        //#endregion
    }

    //#endregion

    //#region 4. Action

    public async Action(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<any>
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

            let storedOutputResponseData: Promise<any>;
            let storedOutputResponseMessage: string = "";

            //#endregion

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

            let storedProcessRequestTracker: any = this._storedProcessRequestTracker;

            //#endregion

            //#region MEMORIZE process request settings

            let storedProcessRequestSettings: any = storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            this._storedProcessRequestTracker["storedProcessRequestStepNumber"] = 0;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "STARING web request");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", this._storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Start.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Action");

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE process xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE validation process

            //#region IDEAL CASE - USE valid information

            if (parameterInputs != null || parameterInputs != undefined || parameterInputs.Parameters != null && parameterInputs.Parameters != undefined) {
                //0. CONTROLLERS
                if (!parameterInputs.Parameters.containsKey("parameterControlRequestClientOrServer")) {
                    storedOutputResponseMessage += "***parameterControlRequestClientOrServer*** cannot be blank or empty.\n"
                    storedProcessRequestMistakeMade = true;
                }

                //1. INPUTS
                if (!parameterInputs.Parameters.containsKey("parameterInputRequestName")) {
                    storedOutputResponseMessage += "***parameterInputRequestName*** cannot be blank or empty.\n"
                    storedProcessRequestMistakeMade = true;
                }

                if (!parameterInputs.Parameters.containsKey("parameterInputRequestActionName")) {
                    storedOutputResponseMessage += "***parameterInputRequestActionName*** cannot be blank or empty.\n"
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

                if (!parameterInputs.Parameters.containsKey("parameterProcessRequestCallBack")) {
                    storedOutputResponseMessage += "***parameterProcessRequestCallBack*** cannot be blank or empty.\n"
                    storedProcessRequestMistakeMade = true;
                }

                if (!parameterInputs.Parameters.containsKey("parameterOutputResponseControlID")) {
                    storedOutputResponseMessage += "***parameterOutputResponseControlID*** cannot be blank or empty.\n"
                    storedProcessRequestMistakeMade = true;
                }

                if (storedProcessRequestMistakeMade) {
                    //#region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode) {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

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

        //#region DEFINE control variables

        //#endregion

        //#region DEFINE input variables

        let storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

        //#endregion

        //#region DEFINE process variables

        //#endregion

        //#region DEFINE output variables

        let storedOutputResponseData: Promise<any>;

        //#endregion

        //#region MEMORIZE control variables

        //#region MEMORIZE control xxx xxx


        //#endregion

        //#endregion

        //#region MEMORIZE input variables

        //#region MEMORIZE input xxx xxxx


        //#endregion

        //#endregion

        //#region MEMORIZE process variables

        //#region MEMORIZE process xxx xxxx

        //#endregion

        //#region MEMORIZE process developer mode

        let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

        this._storedProcessRequestTracker["storedProcessRequestStepNumber"] = 0;

        let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

        //REQUIRED
        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "STARING web request");
        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", this._storedProcessRequestTracker["storedInputRequestActionName"]);
        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestTracker["storedProcessRequestSettings"]);
        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Start.ts");
        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Action");

        //#endregion

        //#endregion

        //#region MEMORIZE output variables

        //#region MEMORIZE output xxx xxxx

        //#endregion

        //#endregion

        //#endregion
    }

    //#endregion
}