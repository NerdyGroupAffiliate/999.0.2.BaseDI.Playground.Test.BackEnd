import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0"
import * as aClass_Programming_ScriptNicheMaster_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptNicheMaster_12_2_1_0"
import * as ExtraData_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";
import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

import * as Implement_DesignPattern_Factory_Master_12_2_1_0 from "../../../../../../../../1. Storyline/12/Other/2/Programming/Studio/1/1_0/ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

import * as LocalFile_Experience_MovementToFacebookPage_DataTransfer_2_3_1_0 from "../../../../../../../../6. State/2/Generate Brand Trust/3/Social Media/Repository/1/1_0/LocalFile_Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0";
import * as RemoteService_Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0 from "../../../../../../../../6. State/2/Generate Brand Trust/3/Social Media/Repository/1/1_0/RemoteService_Experience_The Movement_ToFacebookPage_DataTransfer_2_3_1_0";
import * as RemoteServiceVendor_Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0 from "../../../../../../../../6. State/2/Generate Brand Trust/3/Social Media/Repository/1/1_0/RemoteServiceVendor_Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0";

//import * as Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0 from "../../../../../../../../4. Experience/2/Movement/2/Generate Brand Trust/3/Social Media/Experience/1/1_0/Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0";

export namespace BaseDI.BackEnd.Story.Friendship_4 {
    export class FriendshipFactoryImplementer_NicheMaster_2_4_1_0 extends aClass_Programming_ScriptNicheMaster_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptNicheMaster_12_2_1_0<object>
    {
        //#region 1. Assign
        private _centralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _centralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;;
        private _centralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _clientORserverInstance: any;

        private _extraData: ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0;
        //#endregion

        //#region 2. Ready
        constructor(extraData: any) {
            super();

            //#region 1. Assign
            this._clientORserverInstance = null;

            this._extraData = extraData;

            this.Action = this.Action.bind(this);
            //#endregion

            //#region 2. Action
            //#endregion

            //#region 3. Observe
            //#endregion
        }
        //#endregion

        //#region 3. Set
        //#endregion

        //#region 4. Action
        public Action(clientORserverInstance: any, centralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>, centralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>, centralizedSensor:aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>, requestToResolve: Object, storylineDetails: Object, storylineDetails_Parameters: Object, requestName: String, requestToProcess: String, requestToProcessParameters: String): object
        {
            //#region ASSIGN MASTER LEADER
            this._centralizedStorer = centralizedStorer;
            this._centralizedDisturber = centralizedDisturber;
            this._centralizedSensor = centralizedSensor;

            this._clientORserverInstance = clientORserverInstance;  

            this._extraData.KeyValuePairs.setValue("APILocationLocalNodeJS", Object.assign(this.APILocationLocalNodeJS, Object));
            this._extraData.KeyValuePairs.setValue("APILocationLocalDotNetCore", Object.assign(this.APILocationLocalDotNetCore, Object));

            this._extraData.KeyValuePairs.setValue("APILocationRemote", Object.assign(this.APILocationRemote, Object));

            //#endregion

            //#region ASSIGN REQUEST HANDLER
            const requestType = requestToResolve;

            let resolvedRequest: object = new Object();

            switch (requestName.toUpperCase()) {
                case "EXPERIENCE_THE_MOVEMENT_TOFACEBOOKPAGE_DATATRANSFER_2_3_1_0":
                    resolvedRequest = this.Create_Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0(storylineDetails, storylineDetails_Parameters, this._extraData);

                    return resolvedRequest;
            }
            //#endregion

            return resolvedRequest;
        }

        //#region Page 1
        private Create_Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0(storylineDetails: Object, storylineDetails_Parameters: Object, extraData: any): object
        {
            //#region CHECK FOR MISTAKES
            
            let repositoryType: string = process.env.APP_SETTING_CONVERSION_MODE;

            if (repositoryType == undefined) repositoryType = "LOCAL_FILE";

            //#endregion

            //#region ASSIGN REQUEST HANDLER
            let experience:any = null; //new Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0.BaseDI.BackEnd.Experience.Movement.Social_Media_1.Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0(extraData);

            experience.ClientOrServerInstance = this._clientORserverInstance;

            experience.ExtraData = extraData;

            experience.MasterStorer = this._centralizedStorer;
            experience.MasterDisturber = this._centralizedDisturber;
            experience.MasterSensor = this._centralizedSensor;

            experience.StorylineDetails = storylineDetails;
            experience.StorylineDetails_Parameters = storylineDetails_Parameters;   
            //#endregion

            //#region ASSIGN LOGIC REPOSITORY
            switch (repositoryType.toUpperCase()) {
                case "LOCAL_FILE":
                    var localFile = new LocalFile_Experience_MovementToFacebookPage_DataTransfer_2_3_1_0.BaseDI.BackEnd.State.Social_Media_1.LocalFile_Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0(storylineDetails);

                    experience.Repository = localFile;

                    break;
                case "REMOTE_SERVICE":
                    var remoteService = new RemoteService_Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0.BaseDI.BackEnd.State.Social_Media_1.RemoteService_Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0(storylineDetails);

                    experience.Repository = remoteService;

                    break;
                case "REMOTESERVICEVENDOR":
                    var REMOTESERVICEVENDOR = new RemoteServiceVendor_Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0.BaseDI.BackEnd.State.Social_Media_1.RemoteServiceVendor_Experience_The_Movement_ToFacebookPage_DataTransfer_2_3_1_0(storylineDetails);

                    experience.Repository = REMOTESERVICEVENDOR;

                    break;
            }
            //#endregion

            return experience;
        }
        //#endregion

        //#endregion
    }
}