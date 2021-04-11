//#region Imports

//#region BaseDI

import * as aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0";
import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptRoutable_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptRoutable_12_2_1_0";
import * as ExtraData_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";

import * as IContract_Programming_Repository_12_2_1_0 from "../../../../../../../../0. Script/Interfaces/12/Other/2/Programming/Contract/1/1_0/IContract_Programming_Repository_12_2_1_0";

import * as ChapterPage_Page_3_1_Begin_Process_12_3_1_0 from "../../../../../../../../5. Chapter/12/Other/2/Programming/Page/3/1_0/Page_3_1_Begin_Process_12_2_1_0";
import * as ChapterPage_Page_3_2_Validate_Process_12_3_1_0 from "../../../../../../../../5. Chapter/12/Other/2/Programming/Page/3/1_0/Page_3_2_Validate_Process_12_2_1_0";
import * as ChapterPage_Page_3_3_Process_StoryAuthor_12_3_1_0 from "../../../../../../../../5. Chapter/12/Other/2/Programming/Page/3/1_0/Page_3_3_Process_StoryAuthor_12_2_1_0";
import * as ChapterPage_Page_3_4_Process_StoryCharacters_12_3_1_0 from "../../../../../../../../5. Chapter/12/Other/2/Programming/Page/3/1_0/Page_3_4_Process_StoryCharacters_12_2_1_0";
import * as ChapterPage_Page_3_5_Process_StorySetting_12_3_1_0 from "../../../../../../../../5. Chapter/12/Other/2/Programming/Page/3/1_0/Page_3_5_Process_StorySetting_12_2_1_0";
import * as ChapterPage_Page_3_6_Process_StoryExperiences_12_3_1_0 from "../../../../../../../../5. Chapter/12/Other/2/Programming/Page/3/1_0/Page_3_6_Process_StoryExperiences_12_2_1_0";
import * as ChapterPage_Page_3_7_Process_StoryResources_12_3_1_0 from "../../../../../../../../5. Chapter/12/Other/2/Programming/Page/3/1_0/Page_3_7_Process_StoryResources_12_2_1_0";
import * as ChapterPage_Page_3_8_Process_CRUD_12_3_1_0 from "../../../../../../../../5. Chapter/12/Other/2/Programming/Page/3/1_0/Page_3_8_Process_CRUD_12_2_1_0";
import * as ChapterPage_Page_3_9_Verify_Process_12_3_1_0 from "../../../../../../../../5. Chapter/12/Other/2/Programming/Page/3/1_0/Page_3_9_Verify_Process_12_2_1_0";
import * as ChapterPage_Page_3_10_End_Process_12_3_1_0 from "../../../../../../../../5. Chapter/12/Other/2/Programming/Page/3/1_0/Page_3_10_End_Process_12_2_1_0";

//#endregion

//#endregion

export namespace BaseDI.Professional.Director.Programming_3
{
    export class Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0 extends aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0 {
        //#region 1. Assign

        //MISC
        private _storedExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //#endregion

        //#region 2. Ready

        constructor(extraData: any = null) {
            super();

            //#region 1. INPUTS

            //#region MEMORIZE extra data

            this._storedExtraData = extraData;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process defaults

            //#region IDEAL CASE - USE defaults handler

            this.Action = this.Action.bind(this);

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#endregion
        }

        //#endregion

        //#region 3. Set

        //A. Default state
        public HandleDefaults(): void {
            //#region 1. INPUTS


            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process defaults

            //#region IDEAL CASE - defaults handler


            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#endregion
        }

        //#endregion

        //#region 4. Action
        public async Action(): Promise<object>
        {
            //#region 1. INPUTS

            //#endregion

            //#region 2. PROCESS

            //#region BEGIN process execution

            //#region IDEAL CASE - USE builder pattern

            if (this.DirectorOrExperienceRequestHandler != null && (this.DirectorOrExperienceRequestHandler.ClientOrServerInstance != undefined && this.DirectorOrExperienceRequestHandler.ClientOrServerInstance != null)) {
                this.ClientOrServerInstance = this.DirectorOrExperienceRequestHandler.ClientOrServerInstance;
                this.MasterLeader = this.DirectorOrExperienceRequestHandler.MasterLeader;
                this.MasterController = this.DirectorOrExperienceRequestHandler.MasterController;
                this.MasterConverter = this.DirectorOrExperienceRequestHandler.MasterConverter;
                this.MasterDisturber = this.DirectorOrExperienceRequestHandler.MasterDisturber;
                this.MasterSensor = this.DirectorOrExperienceRequestHandler.MasterSensor;
                this.MasterStorer = this.DirectorOrExperienceRequestHandler.MasterStorer;
                this.MasterTransporter = this.DirectorOrExperienceRequestHandler.MasterTransporter;
                this.ExtraData = this.DirectorOrExperienceRequestHandler.ExtraData;
            }

            //REQUIRED: Implement one of the design patterns at https://www.dofactory.com/net/design-patterns
            const designPattern = new Use_DesignPattern_Builder_Chapter_12_2_Page_3(this.ClientOrServerInstance, this.MasterStorer, this.MasterDisturber, this.MasterSensor, this.StorylineDetails, this.StorylineDetails_Parameters, this.Repository, this.ExtraData, this.DirectorOrExperienceRequestHandler);

            this.StorylineDetails = await designPattern.Action();

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN request respnose

            //#region IDEAL CASE - USE populated data

            return this.StorylineDetails;

            //#endregion

            //#endregion

            //#endregion
        }
        //#endregion
    }

    //#region 5. Action Script
    export class Use_DesignPattern_Builder_Chapter_12_2_Page_3 {
        //#region 1. Assign

        //SETTINGS
        private _storedAppSettings: any;

        //CLIENT/SERVER
        private _storedClientOrServerInstance: any;

        //DATASETS
        private _storedStorylineDetails: object = new Object();
        private _storedStorylineDetails_Parameters: object = new Object();

        private _stored_Repository: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<any>;

        //MISC
        private _storedExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //PLUMBING
        private _stored_CentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _stored_CentralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _stored_CentralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        private _stored_DirectorRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        //#endregion

        //#region 2. Ready

        constructor(parameterClientORserverInstance: any, parameterCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>, parameterCentralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>, parameterCentralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>, parameterStorylineDetails: object, parameterStorylineDetails_Parameters: object, parameterRepository: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<any>, parameterExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0, parameter_DirectorRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0)
        {
            //#region 1. INPUTS

            //#region MEMORIZE app settings

            this._storedAppSettings = parameterClientORserverInstance["appSettings"];

            //#endregion

            //#region MEMORIZE centralized processes handlers 

            this._stored_CentralizedStorer = parameterCentralizedStorer;
            this._stored_CentralizedDisturber = parameterCentralizedDisturber;
            this._stored_CentralizedSensor = parameterCentralizedSensor;

            //#endregion

            //#region MEMORIZE clientOrServer instance

            this._storedClientOrServerInstance = parameterClientORserverInstance;

            //#endregion

            //#region MEMORIZE data stragety

            this._stored_Repository = parameterRepository;

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#region MEMORIZE director request handler

            this._stored_DirectorRequestHandler = parameter_DirectorRequestHandler;

            //#endregion

            //#region MEMORIZE extra data

            this._storedExtraData = parameterExtraData;

            //#endregion

            //#region MEMORIZE request details

            this._stored_DirectorRequestHandler = parameter_DirectorRequestHandler;

            //#endregion

            //#region MEMORIZE storyline details

            this._storedStorylineDetails = parameterStorylineDetails;
            this._storedStorylineDetails_Parameters = parameterStorylineDetails_Parameters;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process defaults

            //#region IDEAL CASE - USE defaults handler

            this.Action = this.Action.bind(this);

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#endregion
        }

        //#endregion        

        //#region 3. Set

        //#region 1. INPUTS


        //#endregion

        //#region 2. PROCESS

        //#endregion

        //#region 3. OUTPUT

        //#endregion

        //#endregion

        //#region 4. Action

        public async Action(): Promise<object>
        {
            //#region 1. INPUTS


            //#endregion

            //#region 2. PROCESS

            //#region ARRANGE execution order

            //#region IDEAL CASE - USE builder pattern

            const builder = new Implement_DesignPattern_Builder_Chapter_12_2_Page_3_1_0(this._storedClientOrServerInstance, this._stored_CentralizedStorer, this._stored_CentralizedDisturber, this._stored_CentralizedSensor, this._storedStorylineDetails, this._storedStorylineDetails_Parameters, this._stored_Repository, this._storedExtraData, this._stored_DirectorRequestHandler);

            this._storedStorylineDetails = await builder.Action_1_Begin_Process();

            this._storedStorylineDetails = await builder.Action_2_Validate_Process();

            this._storedStorylineDetails = await builder.Action_3_Process_StoryAuthor();
            this._storedStorylineDetails = await builder.Action_4_Process_StoryCharacters();
            this._storedStorylineDetails = await builder.Action_5_Process_StorySetting();
            this._storedStorylineDetails = await builder.Action_6_Process_StoryExperiences();
            this._storedStorylineDetails = await builder.Action_7_Process_StoryResources();

            this._storedStorylineDetails = await builder.Action_8_Process_CRUD();

            this._storedStorylineDetails = await builder.Action_9_Verify_Process();
            this._storedStorylineDetails = await builder.Action_10_End_Process();


            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN request response

            //#region IDEAL CASE - USE baseDI dataset

            return this._storedStorylineDetails;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion
    }
    //#endregion

    //#region 6. Action Implementation
    export class Implement_DesignPattern_Builder_Chapter_12_2_Page_3_1_0 extends aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>
    {
        //#region 1. Assign

        //SETTINGS
        private _storedAppSettings: any;

        //CLIENT/SERVER
        private _storedClientOrServerInstance: any;

        //DATASET
        private _storedStorylineDetails: object = new Object();
        private _storedStorylineDetails_Parameters: object = new Object();

        //MISC
        private _storedExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //PLUMBING
        private _stored_CentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _stored_CentralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _stored_CentralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        private _stored_DirectorRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        private _stored_Repository: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<any>;

        //#endregion

        //#region 2. Ready

        constructor(parameterClientORserverInstance: any, parameterCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>, parameterCentralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>, parameterCentralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>, parameterStorylineDetails: object, parameterStorylineDetails_Parameters: object, parameterRepository: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<any>, parameterExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0, parameter_DirectorRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0) {
            super();

            //#region 1. INPUTS

            //#region MEMORIZE app settings

            this._storedAppSettings = parameterClientORserverInstance["appSettings"];

            //#endregion

            //#region MEMORIZE clientOrServer instance

            this._storedClientOrServerInstance = parameterClientORserverInstance;

            //#endregion

            //#region MEMORIZE centralized processes

            this._stored_CentralizedDisturber = parameterCentralizedDisturber;
            this._stored_CentralizedSensor = parameterCentralizedSensor;
            this._stored_CentralizedStorer = parameterCentralizedStorer;

            //#endregion

            //#region MEMORIZE data stragety

            this._stored_Repository = parameterRepository;

            //#endregion

            //#region MEMORIZE director request handler

            this._stored_DirectorRequestHandler = parameter_DirectorRequestHandler;

            //#endregion

            //#region MEMORIZE extra data

            this._storedExtraData = parameterExtraData;

            //#endregion

            //#region MEMORIZE storyline details

            this._storedStorylineDetails = parameterStorylineDetails;
            this._storedStorylineDetails_Parameters = parameterStorylineDetails_Parameters;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process defaults

            //#region IDEAL CASE - USE defaults handler

            this.HandleDefaults = this.HandleDefaults.bind(this);

            this.Action_1_Begin_Process = this.Action_1_Begin_Process.bind(this);
            this.Action_2_Validate_Process = this.Action_2_Validate_Process.bind(this);
            this.Action_3_Process_StoryAuthor = this.Action_3_Process_StoryAuthor.bind(this);
            this.Action_4_Process_StoryCharacters = this.Action_4_Process_StoryCharacters.bind(this);
            this.Action_5_Process_StorySetting = this.Action_5_Process_StorySetting.bind(this);
            this.Action_6_Process_StoryExperiences = this.Action_6_Process_StoryExperiences.bind(this);
            this.Action_7_Process_StoryResources = this.Action_7_Process_StoryResources.bind(this);
            this.Action_8_Process_CRUD = this.Action_8_Process_CRUD.bind(this);
            this.Action_9_Verify_Process = this.Action_9_Verify_Process.bind(this);
            this.Action_10_End_Process = this.Action_10_End_Process.bind(this);

            this.HandleDefaults();

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT



            //#endregion
        }

        //#endregion

        //#region 3. Set

        //A. Default state
        public HandleDefaults(): void {
            //#region 1. INPUTS


            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process defaults

            //#region IDEAL CASE - defaults handler


            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#endregion
        }

        //#endregion

        //#region 4. Action

        //#region EXECUTE LOGIC INSTUCTIONS

        //Page 1-8
        public async Action_8_Process_CRUD(): Promise<object> {
            //#region 1. INPUTS

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process handler


            //#region IDEAL CASE - USE process handler

            var page = new ChapterPage_Page_3_8_Process_CRUD_12_3_1_0.BaseDI.Professional.Chapter.Page.Programming_3.Page_3_8_Process_CRUD_12_2_1_0(this._storedStorylineDetails, this._stored_Repository);

            page.ClientOrServerInstance = this._storedClientOrServerInstance;

            page.DirectorOrExperienceRequestHandler = this._stored_DirectorRequestHandler;
            page.ExtraData = this._storedExtraData;

            page.MasterStorer = this._stored_CentralizedStorer;
            page.MasterDisturber = this._stored_CentralizedDisturber;
            page.MasterSensor = this._stored_CentralizedSensor;

            page.StorylineDetails_Parameters = this._storedStorylineDetails_Parameters;

            this._storedStorylineDetails = await page.Action();

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            return this._storedStorylineDetails;

            //#endregion

            //#endregion

            //#endregion    
        }

        //#endregion 

        //#region NOT APART OF THE REQUEST PIPELINE AT THIS TIME

        //Page 1-1
        public async Action_1_Begin_Process(): Promise<object> {
            //#region 1. INPUTS

            //#endregion

            //#region 2. PROCESS

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            return this._storedStorylineDetails;

            //#endregion

            //#endregion

            //#endregion          
        }

        //Page 1-2
        public async Action_2_Validate_Process(): Promise<object> {
            //#region 1. INPUTS

            //#endregion

            //#region 2. PROCESS

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            return this._storedStorylineDetails;

            //#endregion

            //#endregion

            //#endregion          
        }

        //Page 1-3
        public async Action_3_Process_StoryAuthor(): Promise<object> {
            //#region 1. INPUTS

            //#endregion

            //#region 2. PROCESS

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            return this._storedStorylineDetails;

            //#endregion

            //#endregion

            //#endregion          
        }

        //Page 1-4
        public async Action_4_Process_StoryCharacters(): Promise<object> {
            //#region 1. INPUTS

            //#endregion

            //#region 2. PROCESS

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            return this._storedStorylineDetails;

            //#endregion

            //#endregion

            //#endregion          
        }

        //Page 1-5
        public async Action_5_Process_StorySetting(): Promise<object> {
            //#region 1. INPUTS

            //#endregion

            //#region 2. PROCESS

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            return this._storedStorylineDetails;

            //#endregion

            //#endregion

            //#endregion          
        }

        //Page 1-6
        public async Action_6_Process_StoryExperiences(): Promise<object> {
            //#region 1. INPUTS

            //#endregion

            //#region 2. PROCESS

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            return this._storedStorylineDetails;

            //#endregion

            //#endregion

            //#endregion          
        }

        //Page 1-7
        public async Action_7_Process_StoryResources(): Promise<object> {
            //#region 1. INPUTS

            //#endregion

            //#region 2. PROCESS

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            return this._storedStorylineDetails;

            //#endregion

            //#endregion

            //#endregion          
        }

        //Page 1-9
        public async Action_9_Verify_Process(): Promise<object> {
            //#region 1. INPUTS

            //#endregion

            //#region 2. PROCESS

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            return this._storedStorylineDetails;

            //#endregion

            //#endregion

            //#endregion          
        }

        //Page 1-10
        public async Action_10_End_Process(): Promise<object> {
            //#region 1. INPUTS

            //#endregion

            //#region 2. PROCESS

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            return this._storedStorylineDetails;

            //#endregion

            //#endregion

            //#endregion          
        }

        //#endregion

        //#endregion 
    }
    //#endregion
}