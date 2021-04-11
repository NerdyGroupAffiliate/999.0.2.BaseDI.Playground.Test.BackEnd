//#region Imports

//#region BaseDI

/////////////////////////////////////////////////////////////////////////////////////
//0. BaseDI Global Dependencies
/////////////////////////////////////////////////////////////////////////////////////
import * as aClass_Programming_ScriptMasterLeader_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptMasterLeader_12_2_1_0";

import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptRoutable_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptRoutable_12_2_1_0";

import * as ExtraData_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";
import * as SingleParmPoco_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

/////////////////////////////////////////////////////////////////////////////////////

//1. Generate Brand Awareness
import * as AdvertisingFactoryImplementer_NicheMaster_1_1_1_0 from "../../../../../../../../1. Storyline/1/Generate Brand Awareness/1/Advertising/Factory/1/1_0/AdvertisingFactoryImplementer_NicheMaster_1_1_1_0";

//2. Generate Brand Trust
import * as BloggingFactoryImplementer_NicheMaster_2_1_1_0 from "../../../../../../../../1. Storyline/2/Generate Brand Trust/1/Blogging/Factory/1/1_0/BloggingFactoryImplementer_NicheMaster_2_1_1_0";
import * as PodcastingFactoryImplementer_NicheMaster_2_2_1_0 from "../../../../../../../../1. Storyline/2/Generate Brand Trust/2/Podcasting/Factory/1/1_0/PodcastingFactoryImplementer_NicheMaster_2_2_1_0";
import * as SocialMediaFactoryImplementer_NicheMaster_2_3_1_0 from "../../../../../../../../1. Storyline/2/Generate Brand Trust/3/Social Media/Factory/1/1_0/SocialMediaFactoryImplementer_NicheMaster_2_3_1_0";

//3. Generate Optin
import * as ListBuildingFactoryImplementer_NicheMaster_3_1_1_0 from "../../../../../../../../1. Storyline/3/Generate Optin/1/List Building/Factory/1/1_0/ListBuildingFactoryImplementer_NicheMaster_3_1_1_0";

//4. Sell Low Ticket Offer
import * as SupplementsFactoryImplementer_NicheMaster_4_1_1_0 from "../../../../../../../../1. Storyline/4/Sell Low Ticket Offer/1/Supplements/Factory/1/1_0/SupplementsFactoryImplementer_NicheMaster_4_1_1_0";

//5. Sell High Ticket Offer
import * as CoachingFactoryImplementer_NicheMaster_5_1_1_0 from "../../../../../../../../1. Storyline/5/Sell High Ticket Offer/1/Coaching/Factory/1/1_0/CoachingFactoryImplementer_NicheMaster_5_1_1_0";
import * as ConsultingFactoryImplementer_NicheMaster_5_2_1_0 from "../../../../../../../../1. Storyline/5/Sell High Ticket Offer/2/Consulting/Factory/1/1_0/ConsultingFactoryImplementer_NicheMaster_5_2_1_0";
import * as PersonalTrainingFactoryImplementer_NicheMaster_5_3_1_0 from "../../../../../../../../1. Storyline/5/Sell High Ticket Offer/3/Personal Training/Factory/1/1_0/PersonalTrainingFactoryImplementer_NicheMaster_5_3_1_0";

//6. Sell Subscription Offer
import * as SoftwareFactoryImplementer_NicheMaster_6_1_1_0 from "../../../../../../../../1. Storyline/6/Sell Subscription Offer/1/Software/Factory/1/1_0/SoftwareFactoryImplementer_NicheMaster_6_1_1_0";

//7. Sell Commission Offer
import * as AffiliateRevenueFactoryImplementer_NicheMaster_7_1_1_0 from "../../../../../../../../1. Storyline/7/Sell Commission Offer/1/Affiliate Revenue/Factory/1/1_0/AffiliateRevenueFactoryImplementer_NicheMaster_7_1_1_0";

//8. Account Gain or Loss
import * as AccountingFactoryImplementer_NicheMaster_8_1_1_0 from "../../../../../../../../1. Storyline/8/Account Gain or Loss/1/Accounting/Factory/1/1_0/AccountingFactoryImplementer_NicheMaster_8_1_1_0";

//9. Improve Customer Service
import * as CustomerServiceFactoryImplementer_NicheMaster_9_1_1_0 from "../../../../../../../../1. Storyline/9/Improve Customer Service/1/Customer Service/Factory/1/1_0/CustomerServiceFactoryImplementer_NicheMaster_9_1_1_0";

//10. Perform Manual Task
import * as ProductivityFactoryImplementer_NicheMaster_10_1_1_0 from "../../../../../../../../1. Storyline/10/Perform Manual Task/1/Productivity/Factory/1/1_0/ProductivityFactoryImplementer_NicheMaster_10_1_1_0";

//11. Automate Manual Task
import * as Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0 from "../../../../../../../../0. Script/Extensions/11/Automate Manual Task/1/Risk Management/Method/0/1_0/Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0";
import * as RiskManagementFactoryTester_NicheMaster_11_1_1_0 from "../../../../../../../../1. Storyline/11/Automate Manual Task/1/Risk Management/Factory/1/1_0/RiskManagementFactoryTester_NicheMaster_11_1_1_0";

//12. Other
import * as CareersEmploymentFactoryImplementer_NicheMaster_12_1_1_0 from "../../../../../../../../1. Storyline/12/Other/1/Careers Employment/Factory/1/1_0/CareersEmploymentFactoryImplementer_NicheMaster_12_1_1_0";
import * as ProgrammingFactoryImplementer_NicheMaster_12_2_1_0 from "../../../../../../../../1. Storyline/12/Other/2/Programming/Studio/1/1_0/ProgrammingFactoryImplementer_NicheMaster_12_2_1_0";
import * as WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0 from "../../../../../../../../1. Storyline/12/Other/3/Web Development/Factory/1/1_0/WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0";
import * as CMSFactoryImplementer_NicheMaster_12_4_1_0 from "../../../../../../../../1. Storyline/12/Other/4/CMS/Factory/1/1_0/CMSFactoryImplementer_NicheMaster_12_4_1_0";
import * as SecurityFactoryImplementer_NicheMaster_12_5_1_0 from "../../../../../../../../1. Storyline/12/Other/5/Security/Factory/1/1_0/SecurityFactoryImplementer_NicheMaster_12_5_1_0";

import * as Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "../../../../../../../../7. Director/12/Other/2/Programming/Director/1/1_0/Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";

//#endregion

//#region 3rd Party Core


//#endregion

//#endregion

export namespace BaseDI.Professional.Story.Programming_1
{
    export class ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 extends aClass_Programming_ScriptMasterLeader_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptMasterLeader_12_2_1_0
    {
        //#region 1. Assign

        //A. Variable Declaration 

        //SETTINGS
        private _storedAppSettings: any = null;

        //CLIENT/SERVER
        private _storedClientRequestByObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0 = null;

        //MISC
        private _storedExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0 = null;

        //PLUMBING
        private Mistake: any = null;

        //#endregion

        //#region 2. Ready

        //A. Constructor Instantiation

        constructor(clientRequestByObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0)
        {
            super();

            //#region 1. INPUTS

            //#region MEMORIZE request datatype

            this._storedClientRequestByObject = clientRequestByObject;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process defaults

            //#region IDEAL CASE - USE defaults handler

            this.HandleStoryDefaults = this.HandleStoryDefaults.bind(this);
            this.HandleStoryDefaults();

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#endregion
        }

        //#endregion

        //#region 3. Set

        //A. Default state
        private HandleStoryDefaults() : void
        {
            //#region 1. INPUTS

            //#region MEMORIZE masterleader reference

            this._storedExtraData = new ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0();
            this._storedExtraData.MasterLeader = this;

            //#endregion

            //#endregion

            //#region 2. PROCESS


            //#endregion

            //#region 3. OUTPUT

            //#endregion
        }

        //#endregion

        //#region 4. Action

        //A. Story in motion (DO SOMETHING)

        public SetupStoryline(parameterClientOrServerInstance: any, parameterStorylineDetails: Object, parameterStorylineDetails_Parameters: Object, parameterExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0 = null, parameterSystemRequestByName: string = "", parameterClientRequestByName: string = "", parameterClientRequestByNameParameters: string = "") : aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0
        {
            //#region 1. INPUTS

            //#region DEFINE request handler

            let stored_ReferenceTo_RequestHandler: any = null;

            //#endregion

            //#region DEFINE exception handler

            let stored_ExceptionDetails: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //#endregion

            //#region MEMORIZE app settings

            this._storedAppSettings = parameterClientOrServerInstance["appSettings"];

            //#endregion

            //#region MEMORIZE action name

            let storedActionName: string = parameterClientOrServerInstance["actionName"];

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            if (parameterClientOrServerInstance["processStepNumber"] == null)
                parameterClientOrServerInstance["processStepNumber"] = 0;

            let storedDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (parameterExtraData?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") ? parameterExtraData?.KeyValuePairs?.getValue("storedDeveloperLoggingInputs") : null);

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "BEGIN processing request");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", parameterClientOrServerInstance["actionName"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", parameterClientOrServerInstance["appSettings"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", parameterClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "SetupStoryline"); 

            //OPTIONAL
            storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALBeginOfProcess", true);

            if (storedDeveloperLoggingStartUpProcessInputs != null && storedDeveloperLoggingStartUpProcessInputs != undefined)
            {
                storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALMasterLeaderIsSecondStep", storedDeveloperLoggingStartUpProcessInputs.Parameters.getValue("parameterOPTIONALMasterLeaderIsSecondStep"));

                if (storedDeveloperLoggingStartUpProcessInputs.Parameters.getValue("parameterOPTIONALMasterLeaderIsSecondStep") == true) {
                    storedDeveloperLoggingInputs.Parameters.remove("parameterOPTIONALBeginOfProcess");
                    storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALBeginOfProcess", false);
                }
            }

            //#endregion

            //#region MEMORIZE extra data

            if (parameterExtraData != null)
                this._storedExtraData = parameterExtraData;

            //#endregion

            //#region MEMORIZE request resolver

            let stored_DirectorOrExperienceRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0

            let stored_ResolvedRequestHandler = new Use_DesignPattern_Builder_Chapter_12_2_1_0(parameterClientOrServerInstance, parameterStorylineDetails, parameterStorylineDetails_Parameters, this._storedClientRequestByObject, this._storedExtraData, parameterSystemRequestByName, parameterClientRequestByName, parameterClientRequestByNameParameters);

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try {
                //#region FIND request handler

                //#region EDGE CASE - USE developer logger

                if (storedDeveloperMode && parameterClientOrServerInstance["processStepNumber"] == 0) {
                    parameterClientOrServerInstance["processStepNumber"] += 1;

                    storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Logging"); //Values = Logging or Mistake
                    storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", parameterClientOrServerInstance["processStepNumber"]);

                    Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Custom_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                }

                //#endregion

                //#region IDEAL CASE - USE an experience OR a director request handler

                //NOTE: 1. The Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 is called "TWICE" per request.
                   //A: The first time is to "MERGE" the data objects of "StorylineDetails" and "StorylineDetails_Parameters" into ONE SINGLE data object.
                   //B: The second time is to call the "ACTION" method off the "ENTRYPOINT" property from inside the "IF" statement below.
                stored_ReferenceTo_RequestHandler = stored_ResolvedRequestHandler.Action();

                if (parameterSystemRequestByName != "")
                {                    
                    stored_DirectorOrExperienceRequestHandler = stored_ReferenceTo_RequestHandler;

                    stored_DirectorOrExperienceRequestHandler.RequestID = parameterSystemRequestByName;
                    stored_DirectorOrExperienceRequestHandler.ClientOrServerInstance = parameterClientOrServerInstance;

                    this._storedClientRequestByObject.ClientOrServerInstance = parameterClientOrServerInstance;

                    this._storedClientRequestByObject.DirectorOrExperienceRequestHandler = stored_DirectorOrExperienceRequestHandler;
                    this._storedClientRequestByObject.ExtraData = this._storedExtraData;

                    this._storedClientRequestByObject.MasterLeader = stored_DirectorOrExperienceRequestHandler.MasterLeader;

                    this._storedClientRequestByObject.StorylineDetails = stored_DirectorOrExperienceRequestHandler.StorylineDetails;
                    this._storedClientRequestByObject.StorylineDetails_Parameters = stored_DirectorOrExperienceRequestHandler.StorylineDetails_Parameters;

                    stored_ReferenceTo_RequestHandler = this._storedClientRequestByObject;
                }

                //#endregion

                //#endregion
            }
            catch (mistake)
            {
                //#region EDGE CASE - USE exception handler
                stored_ExceptionDetails = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

                stored_ExceptionDetails.RequestNameToProcess = parameterClientRequestByName;
                stored_ExceptionDetails.RequestNameToProcessParameters = parameterClientRequestByNameParameters;

                stored_ExceptionDetails.StorylineDetails = parameterStorylineDetails;

                stored_ExceptionDetails.Parameters.setValue("StoredparameterClientOrServerInstance", parameterClientOrServerInstance);
                stored_ExceptionDetails.Parameters.setValue("StoredExtraData", parameterExtraData);
                stored_ExceptionDetails.Parameters.setValue("StoredMistakes", mistake);

                throw Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Custom_Control_AppException_1_0(stored_ExceptionDetails);

                //#endregion
            }
            
            //#endregion

            //#region 3. OUTPUT

            //#region RETURN request handler

            //#region IDEAL CASE - USE an experience OR a director handler

            return stored_ReferenceTo_RequestHandler;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion
    }

    //#region 5. Action Script

    //A. Prepare for Action (SETUP WHAT WILL HAPPEN)

    export class Use_DesignPattern_Builder_Chapter_12_2_1_0
    {
        //#region 1. Assign

        //SETTINGS
        private _storedAppSettings: any = null;

        //CLIENT/SERVER
        _storedClientOrServerInstance: any;

        _storedClientRequestByName: string;
        _storedClientRequestByNameParameters: string;

        _storedClientRequestByObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        //DATASETS
        _storedStorylineDetails: any;
        _storedStorylineDetails_Parameters: any;

        //MISC
        _storedExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //PLUMBING
        _storedRequestName: string = "";
        _storedSystemRequestByName: string;

        //#endregion

        //#region 2. Ready

        constructor(parameterClientOrServerInstance: any, parameterStorylineDetails: Object, parameterStorylineDetails_Parameters: Object, parameterClientRequestByObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0, parameterExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0 = null, parameterSystemRequestByName: string = "", parameterClientRequestByName: string = "", parameterClientRequestByNameParameters: string = "")
        {
            //#region 1. INPUTS

            //#region MEMORIZE app settings

            this._storedAppSettings = parameterClientOrServerInstance["appSettings"];

            //#endregion

            //#region MEMORIZE clientOrServer instance

            this._storedClientOrServerInstance = parameterClientOrServerInstance;

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#region MEMORIZE extra data

            this._storedExtraData = parameterExtraData;

            //#endregion

            //#region MEMORIZE request details

            this._storedClientRequestByName = parameterClientRequestByName;
            this._storedClientRequestByNameParameters = parameterClientRequestByNameParameters;

            this._storedClientRequestByObject = parameterClientRequestByObject;
            this._storedSystemRequestByName = parameterSystemRequestByName;

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
        }

        //#endregion

        //#region 3. Set

        //A. Default state of this part of the storyline
        //#region 1. INPUTS

        //#endregion

        //#region 2. PROCESS

        //#endregion

        //#region 3. OUTPUT

        //#endregion

        //#endregion

        //#region 4. Action

        Action(): object
        {
            //#region 1. INPUTS

            //#region MEMORIZE action name

            let storedActionName: string = this._storedClientOrServerInstance ["actionName"] as string;

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#region MEMORIZE execution strategy

            let storedExeuctionStragety = new Implement_DesignPattern_Builder_Chapter_12_2_1_0(this._storedClientOrServerInstance, this._storedStorylineDetails, this._storedStorylineDetails_Parameters, this._storedClientRequestByObject, this._storedExtraData, this._storedSystemRequestByName, this._storedClientRequestByName, this._storedClientRequestByNameParameters);

            //#endregion

            //#region MEMORIZE resolved request handler

            let stored_Resolved_EXPERIENCEorDIRECTOR_RequestHandler: Object = null;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region FIND request handler

            try
            {
                //#region IDEAL CASE - USE an experience OR a director request handler

                storedExeuctionStragety.Action_1_Begin_Process();
                stored_Resolved_EXPERIENCEorDIRECTOR_RequestHandler = storedExeuctionStragety.Action_10_End_Process();

                //#endregion
            }
            catch (mistake)
            {
                //#region EDGE CASE - USE exception handler

                throw mistake;

                //#endregion
            }

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN request handler

            //#region IDEAL CASE - USE an experience OR a director handler

            return stored_Resolved_EXPERIENCEorDIRECTOR_RequestHandler;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion
    }

    //#endregion

    //#region 6. Action Implementation

    //A. Story in motion (DO SOMETHING) ACTING

    export class Implement_DesignPattern_Builder_Chapter_12_2_1_0 extends aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>
    {
        //#region 1. Assign

        //SETTINGS
        private _storedAppSettings: any = null;

        //CLIENT/SERVER
        private _storedClientOrServerInstance: any;

        private _storedClientRequestByName: string = "";
        private _storedClientRequestByNameParameters: string = "";

        private _storedClientRequestByObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        //DATASETS
        private _storedStorylineDetails: Object;
        private _storedStorylineDetails_Parameters: Object;

        //MISC
        private _storedExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //PLUMBING
        private _storedRequestName: string = "";
        private _storedSystemRequestByName: string;

        //#endregion

        //#region 2. Ready

        constructor(parameterClientOrServerInstance: any, parameterStorylineDetails: Object, parameterStorylineDetails_Parameters: Object, parameterClientRequestByObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0, parameterExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0 = null, parameterSystemRequestByName: string = "", parameterClientRequestByName: string = "", parameterClientRequestByNameParameters: string = "")
        {
            super();

            //#region 1. INPUTS

            //#region MEMORIZE app settings

            this._storedAppSettings = parameterClientOrServerInstance["appSettings"];

            //#endregion

            //#region MEMORIZE clientOrServer instance

            this._storedClientOrServerInstance = parameterClientOrServerInstance;

            //#endregion

            //#region MEMORIZE extra data

            this._storedExtraData = parameterExtraData;

            //#endregion

            //#region MEMORIZE request details

            this._storedClientRequestByName = parameterClientRequestByName;
            this._storedClientRequestByNameParameters = parameterClientRequestByNameParameters;

            this._storedClientRequestByObject = parameterClientRequestByObject;
            this._storedSystemRequestByName = parameterSystemRequestByName;

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

        public Action_1_Begin_Process(): object
        {
            //#region 1. INPUTS

            //#endregion

            //#region 2. PROCESS

            //#region STORE request name

            //#region IDEAL CASE - USE request by object

            if (this._storedSystemRequestByName == "" || this._storedSystemRequestByName == null || this._storedSystemRequestByName == undefined)
            {

                this._storedRequestName = this._storedClientRequestByObject != null ? this._storedClientRequestByObject.constructor.name : this._storedClientRequestByName;
            }
            else
            {
                this._storedRequestName = this._storedSystemRequestByName;
            }

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN request handler

            //#region IDEAL CASE - USE an experience OR a director handler

            return this._storedRequestName as Object;

            //#endregion

            //#endregion

            //#endregion
        }

        public Action_10_End_Process(): object
        {
            //#region 1. INPUTS  

            //#region MEMORIZE experience request handler

            let storedExperienceRequestHandler = new Implement_DesignPattern_Factory_Experience_12_2_1_0(this._storedClientOrServerInstance, this._storedStorylineDetails, this._storedStorylineDetails_Parameters, this._storedClientRequestByObject, this._storedExtraData, this._storedRequestName, this._storedClientRequestByName, this._storedClientRequestByNameParameters);

            //#endregion

            //#region MEMORIZE director request handler

            let _stored_DirectorRequestHandler = new Implement_DesignPattern_Factory_Director_12_2_1_0(this._storedClientOrServerInstance, this._storedStorylineDetails, this._storedStorylineDetails_Parameters, this._storedClientRequestByObject, this._storedExtraData, this._storedRequestName, this._storedClientRequestByName, this._storedClientRequestByNameParameters);

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region PICK experience OR director

            try
            {
                //#region IDEAL CASE - USE director request handler

                if (this._storedRequestName.toUpperCase().includes("DIRECTOR_OF_")) {
                    return _stored_DirectorRequestHandler.Action_1_Begin_Process();
                }

                //#endregion

                //#region EDGE CASE - USE experience request handler

                if (this._storedRequestName.toUpperCase().includes("EXPERIENCE_THE_")) {
                    return storedExperienceRequestHandler.Action_1_Begin_Process();
                }

                //#endregion
            }
            catch (mistake)
            {
                //#region EDGE CASE - USE exception handler

                throw mistake;

                //#endregion
            }

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN exception message

            //#region EDGE CASE - USE exception message

            throw new Error("[DISTURBANCE ISSUE] - Bug - ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.cs -> Implement_DesignPattern_Builder_Chapter_12_2_1_0 -> Action_10_End_Process - BaseDI will not work without a request handler. Please make sure that clientRequestByName is not blank, null or begins with ***DIRECTOR_OF_*** or ***EXPERIENCE_THE_***!");

            //#endregion

            //#endregion

            //#endregion
        }

        //#region NOT APART OF THE REQUEST PIPELINE AT THIS TIME

        public Action_2_Validate_Process(): object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        public Action_3_Process_StoryAuthor(): object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        public Action_4_Process_StoryCharacters(): object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        public Action_5_Process_StorySetting(): object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        public Action_6_Process_StoryExperiences(): object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        public Action_7_Process_StoryResources(): object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        public Action_8_Process_CRUD(): object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        public Action_9_Verify_Process(): object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        //#endregion

        //#endregion
    }

    //#region RETURN DIRECTOR HANDLER

    export class Implement_DesignPattern_Factory_Director_12_2_1_0 extends aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>
    {
        //#region 1. Assign

        //SETTINGS
        private _storedAppSettings: any = null;

        //CLIENT/SERVER
        private _storedClientOrServerInstance: any;

        private _storedClientRequestByObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        private _storedClientRequestByName: string = "";
        private _storedClientRequestByNameParameters: string = "";

        //DATASETS
        private _storedStorylineDetails: Object;
        private _storedStorylineDetails_Parameters: Object;

        //MISC
        private _storedExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //PLUMBING
        private _stored_CentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _stored_CentralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _stored_CentralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        private _storedRequestName: string = "";
        private _storedSystemRequestByName: string;

        //#endregion

        //#region 2. Ready

        constructor(parameterClientOrServerInstance: any, parameterStorylineDetails: Object, parameterStorylineDetails_Parameters: Object, parameterClientRequestByObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0, parameterExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0 = null, parameterSystemRequestByName: string = "", parameterClientRequestByName: string = "", parameterClientRequestByNameParameters: string = "")
        {
            super()

            //#region 1. INPUTS

            //#region MEMORIZE app settings

            this._storedAppSettings = parameterClientOrServerInstance["appSettings"];

            //#endregion

            //#region MEMORIZE clientOrServer instance

            this._storedClientOrServerInstance = parameterClientOrServerInstance;

            //#endregion

            //#region MEMORIZE centralized processes handlers

            if (this._stored_CentralizedDisturber == null)
            {
                this._stored_CentralizedDisturber = new Implement_DesignPattern_Factory_Disturber_12_2_1_0(parameterClientOrServerInstance, parameterStorylineDetails, parameterStorylineDetails_Parameters, parameterClientRequestByObject, parameterExtraData, parameterSystemRequestByName, parameterClientRequestByName, parameterClientRequestByNameParameters);
            }

            if (this._stored_CentralizedStorer == null)
            {
                this._stored_CentralizedStorer = new Implement_DesignPattern_Factory_Storer_12_2_1_0(parameterClientOrServerInstance, parameterStorylineDetails, parameterStorylineDetails_Parameters, parameterClientRequestByObject, parameterExtraData, parameterSystemRequestByName, parameterClientRequestByName, parameterClientRequestByNameParameters);
            }

            if (this._stored_CentralizedSensor == null)
            {
                this._stored_CentralizedSensor = new Implement_DesignPattern_Factory_Sensor_12_2_1_0(parameterClientOrServerInstance, parameterStorylineDetails, parameterStorylineDetails_Parameters, parameterClientRequestByObject, parameterExtraData, parameterSystemRequestByName, parameterClientRequestByName, parameterClientRequestByNameParameters);
            }

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#region MEMORIZE storyline details

            this._storedStorylineDetails = parameterStorylineDetails;
            this._storedStorylineDetails_Parameters = parameterStorylineDetails_Parameters;

            //#endregion

            //#region MEMORIZE extra data

            this._storedExtraData = parameterExtraData;

            //#endregion

            //#region MEMORIZE request details

            this._storedClientRequestByName = parameterClientRequestByName;
            this._storedClientRequestByNameParameters = parameterClientRequestByNameParameters;
            this._storedClientRequestByObject = parameterClientRequestByObject;

            this._storedRequestName = parameterSystemRequestByName;

            this._storedSystemRequestByName = parameterSystemRequestByName;

            //#endregion

            //#endregion

            //#region 2. PROCESS

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

        public Action_1_Begin_Process(): object
        {
            //#region 1. INPUTS  

            //#region DEFINE director request handlers

            let _1_1_stored_Director_Of_Advertising_RequestHandler: AdvertisingFactoryImplementer_NicheMaster_1_1_1_0.BaseDI.Professional.Story.Advertising_1.AdvertisingFactoryImplementer_NicheMaster_1_1_1_0 = null;
            
            let _2_1_stored_Director_Of_Blogging_RequestHandler: BloggingFactoryImplementer_NicheMaster_2_1_1_0.BaseDI.Professional.Story.Blogging_1.BloggingFactoryImplementer_NicheMaster_2_1_1_0 = null;
            let _2_2_stored_Director_Of_Podcasting_RequestHandler: PodcastingFactoryImplementer_NicheMaster_2_2_1_0.BaseDI.Professional.Story.Podcasting_2.PodcastingFactoryImplementer_NicheMaster_2_2_1_0 = null;
            let _2_3_stored_Director_Of_SocialMedia_RequestHandler: SocialMediaFactoryImplementer_NicheMaster_2_3_1_0.BaseDI.Professional.Story.Social_Media_3.SocialMediaFactoryImplementer_NicheMaster_2_3_1_0 = null;

            let _3_1_stored_Director_Of_ListBuilding_RequestHandler: ListBuildingFactoryImplementer_NicheMaster_3_1_1_0.BaseDI.Professional.Story.Listing_Building_1.ListBuildingFactoryImplementer_NicheMaster_3_1_1_0 = null;

            let _4_1_stored_Director_Of_Supplements_RequestHandler: SupplementsFactoryImplementer_NicheMaster_4_1_1_0.BaseDI.Professional.Story.Supplements_1.SupplementsFactoryImplementer_NicheMaster_4_1_1_0 = null;

            let _5_1_stored_Director_Of_Coaching_RequestHandler: CoachingFactoryImplementer_NicheMaster_5_1_1_0.BaseDI.Professional.Story.Coaching_1.CoachingFactoryImplementer_NicheMaster_5_1_1_0 = null;
            let _5_2_stored_Director_Of_Consulting_RequestHandler: ConsultingFactoryImplementer_NicheMaster_5_2_1_0.BaseDI.Professional.Story.Consulting_2.ConsultingFactoryImplementer_NicheMaster_5_2_1_0 = null;
            let _5_3_stored_Director_Of_PersonalTraining_RequestHandler: PersonalTrainingFactoryImplementer_NicheMaster_5_3_1_0.BaseDI.Professional.Story.Personal_Training_3.PersonalTrainingFactoryImplementer_NicheMaster_5_3_1_0 = null;

            let _6_1_stored_Director_Of_Software_RequestHandler: SoftwareFactoryImplementer_NicheMaster_6_1_1_0.BaseDI.Professional.Story.Software_1.SoftwareFactoryImplementer_NicheMaster_6_1_1_0 = null;

            let _7_1_stored_Director_Of_AffiliateRevenue_RequestHandler: AffiliateRevenueFactoryImplementer_NicheMaster_7_1_1_0.BaseDI.Professional.Story.Affiliate_Revenue_1.AffiliateRevenueFactoryImplementer_NicheMaster_7_1_1_0 = null;

            let _8_1_stored_Director_Of_Accounting_RequestHandler: AccountingFactoryImplementer_NicheMaster_8_1_1_0.BaseDI.Professional.Story.Accounting_1.AccountingFactoryImplementer_NicheMaster_8_1_1_0 = null;

            let _9_1_stored_Director_Of_CustomerService_RequestHandler: CustomerServiceFactoryImplementer_NicheMaster_9_1_1_0.BaseDI.Professional.Story.Customer_Service_1.CustomerServiceFactoryImplementer_NicheMaster_9_1_1_0 = null;

            let _10_1_stored_Director_Of_Productivity_RequestHandler: ProductivityFactoryImplementer_NicheMaster_10_1_1_0.BaseDI.Professional.Story.Productivity_1.ProductivityFactoryImplementer_NicheMaster_10_1_1_0 = null;

            let _11_1_stored_Director_Of_RiskManagement_RequestHandler: RiskManagementFactoryTester_NicheMaster_11_1_1_0.BaseDI.Professional.Story.Risk_Management_1.RiskManagementFactoryTester_NicheMaster_11_1_1_0 = null;
            
            let _12_1_stored_Director_Of_Careers_RequestHandler: CareersEmploymentFactoryImplementer_NicheMaster_12_1_1_0.BaseDI.Professional.Story.Careers_Employment_1.CareersEmploymentFactoryImplementer_NicheMaster_12_1_1_0 = null;
            let _12_2_stored_Director_Of_Programming_RequestHandler: ProgrammingFactoryImplementer_NicheMaster_12_2_1_0.BaseDI.Professional.Story.Programming_1.ProgrammingFactoryImplementer_NicheMaster_12_2_1_0 = null;
            let _12_3_stored_Director_Of_WebDevelopment_RequestHandler: WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0.BaseDI.Professional.Story.Web_Development_1.WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0 = null;
            let _12_4_stored_Director_Of_CMS_RequestHandler: CMSFactoryImplementer_NicheMaster_12_4_1_0.BaseDI.Professional.Story.CMS_1.CMSFactoryImplementer_NicheMaster_12_4_1_0 = null;
            let _12_5_stored_Director_Of_Security_RequestHandler: SecurityFactoryImplementer_NicheMaster_12_5_1_0.BaseDI.Professional.Story.Security_1.SecurityFactoryImplementer_NicheMaster_12_5_1_0 = null;

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region ASSIGN request handler

            try
            {
                //#region IDEAL CASE - USE a director

                if (this._storedRequestName.toUpperCase().includes("DIRECTOR_OF_PROGRAMMING"))
                {
                    //#region 12. Other

                    _12_2_stored_Director_Of_Programming_RequestHandler = new ProgrammingFactoryImplementer_NicheMaster_12_2_1_0.BaseDI.Professional.Story.Programming_1.ProgrammingFactoryImplementer_NicheMaster_12_2_1_0(this._storedExtraData);
                    
                    _12_2_stored_Director_Of_Programming_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6912/storyline/basedi/io/professional/programming";
                    _12_2_stored_Director_Of_Programming_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7912/storyline/basedi/io/professional/programming";

                    _12_2_stored_Director_Of_Programming_RequestHandler.APILocationLocalNodeJS = "https://localhost:8912/storyline/basedi/io/professional/programming";
                    _12_2_stored_Director_Of_Programming_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9912/storyline/basedi/io/professional/programming";

                    _12_2_stored_Director_Of_Programming_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/programming";

                    return _12_2_stored_Director_Of_Programming_RequestHandler.Action(this._storedClientOrServerInstance, this._stored_CentralizedStorer, this._stored_CentralizedDisturber, this._stored_CentralizedSensor, this._storedClientRequestByObject, this._storedStorylineDetails, this._storedStorylineDetails_Parameters, this._storedRequestName, this._storedClientRequestByName, this._storedClientRequestByNameParameters);

                    //#endregion
                }
                else
                {
                    //This means our director of programming wanted us to play this storyline.
                    //#region 1. Generate Brand Awareness Storylines

                    if (this._storedRequestName.toUpperCase().includes("DIRECTOR_OF_ADVERTISING"))
                    {
                        _1_1_stored_Director_Of_Advertising_RequestHandler = new AdvertisingFactoryImplementer_NicheMaster_1_1_1_0.BaseDI.Professional.Story.Advertising_1.AdvertisingFactoryImplementer_NicheMaster_1_1_1_0(this._storedExtraData);

                        _1_1_stored_Director_Of_Advertising_RequestHandler.APILocationLocalDotNetCore = "http://localhost:6991/storyline/basedi/io/professional/advertising";
                        _1_1_stored_Director_Of_Advertising_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7991/storyline/basedi/io/professional/advertising";

                        _1_1_stored_Director_Of_Advertising_RequestHandler.APILocationLocalNodeJS = "https://localhost:8991/storyline/basedi/io/professional/advertising";
                        _1_1_stored_Director_Of_Advertising_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9991/storyline/basedi/io/professional/advertising";

                        _1_1_stored_Director_Of_Advertising_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/advertising";

                        return _1_1_stored_Director_Of_Advertising_RequestHandler.Action(this._storedClientOrServerInstance, this._stored_CentralizedStorer, this._stored_CentralizedDisturber, this._stored_CentralizedSensor, this._storedClientRequestByObject, this._storedStorylineDetails, this._storedStorylineDetails_Parameters, this._storedRequestName, this._storedClientRequestByName, this._storedClientRequestByNameParameters);
                    }

                    //#endregion

                    //#region 2. Generate Brand Trust Storylines

                    if (this._storedRequestName.toUpperCase().includes("DIRECTOR_OF_BLOGGING"))
                    {
                        _2_1_stored_Director_Of_Blogging_RequestHandler = new BloggingFactoryImplementer_NicheMaster_2_1_1_0.BaseDI.Professional.Story.Blogging_1.BloggingFactoryImplementer_NicheMaster_2_1_1_0(this._storedExtraData);
                        
                        _2_1_stored_Director_Of_Blogging_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6992/storyline/basedi/io/professional/blogging";
                        _2_1_stored_Director_Of_Blogging_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7992/storyline/basedi/io/professional/blogging";

                        _2_1_stored_Director_Of_Blogging_RequestHandler.APILocationLocalNodeJS = "https://localhost:8992/storyline/basedi/io/professional/blogging";
                        _2_1_stored_Director_Of_Blogging_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9992/storyline/basedi/io/professional/blogging";

                        _2_1_stored_Director_Of_Blogging_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/blogging";

                        return _2_1_stored_Director_Of_Blogging_RequestHandler.Action(this._storedClientOrServerInstance, this._stored_CentralizedStorer, this._stored_CentralizedDisturber, this._stored_CentralizedSensor, this._storedClientRequestByObject, this._storedStorylineDetails, this._storedStorylineDetails_Parameters, this._storedRequestName, this._storedClientRequestByName, this._storedClientRequestByNameParameters);
                    }

                    if (this._storedRequestName.toUpperCase().includes("DIRECTOR_OF_PODCASTING"))
                    {
                        _2_2_stored_Director_Of_Podcasting_RequestHandler = new PodcastingFactoryImplementer_NicheMaster_2_2_1_0.BaseDI.Professional.Story.Podcasting_2.PodcastingFactoryImplementer_NicheMaster_2_2_1_0(this._storedExtraData);

                        _2_2_stored_Director_Of_Podcasting_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6992/storyline/basedi/io/professional/podcasting";
                        _2_2_stored_Director_Of_Podcasting_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7992/storyline/basedi/io/professional/podcasting";

                        _2_2_stored_Director_Of_Podcasting_RequestHandler.APILocationLocalNodeJS = "https://localhost:8992/storyline/basedi/io/professional/podcasting";
                        _2_2_stored_Director_Of_Podcasting_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9992/storyline/basedi/io/professional/podcasting";

                        _2_2_stored_Director_Of_Podcasting_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/podcasting";

                        return _2_2_stored_Director_Of_Podcasting_RequestHandler.Action(this._storedClientOrServerInstance, this._stored_CentralizedStorer, this._stored_CentralizedDisturber, this._stored_CentralizedSensor, this._storedClientRequestByObject, this._storedStorylineDetails, this._storedStorylineDetails_Parameters, this._storedRequestName, this._storedClientRequestByName, this._storedClientRequestByNameParameters);
                    }

                    if (this._storedRequestName.toUpperCase().includes("DIRECTOR_OF_SOCIALMEDIA"))
                    {
                        _2_3_stored_Director_Of_SocialMedia_RequestHandler = new SocialMediaFactoryImplementer_NicheMaster_2_3_1_0.BaseDI.Professional.Story.Social_Media_3.SocialMediaFactoryImplementer_NicheMaster_2_3_1_0(this._storedExtraData);

                        _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6992/storyline/basedi/io/professional/socialmedia";
                        _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7992/storyline/basedi/io/professional/socialmedia";

                        _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationLocalNodeJS = "https://localhost:8992/storyline/basedi/io/professional/socialmedia";
                        _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9992/storyline/basedi/io/professional/socialmedia";

                        _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/socialmedia";

                        return _2_3_stored_Director_Of_SocialMedia_RequestHandler.Action(this._storedClientOrServerInstance, this._stored_CentralizedStorer, this._stored_CentralizedDisturber, this._stored_CentralizedSensor, this._storedClientRequestByObject, this._storedStorylineDetails, this._storedStorylineDetails_Parameters, this._storedRequestName, this._storedClientRequestByName, this._storedClientRequestByNameParameters);
                    }

                    //#endregion

                    //#region 3. Generate Optin Storylines

                    if (this._storedRequestName.toUpperCase().includes("DIRECTOR_OF_LISTBUILDING"))
                    {
                        _3_1_stored_Director_Of_ListBuilding_RequestHandler = new ListBuildingFactoryImplementer_NicheMaster_3_1_1_0.BaseDI.Professional.Story.Listing_Building_1.ListBuildingFactoryImplementer_NicheMaster_3_1_1_0(this._storedExtraData);

                        _3_1_stored_Director_Of_ListBuilding_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6993/storyline/basedi/io/professional/listbuilding";
                        _3_1_stored_Director_Of_ListBuilding_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7993/storyline/basedi/io/professional/listbuilding";

                        _3_1_stored_Director_Of_ListBuilding_RequestHandler.APILocationLocalNodeJS = "https://localhost:8993/storyline/basedi/io/professional/listbuilding";
                        _3_1_stored_Director_Of_ListBuilding_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9993/storyline/basedi/io/professional/listbuilding";

                        _3_1_stored_Director_Of_ListBuilding_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/listbuilding";

                        return _3_1_stored_Director_Of_ListBuilding_RequestHandler.Action(this._storedClientOrServerInstance, this._stored_CentralizedStorer, this._stored_CentralizedDisturber, this._stored_CentralizedSensor, this._storedClientRequestByObject, this._storedStorylineDetails, this._storedStorylineDetails_Parameters, this._storedRequestName, this._storedClientRequestByName, this._storedClientRequestByNameParameters);
                    }

                    //#endregion

                    //#region 4. Sell Low Ticket Offer Storylines

                    if (this._storedRequestName.toUpperCase().includes("DIRECTOR_OF_SUPPLEMENTS"))
                    {
                        _4_1_stored_Director_Of_Supplements_RequestHandler = new SupplementsFactoryImplementer_NicheMaster_4_1_1_0.BaseDI.Professional.Story.Supplements_1.SupplementsFactoryImplementer_NicheMaster_4_1_1_0(this._storedExtraData);

                        _4_1_stored_Director_Of_Supplements_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6994/storyline/basedi/io/professional/supplements";
                        _4_1_stored_Director_Of_Supplements_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7994/storyline/basedi/io/professional/supplements";

                        _4_1_stored_Director_Of_Supplements_RequestHandler.APILocationLocalNodeJS = "https://localhost:8994/storyline/basedi/io/professional/supplements";
                        _4_1_stored_Director_Of_Supplements_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9994/storyline/basedi/io/professional/supplements";

                        _4_1_stored_Director_Of_Supplements_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/supplements";

                        return _4_1_stored_Director_Of_Supplements_RequestHandler.Action(this._storedClientOrServerInstance, this._stored_CentralizedStorer, this._stored_CentralizedDisturber, this._stored_CentralizedSensor, this._storedClientRequestByObject, this._storedStorylineDetails, this._storedStorylineDetails_Parameters, this._storedRequestName, this._storedClientRequestByName, this._storedClientRequestByNameParameters);
                    }

                    //#endregion

                    //#region 5. Sell High Ticket Offer Storylines

                    if (this._storedRequestName.toUpperCase().includes("DIRECTOR_OF_COACHING"))
                    {
                        _5_1_stored_Director_Of_Coaching_RequestHandler = new CoachingFactoryImplementer_NicheMaster_5_1_1_0.BaseDI.Professional.Story.Coaching_1.CoachingFactoryImplementer_NicheMaster_5_1_1_0(this._storedExtraData);

                        _5_1_stored_Director_Of_Coaching_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6995/storyline/basedi/io/professional/coaching";
                        _5_1_stored_Director_Of_Coaching_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7995/storyline/basedi/io/professional/coaching";

                        _5_1_stored_Director_Of_Coaching_RequestHandler.APILocationLocalNodeJS = "https://localhost:8995/storyline/basedi/io/professional/coaching";
                        _5_1_stored_Director_Of_Coaching_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9995/storyline/basedi/io/professional/coaching";

                        _5_1_stored_Director_Of_Coaching_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/coaching";

                        return _5_1_stored_Director_Of_Coaching_RequestHandler.Action(this._storedClientOrServerInstance, this._stored_CentralizedStorer, this._stored_CentralizedDisturber, this._stored_CentralizedSensor, this._storedClientRequestByObject, this._storedStorylineDetails, this._storedStorylineDetails_Parameters, this._storedRequestName, this._storedClientRequestByName, this._storedClientRequestByNameParameters);
                    }

                    if (this._storedRequestName.toUpperCase().includes("DIRECTOR_OF_CONSULTING"))
                    {
                        _5_2_stored_Director_Of_Consulting_RequestHandler = new ConsultingFactoryImplementer_NicheMaster_5_2_1_0.BaseDI.Professional.Story.Consulting_2.ConsultingFactoryImplementer_NicheMaster_5_2_1_0(this._storedExtraData);

                        _5_2_stored_Director_Of_Consulting_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6995/storyline/basedi/io/professional/consulting";
                        _5_2_stored_Director_Of_Consulting_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7995/storyline/basedi/io/professional/consulting";

                        _5_2_stored_Director_Of_Consulting_RequestHandler.APILocationLocalNodeJS = "https://localhost:8995/storyline/basedi/io/professional/consulting";
                        _5_2_stored_Director_Of_Consulting_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9995/storyline/basedi/io/professional/consulting";

                        _5_2_stored_Director_Of_Consulting_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/consulting";

                        return _5_2_stored_Director_Of_Consulting_RequestHandler.Action(this._storedClientOrServerInstance, this._stored_CentralizedStorer, this._stored_CentralizedDisturber, this._stored_CentralizedSensor, this._storedClientRequestByObject, this._storedStorylineDetails, this._storedStorylineDetails_Parameters, this._storedRequestName, this._storedClientRequestByName, this._storedClientRequestByNameParameters);
                    }

                    if (this._storedRequestName.toUpperCase().includes("DIRECTOR_OF_PERSONALTRAINING"))
                    {
                        _5_3_stored_Director_Of_PersonalTraining_RequestHandler = new PersonalTrainingFactoryImplementer_NicheMaster_5_3_1_0.BaseDI.Professional.Story.Personal_Training_3.PersonalTrainingFactoryImplementer_NicheMaster_5_3_1_0(this._storedExtraData);

                        _5_3_stored_Director_Of_PersonalTraining_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6995/storyline/basedi/io/professional/personaltraining";
                        _5_3_stored_Director_Of_PersonalTraining_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7995/storyline/basedi/io/professional/personaltraining";

                        _5_3_stored_Director_Of_PersonalTraining_RequestHandler.APILocationLocalNodeJS = "https://localhost:8995/storyline/basedi/io/professional/personaltraining";
                        _5_3_stored_Director_Of_PersonalTraining_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9995/storyline/basedi/io/professional/personaltraining";

                        _5_3_stored_Director_Of_PersonalTraining_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/personaltraining";

                        return _5_3_stored_Director_Of_PersonalTraining_RequestHandler.Action(this._storedClientOrServerInstance, this._stored_CentralizedStorer, this._stored_CentralizedDisturber, this._stored_CentralizedSensor, this._storedClientRequestByObject, this._storedStorylineDetails, this._storedStorylineDetails_Parameters, this._storedRequestName, this._storedClientRequestByName, this._storedClientRequestByNameParameters);
                    }

                    //#endregion

                    //#region 6. Sell Subscription Offer Storylines

                    if (this._storedRequestName.toUpperCase().includes("DIRECTOR_OF_SOFTWARE"))
                    {
                        _6_1_stored_Director_Of_Software_RequestHandler = new SoftwareFactoryImplementer_NicheMaster_6_1_1_0.BaseDI.Professional.Story.Software_1.SoftwareFactoryImplementer_NicheMaster_6_1_1_0(this._storedExtraData);

                        _6_1_stored_Director_Of_Software_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6996/storyline/basedi/io/professional/software";
                        _6_1_stored_Director_Of_Software_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7996/storyline/basedi/io/professional/software";

                        _6_1_stored_Director_Of_Software_RequestHandler.APILocationLocalNodeJS = "https://localhost:8996/storyline/basedi/io/professional/software";
                        _6_1_stored_Director_Of_Software_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9996/storyline/basedi/io/professional/software";

                        _6_1_stored_Director_Of_Software_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/software";

                        return _6_1_stored_Director_Of_Software_RequestHandler.Action(this._storedClientOrServerInstance, this._stored_CentralizedStorer, this._stored_CentralizedDisturber, this._stored_CentralizedSensor, this._storedClientRequestByObject, this._storedStorylineDetails, this._storedStorylineDetails_Parameters, this._storedRequestName, this._storedClientRequestByName, this._storedClientRequestByNameParameters);
                    }

                    //#endregion

                    //#region 7. Sell Commission Offer Storylines

                    if (this._storedRequestName.toUpperCase().includes("DIRECTOR_OF_AFFILIATEREVENUE"))
                    {
                        _7_1_stored_Director_Of_AffiliateRevenue_RequestHandler = new AffiliateRevenueFactoryImplementer_NicheMaster_7_1_1_0.BaseDI.Professional.Story.Affiliate_Revenue_1.AffiliateRevenueFactoryImplementer_NicheMaster_7_1_1_0(this._storedExtraData);

                        _7_1_stored_Director_Of_AffiliateRevenue_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6997/storyline/basedi/io/professional/affiliaterevenue";
                        _7_1_stored_Director_Of_AffiliateRevenue_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7997/storyline/basedi/io/professional/affiliaterevenue";

                        _7_1_stored_Director_Of_AffiliateRevenue_RequestHandler.APILocationLocalNodeJS = "https://localhost:8997/storyline/basedi/io/professional/affiliaterevenue";
                        _7_1_stored_Director_Of_AffiliateRevenue_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9997/storyline/basedi/io/professional/affiliaterevenue";

                        _7_1_stored_Director_Of_AffiliateRevenue_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/affiliaterevenue";

                        return _7_1_stored_Director_Of_AffiliateRevenue_RequestHandler.Action(this._storedClientOrServerInstance, this._stored_CentralizedStorer, this._stored_CentralizedDisturber, this._stored_CentralizedSensor, this._storedClientRequestByObject, this._storedStorylineDetails, this._storedStorylineDetails_Parameters, this._storedRequestName, this._storedClientRequestByName, this._storedClientRequestByNameParameters);
                    }

                    //#endregion

                    //#region 8. Account Loss or Gain Storylines

                    if (this._storedRequestName.toUpperCase().includes("DIRECTOR_OF_ACCOUNTING"))
                    {
                        _8_1_stored_Director_Of_Accounting_RequestHandler = new AccountingFactoryImplementer_NicheMaster_8_1_1_0.BaseDI.Professional.Story.Accounting_1.AccountingFactoryImplementer_NicheMaster_8_1_1_0(this._storedExtraData);

                        _8_1_stored_Director_Of_Accounting_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6998/storyline/basedi/io/professional/accounting";
                        _8_1_stored_Director_Of_Accounting_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7998/storyline/basedi/io/professional/accounting";

                        _8_1_stored_Director_Of_Accounting_RequestHandler.APILocationLocalNodeJS = "https://localhost:8998/storyline/basedi/io/professional/accounting";
                        _8_1_stored_Director_Of_Accounting_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9998/storyline/basedi/io/professional/accounting";

                        _8_1_stored_Director_Of_Accounting_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/accounting";

                        return _8_1_stored_Director_Of_Accounting_RequestHandler.Action(this._storedClientOrServerInstance, this._stored_CentralizedStorer, this._stored_CentralizedDisturber, this._stored_CentralizedSensor, this._storedClientRequestByObject, this._storedStorylineDetails, this._storedStorylineDetails_Parameters, this._storedRequestName, this._storedClientRequestByName, this._storedClientRequestByNameParameters);
                    }

                    //#endregion

                    //#region 9. Customer Service Storylines

                    if (this._storedRequestName.toUpperCase().includes("DIRECTOR_OF_CUSTOMERSERVICE"))
                    {
                        _9_1_stored_Director_Of_CustomerService_RequestHandler = new CustomerServiceFactoryImplementer_NicheMaster_9_1_1_0.BaseDI.Professional.Story.Customer_Service_1.CustomerServiceFactoryImplementer_NicheMaster_9_1_1_0(this._storedExtraData);

                        _9_1_stored_Director_Of_CustomerService_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6999/storyline/basedi/io/professional/customerservice";
                        _9_1_stored_Director_Of_CustomerService_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7999/storyline/basedi/io/professional/customerservice";

                        _9_1_stored_Director_Of_CustomerService_RequestHandler.APILocationLocalNodeJS = "https://localhost:8999/storyline/basedi/io/professional/customerservice";
                        _9_1_stored_Director_Of_CustomerService_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9999/storyline/basedi/io/professional/customerservice";

                        _9_1_stored_Director_Of_CustomerService_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/customerservice";

                        return _9_1_stored_Director_Of_CustomerService_RequestHandler.Action(this._storedClientOrServerInstance, this._stored_CentralizedStorer, this._stored_CentralizedDisturber, this._stored_CentralizedSensor, this._storedClientRequestByObject, this._storedStorylineDetails, this._storedStorylineDetails_Parameters, this._storedRequestName, this._storedClientRequestByName, this._storedClientRequestByNameParameters);
                    }

                    //#endregion

                    //#region 10. Perform Manual Task Storylines

                    if (this._storedRequestName.toUpperCase().includes("DIRECTOR_OF_PRODUCTIVITY"))
                    {
                        _10_1_stored_Director_Of_Productivity_RequestHandler = new ProductivityFactoryImplementer_NicheMaster_10_1_1_0.BaseDI.Professional.Story.Productivity_1.ProductivityFactoryImplementer_NicheMaster_10_1_1_0(this._storedExtraData);

                        _10_1_stored_Director_Of_Productivity_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6910/storyline/basedi/io/professional/productivity";
                        _10_1_stored_Director_Of_Productivity_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7910/storyline/basedi/io/professional/productivity";

                        _10_1_stored_Director_Of_Productivity_RequestHandler.APILocationLocalNodeJS = "https://localhost:8910/storyline/basedi/io/professional/productivity";
                        _10_1_stored_Director_Of_Productivity_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9910/storyline/basedi/io/professional/productivity";

                        _10_1_stored_Director_Of_Productivity_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/productivity";

                        return _10_1_stored_Director_Of_Productivity_RequestHandler.Action(this._storedClientOrServerInstance, this._stored_CentralizedStorer, this._stored_CentralizedDisturber, this._stored_CentralizedSensor, this._storedClientRequestByObject, this._storedStorylineDetails, this._storedStorylineDetails_Parameters, this._storedRequestName, this._storedClientRequestByName, this._storedClientRequestByNameParameters);
                    }

                    //#endregion

                    //#region 11. Automate Manual Task Storylines

                    if (this._storedRequestName.toUpperCase().includes("DIRECTOR_OF_RISKMANAGEMENT"))
                    {
                        _11_1_stored_Director_Of_RiskManagement_RequestHandler = new RiskManagementFactoryTester_NicheMaster_11_1_1_0.BaseDI.Professional.Story.Risk_Management_1.RiskManagementFactoryTester_NicheMaster_11_1_1_0(this._storedExtraData);

                        _11_1_stored_Director_Of_RiskManagement_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6911/storyline/basedi/io/professional/riskmanagement";
                        _11_1_stored_Director_Of_RiskManagement_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7911/storyline/basedi/io/professional/riskmanagement";

                        _11_1_stored_Director_Of_RiskManagement_RequestHandler.APILocationLocalNodeJS = "https://localhost:8911/storyline/basedi/io/professional/riskmanagement";
                        _11_1_stored_Director_Of_RiskManagement_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9911/storyline/basedi/io/professional/riskmanagement";

                        _11_1_stored_Director_Of_RiskManagement_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/riskmanagement";

                        return _11_1_stored_Director_Of_RiskManagement_RequestHandler.Action(this._storedClientOrServerInstance, this._stored_CentralizedStorer, this._stored_CentralizedDisturber, this._stored_CentralizedSensor, this._storedClientRequestByObject, this._storedStorylineDetails, this._storedStorylineDetails_Parameters, this._storedRequestName, this._storedClientRequestByName, this._storedClientRequestByNameParameters);
                    }

                    //#endregion

                    //#region 12. Other Storylines

                    if (this._storedRequestName.toUpperCase().includes("DIRECTOR_OF_CAREERSEMPLOYMENT"))
                    {
                        _12_1_stored_Director_Of_Careers_RequestHandler = new CareersEmploymentFactoryImplementer_NicheMaster_12_1_1_0.BaseDI.Professional.Story.Careers_Employment_1.CareersEmploymentFactoryImplementer_NicheMaster_12_1_1_0(this._storedExtraData);

                        _12_1_stored_Director_Of_Careers_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6912/storyline/basedi/io/professional/careersemployment";
                        _12_1_stored_Director_Of_Careers_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7912/storyline/basedi/io/professional/careersemployment";

                        _12_1_stored_Director_Of_Careers_RequestHandler.APILocationLocalNodeJS = "https://localhost:8912/storyline/basedi/io/professional/careersemployment";
                        _12_1_stored_Director_Of_Careers_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9912/storyline/basedi/io/professional/careersemployment";

                        _12_1_stored_Director_Of_Careers_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/careersemployment";

                        return _12_1_stored_Director_Of_Careers_RequestHandler.Action(this._storedClientOrServerInstance, this._stored_CentralizedStorer, this._stored_CentralizedDisturber, this._stored_CentralizedSensor, this._storedClientRequestByObject, this._storedStorylineDetails, this._storedStorylineDetails_Parameters, this._storedRequestName, this._storedClientRequestByName, this._storedClientRequestByNameParameters);
                    }

                    if (this._storedRequestName.toUpperCase().includes("DIRECTOR_OF_WEBDEVELOPMENT"))
                    {
                        _12_3_stored_Director_Of_WebDevelopment_RequestHandler = new WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0.BaseDI.Professional.Story.Web_Development_1.WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0(this._storedExtraData);

                        _12_3_stored_Director_Of_WebDevelopment_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6912/storyline/basedi/io/professional/webdevelopment";
                        _12_3_stored_Director_Of_WebDevelopment_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7912/storyline/basedi/io/professional/webdevelopment";

                        _12_3_stored_Director_Of_WebDevelopment_RequestHandler.APILocationLocalNodeJS = "https://localhost:8912/storyline/basedi/io/professional/webdevelopment";
                        _12_3_stored_Director_Of_WebDevelopment_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9912/storyline/basedi/io/professional/webdevelopment";

                        _12_3_stored_Director_Of_WebDevelopment_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/webdevelopment";

                        return _12_3_stored_Director_Of_WebDevelopment_RequestHandler.Action(this._storedClientOrServerInstance, this._stored_CentralizedStorer, this._stored_CentralizedDisturber, this._stored_CentralizedSensor, this._storedClientRequestByObject, this._storedStorylineDetails, this._storedStorylineDetails_Parameters, this._storedRequestName, this._storedClientRequestByName, this._storedClientRequestByNameParameters);
                    }

                    if (this._storedRequestName.toUpperCase().includes("DIRECTOR_OF_CMS"))
                    {
                        _12_4_stored_Director_Of_CMS_RequestHandler = new CMSFactoryImplementer_NicheMaster_12_4_1_0.BaseDI.Professional.Story.CMS_1.CMSFactoryImplementer_NicheMaster_12_4_1_0(this._storedExtraData);

                        _12_4_stored_Director_Of_CMS_RequestHandler.APILocationLocalNodeJS = "https://localhost:6912/storyline/basedi/io/professional/cms";
                        _12_4_stored_Director_Of_CMS_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:7912/storyline/basedi/io/professional/cms";

                        _12_4_stored_Director_Of_CMS_RequestHandler.APILocationLocalDotNetCore = "https://localhost:8912/storyline/basedi/io/professional/cms";
                        _12_4_stored_Director_Of_CMS_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:9912/storyline/basedi/io/professional/cms";

                        _12_4_stored_Director_Of_CMS_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/cms";

                        return _12_4_stored_Director_Of_CMS_RequestHandler.Action(this._storedClientOrServerInstance, this._stored_CentralizedStorer, this._stored_CentralizedDisturber, this._stored_CentralizedSensor, this._storedClientRequestByObject, this._storedStorylineDetails, this._storedStorylineDetails_Parameters, this._storedRequestName, this._storedClientRequestByName, this._storedClientRequestByNameParameters);
                    }

                    if (this._storedRequestName.toUpperCase().includes("DIRECTOR_OF_SECURITY"))
                    {
                        _12_5_stored_Director_Of_Security_RequestHandler = new SecurityFactoryImplementer_NicheMaster_12_5_1_0.BaseDI.Professional.Story.Security_1.SecurityFactoryImplementer_NicheMaster_12_5_1_0(this._storedExtraData);

                        _12_5_stored_Director_Of_Security_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6912/storyline/basedi/io/professional/security";
                        _12_5_stored_Director_Of_Security_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7912/storyline/basedi/io/professional/security";

                        _12_5_stored_Director_Of_Security_RequestHandler.APILocationLocalNodeJS = "https://localhost:8912/storyline/basedi/io/professional/security";
                        _12_5_stored_Director_Of_Security_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9912/storyline/basedi/io/professional/security";

                        _12_5_stored_Director_Of_Security_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/security";

                        return _12_5_stored_Director_Of_Security_RequestHandler.Action(this._storedClientOrServerInstance, this._stored_CentralizedStorer, this._stored_CentralizedDisturber, this._stored_CentralizedSensor, this._storedClientRequestByObject, this._storedStorylineDetails, this._storedStorylineDetails_Parameters, this._storedRequestName, this._storedClientRequestByName, this._storedClientRequestByNameParameters);
                    }

                    //#endregion
                }

                //#endregion
            }
            catch
            {
                //#region EDGE CASE - USE an exception message

                throw new Error("[DISTURBANCE ISSUE] - Bug - ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.cs -> Implement_DesignPattern_Factory_Director_12_2_1_0 -> Action_1_Begin_Process - No DIRECTOR can be found for request " + this._storedRequestName.toUpperCase() + " Please make sure a director is wired in the pipeline in the METHOD [Action_1_Begin_Process]");

                //#endregion
            }

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN empty object

            //#region EDGE CASE - USE blank object

            return new Object();

            //#endregion

            //#endregion

            //#endregion
        }

        //#region NOT APART OF THE REQUEST PIPELINE AT THIS TIME

        public Action_10_End_Process(): object
        {
            return null;
        }

        public Action_2_Validate_Process() : object
        {
            return null;
        }

        public Action_3_Process_StoryAuthor() : object
        {
            return null;
        }

        public Action_4_Process_StoryCharacters() : object
        {
            return null;
        }

        public Action_5_Process_StorySetting() : object
        {
            return null;
        }

        public Action_6_Process_StoryExperiences() : object
        {
            return null;
        }

        public Action_7_Process_StoryResources() : object
        {
            return null;
        }

        public Action_8_Process_CRUD() : object
        {
            return null;
        }

        public Action_9_Verify_Process() : object
        {
            return null;
        }

        //#endregion

        //#endregion
    }

    //#endregion

    //#region RETURN EXPERIENCE HANDLER

    export class Implement_DesignPattern_Factory_Experience_12_2_1_0 extends aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>
    {
        //#region 1. Assign

        //SETTINGS
        private _storedAppSettings: any = null;

        //CLIENT/SERVER
        private _storedClientOrServerInstance: any;

        private _storedClientRequestByObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        private _storedClientRequestByName: string = "";
        private _storedClientRequestByNameParameters: string = "";

        //DATASETS
        private _storedStorylineDetails: Object;
        private _storedStorylineDetails_Parameters: Object;

        //MISC
        private _storedExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //PLUMBING
        private _stored_CentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _stored_CentralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _stored_CentralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        private _storedRequestName: string = "";
        private _storedSystemRequestByName: string;

        //#endregion

        //#region 2. Ready

        constructor(parameterClientOrServerInstance: any, parameterStorylineDetails: Object, parameterStorylineDetails_Parameters: Object, parameterClientRequestByObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0, parameterExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0 = null, parameterSystemRequestByName: string = "", parameterClientRequestByName: string = "", parameterClientRequestByNameParameters: string = "")
         {
             super()

            //#region 1. INPUTS

            //#region MEMORIZE app settings

            this._storedAppSettings = parameterClientOrServerInstance["appSettings"];

            //#endregion

            //#region MEMORIZE clientOrServer instance

            this._storedClientOrServerInstance = parameterClientOrServerInstance;

            //#endregion

            //#region MEMORIZE centralized processes handlers   

            if (this._stored_CentralizedDisturber == null)
            {
                this._stored_CentralizedDisturber = new Implement_DesignPattern_Factory_Disturber_12_2_1_0(parameterClientOrServerInstance, parameterStorylineDetails, parameterStorylineDetails_Parameters, parameterClientRequestByObject, parameterExtraData, parameterSystemRequestByName, parameterClientRequestByName, parameterClientRequestByNameParameters);
            }

            if (this._stored_CentralizedStorer == null)
            {
                this._stored_CentralizedStorer = new Implement_DesignPattern_Factory_Storer_12_2_1_0(parameterClientOrServerInstance, parameterStorylineDetails, parameterStorylineDetails_Parameters, parameterClientRequestByObject, parameterExtraData, parameterSystemRequestByName, parameterClientRequestByName, parameterClientRequestByNameParameters);
            }

            if (this._stored_CentralizedSensor == null)
            {
                this._stored_CentralizedSensor = new Implement_DesignPattern_Factory_Sensor_12_2_1_0(parameterClientOrServerInstance, parameterStorylineDetails, parameterStorylineDetails_Parameters, parameterClientRequestByObject, parameterExtraData, parameterSystemRequestByName, parameterClientRequestByName, parameterClientRequestByNameParameters);
            }

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#region MEMORIZE storyline details

            this._storedStorylineDetails = parameterStorylineDetails;
            this._storedStorylineDetails_Parameters = parameterStorylineDetails_Parameters;

            //#endregion

            //#region MEMORIZE extra data

            this._storedExtraData = parameterExtraData;

            //#endregion

            //#region MEMORIZE request details

            this._storedClientRequestByName = parameterClientRequestByName;
            this._storedClientRequestByNameParameters = parameterClientRequestByNameParameters;
            this._storedClientRequestByObject = parameterClientRequestByObject;

            this._storedRequestName = parameterSystemRequestByName;

            this._storedSystemRequestByName = parameterSystemRequestByName;

            //#endregion

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

        public Action_1_Begin_Process() : object
        {
            //#region 1. INPUTS  

            //#region DEFINE director request handlers

            let _2_3_stored_Director_Of_SocialMedia_RequestHandler: SocialMediaFactoryImplementer_NicheMaster_2_3_1_0.BaseDI.Professional.Story.Social_Media_3.SocialMediaFactoryImplementer_NicheMaster_2_3_1_0 = null;

            let _12_3_stored_Director_Of_WebDevelopment_RequestHandler: WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0.BaseDI.Professional.Story.Web_Development_1.WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0 = null;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region ASSIGN request handler

            try
            {
                //#region IDEAL CASE - USE an experience

                //#region 1. Generate Brand Awareness Storylines

                //#endregion

                //#region 2. Generate Brand Trust Storylines

                if (this._storedRequestName.toUpperCase().includes("EXPERIENCE_THE_MOVEMENT_TOFACEBOOKPAGE_DATATRANSFER"))
                {
                    _2_3_stored_Director_Of_SocialMedia_RequestHandler = new SocialMediaFactoryImplementer_NicheMaster_2_3_1_0.BaseDI.Professional.Story.Social_Media_3.SocialMediaFactoryImplementer_NicheMaster_2_3_1_0(this._storedExtraData);

                    _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:8992/storyline/basedi/io/professional/socialmedia";
                    _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9992/storyline/basedi/io/professional/socialmedia";
                    _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/socialmedia";

                    return _2_3_stored_Director_Of_SocialMedia_RequestHandler.Action(this._storedClientOrServerInstance, this._stored_CentralizedStorer, this._stored_CentralizedDisturber, this._stored_CentralizedSensor, this._storedClientRequestByObject, this._storedStorylineDetails, this._storedStorylineDetails_Parameters, this._storedRequestName, this._storedClientRequestByName, this._storedClientRequestByNameParameters);
                }

                //#endregion

                //#region 3. Generate Optin


                //#endregion

                //#region 4. Sell Low Ticket Offer

                //#endregion

                //#region 5. Sell High Ticket Offer

                //#endregion

                //#region 6. Sell Subscription Offer

                //#endregion

                //#region 7. Sell Commission Offer

                //#endregion

                //#region 8. Account Loss or Gain

                //#endregion

                //#region 9. Customer Service

                //#endregion

                //#region 10. Perform Manual Task

                //#endregion

                //#region 11. Automate Manual Task

                //#endregion

                //#region 12. Other

                if (this._storedRequestName.toUpperCase().includes("EXPERIENCE_THE_HEAR_OFTHEAPISERVER_MESSAGE"))
                {
                    //#region 12. Other

                    _12_3_stored_Director_Of_WebDevelopment_RequestHandler = new WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0.BaseDI.Professional.Story.Web_Development_1.WebDevelopmentFactoryImplementer_NicheMaster_12_3_1_0(this._storedExtraData);

                    _12_3_stored_Director_Of_WebDevelopment_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:8912/storyline/basedi/io/professional/webdevelopment";
                    _12_3_stored_Director_Of_WebDevelopment_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:9912/storyline/basedi/io/professional/webdevelopment";
                    _12_3_stored_Director_Of_WebDevelopment_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/webdevelopment";

                    return _12_3_stored_Director_Of_WebDevelopment_RequestHandler.Action(this._storedClientOrServerInstance, this._stored_CentralizedStorer, this._stored_CentralizedDisturber, this._stored_CentralizedSensor, this._storedClientRequestByObject, this._storedStorylineDetails, this._storedStorylineDetails_Parameters, this._storedRequestName, this._storedClientRequestByName, this._storedClientRequestByNameParameters);

                    //#endregion
                }

                //#endregion

                //#endregion
            }
            catch
            {
                //#region EDGE CASE - USE an exception message

                throw new Error("[DISTURBANCE ISSUE] - Bug - ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.cs -> Implement_DesignPattern_Factory_Experience_12_2_1_0 -> Action_1_Begin_Process - No EXPERIENCE can be found for request " + this._storedRequestName.toUpperCase() + " Please make sure an experience is wired in the pipeline in the METHOD [Action_1_Begin_Process]");

                //#endregion
            }

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN empty object

            //#region EDGE CASE - USE blank object

            return new Object();

            //#endregion

            //#endregion

            //#endregion
        }

        //#region NOT APART OF THE REQUEST PIPELINE AT THIS TIME

        public Action_10_End_Process() : object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        public Action_2_Validate_Process() : object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        public Action_3_Process_StoryAuthor() : object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        public Action_4_Process_StoryCharacters() : object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        public Action_5_Process_StorySetting() : object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        public Action_6_Process_StoryExperiences() : object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        public Action_7_Process_StoryResources() : object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        public Action_8_Process_CRUD() : object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        public Action_9_Verify_Process() : object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        //#endregion

        //#endregion
    }

    //#endregion

    //#region HANDLE CENTRALIZED STORAGE REQUEST

    export class Implement_DesignPattern_Factory_Storer_12_2_1_0 extends aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>
    {
        //#region 1. Assign

        //SETTINGS
        private _storedAppSettings: any = null;

        //CLIENT/SERVER
        private _storedClientOrServerInstance: any;

        private _storedClientRequestByName: string = "";
        private _storedClientRequestByNameParameters: string = "";

        private _storedClientRequestByObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        //DATASETS
        private _storedStorylineDetails: Object;
        private _storedStorylineDetails_Parameters: Object;

        //MISC
        private _storedExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //PLUMBING
        private _storedRequestName: string = "";
        private _storedSystemRequestByName: string = "";

        //#endregion

        //#region 2. Ready

        constructor(parameterClientOrServerInstance: any, parameterStorylineDetails: Object, parameterStorylineDetails_Parameters: Object, parameterClientRequestByObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0, parameterExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0 = null, parameterSystemRequestByName: string = "", parameterClientRequestByName: string = "", parameterClientRequestByNameParameters: string = "")
        {
            super();

            //#region MEMORIZE app settings

            this._storedAppSettings = parameterClientOrServerInstance["appSettings"];

            //#endregion

            //#region MEMORIZE clientOrServer instance

            this._storedClientOrServerInstance = parameterClientOrServerInstance;

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#region MEMORIZE storyline details

            this._storedStorylineDetails = parameterStorylineDetails;
            this._storedStorylineDetails_Parameters = parameterStorylineDetails_Parameters;

            //#endregion

            //#region MEMORIZE extra data

            this._storedExtraData = parameterExtraData;

            //#endregion

            //#region MEMORIZE request details

            this._storedClientRequestByObject = parameterClientRequestByObject;
            this._storedSystemRequestByName = parameterSystemRequestByName;
            this._storedRequestName = parameterSystemRequestByName;
            this._storedClientRequestByName = parameterClientRequestByName;
            this._storedClientRequestByNameParameters = parameterClientRequestByNameParameters;

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

        public Action_1_Begin_Process() : object
        {
            //#region 1. INPUTS

            //#region DEFINE data response

            let storedDataResponse: any = null;

            //#endregion

            //#region OVERRIDE client request names

            this._storedClientRequestByName = "Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0";
            this._storedClientRequestByNameParameters = "Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0-P1_0";

            //#endregion

            //#region OVERRIDE extra data

            if (this.ExtraData != null && this.ExtraData != undefined) {
                this._storedExtraData = this.ExtraData;
            }

            //#endregion



            //#region MEMORIZE developer mode

            let storedDeveloperMode: any = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try
            {
                //#region EXECUTE storage request

                //#region IDEAL CASE - USE storage handler
                
                if (this._storedAppSettings == null) throw new Error(": ***LEAKY PIPE*** FAILED STORING a value. BaseDI TypeScript version will not work without PROCESS.ENV AppSettings. Please make sure that PROCESS.ENV AppSettings has the REQUIRED [APP_SETTING_CONVERSION_MODE] value set. -> ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 -> Implement_DesignPattern_Factory_Storer_12_2_1_0");

                storedDataResponse = new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0.BaseDI.Professional.Director.Programming_1.Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(this._storedExtraData))
                  .SetupStoryline(this._storedClientOrServerInstance, this._storedStorylineDetails, null, this._storedExtraData, "", this._storedClientRequestByName, this._storedClientRequestByNameParameters)
                  .Action();

                //#endregion

                //#endregion
            }
            catch
            {
                //#region HANDLE execution mistakes

                //#region EDGE CASE - USE exception handler

                throw Error;

                //#endregion

                //#endregion
            }

            //#endregion

            //#region 3. OUTPUT

            //#region HANDLE execution response

            //#region IDEAL CASE - USE data object

            return storedDataResponse;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion

        //#region NOT APART OF THE REQUEST PIPELINE AT THIS TIME

        public Action_10_End_Process() : object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        public Action_2_Validate_Process() : object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        public Action_3_Process_StoryAuthor() : object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        public Action_4_Process_StoryCharacters() : object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        public Action_5_Process_StorySetting() : object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        public Action_6_Process_StoryExperiences() : object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        public Action_7_Process_StoryResources() : object 
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        public Action_8_Process_CRUD() : object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        public Action_9_Verify_Process() : object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        //#endregion

        //#endregion
    }

    //#endregion

    //#region HANDLE CENTRALIZED DISTURBANCE REQUEST

    export class Implement_DesignPattern_Factory_Disturber_12_2_1_0 extends aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>
    {
        //#region 1. Assign

        //SETTINGS
        private _storedAppSettings: any = null;

        //CLIENT/SERVER
        private _storedClientOrServerInstance: any;

        private _storedClientRequestByName: string = "";
        private _storedClientRequestByNameParameters: string = "";

        private _storedClientRequestByObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        //DATASETS
        private _storedStorylineDetails: Object;
        private _storedStorylineDetails_Parameters: Object;

        //MISC
        private _storedExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //PLUMBING
        private _storedRequestName: string = "";
        private _storedSystemRequestByName: string = "";

        //#endregion

        //#region 2. Ready

        constructor(parameterClientOrServerInstance: any, parameterStorylineDetails: Object, parameterStorylineDetails_Parameters: Object, parameterClientRequestByObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0, parameterExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0 = null, parameterSystemRequestByName: string = "", parameterClientRequestByName: string = "", parameterClientRequestByNameParameters: string = "")
        {
            super();

            //#region MEMORIZE app settings

            this._storedAppSettings = parameterClientOrServerInstance["appSettings"];

            //#endregion

            //#region MEMORIZE clientOrServer instance

            this._storedClientOrServerInstance = parameterClientOrServerInstance;

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#region MEMORIZE storyline details

            this._storedStorylineDetails = parameterStorylineDetails;
            this._storedStorylineDetails_Parameters = parameterStorylineDetails_Parameters;

            //#endregion

            //#region MEMORIZE extra data

            this._storedExtraData = parameterExtraData;

            //#endregion

            //#region MEMORIZE request details

            this._storedClientRequestByObject = parameterClientRequestByObject;
            this._storedSystemRequestByName = parameterSystemRequestByName;
            this._storedRequestName = parameterSystemRequestByName;
            this._storedClientRequestByName = parameterClientRequestByName;
            this._storedClientRequestByNameParameters = parameterClientRequestByNameParameters;

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

        public Action_1_Begin_Process()
        {
            //#region 1. INPUTS

            //#region DEFINE data response

            let storedDataResponse: Object = null;

            //#endregion

            //#region OVERRIDE client request names

            this._storedClientRequestByName = "Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0";
            this._storedClientRequestByNameParameters = "Director_Of_Programming_Chapter_12_2_Page_4_Request_Disturbances_1_0-P1_0";

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try
            {
                //#region EXECUTE exception request

                //#region IDEAL CASE - USE exception handler

                if (this._storedAppSettings == null) throw new Error(": ***LEAKY PIPE*** FAILED HANDLING a distrubance. BaseDI TypeScript version will not work without PROCESS.ENV AppSettings. Please make sure that PROCESS.ENV AppSettings has the REQUIRED [APP_SETTING_CONVERSION_MODE] value set. -> ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 -> Implement_DesignPattern_Factory_Storer_12_2_1_0");

                storedDataResponse = new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0.BaseDI.Professional.Director.Programming_1.Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0())
                  .SetupStoryline(this._storedClientOrServerInstance, this._storedStorylineDetails, null, this._storedExtraData, "", this._storedClientRequestByName, this._storedClientRequestByNameParameters)
                  .Action();

                //#endregion

                //#endregion
            }
            catch
            {
                //#region HANDLE execution mistakes

                //#region EDGE CASE - USE exception handler

                throw Error;

                //#endregion

                //#endregion
            }

            //#endregion

            //#region 3. OUTPUT

            //#region HANDLE execution response

            //#region IDEAL CASE - USE data object

            return storedDataResponse;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion

        //#region NOT APART OF THE REQUEST PIPELINE AT THIS TIME

        public Action_10_End_Process() : object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        public Action_2_Validate_Process() : object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        public Action_3_Process_StoryAuthor() : object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        public Action_4_Process_StoryCharacters() : object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        public Action_5_Process_StorySetting() : object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        public Action_6_Process_StoryExperiences() : object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        public Action_7_Process_StoryResources() : object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        public Action_8_Process_CRUD() : object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        public Action_9_Verify_Process() : object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        //#endregion

        //#endregion
    }

    //#endregion

    //#region HANDLE CENTRALIZED SENSOR REQUEST

    export class Implement_DesignPattern_Factory_Sensor_12_2_1_0 extends aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>
    {
        //#region 1. Assign

        //SETTINGS
        private _storedAppSettings: any = null;

        //CLIENT/SERVER
        private _storedClientOrServerInstance: any;

        private _storedClientRequestByName: string = "";
        private _storedClientRequestByNameParameters: string = "";

        private _storedClientRequestByObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        //DATASETS
        private _storedStorylineDetails: Object;
        private _storedStorylineDetails_Parameters: Object;

        //MISC
        private _storedExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //PLUMBING
        private _storedRequestName: string = "";
        private _storedSystemRequestByName: string = "";

        //#endregion

        //#region 2. Ready

        constructor(parameterClientOrServerInstance: any, parameterStorylineDetails: Object, parameterStorylineDetails_Parameters: Object, parameterClientRequestByObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0, parameterExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0 = null, parameterSystemRequestByName: string = "", parameterClientRequestByName: string = "", parameterClientRequestByNameParameters: string = "")
        {
            super();

            //#region MEMORIZE app settings

            this._storedAppSettings = parameterClientOrServerInstance["appSettings"];

            //#endregion

            //#region MEMORIZE clientOrServer instance

            this._storedClientOrServerInstance = parameterClientOrServerInstance;

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#region MEMORIZE storyline details

            this._storedStorylineDetails = parameterStorylineDetails;
            this._storedStorylineDetails_Parameters = parameterStorylineDetails_Parameters;

            //#endregion

            //#region MEMORIZE extra data

            this._storedExtraData = parameterExtraData;

            //#endregion

            //#region MEMORIZE request details

            this._storedClientRequestByObject = parameterClientRequestByObject;
            this._storedSystemRequestByName = parameterSystemRequestByName;
            this._storedRequestName = parameterSystemRequestByName;
            this._storedClientRequestByName = parameterClientRequestByName;
            this._storedClientRequestByNameParameters = parameterClientRequestByNameParameters;

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

        public Action_1_Begin_Process()
        {
            //#region 1. INPUTS

            //#region DEFINE data response

            let storedDataResponse: any = null;

            //#endregion

            //#region OVERRIDE client request names

            this._storedClientRequestByName = "Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0";
            this._storedClientRequestByNameParameters = "Director_Of_Programming_Chapter_12_2_Page_5_Request_Sensor_1_0-P1_0";

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try
            {
                //#region EXECUTE exception request

                //#region IDEAL CASE - USE exception handler

                if (this._storedAppSettings == null) throw new Error(": ***LEAKY PIPE*** FAILED REACTING to a situation. BaseDI TypeScript version will not work without PROCESS.ENV AppSettings. Please make sure that PROCESS.ENV AppSettings has the REQUIRED [APP_SETTING_CONVERSION_MODE] value set. -> ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 -> Implement_DesignPattern_Factory_Storer_12_2_1_0");

                storedDataResponse = new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0.BaseDI.Professional.Director.Programming_1.Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0())
                  .SetupStoryline(this._storedClientOrServerInstance, this._storedStorylineDetails, null, this._storedExtraData, "", this._storedClientRequestByName, this._storedClientRequestByNameParameters)
                  .Action();

                //#endregion

                //#endregion
            }
            catch
            {
                //#region HANDLE execution mistakes

                //#region EDGE CASE - USE exception handler

                throw Error;

                //#endregion

                //#endregion
            }

            //#endregion

            //#region 3. OUTPUT

            //#region HANDLE execution response

            //#region IDEAL CASE - USE data object

            return storedDataResponse;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion

        //#region NOT APART OF THE REQUEST PIPELINE AT THIS TIME

        public Action_10_End_Process() : object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        public Action_2_Validate_Process() : object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        public Action_3_Process_StoryAuthor() : object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        public Action_4_Process_StoryCharacters() : object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        public Action_5_Process_StorySetting() : object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        public Action_6_Process_StoryExperiences() : object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        public Action_7_Process_StoryResources() : object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        public Action_8_Process_CRUD() : object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        public Action_9_Verify_Process() : object
        {
            throw new Error("NOT YET IMPLMENTED");
        }

        //#endregion

        //#endregion
    }

    //#endregion

    //#endregion
}