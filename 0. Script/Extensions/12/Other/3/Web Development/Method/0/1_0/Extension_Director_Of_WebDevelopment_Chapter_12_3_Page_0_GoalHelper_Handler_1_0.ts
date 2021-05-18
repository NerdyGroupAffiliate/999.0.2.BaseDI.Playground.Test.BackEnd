//#region Imports

//#region 3rd Party

//#endregion

//#region BaseDI

import { release } from "process";
import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";


import * as Extension_Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0 from "../../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/3/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0";
import * as Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0 from "../../../../../../../../../0. Script/Extensions/11/Automate Manual Task/1/Risk Management/Method/0/1_0/Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0";
import * as Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0 from "../../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/0/1_0/Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0";

import * as SingleParmPoco_12_2_1_0 from "../../../../../../../../../0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

//#endregion

//#endregion

export namespace BaseDI.Professional.Web_Development.Extensions_0 {
    export class Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0 {
        constructor()
        {
            //#region 1. INPUTS

            //#endregion

            //#region 2. PROCESS

            //#endregion

            //#region 3. OUTPUT

            //#endregion
        }

        //#region HTML MANAGEMENT


        public static async Step_0_0_Framework_Convert_HtmlToJSON_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) {
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

                //#region MEMORIZE input action name

                let storedInputRequestActionName: string = parameterInputs.Parameters.getValue("parameterInputRequestActionName");

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
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedInputRequestActionName);

                //2. PROCESS
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "VALIDATING request inputs");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_0_0_Framework_Convert_HtmlToJSON_1_0 -> ValidateInputs");

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

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestRequestHandlerFileName")) {
                        storedOutputResponseMessage += "***parameterProcessRequestRequestHandlerFileName*** cannot be blank or empty.\n"
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
            await ValidateInputs(parameterInputs);

            //#endregion

            //#region DEFINE control variables
            
            //#endregion

            //#region DEFINE input variables

            let storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            let storedInputRequestHtmlContainerJSON: any = "";
            let storedInputRequestHtmlRowsJSON: any = "";
            let storedInputRequestHtmlColumnsJSON: any = "";
            let storedInputRequestHtmlContentJSON: any = "";

            let storedInputRequestHtmlStylesFiltered: any = "";
            let storedInputRequestHtmlStylesJSON: any = "";

            //#endregion

            //#region DEFINE process variables


            //#endregion

            //#region DEFINE output variables

            let storedOutputResponseData: any;

            let storedOutputResponseHtmlResultInlineStylesString: string = "";
            let storedOutputResponseHtmlResultString: string = "";

            let storedOutputResponseObservationItem: any;

            //#endregion

            ///////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input action name

            let storedInputRequestActionName: any = parameterInputs.Parameters.getValue("parameterInputRequestActionName");

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

            let storedProcessRequestDeveloperMode: boolean = storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedProcessRequestDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (parameterInputs.Parameters.getValue("parameterProcessRequestExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") ? parameterInputs.Parameters.getValue("parameterProcessRequestExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") : null);

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED

            //0. CONTROLLERS
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedInputRequestActionName);

            //1. INPUTS

            //2. PROCESS
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONVERTING json to html");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_0_0_Framework_Convert_HtmlToJSON_1_0");

            //3. OUTPUTS  

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALMiddleOfProcess", true);

            //#endregion

            //#region MEMORIZE process storyline details

            let storedProcessRequestDataStorylineDetails: any = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");

            //#endregion

            //#region MEMORIZE process centralized handlers

            let storedProcessRequestCentralizedDisturber = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedDisturber");
            let storedProcessRequestCentralizedSensor = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedSensor");
            let storedProcessRequestCentralizedStorer = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedStorer");

            //#endregion  
            
            //#region MEMORIZE process storage details

            let storedProcessRequestStorageKeyUniqueness:string = parameterInputs.Parameters.getValue("parameterProcessRequestRequestHandlerFileName"); 
            let storedProcessRequestStorageCounter: number = 0;

            let storedProcessRequestStorageDictionary: Object = {};
            let storedProcessRequestStorageKey: string = "StorageKey_" + storedProcessRequestStorageKeyUniqueness + "-" + "Read-BaseDI_PresentationHTML_Content";

            let storedProcessRequestStorageUpdateMode: boolean = false;

            //#endregion            

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output observation details

            storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

            let storedOutputResponseObservationPresentationTemplateItem: string = "{ \"htmlResult\": \"{htmlResult}\" }";
            let storedOutputResponseObservationBusinessTemplateItem: string = "{}";
            let storedOutputResponseObservationServiceTemplateItem: string = "{}";
            let storedOutputResponseObservationSecurityTemplateItem: string = "{}";
            let storedOutputResponseObservationDataTemplateItem: string = "{}";

            let storedOutputResponseObservationDataTemplateBuilder = "";

            //0. CONTROLLERS

            //1. INPUTS
            storedInputs.Parameters.setValue("parameterInputRequestActionName", storedInputRequestActionName);

            //2. PROCESS
            storedInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "RENDER web page");
            storedInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestSettings);
            storedInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);

            //3. OUTPUTS
            storedInputs.Parameters.setValue("parameterOutputResponseObservationFileName", "Page_1_5_Process_StorySetting_12_3_1_0.cs");
            storedInputs.Parameters.setValue("parameterOutputResponseObservationMethodName", "Action");
            storedInputs.Parameters.setValue("parameterOutputResponseObservationPresentationTemplate", storedOutputResponseObservationPresentationTemplateItem);
            storedInputs.Parameters.setValue("parameterOutputResponseObservationBusinessTemplate", storedOutputResponseObservationBusinessTemplateItem);
            storedInputs.Parameters.setValue("parameterOutputResponseObservationServiceTemplate", storedOutputResponseObservationServiceTemplateItem);
            storedInputs.Parameters.setValue("parameterOutputResponseObservationSecurityTemplate", storedOutputResponseObservationSecurityTemplateItem);
            storedInputs.Parameters.setValue("parameterOutputResponseObservationDataTemplate", storedOutputResponseObservationDataTemplateItem);

            storedOutputResponseObservationItem = await Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.BaseDI.Professional.Programming.Extensions_0.Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.Step_X_X_Framework_Output_JsonObservationNode_1_0(storedInputs);

            //#endregion

            //#endregion
            
            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE json to html conversion

            try {
                //#region IDEAL CASE - USE baseDI converter

                //#region 1. CONVERT html container

                try {
                    const ExecuteConversionRequest = async (): Promise<string> => {
                        storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

                        //0. CONTROLLERS

                        //1. INPUTS

                        //2. PROCESS                        
                        storedInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestSettings);
                        storedInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilter", storedProcessRequestDataStorylineDetails);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilterKey", "searchkey");
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilterValue", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLContainer");

                        //3. OUTPUTS
                        storedInputs.Parameters.setValue("parameterOutputResponseAsArray", false);

                        storedInputRequestHtmlContainerJSON = await Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.BaseDI.Professional.Programming.Extensions_0.Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(storedInputs);

                        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                        storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

                        //0. CONTROLLERS

                        //1. INPUTS                       
                        storedInputs.Parameters.setValue("parameterInputRequestHtmlContainerJSON", storedInputRequestHtmlContainerJSON);

                        //2. PROCESS
                        storedInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                        storedInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestSettings);
                        storedInputs.Parameters.setValue("parameterProcessRequestCentralizedStorer", storedProcessRequestCentralizedStorer);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);

                        //3. OUTPUTS

                        storedOutputResponseHtmlResultString = await this.Step_1_0_Framework_Convert_HtmlContainerJsonToHtml_1_0(storedInputs);

                        return storedOutputResponseHtmlResultString;
                    };

                    storedOutputResponseHtmlResultString = await ExecuteConversionRequest();
                }
                catch (storedProcessRequestMistake) {
                    throw new Error("converting html container");
                }
                //#endregion

                //#region 2. CONVERT html rows

                try {
                    const ExecuteConversionRequest = async (): Promise<string> => {
                        storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

                        //0. CONTROLLERS

                        //1. INPUTS

                        //2. PROCESS                             
                        storedInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestSettings);
                        storedInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilter", storedProcessRequestDataStorylineDetails);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilterKey", "searchkey");
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilterValue", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLRows");

                        //3. OUTPUTS
                        storedInputs.Parameters.setValue("parameterOutputResponseAsArray", false);

                        storedInputRequestHtmlRowsJSON = await Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.BaseDI.Professional.Programming.Extensions_0.Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(storedInputs);

                        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                        
                        storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

                        //0. CONTROLLERS

                        //1. INPUTS                        
;
                        storedInputs.Parameters.setValue("parameterInputRequestHtmlRowsJSON", storedInputRequestHtmlRowsJSON);
                        
                        //2. PROCESS
                        storedInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                        storedInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestSettings);
                        storedInputs.Parameters.setValue("parameterProcessRequestCentralizedStorer", storedProcessRequestCentralizedStorer);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);

                        //3. OUTPUTS
                        storedInputs.Parameters.setValue("parameterOutputResponseHtmlContainerString", storedOutputResponseHtmlResultString);

                        storedOutputResponseHtmlResultString = await this.Step_2_0_Framework_Convert_HtmlRowsJsonToHtml_1_0(storedInputs);

                        return storedOutputResponseHtmlResultString;
                    };

                    storedOutputResponseHtmlResultString = await ExecuteConversionRequest();
                }
                catch (mistake) {
                    throw new Error("converting html rows");
                }

                //#endregion

                //#region 3. CONVERT html columns

                try {
                    const ExecuteConversionRequest = async (): Promise<string> => {
                        storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

                        //0. CONTROLLERS

                        //1. INPUTS    

                        //2. PROCESS
                        storedInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestSettings);
                        storedInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilter", storedProcessRequestDataStorylineDetails);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilterKey", "searchkey");
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilterValue", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLColumns");

                        storedInputs.Parameters.setValue("parameterOutputResponseAsArray", false);

                        storedInputRequestHtmlColumnsJSON = await Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.BaseDI.Professional.Programming.Extensions_0.Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(storedInputs);

                        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                        
                        storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

                        //0. CONTROLLERS

                        //1. INPUTS                            

                        storedInputs.Parameters.setValue("parameterInputRequestHtmlColumnsJSON", storedInputRequestHtmlColumnsJSON);
                        
                        //2. PROCESS
                        storedInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                        storedInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestSettings);
                        storedInputs.Parameters.setValue("parameterProcessRequestCentralizedStorer", storedProcessRequestCentralizedStorer);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);

                        //3. OUTPUTS
                        storedInputs.Parameters.setValue("parameterOutputResponseHtmlRowString", storedOutputResponseHtmlResultString);

                        storedOutputResponseHtmlResultString = await this.Step_3_0_Framework_Convert_HtmlColumnsJsonToHtml_1_0(storedInputs);

                        return storedOutputResponseHtmlResultString;
                    };

                    storedOutputResponseHtmlResultString = await ExecuteConversionRequest();
                }
                catch (mistake) {
                    throw new Error("converting html rows");
                }

                //#endregion

                //#region 4. CONVERT html content

                try {
                    const ExecuteConversionRequest = async (): Promise<string> => {
                        storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

                        //0. CONTROLLERS

                        //1. INPUTS    

                        //2. PROCESS                        
                        storedInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestSettings);
                        storedInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilter", storedProcessRequestDataStorylineDetails);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilterKey", "searchkey");
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilterValue", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLContent");

                        //3. OUTPUTS
                        storedInputs.Parameters.setValue("parameterOutputResponseAsArray", false);

                        storedInputRequestHtmlContentJSON = await Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.BaseDI.Professional.Programming.Extensions_0.Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(storedInputs);

                        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                        storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

                        //0. CONTROLLERS

                        //1. INPUTS                          

                        storedInputs.Parameters.setValue("parameterInputRequestHtmlContentJSON", storedInputRequestHtmlContentJSON);

                        //2. PROCESS  
                        storedInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                        storedInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestSettings);
                        storedInputs.Parameters.setValue("parameterProcessRequestCentralizedStorer", storedProcessRequestCentralizedStorer);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);

                        //3. OUTPUTS
                        storedInputs.Parameters.setValue("parameterOutputResponseHtmlColumnString", storedOutputResponseHtmlResultString);

                        storedOutputResponseHtmlResultString = await this.Step_4_0_Framework_Convert_HtmlContentJsonToHtml_1_0(storedInputs);

                        return storedOutputResponseHtmlResultString;
                    };

                    storedOutputResponseHtmlResultString = await ExecuteConversionRequest();
                }
                catch (storedProcessRequestMistake) {
                    throw new Error("converting html content");
                }

                //#endregion

                //#region 5. CONVERT html inline styles

                try {
                    const ExecuteConversionRequest = async (): Promise<string> => {
                        storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

                        //0. CONTROLLERS

                        //1. INPUTS    

                        //2. PROCESS                                
                        storedInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestSettings);
                        storedInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilter", storedProcessRequestDataStorylineDetails);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilterKey", "searchkey");
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilterValue", "HTMLContentStylingDetails_SetImplementer_ProductCreation_WebDevelopment_CSS");

                        //3. OUTPUTS
                        storedInputs.Parameters.setValue("parameterOutputResponseAsArray", false);

                        storedInputRequestHtmlStylesJSON = await Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.BaseDI.Professional.Programming.Extensions_0.Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(storedInputs);

                        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                        storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();   

                        //0. CONTROLLERS

                        //1. INPUTS                                          
                        storedInputs.Parameters.setValue("parameterInputRequestHtmlStylesJSON", storedInputRequestHtmlStylesJSON);

                        //2. PROCESS 
                        storedInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                        storedInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestSettings);
                        storedInputs.Parameters.setValue("parameterProcessRequestCentralizedStorer", storedProcessRequestCentralizedStorer);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);

                        //3. OUTPUTS
                        return await this.Step_5_0_Framework_Convert_HtmlCssJSONToInlineStyles_1_0(storedInputs);
                    };

                    storedOutputResponseHtmlResultInlineStylesString = await ExecuteConversionRequest();
                }
                catch (storedProcessRequestMistake) {
                    throw new Error("converting html inline styles");
                }

                //#endregion

                //#region 6. CONVERT html inline scripts

                //TODO
                try {
                    const ExecuteConversionRequest = async () => {

                    }
                }
                catch (storedProcessRequestMistake) {
                    throw new Error("converting html inline scripts");
                }

                //#endregion

                //#region 7. CONVERT html inline metadata

                //TODO
                try {
                    const ExecuteConversionRequest = async () => {

                    }
                }
                catch (storedProcessRequestMistake) {
                    throw new Error("converting html inline metadata");
                }

                //#endregion

                //#region 8. OUTPUT html string

                try {
                    const ExecuteOutputResponse = async (): Promise<string> => {
                        storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

                        //0. CONTROLLERS

                        //1. INPUTS                            
                        storedInputs.Parameters.setValue("parameterInputRequestHtmlMetaData", "");
                        storedInputs.Parameters.setValue("parameterInputRequestHtmlTitle", "");
                        storedInputs.Parameters.setValue("parameterInputRequestHtmlScripts", "");
                        storedInputs.Parameters.setValue("parameterInputRequestHtmlStyles", storedOutputResponseHtmlResultInlineStylesString);
                        storedInputs.Parameters.setValue("parameterInputRequestHtmlAdditionalHeadData", "");
                        storedInputs.Parameters.setValue("parameterInputRequestHtmlBody", storedOutputResponseHtmlResultString);

                        //2. PROCESS
                        storedInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                        storedInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestSettings);
                        storedInputs.Parameters.setValue("parameterProcessRequestCentralizedStorer", storedProcessRequestCentralizedStorer);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);

                        //3. OUTPUTS
                        return await this.Step_8_0_Framework_Convert_HtmlStructureToString_1_0(storedInputs);
                    };

                    storedOutputResponseHtmlResultString = await ExecuteOutputResponse();
                }
                catch (storedProcessRequestMistake) {
                    throw new Error("converting html content");
                }

                //#endregion

                //#region 9. STORE html string

                try {
                    const ExecuteStorageRequest = async () => {
                        storedOutputResponseObservationItem = storedOutputResponseObservationItem.replace("'", "\"");
                        storedOutputResponseObservationItem = storedOutputResponseObservationItem.replace("{htmlResult}", escape(storedOutputResponseHtmlResultString));

                        storedProcessRequestStorageDictionary[storedProcessRequestStorageKey] = JSON.parse(storedOutputResponseObservationItem.toString());

                        //#region USE existing output observation item

                        storedProcessRequestDataStorylineDetails.outputs[1].baseDIObservations.map(storedOutputResponseObservation => {
                            if (Object.keys(storedOutputResponseObservation).length > 0 && Object.keys(storedOutputResponseObservation)[0].toUpperCase() == storedProcessRequestStorageKey.toUpperCase()) {
                                storedProcessRequestDataStorylineDetails.outputs[1].baseDIObservations[storedProcessRequestStorageCounter][storedProcessRequestStorageKey] = JSON.parse(storedOutputResponseHtmlResultString.toString());

                                storedOutputResponseData = storedProcessRequestDataStorylineDetails;

                                storedProcessRequestStorageUpdateMode = true;

                                return;
                            }

                            storedProcessRequestStorageCounter += 1;
                        });

                        //#endregion

                        //#region USE new output observation item
                        if (!storedProcessRequestStorageUpdateMode) {
                            storedProcessRequestDataStorylineDetails.outputs[1].baseDIObservations.push(storedProcessRequestStorageDictionary);
                        }
                        //#endregion

                        return storedProcessRequestDataStorylineDetails;
                    };

                    storedOutputResponseData = await ExecuteStorageRequest();
                }
                catch (storedProcessRequestMistake) {
                    throw new Error("storing html string output observation");
                }

                //#endregion

                //#endregion
            }
            catch (storedProcessRequestMistake) {
                //#region EDGE CASE - USE developer logger

                if (storedProcessRequestDeveloperMode) {
                    storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                    //0. CONTROLLERS

                    //1. INPUTS

                    //2. PROCESS
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED converting json to html");                  
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Action");
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMistake", storedProcessRequestMistake);

                    //3. OUTPUTS
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                    await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                }

                //#endregion

                //#region EDGE CASE - USE exception handler

                throw new Error("CONVERSION request failed " + storedProcessRequestMistake.message);

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

        private static Step_0_0_Framework_Store_HtmlAttributesToArray_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) : string {
            //#region 1. INPUTS

            //#region VALIDATE input parameters

            const ValidateInputs = (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) => {
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

                //#region MEMORIZE input action name

                let storedInputRequestActionName: string = parameterInputs.Parameters.getValue("parameterInputRequestActionName");

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
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedInputRequestActionName);

                //2. PROCESS
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "VALIDATING request inputs");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_0_0_Framework_Store_HtmlAttributesToArray_1_0 -> ValidateInputs");

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

                if (parameterInputs != null || parameterInputs != undefined || parameterInputs.Parameters != null && parameterInputs.Parameters != undefined) 
                {        
                    //0. CONTROLLERS

                    //1. INPUTS

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

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestHtmlAttributes")) {
                        storedOutputResponseMessage += "***parameterProcessRequestHtmlAttributes*** cannot be blank or empty.\n"
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

                    //3. OUTPUTS   

                    if (storedProcessRequestMistakeMade) {
                        //#region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode) {
                            storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

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

                        //3. OUTPUTS
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
            ValidateInputs(parameterInputs);

            //#endregion

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables

            let storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

             //#endregion

            //#region DEFINE process variables


            //#endregion

            //#region DEFINE output variables

            let storedOutputResponseData: Array<string>;
            let storedOutputResponseHtmlAttributesOutput: Array<any> = [];

            //#endregion

            ///////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input action name

            let storedInputRequestActionName: any = parameterInputs.Parameters.getValue("parameterInputRequestActionName");

            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process request html

            let storedProcessRequestHtmlAttributes: any = parameterInputs.Parameters.getValue("parameterProcessRequestHtmlAttributes");

            //#endregion

            //#region MEMORIZE process request tracker

            let storedProcessRequestTracker: any = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE process request settings

            let storedProcessRequestSettings: any = storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion  

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedProcessRequestDeveloperLoggingStartUpProcessInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = (parameterInputs.Parameters.getValue("parameterProcessRequestExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") ? parameterInputs.Parameters.getValue("parameterProcessRequestExtraData")?.KeyValuePairs?.getValue("storedProcessRequestDeveloperLoggingInputs") : null);

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED

            //0. CONTROLLERS
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedInputRequestActionName);

            //1. INPUTS

            //2. PROCESS
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONVERTING json to html attributes");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_0_0_Framework_Store_HtmlAttributesToArray_1_0");

            //3. OUTPUTS  

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALMiddleOfProcess", true);

            //#endregion

            //#region MEMORIZE process storyline details

            let storedProcessRequestDataStorylineDetails: any = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");

            //#endregion

            //#region MEMORIZE process centralized handlers

            let storedProcessRequestCentralizedDisturber = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedDisturber");
            let storedProcessRequestCentralizedSensor = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedSensor");
            let storedProcessRequestCentralizedStorer = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedStorer");

            //#endregion             

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxx

           
            //#endregion

            //#endregion


            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE json to html conversion

            //#region IDEAL CASE - USE json metadata

            const ExecuteConversionRequest = () : Array<string> => {
                try {
                    for (var storedProcessRequestHtmlAttribute in storedProcessRequestHtmlAttributes) {
                        storedOutputResponseHtmlAttributesOutput.push(`${Object.keys(storedProcessRequestHtmlAttributes[storedProcessRequestHtmlAttribute])[0]}="${Object.values(storedProcessRequestHtmlAttributes[storedProcessRequestHtmlAttribute])[0]}"`)
                    }

                    return storedOutputResponseHtmlAttributesOutput;
                }
                catch (storedProcessRequestMistake) {
                    //#region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode) {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        //0. CONTROLLERS

                        //1. INPUTS

                        //2. PROCESS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED converting json to html attributes");                      
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_0_0_Framework_Store_HtmlAttributesToArray_1_0.ExecuteConversionRequest");

                        //3. OUTPUTS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    //#endregion

                    //#region EDGE CASE - USE exception handler

                    throw new Error("CONVERSION request failed " + storedProcessRequestMistake.toString());

                    //#endregion
                }
            }

            storedOutputResponseData = ExecuteConversionRequest();

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN converted data

            //#region IDEAL CASE - USE html string

            return storedOutputResponseData.join(" ");

            //#endregion

            //#endregion

            //#endregion                   
        }

        public static async Step_1_0_Framework_Convert_HtmlContainerJsonToHtml_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<string>
        {
            //#region 1. INPUTS

            //#region VALIDATE input parameters

            const ValidateInputs = async (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) => {
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

                //#region MEMORIZE input action name

                let storedInputRequestActionName: string = parameterInputs.Parameters.getValue("parameterInputRequestActionName");

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
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedInputRequestActionName);

                //2. PROCESS
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "VALIDATING request inputs");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_1_0_Framework_Convert_HtmlContainerJsonToHtml_1_0 -> ValidateInputs");

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

                    if (!parameterInputs.Parameters.containsKey("parameterInputRequestHtmlContainerJSON")) {
                        storedOutputResponseMessage += "***parameterInputRequestHtmlContainerJSON*** cannot be blank or empty.\n"
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

                    //3. OUTPUTS

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

                        //3. OUTPUTS  
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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            //#endregion

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables

            let storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //#endregion

            //#region DEFINE process variables



            //#endregion

            //#region DEFINE output variables

            let storedOutputResponseData: any = null;

            //#endregion

            ///////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input action name

            let storedInputRequestActionName: string = parameterInputs.Parameters.getValue("parameterInputRequestActionName");

            //#endregion

            //#region MEMORIZE input request html

            let storedInputRequestHtmlContainerJSON: any = parameterInputs.Parameters.getValue("parameterInputRequestHtmlContainerJSON");

            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process centralized processes

            let storedProcessRequestCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object> = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedStorer");
            
            //#endregion

            //#region MEMORIZE process request tracker

            let storedProcessRequestTracker: Object = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE process request settings

            let storedProcessRequestSettings: any = storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE ? storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE : false;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED

            //0. CONTROLLERS
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedInputRequestActionName);

            //1. INPUTS                        

            //2. PROCESS
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONVERTING json to html container");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_1_0_Framework_Convert_HtmlContainerJsonToHtml_1_0");

            //3. OUTPUTS

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters.getValue("parameterOPTIONALIgnoreDeveloperConsoleLog"));

            //#endregion

            //#region MEMORIZE process storyline details

            let storedProcessRequestDataStorylineDetails: any = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

            //#endregion            

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output xxx xxx


            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE json to html conversion

            //#region IDEAL CASE - USE json metadata

            const ExecuteConversionRequest = async (): Promise<any> => {
                try 
                {
                    parameterInputs.Parameters.remove("parameterProcessRequestHtmlAttributes");
                    parameterInputs.Parameters.setValue("parameterProcessRequestHtmlAttributes", storedInputRequestHtmlContainerJSON.value.HTMLContentItems[0].Attributes);

                    storedOutputResponseData = this.Step_0_0_Framework_Store_HtmlAttributesToArray_1_0(parameterInputs);

                    //OUTPUT: <div                                                                  id="container_xxx">         {HTMLRows_Replace}</div>
                    return   `<${storedInputRequestHtmlContainerJSON.value.HTMLContentItems[0].Tag} ${storedOutputResponseData}>{HTMLRows_Replace}</${storedInputRequestHtmlContainerJSON.value.HTMLContentItems[0].Tag}>`;
                }
                catch (storedProcessRequestMistake) {
                    //#region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode) {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        //0. CONTROLLERS

                        //1. INPUTS

                        //2. PROCESS                        
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED converting to html container");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_1_0_Framework_Convert_HtmlContainerJsonToHtml_1_0.ExecuteConversionRequest");

                        //3. OUTPUTS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                        await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    //#endregion

                    //#region EDGE CASE - USE exception handler

                    throw new Error("STORAGE request failed " + storedProcessRequestMistake.toString());

                    //#endregion
                }
            }

            storedOutputResponseData = await ExecuteConversionRequest();

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN converted data

            //#region IDEAL CASE - USE html string

            return storedOutputResponseData;

            //#endregion

            //#endregion

            //#endregion                              
        }

        public static async Step_2_0_Framework_Convert_HtmlRowsJsonToHtml_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<string> {
            //#region 1. INPUTS

            //#region VALIDATE input parameters

            const ValidateInputs = async (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) => {
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

                //#region MEMORIZE input action name

                let storedInputRequestActionName: string = parameterInputs.Parameters.getValue("parameterInputRequestActionName");

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
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedInputRequestActionName);

                //2. PROCESS
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "VALIDATING request inputs");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_2_0_Framework_Convert_HtmlRowsJsonToHtml_1_0 -> ValidateInputs");

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

                if (parameterInputs != null || parameterInputs != undefined || parameterInputs.Parameters != null && parameterInputs.Parameters != undefined) 
                {
                    //0. CONTROLLERS

                    //1. INPUTS

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

                    if (!parameterInputs.Parameters.containsKey("parameterOutputResponseHtmlContainerString")) {
                        storedOutputResponseMessage += "***parameterOutputResponseHtmlContainerString*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterInputRequestHtmlRowsJSON")) {
                        storedOutputResponseMessage += "***parameterInputRequestHtmlRowsJSON*** cannot be blank or empty.\n"
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

                    //3. OUTPUTS
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

                        //3. OUTPUTS 
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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            //#endregion

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables

            let storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //#endregion

            //#region DEFINE process variables



            //#endregion

            //#region DEFINE output variables

            let storedOutputResponseData: any = null;
            let storedOutputResponseDataList: Array<any> = [];

            //#endregion

            ///////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input action name

            let storedInputRequestActionName: string = parameterInputs.Parameters.getValue("parameterInputRequestActionName");

            //#endregion            

            //#region MEMORIZE input request html

            let storedInputRequestHtmlRowsJSON: any = parameterInputs.Parameters.getValue("parameterInputRequestHtmlRowsJSON");

            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process centralized processes

            let storedProcessRequestCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object> = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedStorer");
                
            //#endregion

            //#region MEMORIZE process request tracker

            let storedProcessRequestTracker: Object = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE process request settings

            let storedProcessRequestSettings: any = storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE ? storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE : false;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedInputRequestActionName);

            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONVERTING json to html row");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_2_0_Framework_Convert_HtmlRowsJsonToHtml_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters.getValue("parameterOPTIONALIgnoreDeveloperConsoleLog"));

            //#endregion

            //#region MEMORIZE process storyline details

            let storedProcessRequestDataStorylineDetails: any = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

            //#endregion            

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output response html

            let storedOutputResponseHtmlContainerString: any = parameterInputs.Parameters.getValue("parameterOutputResponseHtmlContainerString");

            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE json to html conversion

            //#region IDEAL CASE - USE json metadata

            const ExecuteConversionRequest = async (): Promise<string> => {
                try {
                    storedInputRequestHtmlRowsJSON.value.HTMLContentItems.map(storedProcessRequestHtmlRow => {
                        parameterInputs.Parameters.remove("parameterProcessRequestHtmlAttributes");
                        parameterInputs.Parameters.setValue("parameterProcessRequestHtmlAttributes", storedProcessRequestHtmlRow.Attributes);
                        
                        storedOutputResponseData = this.Step_0_0_Framework_Store_HtmlAttributesToArray_1_0(parameterInputs);
                        
                        //OUTPUT:                          <div                                id="row-_A_1_xxx">          {row_A-1_xxx_Replace}                                    </div>
                        storedOutputResponseDataList.push(`<${storedProcessRequestHtmlRow.Tag} ${storedOutputResponseData}>{${storedProcessRequestHtmlRow.Attributes[0].id}_Replace}</${storedProcessRequestHtmlRow.Tag}>`)
                    });

                    return storedOutputResponseHtmlContainerString.replace("{HTMLRows_Replace}", storedOutputResponseDataList.join("\n"))
                }
                catch (storedProcessRequestMistake) {
                    //#region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode) {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        //0. CONTROLLERS

                        //1. INPUTS

                        //2. PROCESS                        
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED converting json to html row");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_2_0_Framework_Convert_HtmlRowsJsonToHtml_1_0.ExecuteConversionRequest");

                        //3. OUTPUTS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    //#endregion

                    //#region EDGE CASE - USE exception handler

                    throw new Error("CONVERSION request failed " + storedProcessRequestMistake.toString());

                    //#endregion
                }
            }

            storedOutputResponseData = await ExecuteConversionRequest();

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN converted data

            //#region IDEAL CASE - USE html string

            return storedOutputResponseData;

            //#endregion

            //#endregion

            //#endregion                              
        }

        public static async Step_3_0_Framework_Convert_HtmlColumnsJsonToHtml_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<string> {
            //#region 1. INPUTS

            //#region VALIDATE input parameters

            const ValidateInputs = async (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) => {
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

                //#region MEMORIZE input action name

                let storedInputRequestActionName: string = parameterInputs.Parameters.getValue("parameterInputRequestActionName");

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
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedInputRequestActionName);

                //2. PROCESS
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "VALIDATING request inputs");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_3_0_Framework_Convert_HtmlColumnsJsonToHtml_1_0 -> ValidateInputs");

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

                if (parameterInputs != null || parameterInputs != undefined || parameterInputs.Parameters != null && parameterInputs.Parameters != undefined) 
                {
                    //0. CONTROLLERS

                    //1. INPUTS

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

                    if (!parameterInputs.Parameters.containsKey("parameterOutputResponseHtmlRowString")) {
                        storedOutputResponseMessage += "***parameterOutputResponseHtmlRowString*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterInputRequestHtmlColumnsJSON")) {
                        storedOutputResponseMessage += "***parameterInputRequestHtmlColumnsJSON*** cannot be blank or empty.\n"
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

                    //3. OUTPUTS

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

                        //3. OUTPUTS  
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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            //#endregion

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables

            let storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //#endregion

            //#region DEFINE process variables


            let storedProcessRequestHtmlColumnString: string = "";

            //#endregion

            //#region DEFINE output variables

            let storedOutputResponseData: any = null;
            let storedOutputResponseDataList: Array<any> = [];            

            //#endregion

            ///////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input action name

            let storedInputRequestActionName: string = parameterInputs.Parameters.getValue("parameterInputRequestActionName");

            //#endregion            

            //#region MEMORIZE input request html

            let storedInputRequestHtmlColumnsJSON: any = parameterInputs.Parameters.getValue("parameterInputRequestHtmlColumnsJSON");

            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process centralized processes

            let storedProcessRequestCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object> = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedStorer");
                
            //#endregion

            //#region MEMORIZE process request tracker

            let storedProcessRequestTracker: Object = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE process request settings

            let storedProcessRequestSettings: any = storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE ? storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE : false;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedInputRequestActionName);

            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONVERTING json to html row");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_3_0_Framework_Convert_HtmlColumnsJsonToHtml_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters.getValue("parameterOPTIONALIgnoreDeveloperConsoleLog"));

            //#endregion

            //#region MEMORIZE process storyline details

            let storedProcessRequestDataStorylineDetails: any = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

            //#endregion            

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output response html

            let storedOutputResponseHtmlRowString: any = parameterInputs.Parameters.getValue("parameterOutputResponseHtmlRowString");

            //#endregion

            //#endregion            

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE json to html conversion

            //#region IDEAL CASE - USE json metadata

            const ExecuteConversionRequest = async (): Promise<string> => {
                try {
                    storedInputRequestHtmlColumnsJSON.value.HTMLContentItems.forEach(storedProcessRequestHtmlColumn => {
                        //OUTPUT 1: 
                        //storedOutputResponseHtmlRowString = <div id="row-_A_1_xxx">{row_A-1_xxx_Replace}</div>
                
                        parameterInputs.Parameters.remove("parameterProcessRequestHtmlAttributes");
                        parameterInputs.Parameters.setValue("parameterProcessRequestHtmlAttributes", storedProcessRequestHtmlColumn.Attributes);

                        storedOutputResponseData = this.Step_0_0_Framework_Store_HtmlAttributesToArray_1_0(parameterInputs);

                        //OUTPUT 2:                              <div                                    id="column_A_1_1_xxx">     {column_A_1_1_xxx_Replace}                                   </div>
                        storedProcessRequestHtmlColumnString = `<${storedProcessRequestHtmlColumn.Tag} ${storedOutputResponseData}>{${storedProcessRequestHtmlColumn.Attributes[0].id}_Replace}</${storedProcessRequestHtmlColumn.Tag}>\n`;

                        //OUTPUT 3:                                                                     "row_A-1_xxx_Replace                                                          ***SEE OUTPUT 2 ABOVE***
                        storedOutputResponseHtmlRowString = storedOutputResponseHtmlRowString.replace(`{${storedProcessRequestHtmlColumn.ParentHTMLContentItemAttributeID}_Replace}`, storedProcessRequestHtmlColumnString);

                        //OUTPUT 4: 
                        //storedOutputResponseHtmlRowString = <div id="row-_A_1_xxx">
                        //                                          <div id="column_A_1_1_xxx">{column_A_1_1_xxx_Replace}</div>   
                        //                                    </div>   
                    });

                    return storedOutputResponseHtmlRowString;
                }
                catch (storedProcessRequestMistake) {
                    //#region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode) {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        //0. CONTROLLERS

                        //1. INPUTS

                        //2. PROCESS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED converting json to html column");                       
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_3_0_Framework_Convert_HtmlColumnsJsonToHtml_1_0.ExecuteConversionRequest");

                        //3. OUTPUTS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    //#endregion

                    //#region EDGE CASE - USE exception handler

                    throw new Error("CONVERSION request failed " + storedProcessRequestMistake.toString());

                    //#endregion
                }
            }

            storedOutputResponseData = await ExecuteConversionRequest();

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN converted data

            //#region IDEAL CASE - USE html string

            return storedOutputResponseData;

            //#endregion

            //#endregion

            //#endregion                                      
        }

        public static async Step_4_0_Framework_Convert_HtmlContentJsonToHtml_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<string> {
            //#region 1. INPUTS

            //#region VALIDATE input parameters

            const ValidateInputs = async (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) => {
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

                //#region MEMORIZE input action name

                let storedInputRequestActionName: string = parameterInputs.Parameters.getValue("parameterInputRequestActionName");

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
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedInputRequestActionName);

                //2. PROCESS
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "VALIDATING request inputs");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_4_0_Framework_Convert_HtmlContentJsonToHtml_1_0 -> ValidateInputs");

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

                    if (!parameterInputs.Parameters.containsKey("parameterOutputResponseHtmlColumnString")) {
                        storedOutputResponseMessage += "***parameterOutputResponseHtmlColumnString*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterInputRequestHtmlContentJSON")) {
                        storedOutputResponseMessage += "***parameterInputRequestHtmlContentJSON*** cannot be blank or empty.\n"
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

                    //3. OUTPUTS

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

                        //3. OUTPUTS  
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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            //#endregion

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables

            let storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //#endregion

            //#region DEFINE process variables

            let storedProcesseRequestContent:string = "";

            //#endregion

            //#region DEFINE output variables

            let storedOutputResponseData: any = null;
            let storedOutputResponseDataIdsAndContent: Array<any> = [];
            let storedOutputResponseHtmlAttributeKeyValuePairs: any = null;

            //#endregion

            ///////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input action name

            let storedInputRequestActionName: string = parameterInputs.Parameters.getValue("parameterInputRequestActionName");

            //#endregion            

            //#region MEMORIZE input request html

            let storedInputRequestHtmlContentJSON: any = parameterInputs.Parameters.getValue("parameterInputRequestHtmlContentJSON");            

            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process centralized processes

            let storedProcessRequestCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object> = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedStorer");
                
            //#endregion

            //#region MEMORIZE process request tracker

            let storedProcessRequestTracker: Object = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE process request settings

            let storedProcessRequestSettings: any = storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE ? storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE : false;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedInputRequestActionName);

            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONVERTING json to html content");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_4_0_Framework_Convert_HtmlContentJsonToHtml_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters.getValue("parameterOPTIONALIgnoreDeveloperConsoleLog"));

            //#endregion

            //#region MEMORIZE process storyline details

            let storedProcessRequestDataStorylineDetails: any = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

            //#endregion            

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output response html

            let storedOutputResponseHtmlColumnString: any = parameterInputs.Parameters.getValue("parameterOutputResponseHtmlColumnString");

            //#endregion

            //#endregion       

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE json to html conversion

            //#region IDEAL CASE - USE json metadata

            const ExecuteConversionRequest = async (): Promise<string> => {
                try {
                    storedInputRequestHtmlContentJSON.value.HTMLContentItems.forEach(storedProcessRequestHtmlContent => {
                        //OUTPUT 1: 
                        //storedOutputResponseHtmlColumnString =  <div id="row-_A_1_xxx">
                        //                                              <div id="column_A_1_1_xxx">{column_A_1_1_xxx_Replace}</div>   
                        //                                       </div>     

                        if (storedOutputResponseDataIdsAndContent[storedProcessRequestHtmlContent.ParentHTMLContentItemAttributeID] == undefined) {
                            storedOutputResponseDataIdsAndContent[storedProcessRequestHtmlContent.ParentHTMLContentItemAttributeID] = new Array();

                            parameterInputs.Parameters.remove("parameterProcessRequestHtmlAttributes");
                            parameterInputs.Parameters.setValue("parameterProcessRequestHtmlAttributes", storedProcessRequestHtmlContent.Attributes);

                            storedOutputResponseHtmlAttributeKeyValuePairs = this.Step_0_0_Framework_Store_HtmlAttributesToArray_1_0(parameterInputs);

                            //OUTPUT 2:                          //column_A_1_1_xxx                                                       <div                                    id="content_A-1-1-1_xxx"                          <img id="content_A-1-1-1_xxx">          </img>
                            storedOutputResponseDataIdsAndContent[storedProcessRequestHtmlContent.ParentHTMLContentItemAttributeID].push(`<${storedProcessRequestHtmlContent.Tag} ${storedOutputResponseHtmlAttributeKeyValuePairs}>${storedProcessRequestHtmlContent.Value}</${storedProcessRequestHtmlContent.Tag}>\n`);
                        }
                        else {

                            parameterInputs.Parameters.remove("parameterProcessRequestHtmlAttributes");
                            parameterInputs.Parameters.setValue("parameterProcessRequestHtmlAttributes", storedProcessRequestHtmlContent.Attributes);

                            storedOutputResponseHtmlAttributeKeyValuePairs = this.Step_0_0_Framework_Store_HtmlAttributesToArray_1_0(parameterInputs);

                            //OUTPUT 3:                          //column_A_1_1_xxx                                                       <div                                    id="content_A-1-1-1_xxx"                          <img id="content_A-1-1-1_xxx">          </img>
                            storedOutputResponseDataIdsAndContent[storedProcessRequestHtmlContent.ParentHTMLContentItemAttributeID].push(`<${storedProcessRequestHtmlContent.Tag} ${storedOutputResponseHtmlAttributeKeyValuePairs}>${storedProcessRequestHtmlContent.Value}</${storedProcessRequestHtmlContent.Tag}>\n`);
                        }
                    });

                    Object.keys(storedOutputResponseDataIdsAndContent).forEach(storedProcessRequestIdAndContentItem => {
                        //OUTPUT 4: 
                        //storedProcesseRequestContent = <img id="content_A-1-1-1_xxx" alt="xxx" src=""></img>
                        //                               <img id="content_A-1-1-2_xxx" alt="xxx" src=""></img>
                        //                               <img id="content_A-1-1-3_xxx" alt="xxx" src=""></img>
                        storedProcesseRequestContent = storedOutputResponseDataIdsAndContent[storedProcessRequestIdAndContentItem].join('\n');
                                                                                                             //***SEE OUTPUT 1 ABOVE***              
                        storedOutputResponseHtmlColumnString = storedOutputResponseHtmlColumnString.replace(`{${storedProcessRequestIdAndContentItem}_Replace}`, storedProcesseRequestContent);
                    });

                    if (process.env.APP_ENV == "SERVER") {
                        //OUTPUT 5:                            <img id="content_A-1-1-3_xxx" alt="xxx" src="/...999.0.3.BaseDI.Professional.QuickStart.Templates/image.jpg"> CONVERT TO <img id="content_A-1-1-3_xxx" alt="xxx" src="/Images/image.jpg">
                        storedOutputResponseHtmlColumnString = storedOutputResponseHtmlColumnString.replace(/...999.0.3.BaseDI.Professional.QuickStart.Templates/g, '/Images');
                    }

                    return storedOutputResponseHtmlColumnString;
                }
                catch (storedProcessRequestMistake) {
                    //#region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode) {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        //0. CONTROLLERS

                        //1. INPUTS

                        //2. PROCESS                        
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED converting json to html content");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_4_0_Framework_Convert_HtmlContentJsonToHtml_1_0.ExecuteConversionRequest");

                        //3. OUTPUTS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    //#endregion

                    //#region EDGE CASE - USE exception handler

                    throw new Error("CONVERSION request failed " + storedProcessRequestMistake.toString());

                    //#endregion
                }
            }

            storedOutputResponseData = await ExecuteConversionRequest();

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN converted data

            //#region IDEAL CASE - USE html string

            return storedOutputResponseData;

            //#endregion

            //#endregion

            //#endregion                                                            
        }

        public static async Step_5_0_Framework_Convert_HtmlCssJSONToInlineStyles_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<string> {
            //#region 1. INPUTS

            //#region VALIDATE input parameters

            const ValidateInputs = async (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) => {
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

                //#region MEMORIZE input action name

                let storedInputRequestActionName: string = parameterInputs.Parameters.getValue("parameterInputRequestActionName");

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
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedInputRequestActionName);

                //2. PROCESS
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "VALIDATING request inputs");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_5_0_Framework_Convert_HtmlCssJSONToInlineStyles_1_0 -> ValidateInputs");

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

                    if (!parameterInputs.Parameters.containsKey("parameterInputRequestHtmlStylesJSON")) {
                        storedOutputResponseMessage += "***parameterInputRequestHtmlStylesJSON*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }
                    else {
                        if (!parameterInputs.Parameters.getValue("parameterInputRequestHtmlStylesJSON")?.value[0]?._2_2_2_4_1_clientInformationHTMLContentStylingItem?.value?.HTMLContentStylingItemFiles[0]?.StyleFilePathLocal) {
                            storedOutputResponseMessage += "***parameterInputRequestHtmlStylesJSON*** [StyleFilePathLocal] cannot be blank or empty.\n"
                            storedProcessRequestMistakeMade = true;
                        }

                        if (!parameterInputs.Parameters.getValue("parameterInputRequestHtmlStylesJSON")?.value[0]?._2_2_2_4_1_clientInformationHTMLContentStylingItem?.value?.HTMLContentStylingItemFiles[0]?.StyleFiles) {
                            storedOutputResponseMessage += "***parameterInputRequestHtmlStylesJSON*** [StyleFiles] cannot be blank or empty.\n"
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestCentralizedStorer")) {
                        storedOutputResponseMessage += "***parameterProcessRequestCentralizedStorer*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestDataStorylineDetails")) {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    //3. OUTPUTS

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

                        //3. OUTPUTS   
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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            //#endregion

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables

            let storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //#endregion

            //#region DEFINE process variables

            let storedProcessRequestHtmlMediaQueryArray = [];
            let storedProcessRequestHtmlMediaQueryFeatures = [];
            let storedProcessRequestHtmlPropertyArray = [];

            //#endregion

            //#region DEFINE output variables

            let storedOutputResponseData: any = null;
            let storedOutputResponseHtmlCssString = "";

            //#endregion

            ///////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input action name

            let storedInputRequestActionName: string = parameterInputs.Parameters.getValue("parameterInputRequestActionName");

            //#endregion            

            //#region MEMORIZE input request html

            let storedInputRequestHtmlStylesJSON: any = parameterInputs.Parameters.getValue("parameterInputRequestHtmlStylesJSON");          

            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process centralized processes

            let storedProcessRequestCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object> = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedStorer");
                
            //#endregion

            //#region MEMORIZE process request tracker

            let storedProcessRequestTracker: Object = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE process request settings

            let storedProcessRequestSettings: any = storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE ? storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE : false;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedInputRequestActionName);

            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONVERTING json to css inline styles");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_5_0_Framework_Convert_HtmlCssJSONToInlineStyles_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters.getValue("parameterOPTIONALIgnoreDeveloperConsoleLog"));

            //#endregion

            //#region MEMORIZE process html details

            let storedProcessRequestHtmlStyleFilePathLocal: string = storedInputRequestHtmlStylesJSON?.value[0]?._2_2_2_4_1_clientInformationHTMLContentStylingItem?.value?.HTMLContentStylingItemFiles[0]?.StyleFilePathLocal;
            let storedProcessRequestHtmlFilesArray: any = storedInputRequestHtmlStylesJSON?.value[0]._2_2_2_4_1_clientInformationHTMLContentStylingItem?.value?.HTMLContentStylingItemFiles[0]?.StyleFiles;

          
            //#endregion                

            //#region MEMORIZE process storyline details

            let storedProcessRequestDataStorylineDetails: any = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

            //#endregion            

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output response html

            let storedOutputResponseHtmlInlineCSSString: string = "";

            //#endregion

            //#endregion       

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE json to html conversion

            //#region IDEAL CASE - USE json metadata

            const ExecuteConversionRequest = async (): Promise<string> => {
                try {
                    storedProcessRequestHtmlFilesArray.forEach(storedHtmlFile => {
                        storedHtmlFile.StyleFileUseProperties.forEach(storedStyleFile => {
                            if (storedStyleFile.IsHtmlTag == "true" && storedStyleFile.properties.length > 0) {
                                if (storedStyleFile.IsMediaQuery == "true") {

                                    if (storedStyleFile.MediaQuery.type != "") {
                                        storedProcessRequestHtmlMediaQueryFeatures.push(`only ${storedStyleFile.MediaQuery.type}`)
                                    }
                                    storedStyleFile.MediaQuery.features.forEach(feature => {
                                        Object.keys(feature).forEach((featureA, index) => {
                                            if (Object.keys(feature)[index] == "operator") {
                                                storedProcessRequestHtmlMediaQueryFeatures.push(Object.values(feature)[index])
                                            } else {
                                                storedProcessRequestHtmlMediaQueryFeatures.push(`(${featureA}: ${Object.values(feature)[index]})`)
                                            }
                                        });
                                    });
                                    storedStyleFile.properties.forEach(prop => {
                                        if (prop.propertyName != "") {
                                            let values = [];
                                            if (storedProcessRequestHtmlMediaQueryArray[`@media ${storedProcessRequestHtmlMediaQueryFeatures.join(" ")}`] === undefined) {
                                                storedProcessRequestHtmlMediaQueryArray[`@media ${storedProcessRequestHtmlMediaQueryFeatures.join(" ")}`] = []
                                                prop.properyValues.forEach(value => {
                                                    values.push(`${value};`)
                                                });
                                                storedProcessRequestHtmlMediaQueryArray[`@media ${storedProcessRequestHtmlMediaQueryFeatures.join(" ")}`].push({ propName: `${prop.propertyName}`, values: values })
                                            } else {
                                                prop.properyValues.forEach(value => {
                                                    values.push(`${value};`)
                                                });
                                                storedProcessRequestHtmlMediaQueryArray[`@media ${storedProcessRequestHtmlMediaQueryFeatures.join(" ")}`].push({ propName: `${prop.propertyName}`, values: values })
                                            }
                                        }
                                    });

                                } else {
                                    storedStyleFile.properties.forEach(prop => {
                                        if (prop.propertyName != "") {
                                            if (storedProcessRequestHtmlPropertyArray[`${prop.propertyName}`] === undefined) {
                                                storedProcessRequestHtmlPropertyArray[`${prop.propertyName}`] = [];
                                                prop.properyValues.forEach(value => {
                                                    storedProcessRequestHtmlPropertyArray[`${prop.propertyName}`].push(value + ";")
                                                });
                                            } else {
                                                prop.properyValues.forEach(value => {
                                                    storedProcessRequestHtmlPropertyArray[`${prop.propertyName}`].push(value + ";")
                                                });
                                            }
                                        }
                                    });

                                }
                            }
                            else if (storedStyleFile.IsHtmlTag == "false" && storedStyleFile.properties.length > 0) {
                                let values = [];
                                if (storedStyleFile.IsMediaQuery == "true") {

                                    let storedProcessRequestHtmlMediaQueryFeatures = [];

                                    if (storedStyleFile.MediaQuery.type != "") {
                                        storedProcessRequestHtmlMediaQueryFeatures.push(`only ${storedStyleFile.MediaQuery.type}`)
                                    }
                                    storedStyleFile.MediaQuery.features.forEach(feature => {
                                        Object.keys(feature).forEach((featureA, index) => {
                                            if (Object.keys(feature)[index] == "operator") {
                                                storedProcessRequestHtmlMediaQueryFeatures.push(Object.values(feature)[index])
                                            } else {
                                                storedProcessRequestHtmlMediaQueryFeatures.push(`(${featureA}: ${Object.values(feature)[index]})`)
                                            }
                                        });
                                    });

                                    storedStyleFile.properties.forEach(prop => {
                                        if (prop.propertyName != "") {
                                            values.push(`${prop.propertyName} : ${prop.properyValues[0]};`)
                                        }
                                    });

                                    if (storedProcessRequestHtmlMediaQueryArray[`@media ${storedProcessRequestHtmlMediaQueryFeatures.join(" ")}`] === undefined) {
                                        storedProcessRequestHtmlMediaQueryArray[`@media ${storedProcessRequestHtmlMediaQueryFeatures.join(" ")}`] = []
                                        storedProcessRequestHtmlMediaQueryArray[`@media ${storedProcessRequestHtmlMediaQueryFeatures.join(" ")}`].push({ attributeID: storedStyleFile.attributeID, values: values })
                                    } else {
                                        let updatedItem = storedProcessRequestHtmlMediaQueryArray[`@media ${storedProcessRequestHtmlMediaQueryFeatures.join(" ")}`].find((item) => { return item.attributeID === storedStyleFile.attributeID })
                                        if (updatedItem != undefined) {
                                            updatedItem.values.push(...values)
                                        } else {
                                            storedProcessRequestHtmlMediaQueryArray[`@media ${storedProcessRequestHtmlMediaQueryFeatures.join(" ")}`].push({ attributeID: storedStyleFile.attributeID, values: values })
                                        }
                                    }
                                }
                                else {
                                    storedStyleFile.properties.forEach(prop => {
                                        if (prop.propertyName != "") {
                                            values.push(`${prop.propertyName} : ${prop.properyValues[0]};`)
                                        }
                                    });

                                    if (storedProcessRequestHtmlPropertyArray[`${storedStyleFile.attributeID}`] === undefined) {
                                        storedProcessRequestHtmlPropertyArray[`${storedStyleFile.attributeID}`] = [];
                                        storedProcessRequestHtmlPropertyArray[`${storedStyleFile.attributeID}`].push({ attributeID: storedStyleFile.attributeID, values: values })
                                    } else {
                                        // storedProcessRequestHtmlPropertyArray[`${element.attributeID}`].push({ attributeID: element.attributeID, values: values })
                                        storedProcessRequestHtmlPropertyArray[`${storedStyleFile.attributeID}`][0].values.push(...values)
                                    }
                                }
                            }
                            else {
                                console.log("Something wrong in Json file!")
                            }
                        });
                    });

                    Object.keys(storedProcessRequestHtmlPropertyArray).forEach((key, index) => {
                        let obj = Object.values(storedProcessRequestHtmlPropertyArray)[index];
                        if (obj[0].attributeID === undefined) {
                            storedOutputResponseHtmlCssString += `${key} { \n ${obj.join("\n")} \n}\n`;
                        } else {

                            if (obj[0].attributeID.includes("#")) {
                                storedOutputResponseHtmlCssString += `${obj[0].attributeID} { \n ${obj[0].values.join("\n")} \n}\n`;
                            } else {
                                storedOutputResponseHtmlCssString += `#${obj[0].attributeID} { \n ${obj[0].values.join("\n")} \n}\n`;
                            }
                        }
                    });

                    Object.keys(storedProcessRequestHtmlMediaQueryArray).forEach((key, index) => {
                        let obj = Object.values(storedProcessRequestHtmlMediaQueryArray)[index];
                        let innerCss = "";

                        obj.forEach(element => {
                            if (element.attributeID === undefined) {
                                innerCss += `${element.propName} \n { \n ${element.values.join("\n")} \n}\n`;
                            } else {
                                if (element.attributeID.includes("#")) {
                                    innerCss += `${element.attributeID} \n { \n ${element.values.join("\n")} \n}\n`;
                                } else {
                                    innerCss += `#${element.attributeID} \n { \n ${element.values.join("\n")} \n}\n`;
                                }
                            }
                        });
                        storedOutputResponseHtmlCssString += `${key} {\n ${innerCss} \n}`;
                    });

                    storedOutputResponseHtmlInlineCSSString = `<style>${storedOutputResponseHtmlCssString}</style>`;

                    if (process.env.APP_ENV == "SERVER") {
                        storedOutputResponseHtmlInlineCSSString = storedOutputResponseHtmlInlineCSSString.replace(/...999.0.3.BaseDI.Professional.QuickStart.Templates/g, '/Images'); storedOutputResponseHtmlInlineCSSString = storedOutputResponseHtmlInlineCSSString.replace(/...999.0.3.BaseDI.Professional.QuickStart.Templates/g, '/Images');
                    }

                    return storedOutputResponseHtmlInlineCSSString;
                }
                catch (storedProcessRequestMistake) {
                    //#region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode) {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        //0. CONTROLLERS

                        //1. INPUTS

                        //2. PROCESS                        
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED converting json to html styles");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_5_0_Framework_Convert_HtmlCssJSONToInlineStyles_1_0.ExecuteConversionRequest");

                        //3. OUTPUTS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    //#endregion

                    //#region EDGE CASE - USE exception handler

                    throw new Error("CONVERSION request failed " + storedProcessRequestMistake.toString());

                    //#endregion
                }
            }

            storedOutputResponseData = await ExecuteConversionRequest();

            //#endregion

            //#endregion

            //#endregion          

            //#region 3. OUTPUT

            //#region RETURN converted data

            //#region IDEAL CASE - USE html string

            return storedOutputResponseData;

            //#endregion

            //#endregion

            //#endregion                                                            
        }

        public static async Step_6_0_Framework_Convert_HtmlScriptsJSONToInlineScripts_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<string> {
            //#region 1. INPUTS

            //#region VALIDATE input parameters

            const ValidateInputs = async (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) => {
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

                //#region MEMORIZE input action name

                let storedInputRequestActionName: string = parameterInputs.Parameters.getValue("parameterInputRequestActionName");

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
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedInputRequestActionName);

                //2. PROCESS
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "VALIDATING request inputs");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_6_0_Framework_Convert_HtmlScriptsJSONToInlineScripts_1_0 -> ValidateInputs");

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

                if (parameterInputs != null || parameterInputs != undefined || parameterInputs.Parameters != null && parameterInputs.Parameters != undefined) 
                {
                    //0. CONTROLLERS

                    //1. INPUTS

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

                    if (!parameterInputs.Parameters.containsKey("parameterInputRequestHtmlScriptsJSON")) {
                        storedOutputResponseMessage += "***parameterInputRequestHtmlStylesJSON*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }
                    else {
                        if (!parameterInputs.Parameters.getValue("parameterInputRequestHtmlScriptsJSON")?.value[0]?._2_2_2_5_1_clientInformationHTMLContentScriptItem?.value?.HTMLContentScriptItemFiles[0]?.ScriptFilePathLocal) {
                            storedOutputResponseMessage += "***parameterInputRequestHtmlStylesJSON*** [ScriptsFilePathLocal] cannot be blank or empty.\n"
                            storedProcessRequestMistakeMade = true;
                        }

                        if (!parameterInputs.Parameters.getValue("parameterInputRequestHtmlScriptsJSON")?.value[0]?._2_2_2_5_1_clientInformationHTMLContentScriptItem?.value?.HTMLContentScriptItemFiles[0]?.ScriptFiles) {
                            storedOutputResponseMessage += "***parameterInputRequestHtmlStylesJSON*** [ScriptsFiles] cannot be blank or empty.\n"
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestCentralizedStorer")) {
                        storedOutputResponseMessage += "***parameterProcessRequestCentralizedStorer*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestDataStorylineDetails")) {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    //3. OUTPUTS
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
                        
                        //3. OUTPUTS
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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            //#endregion

             //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables

            let storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //#endregion

            //#region DEFINE process variables

            let storedProcesseRequestContent:string = "";

            //#endregion

            //#region DEFINE output variables

            let storedOutputResponseData: any = null;
            let storedOutputResponseDataIdsAndContent: Array<any> = [];

            //#endregion

            ///////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input action name

            let storedInputRequestActionName: string = parameterInputs.Parameters.getValue("parameterInputRequestActionName");

            //#endregion            

            //#region MEMORIZE input request html

            let storedInputRequestHtmlContentJSON: any = parameterInputs.Parameters.getValue("parameterInputRequestHtmlContentJSON");            

            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process centralized processes

            let storedProcessRequestCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object> = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedStorer");
                
            //#endregion

            //#region MEMORIZE process request tracker

            let storedProcessRequestTracker: Object = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE process request settings

            let storedProcessRequestSettings: any = storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE ? storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE : false;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedInputRequestActionName);

            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONVERTING json to html content");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_6_0_Framework_Convert_HtmlScriptsJSONToInlineScripts_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters.getValue("parameterOPTIONALIgnoreDeveloperConsoleLog"));

            //#endregion

            //#region MEMORIZE process storyline details

            let storedProcessRequestDataStorylineDetails: any = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

            //#endregion            

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output response html

            let storedOutputResponseHtmlColumnString: any = parameterInputs.Parameters.getValue("parameterOutputResponseHtmlColumnString");

            //#endregion

            //#endregion     

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE json to html conversion

            //#region IDEAL CASE - USE json metadata

            const ExecuteConversionRequest = async (): Promise<string> => {
                try {

                    return "";
                }
                catch (storedProcessRequestMistake) {
                    //#region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode) {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        //0. CONTROLLERS

                        //1. INPUTS

                        //2. PROCESS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED converting json to inline scripts");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_6_0_Framework_Convert_HtmlScriptsJSONToInlineScripts_1_0.ExecuteConversionRequest");

                        //3. OUTPUTS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    //#endregion

                    //#region EDGE CASE - USE exception handler

                    throw new Error("CONVERSION request failed " + storedProcessRequestMistake.toString());

                    //#endregion
                }
            }

            storedOutputResponseData = await ExecuteConversionRequest();

            //#endregion

            //#endregion

            //#endregion          

            //#region 3. OUTPUT

            //#region RETURN converted data

            //#region IDEAL CASE - USE html string

            return storedOutputResponseData;

            //#endregion

            //#endregion

            //#endregion                                                            
        }

        public static async Step_7_0_Framework_Convert_HtmlMetaDataJSONToInlineMetaData_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<string> {
            //#region 1. INPUTS

            //#region VALIDATE input parameters

            const ValidateInputs = async (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) => {
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

                //#region MEMORIZE input action name

                let storedInputRequestActionName: string = parameterInputs.Parameters.getValue("parameterInputRequestActionName");

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
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedInputRequestActionName);

                //2. PROCESS
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "VALIDATING request inputs");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_7_0_Framework_Convert_HtmlMetaDataJSONToInlineMetaData_1_0 -> ValidateInputs");

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

                    if (!parameterInputs.Parameters.containsKey("parameterInputRequestHtmlMetaDataJSON")) {
                        storedOutputResponseMessage += "***parameterInputRequestHtmlMetaDataJSON*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }
                    else {
                        if (!parameterInputs.Parameters.getValue("parameterInputRequestHtmlMetaDataJSON")?.value[0]?._2_2_2_6_1_clientInformationHTMLContentMetaDataItem?.value?.HTMLContentMetaDataItemFiles[0]?.MetaDataFilePathLocal) {
                            storedOutputResponseMessage += "***parameterInputRequestHtmlMetaDataJSON*** [ScriptsFilePathLocal] cannot be blank or empty.\n"
                            storedProcessRequestMistakeMade = true;
                        }

                        if (!parameterInputs.Parameters.getValue("parameterInputRequestHtmlMetaDataJSON")?.value[0]?._2_2_2_6_1_clientInformationHTMLContentMetaDataItem?.value?.HTMLContentMetaDataItemFiles[0]?.MetaDataFiles) {
                            storedOutputResponseMessage += "***parameterInputRequestHtmlMetaDataJSON*** [ScriptsFiles] cannot be blank or empty.\n"
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestCentralizedStorer")) {
                        storedOutputResponseMessage += "***parameterProcessRequestCentralizedStorer*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestDataStorylineDetails")) {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    //3. OUTPUTS

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

                        //3. OUTPUTS
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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            //#endregion

             //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables

            let storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //#endregion

            //#region DEFINE process variables

            let storedProcesseRequestContent:string = "";

            //#endregion

            //#region DEFINE output variables

            let storedOutputResponseData: any = null;
            let storedOutputResponseDataIdsAndContent: Array<any> = [];

            //#endregion

            ///////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input action name

            let storedInputRequestActionName: string = parameterInputs.Parameters.getValue("parameterInputRequestActionName");

            //#endregion            

            //#region MEMORIZE input request html

            let storedInputRequestHtmlContentJSON: any = parameterInputs.Parameters.getValue("parameterInputRequestHtmlContentJSON");            

            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process centralized processes

            let storedProcessRequestCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object> = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedStorer");
                
            //#endregion

            //#region MEMORIZE process request tracker

            let storedProcessRequestTracker: Object = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE process request settings

            let storedProcessRequestSettings: any = storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE ? storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE : false;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedInputRequestActionName);

            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONVERTING json to inline meta data");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_7_0_Framework_Convert_HtmlMetaDataJSONToInlineMetaData_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters.getValue("parameterOPTIONALIgnoreDeveloperConsoleLog"));

            //#endregion

            //#region MEMORIZE process storyline details

            let storedProcessRequestDataStorylineDetails: any = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

            //#endregion            

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output response html

            let storedOutputResponseHtmlColumnString: any = parameterInputs.Parameters.getValue("parameterOutputResponseHtmlColumnString");

            //#endregion

            //#endregion    

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE json to html conversion

            //#region IDEAL CASE - USE json metadata

            const ExecuteConversionRequest = async (): Promise<string> => {
                try {

                    return "";
                }
                catch (storedProcessRequestMistake) {
                    //#region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode) {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        //0. CONTROLLERS

                        //1. INPUTS

                        //2. PROCESS                        
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED converting json to html styles");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_5_0_Framework_Convert_HtmlCssJSONToInlineStyles_1_0.ExecuteConversionRequest");

                        //3. OUTPUTS      
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    //#endregion

                    //#region EDGE CASE - USE exception handler

                    throw new Error("CONVERSION request failed " + storedProcessRequestMistake.toString());

                    //#endregion
                }
            }

            storedOutputResponseData = await ExecuteConversionRequest();

            //#endregion

            //#endregion

            //#endregion          

            //#region 3. OUTPUT

            //#region RETURN converted data

            //#region IDEAL CASE - USE html string

            return storedOutputResponseData;

            //#endregion

            //#endregion

            //#endregion                                                            
        }

        public static async Step_8_0_Framework_Convert_HtmlStructureToString_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<string> {
            //#region 1. INPUTS

            //#region VALIDATE input parameters

            const ValidateInputs = async (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) => {
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

                //#region MEMORIZE input action name

                let storedInputRequestActionName: string = parameterInputs.Parameters.getValue("parameterInputRequestActionName");

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
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedInputRequestActionName);

                //2. PROCESS
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "VALIDATING request inputs");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_8_0_Framework_Convert_HtmlStructureToString_1_0 -> ValidateInputs");

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
                    if (!parameterInputs.Parameters.containsKey("parameterInputRequestHtmlTitle")) {
                        storedOutputResponseMessage += "***parameterTitle*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterInputRequestHtmlAdditionalHeadData")) {
                        storedOutputResponseMessage += "***parameterInputRequestHtmlAdditionalHeadData*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterInputRequestHtmlScripts")) {
                        storedOutputResponseMessage += "***parameterInputRequestHtmlScripts*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterInputRequestHtmlStyles")) {
                        storedOutputResponseMessage += "***parameterInputRequestHtmlStyles*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterInputRequestHtmlBody")) {
                        storedOutputResponseMessage += "***parameterInputRequestHtmlBody*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterInputRequestHtmlMetaData")) {
                        storedOutputResponseMessage += "***parameterInputRequestHtmlMetaData*** cannot be blank or empty.\n"
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

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestCentralizedStorer")) {
                        storedOutputResponseMessage += "***parameterProcessRequestCentralizedStorer*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestDataStorylineDetails")) {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    //3. OUTPUTS

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

                        //3. OUTPUTS
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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            //#endregion

             //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables

            let storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //#endregion

            //#region DEFINE process variables

            let storedProcessRequestHtmlBaseDIScriptName: string = "";

            //#endregion

            //#region DEFINE output variables

            let storedOutputResponseData: any = null;
            let storedOutputResponseDataCached: any = null;

            //#endregion

            ///////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input action name

            let storedInputRequestActionName: string = parameterInputs.Parameters.getValue("parameterInputRequestActionName");

            //#endregion            


            //#region MEMORIZE input request html

            let storedInputRequestHtmlPageTemplate = `<!DOCTYPE html>
                <html lang="en">
                    <head>
                        {metaDataReplace}
                        <title>{titleReplace}</title>  
                        {scriptsReplace}
                        {stylesReplace}
                    </head>
                    <body>
                        {bodyReplace}
                    </body>
                </html>`;

            let storedInputRequestHtmlMetaData: string = parameterInputs.Parameters.getValue("parameterInputRequestHtmlMetaData");
            let storedInputRequestHtmlTitle: string = parameterInputs.Parameters.getValue("parameterInputRequestHtmlTitle");
            let storedInputRequestHtmlScripts: string = parameterInputs.Parameters.getValue("parameterInputRequestHtmlScripts");
            let storedInputRequestHtmlAdditionalHeadData: string = parameterInputs.Parameters.getValue("parameterInputRequestHtmlAdditionalHeadData");
            let storedInputRequestHtmlStyles: string = parameterInputs.Parameters.getValue("parameterInputRequestHtmlStyles");
            let storedInputRequestHtmlBody: string = parameterInputs.Parameters.getValue("parameterInputRequestHtmlBody");

            //#endregion

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process centralized processes

            let storedProcessRequestCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object> = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedStorer");
                
            //#endregion

            //#region MEMORIZE process request tracker

            let storedProcessRequestTracker: Object = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE process request settings

            let storedProcessRequestSettings: any = storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE ? storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE : false;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedInputRequestActionName);

            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONVERTING json to inline meta data");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_8_0_Framework_Convert_HtmlStructureToString_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters.getValue("parameterOPTIONALIgnoreDeveloperConsoleLog"));

            //#endregion

            //#region MEMORIZE process storyline details

            let storedProcessRequestDataStorylineDetails: any = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

            //#endregion            

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output response html

            let storedOutputResponseHtmlColumnString: any = parameterInputs.Parameters.getValue("parameterOutputResponseHtmlColumnString");

            //#endregion

            //#endregion    

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE json to html conversion

            //#region IDEAL CASE - USE json metadata

            //#region 1. READ cached baseDI script path

            const ExecuteStorageRequest = async (): Promise<string> => {
                try {
                    storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

                    //0. CONTROLLERS

                    //1. INPUTS

                    //2. PROCESS                      
                    storedInputs.Parameters.setValue("parameterProcessRequestTracker", Object.assign(storedProcessRequestTracker, Object));
                    storedInputs.Parameters.setValue("parameterProcessRequestCRUDVerb", "Read");
                    storedInputs.Parameters.setValue("parameterProcessRequestHandler", "Experience_The_Hear_Chapter_12_3_Page_13_ControlRequest_Handler_1_0")
                    storedInputs.Parameters.setValue("parameterProcessRequestCentralizedStorer", Object.assign(storedProcessRequestCentralizedStorer, Object));
                    storedInputs.Parameters.setValue("parameterProcessRequestStorageValue", Object.assign(storedProcessRequestDataStorylineDetails, Object));
                    storedInputs.Parameters.setValue("parameterProcessRequestDataStorylineDetails", Object.assign(storedProcessRequestDataStorylineDetails, Object));
                    storedInputs.Parameters.setValue("parameterProcessRequestPageName", "");
                    storedInputs.Parameters.setValue("parameterProcessRequestStorageDescription", "READING client side BaseDI script SOURCE PATH");
                    storedInputs.Parameters.setValue("parameterProcessRequestStorageUniqueKey", "BaseDI_PresentationScript_SrcLocation");

                    //4. OUTPUTS
                    storedOutputResponseDataCached = await Extension_Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0.BaseDI.Professional.Programming.Extensions_3.Extension_Director_Of_Programming_Chapter_12_2_Page_3_StorageRequest_Handler_1_0.Step_X_X_Framework_Store_CacheDataToPersistentStorage_1_0(storedInputs);
                    storedOutputResponseDataCached = (storedOutputResponseDataCached && storedOutputResponseDataCached.outputs.length > 0) ? storedOutputResponseDataCached.outputs[1].baseDIObservations[storedOutputResponseDataCached.outputs[1].baseDIObservations.length - 1] : null;

                    if (storedOutputResponseDataCached) {
                        storedProcessRequestHtmlBaseDIScriptName = storedOutputResponseDataCached[Object.keys(storedOutputResponseDataCached)[0]].observation.metadata[3].item.data[0].dataResult

                        storedInputRequestHtmlScripts += `<script src="/scripts/${storedProcessRequestHtmlBaseDIScriptName}" type="text/javascript"></script>`;
                    }

                    return storedInputRequestHtmlScripts;

                }
                catch (storedProcessRequestMistake) {
                    //#region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode) {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        //0. CONTROLLERS

                        //1. INPUTS

                        //2. PROCESS                          
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED reading cache");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_6_0_Framework_Convert_HtmlStructureToString_1_0.ExecuteStorageRequest");

                        //4. OUTPUTS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    //#endregion

                    //#region EDGE CASE - USE exception handler

                    throw new Error("STORAGE request failed " + storedProcessRequestMistake.toString());

                    //#endregion
                }
            }

            if (process.env.APP_ENV == "SERVER") {
                storedInputRequestHtmlScripts = await ExecuteStorageRequest();
            }

            //#endregion

            //#region 2. CONVERT inputs to html template

            const ExecuteConversionRequest = async () => {
                storedInputRequestHtmlPageTemplate = storedInputRequestHtmlPageTemplate.replace("{metaDataReplace}", storedInputRequestHtmlMetaData);
                storedInputRequestHtmlPageTemplate = storedInputRequestHtmlPageTemplate.replace("{titleReplace}", storedInputRequestHtmlTitle);
                storedInputRequestHtmlPageTemplate = storedInputRequestHtmlPageTemplate.replace("{additionalHeadData}", storedInputRequestHtmlAdditionalHeadData);
                storedInputRequestHtmlPageTemplate = storedInputRequestHtmlPageTemplate.replace("{scriptsReplace}", storedInputRequestHtmlScripts);
                storedInputRequestHtmlPageTemplate = storedInputRequestHtmlPageTemplate.replace("{stylesReplace}", storedInputRequestHtmlStyles);
                storedInputRequestHtmlPageTemplate = storedInputRequestHtmlPageTemplate.replace("{bodyReplace}", storedInputRequestHtmlBody);

                return storedInputRequestHtmlPageTemplate;
            }

            storedInputRequestHtmlPageTemplate = await ExecuteConversionRequest();
            //#endregion

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN converted data

            //#region IDEAL CASE - USE html string

            return storedInputRequestHtmlPageTemplate;

            //#endregion

            //#endregion

            //#endregion
        }

        public static async Step_X_X_Framework_Convert_StorylineDetailsObservationToString_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) {
            //#region 1. INPUTS

            //#region VALIDATE input parameters

            const ValidateInputs = async (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) => {
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

                //#region MEMORIZE input action name

                let storedInputRequestActionName: string = parameterInputs.Parameters.getValue("parameterInputRequestActionName");

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
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedInputRequestActionName);

                //2. PROCESS
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "VALIDATING request inputs");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_8_0_Framework_Convert_HtmlStructureToString_1_0 -> ValidateInputs");

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
                    
                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestRequestHandlerFileName")) {
                        storedOutputResponseMessage += "***parameterProcessRequestRequestHandlerFileName*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }
           
                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestDataStorylineDetails")) {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    //3. OUTPUTS
                    if (!parameterInputs.Parameters.containsKey("parameterOutputResponseType")) {
                        storedOutputResponseMessage += "***parameterOutputResponseType*** cannot be blank or empty.\n"
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

                        //3. OUTPUTS
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

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            //#endregion

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables

            let storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //#endregion

            //#region DEFINE process variables



            //#endregion

            //#region DEFINE output variables

            let storedOutputResponseData: any = null;
 
            //#endregion

            ///////////////////////////////

            //#region MEMORIZE control variables

            //#region MEMORIZE control xxx xxx


            //#endregion

            //#endregion

            //#region MEMORIZE input variables

            //#region MEMORIZE input xxx xxx

            let storedInputRequestActionName: string = parameterInputs.Parameters.getValue("parameterInputRequestActionName");

            //#endregion            

            //#endregion

            //#region MEMORIZE process variables

            //#region MEMORIZE process request tracker

            let storedProcessRequestTracker: Object = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE process request settings

            let storedProcessRequestSettings: any = storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE ? storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE : false;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedInputRequestActionName);

            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONVERTING json to inline meta data");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_X_X_Framework_Convert_StorylineDetailsObservationToString_1_0");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters.getValue("parameterOPTIONALIgnoreDeveloperConsoleLog"));

            //#endregion

            //#region MEMORIZE process storage details

            let storedProcessRequestStorageKeyUniqueness: string = parameterInputs.Parameters.getValue("parameterProcessRequestRequestHandlerFileName");
            let storedProcessRequestStorageCounter: number = 0;

            let storedProcessRequestStorageDictionary: Object = {};
            let storedProcessRequestStorageKeyJSON: string = "StorageKey_" + storedProcessRequestStorageKeyUniqueness + "-" + "Read-BaseDI_PresentationJSON_Content";
            let storedProcessRequestStorageKeyHTML: string = "StorageKey_" + storedProcessRequestStorageKeyUniqueness + "-" + "Read-BaseDI_PresentationHTML_Content";
            let storedProcessRequestStorageKeyXML: string = "StorageKey_" + storedProcessRequestStorageKeyUniqueness + "-" + "Read-BaseDI_PresentationXML_Content";

            let storedProcessRequestStorageUpdateMode: boolean = false;

            //#endregion     

            //#region MEMORIZE process storyline details

            let storedProcessRequestDataStorylineDetails: any = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

            //#endregion            

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output response type

            let storedOutputResponseType: string = parameterInputs.Parameters.getValue("parameterOutputResponseType");
    
            //#endregion

            //#endregion    

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE json to html conversion

            //#region IDEAL CASE - USE storyline details

            storedProcessRequestDataStorylineDetails?.outputs[1].baseDIObservations.map(storedProcessRequestObservation => {
                if (Object.keys(storedProcessRequestObservation).length > 0 &&
                    (Object.keys(storedProcessRequestObservation)[0].toUpperCase() == storedProcessRequestStorageKeyJSON.toUpperCase() ||
                    Object.keys(storedProcessRequestObservation)[0].toUpperCase() == storedProcessRequestStorageKeyHTML.toUpperCase() ||
                    Object.keys(storedProcessRequestObservation)[0].toUpperCase() == storedProcessRequestStorageKeyXML.toUpperCase()))
                {
                    switch (storedOutputResponseType.toUpperCase()) {
                        case "HTML":
                            storedOutputResponseData = unescape(storedProcessRequestObservation[storedProcessRequestStorageKeyHTML].observation.metadata[3].item.presentation[0].htmlResult);

                            break;
                        case "JSON":
                            storedOutputResponseData = storedProcessRequestObservation[storedProcessRequestStorageKeyJSON].observation.metadata[3].item.presentation[0].jsonResult;

                            break;
                        case "XML":
                            storedOutputResponseData = storedProcessRequestObservation[storedProcessRequestStorageKeyXML].observation.metadata[3].item.presentation[0].xmlResult;

                            break;
                    }                    

                    //#region EDGE CASE - USE developer logger

                    if (storedProcessRequestDeveloperMode) {
                        //0. CONTROLLERS

                        //1. INPUTS

                        //2. PROCESS
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "SUCCESSFULLY converted StorylineDetails");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestCentralizedStorer", parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedStorer"));
                        
                        //3. OUTPUTS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Logging"); //Values = Logging or Mistake
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALEndOfProcess", true);

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                    }

                    //#endregion
                }
            });

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN converted data

            //#region IDEAL CASE - USE string value

            return storedOutputResponseData;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion
    }
}