/////////////////////////////////////////////////////////////////////////////////////
//0. BASEDI GLOBAL DEPENDENCIES
/////////////////////////////////////////////////////////////////////////////////////
import * as ExtraData_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";

import * as aClass_Programming_ScriptMasterLeader_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptMasterLeader_12_2_1_0";

import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptRoutable_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptRoutable_12_2_1_0";

/////////////////////////////////////////////////////////////////////////////////////

//1. GENERATE BRAND AWARENESS
import * as AdvertisingFactoryImplementer_NicheMaster_1_1_1_0 from "../../../../../../../../1. Storyline/1/Generate Brand Awareness/1/Advertising/Factory/1/1_0/AdvertisingFactoryImplementer_NicheMaster_1_1_1_0";

//2. GENERATE BRAND TRUST
import * as BloggingFactoryImplementer_NicheMaster_2_1_1_0 from "../../../../../../../../1. Storyline/2/Generate Brand Trust/1/Blogging/Factory/1/1_0/BloggingFactoryImplementer_NicheMaster_2_1_1_0";
import * as PodcastingFactoryImplementer_NicheMaster_2_2_1_0 from "../../../../../../../../1. Storyline/2/Generate Brand Trust/2/Podcasting/Factory/1/1_0/PodcastingFactoryImplementer_NicheMaster_2_2_1_0";
import * as SocialMediaFactoryImplementer_NicheMaster_2_3_1_0 from "../../../../../../../../1. Storyline/2/Generate Brand Trust/3/Social Media/Factory/1/1_0/SocialMediaFactoryImplementer_NicheMaster_2_3_1_0";

//3. GENERATE OPTIN
import * as ListBuildingFactoryImplementer_NicheMaster_3_1_1_0 from "../../../../../../../../1. Storyline/3/Generate Optin/1/List Building/Factory/1/1_0/ListBuildingFactoryImplementer_NicheMaster_3_1_1_0";

//4. SELL LOW TICKET OFFER
import * as SupplementsFactoryImplementer_NicheMaster_4_1_1_0 from "../../../../../../../../1. Storyline/4/Sell Low Ticket Offer/1/Supplements/Factory/1/1_0/SupplementsFactoryImplementer_NicheMaster_4_1_1_0";

//5. SELL HIGH TICKET OFFER
import * as CoachingFactoryImplementer_NicheMaster_5_1_1_0 from "../../../../../../../../1. Storyline/5/Sell High Ticket Offer/1/Coaching/Factory/1/1_0/CoachingFactoryImplementer_NicheMaster_5_1_1_0";
import * as ConsultingFactoryImplementer_NicheMaster_5_2_1_0 from "../../../../../../../../1. Storyline/5/Sell High Ticket Offer/2/Consulting/Factory/1/1_0/ConsultingFactoryImplementer_NicheMaster_5_2_1_0";
import * as PersonalTrainingFactoryImplementer_NicheMaster_5_3_1_0 from "../../../../../../../../1. Storyline/5/Sell High Ticket Offer/3/Personal Training/Factory/1/1_0/PersonalTrainingFactoryImplementer_NicheMaster_5_3_1_0";

//6. SELL SUBSCRIPTION OFFER
import * as SoftwareFactoryImplementer_NicheMaster_6_1_1_0 from "../../../../../../../../1. Storyline/6/Sell Subscription Offer/1/Software/Factory/1/1_0/SoftwareFactoryImplementer_NicheMaster_6_1_1_0";

//7. SELL COMMISSION OFFER
import * as AffiliateRevenueFactoryImplementer_NicheMaster_7_1_1_0 from "../../../../../../../../1. Storyline/7/Sell Commission Offer/1/Affiliate Revenue/Factory/1/1_0/AffiliateRevenueFactoryImplementer_NicheMaster_7_1_1_0";

//8. ACCOUNT LOSS OR GAIN
import * as AccountingFactoryImplementer_NicheMaster_8_1_1_0 from "../../../../../../../../1. Storyline/8/Account Gain or Loss/1/Accounting/Factory/1/1_0/AccountingFactoryImplementer_NicheMaster_8_1_1_0";

//9. IMPROVE CUSTOMER SERVICE
import * as CustomerServiceFactoryImplementer_NicheMaster_9_1_1_0 from "../../../../../../../../1. Storyline/9/Improve Customer Service/1/Customer Service/Factory/1/1_0/CustomerServiceFactoryImplementer_NicheMaster_9_1_1_0";

//10. PERFORM MANUAL SERVICE
import * as ProductivityFactoryImplementer_NicheMaster_10_1_1_0 from "../../../../../../../../1. Storyline/10/Perform Manual Task/1/Productivity/Factory/1/1_0/ProductivityFactoryImplementer_NicheMaster_10_1_1_0";

//11. AUTOMATE MANUAL TASK
import * as RiskManagementFactoryTester_NicheMaster_11_1_1_0 from "../../../../../../../../1. Storyline/11/Automate Manual Task/1/Risk Management/Factory/1/1_0/RiskManagementFactoryTester_NicheMaster_11_1_1_0";

//12. OTHER
import * as CareersEmploymentFactoryImplementer_NicheMaster_12_1_1_0 from "../../../../../../../../1. Storyline/12/Other/1/Careers Employment/Factory/1/1_0/CareersEmploymentFactoryImplementer_NicheMaster_12_1_1_0";
import * as ProgrammingFactoryImplementer_NicheMaster_12_2_1_0 from "../../../../../../../../1. Storyline/12/Other/2/Programming/Studio/1/1_0/ProgrammingFactoryImplementer_NicheMaster_12_2_1_0";
import * as WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0 from "../../../../../../../../1. Storyline/12/Other/3/Web Development/Factory/1/1_0/WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0";
import * as CMSFactoryImplementer_NicheMaster_12_4_1_0 from "../../../../../../../../1. Storyline/12/Other/4/CMS/Factory/1/1_0/CMSFactoryImplementer_NicheMaster_12_4_1_0";
import * as SecurityFactoryImplementer_NicheMaster_12_5_1_0 from "../../../../../../../../1. Storyline/12/Other/5/Security/Factory/1/1_0/SecurityFactoryImplementer_NicheMaster_12_5_1_0";

import * as Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "../../../../../../../../7. Director/12/Other/2/Programming/Director/1/1_0/Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";

export namespace BaseDI.BackEnd.Story.Programming_1 {
    export class ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 extends aClass_Programming_ScriptMasterLeader_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptMasterLeader_12_2_1_0 {
        //#region 1. Assign
        Mistake: object = new Object();

        _extraData: ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0 = new ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0;

        _requestInspector: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;
        //#endregion

        //#region 2. Ready
        constructor(requestType: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0) {
            super();

            //region 1. Assign
            this._requestInspector = requestType;

            this.HandleStoryDefaults = this.HandleStoryDefaults.bind(this);

            //region 2. Action
            this.HandleStoryDefaults();

            //region 3. Observe
        }
        //#endregion

        //#region 3. Set
        private HandleStoryDefaults() {

        }
        //#endregion

        //#region 4. Action
        public SetupStoryline(client: any, storylineDetails: Object, storylineDetails_Parameters: Object, extraData: any, controlHandlerName: string, requestToProcess: string, requestToProcessParameters: string): aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0 {
            //#region 1. Assign
            let director_Of_Programming_Chapter_12_2_Page_1_Request_Handler: any;

            this._extraData = new ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0();
            this._extraData.MasterLeader = this;

            //#endregion

            //#region 2. Ready
            let directorOrExperienceResolveBuilder = new Use_DesignPattern_Builder_Chapter_12_2_1_0(client, storylineDetails, storylineDetails_Parameters, this._requestInspector, this._extraData, controlHandlerName, requestToProcess, requestToProcessParameters);
            //#endregion

            //#region 3. Set
            //#endregion

            //#region 4. Action 
            try
            {
                //#region FIND REQUEST HANDLER
                director_Of_Programming_Chapter_12_2_Page_1_Request_Handler = directorOrExperienceResolveBuilder.Action();

                if (controlHandlerName != "" && controlHandlerName.toUpperCase() != this._requestInspector.constructor.name.toUpperCase()) {
                    //#region REQUEST HANDLER FOUND

                    const entryPoint: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0 = director_Of_Programming_Chapter_12_2_Page_1_Request_Handler;

                    entryPoint.RequestID = controlHandlerName;
                    entryPoint.Client = client;

                    this._requestInspector.Client = entryPoint.Client;

                    this._requestInspector.EntryPoint = entryPoint;
                    this._requestInspector.ExtraData = this._extraData;

                    this._requestInspector.MasterLeader = entryPoint.MasterLeader;

                    this._requestInspector.StorylineDetails = entryPoint.StorylineDetails;
                    this._requestInspector.StorylineDetails_Parameters = entryPoint.StorylineDetails_Parameters;

                    director_Of_Programming_Chapter_12_2_Page_1_Request_Handler = this._requestInspector;

                    //#endregion
                }
                //#endregion
            }
            catch (e)
            {
                //#region CHECK FOR MISTAKES
                //#endregion
            }

            //#region RETURN REQUEST HANDLER
            return director_Of_Programming_Chapter_12_2_Page_1_Request_Handler;
            //#endregion

            //#endregion
        }
        //#endregion
    }

    //#region 5. Action Script
    export class Use_DesignPattern_Builder_Chapter_12_2_1_0 {
        //#region 1. Assign
        private _client: any;

        private _storylineDetails: object;
        private _storylineDetails_Parameters: object;

        private _requestToProcess: string;
        private _requestToProcessParameters: string;
        private _requestToResolveObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;
        private _requestToResolveString: string;


        private _extraData: ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0;
        //#endregion

        //#region 2. Ready
        constructor(client: any, storylineDetails: object, storylineDetails_Parameters: object, requestToResolveObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0, extraData: ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0, requestToResolveString: string, requestToProcess: string = "", requestToProcessParameters: string = "") {
            this._client = client;

            this._storylineDetails = storylineDetails;
            this._storylineDetails_Parameters = storylineDetails_Parameters;

            this._requestToProcess = requestToProcess;
            this._requestToProcessParameters = requestToProcessParameters;

            this._requestToResolveObject = requestToResolveObject;
            this._requestToResolveString = requestToResolveString;

            this._extraData = extraData;

            this.Action = this.Action.bind(this);
        }

        //#endregion

        //#region 3. Set
        //#endregion

        //#region 4. Action
        public Action(): object {
            //#region BEGIN HANDLER SEARCH
            const builder = new Implement_DesignPattern_Builder_Chapter_12_2_1_0(this._client, this._storylineDetails, this._storylineDetails_Parameters, this._requestToResolveObject, this._extraData, this._requestToResolveString, this._requestToProcess, this._requestToProcessParameters);

            builder.Action_1_Begin_Process();
            let resolvedRequest: object = builder.Action_10_End_Process();

            return resolvedRequest;
            //#endregion
        }
        //#endregion
    }
    //#endregion

    //#region 6. Action Implementation
    export class Implement_DesignPattern_Builder_Chapter_12_2_1_0 extends aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>
    {
        //#region 1. Assign
        private _client: any = null;

        private _storylineDetails: object = new Object();
        private _storylineDetails_Parameters: object = new Object();

        private _requestToProcess: string;
        private _requestToProcessParameters: string;
        private _requestToResolveObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;
        private _requestToResolveString: string = "";

        private _extraData: ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0 = new ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0;

        private _requestName: string = "";

        //#endregion

        //#region 2. Ready
        constructor(client: any, storylineDetails: object, storylineDetails_Parameters: object, requestToResolveObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0, extraData: ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0, requestToResolveString: string, requestToProcess: string = "", requestToProcessParameters: string = "") {
            super();

            this._client = client;

            this._storylineDetails = storylineDetails;
            this._storylineDetails_Parameters = storylineDetails_Parameters;

            this._requestToProcess = requestToProcess;
            this._requestToProcessParameters = requestToProcessParameters;

            this._requestToResolveObject = requestToResolveObject;
            this._requestToResolveString = requestToResolveString;

            this._extraData = extraData;

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
        //#endregion

        //#region 4. Action

        //Page 1-1
        public Action_1_Begin_Process(): object {
            //#region INSPECT REQUEST NAME

            if (this._requestToResolveString == "" && this._requestToResolveObject != null) {
                this._requestName = this._requestToResolveObject.constructor.name;
            }
            else {
                this._requestName = this._requestToResolveString;
            }

            //#endregion

            return this._requestToResolveObject;
        }

        //Page 1-10
        public Action_10_End_Process(): object {
            //#region SCHEDULE THE REQUEST

            //#region DECIDE DIRECTOR REQUEST
            if (this._requestName.toUpperCase().includes("DIRECTOR_OF_")) {
                const pickDirector = new Implement_DesignPattern_Factory_Director_12_2_1_0(this._client, this._storylineDetails, this._storylineDetails_Parameters, this._requestToResolveObject, this._extraData, this._requestName, this._requestToProcess, this._requestToProcessParameters);

                return pickDirector.Action_1_Begin_Process();
            }
            //#endregion

            //OR

            //#region DECIDE EXPERIENCE REQUEST
            if (this._requestName.toUpperCase().includes("EXPERIENCE_THE_")) {
                let pickExperience = new Implement_DesignPattern_Factory_Experience_12_2_1_0(this._client, this._storylineDetails, this._storylineDetails_Parameters, this._requestToResolveObject, this._extraData, this._requestName, this._requestToProcess, this._requestToProcessParameters);

                return pickExperience.Action_1_Begin_Process();
            }
            //#endregion

            //#endregion

            return this._storylineDetails;
        }

        //#region NOT APART OF THE REQUEST PIPELINE AT THIS TIME

        //Page 1-2
        public Action_2_Validate_Process(): object {
            return this._storylineDetails;
        }

        //Page 1-3
        public Action_3_Process_StoryAuthor(): object {
            return this._storylineDetails;
        }

        //Page 1-4
        public Action_4_Process_StoryCharacters(): object {
            return this._storylineDetails;
        }

        //Page 1-5
        public Action_5_Process_StorySetting(): object {
            return this._storylineDetails;
        }

        //Page 1-6
        public Action_6_Process_StoryExperiences(): object {
            return this._storylineDetails;
        }

        //Page 1-7
        public Action_7_Process_StoryResources(): object {
            return this._storylineDetails;
        }

        //Page 1-8
        public Action_8_Process_CRUD(): object {
            return this._storylineDetails;
        }

        //Page 1-9
        public Action_9_Verify_Process(): object {
            return this._storylineDetails;
        }
        //#endregion

        //#endregion
    }

    //#region RETURN DIRECTOR WORKER
    export class Implement_DesignPattern_Factory_Director_12_2_1_0 extends aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>
    {
        //region 1. Assign
        private _centralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _centralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _centralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        private _client: any = null;

        private _storylineDetails: object = new Object();
        private _storylineDetails_Parameters: object = new Object();

        private _requestToResolveObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;
        private _requestToResolveString: string = "";

        private _extraData: ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0 = new ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0;

        private _requestToProcess: string = "";
        private _requestToProcessParameters: string = "";
        private _requestName: string = "";

        //region 2. Ready
        constructor(client: any, storylineDetails: object, storylineDetails_Parameters: object, requestToResolveObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0, extraData: ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0, requestToResolveString: string, requestToProcess: string = "", requestToProcessParameters: string = "") {
            super();

            this._client = client;

            this._storylineDetails = storylineDetails;
            this._storylineDetails_Parameters = storylineDetails_Parameters;

            this._requestToResolveObject = requestToResolveObject;
            this._requestToResolveString = requestToResolveString;
            this._requestName = requestToResolveString;
            this._requestToProcess = requestToProcess;
            this._requestToProcessParameters = requestToProcessParameters;

            this._extraData = extraData;

            if (this._centralizedDisturber == undefined || this._centralizedDisturber == null) {
                this._centralizedDisturber = new Implement_DesignPattern_Factory_Disturber_12_2_1_0(client, storylineDetails, storylineDetails_Parameters, requestToResolveObject, extraData, requestToResolveString, requestToProcess, requestToProcessParameters);
            }          

            if (this._centralizedStorer == undefined || this._centralizedStorer == null) {
                this._centralizedStorer = new Implement_DesignPattern_Factory_Storer_12_2_1_0(client, storylineDetails, storylineDetails_Parameters, requestToResolveObject, extraData, requestToResolveString, requestToProcess, requestToProcessParameters);
            }           

            if (this._centralizedSensor == undefined || this._centralizedSensor == null) {
                this._centralizedSensor = new Implement_DesignPattern_Factory_Sensor_12_2_1_0(client, storylineDetails, storylineDetails_Parameters, requestToResolveObject, extraData, requestToResolveString, requestToProcess, requestToProcessParameters);
            }  

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

        //region 3. Set

        //region 4. Action

        //Page 1-1
        public Action_1_Begin_Process(): object {
            //region RETURN DIRECTOR WORKER
            if (this._requestToResolveString.toUpperCase().includes("DIRECTOR_OF_PROGRAMMING")) {
                //region 12. Other
                let createDirector = new ProgrammingFactoryImplementer_NicheMaster_12_2_1_0.BaseDI.BackEnd.Story.Programming_1.ProgrammingFactoryImplementer_NicheMaster_12_2_1_0(this._extraData);

                createDirector.APILocationLocalNodeJS = "http://localhost:8912/storyline/basedi/io/programming"
                createDirector.APILocationLocalDotNetCore = "http://localhost:9912/storyline/basedi/io/programming";

                createDirector.APILocationRemote = "https://storyline.basedi.io/programming";

                return createDirector.Action(this._client, this._centralizedStorer, this._centralizedDisturber, this._centralizedSensor, this._requestToResolveObject, this._storylineDetails, this._storylineDetails_Parameters, this._requestName, this._requestToProcess, this._requestToProcessParameters);
            }
            else {
                //This means our director of programming wanted us to play this storyline.

                //region 1. Generate Brand Awareness Storylines
                if (this._requestToResolveString.toUpperCase().includes("DIRECTOR_OF_ADVERTISING")) {
                    let createDirector = new AdvertisingFactoryImplementer_NicheMaster_1_1_1_0.BaseDI.BackEnd.Story.Advertising_1.AdvertisingFactoryImplementer_NicheMaster_1_1_1_0(this._extraData);

                    createDirector.APILocationLocalNodeJS = "http://localhost:8991/storyline/basedi/io/advertising"
                    createDirector.APILocationLocalDotNetCore = "http://localhost:9991/storyline/basedi/io/advertising";

                    createDirector.APILocationRemote = "https://storyline.basedi.io/advertising";

                    return createDirector.Action(this._client, this._centralizedStorer, this._centralizedDisturber, this._centralizedSensor, this._requestToResolveObject, this._storylineDetails, this._storylineDetails_Parameters, this._requestName, this._requestToProcess, this._requestToProcessParameters);
                }

                //region 2. Generate Brand Trust Storylines
                if (this._requestToResolveString.toUpperCase().includes("DIRECTOR_OF_BLOGGING")) {
                    let createDirector = new BloggingFactoryImplementer_NicheMaster_2_1_1_0.BaseDI.BackEnd.Story.Blogging_1.BloggingFactoryImplementer_NicheMaster_2_1_1_0(this._extraData);

                    createDirector.APILocationLocalNodeJS = "http://localhost:8992/storyline/basedi/io/blogging";
                    createDirector.APILocationLocalDotNetCore = "http://localhost:9992/storyline/basedi/io/blogging";

                    createDirector.APILocationRemote = "https://storyline.basedi.io/blogging";

                    return createDirector.Action(this._client, this._centralizedStorer, this._centralizedDisturber, this._centralizedSensor, this._requestToResolveObject, this._storylineDetails, this._storylineDetails_Parameters, this._requestName, this._requestToProcess, this._requestToProcessParameters);
                }

                if (this._requestToResolveString.toUpperCase().includes("DIRECTOR_OF_PODCASTING")) {
                    let createDirector = new PodcastingFactoryImplementer_NicheMaster_2_2_1_0.BaseDI.BackEnd.Story.Podcasting_2.PodcastingFactoryImplementer_NicheMaster_2_2_1_0(this._extraData);

                    createDirector.APILocationLocalNodeJS = "http://localhost:8992/storyline/basedi/io/blogging";
                    createDirector.APILocationLocalDotNetCore = "http://localhost:9992/storyline/basedi/io/blogging";

                    createDirector.APILocationRemote = "https://storyline.basedi.io/podcasting";

                    return createDirector.Action(this._client, this._centralizedStorer, this._centralizedDisturber, this._centralizedSensor, this._requestToResolveObject, this._storylineDetails, this._storylineDetails_Parameters, this._requestName, this._requestToProcess, this._requestToProcessParameters);
                }

                if (this._requestToResolveString.toUpperCase().includes("DIRECTOR_OF_SOCIALMEDIA")) {
                    let createDirector = new SocialMediaFactoryImplementer_NicheMaster_2_3_1_0.BaseDI.BackEnd.Story.Social_Media_3.SocialMediaFactoryImplementer_NicheMaster_2_3_1_0(this._extraData);

                    createDirector.APILocationLocalNodeJS = "http://localhost:8992/storyline/basedi/io/socialmedia";
                    createDirector.APILocationLocalDotNetCore = "http://localhost:9992/storyline/basedi/io/socialmedia";

                    createDirector.APILocationRemote = "https://storyline.basedi.io/socialmedia";

                    return createDirector.Action(this._client, this._centralizedStorer, this._centralizedDisturber, this._centralizedSensor, this._requestToResolveObject, this._storylineDetails, this._storylineDetails_Parameters, this._requestName, this._requestToProcess, this._requestToProcessParameters);
                }

                //region 3. Generate Optin Storylines
                if (this._requestToResolveString.toUpperCase().includes("DIRECTOR_OF_LISTBUILDING")) {
                    let createDirector = new ListBuildingFactoryImplementer_NicheMaster_3_1_1_0.BaseDI.BackEnd.Story.Listing_Building_1.ListBuildingFactoryImplementer_NicheMaster_3_1_1_0(this._extraData);

                    createDirector.APILocationLocalNodeJS = "http://localhost:8993/storyline/basedi/io/listbuilding";
                    createDirector.APILocationLocalDotNetCore = "http://localhost:9993/storyline/basedi/io/listbuilding";

                    createDirector.APILocationRemote = "https://storyline.basedi.io/listbuilding";

                    return createDirector.Action(this._client, this._centralizedStorer, this._centralizedDisturber, this._centralizedSensor, this._requestToResolveObject, this._storylineDetails, this._storylineDetails_Parameters, this._requestName, this._requestToProcess, this._requestToProcessParameters);
                }

                //region 4. Sell Low Ticket Offer Storylines
                if (this._requestToResolveString.toUpperCase().includes("DIRECTOR_OF_SUPPLEMENTS")) {
                    let createDirector = new SupplementsFactoryImplementer_NicheMaster_4_1_1_0.BaseDI.BackEnd.Story.Supplements_1.SupplementsFactoryImplementer_NicheMaster_4_1_1_0(this._extraData);

                    createDirector.APILocationLocalNodeJS = "http://localhost:8994/storyline/basedi/io/supplements";
                    createDirector.APILocationLocalDotNetCore = "http://localhost:9994/storyline/basedi/io/supplements";

                    createDirector.APILocationRemote = "https://storyline.basedi.io/supplements";

                    return createDirector.Action(this._client, this._centralizedStorer, this._centralizedDisturber, this._centralizedSensor, this._requestToResolveObject, this._storylineDetails, this._storylineDetails_Parameters, this._requestName, this._requestToProcess, this._requestToProcessParameters);
                }

                //region 5. Sell High Ticket Offer Storylines
                if (this._requestToResolveString.toUpperCase().includes("DIRECTOR_OF_COACHING")) {
                    let createDirector = new CoachingFactoryImplementer_NicheMaster_5_1_1_0.BaseDI.BackEnd.Story.Coaching_1.CoachingFactoryImplementer_NicheMaster_5_1_1_0(this._extraData);

                    createDirector.APILocationLocalNodeJS = "http://localhost:8995/storyline/basedi/io/coaching";
                    createDirector.APILocationLocalDotNetCore = "http://localhost:9995/storyline/basedi/io/coaching";

                    createDirector.APILocationRemote = "https://storyline.basedi.io/coaching";

                    return createDirector.Action(this._client, this._centralizedStorer, this._centralizedDisturber, this._centralizedSensor, this._requestToResolveObject, this._storylineDetails, this._storylineDetails_Parameters, this._requestName, this._requestToProcess, this._requestToProcessParameters);
                }

                if (this._requestToResolveString.toUpperCase().includes("DIRECTOR_OF_CONSULTING")) {
                    let createDirector = new CoachingFactoryImplementer_NicheMaster_5_1_1_0.BaseDI.BackEnd.Story.Coaching_1.CoachingFactoryImplementer_NicheMaster_5_1_1_0(this._extraData);

                    createDirector.APILocationLocalNodeJS = "http://localhost:8995/storyline/basedi/io/consulting";
                    createDirector.APILocationLocalDotNetCore = "http://localhost:8995/storyline/basedi/io/consulting";

                    createDirector.APILocationRemote = "https://storyline.basedi.io/consulting";

                    return createDirector.Action(this._client, this._centralizedStorer, this._centralizedDisturber, this._centralizedSensor, this._requestToResolveObject, this._storylineDetails, this._storylineDetails_Parameters, this._requestName, this._requestToProcess, this._requestToProcessParameters);
                }

                if (this._requestToResolveString.toUpperCase().includes("DIRECTOR_OF_PERSONALTRAINING")) {
                    let createDirector = new PersonalTrainingFactoryImplementer_NicheMaster_5_3_1_0.BaseDI.BackEnd.Story.Personal_Training_3.PersonalTrainingFactoryImplementer_NicheMaster_5_3_1_0(this._extraData);

                    createDirector.APILocationLocalNodeJS = "http://localhost:8995/storyline/basedi/io/personaltraining";
                    createDirector.APILocationLocalDotNetCore = "http://localhost:9995/storyline/basedi/io/personaltraining";

                    createDirector.APILocationRemote = "https://storyline.basedi.io/personaltraining";

                    return createDirector.Action(this._client, this._centralizedStorer, this._centralizedDisturber, this._centralizedSensor, this._requestToResolveObject, this._storylineDetails, this._storylineDetails_Parameters, this._requestName, this._requestToProcess, this._requestToProcessParameters);
                }

                //region 6. Sell Subscription Offer Storylines
                if (this._requestToResolveString.toUpperCase().includes("DIRECTOR_OF_SOFTWARE")) {
                    let createDirector = new SoftwareFactoryImplementer_NicheMaster_6_1_1_0.BaseDI.BackEnd.Story.Software_1.SoftwareFactoryImplementer_NicheMaster_6_1_1_0(this._extraData);

                    createDirector.APILocationLocalNodeJS = "http://localhost:8996/storyline/basedi/io/software";
                    createDirector.APILocationLocalDotNetCore = "http://localhost:9996/storyline/basedi/io/software";

                    createDirector.APILocationRemote = "https://storyline.basedi.io/software";

                    return createDirector.Action(this._client, this._centralizedStorer, this._centralizedDisturber, this._centralizedSensor, this._requestToResolveObject, this._storylineDetails, this._storylineDetails_Parameters, this._requestName, this._requestToProcess, this._requestToProcessParameters);
                }

                //region 7. Sell Commission Offer Storylines
                if (this._requestToResolveString.toUpperCase().includes("DIRECTOR_OF_AFFILIATEREVENUE")) {
                    let createDirector = new AffiliateRevenueFactoryImplementer_NicheMaster_7_1_1_0.BaseDI.BackEnd.Story.Affiliate_Revenue_1.AffiliateRevenueFactoryImplementer_NicheMaster_7_1_1_0(this._extraData);

                    createDirector.APILocationLocalNodeJS = "http://localhost:8997/storyline/basedi/io/affiliaterevenue";
                    createDirector.APILocationLocalDotNetCore = "http://localhost:9997/storyline/basedi/io/affiliaterevenue";

                    createDirector.APILocationRemote = "https://storyline.basedi.io/affiliaterevenue";

                    return createDirector.Action(this._client, this._centralizedStorer, this._centralizedDisturber, this._centralizedSensor, this._requestToResolveObject, this._storylineDetails, this._storylineDetails_Parameters, this._requestName, this._requestToProcess, this._requestToProcessParameters);
                }

                //region 8. Account Loss or Gain Storylines
                if (this._requestToResolveString.toUpperCase().includes("DIRECTOR_OF_ACCOUNTING")) {
                    let createDirector = new AccountingFactoryImplementer_NicheMaster_8_1_1_0.BaseDI.BackEnd.Story.Accounting_1.AccountingFactoryImplementer_NicheMaster_8_1_1_0(this._extraData);

                    createDirector.APILocationLocalNodeJS = "http://localhost:8998/storyline/basedi/io/accounting";
                    createDirector.APILocationLocalDotNetCore = "http://localhost:9998/storyline/basedi/io/accounting";

                    createDirector.APILocationRemote = "https://storyline.basedi.io/accounting";

                    return createDirector.Action(this._client, this._centralizedStorer, this._centralizedDisturber, this._centralizedSensor, this._requestToResolveObject, this._storylineDetails, this._storylineDetails_Parameters, this._requestName, this._requestToProcess, this._requestToProcessParameters);
                }

                //region 9. Customer Service Storylines
                if (this._requestToResolveString.toUpperCase().includes("DIRECTOR_OF_CUSTOMERSERVICE")) {
                    let createDirector = new CustomerServiceFactoryImplementer_NicheMaster_9_1_1_0.BaseDI.BackEnd.Story.Customer_Service_1.CustomerServiceFactoryImplementer_NicheMaster_9_1_1_0(this._extraData);

                    createDirector.APILocationLocalNodeJS = "http://localhost:8999/storyline/basedi/io/customerservice";
                    createDirector.APILocationLocalDotNetCore = "http://localhost:9999/storyline/basedi/io/customerservice";

                    createDirector.APILocationRemote = "https://storyline.basedi.io/customerservice";

                    return createDirector.Action(this._client, this._centralizedStorer, this._centralizedDisturber, this._centralizedSensor, this._requestToResolveObject, this._storylineDetails, this._storylineDetails_Parameters, this._requestName, this._requestToProcess, this._requestToProcessParameters);
                }

                //region 10. Perform Manual Task Storylines
                if (this._requestToResolveString.toUpperCase().includes("DIRECTOR_OF_PRODUCTIVITY")) {
                    let createDirector = new ProductivityFactoryImplementer_NicheMaster_10_1_1_0.BaseDI.BackEnd.Story.Productivity_1.ProductivityFactoryImplementer_NicheMaster_10_1_1_0(this._extraData);

                    createDirector.APILocationLocalNodeJS = "http://localhost:8910/storyline/basedi/io/customerservice";
                    createDirector.APILocationLocalDotNetCore = "http://localhost:9910/storyline/basedi/io/customerservice";

                    createDirector.APILocationRemote = "https://storyline.basedi.io/productivity";

                    return createDirector.Action(this._client, this._centralizedStorer, this._centralizedDisturber, this._centralizedSensor, this._requestToResolveObject, this._storylineDetails, this._storylineDetails_Parameters, this._requestName, this._requestToProcess, this._requestToProcessParameters);
                }

                //region 11. Automate Manual Task Storylines
                if (this._requestToResolveString.toUpperCase().includes("DIRECTOR_OF_RISKMANAGEMENT")) {
                    let createDirector = new RiskManagementFactoryTester_NicheMaster_11_1_1_0.BaseDI.BackEnd.Story.Risk_Management_1.RiskManagementFactoryTester_NicheMaster_11_1_1_0(this._extraData);

                    createDirector.APILocationLocalNodeJS = "http://localhost:8911/storyline/basedi/io/riskmanagement";
                    createDirector.APILocationLocalDotNetCore = "http://localhost:9911/storyline/basedi/io/riskmanagement";

                    createDirector.APILocationRemote = "https://storyline.basedi.io/riskmanagement";

                    return createDirector.Action(this._client, this._centralizedStorer, this._centralizedDisturber, this._centralizedSensor, this._requestToResolveObject, this._storylineDetails, this._storylineDetails_Parameters, this._requestName, this._requestToProcess, this._requestToProcessParameters);
                }

                //region 12. Other Storylines
                if (this._requestToResolveString.toUpperCase().includes("DIRECTOR_OF_CAREERSEMPLOYMENT")) {
                    let createDirector = new CareersEmploymentFactoryImplementer_NicheMaster_12_1_1_0.BaseDI.BackEnd.Story.Careers_Employment_1.CareersEmploymentFactoryImplementer_NicheMaster_12_1_1_0(this._extraData);

                    createDirector.APILocationLocalNodeJS = "http://localhost:8912/storyline/basedi/io/careersemployment";
                    createDirector.APILocationLocalDotNetCore = "http://localhost:9912/storyline/basedi/io/careersemployment";

                    createDirector.APILocationRemote = "https://storyline.basedi.io/careersemployment";

                    return createDirector.Action(this._client, this._centralizedStorer, this._centralizedDisturber, this._centralizedSensor, this._requestToResolveObject, this._storylineDetails, this._storylineDetails_Parameters, this._requestName, this._requestToProcess, this._requestToProcessParameters);
                }

                if (this._requestToResolveString.toUpperCase().includes("DIRECTOR_OF_WEBDEVELOPMENT")) {
                    let createDirector = new WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0.BaseDI.BackEnd.Story.Web_Development_1.WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0(this._extraData);

                    createDirector.APILocationLocalNodeJS = "http://localhost:8912/storyline/basedi/io/webdevelopment";
                    createDirector.APILocationLocalDotNetCore = "http://localhost:9912/storyline/basedi/io/webdevelopment";

                    createDirector.APILocationRemote = "https://storyline.basedi.io/webdevelopment";

                    return createDirector.Action(this._client, this._centralizedStorer, this._centralizedDisturber, this._centralizedSensor, this._requestToResolveObject, this._storylineDetails, this._storylineDetails_Parameters, this._requestName, this._requestToProcess, this._requestToProcessParameters);
                }

                if (this._requestToResolveString.toUpperCase().includes("DIRECTOR_OF_CMS")) {
                    let createDirector = new CMSFactoryImplementer_NicheMaster_12_4_1_0.BaseDI.BackEnd.Story.CMS_1.CMSFactoryImplementer_NicheMaster_12_4_1_0(this._extraData);

                    createDirector.APILocationLocalNodeJS = "http://localhost:8912/storyline/basedi/io/cms";
                    createDirector.APILocationLocalDotNetCore = "http://localhost:9912/storyline/basedi/io/cms";

                    createDirector.APILocationRemote = "https://storyline.basedi.io/cms";

                    return createDirector.Action(this._client, this._centralizedStorer, this._centralizedDisturber, this._centralizedSensor, this._requestToResolveObject, this._storylineDetails, this._storylineDetails_Parameters, this._requestName, this._requestToProcess, this._requestToProcessParameters);
                }

                if (this._requestToResolveString.toUpperCase().includes("DIRECTOR_OF_SECURITY")) {
                    let createDirector = new SecurityFactoryImplementer_NicheMaster_12_5_1_0.BaseDI.BackEnd.Story.Security_1.SecurityFactoryImplementer_NicheMaster_12_5_1_0(this._extraData);

                    createDirector.APILocationLocalNodeJS = "http://localhost:8912/storyline/basedi/io/security";
                    createDirector.APILocationLocalDotNetCore = "http://localhost:9912/storyline/basedi/io/security";

                    createDirector.APILocationRemote = "https://storyline.basedi.io/security";

                    return createDirector.Action(this._client, this._centralizedStorer, this._centralizedDisturber, this._centralizedSensor, this._requestToResolveObject, this._storylineDetails, this._storylineDetails_Parameters, this._requestName, this._requestToProcess, this._requestToProcessParameters);
                }
            }

            return new Object();
        }

        //region NOT APART OF THE REQUEST PIPELINE AT THIS TIME

        //Page 1-2
        public Action_2_Validate_Process(): object {
            return this._storylineDetails;
        }

        //Page 1-3
        public Action_3_Process_StoryAuthor(): object {
            return this._storylineDetails;
        }

        //Page 1-4
        public Action_4_Process_StoryCharacters(): object {
            return this._storylineDetails;
        }

        //Page 1-5
        public Action_5_Process_StorySetting(): object {
            return this._storylineDetails;
        }

        //Page 1-6
        public Action_6_Process_StoryExperiences(): object {
            return this._storylineDetails;
        }

        //Page 1-7
        public Action_7_Process_StoryResources(): object {
            return this._storylineDetails;
        }

        //Page 1-8
        public Action_8_Process_CRUD(): object {
            return this._storylineDetails;
        }

        //Page 1-9
        public Action_9_Verify_Process(): object {
            return this._storylineDetails;
        }

        //Page 1-10
        public Action_10_End_Process(): object {
            return this._storylineDetails;
        }

    }
    //#endregion

    //#region RETURN EXPERIENCE WORKER
    export class Implement_DesignPattern_Factory_Experience_12_2_1_0 extends aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>
    {
        //region 1. Assign

        private _centralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _centralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _centralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        private _client: any = null;

        private _storylineDetails: object = new Object();
        private _storylineDetails_Parameters: object = new Object();

        private _requestToResolveObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;
        private _requestToResolveString: string = "";

        private _extraData: ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0 = new ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0;

        private _requestName: string = "";
        private _requestToProcess: string = "";
        private _requestToProcessParameters: string = "";

        //region 2. Ready
        constructor(client: any, storylineDetails: object, storylineDetails_Parameters: object, requestToResolveObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0, extraData: ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0, requestToResolveString: string, requestToProcess: string = "", requestToProcessParameters: string = "") {
            super();

            this._client = client;

            this._storylineDetails = storylineDetails;
            this._storylineDetails_Parameters = storylineDetails_Parameters;

            this._requestToResolveObject = requestToResolveObject;
            this._requestToResolveString = requestToResolveString;
            this._requestName = requestToResolveString;
            this._requestToProcess = requestToProcess;
            this._requestToProcessParameters = requestToProcessParameters;

            this._extraData = extraData;

            if (this._centralizedDisturber == undefined || this._centralizedDisturber == null) {
                this._centralizedDisturber = new Implement_DesignPattern_Factory_Disturber_12_2_1_0(client, storylineDetails, storylineDetails_Parameters, requestToResolveObject, extraData, requestToResolveString, requestToProcess, requestToProcessParameters);
            }

            if (this._centralizedStorer == undefined || this._centralizedStorer == null) {
                this._centralizedStorer = new Implement_DesignPattern_Factory_Storer_12_2_1_0(client, storylineDetails, storylineDetails_Parameters, requestToResolveObject, extraData, requestToResolveString, requestToProcess, requestToProcessParameters);
            }

            if (this._centralizedSensor == undefined || this._centralizedSensor == null) {
                this._centralizedSensor = new Implement_DesignPattern_Factory_Sensor_12_2_1_0(client, storylineDetails, storylineDetails_Parameters, requestToResolveObject, extraData, requestToResolveString, requestToProcess, requestToProcessParameters);
            }

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

        //region 3. Set

        //region 4. Action

        //Page 1-1
        public Action_1_Begin_Process(): object {
            //region RETURN EXPERIENCE WORKER

            //This means our director of programming wanted us to play this storyline.

            //region 1. Generate Brand Awareness Storylines
 
            //region 2. Generate Brand Trust Storylines
            if (this._requestToResolveString.toUpperCase().includes("EXPERIENCE_THE_MOVEMENT_TOFACEBOOKPAGE_DATATRANSFER")) {
                let createExperience = new SocialMediaFactoryImplementer_NicheMaster_2_3_1_0.BaseDI.BackEnd.Story.Social_Media_3.SocialMediaFactoryImplementer_NicheMaster_2_3_1_0(this._extraData);

                createExperience.APILocationLocalNodeJS = "http://localhost:8992/storyline/basedi/io/socialmedia";
                createExperience.APILocationLocalDotNetCore = "http://localhost:9992/storyline/basedi/io/socialmedia";

                createExperience.APILocationRemote = "https://storyline.basedi.io/socialmedia";

                return createExperience.Action(this._client, this._centralizedStorer, this._centralizedDisturber, this._centralizedSensor, this._requestToResolveObject, this._storylineDetails, this._storylineDetails_Parameters, this._requestName, this._requestToProcess, this._requestToProcessParameters);
            }

            //region 3. Generate Optin Storylines           

            //region 4. Sell Low Ticket Offer Storylines

            //region 5. Sell High Ticket Offer Storylines

            //region 6. Sell Subscription Offer Storylines

            //region 7. Sell Commission Offer Storylines

            //region 8. Account Loss or Gain Storylines

            //region 9. Customer Service Storylines

            //region 10. Perform Manual Task Storylines

            //region 11. Automate Manual Task Storylines

            //region 12. Other Storylines
            if (this._requestToResolveString.toUpperCase().includes("EXPERIENCE_THE_MOVEMENT_OFTHEASSETS_CONTENT_12_2_1_0")) {
                let createExperience = new ProgrammingFactoryImplementer_NicheMaster_12_2_1_0.BaseDI.BackEnd.Story.Programming_1.ProgrammingFactoryImplementer_NicheMaster_12_2_1_0(this._extraData);

                createExperience.APILocationLocalNodeJS = "http://localhost:8912/storyline/basedi/io/programming"
                createExperience.APILocationLocalDotNetCore = "http://localhost:9912/storyline/basedi/io/programming";

                createExperience.APILocationRemote = "https://storyline.basedi.io/programming";

                return createExperience.Action(this._client, this._centralizedStorer, this._centralizedDisturber, this._centralizedSensor, this._requestToResolveObject, this._storylineDetails, this._storylineDetails_Parameters, this._requestName, this._requestToProcess, this._requestToProcessParameters);
            }

            if (this._requestToResolveString.toUpperCase().includes("EXPERIENCE_THE_HEAR_OFTHEAPISERVER_MESSAGE")) {
                let createExperience = new WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0.BaseDI.BackEnd.Story.Web_Development_1.WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0(this._extraData);

                createExperience.APILocationLocalNodeJS = "http://localhost:8912/storyline/basedi/io/webdevelopment";
                createExperience.APILocationLocalDotNetCore = "http://localhost:9912/storyline/basedi/io/webdevelopment";

                createExperience.APILocationRemote = "https://storyline.basedi.io/webdevelopment";

                return createExperience.Action(this._client, this._centralizedStorer, this._centralizedDisturber, this._centralizedSensor, this._requestToResolveObject, this._storylineDetails, this._storylineDetails_Parameters, this._requestName, this._requestToProcess, this._requestToProcessParameters);
            }

            return new Object();
        }

        //Page 1-2
        public Action_2_Validate_Process(): object {
            return this._storylineDetails;
        }

        //Page 1-3
        public Action_3_Process_StoryAuthor(): object {
            return this._storylineDetails;
        }

        //Page 1-4
        public Action_4_Process_StoryCharacters(): object {
            return this._storylineDetails;
        }

        //Page 1-5
        public Action_5_Process_StorySetting(): object {
            return this._storylineDetails;
        }

        //Page 1-6
        public Action_6_Process_StoryExperiences(): object {
            return this._storylineDetails;
        }

        //Page 1-7
        public Action_7_Process_StoryResources(): object {
            return this._storylineDetails;
        }

        //Page 1-8
        public Action_8_Process_CRUD(): object {
            return this._storylineDetails;
        }

        //Page 1-9
        public Action_9_Verify_Process(): object {
            return this._storylineDetails;
        }

        //Page 1-10
        public Action_10_End_Process(): object {
            return this._storylineDetails;
        }
    }
    //#endregion

    //#region HANDLE REQUEST STORAGE
    export class Implement_DesignPattern_Factory_Storer_12_2_1_0 extends aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>
    {
        //#region 1. Assign
        private _client: any = null;

        private _storylineDetails: object = new Object();
        private _storylineDetails_Parameters: object = new Object();

        private _requestToResolveObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;
        private _requestToResolveString: string = "";

        private _extraData: ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0 = new ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0;

        private _requestName: string = "";
        private _requestToProcess: string = "";
        private _requestToProcessParameters: string = "";

        //#endregion

        //#region 2. Ready

        constructor(client: any, storylineDetails: object, storylineDetails_Parameters: object, requestToResolveObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0, extraData: ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0, requestToResolveString: string, requestToProcess: string = "", requestToProcessParameters: string = "") {
            super();

            this._client = client;

            this._storylineDetails = storylineDetails;
            this._storylineDetails_Parameters = storylineDetails_Parameters;

            this._requestToResolveObject = requestToResolveObject;
            this._requestToResolveString = requestToResolveString;
            this._requestName = requestToResolveString;
            this._requestToProcess = requestToProcess;
            this._requestToProcessParameters = requestToProcessParameters;

            this._extraData = extraData;

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
        //#endregion

        //#region 4. Action

        //#region EXECUTE LOGIC INSTUCTIONS

        //Page 1-1 
        public async Action_1_Begin_Process(): Promise<object> {
            let armTemplateJSONOutput: object = new Object();

            return new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0.BaseDI.BackEnd.Director.Programming_1.Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(this._extraData))
                .SetupStoryline(this._client, this._storylineDetails, this._storylineDetails_Parameters, this._extraData, "", "Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0", "Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0-P1_0")
                .Action();
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
    //#endregion

    //#region HANDLE REQUEST DISTURBANCE
    export class Implement_DesignPattern_Factory_Disturber_12_2_1_0 extends aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>
    {
        //#region 1. Assign
        private _client: any = null;

        private _storylineDetails: object = new Object();
        private _storylineDetails_Parameters: object = new Object();

        private _requestToResolveObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;
        private _requestToResolveString: string = "";

        private _extraData: ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0 = new ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0;

        private _requestName: string = "";
        private _requestToProcess: string = "";
        private _requestToProcessParameters: string = "";

        //#endregion

        //#region 2. Ready

        constructor(client: any, storylineDetails: object, storylineDetails_Parameters: object, requestToResolveObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0, extraData: ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0, requestToResolveString: string, requestToProcess: string = "", requestToProcessParameters: string = "") {
            super();

            this._client = client;

            this._storylineDetails = storylineDetails;
            this._storylineDetails_Parameters = storylineDetails_Parameters;

            this._requestToResolveObject = requestToResolveObject;
            this._requestToResolveString = requestToResolveString;
            this._requestName = requestToResolveString;
            this._requestToProcess = requestToProcess;
            this._requestToProcessParameters = requestToProcessParameters;

            this._extraData = extraData;

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
        //#endregion

        //#region 4. Action

        //#region EXECUTE LOGIC INSTUCTIONS

        //Page 1-1
        public async Action_1_Begin_Process(): Promise<object> {
            let armTemplateJSONOutput: object = new Object();

            return new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0.BaseDI.BackEnd.Director.Programming_1.Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(this._extraData))
                .SetupStoryline(this._client, this._storylineDetails, this._storylineDetails_Parameters, this._extraData, "", "Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0", "Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0-P1_0")
                .Action();
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
    //#endregion

    //#region HANDLE REQUEST SENSOR
    export class Implement_DesignPattern_Factory_Sensor_12_2_1_0 extends aClass_Programming_ScriptAction_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>
    {
        //#region 1. Assign
        private _client: any = null;

        private _storylineDetails: object = new Object();
        private _storylineDetails_Parameters: object = new Object();

        private _requestToResolveObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;
        private _requestToResolveString: string = "";

        private _extraData: ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0 = new ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0;

        private _requestName: string = "";
        private _requestToProcess: string = "";
        private _requestToProcessParameters: string = "";

        //#endregion

        //#region 2. Ready

        constructor(client: any, storylineDetails: object, storylineDetails_Parameters: object, requestToResolveObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.BackEnd.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0, extraData: ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0, requestToResolveString: string, requestToProcess: string = "", requestToProcessParameters: string = "") {
            super();

            this._client = client;

            this._storylineDetails = storylineDetails;
            this._storylineDetails_Parameters = storylineDetails_Parameters;

            this._requestToResolveObject = requestToResolveObject;
            this._requestToResolveString = requestToResolveString;
            this._requestName = requestToResolveString;
            this._requestToProcess = requestToProcess;
            this._requestToProcessParameters = requestToProcessParameters;

            this._extraData = extraData;

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
        //#endregion

        //#region 4. Action

        //#region EXECUTE LOGIC INSTUCTIONS

        //Page 1-1
        public async Action_1_Begin_Process(): Promise<object> {
            let armTemplateJSONOutput: object = new Object();

            return new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0.BaseDI.BackEnd.Director.Programming_1.Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(this._extraData))
                .SetupStoryline(this._client, this._storylineDetails, this._storylineDetails_Parameters, this._extraData, "", "Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0", "Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0-P1_0")
                .Action();
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
    //#endregion

    //#endregion
}