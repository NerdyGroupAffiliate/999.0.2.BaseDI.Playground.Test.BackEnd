//#region Imports

//#region BaseDI

import * as aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0";
import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptRoutable_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptRoutable_12_2_1_0";

import * as ExtraData_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";

import * as IContract_Programming_Repository_12_2_1_0 from "../../../../../../../../0. Script/Interfaces/12/Other/2/Programming/Contract/1/1_0//IContract_Programming_Repository_12_2_1_0";

import * as ChapterPage_Page_1_1_Begin_Process_12_2_1_0 from "../../../../../../../../5. Chapter/12/Other/2/Programming/Page/1/1_0/Page_1_1_Begin_Process_12_2_1_0";
import * as ChapterPage_Page_1_2_Validate_Process_12_2_1_0 from "../../../../../../../../5. Chapter/12/Other/2/Programming/Page/1/1_0/Page_1_2_Validate_Process_12_2_1_0";
import * as ChapterPage_Page_1_3_Process_StoryAuthor_12_2_1_0 from "../../../../../../../../5. Chapter/12/Other/2/Programming/Page/1/1_0/Page_1_3_Process_StoryAuthor_12_2_1_0";
import * as ChapterPage_Page_1_4_Process_StoryCharacters_12_2_1_0 from "../../../../../../../../5. Chapter/12/Other/2/Programming/Page/1/1_0/Page_1_4_Process_StoryCharacters_12_2_1_0";
import * as ChapterPage_Page_1_5_Process_StorySetting_12_2_1_0 from "../../../../../../../../5. Chapter/12/Other/2/Programming/Page/1/1_0/Page_1_5_Process_StorySetting_12_2_1_0";
import * as ChapterPage_Page_1_6_Process_StoryExperiences_12_2_1_0 from "../../../../../../../../5. Chapter/12/Other/2/Programming/Page/1/1_0/Page_1_6_Process_StoryExperiences_12_2_1_0";
import * as ChapterPage_Page_1_7_Process_StoryResources_12_2_1_0 from "../../../../../../../../5. Chapter/12/Other/2/Programming/Page/1/1_0/Page_1_7_Process_StoryResources_12_2_1_0";
import * as ChapterPage_Page_1_8_Process_CRUD_12_2_1_0 from "../../../../../../../../5. Chapter/12/Other/2/Programming/Page/1/1_0/Page_1_8_Process_CRUD_12_2_1_0";
import * as ChapterPage_Page_1_9_Verify_Process_12_2_1_0 from "../../../../../../../../5. Chapter/12/Other/2/Programming/Page/1/1_0/Page_1_9_Verify_Process_12_2_1_0";
import * as ChapterPage_Page_1_10_End_Process_12_2_1_0 from "../../../../../../../../5. Chapter/12/Other/2/Programming/Page/1/1_0/Page_1_10_End_Process_12_2_1_0";

//#endregion

//#endregion

export namespace BaseDI.Professional.Director.Programming_1 {
    export class Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 extends aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0 {
        //#region 1. Assign

        //MISC
        private _storedExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //#endregion

        //#region 2. Ready

        constructor(extraData: any = null)
        {
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

            //#region BEGIN process execution

            //#region IDEAL CASE - USE builder pattern

            if (this.EntryPoint != null && (this.EntryPoint.ClientOrServerInstance != undefined && this.EntryPoint.ClientOrServerInstance != null)) {
                this.ClientOrServerInstance = this.EntryPoint.ClientOrServerInstance;
                this.MasterLeader = this.EntryPoint.MasterLeader;
                this.MasterController = this.EntryPoint.MasterController;
                this.MasterConverter = this.EntryPoint.MasterConverter;
                this.MasterDisturber = this.EntryPoint.MasterDisturber;
                this.MasterSensor = this.EntryPoint.MasterSensor;
                this.MasterStorer = this.EntryPoint.MasterStorer;
                this.MasterTransporter = this.EntryPoint.MasterTransporter;
                this.ExtraData = this.EntryPoint.ExtraData;
            }

            //REQUIRED: Implement one of the design patterns at https://www.dofactory.com/net/design-patterns
            const designPattern = new Use_DesignPattern_Builder_Chapter_12_2_Page_1(this.ClientOrServerInstance, this.MasterStorer, this.MasterDisturber, this.MasterSensor, this.StorylineDetails, this.StorylineDetails_Parameters, this.Repository, this.ExtraData, this.EntryPoint);

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
    export class Use_DesignPattern_Builder_Chapter_12_2_Page_1 {
        //#region 1. Assign

        //SETTINGS
        private _storedAppSettings: any;

        //CLIENT/SERVER
        private _storedClientORserverInstance: any;

        //DATASETS
        private _storedStorylineDetails: object = new Object();
        private _storedStorylineDetails_Parameters: object = new Object();

        private _storedRepository: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<any>;

        //MISC
        private _storedExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //PLUMBING
        private _storedCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _storedCentralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _storedCentralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

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

            this._storedCentralizedStorer = parameterCentralizedStorer;
            this._storedCentralizedDisturber = parameterCentralizedDisturber;
            this._storedCentralizedSensor = parameterCentralizedSensor;

            //#endregion

            //#region MEMORIZE clientOrServer instance

            this._storedClientORserverInstance = parameterClientORserverInstance;

            //#endregion

            //#region MEMORIZE data stragety

            this._storedRepository = parameterRepository;

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

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


            //#endregion

            //#region 3. OUTPUT

            //#endregion




            this.Action = this.Action.bind(this);
        }
        //#endregion        

        //#region 3. Set
        //#endregion

        //#region 4. Action
        public async Action(): Promise<object> {
            const builder = new Implement_DesignPattern_Builder_Chapter_12_2_Page_1_1_0(this._storedClientORserverInstance, this._storedCentralizedStorer, this._storedCentralizedDisturber, this._storedCentralizedSensor, this._storedStorylineDetails, this._storedStorylineDetails_Parameters, this._storedRepository, this._storedExtraData, this._stored_DirectorRequestHandler);

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

            return this._storedStorylineDetails;
        }
        //#endregion
    }
    //#endregion

    //#region 6. Action Implementation
    export class Implement_DesignPattern_Builder_Chapter_12_2_Page_1_1_0 extends aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>
    {
        //#region 1. Assign
        private _storedCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _storedCentralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _storedCentralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        private _storedClientORserverInstance: any;

        private _storedStorylineDetails: object = new Object();
        private _storedStorylineDetails_Parameters: object = new Object();

        private _storedRepository: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<any>;

        private _storedExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;
        private _stored_DirectorRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;
        //#endregion

        //#region 2. Ready
        constructor(parameterClientORserverInstance: any, parameterCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>, parameterCentralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>, parameterCentralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>, parameterStorylineDetails: object, parameterStorylineDetails_Parameters: object, parameterRepository: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<any>, parameterExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0, parameter_DirectorRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0) {
            super();

            this._storedCentralizedStorer = parameterCentralizedStorer;
            this._storedCentralizedDisturber = parameterCentralizedDisturber;
            this._storedCentralizedSensor = parameterCentralizedSensor;

            this._storedClientORserverInstance = parameterClientORserverInstance;

            this._storedStorylineDetails = parameterStorylineDetails;
            this._storedStorylineDetails_Parameters = parameterStorylineDetails_Parameters;

            this._storedRepository = parameterRepository;

            this._storedExtraData = parameterExtraData;
            this._stored_DirectorRequestHandler = parameter_DirectorRequestHandler;

            this.HandleChapterDefaults = this.HandleChapterDefaults.bind(this);

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

            this.HandleChapterDefaults();
        }
        //#endregion

        //#region 3. Set
        private HandleChapterDefaults() {

        }
        //#endregion

        //#region 4. Action

        //#region EXECUTE LOGIC INSTUCTIONS

        //Page 1-1
        public async Action_1_Begin_Process(): Promise<object>
        {
            //region 1. Assign 
            let entryPoint: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0 = this._stored_DirectorRequestHandler;

            if (entryPoint.RequestID == undefined)
            {
                var page = new ChapterPage_Page_1_1_Begin_Process_12_2_1_0.BaseDI.Professional.Chapter.Page.Programming_1.Page_1_1_Begin_Process_12_2_1_0(this._storedStorylineDetails, this._storedRepository);

                page.ClientOrServerInstance = this._storedClientORserverInstance;

                page.EntryPoint = this._stored_DirectorRequestHandler;
                page.ExtraData = this._storedExtraData;

                page.MasterStorer = this._storedCentralizedStorer;
                page.MasterDisturber = this._storedCentralizedDisturber;
                page.MasterSensor = this._storedCentralizedSensor;

                page.StorylineDetails_Parameters = this._storedStorylineDetails_Parameters;

                //region 2. Action
                this._storedStorylineDetails = await page.Action();

                //region 3. Observe
                return this._storedStorylineDetails;
            }
        }

        //Page 1-10
        public async Action_10_End_Process(): Promise<object>
        {
            //region 1. Assign 
            var page = new ChapterPage_Page_1_10_End_Process_12_2_1_0.BaseDI.Professional.Chapter.Page.Programming_1.Page_1_10_End_Process_12_2_1_0(this._storedStorylineDetails, this._storedRepository);

            page.ClientOrServerInstance = this._storedClientORserverInstance;

            page.EntryPoint = this._stored_DirectorRequestHandler;
            page.ExtraData = this._storedExtraData;

            page.MasterStorer = this._storedCentralizedStorer;
            page.MasterDisturber = this._storedCentralizedDisturber;
            page.MasterSensor = this._storedCentralizedSensor;

            page.StorylineDetails_Parameters = this._storedStorylineDetails_Parameters;

            //region 2. Action
            this._storedStorylineDetails = await page.Action();

            //region 3. Observe
            return this._storedStorylineDetails;       
        }

        //#endregion 

        //#region NOT APART OF THE REQUEST PIPELINE AT THIS TIME

        //Page 1-2
        public async Action_2_Validate_Process(): Promise<object> {
            return this._storedStorylineDetails;
        }

        //Page 1-3
        public async Action_3_Process_StoryAuthor(): Promise<object> {
            return this._storedStorylineDetails;
        }

        //Page 1-4
        public async Action_4_Process_StoryCharacters(): Promise<object> {
            return this._storedStorylineDetails;
        }

        //Page 1-5
        public async Action_5_Process_StorySetting(): Promise<object> {
            return this._storedStorylineDetails;
        }

        //Page 1-6
        public async Action_6_Process_StoryExperiences(): Promise<object> {
            return this._storedStorylineDetails;
        }

        //Page 1-7
        public async Action_7_Process_StoryResources(): Promise<object> {
            return this._storedStorylineDetails;
        }

        //Page 1-8
        public async Action_8_Process_CRUD(): Promise<object> {
            return this._storedStorylineDetails;
        }

        //Page 1-9
        public async Action_9_Verify_Process(): Promise<object> {
            return this._storedStorylineDetails;
        }

        //#endregion

        //#endregion 
    }
    //#endregion
}