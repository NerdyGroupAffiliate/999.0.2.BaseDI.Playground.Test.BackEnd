import * as aClass_Programming_ScriptExperience_BuilderPattern_12_2_1_0 from "../../../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptExperience_BuilderPattern_12_2_1_0";

import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptRoutable_12_2_1_0 from "../../../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptRoutable_12_2_1_0";

import * as Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "../../../../../../../../../../7. Director/12/Other/2/Programming/Director/1/1_0/Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";

import * as ExtraData_12_2_1_0 from "../../../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";

import * as Extension_Experience_The_Movement_FromFacebookPage_DataTransfer_2_3_1_0 from "../../../../../../../../../../0. Script/Extensions/2/Generate Brand Trust/3/Social Media/Method/1/1_0/Extension_Experience_The_Movement_FromFacebookPage_DataTransfer_2_3_1_0";
import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

import * as ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../../../1. Storyline/12/Other/2/Programming/Studio/1/1_0/ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

import * as path from 'path';

var express = null;

if (process.env.APP_ENV == "SERVER") {
    express = require("express");
}

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
            const designPattern = new Use_DesignPattern_Builder_Experience_12_2_1_0(this.Client, this.MasterLeader, this.StorylineDetails, this.StorylineDetails_Parameters, this.Repository, this.ExtraData, this.EntryPoint)
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
        private _client: any;

        private _storylineDetails: object = new Object();
        private _storylineDetails_Parameters: object = new Object();

        private _repository: IContract_Programming_Repository_12_2_1_0;

        private _extraData: ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0 = new ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0;
        private _entryPoint: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;
        //#endregion

        //#region 2. Ready
        constructor(client: any, centralizedStorer: any, storylineDetails: object, storylineDetails_Parameters: object, repository: IContract_Programming_Repository_12_2_1_0, extraData: ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0, entryPoint: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0) {
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
            const builder = new Implement_DesignPattern_Builder_Experience_12_2_1_0(this._client, this._centralizedStorer, this._storylineDetails, this._storylineDetails_Parameters, this._repository, this._extraData, this._entryPoint);

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
        private _centralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _client: any;

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
            this._serverInfo = { "server_director": this }
        }
        //#endregion

        //#region 4. Action

        //#region EXECUTE LOGIC INSTUCTIONS

        //Page 1-1
        public async Action_1_Begin_Process(): Promise<object> {
            try
            {
                console.log("Hello Mark 1");

                //#region COMMUNICATION TO SERVER
                if (process.env.APP_ENV == "SERVER")
                {
                    console.log("Hello Mark 2");

                    //#region MEMORIZE SERVER OPTIONS

                    const serverEnvironment: any = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(this._storylineDetails, "searchkey", "SetupItem_SetBuyer_ProductLaunching_Software_TransportEnvironment", false);

                    const serverEnvironmentName: number = serverEnvironment?.value?.SetupItemEnvironmentName;
                    const serverEnvironmentPort: number = serverEnvironment?.value?.SetupItemEnvironmentPort;
                    const serverEnvironmentDomainName: number = serverEnvironment?.value?.SetupItemEnvironmentDomainName;

                    const serverEnvironmentBuildItemClientPath: string = serverEnvironment?.value?.SetupItemEnvironmentClient?.SetupItemBuildItemClientPath;
                    const serverEnvironmentDataPath: string = serverEnvironment?.value?.SetupItemEnvironmentClient?.SetupItemDataPath;
                    const serverEnvironmentDocumentPath: string = serverEnvironment?.value?.SetupItemEnvironmentClient?.SetupItemDocumentPath;
                    const serverEnvironmentFontPath: string = serverEnvironment?.value?.SetupItemEnvironmentClient?.SetupItemFontPath;
                    const serverEnvironmentImagePath: string = serverEnvironment?.value?.SetupItemEnvironmentClient?.SetupItemImagePath;
                    const serverEnvironmentScriptPath: string = serverEnvironment?.value?.SetupItemEnvironmentClient?.SetupItemScriptPath;

                    const serverEnvironmentServerRoutesGET: Array<any> = serverEnvironment?.value?.SetupItemEnvironmentServer?.SetupItemTransportItemRoutesGET;

                    //#endregion

                    //#region HANDLE THE DEFAULTS

                    this.HandleChapterDefaults();

                    //#endregion

                    //#region PICK THE SERVER
                    this._server = express();

                    //#endregion

                    //#region SET VIEW ENGINE

                    //SET PRESENTATION VIEWS

                    //this._server.set('view engine', 'hbs');
                    //this._server.set('views', viewPaths);

                    //#endregion

                    //#region SET STATIC FOLDERS

                    //const viewsPath = path.join(__dirname, '../Templates');

                    //_server.use(
                    //    "/data",
                    //    express.static(serverEnvironmentDataPath, {
                    //        maxAge: "15d",
                    //        fallthrough: false
                    //    })
                    //);

                    //_server.use(
                    //    "/documents",
                    //    express.static(serverEnvironmentDocumentPath, {
                    //        maxAge: "15d",
                    //        fallthrough: false
                    //    })
                    //);

                    //_server.use(
                    //    "/fonts",
                    //    express.static(serverEnvironmentFontPath, {
                    //        maxAge: "15d",
                    //        fallthrough: false
                    //    })
                    //);

                    this._server.use(
                       "/images",
                       express.static(serverEnvironmentImagePath, {
                           maxAge: "15d",
                           fallthrough: false
                       })
                    );

                    //_server.use(
                    //    "/scripts",
                    //    express.static(serverEnvironmentScriptPath, {
                    //        maxAge: "15d",
                    //        fallthrough: false
                    //    })
                    //);

                    //#endregion

                    //#region SET SERVER RESPONSE

                    //#region OUTPUT THE RESPONSE
                    this._server.get('/favicon.ico', (req, res) => res.status(204));

                    const Step_2_0_Custom_Output_ServerRequestToClient_1_0 = (controllerRoute: Object, controllerName: string, controllerModelDataLocalObject: Object, controllerModelDataLocalParameter: string, controllerModelDataRemote: Object, req: any, res: any) =>
                    {
                        console.log(controllerName);
                        console.log(controllerModelDataLocalParameter);

                        //#region 1. Assign
                        let armTemplateJSONOutput: any;

                        let outputs: any = new Object();
                        let outputObservations: object = new Object();

                        let outputObservationsPrintOut: string = "";

                        let extraData = new ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0;

                        let isProcessComplete: boolean = false;
                        let handleObservation: Promise<any>;

                        extraData.KeyValuePairs.setValue("Request", Object.assign(req, Object));
                        extraData.KeyValuePairs.setValue("Response", Object.assign(res, Object));
                        extraData.KeyValuePairs.setValue("Server", Object.assign(this._server, Object));

                        //#endregion

                        //#region 2. Action

                        try
                        {
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
                        catch (storyMistake)
                        {
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
                        if (serverEnvironmentServerRoutes.length > 0)
                        {
                            serverEnvironmentServerRoutes.map(item =>
                            {
                                const controllerRoutes: Array<any> = item.SetupItemTransportItemRoute.ControllerRoutes;
                                const controllerName: string = item.SetupItemTransportItemRoute.ControllerName;
                                const controllerModelDataLocalObject: Object = item.SetupItemTransportItemRoute.ModelDataLocalObject;
                                const controllerModelDataLocalParameter: string = item.SetupItemTransportItemRoute.ModelDataLocalParameter;
                                const controllerModelDataRemote: Object = item.SetupItemTransportItemRoute.ModelDataRemote;

                                if (controllerRoutes.length > 0) {
                                    controllerRoutes.map(route => {
                                        console.log("route =");
                                        console.log(route);

                                        this._server.get(route, (req: any, res: any) => {
                                            Step_2_0_Custom_Output_ServerRequestToClient_1_0(route, controllerName, controllerModelDataLocalObject, controllerModelDataLocalParameter, controllerModelDataRemote, req, res);
                                        });
                                    });
                                }
                            })
                        }
                    }

                    //READ GET ROUTES
                    Step_1_0_Custom_Control_ClientRequestToServer_1_0(serverEnvironmentServerRoutesGET);

                    //#endregion

                    //#endregion

                    //#region START THE SERVER
                    this._server.listen(serverEnvironmentPort, () => {
                        console.log(`server started at http://localhost:${serverEnvironmentPort}`);
                    });
                    //#endregion
                }
                //#endregion
            }
            catch (e)
            {
                //#region HANDLE THE MISTAKES

                console.log("error = " + e);

                //#endregion
            }

            return this._storylineDetails;
        }

        //#endregion

        //#region NOT APART OF THE REQUEST PIPELINE AT THIS TIME

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

        //Page 1-7
        public async Action_7_Process_StoryResources(): Promise<object> {
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