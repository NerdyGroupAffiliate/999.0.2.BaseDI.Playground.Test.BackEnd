import * as aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0";
import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptRoutable_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptRoutable_12_2_1_0";

import * as ExtraData_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";

import * as IContract_Programming_Repository_12_2_1_0 from "../../../../../../../../0. Script/Interfaces/12/Other/2/Programming/Contract/1/1_0/IContract_Programming_Repository_12_2_1_0";

export namespace BaseDI.BackEnd.Director.Advertising_3
{
    export class Director_Of_Advertising_Chapter_1_1_Page_3_CreateWhichTopicAPersonIsAwareOf_Handler_1_0 extends aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0 {
        //#region 1. Assign
        private _extraData: ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0 = new ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0;
        //#endregion

        //#region 2. Ready
        constructor(extraData: ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0) {
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
            const designPattern = new Use_DesignPattern_Builder_Chapter_1_1_Page_3(this.Client, this.MasterLeader, this.StorylineDetails, this.StorylineDetails_Parameters, this.Repository, this.ExtraData, this.EntryPoint)
            //#endregion

            //#region 2. Action
            await designPattern.Action();
            //#endregion

            //#region 3. Observe
            return this.StorylineDetails;
            //#endregion
        }
        //#endregion
    }

    //#region 5. Action Script
    export class Use_DesignPattern_Builder_Chapter_1_1_Page_3 {
        //#region 1. Assign
        private _centralizedStorer: any;
        private _client: any;

        private _storylineDetails: object = new Object();
        private _storylineDetails_Parameters: object = new Object();

        private _repository: IContract_Programming_Repository_12_2_1_0;

        private _extraData: ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0 = new ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0;
        private _entryPoint: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;
        //#endregion

        //#region 2. Ready
        constructor(client: any, centralizedStorer: any, storylineDetails: object, storylineDetails_Parameters: object, repository: IContract_Programming_Repository_12_2_1_0, extraData: ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0, entryPoint: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0)
        {
            this._centralizedStorer = centralizedStorer;
            this._client = client;

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
            const builder = new Implement_DesignPattern_Builder_Chapter_1_1_Page_3_1_0(this._client, this._centralizedStorer,this._storylineDetails, this._storylineDetails_Parameters, this._repository, this._extraData, this._entryPoint);

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

    //#region 6. Action Implementation
    export class Implement_DesignPattern_Builder_Chapter_1_1_Page_3_1_0 extends aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>
    {
        //#region 1. Assign
        private _centralizedStorer: any;
        private _client: any;

        private _storylineDetails: object = new Object();
        private _storylineDetails_Parameters: object = new Object();

        private _repository: IContract_Programming_Repository_12_2_1_0;

        private _extraData: ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0 = new ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0;
        private _entryPoint: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;
        //#endregion

        //#region 2. Ready
        constructor(client: any, centralizedStorer: any, storylineDetails: object, storylineDetails_Parameters: object, repository: IContract_Programming_Repository_12_2_1_0, extraData: ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0, entryPoint: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0) {
            super();

            this._centralizedStorer = centralizedStorer;
            this._client = client;

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
        }
        //#endregion

        //#region 3. Set
        private HandleChapterDefaults() {

        }
        //#endregion

        //#region 4. Action

        //#region EXECUTE LOGIC INSTUCTIONS

        //#endregion

        //#region NOT APART OF THE REQUEST PIPELINE AT THIS TIME

        public async Action_10_End_Process(): Promise<object> {
            return this._storylineDetails;
        }

        public async Action_1_Begin_Process(): Promise<object> {
            return this._storylineDetails;
        }

        public async Action_2_Validate_Process(): Promise<object> {
            return this._storylineDetails;
        }

        public async Action_3_Process_StoryAuthor(): Promise<object> {
            return this._storylineDetails;
        }

        public async Action_4_Process_StoryCharacters(): Promise<object> {
            return this._storylineDetails;
        }

        public async Action_5_Process_StorySetting(): Promise<object> {
            return this._storylineDetails;
        }

        public async Action_6_Process_StoryExperiences(): Promise<object> {
            return this._storylineDetails;
        }

        public async Action_7_Process_StoryResources(): Promise<object> {
            return this._storylineDetails;
        }

        public async Action_8_Process_CRUD(): Promise<object> {
            return this._storylineDetails;
        }

        public async Action_9_Verify_Process(): Promise<object> {
            return this._storylineDetails;
        }

        //#endregion

        //#endregion
    }
}