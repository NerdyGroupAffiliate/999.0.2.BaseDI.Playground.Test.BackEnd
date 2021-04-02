//#region Imports

//#region BaseDI

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

//#endregion

//#endregion

export namespace BaseDI.Professional.Story.Programming_1 {
    //#region 6. Action Implementation

    //A. Story in motion (DO SOMETHING) ACTING
    export class ProgrammingFactoryImplementer_NicheMaster_12_2_1_0 extends aClass_Programming_ScriptNicheMaster_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptNicheMaster_12_2_1_0<object>
    {
        //#region 1. Assign

        //SETTINGS
        private _storedAppSettings: any = null;

        //CLIENT/SERVER
        private _storedClientORserverInstance: any;
        private _storedRequestName: string = "";

        //MISC
        private _storedExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0 = null;

        //PLUMBING
        private _storedCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _storedCentralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _storedCentralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        //#endregion

        //#region 2. Ready

        constructor(extraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0)
        {
            super();

            //#region 1. INPUTS

            //#region DEFINE clientOrServer instance

            this._storedClientORserverInstance = null;

            //#endregion

            //#region MEMORIZE extra data

            this._storedExtraData = extraData;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region HANDLE niche setup

            //#region EDGE CASE - USE niche faults

            this.Setup();

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT


            //#endregion
        }

        //#endregion

        //#region 3. Set

        //A. Default state of story
        public Setup(): void
        {
            //#region 1. INPUTS     

            //#endregion

            //#region 2. PROCESS


            //#endregion

            //#region 3. OUTPUT

            //#endregion
        }

        //#endregion

        //#region 4. Action

        public Action(parameterClientORserverInstance: any, parameterCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>, parameterCentralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>, parameterCentralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>, parameterRequestToResolve: object, parameterStorylineDetails: object, parameterStorylineDetails_Parameters: object, parameterRequestName: string = "", parameterRequestToProcess: string = "", parameterRequestToProcessParameters: string = "") : object
        {
            //#region 1. INPUTS

            //#region DECLARE request handler

             let storedResolvedRequest: object = null;

            //#endregion

            //#region MEMORIZE api data

            this._storedExtraData.KeyValuePairs.setValue("APILocationLocalNodeJS", Object.assign(this.APILocationLocalNodeJS, Object));
            this._storedExtraData.KeyValuePairs.setValue("APILocationLocalDotNetCore", Object.assign(this.APILocationLocalDotNetCore, Object));

            this._storedExtraData.KeyValuePairs.setValue("APILocationRemote", Object.assign(this.APILocationRemote, Object));

            //#endregion

            //#region MEMORIZE app settings

            this._storedAppSettings = parameterClientORserverInstance["appSettings"];

            //#endregion

            //#region MEMORIZE centralized processes

            this._storedCentralizedStorer = parameterCentralizedStorer;
            this._storedCentralizedDisturber = parameterCentralizedDisturber;
            this._storedCentralizedSensor = parameterCentralizedSensor;

            //#endregion

            //#region MEMORIZE clientOrServer instance

            this._storedClientORserverInstance = parameterClientORserverInstance;

            //#endregion

            //#region MEMORIZE client request

            this._storedExtraData.KeyValuePairs.setValue("RequestToProcess", Object.assign(parameterRequestToProcess, Object))
            this._storedExtraData.KeyValuePairs.setValue("RequestToProcessParameters", Object.assign(parameterRequestToProcessParameters, Object))

            //var storedRequestType = requestToResolve.GetType();

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try
            {
                //#region GENERATE request handler

                //#region IDEAL CASE - USE director of programming

                if (parameterRequestName != null && parameterRequestName != undefined && parameterRequestName != "")
                {
                    switch (parameterRequestName.toUpperCase())
                    {
                        //CONTROLLER
                        case "DIRECTOR_OF_PROGRAMMING_CHAPTER_12_2_PAGE_1_REQUEST_CONTROLLER_1_0":
                            storedResolvedRequest = this.Create_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(parameterStorylineDetails, parameterStorylineDetails_Parameters, this._storedExtraData);

                            break;

                        //CONVERSION
                        case "DIRECTOR_OF_PROGRAMMING_CHAPTER_12_2_PAGE_2_REQUEST_CONVERSION_1_0":
                            storedResolvedRequest = this.Create_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0(parameterStorylineDetails, parameterStorylineDetails_Parameters, this._storedExtraData);

                            break;

                        //STORAGE
                        case "DIRECTOR_OF_PROGRAMMING_CHAPTER_12_2_PAGE_3_REQUEST_STORAGE_1_0":
                            storedResolvedRequest = this.Create_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0(parameterStorylineDetails, parameterStorylineDetails_Parameters, this._storedExtraData);

                            break;

                        //DISTURBANCES
                        case "DIRECTOR_OF_PROGRAMMING_CHAPTER_12_2_PAGE_4_REQUEST_DISTURBANCES_1_0":
                            storedResolvedRequest = this.Create_Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0(parameterStorylineDetails, parameterStorylineDetails_Parameters, this._storedExtraData);

                            break;

                        //SENSOR
                        case "DIRECTOR_OF_PROGRAMMING_CHAPTER_12_2_PAGE_5_REQUEST_SENSOR_1_0":
                            storedResolvedRequest = this.Create_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0(parameterStorylineDetails, parameterStorylineDetails_Parameters, this._storedExtraData);

                            break;
                    }
                }

                //#endregion

                //#endregion
            }
            catch
            {
                throw Error;
            }

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN request handler

            //#region IDEAL CASE - USE director of programming

            return storedResolvedRequest;

            //#endregion


            //#endregion

            //#endregion
        }

        //#region Page 1

        private Create_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(parameterStorylineDetails:object, parameterStorylineDetails_Parameters:object, parameterExtraData:ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0) : object
        {
            //#region 1. INPUTS

            //#region MEMORIZE data access stragety

            let repositoryType: string = this._storedAppSettings.APP_SETTING_CONVERSION_MODE_12_2_PROGRAMMING_NICHE_MASTER;

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#region DEFINE request handler

            let stored_DirectorRequestHandler: Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0.BaseDI.Professional.Director.Programming_1.Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 = null;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region GENERATE programming request object

            try
            {
                //#region EDGE CASE - USE default data access strategy

                if (repositoryType == "") repositoryType = "LOCAL_FILE";

                //#endregion

                //#region IDEAL CASE - USE director of programming

                stored_DirectorRequestHandler = new Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0.BaseDI.Professional.Director.Programming_1.Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(this._storedExtraData);

                stored_DirectorRequestHandler.ClientOrServerInstance = this._storedClientORserverInstance;

                stored_DirectorRequestHandler.ExtraData = parameterExtraData;

                stored_DirectorRequestHandler.MasterStorer = this._storedCentralizedStorer;
                stored_DirectorRequestHandler.MasterDisturber = this._storedCentralizedDisturber;
                stored_DirectorRequestHandler.MasterSensor = this._storedCentralizedSensor;

                stored_DirectorRequestHandler.StorylineDetails = parameterStorylineDetails;
                stored_DirectorRequestHandler.StorylineDetails_Parameters = parameterStorylineDetails_Parameters;

                switch (repositoryType.toUpperCase())
                {
                    case "LOCAL_FILE":
                        var localFile = new LocalFile_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0.BaseDI.Professional.State.Programming_1.LocalFile_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(parameterStorylineDetails);

                        stored_DirectorRequestHandler.Repository = localFile;
                        stored_DirectorRequestHandler.Repository.RequestName = this._storedRequestName;

                        break;
                    case "REMOTE_SERVICE":
                        var remoteService = new RemoteService_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0.BaseDI.Professional.State.Programming_1.RemoteService_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(parameterStorylineDetails);

                        stored_DirectorRequestHandler.Repository = remoteService;
                        stored_DirectorRequestHandler.Repository.RequestName = this._storedRequestName;

                        break;
                }

                //#endregion

                //#region EDGE CASE - USE developer logger

                if (storedDeveloperMode) {
                    this._storedClientORserverInstance["processStepNumber"] = this._storedClientORserverInstance["processStepNumber"] + 1;

                    console.log("STEP " + this._storedClientORserverInstance["processStepNumber"] + " ProgrammingFactoryImplementer_NicheMaster_12_2_1_0.cs -> Create_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 -> [SUCCESSFULLY found a request handler of ***Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0*** - USING data stragety of " + repositoryType + "]");
                }                    

                //#endregion
            }
            catch (Exception)
            {
                //#region EDGE CASE - USE developer logger

                if (storedDeveloperMode) {
                    this._storedClientORserverInstance["processStepNumber"] = this._storedClientORserverInstance["processStepNumber"] + 1;

                    console.log("STEP " + this._storedClientORserverInstance["processStepNumber"] + " ProgrammingFactoryImplementer_NicheMaster_12_2_1_0.cs -> Create_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 -> [FAILED finding a request handler for ***Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0*** - USING data stragety of " + repositoryType);
                }
   
                //#endregion

                //#region EDGE CASE - USE exception handler

                //#endregion
            }

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN request handler

            //#region IDEAL CASE - USE a director

            return stored_DirectorRequestHandler;

            //#endregion

            //#endregion

            //#endregion
    }

        //#endregion

        //#region Page 2

        private Create_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0(parameterStorylineDetails:object, parameterStorylineDetails_Parameters:object, parameterExtraData:ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0) : object
        {
            //#region 1. INPUTS    

            //#region DEFINE request handler

            let stored_DirectorRequestHandler: Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0.BaseDI.Professional.Director.Programming_2.Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0 = null;

            //#endregion

            //#region MEMORIZE data access stragety

            let repositoryType: string = this._storedAppSettings.APP_SETTING_CONVERSION_MODE_12_2_PROGRAMMING_NICHE_MASTER;

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region GENERATE programming request object

            try
            {
                //#region EDGE CASE - USE default data access strategy

                if (repositoryType == "") repositoryType = "LOCAL_FILE";

                //#endregion

                //#region IDEAL CASE - USE director of programming

                stored_DirectorRequestHandler = new Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0.BaseDI.Professional.Director.Programming_2.Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0(this._storedExtraData);

                stored_DirectorRequestHandler.ClientOrServerInstance = this._storedClientORserverInstance;

                stored_DirectorRequestHandler.ExtraData = parameterExtraData;

                stored_DirectorRequestHandler.MasterStorer = this._storedCentralizedStorer;
                stored_DirectorRequestHandler.MasterDisturber = this._storedCentralizedDisturber;
                stored_DirectorRequestHandler.MasterSensor = this._storedCentralizedSensor;

                stored_DirectorRequestHandler.StorylineDetails = parameterStorylineDetails;
                stored_DirectorRequestHandler.StorylineDetails_Parameters = parameterStorylineDetails_Parameters;

                switch (repositoryType.toUpperCase()) {
                    case "LOCAL_FILE":
                        var localFile = new LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0.BaseDI.Professional.State.Programming_2.LocalFile_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0(parameterStorylineDetails);

                        stored_DirectorRequestHandler.Repository = localFile;
                        stored_DirectorRequestHandler.Repository.RequestName = this._storedRequestName;

                        break;
                    case "REMOTE_SERVICE":
                        var remoteService = new RemoteService_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0.BaseDI.Professional.State.Programming_2.RemoteService_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0(parameterStorylineDetails);

                        stored_DirectorRequestHandler.Repository = remoteService;
                        stored_DirectorRequestHandler.Repository.RequestName = this._storedRequestName;

                        break;
                }

                //#endregion

                //#region EDGE CASE - USE developer logger

                if (storedDeveloperMode) {
                    this._storedClientORserverInstance["processStepNumber"] = this._storedClientORserverInstance["processStepNumber"] + 1;

                    console.log("STEP " + this._storedClientORserverInstance["processStepNumber"] + " ProgrammingFactoryImplementer_NicheMaster_12_2_1_0.cs -> Create_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0 -> [SUCCESSFULLY found a request handler of ***Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0*** - USING data stragety of " + repositoryType + "]");
                }

                 //#endregion
            }
            catch (Exception)
            {
                //#region EDGE CASE - USE developer logger

                if (storedDeveloperMode) {
                    this._storedClientORserverInstance["processStepNumber"] = this._storedClientORserverInstance["processStepNumber"] + 1;

                    console.log("STEP " + this._storedClientORserverInstance["processStepNumber"] + " ProgrammingFactoryImplementer_NicheMaster_12_2_1_0.cs -> Create_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0 -> [FAILED finding a request handler for ***Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0*** - USING data stragety of " + repositoryType);
                }
        
                //#endregion

                //#region EDGE CASE - USE exception handler

                //#endregion
            }

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN request handler

            //#region IDEAL CASE - USE director of programming

            return stored_DirectorRequestHandler;

            //#endregion

            //#endregion

            //#endregion
    }

        //#endregion

        //#region Page 3

        private Create_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0(parameterStorylineDetails:object, parameterStorylineDetails_Parameters:object, parameterExtraData:ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0) : object
        {
            //#region 1. INPUTS  

            //#region DEFINE request handler

            let stored_DirectorRequestHandler: Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.BaseDI.Professional.Director.Programming_3.Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0 = null;

            //#endregion

            //#region MEMORIZE data access stragety

            let repositoryType: string = this._storedAppSettings.APP_SETTING_CONVERSION_MODE_12_2_PROGRAMMING_NICHE_MASTER;

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region GENERATE programming request object

            try
            {
                //#region EDGE CASE - USE default data access strategy

                if (repositoryType == "") repositoryType = "LOCAL_FILE";

                //#endregion

                //#region IDEAL CASE - USE director of programming

                stored_DirectorRequestHandler = new Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.BaseDI.Professional.Director.Programming_3.Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0(this._storedExtraData);

                stored_DirectorRequestHandler.ClientOrServerInstance = this._storedClientORserverInstance;

                stored_DirectorRequestHandler.ExtraData = parameterExtraData;

                stored_DirectorRequestHandler.MasterStorer = this._storedCentralizedStorer;
                stored_DirectorRequestHandler.MasterDisturber = this._storedCentralizedDisturber;
                stored_DirectorRequestHandler.MasterSensor = this._storedCentralizedSensor;

                stored_DirectorRequestHandler.StorylineDetails = parameterStorylineDetails;
                stored_DirectorRequestHandler.StorylineDetails_Parameters = parameterStorylineDetails_Parameters;

                switch (repositoryType.toUpperCase()) {
                    case "LOCAL_FILE":
                        var localFile = new LocalFile_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.BaseDI.Professional.State.Programming_3.LocalFile_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0(parameterStorylineDetails);

                        stored_DirectorRequestHandler.Repository = localFile;
                        stored_DirectorRequestHandler.Repository.RequestName = this._storedRequestName;

                        break;
                    case "REMOTE_SERVICE":
                        var remoteService = new RemoteService_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.BaseDI.Professional.State.Programming_3.RemoteService_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0(parameterStorylineDetails);

                        stored_DirectorRequestHandler.Repository = remoteService;
                        stored_DirectorRequestHandler.Repository.RequestName = this._storedRequestName;

                        break;
                }

                //#endregion

                //#region EDGE CASE - USE developer logger

                if (storedDeveloperMode) {
                    this._storedClientORserverInstance["processStepNumber"] = this._storedClientORserverInstance["processStepNumber"] + 1;

                    console.log("STEP " + this._storedClientORserverInstance["processStepNumber"] + " ProgrammingFactoryImplementer_NicheMaster_12_2_1_0.cs -> Create_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0 -> [SUCCESSFULLY found a request handler of ***Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0*** - USING data stragety of " + repositoryType + "]");
                }
      
                //#endregion
            }
            catch (Exception)
            {
                //#region EDGE CASE - USE developer logger

                if (storedDeveloperMode) {
                    this._storedClientORserverInstance["processStepNumber"] = this._storedClientORserverInstance["processStepNumber"] + 1;

                    console.log("STEP " + this._storedClientORserverInstance["processStepNumber"] + " ProgrammingFactoryImplementer_NicheMaster_12_2_1_0.cs -> Create_Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0 -> [FAILED finding a request handler for ***Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0*** - USING data stragety of " + repositoryType);
                }

                //#endregion

                //#region EDGE CASE - USE exception handler

                //#endregion
            }

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN request handler

            //#region IDEAL CASE - USE director of programming

            return stored_DirectorRequestHandler;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion

        //#region Page 4

        private Create_Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0(parameterStorylineDetails:object, parameterStorylineDetails_Parameters:object, parameterExtraData:ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0) : object
        {
            //#region 1. INPUTS  

            //#region DEFINE request handler

            let stored_DirectorRequestHandler: Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0.BaseDI.Professional.Director.Programming_4.Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0 = null;

            //#endregion

            //#region MEMORIZE data access stragety

            let repositoryType: string = this._storedAppSettings.APP_SETTING_CONVERSION_MODE_12_2_PROGRAMMING_NICHE_MASTER;

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region GENERATE programming request object

            try
            {
                //#region EDGE CASE - USE default data access strategy

                if (repositoryType == "") repositoryType = "LOCAL_FILE";

                //#endregion

                //#region IDEAL CASE - USE director of programming

                stored_DirectorRequestHandler = new Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0.BaseDI.Professional.Director.Programming_4.Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0(this._storedExtraData);

                stored_DirectorRequestHandler.ClientOrServerInstance = this._storedClientORserverInstance;

                stored_DirectorRequestHandler.ExtraData = parameterExtraData;

                stored_DirectorRequestHandler.MasterStorer = this._storedCentralizedStorer;
                stored_DirectorRequestHandler.MasterDisturber = this._storedCentralizedDisturber;
                stored_DirectorRequestHandler.MasterSensor = this._storedCentralizedSensor;

                stored_DirectorRequestHandler.StorylineDetails = parameterStorylineDetails;
                stored_DirectorRequestHandler.StorylineDetails_Parameters = parameterStorylineDetails_Parameters;

                switch (repositoryType.toUpperCase())
                {
                    case "LOCAL_FILE":
                        var localFile = new LocalFile_Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0.BaseDI.Professional.State.Programming_4.LocalFile_Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0(parameterStorylineDetails);

                        stored_DirectorRequestHandler.Repository = localFile;
                        stored_DirectorRequestHandler.Repository.RequestName = this._storedRequestName;

                        break;
                    case "REMOTE_SERVICE":
                        var remoteService = new RemoteService_Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0.BaseDI.Professional.State.Programming_4.RemoteService_Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0(parameterStorylineDetails);

                        stored_DirectorRequestHandler.Repository = remoteService;
                        stored_DirectorRequestHandler.Repository.RequestName = this._storedRequestName;

                        break;
                }

                //#endregion

                //#region EDGE CASE - USE developer logger

                if (storedDeveloperMode) {
                    this._storedClientORserverInstance["processStepNumber"] = this._storedClientORserverInstance["processStepNumber"] + 1;

                    console.log("STEP " + this._storedClientORserverInstance["processStepNumber"] + " ProgrammingFactoryImplementer_NicheMaster_12_2_1_0.cs -> Create_Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0 -> [SUCCESSFULLY found a request handler of ***Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0*** - USING data stragety of " + repositoryType + "]");
                }

                //#endregion
            }
            catch (Exception)
            {
                //#region EDGE CASE - USE developer logger

                if (storedDeveloperMode)
                {
                    this._storedClientORserverInstance["processStepNumber"] = this._storedClientORserverInstance["processStepNumber"] + 1;

                    console.log("STEP " + this._storedClientORserverInstance["processStepNumber"] + " ProgrammingFactoryImplementer_NicheMaster_12_2_1_0.cs -> Create_Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0 -> [FAILED finding a request handler for ***Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0*** - USING data stragety of " + repositoryType);
                }

                //#endregion

                //#region EDGE CASE - USE exception handler

                //#endregion
            }

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN request handler

            //#region IDEAL CASE - USE director of programming

            return stored_DirectorRequestHandler;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion

        //#region Page 5

        private Create_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0(parameterStorylineDetails:object, parameterStorylineDetails_Parameters:object, parameterExtraData:ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0) : object
        {
            //#region 1. INPUTS

            //#region DEFINE request handler

            let stored_DirectorRequestHandler: Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0.BaseDI.Professional.Director.Programming_5.Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0 = null;

            //#endregion

            //#region MEMORIZE data access stragety

            let repositoryType: string = this._storedAppSettings.APP_SETTING_CONVERSION_MODE_12_2_PROGRAMMING_NICHE_MASTER;

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region GENERATE programming request object

            try
            {
                //#region EDGE CASE - USE default data access strategy

                if (repositoryType == "") repositoryType = "LOCAL_FILE";

                //#endregion

                //#region IDEAL CASE - USE director of programming

                stored_DirectorRequestHandler = new Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0.BaseDI.Professional.Director.Programming_5.Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0(this._storedExtraData);

                stored_DirectorRequestHandler.ClientOrServerInstance = this._storedClientORserverInstance;

                stored_DirectorRequestHandler.ExtraData = parameterExtraData;

                stored_DirectorRequestHandler.MasterStorer = this._storedCentralizedStorer;
                stored_DirectorRequestHandler.MasterDisturber = this._storedCentralizedDisturber;
                stored_DirectorRequestHandler.MasterSensor = this._storedCentralizedSensor;

                stored_DirectorRequestHandler.StorylineDetails = parameterStorylineDetails;
                stored_DirectorRequestHandler.StorylineDetails_Parameters = parameterStorylineDetails_Parameters;

                switch (repositoryType.toUpperCase()) {
                    case "LOCAL_FILE":
                        var localFile = new LocalFile_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0.BaseDI.Professional.State.Programming_5.LocalFile_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0(parameterStorylineDetails);

                        stored_DirectorRequestHandler.Repository = localFile;
                        stored_DirectorRequestHandler.Repository.RequestName = this._storedRequestName;

                        break;
                    case "REMOTE_SERVICE":
                        var remoteService = new RemoteService_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0.BaseDI.Professional.State.Programming_5.RemoteService_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0(parameterStorylineDetails);

                        stored_DirectorRequestHandler.Repository = remoteService;
                        stored_DirectorRequestHandler.Repository.RequestName = this._storedRequestName;

                        break;
                }

                //#endregion

                //#region EDGE CASE - USE developer logger

                if (storedDeveloperMode) {
                    this._storedClientORserverInstance["processStepNumber"] = this._storedClientORserverInstance["processStepNumber"] + 1;

                    console.log("STEP " + this._storedClientORserverInstance["processStepNumber"] + " ProgrammingFactoryImplementer_NicheMaster_12_2_1_0.cs -> Create_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0 -> [SUCCESSFULLY found a request handler of ***Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0*** - USING data stragety of " + repositoryType + "]");
                }

                //#endregion
            }
            catch (Exception)
            {
                //#region EDGE CASE - USE developer logger

                if (storedDeveloperMode)
                {
                    this._storedClientORserverInstance["processStepNumber"] = this._storedClientORserverInstance["processStepNumber"] + 1;

                    console.log("STEP " + this._storedClientORserverInstance["processStepNumber"] + " ProgrammingFactoryImplementer_NicheMaster_12_2_1_0.cs -> Create_Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0 -> [FAILED finding a request handler for ***Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0*** - USING data stragety of " + repositoryType);
                }

                //#endregion

                //#region EDGE CASE - USE exception handler

                //#endregion
            }

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN request handler

            //#region IDEAL CASE - USE director of programming

            return stored_DirectorRequestHandler;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion

        //#endregion
    }

    //#endregion
}