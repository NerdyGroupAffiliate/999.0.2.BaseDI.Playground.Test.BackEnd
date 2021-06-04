//#region Imports

//#region 3rd Party



//#endregion

//#region BaseDI

import * as aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0";
import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptPage_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptPage_12_2_1_0";
import * as aClass_Programming_ScriptRoutable_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptRoutable_12_2_1_0";

import * as Action_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/Action Poco/1/1_0/Action_12_2_1_0";
import * as ExtraData_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";
import * as SingleParmPoco_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

import * as Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0 from "../../../../../../../../0. Script/Extensions/11/Automate Manual Task/1/Risk Management/Method/0/1_0/Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0";
import * as Extension_Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/2/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0";

import * as Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/0/1_0/Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0";

import * as StrongTyped_StorylineDetails from "../../../../../../../../1. Storyline/12/Other/2/Programming/Studio/0/1_0/Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0"
import * as StrongTyped_Website from "../../../../../../../../3. Setting/9/Software/12/Other/3/Web Development/Location/0/1_0/Setting_Of_WebDevelopment_Chapter_12_3_Page_0_StoreHtmlCssScript_DataContract_1_0";

import fs from 'fs';

//#endregion

//#endregion

export namespace BaseDI.Professional.Chapter.Page.Programming_2 {
    export class Page_2_5_Process_StorySetting_12_2_1_0 extends aClass_Programming_ScriptPage_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptPage_12_2_1_0 {
        //#region 1. Assign

        //SETTINGS
        private _storedProcessRequestSettings: any;

        //CLIENT/SERVER
        private _storedProcessRequestTracker: any;

        private _storedInputRequestName: string;
        private _storedInputRequestNameDataCacheKey: string;

        private _storedProcessRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        public _storedProcessRequestServerInstance: any;
        private _storedProcessRequestServerInstanceInfo: any;

        //DATASET
        private _storedProcessRequestDataStorylineDetails: object = new Object();
        private _storedProcessRequestDataStorylineDetails_Parameters: object = new Object();

        //MISC
        private _storedProcessRequestExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0 = new ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //PLUMBING
        private _storedInputRequestActionName: string = "";
        private _storedProcessRequestRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        private _storedProcessRequestCentralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _storedProcessRequestCentralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _storedProcessRequestCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        private _storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

        private _storedProcessRequestResponseData: any = null;
        private _storedProcessRequestFileName: string = "LocalFile_Director_Of_Advertising_Chapter_1_1_Page_1_InputAdvertisement_Handler_1_0 ";
        private _storedProcessRequestName: string = "";
        private _storedProcessRequestDataRepository: IContract_Programming_Repository_12_2_1_0;
        private _storedProcessRequestByName: string;

        public StartUpCallBack;

        private _storedJSONKeyPlaceHolderName: Array<any>;

        //#endregion

        //#region 2. Ready

        constructor(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) {
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

            this._storedInputRequestActionName = parameterInputs.Parameters.getValue("parameterInputRequestActionName");

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

            this._storedProcessRequestCentralizedDisturber = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedDisturber");
            this._storedProcessRequestCentralizedSensor = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedSensor");
            this._storedProcessRequestCentralizedStorer = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedStorer");

            //#endregion

            //#region MEMORIZE process data repository

            this.Repository = parameterInputs.Parameters.getValue("parameterProcessRequestDataRepository");

            //#endregion

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#region MEMORIZE process request storyline details

            this._storedProcessRequestDataStorylineDetails = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            this._storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails_Parameters");

            //#endregion

            //#region MEMORIZE process request extra data

            this._storedProcessRequestExtraData = parameterInputs.Parameters.getValue("parameterProcessRequestExtraData") ? parameterInputs.Parameters.getValue("parameterProcessRequestExtraData") : null;

            //#endregion

            //#region MEMORIZE process request details

            this._storedProcessRequestHandler = parameterInputs.Parameters.getValue("parameterProcessRequestHandler");

            this._storedProcessRequestName = parameterInputs.Parameters.getValue("parameterProcessRequestName");

            this._storedProcessRequestByName = parameterInputs.Parameters.getValue("parameterProcessRequestName");

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


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

        public async HandleDefaults(): Promise<any> {
            //#region 1. INPUTS

            //#region VALIDATE input parameters

            const ValidateInputs = async (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<boolean> => {
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

                ///////////////////////////////

                //#region MEMORIZE control variables

                //#region MEMORIZE control xxx xxx


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
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", parameterInputs.Parameters.getValue("parameterInputRequestActionName"));

                //2. PROCESS
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "VALIDATING request inputs");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0 -> Page_2_1_Begin_Process_12_2_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Action -> ValidateInputs");

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
                    //0. CONTROLLERS

                    //1. INPUTS
                    if (!parameterInputs.Parameters.containsKey("parameterInputRequestName")) {
                        storedOutputResponseMessage += "***parameterInputRequestName*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterInputRequestFileRootPath")) {
                        storedOutputResponseMessage += "***parameterInputRequestFileRootPath*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterInputRequestFileName")) {
                        storedOutputResponseMessage += "***parameterInputRequestFileName*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterInputRequestFileType")) {
                        storedOutputResponseMessage += "***parameterInputRequestFileType*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    //2. PROCESS
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


                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestCentralizedDisturber")) {
                        storedOutputResponseMessage += "***parameterProcessRequestCentralizedDisturber*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestCentralizedSensor")) {
                        storedOutputResponseMessage += "***parameterProcessRequestCentralizedSensor*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestCentralizedStorer")) {
                        storedOutputResponseMessage += "***parameterProcessRequestCentralizedStorer*** cannot be blank or empty.\n"
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

                    if (storedProcessRequestMistakeMade) {
                        //#region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode) {
                            storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                            //0. CONTROLLERS

                            //1. INPUTS

                            //2. PROCESS
                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                            //3. OUTPUTS
                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

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

                        //0. CONTROLLERS

                        //1. INPUTS

                        //2. PROCESS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                        //3. OUTPUT
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

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
            await ValidateInputs(this._storedInputs);

            //#endregion

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables



            //#endregion

            //#region DEFINE output variables

            //#endregion

            ///////////////////////////////

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

        //#region 4. Action

        public async Action(): Promise<object>
        {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables

            let storedOutputResponseData: any = {};

            let storedOutputResponseDataCached: any = null;

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

            let storedInputRequestActionName: string = this._storedInputRequestActionName;

            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED

            //0. CONTROLLERS

            //1. INPUTS
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedInputRequestActionName);

            //2. PROCESS
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "RETRIEVING cached dataset");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0 -> Page_2_5_Process_StorySetting_12_2_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Action");

            //3. OUTPUTS

            //#endregion

            //#region MEMORIZE process handler details

            if (this.Repository == undefined || this.Repository == null)
                this.Repository = this._storedInputs.Parameters.getValue("parameterProcessRequestDataRepository");

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE get dataset

            try 
            {
                //#region IDEAL CASE - USE baseDI converter

                if (storedInputRequestActionName.toUpperCase() == Action_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.Action_12_2_1_0._12_3_WEB_DEVELOPMENT_Server_Process_HtmlToJsonConversion_Request_1_0.toUpperCase()) {
                    storedOutputResponseData = await this.Step_X_X_Framework_Convert_HtmlToJson_1_0();
                }

                //#endregion
            }
            catch (storedProcessRequestMistake) {
                //#region EDGE CASE - USE developer logger

                if (storedProcessRequestDeveloperMode) {
                    this._storedProcessRequestTracker["storedProcessRequestStepNumber"] = this._storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                    //0. CONTROLLERS

                    //1. INPUTS

                    //2. PROCESS
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED cache retrieval");
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", this._storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                    Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                }

                //#endregion

                //#region EDGE CASE - USE exception handler

                throw storedProcessRequestMistake;

                //#endregion
            }

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            return storedOutputResponseData;

            //#endregion

            //#endregion

            //#endregion
        }

        private async Step_X_X_Framework_Convert_HtmlToJson_1_0(): Promise<any>
        {
            //#region 1. INPUTS

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables

            let storedInputs:SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = null;

            //#endregion

            //#region DEFINE process variables

            let storedProcessRequestCssJsonItemKey: string = null;

            let storedProcessRequestCssDetails: StrongTyped_Website.BaseDI.Professional.BackEnd.Setting.Location.Web_Development.SearchKey_HTMLSEODetails_SetImplementer_ProductCreation_SEO_SearchEngine;
           
            let storedProcessRequestCssItem: StrongTyped_Website.BaseDI.Professional.BackEnd.Setting.Location.Web_Development.CssStyleFile;
            let storedProcessRequestCssItemFileName: string = "";
            let storedProcessRequestCssItemSupportedProperties: string[] = [];
            

            let storedProcessRequestCssItemUsedPropertyMediaQueryChildrenKey: string = "";
            let storedProcessRequestCssItemUsedPropertyItemList: StrongTyped_Website.BaseDI.Professional.BackEnd.Setting.Location.Web_Development.CssProperty[] = [];
            
            let storedProcessRequestCssItemUsedPropertyKey: string = "";
            let storedProcessRequestCssItemUsedPropertyValue: any = "";
            let storedProcessRequestCssItemUsedPropertyValueItem: any = "";
            let storedProcessRequestCssItemUsedProperty: StrongTyped_Website.BaseDI.Professional.BackEnd.Setting.Location.Web_Development.CssStyleFileUseProperty = null;
            let storedProcessRequestCssItemUsedPropertyMediaQuery: StrongTyped_Website.BaseDI.Professional.BackEnd.Setting.Location.Web_Development.CssMediaQuery = null;
            let storedProcessRequestCssItemUsedPropertyMediaQueryChildren: StrongTyped_Website.BaseDI.Professional.BackEnd.Setting.Location.Web_Development.CssMediaQuery = null;
            let storedProcessRequestCssItemUsedPropertyMediaQueryChildrenList: StrongTyped_Website.BaseDI.Professional.BackEnd.Setting.Location.Web_Development.CssMediaQuery[] = [];
            let storedProcessRequestCssItemUsedPropertyMediaQueryListChildren: StrongTyped_Website.BaseDI.Professional.BackEnd.Setting.Location.Web_Development.CssProperty[];
            let storedProcessRequestCssItemUsedPropertyMediaQueryList: StrongTyped_Website.BaseDI.Professional.BackEnd.Setting.Location.Web_Development.CssProperty[] = [];
            let storedProcessRequestCssItemUsedPropertyMediaQueryResolutionList: StrongTyped_Website.BaseDI.Professional.BackEnd.Setting.Location.Web_Development.CssMediaQuery[] = [];
            let storedProcessRequestCssItemUsedPropertyList: StrongTyped_Website.BaseDI.Professional.BackEnd.Setting.Location.Web_Development.CssStyleFileUseProperty[] = [];

            let storedProcessRequestCssMediaQueryAttributeParentKeyItem: string = "";

            let storedProcessRequestCssItemMediaQueryItem: any = "";
            let storedProcessRequestCssItemMediaQueryAttributes: any = "";
            let storedProcessRequestCssItemMediaQueryChildren: any = "";
            let storedProcessRequestCssItemMediaQueryValid: boolean = false;
            let storedProcessRequestCssItemNoneMediaQueryKey: string = "";
            let storedProcessRequestCssItemMediaQuery: any = null;
            let storedProcessRequestCssItemIsMediaQuery: boolean = false;
            let storedProcessRequestCssItemMediaQueryParentBucketList: any[] = [];
            let storedProcessRequestCssItemMediaQueryParentBucketItem: Object = {};
            let storedProcessRequestCssItemMediaQueryChildBucketList: any[] = [];
            let storedProcessRequestCssItemMediaQueryChildBucketItem: Object = {};

            let storedProcessRequestCssItem_0: any = {};
            
            let storedProcessRequestCssItem_0_MediaQuery: any = {};
            let storedProcessRequestCssItem_0_MediaQuriesKeys: any = {};

            let storedProcessRequestCssItem_0_NoneMediaQuery: any = {};
            let storedProcessRequestCssItem_0_NoneMediaQuriesKeys: any = {};            

            let storedProcessRequestCssAlignments_1: any = {};
            
            let storedProcessRequestCssAlignments_1_MediaQuery: any = {};
            let storedProcessRequestCssAlignments_1_MediaQuriesKeys: any = {};

            let storedProcessRequestCssAlignments_1_NoneMediaQuery: any = {};
            let storedProcessRequestCssAlignments_1_NoneMediaQuriesKeys: any = {};

            let storedProcessRequestCssBackgrounds_2: any = {};
            let storedProcessRequestCssBackgrounds_2_MediaQuery: any = {};
            let storedProcessRequestCssBackgrounds_2_MediaQuriesKeys: any = {};

            let storedProcessRequestCssBackgrounds_2_NoneMediaQuery: any = {};
            let storedProcessRequestCssBackgrounds_2_NoneMediaQuriesKeys: any = {};

            let storedProcessRequestCssBorders_3: any = {};
            let storedProcessRequestCssBorders_3_MediaQuery: any = {};
            let storedProcessRequestCssBorders_3_MediaQuriesKeys: any = {};

            let storedProcessRequestCssBorders_3_NoneMediaQuery: any = {};
            let storedProcessRequestCssBorders_3_NoneMediaQuriesKeys: any = {};

            let storedProcessRequestCssColors_4: any = {};
            let storedProcessRequestCssColors_4_MediaQuery: any = {};
            let storedProcessRequestCssColors_4_MediaQuriesKeys: any = {};

            let storedProcessRequestCssColors_4_NoneMediaQuery: any = {};
            let storedProcessRequestCssColors_4_NoneMediaQuriesKeys: any = {};

            let storedProcessRequestCssEffects_5: any = {};
            let storedProcessRequestCssEffects_5_MediaQuery: any = {};
            let storedProcessRequestCssEffects_5_MediaQuriesKeys: any = {};

            let storedProcessRequestCssEffects_5_NoneMediaQuery: any = {};
            let storedProcessRequestCssEffects_5_NoneMediaQuriesKeys: any = {};

            let storedProcessRequestCssFlow_6: any = {};
            let storedProcessRequestCssFlow_6_MediaQuery: any = {};
            let storedProcessRequestCssFlow_6_MediaQuriesKeys: any = {};

            let storedProcessRequestCssFlow_6_NoneMediaQuery: any = {};
            let storedProcessRequestCssFlow_6_NoneMediaQuriesKeys: any = {};

            let storedProcessRequestCssLists_7: any = {};
            let storedProcessRequestCssLists_7_MediaQuery: any = {};
            let storedProcessRequestCssLists_7_MediaQuriesKeys: any = {};

            let storedProcessRequestCssLists_7_NoneMediaQuery: any = {};
            let storedProcessRequestCssLists_7_NoneMediaQuriesKeys: any = {};

            let storedProcessRequestCssMargins_8: any = {};
            let storedProcessRequestCssMargins_8_MediaQuery: any = {};
            let storedProcessRequestCssMargins_8_MediaQuriesKeys: any = {};

            let storedProcessRequestCssMargins_8_NoneMediaQuery: any = {};
            let storedProcessRequestCssMargins_8_NoneMediaQuriesKeys: any = {};

            let storedProcessRequestCssMisc_9: any = {};
            let storedProcessRequestCssMisc_9_MediaQuery: any = {};
            let storedProcessRequestCssMisc_9_MediaQuriesKeys: any = {};

            let storedProcessRequestCssMisc_9_NoneMediaQuery: any = {};
            let storedProcessRequestCssMisc_9_NoneMediaQuriesKeys: any = {};

            let storedProcessRequestCssPadding_10: any = {};
            let storedProcessRequestCssPadding_10_MediaQuery: any = {};
            let storedProcessRequestCssPadding_10_MediaQuriesKeys: any = {};

            let storedProcessRequestCssPadding_10_NoneMediaQuery: any = {};
            let storedProcessRequestCssPadding_10_NoneMediaQuriesKeys: any = {};

            let storedProcessRequestCssSizes_11: any = {};
            let storedProcessRequestCssSizes_11_MediaQuery: any = {};
            let storedProcessRequestCssSizes_11_MediaQuriesKeys: any = {};

            let storedProcessRequestCssSizes_11_NoneMediaQuery: any = {};
            let storedProcessRequestCssSizes_11_NoneMediaQuriesKeys: any = {};

            let storedProcessRequestCssTables_12: any = {};
            let storedProcessRequestCssTables_12_MediaQuery: any = {};
            let storedProcessRequestCssTables_12_MediaQuriesKeys: any = {};

            let storedProcessRequestCssTables_12_NoneMediaQuery: any = {};
            let storedProcessRequestCssTables_12_NoneMediaQuriesKeys: any = {};

            let storedProcessRequestCssText_13: any = {};
            let storedProcessRequestCssText_13_MediaQuery: any = {};
            let storedProcessRequestCssText_13_MediaQuriesKeys: any = {};

            let storedProcessRequestCssText_13_NoneMediaQuery: any = {};
            let storedProcessRequestCssText_13_NoneMediaQuriesKeys: any = {};

            let storedProcessRequestDataStorylineDetails: StrongTyped_StorylineDetails.BaseDI.Professional.Story.Programming_0.StorylineDetails_Instructions;            
            let storedProcessRequestHtmlBodyBucket: any = null;
            let storedProcessRequestHtmlBodyCssFileListBucket: Array<string> = [];

            let storedProcessRequestHtmlHeadBucket: any = null;
            let storedProcessRequestHtmlHeadCssFileListBucket: Array<string> = [];

            let storedProcessRequestHtmlNode: any = null;
            let storedProcessRequestHtmlNodeList: any = null;

            let storedProcessRequestResponseData: any = null;

            //#endregion

            //#region DEFINE output variables

            let storedOutputResponseData: any = null;

            let storedOutputResponseDataCached: any = null;

            //#endregion

            ///////////////////////////////////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input action name

            let storedInputRequestActionName: string = this._storedInputRequestActionName;

            //#endregion

            //#region MEMORIZE input file details

            let storedInputRequestFileRootPath: string = this._storedInputs.Parameters.getValue("parameterInputRequestFileRootPath");
            let storedInputRequestFileName: string = this._storedInputs.Parameters.getValue("parameterInputRequestFileName");
            let storedInputRequestFileType: string = this._storedInputs.Parameters.getValue("parameterInputRequestFileType");

            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED

            //0. CONTROLLERS

            //1. INPUTS
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedInputRequestActionName);

            //2. PROCESS
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "RETRIEVING cached dataset");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0 -> Page_2_5_Process_StorySetting_12_2_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Action -> Step_X_X_Framework_Convert_HtmlToJson_1_0");

            //3. OUTPUTS

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE convert html to json

            try
            {
                //#region IDEAL CASE - USE baseDI converter

                //#region A. CONVERT html file content to json object

                try 
                {
                    const ExecuteConversionRequest = async() => {
                        storedProcessRequestResponseData = await Promise.resolve(Extension_Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0.BaseDI.Professional.Programming.Extensions_2.Extension_Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0.Step_X_X_Framework_Convert_HtmlToJson_1_0(this._storedInputs));

                        return storedProcessRequestResponseData;
                    }   

                    storedProcessRequestResponseData = await ExecuteConversionRequest();
                } 
                catch (storedProcessRequestMistake) {
                    throw new Error("converting html to json");
                }

                //#endregion

                //#region B. CONVERT json object to html head and body buckets

                try 
                {
                    const ExecuteConversionRequest = async() => {
                        storedProcessRequestHtmlHeadBucket = storedProcessRequestResponseData?.child?.filter(node => node.node.toUpperCase() == "ELEMENT")?.filter(node => node.node.toUpperCase() == "ELEMENT")[0]?.child?.filter(node => node.node.toUpperCase() == "ELEMENT")?.filter(node => node.tag.toUpperCase()  == "HEAD")?.filter(node => node.node.toUpperCase() == "ELEMENT");
                        storedProcessRequestHtmlBodyBucket = storedProcessRequestResponseData?.child?.filter(node => node.node.toUpperCase() == "ELEMENT")?.filter(node => node.node.toUpperCase() == "ELEMENT")[0]?.child?.filter(node => node.node.toUpperCase() == "ELEMENT")?.filter(node => node.tag.toUpperCase()  == "BODY")?.filter(node => node.node.toUpperCase() == "ELEMENT");
                    }
                    
                    await ExecuteConversionRequest();

                } 
                catch (storedProcessRequestMistake) {
                    throw new Error("converting json");
                }

                //#endregion

                //#region C. CONVERT html head bucket to list css files

                try 
                {
                    const ExecuteConversionRequest = async() : Promise<any> => {
                        storedProcessRequestHtmlNodeList = storedProcessRequestHtmlHeadBucket[0]?.child?.filter(node => node.node.toUpperCase() == "ELEMENT" && node.tag.toUpperCase() == "LINK")

                        storedProcessRequestHtmlNodeList.map(storedProcessRequestHtmlNodeItem => 
                        {
                            //OUTPUT EXAMPLE: ../../../CSS/1/1_0/Style_Alignments_Setting_Sketchy-2-2-F-SKC-7-Launch-1-1-Goal-2-ASSET-Home-AJC-CMS-2_1_1_0.css
                            if(storedProcessRequestHtmlNodeItem?.attr?.rel != undefined && storedProcessRequestHtmlNodeItem?.attr?.rel.toUpperCase() == "STYLESHEET" && storedProcessRequestHtmlNodeItem?.attr?.href != undefined)
                            {
                                //OUTPUT EXAMPLE: C:\\Programming\\999.0.3.BaseDI.QuickStart.Templates\\3. Client\\Web\\3. Setting\\5\\Ecommerce\\2\\Generate Brand Trust\\1\\Friendship\\
                                storedInputRequestFileRootPath = storedInputRequestFileRootPath.split("//").join("\\");
                                
                                //OUTPUT EXAMPLE: CSS/1/1_0/Style_Alignments_Setting_Sketchy-2-2-F-SKC-7-Launch-1-1-Goal-2-ASSET-Home-AJC-CMS-2_1_1_0.css
                                storedProcessRequestResponseData = (storedProcessRequestHtmlNodeItem?.attr?.href as String).split("../").join("");
    
                                //OUTPUT EXAMPLE: CSS\\1\\1_0/Style_Alignments_Setting_Sketchy-2-2-F-SKC-7-Launch-1-1-Goal-2-ASSET-Home-AJC-CMS-2_1_1_0.css
                                storedProcessRequestResponseData = storedProcessRequestResponseData.split("/").join("\\");
    
                                //OUTPUT EXAMPLE: C:\\Programming\\999.0.3.BaseDI.QuickStart.Templates\\3. Client\\Web\\3. Setting\\5\\Ecommerce\\2\\Generate Brand Trust\\1\\Friendship\\CSS\\1\\1_0/Style_Alignments_Setting_Sketchy-2-2-F-SKC-7-Launch-1-1-Goal-2-ASSET-Home-AJC-CMS-2_1_1_0.css
                                storedProcessRequestResponseData = storedInputRequestFileRootPath + storedProcessRequestResponseData;                              
                                storedProcessRequestHtmlHeadCssFileListBucket.push(storedProcessRequestResponseData); 
                            } 
                        }) 

                        return storedProcessRequestHtmlHeadCssFileListBucket;
                    }

                    storedProcessRequestHtmlHeadCssFileListBucket = await ExecuteConversionRequest();
     
                } 
                catch (storedProcessRequestMistake) {
                    throw new Error("converting html head json bucket to list of file strings");
                }

                //#endregion                

                //#region D. CONVERT list of css files to json objects

                try 
                {
                    const ExecuteConversionRequest = async() : Promise<any> => {
                        this._storedInputs.Parameters.setValue("parameterInputRequestFileNameList", storedProcessRequestHtmlHeadCssFileListBucket);

                        storedProcessRequestResponseData = await Promise.resolve(Extension_Director_Of_Programming_Chapter_12_2_Page_2_ConversionRequest_Handler_1_0.BaseDI.Professional.Programming.Extensions_2.Extension_Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0.Step_X_X_Framework_Convert_CssToJson_1_0(this._storedInputs));
    
                        return storedProcessRequestResponseData;                            
                    }                    

                    storedProcessRequestResponseData = await ExecuteConversionRequest();
                } 
                catch (storedProcessRequestMistake) {
                    throw new Error("converting html head json bucket to list of file strings");
                }

                //#endregion   

                //#region E. CONVERT json objects to 13 css buckets

                try 
                {
                    const ExecuteConversionRequest = async() : Promise<any> => {
                        storedProcessRequestResponseData.map(storedProcessRequestCssJsonItem => 
                        {
                            storedProcessRequestCssJsonItemKey = Object.keys(storedProcessRequestCssJsonItem)[0];

                            //1. STYLE alignments
                            if(storedProcessRequestCssJsonItemKey.toUpperCase().includes("STYLE_ALIGNMENTS")){
                                storedProcessRequestCssAlignments_1 = storedProcessRequestCssJsonItem[storedProcessRequestCssJsonItemKey];

                                if(storedProcessRequestCssAlignments_1.children){
                                    storedProcessRequestCssAlignments_1_MediaQuriesKeys = Object.keys(storedProcessRequestCssAlignments_1.children).filter(storedProcessRequestJSONKey => storedProcessRequestJSONKey.toUpperCase().includes("@MEDIA"));
                                    storedProcessRequestCssAlignments_1_NoneMediaQuriesKeys = Object.keys(storedProcessRequestCssAlignments_1.children).filter(storedProcessRequestJSONKey => !storedProcessRequestJSONKey.toUpperCase().includes("@MEDIA"));
                                }
                            }

                            //2. STYLE backgrounds
                            if(storedProcessRequestCssJsonItemKey.toUpperCase().includes("STYLE_BACKGROUNDS")){
                                storedProcessRequestCssBackgrounds_2 = storedProcessRequestCssJsonItem[storedProcessRequestCssJsonItemKey];

                                if(storedProcessRequestCssBackgrounds_2.children){
                                    storedProcessRequestCssBackgrounds_2_MediaQuriesKeys = Object.keys(storedProcessRequestCssBackgrounds_2.children).filter(storedProcessRequestJSONKey => storedProcessRequestJSONKey.toUpperCase().includes("@MEDIA"));
                                    storedProcessRequestCssBackgrounds_2_NoneMediaQuriesKeys = Object.keys(storedProcessRequestCssBackgrounds_2.children).filter(storedProcessRequestJSONKey => !storedProcessRequestJSONKey.toUpperCase().includes("@MEDIA"));
                                }                                
                            } 
                            
                            //3. STYLE borders
                            if(storedProcessRequestCssJsonItemKey.toUpperCase().includes("STYLE_BORDERS")){
                                storedProcessRequestCssBorders_3 = storedProcessRequestCssJsonItem[storedProcessRequestCssJsonItemKey];

                                if(storedProcessRequestCssBorders_3.children){
                                    storedProcessRequestCssBorders_3_MediaQuriesKeys = Object.keys(storedProcessRequestCssBorders_3.children).filter(storedProcessRequestJSONKey => storedProcessRequestJSONKey.toUpperCase().includes("@MEDIA"));
                                    storedProcessRequestCssBorders_3_NoneMediaQuriesKeys = Object.keys(storedProcessRequestCssBorders_3.children).filter(storedProcessRequestJSONKey => !storedProcessRequestJSONKey.toUpperCase().includes("@MEDIA"));
                                }                                    
                            }   

                            //4. STYLE colors
                            if(storedProcessRequestCssJsonItemKey.toUpperCase().includes("STYLE_COLORS")){
                                storedProcessRequestCssColors_4 = storedProcessRequestCssJsonItem[storedProcessRequestCssJsonItemKey];

                                if(storedProcessRequestCssColors_4.children){
                                    storedProcessRequestCssColors_4_MediaQuriesKeys = Object.keys(storedProcessRequestCssColors_4.children).filter(storedProcessRequestJSONKey => storedProcessRequestJSONKey.toUpperCase().includes("@MEDIA"));
                                    storedProcessRequestCssColors_4_NoneMediaQuriesKeys = Object.keys(storedProcessRequestCssColors_4.children).filter(storedProcessRequestJSONKey => !storedProcessRequestJSONKey.toUpperCase().includes("@MEDIA"));
                                }                                 
                            }                               
                            
                            //5. STYLE effects
                            if(storedProcessRequestCssJsonItemKey.toUpperCase().includes("STYLE_EFFECTS")) {
                                storedProcessRequestCssEffects_5 = storedProcessRequestCssJsonItem[storedProcessRequestCssJsonItemKey];

                                if(storedProcessRequestCssEffects_5.children){
                                    storedProcessRequestCssEffects_5_MediaQuriesKeys = Object.keys(storedProcessRequestCssEffects_5.children).filter(storedProcessRequestJSONKey => storedProcessRequestJSONKey.toUpperCase().includes("@MEDIA"));
                                    storedProcessRequestCssEffects_5_NoneMediaQuriesKeys = Object.keys(storedProcessRequestCssEffects_5.children).filter(storedProcessRequestJSONKey => !storedProcessRequestJSONKey.toUpperCase().includes("@MEDIA"));
                                }                                  
                            }

                            //6. STYLE flow
                            if(storedProcessRequestCssJsonItemKey.toUpperCase().includes("STYLE_FLOW")) {
                                storedProcessRequestCssFlow_6 = storedProcessRequestCssJsonItem[storedProcessRequestCssJsonItemKey];

                                if(storedProcessRequestCssFlow_6.children){
                                    storedProcessRequestCssFlow_6_MediaQuriesKeys = Object.keys(storedProcessRequestCssFlow_6.children).filter(storedProcessRequestJSONKey => storedProcessRequestJSONKey.toUpperCase().includes("@MEDIA"));
                                    storedProcessRequestCssFlow_6_NoneMediaQuriesKeys = Object.keys(storedProcessRequestCssFlow_6.children).filter(storedProcessRequestJSONKey => !storedProcessRequestJSONKey.toUpperCase().includes("@MEDIA"));
                                }                                  
                            }

                            //7. STYLE list
                            if(storedProcessRequestCssJsonItemKey.toUpperCase().includes("STYLE_LISTS")) {
                                storedProcessRequestCssLists_7 = storedProcessRequestCssJsonItem[storedProcessRequestCssJsonItemKey];
                                
                                if(storedProcessRequestCssLists_7.children){
                                    storedProcessRequestCssLists_7_MediaQuriesKeys = Object.keys(storedProcessRequestCssLists_7.children).filter(storedProcessRequestJSONKey => storedProcessRequestJSONKey.toUpperCase().includes("@MEDIA"));
                                    storedProcessRequestCssLists_7_NoneMediaQuriesKeys = Object.keys(storedProcessRequestCssLists_7.children).filter(storedProcessRequestJSONKey => !storedProcessRequestJSONKey.toUpperCase().includes("@MEDIA"));
                                }                                  
                            }                             

                            //8. STYLE margins
                            if(storedProcessRequestCssJsonItemKey.toUpperCase().includes("STYLE_MARGINS")) {
                                storedProcessRequestCssMargins_8 = storedProcessRequestCssJsonItem[storedProcessRequestCssJsonItemKey];

                                if(storedProcessRequestCssMargins_8.children){
                                    storedProcessRequestCssMargins_8_MediaQuriesKeys = Object.keys(storedProcessRequestCssMargins_8.children).filter(storedProcessRequestJSONKey => storedProcessRequestJSONKey.toUpperCase().includes("@MEDIA"));
                                    storedProcessRequestCssMargins_8_NoneMediaQuriesKeys = Object.keys(storedProcessRequestCssMargins_8.children).filter(storedProcessRequestJSONKey => !storedProcessRequestJSONKey.toUpperCase().includes("@MEDIA"));
                                }                                  
                            }  
                            
                            //9. STYLE misc
                            if(storedProcessRequestCssJsonItemKey.toUpperCase().includes("STYLE_MISC")) {
                                storedProcessRequestCssMisc_9 = storedProcessRequestCssJsonItem[storedProcessRequestCssJsonItemKey];

                                if(storedProcessRequestCssMisc_9.children){
                                    storedProcessRequestCssMisc_9_MediaQuriesKeys = Object.keys(storedProcessRequestCssMisc_9.children).filter(storedProcessRequestJSONKey => storedProcessRequestJSONKey.toUpperCase().includes("@MEDIA"));
                                    storedProcessRequestCssMisc_9_NoneMediaQuriesKeys = Object.keys(storedProcessRequestCssMisc_9.children).filter(storedProcessRequestJSONKey => !storedProcessRequestJSONKey.toUpperCase().includes("@MEDIA"));
                                }                                   
                            }       
                            
                            //10. STYLE padding
                            if(storedProcessRequestCssJsonItemKey.toUpperCase().includes("STYLE_PADDING")) {
                                storedProcessRequestCssPadding_10 = storedProcessRequestCssJsonItem[storedProcessRequestCssJsonItemKey];

                                if(storedProcessRequestCssMisc_9.children){
                                    storedProcessRequestCssPadding_10_MediaQuriesKeys = Object.keys(storedProcessRequestCssPadding_10.children).filter(storedProcessRequestJSONKey => storedProcessRequestJSONKey.toUpperCase().includes("@MEDIA"));
                                    storedProcessRequestCssPadding_10_NoneMediaQuriesKeys = Object.keys(storedProcessRequestCssPadding_10.children).filter(storedProcessRequestJSONKey => !storedProcessRequestJSONKey.toUpperCase().includes("@MEDIA"));
                                }                                   
                            }     
                            
                            //11. STYLE sizes
                            if(storedProcessRequestCssJsonItemKey.toUpperCase().includes("STYLE_SIZES")) {
                                storedProcessRequestCssSizes_11 = storedProcessRequestCssJsonItem[storedProcessRequestCssJsonItemKey];

                                if(storedProcessRequestCssSizes_11.children){
                                    storedProcessRequestCssSizes_11_MediaQuriesKeys = Object.keys(storedProcessRequestCssSizes_11.children).filter(storedProcessRequestJSONKey => storedProcessRequestJSONKey.toUpperCase().includes("@MEDIA"));
                                    storedProcessRequestCssSizes_11_NoneMediaQuriesKeys = Object.keys(storedProcessRequestCssSizes_11.children).filter(storedProcessRequestJSONKey => !storedProcessRequestJSONKey.toUpperCase().includes("@MEDIA"));
                                }                                     
                            } 
                            
                            //12. STYLE tables
                            if(storedProcessRequestCssJsonItemKey.toUpperCase().includes("STYLE_TABLES")) {
                                storedProcessRequestCssTables_12 = storedProcessRequestCssJsonItem[storedProcessRequestCssJsonItemKey];

                                if(storedProcessRequestCssTables_12.children){
                                    storedProcessRequestCssTables_12_MediaQuriesKeys = Object.keys(storedProcessRequestCssTables_12.children).filter(storedProcessRequestJSONKey => storedProcessRequestJSONKey.toUpperCase().includes("@MEDIA"));
                                    storedProcessRequestCssTables_12_NoneMediaQuriesKeys = Object.keys(storedProcessRequestCssTables_12.children).filter(storedProcessRequestJSONKey => !storedProcessRequestJSONKey.toUpperCase().includes("@MEDIA"));
                                }                                 
                            }   
                            
                            //13. STYLE text
                            if(storedProcessRequestCssJsonItemKey.toUpperCase().includes("STYLE_TEXT")) {
                                storedProcessRequestCssText_13 = storedProcessRequestCssJsonItem[storedProcessRequestCssJsonItemKey];

                                if(storedProcessRequestCssText_13.children){
                                    storedProcessRequestCssText_13_MediaQuriesKeys = Object.keys(storedProcessRequestCssText_13.children).filter(storedProcessRequestJSONKey => storedProcessRequestJSONKey.toUpperCase().includes("@MEDIA"));
                                    storedProcessRequestCssText_13_NoneMediaQuriesKeys = Object.keys(storedProcessRequestCssText_13.children).filter(storedProcessRequestJSONKey => !storedProcessRequestJSONKey.toUpperCase().includes("@MEDIA"));
                                }                                  
                            }
                        })                        
                    }     
                    
                    await ExecuteConversionRequest();
                } 
                catch (storedProcessRequestMistake) {
                    throw new Error("converting html head json bucket to list of file strings");
                }

                storedOutputResponseData = storedOutputResponseData;

                //#endregion                  

                //#region F. CONVERT 13 css buckets to storyline details object
                try
                {
                    const ExecuteConversionRequest = async (): Promise<any> =>
                    {
                        const ExecuteProcessHelper = async (parameterInputs:SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<any> => 
                        {
                            //#region 1: STORE process inputs
                            
                            storedProcessRequestCssItem_0 = parameterInputs.Parameters.getValue("parameterProcessRequestCssItem_0");
                            storedProcessRequestCssItem_0_MediaQuriesKeys = parameterInputs.Parameters.getValue("parameterProcessRequestCssItem_0_MediaQuriesKeys");
                            storedProcessRequestCssItem_0_NoneMediaQuriesKeys = parameterInputs.Parameters.getValue("parameterProcessRequestCssItem_0_NoneMediaQuriesKeys");
                            
                            storedProcessRequestCssItemFileName = "";
                            storedProcessRequestCssItemSupportedProperties = parameterInputs.Parameters.getValue("parameterProcessRequestCssStylingItemSupportedProperties");
                            
                            //#endregion

                            if(storedProcessRequestCssItem_0_NoneMediaQuriesKeys) 
                            {                               
                              storedProcessRequestCssItem_0_NoneMediaQuriesKeys.map(storedProcessRequestCssItemNoneMediaQueryKeyItem => 
                              {                                  
                                 storedProcessRequestCssItemNoneMediaQueryKey = storedProcessRequestCssItemNoneMediaQueryKeyItem;
                                 storedProcessRequestCssItem_0_NoneMediaQuery = storedProcessRequestCssItem_0.children[storedProcessRequestCssItemNoneMediaQueryKeyItem];

                                 if(storedProcessRequestCssItem_0_NoneMediaQuery.attributes)
                                 {
                                    //#region 2. CONVERT none media queries

                                    try 
                                    {
                                        const ExecuteConversionRequest = (): any => { 
                                            storedProcessRequestCssItemUsedPropertyItemList = [];
                                            
                                            Object.keys(storedProcessRequestCssItem_0_NoneMediaQuery.attributes).map(storedProcessRequestNoneMediaQueryAttributeKey => {
                                                storedProcessRequestCssItemUsedPropertyKey = storedProcessRequestNoneMediaQueryAttributeKey;
                                                storedProcessRequestCssItemUsedPropertyValue = storedProcessRequestCssItem_0_NoneMediaQuery.attributes[storedProcessRequestCssItemUsedPropertyKey].split(" ");
        
                                                //OUTPUT EXAMPLE:
                                                //   top: 2px;
                                                //   bottom: 2px 2px;                                        
                                                storedProcessRequestCssItemUsedPropertyItemList.push({
                                                    propertyName: storedProcessRequestCssItemUsedPropertyKey,
                                                    properyValues: [ storedProcessRequestCssItemUsedPropertyValue ]
                                                })
                                            })     
                                            
                                            return storedProcessRequestCssItemUsedPropertyItemList;
                                        }       

                                        storedProcessRequestCssItemUsedPropertyItemList = ExecuteConversionRequest();                                
                                    } 
                                    catch (storedProcessRequestMistake) {
                                        throw new Error("converting none media query css");
                                    }                                    

                                    //#endregion

                                    //#region 3. CONVERT media queries

                                    try 
                                    {
                                        const ExecuteConversionRequest = (): any => 
                                        {
                                            //OUTPUT EXAMPLE 1:
                                            //                @media (min-width: 20em), not all and (min-height: 40em)
                                            //                {
                                            //                      @media not all and (pointer: none) 
                                            //                      {
                                            //                          .body 
                                            //                          {
                                            //                              top: 2px;
                                            //                              bottom: 2px 2px;
                                            //                          }
                                            //                      }
                                            //                }     
                                            
                                            //OUTPUT EXAMPLE 2:
                                            //                @media not all and (pointer: none) 
                                            //                {
                                            //                      .body 
                                            //                       {
                                            //                           top: 2px;
                                            //                           bottom: 2px 2px;
                                            //                       }
                                            //                 }                                     
                                            if(storedProcessRequestCssItem_0_MediaQuriesKeys)
                                            { 
                                                storedProcessRequestCssItemIsMediaQuery = true;
                                                
                                                storedProcessRequestCssItem_0_MediaQuriesKeys.map(storedProcessRequestCssMediaQueryAttributeKey => 
                                                {
                                                    storedProcessRequestCssMediaQueryAttributeParentKeyItem = storedProcessRequestCssMediaQueryAttributeKey;

                                                    //OUTPUT EXAMPLE: storedProcessRequestCssMediaQueryAttributeKey = @media (min-width: 20em), not all and (min-height: 40em)   
                                                    storedProcessRequestCssItemMediaQuery = storedProcessRequestCssItem_0.children[storedProcessRequestCssMediaQueryAttributeKey];

                                                    //#region CONVERT media queries into parent/child buckets
                                                    try 
                                                    {
                                                        const ExecuteConversionRequest = () : any => {
                                                            Object.entries(storedProcessRequestCssItemMediaQuery.children).map(storedProcessRequestCssItemMediaQueryEntry => 
                                                            {   
                                                                //OUTPUT EXAMPLE: storedProcessRequestCssItemUsedPropertyMediaQueryChildrenKey = body) 
                                                                if(storedProcessRequestCssItemMediaQueryEntry[0].toUpperCase().includes("@MEDIA") == false) 
                                                                {
                                                                    storedProcessRequestCssItemMediaQueryParentBucketList.push(storedProcessRequestCssItemMediaQueryEntry);
                                                                }
                                                                else
                                                                {
                                                                    storedProcessRequestCssItemMediaQueryChildBucketList.push(storedProcessRequestCssItemMediaQueryEntry);
                                                                }                                                                
                                                            })                                                            
                                                        }  

                                                        ExecuteConversionRequest();  
                                                    } 
                                                    catch (storedProcessRequestMistake) {
                                                        throw new Error("converting parent media query css");
                                                    }
                                                    //#endregion                                            
                                                    
                                                })
                                            }                                         
                                        }

                                        ExecuteConversionRequest();
                                    } 
                                    catch (storedProcessRequestMistake) {
                                        if(storedProcessRequestMistake.message){
                                            throw storedProcessRequestMistake;
                                        }
                                        
                                        throw new Error("converting media query css");
                                    }  

                                    //#endregion                                    

                                    //#region 4: STORE css item

                                    try 
                                    {
                                        const ExecuteStoragenRequest = (): any => {
                                            if(storedProcessRequestCssItemUsedPropertyItemList.length > 0){
                                                storedProcessRequestCssItemUsedProperty = {
                                                    attributeID: storedProcessRequestCssItemNoneMediaQueryKey,
                                                    properties: storedProcessRequestCssItemUsedPropertyItemList,
                                                    IsMediaQuery: (storedProcessRequestCssItemIsMediaQuery) ? "True" : "False",
                                                    IsHtmlTag: (storedProcessRequestCssItemIsMediaQuery) ? "False" : "True",
                                                    MediaQueryResolutions: (storedProcessRequestCssItemUsedPropertyMediaQueryResolutionList.length > 0) ? storedProcessRequestCssItemUsedPropertyMediaQueryResolutionList : null
                                                }
            
                                                storedProcessRequestCssItemUsedPropertyList.push(storedProcessRequestCssItemUsedProperty)
                                            }

                                            storedProcessRequestCssItemUsedPropertyItemList = [];
                                            storedProcessRequestCssItemUsedPropertyMediaQuery = null;
                                            storedProcessRequestCssItemUsedPropertyMediaQueryListChildren = [];
                                        }

                                        ExecuteStoragenRequest();
                                    } 
                                    catch (storedProcessRequestMistake) {
                                        throw new Error("storing css");
                                    }  

                                    //#endregion
                                 }                                 
                              })
                            }

                            //#region 5. OUTPUT css item
                            storedProcessRequestCssItem = {
                                StyleFileName: storedProcessRequestCssItemFileName,
                                StyleFileSupportedProperties: storedProcessRequestCssItemSupportedProperties,
                                StyleFileUseProperties: storedProcessRequestCssItemUsedPropertyList
                            }

                            return storedProcessRequestCssItem;
                            //#endregion
                        }

                        //#region 1. SETUP default storyline details object
                        storedProcessRequestDataStorylineDetails = {
                            baseDIInstructions: {
                                presentation: [{
                                    key_1: "Clients",
                                    values_2: [{
                                        key_2_1: "Clients_1_0",
                                        values_2_2: [{
                                            key_2_2_1: "GeneratedPage",
                                            values_2_2_2: []
                                        }]
                                    }],
                                    type: "object",
                                    buzzWords: "***OPTIONAL***, Wireframes, HTML, XAML",
                                    extraKeyValuePairs: []
                                }]
                            }
                        };
                        //#endregion

                        //#region 2. STORE style alignments

                        try 
                        {
                            storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0", storedProcessRequestCssAlignments_1);
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0_MediaQuriesKeys", storedProcessRequestCssAlignments_1_MediaQuriesKeys);
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0_NoneMediaQuriesKeys", storedProcessRequestCssAlignments_1_NoneMediaQuriesKeys);                                                       

                            storedInputs.Parameters.setValue("parameterProcessRequestCssStylingItemSupportedProperties", [
                                "position",
                                "top",
                                "bottom",
                                "left",
                                "right",
                                "clip",
                                "overflow",
                                "z-index",
                                "float",
                                "clear"
                              ]);                                                       
                            
                              storedProcessRequestCssItem = await ExecuteProcessHelper(storedInputs);
                        } 
                        catch (storedProcessRequestMistake) {
                            throw new Error("storing style alignments");
                        }

                        //#endregion

                        //#region 3. STORE style backgrounds

                        //#endregion

                        //#region 4. STORE style borders

                        //#endregion

                        //#region 5. STORE style colors

                        //#endregion

                        //#region 6. STORE style effects

                        //#endregion

                        //#region 7. STORE style flow

                        //#endregion

                        //#region 8. STORE style lists

                        //#endregion

                        //#region 9. STORE style margins

                        //#endregion

                        //#region 10. STORE style misc

                        //#endregion

                        //#region 11. STORE style padding

                        //#endregion

                        //#region 12. STORE style sizes

                        //#endregion

                        //#region 13. STORE style tables

                        //#endregion

                        //#region 14. STORE style text

                        //#endregion
                    }

                    storedProcessRequestResponseData = await ExecuteConversionRequest();
                }
                catch (storedProcessRequestMistake) {
                    if(storedProcessRequestMistake.message){
                        throw storedProcessRequestMistake;
                    }

                    throw new Error("converting html head json bucket to list of file strings");
                }

                //#endregion

                //#endregion
            }
            catch (storedProcessRequestMistake) {
                //#region EDGE CASE - USE developer logger

                if (storedProcessRequestDeveloperMode) {
                    this._storedProcessRequestTracker["storedProcessRequestStepNumber"] = this._storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                    //0. CONTROLLERS

                    //1. INPUTS

                    //2. PROCESS
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED cache retrieval");
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", this._storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                    Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                }

                //#endregion

                //#region EDGE CASE - USE exception handler

                throw storedProcessRequestMistake;

                //#endregion
            }

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            return storedOutputResponseData;

            //#endregion

            //#endregion

            //#endregion
        }
        //#endregion
    }
}
