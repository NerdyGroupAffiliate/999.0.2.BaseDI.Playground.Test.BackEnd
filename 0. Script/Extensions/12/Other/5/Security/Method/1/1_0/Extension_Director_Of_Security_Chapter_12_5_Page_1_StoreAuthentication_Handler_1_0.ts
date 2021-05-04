//#region Imports

//#region 3rd Party

var oauth2 = null;
var OIDCStragety = null;

if (process.env.APP_ENV == "SERVER") {
    oauth2 = require("simple-oauth2");
    OIDCStragety = require("passport-azure-ad");
}

//#endregion

//#region BaseDI

import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

//#endregion

//#endregion

export namespace BaseDI.Professional.Security.Extensions_1 {
    export class Extension_Director_Of_Security_Chapter_12_5_Page_1_StoreAuthentication_Handler_1_0
    {
        constructor() {

        }
    }
}