//#region Imports

//#region 3rd Party

var express = null;
var _3rdParty_Curling_ApiController = null;
var oauth2 = null;
var OIDCStragety = null;
var localStorage = null;
var passport = null;
var PassportFacebookStrategy = null;

//LIST
import * as Collections from 'typescript-collections';

var importedNodeJSFileManager = require('fs');
var importedNodeJSFilePath = require('path');

if (process.env.APP_ENV == "SERVER") {

    //COMMUNICATION
    _3rdParty_Curling_ApiController = require("_3rdParty_Curling_ApiControllering");

    //FILES  


    //SERVER
    express = require("express");

    //SECURITY
    oauth2 = require("simple-oauth2");
    OIDCStragety = require("passport-azure-ad");

    passport = require("passport");
    // PassportFacebookStrategy = require('passport-facebook').Strategy;

    //STORAGE
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./wwwroot/Server/State');
}



//#endregion

//#region BaseDI

import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";

import * as Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0 from "../../../../../../../../../0. Script/Extensions/11/Automate Manual Task/1/Risk Management/Method/0/1_0/Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0";
import * as Extension_Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0 from "../../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/3/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0";

import * as Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0 from "../../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/0/1_0/Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0";

import * as SingleParmPoco_12_2_1_0 from "../../../../../../../../../0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

//#endregion

//#endregion

export namespace BaseDI.Professional.Web_Development.Extensions_13 {
    export class Extension_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0 {
        constructor() {

        }

        //#region API MANAGEMENT

        public static async Step_X_X_Framework_Transport_ApiRequestToServer_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) : Promise<any>
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

                //0. CONTROLLERS

                //1. INPUTS
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", parameterInputs.Parameters.getValue("parameterInputRequestActionName"));
                
                //2. PROCESS              
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_1_0_Framework_Convert_HtmlContainerJsonToHtml_1_0 -> ValidateInputs");

                //3. OUTPUTS

                //#endregion

                //#endregion

                //#region 2. PROCESS

                //#region EXECUTE validation process

                //#region IDEAL CASE - USE valid information

                if (parameterInputs != null || parameterInputs != undefined || parameterInputs.Parameters != null && parameterInputs.Parameters != undefined) 
                {
                    //0. CONTROLLERS

                    //1. INPUTS

                    //2. PROCESS
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

                    if (!parameterInputs.Parameters.containsKey("parameterApiRequestCallBack")) {
                        storedOutputResponseMessage += "***parameterApiRequestCallBack*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterApiRequestEndPointAddress")) {
                        storedOutputResponseMessage += "***parameterApiRequestEndPointAddress*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterApiRequestData")) {
                        storedOutputResponseMessage += "***parameterApiRequestData*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterApiRequestVerb")) {
                        storedOutputResponseMessage += "***parameterApiRequestVerb*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    //OUTPUTS
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
                else
                {
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

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables

            let storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            let storedInputRequestApiEndPointAddress: string = parameterInputs.Parameters.getValue("parameterApiRequestEndPointAddress");
            let storedInputRequestApiData: any = parameterInputs.Parameters.getValue("parameterApiRequestData");
            let storedInputRequestApiVerb: string = parameterInputs.Parameters.getValue("parameterApiRequestVerb");

            //#endregion

            //#region DEFINE process variables

            let storedProcessRequestFileMetaDataList: Array<string> = [];
            let storedProcessRequestFileList: Array<string> = [];

            //#endregion

            //#region DEFINE output variables

            let storedOutputResponse: any = null;
            let storedOutputResponseData: any = null;

            //#endregion

            ///////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control api details

            let storedControlRequestApiControllerUsingCurl = _3rdParty_Curling_ApiController.connect();

            let storedControlRequestApiCallBack: any = parameterInputs.Parameters.getValue("parameterApiRequestCallBack");

            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input action name

            let storedInputRequestActionName: string = parameterInputs.Parameters.getValue("parameterInputRequestActionName");

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

            let storedProcessRequestDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (parameterInputs.Parameters.getValue("parameterProcessRequestExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") ? parameterInputs.Parameters.getValue("parameterProcessRequestExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") : null);

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED

            //0. CONTROLLERS
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedInputRequestActionName);

            //1. INPUTS

            //2. PROCESS
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "EXECUTING file copy process");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Action");

            //3. OUTPUTS  

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALMiddleOfProcess", true);

            //#endregion

            //#region MEMORIZE process storyline details

            let storedProcessRequestDataStorylineDetails: any = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");

            //#endregion


            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE api transport

            if (process.env.APP_ENV.toUpperCase() == "SERVER") {
                //#region IDEAL CASE - USE server module

                try
                {
                    const ExecuteTransportRequest = async (parameterApiRequestCallBack: any, parameterApiRequestEndPointAddress: string, parameterApiRequestData: any, parameterApiRequestVerb: string) => {
                        switch (parameterApiRequestVerb.toUpperCase()) {
                            case "DELETE":
                                storedControlRequestApiControllerUsingCurl.delete(parameterApiRequestEndPointAddress, parameterApiRequestData, function (storedError, storedResponse) {
                                    if (!storedError) {
                                        parameterApiRequestCallBack(storedResponse);
                                    }
                                    else {
                                        throw Error(storedError.toString());
                                    }
                                });

                                break;

                            case "GET":
                                storedControlRequestApiControllerUsingCurl.get(parameterApiRequestEndPointAddress, parameterApiRequestData, function (storedError, storedResponse) {
                                    if (!storedError) {
                                        parameterApiRequestCallBack(storedResponse);
                                    }
                                    else {
                                        throw Error(storedError.toString());
                                    }
                                });

                                break;

                            case "HEAD":
                                storedControlRequestApiControllerUsingCurl.head(parameterApiRequestEndPointAddress, parameterApiRequestData, function (storedError, storedResponse) {
                                    if (!storedError) {
                                        parameterApiRequestCallBack(storedResponse);
                                    }
                                    else {
                                        throw Error(storedError.toString());
                                    }
                                });

                                break;

                            case "POST":
                                storedControlRequestApiControllerUsingCurl.post(parameterApiRequestEndPointAddress, parameterApiRequestData, function (storedError, storedResponse) {
                                    if (!storedError) {
                                        parameterApiRequestCallBack(storedResponse);
                                    }
                                    else {
                                        throw Error(storedError.toString());
                                    }
                                });

                                break;

                            case "PUT":
                                storedControlRequestApiControllerUsingCurl.put(parameterApiRequestEndPointAddress, parameterApiRequestData, function (storedError, storedResponse) {
                                    if (!storedError) {
                                        parameterApiRequestCallBack(storedResponse);
                                    }
                                    else {
                                        throw Error(storedError.toString());
                                    }
                                });

                                break;
                        }
                    };

                    await ExecuteTransportRequest(storedControlRequestApiCallBack, storedInputRequestApiEndPointAddress, storedInputRequestApiData, storedInputRequestApiVerb);

                }
                catch (storedProcessRequestMistake)
                {
                    //#region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode) {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED calling api");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_X_X_Framework_Transport_ApiRequestToServer_1_0.ExecuteTransportRequest");

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    //#endregion

                    //#region EDGE CASE - USE exception handler

                    throw new Error("API request failed " + storedProcessRequestMistake.toString());

                    //#endregion
                }
        
                //#endregion
            }

            if (process.env.APP_ENV.toUpperCase() == "CLIENT") {
                //#region EDGE CASE - USE client module

                //#endregion
            }

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#endregion
        }   

        //#endregion

        //#region FILE MANAGEMENT

        public static async Step_X_X_Framework_Store_FilesToServer_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<any> {
            //#region 1. INPUTS

            //#region VALIDATE input parameters

            const ValidateInputs = async (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) => {
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
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.ts");
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

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestDataStorylineDetails")) {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestFileRootPath")) {
                        storedOutputResponseMessage += "***parameterProcessRequestFileRootPath*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }   
                    
                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestFileRootPathCopyTo")) {
                        storedOutputResponseMessage += "***parameterProcessRequestFileRootPathCopyTo*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }                       

                    //3. OUTPUT

                    if (storedProcessRequestMistakeMade) {
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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            //#endregion

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables

            let storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;
            
            //#endregion

            //#region DEFINE process variables
            
            let storedProcessRequestFileMetaDataItemOfContent: string = "";
            let storedProcessRequestFileMetaDataItemOfContentHtml: any = null;
            let storedProcessRequestFileMetaDataItemOfContentStyles: Array<object> = null;
            let storedProcessRequestFileMetaDataList: Array<string> = [];
            let storedProcessRequestFileMetaDataListOfContent: any = [];
            let storedProcessRequestFileMetaDataListOfContentHtml: any = null;
            let storedProcessRequestFileMetaDataListOfContentStyles: any = null;

            let storedProcessRequestFileCopyFrom: string = "";
            let storedProcessRequestFileCopyTo: string = "";

            let storedProcessRequestFileMediaList: Array<string> = [];

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

            //#region MEMORIZE input action name

            let storedInputRequestActionName: string = parameterInputs.Parameters.getValue("parameterInputRequestActionName");

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

            let storedProcessRequestDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (parameterInputs.Parameters.getValue("parameterProcessRequestExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") ? parameterInputs.Parameters.getValue("parameterProcessRequestExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") : null);

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED

            //0. CONTROLLERS
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedInputRequestActionName);

            //1. INPUTS

            //2. PROCESS
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "EXECUTING file copy process");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Action");

            //3. OUTPUTS  

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALMiddleOfProcess", true);

            //#endregion

            //#region MEMORIZE process storyline details

            let storedProcessRequestDataStorylineDetails: any = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");

            //#endregion

            //#region MEMORIZE process file details

            let storedProcessRequestFileRootPath: string = (parameterInputs.Parameters.getValue("parameterProcessRequestFileRootPath") != "") ? parameterInputs.Parameters.getValue("parameterProcessRequestFileRootPath") : "C://Programming//999.0.3.BaseDI.QuickStart.Templates";
            let storedProcessRequestFileRootPathCopyTo: string = (parameterInputs.Parameters.getValue("parameterProcessRequestFileRootPathCopyTo") != "") ? parameterInputs.Parameters.getValue("parameterProcessRequestFileRootPathCopyTo") : "C://Programming//999.0.2.BaseDI.Playground.Test.BackEnd";
            
            //#endregion
            

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE copying static files

            //#region IDEAL CASE - USE json metadata

            try 
            {
                //#region A. CONVERT json to array of json metadata files 

                try 
                {                        
                    //OUPUT EXAMPLE: Array[0] = "C:\{SomePath}\State_Director_Of_WebDevelopment_Chapter_12_3_Page_1_OutputHomeScreen_Handler_1_0-P1_0.json"
                    //               Array[1] = "C:\{SomePath}\State_Director_Of_WebDevelopment_Chapter_12_3_Page_2_OutputPresalesScreen_Handler_1_0-P1_0.json"
                    //               Array[2] = "C:\{SomePath}\State_Director_Of_WebDevelopment_Chapter_12_3_Page_3_OutputOptinScreen_Handler_1_0-P1_0.json"
                    const ExcuteConversionRequest = async() : Promise<Array<any>> => 
                    {
                        storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

                        //0. CONTROLLERS
                
                        //1. INPUTS
        
                        //2. PROCESS
                        storedInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestSettings);
                        storedInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
        
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilter", storedProcessRequestDataStorylineDetails);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilterKey", "searchkey");
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilterValue", "SetupItem_SetBuyer_ProductLaunching_Software_SenseEnvironment");
        
                        //3. OUTPUTS
                        storedInputs.Parameters.setValue("parameterOutputResponseAsArray", false);
        
                        storedOutputResponse = await Promise.resolve(Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.BaseDI.Professional.Programming.Extensions_0.Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(storedInputs));
        
                        if(storedOutputResponse != null && storedOutputResponse != undefined) {
                            storedOutputResponse = storedOutputResponse?.value?.SetupItemEnvironmentServer?.SetupItemEnvironmentServerMetaDataPaths;

                            if(storedOutputResponse != null && storedOutputResponse != undefined && storedOutputResponse.length > 0) {
                                storedOutputResponse.forEach(storedProcessRequestFileInfoItem => {
                                    if(storedProcessRequestFileInfoItem != null && storedProcessRequestFileInfoItem != undefined && storedProcessRequestFileInfoItem != "") 
                                    {
                                        storedProcessRequestFileMetaDataList.push(storedProcessRequestFileInfoItem.MetaDataLocalPath);
                                    }                                    
                                })    
                            }
                            else
                            {
                                throw new Error("converting json to array of metadata files");
                            }
                        }
                        else
                        {                            
                            throw new Error("converting json to array of metadata files");
                        }

                        return storedProcessRequestFileMetaDataList;
                    }

                    storedProcessRequestFileMetaDataList = await Promise.resolve(ExcuteConversionRequest());

                    if(storedProcessRequestFileMetaDataList.length == 0)
                        return storedProcessRequestDataStorylineDetails;
                }
                catch (storedProcessRequestMistake) {
                    if(!storedProcessRequestMistake.message)
                    {
                        throw new Error("converting json to array of metadata files");
                    }
                    
                    throw storedProcessRequestMistake;
                }                

                //#endregion
            
                //#region B. STORE json metadata file content to array

                try 
                {
                    //OUPUT EXAMPLE: Array[0] = "{ "Attributes":[ { "src": "{RootPath}/3.%20Client/Web/3.%20Setting/5/Ecommerce/2/Generate%20Brand%20Trust/1/Friendship/Assets/1/1_0/Setting_Sketchy-2-2-F-SKC-7-Launch-1-1-Goal-12-ASSET-Home-AJC_1920X1080_Desktop-CMS-2_1_1_0.jpg" } ]"
                    //                          "{ "StyleFile": [ { "StyleFileUseProperties": [{ "properties": { "properyValues": [ "url({RootPath}/3.%20Client/Web/3.%20Setting/5/Ecommerce/2/Generate%20Brand%20Trust/1/Friendship/Assets/1/1_0/Setting_Sketchy-2-2-F-SKC-7-Launch-1-1-Goal-12-ASSET-Home-AJC_1920X1080_Desktop-CMS-2_1_1_0.jpg)"] } }] }] "}"
                    
                    //               Array[1] = "{ "Attributes":[ { "src": "{RootPath}/3.%20Client/Web/3.%20Setting/5/Ecommerce/2/Generate%20Brand%20Trust/1/Friendship/Assets/1/1_0/Setting_Sketchy-2-2-F-SKC-7-Launch-1-1-Goal-12-ASSET-Home-AJC_1920X1080_Desktop-CMS-2_1_1_0.jpg" } ]"
                    //                          "{ "StyleFile": [ { "StyleFileUseProperties": [{ "properties": { "properyValues": [ "url({RootPath}/3.%20Client/Web/4.%20Experience/7/Awareness/1/Generate%20Brand%20Awarness/1/Advertising/Assets/1/1_0/Experience_Sketchy-2-2-F-SKC-7-Launch-1-1-Goal-12-ASSET-Owner_Aware-AJC_463X125_Desktop-CMS-1_1_1_0.png)"] } }] }] "}"
                    
                    //               Array[2] = "{ "Attributes":[ { "src": "{RootPath}/3.%20Client/Web/3.%20Setting/5/Ecommerce/2/Generate%20Brand%20Trust/1/Friendship/Assets/1/1_0/Setting_Sketchy-2-2-F-SKC-7-Launch-1-1-Goal-12-ASSET-Home-AJC_1920X1080_Desktop-CMS-2_1_1_0.jpg" } ]"
                    //                          "{ "StyleFile": [ { "StyleFileUseProperties": [{ "properties": { "properyValues": [ "url({RootPath}/3.%20Client/Web/4.%20Experience/5/Sight/3/Generate%20Optin/1/List%20Building/Assets/1/1_0/Experience_Sketchy-2-2-F-SKC-7-Launch-1-1-Goal-12-ASSET-ButtonOptin_Touch-AJC_611X37_Desktop-CMS-3_1_1_0.png"] } }] }] "}"
                    
                    const ExcuteStorageRequest = async() : Promise<any> => {
                        storedProcessRequestFileMetaDataList.map(storedProcessRequestFileMetaDataItem => {
                            storedProcessRequestFileMetaDataItemOfContent = importedNodeJSFileManager.readFileSync(storedProcessRequestFileMetaDataItem);
    
                            storedProcessRequestFileMetaDataListOfContent.push(JSON.parse(storedProcessRequestFileMetaDataItemOfContent))
                        })
    
                        return storedProcessRequestFileMetaDataListOfContent;
                    }   
                    
                    storedProcessRequestFileMetaDataListOfContent = await Promise.resolve(ExcuteStorageRequest());
                } 
                catch (storedProcessRequestMistake) {
                    if(!storedProcessRequestMistake.message)
                    {
                        throw new Error("storing array of file meta data");
                    }
                    
                    throw storedProcessRequestMistake;
                }  

                //#endregion

                //#region C. CONVERT json metadata content to array of media files (audio, documents, images, videos, etc)
                try 
                {
                    const ExecuteConversionRequest = async() : Promise<any> => 
                    {
                        //OUPUT EXAMPLE: Array[0] = "{RootPath}/3.%20Client/Web/3.%20Setting/5/Ecommerce/2/Generate%20Brand%20Trust/1/Friendship/Assets/1/1_0/Setting_Sketchy-2-2-F-SKC-7-Launch-1-1-Goal-12-ASSET-Home-AJC_1920X1080_Desktop-CMS-2_1_1_0.jpg"
                        //               Array[1] = "{RootPath}/3.%20Client/Web/4.%20Experience/7/Awareness/1/Generate%20Brand%20Awarness/1/Advertising/Assets/1/1_0/Experience_Sketchy-2-2-F-SKC-7-Launch-1-1-Goal-12-ASSET-Owner_Aware-AJC_463X125_Desktop-CMS-1_1_1_0.png"
                        //               Array[2] = "{RootPath}/3.%20Client/Web/4.%20Experience/5/Sight/3/Generate%20Optin/1/List%20Building/Assets/1/1_0/Experience_Sketchy-2-2-F-SKC-7-Launch-1-1-Goal-12-ASSET-ButtonOptin_Touch-AJC_611X37_Desktop-CMS-3_1_1_0.png"
                        storedProcessRequestFileMetaDataListOfContent.map(storedProcessRequestFileMetaDataItemOfContent => 
                        {
                            //#region 1. PARSE file paths from css files (images, videos, etc)
    
                            try 
                            {
                                storedProcessRequestFileMetaDataListOfContentStyles = storedProcessRequestFileMetaDataItemOfContent?.baseDI_NerdyGroupAffiliates_DynamicWebsite_MainProfile?.value.baseDIInstructions.presentation[0]?.values_2[0]?.values_2_2[0]?.values_2_2_2[0]?._2_2_2_4_clientInformationHTMLContentStylingDetails.value[0]._2_2_2_4_1_clientInformationHTMLContentStylingItem.value.HTMLContentStylingItemFiles[0]?.StyleFiles;
    
                                if(storedProcessRequestFileMetaDataListOfContentStyles != null && storedProcessRequestFileMetaDataListOfContentStyles != undefined){
                                    //OUTPUT EXAMPLE: "StyleFiles": [{}]
                                    storedProcessRequestFileMetaDataListOfContentStyles.map(storedProcessRequestFileMetaDataItemOfContentStyle => {
                                        //OUTPUT EXAMPLE: "StyleFiles": [{"StyleFileUseProperties":[]]}]
                                        (storedProcessRequestFileMetaDataItemOfContentStyle as any)?.StyleFileUseProperties.map(storedProcessRequestStyleFilePropertyList => {
                                            //OUTPUT EXAMPLE: "StyleFiles": [{"StyleFileUseProperties":[{"properties":[]}]]}]
                                            (storedProcessRequestStyleFilePropertyList as any)?.properties.map(storedProcessRequestStyleFilePropertyItem => {
                                                //OUTPUT EXAMPLE: "StyleFiles": [{"StyleFileUseProperties":[{"properties":[{"properyValues":[]}]}]]}]
                                                (storedProcessRequestStyleFilePropertyItem as any)?.properyValues.map(storedProcessRequestStyleFilePropertyItemValue => {
                                                    //OUTPUT EXAMPLE: "StyleFiles": [{"StyleFileUseProperties":[{"properties":[{"properyValues":["url({RootPath}/3.%20Client/Web/3.%20Setting/5/Ecommerce/2/Generate%20Brand%20Trust/1/Friendship/Assets/1/1_0/Setting_Sketchy-2-2-F-SKC-7-Launch-1-1-Goal-12-ASSET-Home-AJC_1920X1080_Desktop-CMS-2_1_1_0.jpg)"]}]}]]}]
                                                    if(storedProcessRequestStyleFilePropertyItemValue?.includes("url")) //CSS url property
                                                    {
                                                        //OUTPUT EXAMPLE: {RootPath}/3.%20Client/Web/3.%20Setting/5/Ecommerce/2/Generate%20Brand%20Trust/1/Friendship/Assets/1/1_0/Setting_Sketchy-2-2-F-SKC-7-Launch-1-1-Goal-12-ASSET-Home-AJC_1920X1080_Desktop-CMS-2_1_1_0.jpg
                                                        storedProcessRequestStyleFilePropertyItemValue = storedProcessRequestStyleFilePropertyItemValue.replace(/(^.*\(|\).*$)/g, '');
    
                                                        //OUTPUT EXAMPLE: C:/Programming/999.0.3.BaseDI.QuickStart.Templates/3.%20Client/Web/3.%20Setting/5/Ecommerce/2/Generate%20Brand%20Trust/1/Friendship/Assets/1/1_0/Setting_Sketchy-2-2-F-SKC-7-Launch-1-1-Goal-12-ASSET-Home-AJC_1920X1080_Desktop-CMS-2_1_1_0.jpg
                                                        storedProcessRequestStyleFilePropertyItemValue = storedProcessRequestStyleFilePropertyItemValue.replace("{RootPath}", storedProcessRequestFileRootPath);
                                                        
                                                        //OUTPUT EXAMPLE: C:\Programming\999.0.3.BaseDI.QuickStart.Templates\3. Client\Web\4. Experience\5\Sight\1\Generate Brand Awareness\1\Advertising\Assets\1\1_0\Setting_Sketchy-2-2-F-SKC-7-Launch-1-1-Goal-12-ASSET-Home-AJC_1920X1080_Desktop-CMS-2_1_1_0.jpg
                                                        //storedProcessRequestStyleFilePropertyItemValue = importedNodeJSFilePath.resolve(decodeURI(storedProcessRequestStyleFilePropertyItemValue));
    
                                                        storedProcessRequestFileMediaList.push(storedProcessRequestStyleFilePropertyItemValue);
                                                    }
                                                })
                                            })
                                        })
                                    });
                                }
                                else
                                {
                                    throw new Error("converting file list from css files");
                                }
                            } 
                            catch (storedProcessRequestMistake) {
                                throw new Error("converting file list from css files")
                            }
    
                            //#endregion
    
                            //#region 2. PARSE file paths from html files (images, videos, etc)
    
                            try 
                            {
                                storedProcessRequestFileMetaDataListOfContentHtml = storedProcessRequestFileMetaDataItemOfContent?.baseDI_NerdyGroupAffiliates_DynamicWebsite_MainProfile?.value?.baseDIInstructions?.presentation[0]?.values_2[0]?.values_2_2[0]?.values_2_2_2[0]?._2_2_2_3_clientInformationHTMLContentDetails?.value[0];
    
                                if(storedProcessRequestFileMetaDataListOfContentHtml != null && storedProcessRequestFileMetaDataListOfContentHtml != undefined){
                                    //OUTPUT EXAMPLE: storedProcessRequestJSONkey = "_2_2_2_3_1_clientInformationHTMLContentItem"
                                    //                storedProcessRequestJSONkey =_2_2_2_3_2_clientInformationHTMLContentItem
                                    //                storedProcessRequestJSONkey =_2_2_2_3_3_clientInformationHTMLContentItem
                                    //                storedProcessRequestJSONkey =_2_2_2_3_4_clientInformationHTMLContentItem
                                    Object.keys(storedProcessRequestFileMetaDataListOfContentHtml).map(storedProcessRequestJSONkey => {
                                        //OUTPUT EXAMPLE: "HTMLContentItems": [{}]
                                        storedProcessRequestFileMetaDataItemOfContentHtml = storedProcessRequestFileMetaDataListOfContentHtml[storedProcessRequestJSONkey]?.value?.HTMLContentItems;
    
                                        storedProcessRequestFileMetaDataItemOfContentHtml.map(storedProcessRequestFileMetaDataItemOfContentHtmlAttributes => {
                                            //OUTPUT EXAMPLE: "HTMLContentItems": [{"Attributes":[{}]}]
                                            storedProcessRequestFileMetaDataItemOfContentHtmlAttributes?.Attributes.map(storedProcessRequestFileMetaDataItemOfContentHtmlAttribute => {
                                                //OUTPUT EXAMPLE: "HTMLContentItems": [{"Attributes":[{ "src":"{RootPath}/3.%20Client/Web/3.%20Setting/5/Ecommerce/2/Generate%20Brand%20Trust/1/Friendship/Assets/1/1_0/Setting_Sketchy-2-2-F-SKC-7-Launch-1-1-Goal-12-ASSET-Home-AJC_1920X1080_Desktop-CMS-2_1_1_0.jpg"}]}]
                                                if(storedProcessRequestFileMetaDataItemOfContentHtmlAttribute.src != null && storedProcessRequestFileMetaDataItemOfContentHtmlAttribute.src != undefined){
                                                    
                                                   //OUTPUT EXAMPLE: {RootPath}/3.%20Client/Web/3.%20Setting/5/Ecommerce/2/Generate%20Brand%20Trust/1/Friendship/Assets/1/1_0/Setting_Sketchy-2-2-F-SKC-7-Launch-1-1-Goal-12-ASSET-Home-AJC_1920X1080_Desktop-CMS-2_1_1_0.jpg
                                                   storedProcessRequestFileMetaDataItemOfContentHtmlAttribute.src = storedProcessRequestFileMetaDataItemOfContentHtmlAttribute.src.replace(/(^.*\(|\).*$)/g, '');
    
                                                   //OUTPUT EXAMPLE: C:/Programming/999.0.3.BaseDI.QuickStart.Templates/3.%20Client/Web/3.%20Setting/5/Ecommerce/2/Generate%20Brand%20Trust/1/Friendship/Assets/1/1_0/Setting_Sketchy-2-2-F-SKC-7-Launch-1-1-Goal-12-ASSET-Home-AJC_1920X1080_Desktop-CMS-2_1_1_0.jpg
                                                   storedProcessRequestFileMetaDataItemOfContentHtmlAttribute.src = storedProcessRequestFileMetaDataItemOfContentHtmlAttribute.src.replace("{RootPath}", storedProcessRequestFileRootPath);
                                                   
                                                   //OUTPUT EXAMPLE: C:\Programming\999.0.3.BaseDI.QuickStart.Templates\3. Client\Web\4. Experience\5\Sight\1\Generate Brand Awareness\1\Advertising\Assets\1\1_0\Setting_Sketchy-2-2-F-SKC-7-Launch-1-1-Goal-12-ASSET-Home-AJC_1920X1080_Desktop-CMS-2_1_1_0.jpg
                                                   //storedProcessRequestFileMetaDataItemOfContentHtmlAttribute.src = importedNodeJSFilePath.resolve(decodeURI(storedProcessRequestFileMetaDataItemOfContentHtmlAttribute.src));
                                                    
                                                   storedProcessRequestFileMediaList.push(storedProcessRequestFileMetaDataItemOfContentHtmlAttribute.src);
                                                }
                                            })
                                        })
                                    })
                                }
                                else
                                {
                                    throw new Error("converting file list from html files");
                                }
                            } 
                            catch (storedProcessRequestMistake) {
                                throw new Error("converting file list from html files")
                            }                  
    
                            //#endregion                        
                        });
                        
                        return storedProcessRequestFileMediaList;
                    }

                    storedProcessRequestFileMediaList = await Promise.resolve(ExecuteConversionRequest());                 
                } 
                catch (storedProcessRequestMistake) {
                    if(!storedProcessRequestMistake.message)
                    {
                        throw new Error("converting json to array of files");
                    }
                    
                    throw storedProcessRequestMistake;
                }

                //#endregion
            
                //#region D. TRANSPORT media files to specified directory
                try
                {
                    const ExecuteTransportRequest = async() : Promise<any> => {                     
                        storedProcessRequestFileMediaList.map(storedProcessRequestFileMediaItem => 
                        {
                            //OUTPUT EXAMPLE: C:/Programming/999.0.3.BaseDI.QuickStart.Templates/3.%20Client/Web/3.%20Setting/5/Ecommerce/2/Generate%20Brand%20Trust/1/Friendship/Assets/1/1_0/Setting_Sketchy-2-2-F-SKC-7-Launch-1-1-Goal-12-ASSET-Home-AJC_1920X1080_Desktop-CMS-2_1_1_0.jpg
                            storedProcessRequestFileCopyFrom = storedProcessRequestFileMediaItem;

                            //OUTPUT EXAMPLE: C:/Programming/999.0.2.BaseDI.Playground.Test.BackEnd/wwwroot/client/images/3.%20Client/Web/3.%20Setting/5/Ecommerce/2/Generate%20Brand%20Trust/1/Friendship/Assets/1/1_0/Setting_Sketchy-2-2-F-SKC-7-Launch-1-1-Goal-12-ASSET-Home-AJC_1920X1080_Desktop-CMS-2_1_1_0.jpg
                            storedProcessRequestFileCopyTo = storedProcessRequestFileMediaItem.replace(storedProcessRequestFileRootPath, storedProcessRequestFileRootPathCopyTo + "//wwwroot//Client//Images//");
                            
                            if(importedNodeJSFileManager.existsSync(importedNodeJSFilePath.resolve(decodeURI(storedProcessRequestFileCopyFrom)))) 
                            {
                                if(!importedNodeJSFileManager.existsSync(importedNodeJSFilePath.dirname(storedProcessRequestFileCopyTo)))
                                {
                                    try 
                                    {
                                        importedNodeJSFileManager.mkdirSync(importedNodeJSFilePath.dirname(decodeURI(storedProcessRequestFileCopyTo)), { recursive: true }); 
                                    } 
                                    catch (storedProcessRequestMistake) {
                                        throw new Error("canoot create directory " + importedNodeJSFilePath.dirname(storedProcessRequestFileCopyTo));
                                    }
                                }
                                
                                try 
                                {
                                    storedProcessRequestFileCopyFrom = importedNodeJSFilePath.resolve(decodeURI(storedProcessRequestFileCopyFrom));
                                    storedProcessRequestFileCopyTo= importedNodeJSFilePath.resolve(decodeURI(storedProcessRequestFileCopyTo));

                                    importedNodeJSFileManager.copyFile(storedProcessRequestFileCopyFrom, storedProcessRequestFileCopyTo, (storedProcessRequestMistake) => {throw storedProcessRequestMistake});
                                } 
                                catch (storedProcessRequestMistake) {
                                    throw new Error("canoot copy file " + storedProcessRequestFileCopyFrom);
                                }                             
                            }                            
                        })
                    }

                    await Promise.resolve(ExecuteTransportRequest());
                } 
                catch (storedProcessRequestMistake) {
                    if(!storedProcessRequestMistake.message)
                    {
                        throw new Error("transporting media files");
                    }
                    
                    throw storedProcessRequestMistake;
                }
                //#endregion
            } 
            catch (storedProcessRequestMistake)
            {
                //#region EDGE CASE - USE developer logger

                if (storedProcessRequestDeveloperMode) {
                    storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                    //0. CONTROLLERS

                    //1. INPUTS

                    //2. PROCESS
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED copying static files to server");                  
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

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            storedProcessRequestFileMediaList = storedProcessRequestFileMediaList;

            //#endregion

        }


        //#endregion

        //#region SERVER MANAGEMENT

        public static async Step_X_X_Framework_Control_ServerHandleDefaults_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<any>
        {
            //#region 1. INPUTS

            //#region VALIDATE input parameters

            const ValidateInputs = async (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) => {
                //#region 1. INPUTS

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
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", parameterInputs.Parameters.getValue("parameterInputRequestActionName"));
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_1_0_Framework_Convert_HtmlContainerJsonToHtml_1_0 -> ValidateInputs");

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

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestHandler")) {
                        storedOutputResponseMessage += "***parameterProcessRequestHandler*** cannot be blank or empty.\n"
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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            //#endregion

            //#region DEFINE parameter inputs

            let storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //#endregion

            //#region MEMORIZE centralized processes

            let storedProcessRequestCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object> = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedStorer");
            //this._storedProcessRequestCentralizedSensor = parameterProcessRequestCentralizedSensor;
            //this._storedProcessRequestCentralizedStorer = parameterProcessRequestCentralizedStorer;

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
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONFIGURING web server");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", parameterInputs.Parameters.getValue("parameterInputRequestActionName"));
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_X_X_Framework_Control_ServerHandleDefaults_1_0");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALMiddleOfProcess", true);

            //#endregion

            //#region MEMORIZE request details

            let storedInputRequestName: string = parameterInputs.Parameters.getValue("parameterProcessRequestHandler");
            //let storedInputRequestNameDataCacheKey: string = this.ExtraData.KeyValuePairs.getValue("RequestToProcessParameters");

            //#endregion

            //#region MEMORIZE storyline details

            let storedProcessRequestDataStorylineDetails: Object = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

            //#endregion

            //#region MEMORIZE server details

            let storedServerInstance: any = null;

            storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
            storedInputs.Parameters.setValue("parameterProcessRequestDataToFilter", storedProcessRequestDataStorylineDetails);
            storedInputs.Parameters.setValue("parameterProcessRequestDataToFilterKey", "searchkey");
            storedInputs.Parameters.setValue("parameterProcessRequestDataToFilterValue", "HandleDefaultsItem_SetBuyer_ProductLaunching_Software_TransportEnvironment");
            storedInputs.Parameters.setValue("parameterOutputResponseAsArray", false);

            const storedServerDetails: any = Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.BaseDI.Professional.Programming.Extensions_0.Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(storedInputs);

            //DOMAIN url
            const storedServerDomainName: number = storedServerDetails?.value?.HandleDefaultsItemEnvironmentDomainName;

            //PORT number
            const storedServerPort: number = storedServerDetails?.value?.HandleDefaultsItemEnvironmentPort;

            //STATIC paths

            //DOCUMENTS
            const storedServerDocumentPath: string = storedServerDetails?.value?.HandleDefaultsItemEnvironmentClient?.HandleDefaultsItemDataPath;

            //FONTS
            const storedServerFontsPath: string = storedServerDetails?.value?.HandleDefaultsItemEnvironmentClient?.HandleDefaultsItemFontPath;
            const storedServerImagesPath: string = storedServerDetails?.value?.HandleDefaultsItemEnvironmentClient?.HandleDefaultsItemImagePath;

            //SCRIPTS
            const storedServerScriptsPath: string = storedServerDetails?.value?.HandleDefaultsItemEnvironmentClient?.HandleDefaultsItemScriptPath;
            const storedServerScriptName: string = storedServerDetails?.value?.HandleDefaultsItemEnvironmentClient?.HandleDefaultsItemScriptName;

            //ROUTES 
            const storedServerRoutesGET: Array<any> = storedServerDetails?.value?.HandleDefaultsItemEnvironmentServer?.HandleDefaultsItemTransportItemRoutesGET;
            const storedServerRoutesDELETE: Array<any> = storedServerDetails?.value?.HandleDefaultsItemEnvironmentServer?.HandleDefaultsItemTransportItemRoutesDELETE;
            const storedServerRoutesPOST: Array<any> = storedServerDetails?.value?.HandleDefaultsItemEnvironmentServer?.HandleDefaultsItemTransportItemRoutesPOST;
            const storedServerRoutesPUT: Array<any> = storedServerDetails?.value?.HandleDefaultsItemEnvironmentServer?.HandleDefaultsItemTransportItemRoutesPUT;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE configuration process

            //#region EDGE CASE - USE developer logger

            if (storedProcessRequestDeveloperMode) {
                storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Logging"); //Values = Logging or Mistake
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);

                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALMiddleOfProcess", false);
            }

            //#endregion

            if (storedProcessRequestCentralizedStorer != null)
            {
                try
                {
                    //#region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode) {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "ATTEMPTING to store " + storedServerScriptName);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Logging"); //Values = Logging or Mistake
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);

                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "ATTEMPTING to store " + process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Logging"); //Values = Logging or Mistake
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    //#endregion

                    //#region EDGE CASE - USE local storage
                    storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

                    //STATIC inputs               
                    storedInputs.Parameters.setValue("parameterProcessRequestTracker", Object.assign(storedProcessRequestTracker, Object));
                    storedInputs.Parameters.setValue("parameterProcessRequestCRUDVerb", "Create");

                    storedInputs.Parameters.setValue("parameterProcessRequestHandler", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0");

                    storedInputs.Parameters.setValue("parameterProcessRequestCentralizedStorer", Object.assign(storedProcessRequestCentralizedStorer, Object));

                    storedInputs.Parameters.setValue("parameterProcessRequestPageName", "Step_X_X_Framework_Control_ServerHandleDefaults_1_0");

                    storedInputs.Parameters.setValue("parameterProcessRequestDataStorylineDetails", Object.assign(storedProcessRequestDataStorylineDetails, Object));

                    storedInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", true);

                    //DYNAMIC inputs
                    storedInputs.Parameters.setValue("parameterProcessRequestStorageDescription", "STORING client side BaseDI script SOURCE PATH");
                    storedInputs.Parameters.setValue("parameterProcessRequestStorageValue", storedServerScriptName);
                    storedInputs.Parameters.setValue("parameterProcessRequestStorageUniqueKey", "BaseDI_PresentationScript_SrcLocation");

                    //STORE it
                    await Extension_Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0.BaseDI.Professional.Programming.Extensions_3.Extension_Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0.Step_X_X_Framework_Store_CacheDataToPersistentStorage_1_0(storedInputs);

                    //DYNAMIC inputs

                    storedInputs.Parameters.setValue("parameterProcessRequestTracker", Object.assign(storedProcessRequestTracker, Object));

                    storedInputs.Parameters.remove("parameterProcessRequestStorageDescription");
                    storedInputs.Parameters.setValue("parameterProcessRequestStorageDescription", "STORING server side data CONVERSION REPOSITORY mode");

                    storedInputs.Parameters.remove("parameterProcessRequestStorageValue");
                    storedInputs.Parameters.setValue("parameterProcessRequestStorageValue", process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER);

                    storedInputs.Parameters.remove("parameterProcessRequestStorageUniqueKey");
                    storedInputs.Parameters.setValue("parameterProcessRequestStorageUniqueKey", "BaseDI_DataConverter_Mode");

                    storedInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", false);

                    //STORE it
                    await Extension_Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0.BaseDI.Professional.Programming.Extensions_3.Extension_Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0.Step_X_X_Framework_Store_CacheDataToPersistentStorage_1_0(storedInputs);

                    //#endregion
                }
                catch (storedProcessRequestMistake)
                {
                    //#region EDGE CASE - USE developer logger
                    if (storedProcessRequestDeveloperMode) {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED configurating server");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }
                    //#endregion

                    //#region EDGE CASE - USE exception handler

                    throw storedProcessRequestMistake;

                    //#endregion
                }
            }

            //#region IDEAL CASE - USE express server

            const ExecuteControllerHandleDefaults = async (parameterServerInstance: any): Promise<any> => {
                parameterServerInstance = express();

                //BROWSER fav icon
                parameterServerInstance.get('/favicon.ico', (req, res) => res.status(204));

                //RETURN configured server
                return parameterServerInstance;
            };

            storedServerInstance = await ExecuteControllerHandleDefaults(storedServerInstance);

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN server details

            //#region IDEAL CASE - USE server details

            return {
                Server:
                {
                    Instance: storedServerInstance,
                    Port: storedServerPort,
                    Verbs: {
                        Delete: storedServerRoutesDELETE,
                        Get: storedServerRoutesGET,
                        Post: storedServerRoutesPOST,
                        Put: storedServerRoutesPUT
                    }
                },

            };

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion
    }
}