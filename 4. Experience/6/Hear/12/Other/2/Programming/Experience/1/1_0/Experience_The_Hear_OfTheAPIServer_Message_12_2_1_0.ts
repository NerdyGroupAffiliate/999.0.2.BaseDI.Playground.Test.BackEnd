import * as aClass_Programming_ScriptExperience_BuilderPattern_12_2_1_0 from "../../../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptExperience_BuilderPattern_12_2_1_0";

import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptRoutable_12_2_1_0 from "../../../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptRoutable_12_2_1_0";

import * as ExtraData_12_2_1_0 from "../../../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";

import * as Extension_Experience_The_Movement_FromFacebookPage_DataTransfer_2_3_1_0 from "../../../../../../../../../../0. Script/Extensions/2/Generate Brand Trust/3/Social Media/Method/1/1_0/Extension_Experience_The_Movement_FromFacebookPage_DataTransfer_2_3_1_0";
import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

import * as path from 'path';

var express = null;

if (process.env.APP_ENV == "SERVER") {
    express = require("express");
}

export namespace BaseDI.Playground.Test.BackEnd.Experience.Hear.Programming_1 {
    export class Experience_The_Hear_OfTheAPIServer_Message_12_2_1_0 extends aClass_Programming_ScriptExperience_BuilderPattern_12_2_1_0.BaseDI.Playground.Test.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptExperience_BuilderPattern_12_2_1_0 {
        //#region 1. Assign
        private _extraData: ExtraData_12_2_1_0.BaseDI.Playground.Test.BackEnd.Programming_1.ExtraData_12_2_1_0 = new ExtraData_12_2_1_0.BaseDI.Playground.Test.BackEnd.Programming_1.ExtraData_12_2_1_0;
        //#endregion

        //#region 2. Ready
        constructor(extraData: ExtraData_12_2_1_0.BaseDI.Playground.Test.BackEnd.Programming_1.ExtraData_12_2_1_0) {
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
        private _centralizedMaster: any;
        private _client: any;

        private _storylineDetails: object = new Object();
        private _storylineDetails_Parameters: object = new Object();

        private _repository: IContract_Programming_Repository_12_2_1_0;

        private _extraData: ExtraData_12_2_1_0.BaseDI.Playground.Test.BackEnd.Programming_1.ExtraData_12_2_1_0 = new ExtraData_12_2_1_0.BaseDI.Playground.Test.BackEnd.Programming_1.ExtraData_12_2_1_0;
        private _entryPoint: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Playground.Test.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;
        //#endregion

        //#region 2. Ready
        constructor(client: any, centralizedMaster: any, storylineDetails: object, storylineDetails_Parameters: object, repository: IContract_Programming_Repository_12_2_1_0, extraData: ExtraData_12_2_1_0.BaseDI.Playground.Test.BackEnd.Programming_1.ExtraData_12_2_1_0, entryPoint: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Playground.Test.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0) {
            this._centralizedMaster = centralizedMaster;
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
            const builder = new Implement_DesignPattern_Builder_Experience_12_2_1_0(this._client, this._centralizedMaster, this._storylineDetails, this._storylineDetails_Parameters, this._repository, this._extraData, this._entryPoint);

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
    export class Implement_DesignPattern_Builder_Experience_12_2_1_0 extends aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Playground.Test.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>
    {
        //#region 1. Assign
        private _centralizedMaster: any;
        private _client: any;

        private _storylineDetails: object = new Object();
        private _storylineDetails_Parameters: object = new Object();

        private _repository: IContract_Programming_Repository_12_2_1_0;

        private _extraData: ExtraData_12_2_1_0.BaseDI.Playground.Test.BackEnd.Programming_1.ExtraData_12_2_1_0 = new ExtraData_12_2_1_0.BaseDI.Playground.Test.BackEnd.Programming_1.ExtraData_12_2_1_0;
        private _entryPoint: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Playground.Test.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;
        //#endregion

        //#region 2. Ready
        constructor(client: any, centralizedMaster: any, storylineDetails: object, storylineDetails_Parameters: object, repository: IContract_Programming_Repository_12_2_1_0, extraData: ExtraData_12_2_1_0.BaseDI.Playground.Test.BackEnd.Programming_1.ExtraData_12_2_1_0, entryPoint: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Playground.Test.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0) {
            super();

            this._centralizedMaster = centralizedMaster;
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

        //Page 1-1
        public async Action_1_Begin_Process(): Promise<object>
        {
            try
            {
                //#region COMMUNICATION TO SERVER
                if (process.env.APP_ENV == "SERVER")
                {
                    //#region MEMORIZE SERVER OPTIONS
                    let apiLocationLocalNodeJS: string = "";

                    const businessOptions: any = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Playground.Test.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(this._storylineDetails, "", "Mode", false);
                    let businessEnvironment: string = "LOCAL";
                    let businessEnvironmentPort: number = 0;
                    let businessEnvironmentHost: string = "";

                    const settingOptions: any = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Playground.Test.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(this._storylineDetails, "", "Settings", false);
                    const experienceOptions: any = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Playground.Test.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(this._storylineDetails, "", "Experiences", false);

                    let createRoutes: Array<any> = new Array<any>();
                    let readRoutes: Array<any> = new Array<any>();
                    let updateRoutes: Array<any> = new Array<any>();
                    let deleteRoutes: Array<any> = new Array<any>();

                    //#region GRAB LOCAL PORT
                    businessEnvironment = businessOptions.values.map(item => {
                        if (item.value) {
                            return item.value.map(value => {
                                if (value.key.environment) {
                                    return value.key.environment;
                                };
                            });
                        }
                    });

                    if (businessEnvironment.toString().toUpperCase() == "LOCAL") {
                        const businessOptionSettings: any = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Playground.Test.BackEnd.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode(this._storylineDetails, "", "Parameters", false);

                        businessOptionSettings.values.map(item => {
                            if (item.value) {
                                return item.value.map(value => {
                                    if (value.key.name == "NodeJS") {
                                        if (value.value.host) {
                                            businessEnvironmentHost = value.value.host;
                                        }

                                        if (value.value.port) {
                                            businessEnvironmentPort = value.value.port;
                                        }

                                        if (value.value.routes) {
                                            value.value.routes.map(route => {
                                                if (route.path && route.verb) {
                                                    switch (route.verb) {
                                                        case "POST": //CREATE
                                                            if (route.method) {
                                                                createRoutes.push({
                                                                    path: route.path + "/" + route.method,
                                                                    experienceHTMLRaw: route.experienceHTMLRaw,
                                                                    experienceHTMLView: route.experienceHTMLView,
                                                                    experienceJSONRaw: route.experienceHTMLRaw
                                                                });
                                                            }
                                                            else {
                                                                createRoutes.push({
                                                                    path: route.path,
                                                                    experienceHTMLRaw: route.experienceHTMLRaw,
                                                                    experienceHTMLView: route.experienceHTMLView,
                                                                    experienceJSONRaw: route.experienceHTMLRaw
                                                                });
                                                            }

                                                            break;

                                                        case "GET": //READ
                                                            if (route.method) {
                                                                readRoutes.push({
                                                                    path: route.path + "/" + route.method,
                                                                    experienceHTMLRaw: route.experienceHTMLRaw,
                                                                    experienceHTMLView: route.experienceHTMLView,
                                                                    experienceJSONRaw: route.experienceHTMLRaw
                                                                });
                                                            }
                                                            else {
                                                                readRoutes.push({
                                                                    path: route.path,
                                                                    experienceHTMLRaw: route.experienceHTMLRaw,
                                                                    experienceHTMLView: route.experienceHTMLView,
                                                                    experienceJSONRaw: route.experienceHTMLRaw
                                                                });
                                                            }

                                                            break;

                                                        case "PUT": //UPDATE
                                                            if (route.method) {
                                                                updateRoutes.push({
                                                                    path: route.path + "/" + route.method,
                                                                    experienceHTMLRaw: route.experienceHTMLRaw,
                                                                    experienceHTMLView: route.experienceHTMLView,
                                                                    experienceJSONRaw: route.experienceHTMLRaw
                                                                });
                                                            }
                                                            else {
                                                                updateRoutes.push({
                                                                    path: route.path,
                                                                    experienceHTMLRaw: route.experienceHTMLRaw,
                                                                    experienceHTMLView: route.experienceHTMLView,
                                                                    experienceJSONRaw: route.experienceHTMLRaw
                                                                });
                                                            }

                                                            break;

                                                        case "DELETE": //DELETE
                                                            if (route.method) {
                                                                deleteRoutes.push({
                                                                    path: route.path + "/" + route.method,
                                                                    experienceHTMLRaw: route.experienceHTMLRaw,
                                                                    experienceHTMLView: route.experienceHTMLView,
                                                                    experienceJSONRaw: route.experienceHTMLRaw
                                                                });
                                                            }
                                                            else {
                                                                deleteRoutes.push({
                                                                    path: route.path,
                                                                    experienceHTMLRaw: route.experienceHTMLRaw,
                                                                    experienceHTMLView: route.experienceHTMLView,
                                                                    experienceJSONRaw: route.experienceHTMLRaw
                                                                });
                                                            }

                                                            break;
                                                    }
                                                }
                                            });
                                        }
                                    };
                                });
                            }
                        });
                    }

                    //#endregion

                    //#endregion

                    //#region PICK THE SERVER
                    const app = express();

                    //#endregion

                    //#region SET VIEW ENGINE

                    //SET PRESENTATION VIEWS
                    let viewPaths: Array<string> = new Array<string>();

                    settingOptions.values.map(item => {
                        if (item.value) {
                            return item.value.map(value => {
                                if (value.key.name == "NodeJS") {
                                    value.value.paths.map(item2 => {
                                        viewPaths.push(item2.path);
                                    });
                                };
                            });
                        }
                    });

                    experienceOptions.values.map(item => {
                        if (item.value) {
                            return item.value.map(value => {
                                if (value.key.name == "NodeJS") {
                                    value.value.paths.map(item2 => {
                                        viewPaths.push(item2.path);
                                    });
                                };
                            });
                        }
                    });

                    app.set('view engine', 'hbs');
                    app.set('views', viewPaths);

                    //#endregion

                    //#region SET SCRIPTS CSS

                    const viewsPath = path.join(__dirname, '../Templates');

                    //console.log("Client = " + path.join(__dirname, "Distribution", "Client"));
                    //console.log("__dirname = " + path.resolve(__dirname, "..", "..", "./build/static"));                    
                    app.use(
                        "/scripts",
                        express.static("wwwroot/Client/JS", {
                            maxAge: "15d",
                            fallthrough: false
                        })
                    );

                    //#endregion

                    //#region SET HTML PAGES

                    app.get('/favicon.ico', (req, res) => res.status(204));

                    app.get("/", (req: any, res: any) => {

                        res.render('SoftwareAPIServer_Tester_12_2_1_0');
                    });

                    if (createRoutes) //CREATE
                    {
                        createRoutes.map(route => {
                            app.post("/" + route.path, (req: any, res: any) => {
                                if (route.experienceHTMLRaw) {
                                    res.send(route.experienceHTMLRaw);
                                }

                                if (route.experienceHTMLView) {
                                    res.render(route.experienceHTMLRaw);
                                }
                            });
                        });
                    }

                    if (readRoutes) //READ
                    {
                        readRoutes.map(route => {
                            app.get("/" + route.path, (req: any, res: any) => {
                                if (route.experienceHTMLRaw) {
                                    res.send(route.experienceHTMLRaw);
                                }

                                if (route.experienceHTMLView) {
                                    res.render(route.experienceHTMLRaw);
                                }
                            });
                        });
                    }

                    if (updateRoutes) //PUT
                    {
                        updateRoutes.map(route => {
                            app.put("/" + route.path, (req: any, res: any) => {
                                if (route.experienceHTMLRaw) {
                                    res.send(route.experienceHTMLRaw);
                                }

                                if (route.experienceHTMLView) {
                                    res.render(route.experienceHTMLRaw);
                                }
                            });
                        });
                    }

                    if (deleteRoutes) //DELETE
                    {
                        deleteRoutes.map(route => {
                            app.delete("/" + route.path, (req: any, res: any) => {

                            });
                        });
                    }

                    //#endregion

                    //#region SET JSON MESSAGING
                    //this._client

                    app.post('/Action', function (req, res) {
                        //const armTemplateJSONOutput = new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Master.Story.Programming_1.ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_Request_Handler_1_0.BaseDI.Master.Director.Programming_1.Director_Of_Programming_Chapter_12_2_Page_1_Request_Handler_1_0(this.ExtraData))
                        //    .SetupStoryline(this._client, this.StorylineDetails, this.StorylineDetails_Parameters, this.ExtraData, "")
                        //    .Action().then(response => {
                        //        this.C
                        //    });

                        console.log(req.body);
                    });

                    //#endregion

                    //#region START THE SERVER
                    app.listen(businessEnvironmentPort, () => {
                        console.log(`server started asdas at http://localhost:${businessEnvironmentPort}`);
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