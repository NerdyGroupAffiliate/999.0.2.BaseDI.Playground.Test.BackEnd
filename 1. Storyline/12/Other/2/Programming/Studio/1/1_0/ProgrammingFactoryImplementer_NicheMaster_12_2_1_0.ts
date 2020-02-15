import * as aClass_Programming_ScriptNicheMaster_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptNicheMaster_12_2_1_0"
import * as aClass_Programming_ScriptRoutable_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptRoutable_12_2_1_0";

import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

import * as ExtraData_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";

import * as LocalFile_Director_Of_Programming_Chapter_12_2_Page_1_Request_Handler_1_0 from "../../../../../../../../6. State/12/Other/2/Programming/Repository/1/1_0/LocalFile_Director_Of_Programming_Chapter_12_2_Page_1_Request_Handler_1_0";
import * as LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_Request_Manager_1_0 from "../../../../../../../../6. State/12/Other/2/Programming/Repository/2/1_0/LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_Request_Manager_1_0";

import * as LocalFile_Experience_The_Hear_OfTheAPIServer_Message_12_2_1_0 from "../../../../../../../../6. State/12/Other/2/Programming/Repository/1/1_0/LocalFile_Experience_The_Hear_OfTheAPIServer_Message_12_2_1_0";

import * as Implement_DesignPattern_Factory_Master_12_2_1_0 from "../../../../../../../../1. Storyline/12/Other/2/Programming/Studio/1/1_0/ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

import * as RemoteService_Director_Of_Programming_Chapter_12_2_Page_1_Request_Handler_1_0 from "../../../../../../../../6. State/12/Other/2/Programming/Repository/1/1_0/RemoveService_Director_Of_Programming_Chapter_12_2_Page_1_Request_Handler_1_0";
import * as RemoteService_Director_Of_Programming_Chapter_12_2_Page_2_Request_Manager_1_0 from "../../../../../../../../6. State/12/Other/2/Programming/Repository/2/1_0/RemoteService_Director_Of_Programming_Chapter_12_2_Page_2_Request_Manager_1_0";

import * as RemoveService_Experience_The_Hear_OfTheAPIServer_Message_12_2_1_0 from "../../../../../../../../6. State/12/Other/2/Programming/Repository/1/1_0/RemoveService_Experience_The_Hear_OfTheAPIServer_Message_12_2_1_0";

import * as Experience_The_Hear_OfTheAPIServer_Message_12_2_1_0 from "../../../../../../../../4. Experience/6/Hear/12/Other/2/Programming/Experience/1/1_0/Experience_The_Hear_OfTheAPIServer_Message_12_2_1_0";
import * as Director_Of_Programming_Chapter_12_2_Page_1_Request_Handler_1_0 from "../../../../../../../../7. Director/12/Other/2/Programming/Director/1/1_0/Director_Of_Programming_Chapter_12_2_Page_1_Request_Handler_1_0";
import * as Director_Of_Programming_Chapter_12_2_Page_2_Request_Manager_1_0 from "../../../../../../../../7. Director/12/Other/2/Programming/Director/2/1_0/Director_Of_Programming_Chapter_12_2_Page_2_Request_Manager_1_0";

export namespace BaseDI.Playground.Test.BackEnd.Story.Programming_1 {
    export class ProgrammingFactoryImplementer_NicheMaster_12_2_1_0 extends aClass_Programming_ScriptNicheMaster_12_2_1_0.BaseDI.Playground.Test.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptNicheMaster_12_2_1_0<object>
    {
        //#region 1. Assign
        private _centralizedMaster: any;
        private _client: any;

        private _extraData: ExtraData_12_2_1_0.BaseDI.Playground.Test.BackEnd.Programming_1.ExtraData_12_2_1_0;
        //#endregion

        //#region 2. Ready
        constructor(extraData: any) {
            super();

            //#region 1. Assign
            this._centralizedMaster = null;
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
        public Action(client: any, centralizedMaster: any, requestToResolve: Object, storylineDetails: Object, storylineDetails_Parameters: Object, requestName: String): object
        {
            //#region ASSIGN MASTER LEADER
            this._centralizedMaster = centralizedMaster;
            this._client = client; 

            this._extraData.KeyValuePairs.setValue("APILocationLocalNodeJS", Object.assign(this.APILocationLocalNodeJS, Object));
            this._extraData.KeyValuePairs.setValue("APILocationLocalDotNetCore", Object.assign(this.APILocationLocalDotNetCore, Object));

            this._extraData.KeyValuePairs.setValue("APILocationRemote", Object.assign(this.APILocationRemote, Object));

            //#endregion

            //#region ASSIGN REQUEST HANDLER
            const requestType = requestToResolve;
            let resolvedRequest: object = new Object();

            switch (requestName.toUpperCase())
            {
                case "DIRECTOR_OF_PROGRAMMING_CHAPTER_12_2_PAGE_1_REQUEST_HANDLER_1_0":
                    resolvedRequest = this.Create_Director_Of_Programming_Chapter_12_2_Page_1_Request_Handler_1_0(storylineDetails, storylineDetails_Parameters, this._extraData);

                    return resolvedRequest;
                case "DIRECTOR_OF_PROGRAMMING_CHAPTER_12_2_PAGE_2_REQUEST_MANAGER_1_0":
                    resolvedRequest = this.Create_Director_Of_Programming_Chapter_12_2_Page_2_Request_Manager_1_0(storylineDetails, storylineDetails_Parameters, this._extraData);

                    return resolvedRequest;
                case "EXPERIENCE_THE_HEAR_OFTHEAPISERVER_MESSAGE_12_2_1_0":
                    resolvedRequest = this.Create_Experience_The_Hear_OfTheAPIServer_Message_12_2_1_0(storylineDetails, storylineDetails_Parameters, this._extraData);

                    return resolvedRequest;
            }
            //#endregion

            return resolvedRequest;
        }

        //#region Page 1
        private Create_Director_Of_Programming_Chapter_12_2_Page_1_Request_Handler_1_0(storylineDetails: Object, storylineDetails_Parameters: Object, extraData: any): object {
            //#region CHECK FOR MISTAKES

            const repositoryMetaData: any = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Playground.Test.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(storylineDetails, "searchkey", "SetImplementer_ProductCreation_Software_Data", false);
            let repositoryType: string = repositoryMetaData?.value?.DataItemLocation;
            
            //#endregion

            //#region ASSIGN REQUEST HANDLER
            let director = new Director_Of_Programming_Chapter_12_2_Page_1_Request_Handler_1_0.BaseDI.Playground.Test.BackEnd.Director.Programming_1.Director_Of_Programming_Chapter_12_2_Page_1_Request_Handler_1_0(extraData);

            director.Client = this._client;

            director.ExtraData = extraData;

            director.MasterLeader = this._centralizedMaster;

            director.StorylineDetails = storylineDetails;
            director.StorylineDetails_Parameters = storylineDetails_Parameters;
            //#endregion

            //#region ASSIGN LOGIC REPOSITORY
            switch (repositoryType.toUpperCase()) {
                case "LOCALFILE":
                    var localFile = new LocalFile_Director_Of_Programming_Chapter_12_2_Page_1_Request_Handler_1_0.BaseDI.Playground.Test.BackEnd.State.Programming_1.LocalFile_Director_Of_Programming_Chapter_12_2_Page_1_Request_Handler_1_0(storylineDetails);

                    director.Repository = localFile;

                    break;
                case "REMOTESERVICE":
                    var remoteService = new RemoteService_Director_Of_Programming_Chapter_12_2_Page_1_Request_Handler_1_0.BaseDI.Playground.Test.BackEnd.State.Programming_1.RemoveService_Director_Of_Programming_Chapter_12_2_Page_1_Request_Handler_1_0(storylineDetails);

                    director.Repository = remoteService;

                    break;
            }
            //#endregion

            return director;
        }

        private Create_Experience_The_Hear_OfTheAPIServer_Message_12_2_1_0(storylineDetails: Object, storylineDetails_Parameters: Object, extraData: any): object {
            //#region CHECK FOR MISTAKES

            let repositoryType: string = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Playground.Test.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_The_DataRespository_1_0(storylineDetails, false, true);

            //#endregion

            //#region ASSIGN REQUEST HANDLER
            let experience = new Experience_The_Hear_OfTheAPIServer_Message_12_2_1_0.BaseDI.Playground.Test.BackEnd.Experience.Hear.Programming_1.Experience_The_Hear_OfTheAPIServer_Message_12_2_1_0(extraData);

            experience.Client = this._client;

            experience.ExtraData = extraData;

            experience.MasterLeader = this._centralizedMaster;

            experience.StorylineDetails = storylineDetails;
            experience.StorylineDetails_Parameters = storylineDetails_Parameters;
            //#endregion

            //#region ASSIGN LOGIC REPOSITORY
            switch (repositoryType.toUpperCase()) {
                case "LOCALFILE":
                    var localFile = new LocalFile_Experience_The_Hear_OfTheAPIServer_Message_12_2_1_0.BaseDI.Playground.Test.BackEnd.State.Programming_1.LocalFile_Experience_The_Hear_OfTheAPIServer_Message_12_2_1_0(storylineDetails);

                    experience.Repository = localFile;

                    break;
                case "REMOTESERVICE":
                    var remoteService = new RemoveService_Experience_The_Hear_OfTheAPIServer_Message_12_2_1_0.BaseDI.Playground.Test.BackEnd.State.Programming_1.RemoveService_Experience_The_Hear_OfTheAPIServer_Message_12_2_1_0(storylineDetails);

                    experience.Repository = remoteService;

                    break;
            }
            //#endregion

            return experience;
        }
        //#endregion

        //#region Page 2

        private Create_Director_Of_Programming_Chapter_12_2_Page_2_Request_Manager_1_0(storylineDetails: Object, storylineDetails_Parameters: Object, extraData: any): object {
            //#region CHECK FOR MISTAKES

            let repositoryType: string = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Playground.Test.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_The_DataRespository_1_0(storylineDetails, false, true);

            //#endregion

            //#region ASSIGN REQUEST HANDLER
            let director = new Director_Of_Programming_Chapter_12_2_Page_2_Request_Manager_1_0.BaseDI.Playground.Test.BackEnd.Director.Programming_2.Director_Of_Programming_Chapter_12_2_Page_2_Request_Manager_1_0(extraData);

            director.Client = this._client;

            director.ExtraData = extraData;

            director.MasterLeader = this._centralizedMaster;

            director.StorylineDetails = storylineDetails;
            director.StorylineDetails_Parameters = storylineDetails_Parameters;
            //#endregion

            //#region ASSIGN LOGIC REPOSITORY
            switch (repositoryType.toUpperCase()) {
                case "LOCALFILE":
                    var localFile = new LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_Request_Manager_1_0.BaseDI.Playground.Test.BackEnd.State.Programming_2.LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_Request_Manager_1_0(storylineDetails);

                    director.Repository = localFile;

                    break;
                case "REMOTESERVICE":
                    var remoteService = new RemoteService_Director_Of_Programming_Chapter_12_2_Page_2_Request_Manager_1_0.BaseDI.Playground.Test.BackEnd.State.Programming_2.RemoteService_Director_Of_Programming_Chapter_12_2_Page_2_Request_Manager_1_0(storylineDetails);

                    director.Repository = remoteService;

                    break;
            }
            //#endregion

            return director;
        }

        //#endregion

        //#endregion
    }
}