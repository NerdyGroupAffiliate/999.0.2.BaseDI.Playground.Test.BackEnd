import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptPage_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptPage_12_2_1_0";

import * as Enumeration_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0 from "../../../../../../../../0. Script/Enumerations/12/Other/2/Programming/Enumeration/3/1_0/Enumeration_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0";

import * as Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";
import * as Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/3/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0";

import * as Extension_Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/5/Security/Method/1/1_0/Extension_Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0";

import * as Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/3/Web Development/Method/13/1_0/Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0";

import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";
import { strict } from "assert";

export namespace BaseDI.Chapter.Page.Security_1 {
    export class Page_1_9_Verify_Process_12_5_1_0 extends aClass_Programming_ScriptPage_12_2_1_0.BaseDI.Programming.Abstract_1.aClass_Programming_ScriptPage_12_2_1_0 {
        //#region 1. Assign
        private _apiMetaData: any = null;
        private _actionName: string = "";

        private _entryPointName: string = "Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0";

        private _pageName: string = "Page_1_9_Verify_Process_12_5_1_0";
        private _processKey: string = "Page_1_9_Verify_Process_12_5_1_0";

        private _request: any = null;
        private _response: any = null;
        private _requestRoute: string = null;

        private _server: any = null;

        //#endregion

        //#region 2. Ready
        constructor(storylineDetails: object, repository: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<any>) {
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

            //#region CONTROL

            if (process.env.APP_ENV == "SERVER") {
                await this.Step_1_0_Custom_Control_ServerAuthenticationToAPI_1_0();
            }

            //#endregion

            //#endregion

            //#region REPORT THE FEEDBACK

            return this.StorylineDetails;

            //#endregion
        }

        //#region CLIENT SIDE CODE

        //#endregion

        //#region SERVER SIDE CODE

        //#region CONTROL

        public async Step_1_0_Custom_Control_ServerAuthenticationToAPI_1_0() {
            //#region DESCRIBE THE MEMORIES

            //#endregion

            //#region RECALL THE MEMORIES

            const storylineDetails: any = this.StorylineDetails;

            this._actionName = this?.ClientOrServerInstance["actionName"];
            this._apiMetaData = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(storylineDetails, "key_1", "APIS", false);

            this._request = this.ClientOrServerInstance?.Request;
            this._requestRoute = this._request?.route?.path;
            this._response = this.ClientOrServerInstance?.Response;

            this._server = this.ClientOrServerInstance?.Server;

            //#endregion

            //#region EXECUTE THE VISION

            //#region CONTROL

            if (this._server != undefined && this._server != null)
            {
                if (this._requestRoute.toUpperCase().includes("AUTHREQUEST") || this._actionName.toUpperCase().includes("AUTHREQUEST")) {
                    this.Step_2_0_Custom_Transport_ServerAuthenticationRequestToAPI_1_0();
                }

                if (this._requestRoute.toUpperCase().includes("AUTHRESPONSE") || this._actionName.toUpperCase().includes("AUTHRESPONSE")) {
                    this.Step_3_0_Custom_Output_ServerAuthenticationResponseFromAPI_1_0(null);
                }
            }

            //#endregion

            //#endregion

            //#region REPORT THE FEEDBACK

            //#endregion
        }

        //#endregion

        //#region TRANSPORT

        public async Step_2_0_Custom_Transport_ServerAuthenticationRequestToAPI_1_0() {

            //#region DESCRIBE THE MEMORIES
            let storedAPIPlatform: string = "";
            let storedAPIVerb: string = "POST";

            let storedCurlOptions: Object = new Object();

            let storedProfile: any = null;
            let storedProfileDetails: any = null;
            let storedProfileDetailsAPIEndPointsAndRoutes: any = null;
            let storedProfileDetailsSecurityAPISecurityDetails: any = null;

            let storedTokenEndpoint: string = "";
            let storedQueryStingKeyValues: any = null;

            //#endregion

            //#region RECALL THE MEMORIES

            //#endregion

            //#region EXECUTE THE VISION

            if (this._request != undefined && this._request != null) {
                //#region STORE api querystring value
                storedQueryStingKeyValues = Object.keys(this._request?.query);
                storedQueryStingKeyValues.map(storedQueryString => {
                    if (storedQueryString.toUpperCase() == "API") {
                        storedAPIPlatform = this._request?.query[storedQueryString]
                    }
                })
                //#endregion

                if (this._requestRoute != undefined && this._requestRoute != null) {
                    if (storedAPIPlatform != undefined && storedAPIPlatform != null) {
                        //#region SET api platform general values
                        storedProfile = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(this._apiMetaData, "searchkey", "SetupDetails_APIS_API_1_0_" + storedAPIPlatform + "_2_2_2_1_serverInformationSetupDetails", false);
                        storedProfileDetails = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(storedProfile, "searchkey", "SetupItem_SetBuyer_ProductLaunching_Software_TransportEnvironment", false);
                        storedProfileDetailsAPIEndPointsAndRoutes = storedProfileDetails.value.SetupItemAPIProfile.SetupItemAPIEndPointsAndRoutes;
                        storedProfileDetailsSecurityAPISecurityDetails = storedProfileDetails.value.SetupItemAPIProfile.SetupItemAPISecurityDetails;
                        //#endregion

                        //#region SET api platform specific values
                        switch (storedAPIPlatform.toUpperCase()) {
                            case "FACEBOOK":
                            case "FACEBOOKGRAPH":
                                storedTokenEndpoint = storedProfileDetailsAPIEndPointsAndRoutes.SetupItemAPIBaseEndpoint +  "/" + storedProfileDetailsAPIEndPointsAndRoutes.SetupItemAPITokenRoute;

                                break;
                            case "MICROSOFT":
                            case "MICROSOFTGRAPH":
                                storedCurlOptions["header"] = "Content-Type: application/x-www-form-urlencoded";
                                storedTokenEndpoint = storedProfileDetailsAPIEndPointsAndRoutes.SetupItemAPIBaseEndpoint + "/" + storedProfileDetailsSecurityAPISecurityDetails.SetupItemAPISecurityCustomerID + "/" + storedProfileDetailsAPIEndPointsAndRoutes.SetupItemAPITokenRoute;

                                break;
                        }
                        //#endregion

                        //#region BUILD curl request object
                        storedCurlOptions["data"] = [
                            "grant_type=client_credentials",
                            "client_id=" + storedProfileDetailsSecurityAPISecurityDetails.SetupItemAPISecurityAppID,
                            "client_secret=" + storedProfileDetailsSecurityAPISecurityDetails.SetupItemAPISecurityPassword,
                            storedProfileDetailsAPIEndPointsAndRoutes.SetupItemAPIScope.length > 0 ? "scope=" + storedProfileDetailsAPIEndPointsAndRoutes.SetupItemAPIScope : ""
                        ];  

                        //#endregion
                    }
                }
            }

            //#endregion

            //#region REPORT THE FEEDBACK

            //#region TRANSPORT curl request & handle response
            var self = this;

            Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.BaseDI.Web_Development.Extensions_13.Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.Step_X_X_Custom_Output_ServerResponseToCaller_1_0(this._server, storedTokenEndpoint, storedAPIVerb, storedCurlOptions,
                function callback(response) {
                    self.Step_3_0_Custom_Output_ServerAuthenticationResponseFromAPI_1_0(response, storedAPIPlatform);
                });

            //#endregion

            //#endregion
        }

        //#endregion

        //#region OUTPUT

        public async Step_3_0_Custom_Output_ServerAuthenticationResponseFromAPI_1_0(response: any, uniqueStorageKeyValue: any = null) {
            //#region DESCRIBE THE MEMORIES

            //#endregion

            //#region RECALL THE MEMORIES


            //#endregion

            //#region EXECUTE THE VISION         

            if (uniqueStorageKeyValue)
                await Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.BaseDI.Programming.Extensions_3.Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.Step_X_X_Custom_Control_LocalDataToServerMemory_1_0(this.MasterStorer, "Create", this._entryPointName, this._pageName, "STORING access token", this.StorylineDetails, response, "BaseDI_DataToken_" + uniqueStorageKeyValue);

            this._response.send(response);

            //#endregion  

            //#region REPORT THE FEEDBACK

            //#endregion
        }



        //#endregion

        //#endregion

        //#endregion
    }
}