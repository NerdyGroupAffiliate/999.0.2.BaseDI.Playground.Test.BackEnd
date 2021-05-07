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

export namespace BaseDI.Professional.Story.Programming_0
{
    export class Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0 extends aClass_Programming_ScriptMasterLeader_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptMasterLeader_12_2_1_0
    {
        //#region 1. Assign

        //A. Variable Declaration 

        //SETTINGS
        private _storedProcessRequestSettings: any = null;

        //CLIENT/SERVER
        private _storedProcessRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0 = null;

        //MISC
        private _storedProcessRequestExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0 = null;

        //PLUMBING


        //#endregion

        //#region 2. Ready

        //A. Constructor Instantiation

        constructor(parameterProcessRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0)
        {
            super();

            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables

            this._storedProcessRequestExtraData = new ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0();

            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process request details

            this._storedProcessRequestHandler = parameterProcessRequestHandler;
     
            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE process xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process defaults

            //#region IDEAL CASE - USE defaults handler

            this.HandleDefaults = this.HandleDefaults.bind(this);
            this.HandleDefaults();

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#endregion
        }

        //#endregion

        //#region 3. Set

        //A. Default state
        private HandleDefaults() : void
        {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables

            this._storedProcessRequestExtraData = new ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0();

            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process extra data

            this._storedProcessRequestExtraData.MasterLeader = this;

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE process xxx xxxx


            //#endregion

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

            const ValidateInputs = (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) =>
            {
                //#region 1. INPUTS

                //#region DEFINE control variables

                //#endregion

                //#region DEFINE input variables

                let storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

                //#endregion

                //#region DEFINE process variables

                let storedProcessRequestMistakeMade: boolean = false;

                //#endregion

                //#region DEFINE output variables

                let storedOutputResponseMessage: string = "";

                //#endregion

                ///////////////////////////////////////////////////////////

                //#region MEMORIZE control variables

                //#region MEMORIZE control client server

          
                //#endregion

                //#endregion

                //#region MEMORIZE input variables

                //#region MEMORIZE input xxx xxxx


                //#endregion
   
                //#endregion

                //#region MEMORIZE process variables

                //#region MEMORIZE process request tracker

                let storedProcessRequestTracker: any = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

                //#endregion

                //#region MEMORIZE process request settings

                let storedProcessRequestSettings: any = storedProcessRequestTracker["storedProcessRequestSettings"];

                //#endregion

                //#region MEMORIZE process developer mode

                let storedProcessRequestDeveloperMode: boolean = storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE ? storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE : false;

                let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

                //REQUIRED

                //0. CONTROLLERS

                //1. INPUTS
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);

                //2. PROCESS
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "BEGIN processing request");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "SetupStoryline -> ValidateInputs");

                //3. OUTPUTS

                //#endregion

                //#endregion

                //#region MEMORIZE output variables

                //#region MEMORIZE output xxx xxx

          
                //#endregion

                //#endregion

                //#endregion

                //#region 2. PROCESS

                //#region EXECUTE validation process

                //#region IDEAL CASE - USE valid information

                if (parameterInputs != null || parameterInputs != undefined || parameterInputs.Parameters != null && parameterInputs.Parameters != undefined) {
                    //1. INPUTS
                    if (!parameterInputs.Parameters.containsKey("parameterInputRequestActionName")) {
                        storedOutputResponseMessage += "***parameterInputRequestActionName*** cannot be blank or empty.\n"
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

                    //2. PROCESS
                    if (process.env.APP_ENV == null || process.env.APP_ENV == undefined) {
                        storedOutputResponseMessage += "***process.env.APP_ENV*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestCallBack")) {
                        storedOutputResponseMessage += "***parameterProcessRequestCallBack*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestSettings")) {
                        storedOutputResponseMessage += "***parameterProcessRequestSettings*** cannot be blank or empty.\n"
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

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestDataStorylineDetails")) {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestDataStorylineDetails_Parameters")) {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails_Parameters*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestDataStorylineDetails_CallBack")) {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails_CallBack*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    //3. OUTPUTS  
                    if (!parameterInputs.Parameters.containsKey("parameterOutputResponseControlID")) {
                        storedOutputResponseMessage += "***parameterOutputResponseControlID*** cannot be blank or empty.\n"
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

            ///////////////////////////////////////////////////////////

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables

         
            //#endregion

            //#region DEFINE process variables

            let storedProcessRequestExceptionDetails: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;
            let storedProcessRequestHandler: any = null;

            let storedProcessRequestExperienceOrDirectorHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0

            let storedProcessRequestResolvedHandler = new Use_DesignPattern_Builder_Chapter_12_2_1_0(parameterInputs); //parameterProcessRequestTracker, parameterProcessRequestDataStorylineDetails, parameterProcessRequestDataStorylineDetails_Parameters, this._storedProcessRequestHandler, this._storedProcessRequestExtraData, parameterProcessRequestByName, parameterInputRequestName, parameterInputRequestNameDataCacheKey

            //#endregion

            //#region DEFINE output variables


            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control client server

            let storedControlRequestClientOrServer: any = parameterInputs.Parameters.getValue("parameterControlRequestClientOrServer");

            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input action name

            let storedInputRequestActionName: string = parameterInputs.Parameters["parameterProcessRequestTracker"]["storedInputRequestActionName"] as string;

            //#endregion

            //#region MEMORIZE input request details

            let storedInputRequestName: string = parameterInputs.Parameters["parameterInputRequestName"];
            let storedInputRequestNameParameters: string = parameterInputs.Parameters["parameterInputRequestNameDataCacheKey"];
               
            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process request details

            let storedProcessRequestTracker: any = parameterInputs.Parameters["parameterProcessRequestTracker"];

            parameterInputs.Parameters.setValue("parameterProcessRequestHandler", this._storedProcessRequestHandler);

            let storedProcessRequestByName: string = parameterInputs.Parameters["parameterProcessRequestByName"] ? parameterInputs.Parameters["parameterProcessRequestByName"] : "";

            //#endregion

            //#region MEMORIZE process request settings

            this._storedProcessRequestSettings = storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            if (storedProcessRequestTracker["storedProcessRequestStepNumber"] == null)
                storedProcessRequestTracker["storedProcessRequestStepNumber"] = 0;

            let storedDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (this._storedProcessRequestExtraData?.KeyValuePairs.getValue("storedProcessRequestDeveloperLoggingInputs") != null ? this._storedProcessRequestExtraData?.KeyValuePairs.getValue("storedProcessRequestDeveloperLoggingInputs") as SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 : null);

            let storedProcessRequestDeveloperLoggingInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

            //REQUIRED

            //0. CONTROLLERS

            //1. INPUTS
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);

            //2. PROCESS
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "BEGIN processing request");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "SetupStoryline");

            //3. OUTPUTS

            //OPTIONAL
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALBeginOfProcess", true);

            if (storedDeveloperLoggingStartUpProcessInputs != null) {
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALMasterLeaderIsSecondStep", storedDeveloperLoggingStartUpProcessInputs.Parameters["parameterOutputResponseOPTIONALMasterLeaderIsSecondStep"]);

                if (storedDeveloperLoggingStartUpProcessInputs.Parameters["parameterOutputResponseOPTIONALMasterLeaderIsSecondStep"] == true) {
                    storedProcessRequestDeveloperLoggingInputs.Parameters["parameterOutputResponseOPTIONALBeginOfProcess"] = false;
                }
            }

            //#endregion

            //#region MEMORIZE process extra data

            if (parameterInputs.Parameters["parameterProcessRequestExtraData"] != null)
                this._storedProcessRequestExtraData = parameterInputs.Parameters["parameterProcessRequestExtraData"];

            //#endregion

            //#region MEMORIZE process storyline details

            let storedProcessRequestDataStorylineDetails: any = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            let storedProcessRequestDataStorylineDetails_Parameters: any = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails_Parameters");

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE process xxx xxxx


            //#endregion

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
                storedProcessRequestHandler = storedProcessRequestResolvedHandler.Action();

                if (storedProcessRequestByName != "")
                {                    
                    storedProcessRequestExperienceOrDirectorHandler = storedProcessRequestHandler;

                    storedProcessRequestExperienceOrDirectorHandler.RequestID = storedProcessRequestByName;
                    storedProcessRequestExperienceOrDirectorHandler.ClientOrServerInstance = storedProcessRequestTracker;

                    this._storedProcessRequestHandler.ClientOrServerInstance = storedProcessRequestTracker;

                    this._storedProcessRequestHandler.DirectorOrExperienceRequestHandler = storedProcessRequestExperienceOrDirectorHandler;
                    this._storedProcessRequestHandler.ExtraData = this._storedProcessRequestExtraData;

                    this._storedProcessRequestHandler.MasterLeader = storedProcessRequestExperienceOrDirectorHandler.MasterLeader;

                    this._storedProcessRequestHandler.StorylineDetails = storedProcessRequestExperienceOrDirectorHandler.StorylineDetails;
                    this._storedProcessRequestHandler.StorylineDetails_Parameters = storedProcessRequestExperienceOrDirectorHandler.StorylineDetails_Parameters;

                    storedProcessRequestHandler = this._storedProcessRequestHandler;
                }

                //#endregion

                //#endregion
            }
            catch (storedProcessRequestMistake)
            {
                //#region EDGE CASE - USE exception handler
                storedProcessRequestExceptionDetails = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

                //0. CONTROLLERS

                //1. INPUTS
                storedProcessRequestExceptionDetails.Parameters.setValue("storedInputs", parameterInputs);
                storedProcessRequestExceptionDetails.Parameters.setValue("storedInputRequestName", storedInputRequestName);
                storedProcessRequestExceptionDetails.Parameters.setValue("storedInputRequestNameParameters", storedInputRequestNameParameters);

                //2. PROCESS
                storedProcessRequestExceptionDetails.Parameters.setValue("storedProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);
                storedProcessRequestExceptionDetails.Parameters.setValue("storedProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestExceptionDetails.Parameters.setValue("storedProcessRequestExtraData", this._storedProcessRequestExtraData);
                storedProcessRequestExceptionDetails.Parameters.setValue("storedProcessRequestMistake", storedProcessRequestMistake);

                //3. OUTPUTS

                throw Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Control_DeveloperException_1_0(storedProcessRequestExceptionDetails);

                //#endregion
            }
            
            //#endregion

            //#region 3. OUTPUT

            //#region RETURN request handler

            //#region IDEAL CASE - USE an experience OR a director handler

            return storedProcessRequestHandler;

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

        private _storedInputRequestName: string;
        private _storedInputRequestNameDataCacheKey: string;

        private _storedProcessRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        //DATASETS
        private _storedProcessRequestDataStorylineDetails: any;
        private _storedProcessRequestDataStorylineDetails_Parameters: any;

        //MISC
        private _storedProcessRequestExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //PLUMBING
        private _storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = null;

        private _storedProcessRequestName: string = "";
        private _storedProcessRequestByName: string;
  
        //#endregion

        //#region 2. Ready

        //parameterProcessRequestTracker: any, parameterProcessRequestDataStorylineDetails: Object, parameterProcessRequestDataStorylineDetails_Parameters: Object, parameterProcessRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0, parameterProcessRequestExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0 = null, parameterProcessRequestByName: string = "", parameterInputRequestName: string = "", parameterInputRequestNameDataCacheKey: string = ""
        constructor(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0)
        {
            //#region 1. INPUTS   

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables

      
            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input action name

            let storedInputRequestActionName: string = parameterInputs.Parameters.getValue("parameterProcessRequestTracker")["storedInputRequestActionName"] as string;

            //#endregion

            //#region MEMORIZE input request details

            let storedInputRequestName: string = parameterInputs.Parameters.getValue("parameterInputRequestName");
            let storedInputRequestNameParameters: string = parameterInputs.Parameters.getValue("parameterInputRequestNameDataCacheKey");

            let storedProcessRequestByName: string = parameterInputs.Parameters.getValue("parameterProcessRequestByName") ? parameterInputs.Parameters.getValue("parameterProcessRequestByName") : "";

            this._storedInputs = parameterInputs;

            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process request details

            this._storedProcessRequestTracker = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE process request settings

            this._storedProcessRequestSettings = this._storedProcessRequestTracker.getValue("storedProcessRequestSettings");

            //#endregion

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;
            
            //#endregion

            //#region MEMORIZE process extra data

            if (parameterInputs.Parameters["parameterProcessRequestExtraData"] != null)
                this._storedProcessRequestExtraData = parameterInputs.Parameters.getValue("parameterProcessRequestExtraData");

            //#endregion

            //#region MEMORIZE process storyline details

            let storedProcessRequestDataStorylineDetails: any = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            let storedProcessRequestDataStorylineDetails_Parameters: any = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails_Parameters");

            //#endregion

            //#region MEMORIZE process request details

            this._storedProcessRequestHandler = parameterInputs.Parameters.getValue("parameterProcessRequestHandler");

            this._storedProcessRequestByName = parameterInputs.Parameters.getValue("parameterProcessRequestByName");

            //#endregion

            //#region MEMORIZE process storyline details

            this._storedProcessRequestDataStorylineDetails = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            this._storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails_Parameters");

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxx


            //#endregion

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

        //#region DEFINE control variables

        //#endregion

        //#region DEFINE input variables


        //#endregion

        //#region DEFINE process variables



        //#endregion

        //#region DEFINE output variables

        //#endregion

        ///////////////////////////////////////////////////////////

        //#region MEMORIZE control variables

        //#region MEMORIZE control xxx xxx


        //#endregion

        //#endregion

        //#region MEMORIZE input variables

        //#region MEMORIZE input xxx xxxx


        //#endregion

        //#endregion

        //#region MEMORIZE process variables

        //#region MEMORIZE process xxx xxx



        //#endregion

        //#endregion

        //#region MEMORIZE output variables

        //#region MEMORIZE process xxx xxxx


        //#endregion

        //#endregion

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

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables

            var storedProcessRequestExecutionStragety: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object> = new Implement_DesignPattern_Builder_Chapter_12_2_1_0(this._storedInputs);
            let storedProcessRequestResolvedHandler: any = null;

            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input action name

            let storedInputRequestActionName: string = this._storedProcessRequestTracker["storedInputRequestActionName"] as string;

            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxx


            //#endregion


            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region FIND request handler

            try
            {
                //#region IDEAL CASE - USE an experience OR a director request handler

                storedProcessRequestExecutionStragety.Action_1_Begin_Process();
                storedProcessRequestResolvedHandler = storedProcessRequestExecutionStragety.Action_10_End_Process();

                //#endregion
            }
            catch (storedProcessRequestMistake)
            {
                //#region EDGE CASE - USE exception handler

                throw storedProcessRequestMistake;

                //#endregion
            }

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN request handler

            //#region IDEAL CASE - USE an experience OR a director handler

            return storedProcessRequestResolvedHandler;

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

        private _storedInputRequestName: string = "";
        private _storedInputRequestNameDataCacheKey: string = "";

        private _storedProcessRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        //DATASETS
        private _storedProcessRequestDataStorylineDetails: Object;
        private _storedProcessRequestDataStorylineDetails_Parameters: Object;

        //MISC
        private _storedProcessRequestExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //PLUMBING
        private _storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = null;

        private _storedProcessRequestName: string = "";

        private _storedProcessRequestByName: string;

        //#endregion

        //#region 2. Ready
        
        constructor(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) //parameterProcessRequestTracker: any, parameterProcessRequestDataStorylineDetails: Object, parameterProcessRequestDataStorylineDetails_Parameters: Object, parameterProcessRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0, parameterProcessRequestExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0 = null, parameterProcessRequestByName: string = "", parameterInputRequestName: string = "", parameterInputRequestNameDataCacheKey: string = ""
        {
            super();

            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables


            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input action name

            let storedInputRequestActionName: string = this._storedProcessRequestTracker["storedInputRequestActionName"] as string;

            //#endregion

            //#region MEMORIZE input request details

            this._storedInputRequestName = parameterInputs.Parameters.getValue("parameterInputRequestName");
            this._storedInputRequestNameDataCacheKey = parameterInputs.Parameters.getValue("parameterInputRequestNameDataCacheKey");

            this._storedInputs = parameterInputs;

            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process request tracker

            this._storedProcessRequestTracker = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE process request settings

            this._storedProcessRequestSettings = this._storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#region MEMORIZE process extra data

            this._storedProcessRequestExtraData = parameterInputs.Parameters.getValue("parameterProcessRequestExtraData");

            //#endregion

            //#region MEMORIZE process request details

            this._storedProcessRequestHandler = parameterInputs.Parameters.getValue("parameterProcessRequestHandler");

            this._storedProcessRequestByName = parameterInputs.Parameters.getValue("parameterProcessRequestByName");

            //#endregion

            //#region MEMORIZE storyline details

            this._storedProcessRequestDataStorylineDetails = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            this._storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails_Parameters");

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxx


            //#endregion


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
        public HandleDefaults(): void
        {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables



            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process xxx xxx



            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE process xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#endregion

            //#region 3. OUTPUT

            //#endregion
        }

        //#endregion

        //#region 4. Action

        public Action_1_Begin_Process(): object
        {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables



            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process xxx xxx



            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE process xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region STORE request name

            //#region IDEAL CASE - USE request by object

            if (this._storedProcessRequestByName == "" || this._storedProcessRequestByName == null || this._storedProcessRequestByName == undefined)
            {
                this._storedProcessRequestName = this._storedProcessRequestHandler != null ? this._storedProcessRequestHandler.constructor.name : this._storedInputRequestName;
            }
            else
            {
                this._storedProcessRequestName = this._storedProcessRequestByName;
            }

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN request handler

            //#region IDEAL CASE - USE an experience OR a director handler

            return this._storedProcessRequestName as Object;

            //#endregion

            //#endregion

            //#endregion
        }

        public Action_10_End_Process(): object
        {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables

            let storedProcessRequestExperienceHandler = new Implement_DesignPattern_Factory_Experience_12_2_1_0(this._storedInputs);
            let storedProcessRequestDirectorHandler = new Implement_DesignPattern_Factory_Director_12_2_1_0(this._storedInputs);

            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region PICK experience OR director

            try
            {
                //#region IDEAL CASE - USE director request handler

                if (this._storedProcessRequestName.toUpperCase().includes("DIRECTOR_OF_")) {
                    return storedProcessRequestDirectorHandler.Action_1_Begin_Process();
                }

                //#endregion

                //#region EDGE CASE - USE experience request handler

                if (this._storedProcessRequestName.toUpperCase().includes("EXPERIENCE_THE_")) {
                    return storedProcessRequestExperienceHandler.Action_1_Begin_Process();
                }

                //#endregion
            }
            catch (storedProcessRequestMistake)
            {
                //#region EDGE CASE - USE exception handler

                throw storedProcessRequestMistake;

                //#endregion
            }

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN exception message

            //#region EDGE CASE - USE exception message

            throw new Error("No request handler found");

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

        private _storedProcessRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        private _storedInputRequestName: string = "";
        private _storedInputRequestNameDataCacheKey: string = "";

        //DATASETS
        private _storedProcessRequestDataStorylineDetails: Object;
        private _storedProcessRequestDataStorylineDetails_Parameters: Object;

        //MISC
        private _storedProcessRequestExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //PLUMBING
        private _storedProcessRequestCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _storedProcessRequestCentralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _storedProcessRequestCentralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        private _storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = null;

        private _storedProcessRequestName: string = "";
        private _storedProcessRequestByName: string;

        //#endregion

        //#region 2. Ready
        
        constructor(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) //parameterProcessRequestTracker: any, parameterProcessRequestDataStorylineDetails: Object, parameterProcessRequestDataStorylineDetails_Parameters: Object, parameterProcessRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0, parameterProcessRequestExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0 = null, parameterProcessRequestByName: string = "", parameterInputRequestName: string = "", parameterInputRequestNameDataCacheKey: string = ""
        {
            super()

            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables


            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input action name

            let storedInputRequestActionName: string = this._storedProcessRequestTracker["storedInputRequestActionName"] as string;

            //#endregion

            //#region MEMORIZE input request details

            this._storedInputRequestName = parameterInputs.Parameters.getValue("parameterInputRequestName");
            this._storedInputRequestNameDataCacheKey = parameterInputs.Parameters.getValue("parameterInputRequestNameDataCacheKey");

            this._storedInputs = parameterInputs;

            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process request tracker

            this._storedProcessRequestTracker = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE process request settings

            this._storedProcessRequestSettings = this._storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE process centralized handlers

            if (this._storedProcessRequestCentralizedDisturber == null) {
                this._storedProcessRequestCentralizedDisturber = new Implement_DesignPattern_Factory_Disturber_12_2_1_0(this._storedInputs);

                parameterInputs.Parameters.setValue("parameterProcessRequestCentralizedDisturber", this._storedProcessRequestCentralizedDisturber);
            }

            if (this._storedProcessRequestCentralizedSensor == null) {
                this._storedProcessRequestCentralizedSensor = new Implement_DesignPattern_Factory_Sensor_12_2_1_0(this._storedInputs);

                parameterInputs.Parameters.setValue("parameterProcessRequestCentralizedSensor", this._storedProcessRequestCentralizedSensor);
            }

            if (this._storedProcessRequestCentralizedStorer == null) {
                this._storedProcessRequestCentralizedStorer = new Implement_DesignPattern_Factory_Storer_12_2_1_0(this._storedInputs);

                parameterInputs.Parameters.setValue("parameterProcessRequestCentralizedStorer", this._storedProcessRequestCentralizedStorer);
            }

            //#endregion

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#region MEMORIZE process extra data

            this._storedProcessRequestExtraData = parameterInputs.Parameters.getValue("parameterProcessRequestExtraData");

            //#endregion

            //#region MEMORIZE process request details

            this._storedProcessRequestHandler = parameterInputs.Parameters.getValue("parameterProcessRequestHandler");

            this._storedProcessRequestByName = parameterInputs.Parameters.getValue("parameterProcessRequestByName");

            //#endregion

            //#region MEMORIZE process request tracker

            this._storedProcessRequestTracker = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE process request settings

            this._storedProcessRequestSettings = this._storedProcessRequestTracker.getValue("storedProcessRequestSettings");

            //#endregion

            //#region MEMORIZE storyline details

            this._storedProcessRequestDataStorylineDetails = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            this._storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails_Parameters");

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxx


            //#endregion

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
        public HandleDefaults(): void
        {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables



            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process xxx xxx



            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE process xxx xxxx


            //#endregion

            //#endregion

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

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables

            let _1_1_stored_Director_Of_Advertising_RequestHandler: Studio_AudienceTesting_Advertising_Chapter_1_1_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Advertising_0.Studio_AudienceTesting_Advertising_Chapter_1_1_Page_0_ControlNicheMaster_Handler_1_0 = null;

            let _2_1_stored_Director_Of_Blogging_RequestHandler: Studio_AudienceTesting_Blogging_Chapter_2_1_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Blogging_0.Studio_AudienceTesting_Blogging_Chapter_2_1_Page_0_ControlNicheMaster_Handler_1_0 = null;
            let _2_2_stored_Director_Of_Podcasting_RequestHandler: Studio_AudienceTesting_Podcasting_Chapter_2_2_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Podcasting_0.Studio_AudienceTesting_Podcasting_Chapter_2_2_Page_0_ControlNicheMaster_Handler_1_0 = null;
            let _2_3_stored_Director_Of_SocialMedia_RequestHandler: Studio_AudienceTesting_SocialMedia_Chapter_2_3_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Social_Media_0.Studio_AudienceTesting_SocialMedia_Chapter_2_3_Page_0_ControlNicheMaster_Handler_1_0 = null;

            let _3_1_stored_Director_Of_ListBuilding_RequestHandler: Studio_AudienceTesting_ListBuilding_Chapter_3_1_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Listing_Building_0.Studio_AudienceTesting_ListBuilding_Chapter_3_1_Page_0_ControlNicheMaster_Handler_1_0 = null;

            let _4_1_stored_Director_Of_Supplements_RequestHandler: Studio_OfferDevelopment_Supplements_Chapter_4_1_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Supplements_0.Studio_OfferDevelopment_Supplements_Chapter_4_1_Page_0_ControlNicheMaster_Handler_1_0 = null;

            let _5_1_stored_Director_Of_Coaching_RequestHandler: Studio_OfferDevelopment_Coaching_Chapter_5_1_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Coaching_0.Studio_OfferDevelopment_Coaching_Chapter_5_1_Page_0_ControlNicheMaster_Handler_1_0 = null;
            let _5_2_stored_Director_Of_Consulting_RequestHandler: Studio_OfferDevelopment_Consulting_Chapter_5_2_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Consulting_0.Studio_OfferDevelopment_Consulting_Chapter_5_2_Page_0_ControlNicheMaster_Handler_1_0 = null;
            let _5_3_stored_Director_Of_PersonalTraining_RequestHandler: Studio_OfferDevelopment_PersonalTraining_Chapter_5_3_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Personal_Training_0.Studio_OfferDevelopment_PersonalTraining_Chapter_5_3_Page_0_ControlNicheMaster_Handler_1_0 = null;

            let _6_1_stored_Director_Of_Software_RequestHandler: Studio_OfferDevelopment_Software_Chapter_6_1_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Software_0.Studio_OfferDevelopment_Software_Chapter_6_1_Page_0_ControlNicheMaster_Handler_1_0 = null;

            let _7_1_stored_Director_Of_AffiliateRevenue_RequestHandler: Studio_OfferDevelopment_AffiliateRevenue_Chapter_7_1_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Affiliate_Revenue_0.Studio_OfferDevelopment_AffiliateRevenue_Chapter_7_1_Page_0_ControlNicheMaster_Handler_1_0 = null;

            let _8_1_stored_Director_Of_Accounting_RequestHandler: Studio_Strategy_Accounting_Chapter_8_1_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Accounting_0.Studio_Strategy_Accounting_Chapter_8_1_Page_0_ControlNicheMaster_Handler_1_0 = null;

            let _9_1_stored_Director_Of_CustomerService_RequestHandler: Studio_Strategy_CustomerService_Chapter_9_1_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Customer_Service_0.Studio_Strategy_CustomerService_Chapter_9_1_Page_0_ControlNicheMaster_Handler_1_0 = null;

            let _10_1_stored_Director_Of_Productivity_RequestHandler: Studio_Strategy_Productivity_Chapter_10_1_Page_0_ControlNicheMaster_Handler.BaseDI.Professional.Story.Productivity_0.Studio_Strategy_Productivity_Chapter_10_1_Page_0_ControlNicheMaster_Handler = null;

            let _11_1_stored_Director_Of_RiskManagement_RequestHandler: Studio_Strategy_RiskManagement_Chapter_11_1_Page_0_ControlNicheMaster_Handler.BaseDI.Professional.Story.Risk_Management_0.Studio_Strategy_RiskManagement_Chapter_11_1_Page_0_ControlNicheMaster_Handler = null;

            let _12_1_stored_Director_Of_Careers_RequestHandler: Studio_Strategy_CareersEmployment_Chapter_12_1_Page_0_ControlNicheMaster_Handler.BaseDI.Professional.Story.Careers_Employment_0.Studio_Strategy_CareersEmployment_Chapter_12_1_Page_0_ControlNicheMaster_Handler = null;
            let _12_2_stored_Director_Of_Programming_RequestHandler: Studio_Automation_Programming_Chapter_12_2_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Programming_0.Studio_Automation_Programming_Chapter_12_2_Page_0_ControlNicheMaster_Handler_1_0 = null;
            let _12_3_stored_Director_Of_WebDevelopment_RequestHandler: Studio_Automation_WebDevelopment_Chapter_12_3_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Web_Development_0.Studio_Automation_WebDevelopment_Chapter_12_3_Page_0_ControlNicheMaster_Handler_1_0 = null;
            let _12_4_stored_Director_Of_CMS_RequestHandler: Studio_AudienceTesting_CMS_Chapter_12_4_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.CMS_0.Studio_AudienceTesting_CMS_Chapter_12_4_Page_0_ControlNicheMaster_Handler_1_0 = null;
            let _12_5_stored_Director_Of_Security_RequestHandler: Studio_Automation_Security_Chapter_12_4_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Security_0.Studio_Automation_Security_Chapter_12_4_Page_0_ControlNicheMaster_Handler_1_0 = null;


            //#endregion

            //#region DEFINE process variables

            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input action name

            let storedInputRequestActionName: string = this._storedProcessRequestTracker["storedInputRequestActionName"] as string;

            //#endregion

            //#region MEMORIZE input request details

            this._storedInputRequestName = this._storedInputs.Parameters.getValue("parameterInputRequestName");
            this._storedInputRequestNameDataCacheKey = this._storedInputs.Parameters.getValue("parameterInputRequestNameDataCacheKey");

            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process request tracker

            this._storedProcessRequestTracker = this._storedInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE process request settings

            this._storedProcessRequestSettings = this._storedProcessRequestTracker.getValue("storedProcessRequestSettings");

            //#endregion
            
            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion          

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region ASSIGN request handler

            try
            {
                //#region IDEAL CASE - USE a director

                if (this._storedProcessRequestName.toUpperCase().includes("DIRECTOR_OF_PROGRAMMING"))
                {
                    //#region 12. Other

                    _12_2_stored_Director_Of_Programming_RequestHandler = new Studio_Automation_Programming_Chapter_12_2_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Programming_0.Studio_Automation_Programming_Chapter_12_2_Page_0_ControlNicheMaster_Handler_1_0(this._storedInputs);
                    
                    _12_2_stored_Director_Of_Programming_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6912/storyline/basedi/io/professional/programming";
                    _12_2_stored_Director_Of_Programming_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7912/storyline/basedi/io/professional/programming";

                    _12_2_stored_Director_Of_Programming_RequestHandler.APILocationLocalNodeJS = "https://localhost:8912/storyline/basedi/io/professional/programming";
                    _12_2_stored_Director_Of_Programming_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9912/storyline/basedi/io/professional/programming";

                    _12_2_stored_Director_Of_Programming_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/programming";

                    return _12_2_stored_Director_Of_Programming_RequestHandler.Action(this._storedInputs);

                    //#endregion
                }
                else
                {
                    //This means our director of programming wanted us to play this storyline.
                    //#region 1. Generate Brand Awareness Storylines

                    if (this._storedProcessRequestName.toUpperCase().includes("DIRECTOR_OF_ADVERTISING"))
                    {
                        _1_1_stored_Director_Of_Advertising_RequestHandler = new Studio_AudienceTesting_Advertising_Chapter_1_1_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Advertising_0.Studio_AudienceTesting_Advertising_Chapter_1_1_Page_0_ControlNicheMaster_Handler_1_0(this._storedInputs);

                        _1_1_stored_Director_Of_Advertising_RequestHandler.APILocationLocalDotNetCore = "http://localhost:6991/storyline/basedi/io/professional/advertising";
                        _1_1_stored_Director_Of_Advertising_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7991/storyline/basedi/io/professional/advertising";

                        _1_1_stored_Director_Of_Advertising_RequestHandler.APILocationLocalNodeJS = "https://localhost:8991/storyline/basedi/io/professional/advertising";
                        _1_1_stored_Director_Of_Advertising_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9991/storyline/basedi/io/professional/advertising";

                        _1_1_stored_Director_Of_Advertising_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/advertising";

                        return _1_1_stored_Director_Of_Advertising_RequestHandler.Action(this._storedInputs);
                    }

                    //#endregion

                    //#region 2. Generate Brand Trust Storylines

                    if (this._storedProcessRequestName.toUpperCase().includes("DIRECTOR_OF_BLOGGING"))
                    {
                        _2_1_stored_Director_Of_Blogging_RequestHandler = new Studio_AudienceTesting_Blogging_Chapter_2_1_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Blogging_0.Studio_AudienceTesting_Blogging_Chapter_2_1_Page_0_ControlNicheMaster_Handler_1_0(this._storedInputs);
                        
                        _2_1_stored_Director_Of_Blogging_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6992/storyline/basedi/io/professional/blogging";
                        _2_1_stored_Director_Of_Blogging_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7992/storyline/basedi/io/professional/blogging";

                        _2_1_stored_Director_Of_Blogging_RequestHandler.APILocationLocalNodeJS = "https://localhost:8992/storyline/basedi/io/professional/blogging";
                        _2_1_stored_Director_Of_Blogging_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9992/storyline/basedi/io/professional/blogging";

                        _2_1_stored_Director_Of_Blogging_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/blogging";

                        return _2_1_stored_Director_Of_Blogging_RequestHandler.Action(this._storedInputs);
                    }

                    if (this._storedProcessRequestName.toUpperCase().includes("DIRECTOR_OF_PODCASTING"))
                    {
                        _2_2_stored_Director_Of_Podcasting_RequestHandler = new Studio_AudienceTesting_Podcasting_Chapter_2_2_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Podcasting_0.Studio_AudienceTesting_Podcasting_Chapter_2_2_Page_0_ControlNicheMaster_Handler_1_0(this._storedInputs);

                        _2_2_stored_Director_Of_Podcasting_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6992/storyline/basedi/io/professional/podcasting";
                        _2_2_stored_Director_Of_Podcasting_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7992/storyline/basedi/io/professional/podcasting";

                        _2_2_stored_Director_Of_Podcasting_RequestHandler.APILocationLocalNodeJS = "https://localhost:8992/storyline/basedi/io/professional/podcasting";
                        _2_2_stored_Director_Of_Podcasting_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9992/storyline/basedi/io/professional/podcasting";

                        _2_2_stored_Director_Of_Podcasting_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/podcasting";

                        return _2_2_stored_Director_Of_Podcasting_RequestHandler.Action(this._storedInputs);
                    }

                    if (this._storedProcessRequestName.toUpperCase().includes("DIRECTOR_OF_SOCIALMEDIA"))
                    {
                        _2_3_stored_Director_Of_SocialMedia_RequestHandler = new Studio_AudienceTesting_SocialMedia_Chapter_2_3_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Social_Media_0.Studio_AudienceTesting_SocialMedia_Chapter_2_3_Page_0_ControlNicheMaster_Handler_1_0(this._storedInputs);

                        _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6992/storyline/basedi/io/professional/socialmedia";
                        _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7992/storyline/basedi/io/professional/socialmedia";

                        _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationLocalNodeJS = "https://localhost:8992/storyline/basedi/io/professional/socialmedia";
                        _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9992/storyline/basedi/io/professional/socialmedia";

                        _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/socialmedia";

                        return _2_3_stored_Director_Of_SocialMedia_RequestHandler.Action(this._storedInputs);
                    }

                    //#endregion

                    //#region 3. Generate Optin Storylines

                    if (this._storedProcessRequestName.toUpperCase().includes("DIRECTOR_OF_LISTBUILDING"))
                    {
                        _3_1_stored_Director_Of_ListBuilding_RequestHandler = new Studio_AudienceTesting_ListBuilding_Chapter_3_1_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Listing_Building_0.Studio_AudienceTesting_ListBuilding_Chapter_3_1_Page_0_ControlNicheMaster_Handler_1_0(this._storedInputs);

                        _3_1_stored_Director_Of_ListBuilding_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6993/storyline/basedi/io/professional/listbuilding";
                        _3_1_stored_Director_Of_ListBuilding_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7993/storyline/basedi/io/professional/listbuilding";

                        _3_1_stored_Director_Of_ListBuilding_RequestHandler.APILocationLocalNodeJS = "https://localhost:8993/storyline/basedi/io/professional/listbuilding";
                        _3_1_stored_Director_Of_ListBuilding_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9993/storyline/basedi/io/professional/listbuilding";

                        _3_1_stored_Director_Of_ListBuilding_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/listbuilding";

                        return _3_1_stored_Director_Of_ListBuilding_RequestHandler.Action(this._storedInputs);
                    }

                    //#endregion

                    //#region 4. Sell Low Ticket Offer Storylines

                    if (this._storedProcessRequestName.toUpperCase().includes("DIRECTOR_OF_SUPPLEMENTS"))
                    {
                        _4_1_stored_Director_Of_Supplements_RequestHandler = new Studio_OfferDevelopment_Supplements_Chapter_4_1_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Supplements_0.Studio_OfferDevelopment_Supplements_Chapter_4_1_Page_0_ControlNicheMaster_Handler_1_0(this._storedInputs);

                        _4_1_stored_Director_Of_Supplements_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6994/storyline/basedi/io/professional/supplements";
                        _4_1_stored_Director_Of_Supplements_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7994/storyline/basedi/io/professional/supplements";

                        _4_1_stored_Director_Of_Supplements_RequestHandler.APILocationLocalNodeJS = "https://localhost:8994/storyline/basedi/io/professional/supplements";
                        _4_1_stored_Director_Of_Supplements_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9994/storyline/basedi/io/professional/supplements";

                        _4_1_stored_Director_Of_Supplements_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/supplements";

                        return _4_1_stored_Director_Of_Supplements_RequestHandler.Action(this._storedInputs);
                    }

                    //#endregion

                    //#region 5. Sell High Ticket Offer Storylines

                    if (this._storedProcessRequestName.toUpperCase().includes("DIRECTOR_OF_COACHING"))
                    {
                        _5_1_stored_Director_Of_Coaching_RequestHandler = new Studio_OfferDevelopment_Coaching_Chapter_5_1_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Coaching_0.Studio_OfferDevelopment_Coaching_Chapter_5_1_Page_0_ControlNicheMaster_Handler_1_0(this._storedInputs);

                        _5_1_stored_Director_Of_Coaching_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6995/storyline/basedi/io/professional/coaching";
                        _5_1_stored_Director_Of_Coaching_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7995/storyline/basedi/io/professional/coaching";

                        _5_1_stored_Director_Of_Coaching_RequestHandler.APILocationLocalNodeJS = "https://localhost:8995/storyline/basedi/io/professional/coaching";
                        _5_1_stored_Director_Of_Coaching_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9995/storyline/basedi/io/professional/coaching";

                        _5_1_stored_Director_Of_Coaching_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/coaching";

                        return _5_1_stored_Director_Of_Coaching_RequestHandler.Action(this._storedInputs);
                    }

                    if (this._storedProcessRequestName.toUpperCase().includes("DIRECTOR_OF_CONSULTING"))
                    {
                        _5_2_stored_Director_Of_Consulting_RequestHandler = new Studio_OfferDevelopment_Consulting_Chapter_5_2_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Consulting_0.Studio_OfferDevelopment_Consulting_Chapter_5_2_Page_0_ControlNicheMaster_Handler_1_0(this._storedInputs);

                        _5_2_stored_Director_Of_Consulting_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6995/storyline/basedi/io/professional/consulting";
                        _5_2_stored_Director_Of_Consulting_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7995/storyline/basedi/io/professional/consulting";

                        _5_2_stored_Director_Of_Consulting_RequestHandler.APILocationLocalNodeJS = "https://localhost:8995/storyline/basedi/io/professional/consulting";
                        _5_2_stored_Director_Of_Consulting_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9995/storyline/basedi/io/professional/consulting";

                        _5_2_stored_Director_Of_Consulting_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/consulting";

                        return _5_2_stored_Director_Of_Consulting_RequestHandler.Action(this._storedInputs);
                    }

                    if (this._storedProcessRequestName.toUpperCase().includes("DIRECTOR_OF_PERSONALTRAINING"))
                    {
                        _5_3_stored_Director_Of_PersonalTraining_RequestHandler = new Studio_OfferDevelopment_PersonalTraining_Chapter_5_3_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Personal_Training_0.Studio_OfferDevelopment_PersonalTraining_Chapter_5_3_Page_0_ControlNicheMaster_Handler_1_0(this._storedInputs);

                        _5_3_stored_Director_Of_PersonalTraining_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6995/storyline/basedi/io/professional/personaltraining";
                        _5_3_stored_Director_Of_PersonalTraining_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7995/storyline/basedi/io/professional/personaltraining";

                        _5_3_stored_Director_Of_PersonalTraining_RequestHandler.APILocationLocalNodeJS = "https://localhost:8995/storyline/basedi/io/professional/personaltraining";
                        _5_3_stored_Director_Of_PersonalTraining_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9995/storyline/basedi/io/professional/personaltraining";

                        _5_3_stored_Director_Of_PersonalTraining_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/personaltraining";

                        return _5_3_stored_Director_Of_PersonalTraining_RequestHandler.Action(this._storedInputs);
                    }

                    //#endregion

                    //#region 6. Sell Subscription Offer Storylines

                    if (this._storedProcessRequestName.toUpperCase().includes("DIRECTOR_OF_SOFTWARE"))
                    {
                        _6_1_stored_Director_Of_Software_RequestHandler = new Studio_OfferDevelopment_Software_Chapter_6_1_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Software_0.Studio_OfferDevelopment_Software_Chapter_6_1_Page_0_ControlNicheMaster_Handler_1_0(this._storedInputs);

                        _6_1_stored_Director_Of_Software_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6996/storyline/basedi/io/professional/software";
                        _6_1_stored_Director_Of_Software_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7996/storyline/basedi/io/professional/software";

                        _6_1_stored_Director_Of_Software_RequestHandler.APILocationLocalNodeJS = "https://localhost:8996/storyline/basedi/io/professional/software";
                        _6_1_stored_Director_Of_Software_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9996/storyline/basedi/io/professional/software";

                        _6_1_stored_Director_Of_Software_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/software";

                        return _6_1_stored_Director_Of_Software_RequestHandler.Action(this._storedInputs);
                    }

                    //#endregion

                    //#region 7. Sell Commission Offer Storylines

                    if (this._storedProcessRequestName.toUpperCase().includes("DIRECTOR_OF_AFFILIATEREVENUE"))
                    {
                        _7_1_stored_Director_Of_AffiliateRevenue_RequestHandler = new Studio_OfferDevelopment_AffiliateRevenue_Chapter_7_1_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Affiliate_Revenue_0.Studio_OfferDevelopment_AffiliateRevenue_Chapter_7_1_Page_0_ControlNicheMaster_Handler_1_0(this._storedInputs);

                        _7_1_stored_Director_Of_AffiliateRevenue_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6997/storyline/basedi/io/professional/affiliaterevenue";
                        _7_1_stored_Director_Of_AffiliateRevenue_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7997/storyline/basedi/io/professional/affiliaterevenue";

                        _7_1_stored_Director_Of_AffiliateRevenue_RequestHandler.APILocationLocalNodeJS = "https://localhost:8997/storyline/basedi/io/professional/affiliaterevenue";
                        _7_1_stored_Director_Of_AffiliateRevenue_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9997/storyline/basedi/io/professional/affiliaterevenue";

                        _7_1_stored_Director_Of_AffiliateRevenue_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/affiliaterevenue";

                        return _7_1_stored_Director_Of_AffiliateRevenue_RequestHandler.Action(this._storedInputs);
                    }

                    //#endregion

                    //#region 8. Account Loss or Gain Storylines

                    if (this._storedProcessRequestName.toUpperCase().includes("DIRECTOR_OF_ACCOUNTING"))
                    {
                        _8_1_stored_Director_Of_Accounting_RequestHandler = new Studio_Strategy_Accounting_Chapter_8_1_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Accounting_0.Studio_Strategy_Accounting_Chapter_8_1_Page_0_ControlNicheMaster_Handler_1_0(this._storedInputs);

                        _8_1_stored_Director_Of_Accounting_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6998/storyline/basedi/io/professional/accounting";
                        _8_1_stored_Director_Of_Accounting_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7998/storyline/basedi/io/professional/accounting";

                        _8_1_stored_Director_Of_Accounting_RequestHandler.APILocationLocalNodeJS = "https://localhost:8998/storyline/basedi/io/professional/accounting";
                        _8_1_stored_Director_Of_Accounting_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9998/storyline/basedi/io/professional/accounting";

                        _8_1_stored_Director_Of_Accounting_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/accounting";

                        return _8_1_stored_Director_Of_Accounting_RequestHandler.Action(this._storedInputs);
                    }

                    //#endregion

                    //#region 9. Customer Service Storylines

                    if (this._storedProcessRequestName.toUpperCase().includes("DIRECTOR_OF_CUSTOMERSERVICE"))
                    {
                        _9_1_stored_Director_Of_CustomerService_RequestHandler = new Studio_Strategy_CustomerService_Chapter_9_1_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Customer_Service_0.Studio_Strategy_CustomerService_Chapter_9_1_Page_0_ControlNicheMaster_Handler_1_0(this._storedInputs);

                        _9_1_stored_Director_Of_CustomerService_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6999/storyline/basedi/io/professional/customerservice";
                        _9_1_stored_Director_Of_CustomerService_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7999/storyline/basedi/io/professional/customerservice";

                        _9_1_stored_Director_Of_CustomerService_RequestHandler.APILocationLocalNodeJS = "https://localhost:8999/storyline/basedi/io/professional/customerservice";
                        _9_1_stored_Director_Of_CustomerService_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9999/storyline/basedi/io/professional/customerservice";

                        _9_1_stored_Director_Of_CustomerService_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/customerservice";

                        return _9_1_stored_Director_Of_CustomerService_RequestHandler.Action(this._storedInputs);
                    }

                    //#endregion

                    //#region 10. Perform Manual Task Storylines

                    if (this._storedProcessRequestName.toUpperCase().includes("DIRECTOR_OF_PRODUCTIVITY"))
                    {
                        _10_1_stored_Director_Of_Productivity_RequestHandler = new Studio_Strategy_Productivity_Chapter_10_1_Page_0_ControlNicheMaster_Handler.BaseDI.Professional.Story.Productivity_0.Studio_Strategy_Productivity_Chapter_10_1_Page_0_ControlNicheMaster_Handler(this._storedInputs);

                        _10_1_stored_Director_Of_Productivity_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6910/storyline/basedi/io/professional/productivity";
                        _10_1_stored_Director_Of_Productivity_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7910/storyline/basedi/io/professional/productivity";

                        _10_1_stored_Director_Of_Productivity_RequestHandler.APILocationLocalNodeJS = "https://localhost:8910/storyline/basedi/io/professional/productivity";
                        _10_1_stored_Director_Of_Productivity_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9910/storyline/basedi/io/professional/productivity";

                        _10_1_stored_Director_Of_Productivity_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/productivity";

                        return _10_1_stored_Director_Of_Productivity_RequestHandler.Action(this._storedInputs);
                    }

                    //#endregion

                    //#region 11. Automate Manual Task Storylines

                    if (this._storedProcessRequestName.toUpperCase().includes("DIRECTOR_OF_RISKMANAGEMENT"))
                    {
                        _11_1_stored_Director_Of_RiskManagement_RequestHandler = new Studio_Strategy_RiskManagement_Chapter_11_1_Page_0_ControlNicheMaster_Handler.BaseDI.Professional.Story.Risk_Management_0.Studio_Strategy_RiskManagement_Chapter_11_1_Page_0_ControlNicheMaster_Handler(this._storedInputs);

                        _11_1_stored_Director_Of_RiskManagement_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6911/storyline/basedi/io/professional/riskmanagement";
                        _11_1_stored_Director_Of_RiskManagement_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7911/storyline/basedi/io/professional/riskmanagement";

                        _11_1_stored_Director_Of_RiskManagement_RequestHandler.APILocationLocalNodeJS = "https://localhost:8911/storyline/basedi/io/professional/riskmanagement";
                        _11_1_stored_Director_Of_RiskManagement_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9911/storyline/basedi/io/professional/riskmanagement";

                        _11_1_stored_Director_Of_RiskManagement_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/riskmanagement";

                        return _11_1_stored_Director_Of_RiskManagement_RequestHandler.Action(this._storedInputs);
                    }

                    //#endregion

                    //#region 12. Other Storylines

                    if (this._storedProcessRequestName.toUpperCase().includes("DIRECTOR_OF_CAREERSEMPLOYMENT"))
                    {
                        _12_1_stored_Director_Of_Careers_RequestHandler = new Studio_Strategy_CareersEmployment_Chapter_12_1_Page_0_ControlNicheMaster_Handler.BaseDI.Professional.Story.Careers_Employment_0.Studio_Strategy_CareersEmployment_Chapter_12_1_Page_0_ControlNicheMaster_Handler(this._storedInputs);

                        _12_1_stored_Director_Of_Careers_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6912/storyline/basedi/io/professional/careersemployment";
                        _12_1_stored_Director_Of_Careers_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7912/storyline/basedi/io/professional/careersemployment";

                        _12_1_stored_Director_Of_Careers_RequestHandler.APILocationLocalNodeJS = "https://localhost:8912/storyline/basedi/io/professional/careersemployment";
                        _12_1_stored_Director_Of_Careers_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9912/storyline/basedi/io/professional/careersemployment";

                        _12_1_stored_Director_Of_Careers_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/careersemployment";

                        return _12_1_stored_Director_Of_Careers_RequestHandler.Action(this._storedInputs);
                    }

                    if (this._storedProcessRequestName.toUpperCase().includes("DIRECTOR_OF_WEBDEVELOPMENT"))
                    {
                        _12_3_stored_Director_Of_WebDevelopment_RequestHandler = new Studio_Automation_WebDevelopment_Chapter_12_3_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Web_Development_0.Studio_Automation_WebDevelopment_Chapter_12_3_Page_0_ControlNicheMaster_Handler_1_0(this._storedInputs);

                        _12_3_stored_Director_Of_WebDevelopment_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6912/storyline/basedi/io/professional/webdevelopment";
                        _12_3_stored_Director_Of_WebDevelopment_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7912/storyline/basedi/io/professional/webdevelopment";

                        _12_3_stored_Director_Of_WebDevelopment_RequestHandler.APILocationLocalNodeJS = "https://localhost:8912/storyline/basedi/io/professional/webdevelopment";
                        _12_3_stored_Director_Of_WebDevelopment_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9912/storyline/basedi/io/professional/webdevelopment";

                        _12_3_stored_Director_Of_WebDevelopment_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/webdevelopment";

                        return _12_3_stored_Director_Of_WebDevelopment_RequestHandler.Action(this._storedInputs);
                    }

                    if (this._storedProcessRequestName.toUpperCase().includes("DIRECTOR_OF_CMS"))
                    {
                        _12_4_stored_Director_Of_CMS_RequestHandler = new Studio_AudienceTesting_CMS_Chapter_12_4_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.CMS_0.Studio_AudienceTesting_CMS_Chapter_12_4_Page_0_ControlNicheMaster_Handler_1_0(this._storedInputs);

                        _12_4_stored_Director_Of_CMS_RequestHandler.APILocationLocalNodeJS = "https://localhost:6912/storyline/basedi/io/professional/cms";
                        _12_4_stored_Director_Of_CMS_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:7912/storyline/basedi/io/professional/cms";

                        _12_4_stored_Director_Of_CMS_RequestHandler.APILocationLocalDotNetCore = "https://localhost:8912/storyline/basedi/io/professional/cms";
                        _12_4_stored_Director_Of_CMS_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:9912/storyline/basedi/io/professional/cms";

                        _12_4_stored_Director_Of_CMS_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/cms";

                        return _12_4_stored_Director_Of_CMS_RequestHandler.Action(this._storedInputs);
                    }

                    if (this._storedProcessRequestName.toUpperCase().includes("DIRECTOR_OF_SECURITY"))
                    {
                        _12_5_stored_Director_Of_Security_RequestHandler = new Studio_Automation_Security_Chapter_12_4_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Security_0.Studio_Automation_Security_Chapter_12_4_Page_0_ControlNicheMaster_Handler_1_0(this._storedInputs);

                        _12_5_stored_Director_Of_Security_RequestHandler.APILocationLocalDotNetCore = "https://localhost:6912/storyline/basedi/io/professional/security";
                        _12_5_stored_Director_Of_Security_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:7912/storyline/basedi/io/professional/security";

                        _12_5_stored_Director_Of_Security_RequestHandler.APILocationLocalNodeJS = "https://localhost:8912/storyline/basedi/io/professional/security";
                        _12_5_stored_Director_Of_Security_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9912/storyline/basedi/io/professional/security";

                        _12_5_stored_Director_Of_Security_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/security";

                        return _12_5_stored_Director_Of_Security_RequestHandler.Action(this._storedInputs);
                    }

                    //#endregion
                }

                //#endregion
            }
            catch
            {
                //#region EDGE CASE - USE an exception message

                throw new Error("No DIRECTOR request handler found for " + this._storedProcessRequestName.toUpperCase());

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

        private _storedProcessRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        private _storedInputRequestName: string = "";
        private _storedInputRequestNameDataCacheKey: string = "";

        //DATASETS
        private _storedProcessRequestDataStorylineDetails: Object;
        private _storedProcessRequestDataStorylineDetails_Parameters: Object;

        //MISC
        private _storedProcessRequestExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //PLUMBING
        private _storedProcessRequestCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _storedProcessRequestCentralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _storedProcessRequestCentralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        private _storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = null;

        private _storedProcessRequestName: string = "";
        private _storedProcessRequestByName: string;

        //#endregion

        //#region 2. Ready

        constructor(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) //parameterProcessRequestTracker: any, parameterProcessRequestDataStorylineDetails: Object, parameterProcessRequestDataStorylineDetails_Parameters: Object, parameterProcessRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0, parameterProcessRequestExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0 = null, parameterProcessRequestByName: string = "", parameterInputRequestName: string = "", parameterInputRequestNameDataCacheKey: string = ""
         {
             super()

            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables


            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input action name

            let storedInputRequestActionName: string = this._storedProcessRequestTracker["storedInputRequestActionName"] as string;

            //#endregion

            //#region MEMORIZE input request details

            this._storedInputRequestName = parameterInputs.Parameters.getValue("parameterInputRequestName");
            this._storedInputRequestNameDataCacheKey = parameterInputs.Parameters.getValue("parameterInputRequestNameDataCacheKey");

            this._storedInputs = parameterInputs;

            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process request tracker

            this._storedProcessRequestTracker = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE process request settings

            this._storedProcessRequestSettings = this._storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE process centralized handlers

            if (this._storedProcessRequestCentralizedDisturber == null) {
                this._storedProcessRequestCentralizedDisturber = new Implement_DesignPattern_Factory_Disturber_12_2_1_0(this._storedInputs);

                parameterInputs.Parameters.setValue("parameterProcessRequestCentralizedDisturber", this._storedProcessRequestCentralizedDisturber);
            }

            if (this._storedProcessRequestCentralizedSensor == null) {
                this._storedProcessRequestCentralizedSensor = new Implement_DesignPattern_Factory_Sensor_12_2_1_0(this._storedInputs);

                parameterInputs.Parameters.setValue("parameterProcessRequestCentralizedSensor", this._storedProcessRequestCentralizedSensor);
            }

            if (this._storedProcessRequestCentralizedStorer == null) {
                this._storedProcessRequestCentralizedStorer = new Implement_DesignPattern_Factory_Storer_12_2_1_0(this._storedInputs);

                parameterInputs.Parameters.setValue("parameterProcessRequestCentralizedStorer", this._storedProcessRequestCentralizedStorer);
            }

            //#endregion

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#region MEMORIZE process extra data

            this._storedProcessRequestExtraData = parameterInputs.Parameters.getValue("parameterProcessRequestExtraData");

            //#endregion

            //#region MEMORIZE process request details

            this._storedProcessRequestHandler = parameterInputs.Parameters.getValue("parameterProcessRequestHandler");

            this._storedProcessRequestByName = parameterInputs.Parameters.getValue("parameterProcessRequestByName");

            //#endregion

            //#region MEMORIZE process request tracker

            this._storedProcessRequestTracker = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE process request settings

            this._storedProcessRequestSettings = this._storedProcessRequestTracker.getValue("storedProcessRequestSettings");

            //#endregion

            //#region MEMORIZE storyline details

            this._storedProcessRequestDataStorylineDetails = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            this._storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails_Parameters");

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxx


            //#endregion

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

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables



            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process xxx xxx



            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE process xxx xxxx


            //#endregion

            //#endregion

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

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables

            let _2_3_stored_Director_Of_SocialMedia_RequestHandler: Studio_AudienceTesting_SocialMedia_Chapter_2_3_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Social_Media_0.Studio_AudienceTesting_SocialMedia_Chapter_2_3_Page_0_ControlNicheMaster_Handler_1_0 = null;

            let _12_3_stored_Director_Of_WebDevelopment_RequestHandler: Studio_Automation_WebDevelopment_Chapter_12_3_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Web_Development_0.Studio_Automation_WebDevelopment_Chapter_12_3_Page_0_ControlNicheMaster_Handler_1_0 = null;

            //#endregion

            //#region DEFINE process variables

            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input action name

            let storedInputRequestActionName: string = this._storedProcessRequestTracker["storedInputRequestActionName"] as string;

            //#endregion

            //#region MEMORIZE input request details

            this._storedInputRequestName = this._storedInputs.Parameters.getValue("parameterInputRequestName");
            this._storedInputRequestNameDataCacheKey = this._storedInputs.Parameters.getValue("parameterInputRequestNameDataCacheKey");

            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process request tracker

            this._storedProcessRequestTracker = this._storedInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE process request settings

            this._storedProcessRequestSettings = this._storedProcessRequestTracker.getValue("storedProcessRequestSettings");

            //#endregion

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion          

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxx


            //#endregion

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

                if (this._storedProcessRequestName.toUpperCase().includes("EXPERIENCE_THE_MOVEMENT_TOFACEBOOKPAGE_DATATRANSFER"))
                {
                    _2_3_stored_Director_Of_SocialMedia_RequestHandler = new Studio_AudienceTesting_SocialMedia_Chapter_2_3_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Social_Media_0.Studio_AudienceTesting_SocialMedia_Chapter_2_3_Page_0_ControlNicheMaster_Handler_1_0(this._storedInputs);

                    _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:8992/storyline/basedi/io/professional/socialmedia";
                    _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:9992/storyline/basedi/io/professional/socialmedia";
                    _2_3_stored_Director_Of_SocialMedia_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/socialmedia";

                    return _2_3_stored_Director_Of_SocialMedia_RequestHandler.Action(this._storedInputs);
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

                if (this._storedProcessRequestName.toUpperCase().includes("EXPERIENCE_THE_HEAR_OFTHEAPISERVER_MESSAGE"))
                {
                    //#region 12. Other

                    _12_3_stored_Director_Of_WebDevelopment_RequestHandler = new Studio_Automation_WebDevelopment_Chapter_12_3_Page_0_ControlNicheMaster_Handler_1_0.BaseDI.Professional.Story.Web_Development_0.Studio_Automation_WebDevelopment_Chapter_12_3_Page_0_ControlNicheMaster_Handler_1_0(this._storedInputs);

                    _12_3_stored_Director_Of_WebDevelopment_RequestHandler.APILocationLocalNodeJS_SSL = "https://localhost:8912/storyline/basedi/io/professional/webdevelopment";
                    _12_3_stored_Director_Of_WebDevelopment_RequestHandler.APILocationLocalDotNetCore_SSL = "https://localhost:9912/storyline/basedi/io/professional/webdevelopment";
                    _12_3_stored_Director_Of_WebDevelopment_RequestHandler.APILocationRemote = "https://storyline.BaseDI.Professional.io/webdevelopment";

                    return _12_3_stored_Director_Of_WebDevelopment_RequestHandler.Action(this._storedInputs);

                    //#endregion
                }

                //#endregion

                //#endregion
            }
            catch
            {
                //#region EDGE CASE - USE an exception message

                throw new Error("No EXPERIENCE request handler found for " + this._storedProcessRequestName.toUpperCase());

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

        private _storedInputRequestName: string = "";
        private _storedInputRequestNameDataCacheKey: string = "";

        private _storedProcessRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        //DATASETS
        private _storedProcessRequestDataStorylineDetails: Object;
        private _storedProcessRequestDataStorylineDetails_Parameters: Object;

        //MISC
        private _storedProcessRequestExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //PLUMBING
        private _storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = null;

        private _storedProcessRequestName: string = "";
        private _storedProcessRequestByName: string = "";

        //#endregion

        //#region 2. Ready

        constructor(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) //parameterProcessRequestTracker: any, parameterProcessRequestDataStorylineDetails: Object, parameterProcessRequestDataStorylineDetails_Parameters: Object, parameterProcessRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0, parameterProcessRequestExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0 = null, parameterProcessRequestByName: string = "", parameterInputRequestName: string = "", parameterInputRequestNameDataCacheKey: string = ""
        {
            super();

            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables


            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input action name

            let storedInputRequestActionName: string = this._storedProcessRequestTracker["storedInputRequestActionName"] as string;

            //#endregion

            //#region MEMORIZE input request details

            this._storedInputRequestName = parameterInputs.Parameters.getValue("parameterInputRequestName");
            this._storedInputRequestNameDataCacheKey = parameterInputs.Parameters.getValue("parameterInputRequestNameDataCacheKey");

            this._storedInputs = parameterInputs;

            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process request tracker

            this._storedProcessRequestTracker = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE process request settings

            this._storedProcessRequestSettings = this._storedProcessRequestTracker.getValue("storedProcessRequestSettings");

            //#endregion

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#region MEMORIZE process extra data

            this._storedProcessRequestExtraData = parameterInputs.Parameters.getValue("parameterProcessRequestExtraData");

            //#endregion

            //#region MEMORIZE process request details

            this._storedProcessRequestHandler = parameterInputs.Parameters.getValue("parameterProcessRequestHandler");

            this._storedProcessRequestByName = parameterInputs.Parameters.getValue("parameterProcessRequestByName");

            //#endregion

            //#region MEMORIZE process request tracker

            this._storedProcessRequestTracker = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE process request settings

            this._storedProcessRequestSettings = this._storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE storyline details

            this._storedProcessRequestDataStorylineDetails = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            this._storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails_Parameters");

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxx


            //#endregion

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

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables



            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process xxx xxx



            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE process xxx xxxx


            //#endregion

            //#endregion

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

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables



            //#endregion

            //#region DEFINE output variables

            let storedOutputResponseData: any = null;

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input request details

            this._storedInputRequestName = "Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0";
            this._storedInputRequestNameDataCacheKey = "Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0-P1_0";

            this._storedInputs.Parameters.setValue("parameterInputRequestName", this._storedInputRequestName);
            this._storedInputs.Parameters.setValue("parameterInputRequestNameDataCacheKey", this._storedInputRequestNameDataCacheKey);

            this._storedInputs.Parameters.setValue("parameterProcessRequestByName", "");

            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE process xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try
            {
                //#region EXECUTE storage request

                //#region IDEAL CASE - USE storage handler

                storedOutputResponseData = new Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0.BaseDI.Professional.Director.Programming_1.Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0(this._storedInputs))
                    .SetupStoryline(this._storedInputs)
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

        private _storedInputRequestName: string = "";
        private _storedInputRequestNameDataCacheKey: string = "";

        private _storedProcessRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        //DATASETS
        private _storedProcessRequestDataStorylineDetails: Object;
        private _storedProcessRequestDataStorylineDetails_Parameters: Object;

        //MISC
        private _storedProcessRequestExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //PLUMBING
        private _storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = null;

        private _storedProcessRequestName: string = "";
        private _storedProcessRequestByName: string = "";

        //#endregion

        //#region 2. Ready

        constructor(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0)
        {
            super();

            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables


            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input action name

            let storedInputRequestActionName: string = this._storedProcessRequestTracker["storedInputRequestActionName"] as string;

            //#endregion

            //#region MEMORIZE input request details

            this._storedInputRequestName = parameterInputs.Parameters.getValue("parameterInputRequestName");
            this._storedInputRequestNameDataCacheKey = parameterInputs.Parameters.getValue("parameterInputRequestNameDataCacheKey");

            this._storedInputs = parameterInputs;

            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process request tracker

            this._storedProcessRequestTracker = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE process request settings

            this._storedProcessRequestSettings = this._storedProcessRequestTracker.getValue("storedProcessRequestSettings");

            //#endregion

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#region MEMORIZE process extra data

            this._storedProcessRequestExtraData = parameterInputs.Parameters.getValue("parameterProcessRequestExtraData");

            //#endregion

            //#region MEMORIZE process request details

            this._storedProcessRequestHandler = parameterInputs.Parameters.getValue("parameterProcessRequestHandler");

            this._storedProcessRequestByName = parameterInputs.Parameters.getValue("parameterProcessRequestByName");

            //#endregion

            //#region MEMORIZE process request tracker

            this._storedProcessRequestTracker = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE process request settings

            this._storedProcessRequestSettings = this._storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE storyline details

            this._storedProcessRequestDataStorylineDetails = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            this._storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails_Parameters");

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxx


            //#endregion

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

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables



            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process xxx xxx



            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE process xxx xxxx


            //#endregion

            //#endregion

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

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables



            //#endregion

            //#region DEFINE output variables

            let storedOutputResponseData: any = null;

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input request details

            this._storedInputRequestName = "Director_Of_Programming_Chapter_12_2_Page_4_DisturbanceRequest_Handler_1_0";
            this._storedInputRequestNameDataCacheKey = "Director_Of_Programming_Chapter_12_2_Page_4_DisturbanceRequest_Handler_1_0-P1_0";

            this._storedInputs.Parameters.setValue("parameterInputRequestName", this._storedInputRequestName);
            this._storedInputs.Parameters.setValue("parameterInputRequestNameDataCacheKey", this._storedInputRequestNameDataCacheKey);

            this._storedInputs.Parameters.setValue("parameterProcessRequestByName", "");

            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE process xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try
            {
                //#region EXECUTE exception request

                //#region IDEAL CASE - USE exception handler

                storedOutputResponseData = new Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0.BaseDI.Professional.Director.Programming_1.Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0(this._storedInputs))
                    .SetupStoryline(this._storedInputs)
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

        private _storedInputRequestName: string = "";
        private _storedInputRequestNameDataCacheKey: string = "";

        private _storedProcessRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        //DATASETS
        private _storedProcessRequestDataStorylineDetails: Object;
        private _storedProcessRequestDataStorylineDetails_Parameters: Object;

        //MISC
        private _storedProcessRequestExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //PLUMBING
        private _storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = null;

        private _storedProcessRequestName: string = "";
        private _storedProcessRequestByName: string = "";

        //#endregion

        //#region 2. Ready

        constructor(parameterInputs:SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0)
        {
            super();

            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables


            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input action name

            let storedInputRequestActionName: string = this._storedProcessRequestTracker["storedInputRequestActionName"] as string;

            //#endregion

            //#region MEMORIZE input request details

            this._storedInputRequestName = parameterInputs.Parameters.getValue("parameterInputRequestName");
            this._storedInputRequestNameDataCacheKey = parameterInputs.Parameters.getValue("parameterInputRequestNameDataCacheKey");

            this._storedInputs = parameterInputs;

            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process request tracker

            this._storedProcessRequestTracker = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE process request settings

            this._storedProcessRequestSettings = this._storedProcessRequestTracker.getValue("storedProcessRequestSettings");

            //#endregion

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#region MEMORIZE process extra data

            this._storedProcessRequestExtraData = parameterInputs.Parameters.getValue("parameterProcessRequestExtraData");

            //#endregion

            //#region MEMORIZE process request details

            this._storedProcessRequestHandler = parameterInputs.Parameters.getValue("parameterProcessRequestHandler");

            this._storedProcessRequestByName = parameterInputs.Parameters.getValue("parameterProcessRequestByName");

            //#endregion

            //#region MEMORIZE process request tracker

            this._storedProcessRequestTracker = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE process request settings

            this._storedProcessRequestSettings = this._storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE storyline details

            this._storedProcessRequestDataStorylineDetails = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            this._storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails_Parameters");

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxx


            //#endregion

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

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables



            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxxx


            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process xxx xxx



            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE process xxx xxxx


            //#endregion

            //#endregion

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

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables



            //#endregion

            //#region DEFINE output variables

            let storedOutputResponseData: any = null;

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input request details

            this._storedInputRequestName = "Director_Of_Programming_Chapter_12_2_Page_5_SensorRequest_Handler_1_0";
            this._storedInputRequestNameDataCacheKey = "Director_Of_Programming_Chapter_12_2_Page_5_SensorRequest_Handler_1_0-P1_0";

            this._storedInputs.Parameters.setValue("parameterInputRequestName", this._storedInputRequestName);
            this._storedInputs.Parameters.setValue("parameterInputRequestNameDataCacheKey", this._storedInputRequestNameDataCacheKey);

            this._storedInputs.Parameters.setValue("parameterProcessRequestByName", "");

            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE process xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try
            {
                //#region EXECUTE exception request

                //#region IDEAL CASE - USE exception handler

                storedOutputResponseData = new Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0.BaseDI.Professional.Director.Programming_1.Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0(this._storedInputs))
                    .SetupStoryline(this._storedInputs)
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