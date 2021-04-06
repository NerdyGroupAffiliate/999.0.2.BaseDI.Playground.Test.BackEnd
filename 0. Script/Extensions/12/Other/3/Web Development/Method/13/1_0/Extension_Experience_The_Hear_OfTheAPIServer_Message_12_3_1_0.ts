import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";

import * as Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0 from "../../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/3/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0";

import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

import * as SingleParmPoco_12_2_1_0 from "../../../../../../../../../0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

import * as Collections from 'typescript-collections';

const localFile_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0 = "../../../../../../../../6. State/12/Other/2/Programming/Repository/3/1_0/LocalFile_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.json";

var express = null;
var curl = null;
var oauth2 = null;
var OIDCStragety = null;
var localStorage = null;
var passport = null;
var PassportFacebookStrategy = null;

if (process.env.APP_ENV == "SERVER") {
    express = require("express");

    oauth2 = require("simple-oauth2");
    OIDCStragety = require("passport-azure-ad");

    curl = require("curling");

    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./wwwroot/Server/State');

    var objectScan = require('copyfiles');
    var fs = require('fs');
    var path = require('path');

    passport = require("passport");
   // PassportFacebookStrategy = require('passport-facebook').Strategy;
}

export namespace BaseDI.Professional.Web_Development.Extensions_13 {
    export class Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0 {
        constructor() {

        }

        //#region SERVER SIDE CODE

        //#region SERVER API REQUEST

        public static Step_X_X_Custom_Output_ServerResponseToCaller_1_0(server: any, url: string, verbName: string, options: Object, callback: Function): any {
            if (server == undefined || server == null) return null;
            if (verbName == undefined || verbName == null || verbName == "") return null;

            switch (verbName.toUpperCase()) {
                case "DELETE":
                    return this.Step_X_X_Custom_Output_ServerResponseToCaller_1_1_DELETE(server, url, options, callback);
                case "GET":
                    return this.Step_X_X_Custom_Output_ServerResponseToCaller_1_1_GET(server, url, options, callback);
                case "HEAD":
                    return this.Step_X_X_Custom_Output_ServerResponseToCaller_1_1_HEAD(server, url, options, callback);
                case "POST":
                    return this.Step_X_X_Custom_Output_ServerResponseToCaller_1_1_POST(server, url, options, callback);
                case "PUT":
                    return this.Step_X_X_Custom_Output_ServerResponseToCaller_1_1_PUT(server, url, options, callback);
            }
        }

        public static Step_X_X_Custom_Output_ServerResponseToCaller_2_0(input: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0)
        {
            //#region VARIABLES


            //#endregion

            //#region VALUES

            //let storedCallbackURL: string = input.Parameters.getValue("callbackURL");
            //let storedClientID: string = input.Parameters.getValue("clientID");
            //let storedClientSecret: string = input.Parameters.getValue("clientSecret");

            //let storedStorylineDetails: Object = input.StorylineDetails;

            //let storedEntryPointName: string = input.EntryPointName;

            //let storedMasterLeader_MasterStorerReference: any = input.Parameters.getValue("masterStorerReference")

            //let storedPageName: string = input.PageName;

            //let storedStrategy: string = input.Parameters.getValue("strategy");
            //let storedStrategyInstance: any = null;

            //#endregion

            //#region INPUTS
            //const storedStrategyCallBack: any = (accessToken, refreshToken, profile, cb) => {
                // In this example, the user's Facebook profile is supplied as the user
                // record.  In a production-quality application, the Facebook profile should
                // be associated with a user record in the application's database, which
                // allows for account linking and authentication with other identity
                // providers.
            //    Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.BaseDI.Professional.Programming.Extensions_3.Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.Step_X_X_Custom_Control_LocalDataToServerMemory_1_0(storedMasterLeader_MasterStorerReference, "Create", storedEntryPointName, storedPageName, "STORING server side FACEBOOK TOKENS", storedStorylineDetails, { accessToken: accessToken, refreshToken: refreshToken, profile: profile }, "BaseDI_ConfigurationTokens_" + storedStrategy);

            //    return cb(null, profile);
            //};

            //switch (storedStrategy.toUpperCase()) {
            //    case "FACEBOOK":
            //        storedStrategyInstance = new PassportFacebookStrategy({ clientID: storedClientID, clientSecret: storedClientSecret, callbackURL: storedCallbackURL }, storedStrategyCallBack);
            //        break;
            //}

            //passport.use(storedStrategyInstance);
            //#endregion

            //#region OUTPUT

            //#endregion
        }

        public static Step_X_X_Custom_Output_ServerResponseToCaller_2_1(input: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) {
            let storedServer: any = input.Parameters.getValue("server");
            let storedStrategy: string = input.Parameters.getValue("strategy");
            let url: string = input.Parameters.getValue("url");
            let verbName: string = input.Parameters.getValue("verbName");
            let options: Object = input.Parameters.getValue("options");
        }
        //#region REST ACTION VERBS

        private static Step_X_X_Custom_Output_ServerResponseToCaller_1_1_DELETE(server: any, url: string, options: any, callback: Function): any {

        }

        private static Step_X_X_Custom_Output_ServerResponseToCaller_1_1_GET(server: any, url: string, options: any, callback: Function): any {
            //#region VARIABLES

            let storedCurlClient: any;
            let storedQueryString: string;

            //#endregion

            //#region VALUES

            storedCurlClient = curl.connect();

            //#endregion

            //#region INPUTS

            //console.log(url);
            //console.log(options);

            storedCurlClient.get(url, options, function (error, response) {
                callback(response);
            });

            //#endregion

            //#region OUTPUT

            //#endregion
        }

        private static Step_X_X_Custom_Output_ServerResponseToCaller_1_1_HEAD(server: any, url: string, options: any, callback: Function): any {

        }

        private static Step_X_X_Custom_Output_ServerResponseToCaller_1_1_POST(server: any, url: string, options: any, callback: Function): any {
            //#region VARIABLES

            let storedCurlClient: any;


            //#endregion

            //#region VALUES

            storedCurlClient = curl.connect();

            //#endregion

            //#region INPUTS

            //console.log(url);
            //console.log(options);

            storedCurlClient.post(url, options, function (error, response) {
                callback(response);
            });

            //#endregion

            //#region OUTPUT

            //#endregion
        }

        private static Step_X_X_Custom_Output_ServerResponseToCaller_1_1_PUT(server: any, url: string, options: Object, callback: Function): any {

        }

        //#endregion

        //#endregion

        //#region SERVER ASSET MANAGEMENT

        public static async Step_X_X_Custom_Store_LocalFilesToServer_1_0(storylineDetails: object): Promise<any> {
            //#region VARIABLES

            //#endregion

            //#region VALUES


            //#endregion

            //#region INPUTS

            var fileMetaData = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Professional.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(storylineDetails, "searchkey", "SetupItem_SetBuyer_ProductLaunching_Software_SenseEnvironment", false);

            if (fileMetaData == undefined || fileMetaData == null)
                fileMetaData = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Professional.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(storylineDetails, "searchkey", "Default_SetupItem_SetBuyer_ProductLaunching_Software_SenseEnvironment", false);

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
                // contentItems.forEach(contentItem => {
                //     console.log(contentItem)
                // });
            });

            //#endregion

            //#region OUTPUT

            //#endregion
        }

        //#endregion

        //#region SERVER CONFIGURATION

        public static async Step_X_X_Custom_Store_ServerDefaultSettingsToMemory_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<any>
        {
            //#region 1. INPUTS

            //#region VALIDATE input parameters

            const ValidateInputs = () =>
            {
                //#region 1. INPUTS

                //#region DEFINE process checkpoint

                let storedProcessCheckPointHit: boolean = false;

                //#endregion

                //#region DEFINE stored message

                let storedMessage: string = "";

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
                        if (parameterInputs.Parameters.getValue("appSettings") == null || parameterInputs.Parameters.getValue("appSettings") == undefined) {
                            storedMessage += "***parameterClientOrServerInstance*** must contain a key of ***appSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.setValue(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})"
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
                        console.log("***LEAKY PIPE*** PARSING parameter values failed!\n\n" + storedMessage);

                        throw new Error("***LEAKY PIPE*** PARSING parameter values failed!\n\n" + storedMessage);
                    }
                }
                else {
                    throw new Error("***LEAKY PIPE*** PARSING parameter values failed for [parameterInputs || parameterInputs.Parameters]. Values cannot be null or undefined.");
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
            ValidateInputs();

            //#endregion

            //#region MEMORIZE centralized processes

            let stored_CentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object> = parameterInputs.Parameters.getValue("parameterMasterStorer");
            //this._stored_CentralizedSensor = parameterCentralizedSensor;
            //this._stored_CentralizedStorer = parameterCentralizedStorer;

            //#endregion

            //#region MEMORIZE clientOrServer instance

            let storedClientORserverInstance: Object = parameterInputs.Parameters.getValue("parameterClientORserverInstance");

            //#endregion

            //#region MEMORIZE app settings

            let storedAppSettings: any = storedClientORserverInstance["appSettings"];

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = storedAppSettings.APP_SETTING_DEVELOPER_MODE ? storedAppSettings.APP_SETTING_DEVELOPER_MODE : false;

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

            const storedServerDetails: any = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Professional.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(storedStorylineDetails, "searchkey", "SetupItem_SetBuyer_ProductLaunching_Software_TransportEnvironment", false);

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
                storedClientORserverInstance["processStepNumber"] = storedClientORserverInstance["processStepNumber"] + 1;

                console.log("STEP " + storedClientORserverInstance["processStepNumber"] + " CONFIGURATING web server -> Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.Step_X_X_Custom_Store_ServerDefaultSettingsToMemory_1_0");
            }

            //#endregion

            //#region EDGE CASE - USE local storage

            if (stored_CentralizedStorer != null) {
                await Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.BaseDI.Professional.Programming.Extensions_3.Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.Step_X_X_Custom_Control_LocalDataToServerMemory_1_0(masterLeader_masterStorerReference, "Create", entryPointName, pageName, "STORING client side BaseDI script SOURCE PATH", storylineDetails, serverEnvironmentScriptName, "BaseDI_PresentationScript_SrcLocation");
                await Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.BaseDI.Professional.Programming.Extensions_3.Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.Step_X_X_Custom_Control_LocalDataToServerMemory_1_0(masterLeader_masterStorerReference, "Create", entryPointName, pageName, "STORING server side data CONVERSION REPOSITORY mode", storylineDetails, process.env.APP_SETTING_CONVERSION_MODE_12_3_WEBDEVELOPMENT_NICHE_MASTER, "BaseDI_DataConverter_Mode");
            }

            //#endregion

            //#region IDEAL CASE - USE express server

            storedServerInstance = express();

            //BROWSER fav icon
            storedServerInstance.get('/favicon.ico', (req, res) => res.status(204));

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

        public static Step_X_X_Custom_Store_ServerDefaultSettingsToMemory_1_1(storylineDetails: Object): any {

        }

        //#endregion

        //#region SERVER LOCAL STORAGE

        public static Step_X_X_Custom_Outout_ServerLocalDataFromMemory_1_0(storageKey: String, storageValue: any): any
        {
            //#region VARIABLES


            let storedValue: any;

            //#endregion

            //#region VALUES



            //#endregion

            //#region INPUTS

            if (localStorage) {
                storedValue = localStorage.getItem(storageKey);
            }

            //#endregion

            //#region OUTPUT

            return storedValue;

            //#endregion
        }

        //#endregion

        //#endregion
    }
}