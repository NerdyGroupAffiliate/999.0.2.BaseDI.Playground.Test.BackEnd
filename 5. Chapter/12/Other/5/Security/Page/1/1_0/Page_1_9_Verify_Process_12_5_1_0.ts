import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptPage_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptPage_12_2_1_0";

import * as Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";
import * as Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/3/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0";

import * as Extension_Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/5/Security/Method/1/1_0/Extension_Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0";

import * as Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/3/Web Development/Method/13/1_0/Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0";

import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

export namespace BaseDI.BackEnd.Chapter.Page.Security_1 {
    export class Page_1_9_Verify_Process_12_5_1_0 extends aClass_Programming_ScriptPage_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptPage_12_2_1_0 {
        //#region 1. Assign
        private _apiMetaData: any = null;

        private _entryPointName: string = "Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0";

        private _pageName: string = "Page_1_9_Verify_Process_12_5_1_0";
        private _processKey: string = "Page_1_9_Verify_Process_12_5_1_0";

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

            this._apiMetaData = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(storylineDetails, "key_1", "APIS", false);

            this._request = this.Client?.Request;
            this._requestRoute = this._request?.route?.path;
            this._response = this.Client?.Response;

            this._server = this.Client?.Server;

            //#endregion

            //#region EXECUTE THE VISION

            //#region CONTROL

            if (this._server != undefined && this._server != null) {
                Extension_Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0.BaseDI.BackEnd.Security.Extensions_1.Extension_Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0.Step_X_X_Custom_Store_ServerSecuritySettingsToMemory_1_0(this._server, storylineDetails);

                if (this._requestRoute.toUpperCase() == "/AUTHREQUEST") {
                    this.Step_2_0_Custom_Transport_ServerAuthenticationRequestToAPI_1_0();
                }

                if (this._requestRoute.toUpperCase() == "/AUTHRESPONSE") {
                    this.Step_3_0_Custom_Output_ServerAuthenticationResponseFromAPI_1_0();
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

        //#region MICROSOFT

        public async Step_2_1_Custom_Transport_ServerAuthenticationRequestToAPI_1_0_Microsoft() {
            //#region DESCRIBE THE MEMORIES

            let curlClientOptions: Object;

            let microsoftProfile: any = null;
            let microsoftProfileDetails: any = null;
            let microsoftProfileDetailsAPIEndPointsAndRoutes: any = null;
            let microsoftProfileDetailsSecurityAPISecurityDetails: any = null;

            let microsoftTokenEndpoint: string = "";

            //#endregion

            //#region RECALL THE MEMORIES

            microsoftProfile = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(this._apiMetaData, "searchkey", "SetupDetails_APIS_API_1_0_MicrosoftGraph_2_2_2_1_serverInformationSetupDetails", false);
            microsoftProfileDetails = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(microsoftProfile, "searchkey", "SetupItem_SetBuyer_ProductLaunching_Software_TransportEnvironment", false);
            microsoftProfileDetailsAPIEndPointsAndRoutes = microsoftProfileDetails.value.SetupItemAPIProfile.SetupItemAPIEndPointsAndRoutes;
            microsoftProfileDetailsSecurityAPISecurityDetails = microsoftProfileDetails.value.SetupItemAPIProfile.SetupItemAPISecurityDetails;

            curlClientOptions = {
                header: [
                    "Content-Type: application/x-www-form-urlencoded"],
                data: [
                    "grant_type=client_credentials",
                    "client_id=" + microsoftProfileDetailsSecurityAPISecurityDetails.SetupItemAPISecurityAppID,
                    "client_secret=" + microsoftProfileDetailsSecurityAPISecurityDetails.SetupItemAPISecurityPassword,
                    "scope=" + microsoftProfileDetailsAPIEndPointsAndRoutes.SetupItemAPIScope
                ]
            }

            microsoftTokenEndpoint = microsoftProfileDetailsAPIEndPointsAndRoutes.SetupItemAPIBaseEndpoint + microsoftProfileDetailsSecurityAPISecurityDetails.SetupItemAPISecurityCustomerID + microsoftProfileDetailsAPIEndPointsAndRoutes.SetupItemAPITokenRoute;

            //#endregion

            //#region EXECUTE THE VISION

            //#region TRANSPORT
            var self = this;

            Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.BaseDI.BackEnd.Web_Development.Extensions_13.Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.Step_X_X_Custom_Output_ServerResponseToCaller_1_0(this._server, microsoftTokenEndpoint, "POST", curlClientOptions, 
            function callback(response) {
                 self.Step_3_1_Custom_Output_ServerAuthenticationResponseFromAPI_1_0_Microsoft(response, microsoftProfileDetailsSecurityAPISecurityDetails);
            });

            //#endregion

            //#endregion

            //#region REPORT THE FEEDBACK

            //#endregion
        }

        //#endregion

        //#endregion

        //#region OUTPUT

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

        private async Step_3_1_Custom_Output_ServerAuthenticationResponseFromAPI_1_0_Microsoft(response: any, extraData: any = null) {
            //#region DESCRIBE THE MEMORIES

            //#endregion

            //#region RECALL THE MEMORIES


            //#endregion

            //#region EXECUTE THE VISION
            // this.MasterStorer.CallBack = () => {
            //     Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.BaseDI.BackEnd.Programming.Extensions_3.Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.Step_X_X_Custom_Control_LocalDataToServerMemory_1_0(this, "Read", this._entryPointName, this._pageName, "READING access token", this.StorylineDetails, null);
            //     this._response.send(extraData);
            // }

            // Setting the baseDIObservations Array
           
            
            await Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.BaseDI.BackEnd.Programming.Extensions_3.Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.Step_X_X_Custom_Control_LocalDataToServerMemory_1_0(this, "Create", this._entryPointName, this._pageName, "STORING access token", this.StorylineDetails, response);
           
            var read1 = await Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.BaseDI.BackEnd.Programming.Extensions_3.Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.Step_X_X_Custom_Control_LocalDataToServerMemory_1_0(this, "Read", this._entryPointName, this._pageName, "READING access token", this.StorylineDetails, response);
           
            
            await Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.BaseDI.BackEnd.Programming.Extensions_3.Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.Step_X_X_Custom_Control_LocalDataToServerMemory_1_0(this, "Update", this._entryPointName, this._pageName, "UPDATING access token", this.StorylineDetails, response);
           
            
            var read2 = await Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.BaseDI.BackEnd.Programming.Extensions_3.Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.Step_X_X_Custom_Control_LocalDataToServerMemory_1_0(this, "Read", this._entryPointName, this._pageName, "READING access token", this.StorylineDetails, response);
      
            
            await Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.BaseDI.BackEnd.Programming.Extensions_3.Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.Step_X_X_Custom_Control_LocalDataToServerMemory_1_0(this, "Delete", this._entryPointName, this._pageName, "DELETING access token", this.StorylineDetails, response);
           
            
            

            //#endregion  

            //#region REPORT THE FEEDBACK

            //#endregion
        }

        //#endregion

        //#endregion

        //#endregion

        //#endregion
    }
}