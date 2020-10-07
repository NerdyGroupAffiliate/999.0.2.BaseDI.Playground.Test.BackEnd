import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptPage_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptPage_12_2_1_0";

import * as Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";
import * as Extension_Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/5/Security/Method/1/1_0/Extension_Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0";

import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

export namespace BaseDI.BackEnd.Chapter.Page.Security_1 {
    export class Page_1_9_Verify_Process_12_5_1_0 extends aClass_Programming_ScriptPage_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptPage_12_2_1_0 {
        //#region 1. Assign
        private _apiMetaData: any = null;

        private _request: any = null;
        private _response: any = null;
        private _requestRoute: string = null;

        private _server: any = null;
        //#endregion

        //#region 2. Ready
        constructor(storylineDetails: object, repository: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<any>) {
            super();

            //region 1. Assign
            this.StorylineDetails = storylineDetails;
            this.Repository = repository;

            this.Action = this.Action.bind(this);
  
            //region 2. Action

            //region 3. Observe
        }
        //#endregion

        //#region 3. Set
        //#endregion

        //#region 4. Action
        public async Action(): Promise<object> {
            //#region DESCRIBE THE MEMORIES

            //#endregion

            //#region RECALL THE MEMORIES

            //#endregion

            //#region EXECUTE THE VISION

            if (process.env.APP_ENV == "SERVER") {
                this.Step_1_0_Custom_Control_ServerAuthenticationRequestToAPI_1_0();
            }

            //#endregion

            //#region REPORT THE FEEDBACK

            return await this.StorylineDetails;

            //#endregion
        }

        //#region CLIENT SIDE CODE

        //#endregion

        //#region SERVER SIDE CODE

        public async Step_1_0_Custom_Control_ServerAuthenticationRequestToAPI_1_0() {
            //#region DESCRIBE THE MEMORIES

            //#endregion

            //#region RECALL THE MEMORIES

            const storylineDetails: any = this.StorylineDetails;

            const entryPointName: string = "Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0";

            this._apiMetaData = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(storylineDetails, "key_1", "APIS", false);

            this._request = this.Client?.Request;
            this._requestRoute = this._request?.route?.path;
            this._response = this.Client?.Response;

            this._server = this.Client?.Server;

            //#endregion

            //#region EXECUTE THE VISION

            if (this._server != undefined && this._server != null) {
                Extension_Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0.BaseDI.BackEnd.Security.Extensions_1.Extension_Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0.Step_X_X_Custom_Store_ServerSecuritySettingsToMemory_1_0(this._server, storylineDetails);
            }

            if (this._requestRoute.toUpperCase() == "/AUTHREQUEST") {
                this.Step_2_0_Custom_Transport_ServerAuthenticationRequestToAPI_1_0();
            }

            if (this._requestRoute.toUpperCase() == "/AUTHRESPONSE") {
                this.Step_3_0_Custom_Output_ServerAuthenticationResponseFromAPI_1_0();
            }

            //#endregion

            //#region REPORT THE FEEDBACK

            //#endregion
        }

        public async Step_2_0_Custom_Transport_ServerAuthenticationRequestToAPI_1_0() {

            //#region DESCRIBE THE MEMORIES

            //#endregion

            //#region RECALL THE MEMORIES

            //#endregion

            //#region EXECUTE THE VISION

            if (this._request != undefined && this._request != null) {
                const api: string = this._request?.query?.API;

                if (this._requestRoute != undefined && this._requestRoute != null) {
                    if (api != undefined && api != null) {
                        switch (api.toUpperCase()) {
                            case "MICROSOFT":
                            case "MICROSOFTGRAPH":
                                this.Step_2_1_Custom_Transport_ServerAuthenticationRequestToAPI_1_0_Microsoft();

                                break;
                        }
                    }
                }
            }

            //#endregion

            //#region REPORT THE FEEDBACK

            //#endregion
        }

        private async Step_3_0_Custom_Output_ServerAuthenticationResponseFromAPI_1_0() {
            //#region DESCRIBE THE MEMORIES

            //#endregion

            //#region RECALL THE MEMORIES

            //#endregion

            //#region EXECUTE THE VISION

            //#endregion

            //#region REPORT THE FEEDBACK

            //#endregion
        }

        //#region MICROSOFT

        private async Step_2_1_Custom_Transport_ServerAuthenticationRequestToAPI_1_0_Microsoft() {
            //#region DESCRIBE THE MEMORIES

            let microsoftProfile: any = null;
            let microsoftProfileDetails: any = null;
            let microsoftProfileDetailsAPIEndPointsAndRoutes: any = null;
            let microsoftProfileDetailsSecurityAPISecurityDetails: any = null;
           
            //#endregion

            //#region RECALL THE MEMORIES

            microsoftProfile = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(this._apiMetaData, "searchkey", "SetupDetails_APIS_API_1_0_MicrosoftGraph_2_2_2_1_serverInformationSetupDetails", false);
            microsoftProfileDetails = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(microsoftProfile, "searchkey", "SetupItem_SetBuyer_ProductLaunching_Software_TransportEnvironment", false);
            microsoftProfileDetailsAPIEndPointsAndRoutes = microsoftProfileDetails.value.SetupItemAPIProfile.SetupItemAPIEndPointsAndRoutes;
            microsoftProfileDetailsSecurityAPISecurityDetails = microsoftProfileDetails.value.SetupItemAPIProfile.SetupItemAPISecurityDetails;

            this._response.send(microsoftProfileDetailsSecurityAPISecurityDetails);

            //#endregion

            //#region EXECUTE THE VISION

            //#endregion

            //#region REPORT THE FEEDBACK

            //#endregion
        }

        private async Step_3_1_Custom_Output_ServerAuthenticationResponseFromAPI_1_0_Microsoft() {
            //#region DESCRIBE THE MEMORIES

            //#endregion

            //#region RECALL THE MEMORIES

            //#endregion

            //#region EXECUTE THE VISION

            //#endregion

            //#region REPORT THE FEEDBACK

            //#endregion
        }

        //#endregion

        //#endregion

        //#endregion
    }
}