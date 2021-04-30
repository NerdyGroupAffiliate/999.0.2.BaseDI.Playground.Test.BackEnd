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

export namespace BaseDI.Professional.Chapter.Page.Web_Development_11 {
    export class Page_11_5_Process_StorySetting_12_3_1_0 extends aClass_Programming_ScriptPage_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptPage_12_2_1_0 {
        //#region 1. Assign

        //SETTINGS
        private _storedAppSettings: any;

        //CLIENT/SERVER
        private _storedClientOrServerInstance: any;

        private _storedClientRequestByName: string;
        private _storedClientRequestByNameParameters: string;

        private _storedClientRequestByObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        public _storedServerInstance: any;
        private _storedServerInstanceInfo: any;

        //DATASET
        private _storedStorylineDetails: object = new Object();
        private _storedStorylineDetails_Parameters: object = new Object();

        //MISC
        private _storedExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0 = new ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //PLUMBING
        private _storedActionName: string = "";
        private _storedBusinessDirectorOrExperienceRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        private _storedCentralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _storedCentralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _storedCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        private _storedParameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

        private _storedRequestFileName: string = "LocalFile_Director_Of_Advertising_Chapter_1_1_Page_11_CreateAdvertisementForAll_Handler_1_0 ";
        private _storedRequestName: string = "";
        private _storedRepository: IContract_Programming_Repository_12_2_1_0;
        private _storedSystemRequestByName: string;

        public StoredStartUpCallBack;

        //#endregion

        //#region 2. Ready

        constructor(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) {
            super();

            //#region 1. INPUTS

            //#region MEMORIZE clientOrServer instance

            this._storedClientOrServerInstance = parameterInputs.Parameters.getValue("parameterClientOrServerInstance");

            //#endregion

            //#region MEMORIZE action name

            this._storedActionName = this._storedClientOrServerInstance["storedActionName"];

            //#endregion

            //#region MEMORIZE app settings

            this._storedAppSettings = this._storedClientOrServerInstance["storedAppSettings"];

            //#endregion

            //#region MEMORIZE centralized processes handlers

            this._storedCentralizedDisturber = parameterInputs.Parameters.getValue("parameterCentralizedDisturber");
            this._storedCentralizedSensor = parameterInputs.Parameters.getValue("parameterCentralizedSensor");
            this._storedCentralizedStorer = parameterInputs.Parameters.getValue("parameterCentralizedStorer");

            //#endregion

            //#region MEMORIZE data repository

            this._storedRepository = parameterInputs.Parameters.getValue("parameterDataRepository");

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#region MEMORIZE storyline details

            this._storedStorylineDetails = parameterInputs.Parameters.getValue("parameterStorylineDetails");
            this._storedStorylineDetails_Parameters = parameterInputs.Parameters.getValue("parameterStorylineDetails_Parameters");

            //#endregion

            //#region MEMORIZE extra data

            this._storedExtraData = parameterInputs.Parameters.getValue("parameterExtraData") ? parameterInputs.Parameters.getValue("parameterExtraData") : null;

            //#endregion

            //#region MEMORIZE request details

            this._storedClientRequestByName = parameterInputs.Parameters.getValue("parameterClientRequestByName");
            this._storedClientRequestByNameParameters = parameterInputs.Parameters.getValue("parameterClientRequestByNameParameters");
            this._storedClientRequestByObject = parameterInputs.Parameters.getValue("parameterClientRequestByObject");

            this._storedRequestName = parameterInputs.Parameters.getValue("parameterSystemRequestByName");

            this._storedSystemRequestByName = parameterInputs.Parameters.getValue("parameterSystemRequestByName");

            this._storedBusinessDirectorOrExperienceRequestHandler = parameterInputs.Parameters.getValue("parameterBusinessDirectorOrExperienceRequestHandler");

            this._storedParameterInputs = parameterInputs;

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

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

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

            let storedParameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = null;

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

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE ? this._storedAppSettings.APP_SETTING_DEVELOPER_MODE : false;

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "CONVERTING json to html");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", this._storedClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", this._storedClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadHomeScreenForAll_Handler_1_0 -> Page_11_5_Process_StorySetting_12_3_1_0.cs");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Action");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters["parameterOPTIONALIgnoreDeveloperConsoleLog"));

            //#endregion

            //#region MEMORIZE observation details

            storedParameterInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

            let storedObservationPresentationTemplateItem: string = "{ 'htmlResult': '{htmlResult}' }";
            let storedObservationBusinessTemplateItem: string = "{}";
            let storedObservationServiceTemplateItem: string = "{}";
            let storedObservationSecurityTemplateItem: string = "{}";
            let storedObservationDataTemplateItem: string = "{}";

            let storedObservationDataTemplateBuilder = "";

            storedParameterInputs.Parameters.setValue("parameter3WordDescription", "RENDER web page");
            storedParameterInputs.Parameters.setValue("parameterActionName", this._storedActionName);
            storedParameterInputs.Parameters.setValue("parameterAppSettings", this._storedAppSettings);
            storedParameterInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
            storedParameterInputs.Parameters.setValue("parameterObservationFileName", "Page_11_5_Process_StorySetting_12_3_1_0.cs");
            storedParameterInputs.Parameters.setValue("parameterObservationMethodName", "Action");
            storedParameterInputs.Parameters.setValue("parameterObservationPresentationTemplate", storedObservationPresentationTemplateItem);
            storedParameterInputs.Parameters.setValue("parameterObservationBusinessTemplate", storedObservationBusinessTemplateItem);
            storedParameterInputs.Parameters.setValue("parameterObservationServiceTemplate", storedObservationServiceTemplateItem);
            storedParameterInputs.Parameters.setValue("parameterObservationSecurityTemplate", storedObservationSecurityTemplateItem);
            storedParameterInputs.Parameters.setValue("parameterObservationDataTemplate", storedObservationDataTemplateItem);

            let storedObservationItem: string = await Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Professional.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Framework_Output_JsonObservationNode_1_0(storedParameterInputs);

            //#endregion

            //#region MEMORIZE storage details

            let storedStorageCounter: number = 0;

            let storedStorageDictionary: Object = {};
            let storedStorageKey: string = "StorageKey_" + "Director_Of_WebDevelopment_Chapter_12_3_Page_11_ReadHomeScreenForAll_Handler_1_0" + "-" + "Read-BaseDI_PresentationHTML_Content";

            let storedStorageUpdateMode: boolean = false;

            //#endregion

            //#region MEMORIZE storyline details

            let storedStorylineDetails: any = this._storedStorylineDetails;

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
                        storedParameterInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                        storedParameterInputs.Parameters.setValue("parameterAppSettings", this._storedAppSettings);
                        storedParameterInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
                        storedParameterInputs.Parameters.setValue("parameterFilterData", storedStorylineDetails);
                        storedParameterInputs.Parameters.setValue("parameterFilterKeyValuePairKey", "searchkey");
                        storedParameterInputs.Parameters.setValue("parameterFilterKeyValuePairValue", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLContainer");
                        storedParameterInputs.Parameters.setValue("parameterFilterReturnValueAsArray", false);

                        storedHtmlContainerJSON = await Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Professional.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(storedParameterInputs);

                        storedParameterInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                        storedParameterInputs.Parameters.setValue("parameterHtmlContainerJSON", storedHtmlContainerJSON);
                        storedParameterInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
                        storedParameterInputs.Parameters.setValue("parameterAppSettings", this._storedAppSettings);
                        storedParameterInputs.Parameters.setValue("parameterMasterStorer", this._storedCentralizedStorer);
                        storedParameterInputs.Parameters.setValue("parameterStorylineDetails", storedStorylineDetails);

                        storedHtmlResultString = await Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Web_Development.Extensions_0.Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_1_0_Framework_Convert_HtmlContainerJsonToHtml_1_0(storedParameterInputs);

                        return storedHtmlResultString;
                    };

                    storedHtmlResultString = await ExecuteConversionRequest();
                }
                catch (mistake)
                {
                    throw new Error("converting html container");
                }
                //#endregion

                //#region 2. CONVERT html rows

                try {
                    const ExecuteConversionRequest = async (): Promise<string> =>
                    {
                        storedParameterInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                        storedParameterInputs.Parameters.setValue("parameterAppSettings", this._storedAppSettings);
                        storedParameterInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
                        storedParameterInputs.Parameters.setValue("parameterFilterData", storedStorylineDetails);
                        storedParameterInputs.Parameters.setValue("parameterFilterKeyValuePairKey", "searchkey");
                        storedParameterInputs.Parameters.setValue("parameterFilterKeyValuePairValue", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLRows");
                        storedParameterInputs.Parameters.setValue("parameterFilterReturnValueAsArray", false);

                        storedHtmlRowsJSON = await Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Professional.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(storedParameterInputs);

                        storedParameterInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                        storedParameterInputs.Parameters.setValue("parameterHtmlRowsJSON", storedHtmlRowsJSON);
                        storedParameterInputs.Parameters.setValue("parameterHtmlContainerString", storedHtmlResultString);
                        storedParameterInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
                        storedParameterInputs.Parameters.setValue("parameterAppSettings", this._storedAppSettings);
                        storedParameterInputs.Parameters.setValue("parameterMasterStorer", this._storedCentralizedStorer);
                        storedParameterInputs.Parameters.setValue("parameterStorylineDetails", storedStorylineDetails);

                        storedHtmlResultString = await Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Web_Development.Extensions_0.Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_2_0_Framework_Convert_HtmlRowsJsonToHtml_1_0(storedParameterInputs);

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
                        storedParameterInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                        storedParameterInputs.Parameters.setValue("parameterAppSettings", this._storedAppSettings);
                        storedParameterInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
                        storedParameterInputs.Parameters.setValue("parameterFilterData", storedStorylineDetails);
                        storedParameterInputs.Parameters.setValue("parameterFilterKeyValuePairKey", "searchkey");
                        storedParameterInputs.Parameters.setValue("parameterFilterKeyValuePairValue", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLColumns");
                        storedParameterInputs.Parameters.setValue("parameterFilterReturnValueAsArray", false);

                        storedHtmlColumnsJSON = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Professional.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(storedParameterInputs);

                        storedParameterInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                        storedParameterInputs.Parameters.setValue("parameterHtmlColumnsJSON", storedHtmlColumnsJSON);
                        storedParameterInputs.Parameters.setValue("parameterHtmlRowString", storedHtmlResultString);
                        storedParameterInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
                        storedParameterInputs.Parameters.setValue("parameterAppSettings", this._storedAppSettings);
                        storedParameterInputs.Parameters.setValue("parameterMasterStorer", this._storedCentralizedStorer);
                        storedParameterInputs.Parameters.setValue("parameterStorylineDetails", storedStorylineDetails);

                        storedHtmlResultString = await Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Web_Development.Extensions_0.Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_3_0_Framework_Convert_HtmlColumnsJsonToHtml_1_0(storedParameterInputs);

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
                        storedParameterInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                        storedParameterInputs.Parameters.setValue("parameterAppSettings", this._storedAppSettings);
                        storedParameterInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
                        storedParameterInputs.Parameters.setValue("parameterFilterData", storedStorylineDetails);
                        storedParameterInputs.Parameters.setValue("parameterFilterKeyValuePairKey", "searchkey");
                        storedParameterInputs.Parameters.setValue("parameterFilterKeyValuePairValue", "HTMLContentItem_SetImplementer_ProductCreation_WebDevelopment_HTMLContent");
                        storedParameterInputs.Parameters.setValue("parameterFilterReturnValueAsArray", false);

                        storedHtmlContentJSON = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Professional.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(storedParameterInputs);

                        storedParameterInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                        storedParameterInputs.Parameters.setValue("parameterHtmlContentJSON", storedHtmlContentJSON);
                        storedParameterInputs.Parameters.setValue("parameterHtmlColumnString", storedHtmlResultString);
                        storedParameterInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
                        storedParameterInputs.Parameters.setValue("parameterAppSettings", this._storedAppSettings);
                        storedParameterInputs.Parameters.setValue("parameterMasterStorer", this._storedCentralizedStorer);
                        storedParameterInputs.Parameters.setValue("parameterStorylineDetails", storedStorylineDetails);

                        storedHtmlResultString = await Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Web_Development.Extensions_0.Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_4_0_Framework_Convert_HtmlContentJsonToHtml_1_0(storedParameterInputs);

                        return storedHtmlResultString;
                    };

                    storedHtmlResultString = await ExecuteConversionRequest();
                }
                catch (mistake)
                {
                    throw new Error("converting html content");
                }

                //#endregion

                //#region 5. CONVERT html inline styles

                try {
                    const ExecuteConversionRequest = async (): Promise<string> => {
                        storedParameterInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                        storedParameterInputs.Parameters.setValue("parameterAppSettings", this._storedAppSettings);
                        storedParameterInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
                        storedParameterInputs.Parameters.setValue("parameterFilterData", storedStorylineDetails);
                        storedParameterInputs.Parameters.setValue("parameterFilterKeyValuePairKey", "searchkey");
                        storedParameterInputs.Parameters.setValue("parameterFilterKeyValuePairValue", "HTMLContentStylingDetails_SetImplementer_ProductCreation_WebDevelopment_CSS");
                        storedParameterInputs.Parameters.setValue("parameterFilterReturnValueAsArray", false);

                        storedHtmlStylesFiltered = Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Professional.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Framework_Convert_JsonDataSetToNodes_2_0(storedParameterInputs);

                        storedHtmlStylesJSON = storedHtmlStylesFiltered.Count > 0 ? storedHtmlStylesFiltered[0].Parent.Parent : null;

                        storedParameterInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                        storedParameterInputs.Parameters.setValue("parameterHtmlStylesJSON", storedHtmlStylesJSON);
                        storedParameterInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
                        storedParameterInputs.Parameters.setValue("parameterAppSettings", this._storedAppSettings);
                        storedParameterInputs.Parameters.setValue("parameterMasterStorer", this._storedCentralizedStorer);
                        storedParameterInputs.Parameters.setValue("parameterStorylineDetails", storedStorylineDetails);

                        return await Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Web_Development.Extensions_0.Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_5_0_Framework_Convert_HtmlCssJSONToInlineStyles_1_0(storedParameterInputs);
                    };

                    storedHtmlResultInlineStylesString = await ExecuteConversionRequest();
                }
                catch (mistake)
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
                catch (mistake)
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
                catch (mistake) {
                    throw new Error("converting html inline metadata");
                }

                //#endregion

                //#region 8. OUTPUT html string

                try {
                    const ExecuteOutputRequest = async (): Promise<string> => {
                        storedParameterInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();
                        storedParameterInputs.Parameters.setValue("parameterHtmlMetaData", "");
                        storedParameterInputs.Parameters.setValue("parameterHtmlTitle", "");
                        storedParameterInputs.Parameters.setValue("parameterHtmlScripts", "");
                        storedParameterInputs.Parameters.setValue("parameterHtmlStyles", storedHtmlResultInlineStylesString);
                        storedParameterInputs.Parameters.setValue("parameterHtmlAdditionalHeadData", "");
                        storedParameterInputs.Parameters.setValue("parameterHtmlBody", storedHtmlResultString);
                        storedParameterInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
                        storedParameterInputs.Parameters.setValue("parameterAppSettings", this._storedAppSettings);
                        storedParameterInputs.Parameters.setValue("parameterMasterStorer", this._storedCentralizedStorer);
                        storedParameterInputs.Parameters.setValue("parameterStorylineDetails", storedStorylineDetails);

                        return await Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Web_Development.Extensions_0.Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_8_0_Framework_Convert_HtmlStructureToString_1_0(storedParameterInputs);
                    };

                    storedHtmlResultString = await ExecuteOutputRequest();
                }
                catch (mistake)
                {
                    throw new Error("converting html content");
                }

                //#endregion

                //#region 9. STORE html string

                try {
                    const ExecuteOutputRequest = async () =>
                    {
                        storedObservationItem = storedObservationItem.replace("'", "\"");
                        storedObservationItem = storedObservationItem.replace("{htmlResult}", escape(storedHtmlResultString));

                        storedStorageDictionary[storedStorageKey] = JSON.parse(storedObservationItem.toString());

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
                            storedStorylineDetails.outputs[1].baseDIObservations.push(storedStorageDictionary);
                        }
                        //#endregion

                        return storedStorylineDetails;
                    };

                    this.StorylineDetails = await ExecuteOutputRequest();
                }
                catch (mistake)
                {
                    throw new Error("storing html string output observation");
                }

                //#endregion

                //#endregion
            }
            catch (mistake)
            {
                //#region EDGE CASE - USE developer logger

                if (storedDeveloperMode) {
                    this._storedClientOrServerInstance["processStepNumber"] = this._storedClientOrServerInstance["processStepNumber"] + 1;

                    storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "FAILED converting json to html");
                    storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                    storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", this._storedClientOrServerInstance["processStepNumber"]);
                    storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Action");
                    storedDeveloperLoggingInputs.Parameters.setValue("parameterMistake", mistake);

                    await Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                }

                //#endregion

                //#region EDGE CASE - USE exception handler

                throw new Error("CONVERSION request failed " + mistake.message);

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