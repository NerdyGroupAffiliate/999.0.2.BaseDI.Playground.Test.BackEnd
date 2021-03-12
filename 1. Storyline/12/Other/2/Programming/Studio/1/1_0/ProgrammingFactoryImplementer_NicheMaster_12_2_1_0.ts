//0. SCRIPT - ABSTRACT, BASE & INTERFACE CLASSES
import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0"
import * as aClass_Programming_ScriptNicheMaster_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptNicheMaster_12_2_1_0"
import * as aClass_Programming_ScriptRoutable_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptRoutable_12_2_1_0";

import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

import * as ExtraData_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";

//1. STORYLINE - CORE FEATURES
import * as Implement_DesignPattern_Factory_Master_12_2_1_0 from "../../../../../../../../1. Storyline/12/Other/2/Programming/Studio/1/1_0/ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

//4. EXPERIENCES - SHARED FEATURES

//6. STATE - LOCAL REPOSITORIES
import * as LocalFile_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "../../../../../../../../6. State/12/Other/2/Programming/Repository/1/1_0/LocalFile_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";
import * as LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0 from "../../../../../../../../6. State/12/Other/2/Programming/Repository/2/1_0/LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0";
import * as LocalFile_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0 from "../../../../../../../../6. State/12/Other/2/Programming/Repository/3/1_0/LocalFile_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0";
import * as LocalFile_Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0 from "../../../../../../../../6. State/12/Other/2/Programming/Repository/4/1_0/LocalFile_Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0";
import * as LocalFile_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0 from "../../../../../../../../6. State/12/Other/2/Programming/Repository/5/1_0/LocalFile_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0";

import * as LocalFile_Experience_The_Movement_OfTheAssets_Content_12_2_1_0 from "../../../../../../../../6. State/12/Other/2/Programming/Repository/6/1_0/LocalFile_Experience_The_Movement_OfTheAssets_Content_12_2_1_0";

//6. STATE - REMOTE REPOSITORIES
import * as RemoteService_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "../../../../../../../../6. State/12/Other/2/Programming/Repository/1/1_0/RemoteService_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";
import * as RemoteService_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0 from "../../../../../../../../6. State/12/Other/2/Programming/Repository/2/1_0/RemoteService_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0";
import * as RemoteService_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0 from "../../../../../../../../6. State/12/Other/2/Programming/Repository/3/1_0/RemoteService_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0";
import * as RemoteService_Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0 from "../../../../../../../../6. State/12/Other/2/Programming/Repository/4/1_0/RemoteService_Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0";
import * as RemoteService_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0 from "../../../../../../../../6. State/12/Other/2/Programming/Repository/5/1_0/RemoteService_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0";

import * as RemoteService_Experience_The_Movement_OfTheAssets_Content_12_2_1_0 from "../../../../../../../../6. State/12/Other/2/Programming/Repository/6/1_0/RemoteService_Experience_The_Movement_OfTheAssets_Content_12_2_1_0";

//7. DIRECTOR - PROPRIETARY FEATURES
import * as Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "../../../../../../../../7. Director/12/Other/2/Programming/Director/1/1_0/Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";
import * as Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0 from "../../../../../../../../7. Director/12/Other/2/Programming/Director/2/1_0/Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0";
import * as Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0 from "../../../../../../../../7. Director/12/Other/2/Programming/Director/3/1_0/Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0";
import * as Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0 from "../../../../../../../../7. Director/12/Other/2/Programming/Director/4/1_0/Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0";
import * as Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0 from "../../../../../../../../7. Director/12/Other/2/Programming/Director/5/1_0/Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0";

export namespace BaseDI.BackEnd.Story.Programming_1 {
    export class ProgrammingFactoryImplementer_NicheMaster_12_2_1_0 extends aClass_Programming_ScriptNicheMaster_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptNicheMaster_12_2_1_0<object>
    {
        //#region 1. Assign
        private _centralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _centralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;;
        private _centralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        private _clientORserverInstance: any;

        private _extraData: ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0;

        private _requestName: String = "";
        private _requestToProcess: String = "";

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

            this._extraData.KeyValuePairs.setValue("RequestToProcess", Object.assign(requestToProcess, Object))
            this._extraData.KeyValuePairs.setValue("RequestToProcessParameters", Object.assign(requestToProcessParameters, Object))

            //#endregion

            //#region ASSIGN REQUEST HANDLER
            const requestType = requestToResolve;
            let resolvedRequest: object = new Object();

            this._requestName = requestName;
            this._requestToProcess = requestToProcess;

            switch (this._requestName.toUpperCase())
            {
                //CONTROLLER
                case "DIRECTOR_OF_PROGRAMMING_CHAPTER_12_2_PAGE_1_REQUEST_CONTROLLER_1_0":
                    resolvedRequest = this.Create_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(storylineDetails, storylineDetails_Parameters, this._extraData);

                    break;

                //CONVERSION
                case "DIRECTOR_OF_PROGRAMMING_CHAPTER_12_2_PAGE_2_REQUEST_CONVERSION_1_0":
                    resolvedRequest = this.Create_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0(storylineDetails, storylineDetails_Parameters, this._extraData);

                    break;

                //STORAGE
                case "DIRECTOR_OF_PROGRAMMING_CHAPTER_12_2_PAGE_3_REQUEST_STORAGE_1_0":
                    resolvedRequest = this.Create_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0 (storylineDetails, storylineDetails_Parameters, this._extraData);

                    break;

                //DISTURBANCES
                case "DIRECTOR_OF_PROGRAMMING_CHAPTER_12_2_PAGE_4_REQUEST_DISTURBANCES_1_0":
                    resolvedRequest = this.Create_Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0 (storylineDetails, storylineDetails_Parameters, this._extraData);

                    break;

                //SENSOR
                case "DIRECTOR_OF_PROGRAMMING_CHAPTER_12_2_PAGE_5_REQUEST_SENSOR_1_0":
                    resolvedRequest = this.Create_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0(storylineDetails, storylineDetails_Parameters, this._extraData);

                    break;
            }
            //#endregion

            return resolvedRequest;
        }

        //#region Page 1

        private Create_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(storylineDetails: Object, storylineDetails_Parameters: Object, extraData: any): object {
            //#region CHECK FOR MISTAKES

            const repositoryMetaData: any = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode((storylineDetails_Parameters) != null ? storylineDetails_Parameters : storylineDetails, "searchkey", "SetImplementer_ProductCreation_Software_MasterLeaderController", false);
            let repositoryType: string = repositoryMetaData?.value?.DataItemLocation;

            if (repositoryType == undefined) repositoryType = "LOCALFILE";

            //#endregion

            //#region ASSIGN REQUEST HANDLER
            let director = new Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0.BaseDI.BackEnd.Director.Programming_1.Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(extraData);

            director.ClientOrServerInstance = this._clientORserverInstance;

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
                    var localFile = new LocalFile_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0.BaseDI.BackEnd.State.Programming_1.LocalFile_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(storylineDetails);

                    localFile.ClientOrServerInstance = this._clientORserverInstance;

                    director.Repository = localFile;
                    director.Repository.RequestName = this._requestName;

                    break;
                case "REMOTESERVICE":
                    var remoteService = new RemoteService_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0.BaseDI.BackEnd.State.Programming_1.RemoteService_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(storylineDetails);

                    remoteService.ClientOrServerInstance = this._clientORserverInstance;

                    director.Repository = remoteService;
                    director.Repository.RequestName = this._requestName;

                    break;
            }
            //#endregion

            return director;
        }

        //#endregion

        //#region Page 2

        private Create_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0(storylineDetails: Object, storylineDetails_Parameters: Object, extraData: any): object
        {
            //#region CHECK FOR MISTAKES

            const repositoryMetaData: any = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode((storylineDetails_Parameters) != null ? storylineDetails_Parameters : storylineDetails, "searchkey", "SetImplementer_ProductCreation_Software_MasterLeaderController", false);
            let repositoryType: string = repositoryMetaData?.value?.DataItemLocation;

            if (repositoryType == undefined) repositoryType = "LOCALFILE";

            //#endregion

            //#region ASSIGN REQUEST HANDLER
            let director = new Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0.BaseDI.BackEnd.Director.Programming_2.Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0(extraData);

            director.ClientOrServerInstance = this._clientORserverInstance;

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
                    var localFile = new LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0.BaseDI.BackEnd.State.Programming_2.LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0(storylineDetails);

                    localFile.ClientOrServerInstance = this._clientORserverInstance;

                    director.Repository = localFile;
                    director.Repository.RequestName = this._requestName;

                    break;
                case "REMOTESERVICE":
                    var remoteService = new RemoteService_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0.BaseDI.BackEnd.State.Programming_2.RemoteService_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0(storylineDetails);

                    remoteService.ClientOrServerInstance = this._clientORserverInstance;

                    director.Repository = remoteService;
                    director.Repository.RequestName = this._requestName;

                    break;
            }
            //#endregion

            return director;
        }

        //#endregion

        //#region Page 3

        private Create_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0(storylineDetails: Object, storylineDetails_Parameters: Object, extraData: any): object {
            //#region CHECK FOR MISTAKES

            const repositoryMetaData: any = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode((storylineDetails_Parameters) != null ? storylineDetails_Parameters : storylineDetails, "searchkey", "SetImplementer_ProductCreation_Software_MasterLeaderController", false);
            let repositoryType: string = repositoryMetaData?.value?.DataItemLocation;

            if (repositoryType == undefined) repositoryType = "LOCALFILE";

            //#endregion

            //#region ASSIGN REQUEST HANDLER
            let director = new Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.BaseDI.BackEnd.Director.Programming_3.Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0(extraData);

            director.ClientOrServerInstance = this._clientORserverInstance;

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
                    var localFile = new LocalFile_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.BaseDI.BackEnd.State.Programming_3.LocalFile_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0(storylineDetails);

                    localFile.ClientOrServerInstance = this._clientORserverInstance;

                    director.Repository = localFile;
                    director.Repository.RequestName = this._requestName;

                    break;
                case "REMOTESERVICE":
                    var remoteService = new RemoteService_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.BaseDI.BackEnd.State.Programming_3.RemoteService_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0(storylineDetails);

                    remoteService.ClientOrServerInstance = this._clientORserverInstance;

                    director.Repository = remoteService;
                    director.Repository.RequestName = this._requestName;

                    break;
            }
            //#endregion

            return director;
        }

        //#endregion

        //#region Page 4

        private Create_Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0 (storylineDetails: Object, storylineDetails_Parameters: Object, extraData: any): object {
            //#region CHECK FOR MISTAKES

            const repositoryMetaData: any = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode((storylineDetails_Parameters) != null ? storylineDetails_Parameters : storylineDetails, "searchkey", "SetImplementer_ProductCreation_Software_MasterLeaderController", false);
            let repositoryType: string = repositoryMetaData?.value?.DataItemLocation;

            if (repositoryType == undefined) repositoryType = "LOCALFILE";

            //#endregion

            //#region ASSIGN REQUEST HANDLER
            let director = new Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0.BaseDI.BackEnd.Director.Programming_4.Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0 (extraData);

            director.ClientOrServerInstance = this._clientORserverInstance;

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
                    var localFile = new LocalFile_Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0.BaseDI.BackEnd.State.Programming_4.LocalFile_Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0 (storylineDetails);

                    localFile.ClientOrServerInstance = this._clientORserverInstance;

                    director.Repository = localFile;
                    director.Repository.RequestName = this._requestName;

                    break;
                case "REMOTESERVICE":
                    var remoteService = new RemoteService_Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0.BaseDI.BackEnd.State.Programming_4.RemoteService_Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0(storylineDetails);

                    remoteService.ClientOrServerInstance = this._clientORserverInstance;

                    director.Repository = remoteService;
                    director.Repository.RequestName = this._requestName;

                    break;
            }
            //#endregion

            return director;
        }

        //#endregion

        //#region Page 5

        private Create_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0(storylineDetails: Object, storylineDetails_Parameters: Object, extraData: any): object
        {
            //#region CHECK FOR MISTAKES

            const repositoryMetaData: any = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode((storylineDetails_Parameters) != null ? storylineDetails_Parameters : storylineDetails, "searchkey", "SetImplementer_ProductCreation_Software_MasterLeaderController", false);
            let repositoryType: string = repositoryMetaData?.value?.DataItemLocation;

            if (repositoryType == undefined) repositoryType = "LOCALFILE";

            //#endregion

            //#region ASSIGN REQUEST HANDLER
            let director = new Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0.BaseDI.BackEnd.Director.Programming_5.Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0(extraData);

            director.ClientOrServerInstance = this._clientORserverInstance;

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
                    var localFile = new LocalFile_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0.BaseDI.BackEnd.State.Programming_5.LocalFile_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0(storylineDetails);

                    localFile.ClientOrServerInstance = this._clientORserverInstance;

                    director.Repository = localFile;
                    director.Repository.RequestName = this._requestName;

                    break;
                case "REMOTESERVICE":
                    var remoteService = new RemoteService_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0.BaseDI.BackEnd.State.Programming_5.RemoteService_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0(storylineDetails);

                    remoteService.ClientOrServerInstance = this._clientORserverInstance;

                    director.Repository = remoteService;
                    director.Repository.RequestName = this._requestName;

                    break;
            }
            //#endregion

            return director;
        }

        //#endregion

        //#endregion
    }
}