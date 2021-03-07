import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";

import * as Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0 from "../../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/3/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0";

import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

const localFile_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0 = "../../../../../../../../6. State/12/Other/2/Programming/Repository/3/1_0/LocalFile_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.json";

var express = null;
var curl = null;
var oauth2 = null;
var OIDCStragety = null;
var localStorage = null;

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
}

export namespace BaseDI.BackEnd.Web_Development.Extensions_13 {
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

        //#region REST ACTION VERBS

        private static Step_X_X_Custom_Output_ServerResponseToCaller_1_1_DELETE(server: any, url: string, options: Object, callback: Function): any {

        }

        private static Step_X_X_Custom_Output_ServerResponseToCaller_1_1_GET(server: any, url: string, options: Object, callback: Function): any {
            //#region DESCRIBE THE MEMORIES

            let curlClient: any;

            //#endregion

            //#region RECALL THE MEMORIES

            curlClient = curl.connect();

            //#endregion

            //#region EXECUTE THE VISION

            curlClient.get("https://www.google.com/logos/2020/halloween20/rc1/messages.en.nocache.json", null, function (error, response) {
                console.log(response);
            });

            //get.get("http://www.microsoft.com", options, function (err, response, body) { });

            //#endregion

            //#region REPORT THE FEEDBACK

            //#endregion
        }

        private static Step_X_X_Custom_Output_ServerResponseToCaller_1_1_HEAD(server: any, url: string, options: Object, callback: Function): any {

        }

        private static Step_X_X_Custom_Output_ServerResponseToCaller_1_1_POST(server: any, url: string, options: Object, callback: Function): any {
            //#region DESCRIBE THE MEMORIES

            let curlClient: any;


            //#endregion

            //#region RECALL THE MEMORIES

            curlClient = curl.connect();

            //#endregion

            //#region EXECUTE THE VISION

            console.log(url);
            console.log(options);

            curlClient.post(url, options, function (error, response) {
                callback(response);
            });

            //#endregion

            //#region REPORT THE FEEDBACK

            //#endregion
        }

        private static Step_X_X_Custom_Output_ServerResponseToCaller_1_1_PUT(server: any, url: string, options: Object, callback: Function): any {

        }

        //#endregion

        //#endregion

        //#region SERVER ASSET MANAGEMENT

        public static async Step_X_X_Custom_Store_LocalFilesToServer_1_0(storylineDetails: object): Promise<any> {
            //#region DESCRIBE THE MEMORIES

            //#endregion

            //#region RECALL THE MEMORIES


            //#endregion

            //#region EXECUTE THE VISION

            var a = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(storylineDetails, "searchkey", "SetupItem_SetBuyer_ProductLaunching_Software_SenseEnvironment", false);

            var SetupItemEnvironmentServerMetaDataPaths = a.value.SetupItemEnvironmentServer.SetupItemEnvironmentServerMetaDataPaths;

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
                                        var shortDirName = fileDirName.replace(`C:\\Programming\\999.0.3.BaseDI.QuickStart.Templates\\`, '')
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
                                    var shortDirName = fileDirName.replace(`C:\\Programming\\999.0.3.BaseDI.QuickStart.Templates\\`, '')
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

            //#region REPORT THE FEEDBACK

            //#endregion
        }

        //#endregion

        //#region SERVER CONFIGURATION

        public static async Step_X_X_Custom_Store_ServerDefaultSettingsToMemory_1_0(storylineDetails: Object, masterLeader_masterStorerReference: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>, entryPointName: string, pageName: string = ""): Promise<any> {
            if (storylineDetails == undefined || storylineDetails == null) return; //REQUIRED VALUE
            if (process.env.APP_ENV != "SERVER") return; //REQUIRED VALUE
            if (entryPointName == undefined || entryPointName == null || entryPointName == "") return; //REQUIRED DIRECTOR or EXPREINCE FILE NAME without extension.

            //#region DESCRIBE THE MEMORIES

            let server: any = null;

            //#endregion

            //#region RECALL THE MEMORIES

            const serverEnvironment: any = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(storylineDetails, "searchkey", "SetupItem_SetBuyer_ProductLaunching_Software_TransportEnvironment", false);

            const serverEnvironmentName: number = serverEnvironment?.value?.SetupItemEnvironmentName;
            const serverEnvironmentPort: number = serverEnvironment?.value?.SetupItemEnvironmentPort;
            const serverEnvironmentDomainName: number = serverEnvironment?.value?.SetupItemEnvironmentDomainName;

            const serverEnvironmentBuildItemClientPath: string = serverEnvironment?.value?.SetupItemEnvironmentClient?.SetupItemBuildItemClientPath;
            const serverEnvironmentDataPath: string = serverEnvironment?.value?.SetupItemEnvironmentClient?.SetupItemDataPath;
            const serverEnvironmentDocumentPath: string = serverEnvironment?.value?.SetupItemEnvironmentClient?.SetupItemDocumentPath;
            const serverEnvironmentFontPath: string = serverEnvironment?.value?.SetupItemEnvironmentClient?.SetupItemFontPath;
            const serverEnvironmentImagePath: string = serverEnvironment?.value?.SetupItemEnvironmentClient?.SetupItemImagePath;
            const serverEnvironmentScriptPath: string = serverEnvironment?.value?.SetupItemEnvironmentClient?.SetupItemScriptPath;
            const serverEnvironmentScriptName: string = serverEnvironment?.value?.SetupItemEnvironmentClient?.SetupItemScriptName;
            const serverEnvironmentServerRoutesGET: Array<any> = serverEnvironment?.value?.SetupItemEnvironmentServer?.SetupItemTransportItemRoutesGET;
 
            //#endregion

            //#region EXECUTE THE VISION
            // Why it's undefined
            console.log(masterLeader_masterStorerReference)
            
            if (masterLeader_masterStorerReference != null)
                await Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.BaseDI.BackEnd.Programming.Extensions_3.Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.Step_X_X_Custom_Control_LocalDataToServerMemory_1_0(masterLeader_masterStorerReference, "Create", entryPointName, pageName, "STORING client side BaseDI script SOURCE PATH", storylineDetails, serverEnvironmentScriptName);


            //#region PICK THE SERVER

            server = express();

            //#endregion

            //#region SET VIEW ENGINE

            //SET PRESENTATION VIEWS

            //server.set('view engine', 'hbs');
            //server.set('views', viewPaths);

            //#endregion

            //#region SET STATIC FOLDERS

            //const viewsPath = path.join(__dirname, '../Templates');

            //server.use(
            //    "/data",
            //    express.static(serverEnvironmentDataPath, {
            //        maxAge: "15d",
            //        fallthrough: false
            //    })
            //);

            //server.use(
            //    "/documents",
            //    express.static(serverEnvironmentDocumentPath, {
            //        maxAge: "15d",
            //        fallthrough: false
            //    })
            //);

            //server.use(
            //    "/fonts",
            //    express.static(serverEnvironmentFontPath, {
            //        maxAge: "15d",
            //        fallthrough: false
            //    })
            //);

            server.use(
                "/images",
                express.static(serverEnvironmentImagePath, {
                    maxAge: "15d",
                    fallthrough: false
                })
            );

            //server.use(
            //    "/localstorage",
            //    express.static(localFile_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0, {
            //        maxAge: "15d",
            //        fallthrough: false
            //    })
            //);

            server.use(
                "/scripts",
                express.static(serverEnvironmentScriptPath, {
                    maxAge: "15d",
                    fallthrough: false
                })
            );

            //#endregion

            //#endregion

            //#region REPORT THE FEEDBACK

            server.get('/favicon.ico', (req, res) => res.status(204));

            return {
                Server:
                {
                    Instance: server,
                    Port: serverEnvironmentPort,
                    Verbs: {
                        Get: serverEnvironmentServerRoutesGET,
                        Post: "",
                        Put: "",
                        Delete: "",
                    }
                },

            };

            //#endregion
        }

        public static Step_X_X_Custom_Store_ServerDefaultSettingsToMemory_1_1(storylineDetails: Object): any {

        }

        //#endregion

        //#region SERVER LOCAL STORAGE

        public static Step_X_X_Custom_Outout_ServerLocalDataFromMemory_1_0(storageKey: String, storageValue: any): any
        {
            //#region DESCRIBE THE MEMORIES


            let storedValue: any;

            //#endregion

            //#region RECALL THE MEMORIES



            //#endregion

            //#region EXECUTE THE VISION

            if (localStorage) {
                storedValue = localStorage.getItem(storageKey);
            }

            //#endregion

            //#region REPORT THE FEEDBACK

            return storedValue;

            //#endregion
        }

        public static Step_X_X_Custom_Store_ServerLocalDataToMemory_1_0(storageAction: string, storageKey: String, storageValue: any) : any
        {
            //#region DESCRIBE THE MEMORIES

            let storedCRUDActionRead: boolean = false
            let storageResult: any = null;
            let storedObservation: any = null;
            let storedObservationFiltered: Object = {};
            let storedObservationKey: string = null;           

            //#endregion

            try
            {
                //#region RECALL THE MEMORIES
                storedObservationKey = (Object.keys(storageValue)[0]);

                if (storedObservationKey.toString().toUpperCase().includes("-READ")) {
                    storedCRUDActionRead = true;
                }

                storedObservationKey = storedObservationKey.toString().replace("-Create", "");
                storedObservationKey = storedObservationKey.toString().replace("-Read", "");
                storedObservationKey = storedObservationKey.toString().replace("-Update", "");
                storedObservationKey = storedObservationKey.toString().replace("-Delete", "");

                if (!storedCRUDActionRead) {
                    storedObservation = JSON.parse(storageValue[(Object.keys(storageValue)[0])]);

                    storedObservationFiltered[storedObservationKey] = storedObservation?.baseDIObservations[0];
                }

                //#endregion

                //#region EXECUTE THE VISION

                if (localStorage) {
                    switch (storageAction.toUpperCase()) {
                        case "CREATE":
                        case "UPDATE":
                            localStorage.setItem(storageKey, JSON.stringify(storedObservationFiltered));
                            break;
                        case "DELETE":
                            localStorage.removeItem(storageKey);
                            break;
                        case "READ":
                            storageResult = localStorage.getItem(storageKey);
                            break;

                    }
                }

                //#endregion
            }
            catch (e)
            {
                throw e;
            }

            //#region REPORT THE FEEDBACK

            return storageResult;

            //#endregion
        }

        //#endregion

        //#endregion
    }
}