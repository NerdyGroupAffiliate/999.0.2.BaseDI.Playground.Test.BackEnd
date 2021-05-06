//#region Imports

//#region BaseDI
import * as Action_12_2_1_0 from "./0. Script/Parameters/12/Other/2/Programming/Action Poco/1/1_0/Action_12_2_1_0";

import * as Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0 from "./1. Storyline/12/Other/2/Programming/Studio/0/1_0/Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0";

import * as Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0 from "./7. Director/12/Other/2/Programming/Director/1/1_0/Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0";
import * as Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0 from "./0. Script/Extensions/11/Automate Manual Task/1/Risk Management/Method/0/1_0/Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0";

import * as ExtraData_12_2_1_0 from "./0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";

import * as SingleParmPoco_12_2_1_0 from "./0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";
//#endregion

//#region Modules

//#endregion

//#endregion

//EXECUTION
//#region HANDLE baseDI http request
export namespace BaseDI.Professional
{
    export class Startup
    {
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

            let storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //#endregion

            //#region DEFINE process variables

            this._storedProcessRequestExtraData = new ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0();

            //#endregion

            //#region DEFINE output variables

            let storedOutputResponseData: Promise<any>;

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control client server

            this._storedControlRequestClientOrServer = parameterInputs.Parameters.getValue("parameterControlRequestClientOrServer");

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
        public HandleDefaults(): void
        {
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

        public async Action(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) : Promise<any>
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
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "STARING system request");
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

                if (parameterInputs != null || parameterInputs != undefined || parameterInputs.Parameters != null && parameterInputs.Parameters != undefined)
                {
                    //0. CONTROLLERS
                    if (!parameterInputs.Parameters.containsKey("parameterControlRequestClientOrServer")) {
                        storedOutputResponseMessage += "***parameterControlRequestClientOrServer*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    //1. INPUTS
                    if (!parameterInputs.Parameters.containsKey("parameterInputRequestActionName")) {
                        storedOutputResponseMessage += "***parameterInputRequestActionName*** cannot be blank or empty.\n"
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

                    //2. PROCESS
                    if (process.env.APP_ENV == null || process.env.APP_ENV == undefined) {
                        storedOutputResponseMessage += "***process.env.APP_ENV*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestCallBack")) {
                        storedOutputResponseMessage += "***parameterProcessRequestCallBack*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestSettings")) {
                        storedOutputResponseMessage += "***parameterProcessRequestSettings*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestTracker")) {
                        storedOutputResponseMessage += "***parameterProcessRequestTracker*** cannot be blank or empty.\n"
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

            ///////////////////////////////////////////////////////////

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

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input action name

            let storedInputRequestActionName = parameterInputs.Parameters.getValue("parameterInputRequestActionName");
            this._storedProcessRequestTracker["storedInputRequestActionName"] = storedInputRequestActionName;

            //#endregion

            //#region MEMORIZE input request name

            let storedInputRequestName = parameterInputs.Parameters.getValue("parameterInputRequestName");

            //#endregion

            //#region MEMORIZE input request name data cache key

            let storedInputRequestNameDataCacheKey = parameterInputs.Parameters.getValue("parameterInputRequestNameDataCacheKey");

            //#endregion
   
            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process request callback

            let storedProcessRequestCallBack: any = parameterInputs.Parameters.getValue("parameterProcessRequestCallBack");

            //#endregion

            //#region MEMORIZE process request settings

            this._storedProcessRequestSettings = this._storedProcessRequestTracker["storedProcessRequestSettings"];
   
            //#endregion

            //#region MEMORIZE process request tracker

            this._storedProcessRequestTracker["storedProcessRequestSettings"] = this._storedProcessRequestSettings;
            this._storedProcessRequestTracker["storedProcessRequestStepNumber"] = 0;

            //#endregion

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            this._storedProcessRequestTracker["storedProcessRequestStepNumber"] = 0;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED

            //0. CONTROLLERS

            //1. INPUTS
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", this._storedProcessRequestTracker["storedInputRequestActionName"]);

            //2. PROCESS
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "STARING system request");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Start.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Action");

            //3. OUTPUTS

            //#endregion  

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output response controlID

            let storedOutputResponseControlID: string = parameterInputs.Parameters.getValue("parameterOutputResponseControlID");
            this._storedProcessRequestTracker["storedOutputResponseControlID"] = parameterInputs.Parameters.getValue("parameterOutputResponseControlID");
                
            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try
            {
                //#region EXECUTE client request

                //#region IDEAL CASE - USE request handler

                //#region A. INPUT request

                storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

                //0. CONTROLLERS
                storedInputs.Parameters.setValue("parameterControlRequestClientOrServer", this);

                //1. INPUTS
                storedInputs.Parameters.setValue("parameterInputRequestActionName", storedInputRequestActionName);
                storedInputs.Parameters.setValue("parameterInputRequestName", storedInputRequestName);
                storedInputs.Parameters.setValue("parameterInputRequestNameDataCacheKey", storedInputRequestNameDataCacheKey);

                //2. PROCESS
                storedInputs.Parameters.setValue("parameterProcessRequestCallBack", storedProcessRequestCallBack);
                storedInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestSettings);
                storedInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);

                storedInputs.Parameters.setValue("parameterProcessRequestDataStorylineDetails", null);
                storedInputs.Parameters.setValue("parameterProcessRequestDataStorylineDetails_Parameters", null);
                storedInputs.Parameters.setValue("parameterProcessRequestDataStorylineDetails_CallBack", null);

                //3. OUTPUTS
                storedInputs.Parameters.setValue("parameterOutputResponseControlID", storedOutputResponseControlID);
        
                //#endregion

                //#region B. PROCESS request

                const Action = (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) =>
                {
                    //#region C. OUTPUT response
                    storedOutputResponseData = new Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.BaseDI.Professional.Story.Programming_0.Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0.BaseDI.Professional.Director.Programming_1.Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0(parameterInputs))
                        .SetupStoryline(parameterInputs)
                        .Action();
                    //#endregion
                }

                Action(storedInputs);

                //#endregion

                //#endregion

                //#endregion
            }
            catch
            {
                //#region HANDLE execution mistakes

                //#region EDGE CASE - USE exception handler

                console.log("23423432");

                //#endregion

                //#endregion
            }

            //#endregion

            //#region 3. OUTPUT

            //#region HANDLE execution response

            if (storedOutputResponseData) {
                storedOutputResponseData.then(storedOutResponseCallback =>
                {
                    //#region EDGE CASE - USE callback handler

                    if (storedProcessRequestCallBack) {
                        storedProcessRequestCallBack(storedOutputResponseData);
                    }
                    //#endregion

                    //#region IDEAL CASE - USE html responder
                    storedOutResponseCallback?.outputs[1].baseDIObservations.map(storedOutputResponseObservation => {
                        if (Object.keys(storedOutputResponseObservation).length > 0 && Object.keys(storedOutputResponseObservation)[0].toUpperCase().includes("HTML")) {
                            if (storedOutputResponseControlID != "") {
                                document.getElementById(storedOutputResponseControlID).innerHTML = unescape(storedOutputResponseObservation[Object.keys(storedOutputResponseObservation)[0]].baseDIObservations[0].observation.metadata[3].item.presentation[0].htmlResult)

                                //#region EDGE CASE - USE developer logger

                                if (storedProcessRequestDeveloperMode) {
                                    this._storedProcessRequestTracker["storedProcessRequestStepNumber"] = this._storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "SUCCESSFULLY rendered webpage");
                                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", this._storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Logging"); //Values = Logging or Mistake
                                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALEndOfProcess", true);

                                    Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                                }

                                //#endregion
                            }                            
                        }
                    });

                    //#endregion
                })
            }

            //#endregion

            //#endregion
        }

        //#endregion
    }
}
//#endregion


//SETUP

//#region Client
export { Action_12_2_1_0 as ActionList }
//#endregion

//#region Server

//COPY local files & start server
const ExecuteControlRequest = () =>
{
    //#region 1. INPUTS

    //#region DEFINE control variables

    let storedControlRequestStartServer = new BaseDI.Professional.Startup(this);

    //#endregion

    //#region DEFINE input variables

    let storedInputs1: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;
    let storedInputs2: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

    //#endregion

    //#region DEFINE process variables


    //#endregion

    //#region DEFINE output variables

    let storedOutputResponseData: Promise<any>;

    //#endregion

    ///////////////////////////////////////////////////////////

    //#region MEMORIZE control variables

    //#region MEMORIZE control client server


    //#endregion

    //#endregion

    //#region MEMORIZE input variables

    //#region MEMORIZE input request homepage render

    storedInputs2 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

    //1. CONTROLLERS
    storedInputs2.Parameters.setValue("parameterControlRequestClientOrServer", this);

    //2. INPUTS
    storedInputs2.Parameters.setValue("parameterInputRequestActionName", Action_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.Action_12_2_1_0._12_3_WEB_DEVELOPMENT_Server_Copy_Static_Files_1_0);
    storedInputs2.Parameters.setValue("parameterInputRequestName", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0");
    storedInputs2.Parameters.setValue("parameterInputRequestNameDataCacheKey", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0-P1_0");

    //3. PROCESS
    storedInputs2.Parameters.setValue("parameterProcessRequestCallBack", (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) => {
        //DO SOMETHING
    });

    //4. OUTPUTS
    storedInputs2.Parameters.setValue("parameterOutputResponseControlID", "");

    //#endregion

    //#region MEMORIZE input request file copy

    storedInputs1 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

    //1. CONTROLLERS
    storedInputs1.Parameters.setValue("parameterControlRequestClientOrServer", this);

    //2. INPUTS
    storedInputs1.Parameters.setValue("parameterInputRequestActionName", Action_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.Action_12_2_1_0._12_3_WEB_DEVELOPMENT_Server_Copy_Static_Files_1_0);
    storedInputs1.Parameters.setValue("parameterInputRequestName", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0");
    storedInputs1.Parameters.setValue("parameterInputRequestNameDataCacheKey", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0-P1_0");

    //3. PROCESS
    storedInputs1.Parameters.setValue("parameterProcessRequestCallBack", (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) => {
        storedControlRequestStartServer.Action(storedInputs2);
    });

    //4. OUTPUTS
    storedInputs1.Parameters.setValue("parameterOutputResponseControlID", "");

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

    if (process.env.APP_ENV != undefined && process.env.APP_ENV != null && process.env.APP_ENV.toUpperCase() == "SERVER") {
        //#region IDEAL CASE - USE baseDI pipeline

        storedControlRequestStartServer.Action(storedInputs1);

        //#endregion
    }

    //#endregion

    //#endregion

    //#region 3. OUTPUT


    //#endregion
}

ExecuteControlRequest();

//#endregion





