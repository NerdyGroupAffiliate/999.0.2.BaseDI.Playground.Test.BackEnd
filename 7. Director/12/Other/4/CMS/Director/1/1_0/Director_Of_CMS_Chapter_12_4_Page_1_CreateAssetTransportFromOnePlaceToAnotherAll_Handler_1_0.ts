import * as aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0";
import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptRoutable_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptRoutable_12_2_1_0";

import * as ExtraData_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";

import * as IContract_Programming_Repository_12_2_1_0 from "../../../../../../../../0. Script/Interfaces/12/Other/2/Programming/Contract/1/1_0/IContract_Programming_Repository_12_2_1_0";

import * as ChapterPage_Page_1_1_Begin_Process_12_4_1_0 from "../../../../../../../../5. Chapter/12/Other/4/CMS/Page/1/1_0/Page_1_1_Begin_Process_12_4_1_0";
import * as ChapterPage_Page_1_2_Validate_Process_12_4_1_0 from "../../../../../../../../5. Chapter/12/Other/4/CMS/Page/1/1_0/Page_1_2_Validate_Process_12_4_1_0";
import * as ChapterPage_Page_1_3_Process_StoryAuthor_12_4_1_0 from "../../../../../../../../5. Chapter/12/Other/4/CMS/Page/1/1_0/Page_1_3_Process_StoryAuthor_12_4_1_0";
import * as ChapterPage_Page_1_4_Process_StoryCharacters_12_4_1_0 from "../../../../../../../../5. Chapter/12/Other/4/CMS/Page/1/1_0/Page_1_4_Process_StoryCharacters_12_4_1_0";
import * as ChapterPage_Page_1_5_Process_StorySetting_12_4_1_0 from "../../../../../../../../5. Chapter/12/Other/4/CMS/Page/1/1_0/Page_1_5_Process_StorySetting_12_4_1_0";
import * as ChapterPage_Page_1_6_Process_StoryExperiences_12_4_1_0 from "../../../../../../../../5. Chapter/12/Other/4/CMS/Page/1/1_0/Page_1_6_Process_StoryExperiences_12_4_1_0";
import * as ChapterPage_Page_1_7_Process_StoryResources_12_4_1_0 from "../../../../../../../../5. Chapter/12/Other/4/CMS/Page/1/1_0/Page_1_7_Process_StoryResources_12_4_1_0";
import * as ChapterPage_Page_1_8_Process_CRUD_12_4_1_0 from "../../../../../../../../5. Chapter/12/Other/4/CMS/Page/1/1_0/Page_1_8_Process_CRUD_12_4_1_0";
import * as ChapterPage_Page_1_9_Verify_Process_12_4_1_0 from "../../../../../../../../5. Chapter/12/Other/4/CMS/Page/1/1_0/Page_1_9_Verify_Process_12_4_1_0";
import * as ChapterPage_Page_1_10_End_Process_12_4_1_0 from "../../../../../../../../5. Chapter/12/Other/4/CMS/Page/1/1_0/Page_1_10_End_Process_12_4_1_0";

export namespace BaseDI.Director.CMS_1 {
    export class Director_Of_CMS_Chapter_12_4_Page_1_CreateAssetTransportFromOnePlaceToAnotherAll_Handler_1_0 extends aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0.BaseDI.Programming.Abstract_1.aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0 {
        //#region 1. Assign
        private _extraData: ExtraData_12_2_1_0.BaseDI.Script.Programming.Poco_1.ExtraData_12_2_1_0 = new ExtraData_12_2_1_0.BaseDI.Script.Programming.Poco_1.ExtraData_12_2_1_0;
        //#endregion

        //#region 2. Ready
        constructor(extraData: ExtraData_12_2_1_0.BaseDI.Script.Programming.Poco_1.ExtraData_12_2_1_0) {
            super();

            //#region 1. Assign
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
        public async Action(): Promise<object> {
            //#region 1. Assign

            //REQUIRED: Implement one of the design patterns at https://www.dofactory.com/net/design-patterns
            const designPattern = new Use_DesignPattern_Builder_Chapter_12_4_Page_1(this.ClientOrServerInstance, this.MasterStorer, this.MasterDisturber, this.MasterSensor, this.StorylineDetails, this.StorylineDetails_Parameters, this.Repository, this.ExtraData, this.EntryPoint);
            //#endregion

            //#region 2. Action

            //#region HANDLE LOGIC REQUEST
            await designPattern.Action();

            //#endregion

            //#endregion          

            //#region 3. Observe
            return this.StorylineDetails;
            //#endregion
        }
        //#endregion
    }

    //#region 5. Action Script
    export class Use_DesignPattern_Builder_Chapter_12_4_Page_1 {
        //#region 1. Assign
        private _centralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _centralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _centralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        private _clientORserverInstance: any;

        private _storylineDetails: object = new Object();
        private _storylineDetails_Parameters: object = new Object();

        private _repository: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<any>;

        private _extraData: ExtraData_12_2_1_0.BaseDI.Script.Programming.Poco_1.ExtraData_12_2_1_0 = new ExtraData_12_2_1_0.BaseDI.Script.Programming.Poco_1.ExtraData_12_2_1_0;
        private _entryPoint: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;
        //#endregion

        //#region 2. Ready
        constructor(clientORserverInstance: any, centralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>, centralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>, centralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>, storylineDetails: object, storylineDetails_Parameters: object, repository: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<any>, extraData: ExtraData_12_2_1_0.BaseDI.Script.Programming.Poco_1.ExtraData_12_2_1_0, entryPoint: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0) {
            this._centralizedStorer = centralizedStorer;
            this._centralizedDisturber = centralizedDisturber;
            this._centralizedSensor = centralizedSensor;

            this._clientORserverInstance = clientORserverInstance;

            this._storylineDetails = storylineDetails;
            this._storylineDetails_Parameters = storylineDetails_Parameters;

            this._repository = repository;

            this._extraData = extraData;
            this._entryPoint = entryPoint;

            this.Action = this.Action.bind(this);
        }
        //#endregion        

        //#region 3. Set
        //#endregion

        //#region 4. Action
        public async Action(): Promise<object> {
            const builder = new Implement_DesignPattern_Builder_Chapter_12_4_Page_1_1_0(this._clientORserverInstance, this._centralizedStorer, this._centralizedDisturber, this._centralizedSensor, this._storylineDetails, this._storylineDetails_Parameters, this._repository, this._extraData, this._entryPoint);

            await builder.Action_1_Begin_Process();

            await builder.Action_2_Validate_Process();

            await builder.Action_3_Process_StoryAuthor();
            await builder.Action_4_Process_StoryCharacters();
            await builder.Action_5_Process_StorySetting();
            await builder.Action_6_Process_StoryExperiences();
            await builder.Action_7_Process_StoryResources();

            await builder.Action_8_Process_CRUD();

            await builder.Action_9_Verify_Process();

            return await builder.Action_10_End_Process();
        }
        //#endregion
    }
    //#endregion

    //#region 6. Action Implementation
    export class Implement_DesignPattern_Builder_Chapter_12_4_Page_1_1_0 extends aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>
    {
        //#region 1. Assign
        private _centralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _centralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _centralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        private _clientORserverInstance: any;

        private _storylineDetails: object = new Object();
        private _storylineDetails_Parameters: object = new Object();

        private _repository: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<any>;

        private _extraData: ExtraData_12_2_1_0.BaseDI.Script.Programming.Poco_1.ExtraData_12_2_1_0 = new ExtraData_12_2_1_0.BaseDI.Script.Programming.Poco_1.ExtraData_12_2_1_0;
        private _entryPoint: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;
        //#endregion

        //#region 2. Ready
        constructor(clientORserverInstance: any, centralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>, centralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>, centralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>, storylineDetails: object, storylineDetails_Parameters: object, repository: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<any>, extraData: ExtraData_12_2_1_0.BaseDI.Script.Programming.Poco_1.ExtraData_12_2_1_0, entryPoint: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0) {
            super();

            this._centralizedStorer = centralizedStorer;
            this._centralizedDisturber = centralizedDisturber;
            this._centralizedSensor = centralizedSensor;

            this._clientORserverInstance = clientORserverInstance;

            this._storylineDetails = storylineDetails;
            this._storylineDetails_Parameters = storylineDetails_Parameters;

            this._repository = repository;

            this._extraData = extraData;
            this._entryPoint = entryPoint;

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

        //Page 1-7
        public async Action_7_Process_StoryResources(): Promise<object> {
            //region 1. Assign 
            var page = new ChapterPage_Page_1_7_Process_StoryResources_12_4_1_0.BaseDI.Chapter.Page.CMS_1.Page_1_7_Process_StoryResources_12_4_1_0(this._storylineDetails, this._repository);

            page.ClientOrServerInstance = this._clientORserverInstance;

            page.EntryPoint = this._entryPoint;
            page.ExtraData = this._extraData;

            page.MasterStorer = this._centralizedStorer;
            page.MasterDisturber = this._centralizedDisturber;
            page.MasterSensor = this._centralizedSensor;

            page.StorylineDetails_Parameters = this._storylineDetails_Parameters;

            //region 2. Action
            this._storylineDetails = await page.Action();

            return this._storylineDetails;
        }

        //#endregion

        //#region NOT APART OF THE REQUEST PIPELINE AT THIS TIME

        //Page 1-1
        public async Action_1_Begin_Process(): Promise<object>
        {
            return this._storylineDetails;
        }

        //Page 1-2
        public async Action_2_Validate_Process(): Promise<object> {
            return this._storylineDetails;
        }

        //Page 1-3
        public async Action_3_Process_StoryAuthor(): Promise<object> {
            return this._storylineDetails;
        }

        //Page 1-4
        public async Action_4_Process_StoryCharacters(): Promise<object> {
            return this._storylineDetails;
        }

        //Page 1-5
        public async Action_5_Process_StorySetting(): Promise<object> {
            return this._storylineDetails;
        }

        //Page 1-6
        public async Action_6_Process_StoryExperiences(): Promise<object> {
            return this._storylineDetails;
        }

        //Page 1-8
        public async Action_8_Process_CRUD(): Promise<object> {
            return this._storylineDetails;
        }

        //Page 1-9
        public async Action_9_Verify_Process(): Promise<object> {
            return this._storylineDetails;
        }

        //Page 1-10
        public async Action_10_End_Process(): Promise<object> {
            return this._storylineDetails;
        }
        //#endregion
        
        //#endregion
    }
    //#endregion
}