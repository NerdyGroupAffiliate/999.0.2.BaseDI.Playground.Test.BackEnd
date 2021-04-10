//#region Imports

//#region BaseDI

import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptPage_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptPage_12_2_1_0";
import * as aClass_Programming_ScriptRoutable_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptRoutable_12_2_1_0";

import * as Action_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/Action Poco/1/1_0/Action_12_2_1_0";

import * as Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";

import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";
import * as Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0 from "../../../../../../../../0. Script/Extensions/11/Automate Manual Task/1/Risk Management/Method/0/1_0/Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0";
import * as Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/3/Web Development/Method/0/1_0/Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0";

import * as ExtraData_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";

import * as ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../1. Storyline/12/Other/2/Programming/Studio/1/1_0/ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

import * as SingleParmPoco_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

//#endregion

//#endregion

export namespace BaseDI.Professional.Chapter.Page.Web_Development_6 {
    export class Page_6_6_Process_StoryExperiences_12_3_1_0 extends aClass_Programming_ScriptPage_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptPage_12_2_1_0 {
        //#region 1. Assign

        //SETTINGS
        private _storedAppSettings: any;

        //CLIENT/SERVER
        private _storedClientORserverInstance: any;

        //DATASETS
        private _storedStorylineDetails: any;
        private _storedStorylineDetails_Parameters: any;

        private _stored_Repository: any;

        //MISC
        private _storedExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //PLUMBING
        private _stored_CentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _stored_CentralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _stored_CentralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        private _stored_DirectorRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        private _storedRequestName: string = "";
        private _storedSystemRequestByName: string;

        //#endregion

        //#region 2. Ready
        constructor(parameterStorylineDetails: object, parameterRepository: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<any>) {
            super();

            //#region 1. INPUTS

            //#region MEMORIZE data stragety

            this.Repository = parameterRepository;

            //#endregion

            //#region MEMORIZE storyline details

            this.StorylineDetails = parameterStorylineDetails;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process defaults

            //#region IDEAL CASE - USE defaults handler

            this.Action = this.Action.bind(this);

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
        public async Action(): Promise<object> {
            //#region 1. INPUTS

            //#region DEFINE data response

            let storedDataResponse: Object = null;

            //#endregion

            //#region DEFINE storyline details outputs

            let storedOutput: String = "";
            let storedOutPut_ObservationDataTemplateBuilder: string = "";

            //#endregion

            //#region DEFINE webpage outputs

            let storedHtmlContainerJSON: any = "";
            let storedHtmlRowsJSON: any = "";
            let storedHtmlColumnsJSON: any = "";
            let storedHtmlContentJSON: any = "";
            let storedHtmlStylesJSON: any = "";

            let storedHtmlResultInlineStylesString: string = "";
            let storedHtmlResultString: string = "";

            //#endregion

            //#region MEMORIZE action name

            let storedActionName: string = this.ClientOrServerInstance["actionName"] as string;

            //#endregion

            //#region MEMORIZE app settings

            this._storedAppSettings = this.ClientOrServerInstance["appSettings"];

            //#endregion

            //#region MEMORIZE clientOrServer instance

            this._storedClientORserverInstance = this.ClientOrServerInstance;

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "PREPARING home webpage");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", this.ClientOrServerInstance["actionName"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", this.ClientOrServerInstance["appSettings"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", this.ClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Action");

            //#endregion

            //#region MEMORIZE request details

            let storedRequestName: string = this.ExtraData.KeyValuePairs.getValue("RequestToProcess");
            let storedRequestNameParameters: string = this.ExtraData.KeyValuePairs.getValue("RequestToProcessParameters");

            //#endregion

            //#region MEMORIZE storage details

            let storedStorageCounter: number = 0;

            let storedStorageDictionary: Object = {};
            let storedStorageKey: string = "StorageKey_" + "Director_Of_WebDevelopment_Chapter_12_3_Page_6_ReadOrderFormScreenForAll_Handler_1_0" + "-" + "Read-BaseDI_PresentationHTML_Content";

            let storedStorageUpdateMode: boolean = false;

            //#endregion

            //#region MEMORIZE storyline details

            let storedStorylineDetails: any = this.StorylineDetails;
            //storedStorylineDetails_Parameters = parameterStorylineDetails_Parameters;

            //#endregion

            //#region MEMORIZE storyline details outputs

            const storedOutPut_ObservationPresentationTemplateItem: string = '{ "htmlResult": "{htmlResult}" }';
            const storedOutPut_ObservationBusinessTemplateItem: string = "{}";
            const storedOutPut_ObservationServiceTemplateItem: string = "{}";
            const storedOutPut_ObservationSecurityTemplateItem: string = "{}";
            const storedOutPut_ObservationDataTemplateItem: string = '{ "dataResult": "{dataResult}" }';

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE request handler

            if (this.ClientOrServerInstance["actionName"] == undefined || this.ClientOrServerInstance["actionName"] == null || this.ClientOrServerInstance["actionName"] == "" || this.ClientOrServerInstance["actionName"] == Action_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.Action_12_2_1_0._12_3_WEB_DEVELOPMENT_Server_Process_ROUTE_HTTP_Request_1_0 || this.ClientOrServerInstance["actionName"] == Action_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.Action_12_2_1_0._12_3_WEB_DEVELOPMENT_Client_Window_OnLoad_1_0 || this.ClientOrServerInstance["actionName"] == Action_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.Action_12_2_1_0._12_3_WEB_DEVELOPMENT_Server_OnLoad_1_0) {
                const ExecuteRequest = async () => {
                    try {
                        //#region EDGE CASE - USE developer logger

                        if (storedDeveloperMode) {
                            this.ClientOrServerInstance["processStepNumber"] = this.ClientOrServerInstance["processStepNumber"] + 1;

                            storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Logging"); //Values = Logging or Mistake
                            storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", this.ClientOrServerInstance["processStepNumber"]);

                            storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALMiddleOfProcess", true);

                            Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Custom_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);

                            storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALMiddleOfProcess", false);
                        }

                        //#endregion

                        //#region IDEAL CASE - USE baseDI render

                        //#region 1. PARSE json metadata

                        storedHtmlContainerJSON = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Professional.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode_1_0(this.StorylineDetails, "searchkey", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLContainer", false);
                        storedHtmlRowsJSON = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Professional.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode_1_0(this.StorylineDetails, "searchkey", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLRows", false);
                        storedHtmlColumnsJSON = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Professional.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode_1_0(this.StorylineDetails, "searchkey", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLColumns", false);
                        storedHtmlContentJSON = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Professional.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode_1_0(this.StorylineDetails, "searchkey", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLContent", false);
                        storedHtmlStylesJSON = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Professional.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode_1_0(this.StorylineDetails, "searchkey", "HTMLContentStylingDetails_SetImplementer_ProductCreation_WebDevelopment_CSS", false);

                        //#endregion

                        try {
                            //#region 2. CONVERT json to html

                            //#region EDGE CASE - USE developer logger

                            if (storedDeveloperMode) {
                                this.ClientOrServerInstance["processStepNumber"] = this.ClientOrServerInstance["processStepNumber"] + 1;

                                storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "CONVERTING json to html");
                                storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Logging"); //Values = Logging or Mistake
                                storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", this.ClientOrServerInstance["processStepNumber"]);

                                Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Custom_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                            }

                            //#endregion

                            storedOutput = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Professional.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Create_An_ObservationJsonNode_1_0("Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0", "Page_1_5_Process_StorySetting_12_3_1_0", "GENERATING html page", storedOutPut_ObservationPresentationTemplateItem, storedOutPut_ObservationBusinessTemplateItem, storedOutPut_ObservationServiceTemplateItem, storedOutPut_ObservationSecurityTemplateItem, storedOutPut_ObservationDataTemplateItem);

                            storedHtmlResultString = Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Web_Development.Extensions_0.Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_1_0_Custom_Convert_HTMLContainerJSONtoHTML_1_0(storedHtmlContainerJSON);
                            storedHtmlResultString = Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Web_Development.Extensions_0.Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_2_0_Custom_Convert_HTMLRowsJSONtoHTML_1_0(storedHtmlRowsJSON, storedHtmlResultString);
                            storedHtmlResultString = Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Web_Development.Extensions_0.Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_3_0_Custom_Convert_HTMLColumnsJSONtoHTML_1_0(storedHtmlColumnsJSON, storedHtmlResultString);
                            storedHtmlResultString = Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Web_Development.Extensions_0.Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_4_0_Custom_Convert_HTMLContentJSONtoHTML_1_0(storedHtmlContentJSON, storedHtmlResultString);

                            storedHtmlResultInlineStylesString = Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Web_Development.Extensions_0.Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_5_0_Custom_Convert_CSSJSONToInlineStyles_1_0(storedHtmlStylesJSON);

                            storedHtmlResultString = await Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Web_Development.Extensions_0.Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Custom_Store_HTMLStructureToString_1_0("", "", "", storedHtmlResultInlineStylesString, storedHtmlResultString, this.MasterStorer, this.StorylineDetails, this.ClientOrServerInstance);

                            storedOutput = storedOutput.replace('{htmlResult}', escape(storedHtmlResultString))

                            storedStorageDictionary[storedStorageKey] = JSON.parse(storedOutput.toString());

                            //#region EDGE CASE - USE developer logger

                            if (storedDeveloperMode) {
                                this.ClientOrServerInstance["processStepNumber"] = this.ClientOrServerInstance["processStepNumber"] + 1;

                                storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "FINISHED converting json to html");
                                storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Logging"); //Values = Logging or Mistake
                                storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", this.ClientOrServerInstance["processStepNumber"]);

                                Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Custom_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                            }

                            //#endregion

                            return storedStorageDictionary;

                            //#endregion
                        }
                        catch (mistake) {
                            //#region EDGE CASE - USE developer logger
                            if (storedDeveloperMode) {
                                this.ClientOrServerInstance["processStepNumber"] = this.ClientOrServerInstance["processStepNumber"] + 1;

                                storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "FAILED converting json");
                                storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                                storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", this.ClientOrServerInstance["processStepNumber"]);

                                Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Custom_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                            }
                            //#endregion

                            //#region EDGE CASE - USE exception handler

                            throw mistake;

                            //#endregion
                        }

                        //#endregion
                    }
                    catch (mistake) {
                        //#region EDGE CASE - USE developer logger

                        if (storedDeveloperMode) {
                            this.ClientOrServerInstance["processStepNumber"] = this.ClientOrServerInstance["processStepNumber"] + 1;

                            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "FAILED rendering homepage");
                            storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                            storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", this.ClientOrServerInstance["processStepNumber"]);

                            Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Custom_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                        }

                        //#endregion

                        //#region EDGE CASE - USE exception handler

                        throw mistake;

                        //#endregion
                    }
                }

                storedDataResponse = await ExecuteRequest();
            }

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            if (storedStorylineDetails.outputs != undefined) {
                try {
                    //#region EDGE CASE - USE developer logger

                    if (storedDeveloperMode) {
                        this.ClientOrServerInstance["processStepNumber"] = this.ClientOrServerInstance["processStepNumber"] + 1;

                        storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "FINALIZING home webpage");
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Logging"); //Values = Logging or Mistake
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", this.ClientOrServerInstance["processStepNumber"]);

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Custom_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                    }

                    //#endregion

                    //#region USE existing output observation item

                    storedStorylineDetails.outputs[1].baseDIObservations.map(storedObservation => {
                        if (Object.keys(storedObservation).length > 0 && Object.keys(storedObservation)[0].toUpperCase() == storedStorageKey.toUpperCase()) {
                            storedStorylineDetails.outputs[1].baseDIObservations[storedStorageCounter][storedStorageKey] = JSON.parse(storedOutput.toString());

                            this.StorylineDetails = storedStorylineDetails;

                            storedStorageUpdateMode = true;

                            return;
                        }

                        storedStorageCounter += 1;
                    });

                    //#endregion

                    //#region USE new output observation item
                    if (!storedStorageUpdateMode) {
                        storedStorylineDetails.outputs[1].baseDIObservations.push(storedDataResponse);
                        this.StorylineDetails = storedStorylineDetails;
                    }
                    //#endregion

                    //#region EDGE CASE - USE developer logger

                    if (storedDeveloperMode) {
                        this.ClientOrServerInstance["processStepNumber"] = this.ClientOrServerInstance["processStepNumber"] + 1;

                        storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "DELIVERING home webpage");
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Logging"); //Values = Logging or Mistake
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", this.ClientOrServerInstance["processStepNumber"]);

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Custom_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                    }

                    //#endregion
                }
                catch (mistake) {
                    //#region EDGE CASE - USE developer logger

                    if (storedDeveloperMode) {
                        this.ClientOrServerInstance["processStepNumber"] = this.ClientOrServerInstance["processStepNumber"] + 1;

                        storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "FAILED rendering homepage");
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", this.ClientOrServerInstance["processStepNumber"]);

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Custom_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                    }

                    //#endregion

                    //#region EDGE CASE - USE exception handler

                    throw mistake;

                    //#endregion

                }
            }

            return this.StorylineDetails;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion
    }
}