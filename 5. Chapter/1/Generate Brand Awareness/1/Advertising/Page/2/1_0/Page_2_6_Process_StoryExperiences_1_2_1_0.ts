import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptPage_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptPage_12_2_1_0";

import * as Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";
import * as Extension_Director_Of_Advertising_Chapter_1_1_Page_2_CreateWhereAPersonBecameAwareOfTopic_Handler_1_0 from "../../../../../../../../0. Script/Extensions/1/Generate Brand Awareness/1/Advertising/Method/2/1_0/Extension_Director_Of_Advertising_Chapter_1_1_Page_2_CreateWhereAPersonBecameAwareOfTopic_Handler_1_0";

import * as ExtraData_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";

import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

export namespace BaseDI.Professional.Chapter.Page.Advertising_2 {
    export class Page_2_6_Process_StoryExperiences_1_2_1_0 extends aClass_Programming_ScriptPage_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptPage_12_2_1_0 {
        //#region 1. Assign
        private _actionName: string = "";
        private _clientORserverInstance: any = null;

        private _jsonAccountInformation: any = null;
        private _jsonSearchInformation: any = null;

        private _request: any = null;
        private _response: any = null;

        //#endregion

        //#region 2. Ready
        constructor(storylineDetails: object, repository: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<any>) {
            super();

            //#region 1. Assign
            this.StorylineDetails = storylineDetails;
            this.Repository = repository;

            this.Action = this.Action.bind(this);

            //#endregion

            //#region 2. Action
            //#endregion

            //#region 3. Observe
            //#endregion
        }
        //#endregion

        //#region 3. Set
        public HandleDefaults(): void {
            this._request = this.ClientOrServerInstance.Request;
            this._response = this.ClientOrServerInstance.Response;
        }
        //#endregion

        //#region 4. Action
        public async Action(): Promise<object>
        {
            this._actionName = this?._clientORserverInstance["actionName"];

            if (this._actionName.toUpperCase().includes("PROCESSREQUEST_1_0")) {
                //#region VARIABLES


                //#endregion

                //#region VARIABLES

                this._jsonAccountInformation = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Professional.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(this.StorylineDetails, "searchkey", "AccountItem_SetSeller_Business_Management_AccountLookUp", false);
                this._jsonSearchInformation = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Professional.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(this.StorylineDetails, "searchkey", "HTMLSEOItem_SetSeller_CMS_SEO_MetaData", false);

                //#endregion

                //#region INPUTS

                this.HandleDefaults();

                this.Step_1_0_Framework_Output_AwarenessContentForTheDay_1_0();

            //#endregion

                //#region OUTPUT

            //#endregion
            }

            //Reference the MasterLeader.
            return await this.StorylineDetails;
        }
        //#endregion

        //#region THE VISION INSTRUCTIONS

        //#region Day 1

        public async Step_1_0_Framework_Output_AwarenessContentForTheDay_1_0()
        {
            const socialMediaChannelName: string = this._jsonAccountInformation?.value?.AccountItemSocialMediaDetails[0].AccountName;

            switch (socialMediaChannelName.toUpperCase()) {
                case "INSTAGRAM": //PAGE: 4-1-1
                    this.Step_1_0_Framework_Output_AwarenessContentForTheDay_1_0_Instagram();

                    break;
                case "FACEBOOK": //PAGE: 4-1-2
                    this.Step_1_0_Framework_Output_AwarenessContentForTheDay_1_0_Facebook();

                    break;
                case "YOUTUBE": //PAGE: 4-1-3
                    this.Step_1_0_Framework_Output_AwarenessContentForTheDay_1_0_YouTube();

                    break;

                case "LINKEDIN": //PAGE: 4-1-4
                    this.Step_1_0_Framework_Output_AwarenessContentForTheDay_1_0_LinkedIn();

                    break;

                case "AMAZON":  //PAGE: 4-1-5
                    this.Step_1_0_Framework_Output_AwarenessContentForTheDay_1_0_Amazon();

                    break;
            }
        }

        public Step_1_0_Framework_Output_AwarenessContentForTheDay_1_0_Instagram(): any
        {
            Extension_Director_Of_Advertising_Chapter_1_1_Page_2_CreateWhereAPersonBecameAwareOfTopic_Handler_1_0.BaseDI.Professional.Advertising.Extensions_2.Extension_Director_Of_Advertising_Chapter_1_1_Page_2_CreateWhereAPersonBecameAwareOfTopic_Handler_1_0.Step_X_X_Framework_Output_ContentToInstagram_1_0(this.StorylineDetails).then((data) => {
                this._response.json({ message: "Instagram Publish Done!" });

                console.log(data);
            }).catch((err) => {

                console.log("Error");
                console.log(err);

                this._response.json({ "error": err })
            });
        }

        public Step_1_0_Framework_Output_AwarenessContentForTheDay_1_0_Facebook(): any {

        }

        public Step_1_0_Framework_Output_AwarenessContentForTheDay_1_0_YouTube(): any {

        }

        public Step_1_0_Framework_Output_AwarenessContentForTheDay_1_0_LinkedIn(): any {

        }

        public Step_1_0_Framework_Output_AwarenessContentForTheDay_1_0_Amazon(): any {

        }

        //#endregion

        //#endregion
    }
}