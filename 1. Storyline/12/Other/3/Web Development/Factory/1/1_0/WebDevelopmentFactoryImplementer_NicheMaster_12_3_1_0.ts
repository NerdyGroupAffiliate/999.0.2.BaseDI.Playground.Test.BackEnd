//0. SCRIPT - ABSTRACT, BASE & INTERFACE CLASSES
import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0"
import * as aClass_Programming_ScriptNicheMaster_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptNicheMaster_12_2_1_0"
import * as ExtraData_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";
import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

//1. STORYLINE - CORE FEATURES
import * as Implement_DesignPattern_Factory_Master_12_2_1_0 from "../../../../../../../../1. Storyline/12/Other/2/Programming/Studio/1/1_0/ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

//4. EXPERIENCES - SHARED FEATURES
import * as Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0 from "../../../../../../../../4. Experience/6/Hear/12/Other/3/Web Development/Experience/13/1_0/Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0";

//6. STATE - LOCAL REPOSITORIES
//import * as LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0 from "../../../../../../../../6. State/12/Other/3/Web Development/Repository/1/1_0/LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0";
import * as LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0 from "../../../../../../../../6. State/12/Other/3/Web Development/Repository/1/1_0/LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0";
import * as LocalFile_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0 from "../../../../../../../../6. State/12/Other/3/Web Development/Repository/13/1_0/LocalFile_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0";

//6. STATE - REMOTE REPOSITORIES
//import * as RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0 from "../../../../../../../../6. State/12/Other/3/Web Development/Repository/1/1_0/RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0";
import * as RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0 from "../../../../../../../../6. State/12/Other/3/Web Development/Repository/1/1_0/RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0";
import * as RemoveService_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0 from "../../../../../../../../6. State/12/Other/3/Web Development/Repository/13/1_0/RemoveService_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0";

//7. DIRECTOR - PROPRIETARY FEATURES
//import * as Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0 from "../../../../../../../../7. Director/12/Other/3/Web Development/Director/1/1_0/Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0";
import * as Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0 from "../../../../../../../../7. Director/12/Other/3/Web Development/Director/1/1_0/Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0";
import * as Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0 from "../../../../../../../../7. Director/12/Other/3/Web Development/Director/2/1_0/Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0";
import * as Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0 from "../../../../../../../../7. Director/12/Other/3/Web Development/Director/3/1_0/Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0";
import * as Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0 from "../../../../../../../../7. Director/12/Other/3/Web Development/Director/4/1_0/Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0";
import * as Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0 from "../../../../../../../../7. Director/12/Other/3/Web Development/Director/5/1_0/Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0";
import * as Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0 from "../../../../../../../../7. Director/12/Other/3/Web Development/Director/6/1_0/Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0";
import * as Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0 from "../../../../../../../../7. Director/12/Other/3/Web Development/Director/7/1_0/Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0";
import * as Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0 from "../../../../../../../../7. Director/12/Other/3/Web Development/Director/8/1_0/Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0";
import * as Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0 from "../../../../../../../../7. Director/12/Other/3/Web Development/Director/9/1_0/Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0";
import * as Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0 from "../../../../../../../../7. Director/12/Other/3/Web Development/Director/10/1_0/Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0";
import * as Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0 from "../../../../../../../../7. Director/12/Other/3/Web Development/Director/11/1_0/Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0";
import * as Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0 from "../../../../../../../../7. Director/12/Other/3/Web Development/Director/12/1_0/Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0";

export namespace BaseDI.BackEnd.Story.Web_Development_1 {
    export class WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0 extends aClass_Programming_ScriptNicheMaster_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptNicheMaster_12_2_1_0<object>
    {
        //#region 1. Assign
        private _centralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _centralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;;
        private _centralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        private _clientORserverInstance: any;

        private _extraData: ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0;

        private _requestName: String = "";
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
        public Action(clientORserverInstance: any, centralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>, centralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>, centralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>, requestToResolve: Object, storylineDetails: Object, storylineDetails_Parameters: Object, requestName: String, requestToProcess: String, requestToProcessParameters: String): object
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

            switch (this._requestName.toUpperCase())
            {
                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_1_CREATEHOMESCREENFORALL_HANDLER_1_0":
                    resolvedRequest = this.Create_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0(storylineDetails, storylineDetails_Parameters, this._extraData);

                    break;

                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_1_READHOMESCREENFORALL_HANDLER_1_0":
                    resolvedRequest = this.Create_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0(storylineDetails, storylineDetails_Parameters, this._extraData);

                    break;

                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_2_READPRESALESSCREENFORALL_HANDLER_1_0":
                    resolvedRequest = this.Create_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0(storylineDetails, storylineDetails_Parameters, this._extraData);

                    break;

                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_3_READOPTINSCREENFORALL_HANDLER_1_0":
                    resolvedRequest = this.Create_Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0(storylineDetails, storylineDetails_Parameters, this._extraData);

                    break;

                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_4_READTHANKYOUSCREENFORALL_HANDLER_1_0":
                    resolvedRequest = this.Create_Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0(storylineDetails, storylineDetails_Parameters, this._extraData);

                    break;

                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_5_READSALESSCREENFORALL_HANDLER_1_0":
                    resolvedRequest = this.Create_Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0(storylineDetails, storylineDetails_Parameters, this._extraData);

                    break;

                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_6_READORDERFORMSCREENFORALL_HANDLER_1_0":
                    resolvedRequest = this.Create_Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0(storylineDetails, storylineDetails_Parameters, this._extraData);

                    break;

                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_7_READOTOSCREENFORALL_HANDLER_1_0":
                    resolvedRequest = this.Create_Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0(storylineDetails, storylineDetails_Parameters, this._extraData);

                    break;

                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_8_READWEBINARSCREENFORALL_HANDLER_1_0":
                    resolvedRequest = this.Create_Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0(storylineDetails, storylineDetails_Parameters, this._extraData);

                    break;

                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_9_READMEMBERSHIPSCREENFORALL_HANDLER_1_0":
                    resolvedRequest = this.Create_Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0(storylineDetails, storylineDetails_Parameters, this._extraData);

                    break;

                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_10_READAFFILIATESCREENFORALL_HANDLER_1_0":
                    resolvedRequest = this.Create_Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0(storylineDetails, storylineDetails_Parameters, this._extraData);

                    break;

                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_11_READOTHERSCREENFORALL_HANDLER_1_0":
                    resolvedRequest = this.Create_Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0(storylineDetails, storylineDetails_Parameters, this._extraData);

                    break;

                case "DIRECTOR_OF_WEBDEVELOPMENT_CHAPTER_12_3_PAGE_12_READADVANCEDSCREENFORALL_HANDLER_1_0":
                    resolvedRequest = this.Create_Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0(storylineDetails, storylineDetails_Parameters, this._extraData);

                    break;

                case "EXPERIENCE_THE_HEAR_OFTHEAPISERVER_MESSAGE_12_3_1_0":
                    resolvedRequest = this.Create_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0(storylineDetails, storylineDetails_Parameters, this._extraData);

                    break;
            }
            //#endregion

            return resolvedRequest;
        }

        //#region Page 1
        private Create_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0(storylineDetails: object, storylineDetails_Parameters: object, extraData: any): object {
            //#region CHECK FOR MISTAKES

            const repositoryMetaData: any = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(storylineDetails, "searchkey", "SetImplementer_ProductCreation_Software_Data", false);
            let repositoryType: string = repositoryMetaData?.value?.DataItemLocation;

            if (repositoryType == undefined) repositoryType = "LOCALFILE";

            //#endregion

            //#region ASSIGN REQUEST HANDLER
            let director = null; //new Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0.BaseDI.BackEnd.Director.Web_Development_3.Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0(extraData);

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
                    var localFile = null;//new LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0.BaseDI.BackEnd.State.Web_Development_3.LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = localFile;
                    director.Repository.RequestName = this._requestName;

                    break;
                case "REMOTESERVICE":
                    var remoteService = null;//new RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0.BaseDI.BackEnd.State.Web_Development_3.RemoveService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_CreateHomeScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = remoteService;
                    director.Repository.RequestName = this._requestName;

                    break;
            }

            return director;
            //#endregion
        }

        private Create_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0(storylineDetails: Object, storylineDetails_Parameters: Object, extraData: any): object {
            //#region CHECK FOR MISTAKES

            const repositoryMetaData: any = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(storylineDetails, "searchkey", "SetImplementer_ProductCreation_Software_Data", false);
            let repositoryType: string = repositoryMetaData?.value?.DataItemLocation;

            if (repositoryType == undefined) repositoryType = "LOCALFILE";

            //#endregion

            //#region ASSIGN REQUEST HANDLER
            let director = new Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0.BaseDI.BackEnd.Director.Web_Development_1.Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0(extraData);

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
                    var localFile = new LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0.BaseDI.BackEnd.State.Web_Development_1.LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = localFile;
                    director.Repository.RequestName = this._requestName;

                    break;
                case "REMOTESERVICE":
                    var remoteService = new RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0.BaseDI.BackEnd.State.Web_Development_1.RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = remoteService;
                    director.Repository.RequestName = this._requestName;

                    break;
            }
            //#endregion

            return director;
        }

        //#endregion

        //#region Page 2

        private Create_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0(storylineDetails: Object, storylineDetails_Parameters: Object, extraData: any): object {
            //#region CHECK FOR MISTAKES

            const repositoryMetaData: any = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(storylineDetails, "searchkey", "SetImplementer_ProductCreation_Software_Data", false);
            let repositoryType: string = repositoryMetaData?.value?.DataItemLocation;

            if (repositoryType == undefined) repositoryType = "LOCALFILE";

            //#endregion

            //#region ASSIGN REQUEST HANDLER
            let director = new Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0.BaseDI.BackEnd.Director.Web_Development_2.Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0(extraData);

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
                    var localFile = null; //new LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0.BaseDI.BackEnd.State.Web_Development_3.LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = localFile;
                    director.Repository.RequestName = this._requestName;

                    break;
                case "REMOTESERVICE":
                    var remoteService = null; //new RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0.BaseDI.BackEnd.State.Web_Development_3.RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = remoteService;
                    director.Repository.RequestName = this._requestName;

                    break;
            }
            //#endregion

            return director;
        }

        //#endregion

        //#region Page 3

        private Create_Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0(storylineDetails: Object, storylineDetails_Parameters: Object, extraData: any): object {
            //#region CHECK FOR MISTAKES

            const repositoryMetaData: any = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(storylineDetails, "searchkey", "SetImplementer_ProductCreation_Software_Data", false);
            let repositoryType: string = repositoryMetaData?.value?.DataItemLocation;

            if (repositoryType == undefined) repositoryType = "LOCALFILE";

            //#endregion

            //#region ASSIGN REQUEST HANDLER
            let director = new Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0.BaseDI.BackEnd.Director.Web_Development_3.Director_Of_WebDevelopment_Chapter_12_3_Page_3_ReadOptinScreenForAll_Handler_1_0(extraData);

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
                    var localFile = null; //new LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0.BaseDI.BackEnd.State.Web_Development_3.LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = localFile;
                    director.Repository.RequestName = this._requestName;

                    break;
                case "REMOTESERVICE":
                    var remoteService = null; //new RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0.BaseDI.BackEnd.State.Web_Development_3.RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = remoteService;
                    director.Repository.RequestName = this._requestName;

                    break;
            }
            //#endregion

            return director;
        }

        //#endregion

        //#region Page 4

        private Create_Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0(storylineDetails: Object, storylineDetails_Parameters: Object, extraData: any): object {
            //#region CHECK FOR MISTAKES

            const repositoryMetaData: any = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(storylineDetails, "searchkey", "SetImplementer_ProductCreation_Software_Data", false);
            let repositoryType: string = repositoryMetaData?.value?.DataItemLocation;

            if (repositoryType == undefined) repositoryType = "LOCALFILE";

            //#endregion

            //#region ASSIGN REQUEST HANDLER
            let director = new Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0.BaseDI.BackEnd.Director.Web_Development_4.Director_Of_WebDevelopment_Chapter_12_3_Page_4_ReadThankYouScreenForAll_Handler_1_0(extraData);

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
                    var localFile = null; //new LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0.BaseDI.BackEnd.State.Web_Development_3.LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = localFile;
                    director.Repository.RequestName = this._requestName;

                    break;
                case "REMOTESERVICE":
                    var remoteService = null; //new RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0.BaseDI.BackEnd.State.Web_Development_3.RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = remoteService;
                    director.Repository.RequestName = this._requestName;

                    break;
            }
            //#endregion

            return director;
        }

        //#endregion

        //#region Page 5

        private Create_Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0(storylineDetails: Object, storylineDetails_Parameters: Object, extraData: any): object {
            //#region CHECK FOR MISTAKES

            const repositoryMetaData: any = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(storylineDetails, "searchkey", "SetImplementer_ProductCreation_Software_Data", false);
            let repositoryType: string = repositoryMetaData?.value?.DataItemLocation;

            if (repositoryType == undefined) repositoryType = "LOCALFILE";

            //#endregion

            //#region ASSIGN REQUEST HANDLER
            let director = new Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0.BaseDI.BackEnd.Director.Web_Development_5.Director_Of_WebDevelopment_Chapter_12_3_Page_5_ReadSalesScreenForAll_Handler_1_0(extraData);

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
                    var localFile = null; //new LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0.BaseDI.BackEnd.State.Web_Development_3.LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = localFile;
                    director.Repository.RequestName = this._requestName;

                    break;
                case "REMOTESERVICE":
                    var remoteService = null; //new RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0.BaseDI.BackEnd.State.Web_Development_3.RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = remoteService;
                    director.Repository.RequestName = this._requestName;

                    break;
            }
            //#endregion

            return director;
        }

        //#endregion

        //#region Page 6

        private Create_Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0(storylineDetails: Object, storylineDetails_Parameters: Object, extraData: any): object {
            //#region CHECK FOR MISTAKES

            const repositoryMetaData: any = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(storylineDetails, "searchkey", "SetImplementer_ProductCreation_Software_Data", false);
            let repositoryType: string = repositoryMetaData?.value?.DataItemLocation;

            if (repositoryType == undefined) repositoryType = "LOCALFILE";

            //#endregion

            //#region ASSIGN REQUEST HANDLER
            let director = new Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0.BaseDI.BackEnd.Director.Web_Development_6.Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0(extraData);

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
                    var localFile = null; //new LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0.BaseDI.BackEnd.State.Web_Development_3.LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = localFile;
                    director.Repository.RequestName = this._requestName;

                    break;
                case "REMOTESERVICE":
                    var remoteService = null; //new RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0.BaseDI.BackEnd.State.Web_Development_3.RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = remoteService;
                    director.Repository.RequestName = this._requestName;

                    break;
            }
            //#endregion

            return director;
        }

        //#endregion

        //#region Page 7

        private Create_Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0(storylineDetails: Object, storylineDetails_Parameters: Object, extraData: any): object {
            //#region CHECK FOR MISTAKES

            const repositoryMetaData: any = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(storylineDetails, "searchkey", "SetImplementer_ProductCreation_Software_Data", false);
            let repositoryType: string = repositoryMetaData?.value?.DataItemLocation;

            if (repositoryType == undefined) repositoryType = "LOCALFILE";

            //#endregion

            //#region ASSIGN REQUEST HANDLER
            let director = new Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0.BaseDI.BackEnd.Director.Web_Development_7.Director_Of_WebDevelopment_Chapter_12_3_Page_7_ReadOTOScreenForAll_Handler_1_0(extraData);

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
                    var localFile = null; //new LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0.BaseDI.BackEnd.State.Web_Development_3.LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = localFile;
                    director.Repository.RequestName = this._requestName;

                    break;
                case "REMOTESERVICE":
                    var remoteService = null; //new RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0.BaseDI.BackEnd.State.Web_Development_3.RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = remoteService;
                    director.Repository.RequestName = this._requestName;

                    break;
            }
            //#endregion

            return director;
        }

        //#endregion

        //#region Page 8

        private Create_Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0(storylineDetails: Object, storylineDetails_Parameters: Object, extraData: any): object {
            //#region CHECK FOR MISTAKES

            const repositoryMetaData: any = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(storylineDetails, "searchkey", "SetImplementer_ProductCreation_Software_Data", false);
            let repositoryType: string = repositoryMetaData?.value?.DataItemLocation;

            if (repositoryType == undefined) repositoryType = "LOCALFILE";

            //#endregion

            //#region ASSIGN REQUEST HANDLER
            let director = new Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0.BaseDI.BackEnd.Director.Web_Development_8.Director_Of_WebDevelopment_Chapter_12_3_Page_8_ReadWebinarScreenForAll_Handler_1_0(extraData);

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
                    var localFile = null; //new LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0.BaseDI.BackEnd.State.Web_Development_3.LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = localFile;
                    director.Repository.RequestName = this._requestName;

                    break;
                case "REMOTESERVICE":
                    var remoteService = null; //new RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0.BaseDI.BackEnd.State.Web_Development_3.RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = remoteService;
                    director.Repository.RequestName = this._requestName;

                    break;
            }
            //#endregion

            return director;
        }

        //#endregion

        //#region Page 9

        private Create_Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0(storylineDetails: Object, storylineDetails_Parameters: Object, extraData: any): object {
            //#region CHECK FOR MISTAKES

            const repositoryMetaData: any = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(storylineDetails, "searchkey", "SetImplementer_ProductCreation_Software_Data", false);
            let repositoryType: string = repositoryMetaData?.value?.DataItemLocation;

            if (repositoryType == undefined) repositoryType = "LOCALFILE";

            //#endregion

            //#region ASSIGN REQUEST HANDLER
            let director = new Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0.BaseDI.BackEnd.Director.Web_Development_9.Director_Of_WebDevelopment_Chapter_12_3_Page_9_ReadMembershipScreenForAll_Handler_1_0(extraData);

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
                    var localFile = null; //new LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0.BaseDI.BackEnd.State.Web_Development_3.LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = localFile;
                    director.Repository.RequestName = this._requestName;

                    break;
                case "REMOTESERVICE":
                    var remoteService = null; //new RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0.BaseDI.BackEnd.State.Web_Development_3.RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = remoteService;
                    director.Repository.RequestName = this._requestName;

                    break;
            }
            //#endregion

            return director;
        }

        //#endregion

        //#region Page 10

        private Create_Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0(storylineDetails: Object, storylineDetails_Parameters: Object, extraData: any): object {
            //#region CHECK FOR MISTAKES

            const repositoryMetaData: any = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(storylineDetails, "searchkey", "SetImplementer_ProductCreation_Software_Data", false);
            let repositoryType: string = repositoryMetaData?.value?.DataItemLocation;

            if (repositoryType == undefined) repositoryType = "LOCALFILE";

            //#endregion

            //#region ASSIGN REQUEST HANDLER
            let director = new Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0.BaseDI.BackEnd.Director.Web_Development_10.Director_Of_WebDevelopment_Chapter_12_3_Page_10_ReadAffiliateScreenForAll_Handler_1_0(extraData);

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
                    var localFile = null; //new LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0.BaseDI.BackEnd.State.Web_Development_3.LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = localFile;
                    director.Repository.RequestName = this._requestName;

                    break;
                case "REMOTESERVICE":
                    var remoteService = null; //new RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0.BaseDI.BackEnd.State.Web_Development_3.RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = remoteService;
                    director.Repository.RequestName = this._requestName;

                    break;
            }
            //#endregion

            return director;
        }

        //#endregion

        //#region Page 11

        private Create_Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0(storylineDetails: Object, storylineDetails_Parameters: Object, extraData: any): object {
            //#region CHECK FOR MISTAKES

            const repositoryMetaData: any = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(storylineDetails, "searchkey", "SetImplementer_ProductCreation_Software_Data", false);
            let repositoryType: string = repositoryMetaData?.value?.DataItemLocation;

            if (repositoryType == undefined) repositoryType = "LOCALFILE";

            //#endregion

            //#region ASSIGN REQUEST HANDLER
            let director = new Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0.BaseDI.BackEnd.Director.Web_Development_11.Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadOtherScreenForAll_Handler_1_0(extraData);

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
                    var localFile = null; //new LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0.BaseDI.BackEnd.State.Web_Development_3.LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = localFile;
                    director.Repository.RequestName = this._requestName;

                    break;
                case "REMOTESERVICE":
                    var remoteService = null; //new RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0.BaseDI.BackEnd.State.Web_Development_3.RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = remoteService;
                    director.Repository.RequestName = this._requestName;

                    break;
            }
            //#endregion

            return director;
        }

        //#endregion

        //#region Page 12

        private Create_Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0(storylineDetails: Object, storylineDetails_Parameters: Object, extraData: any): object {
            //#region CHECK FOR MISTAKES

            const repositoryMetaData: any = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(storylineDetails, "searchkey", "SetImplementer_ProductCreation_Software_Data", false);
            let repositoryType: string = repositoryMetaData?.value?.DataItemLocation;

            if (repositoryType == undefined) repositoryType = "LOCALFILE";

            //#endregion

            //#region ASSIGN REQUEST HANDLER
            let director = new Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0.BaseDI.BackEnd.Director.Web_Development_12.Director_Of_WebDevelopment_Chapter_12_3_Page_12_ReadAdvancedScreenForAll_Handler_1_0(extraData);

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
                    var localFile = null; //new LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0.BaseDI.BackEnd.State.Web_Development_3.LocalFile_Director_Of_WebDevelopment_Chapter_12_3_Page_2_ReadPresalesScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = localFile;
                    director.Repository.RequestName = this._requestName;

                    break;
                case "REMOTESERVICE":
                    var remoteService = null; //new RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0.BaseDI.BackEnd.State.Web_Development_3.RemoteService_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0(storylineDetails);

                    director.Repository = remoteService;
                    director.Repository.RequestName = this._requestName;

                    break;
            }
            //#endregion

            return director;
        }

        //#endregion

        //#region Page 13

        private Create_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0(storylineDetails: Object, storylineDetails_Parameters: Object, extraData: any): object {
            //#region CHECK FOR MISTAKES

            const repositoryMetaData: any = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(storylineDetails, "searchkey", "SetImplementer_ProductCreation_Software_Data", false);
            let repositoryType: string = repositoryMetaData?.value?.DataItemLocation;

            //#endregion

            //#region ASSIGN REQUEST HANDLER
            let experience = new Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.BaseDI.BackEnd.Experience.Hear.Web_Development_13.Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0(extraData);

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
                case "LOCALFILE":
                    var localFile = new LocalFile_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.BaseDI.BackEnd.State.Web_Development_13.LocalFile_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0(storylineDetails);

                    experience.Repository = localFile;
                    experience.Repository.RequestName = this._requestName;

                    break;
                case "REMOTESERVICE":
                    var remoteService = new RemoveService_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.BaseDI.BackEnd.State.Web_Development_13.RemoveService_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0(storylineDetails);

                    experience.Repository = remoteService;
                    experience.Repository.RequestName = this._requestName;

                    break;
            }
            //#endregion

            return experience;
        }

        //#endregion

        //#endregion

    }
}