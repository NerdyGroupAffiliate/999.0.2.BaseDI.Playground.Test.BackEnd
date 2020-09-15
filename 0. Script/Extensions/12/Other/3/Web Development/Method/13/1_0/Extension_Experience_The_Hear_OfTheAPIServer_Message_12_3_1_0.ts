import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

const objectScan = require('object-scan');

var express = null;

if (process.env.APP_ENV == "SERVER") {
    express = require("express");
}

export namespace BaseDI.BackEnd.Web_Development.Extensions_13 {
    export class Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0 {
        constructor() {

        }

        //#region SERVER SIDE CODE

        public static Step_X_X_Custom_Store_ServerDefaultSettingsToMemory_1_0(storylineDetails: Object): any
        {
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

        //#endregion
    }
}