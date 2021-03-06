//0. SCRIPT - ABSTRACT, BASE & INTERFACE CLASSES
import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0"
import * as aClass_Programming_ScriptNicheMaster_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptNicheMaster_12_2_1_0"
import * as ExtraData_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";
import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

//1. STORYLINE - CORE FEATURES
import * as Implement_DesignPattern_Factory_Master_12_2_1_0 from "../../../../../../../../1. Storyline/12/Other/2/Programming/Studio/1/1_0/ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

//4. EXPERIENCES - SHARED FEATURES

//6. STATE - LOCAL REPOSITORIES
import * as LocalFile_Director_Of_CMS_Chapter_12_4_Page_1_CreateAssetTransportFromOnePlaceToAnotherAll_Handler_1_0 from "../../../../../../../../6. State/12/Other/4/CMS/Repository/1/1_0/LocalFile_Director_Of_CMS_Chapter_12_4_Page_1_CreateAssetTransportFromOnePlaceToAnotherAll_Handler_1_0";

//6. STATE - REMOTE REPOSITORIES
import * as RemoteService_Director_Of_CMS_Chapter_12_4_Page_1_CreateAssetTransportFromOnePlaceToAnotherAll_Handler_1_0 from "../../../../../../../../6. State/12/Other/4/CMS/Repository/1/1_0/RemoteService_Director_Of_CMS_Chapter_12_4_Page_1_CreateAssetTransportFromOnePlaceToAnotherAll_Handler_1_0";

//7. DIRECTOR - PROPRIETARY FEATURES
import * as Director_Of_CMS_Chapter_12_4_Page_1_CreateAssetTransportFromOnePlaceToAnotherAll_Handler_1_0 from "../../../../../../../../7. Director/12/Other/4/CMS/Director/1/1_0/Director_Of_CMS_Chapter_12_4_Page_1_CreateAssetTransportFromOnePlaceToAnotherAll_Handler_1_0";

export namespace BaseDI.BackEnd.Story.CMS_1 {
    export class CMSFactoryImplementer_NicheMaster_12_4_1_0 extends aClass_Programming_ScriptNicheMaster_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptNicheMaster_12_2_1_0<object>
    {
        //#region 1. Assign
        private _centralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _centralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;;
        private _centralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        private _client: any;

        private _extraData: ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0;

        private _requestName: String = "";
        //#endregion

        //#region 2. Ready
        constructor(extraData: any) {
            super();

            //#region 1. Assign
            this._client = null;

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
        public Action(client: any, centralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>, centralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>, centralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>, requestToResolve: Object, storylineDetails: Object, storylineDetails_Parameters: Object, requestName: String, requestToProcess: String, requestToProcessParameters: String): object
        {
            //#region ASSIGN MASTER LEADER
            this._centralizedStorer = centralizedStorer;
            this._centralizedDisturber = centralizedDisturber;
            this._centralizedSensor = centralizedSensor;
            this._client = client;

            this._extraData.KeyValuePairs.setValue("APILocationLocalNodeJS", Object.assign(this.APILocationLocalNodeJS, Object));
            this._extraData.KeyValuePairs.setValue("APILocationLocalDotNetCore", Object.assign(this.APILocationLocalDotNetCore, Object));

            this._extraData.KeyValuePairs.setValue("APILocationRemote", Object.assign(this.APILocationRemote, Object));

            this._extraData.KeyValuePairs.setValue("RequestToProcess", Object.assign(requestToProcess, Object))
            this._extraData.KeyValuePairs.setValue("RequestToProcessParameters", Object.assign(requestToProcessParameters, Object))

            //#endregion

            //#region ASSIGN REQUEST HANDLER

            const requestType = requestToResolve;
            let resolvedRequest: object = new Object();

            this._requestName = requestName;

            switch (this._requestName.toUpperCase())
            {
                case "DIRECTOR_OF_CMS_CHAPTER_12_4_PAGE_1_CREATEASSETTRANSPORTFROMONEPLACETOANOTHERALL_HANDLER_1_0":
                    resolvedRequest = this.Create_Director_Of_CMS_Chapter_12_4_Page_1_CreateAssetTransportFromOnePlaceToAnotherAll_Handler_1_0(storylineDetails, storylineDetails_Parameters, this._extraData);

                    break;
            }
            //#endregion

            return resolvedRequest;
        }

        //#region Page 1
        private Create_Director_Of_CMS_Chapter_12_4_Page_1_CreateAssetTransportFromOnePlaceToAnotherAll_Handler_1_0(storylineDetails: object, storylineDetails_Parameters: object, extraData: any): object {
            //#region CHECK FOR MISTAKES

            const repositoryMetaData: any = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(storylineDetails, "searchkey", "SetImplementer_ProductCreation_Software_Data", false);
            let repositoryType: string = repositoryMetaData?.value?.DataItemLocation;

            if (repositoryType == undefined) repositoryType = "LOCALFILE";

            //#endregion

            //#region ASSIGN REQUEST HANDLER
            let director = new Director_Of_CMS_Chapter_12_4_Page_1_CreateAssetTransportFromOnePlaceToAnotherAll_Handler_1_0.BaseDI.BackEnd.Director.CMS_1.Director_Of_CMS_Chapter_12_4_Page_1_CreateAssetTransportFromOnePlaceToAnotherAll_Handler_1_0(extraData);

            director.Client = this._client;

            director.ExtraData = extraData;

            director.MasterStorer = this._centralizedStorer;
            director.MasterDisturber = this._centralizedDisturber;
            director.MasterSensor = this._centralizedSensor;

            director.StorylineDetails = storylineDetails;
            director.StorylineDetails_Parameters = storylineDetails_Parameters;    
            //#endregion

            //#region ASSIGN LOGIC REPOSITORY
            switch (repositoryType.toUpperCase()) {
                case "LOCALFILE":
                    var localFile = new LocalFile_Director_Of_CMS_Chapter_12_4_Page_1_CreateAssetTransportFromOnePlaceToAnotherAll_Handler_1_0.BaseDI.BackEnd.State.CMS_1.LocalFile_Director_Of_CMS_Chapter_12_4_Page_1_CreateAssetTransportFromOnePlaceToAnotherAll_Handler_1_0(storylineDetails);

                    director.Repository = localFile;
                    director.Repository.RequestName = this._requestName;

                    break;
                case "REMOTESERVICE":
                    var remoteService = new RemoteService_Director_Of_CMS_Chapter_12_4_Page_1_CreateAssetTransportFromOnePlaceToAnotherAll_Handler_1_0.BaseDI.BackEnd.State.CMS_1.RemoteService_Director_Of_CMS_Chapter_12_4_Page_1_CreateAssetTransportFromOnePlaceToAnotherAll_Handler_1_0(storylineDetails);

                    director.Repository = remoteService;
                    director.Repository.RequestName = this._requestName;

                    break;
            }

            return director;
            //#endregion
        }

        //#endregion     

        //#endregion

    }
}