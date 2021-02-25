import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

const localFile_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0 = "../../../../../../../../6. State/12/Other/2/Programming/Repository/3/1_0/LocalFile_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.json";

const objectScan = require('object-scan');

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
    localStorage = new LocalStorage('./scratch');
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

            console.log("AAA");

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

        //#region SERVER CONFIGURATION

        public static Step_X_X_Custom_Store_ServerDefaultSettingsToMemory_1_0(storylineDetails: Object): any {
            if (storylineDetails == undefined || storylineDetails == null) return;
            if (process.env.APP_ENV != "SERVER") return;

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

            const serverEnvironmentServerRoutesGET: Array<any> = serverEnvironment?.value?.SetupItemEnvironmentServer?.SetupItemTransportItemRoutesGET;

            //#endregion

            //#region EXECUTE THE VISION

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

            server.use(
                "/localstorage",
                express.static(localFile_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0, {
                    maxAge: "15d",
                    fallthrough: false
                })
            );

            //server.use(
            //    "/scripts",
            //    express.static(serverEnvironmentScriptPath, {
            //        maxAge: "15d",
            //        fallthrough: false
            //    })
            //);

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

            let storageResult:any = null;

            //#endregion

            //#region RECALL THE MEMORIES


            //#endregion

            //#region EXECUTE THE VISION

            //#region STORAGE
            
            // console.log("storageKey = " + storageKey);
            // console.log("storageValue = " + storageValue);
         

            if(localStorage)
            {
                switch(storageAction.toUpperCase())
                {
                    case "CREATE":
                    case "UPDATE":
                        localStorage.setItem(storageKey, JSON.stringify(storageValue));
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

            //#endregion

            //#region REPORT THE FEEDBACK

            return storageResult;

            //#endregion
        }

        //#endregion

        //#endregion
    }
}