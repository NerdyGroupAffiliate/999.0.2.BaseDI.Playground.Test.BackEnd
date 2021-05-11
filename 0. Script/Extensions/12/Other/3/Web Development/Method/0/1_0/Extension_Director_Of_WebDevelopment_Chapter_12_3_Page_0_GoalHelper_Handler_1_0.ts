//#region Imports

//#region 3rd Party

//#endregion

//#region BaseDI

import { release } from "process";
import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";


import * as Extension_Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0 from "../../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/3/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0";
import * as Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0 from "../../../../../../../../../0. Script/Extensions/11/Automate Manual Task/1/Risk Management/Method/0/1_0/Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0";
import * as Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0 from "../../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/0/1_0/Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0";

import * as SingleParmPoco_12_2_1_0 from "../../../../../../../../../0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

//#endregion

//#endregion

export namespace BaseDI.Professional.Web_Development.Extensions_0 {
    export class Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0 {
        constructor()
        {
            //#region 1. INPUTS

            //#endregion

            //#region 2. PROCESS

            //#endregion

            //#region 3. OUTPUT

            //#endregion
        }

        //#region HTML MANAGEMENT

        private static async Step_0_0_Framework_Store_HtmlAttributesToArray_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) {
            //#region 1. INPUTS

            //#region VALIDATE input parameters

            const ValidateInputs = async (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) => {
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
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONVERTING json to html attributes");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_X_X_Framework_Store_CacheDataToPersistentStorage_1_0.ValidateInputs()");

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

                    if (!parameterInputs.Parameters.containsKey("parameterHtmlAttributes")) {
                        storedOutputResponseMessage += "***parameterHtmlAttributes*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestMasterStorer")) {
                        storedOutputResponseMessage += "***parameterProcessRequestMasterStorer*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestDataStorylineDetails")) {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails*** cannot be blank or empty.\n"
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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            //#endregion

            //#region DEFINE data response

            let storedOutputResponseData: any = null;

            //#endregion

            //#region DEFINE parameter inputs

            let storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //#endregion

            //#region MEMORIZE centralized processes

            let storedProcessRequestCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object> = parameterInputs.Parameters.getValue("parameterProcessRequestMasterStorer");
            //this._storedProcessRequestCentralizedSensor = parameterProcessRequestCentralizedSensor;
            //storedProcessRequestCentralizedStorer = parameterProcessRequestCentralizedStorer;
            //#endregion

            //#region MEMORIZE control client server

            let storedProcessRequestTracker: Object = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE app settings

            let storedProcessRequestSettings: any = storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE ? storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE : false;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONVERTING json to html attributes");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_0_0_Framework_Store_HtmlAttributesToArray_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters.getValue("parameterOPTIONALIgnoreDeveloperConsoleLog"));

            //#endregion

            //#region MEMORIZE html inputs

            let storedHtmlAttributes: any = parameterInputs.Parameters.getValue("parameterHtmlAttributes");

            //#endregion

            //#region MEMORIZE storyline details

            let storedProcessRequestDataStorylineDetails: any = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE json to html conversion

            //#region IDEAL CASE - USE json metadata

            const ExecuteConversionRequest = async (parameterHtmlAttributes: any, parameterHtmlAttributesOutput: Array<any>): Promise<any> => {
                try {
                    for (var parameterHtmlAttribute in parameterHtmlAttributes) {
                        parameterHtmlAttributesOutput.push(`${Object.keys(storedHtmlAttributes[parameterHtmlAttribute])[0]}="${Object.values(storedHtmlAttributes[parameterHtmlAttribute])[0]}"`)
                    }

                    return parameterHtmlAttributesOutput;
                }
                catch (storedProcessRequestMistake) {
                    //#region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode) {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED converting json to html attributes");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_0_0_Framework_Store_HtmlAttributesToArray_1_0.ExecuteConversionRequest");

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    //#endregion

                    //#region EDGE CASE - USE exception handler

                    throw new Error("CONVERSION request failed " + storedProcessRequestMistake.toString());

                    //#endregion
                }
            }

            storedOutputResponseData = await ExecuteConversionRequest(storedHtmlAttributes, storedOutputResponseData);

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN converted data

            //#region IDEAL CASE - USE html string

            return storedOutputResponseData.join(" ");

            //#endregion

            //#endregion

            //#endregion                   
        }

        public static async Step_0_0_Framework_Convert_HtmlToJSON_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) {
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
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);

                //2. PROCESS
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "VALIDATING request inputs");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
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
            await ValidateInputs(parameterInputs);

            //#endregion

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables

            let storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            let storedInputRequestHtmlContainerJSON: any = "";
            let storedInputRequestHtmlRowsJSON: any = "";
            let storedInputRequestHtmlColumnsJSON: any = "";
            let storedInputRequestHtmlContentJSON: any = "";

            let storedInputRequestHtmlStylesFiltered: any = "";
            let storedInputRequestHtmlStylesJSON: any = "";

            //#endregion

            //#region DEFINE process variables

       
            //#endregion

            //#region DEFINE output variables

            let storedOutputResponseData: any;

            let storedOutputResponseHtmlResultInlineStylesString: string = "";
            let storedOutputResponseHtmlResultString: string = "";

            let storedOutputResponseObservationItem: any;
            
            //#endregion

            ///////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input action name

            let storedInputRequestActionName: any = parameterInputs.Parameters.getValue("parameterInputRequestActionName");

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

            let storedProcessRequestDeveloperMode: boolean = storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (parameterInputs.Parameters.getValue("parameterProcessRequestExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") ? parameterInputs.Parameters.getValue("parameterProcessRequestExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") : null);

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED

            //0. CONTROLLERS
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);

            //1. INPUTS

            //2. PROCESS
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONVERTING json to html");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_0_0_Framework_Convert_HtmlToJSON_1_0");

            //3. OUTPUTS  

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALMiddleOfProcess", true);

            //#endregion

            //#region MEMORIZE process storyline details

            let storedProcessRequestDataStorylineDetails: any = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
     
            //#endregion

            //#region MEMORIZE process centralized handlers

            let storedProcessRequestCentralizedDisturber = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedDisturber");
            let storedProcessRequestCentralizedSensor = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedSensor");
            let storedProcessRequestCentralizedStorer = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedStorer");

            //#endregion 

            //#region MEMORIZE process storage details

            let storedProcessRequestStorageCounter: number = 0;

            let storedProcessRequestStorageDictionary: Object = {};
            let storedProcessRequestStorageKey: string = "StorageKey_" + "Director_Of_WebDevelopment_Chapter_12_3_Page_1_OutputHomeScreen_Handler_1_0" + "-" + "Read-BaseDI_PresentationHTML_Content";

            let storedProcessRequestStorageUpdateMode: boolean = false;

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output observation details

            storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

            let storedOutputResponseObservationPresentationTemplateItem: string = "{ 'htmlResult': '{htmlResult}' }";
            let storedOutputResponseObservationBusinessTemplateItem: string = "{}";
            let storedOutputResponseObservationServiceTemplateItem: string = "{}";
            let storedOutputResponseObservationSecurityTemplateItem: string = "{}";
            let storedOutputResponseObservationDataTemplateItem: string = "{}";

            let storedOutputResponseObservationDataTemplateBuilder = "";

            storedInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "RENDER web page");
            storedInputs.Parameters.setValue("parameterInputRequestActionName", storedInputRequestActionName);
            storedInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestSettings);
            storedInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedInputs.Parameters.setValue("parameterOutputResponseObservationFileName", "Page_1_5_Process_StorySetting_12_3_1_0.cs");
            storedInputs.Parameters.setValue("parameterOutputResponseObservationMethodName", "Action");
            storedInputs.Parameters.setValue("parameterOutputResponseObservationPresentationTemplate", storedOutputResponseObservationPresentationTemplateItem);
            storedInputs.Parameters.setValue("parameterOutputResponseObservationBusinessTemplate", storedOutputResponseObservationBusinessTemplateItem);
            storedInputs.Parameters.setValue("parameterOutputResponseObservationServiceTemplate", storedOutputResponseObservationServiceTemplateItem);
            storedInputs.Parameters.setValue("parameterOutputResponseObservationSecurityTemplate", storedOutputResponseObservationSecurityTemplateItem);
            storedInputs.Parameters.setValue("parameterOutputResponseObservationDataTemplate", storedOutputResponseObservationDataTemplateItem);

            let storedObservationItem: string = await Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.BaseDI.Professional.Programming.Extensions_0.Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.Step_X_X_Framework_Output_JsonObservationNode_1_0(storedInputs);

            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE json to html conversion

            try {
                //#region IDEAL CASE - USE baseDI converter

                //#region 1. CONVERT html container

                try {
                    const ExecuteConversionRequest = async (): Promise<string> => {
                        storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestSettings);
                        storedInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilter", storedProcessRequestDataStorylineDetails);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilterKey", "searchkey");
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilterValue", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLContainer");

                        storedInputs.Parameters.setValue("parameterOutputResponseAsArray", false);

                        storedInputRequestHtmlContainerJSON = await Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.BaseDI.Professional.Programming.Extensions_0.Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(storedInputs);

                        storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.setValue("parameterInputRequestHtmlContainerJSON", storedInputRequestHtmlContainerJSON);

                        storedInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                        storedInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestSettings);
                        storedInputs.Parameters.setValue("parameterProcessRequestMasterStorer", storedProcessRequestCentralizedStorer);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);

                        storedOutputResponseHtmlResultString = await this.Step_1_0_Framework_Convert_HtmlContainerJsonToHtml_1_0(storedInputs);

                        return storedOutputResponseHtmlResultString;
                    };

                    storedOutputResponseHtmlResultString = await ExecuteConversionRequest();
                }
                catch (storedProcessRequestMistake) {
                    throw new Error("converting html container");
                }
                //#endregion

                //#region 2. CONVERT html rows

                try {
                    const ExecuteConversionRequest = async (): Promise<string> => {
                        storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestSettings);
                        storedInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilter", storedProcessRequestDataStorylineDetails);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilterKey", "searchkey");
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilterValue", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLRows");

                        storedInputs.Parameters.setValue("parameterOutputResponseAsArray", false);

                        storedInputRequestHtmlRowsJSON = await Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.BaseDI.Professional.Programming.Extensions_0.Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(storedInputs);

                        storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.setValue("parameterInputRequestHtmlRowsJSON", storedInputRequestHtmlRowsJSON);
                        
                        storedInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                        storedInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestSettings);
                        storedInputs.Parameters.setValue("parameterProcessRequestMasterStorer", storedProcessRequestCentralizedStorer);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);

                        storedInputs.Parameters.setValue("parameterOutputResponseHtmlContainerString", storedOutputResponseHtmlResultString);

                        storedOutputResponseHtmlResultString = await this.Step_2_0_Framework_Convert_HtmlRowsJsonToHtml_1_0(storedInputs);

                        return storedOutputResponseHtmlResultString;
                    };

                    storedOutputResponseHtmlResultString = await ExecuteConversionRequest();
                }
                catch (mistake) {
                    throw new Error("converting html rows");
                }

                //#endregion

                //#region 3. CONVERT html columns

                try {
                    const ExecuteConversionRequest = async (): Promise<string> => {
                        storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestSettings);
                        storedInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilter", storedProcessRequestDataStorylineDetails);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilterKey", "searchkey");
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilterValue", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLColumns");

                        storedInputs.Parameters.setValue("parameterOutputResponseAsArray", false);

                        storedInputRequestHtmlColumnsJSON = Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.BaseDI.Professional.Programming.Extensions_0.Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(storedInputs);

                        storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.setValue("parameterInputRequestHtmlColumnsJSON", storedInputRequestHtmlColumnsJSON);
                        
                        storedInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                        storedInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestSettings);
                        storedInputs.Parameters.setValue("parameterProcessRequestMasterStorer", storedProcessRequestCentralizedStorer);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);

                        storedInputs.Parameters.setValue("parameterOutputResponseHtmlRowString", storedOutputResponseHtmlResultString);

                        storedOutputResponseHtmlResultString = await this.Step_3_0_Framework_Convert_HtmlColumnsJsonToHtml_1_0(storedInputs);

                        return storedOutputResponseHtmlResultString;
                    };

                    storedOutputResponseHtmlResultString = await ExecuteConversionRequest();
                }
                catch (mistake) {
                    throw new Error("converting html rows");
                }

                //#endregion

                //#region 4. CONVERT html content

                try {
                    const ExecuteConversionRequest = async (): Promise<string> => {
                        storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestSettings);
                        storedInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilter", storedProcessRequestDataStorylineDetails);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilterKey", "searchkey");
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilterValue", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLContent");

                        storedInputs.Parameters.setValue("parameterOutputResponseAsArray", false);

                        storedInputRequestHtmlContentJSON = Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.BaseDI.Professional.Programming.Extensions_0.Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(storedInputs);

                        storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.setValue("parameterInputRequestHtmlContentJSON", storedInputRequestHtmlContentJSON);

                        storedInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                        storedInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestSettings);
                        storedInputs.Parameters.setValue("parameterProcessRequestMasterStorer", storedProcessRequestCentralizedStorer);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);

                        storedInputs.Parameters.setValue("parameterOutputResponseHtmlColumnString", storedOutputResponseHtmlResultString);

                        storedOutputResponseHtmlResultString = await this.Step_4_0_Framework_Convert_HtmlContentJsonToHtml_1_0(storedInputs);

                        return storedOutputResponseHtmlResultString;
                    };

                    storedOutputResponseHtmlResultString = await ExecuteConversionRequest();
                }
                catch (storedProcessRequestMistake) {
                    throw new Error("converting html content");
                }

                //#endregion

                //#region 5. CONVERT html inline styles

                try {
                    const ExecuteConversionRequest = async (): Promise<string> => {
                        storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestSettings);
                        storedInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilter", storedProcessRequestDataStorylineDetails);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilterKey", "searchkey");
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilterValue", "HTMLContentStylingDetails_SetImplementer_ProductCreation_WebDevelopment_CSS");

                        storedInputs.Parameters.setValue("parameterOutputResponseAsArray", false);

                        storedInputRequestHtmlStylesFiltered = Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.BaseDI.Professional.Programming.Extensions_0.Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_2_0(storedInputs);

                        storedInputRequestHtmlStylesJSON = storedInputRequestHtmlStylesFiltered.Count > 0 ? storedInputRequestHtmlStylesFiltered[0].Parent.Parent : null;

                        storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.setValue("parameterInputRequestHtmlStylesJSON", storedInputRequestHtmlStylesJSON);

                        storedInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                        storedInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestSettings);
                        storedInputs.Parameters.setValue("parameterProcessRequestMasterStorer", storedProcessRequestCentralizedStorer);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);

                        return await this.Step_5_0_Framework_Convert_HtmlCssJSONToInlineStyles_1_0(storedInputs);
                    };

                    storedOutputResponseHtmlResultInlineStylesString = await ExecuteConversionRequest();
                }
                catch (storedProcessRequestMistake) {
                    throw new Error("converting html inline styles");
                }

                //#endregion

                //#region 6. CONVERT html inline scripts

                //TODO
                try {
                    const ExecuteConversionRequest = async () => {

                    }
                }
                catch (storedProcessRequestMistake) {
                    throw new Error("converting html inline scripts");
                }

                //#endregion

                //#region 7. CONVERT html inline metadata

                //TODO
                try {
                    const ExecuteConversionRequest = async () => {

                    }
                }
                catch (storedProcessRequestMistake) {
                    throw new Error("converting html inline metadata");
                }

                //#endregion

                //#region 8. OUTPUT html string

                try {
                    const ExecuteOutputResponse = async (): Promise<string> => {
                        storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.setValue("parameterInputRequestHtmlMetaData", "");
                        storedInputs.Parameters.setValue("parameterInputRequestHtmlTitle", "");
                        storedInputs.Parameters.setValue("parameterInputRequestHtmlScripts", "");
                        storedInputs.Parameters.setValue("parameterInputRequestHtmlStyles", storedOutputResponseHtmlResultInlineStylesString);
                        storedInputs.Parameters.setValue("parameterInputRequestHtmlAdditionalHeadData", "");
                        storedInputs.Parameters.setValue("parameterInputRequestHtmlBody", storedOutputResponseHtmlResultString);

                        storedInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                        storedInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestSettings);
                        storedInputs.Parameters.setValue("parameterProcessRequestMasterStorer", storedProcessRequestCentralizedStorer);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);

                        return await this.Step_8_0_Framework_Convert_HtmlStructureToString_1_0(storedInputs);
                    };

                    storedOutputResponseHtmlResultString = await ExecuteOutputResponse();
                }
                catch (storedProcessRequestMistake) {
                    throw new Error("converting html content");
                }

                //#endregion

                //#region 9. STORE html string

                try {
                    const ExecuteOutputResponse = async () => {
                        storedOutputResponseObservationItem = storedOutputResponseObservationItem.replace("'", "\"");
                        storedOutputResponseObservationItem = storedOutputResponseObservationItem.replace("{htmlResult}", escape(storedOutputResponseHtmlResultString));

                        storedProcessRequestStorageDictionary[storedProcessRequestStorageKey] = JSON.parse(storedOutputResponseObservationItem.toString());

                        //#region USE existing output observation item

                        storedProcessRequestDataStorylineDetails.outputs[1].baseDIObservations.map(storedOutputResponseObservation => {
                            if (Object.keys(storedOutputResponseObservation).length > 0 && Object.keys(storedOutputResponseObservation)[0].toUpperCase() == storedProcessRequestStorageKey.toUpperCase()) {
                                storedProcessRequestDataStorylineDetails.outputs[1].baseDIObservations[storedProcessRequestStorageCounter][storedProcessRequestStorageKey] = JSON.parse(storedOutputResponseHtmlResultString.toString());

                                storedOutputResponseData = storedProcessRequestDataStorylineDetails;

                                storedProcessRequestStorageUpdateMode = true;

                                return;
                            }

                            storedProcessRequestStorageCounter += 1;
                        });

                        //#endregion

                        //#region USE new output observation item
                        if (!storedProcessRequestStorageUpdateMode) {
                            storedProcessRequestDataStorylineDetails.outputs[1].baseDIObservations.push(storedProcessRequestStorageDictionary);
                        }
                        //#endregion

                        return storedProcessRequestDataStorylineDetails;
                    };

                    storedOutputResponseData = await ExecuteOutputResponse();
                }
                catch (storedProcessRequestMistake) {
                    throw new Error("storing html string output observation");
                }

                //#endregion

                //#endregion
            }
            catch (storedProcessRequestMistake) {
                //#region EDGE CASE - USE developer logger

                if (storedProcessRequestDeveloperMode) {
                    storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                    //0. CONTROLLERS

                    //1. INPUTS

                    //2. PROCESS
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED converting json to html");                  
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Action");
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMistake", storedProcessRequestMistake);

                    //3. OUTPUTS
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                    await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                }

                //#endregion

                //#region EDGE CASE - USE exception handler

                throw new Error("CONVERSION request failed " + storedProcessRequestMistake.message);

                //#endregion
            }

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            return storedOutputResponseData;

            //#endregion

            //#endregion

            //#endregion
        }

        public static async Step_1_0_Framework_Convert_HtmlContainerJsonToHtml_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<string>
        {
            //#region 1. INPUTS

            //#region VALIDATE input parameters

            const ValidateInputs = async (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) => {
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
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONVERTING json to html container");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_1_0_Framework_Convert_HtmlContainerJsonToHtml_1_0.ValidateInputs()");

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

                    if (!parameterInputs.Parameters.containsKey("parameterInputRequestHtmlContainerJSON")) {
                        storedOutputResponseMessage += "***parameterInputRequestHtmlContainerJSON*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestMasterStorer")) {
                        storedOutputResponseMessage += "***parameterProcessRequestMasterStorer*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestDataStorylineDetails")) {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails*** cannot be blank or empty.\n"
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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            //#endregion

            //#region DEFINE data response

            let storedOutputResponseData: any = null;

            //#endregion

            //#region DEFINE parameter inputs

            let storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //#endregion

            //#region MEMORIZE centralized processes

            let storedProcessRequestCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object> = parameterInputs.Parameters.getValue("parameterProcessRequestMasterStorer");
            //this._storedProcessRequestCentralizedSensor = parameterProcessRequestCentralizedSensor;
            //storedProcessRequestCentralizedStorer = parameterProcessRequestCentralizedStorer;
            //#endregion

            //#region MEMORIZE control client server

            let storedProcessRequestTracker: Object = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE app settings

            let storedProcessRequestSettings: any = storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE ? storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE : false;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONVERTING json to html container");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_1_0_Framework_Convert_HtmlContainerJsonToHtml_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters.getValue("parameterOPTIONALIgnoreDeveloperConsoleLog"));

            //#endregion

            //#region MEMORIZE html inputs

            let storedInputRequestHtmlContainerJSON: any = parameterInputs.Parameters.getValue("parameterInputRequestHtmlContainerJSON");

            //#endregion

            //#region MEMORIZE storyline details

            let storedProcessRequestDataStorylineDetails: any = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE json to html conversion

            //#region IDEAL CASE - USE json metadata

            const ExecuteConversionRequest = async (parameterInputRequestHtmlContainerJSON: any): Promise<any> => {
                try {
                    return `<${parameterInputRequestHtmlContainerJSON.value.HTMLContentItems[0].Tag} ${this.Step_0_0_Framework_Store_HtmlAttributesToArray_1_0(parameterInputRequestHtmlContainerJSON.value.HTMLContentItems[0].Attributes)}>{HTMLRows_Replace}</${parameterInputRequestHtmlContainerJSON.value.HTMLContentItems[0].Tag}>`;
                }
                catch (storedProcessRequestMistake) {
                    //#region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode) {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED converting to html container");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_1_0_Framework_Convert_HtmlContainerJsonToHtml_1_0.ExecuteConversionRequest");

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    //#endregion

                    //#region EDGE CASE - USE exception handler

                    throw new Error("STORAGE request failed " + storedProcessRequestMistake.toString());

                    //#endregion
                }
            }

            storedOutputResponseData = await ExecuteConversionRequest(storedInputRequestHtmlContainerJSON);

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN converted data

            //#region IDEAL CASE - USE html string

            return storedOutputResponseData;

            //#endregion

            //#endregion

            //#endregion                              
        }

        public static async Step_2_0_Framework_Convert_HtmlRowsJsonToHtml_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<string> {
            //#region 1. INPUTS

            //#region VALIDATE input parameters

            const ValidateInputs = async (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) => {
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
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONVERTING json to html row");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_1_0_Framework_Convert_HtmlContainerJsonToHtml_1_0.ValidateInputs()");

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

                    if (!parameterInputs.Parameters.containsKey("parameterOutputResponseHtmlContainerString")) {
                        storedOutputResponseMessage += "***parameterOutputResponseHtmlContainerString*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterInputRequestHtmlRowsJSON")) {
                        storedOutputResponseMessage += "***parameterInputRequestHtmlRowsJSON*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestMasterStorer")) {
                        storedOutputResponseMessage += "***parameterProcessRequestMasterStorer*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestDataStorylineDetails")) {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails*** cannot be blank or empty.\n"
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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            //#endregion

            //#region DEFINE data response

            let storedOutputResponseData: any = null;
            let storedDataResponseList: Array<any> = [];

            //#endregion

            //#region DEFINE parameter inputs

            let storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //#endregion

            //#region MEMORIZE centralized processes

            let storedProcessRequestCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object> = parameterInputs.Parameters.getValue("parameterProcessRequestMasterStorer");
            //this._storedProcessRequestCentralizedSensor = parameterProcessRequestCentralizedSensor;
            //storedProcessRequestCentralizedStorer = parameterProcessRequestCentralizedStorer;
            //#endregion

            //#region MEMORIZE control client server

            let storedProcessRequestTracker: Object = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE app settings

            let storedProcessRequestSettings: any = storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE ? storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE : false;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONVERTING json to html row");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_1_0_Framework_Convert_HtmlContainerJsonToHtml_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters.getValue("parameterOPTIONALIgnoreDeveloperConsoleLog"));

            //#endregion

            //#region MEMORIZE html inputs

            let storedHtmlContainerString: any = parameterInputs.Parameters.getValue("parameterOutputResponseHtmlContainerString");
            let storedInputRequestHtmlRowsJSON: any = parameterInputs.Parameters.getValue("parameterInputRequestHtmlRowsJSON");

            //#endregion

            //#region MEMORIZE storyline details

            let storedProcessRequestDataStorylineDetails: any = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE json to html conversion

            //#region IDEAL CASE - USE json metadata

            const ExecuteConversionRequest = async (parameterOutputResponseHtmlContainerString: string, parameterInputRequestHtmlRowsJSON: any, parameterFilterDataResponseList: Array<any>): Promise<string> => {
                try {
                    parameterInputRequestHtmlRowsJSON.value.HTMLContentItems.forEach(storedHtmlRow => {
                        parameterFilterDataResponseList.push(`<${storedHtmlRow.Tag} ${this.Step_0_0_Framework_Store_HtmlAttributesToArray_1_0(storedHtmlRow.Attributes)}>{${storedHtmlRow.Attributes[0].id}_Replace}</${storedHtmlRow.Tag}>`)
                    });

                    return parameterOutputResponseHtmlContainerString.replace("{HTMLRows_Replace}", parameterFilterDataResponseList.join("\n"))
                }
                catch (storedProcessRequestMistake) {
                    //#region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode) {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED converting json to html row");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_2_0_Framework_Convert_HtmlRowsJsonToHtml_1_0.ExecuteConversionRequest");

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    //#endregion

                    //#region EDGE CASE - USE exception handler

                    throw new Error("CONVERSION request failed " + storedProcessRequestMistake.toString());

                    //#endregion
                }
            }

            storedOutputResponseData = await ExecuteConversionRequest(storedHtmlContainerString, storedInputRequestHtmlRowsJSON, storedDataResponseList);

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN converted data

            //#region IDEAL CASE - USE html string

            return storedOutputResponseData;

            //#endregion

            //#endregion

            //#endregion                              
        }

        public static async Step_3_0_Framework_Convert_HtmlColumnsJsonToHtml_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<string> {
            //#region 1. INPUTS

            //#region VALIDATE input parameters

            const ValidateInputs = async (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) => {
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
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONVERTING json to html column");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_1_0_Framework_Convert_HtmlContainerJsonToHtml_1_0.ValidateInputs()");

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

                    if (!parameterInputs.Parameters.containsKey("parameterOutputResponseHtmlRowString")) {
                        storedOutputResponseMessage += "***parameterOutputResponseHtmlRowString*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterInputRequestHtmlColumnsJSON")) {
                        storedOutputResponseMessage += "***parameterInputRequestHtmlColumnsJSON*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestMasterStorer")) {
                        storedOutputResponseMessage += "***parameterProcessRequestMasterStorer*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestDataStorylineDetails")) {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails*** cannot be blank or empty.\n"
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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            //#endregion

            //#region DEFINE data response

            let storedColumnItem: string = "";

            let storedOutputResponseData: any = null;

            //#endregion

            //#region DEFINE parameter inputs

            let storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //#endregion

            //#region MEMORIZE centralized processes

            let storedProcessRequestCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object> = parameterInputs.Parameters.getValue("parameterProcessRequestMasterStorer");
            //this._storedProcessRequestCentralizedSensor = parameterProcessRequestCentralizedSensor;
            //storedProcessRequestCentralizedStorer = parameterProcessRequestCentralizedStorer;
            //#endregion

            //#region MEMORIZE control client server

            let storedProcessRequestTracker: Object = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE app settings

            let storedProcessRequestSettings: any = storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE ? storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE : false;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONVERTING json to html column");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_3_0_Framework_Convert_HtmlColumnsJsonToHtml_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters.getValue("parameterOPTIONALIgnoreDeveloperConsoleLog"));

            //#endregion

            //#region MEMORIZE html inputs

            let storedHtmlRowString: any = parameterInputs.Parameters.getValue("parameterOutputResponseHtmlRowString");
            let storedInputRequestHtmlColumnsJSON: any = parameterInputs.Parameters.getValue("parameterInputRequestHtmlColumnsJSON");

            //#endregion

            //#region MEMORIZE storyline details

            let storedProcessRequestDataStorylineDetails: any = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE json to html conversion

            //#region IDEAL CASE - USE json metadata

            const ExecuteConversionRequest = async (parameterOutputResponseHtmlRowString: string, parameterInputRequestHtmlColumnsJSON: any, parameterColumnItem: string): Promise<string> => {
                try {
                    parameterInputRequestHtmlColumnsJSON.value.HTMLContentItems.forEach(storedHtmlColumn => {
                        parameterColumnItem = `<${storedHtmlColumn.Tag} ${this.Step_0_0_Framework_Store_HtmlAttributesToArray_1_0(storedHtmlColumn.Attributes)}>{${storedHtmlColumn.Attributes[0].id}_Replace}</${storedHtmlColumn.Tag}>\n`;
                        parameterOutputResponseHtmlRowString = parameterOutputResponseHtmlRowString.replace(`{${storedHtmlColumn.ParentHTMLContentItemAttributeID}_Replace}`, parameterColumnItem);
                    });

                    return parameterOutputResponseHtmlRowString;
                }
                catch (storedProcessRequestMistake) {
                    //#region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode) {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED converting json to html column");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_3_0_Framework_Convert_HtmlColumnsJsonToHtml_1_0.ExecuteConversionRequest");

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    //#endregion

                    //#region EDGE CASE - USE exception handler

                    throw new Error("CONVERSION request failed " + storedProcessRequestMistake.toString());

                    //#endregion
                }
            }

            storedOutputResponseData = await ExecuteConversionRequest(storedHtmlRowString, storedInputRequestHtmlColumnsJSON, storedColumnItem);

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN converted data

            //#region IDEAL CASE - USE html string

            return storedOutputResponseData;

            //#endregion

            //#endregion

            //#endregion                                      
        }

        public static async Step_4_0_Framework_Convert_HtmlContentJsonToHtml_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<string> {
            //#region 1. INPUTS

            //#region VALIDATE input parameters

            const ValidateInputs = async (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) => {
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
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_4_0_Framework_Convert_HtmlContentJsonToHtml_1_0.ValidateInputs()");

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

                    if (!parameterInputs.Parameters.containsKey("parameterOutputResponseHtmlColumnString")) {
                        storedOutputResponseMessage += "***parameterOutputResponseHtmlColumnString*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterInputRequestHtmlContentJSON")) {
                        storedOutputResponseMessage += "***parameterInputRequestHtmlContentJSON*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestMasterStorer")) {
                        storedOutputResponseMessage += "***parameterProcessRequestMasterStorer*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestDataStorylineDetails")) {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails*** cannot be blank or empty.\n"
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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            //#endregion

            //#region DEFINE data response

            let storedContent: string = "";

            let storedOutputResponseData: any = null;
            let storedDataResponseIdsAndContent: Array<any> = [];

            //#endregion

            //#region DEFINE parameter inputs

            let storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //#endregion

            //#region MEMORIZE centralized processes

            let storedProcessRequestCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object> = parameterInputs.Parameters.getValue("parameterProcessRequestMasterStorer");
            //this._storedProcessRequestCentralizedSensor = parameterProcessRequestCentralizedSensor;
            //storedProcessRequestCentralizedStorer = parameterProcessRequestCentralizedStorer;
            //#endregion

            //#region MEMORIZE control client server

            let storedProcessRequestTracker: Object = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE app settings

            let storedProcessRequestSettings: any = storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE ? storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE : false;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "HELPING out other methods");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_4_0_Framework_Convert_HtmlContentJsonToHtml_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters.getValue("parameterOPTIONALIgnoreDeveloperConsoleLog"));

            //#endregion

            //#region MEMORIZE html inputs

            let storedHtmlColumnString: any = parameterInputs.Parameters.getValue("parameterOutputResponseHtmlColumnString");
            let storedInputRequestHtmlContentJSON: any = parameterInputs.Parameters.getValue("parameterInputRequestHtmlContentJSON");

            //#endregion

            //#region MEMORIZE storyline details

            let storedProcessRequestDataStorylineDetails: any = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE json to html conversion

            //#region IDEAL CASE - USE json metadata

            const ExecuteConversionRequest = async (parameterOutputResponseHtmlColumnString: string, parameterInputRequestHtmlContentJSON: any, parameterFilterDataResponseIdsAndContent: Array<any>, parameterContent: any): Promise<string> => {
                try {
                    parameterInputRequestHtmlContentJSON.value.HTMLContentItems.forEach(storedHtmlContent => {
                        if (parameterFilterDataResponseIdsAndContent[storedHtmlContent.ParentHTMLContentItemAttributeID] == undefined) {
                            parameterFilterDataResponseIdsAndContent[storedHtmlContent.ParentHTMLContentItemAttributeID] = new Array();
                            parameterFilterDataResponseIdsAndContent[storedHtmlContent.ParentHTMLContentItemAttributeID].push(`<${storedHtmlContent.Tag} ${this.Step_0_0_Framework_Store_HtmlAttributesToArray_1_0(storedHtmlContent.Attributes)}>${storedHtmlContent.Value}</${storedHtmlContent.Tag}>\n`);
                        }
                        else {
                            parameterFilterDataResponseIdsAndContent[storedHtmlContent.ParentHTMLContentItemAttributeID].push(`<${storedHtmlContent.Tag} ${this.Step_0_0_Framework_Store_HtmlAttributesToArray_1_0(storedHtmlContent.Attributes)}>${storedHtmlContent.Value}</${storedHtmlContent.Tag}>\n`);
                        }
                    });

                    Object.keys(parameterFilterDataResponseIdsAndContent).forEach(storedIdAndContentItem => {
                        parameterContent = parameterFilterDataResponseIdsAndContent[storedIdAndContentItem].join('\n')
                        parameterOutputResponseHtmlColumnString = parameterOutputResponseHtmlColumnString.replace(`{${storedIdAndContentItem}_Replace}`, parameterContent);
                    });

                    if (process.env.APP_ENV == "SERVER") {
                        parameterOutputResponseHtmlColumnString = parameterOutputResponseHtmlColumnString.replace(/...999.0.3.BaseDI.Professional.QuickStart.Templates/g, '/Images');

                    }

                    return parameterOutputResponseHtmlColumnString;
                }
                catch (storedProcessRequestMistake) {
                    //#region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode) {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED converting json to html content");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_4_0_Framework_Convert_HtmlContentJsonToHtml_1_0.ExecuteConversionRequest");

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    //#endregion

                    //#region EDGE CASE - USE exception handler

                    throw new Error("CONVERSION request failed " + storedProcessRequestMistake.toString());

                    //#endregion
                }
            }

            storedOutputResponseData = await ExecuteConversionRequest(storedHtmlColumnString, storedInputRequestHtmlContentJSON, storedDataResponseIdsAndContent, storedContent);

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN converted data

            //#region IDEAL CASE - USE html string

            return storedOutputResponseData;

            //#endregion

            //#endregion

            //#endregion                                                            
        }

        public static async Step_5_0_Framework_Convert_HtmlCssJSONToInlineStyles_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<string> {
            //#region 1. INPUTS

            //#region VALIDATE input parameters

            const ValidateInputs = async (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) => {
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
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONVERTING json to html styles");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_4_0_Framework_Convert_HtmlContentJsonToHtml_1_0.ValidateInputs()");

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

                    if (!parameterInputs.Parameters.containsKey("parameterInputRequestHtmlStylesJSON")) {
                        storedOutputResponseMessage += "***parameterInputRequestHtmlStylesJSON*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }
                    else {
                        if (!parameterInputs.Parameters.getValue("parameterInputRequestHtmlStylesJSON")?.value[0]?._2_2_2_4_1_clientInformationHTMLContentStylingItem?.value?.HTMLContentStylingItemFiles[0]?.StyleFilePathLocal) {
                            storedOutputResponseMessage += "***parameterInputRequestHtmlStylesJSON*** [StyleFilePathLocal] cannot be blank or empty.\n"
                            storedProcessRequestMistakeMade = true;
                        }

                        if (!parameterInputs.Parameters.getValue("parameterInputRequestHtmlStylesJSON")?.value[0]?._2_2_2_4_1_clientInformationHTMLContentStylingItem?.value?.HTMLContentStylingItemFiles[0]?.StyleFiles) {
                            storedOutputResponseMessage += "***parameterInputRequestHtmlStylesJSON*** [StyleFiles] cannot be blank or empty.\n"
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestMasterStorer")) {
                        storedOutputResponseMessage += "***parameterProcessRequestMasterStorer*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestDataStorylineDetails")) {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails*** cannot be blank or empty.\n"
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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            //#endregion

            //#region DEFINE data response

            let storedOutputResponseData: any = null;

            let storedHtmlCssString = "";

            let storedHtmlInlineCSSString: string = "";
            let storedHtmlMediaQueryArray = [];
            let storedHtmlMediaQueryFeatures = [];
            let storedHtmlPropertyArray = [];

            //#endregion

            //#region DEFINE parameter inputs

            let storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //#endregion

            //#region MEMORIZE centralized processes

            let storedProcessRequestCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object> = parameterInputs.Parameters.getValue("parameterProcessRequestMasterStorer");
            //this._storedProcessRequestCentralizedSensor = parameterProcessRequestCentralizedSensor;
            //storedProcessRequestCentralizedStorer = parameterProcessRequestCentralizedStorer;
            //#endregion

            //#region MEMORIZE control client server

            let storedProcessRequestTracker: Object = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE app settings

            let storedProcessRequestSettings: any = storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE ? storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE : false;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONVERTING json to html styles");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_5_0_Framework_Convert_HtmlCssJSONToInlineStyles_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters.getValue("parameterOPTIONALIgnoreDeveloperConsoleLog"));

            //#endregion

            //#region MEMORIZE html inputs

            let storedInputRequestHtmlStylesJSON: any = parameterInputs.Parameters.getValue("parameterInputRequestHtmlStylesJSON");

            let storedHtmlStyleFilePathLocal: string = storedInputRequestHtmlStylesJSON?.value[0]?._2_2_2_4_1_clientInformationHTMLContentStylingItem?.value?.HTMLContentStylingItemFiles[0]?.StyleFilePathLocal;
            let storedHtmlFilesArray: any = storedInputRequestHtmlStylesJSON?.value[0]._2_2_2_4_1_clientInformationHTMLContentStylingItem?.value?.HTMLContentStylingItemFiles[0]?.StyleFiles;

            //#endregion

            //#region MEMORIZE storyline details

            let storedProcessRequestDataStorylineDetails: any = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE json to html conversion

            //#region IDEAL CASE - USE json metadata

            const ExecuteConversionRequest = async (): Promise<string> => {
                try {
                    storedHtmlFilesArray.forEach(storedHtmlFile => {
                        storedHtmlFile.StyleFileUseProperties.forEach(storedStyleFile => {
                            if (storedStyleFile.IsHtmlTag == "true" && storedStyleFile.properties.length > 0) {
                                if (storedStyleFile.IsMediaQuery == "true") {

                                    if (storedStyleFile.MediaQuery.type != "") {
                                        storedHtmlMediaQueryFeatures.push(`only ${storedStyleFile.MediaQuery.type}`)
                                    }
                                    storedStyleFile.MediaQuery.features.forEach(feature => {
                                        Object.keys(feature).forEach((featureA, index) => {
                                            if (Object.keys(feature)[index] == "operator") {
                                                storedHtmlMediaQueryFeatures.push(Object.values(feature)[index])
                                            } else {
                                                storedHtmlMediaQueryFeatures.push(`(${featureA}: ${Object.values(feature)[index]})`)
                                            }
                                        });
                                    });
                                    storedStyleFile.properties.forEach(prop => {
                                        if (prop.propertyName != "") {
                                            let values = [];
                                            if (storedHtmlMediaQueryArray[`@media ${storedHtmlMediaQueryFeatures.join(" ")}`] === undefined) {
                                                storedHtmlMediaQueryArray[`@media ${storedHtmlMediaQueryFeatures.join(" ")}`] = []
                                                prop.properyValues.forEach(value => {
                                                    values.push(`${value};`)
                                                });
                                                storedHtmlMediaQueryArray[`@media ${storedHtmlMediaQueryFeatures.join(" ")}`].push({ propName: `${prop.propertyName}`, values: values })
                                            } else {
                                                prop.properyValues.forEach(value => {
                                                    values.push(`${value};`)
                                                });
                                                storedHtmlMediaQueryArray[`@media ${storedHtmlMediaQueryFeatures.join(" ")}`].push({ propName: `${prop.propertyName}`, values: values })
                                            }
                                        }
                                    });

                                } else {
                                    storedStyleFile.properties.forEach(prop => {
                                        if (prop.propertyName != "") {
                                            if (storedHtmlPropertyArray[`${prop.propertyName}`] === undefined) {
                                                storedHtmlPropertyArray[`${prop.propertyName}`] = [];
                                                prop.properyValues.forEach(value => {
                                                    storedHtmlPropertyArray[`${prop.propertyName}`].push(value + ";")
                                                });
                                            } else {
                                                prop.properyValues.forEach(value => {
                                                    storedHtmlPropertyArray[`${prop.propertyName}`].push(value + ";")
                                                });
                                            }
                                        }
                                    });

                                }
                            }
                            else if (storedStyleFile.IsHtmlTag == "false" && storedStyleFile.properties.length > 0) {
                                let values = [];
                                if (storedStyleFile.IsMediaQuery == "true") {

                                    let storedHtmlMediaQueryFeatures = [];

                                    if (storedStyleFile.MediaQuery.type != "") {
                                        storedHtmlMediaQueryFeatures.push(`only ${storedStyleFile.MediaQuery.type}`)
                                    }
                                    storedStyleFile.MediaQuery.features.forEach(feature => {
                                        Object.keys(feature).forEach((featureA, index) => {
                                            if (Object.keys(feature)[index] == "operator") {
                                                storedHtmlMediaQueryFeatures.push(Object.values(feature)[index])
                                            } else {
                                                storedHtmlMediaQueryFeatures.push(`(${featureA}: ${Object.values(feature)[index]})`)
                                            }
                                        });
                                    });

                                    storedStyleFile.properties.forEach(prop => {
                                        if (prop.propertyName != "") {
                                            values.push(`${prop.propertyName} : ${prop.properyValues[0]};`)
                                        }
                                    });

                                    if (storedHtmlMediaQueryArray[`@media ${storedHtmlMediaQueryFeatures.join(" ")}`] === undefined) {
                                        storedHtmlMediaQueryArray[`@media ${storedHtmlMediaQueryFeatures.join(" ")}`] = []
                                        storedHtmlMediaQueryArray[`@media ${storedHtmlMediaQueryFeatures.join(" ")}`].push({ attributeID: storedStyleFile.attributeID, values: values })
                                    } else {
                                        let updatedItem = storedHtmlMediaQueryArray[`@media ${storedHtmlMediaQueryFeatures.join(" ")}`].find((item) => { return item.attributeID === storedStyleFile.attributeID })
                                        if (updatedItem != undefined) {
                                            updatedItem.values.push(...values)
                                        } else {
                                            storedHtmlMediaQueryArray[`@media ${storedHtmlMediaQueryFeatures.join(" ")}`].push({ attributeID: storedStyleFile.attributeID, values: values })
                                        }
                                    }
                                }
                                else {
                                    storedStyleFile.properties.forEach(prop => {
                                        if (prop.propertyName != "") {
                                            values.push(`${prop.propertyName} : ${prop.properyValues[0]};`)
                                        }
                                    });

                                    if (storedHtmlPropertyArray[`${storedStyleFile.attributeID}`] === undefined) {
                                        storedHtmlPropertyArray[`${storedStyleFile.attributeID}`] = [];
                                        storedHtmlPropertyArray[`${storedStyleFile.attributeID}`].push({ attributeID: storedStyleFile.attributeID, values: values })
                                    } else {
                                        // storedHtmlPropertyArray[`${element.attributeID}`].push({ attributeID: element.attributeID, values: values })
                                        storedHtmlPropertyArray[`${storedStyleFile.attributeID}`][0].values.push(...values)
                                    }
                                }
                            }
                            else {
                                console.log("Something wrong in Json file!")
                            }
                        });
                    });

                    Object.keys(storedHtmlPropertyArray).forEach((key, index) => {
                        let obj = Object.values(storedHtmlPropertyArray)[index];
                        if (obj[0].attributeID === undefined) {
                            storedHtmlCssString += `${key} { \n ${obj.join("\n")} \n}\n`;
                        } else {

                            if (obj[0].attributeID.includes("#")) {
                                storedHtmlCssString += `${obj[0].attributeID} { \n ${obj[0].values.join("\n")} \n}\n`;
                            } else {
                                storedHtmlCssString += `#${obj[0].attributeID} { \n ${obj[0].values.join("\n")} \n}\n`;
                            }
                        }
                    });

                    Object.keys(storedHtmlMediaQueryArray).forEach((key, index) => {
                        let obj = Object.values(storedHtmlMediaQueryArray)[index];
                        let innerCss = "";

                        obj.forEach(element => {
                            if (element.attributeID === undefined) {
                                innerCss += `${element.propName} \n { \n ${element.values.join("\n")} \n}\n`;
                            } else {
                                if (element.attributeID.includes("#")) {
                                    innerCss += `${element.attributeID} \n { \n ${element.values.join("\n")} \n}\n`;
                                } else {
                                    innerCss += `#${element.attributeID} \n { \n ${element.values.join("\n")} \n}\n`;
                                }
                            }
                        });
                        storedHtmlCssString += `${key} {\n ${innerCss} \n}`;
                    });

                    storedHtmlInlineCSSString = `<style>${storedHtmlCssString}</style>`;

                    if (process.env.APP_ENV == "SERVER") {
                        storedHtmlInlineCSSString = storedHtmlInlineCSSString.replace(/...999.0.3.BaseDI.Professional.QuickStart.Templates/g, '/Images'); storedHtmlInlineCSSString = storedHtmlInlineCSSString.replace(/...999.0.3.BaseDI.Professional.QuickStart.Templates/g, '/Images');
                    }

                    return storedHtmlInlineCSSString;
                }
                catch (storedProcessRequestMistake) {
                    //#region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode) {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED converting json to html styles");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_5_0_Framework_Convert_HtmlCssJSONToInlineStyles_1_0.ExecuteConversionRequest");

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    //#endregion

                    //#region EDGE CASE - USE exception handler

                    throw new Error("CONVERSION request failed " + storedProcessRequestMistake.toString());

                    //#endregion
                }
            }

            storedOutputResponseData = await ExecuteConversionRequest();

            //#endregion

            //#endregion

            //#endregion          

            //#region 3. OUTPUT

            //#region RETURN converted data

            //#region IDEAL CASE - USE html string

            return storedOutputResponseData;

            //#endregion

            //#endregion

            //#endregion                                                            
        }

        public static async Step_6_0_Framework_Convert_HtmlScriptsJSONToInlineScripts_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<string> {
            //#region 1. INPUTS

            //#region VALIDATE input parameters

            const ValidateInputs = async (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) => {
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
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONVERTING json to html styles");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_6_0_Framework_Convert_HtmlScriptsJSONToInlineScripts_1_0.ValidateInputs()");

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

                    if (!parameterInputs.Parameters.containsKey("parameterInputRequestHtmlScriptsJSON")) {
                        storedOutputResponseMessage += "***parameterInputRequestHtmlStylesJSON*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }
                    else {
                        if (!parameterInputs.Parameters.getValue("parameterInputRequestHtmlScriptsJSON")?.value[0]?._2_2_2_5_1_clientInformationHTMLContentScriptItem?.value?.HTMLContentScriptItemFiles[0]?.ScriptFilePathLocal) {
                            storedOutputResponseMessage += "***parameterInputRequestHtmlStylesJSON*** [ScriptsFilePathLocal] cannot be blank or empty.\n"
                            storedProcessRequestMistakeMade = true;
                        }

                        if (!parameterInputs.Parameters.getValue("parameterInputRequestHtmlScriptsJSON")?.value[0]?._2_2_2_5_1_clientInformationHTMLContentScriptItem?.value?.HTMLContentScriptItemFiles[0]?.ScriptFiles) {
                            storedOutputResponseMessage += "***parameterInputRequestHtmlStylesJSON*** [ScriptsFiles] cannot be blank or empty.\n"
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestMasterStorer")) {
                        storedOutputResponseMessage += "***parameterProcessRequestMasterStorer*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestDataStorylineDetails")) {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails*** cannot be blank or empty.\n"
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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            //#endregion

            //#region DEFINE data response

            let storedOutputResponseData: any = null;

            let storedHtmlCssString = "";

            let storedHtmlInlineCSSString: string = "";
            let storedHtmlMediaQueryArray = [];
            let storedHtmlMediaQueryFeatures = [];
            let storedHtmlPropertyArray = [];

            //#endregion

            //#region DEFINE parameter inputs

            let storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //#endregion

            //#region MEMORIZE centralized processes

            let storedProcessRequestCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object> = parameterInputs.Parameters.getValue("parameterProcessRequestMasterStorer");
            //this._storedProcessRequestCentralizedSensor = parameterProcessRequestCentralizedSensor;
            //storedProcessRequestCentralizedStorer = parameterProcessRequestCentralizedStorer;
            //#endregion

            //#region MEMORIZE control client server

            let storedProcessRequestTracker: Object = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE app settings

            let storedProcessRequestSettings: any = storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE ? storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE : false;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONVERTING json to html styles");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_6_0_Framework_Convert_HtmlScriptsJSONToInlineScripts_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters.getValue("parameterOPTIONALIgnoreDeveloperConsoleLog"));

            //#endregion

            //#region MEMORIZE html inputs

            let storedInputRequestHtmlStylesJSON: any = parameterInputs.Parameters.getValue("parameterInputRequestHtmlStylesJSON");

            let storedHtmlStyleFilePathLocal: string = storedInputRequestHtmlStylesJSON?.value[0]?._2_2_2_4_1_clientInformationHTMLContentStylingItem?.value?.HTMLContentStylingItemFiles[0]?.StyleFilePathLocal;
            let storedHtmlFilesArray: any = storedInputRequestHtmlStylesJSON?.value[0]._2_2_2_4_1_clientInformationHTMLContentStylingItem?.value?.HTMLContentStylingItemFiles[0]?.StyleFiles;

            //#endregion

            //#region MEMORIZE storyline details

            let storedProcessRequestDataStorylineDetails: any = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE json to html conversion

            //#region IDEAL CASE - USE json metadata

            const ExecuteConversionRequest = async (): Promise<string> => {
                try {

                    return "";
                }
                catch (storedProcessRequestMistake) {
                    //#region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode) {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED converting json to html styles");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_5_0_Framework_Convert_HtmlCssJSONToInlineStyles_1_0.ExecuteConversionRequest");

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    //#endregion

                    //#region EDGE CASE - USE exception handler

                    throw new Error("CONVERSION request failed " + storedProcessRequestMistake.toString());

                    //#endregion
                }
            }

            storedOutputResponseData = await ExecuteConversionRequest();

            //#endregion

            //#endregion

            //#endregion          

            //#region 3. OUTPUT

            //#region RETURN converted data

            //#region IDEAL CASE - USE html string

            return storedOutputResponseData;

            //#endregion

            //#endregion

            //#endregion                                                            
        }

        public static async Step_7_0_Framework_Convert_HtmlMetaDataJSONToInlineMetaData_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<string> {
            //#region 1. INPUTS

            //#region VALIDATE input parameters

            const ValidateInputs = async (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) => {
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
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONVERTING json to html styles");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_7_0_Framework_Convert_HtmlMetaDataJSONToInlineMetaData_1_0.ValidateInputs()");

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

                    if (!parameterInputs.Parameters.containsKey("parameterInputRequestHtmlMetaDataJSON")) {
                        storedOutputResponseMessage += "***parameterInputRequestHtmlMetaDataJSON*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }
                    else {
                        if (!parameterInputs.Parameters.getValue("parameterInputRequestHtmlMetaDataJSON")?.value[0]?._2_2_2_6_1_clientInformationHTMLContentMetaDataItem?.value?.HTMLContentMetaDataItemFiles[0]?.MetaDataFilePathLocal) {
                            storedOutputResponseMessage += "***parameterInputRequestHtmlMetaDataJSON*** [ScriptsFilePathLocal] cannot be blank or empty.\n"
                            storedProcessRequestMistakeMade = true;
                        }

                        if (!parameterInputs.Parameters.getValue("parameterInputRequestHtmlMetaDataJSON")?.value[0]?._2_2_2_6_1_clientInformationHTMLContentMetaDataItem?.value?.HTMLContentMetaDataItemFiles[0]?.MetaDataFiles) {
                            storedOutputResponseMessage += "***parameterInputRequestHtmlMetaDataJSON*** [ScriptsFiles] cannot be blank or empty.\n"
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestMasterStorer")) {
                        storedOutputResponseMessage += "***parameterProcessRequestMasterStorer*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestDataStorylineDetails")) {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails*** cannot be blank or empty.\n"
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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            //#endregion

            //#region DEFINE data response

            let storedOutputResponseData: any = null;

            let storedHtmlCssString = "";

            let storedHtmlInlineCSSString: string = "";
            let storedHtmlMediaQueryArray = [];
            let storedHtmlMediaQueryFeatures = [];
            let storedHtmlPropertyArray = [];

            //#endregion

            //#region DEFINE parameter inputs

            let storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //#endregion

            //#region MEMORIZE centralized processes

            let storedProcessRequestCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object> = parameterInputs.Parameters.getValue("parameterProcessRequestMasterStorer");
            //this._storedProcessRequestCentralizedSensor = parameterProcessRequestCentralizedSensor;
            //storedProcessRequestCentralizedStorer = parameterProcessRequestCentralizedStorer;
            //#endregion

            //#region MEMORIZE control client server

            let storedProcessRequestTracker: Object = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE app settings

            let storedProcessRequestSettings: any = storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE ? storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE : false;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONVERTING json to html styles");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_7_0_Framework_Convert_HtmlMetaDataJSONToInlineMetaData_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters.getValue("parameterOPTIONALIgnoreDeveloperConsoleLog"));

            //#endregion

            //#region MEMORIZE html inputs

            let storedInputRequestHtmlStylesJSON: any = parameterInputs.Parameters.getValue("parameterInputRequestHtmlStylesJSON");

            let storedHtmlStyleFilePathLocal: string = storedInputRequestHtmlStylesJSON?.value[0]?._2_2_2_4_1_clientInformationHTMLContentStylingItem?.value?.HTMLContentStylingItemFiles[0]?.StyleFilePathLocal;
            let storedHtmlFilesArray: any = storedInputRequestHtmlStylesJSON?.value[0]._2_2_2_4_1_clientInformationHTMLContentStylingItem?.value?.HTMLContentStylingItemFiles[0]?.StyleFiles;

            //#endregion

            //#region MEMORIZE storyline details

            let storedProcessRequestDataStorylineDetails: any = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE json to html conversion

            //#region IDEAL CASE - USE json metadata

            const ExecuteConversionRequest = async (): Promise<string> => {
                try {

                    return "";
                }
                catch (storedProcessRequestMistake) {
                    //#region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode) {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED converting json to html styles");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_5_0_Framework_Convert_HtmlCssJSONToInlineStyles_1_0.ExecuteConversionRequest");

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    //#endregion

                    //#region EDGE CASE - USE exception handler

                    throw new Error("CONVERSION request failed " + storedProcessRequestMistake.toString());

                    //#endregion
                }
            }

            storedOutputResponseData = await ExecuteConversionRequest();

            //#endregion

            //#endregion

            //#endregion          

            //#region 3. OUTPUT

            //#region RETURN converted data

            //#region IDEAL CASE - USE html string

            return storedOutputResponseData;

            //#endregion

            //#endregion

            //#endregion                                                            
        }

        public static async Step_8_0_Framework_Convert_HtmlStructureToString_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<string> {
            //#region 1. INPUTS

            //#region VALIDATE input parameters

            const ValidateInputs = async (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) => {
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
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "STORING html template");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_X_X_Framework_Store_CacheDataToPersistentStorage_1_0.ValidateInputs()");

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

                    if (!parameterInputs.Parameters.containsKey("parameterInputRequestHtmlMetaData")) {
                        storedOutputResponseMessage += "***parameterInputRequestHtmlMetaData*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterInputRequestHtmlTitle")) {
                        storedOutputResponseMessage += "***parameterTitle*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterInputRequestHtmlAdditionalHeadData")) {
                        storedOutputResponseMessage += "***parameterInputRequestHtmlAdditionalHeadData*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterInputRequestHtmlScripts")) {
                        storedOutputResponseMessage += "***parameterInputRequestHtmlScripts*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterInputRequestHtmlStyles")) {
                        storedOutputResponseMessage += "***parameterInputRequestHtmlStyles*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterInputRequestHtmlBody")) {
                        storedOutputResponseMessage += "***parameterInputRequestHtmlBody*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestMasterStorer")) {
                        storedOutputResponseMessage += "***parameterProcessRequestMasterStorer*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestDataStorylineDetails")) {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails*** cannot be blank or empty.\n"
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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            //#endregion

            //#region DEFINE data response

            let storedOutputResponseData: any = null;

            //#endregion

            //#region DEFINE html inputs

            let storedHtmlBaseDIScriptName: string = "";

            //#endregion

            //#region DEFINE parameter inputs

            let storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //#endregion

            //#region MEMORIZE centralized processes

            let storedProcessRequestCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object> = parameterInputs.Parameters.getValue("parameterProcessRequestMasterStorer");
            //this._storedProcessRequestCentralizedSensor = parameterProcessRequestCentralizedSensor;
            //storedProcessRequestCentralizedStorer = parameterProcessRequestCentralizedStorer;
            //#endregion

            //#region MEMORIZE control client server

            let storedProcessRequestTracker: Object = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE app settings

            let storedProcessRequestSettings: any = storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE ? storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE : false;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "STORING html template");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_6_0_Framework_Convert_HtmlStructureToString_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters.getValue("parameterOPTIONALIgnoreDeveloperConsoleLog"));

            //#endregion

            //#region MEMORIZE html inputs

            let storedHtmlPageTemplate = `<!DOCTYPE html>
                <html lang="en">
                    <head>
                        {metaDataReplace}
                        <title>{titleReplace}</title>  
                        {scriptsReplace}
                        {stylesReplace}
                    </head>
                    <body>
                        {bodyReplace}
                    </body>
                </html>`;

            let storedHtmlMetaData: string = parameterInputs.Parameters.getValue("parameterInputRequestHtmlMetaData");
            let storedHtmlTitle: string = parameterInputs.Parameters.getValue("parameterInputRequestHtmlTitle");
            let storedHtmlScripts: string = parameterInputs.Parameters.getValue("parameterInputRequestHtmlScripts");
            let storedHtmlAdditionalHeadData: string = parameterInputs.Parameters.getValue("parameterInputRequestHtmlAdditionalHeadData");
            let storedHtmlStyles: string = parameterInputs.Parameters.getValue("parameterInputRequestHtmlStyles");
            let storedHtmlBody: string = parameterInputs.Parameters.getValue("parameterInputRequestHtmlBody");

            //#endregion

            //#region MEMORIZE storyline details

            let storedProcessRequestDataStorylineDetails: any = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE json to html conversion

            //#region IDEAL CASE - USE json metadata

            //#region 1. READ cached baseDI script path

            const ExecuteStorageRequest = async (parameterHtmlBaseDIScriptName: string, parameterInputRequestHtmlScripts: string, parameterProcessRequestCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>, parameterProcessRequestTracker: Object, parameterProcessRequestDataStorylineDetails: Object, parameterFilterDataResponse: any): Promise<string> => {
                try {
                    storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

                    storedInputs.Parameters.setValue("parameterProcessRequestTracker", Object.assign(parameterProcessRequestTracker, Object));
                    storedInputs.Parameters.setValue("parameterCRUDVerb", "Read");
                    storedInputs.Parameters.setValue("parameterProcessRequestHandler", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0")
                    storedInputs.Parameters.setValue("parameterProcessRequestMasterStorer", Object.assign(parameterProcessRequestCentralizedStorer, Object));
                    storedInputs.Parameters.setValue("parameterProcessRequestStorageValue", Object.assign(parameterProcessRequestDataStorylineDetails, Object));
                    storedInputs.Parameters.setValue("parameterProcessRequestDataStorylineDetails", Object.assign(parameterProcessRequestDataStorylineDetails, Object));
                    storedInputs.Parameters.setValue("parameterPageName", "");
                    storedInputs.Parameters.setValue("parameterStorageDescription", "READING client side BaseDI script SOURCE PATH");
                    storedInputs.Parameters.setValue("parameterUniqueStorageKey", "BaseDI_PresentationScript_SrcLocation");

                    parameterFilterDataResponse = await Extension_Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0.BaseDI.Professional.Programming.Extensions_3.Extension_Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0.Step_X_X_Framework_Store_CacheDataToPersistentStorage_1_0(storedInputs);
                    parameterFilterDataResponse = (parameterFilterDataResponse && parameterFilterDataResponse.outputs.length > 0) ? parameterFilterDataResponse.outputs[1].baseDIObservations[parameterFilterDataResponse.outputs[1].baseDIObservations.length - 1] : null;

                    if (parameterFilterDataResponse) {
                        parameterHtmlBaseDIScriptName = parameterFilterDataResponse[Object.keys(parameterFilterDataResponse)[0]].observation.metadata[3].item.data[0].dataResult

                        parameterInputRequestHtmlScripts += `<script src="/scripts/${parameterHtmlBaseDIScriptName}" type="text/javascript"></script>`;
                    }

                    return parameterInputRequestHtmlScripts;

                }
                catch (storedProcessRequestMistake) {
                    //#region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode) {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED reading cache");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_6_0_Framework_Convert_HtmlStructureToString_1_0.ExecuteStorageRequest");

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    //#endregion

                    //#region EDGE CASE - USE exception handler

                    throw new Error("STORAGE request failed " + storedProcessRequestMistake.toString());

                    //#endregion
                }
            }

            if (process.env.APP_ENV == "SERVER") {
                storedHtmlScripts = await ExecuteStorageRequest(storedHtmlBaseDIScriptName, storedHtmlScripts, storedProcessRequestCentralizedStorer, storedProcessRequestTracker, storedProcessRequestDataStorylineDetails, storedOutputResponseData);
            }

            //#endregion

            //#region 2. CONVERT inputs to html template

            const ExecuteConversionRequest = async (parameterHtmlPageTemplate: string, parameterInputRequestHtmlMetaData: string, parameterInputRequestHtmlTitle: string, parameterInputRequestHtmlScripts: string, parameterInputRequestHtmlStyles: string, parameterInputRequestHtmlBody: string, parameterInputRequestHtmlAdditionalHeadData: string) => {
                parameterHtmlPageTemplate = parameterHtmlPageTemplate.replace("{metaDataReplace}", parameterInputRequestHtmlMetaData);
                parameterHtmlPageTemplate = parameterHtmlPageTemplate.replace("{titleReplace}", parameterInputRequestHtmlTitle);
                parameterHtmlPageTemplate = parameterHtmlPageTemplate.replace("{additionalHeadData}", parameterInputRequestHtmlAdditionalHeadData);
                parameterHtmlPageTemplate = parameterHtmlPageTemplate.replace("{scriptsReplace}", parameterInputRequestHtmlScripts);
                parameterHtmlPageTemplate = parameterHtmlPageTemplate.replace("{stylesReplace}", parameterInputRequestHtmlStyles);
                parameterHtmlPageTemplate = parameterHtmlPageTemplate.replace("{bodyReplace}", parameterInputRequestHtmlBody);

                return parameterHtmlPageTemplate;
            }

            storedHtmlPageTemplate = await ExecuteConversionRequest(storedHtmlPageTemplate, storedHtmlMetaData, storedHtmlTitle, storedHtmlScripts, storedHtmlStyles, storedHtmlBody, storedHtmlAdditionalHeadData);
            //#endregion

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN converted data

            //#region IDEAL CASE - USE html string

            return storedHtmlPageTemplate;

            //#endregion

            //#endregion

            //#endregion
        }


        //#endregion
    }
}