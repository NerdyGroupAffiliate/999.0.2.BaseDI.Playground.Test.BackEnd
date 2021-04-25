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

if (process.env.APP_ENV == "SERVER") {

    //COMMUNICATION
    _3rdParty_Curling_ApiController = require("_3rdParty_Curling_ApiControllering");

    //FILES
    var fs = require('fs');
    var path = require('path');

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

import * as Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0 from "../../../../../../../../../0. Script/Extensions/11/Automate Manual Task/1/Risk Management/Method/0/1_0/Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0";
import * as Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0 from "../../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/3/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0";

import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

import * as SingleParmPoco_12_2_1_0 from "../../../../../../../../../0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

//#endregion

//#endregion

export namespace BaseDI.Professional.Web_Development.Extensions_13 {
    export class Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0 {
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
                storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", storedClientOrServerInstance["storedActionName"]);
                storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", storedClientOrServerInstance["storedAppSettings"]);
                storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", storedClientOrServerInstance);
                storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.ts");
                storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Step_1_0_Framework_Convert_HtmlContainerJsonToHtml_1_0 -> ValidateInputs");

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

                    if (!parameterInputs.Parameters.containsKey("parameterApiRequestCallBack")) {
                        storedMessage += "***parameterApiRequestCallBack*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterApiRequestEndPointAddress")) {
                        storedMessage += "***parameterApiRequestEndPointAddress*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterApiRequestData")) {
                        storedMessage += "***parameterApiRequestData*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterApiRequestVerb")) {
                        storedMessage += "***parameterApiRequestVerb*** cannot be blank or empty.\n"
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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            //#endregion

            //#region DEFINE data response

            let storedDataResponse: any = null;
            let storedDataResponseFailed: boolean = false;

            //#endregion

            //#region DEFINE parameter inputs

            let storedParameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //#endregion

            //#region MEMORIZE clientOrServer instance

            let storedClientOrServerInstance: Object = parameterInputs.Parameters.getValue("parameterClientOrServerInstance");

            //#endregion

            //#region MEMORIZE app settings

            let storedAppSettings: any = storedClientOrServerInstance["storedAppSettings"];

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = storedAppSettings.APP_SETTING_DEVELOPER_MODE ? storedAppSettings.APP_SETTING_DEVELOPER_MODE : false;

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "CONVERTING json to html container");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Step_X_X_Framework_Transport_ApiRequestToServer_1_0");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters.getValue("parameterOPTIONALIgnoreDeveloperConsoleLog"));

            //#endregion

            //#region MEMORIZE api inputs

            let storedApiControllerUsingCurl = _3rdParty_Curling_ApiController.connect();

            let storedApiRequestCallBack: any = parameterInputs.Parameters.getValue("parameterApiRequestCallBack");
            let storedApiRequestEndPointAddress: string = parameterInputs.Parameters.getValue("parameterApiRequestEndPointAddress");
            let storedApiRequestData: any = parameterInputs.Parameters.getValue("parameterApiRequestData");
            let storedApiRequestVerb: string = parameterInputs.Parameters.getValue("parameterApiRequestVerb");

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
                                storedApiControllerUsingCurl.delete(parameterApiRequestEndPointAddress, parameterApiRequestData, function (storedError, storedResponse) {
                                    if (!storedError) {
                                        parameterApiRequestCallBack(storedResponse);
                                    }
                                    else {
                                        throw Error(storedError.toString());
                                    }
                                });

                                break;

                            case "GET":
                                storedApiControllerUsingCurl.get(parameterApiRequestEndPointAddress, parameterApiRequestData, function (storedError, storedResponse) {
                                    if (!storedError) {
                                        parameterApiRequestCallBack(storedResponse);
                                    }
                                    else {
                                        throw Error(storedError.toString());
                                    }
                                });

                                break;

                            case "HEAD":
                                storedApiControllerUsingCurl.head(parameterApiRequestEndPointAddress, parameterApiRequestData, function (storedError, storedResponse) {
                                    if (!storedError) {
                                        parameterApiRequestCallBack(storedResponse);
                                    }
                                    else {
                                        throw Error(storedError.toString());
                                    }
                                });

                                break;

                            case "POST":
                                storedApiControllerUsingCurl.post(parameterApiRequestEndPointAddress, parameterApiRequestData, function (storedError, storedResponse) {
                                    if (!storedError) {
                                        parameterApiRequestCallBack(storedResponse);
                                    }
                                    else {
                                        throw Error(storedError.toString());
                                    }
                                });

                                break;

                            case "PUT":
                                storedApiControllerUsingCurl.put(parameterApiRequestEndPointAddress, parameterApiRequestData, function (storedError, storedResponse) {
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

                    await ExecuteTransportRequest(storedApiRequestCallBack, storedApiRequestEndPointAddress, storedApiRequestData, storedApiRequestVerb);

                }
                catch (mistake)
                {
                    //#region EDGE CASE - USE developer logger

                    if (storedDeveloperMode) {
                        storedClientOrServerInstance["processStepNumber"] = storedClientOrServerInstance["processStepNumber"] + 1;

                        storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "FAILED calling api");
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", storedClientOrServerInstance["processStepNumber"]);
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Step_X_X_Framework_Transport_ApiRequestToServer_1_0.ExecuteTransportRequest");

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                    }

                    //#endregion

                    //#region EDGE CASE - USE exception handler

                    throw new Error("API request failed " + mistake.toString());

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

        public static async Step_X_X_Framework_Store_FilesToServer_1_0(storylineDetails: object): Promise<any> {
            //#region VARIABLES

            //#endregion

            //#region VALUES


            //#endregion

            //#region INPUTS

            try {
                var fileMetaData = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Professional.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(storylineDetails, "searchkey", "SetupItem_SetBuyer_ProductLaunching_Software_SenseEnvironment", false);

                if (fileMetaData == undefined || fileMetaData == null)
                    fileMetaData = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Professional.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(storylineDetails, "searchkey", "Default_SetupItem_SetBuyer_ProductLaunching_Software_SenseEnvironment", false);

                var SetupItemEnvironmentServerMetaDataPaths = fileMetaData.value.SetupItemEnvironmentServer.SetupItemEnvironmentServerMetaDataPaths;

                SetupItemEnvironmentServerMetaDataPaths.forEach(metaDataPaths => {
                    let rawdata = fs.readFileSync(metaDataPaths.MetaDataLocalPath);
                    let obj = JSON.parse(rawdata);
                    let contentItems = obj.baseDI_NerdyGroupAffiliates_DynamicWebsite_MainProfile.value.baseDIInstructions.presentation[0].values_2[0].values_2_2[0].values_2_2_2[0]._2_2_2_3_clientInformationHTMLContentDetails.value[0];

                    let stylingItemFiles = obj.baseDI_NerdyGroupAffiliates_DynamicWebsite_MainProfile.value.baseDIInstructions.presentation[0].values_2[0].values_2_2[0].values_2_2_2[0]._2_2_2_4_clientInformationHTMLContentStylingDetails.value[0]._2_2_2_4_1_clientInformationHTMLContentStylingItem.value.HTMLContentStylingItemFiles[0].StyleFiles;

                    stylingItemFiles.forEach(file => {
                        file.StyleFileUseProperties.forEach(property => {
                            property.properties.forEach(prop => {
                                prop.properyValues.forEach(element => {
                                    if (element.includes('url')) {
                                        var url = element.replace(/(^.*\(|\).*$)/g, '');
                                        let filepath = path.resolve(decodeURI(url))
                                        if (fs.existsSync(filepath)) {
                                            var fileDirName = path.dirname(filepath)
                                            var shortDirName = fileDirName.replace(`C:\\Programming\\999.0.3.BaseDI.Professional.QuickStart.Templates\\`, '')
                                            let dest = `wwwroot/Client/Images/${shortDirName}`

                                            fs.mkdir(dest, { recursive: true }, (err) => {
                                                if (err) throw err;
                                                else {
                                                    fs.copyFile(filepath, `${dest}/${path.basename(filepath)}`, (err) => {
                                                        if (err) throw err;
                                                    });
                                                }
                                            });

                                        } else {
                                            console.log('File Not Found: ' + filepath)
                                        }
                                    }
                                });
                            });
                        });
                    });

                    Object.keys(contentItems).forEach(function (key) {
                        var val = contentItems[key];
                        let HTMLContentItems = val.value.HTMLContentItems;
                        HTMLContentItems.forEach(item => {
                            var attributes = item.Attributes;
                            attributes.forEach(att => {
                                if (att.src != undefined) {
                                    let filepath = path.resolve(decodeURI(att.src))
                                    // console.log(att.src)
                                    if (fs.existsSync(filepath)) {
                                        var fileDirName = path.dirname(filepath)
                                        var shortDirName = fileDirName.replace(`C:\\Programming\\999.0.3.BaseDI.Professional.QuickStart.Templates\\`, '')
                                        let dest = `wwwroot/Client/Images/${shortDirName}`

                                        fs.mkdir(dest, { recursive: true }, (err) => {
                                            if (err) {
                                                let a = "";
                                            }
                                            else {
                                                fs.copyFile(filepath, `${dest}/${path.basename(filepath)}`, (err) => {
                                                    if (err) {
                                                        let a = "";
                                                    }
                                                });
                                            }
                                        });

                                    } else {
                                        console.log('File Not Found: ' + filepath)
                                    }
                                }
                            });
                        });
                    });
                    // contentItems.forEach(contentItem => {
                    //     console.log(contentItem)
                    // });
                });
            }
            catch (e) {

            }


            //#endregion

            //#region OUTPUT

            //#endregion


        }


        //#endregion

        //#region SERVER MANAGEMENT

        public static async Step_X_X_Framework_Control_ServerSetup_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<any>
        {
            //#region 1. INPUTS

            //#region VALIDATE input parameters

            const ValidateInputs = async (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) => {
                //#region 1. INPUTS

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
                storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", storedClientOrServerInstance["storedActionName"]);
                storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", storedClientOrServerInstance["storedAppSettings"]);
                storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", storedClientOrServerInstance);
                storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.ts");
                storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Step_1_0_Framework_Convert_HtmlContainerJsonToHtml_1_0 -> ValidateInputs");

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

                    if (!parameterInputs.Parameters.containsKey("parameterDirectorOrExperienceName")) {
                        storedMessage += "***parameterDirectorOrExperienceName*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterMasterStorer")) {
                        storedMessage += "***parameterMasterStorer*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterStorylineDetails")) {
                        storedMessage += "***parameterStorylineDetails*** cannot be blank or empty.\n"
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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            //#endregion

            //#region DEFINE parameter inputs

            let storedParameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //#endregion

            //#region MEMORIZE centralized processes

            let stored_CentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object> = parameterInputs.Parameters.getValue("parameterMasterStorer");
            //this._stored_CentralizedSensor = parameterCentralizedSensor;
            //this._stored_CentralizedStorer = parameterCentralizedStorer;

            //#endregion

            //#region MEMORIZE clientOrServer instance

            let storedClientOrServerInstance: Object = parameterInputs.Parameters.getValue("parameterClientOrServerInstance");

            //#endregion

            //#region MEMORIZE app settings

            let storedAppSettings: any = storedClientOrServerInstance["storedAppSettings"];

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = storedAppSettings.APP_SETTING_DEVELOPER_MODE ? storedAppSettings.APP_SETTING_DEVELOPER_MODE : false;

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "CONFIGURING web server");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Step_X_X_Framework_Control_ServerSetup_1_0");
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALMiddleOfProcess", true);

            //#endregion

            //#region MEMORIZE request details

            let storedRequestName: string = parameterInputs.Parameters.getValue("parameterDirectorOrExperienceName");
            //let storedRequestNameParameters: string = this.ExtraData.KeyValuePairs.getValue("RequestToProcessParameters");

            //#endregion

            //#region MEMORIZE storyline details

            let storedStorylineDetails: Object = parameterInputs.Parameters.getValue("parameterStorylineDetails");
            //storedStorylineDetails_Parameters = parameterStorylineDetails_Parameters;

            //#endregion

            //#region MEMORIZE server details

            let storedServerInstance: any = null;

            const storedServerDetails: any = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Professional.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(storedStorylineDetails, "searchkey", "SetupItem_SetBuyer_ProductLaunching_Software_TransportEnvironment", false);

            //DOMAIN url
            const storedServerDomainName: number = storedServerDetails?.value?.SetupItemEnvironmentDomainName;

            //PORT number
            const storedServerPort: number = storedServerDetails?.value?.SetupItemEnvironmentPort;

            //STATIC paths

            //DOCUMENTS
            const storedServerDocumentPath: string = storedServerDetails?.value?.SetupItemEnvironmentClient?.SetupItemDataPath;

            //FONTS
            const storedServerFontsPath: string = storedServerDetails?.value?.SetupItemEnvironmentClient?.SetupItemFontPath;
            const storedServerImagesPath: string = storedServerDetails?.value?.SetupItemEnvironmentClient?.SetupItemImagePath;

            //SCRIPTS
            const storedServerScriptsPath: string = storedServerDetails?.value?.SetupItemEnvironmentClient?.SetupItemScriptPath;
            const storedServerScriptName: string = storedServerDetails?.value?.SetupItemEnvironmentClient?.SetupItemScriptName;

            //ROUTES 
            const storedServerRoutesGET: Array<any> = storedServerDetails?.value?.SetupItemEnvironmentServer?.SetupItemTransportItemRoutesGET;
            const storedServerRoutesDELETE: Array<any> = storedServerDetails?.value?.SetupItemEnvironmentServer?.SetupItemTransportItemRoutesDELETE;
            const storedServerRoutesPOST: Array<any> = storedServerDetails?.value?.SetupItemEnvironmentServer?.SetupItemTransportItemRoutesPOST;
            const storedServerRoutesPUT: Array<any> = storedServerDetails?.value?.SetupItemEnvironmentServer?.SetupItemTransportItemRoutesPUT;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE configuration process

            //#region EDGE CASE - USE developer logger

            if (storedDeveloperMode) {
                storedClientOrServerInstance["processStepNumber"] = storedClientOrServerInstance["processStepNumber"] + 1;

                storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Logging"); //Values = Logging or Mistake
                storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", storedClientOrServerInstance["processStepNumber"]);

                Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);

                storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALMiddleOfProcess", false);
            }

            //#endregion

            if (stored_CentralizedStorer != null)
            {
                try
                {
                    //#region EDGE CASE - USE developer logger

                    if (storedDeveloperMode) {
                        storedClientOrServerInstance["processStepNumber"] = storedClientOrServerInstance["processStepNumber"] + 1;

                        storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "ATTEMPTING to store " + storedServerScriptName);
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Logging"); //Values = Logging or Mistake
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", storedClientOrServerInstance["processStepNumber"]);

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);

                        storedClientOrServerInstance["processStepNumber"] = storedClientOrServerInstance["processStepNumber"] + 1;

                        storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "ATTEMPTING to store " + process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER);
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Logging"); //Values = Logging or Mistake
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", storedClientOrServerInstance["processStepNumber"]);

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                    }

                    //#endregion

                    //#region EDGE CASE - USE local storage
                    storedParameterInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

                    //STATIC inputs               
                    storedParameterInputs.Parameters.setValue("parameterClientOrServerInstance", Object.assign(storedClientOrServerInstance, Object));
                    storedParameterInputs.Parameters.setValue("parameterCRUDVerb", "Create");

                    storedParameterInputs.Parameters.setValue("parameterDirectorOrExperienceName", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0");

                    storedParameterInputs.Parameters.setValue("parameterMasterStorer", Object.assign(stored_CentralizedStorer, Object));

                    storedParameterInputs.Parameters.setValue("parameterPageName", "Step_X_X_Framework_Control_ServerSetup_1_0");

                    storedParameterInputs.Parameters.setValue("parameterStorylineDetails", Object.assign(storedStorylineDetails, Object));

                    storedParameterInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", true);

                    //DYNAMIC inputs
                    storedParameterInputs.Parameters.setValue("parameterStorageDescription", "STORING client side BaseDI script SOURCE PATH");
                    storedParameterInputs.Parameters.setValue("parameterStorageValue", storedServerScriptName);
                    storedParameterInputs.Parameters.setValue("parameterUniqueStorageKey", "BaseDI_PresentationScript_SrcLocation");

                    //STORE it
                    await Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.BaseDI.Professional.Programming.Extensions_3.Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.Step_X_X_Framework_Store_CacheDataToPersistentStorage_1_0(storedParameterInputs);

                    //DYNAMIC inputs

                    storedParameterInputs.Parameters.setValue("parameterClientOrServerInstance", Object.assign(storedClientOrServerInstance, Object));

                    storedParameterInputs.Parameters.remove("parameterStorageDescription");
                    storedParameterInputs.Parameters.setValue("parameterStorageDescription", "STORING server side data CONVERSION REPOSITORY mode");

                    storedParameterInputs.Parameters.remove("parameterStorageValue");
                    storedParameterInputs.Parameters.setValue("parameterStorageValue", process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER);

                    storedParameterInputs.Parameters.remove("parameterUniqueStorageKey");
                    storedParameterInputs.Parameters.setValue("parameterUniqueStorageKey", "BaseDI_DataConverter_Mode");

                    storedParameterInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", false);

                    //STORE it
                    await Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.BaseDI.Professional.Programming.Extensions_3.Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.Step_X_X_Framework_Store_CacheDataToPersistentStorage_1_0(storedParameterInputs);

                    //#endregion
                }
                catch (mistake)
                {
                    //#region EDGE CASE - USE developer logger
                    if (storedDeveloperMode) {
                        storedClientOrServerInstance["processStepNumber"] = storedClientOrServerInstance["processStepNumber"] + 1;

                        storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "FAILED configurating server");
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", storedClientOrServerInstance["processStepNumber"]);

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                    }
                    //#endregion

                    //#region EDGE CASE - USE exception handler

                    throw mistake;

                    //#endregion
                }
            }

            //#region IDEAL CASE - USE express server

            const ExecuteControllerSetup = async (parameterServerInstance: any): Promise<any> => {
                parameterServerInstance = express();

                //BROWSER fav icon
                parameterServerInstance.get('/favicon.ico', (req, res) => res.status(204));

                //RETURN configured server
                return parameterServerInstance;
            };

            storedServerInstance = await ExecuteControllerSetup(storedServerInstance);

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