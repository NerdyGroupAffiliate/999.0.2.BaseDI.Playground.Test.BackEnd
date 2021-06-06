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

            let storedProcessRequestCssCounter: number = 0;
            let storedProcessRequestCssCounter2: number = 0;
            let storedProcessRequestCssItemValid: boolean = false;

            let storedProcessRequestCssItem: StrongTyped_Website.BaseDI.Professional.BackEnd.Setting.Location.Web_Development.CssStyleFile;
            let storedProcessRequestCssItemConvertedList: StrongTyped_Website.BaseDI.Professional.BackEnd.Setting.Location.Web_Development.CssStyleFile[] = []; 
            let storedProcessRequestCssItemChild: any = "";
            let storedProcessRequestCssItemChildList: any[] = [];
            let storedProcessRequestCssItemChildResult: any;
            let storedProcessRequestCssItemFileName: string = "";
            let storedProcessRequestCssItemSupportedProperties: string[] = [];
            let storedProcessRequestCssItemList: any[] = []; 
                    
   
            let storedProcessRequestCssItemStyleFileName: string = "";
            let storedProcessRequestCssItemUsedPropertyMediaQueryModel: StrongTyped_Website.BaseDI.Professional.BackEnd.Setting.Location.Web_Development.CssMediaQuery;
            let storedProcessRequestCssItemUsedPropertyMediaQueryModelList: StrongTyped_Website.BaseDI.Professional.BackEnd.Setting.Location.Web_Development.CssMediaQuery[] = [];
            let storedProcessRequestCssItemUsedPropertyMediaQueryList: StrongTyped_Website.BaseDI.Professional.BackEnd.Setting.Location.Web_Development.CssMediaQuery[] = [];
            let storedProcessRequestCssItemUsedPropertyList: StrongTyped_Website.BaseDI.Professional.BackEnd.Setting.Location.Web_Development.CssStyleFileUseProperty[] = [];
            
            let storedProcessRequestCssItem_0: any = {};
            
            let storedProcessRequestCssItem_0_MediaQuery: any = {};
            let storedProcessRequestCssItem_0_MediaQuriesEntries: any = {};

            let storedProcessRequestCssItem_0_NoneMediaQuery: any = {};
            let storedProcessRequestCssItem_0_NoneMediaQuriesEntries: any = {};            

            let storedProcessRequestCssAlignments_1: any = {};
            
            let storedProcessRequestCssAlignments_1_FileName: string = "";
            let storedProcessRequestCssAlignments_1_MediaQuery: any = {};
            let storedProcessRequestCssAlignments_1_MediaQuriesEntries: any = {};

            let storedProcessRequestCssAlignments_1_NoneMediaQuery: any = {};
            let storedProcessRequestCssAlignments_1_NoneMediaQuriesEntries: any = {};

            let storedProcessRequestCssBackgrounds_2: any = {};

            let storedProcessRequestCssBackgrounds_2_FileName: string = "";
            let storedProcessRequestCssBackgrounds_2_MediaQuery: any = {};
            let storedProcessRequestCssBackgrounds_2_MediaQuriesEntries: any = {};

            let storedProcessRequestCssBackgrounds_2_NoneMediaQuery: any = {};
            let storedProcessRequestCssBackgrounds_2_NoneMediaQuriesEntries: any = {};

            let storedProcessRequestCssBorders_3: any = {};

            let storedProcessRequestCssBorders_3_FileName: string = "";
            let storedProcessRequestCssBorders_3_MediaQuery: any = {};
            let storedProcessRequestCssBorders_3_MediaQuriesEntries: any = {};

            let storedProcessRequestCssBorders_3_NoneMediaQuery: any = {};
            let storedProcessRequestCssBorders_3_NoneMediaQuriesEntries: any = {};

            let storedProcessRequestCssColors_4: any = {};

            let storedProcessRequestCssColors_4_FileName: string = "";
            let storedProcessRequestCssColors_4_MediaQuery: any = {};
            let storedProcessRequestCssColors_4_MediaQuriesEntries: any = {};

            let storedProcessRequestCssColors_4_NoneMediaQuery: any = {};
            let storedProcessRequestCssColors_4_NoneMediaQuriesEntries: any = {};

            let storedProcessRequestCssEffects_5: any = {};

            let storedProcessRequestCssEffects_5_FileName: string = "";
            let storedProcessRequestCssEffects_5_MediaQuery: any = {};
            let storedProcessRequestCssEffects_5_MediaQuriesEntries: any = {};

            let storedProcessRequestCssEffects_5_NoneMediaQuery: any = {};
            let storedProcessRequestCssEffects_5_NoneMediaQuriesEntries: any = {};

            let storedProcessRequestCssFlow_6: any = {};

            let storedProcessRequestCssFlow_6_FileName: string = "";
            let storedProcessRequestCssFlow_6_MediaQuery: any = {};
            let storedProcessRequestCssFlow_6_MediaQuriesEntries: any = {};

            let storedProcessRequestCssFlow_6_NoneMediaQuery: any = {};
            let storedProcessRequestCssFlow_6_NoneMediaQuriesEntries: any = {};

            let storedProcessRequestCssLists_7: any = {};

            let storedProcessRequestCssLists_7_FileName: string = "";
            let storedProcessRequestCssLists_7_MediaQuery: any = {};
            let storedProcessRequestCssLists_7_MediaQuriesEntries: any = {};

            let storedProcessRequestCssLists_7_NoneMediaQuery: any = {};
            let storedProcessRequestCssLists_7_NoneMediaQuriesEntries: any = {};

            let storedProcessRequestCssMargins_8: any = {};

            let storedProcessRequestCssMargins_8_FileName: string = "";
            let storedProcessRequestCssMargins_8_MediaQuery: any = {};
            let storedProcessRequestCssMargins_8_MediaQuriesEntries: any = {};

            let storedProcessRequestCssMargins_8_NoneMediaQuery: any = {};
            let storedProcessRequestCssMargins_8_NoneMediaQuriesEntries: any = {};

            let storedProcessRequestCssMisc_9: any = {};

            let storedProcessRequestCssMisc_9_FileName: string = "";
            let storedProcessRequestCssMisc_9_MediaQuery: any = {};
            let storedProcessRequestCssMisc_9_MediaQuriesEntries: any = {};

            let storedProcessRequestCssMisc_9_NoneMediaQuery: any = {};
            let storedProcessRequestCssMisc_9_NoneMediaQuriesEntries: any = {};

            let storedProcessRequestCssPadding_10: any = {};

            let storedProcessRequestCssPadding_10_FileName: string = "";
            let storedProcessRequestCssPadding_10_MediaQuery: any = {};
            let storedProcessRequestCssPadding_10_MediaQuriesEntries: any = {};

            let storedProcessRequestCssPadding_10_NoneMediaQuery: any = {};
            let storedProcessRequestCssPadding_10_NoneMediaQuriesEntries: any = {};

            let storedProcessRequestCssSizes_11: any = {};

            let storedProcessRequestCssSizes_11_FileName: string = "";
            let storedProcessRequestCssSizes_11_MediaQuery: any = {};
            let storedProcessRequestCssSizes_11_MediaQuriesEntries: any = {};

            let storedProcessRequestCssSizes_11_NoneMediaQuery: any = {};
            let storedProcessRequestCssSizes_11_NoneMediaQuriesEntries: any = {};

            let storedProcessRequestCssTables_12: any = {};

            let storedProcessRequestCssTables_12_FileName: string = "";
            let storedProcessRequestCssTables_12_MediaQuery: any = {};
            let storedProcessRequestCssTables_12_MediaQuriesEntries: any = {};

            let storedProcessRequestCssTables_12_NoneMediaQuery: any = {};
            let storedProcessRequestCssTables_12_NoneMediaQuriesEntries: any = {};

            let storedProcessRequestCssText_13: any = {};

            let storedProcessRequestCssText_13_FileName: string = "";
            let storedProcessRequestCssText_13_MediaQuery: any = {};
            let storedProcessRequestCssText_13_MediaQuriesEntries: any = {};

            let storedProcessRequestCssText_13_NoneMediaQuery: any = {};
            let storedProcessRequestCssText_13_NoneMediaQuriesEntries: any = {};

            let storedProcessRequestDataStorylineDetails: StrongTyped_StorylineDetails.BaseDI.Professional.Story.Programming_0.StorylineDetails_Instructions;            
            
            let storedProcessRequestFileItem: string = ""; 
            let storedProcessRequestFileList: string[] = []; 

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
                                    storedProcessRequestCssAlignments_1_FileName = storedProcessRequestCssJsonItemKey;
                                    storedProcessRequestCssAlignments_1_MediaQuriesEntries = Object.entries(storedProcessRequestCssAlignments_1.children).filter(storedProcessRequestJSONKey => storedProcessRequestJSONKey[0].toUpperCase().includes("@MEDIA"));
                                    storedProcessRequestCssAlignments_1_NoneMediaQuriesEntries = Object.entries(storedProcessRequestCssAlignments_1.children).filter(storedProcessRequestJSONKey => !storedProcessRequestJSONKey[0].toUpperCase().includes("@MEDIA"));
                                }
                            }

                            //2. STYLE backgrounds
                            if(storedProcessRequestCssJsonItemKey.toUpperCase().includes("STYLE_BACKGROUNDS")){
                                storedProcessRequestCssBackgrounds_2 = storedProcessRequestCssJsonItem[storedProcessRequestCssJsonItemKey];

                                if(storedProcessRequestCssBackgrounds_2.children){
                                    storedProcessRequestCssBackgrounds_2_FileName = storedProcessRequestCssJsonItemKey;
                                    storedProcessRequestCssBackgrounds_2_MediaQuriesEntries = Object.entries(storedProcessRequestCssBackgrounds_2.children).filter(storedProcessRequestJSONKey => storedProcessRequestJSONKey[0].toUpperCase().includes("@MEDIA"));
                                    storedProcessRequestCssBackgrounds_2_NoneMediaQuriesEntries = Object.entries(storedProcessRequestCssBackgrounds_2.children).filter(storedProcessRequestJSONKey => !storedProcessRequestJSONKey[0].toUpperCase().includes("@MEDIA"));
                                }                                
                            } 
                            
                            //3. STYLE borders
                            if(storedProcessRequestCssJsonItemKey.toUpperCase().includes("STYLE_BORDERS")){
                                storedProcessRequestCssBorders_3 = storedProcessRequestCssJsonItem[storedProcessRequestCssJsonItemKey];

                                if(storedProcessRequestCssBorders_3.children){
                                    storedProcessRequestCssBorders_3_FileName = storedProcessRequestCssJsonItemKey;
                                    storedProcessRequestCssBorders_3_MediaQuriesEntries = Object.entries(storedProcessRequestCssBorders_3.children).filter(storedProcessRequestJSONKey => storedProcessRequestJSONKey[0].toUpperCase().includes("@MEDIA"));
                                    storedProcessRequestCssBorders_3_NoneMediaQuriesEntries = Object.entries(storedProcessRequestCssBorders_3.children).filter(storedProcessRequestJSONKey => !storedProcessRequestJSONKey[0].toUpperCase().includes("@MEDIA"));
                                }                                    
                            }   

                            //4. STYLE colors
                            if(storedProcessRequestCssJsonItemKey.toUpperCase().includes("STYLE_COLORS")){
                                storedProcessRequestCssColors_4 = storedProcessRequestCssJsonItem[storedProcessRequestCssJsonItemKey];

                                if(storedProcessRequestCssColors_4.children){
                                    storedProcessRequestCssColors_4_FileName = storedProcessRequestCssJsonItemKey;
                                    storedProcessRequestCssColors_4_MediaQuriesEntries = Object.entries(storedProcessRequestCssColors_4.children).filter(storedProcessRequestJSONKey => storedProcessRequestJSONKey[0].toUpperCase().includes("@MEDIA"));
                                    storedProcessRequestCssColors_4_NoneMediaQuriesEntries = Object.entries(storedProcessRequestCssColors_4.children).filter(storedProcessRequestJSONKey => !storedProcessRequestJSONKey[0].toUpperCase().includes("@MEDIA"));
                                }                                 
                            }                               
                            
                            //5. STYLE effects
                            if(storedProcessRequestCssJsonItemKey.toUpperCase().includes("STYLE_EFFECTS")) {
                                storedProcessRequestCssEffects_5 = storedProcessRequestCssJsonItem[storedProcessRequestCssJsonItemKey];

                                if(storedProcessRequestCssEffects_5.children){
                                    storedProcessRequestCssEffects_5_FileName = storedProcessRequestCssJsonItemKey;
                                    storedProcessRequestCssEffects_5_MediaQuriesEntries = Object.entries(storedProcessRequestCssEffects_5.children).filter(storedProcessRequestJSONKey => storedProcessRequestJSONKey[0].toUpperCase().includes("@MEDIA"));
                                    storedProcessRequestCssEffects_5_NoneMediaQuriesEntries = Object.entries(storedProcessRequestCssEffects_5.children).filter(storedProcessRequestJSONKey => !storedProcessRequestJSONKey[0].toUpperCase().includes("@MEDIA"));
                                }                                  
                            }

                            //6. STYLE flow
                            if(storedProcessRequestCssJsonItemKey.toUpperCase().includes("STYLE_FLOW")) {
                                storedProcessRequestCssFlow_6 = storedProcessRequestCssJsonItem[storedProcessRequestCssJsonItemKey];

                                if(storedProcessRequestCssFlow_6.children){
                                    storedProcessRequestCssFlow_6_FileName = storedProcessRequestCssJsonItemKey;
                                    storedProcessRequestCssFlow_6_MediaQuriesEntries = Object.entries(storedProcessRequestCssFlow_6.children).filter(storedProcessRequestJSONKey => storedProcessRequestJSONKey[0].toUpperCase().includes("@MEDIA"));
                                    storedProcessRequestCssFlow_6_NoneMediaQuriesEntries = Object.entries(storedProcessRequestCssFlow_6.children).filter(storedProcessRequestJSONKey => !storedProcessRequestJSONKey[0].toUpperCase().includes("@MEDIA"));
                                }                                  
                            }

                            //7. STYLE list
                            if(storedProcessRequestCssJsonItemKey.toUpperCase().includes("STYLE_LISTS")) {
                                storedProcessRequestCssLists_7 = storedProcessRequestCssJsonItem[storedProcessRequestCssJsonItemKey];
                                
                                if(storedProcessRequestCssLists_7.children){
                                    storedProcessRequestCssLists_7_FileName = storedProcessRequestCssJsonItemKey;
                                    storedProcessRequestCssLists_7_MediaQuriesEntries = Object.entries(storedProcessRequestCssLists_7.children).filter(storedProcessRequestJSONKey => storedProcessRequestJSONKey[0].toUpperCase().includes("@MEDIA"));
                                    storedProcessRequestCssLists_7_NoneMediaQuriesEntries = Object.entries(storedProcessRequestCssLists_7.children).filter(storedProcessRequestJSONKey => !storedProcessRequestJSONKey[0].toUpperCase().includes("@MEDIA"));
                                }                                  
                            }                             

                            //8. STYLE margins
                            if(storedProcessRequestCssJsonItemKey.toUpperCase().includes("STYLE_MARGINS")) {
                                storedProcessRequestCssMargins_8 = storedProcessRequestCssJsonItem[storedProcessRequestCssJsonItemKey];

                                if(storedProcessRequestCssMargins_8.children){
                                    storedProcessRequestCssMargins_8_FileName = storedProcessRequestCssJsonItemKey;
                                    storedProcessRequestCssMargins_8_MediaQuriesEntries = Object.entries(storedProcessRequestCssMargins_8.children).filter(storedProcessRequestJSONKey => storedProcessRequestJSONKey[0].toUpperCase().includes("@MEDIA"));
                                    storedProcessRequestCssMargins_8_NoneMediaQuriesEntries = Object.entries(storedProcessRequestCssMargins_8.children).filter(storedProcessRequestJSONKey => !storedProcessRequestJSONKey[0].toUpperCase().includes("@MEDIA"));
                                }                                  
                            }  
                            
                            //9. STYLE misc
                            if(storedProcessRequestCssJsonItemKey.toUpperCase().includes("STYLE_MISC")) {
                                storedProcessRequestCssMisc_9 = storedProcessRequestCssJsonItem[storedProcessRequestCssJsonItemKey];

                                if(storedProcessRequestCssMisc_9.children){
                                    storedProcessRequestCssMisc_9_FileName = storedProcessRequestCssJsonItemKey;
                                    storedProcessRequestCssMisc_9_MediaQuriesEntries = Object.entries(storedProcessRequestCssMisc_9.children).filter(storedProcessRequestJSONKey => storedProcessRequestJSONKey[0].toUpperCase().includes("@MEDIA"));
                                    storedProcessRequestCssMisc_9_NoneMediaQuriesEntries = Object.entries(storedProcessRequestCssMisc_9.children).filter(storedProcessRequestJSONKey => !storedProcessRequestJSONKey[0].toUpperCase().includes("@MEDIA"));
                                }                                   
                            }       
                            
                            //10. STYLE padding
                            if(storedProcessRequestCssJsonItemKey.toUpperCase().includes("STYLE_PADDING")) {
                                storedProcessRequestCssPadding_10 = storedProcessRequestCssJsonItem[storedProcessRequestCssJsonItemKey];

                                if(storedProcessRequestCssMisc_9.children){
                                    storedProcessRequestCssPadding_10_FileName = storedProcessRequestCssJsonItemKey;
                                    storedProcessRequestCssPadding_10_MediaQuriesEntries = Object.entries(storedProcessRequestCssPadding_10.children).filter(storedProcessRequestJSONKey => storedProcessRequestJSONKey[0].toUpperCase().includes("@MEDIA"));
                                    storedProcessRequestCssPadding_10_NoneMediaQuriesEntries = Object.entries(storedProcessRequestCssPadding_10.children).filter(storedProcessRequestJSONKey => !storedProcessRequestJSONKey[0].toUpperCase().includes("@MEDIA"));
                                }                                   
                            }     
                            
                            //11. STYLE sizes
                            if(storedProcessRequestCssJsonItemKey.toUpperCase().includes("STYLE_SIZES")) {
                                storedProcessRequestCssSizes_11 = storedProcessRequestCssJsonItem[storedProcessRequestCssJsonItemKey];

                                if(storedProcessRequestCssSizes_11.children){
                                    storedProcessRequestCssSizes_11_FileName = storedProcessRequestCssJsonItemKey;
                                    storedProcessRequestCssSizes_11_MediaQuriesEntries = Object.entries(storedProcessRequestCssSizes_11.children).filter(storedProcessRequestJSONKey => storedProcessRequestJSONKey[0].toUpperCase().includes("@MEDIA"));
                                    storedProcessRequestCssSizes_11_NoneMediaQuriesEntries = Object.entries(storedProcessRequestCssSizes_11.children).filter(storedProcessRequestJSONKey => !storedProcessRequestJSONKey[0].toUpperCase().includes("@MEDIA"));
                                }                                     
                            } 
                            
                            //12. STYLE tables
                            if(storedProcessRequestCssJsonItemKey.toUpperCase().includes("STYLE_TABLES")) {
                                storedProcessRequestCssTables_12 = storedProcessRequestCssJsonItem[storedProcessRequestCssJsonItemKey];

                                if(storedProcessRequestCssTables_12.children){
                                    storedProcessRequestCssTables_12_FileName = storedProcessRequestCssJsonItemKey;
                                    storedProcessRequestCssTables_12_MediaQuriesEntries = Object.entries(storedProcessRequestCssTables_12.children).filter(storedProcessRequestJSONKey => storedProcessRequestJSONKey[0].toUpperCase().includes("@MEDIA"));
                                    storedProcessRequestCssTables_12_NoneMediaQuriesEntries = Object.entries(storedProcessRequestCssTables_12.children).filter(storedProcessRequestJSONKey => !storedProcessRequestJSONKey[0].toUpperCase().includes("@MEDIA"));
                                }                                 
                            }   
                            
                            //13. STYLE text
                            if(storedProcessRequestCssJsonItemKey.toUpperCase().includes("STYLE_TEXT")) {
                                storedProcessRequestCssText_13 = storedProcessRequestCssJsonItem[storedProcessRequestCssJsonItemKey];

                                if(storedProcessRequestCssText_13.children){
                                    storedProcessRequestCssText_13_FileName = storedProcessRequestCssJsonItemKey;
                                    storedProcessRequestCssText_13_MediaQuriesEntries = Object.entries(storedProcessRequestCssText_13.children).filter(storedProcessRequestJSONKey => storedProcessRequestJSONKey[0].toUpperCase().includes("@MEDIA"));
                                    storedProcessRequestCssText_13_NoneMediaQuriesEntries = Object.entries(storedProcessRequestCssText_13.children).filter(storedProcessRequestJSONKey => !storedProcessRequestJSONKey[0].toUpperCase().includes("@MEDIA"));
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
                            storedProcessRequestCssItem_0_MediaQuriesEntries = parameterInputs.Parameters.getValue("parameterProcessRequestCssItem_0_MediaQuriesEntries");
                            storedProcessRequestCssItem_0_NoneMediaQuriesEntries = parameterInputs.Parameters.getValue("parameterProcessRequestCssItem_0_NoneMediaQuriesEntries");
                            
                            storedProcessRequestCssItemStyleFileName = parameterInputs.Parameters.getValue("parameterProcessRequestCssItem_0_FileName");
                            storedProcessRequestCssItemSupportedProperties = parameterInputs.Parameters.getValue("parameterProcessRequestCssStylingItemSupportedProperties");
                            
                            //#endregion

                            //#region 2: CONVERT media queries css style
                            try 
                            {
                                const ExecuteConversionRequest_1_0 = (parameterProcessRequestCssItemList) : any => 
                                {                     
                                    //#region CONVERT html media queries to json standard
                                    
                                    const ExecuteConversionRequest_1_2 = (parameterInputs:SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) : any => 
                                    {
                                        storedProcessRequestCssItem = parameterInputs.Parameters.getValue("parameterProcessRequestCssItem");
                                        storedProcessRequestCssItemChildList = parameterInputs.Parameters.getValue("parameterProcessRequestCssItemChildList") != undefined ? parameterInputs.Parameters.getValue("parameterProcessRequestCssItemChildList") : [];
                                
                                        storedProcessRequestCssItemValid = false;
                                        
                                        storedProcessRequestCssItemChild = (storedInputs.Parameters.getValue("parameterProcessRequestCssItemChild") == true) ? storedProcessRequestCssItem[0][0] : storedProcessRequestCssItem[0];

                                        storedProcessRequestCssItemUsedPropertyMediaQueryModel = 
                                        {
                                            resolutions: {
                                                mediaQuery: storedProcessRequestCssItemChild
                                            },
                                            properties: [],
                                            ChildrenResolutions: []
                                        }                  

                                        storedProcessRequestCssItemChild = (storedInputs.Parameters.getValue("parameterProcessRequestCssItemChild") == true) ? storedProcessRequestCssItem[0][1] : storedProcessRequestCssItem[1];

                                        if(((storedProcessRequestCssItemChild as any).children == undefined) || (Object.keys((storedProcessRequestCssItemChild as any).children).length == 0 && Object.keys((storedProcessRequestCssItemChild as any).attributes).length > 0))
                                        {
                                            Object.entries((storedProcessRequestCssItemChild as any).attributes).map(storedProcessRequestCssItemAttribute => {
                                                if((storedProcessRequestCssItemAttribute[1] as string).toLocaleUpperCase().includes("URL(")) 
                                                {
                                                    storedProcessRequestFileItem = (storedProcessRequestCssItemAttribute[1] as string).replace(/(^.*\(|\).*$)/g, '');
                                                    storedProcessRequestFileItem  = storedProcessRequestFileItem.split("../").join("");
                                                    storedProcessRequestFileList.push(storedProcessRequestFileItem);
                                                }
                                                
                                                storedProcessRequestCssItemUsedPropertyMediaQueryModel.properties.push({
                                                    propertyName: storedProcessRequestCssItemAttribute[0],
                                                    properyValues: (storedProcessRequestCssItemAttribute[1] as string).split(" ")
                                                })
                                            }) 

                                            storedProcessRequestCssItemUsedPropertyMediaQueryModel.ChildrenResolutions = (storedProcessRequestCssItemChildList.length > 0) ? storedProcessRequestCssItemChildList : [];
                                            
                                            storedProcessRequestCssItemValid = true;

                                            return storedProcessRequestCssItemUsedPropertyMediaQueryModel;
                                        }
                                        else
                                        {
                                            if(storedProcessRequestCssItemChildList.length > 0){
                                                storedProcessRequestCssItemUsedPropertyMediaQueryModel.ChildrenResolutions = (storedProcessRequestCssItemChildList.length > 0) ? storedProcessRequestCssItemChildList : [];

                                                storedProcessRequestCssItemValid = true;

                                                return storedProcessRequestCssItemUsedPropertyMediaQueryModel;
                                            }
                                        }

                                        return null;
                                    }

                                    const ExecuteConversionRequest_1_1 = (parameterProcessRequestCssItemList) : any =>
                                    {                                        
                                        storedProcessRequestCssItemList = parameterProcessRequestCssItemList;

                                        storedProcessRequestCssItemList.map(storedProcessRequestCssItem => 
                                        {                                            
                                            if(storedProcessRequestCssItem[1].children != undefined && Object.entries(storedProcessRequestCssItem[1].children).length > 0){
                                                Object.entries(storedProcessRequestCssItem[1].children).map(storedProcessRequestCssItemChild => {
                                                    if(((storedProcessRequestCssItemChild[1]) as any).children != undefined && (Object.keys((storedProcessRequestCssItemChild[1] as any).children).length > 0)) 
                                                    {
                                                        storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                                                        storedInputs.Parameters.setValue("parameterProcessRequestCssItem", Object.entries(((storedProcessRequestCssItemChild[1]) as any).children));
                                                        storedInputs.Parameters.setValue("parameterProcessRequestCssItemChild", true);

                                                        storedProcessRequestCssItemChildResult = ExecuteConversionRequest_1_2(storedInputs) as any;
    
                                                        if(storedProcessRequestCssItemChildResult != null){
                                                            storedProcessRequestCssItemChildList.push(storedProcessRequestCssItemChildResult);
                                                        }

                                                        storedProcessRequestCssCounter += 1;
                                                    }
 
                                                    if(((storedProcessRequestCssItemChild as any)[1].children != undefined && storedProcessRequestCssCounter == (Object.keys((storedProcessRequestCssItemChild as any)[1].children).length)) || ((storedProcessRequestCssItemChild as any)[1].attributes != undefined && Object.keys((storedProcessRequestCssItemChild as any)[1].attributes).length > 0)){
                                                        storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                                                        storedInputs.Parameters.setValue("parameterProcessRequestCssItem", storedProcessRequestCssItemChild);
                                                        storedInputs.Parameters.setValue("parameterProcessRequestCssItemChildList", storedProcessRequestCssItemChildList);
                                                        storedInputs.Parameters.setValue("parameterProcessRequestCssItemChild", false);

                                                        storedProcessRequestCssItemUsedPropertyMediaQueryModel = ExecuteConversionRequest_1_2(storedInputs) as any;
    
                                                        storedProcessRequestCssItemUsedPropertyMediaQueryModelList.push(storedProcessRequestCssItemUsedPropertyMediaQueryModel);

                                                        storedProcessRequestCssCounter = 0;
                                                    } 
                                                    
                                                    storedProcessRequestCssCounter2 += 1;
                                                })     
                                            }   
                                            
                                            if(storedProcessRequestCssItem[1].children != undefined && storedProcessRequestCssCounter2 == (Object.keys(storedProcessRequestCssItem[1].children).length)){
                                                storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                                                storedInputs.Parameters.setValue("parameterProcessRequestCssItem", storedProcessRequestCssItem);
                                                storedInputs.Parameters.setValue("parameterProcessRequestCssItemChildList", storedProcessRequestCssItemUsedPropertyMediaQueryModelList);
                                                storedInputs.Parameters.setValue("parameterProcessRequestCssItemChild", false);

                                                storedProcessRequestCssItemUsedPropertyMediaQueryModel = ExecuteConversionRequest_1_2(storedInputs) as any;

                                                storedProcessRequestCssItemUsedPropertyMediaQueryList.push(storedProcessRequestCssItemUsedPropertyMediaQueryModel);

                                                storedProcessRequestCssItemUsedPropertyMediaQueryModelList = [];
                                                storedProcessRequestCssCounter = 0;
                                                storedProcessRequestCssCounter2 = 0;
                                            }                                             
                                        })                                        
                                   
                                        return storedProcessRequestCssItemUsedPropertyMediaQueryList;
                                    }

                                    storedProcessRequestCssItemUsedPropertyMediaQueryList = ExecuteConversionRequest_1_1(parameterProcessRequestCssItemList);

                                    //#endregion

                                    return storedProcessRequestCssItemUsedPropertyMediaQueryList;
                                }

                                storedProcessRequestCssItemUsedPropertyMediaQueryModel = ExecuteConversionRequest_1_0(storedProcessRequestCssItem_0_MediaQuriesEntries);
                            } 
                            catch (storedProcessRequestMistake) {
                                throw new Error("converting none media query css");
                            }   
                            //#endregion                          

                            //#region 5. OUTPUT css item
                            storedProcessRequestCssItem = {
                                StyleFileName: storedProcessRequestCssItemStyleFileName,
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

                        //#region 2. CONVERT style alignments

                        try 
                        {
                            storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0", storedProcessRequestCssAlignments_1);
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0_FileName", storedProcessRequestCssAlignments_1_FileName);
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0_MediaQuriesEntries", storedProcessRequestCssAlignments_1_MediaQuriesEntries);
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0_NoneMediaQuriesEntries", storedProcessRequestCssAlignments_1_NoneMediaQuriesEntries);                                                       

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
                              storedProcessRequestCssItemConvertedList.push(storedProcessRequestCssItem);
                        } 
                        catch (storedProcessRequestMistake) {
                            throw new Error("converting style alignments");
                        }

                        //#endregion

                        //#region 3. CONVERT style backgrounds

                        try 
                        {
                            storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0", storedProcessRequestCssBackgrounds_2);
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0_FileName", storedProcessRequestCssBackgrounds_2_FileName);
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0_MediaQuriesEntries", storedProcessRequestCssBackgrounds_2_MediaQuriesEntries);
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0_NoneMediaQuriesEntries", storedProcessRequestCssBackgrounds_2_NoneMediaQuriesEntries);                                                       

                            storedInputs.Parameters.setValue("parameterProcessRequestCssStylingItemSupportedProperties", [
                                "background-color",
                                "background",
                                "background-image",
                                "background-repeat",
                                "background-position",
                                "background-attachment",
                                "background-clip",
                                "background-orgin",
                                "background-size"
                              ]);                                                       
                            
                              storedProcessRequestCssItem = await ExecuteProcessHelper(storedInputs);
                              storedProcessRequestCssItemConvertedList.push(storedProcessRequestCssItem);
                        } 
                        catch (storedProcessRequestMistake) {
                            throw new Error("converting style backgrounds");
                        }                        

                        //#endregion

                        //#region 4. CONVERT style borders

                        try 
                        {
                            storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0", storedProcessRequestCssBorders_3);
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0_FileName", storedProcessRequestCssBorders_3_FileName);
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0_MediaQuriesEntries", storedProcessRequestCssBorders_3_MediaQuriesEntries);
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0_NoneMediaQuriesEntries", storedProcessRequestCssBorders_3_NoneMediaQuriesEntries);                                                       

                            storedInputs.Parameters.setValue("parameterProcessRequestCssStylingItemSupportedProperties", [
                                "border-radius",
                                "border-top-left-radius",
                                "border-top-right-radius",
                                "border-bottom-right-radius",
                                "border-image",
                                "border-image-source",
                                "border-image-slice",
                                "border-image-width",
                                "border-image-outset",
                                "border-image-repeat",
                                "border",
                                "border-right",
                                "border-left",
                                "border-top",
                                "border-bottom",
                                "border-width",
                                "border-top-width",
                                "border-bottom-width",
                                "border-left-width",
                                "border-right-width",
                                "border-style",
                                "border-top-style",
                                "border-bottom-style",
                                "border-left-style",
                                "border-right-style",
                                "border-color",
                                "border-top-color",
                                "border-bottom-color",
                                "border-left-color",
                                "border-right-color",
                                "border-collapse",
                                "border-spacing"
                              ]);                                                       
                            
                              storedProcessRequestCssItem = await ExecuteProcessHelper(storedInputs);
                              storedProcessRequestCssItemConvertedList.push(storedProcessRequestCssItem);
                        } 
                        catch (storedProcessRequestMistake) {
                            throw new Error("converting style borders");
                        }                          

                        //#endregion

                        //#region 5. CONVERT style colors

                        try 
                        {
                            storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0", storedProcessRequestCssColors_4);
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0_FileName", storedProcessRequestCssColors_4_FileName);
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0_MediaQuriesEntries", storedProcessRequestCssColors_4_MediaQuriesEntries);
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0_NoneMediaQuriesEntries", storedProcessRequestCssColors_4_NoneMediaQuriesEntries);                                                       

                            storedInputs.Parameters.setValue("parameterProcessRequestCssStylingItemSupportedProperties", [
                                "color",
                                "opacity"
                              ]);                                                       
                            
                              storedProcessRequestCssItem = await ExecuteProcessHelper(storedInputs);
                              storedProcessRequestCssItemConvertedList.push(storedProcessRequestCssItem);
                        } 
                        catch (storedProcessRequestMistake) {
                            throw new Error("converting style colors");
                        }                         

                        //#endregion

                        //#region 6. CONVERT style effects

                        try 
                        {
                            storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0", storedProcessRequestCssEffects_5);
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0_FileName", storedProcessRequestCssEffects_5_FileName);
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0_MediaQuriesEntries", storedProcessRequestCssEffects_5_MediaQuriesEntries);
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0_NoneMediaQuriesEntries", storedProcessRequestCssEffects_5_NoneMediaQuriesEntries);                                                       

                            storedInputs.Parameters.setValue("parameterProcessRequestCssStylingItemSupportedProperties", [
                                "box-shadow",
                                "transform",
                                "transform-origin",
                                "transition",
                                "transition-property",
                                "transition-duration",
                                "transition-timing-function",
                                "transition-delay"
                              ]);                                                       
                            
                              storedProcessRequestCssItem = await ExecuteProcessHelper(storedInputs);
                              storedProcessRequestCssItemConvertedList.push(storedProcessRequestCssItem);
                        } 
                        catch (storedProcessRequestMistake) {
                            throw new Error("converting style effects");
                        }                            

                        //#endregion

                        //#region 7. CONVERT style flow

                        try 
                        {
                            storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0", storedProcessRequestCssFlow_6);
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0_FileName", storedProcessRequestCssFlow_6_FileName);
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0_MediaQuriesEntries", storedProcessRequestCssFlow_6_MediaQuriesEntries);
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0_NoneMediaQuriesEntries", storedProcessRequestCssFlow_6_NoneMediaQuriesEntries);                                                       

                            storedInputs.Parameters.setValue("parameterProcessRequestCssStylingItemSupportedProperties", [
                                "display",
                                "visibility"
                              ]);                                                       
                            
                              storedProcessRequestCssItem = await ExecuteProcessHelper(storedInputs);
                              storedProcessRequestCssItemConvertedList.push(storedProcessRequestCssItem);
                        } 
                        catch (storedProcessRequestMistake) {
                            throw new Error("converting style flow");
                        } 

                        //#endregion

                        //#region 8. CONVERT style lists

                        try 
                        {
                            storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0", storedProcessRequestCssLists_7);
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0_FileName", storedProcessRequestCssLists_7_FileName);
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0_MediaQuriesEntries", storedProcessRequestCssLists_7_MediaQuriesEntries);
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0_NoneMediaQuriesEntries", storedProcessRequestCssLists_7_NoneMediaQuriesEntries);                                                       

                            storedInputs.Parameters.setValue("parameterProcessRequestCssStylingItemSupportedProperties", [
                                "content",
                                "quotes",
                                "counter-increment",
                                "counter-reset",
                                "list-style",
                                "list-style-type",
                                "list-style-image",
                                "list-style-position"
                              ]);                                                       
                            
                              storedProcessRequestCssItem = await ExecuteProcessHelper(storedInputs);
                              storedProcessRequestCssItemConvertedList.push(storedProcessRequestCssItem);
                        } 
                        catch (storedProcessRequestMistake) {
                            throw new Error("converting style list");
                        } 

                        //#endregion

                        //#region 9. CONVERT style margins

                        try 
                        {
                            storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0", storedProcessRequestCssMargins_8);
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0_FileName", storedProcessRequestCssMargins_8_FileName);
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0_MediaQuriesEntries", storedProcessRequestCssMargins_8_MediaQuriesEntries);
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0_NoneMediaQuriesEntries", storedProcessRequestCssMargins_8_NoneMediaQuriesEntries);                                                       

                            storedInputs.Parameters.setValue("parameterProcessRequestCssStylingItemSupportedProperties", [
                                "margin",
                                "margin-top",
                                "margin-right",
                                "margin-left",
                                "margin-bottom"
                              ]);                                                       
                            
                              storedProcessRequestCssItem = await ExecuteProcessHelper(storedInputs);
                              storedProcessRequestCssItemConvertedList.push(storedProcessRequestCssItem);
                        } 
                        catch (storedProcessRequestMistake) {
                            throw new Error("converting style margins");
                        } 

                        //#endregion

                        //#region 10. CONVERT style misc

                        try 
                        {
                            storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0", storedProcessRequestCssMisc_9);
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0_FileName", storedProcessRequestCssMisc_9_FileName);
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0_MediaQuriesEntries", storedProcessRequestCssMisc_9_MediaQuriesEntries);
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0_NoneMediaQuriesEntries", storedProcessRequestCssMisc_9_NoneMediaQuriesEntries);                                                       

                            storedInputs.Parameters.setValue("parameterProcessRequestCssStylingItemSupportedProperties", [
                                "cursor",
                                "outline",
                                "outline-style",
                                "outline-color",
                                "outline-width",
                                "direction",
                                "unicode-bidi",
                                "all",
                                "page-break-before",
                                "page-break-after",
                                "page-break-inside",
                                "orphans",
                                "widows"
                              ]);                                                       
                            
                              storedProcessRequestCssItem = await ExecuteProcessHelper(storedInputs);
                              storedProcessRequestCssItemConvertedList.push(storedProcessRequestCssItem);
                        } 
                        catch (storedProcessRequestMistake) {
                            throw new Error("converting style misc");
                        } 

                        //#endregion

                        //#region 11. CONVERT style padding

                        try 
                        {
                            storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0", storedProcessRequestCssPadding_10);
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0_FileName", storedProcessRequestCssPadding_10_FileName);
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0_MediaQuriesEntries", storedProcessRequestCssPadding_10_MediaQuriesEntries);
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0_NoneMediaQuriesEntries", storedProcessRequestCssPadding_10_NoneMediaQuriesEntries);                                                       

                            storedInputs.Parameters.setValue("parameterProcessRequestCssStylingItemSupportedProperties", [
                                "padding",
                                "padding-top",
                                "padding-bottom",
                                "padding-left",
                                "padding-right"
                              ]);                                                       
                            
                            storedProcessRequestCssItem = await ExecuteProcessHelper(storedInputs);
                            storedProcessRequestCssItemConvertedList.push(storedProcessRequestCssItem);
                        } 
                        catch (storedProcessRequestMistake) {
                            throw new Error("converting style padding");
                        } 

                        //#endregion

                        //#region 12. CONVERT style sizes

                        try 
                        {
                            storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0", storedProcessRequestCssSizes_11);
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0_FileName", storedProcessRequestCssSizes_11_FileName);
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0_MediaQuriesEntries", storedProcessRequestCssSizes_11_MediaQuriesEntries);
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0_NoneMediaQuriesEntries", storedProcessRequestCssSizes_11_NoneMediaQuriesEntries);                                                       

                            storedInputs.Parameters.setValue("parameterProcessRequestCssStylingItemSupportedProperties", [
                                "width",
                                "height",
                                "min-width",
                                "max-width",
                                "min-height",
                                "max-height"
                              ]);                                                       
                            
                            storedProcessRequestCssItem = await ExecuteProcessHelper(storedInputs);
                            storedProcessRequestCssItemConvertedList.push(storedProcessRequestCssItem);
                        } 
                        catch (storedProcessRequestMistake) {
                            throw new Error("converting style sizes");
                        } 

                        //#endregion

                        //#region 13. CONVERT style tables

                        try 
                        {
                            storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0", storedProcessRequestCssTables_12);
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0_FileName", storedProcessRequestCssTables_12_FileName);
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0_MediaQuriesEntries", storedProcessRequestCssTables_12_MediaQuriesEntries);
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0_NoneMediaQuriesEntries", storedProcessRequestCssTables_12_NoneMediaQuriesEntries);                                                       

                            storedInputs.Parameters.setValue("parameterProcessRequestCssStylingItemSupportedProperties", [
                                "table-layout",
                                "empty-cells",
                                "caption-side"
                              ]);                                                       
                            
                            storedProcessRequestCssItem = await ExecuteProcessHelper(storedInputs);
                            storedProcessRequestCssItemConvertedList.push(storedProcessRequestCssItem);
                        } 
                        catch (storedProcessRequestMistake) {
                            throw new Error("converting style tables");
                        } 

                        //#endregion

                        //#region 14. CONVERT style text

                        try 
                        {
                            storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0", storedProcessRequestCssText_13);
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0_FileName", storedProcessRequestCssText_13_FileName);
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0_MediaQuriesEntries", storedProcessRequestCssText_13_MediaQuriesEntries);
                            storedInputs.Parameters.setValue("parameterProcessRequestCssItem_0_NoneMediaQuriesEntries", storedProcessRequestCssText_13_NoneMediaQuriesEntries);                                                       

                            storedInputs.Parameters.setValue("parameterProcessRequestCssStylingItemSupportedProperties", [
                                "font",
                                "font-family",
                                "font-style",
                                "font-variant",
                                "font-weight",
                                "font-size",
                                "font-stretch",
                                "font-size-adjust",
                                "font-synthesis",
                                "line-height",
                                "letter-spacing",
                                "word-spacing",
                                "text-align",
                                "text-decoration",
                                "text-decoration-line",
                                "text-decoration-style",
                                "text-decoration-color",
                                "text-indent",
                                "text-transform",
                                "vertical-align",
                                "white-space"
                              ]);                                                       
                            
                            storedProcessRequestCssItem = await ExecuteProcessHelper(storedInputs);
                            storedProcessRequestCssItemConvertedList.push(storedProcessRequestCssItem);
                        } 
                        catch (storedProcessRequestMistake) {
                            throw new Error("converting style text");
                        } 

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
