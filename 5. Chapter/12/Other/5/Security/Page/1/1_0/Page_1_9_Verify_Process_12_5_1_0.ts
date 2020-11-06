import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptPage_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptPage_12_2_1_0";

import * as Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";
import * as Extension_Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/5/Security/Method/1/1_0/Extension_Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0";

import * as Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/3/Web Development/Method/13/1_0/Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0";

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

                if (this._requestRoute.toUpperCase() == "/AUTHREQUEST") {
                    this.Step_2_0_Custom_Transport_ServerAuthenticationRequestToAPI_1_0();
                }

                if (this._requestRoute.toUpperCase() == "/AUTHRESPONSE") {
                    this.Step_3_0_Custom_Output_ServerAuthenticationResponseFromAPI_1_0();
                }
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

            const Step_3_1_Custom_Output_ServerAuthenticationResponseFromAPI_1_0_Microsoft = (response) => {
                this.Step_3_2_Custom_Output_ServerAuthenticationResponseFromAPI_1_0_Microsoft(response);
            }

            Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.BaseDI.BackEnd.Web_Development.Extensions_13.Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.Step_X_X_Custom_Output_ServerResponseToCaller_1_0(this._server, microsoftTokenEndpoint, "POST", curlClientOptions, function callback(response) {
                Step_3_1_Custom_Output_ServerAuthenticationResponseFromAPI_1_0_Microsoft(response);
            });

            this._response.send(microsoftProfileDetailsSecurityAPISecurityDetails);

            //#endregion

            //#region EXECUTE THE VISION

            //#endregion

            //#region REPORT THE FEEDBACK

            //#endregion
        }

        private async Step_3_2_Custom_Output_ServerAuthenticationResponseFromAPI_1_0_Microsoft(response: any)
        {
            //#region DESCRIBE THE MEMORIES

            const entryPointName: string = "Director_Of_Security_Chapter_12_5_Page_1_ReadAuthenticationForAll_Handler_1_0";

            let observationItem: String = "";

            const observationPresentationTemplateItem: string = "";
            const observationBusinessTemplateItem: string = "{}";
            const observationServiceTemplateItem: string = "{}";
            const observationSecurityTemplateItem: string = "{}";
            const observationDataTemplateItem: string = '{ "dataResult": "{dataResult}" }';


            let storylineDetails: Object = null;

            //#endregion

            //#region RECALL THE MEMORIES

            observationItem = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Create_An_ObservationJsonNode_1_0(entryPointName, "Page_1_9_Verify_Process_12_5_1_0", "STORING access token", observationPresentationTemplateItem, observationBusinessTemplateItem, observationServiceTemplateItem, observationSecurityTemplateItem, observationDataTemplateItem);

            //#endregion

            //#region EXECUTE THE VISION

            observationItem = observationItem.replace('{dataResult}', escape(JSON.stringify(response)));
            const observation = observationItem;
            
            this.StorylineDetails.outputs[1].baseDIObservations.push(JSON.parse(observation.toString()));

            const payload: string = unescape(this.StorylineDetails?.outputs[1].baseDIObservations[0].baseDIObservations[0].observation.metadata[3].item.data[0].dataResult);

            console.log(JSON.parse(JSON.parse(payload).payload).access_token);

            //TEST ACCESS TOKEN OUTPUT
            storylineDetails = this.MasterStorer.Action_1_Begin_Process();

            console.log(storylineDetails);

            //#endregion

            //#region REPORT THE FEEDBACK

            //#endregion
        }

        //#endregion

        //#endregion

        //#endregion
    }
}