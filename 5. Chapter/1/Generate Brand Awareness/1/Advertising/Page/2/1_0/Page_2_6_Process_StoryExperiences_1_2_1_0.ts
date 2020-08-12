import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptPage_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptPage_12_2_1_0";

import * as Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";
import * as Extension_Director_Of_Advertising_Chapter_1_1_Page_2_CreateWhereAPersonBecameAwareOfTopic_Handler_1_0 from "../../../../../../../../0. Script/Extensions/1/Generate Brand Awareness/1/Advertising/Method/2/1_0/Extension_Director_Of_Advertising_Chapter_1_1_Page_2_CreateWhereAPersonBecameAwareOfTopic_Handler_1_0";

import * as ExtraData_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";

import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

export namespace BaseDI.BackEnd.Chapter.Page.Advertising_2 {
    export class Page_2_6_Process_StoryExperiences_1_2_1_0 extends aClass_Programming_ScriptPage_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptPage_12_2_1_0 {
        //#region 1. Assign

        private _jsonAccountInformation: any = null;
        private _jsonSearchInformation: any = null;

        private _request: any = null;
        private _response: any = null;

        //#endregion

        //#region 2. Ready
        constructor(storylineDetails: object, repository: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<any>) {
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
        private HandleDefaults(): void {
            this._request = this.Client.Request;
            this._response = this.Client.Response;
        }
        //#endregion

        //#region 4. Action
        public async Action(): Promise<object>
        {
            //#region DESCRIBE THE MEMORIES


            //#endregion

            //#region RECALL THE MEMORIES

            this.HandleDefaults();

            this._jsonAccountInformation = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(this.StorylineDetails, "searchkey", "AccountItem_SetSeller_Business_Management_AccountLookUp", false);
            this._jsonSearchInformation = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(this.StorylineDetails, "searchkey", "HTMLSEOItem_SetSeller_CMS_SEO_MetaData", false);

            //#endregion

            this.MasterStorer.StorylineDetails = this.StorylineDetails;
            this.MasterStorer.Action_1_Begin_Process();
            
            //#region EXECUTE THE VISION
            this.Step_1_0_Custom_Output_AwarenessGeneratedForDay1_1_0();
            this.Step_2_0_Custom_Output_AwarenessGeneratedForDay2_1_0();
            this.Step_3_0_Custom_Output_AwarenessGeneratedForDay3_1_0(this.StorylineDetails, this.ExtraData);
            this.Step_4_0_Custom_Output_AwarenessGeneratedForDay4_1_0(this.StorylineDetails, this.ExtraData);
            this.Step_5_0_Custom_Output_AwarenessGeneratedForDay5_1_0(this.StorylineDetails, this.ExtraData);
            this.Step_6_0_Custom_Output_AwarenessGeneratedForDay6_1_0(this.StorylineDetails, this.ExtraData);
            this.Step_7_0_Custom_Output_AwarenessGeneratedForDay7_1_0(this.StorylineDetails, this.ExtraData);
            this.Step_8_0_Custom_Output_AwarenessGeneratedForDay8_1_0(this.StorylineDetails, this.ExtraData);
            this.Step_9_0_Custom_Output_AwarenessGeneratedForDay9_1_0(this.StorylineDetails, this.ExtraData);
            this.Step_10_0_Custom_Output_AwarenessGeneratedForDay10_1_0(this.StorylineDetails, this.ExtraData);
            this.Step_11_0_Custom_Output_AwarenessGeneratedForDay11_1_0(this.StorylineDetails, this.ExtraData);
            this.Step_12_0_Custom_Output_AwarenessGeneratedForDay12_1_0(this.StorylineDetails, this.ExtraData);
            this.Step_13_0_Custom_Output_AwarenessGeneratedForDay13_1_0(this.StorylineDetails, this.ExtraData);
            this.Step_14_0_Custom_Output_AwarenessGeneratedForDay14_1_0(this.StorylineDetails, this.ExtraData);

            //#endregion

            //#region REPORT THE FEEDBACK

            //#endregion

            //Reference the MasterLeader.
            return await this.StorylineDetails;
        }
        //#endregion

        //#region THE VISION INSTRUCTIONS

        //#region Day 1

        public async Step_1_0_Custom_Output_AwarenessGeneratedForDay1_1_0() {
            await this.Step_1_1_Custom_Output_AwarenessGeneratedForDay1_1_0_Instagram();
        }

        public async Step_1_1_Custom_Output_AwarenessGeneratedForDay1_1_0_Instagram()
        {
            Extension_Director_Of_Advertising_Chapter_1_1_Page_2_CreateWhereAPersonBecameAwareOfTopic_Handler_1_0.BaseDI.BackEnd.Advertising.Extensions_2.Extension_Director_Of_Advertising_Chapter_1_1_Page_2_CreateWhereAPersonBecameAwareOfTopic_Handler_1_0.Step_1_0_Custom_Transport_ContentToInstagram_1_0(this.StorylineDetails).then((data) =>
            {
                console.log(this._response);

                this._response.json({ message: "Instagram Publish Done!" });
            }).catch((err) => {
                this._response.json({ "error": err })
            });
        }

        public Step_1_2_Custom_Output_AwarenessGeneratedForDay1_1_0_Facebook(): any {

        }

        public Step_1_3_Custom_Output_AwarenessGeneratedForDay1_1_0_YouTube(): any {

        }

        public Step_1_4_Custom_Output_AwarenessGeneratedForDay1_1_0_LinkedIn(): any {

        }

        public Step_1_5_Custom_Output_AwarenessGeneratedForDay1_1_0_Amazon(): any {

        }

        //#endregion

        //#region Day 2

        public async Step_2_0_Custom_Output_AwarenessGeneratedForDay2_1_0() {

        }

        public Step_2_1_Custom_Output_AwarenessGeneratedForDay2_1_0_Instagram(): any {

        }

        public Step_2_2_Custom_Output_AwarenessGeneratedForDay2_1_0_Facebook(): any {

        }

        public Step_2_3_Custom_Output_AwarenessGeneratedForDay2_1_0_YouTube(): any {

        }

        public Step_2_4_Custom_Output_AwarenessGeneratedForDay2_1_0_LinkedIn(): any {

        }

        public Step_2_5_Custom_Output_AwarenessGeneratedForDay2_1_0_Amazon(): any {

        }

        //#endregion

        //#region Day 3

        public Step_3_0_Custom_Output_AwarenessGeneratedForDay3_1_0(storylineDetails, extraData): any {

        }

        public Step_3_1_Custom_Output_AwarenessGeneratedForDay3_1_0_Instagram(): any {

        }

        public Step_3_2_Custom_Output_AwarenessGeneratedForDay3_1_0_Facebook(): any {

        }

        public Step_3_3_Custom_Output_AwarenessGeneratedForDay3_1_0_YouTube(): any {

        }

        public Step_3_4_Custom_Output_AwarenessGeneratedForDay3_1_0_LinkedIn(): any {

        }

        public Step_3_5_Custom_Output_AwarenessGeneratedForDay3_1_0_Amazon(): any {

        }

        //#endregion

        //#region Day 4

        public Step_4_0_Custom_Output_AwarenessGeneratedForDay4_1_0(storylineDetails, extraData): any {

        }

        public Step_4_1_Custom_Output_AwarenessGeneratedForDay4_1_0_Instagram(): any {

        }

        public Step_4_2_Custom_Output_AwarenessGeneratedForDay4_1_0_Facebook(): any {

        }

        public Step_4_3_Custom_Output_AwarenessGeneratedForDay4_1_0_YouTube(): any {

        }

        public Step_4_4_Custom_Output_AwarenessGeneratedForDay4_1_0_LinkedIn(): any {

        }

        public Step_4_5_Custom_Output_AwarenessGeneratedForDay4_1_0_Amazon(): any {

        }

        //#endregion

        //#region Day 5

        public Step_5_0_Custom_Output_AwarenessGeneratedForDay5_1_0(storylineDetails, extraData): any {

        }

        public Step_5_1_Custom_Output_AwarenessGeneratedForDay5_1_0_Instagram(): any {

        }

        public Step_5_2_Custom_Output_AwarenessGeneratedForDay5_1_0_Facebook(): any {

        }

        public Step_5_3_Custom_Output_AwarenessGeneratedForDay5_1_0_YouTube(): any {

        }

        public Step_5_4_Custom_Output_AwarenessGeneratedForDay5_1_0_LinkedIn(): any {

        }

        public Step_5_5_Custom_Output_AwarenessGeneratedForDay5_1_0_Amazon(): any {

        }

        //#endregion

        //#region Day 6

        public Step_6_0_Custom_Output_AwarenessGeneratedForDay6_1_0(storylineDetails, extraData): any {

        }

        public Step_6_1_Custom_Output_AwarenessGeneratedForDay6_1_0_Instagram(): any {

        }

        public Step_6_2_Custom_Output_AwarenessGeneratedForDay6_1_0_Facebook(): any {

        }

        public Step_6_3_Custom_Output_AwarenessGeneratedForDay6_1_0_YouTube(): any {

        }

        public Step_6_4_Custom_Output_AwarenessGeneratedForDay6_1_0_LinkedIn(): any {

        }

        public Step_6_5_Custom_Output_AwarenessGeneratedForDay6_1_0_Amazon(): any {

        }

        //#endregion

        //#region Day 7

        public Step_7_0_Custom_Output_AwarenessGeneratedForDay7_1_0(storylineDetails, extraData): any {

        }

        public Step_7_1_Custom_Output_AwarenessGeneratedForDay7_1_0_Instagram(): any {

        }

        public Step_7_2_Custom_Output_AwarenessGeneratedForDay7_1_0_Facebook(): any {

        }

        public Step_7_3_Custom_Output_AwarenessGeneratedForDay7_1_0_YouTube(): any {

        }

        public Step_7_4_Custom_Output_AwarenessGeneratedForDay7_1_0_LinkedIn(): any {

        }

        public Step_7_5_Custom_Output_AwarenessGeneratedForDay7_1_0_Amazon(): any {

        }

        //#endregion

        //#region Day 8

        public Step_8_0_Custom_Output_AwarenessGeneratedForDay8_1_0(storylineDetails, extraData): any {

        }

        public Step_8_1_Custom_Output_AwarenessGeneratedForDay8_1_0_Instagram(): any {

        }

        public Step_8_2_Custom_Output_AwarenessGeneratedForDay8_1_0_Facebook(): any {

        }

        public Step_8_3_Custom_Output_AwarenessGeneratedForDay8_1_0_YouTube(): any {

        }

        public Step_8_4_Custom_Output_AwarenessGeneratedForDay8_1_0_LinkedIn(): any {

        }

        public Step_8_5_Custom_Output_AwarenessGeneratedForDay8_1_0_Amazon(): any {

        }

        //#endregion

        //#region Day 9

        public Step_9_0_Custom_Output_AwarenessGeneratedForDay9_1_0(storylineDetails, extraData): any {

        }

        public Step_9_1_Custom_Output_AwarenessGeneratedForDay9_1_0_Instagram(): any {

        }

        public Step_9_2_Custom_Output_AwarenessGeneratedForDay9_1_0_Facebook(): any {

        }

        public Step_9_3_Custom_Output_AwarenessGeneratedForDay9_1_0_YouTube(): any {

        }

        public Step_9_4_Custom_Output_AwarenessGeneratedForDay9_1_0_LinkedIn(): any {

        }

        public Step_9_5_Custom_Output_AwarenessGeneratedForDay9_1_0_Amazon(): any {

        }

        //#endregion

        //#region Day 10

        public Step_10_0_Custom_Output_AwarenessGeneratedForDay10_1_0(storylineDetails, extraData): any {

        }

        public Step_10_1_Custom_Output_AwarenessGeneratedForDay10_1_0_Instagram(): any {

        }

        public Step_10_2_Custom_Output_AwarenessGeneratedForDay10_1_0_Facebook(): any {

        }

        public Step_10_3_Custom_Output_AwarenessGeneratedForDay10_1_0_YouTube(): any {

        }

        public Step_10_4_Custom_Output_AwarenessGeneratedForDay10_1_0_LinkedIn(): any {

        }

        public Step_10_5_Custom_Output_AwarenessGeneratedForDay10_1_0_Amazon(): any {

        }

        //#endregion

        //#region Day 11

        public Step_11_0_Custom_Output_AwarenessGeneratedForDay11_1_0(storylineDetails, extraData): any {

        }

        public Step_11_1_Custom_Output_AwarenessGeneratedForDay11_1_0_Instagram(): any {

        }

        public Step_11_2_Custom_Output_AwarenessGeneratedForDay11_1_0_Facebook(): any {

        }

        public Step_11_3_Custom_Output_AwarenessGeneratedForDay11_1_0_YouTube(): any {

        }

        public Step_11_4_Custom_Output_AwarenessGeneratedForDay11_1_0_LinkedIn(): any {

        }

        public Step_11_5_Custom_Output_AwarenessGeneratedForDay11_1_0_Amazon(): any {

        }

        //#endregion

        //#region Day 12

        public Step_12_0_Custom_Output_AwarenessGeneratedForDay12_1_0(storylineDetails, extraData): any {

        }

        public Step_12_1_Custom_Output_AwarenessGeneratedForDay12_1_0_Instagram(): any {

        }

        public Step_12_2_Custom_Output_AwarenessGeneratedForDay12_1_0_Facebook(): any {

        }

        public Step_12_3_Custom_Output_AwarenessGeneratedForDay12_1_0_YouTube(): any {

        }

        public Step_12_4_Custom_Output_AwarenessGeneratedForDay12_1_0_LinkedIn(): any {

        }

        public Step_12_5_Custom_Output_AwarenessGeneratedForDay12_1_0_Amazon(): any {

        }

        //#endregion

        //#region Day 13

        public Step_13_0_Custom_Output_AwarenessGeneratedForDay13_1_0(storylineDetails, extraData): any {

        }

        public Step_13_1_Custom_Output_AwarenessGeneratedForDay13_1_0_Instagram(): any {

        }

        public Step_13_2_Custom_Output_AwarenessGeneratedForDay13_1_0_Facebook(): any {

        }

        public Step_13_3_Custom_Output_AwarenessGeneratedForDay13_1_0_YouTube(): any {

        }

        public Step_13_4_Custom_Output_AwarenessGeneratedForDay13_1_0_LinkedIn(): any {

        }

        public Step_13_5_Custom_Output_AwarenessGeneratedForDay13_1_0_Amazon(): any {

        }

        //#endregion

        //#region Day 14

        public Step_14_0_Custom_Output_AwarenessGeneratedForDay14_1_0(storylineDetails, extraData): any {

        }

        public Step_14_1_Custom_Output_AwarenessGeneratedForDay14_1_0_Instagram(): any {

        }

        public Step_14_2_Custom_Output_AwarenessGeneratedForDay14_1_0_Facebook(): any {

        }

        public Step_14_3_Custom_Output_AwarenessGeneratedForDay14_1_0_YouTube(): any {

        }

        public Step_14_4_Custom_Output_AwarenessGeneratedForDay14_1_0_LinkedIn(): any {

        }

        public Step_14_5_Custom_Output_AwarenessGeneratedForDay14_1_0_Amazon(): any {

        }

        //#endregion

        //#endregion
    }
}