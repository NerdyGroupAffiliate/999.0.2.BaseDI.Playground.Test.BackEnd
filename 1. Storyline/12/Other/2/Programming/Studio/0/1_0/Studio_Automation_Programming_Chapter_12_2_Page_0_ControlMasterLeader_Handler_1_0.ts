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
import * as Studio_AudienceTesting_Advertising_Chapter_1_1_Page_0_ControlNicheMaster_Handler_1_0 from "../../../../../../../../1. Storyline/1/Generate Brand Awareness/1/Advertising/Studio/0/1_0/Studio_AudienceTesting_Advertising_Chapter_1_1_Page_0_ControlNicheMaster_Handler_1_0";

//2. Generate Brand Trust
import * as Studio_AudienceTesting_Blogging_Chapter_2_1_Page_0_ControlNicheMaster_Handler_1_0 from "../../../../../../../../1. Storyline/2/Generate Brand Trust/1/Blogging/Studio/0/1_0/Studio_AudienceTesting_Blogging_Chapter_2_1_Page_0_ControlNicheMaster_Handler_1_0";
import * as Studio_AudienceTesting_Podcasting_Chapter_2_2_Page_0_ControlNicheMaster_Handler_1_0 from "../../../../../../../../1. Storyline/2/Generate Brand Trust/2/Podcasting/Studio/0/1_0/Studio_AudienceTesting_Podcasting_Chapter_2_2_Page_0_ControlNicheMaster_Handler_1_0";
import * as Studio_AudienceTesting_SocialMedia_Chapter_2_3_Page_0_ControlNicheMaster_Handler_1_0 from "../../../../../../../../1. Storyline/2/Generate Brand Trust/3/Social Media/Studio/0/1_0/Studio_AudienceTesting_SocialMedia_Chapter_2_3_Page_0_ControlNicheMaster_Handler_1_0";

//3. Generate Optin
import * as Studio_AudienceTesting_ListBuilding_Chapter_3_1_Page_0_ControlNicheMaster_Handler_1_0 from "../../../../../../../../1. Storyline/3/Generate Optin/1/List Building/Studio/0/1_0/Studio_AudienceTesting_ListBuilding_Chapter_3_1_Page_0_ControlNicheMaster_Handler_1_0";

//4. Sell Low Ticket Offer
import * as Studio_OfferDevelopment_Supplements_Chapter_4_1_Page_0_ControlNicheMaster_Handler_1_0 from "../../../../../../../../1. Storyline/4/Sell Low Ticket Offer/1/Supplements/Studio/0/1_0/Studio_OfferDevelopment_Supplements_Chapter_4_1_Page_0_ControlNicheMaster_Handler_1_0";

//5. Sell High Ticket Offer
import * as Studio_OfferDevelopment_Coaching_Chapter_5_1_Page_0_ControlNicheMaster_Handler_1_0 from "../../../../../../../../1. Storyline/5/Sell High Ticket Offer/1/Coaching/Studio/0/1_0/Studio_OfferDevelopment_Coaching_Chapter_5_1_Page_0_ControlNicheMaster_Handler_1_0";
import * as Studio_OfferDevelopment_Consulting_Chapter_5_2_Page_0_ControlNicheMaster_Handler_1_0 from "../../../../../../../../1. Storyline/5/Sell High Ticket Offer/2/Consulting/Studio/0/1_0/Studio_OfferDevelopment_Consulting_Chapter_5_2_Page_0_ControlNicheMaster_Handler_1_0";
import * as Studio_OfferDevelopment_PersonalTraining_Chapter_5_3_Page_0_ControlNicheMaster_Handler_1_0 from "../../../../../../../../1. Storyline/5/Sell High Ticket Offer/3/Personal Training/Studio/0/1_0/Studio_OfferDevelopment_PersonalTraining_Chapter_5_3_Page_0_ControlNicheMaster_Handler_1_0";

//6. Sell Subscription Offer
import * as Studio_OfferDevelopment_Software_Chapter_6_1_Page_0_ControlNicheMaster_Handler_1_0 from "../../../../../../../../1. Storyline/6/Sell Subscription Offer/1/Software/Studio/0/1_0/Studio_OfferDevelopment_Software_Chapter_6_1_Page_0_ControlNicheMaster_Handler_1_0";

//7. Sell Commission Offer
import * as Studio_OfferDevelopment_AffiliateRevenue_Chapter_7_1_Page_0_ControlNicheMaster_Handler_1_0 from "../../../../../../../../1. Storyline/7/Sell Commission Offer/1/Affiliate Revenue/Studio/0/1_0/Studio_OfferDevelopment_AffiliateRevenue_Chapter_7_1_Page_0_ControlNicheMaster_Handler_1_0";

//8. Account Gain or Loss
import * as Studio_Strategy_Accounting_Chapter_8_1_Page_0_ControlNicheMaster_Handler_1_0 from "../../../../../../../../1. Storyline/8/Account Gain or Loss/1/Accounting/Studio/0/1_0/Studio_Strategy_Accounting_Chapter_8_1_Page_0_ControlNicheMaster_Handler_1_0";

//9. Improve Customer Service
import * as Studio_Strategy_CustomerService_Chapter_9_1_Page_0_ControlNicheMaster_Handler_1_0 from "../../../../../../../../1. Storyline/9/Improve Customer Service/1/Customer Service/Studio/0/1_0/Studio_Strategy_CustomerService_Chapter_9_1_Page_0_ControlNicheMaster_Handler_1_0";

//10. Perform Manual Task
import * as Studio_Strategy_Productivity_Chapter_10_1_Page_0_ControlNicheMaster_Handler from "../../../../../../../../1. Storyline/10/Perform Manual Task/1/Productivity/Studio/0/1_0/Studio_Strategy_Productivity_Chapter_10_1_Page_0_ControlNicheMaster_Handler_1_0";

//11. Automate Manual Task
import * as Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0 from "../../../../../../../../0. Script/Extensions/11/Automate Manual Task/1/Risk Management/Method/0/1_0/Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0";
import * as Studio_Strategy_RiskManagement_Chapter_11_1_Page_0_ControlNicheMaster_Handler from "../../../../../../../../1. Storyline/11/Automate Manual Task/1/Risk Management/Studio/0/1_0/Studio_Strategy_RiskManagement_Chapter_11_1_Page_0_ControlNicheMaster_Handler_1_0";

//12. Other
import * as Studio_Strategy_CareersEmployment_Chapter_12_1_Page_0_ControlNicheMaster_Handler from "../../../../../../../../1. Storyline/12/Other/1/Careers Employment/Studio/0/1_0/Studio_Strategy_CareersEmployment_Chapter_12_1_Page_0_ControlNicheMaster_Handler_1_0";
import * as Studio_Automation_Programming_Chapter_12_2_Page_0_ControlNicheMaster_Handler_1_0 from "../../../../../../../../1. Storyline/12/Other/2/Programming/Studio/0/1_0/Studio_Automation_Programming_Chapter_12_2_Page_0_ControlNicheMaster_Handler_1_0";
import * as Studio_Automation_WebDevelopment_Chapter_12_3_Page_0_ControlNicheMaster_Handler_1_0 from "../../../../../../../../1. Storyline/12/Other/3/Web Development/Studio/0/1_0/Studio_Automation_WebDevelopment_Chapter_12_3_Page_0_ControlNicheMaster_Handler_1_0";
import * as Studio_AudienceTesting_CMS_Chapter_12_4_Page_0_ControlNicheMaster_Handler_1_0 from "../../../../../../../../1. Storyline/12/Other/4/CMS/Studio/0/1_0/Studio_AudienceTesting_CMS_Chapter_12_4_Page_0_ControlNicheMaster_Handler_1_0";
import * as Studio_Automation_Security_Chapter_12_4_Page_0_ControlNicheMaster_Handler_1_0 from "../../../../../../../../1. Storyline/12/Other/5/Security/Studio/0/1_0/Studio_Automation_Security_Chapter_12_4_Page_0_ControlNicheMaster_Handler_1_0";

import * as Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0 from "../../../../../../../../7. Director/12/Other/2/Programming/Director/1/1_0/Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0";

//#endregion

//#region 3rd Party Core


//#endregion

//#endregion

export namespace BaseDI.Professional.Story.Programming_1
{
    export class Director_Of_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler extends aClass_Programming_ScriptMasterLeader_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptMasterLeader_12_2_1_0
    {
        //#region 1. Assign

        //A. Variable Declaration 

        //SETTINGS
        private _storedProcessRequestSettings: any = null;

        //CLIENT/SERVER
        private _storedClientRequestByObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0 = null;

        //MISC
        private _storedProcessRequestExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0 = null;

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

            this._storedProcessRequestExtraData = new ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0();
            this._storedProcessRequestExtraData.MasterLeader = this;

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

        public SetupStoryline(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) : aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0
        {
            //#region 1. INPUTS

            //#region VALIDATE input parameters

            const ValidateInputs = (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) => {
                //#region 1. INPUTS

                //#region DEFINE parameter inputs

                let storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

                //#endregion

                //#region DEFINE process checkpoint

                let storedProcessRequestMistakeMade: boolean = false;

                //#endregion

                //#region DEFINE stored message

                let storedOutputResponseMessage: string = "";

                //#endregion

                //#region MEMORIZE control client server

                let storedProcessRequestTracker: any = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

                //#endregion

                //#region MEMORIZE app settings

                let storedProcessRequestSettings: any = storedProcessRequestTracker["storedProcessRequestSettings"];

                //#endregion

                //#region MEMORIZE developer mode

                let storedProcessRequestDeveloperMode: boolean = storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE ? storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE : false;

                let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

                //REQUIRED
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONFIGURING request pipeline");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Director_Of_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "SetupStoryline.ValidateInputs()");

                //#endregion

                //#endregion

                //#region 2. PROCESS

                //#region EXECUTE validation process

                //#region IDEAL CASE - USE valid information

                if (parameterInputs != null || parameterInputs != undefined || parameterInputs.Parameters != null && parameterInputs.Parameters != undefined) {
                    if (process.env.APP_ENV == null || process.env.APP_ENV == undefined) {
                        storedOutputResponseMessage += "***process.env.APP_ENV*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestTracker")) {
                        storedOutputResponseMessage += "***parameterProcessRequestTracker*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }
                    else {
                        if (parameterInputs.Parameters.getValue("parameterProcessRequestTracker")["storedProcessRequestSettings"] == null || parameterInputs.Parameters.getValue("parameterProcessRequestTracker")["storedProcessRequestSettings"] == undefined) {
                            storedOutputResponseMessage += "***parameterProcessRequestTracker*** must contain a key of ***storedProcessRequestSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.setValue(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})"
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestSettings")) {
                        storedOutputResponseMessage += "***parameterProcessRequestSettings*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestDataStorylineDetails")) {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestDataStorylineDetails_Parameters")) {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails_Parameters*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterInputRequestName")) {
                        storedOutputResponseMessage += "***parameterInputRequestName*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterInputRequestNameDataCacheKey")) {
                        storedOutputResponseMessage += "***parameterInputRequestNameDataCacheKey*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (storedProcessRequestMistakeMade) {
                        //#region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode) {
                            storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                            Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                        }

                        //#endregion

                        //#region EDGE CASE - USE exception handler

                        throw new Error("PARSING parameter values failed");

                        //#endregion
                    }
                }
                else {
                    //#region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode) {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    //#endregion

                    //#region EDGE CASE - USE exception handler

                    throw new Error("PARSING parameter values failed");

                    //#endregion
                }

                //#endregion

                //#endregion

                //#endregion

                //#region 3. OUTPUT

                //#region RETURN validation passed

                //#region IDEAL CASE - USE passed indicator

                return true;

                //#endregion

                //#endregion

                //#endregion
            }

            //BEGIN valdation process
            ValidateInputs(parameterInputs);

            //#endregion

            //#region DEFINE request handler

            let stored_ReferenceTo_RequestHandler: any = null;

            //#endregion

            //#region DEFINE exception handler

            let stored_ExceptionDetails: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //#endregion

            //#region MEMORIZE control client server

            let storedProcessRequestTracker: Object = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            parameterInputs.Parameters.setValue("parameterClientRequestByObject", Object.assign(this._storedClientRequestByObject, Object));

            //#endregion

            //#region MEMORIZE app settings

            this._storedProcessRequestSettings = storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE action name

            let storedInputRequestActionName: string = storedProcessRequestTracker["storedInputRequestActionName"];

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            if (storedProcessRequestTracker["storedProcessRequestStepNumber"] == null)
                storedProcessRequestTracker["storedProcessRequestStepNumber"] = 0;

            let storedDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (parameterInputs.Parameters.getValue("parameterExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") ? parameterInputs.Parameters.getValue("parameterExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") : null);

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "BEGIN processing request");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Director_Of_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "SetupStoryline"); 

            //OPTIONAL
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALBeginOfProcess", true);

            if (storedDeveloperLoggingStartUpProcessInputs != null && storedDeveloperLoggingStartUpProcessInputs != undefined)
            {
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALMasterLeaderIsSecondStep", storedDeveloperLoggingStartUpProcessInputs.Parameters.getValue("parameterOutputResponseOPTIONALMasterLeaderIsSecondStep"));

                if (storedDeveloperLoggingStartUpProcessInputs.Parameters.getValue("parameterOutputResponseOPTIONALMasterLeaderIsSecondStep") == true) {
                    storedProcessRequestDeveloperLoggingInputs.Parameters.remove("parameterOutputResponseOPTIONALBeginOfProcess");
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALBeginOfProcess", false);
                }
            }

            //#endregion

            //#region MEMORIZE extra data

            if (parameterInputs.Parameters.getValue("parameterExtraData") != null)
                this._storedProcessRequestExtraData = parameterInputs.Parameters.getValue("parameterExtraData");

            //#endregion

            //#region MEMORIZE request details

            let storedClientRequestByName: string = parameterInputs.Parameters.getValue("parameterInputRequestName"); 
            let storedClientRequestByNameParameters: string = parameterInputs.Parameters.getValue("parameterInputRequestNameDataCacheKey"); 

            let storedSystemRequestByName: string = parameterInputs.Parameters.getValue("parameterSystemRequestByName") ? parameterInputs.Parameters.getValue("parameterSystemRequestByName") : ""; 

            //#endregion

            //#region MEMORIZE request resolver

            let stored_DirectorOrExperienceRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0

            let stored_ResolvedRequestHandler = new Use_DesignPattern_Builder_Chapter_12_2_1_0(parameterInputs); //parameterProcessRequestTracker, parameterProcessRequestDataStorylineDetails, parameterProcessRequestDataStorylineDetails_Parameters, this._storedClientRequestByObject, this._storedProcessRequestExtraData, parameterSystemRequestByName, parameterInputRequestName, parameterInputRequestNameDataCacheKey

            //#endregion

            //#region MEMORIZE storyline details

            let storedProcessRequestDataStorylineDetails: any = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            let storedProcessRequestDataStorylineDetails_Parameters: any = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails_Parameters");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try
            {
                //#region FIND request handler

                //#region EDGE CASE - USE developer logger

                if (storedProcessRequestDeveloperMode && storedProcessRequestTracker["storedProcessRequestStepNumber"] == 0) {
                    storedProcessRequestTracker["storedProcessRequestStepNumber"] += 1;

                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Logging"); //Values = Logging or Mistake
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                    Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                }

                //#endregion

                //#region IDEAL CASE - USE an experience OR a director request handler

                //NOTE: 1. The Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0 is called "TWICE" per request.
                   //A: The first time is to "MERGE" the data objects of "StorylineDetails" and "StorylineDetails_Parameters" into ONE SINGLE data object.
                   //B: The second time is to call the "ACTION" method off the "ENTRYPOINT" property from inside the "IF" statement below.
                stored_ReferenceTo_RequestHandler = stored_ResolvedRequestHandler.Action();

                if (storedSystemRequestByName != "")
                {                    
                    stored_DirectorOrExperienceRequestHandler = stored_ReferenceTo_RequestHandler;

                    stored_DirectorOrExperienceRequestHandler.RequestID = storedSystemRequestByName;
                    stored_DirectorOrExperienceRequestHandler.ClientOrServerInstance = storedProcessRequestTracker;

                    this._storedClientRequestByObject.ClientOrServerInstance = storedProcessRequestTracker;

                    this._storedClientRequestByObject.DirectorOrExperienceRequestHandler = stored_DirectorOrExperienceRequestHandler;
                    this._storedClientRequestByObject.ExtraData = this._storedProcessRequestExtraData;

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

                stored_ExceptionDetails.Parameters.setValue("storedClientRequestByName", storedClientRequestByName);
                stored_ExceptionDetails.Parameters.setValue("storedClientRequestByNameParameters", storedClientRequestByNameParameters);

                stored_ExceptionDetails.Parameters.setValue("storedProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);

                stored_ExceptionDetails.Parameters.setValue("storedProcessRequestTracker", storedProcessRequestTracker);
                stored_ExceptionDetails.Parameters.setValue("storedProcessRequestExtraData", this._storedProcessRequestExtraData);
                stored_ExceptionDetails.Parameters.setValue("storedProcessRequestMistakes", mistake);

                throw Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Control_DeveloperException_1_0(stored_ExceptionDetails);

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
        private _storedProcessRequestSettings: any = null;

        //CLIENT/SERVER
        private _storedProcessRequestTracker: any;

        private _storedClientRequestByName: string;
        private _storedClientRequestByNameParameters: string;

        private _storedClientRequestByObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        //DATASETS
        private _storedProcessRequestDataStorylineDetails: any;
        private _storedProcessRequestDataStorylineDetails_Parameters: any;

        //MISC
        private _storedProcessRequestExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //PLUMBING
        private _storedParameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = null;

        private _storedRequestName: string = "";
        private _storedSystemRequestByName: string;
  
        //#endregion

        //#region 2. Ready

        //parameterProcessRequestTracker: any, parameterProcessRequestDataStorylineDetails: Object, parameterProcessRequestDataStorylineDetails_Parameters: Object, parameterClientRequestByObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0, parameterExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0 = null, parameterSystemRequestByName: string = "", parameterInputRequestName: string = "", parameterInputRequestNameDataCacheKey: string = ""
        constructor(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0)
        {
            //#region 1. INPUTS

            //#region MEMORIZE control client server

            this._storedProcessRequestTracker = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE app settings

            this._storedProcessRequestSettings = this._storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#region MEMORIZE extra data

            this._storedProcessRequestExtraData = parameterInputs.Parameters.getValue("parameterExtraData");

            //#endregion

            //#region MEMORIZE request details

            this._storedClientRequestByName = parameterInputs.Parameters.getValue("parameterInputRequestName");
            this._storedClientRequestByNameParameters = parameterInputs.Parameters.getValue("parameterInputRequestNameDataCacheKey");

            this._storedClientRequestByObject = parameterInputs.Parameters.getValue("parameterClientRequestByObject");

            this._storedSystemRequestByName = parameterInputs.Parameters.getValue("parameterSystemRequestByName") ? parameterInputs.Parameters.getValue("parameterSystemRequestByName") : "";

            this._storedParameterInputs = parameterInputs;

            //#endregion

            //#region MEMORIZE storyline details

            this._storedProcessRequestDataStorylineDetails = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            this._storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails_Parameters");

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

            let storedInputRequestActionName: string = this._storedProcessRequestTracker["storedInputRequestActionName"] as string;

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#region MEMORIZE execution strategy

            let storedExeuctionStragety = new Implement_DesignPattern_Builder_Chapter_12_2_1_0(this._storedParameterInputs);

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
        private _storedProcessRequestSettings: any = null;

        //CLIENT/SERVER
        private _storedProcessRequestTracker: any;

        private _storedClientRequestByName: string = "";
        private _storedClientRequestByNameParameters: string = "";

        private _storedClientRequestByObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        //DATASETS
        private _storedProcessRequestDataStorylineDetails: Object;
        private _storedProcessRequestDataStorylineDetails_Parameters: Object;

        //MISC
        private _storedProcessRequestExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //PLUMBING
        private _storedParameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = null;

        private _storedRequestName: string = "";

        private _storedSystemRequestByName: string;

        //#endregion

        //#region 2. Ready
        
        constructor(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) //parameterProcessRequestTracker: any, parameterProcessRequestDataStorylineDetails: Object, parameterProcessRequestDataStorylineDetails_Parameters: Object, parameterClientRequestByObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0, parameterExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0 = null, parameterSystemRequestByName: string = "", parameterInputRequestName: string = "", parameterInputRequestNameDataCacheKey: string = ""
        {
            super();

            //#region 1. INPUTS

            //#region MEMORIZE control client server

            this._storedProcessRequestTracker = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE app settings

            this._storedProcessRequestSettings = this._storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#region MEMORIZE extra data

            this._storedProcessRequestExtraData = parameterInputs.Parameters.getValue("parameterExtraData");

            //#endregion

            //#region MEMORIZE request details

            this._storedClientRequestByName = parameterInputs.Parameters.getValue("parameterInputRequestName");
            this._storedClientRequestByNameParameters = parameterInputs.Parameters.getValue("parameterInputRequestNameDataCacheKey");

            this._storedClientRequestByObject = parameterInputs.Parameters.getValue("parameterClientRequestByObject");

            this._storedRequestName = parameterInputs.Parameters.getValue("parameterSystemRequestByName");
            this._storedSystemRequestByName = parameterInputs.Parameters.getValue("parameterSystemRequestByName");

            this._storedParameterInputs = parameterInputs;

            //#endregion

            //#region MEMORIZE storyline details

            this._storedProcessRequestDataStorylineDetails = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            this._storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails_Parameters");

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

            let storedExperienceRequestHandler = new Implement_DesignPattern_Factory_Experience_12_2_1_0(this._storedParameterInputs);

            //#endregion

            //#region MEMORIZE director request handler

            let _stored_DirectorRequestHandler = new Implement_DesignPattern_Factory_Director_12_2_1_0(this._storedParameterInputs);

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

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

            throw new Error("[DISTURBANCE ISSUE] - Bug - Director_Of_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler.cs -> Implement_DesignPattern_Builder_Chapter_12_2_1_0 -> Action_10_End_Process - BaseDI will not work without a request handler. Please make sure that clientRequestByName is not blank, null or begins with ***DIRECTOR_OF_*** or ***EXPERIENCE_THE_***!");

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
        private _storedProcessRequestSettings: any = null;

        //CLIENT/SERVER
        private _storedProcessRequestTracker: any;

        private _storedClientRequestByObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        private _storedClientRequestByName: string = "";
        private _storedClientRequestByNameParameters: string = "";

        //DATASETS
        private _storedProcessRequestDataStorylineDetails: Object;
        private _storedProcessRequestDataStorylineDetails_Parameters: Object;

        //MISC
        private _storedProcessRequestExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //PLUMBING
        private _storedProcessRequestCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _stored_CentralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _stored_CentralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        private _storedParameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = null;

        private _storedRequestName: string = "";
        private _storedSystemRequestByName: string;

        //#endregion

        //#region 2. Ready
        
        constructor(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) //parameterProcessRequestTracker: any, parameterProcessRequestDataStorylineDetails: Object, parameterProcessRequestDataStorylineDetails_Parameters: Object, parameterClientRequestByObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0, parameterExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0 = null, parameterSystemRequestByName: string = "", parameterInputRequestName: string = "", parameterInputRequestNameDataCacheKey: string = ""
        {
            super()

            //#region 1. INPUTS

            //#region MEMORIZE control client server

            this._storedProcessRequestTracker = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE app settings

            this._storedProcessRequestSettings = this._storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE centralized processes handlers

            if (this._stored_CentralizedDisturber == null) {
                this._stored_CentralizedDisturber = new Implement_DesignPattern_Factory_Disturber_12_2_1_0(parameterInputs);

                parameterInputs.Parameters.setValue("parameterProcessRequestCentralizedDisturber", Object.assign(this._stored_CentralizedDisturber, Object));
            }

            if (this._stored_CentralizedSensor == null) {
                this._stored_CentralizedSensor = new Implement_DesignPattern_Factory_Sensor_12_2_1_0(parameterInputs);

                parameterInputs.Parameters.setValue("parameterProcessRequestCentralizedSensor", Object.assign(this._stored_CentralizedSensor, Object));
            }

            if (this._storedProcessRequestCentralizedStorer == null) {
                this._storedProcessRequestCentralizedStorer = new Implement_DesignPattern_Factory_Storer_12_2_1_0(parameterInputs);

                parameterInputs.Parameters.setValue("parameterProcessRequestCentralizedStorer", Object.assign(this._storedProcessRequestCentralizedStorer, Object));
            }

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#region MEMORIZE storyline details

            this._storedProcessRequestDataStorylineDetails = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            this._storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails_Parameters");

            //#endregion

            //#region MEMORIZE extra data

            this._storedProcessRequestExtraData = parameterInputs.Parameters.getValue("parameterExtraData");

            //#endregion

            //#region MEMORIZE request details

            this._storedClientRequestByName = parameterInputs.Parameters.getValue("parameterInputRequestName");
            this._storedClientRequestByNameParameters = parameterInputs.Parameters.getValue("parameterInputRequestNameDataCacheKey");
            this._storedClientRequestByObject = parameterInputs.Parameters.getValue("parameterClientRequestByObject");

            this._storedRequestName = parameterInputs.Parameters.getValue("parameterSystemRequestByName");

            this._storedSystemRequestByName = parameterInputs.Parameters.getValue("parameterSystemRequestByName");

            this._storedParameterInputs = parameterInputs;

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

            let _1_1_stored_Director_Of_Advertising_RequestHandler: Studio_AudienceTesting_Advertising_Chapter_1_1_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Advertising_1.Studio_AudienceTesting_Advertising_Chapter_1_1_Page_0_ControlNicheMaster_Handler_1_0 = null;
            
            let _2_1_stored_Director_Of_Blogging_RequestHandler: Studio_AudienceTesting_Blogging_Chapter_2_1_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Blogging_1.Studio_AudienceTesting_Blogging_Chapter_2_1_Page_0_ControlNicheMaster_Handler_1_0 = null;
            let _2_2_stored_Director_Of_Podcasting_RequestHandler: Studio_AudienceTesting_Podcasting_Chapter_2_2_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Podcasting_2.Studio_AudienceTesting_Podcasting_Chapter_2_2_Page_0_ControlNicheMaster_Handler_1_0 = null;
            let _2_3_stored_Director_Of_SocialMedia_RequestHandler: Studio_AudienceTesting_SocialMedia_Chapter_2_3_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Social_Media_3.Studio_AudienceTesting_SocialMedia_Chapter_2_3_Page_0_ControlNicheMaster_Handler_1_0 = null;

            let _3_1_stored_Director_Of_ListBuilding_RequestHandler: Studio_AudienceTesting_ListBuilding_Chapter_3_1_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Listing_Building_1.Studio_AudienceTesting_ListBuilding_Chapter_3_1_Page_0_ControlNicheMaster_Handler_1_0 = null;

            let _4_1_stored_Director_Of_Supplements_RequestHandler: Studio_OfferDevelopment_Supplements_Chapter_4_1_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Supplements_1.Studio_OfferDevelopment_Supplements_Chapter_4_1_Page_0_ControlNicheMaster_Handler_1_0 = null;

            let _5_1_stored_Director_Of_Coaching_RequestHandler: Studio_OfferDevelopment_Coaching_Chapter_5_1_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Coaching_1.Studio_OfferDevelopment_Coaching_Chapter_5_1_Page_0_ControlNicheMaster_Handler_1_0 = null;
            let _5_2_stored_Director_Of_Consulting_RequestHandler: Studio_OfferDevelopment_Consulting_Chapter_5_2_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Consulting_2.Studio_OfferDevelopment_Consulting_Chapter_5_2_Page_0_ControlNicheMaster_Handler_1_0 = null;
            let _5_3_stored_Director_Of_PersonalTraining_RequestHandler: Studio_OfferDevelopment_PersonalTraining_Chapter_5_3_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Personal_Training_3.Studio_OfferDevelopment_PersonalTraining_Chapter_5_3_Page_0_ControlNicheMaster_Handler_1_0 = null;

            let _6_1_stored_Director_Of_Software_RequestHandler: Studio_OfferDevelopment_Software_Chapter_6_1_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Software_1.Studio_OfferDevelopment_Software_Chapter_6_1_Page_0_ControlNicheMaster_Handler_1_0 = null;

            let _7_1_stored_Director_Of_AffiliateRevenue_RequestHandler: Studio_OfferDevelopment_AffiliateRevenue_Chapter_7_1_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Affiliate_Revenue_1.Studio_OfferDevelopment_AffiliateRevenue_Chapter_7_1_Page_0_ControlNicheMaster_Handler_1_0 = null;

            let _8_1_stored_Director_Of_Accounting_RequestHandler: Studio_Strategy_Accounting_Chapter_8_1_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Accounting_1.Studio_Strategy_Accounting_Chapter_8_1_Page_0_ControlNicheMaster_Handler_1_0 = null;

            let _9_1_stored_Director_Of_CustomerService_RequestHandler: Studio_Strategy_CustomerService_Chapter_9_1_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Customer_Service_1.Studio_Strategy_CustomerService_Chapter_9_1_Page_0_ControlNicheMaster_Handler_1_0 = null;

            let _10_1_stored_Director_Of_Productivity_RequestHandler: Studio_Strategy_Productivity_Chapter_10_1_Page_0_ControlNicheMaster_Handler.BaseDI.Professional.Story.Productivity_1.Studio_Strategy_Productivity_Chapter_10_1_Page_0_ControlNicheMaster_Handler = null;

            let _11_1_stored_Director_Of_RiskManagement_RequestHandler: Studio_Strategy_RiskManagement_Chapter_11_1_Page_0_ControlNicheMaster_Handler.BaseDI.Professional.Story.Risk_Management_1.Studio_Strategy_RiskManagement_Chapter_11_1_Page_0_ControlNicheMaster_Handler = null;
            
            let _12_1_stored_Director_Of_Careers_RequestHandler: Studio_Strategy_CareersEmployment_Chapter_12_1_Page_0_ControlNicheMaster_Handler.BaseDI.Professional.Story.Careers_Employment_1.Studio_Strategy_CareersEmployment_Chapter_12_1_Page_0_ControlNicheMaster_Handler = null;
            let _12_2_stored_Director_Of_Programming_RequestHandler: Studio_Automation_Programming_Chapter_12_2_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Programming_1.Studio_Automation_Programming_Chapter_12_2_Page_0_ControlNicheMaster_Handler_1_0 = null;
            let _12_3_stored_Director_Of_WebDevelopment_RequestHandler: Studio_Automation_WebDevelopment_Chapter_12_3_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Web_Development_1.Studio_Automation_WebDevelopment_Chapter_12_3_Page_0_ControlNicheMaster_Handler_1_0 = null;
            let _12_4_stored_Director_Of_CMS_RequestHandler: Studio_AudienceTesting_CMS_Chapter_12_4_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.CMS_1.Studio_AudienceTesting_CMS_Chapter_12_4_Page_0_ControlNicheMaster_Handler_1_0 = null;
            let _12_5_stored_Director_Of_Security_RequestHandler: Studio_Automation_Security_Chapter_12_4_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Security_1.Studio_Automation_Security_Chapter_12_4_Page_0_ControlNicheMaster_Handler_1_0 = null;

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

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

                    _12_2_stored_Director_Of_Programming_RequestHandler = new Studio_Automation_Programming_Chapter_12_2_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Programming_1.Studio_Automation_Programming_Chapter_12_2_Page_0_ControlNicheMaster_Handler_1_0(this._storedParameterInputs);
                    
                    _12_2_stored_Director_Of_Programming_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6912/storyline/basedi/io/professional/programming";
                    _12_2_stored_Director_Of_Programming_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7912/storyline/basedi/io/professional/programming";

                    _12_2_stored_Director_Of_Programming_RequestHandler.APILocationLocalNodeJS = "https://localhost:8912/storyline/basedi/io/professional/programming";
                    _12_2_stored_Director_Of_Programming_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9912/storyline/basedi/io/professional/programming";

                    _12_2_stored_Director_Of_Programming_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/programming";

                    return _12_2_stored_Director_Of_Programming_RequestHandler.Action(this._storedParameterInputs);

                    //#endregion
                }
                else
                {
                    //This means our director of programming wanted us to play this storyline.
                    //#region 1. Generate Brand Awareness Storylines

                    if (this._storedRequestName.toUpperCase().includes("DIRECTOR_OF_ADVERTISING"))
                    {
                        _1_1_stored_Director_Of_Advertising_RequestHandler = new Studio_AudienceTesting_Advertising_Chapter_1_1_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Advertising_1.Studio_AudienceTesting_Advertising_Chapter_1_1_Page_0_ControlNicheMaster_Handler_1_0(this._storedParameterInputs);

                        _1_1_stored_Director_Of_Advertising_RequestHandler.APILocationLocalDotNetCore = "http://localhost:6991/storyline/basedi/io/professional/advertising";
                        _1_1_stored_Director_Of_Advertising_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7991/storyline/basedi/io/professional/advertising";

                        _1_1_stored_Director_Of_Advertising_RequestHandler.APILocationLocalNodeJS = "https://localhost:8991/storyline/basedi/io/professional/advertising";
                        _1_1_stored_Director_Of_Advertising_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9991/storyline/basedi/io/professional/advertising";

                        _1_1_stored_Director_Of_Advertising_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/advertising";

                        return _1_1_stored_Director_Of_Advertising_RequestHandler.Action(this._storedParameterInputs);
                    }

                    //#endregion

                    //#region 2. Generate Brand Trust Storylines

                    if (this._storedRequestName.toUpperCase().includes("DIRECTOR_OF_BLOGGING"))
                    {
                        _2_1_stored_Director_Of_Blogging_RequestHandler = new Studio_AudienceTesting_Blogging_Chapter_2_1_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Blogging_1.Studio_AudienceTesting_Blogging_Chapter_2_1_Page_0_ControlNicheMaster_Handler_1_0(this._storedParameterInputs);
                        
                        _2_1_stored_Director_Of_Blogging_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6992/storyline/basedi/io/professional/blogging";
                        _2_1_stored_Director_Of_Blogging_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7992/storyline/basedi/io/professional/blogging";

                        _2_1_stored_Director_Of_Blogging_RequestHandler.APILocationLocalNodeJS = "https://localhost:8992/storyline/basedi/io/professional/blogging";
                        _2_1_stored_Director_Of_Blogging_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9992/storyline/basedi/io/professional/blogging";

                        _2_1_stored_Director_Of_Blogging_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/blogging";

                        return _2_1_stored_Director_Of_Blogging_RequestHandler.Action(this._storedParameterInputs);
                    }

                    if (this._storedRequestName.toUpperCase().includes("DIRECTOR_OF_PODCASTING"))
                    {
                        _2_2_stored_Director_Of_Podcasting_RequestHandler = new Studio_AudienceTesting_Podcasting_Chapter_2_2_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Podcasting_2.Studio_AudienceTesting_Podcasting_Chapter_2_2_Page_0_ControlNicheMaster_Handler_1_0(this._storedParameterInputs);

                        _2_2_stored_Director_Of_Podcasting_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6992/storyline/basedi/io/professional/podcasting";
                        _2_2_stored_Director_Of_Podcasting_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7992/storyline/basedi/io/professional/podcasting";

                        _2_2_stored_Director_Of_Podcasting_RequestHandler.APILocationLocalNodeJS = "https://localhost:8992/storyline/basedi/io/professional/podcasting";
                        _2_2_stored_Director_Of_Podcasting_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9992/storyline/basedi/io/professional/podcasting";

                        _2_2_stored_Director_Of_Podcasting_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/podcasting";

                        return _2_2_stored_Director_Of_Podcasting_RequestHandler.Action(this._storedParameterInputs);
                    }

                    if (this._storedRequestName.toUpperCase().includes("DIRECTOR_OF_SOCIALMEDIA"))
                    {
                        _2_3_stored_Director_Of_SocialMedia_RequestHandler = new Studio_AudienceTesting_SocialMedia_Chapter_2_3_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Social_Media_3.Studio_AudienceTesting_SocialMedia_Chapter_2_3_Page_0_ControlNicheMaster_Handler_1_0(this._storedParameterInputs);

                        _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6992/storyline/basedi/io/professional/socialmedia";
                        _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7992/storyline/basedi/io/professional/socialmedia";

                        _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationLocalNodeJS = "https://localhost:8992/storyline/basedi/io/professional/socialmedia";
                        _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9992/storyline/basedi/io/professional/socialmedia";

                        _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/socialmedia";

                        return _2_3_stored_Director_Of_SocialMedia_RequestHandler.Action(this._storedParameterInputs);
                    }

                    //#endregion

                    //#region 3. Generate Optin Storylines

                    if (this._storedRequestName.toUpperCase().includes("DIRECTOR_OF_LISTBUILDING"))
                    {
                        _3_1_stored_Director_Of_ListBuilding_RequestHandler = new Studio_AudienceTesting_ListBuilding_Chapter_3_1_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Listing_Building_1.Studio_AudienceTesting_ListBuilding_Chapter_3_1_Page_0_ControlNicheMaster_Handler_1_0(this._storedParameterInputs);

                        _3_1_stored_Director_Of_ListBuilding_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6993/storyline/basedi/io/professional/listbuilding";
                        _3_1_stored_Director_Of_ListBuilding_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7993/storyline/basedi/io/professional/listbuilding";

                        _3_1_stored_Director_Of_ListBuilding_RequestHandler.APILocationLocalNodeJS = "https://localhost:8993/storyline/basedi/io/professional/listbuilding";
                        _3_1_stored_Director_Of_ListBuilding_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9993/storyline/basedi/io/professional/listbuilding";

                        _3_1_stored_Director_Of_ListBuilding_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/listbuilding";

                        return _3_1_stored_Director_Of_ListBuilding_RequestHandler.Action(this._storedParameterInputs);
                    }

                    //#endregion

                    //#region 4. Sell Low Ticket Offer Storylines

                    if (this._storedRequestName.toUpperCase().includes("DIRECTOR_OF_SUPPLEMENTS"))
                    {
                        _4_1_stored_Director_Of_Supplements_RequestHandler = new Studio_OfferDevelopment_Supplements_Chapter_4_1_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Supplements_1.Studio_OfferDevelopment_Supplements_Chapter_4_1_Page_0_ControlNicheMaster_Handler_1_0(this._storedParameterInputs);

                        _4_1_stored_Director_Of_Supplements_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6994/storyline/basedi/io/professional/supplements";
                        _4_1_stored_Director_Of_Supplements_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7994/storyline/basedi/io/professional/supplements";

                        _4_1_stored_Director_Of_Supplements_RequestHandler.APILocationLocalNodeJS = "https://localhost:8994/storyline/basedi/io/professional/supplements";
                        _4_1_stored_Director_Of_Supplements_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9994/storyline/basedi/io/professional/supplements";

                        _4_1_stored_Director_Of_Supplements_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/supplements";

                        return _4_1_stored_Director_Of_Supplements_RequestHandler.Action(this._storedParameterInputs);
                    }

                    //#endregion

                    //#region 5. Sell High Ticket Offer Storylines

                    if (this._storedRequestName.toUpperCase().includes("DIRECTOR_OF_COACHING"))
                    {
                        _5_1_stored_Director_Of_Coaching_RequestHandler = new Studio_OfferDevelopment_Coaching_Chapter_5_1_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Coaching_1.Studio_OfferDevelopment_Coaching_Chapter_5_1_Page_0_ControlNicheMaster_Handler_1_0(this._storedParameterInputs);

                        _5_1_stored_Director_Of_Coaching_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6995/storyline/basedi/io/professional/coaching";
                        _5_1_stored_Director_Of_Coaching_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7995/storyline/basedi/io/professional/coaching";

                        _5_1_stored_Director_Of_Coaching_RequestHandler.APILocationLocalNodeJS = "https://localhost:8995/storyline/basedi/io/professional/coaching";
                        _5_1_stored_Director_Of_Coaching_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9995/storyline/basedi/io/professional/coaching";

                        _5_1_stored_Director_Of_Coaching_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/coaching";

                        return _5_1_stored_Director_Of_Coaching_RequestHandler.Action(this._storedParameterInputs);
                    }

                    if (this._storedRequestName.toUpperCase().includes("DIRECTOR_OF_CONSULTING"))
                    {
                        _5_2_stored_Director_Of_Consulting_RequestHandler = new Studio_OfferDevelopment_Consulting_Chapter_5_2_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Consulting_2.Studio_OfferDevelopment_Consulting_Chapter_5_2_Page_0_ControlNicheMaster_Handler_1_0(this._storedParameterInputs);

                        _5_2_stored_Director_Of_Consulting_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6995/storyline/basedi/io/professional/consulting";
                        _5_2_stored_Director_Of_Consulting_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7995/storyline/basedi/io/professional/consulting";

                        _5_2_stored_Director_Of_Consulting_RequestHandler.APILocationLocalNodeJS = "https://localhost:8995/storyline/basedi/io/professional/consulting";
                        _5_2_stored_Director_Of_Consulting_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9995/storyline/basedi/io/professional/consulting";

                        _5_2_stored_Director_Of_Consulting_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/consulting";

                        return _5_2_stored_Director_Of_Consulting_RequestHandler.Action(this._storedParameterInputs);
                    }

                    if (this._storedRequestName.toUpperCase().includes("DIRECTOR_OF_PERSONALTRAINING"))
                    {
                        _5_3_stored_Director_Of_PersonalTraining_RequestHandler = new Studio_OfferDevelopment_PersonalTraining_Chapter_5_3_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Personal_Training_3.Studio_OfferDevelopment_PersonalTraining_Chapter_5_3_Page_0_ControlNicheMaster_Handler_1_0(this._storedParameterInputs);

                        _5_3_stored_Director_Of_PersonalTraining_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6995/storyline/basedi/io/professional/personaltraining";
                        _5_3_stored_Director_Of_PersonalTraining_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7995/storyline/basedi/io/professional/personaltraining";

                        _5_3_stored_Director_Of_PersonalTraining_RequestHandler.APILocationLocalNodeJS = "https://localhost:8995/storyline/basedi/io/professional/personaltraining";
                        _5_3_stored_Director_Of_PersonalTraining_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9995/storyline/basedi/io/professional/personaltraining";

                        _5_3_stored_Director_Of_PersonalTraining_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/personaltraining";

                        return _5_3_stored_Director_Of_PersonalTraining_RequestHandler.Action(this._storedParameterInputs);
                    }

                    //#endregion

                    //#region 6. Sell Subscription Offer Storylines

                    if (this._storedRequestName.toUpperCase().includes("DIRECTOR_OF_SOFTWARE"))
                    {
                        _6_1_stored_Director_Of_Software_RequestHandler = new Studio_OfferDevelopment_Software_Chapter_6_1_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Software_1.Studio_OfferDevelopment_Software_Chapter_6_1_Page_0_ControlNicheMaster_Handler_1_0(this._storedParameterInputs);

                        _6_1_stored_Director_Of_Software_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6996/storyline/basedi/io/professional/software";
                        _6_1_stored_Director_Of_Software_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7996/storyline/basedi/io/professional/software";

                        _6_1_stored_Director_Of_Software_RequestHandler.APILocationLocalNodeJS = "https://localhost:8996/storyline/basedi/io/professional/software";
                        _6_1_stored_Director_Of_Software_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9996/storyline/basedi/io/professional/software";

                        _6_1_stored_Director_Of_Software_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/software";

                        return _6_1_stored_Director_Of_Software_RequestHandler.Action(this._storedParameterInputs);
                    }

                    //#endregion

                    //#region 7. Sell Commission Offer Storylines

                    if (this._storedRequestName.toUpperCase().includes("DIRECTOR_OF_AFFILIATEREVENUE"))
                    {
                        _7_1_stored_Director_Of_AffiliateRevenue_RequestHandler = new Studio_OfferDevelopment_AffiliateRevenue_Chapter_7_1_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Affiliate_Revenue_1.Studio_OfferDevelopment_AffiliateRevenue_Chapter_7_1_Page_0_ControlNicheMaster_Handler_1_0(this._storedParameterInputs);

                        _7_1_stored_Director_Of_AffiliateRevenue_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6997/storyline/basedi/io/professional/affiliaterevenue";
                        _7_1_stored_Director_Of_AffiliateRevenue_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7997/storyline/basedi/io/professional/affiliaterevenue";

                        _7_1_stored_Director_Of_AffiliateRevenue_RequestHandler.APILocationLocalNodeJS = "https://localhost:8997/storyline/basedi/io/professional/affiliaterevenue";
                        _7_1_stored_Director_Of_AffiliateRevenue_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9997/storyline/basedi/io/professional/affiliaterevenue";

                        _7_1_stored_Director_Of_AffiliateRevenue_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/affiliaterevenue";

                        return _7_1_stored_Director_Of_AffiliateRevenue_RequestHandler.Action(this._storedParameterInputs);
                    }

                    //#endregion

                    //#region 8. Account Loss or Gain Storylines

                    if (this._storedRequestName.toUpperCase().includes("DIRECTOR_OF_ACCOUNTING"))
                    {
                        _8_1_stored_Director_Of_Accounting_RequestHandler = new Studio_Strategy_Accounting_Chapter_8_1_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Accounting_1.Studio_Strategy_Accounting_Chapter_8_1_Page_0_ControlNicheMaster_Handler_1_0(this._storedParameterInputs);

                        _8_1_stored_Director_Of_Accounting_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6998/storyline/basedi/io/professional/accounting";
                        _8_1_stored_Director_Of_Accounting_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7998/storyline/basedi/io/professional/accounting";

                        _8_1_stored_Director_Of_Accounting_RequestHandler.APILocationLocalNodeJS = "https://localhost:8998/storyline/basedi/io/professional/accounting";
                        _8_1_stored_Director_Of_Accounting_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9998/storyline/basedi/io/professional/accounting";

                        _8_1_stored_Director_Of_Accounting_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/accounting";

                        return _8_1_stored_Director_Of_Accounting_RequestHandler.Action(this._storedParameterInputs);
                    }

                    //#endregion

                    //#region 9. Customer Service Storylines

                    if (this._storedRequestName.toUpperCase().includes("DIRECTOR_OF_CUSTOMERSERVICE"))
                    {
                        _9_1_stored_Director_Of_CustomerService_RequestHandler = new Studio_Strategy_CustomerService_Chapter_9_1_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Customer_Service_1.Studio_Strategy_CustomerService_Chapter_9_1_Page_0_ControlNicheMaster_Handler_1_0(this._storedParameterInputs);

                        _9_1_stored_Director_Of_CustomerService_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6999/storyline/basedi/io/professional/customerservice";
                        _9_1_stored_Director_Of_CustomerService_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7999/storyline/basedi/io/professional/customerservice";

                        _9_1_stored_Director_Of_CustomerService_RequestHandler.APILocationLocalNodeJS = "https://localhost:8999/storyline/basedi/io/professional/customerservice";
                        _9_1_stored_Director_Of_CustomerService_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9999/storyline/basedi/io/professional/customerservice";

                        _9_1_stored_Director_Of_CustomerService_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/customerservice";

                        return _9_1_stored_Director_Of_CustomerService_RequestHandler.Action(this._storedParameterInputs);
                    }

                    //#endregion

                    //#region 10. Perform Manual Task Storylines

                    if (this._storedRequestName.toUpperCase().includes("DIRECTOR_OF_PRODUCTIVITY"))
                    {
                        _10_1_stored_Director_Of_Productivity_RequestHandler = new Studio_Strategy_Productivity_Chapter_10_1_Page_0_ControlNicheMaster_Handler.BaseDI.Professional.Story.Productivity_1.Studio_Strategy_Productivity_Chapter_10_1_Page_0_ControlNicheMaster_Handler(this._storedParameterInputs);

                        _10_1_stored_Director_Of_Productivity_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6910/storyline/basedi/io/professional/productivity";
                        _10_1_stored_Director_Of_Productivity_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7910/storyline/basedi/io/professional/productivity";

                        _10_1_stored_Director_Of_Productivity_RequestHandler.APILocationLocalNodeJS = "https://localhost:8910/storyline/basedi/io/professional/productivity";
                        _10_1_stored_Director_Of_Productivity_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9910/storyline/basedi/io/professional/productivity";

                        _10_1_stored_Director_Of_Productivity_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/productivity";

                        return _10_1_stored_Director_Of_Productivity_RequestHandler.Action(this._storedParameterInputs);
                    }

                    //#endregion

                    //#region 11. Automate Manual Task Storylines

                    if (this._storedRequestName.toUpperCase().includes("DIRECTOR_OF_RISKMANAGEMENT"))
                    {
                        _11_1_stored_Director_Of_RiskManagement_RequestHandler = new Studio_Strategy_RiskManagement_Chapter_11_1_Page_0_ControlNicheMaster_Handler.BaseDI.Professional.Story.Risk_Management_1.Studio_Strategy_RiskManagement_Chapter_11_1_Page_0_ControlNicheMaster_Handler(this._storedParameterInputs);

                        _11_1_stored_Director_Of_RiskManagement_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6911/storyline/basedi/io/professional/riskmanagement";
                        _11_1_stored_Director_Of_RiskManagement_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7911/storyline/basedi/io/professional/riskmanagement";

                        _11_1_stored_Director_Of_RiskManagement_RequestHandler.APILocationLocalNodeJS = "https://localhost:8911/storyline/basedi/io/professional/riskmanagement";
                        _11_1_stored_Director_Of_RiskManagement_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9911/storyline/basedi/io/professional/riskmanagement";

                        _11_1_stored_Director_Of_RiskManagement_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/riskmanagement";

                        return _11_1_stored_Director_Of_RiskManagement_RequestHandler.Action(this._storedParameterInputs);
                    }

                    //#endregion

                    //#region 12. Other Storylines

                    if (this._storedRequestName.toUpperCase().includes("DIRECTOR_OF_CAREERSEMPLOYMENT"))
                    {
                        _12_1_stored_Director_Of_Careers_RequestHandler = new Studio_Strategy_CareersEmployment_Chapter_12_1_Page_0_ControlNicheMaster_Handler.BaseDI.Professional.Story.Careers_Employment_1.Studio_Strategy_CareersEmployment_Chapter_12_1_Page_0_ControlNicheMaster_Handler(this._storedParameterInputs);

                        _12_1_stored_Director_Of_Careers_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6912/storyline/basedi/io/professional/careersemployment";
                        _12_1_stored_Director_Of_Careers_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7912/storyline/basedi/io/professional/careersemployment";

                        _12_1_stored_Director_Of_Careers_RequestHandler.APILocationLocalNodeJS = "https://localhost:8912/storyline/basedi/io/professional/careersemployment";
                        _12_1_stored_Director_Of_Careers_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9912/storyline/basedi/io/professional/careersemployment";

                        _12_1_stored_Director_Of_Careers_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/careersemployment";

                        return _12_1_stored_Director_Of_Careers_RequestHandler.Action(this._storedParameterInputs);
                    }

                    if (this._storedRequestName.toUpperCase().includes("DIRECTOR_OF_WEBDEVELOPMENT"))
                    {
                        _12_3_stored_Director_Of_WebDevelopment_RequestHandler = new Studio_Automation_WebDevelopment_Chapter_12_3_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Web_Development_1.Studio_Automation_WebDevelopment_Chapter_12_3_Page_0_ControlNicheMaster_Handler_1_0(this._storedParameterInputs);

                        _12_3_stored_Director_Of_WebDevelopment_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6912/storyline/basedi/io/professional/webdevelopment";
                        _12_3_stored_Director_Of_WebDevelopment_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7912/storyline/basedi/io/professional/webdevelopment";

                        _12_3_stored_Director_Of_WebDevelopment_RequestHandler.APILocationLocalNodeJS = "https://localhost:8912/storyline/basedi/io/professional/webdevelopment";
                        _12_3_stored_Director_Of_WebDevelopment_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9912/storyline/basedi/io/professional/webdevelopment";

                        _12_3_stored_Director_Of_WebDevelopment_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/webdevelopment";

                        return _12_3_stored_Director_Of_WebDevelopment_RequestHandler.Action(this._storedParameterInputs);
                    }

                    if (this._storedRequestName.toUpperCase().includes("DIRECTOR_OF_CMS"))
                    {
                        _12_4_stored_Director_Of_CMS_RequestHandler = new Studio_AudienceTesting_CMS_Chapter_12_4_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.CMS_1.Studio_AudienceTesting_CMS_Chapter_12_4_Page_0_ControlNicheMaster_Handler_1_0(this._storedParameterInputs);

                        _12_4_stored_Director_Of_CMS_RequestHandler.APILocationLocalNodeJS = "https://localhost:6912/storyline/basedi/io/professional/cms";
                        _12_4_stored_Director_Of_CMS_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:7912/storyline/basedi/io/professional/cms";

                        _12_4_stored_Director_Of_CMS_RequestHandler.APILocationLocalDotNetCore = "https://localhost:8912/storyline/basedi/io/professional/cms";
                        _12_4_stored_Director_Of_CMS_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:9912/storyline/basedi/io/professional/cms";

                        _12_4_stored_Director_Of_CMS_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/cms";

                        return _12_4_stored_Director_Of_CMS_RequestHandler.Action(this._storedParameterInputs);
                    }

                    if (this._storedRequestName.toUpperCase().includes("DIRECTOR_OF_SECURITY"))
                    {
                        _12_5_stored_Director_Of_Security_RequestHandler = new Studio_Automation_Security_Chapter_12_4_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Security_1.Studio_Automation_Security_Chapter_12_4_Page_0_ControlNicheMaster_Handler_1_0(this._storedParameterInputs);

                        _12_5_stored_Director_Of_Security_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6912/storyline/basedi/io/professional/security";
                        _12_5_stored_Director_Of_Security_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7912/storyline/basedi/io/professional/security";

                        _12_5_stored_Director_Of_Security_RequestHandler.APILocationLocalNodeJS = "https://localhost:8912/storyline/basedi/io/professional/security";
                        _12_5_stored_Director_Of_Security_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9912/storyline/basedi/io/professional/security";

                        _12_5_stored_Director_Of_Security_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/security";

                        return _12_5_stored_Director_Of_Security_RequestHandler.Action(this._storedParameterInputs);
                    }

                    //#endregion
                }

                //#endregion
            }
            catch
            {
                //#region EDGE CASE - USE an exception message

                throw new Error("[DISTURBANCE ISSUE] - Bug - Director_Of_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler.cs -> Implement_DesignPattern_Factory_Director_12_2_1_0 -> Action_1_Begin_Process - No DIRECTOR can be found for request " + this._storedRequestName.toUpperCase() + " Please make sure a director is wired in the pipeline in the METHOD [Action_1_Begin_Process]");

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
        private _storedProcessRequestSettings: any = null;

        //CLIENT/SERVER
        private _storedProcessRequestTracker: any;

        private _storedClientRequestByObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        private _storedClientRequestByName: string = "";
        private _storedClientRequestByNameParameters: string = "";

        //DATASETS
        private _storedProcessRequestDataStorylineDetails: Object;
        private _storedProcessRequestDataStorylineDetails_Parameters: Object;

        //MISC
        private _storedProcessRequestExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //PLUMBING
        private _storedProcessRequestCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _stored_CentralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _stored_CentralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        private _storedParameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = null;

        private _storedRequestName: string = "";
        private _storedSystemRequestByName: string;

        //#endregion

        //#region 2. Ready

        constructor(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) //parameterProcessRequestTracker: any, parameterProcessRequestDataStorylineDetails: Object, parameterProcessRequestDataStorylineDetails_Parameters: Object, parameterClientRequestByObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0, parameterExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0 = null, parameterSystemRequestByName: string = "", parameterInputRequestName: string = "", parameterInputRequestNameDataCacheKey: string = ""
         {
             super()

            //#region 1. INPUTS

            //#region MEMORIZE control client server

            this._storedProcessRequestTracker = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE app settings

            this._storedProcessRequestSettings = this._storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE centralized processes handlers

            if (this._stored_CentralizedDisturber == null) {
                this._stored_CentralizedDisturber = new Implement_DesignPattern_Factory_Disturber_12_2_1_0(parameterInputs);

                parameterInputs.Parameters.setValue("parameterProcessRequestCentralizedDisturber", Object.assign(this._stored_CentralizedDisturber, Object));
            }

            if (this._stored_CentralizedSensor == null) {
                this._stored_CentralizedSensor = new Implement_DesignPattern_Factory_Sensor_12_2_1_0(parameterInputs);

                parameterInputs.Parameters.setValue("parameterProcessRequestCentralizedSensor", Object.assign(this._stored_CentralizedSensor, Object));
            }

            if (this._storedProcessRequestCentralizedStorer == null) {
                this._storedProcessRequestCentralizedStorer = new Implement_DesignPattern_Factory_Storer_12_2_1_0(parameterInputs);

                parameterInputs.Parameters.setValue("parameterProcessRequestCentralizedStorer", Object.assign(this._storedProcessRequestCentralizedStorer, Object));
            }

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#region MEMORIZE storyline details

            this._storedProcessRequestDataStorylineDetails = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            this._storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails_Parameters");

            //#endregion

            //#region MEMORIZE extra data

            this._storedProcessRequestExtraData = parameterInputs.Parameters.getValue("parameterExtraData");

            //#endregion

            //#region MEMORIZE request details

            this._storedClientRequestByName = parameterInputs.Parameters.getValue("parameterInputRequestName");
            this._storedClientRequestByNameParameters = parameterInputs.Parameters.getValue("parameterInputRequestNameDataCacheKey");
            this._storedClientRequestByObject = parameterInputs.Parameters.getValue("parameterClientRequestByObject");

            this._storedRequestName = parameterInputs.Parameters.getValue("parameterSystemRequestByName");

            this._storedSystemRequestByName = parameterInputs.Parameters.getValue("parameterSystemRequestByName");

            this._storedParameterInputs = parameterInputs;

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

        public Action_1_Begin_Process() : object
        {
            //#region 1. INPUTS  

            //#region DEFINE director request handlers

            let _2_3_stored_Director_Of_SocialMedia_RequestHandler: Studio_AudienceTesting_SocialMedia_Chapter_2_3_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Social_Media_3.Studio_AudienceTesting_SocialMedia_Chapter_2_3_Page_0_ControlNicheMaster_Handler_1_0 = null;

            let _12_3_stored_Director_Of_WebDevelopment_RequestHandler: Studio_Automation_WebDevelopment_Chapter_12_3_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Web_Development_1.Studio_Automation_WebDevelopment_Chapter_12_3_Page_0_ControlNicheMaster_Handler_1_0 = null;

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
                    _2_3_stored_Director_Of_SocialMedia_RequestHandler = new Studio_AudienceTesting_SocialMedia_Chapter_2_3_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Social_Media_3.Studio_AudienceTesting_SocialMedia_Chapter_2_3_Page_0_ControlNicheMaster_Handler_1_0(this._storedParameterInputs);

                    _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:8992/storyline/basedi/io/professional/socialmedia";
                    _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9992/storyline/basedi/io/professional/socialmedia";
                    _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/socialmedia";

                    return _2_3_stored_Director_Of_SocialMedia_RequestHandler.Action(this._storedParameterInputs);
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

                    _12_3_stored_Director_Of_WebDevelopment_RequestHandler = new Studio_Automation_WebDevelopment_Chapter_12_3_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Web_Development_1.Studio_Automation_WebDevelopment_Chapter_12_3_Page_0_ControlNicheMaster_Handler_1_0(this._storedParameterInputs);

                    _12_3_stored_Director_Of_WebDevelopment_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:8912/storyline/basedi/io/professional/webdevelopment";
                    _12_3_stored_Director_Of_WebDevelopment_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:9912/storyline/basedi/io/professional/webdevelopment";
                    _12_3_stored_Director_Of_WebDevelopment_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/webdevelopment";

                    return _12_3_stored_Director_Of_WebDevelopment_RequestHandler.Action(this._storedParameterInputs);

                    //#endregion
                }

                //#endregion

                //#endregion
            }
            catch
            {
                //#region EDGE CASE - USE an exception message

                throw new Error("[DISTURBANCE ISSUE] - Bug - Director_Of_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler.cs -> Implement_DesignPattern_Factory_Experience_12_2_1_0 -> Action_1_Begin_Process - No EXPERIENCE can be found for request " + this._storedRequestName.toUpperCase() + " Please make sure an experience is wired in the pipeline in the METHOD [Action_1_Begin_Process]");

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
        private _storedProcessRequestSettings: any = null;

        //CLIENT/SERVER
        private _storedProcessRequestTracker: any;

        private _storedClientRequestByName: string = "";
        private _storedClientRequestByNameParameters: string = "";

        private _storedClientRequestByObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        //DATASETS
        private _storedProcessRequestDataStorylineDetails: Object;
        private _storedProcessRequestDataStorylineDetails_Parameters: Object;

        //MISC
        private _storedProcessRequestExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //PLUMBING
        private _storedParameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = null;

        private _storedRequestName: string = "";
        private _storedSystemRequestByName: string = "";

        //#endregion

        //#region 2. Ready

        constructor(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) //parameterProcessRequestTracker: any, parameterProcessRequestDataStorylineDetails: Object, parameterProcessRequestDataStorylineDetails_Parameters: Object, parameterClientRequestByObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0, parameterExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0 = null, parameterSystemRequestByName: string = "", parameterInputRequestName: string = "", parameterInputRequestNameDataCacheKey: string = ""
        {
            super();

            //#region MEMORIZE control client server

            this._storedProcessRequestTracker = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE app settings

            this._storedProcessRequestSettings = this._storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#region MEMORIZE storyline details

            this._storedProcessRequestDataStorylineDetails = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            this._storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails_Parameters");

            //#endregion

            //#region MEMORIZE extra data

            this._storedProcessRequestExtraData = parameterInputs.Parameters.getValue("parameterExtraData");

            //#endregion

            //#region MEMORIZE request details

            this._storedClientRequestByName = parameterInputs.Parameters.getValue("parameterInputRequestName");
            this._storedClientRequestByNameParameters = parameterInputs.Parameters.getValue("parameterInputRequestNameDataCacheKey");
            this._storedClientRequestByObject = parameterInputs.Parameters.getValue("parameterClientRequestByObject");

            this._storedRequestName = parameterInputs.Parameters.getValue("parameterSystemRequestByName");
            this._storedSystemRequestByName = parameterInputs.Parameters.getValue("parameterSystemRequestByName");

            this._storedParameterInputs = parameterInputs;

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

            let storedOutputResponseData: any = null;

            //#endregion

            //#region OVERRIDE client request names

            this._storedClientRequestByName = "Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0";
            this._storedClientRequestByNameParameters = "Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0-P1_0";

            this._storedParameterInputs.Parameters.setValue("parameterInputRequestName", this._storedClientRequestByName);
            this._storedParameterInputs.Parameters.setValue("parameterInputRequestNameDataCacheKey", this._storedClientRequestByNameParameters);

            this._storedParameterInputs.Parameters.setValue("parameterSystemRequestByName", "");

            //#endregion

            //#region OVERRIDE extra data

            if (this.ExtraData != null && this.ExtraData != undefined) {
                this._storedProcessRequestExtraData = this.ExtraData;
            }

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: any = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try
            {
                //#region EXECUTE storage request

                //#region IDEAL CASE - USE storage handler
                
                if (this._storedProcessRequestSettings == null) throw new Error(": ***LEAKY PIPE*** FAILED STORING a value. BaseDI TypeScript version will not work without PROCESS.ENV AppSettings. Please make sure that PROCESS.ENV AppSettings has the REQUIRED [APP_SETTING_CONVERSION_MODE] value set. -> Director_Of_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler -> Implement_DesignPattern_Factory_Storer_12_2_1_0");

                storedOutputResponseData = new Director_Of_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler(new Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0.BaseDI.Professional.Director.Programming_1.Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0(this._storedParameterInputs))
                    .SetupStoryline(this._storedParameterInputs)
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

            return storedOutputResponseData;

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
        private _storedProcessRequestSettings: any = null;

        //CLIENT/SERVER
        private _storedProcessRequestTracker: any;

        private _storedClientRequestByName: string = "";
        private _storedClientRequestByNameParameters: string = "";

        private _storedClientRequestByObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        //DATASETS
        private _storedProcessRequestDataStorylineDetails: Object;
        private _storedProcessRequestDataStorylineDetails_Parameters: Object;

        //MISC
        private _storedProcessRequestExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //PLUMBING
        private _storedParameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = null;

        private _storedRequestName: string = "";
        private _storedSystemRequestByName: string = "";

        //#endregion

        //#region 2. Ready

        constructor(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0)
        {
            super();

            //#region MEMORIZE control client server

            this._storedProcessRequestTracker = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE app settings

            this._storedProcessRequestSettings = this._storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#region MEMORIZE storyline details

            this._storedProcessRequestDataStorylineDetails = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            this._storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails_Parameters");

            //#endregion

            //#region MEMORIZE extra data

            this._storedProcessRequestExtraData = parameterInputs.Parameters.getValue("parameterExtraData");

            //#endregion

            //#region MEMORIZE request details

            this._storedClientRequestByName = parameterInputs.Parameters.getValue("parameterInputRequestName");
            this._storedClientRequestByNameParameters = parameterInputs.Parameters.getValue("parameterInputRequestNameDataCacheKey");
            this._storedClientRequestByObject = parameterInputs.Parameters.getValue("parameterClientRequestByObject");

            this._storedRequestName = parameterInputs.Parameters.getValue("parameterSystemRequestByName");
            this._storedSystemRequestByName = parameterInputs.Parameters.getValue("parameterSystemRequestByName");

            this._storedParameterInputs = parameterInputs;

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

            let storedOutputResponseData: Object = null;

            //#endregion

            //#region OVERRIDE client request names

            this._storedClientRequestByName = "Director_Of_Programming_Chapter_12_2_Page_4_DisturbanceRequest_Handler_1_0";
            this._storedClientRequestByNameParameters = "Director_Of_Programming_Chapter_12_2_Page_4_DisturbanceRequest_Handler_1_0-P1_0";

            this._storedParameterInputs.Parameters.setValue("parameterInputRequestName", this._storedClientRequestByName);
            this._storedParameterInputs.Parameters.setValue("parameterInputRequestNameDataCacheKey", this._storedClientRequestByNameParameters);

            this._storedParameterInputs.Parameters.setValue("parameterSystemRequestByName", "");

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try
            {
                //#region EXECUTE exception request

                //#region IDEAL CASE - USE exception handler

                if (this._storedProcessRequestSettings == null) throw new Error(": ***LEAKY PIPE*** FAILED HANDLING a distrubance. BaseDI TypeScript version will not work without PROCESS.ENV AppSettings. Please make sure that PROCESS.ENV AppSettings has the REQUIRED [APP_SETTING_CONVERSION_MODE] value set. -> Director_Of_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler -> Implement_DesignPattern_Factory_Storer_12_2_1_0");

                storedOutputResponseData = new Director_Of_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler(new Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0.BaseDI.Professional.Director.Programming_1.Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0(this._storedParameterInputs))
                    .SetupStoryline(this._storedParameterInputs)
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

            return storedOutputResponseData;

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
        private _storedProcessRequestSettings: any = null;

        //CLIENT/SERVER
        private _storedProcessRequestTracker: any;

        private _storedClientRequestByName: string = "";
        private _storedClientRequestByNameParameters: string = "";

        private _storedClientRequestByObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        //DATASETS
        private _storedProcessRequestDataStorylineDetails: Object;
        private _storedProcessRequestDataStorylineDetails_Parameters: Object;

        //MISC
        private _storedProcessRequestExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //PLUMBING
        private _storedParameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = null;

        private _storedRequestName: string = "";
        private _storedSystemRequestByName: string = "";

        //#endregion

        //#region 2. Ready

        constructor(parameterInputs:SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0)
        {
            super();

            //#region MEMORIZE control client server

            this._storedProcessRequestTracker = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE app settings

            this._storedProcessRequestSettings = this._storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#region MEMORIZE storyline details

            this._storedProcessRequestDataStorylineDetails = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            this._storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails_Parameters");

            //#endregion

            //#region MEMORIZE extra data

            this._storedProcessRequestExtraData = parameterInputs.Parameters.getValue("parameterExtraData");

            //#endregion

            //#region MEMORIZE request details

            this._storedClientRequestByName = parameterInputs.Parameters.getValue("parameterInputRequestName");
            this._storedClientRequestByNameParameters = parameterInputs.Parameters.getValue("parameterInputRequestNameDataCacheKey");
            this._storedClientRequestByObject = parameterInputs.Parameters.getValue("parameterClientRequestByObject");

            this._storedRequestName = parameterInputs.Parameters.getValue("parameterSystemRequestByName");
            this._storedSystemRequestByName = parameterInputs.Parameters.getValue("parameterSystemRequestByName");

            this._storedParameterInputs = parameterInputs;

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

            let storedOutputResponseData: any = null;

            //#endregion

            //#region OVERRIDE client request names

            this._storedClientRequestByName = "Director_Of_Programming_Chapter_12_2_Page_5_SensorRequest_Handler_1_0";
            this._storedClientRequestByNameParameters = "Director_Of_Programming_Chapter_12_2_Page_5_SensorRequest_Handler_1_0-P1_0";

            this._storedParameterInputs.Parameters.setValue("parameterInputRequestName", this._storedClientRequestByName);
            this._storedParameterInputs.Parameters.setValue("parameterInputRequestNameDataCacheKey", this._storedClientRequestByNameParameters);

            this._storedParameterInputs.Parameters.setValue("parameterSystemRequestByName", "");

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try
            {
                //#region EXECUTE exception request

                //#region IDEAL CASE - USE exception handler

                storedOutputResponseData = new Director_Of_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler(new Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0.BaseDI.Professional.Director.Programming_1.Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0(this._storedParameterInputs))
                    .SetupStoryline(this._storedParameterInputs)
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

            return storedOutputResponseData;

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