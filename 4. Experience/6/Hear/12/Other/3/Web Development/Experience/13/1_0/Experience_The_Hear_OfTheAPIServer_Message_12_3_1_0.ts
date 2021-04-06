//#region Imports

//#region BaseDI

import * as aClass_Programming_ScriptExperience_BuilderPattern_12_2_1_0 from "../../../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptExperience_BuilderPattern_12_2_1_0";

import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptRoutable_12_2_1_0 from "../../../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptRoutable_12_2_1_0";

import * as Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "../../../../../../../../../../7. Director/12/Other/2/Programming/Director/1/1_0/Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";

import * as ExtraData_12_2_1_0 from "../../../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";
import * as SingleParmPoco_12_2_1_0 from "../../../../../../../../../../0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

import * as Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0 from "../../../../../../../../../../0. Script/Extensions/12/Other/3/Web Development/Method/13/1_0/Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0";
import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

import * as ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../../../1. Storyline/12/Other/2/Programming/Studio/1/1_0/ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

//#endregion

//#endregion

export namespace BaseDI.Professional.Experience.Hear.Web_Development_13
{
    export class Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0 extends aClass_Programming_ScriptExperience_BuilderPattern_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptExperience_BuilderPattern_12_2_1_0
    {
        //#region 1. Assign

        //MISC
        private _storedExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0 = new ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //#endregion

        //#region 2. Ready

        constructor(extraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0)
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

            //REQUIRED: Implement one of the design patterns at https://www.dofactory.com/net/design-patterns
            const designPattern = new Use_DesignPattern_Builder_Experience_12_2_1_0(this.ClientOrServerInstance, this.MasterLeader, this.MasterStorer, this.MasterSensor, this.MasterDisturber, this.StorylineDetails, this.StorylineDetails_Parameters, this.Repository, this.ExtraData, this.DirectorOrExperienceRequestHandler)

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
    export class Use_DesignPattern_Builder_Experience_12_2_1_0
    {
        //#region 1. Assign

        //SETTINGS
        private _storedAppSettings: any;

        //CLIENT/SERVER
        private _storedClientORserverInstance: any;

        //DATASET
        private _storedStorylineDetails: object = new Object();
        private _storedStorylineDetails_Parameters: object = new Object();

        //MISC
        private _storedExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0 = new ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //PLUMBING
        private _stored_CentralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _stored_CentralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _stored_CentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        private _stored_ExperienceRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        private _stored_MasterLeader: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        private _stored_Repository: IContract_Programming_Repository_12_2_1_0; 

        //#endregion

        //#region 2. Ready

        constructor(parameterClientORserverInstance: any, parameterMasterLeader: any, parameterCentralizedStorer: any, parameterCentralizedSensor: any, parameterCentralizedDisturber: any, parameterStorylineDetails: object, parameterStorylineDetails_Parameters: object, parameterRepository: IContract_Programming_Repository_12_2_1_0, parameterExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0, parameter_ExperienceRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0)
        {
            //#region 1. INPUTS

            //#region MEMORIZE app settings

            this._storedAppSettings = parameterClientORserverInstance["appSettings"];

            //#endregion

            //#region MEMORIZE clientOrServer instance

            this._storedClientORserverInstance = parameterClientORserverInstance;

            //#endregion

            //#region MEMORIZE centralized processes

            this._stored_CentralizedDisturber = parameterCentralizedDisturber;
            this._stored_CentralizedSensor = parameterCentralizedSensor;
            this._stored_CentralizedStorer = parameterCentralizedStorer;

            this._stored_MasterLeader = parameterMasterLeader;

            //#endregion

            //#region MEMORIZE data stragety

            this._stored_Repository = parameterRepository;

            //#endregion

            //#region MEMORIZE experience request handler

            this._stored_ExperienceRequestHandler = parameter_ExperienceRequestHandler;

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

            this.HandleDefaults();

            this.Action = this.Action.bind(this);

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#endregion
        }

        //#endregion        

        //#region 3. Set

        private HandleDefaults(): void
        {
            //#region 1. INPUTS

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#endregion

            //#region 2. PROCESS


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

            //#region ARRANGE execution order

            //#region IDEAL CASE - USE builder pattern

            const builder = new Implement_DesignPattern_Builder_Experience_12_2_1_0(this._storedClientORserverInstance, this._stored_MasterLeader, this._stored_CentralizedStorer, this._stored_CentralizedDisturber, this._stored_CentralizedSensor, this._storedStorylineDetails, this._storedStorylineDetails_Parameters, this._stored_Repository, this._storedExtraData, this._stored_ExperienceRequestHandler);

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

    //#region 6. Action Implementation
    export class Implement_DesignPattern_Builder_Experience_12_2_1_0 extends aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>
    {
        //#region 1. Assign

        //SETTINGS
        private _storedAppSettings: any;

        //CLIENT/SERVER
        private _storedClientORserverInstance: any;

        private _storedServerInstance: any;
        private _storedServerInstanceInfo: any;

        //DATASET
        private _storedStorylineDetails: object = new Object();
        private _storedStorylineDetails_Parameters: object = new Object();

        //MISC
        private _storedExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0 = new ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //PLUMBING
        private _stored_CentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _stored_CentralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _stored_CentralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;      

        private _stored_ExperienceRequestHandler: any
        private _stored_ExperienceRequestHandlerActionName: string = "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0";

        private _stored_MasterLeader: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        private _stored_Repository: IContract_Programming_Repository_12_2_1_0;

        public StoredStartUpCallBack;

        //#endregion

        //#region 2. Ready

        constructor(parameterClientORserverInstance: any, parameterMasterLeader: any, parameterCentralizedStorer: any, parameterCentralizedSensor: any, parameterCentralizedDisturber: any, parameterStorylineDetails: object, parameterStorylineDetails_Parameters: object, parameterRepository: IContract_Programming_Repository_12_2_1_0, parameterExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0, parameter_ExperienceRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0)
        {
            super();

            //#region 1. INPUTS

            //#region MEMORIZE app settings

            this._storedAppSettings = parameterClientORserverInstance["appSettings"];

            //#endregion

            //#region MEMORIZE clientOrServer instance

            this._storedClientORserverInstance = parameterClientORserverInstance;

            //#endregion

            //#region MEMORIZE centralized processes

            this._stored_CentralizedDisturber = parameterCentralizedDisturber;
            this._stored_CentralizedSensor = parameterCentralizedSensor;
            this._stored_CentralizedStorer = parameterCentralizedStorer;

            this._stored_MasterLeader = parameterMasterLeader;

            //#endregion

            //#region MEMORIZE data stragety

            this._stored_Repository = parameterRepository;

            //#endregion

            //#region MEMORIZE experience request handler

            this._stored_ExperienceRequestHandler = parameter_ExperienceRequestHandler;

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

        public HandleDefaults() : void
        {
            //#region 1. INPUTS

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process defaults

            try
            {
                //#region IDEAL CASE - USE request parser

                //STORE request action name
                this._stored_ExperienceRequestHandlerActionName = this?._storedClientORserverInstance["actionName"];

                //#endregion
            }
            catch (mistake)
            {

                //#region EDGE CASE - USE developer logger

                if (storedDeveloperMode) {
                    this._storedClientORserverInstance["processStepNumber"] = this._storedClientORserverInstance["processStepNumber"] + 1;

                    console.log("STEP " + this._storedClientORserverInstance["processStepNumber"] + " Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.cs -> Implement_DesignPattern_Builder_Experience_12_3_1_0 -> HandleDefaults -> [FAILED parsing a request [storedServerHTTPRequestInstance FROM storedClientORserverInstance], [storedServerInstanceExperienceRequestHandler FROM storedClientORserverInstance] or [stored_ExperienceRequestHandlerActionName FROM storedClientORserverInstance] for ***Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0***");
                }

                //#endregion

                throw mistake;
            }

            //#endregion


            //#endregion

            //#region 3. OUTPUT

            //#endregion
        }

        //#endregion

        //#region 4. Action

        //#region EXECUTE LOGIC INSTUCTIONS

        //Page 1-5
        public async Action_5_Process_StorySetting(): Promise<object>
        {
            //#region 1. INPUTS

            //#region DEFINE client response

            let storedClientResponse: any = null;

            //#endregion

            //#region DEFINE data response

            let storedDataResponse: Promise<any> = null;

            //#endregion

            //#region DEFINE event handlers

            let Action = null;
            let Step_1_0_Custom_Control_ClientRequestToServer_1_0 = null;
            let Step_2_0_Custom_Output_ServerRequestToClient_1_0 = null;
 
            //#endregion

            //#region DEFINE extra data

            let storedExtraData = new ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

            //#endregion

            //#region DEFINE route details

            let storedRouteListDetails: any = null;

            //#endregion

            //#region DEFINE server routing

            let storedControllerRoutes: Array<any> = null;
            let storedControllerName: string = "";
            let storedControllerModelDataLocalParameter: string = "";
            let storedControllerModelDataLocalObject: any = null;
            let storedControllerModelDataRemote: any = null;   

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#region MEMORIZE server instance

            //STORE routing details

            this._storedServerInstance = await Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.BaseDI.Professional.Web_Development.Extensions_13.Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.Step_X_X_Custom_Store_ServerDefaultSettingsToMemory_1_0(this._storedStorylineDetails, this._stored_CentralizedStorer, this._stored_ExperienceRequestHandlerActionName, "Action_5_Process_StorySetting");

            storedRouteListDetails = this._storedServerInstance.Server.Verbs.Get;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try
            {
                if (process.env.APP_ENV == "SERVER" && this._stored_ExperienceRequestHandlerActionName.toUpperCase().includes("PROCESSHTTPREQUEST_1_0"))
                {

                    //#region EXECUTE http request

                    //#region IDEAL CASE - USE baseDI pipeline

                    //#region 2. OUTPUT http response

                    const Step_2_0_Custom_Output_ServerRequestToclientORserverInstance_1_0 = (parameterControllerRoute: Object, parameterControllerName: string, parameterControllerModelDataLocalParameter: string, parameterControllerModelDataLocalObject: Object, parameterControllerModelDataRemote: Object, parameterRequest: any, parameterResponse: any) =>
                    {
                        //#region HANDLE application defaults

                        if (process.env.APP_ENV != undefined && process.env.APP_ENV != null && process.env.APP_ENV.toUpperCase() == "SERVER") {
                            this._storedClientORserverInstance = {
                                "appSettings": process.env,
                                "serverStartUp": this
                            }
                        }

                        this._storedServerInstanceInfo = {
                            "server_director": this,
                            "Request": Object.assign(parameterRequest, Object),
                            "Response": Object.assign(parameterResponse, Object),
                            "Server": Object.assign(this._storedServerInstance.Server.Instance, Object)
                        }

                        //#endregion

                        //#region EDGE CASE - USE updates handler

                        this._storedClientORserverInstance["StartUpCallBack"] = (response: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): any => {
                            return this._storedStorylineDetails;
                        }

                        //#endregion

                        const Action = (parameterClientRequestByName: string, parameterClientRequestByNameParameters: string, parameterExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0) => {
                            storedDataResponse = new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Professional.Story.Programming_1.ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0.BaseDI.Professional.Director.Programming_1.Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(storedExtraData))
                                .SetupStoryline(this._storedServerInstanceInfo, null, null, parameterExtraData, "", parameterClientRequestByName, parameterClientRequestByNameParameters)
                                .Action();
                        }

                        Action(parameterControllerName, parameterControllerModelDataLocalParameter, this._storedExtraData);
                    }

                    //#endregion

                    //#region 1. INPUT http request

                    const Step_1_0_Custom_Control_storedClientORserverInstanceRequestToServer_1_0 = (parameterRouteListDetails: Array<any>) =>
                    {
                        if (parameterRouteListDetails.length > 0)
                        {
                            //#region SEARCH routing list details

                            //#region EDGE CASE - USE developer logger

                            if (storedDeveloperMode) {
                                this._storedClientORserverInstance["processStepNumber"] = this._storedClientORserverInstance["processStepNumber"] + 1;

                                console.log("STEP " + this._storedClientORserverInstance["processStepNumber"] + " Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.cs -> Implement_DesignPattern_Builder_Chapter_12_2_Page_1_1_0 -> Action_5_Process_StorySetting - [BEGIN adding dynamic routes to express server]");
                            }

                            //#endregion

                            parameterRouteListDetails.map(item => {
                                //STORE listing of routes
                                storedControllerRoutes = item.SetupItemTransportItemRoute.ControllerRoutes;

                                //STORE route controller name
                                storedControllerName = item.SetupItemTransportItemRoute.ControllerName;

                                //STORE route dataset details
                                storedControllerModelDataLocalParameter = item.SetupItemTransportItemRoute.ModelDataLocalParameter;
                                storedControllerModelDataLocalObject = item.SetupItemTransportItemRoute.ModelDataLocalObject;

                                storedControllerModelDataRemote = item.SetupItemTransportItemRoute.ModelDataRemote;

                                //DETERMINE if we have any routes
                                if (storedControllerRoutes.length > 0) {
                                    storedControllerRoutes.map(routeItemDetails =>
                                    {
                                        //console.log("route =");
                                        //console.log(route);

                                        this._storedServerInstance.Server.Instance.get(routeItemDetails, (parameterRequest: any, parameterResponse: any) => {
                                            //SET instance of our response object.
                                            this._storedServerInstance["serverResponder"] = parameterResponse;

                                            Step_2_0_Custom_Output_ServerRequestToclientORserverInstance_1_0(routeItemDetails, storedControllerName, storedControllerModelDataLocalParameter, storedControllerModelDataLocalObject, storedControllerModelDataRemote, parameterRequest, parameterResponse);
                                        });
                                    });
                                }
                            })

                            //#endregion
                        }
                        else
                        {
                            //#region EDGE CASE - USE exception message

                            throw new Error("[DISTURBANCE ISSUE] - Bug - Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.cs -> Implement_DesignPattern_Builder_Experience_12_3_1_0 -> Action_5_Process_StorySetting - BaseDI will not work without a routing details for a server side application . Please make sure that the information was added to the STORYLINEDETAILS object in the Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0 process!");

                            //#endregion
                        }
                    }

                    //#region EDGE CASE - USE developer logger

                    if (storedDeveloperMode) {
                        this._storedClientORserverInstance["processStepNumber"] = this._storedClientORserverInstance["processStepNumber"] + 1;

                        console.log("STEP " + this._storedClientORserverInstance["processStepNumber"] + " STARTING up web server]");
                    }

                     //#endregion

                    Step_1_0_Custom_Control_storedClientORserverInstanceRequestToServer_1_0(storedRouteListDetails); 

                    //#endregion

                    //#endregion

                    //#endregion

                    //#region START http server

                    //#region IDEAL CASE - USE express server

                    this._storedServerInstance.Server.Instance.listen(this._storedServerInstance.Server.Port, () => {
                        console.log(`server started at http://localhost:${this._storedServerInstance.Server.Port}`);
                    });

                    //#endregion

                    //#endregion
                }
            }
            catch (mistake)
            {
                throw mistake; //Let "Startup.cs" handle the exception.
            }

            //#endregion

            //#region 3. OUTPUT

            //#region HANDLE execution response

            if (storedDataResponse)
            {
                //#region IDEAL CASE - USE html responder

                storedDataResponse.then(storedHttpResponse =>
                {
                    console.log(JSON.stringify(storedHttpResponse));

                    storedHttpResponse?.outputs[1].baseDIObservations.map(storedObservation =>
                    {
                        console.log(JSON.stringify(storedObservation));

                        if (Object.keys(storedObservation).length > 0 && Object.keys(storedObservation)[0].toUpperCase().includes("HTML")) {
                            storedClientResponse = unescape(storedObservation[Object.keys(storedObservation)[0]].baseDIObservations[0].observation.metadata[3].item.presentation[0].htmlResult)
                        }
                    });

                    if (this._storedServerInstance["serverResponder"]) {
                        this._storedServerInstance["serverResponder"].send(storedClientResponse);
                    }
                    else
                    {
                        //#region EDGE CASE - USE developer logger

                        if (storedDeveloperMode) {
                            this._storedClientORserverInstance["processStepNumber"] = this._storedClientORserverInstance["processStepNumber"] + 1;

                            console.log("STEP " + this._storedClientORserverInstance["processStepNumber"] + " Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.cs -> Implement_DesignPattern_Builder_Chapter_12_2_Page_1_1_0 -> Action_5_Process_StorySetting - [FAILED sending back a response to the client from express server!]");
                        }

                        //#endregion
                    }
                });

                //#endregion
            } 

            //#endregion

            return storedDataResponse;

            //#endregion
        }

        //Page 1-7
        public async Action_7_Process_StoryResources(): Promise<object>
        {
            //#region 1. INPUTS

            //#endregion

            //#region 2. PROCESS

            try
            {
                if (this._stored_ExperienceRequestHandlerActionName != null && this._stored_ExperienceRequestHandlerActionName.toUpperCase().includes("COPYSTATICFILES_1_0"))
                {
                    //#region EXECUTE copying static files

                    //#region IDEAL CASE - USE baseDI extension

                    await Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.BaseDI.Professional.Web_Development.Extensions_13.Extension_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0.Step_X_X_Custom_Store_LocalFilesToServer_1_0(this._storedStorylineDetails);

                    //#endregion

                    //#endregion
                }
            }
            catch(mistake)
            {
                throw mistake; //Let "Startup.cs -> Startup_Controller" handle the exception.
            }

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
            return this._storedStorylineDetails;
        }

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

        //Page 1-6
        public async Action_6_Process_StoryExperiences(): Promise<object> {
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

        //Page 1-10
        public async Action_10_End_Process(): Promise<object> {
            return this._storedStorylineDetails;
        }

        //#endregion

        //#endregion        
    }
}