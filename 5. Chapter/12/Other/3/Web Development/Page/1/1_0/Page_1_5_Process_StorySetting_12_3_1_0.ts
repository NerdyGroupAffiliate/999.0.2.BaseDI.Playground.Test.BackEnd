//#region Imports

//#region BaseDI

import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptPage_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptPage_12_2_1_0";
import * as aClass_Programming_ScriptRoutable_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptRoutable_12_2_1_0";

import * as Action_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/Action Poco/1/1_0/Action_12_2_1_0";

import * as Extension_Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_1_ControlRequest_Handler_1_0";

import * as Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/0/1_0/Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0";
import * as Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0 from "../../../../../../../../0. Script/Extensions/11/Automate Manual Task/1/Risk Management/Method/0/1_0/Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0";
import * as Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/3/Web Development/Method/0/1_0/Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0";

import * as ExtraData_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";

import * as Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0 from "../../../../../../../../1. Storyline/12/Other/2/Programming/Studio/0/1_0/Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0";

import * as SingleParmPoco_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

//#endregion

//#endregion

export namespace BaseDI.Professional.Chapter.Page.Web_Development_1 {
    export class Page_1_5_Process_StorySetting_12_3_1_0 extends aClass_Programming_ScriptPage_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptPage_12_2_1_0 {
        //#region 1. Assign

        //SETTINGS
        private _storedProcessRequestSettings: any;

        //CLIENT/SERVER
        private _storedProcessRequestTracker: any;

        private _storedInputRequestName: string;
        private _storedInputRequestNameDataCacheKey: string;

        private _storedProcessRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        public _storedServerInstance: any;
        private _storedServerInstanceInfo: any;

        //DATASET
        private _storedProcessRequestDataStorylineDetails: object = new Object();
        private _storedProcessRequestDataStorylineDetails_Parameters: object = new Object();

        //MISC
        private _storedProcessRequestExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0 = new ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //PLUMBING
        private _storedActionName: string = "";
        private _storedBusinessDirectorOrExperienceRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        private _storedProcessRequestCentralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _storedProcessRequestCentralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _storedProcessRequestCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        private _storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

        private _storedRequestFileName: string = "LocalFile_Director_Of_Advertising_Chapter_1_1_Page_1_InputAdvertisement_Handler_1_0 ";
        private _storedProcessRequestName: string = "";
        private _storedRepository: IContract_Programming_Repository_12_2_1_0;
        private _storedProcessRequestByName: string;

        public StoredStartUpCallBack;

        //#endregion

        //#region 2. Ready

        constructor(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) {
            super();

            //#region 1. INPUTS

            //#region MEMORIZE control client server

            this._storedProcessRequestTracker = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE action name

            this._storedActionName = this._storedProcessRequestTracker["storedInputRequestActionName"];

            //#endregion

            //#region MEMORIZE app settings

            this._storedProcessRequestSettings = this._storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE centralized processes handlers

            this._storedProcessRequestCentralizedDisturber = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedDisturber");
            this._storedProcessRequestCentralizedSensor = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedSensor");
            this._storedProcessRequestCentralizedStorer = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedStorer");

            //#endregion

            //#region MEMORIZE data repository

            this._storedRepository = parameterInputs.Parameters.getValue("parameterDataRepository");

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#region MEMORIZE storyline details

            this._storedProcessRequestDataStorylineDetails = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            this._storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails_Parameters");

            //#endregion

            //#region MEMORIZE extra data

            this._storedProcessRequestExtraData = parameterInputs.Parameters.getValue("parameterProcessRequestExtraData") ? parameterInputs.Parameters.getValue("parameterProcessRequestExtraData") : null;

            //#endregion

            //#region MEMORIZE request details

            this._storedInputRequestName = parameterInputs.Parameters.getValue("parameterInputRequestName");
            this._storedInputRequestNameDataCacheKey = parameterInputs.Parameters.getValue("parameterInputRequestNameDataCacheKey");
            this._storedProcessRequestHandler = parameterInputs.Parameters.getValue("parameterProcessRequestHandler");

            this._storedProcessRequestName = parameterInputs.Parameters.getValue("parameterProcessRequestByName");

            this._storedProcessRequestByName = parameterInputs.Parameters.getValue("parameterProcessRequestByName");

            this._storedBusinessDirectorOrExperienceRequestHandler = parameterInputs.Parameters.getValue("parameterBusinessDirectorOrExperienceRequestHandler");

            this._storedInputs = parameterInputs;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process defaults

            //#region IDEAL CASE - USE defaults handler

            this.HandleDefaults = this.HandleDefaults.bind(this);

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#endregion
        }

        //#endregion

        //#region 3. Set

        public HandleDefaults(): void {
            //#region 1. INPUTS

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process defaults


            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#endregion
        }

        //#endregion

        //#region 4. Action
        public async Action(): Promise<object> {
            //#region 1. INPUTS

            //#region DEFINE parameter inputs

            let storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = null;

            //#endregion

            //#region DEFINE storyline details outputs

            let storedOutput: String = "";
            let storedOutPut_ObservationDataTemplateBuilder: string = "";

            //#endregion

            //#region DEFINE html details

            let storedHtmlContainerJSON: any = "";
            let storedHtmlRowsJSON: any = "";
            let storedHtmlColumnsJSON: any = "";
            let storedHtmlContentJSON: any = "";

            let storedHtmlStylesFiltered: any = "";
            let storedHtmlStylesJSON: any = "";

            let storedHtmlResultInlineStylesString: string = "";
            let storedHtmlResultString: string = "";

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE ? this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE : false;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONVERTING json to html");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", this._storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Director_Of_WebDevelopment_Chapter_12_3_Page_1_OutputHomeScreen_Handler_1_0 -> Page_1_5_Process_StorySetting_12_3_1_0.cs");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Action");

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters["parameterOPTIONALIgnoreDeveloperConsoleLog"));

            //#endregion

            //#region MEMORIZE observation details

            storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

            let storedObservationPresentationTemplateItem: string = "{ 'htmlResult': '{htmlResult}' }";
            let storedObservationBusinessTemplateItem: string = "{}";
            let storedObservationServiceTemplateItem: string = "{}";
            let storedObservationSecurityTemplateItem: string = "{}";
            let storedObservationDataTemplateItem: string = "{}";

            let storedObservationDataTemplateBuilder = "";

            storedInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "RENDER web page");
            storedInputs.Parameters.setValue("parameterInputRequestActionName", this._storedActionName);
            storedInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestSettings);
            storedInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
            storedInputs.Parameters.setValue("parameterOutputResponseObservationFileName", "Page_1_5_Process_StorySetting_12_3_1_0.cs");
            storedInputs.Parameters.setValue("parameterOutputResponseObservationMethodName", "Action");
            storedInputs.Parameters.setValue("parameterOutputResponseObservationPresentationTemplate", storedObservationPresentationTemplateItem);
            storedInputs.Parameters.setValue("parameterOutputResponseObservationBusinessTemplate", storedObservationBusinessTemplateItem);
            storedInputs.Parameters.setValue("parameterOutputResponseObservationServiceTemplate", storedObservationServiceTemplateItem);
            storedInputs.Parameters.setValue("parameterOutputResponseObservationSecurityTemplate", storedObservationSecurityTemplateItem);
            storedInputs.Parameters.setValue("parameterOutputResponseObservationDataTemplate", storedObservationDataTemplateItem);

            let storedObservationItem: string = await Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.BaseDI.Professional.Programming.Extensions_0.Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.Step_X_X_Framework_Output_JsonObservationNode_1_0(storedInputs);

            //#endregion

            //#region MEMORIZE storage details

            let storedStorageCounter: number = 0;

            let storedStorageDictionary: Object = {};
            let storedStorageKey: string = "StorageKey_" + "Director_Of_WebDevelopment_Chapter_12_3_Page_1_OutputHomeScreen_Handler_1_0" + "-" + "Read-BaseDI_PresentationHTML_Content";

            let storedStorageUpdateMode: boolean = false;

            //#endregion

            //#region MEMORIZE storyline details

            let storedProcessRequestDataStorylineDetails: any = this._storedProcessRequestDataStorylineDetails;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE json to html conversion

            try
            {
                //#region IDEAL CASE - USE baseDI converter

                //#region 1. CONVERT html container

                try {
                    const ExecuteConversionRequest = async () : Promise<string> => {
                        storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestSettings);
                        storedInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilter", storedProcessRequestDataStorylineDetails);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilterKey", "searchkey");
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilterValue", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLContainer");
                        storedInputs.Parameters.setValue("parameterOutputResponseAsArray", false);

                        storedHtmlContainerJSON = await Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.BaseDI.Professional.Programming.Extensions_0.Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(storedInputs);

                        storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.setValue("parameterHtmlContainerJSON", storedHtmlContainerJSON);
                        storedInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
                        storedInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestSettings);
                        storedInputs.Parameters.setValue("parameterProcessRequestMasterStorer", this._storedProcessRequestCentralizedStorer);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);

                        storedHtmlResultString = await Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Web_Development.Extensions_0.Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.Step_1_0_Framework_Convert_HtmlContainerJsonToHtml_1_0(storedInputs);

                        return storedHtmlResultString;
                    };

                    storedHtmlResultString = await ExecuteConversionRequest();
                }
                catch (storedProcessRequestMistake)
                {
                    throw new Error("converting html container");
                }
                //#endregion

                //#region 2. CONVERT html rows

                try {
                    const ExecuteConversionRequest = async (): Promise<string> =>
                    {
                        storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestSettings);
                        storedInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilter", storedProcessRequestDataStorylineDetails);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilterKey", "searchkey");
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilterValue", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLRows");
                        storedInputs.Parameters.setValue("parameterOutputResponseAsArray", false);

                        storedHtmlRowsJSON = await Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.BaseDI.Professional.Programming.Extensions_0.Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(storedInputs);

                        storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.setValue("parameterHtmlRowsJSON", storedHtmlRowsJSON);
                        storedInputs.Parameters.setValue("parameterHtmlContainerString", storedHtmlResultString);
                        storedInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
                        storedInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestSettings);
                        storedInputs.Parameters.setValue("parameterProcessRequestMasterStorer", this._storedProcessRequestCentralizedStorer);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);

                        storedHtmlResultString = await Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Web_Development.Extensions_0.Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.Step_2_0_Framework_Convert_HtmlRowsJsonToHtml_1_0(storedInputs);

                        return storedHtmlResultString;
                    };

                    storedHtmlResultString = await ExecuteConversionRequest();
                }
                catch(mistake)
                {
                    throw new Error("converting html rows");
                }

                //#endregion

                //#region 3. CONVERT html columns

                try {
                    const ExecuteConversionRequest = async (): Promise<string> => {
                        storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestSettings);
                        storedInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilter", storedProcessRequestDataStorylineDetails);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilterKey", "searchkey");
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilterValue", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLColumns");
                        storedInputs.Parameters.setValue("parameterOutputResponseAsArray", false);

                        storedHtmlColumnsJSON = Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.BaseDI.Professional.Programming.Extensions_0.Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(storedInputs);

                        storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.setValue("parameterHtmlColumnsJSON", storedHtmlColumnsJSON);
                        storedInputs.Parameters.setValue("parameterHtmlRowString", storedHtmlResultString);
                        storedInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
                        storedInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestSettings);
                        storedInputs.Parameters.setValue("parameterProcessRequestMasterStorer", this._storedProcessRequestCentralizedStorer);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);

                        storedHtmlResultString = await Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Web_Development.Extensions_0.Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.Step_3_0_Framework_Convert_HtmlColumnsJsonToHtml_1_0(storedInputs);

                        return storedHtmlResultString;
                    };

                    storedHtmlResultString = await ExecuteConversionRequest();
                }
                catch(mistake)
                {
                    throw new Error("converting html rows");
                }

                //#endregion

                //#region 4. CONVERT html content

                try {
                    const ExecuteConversionRequest = async (): Promise<string> => {
                        storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestSettings);
                        storedInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilter", storedProcessRequestDataStorylineDetails);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilterKey", "searchkey");
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilterValue", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLContent");
                        storedInputs.Parameters.setValue("parameterOutputResponseAsArray", false);

                        storedHtmlContentJSON = Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.BaseDI.Professional.Programming.Extensions_0.Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(storedInputs);

                        storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.setValue("parameterHtmlContentJSON", storedHtmlContentJSON);
                        storedInputs.Parameters.setValue("parameterHtmlColumnString", storedHtmlResultString);
                        storedInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
                        storedInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestSettings);
                        storedInputs.Parameters.setValue("parameterProcessRequestMasterStorer", this._storedProcessRequestCentralizedStorer);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);

                        storedHtmlResultString = await Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Web_Development.Extensions_0.Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.Step_4_0_Framework_Convert_HtmlContentJsonToHtml_1_0(storedInputs);

                        return storedHtmlResultString;
                    };

                    storedHtmlResultString = await ExecuteConversionRequest();
                }
                catch (storedProcessRequestMistake)
                {
                    throw new Error("converting html content");
                }

                //#endregion

                //#region 5. CONVERT html inline styles

                try {
                    const ExecuteConversionRequest = async (): Promise<string> => {
                        storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestSettings);
                        storedInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilter", storedProcessRequestDataStorylineDetails);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilterKey", "searchkey");
                        storedInputs.Parameters.setValue("parameterProcessRequestDataToFilterValue", "HTMLContentStylingDetails_SetImplementer_ProductCreation_WebDevelopment_CSS");
                        storedInputs.Parameters.setValue("parameterOutputResponseAsArray", false);

                        storedHtmlStylesFiltered = Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.BaseDI.Professional.Programming.Extensions_0.Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_2_0(storedInputs);

                        storedHtmlStylesJSON = storedHtmlStylesFiltered.Count > 0 ? storedHtmlStylesFiltered[0].Parent.Parent : null;

                        storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                        storedInputs.Parameters.setValue("parameterHtmlStylesJSON", storedHtmlStylesJSON);
                        storedInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
                        storedInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestSettings);
                        storedInputs.Parameters.setValue("parameterProcessRequestMasterStorer", this._storedProcessRequestCentralizedStorer);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);

                        return await Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Web_Development.Extensions_0.Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.Step_5_0_Framework_Convert_HtmlCssJSONToInlineStyles_1_0(storedInputs);
                    };

                    storedHtmlResultInlineStylesString = await ExecuteConversionRequest();
                }
                catch (storedProcessRequestMistake)
                {
                    throw new Error("converting html inline styles");
                }

                //#endregion

                //#region 6. CONVERT html inline scripts

                //TODO
                try
                {
                    const ExecuteConversionRequest = async () => {

                    }
                }
                catch (storedProcessRequestMistake)
                {
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
                        storedInputs.Parameters.setValue("parameterHtmlMetaData", "");
                        storedInputs.Parameters.setValue("parameterHtmlTitle", "");
                        storedInputs.Parameters.setValue("parameterHtmlScripts", "");
                        storedInputs.Parameters.setValue("parameterHtmlStyles", storedHtmlResultInlineStylesString);
                        storedInputs.Parameters.setValue("parameterHtmlAdditionalHeadData", "");
                        storedInputs.Parameters.setValue("parameterHtmlBody", storedHtmlResultString);
                        storedInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
                        storedInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestSettings);
                        storedInputs.Parameters.setValue("parameterProcessRequestMasterStorer", this._storedProcessRequestCentralizedStorer);
                        storedInputs.Parameters.setValue("parameterProcessRequestDataStorylineDetails", storedProcessRequestDataStorylineDetails);

                        return await Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Web_Development.Extensions_0.Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_GoalHelper_Handler_1_0.Step_8_0_Framework_Convert_HtmlStructureToString_1_0(storedInputs);
                    };

                    storedHtmlResultString = await ExecuteOutputResponse();
                }
                catch (storedProcessRequestMistake)
                {
                    throw new Error("converting html content");
                }

                //#endregion

                //#region 9. STORE html string

                try {
                    const ExecuteOutputResponse = async () =>
                    {
                        storedObservationItem = storedObservationItem.replace("'", "\"");
                        storedObservationItem = storedObservationItem.replace("{htmlResult}", escape(storedHtmlResultString));

                        storedStorageDictionary[storedStorageKey] = JSON.parse(storedObservationItem.toString());

                        //#region USE existing output observation item

                        storedProcessRequestDataStorylineDetails.outputs[1].baseDIObservations.map(storedOutputResponseObservation => {
                            if (Object.keys(storedOutputResponseObservation).length > 0 && Object.keys(storedOutputResponseObservation)[0].toUpperCase() == storedStorageKey.toUpperCase()) {
                                storedProcessRequestDataStorylineDetails.outputs[1].baseDIObservations[storedStorageCounter][storedStorageKey] = JSON.parse(storedOutput.toString());

                                this.StorylineDetails = storedProcessRequestDataStorylineDetails;

                                storedStorageUpdateMode = true;

                                return;
                            }

                            storedStorageCounter += 1;
                        });

                        //#endregion

                        //#region USE new output observation item
                        if (!storedStorageUpdateMode) {
                            storedProcessRequestDataStorylineDetails.outputs[1].baseDIObservations.push(storedStorageDictionary);
                        }
                        //#endregion

                        return storedProcessRequestDataStorylineDetails;
                    };

                    this.StorylineDetails = await ExecuteOutputResponse();
                }
                catch (storedProcessRequestMistake)
                {
                    throw new Error("storing html string output observation");
                }

                //#endregion

                //#endregion
            }
            catch (storedProcessRequestMistake)
            {
                //#region EDGE CASE - USE developer logger

                if (storedProcessRequestDeveloperMode) {
                    this._storedProcessRequestTracker["storedProcessRequestStepNumber"] = this._storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED converting json to html");
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", this._storedProcessRequestTracker["storedProcessRequestStepNumber"]);
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Action");
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMistake", storedProcessRequestMistake);

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

            return this.StorylineDetails;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion
    }
}