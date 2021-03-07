import * as aClass_Programming_ScriptExperience_BuilderPattern_12_2_1_0 from "../../../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptExperience_BuilderPattern_12_2_1_0";

import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptRoutable_12_2_1_0 from "../../../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptRoutable_12_2_1_0";

import * as Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "../../../../../../../../../../7. Director/12/Other/2/Programming/Director/1/1_0/Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";

import * as ExtraData_12_2_1_0 from "../../../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";

import * as Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0 from "../../../../../../../../../../0. Script/Extensions/12/Other/3/Web Development/Method/13/1_0/Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0";
import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

import * as ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../../../1. Storyline/12/Other/2/Programming/Studio/1/1_0/ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

export namespace BaseDI.BackEnd.Experience.Hear.Web_Development_13 {
    export class Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0 extends aClass_Programming_ScriptExperience_BuilderPattern_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptExperience_BuilderPattern_12_2_1_0 {
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
            const designPattern = new Use_DesignPattern_Builder_Experience_12_2_1_0(this.Client, this.MasterLeader, this.MasterStorer, this.MasterSensor, this.MasterDisturber, this.StorylineDetails, this.StorylineDetails_Parameters, this.Repository, this.ExtraData, this.EntryPoint)
            //#endregion

            //#region 2. Action
            this.StorylineDetails = await designPattern.Action();
            //#endregion

            //#region 3. Observe
            return this.StorylineDetails;
            //#endregion
        }
        //#endregion
    }

    //#region 5. Action Script
    export class Use_DesignPattern_Builder_Experience_12_2_1_0 {
        //#region 1. Assign
        private _centralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _centralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _centralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        private _client: any;

        private _extraData: ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0 = new ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0;
        private _entryPoint: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        private _masterLeader: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        private _storylineDetails: object = new Object();
        private _storylineDetails_Parameters: object = new Object();

        private _repository: IContract_Programming_Repository_12_2_1_0;

        //#endregion

        //#region 2. Ready
        constructor(client: any, masterLeader: any, centralizedStorer: any, centralizedSensor: any, centralizedDisturber: any, storylineDetails: object, storylineDetails_Parameters: object, repository: IContract_Programming_Repository_12_2_1_0, extraData: ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0, entryPoint: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0) {
            
            this._centralizedStorer = centralizedStorer;
            this._centralizedSensor = centralizedSensor;
            this._centralizedDisturber = centralizedDisturber;

            this._client = client;

            this._masterLeader = masterLeader;

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
            const builder = new Implement_DesignPattern_Builder_Experience_12_2_1_0(this._client, this._masterLeader, this._centralizedStorer, this._centralizedSensor, this._centralizedStorer, this._storylineDetails, this._storylineDetails_Parameters, this._repository, this._extraData, this._entryPoint);

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
    export class Implement_DesignPattern_Builder_Experience_12_2_1_0 extends aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>
    {
        //#region 1. Assign
        private _actionName: string = "";

        private _centralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _centralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _centralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        private _client: any;

        private _entryPointName: string = "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0";

        private _masterLeader: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        private _server: any;

        private _storylineDetails: object = new Object();
        private _storylineDetails_Parameters: object = new Object();

        private _repository: IContract_Programming_Repository_12_2_1_0;

        private _extraData: ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0 = new ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0;
        private _entryPoint: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        private _serverInfo: any;

        public Update_Server;

        //#endregion

        //#region 2. Ready
        constructor(client: any, masterLeader: any, centralizedStorer: any, centralizedSensor: any, centralizedDisturber: any, storylineDetails: object, storylineDetails_Parameters: object, repository: IContract_Programming_Repository_12_2_1_0, extraData: ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0, entryPoint: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0) {
            super();

            this._centralizedStorer = centralizedStorer;
            this._centralizedSensor = centralizedSensor;
            this._centralizedDisturber = centralizedDisturber;

            this._client = client;

            this._masterLeader = masterLeader;

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

        //Page 1-5
        public async Action_5_Process_StorySetting(): Promise<object> {
            try
            {
                this._actionName = this?._client["actionName"];

                if (process.env.APP_ENV == "SERVER" && this._actionName.toUpperCase().includes("PROCESSREQUEST_1_0")) {

                    //#region 1. Assign


                    //#region MEMORIZE SERVER OPTIONS

                    this._server = await Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.BaseDI.BackEnd.Web_Development.Extensions_13.Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.Step_X_X_Custom_Store_ServerDefaultSettingsToMemory_1_0(this._storylineDetails, this._centralizedStorer, this._entryPointName, "Action_5_Process_StorySetting");

                    //#endregion

                    //#endregion

                    //#region 2. Action

                    //#region OUTPUT THE RESPONSE

                    const Step_2_0_Custom_Output_ServerRequestToClient_1_0 = (controllerRoute: Object, controllerName: string, controllerModelDataLocalObject: Object, controllerModelDataLocalParameter: string, controllerModelDataRemote: Object, req: any, res: any) => {
                        //#region 1. Assign
                        let armTemplateJSONOutput: any;

                        let outputs: any = new Object();
                        let outputObservations: object = new Object();

                        let outputObservationsPrintOut: string = "";

                        let extraData = new ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0;

                        let isProcessComplete: boolean = false;
                        let handleObservation: Promise<any>;

                        this._serverInfo = {
                            "server_director": this,
                            "Request": Object.assign(req, Object),
                            "Response": Object.assign(res, Object),
                            "Server": Object.assign(this._server.Server.Instance, Object)
                        }

                        //#endregion

                        //#region 2. Action

                        try {
                            //#region EXECUTE OUR LOGIC

                            //#region PROCESS LOGIC UPDATES
                            this.Update_Server = (storylineDetails: object) => {
                                this._storylineDetails = storylineDetails;
                            }

                            const Action = (output) => {
                                handleObservation = new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Story.Programming_1.ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0.BaseDI.BackEnd.Director.Programming_1.Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(extraData))
                                    .SetupStoryline(this._serverInfo, null, null, extraData, "", controllerName, controllerModelDataLocalParameter)
                                    .Action();
                            }
                            //#endregion

                            Action(armTemplateJSONOutput);

                            //#endregion
                        }
                        catch (storyMistake) {
                            //#region PRINT OUT MISTAKES
                            console.log(storyMistake);
                            //#endregion
                        }

                        //#endregion

                        //#region 3. Observe
                        handleObservation.then(response => {
                            const result: string = unescape(response?.outputs[1].baseDIObservations[0].baseDIObservations[0].observation.metadata[3].item.presentation[0].htmlResult)

                            res.send(result);

                        });

                        //#endregion
                    }
                    //#endregion

                    //#region INPUT THE REQUEST
                    const Step_1_0_Custom_Control_ClientRequestToServer_1_0 = (serverEnvironmentServerRoutes: Array<any>) => {
                        if (serverEnvironmentServerRoutes.length > 0) {
                            serverEnvironmentServerRoutes.map(item => {
                                const controllerRoutes: Array<any> = item.SetupItemTransportItemRoute.ControllerRoutes;
                                const controllerName: string = item.SetupItemTransportItemRoute.ControllerName;
                                const controllerModelDataLocalObject: Object = item.SetupItemTransportItemRoute.ModelDataLocalObject;
                                const controllerModelDataLocalParameter: string = item.SetupItemTransportItemRoute.ModelDataLocalParameter;
                                const controllerModelDataRemote: Object = item.SetupItemTransportItemRoute.ModelDataRemote;

                                if (controllerRoutes.length > 0) {
                                    controllerRoutes.map(route => {
                                        //console.log("route =");
                                        //console.log(route);

                                        this._server.Server.Instance.get(route, (req: any, res: any) => {
                                            Step_2_0_Custom_Output_ServerRequestToClient_1_0(route, controllerName, controllerModelDataLocalObject, controllerModelDataLocalParameter, controllerModelDataRemote, req, res);
                                        });
                                    });
                                }
                            })
                        }
                    }
                    
                    //READ ROUTES

                    Step_1_0_Custom_Control_ClientRequestToServer_1_0(this._server.Server.Verbs.Get); //GET ROUTES

                    //#endregion

                    //#endregion

                    //#region 3. Observe

                    //#region START THE SERVER
                    this._server.Server.Instance.listen(this._server.Server.Port, () => {
                        console.log(`server started at http://localhost:${this._server.Server.Port}`);
                    });
                    //#endregion

                    //#endregion
                }
            }
            catch (e)
            {
                //#region HANDLE THE MISTAKES

                console.log("error = " + e);

                //#endregion
            }

            return this._storylineDetails;
        }

        //Page 1-7
        public async Action_7_Process_StoryResources(): Promise<object> {
            this._actionName = this?._client["actionName"];

            if (process.env.APP_ENV == "SERVER" && this._actionName.toUpperCase().includes("COPYSTATICFILES_1_0")) {
                {
                    //#region DESCRIBE THE MEMORIES

                    //#endregion

                    //#region RECALL THE MEMORIES

                    //#endregion

                    //#region EXECUTE THE VISION

                    await Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.BaseDI.BackEnd.Web_Development.Extensions_13.Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.Step_X_X_Custom_Store_LocalFilesToServer_1_0(this._storylineDetails);

                    //#endregion

                    //#region REPORT THE FEEDBACK

                    //#endregion
                }

                return this._storylineDetails;
            }
        }

        //#endregion

        //#region NOT APART OF THE REQUEST PIPELINE AT THIS TIME

        //Page 1-1
        public async Action_1_Begin_Process(): Promise<object> {
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
}