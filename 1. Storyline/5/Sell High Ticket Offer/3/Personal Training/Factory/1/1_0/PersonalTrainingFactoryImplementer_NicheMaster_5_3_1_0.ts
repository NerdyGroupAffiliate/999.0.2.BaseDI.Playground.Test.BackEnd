import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0"
import * as aClass_Programming_ScriptNicheMaster_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptNicheMaster_12_2_1_0"
import * as ExtraData_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";
import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";
import * as Implement_DesignPattern_Factory_Master_12_2_1_0 from "../../../../../../../../1. Storyline/12/Other/2/Programming/Studio/1/1_0/ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

//import * as LocalFile_Director_Of_Advertising_Chapter_1_1_Page_1_CreateAdvertisementForAll_Handler_1_0 from "../../../../../../../../6. State/1/Generate Brand Awareness/1/Advertising/Repository/1/1_0/LocalFile_Director_Of_Advertising_Chapter_1_1_Page_1_CreateAdvertisementForAll_Handler_1_0";
//import * as RemoteService_Director_Of_Advertising_Chapter_1_1_Page_1_CreateAdvertisementForAll_Handler_1_0 from "../../../../../../../../6. State/1/Generate Brand Awareness/1/Advertising/Repository/1/1_0/RemoteService_Director_Of_Advertising_Chapter_1_1_Page_1_CreateAdvertisementForAll_Handler_1_0";

//import * as Director_Of_Productivity_Chapter_1_1_Page_1_XXXXX_Handler_1_0 from "../../../../../../../../7. Director/1/Generate Brand Awareness/1/Advertising/Director/1/1_0/Director_Of_Advertising_Chapter_1_1_Page_1_CreateAdvertisementForAll_Handler_1_0";

export namespace BaseDI.Story.Personal_Training_3 {
    export class PersonalTrainingFactoryImplementer_NicheMaster_5_3_1_0 extends aClass_Programming_ScriptNicheMaster_12_2_1_0.BaseDI.Programming.Abstract_1.aClass_Programming_ScriptNicheMaster_12_2_1_0<object>
    {
        //#region 1. Assign
        private _centralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _centralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;;
        private _centralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _clientORserverInstance: any;

        private _extraData: ExtraData_12_2_1_0.BaseDI.Script.Programming.Poco_1.ExtraData_12_2_1_0;
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
        public Action(clientORserverInstance: any, centralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>, centralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>, centralizedSensor:aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>, requestToResolve: Object, storylineDetails: Object, storylineDetails_Parameters: Object, requestName: String, requestToProcess: String, requestToProcessParameters: String): object {
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

            //#switch (requestName.toUpperCase()) {
            //#    case "DIRECTOR_OF_ADVERTISING_CHAPTER_1_1_PAGE_1_CREATEADVERTISEMENTFORALL_HANDLER_1_0":
            //#        resolvedRequest = this.Create_Director_Of_Advertising_Chapter_1_1_Page_1_CreateAdvertisement_1_0(storylineDetails, storylineDetails_Parameters, this._extraData);

            //#        return resolvedRequest;
            //#}
            //#endregion

            return resolvedRequest;
        }

        //#region Page 1
        private Create_Director_Of_Advertising_Chapter_1_1_Page_1_CreateAdvertisement_1_0(storylineDetails: object, storylineDetails_Parameters: object, extraData: any): object {
            //#region CHECK FOR MISTAKES

            //let repositoryType: string = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Core.Code.Script.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_The_DataRespository_1_0(storylineDetails, false, true);

            //if (repositoryType == undefined) repositoryType = "LOCAL_FILE";

            //#endregion

            //#region ASSIGN REQUEST HANDLER
            //#let director = new Director_Of_Advertising_Chapter_1_1_Page_1_CreateAdvertisementForAll_Handler_1_0.BaseDI.Director.Advertising_.Director_Of_Advertising_Chapter_1_1_Page_1_CreateAdvertisementForAll_Handler_1_0(extraData);

            //#director.ClientOrServerInstance = this._clientORserverInstance;

            //#director.ExtraData = extraData;

            //director.MasterStorer = this._centralizedStorer;
            //director.MasterDisturber = this._centralizedDisturber;
            //director.MasterSensor = this._centralizedSensor;

            //#director.StorylineDetails = storylineDetails;
            //#director.StorylineDetails_Parameters = storylineDetails_Parameters;    
            //#endregion

            //#region ASSIGN LOGIC REPOSITORY
            //#switch (repositoryType.toUpperCase()) {
            //#    case "LOCAL_FILE":
            //#        var localFile = new LocalFile_Director_Of_Advertising_Chapter_1_1_Page_1_CreateAdvertisementForAll_Handler_1_0.BaseDI.State.Advertising_.LocalFile_Director_Of_Advertising_Chapter_1_1_Page_1_CreateAdvertisementForAll_Handler_1_0(storylineDetails);

            //#        director.Repository = localFile;

            //#        break;
            //#    case "REMOTE_SERVICE":
            //#        var remoteService = new RemoteService_Direct_Advertising_Chapter_1_1_Page_1_CreateAdvertisementForAll_Handler_1_0.BaseDI.State.Advertising_.RemoteService_Direct_Advertising_Chapter_1_1_Page_1_CreateAdvertisementForAll_Handler_1_0(storylineDetails);

            //#        director.Repository = remoteService;

            //#        break;
            //#}

            return new Object(); //# director;
            //#endregion
        }
        //#endregion

        //#endregion
    }
}