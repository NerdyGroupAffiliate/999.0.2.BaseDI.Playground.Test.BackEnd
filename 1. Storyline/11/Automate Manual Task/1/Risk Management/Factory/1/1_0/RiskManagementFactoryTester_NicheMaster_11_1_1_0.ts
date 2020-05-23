import * as aClass_Programming_ScriptNicheMaster_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptNicheMaster_12_2_1_0"
import * as ExtraData_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";
import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

import * as LocalFile_Director_Of_RiskManagement_Chapter_11_1_Page_1_Mistake_Handler_1_0 from "../../../../../../../../6. State/11/Automate Manual Task/1/Risk Management/Repository/1/1_0/LocalFile_Director_Of_RiskManagement_Chapter_11_1_Page_1_Mistake_Handler_1_0";
import * as LocalFile_Director_Of_RiskManagement_Chapter_11_1_Page_2_Backup_Handler_1_0 from "../../../../../../../../6. State/11/Automate Manual Task/1/Risk Management/Repository/2/1_0/LocalFile_Director_Of_RiskManagement_Chapter_11_1_Page_2_Backup_Handler_1_0";

import * as Implement_DesignPattern_Factory_Master_12_2_1_0 from "../../../../../../../../1. Storyline/12/Other/2/Programming/Studio/1/1_0/ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

import * as RemoteService_Director_Of_RiskManagement_Chapter_11_1_Page_1_Mistake_Handler_1_0 from "../../../../../../../../6. State/11/Automate Manual Task/1/Risk Management/Repository/1/1_0/RemoteService_Director_Of_RiskManagement_Chapter_11_1_Page_1_Mistake_Handler_1_0";
import * as RemoteService_Director_Of_RiskManagement_Chapter_11_1_Page_2_Backup_Handler_1_0 from "../../../../../../../../6. State/11/Automate Manual Task/1/Risk Management/Repository/2/1_0/RemoteService_Director_Of_RiskManagement_Chapter_11_1_Page_2_Backup_Handler_1_0";

import * as Director_Of_RiskManagement_Chapter_11_1_Page_1_Mistake_Handler_1_0 from "../../../../../../../../7. Director/11/Automate Manual Task/1/Risk Management/Director/1/1_0/Director_Of_RiskManagement_Chapter_11_1_Page_1_Mistake_Handler_1_0";
import * as Director_Of_RiskManagement_Chapter_11_1_Page_2_Backup_Handler_1_0 from "../../../../../../../../7. Director/11/Automate Manual Task/1/Risk Management/Director/2/1_0/Director_Of_RiskManagement_Chapter_11_1_Page_2_Backup_Handler_1_0";

export namespace BaseDI.BackEnd.Story.Risk_Management_1 {
    export class RiskManagementFactoryTester_NicheMaster_11_1_1_0 extends aClass_Programming_ScriptNicheMaster_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptNicheMaster_12_2_1_0<object>
    {
        //#region 1. Assign
        private _centralizedStorer: any;
        private _client: any;

        private _extraData: ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0;
        //#endregion

        //#region 2. Ready
        constructor(extraData: any) {
            super();

            //#region 1. Assign
            this._extraData = extraData;
            this._centralizedStorer = null;

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
        public Action(client: any, centralizedStorer: any, requestToResolve: Object, storylineDetails: Object, storylineDetails_Parameters: Object, requestName: String, requestToProcess: String): object
        {
            //#region ASSIGN MASTER LEADER
            this._centralizedStorer = centralizedStorer;

            const requestType = requestToResolve;
            let resolvedRequest: object = new Object();

            this._extraData.KeyValuePairs.setValue("APILocationLocalNodeJS", Object.assign(this.APILocationLocalNodeJS, Object));
            this._extraData.KeyValuePairs.setValue("APILocationLocalDotNetCore", Object.assign(this.APILocationLocalDotNetCore, Object));

            this._extraData.KeyValuePairs.setValue("APILocationRemote", Object.assign(this.APILocationRemote, Object));

            //#endregion

            //#region ASSIGN REQUEST HANDLER
            switch (requestName.toUpperCase()) {
                case "DIRECTOR_OF_RISKMANAGEMENT_CHAPTER_11_1_PAGE_1_MISTAKE_HANDLER_1_0":
                    resolvedRequest = this.Create_Director_Of_RiskManagement_Chapter_11_1_Page_1_ReadAndHandleMistakes_1_0(storylineDetails, storylineDetails_Parameters, this._extraData);

                    return resolvedRequest;
                case "DIRECTOR_OF_RISKMANAGEMENT_CHAPTER_11_1_PAGE_2_BACKUP_HANDLER_1_0":
                    resolvedRequest = this.Create_Director_Of_RiskManagement_Chapter_11_1_Page_2_Backup_Handler_1_0(storylineDetails, storylineDetails_Parameters, this._extraData);

                    return resolvedRequest;
            }
            //#endregion

            return resolvedRequest;
        }
        
        //#region Page 1
        private Create_Director_Of_RiskManagement_Chapter_11_1_Page_1_ReadAndHandleMistakes_1_0(storylineDetails: Object, storylineDetails_Parameters: Object, extraData: any): object {
            //#region CHECK FOR MISTAKES

            const repositoryMetaData: any = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(storylineDetails, "searchkey", "SetImplementer_ProductCreation_Software_Data", false);
            let repositoryType: string = repositoryMetaData?.value?.DataItemLocation;

            //#endregion

            //#region ASSIGN REQUEST HANDLER
            let director = new Director_Of_RiskManagement_Chapter_11_1_Page_1_Mistake_Handler_1_0.BaseDI.BackEnd.Director.Risk_Management_1.Director_Of_RiskManagement_Chapter_11_1_Page_1_Mistake_Handler_1_0(extraData);

            director.StorylineDetails = storylineDetails;
            director.StorylineDetails_Parameters = storylineDetails_Parameters;
            director.ExtraData = extraData;
            director.MasterStorer = this._centralizedStorer;
            //#endregion

            //#region ASSIGN LOGIC REPOSITORY
            switch (repositoryType.toUpperCase()) {
                case "LOCALFILE":
                    var localFile = new LocalFile_Director_Of_RiskManagement_Chapter_11_1_Page_1_Mistake_Handler_1_0.BaseDI.BackEnd.State.Risk_Management_.LocalFile_Director_Of_RiskManagement_Chapter_11_1_Page_1_Mistake_Handler_1_0(storylineDetails);

                    director.Repository = localFile;

                    break;
                case "REMOTESERVICE":
                    var remoteService = new RemoteService_Director_Of_RiskManagement_Chapter_11_1_Page_1_Mistake_Handler_1_0.BaseDI.BackEnd.State.Risk_Management_.RemoteService_Director_Of_RiskManagement_Chapter_11_1_Page_1_Mistake_Handler_1_0(storylineDetails);

                    director.Repository = remoteService;

                    break;
            }
            //#endregion

            return director;
        }
        //#endregion

        //#region Page 2
        private Create_Director_Of_RiskManagement_Chapter_11_1_Page_2_Backup_Handler_1_0(storylineDetails: Object, storylineDetails_Parameters: Object, extraData: any): object {
            //#region CHECK FOR MISTAKES

            let repositoryType: string = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_The_DataRespository_1_0(storylineDetails, false, true);

            //#endregion

            //#region ASSIGN REQUEST HANDLER
            let director = new Director_Of_RiskManagement_Chapter_11_1_Page_2_Backup_Handler_1_0.BaseDI.BackEnd.Director.Risk_Management_2.Director_Of_RiskManagement_Chapter_11_1_Page_2_Backup_Handler_1_0(extraData);

            director.StorylineDetails = storylineDetails;
            director.StorylineDetails_Parameters = storylineDetails_Parameters;
            director.ExtraData = extraData;
            director.MasterStorer = this._centralizedStorer;
            //#endregion

            //#region ASSIGN LOGIC REPOSITORY
            switch (repositoryType.toUpperCase()) {
                case "LOCALFILE":
                    var localFile = new LocalFile_Director_Of_RiskManagement_Chapter_11_1_Page_2_Backup_Handler_1_0.BaseDI.BackEnd.State.Risk_Management_.LocalFile_Director_Of_RiskManagement_Chapter_11_1_Page_2_Backup_Handler_1_0(storylineDetails);

                    director.Repository = localFile;

                    break;
                case "REMOTESERVICE":
                    var remoteService = new RemoteService_Director_Of_RiskManagement_Chapter_11_1_Page_2_Backup_Handler_1_0.BaseDI.BackEnd.State.Risk_Management_.RemoteService_Director_Of_RiskManagement_Chapter_11_1_Page_2_Backup_Handler_1_0(storylineDetails);

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