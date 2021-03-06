import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

var oauth2 = null;
var OIDCStragety = null;

if (process.env.APP_ENV == "SERVER") {
    oauth2 = require("simple-oauth2");
    OIDCStragety = require("passport-azure-ad");
}

export namespace BaseDI.BackEnd.Security.Extensions_1 {
    export class Extension_Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0
    {
        constructor() {

        }

        //#region CLIENT SIDE CODE


        //#endregion

        //#region SERVER SIDE CODE

        public static Step_X_X_Custom_Store_ServerSecuritySettingsToMemory_1_0(server: any, storylineDetails: Object): void {
            if (server == undefined || server == null) return;
            if (storylineDetails == undefined || storylineDetails == null) return;

            //#region DESCRIBE THE MEMORIES

            let curlClient: any;

            let apiMetaData: any;

            let microsoftProfile: any = null;
            let microsoftProfileDetails: any = null;
            let microsoftProfileDetailsAPIEndPointsAndRoutes: any = null;
            let microsoftProfileDetailsSecurityAPISecurityDetails: any = null;
     
            //#endregion

            //#region RECALL THE MEMORIES

            apiMetaData = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(storylineDetails, "key_1", "APIS", false);

            microsoftProfile = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(apiMetaData, "searchkey", "SetupDetails_APIS_API_1_0_MicrosoftGraph_2_2_2_1_serverInformationSetupDetails", false);
            microsoftProfileDetails = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(microsoftProfile, "searchkey", "SetupItem_SetBuyer_ProductLaunching_Software_TransportEnvironment", false);
            microsoftProfileDetailsAPIEndPointsAndRoutes = microsoftProfileDetails.value.SetupItemAPIProfile.SetupItemAPIEndPointsAndRoutes;
            microsoftProfileDetailsSecurityAPISecurityDetails = microsoftProfileDetails.value.SetupItemAPIProfile.SetupItemAPISecurityDetails;

            //#endregion

            //#region EXECUTE THE VISION

            //#endregion

            //#region REPORT THE FEEDBACK

            //#endregion

        }

        //#endregion
    }
}