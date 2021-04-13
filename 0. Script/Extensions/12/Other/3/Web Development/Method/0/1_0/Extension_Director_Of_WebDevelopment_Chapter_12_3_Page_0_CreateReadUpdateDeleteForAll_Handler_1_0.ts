//#region Imports

//#region 3rd Party

//#endregion

//#region BaseDI

import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";

import * as Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0 from "../../../../../../../../../0. Script/Extensions/11/Automate Manual Task/1/Risk Management/Method/0/1_0/Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0";
import * as Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0 from "../../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/3/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0"

import * as SingleParmPoco_12_2_1_0 from "../../../../../../../../../0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

//#endregion

//#endregion


export namespace BaseDI.Professional.Web_Development.Extensions_0 {
    export class Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0 {
        constructor() {

        }

        //#region GENERATE HTML STRUCTURE

        //metaData: string, title: string, scripts: string, styles: string, body: string, masterLeader_masterStorerReference: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object> = null, storyLineDetails: any = null, parameterClientOrServerInstance: any = null

        public static async Step_X_X_Custom_Store_HTMLStructureToString_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<string>
        {
            //#region 1. INPUTS

            //#region VALIDATE input parameters

            const ValidateInputs = async (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) =>
            {
                //#region 1. INPUTS

                //#region DEFINE parameter inputs

                let storedParameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

                //#endregion

                //#region DEFINE process checkpoint

                let storedProcessCheckPointHit: boolean = false;

                //#endregion

                //#region DEFINE stored message

                let storedMessage: string = "";

                //#endregion

                //#region MEMORIZE clientOrServer instance

                let storedClientOrServerInstance: any = parameterInputs.Parameters.getValue("parameterClientOrServerInstance");

                //#endregion

                //#region MEMORIZE app settings

                let storedAppSettings: any = storedClientOrServerInstance["appSettings"];

                //#endregion

                //#region MEMORIZE developer mode

                let storedDeveloperMode: boolean = storedAppSettings.APP_SETTING_DEVELOPER_MODE ? storedAppSettings.APP_SETTING_DEVELOPER_MODE : false;

                let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

                //REQUIRED
                storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", storedClientOrServerInstance["actionName"]);
                storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", storedClientOrServerInstance["appSettings"]);
                storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", storedClientOrServerInstance);
                storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.ts");
                storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Step_X_X_Custom_Control_LocalDataToServerMemory_1_0.ValidateInputs()");

                //#endregion

                //#endregion

                //#region 2. PROCESS

                //#region EXECUTE validation process

                //#region IDEAL CASE - USE valid information

                if (parameterInputs != null || parameterInputs != undefined || parameterInputs.Parameters != null && parameterInputs.Parameters != undefined) {
                    if (process.env.APP_ENV == null || process.env.APP_ENV == undefined) {
                        storedMessage += "***process.env.APP_ENV*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterClientOrServerInstance")) {
                        storedMessage += "***parameterClientOrServerInstance*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }
                    else
                    {
                        if (parameterInputs.Parameters.getValue("parameterClientOrServerInstance")["appSettings"] == null || parameterInputs.Parameters.getValue("parameterClientOrServerInstance")["appSettings"] == undefined) {
                            storedMessage += "***parameterClientOrServerInstance*** must contain a key of ***appSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.setValue(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})"
                            storedProcessCheckPointHit = true;
                        }
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterAppSettings")) {
                        storedMessage += "***parameterAppSettings*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterHtmlMetaData")) {
                        storedMessage += "***parameterHtmlMetaData*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterHtmlTitle")) {
                        storedMessage += "***parameterTitle*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterHtmlScripts")) {
                        storedMessage += "***parameterHtmlScripts*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterHtmlStyles")) {
                        storedMessage += "***parameterHtmlStyles*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterHtmlBody")) {
                        storedMessage += "***parameterHtmlBody*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterMasterStorer")) {
                        storedMessage += "***parameterMasterStorer*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterStorylineDetails")) {
                        storedMessage += "***parameterStorylineDetails*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (storedProcessCheckPointHit)
                    {
                        //#region EDGE CASE - USE developer logger

                        if (storedDeveloperMode) {
                            storedClientOrServerInstance["processStepNumber"] = storedClientOrServerInstance["processStepNumber"] + 1;

                            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "PARSING parameter values failed");
                            storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                            storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", storedClientOrServerInstance["processStepNumber"]);

                            Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Custom_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                        }

                        //#endregion

                        //#region EDGE CASE - USE exception handler

                        throw new Error("PARSING parameter values failed");

                        //#endregion
                    }
                }
                else
                {
                    //#region EDGE CASE - USE developer logger

                    if (storedDeveloperMode) {
                        storedClientOrServerInstance["processStepNumber"] = storedClientOrServerInstance["processStepNumber"] + 1;

                        storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "PARSING parameter values failed");
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", storedClientOrServerInstance["processStepNumber"]);

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Custom_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
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

            //#region DEFINE html inputs

            let storedHtmlBaseDIScriptName: string = "";

            //#endregion

            //#region DEFINE parameter inputs

            let storedParameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //#endregion

            //#region MEMORIZE centralized processes

            let stored_CentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object> = parameterInputs.Parameters.getValue("parameterMasterStorer");
            //this._stored_CentralizedSensor = parameterCentralizedSensor;
            //this._stored_CentralizedStorer = parameterCentralizedStorer;
            //#endregion

            //#region MEMORIZE clientOrServer instance

            let storedClientOrServerInstance: Object = parameterInputs.Parameters.getValue("parameterClientOrServerInstance");

            //#endregion

            //#region MEMORIZE app settings

            let storedAppSettings: any = storedClientOrServerInstance["appSettings"];

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = storedAppSettings.APP_SETTING_DEVELOPER_MODE ? storedAppSettings.APP_SETTING_DEVELOPER_MODE : false;

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "PREPARING caching request");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", storedClientOrServerInstance["actionName"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", storedClientOrServerInstance["appSettings"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Step_X_X_Custom_Store_HTMLStructureToString_1_0");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters.getValue("parameterOPTIONALIgnoreDeveloperConsoleLog"));

            //#endregion

            //#region MEMORIZE html inputs

            let storedHtmlPageTemplate = `<!DOCTYPE html>
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

            let storedHtmlMetaData: string = parameterInputs.Parameters.getValue("parameterHtmlMetaData");
            let storedHtmlTitle: string = parameterInputs.Parameters.getValue("parameterHtmlTitle");
            let storedHtmlScripts: string = parameterInputs.Parameters.getValue("parameterHtmlScripts");
            let storedHtmlStyles: string = parameterInputs.Parameters.getValue("parameterHtmlStyles");
            let storedHtmlBody: string = parameterInputs.Parameters.getValue("parameterHtmlBody");

            //#endregion

            //#region MEMORIZE storyline details

            let storedStorylineDetails: any = parameterInputs.Parameters.getValue("parameterStorylineDetails");
            //storedStorylineDetails_Parameters = parameterStorylineDetails_Parameters;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE json to html conversion

            //#region IDEAL CASE - USE json metadata

            //#region 1. READ cached baseDI script path

            const ExecuteStorageRequest = async(parameterHtmlBaseDIScriptName: string, parameterHtmlScripts: string) : Promise<string> => {
                try
                {
                    if (process.env.APP_ENV == "SERVER") {
                        storedParameterInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

                        storedParameterInputs.Parameters.setValue("parameterClientOrServerInstance", Object.assign(storedClientOrServerInstance, Object));
                        storedParameterInputs.Parameters.setValue("parameterCRUDVerb", "Read");
                        storedParameterInputs.Parameters.setValue("parameterDirectorOrExperienceName", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0")
                        storedParameterInputs.Parameters.setValue("parameterMasterStorer", Object.assign(stored_CentralizedStorer, Object));
                        storedParameterInputs.Parameters.setValue("parameterStorageValue", Object.assign(storedStorylineDetails, Object));
                        storedParameterInputs.Parameters.setValue("parameterStorylineDetails", Object.assign(storedStorylineDetails, Object));
                        storedParameterInputs.Parameters.setValue("parameterPageName", "");
                        storedParameterInputs.Parameters.setValue("parameterStorageDescription", "READING client side BaseDI script SOURCE PATH");
                        storedParameterInputs.Parameters.setValue("parameterUniqueStorageKey", "BaseDI_PresentationScript_SrcLocation");

                        let results = await Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.BaseDI.Professional.Programming.Extensions_3.Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.Step_X_X_Custom_Control_LocalDataToServerMemory_1_0(storedParameterInputs);
                        var baseDIObservations = (results && results.outputs.length > 0) ? results.outputs[1].baseDIObservations[results.outputs[1].baseDIObservations.length - 1] : null;

                        if (baseDIObservations) {
                            parameterHtmlBaseDIScriptName = baseDIObservations[Object.keys(baseDIObservations)[0]].observation.metadata[3].item.data[0].dataResult

                            parameterHtmlScripts += `<script src="/scripts/${parameterHtmlBaseDIScriptName}" type="text/javascript"></script>`;
                        }

                        return parameterHtmlScripts;
                    }
                }
                catch (mistake)
                {
                    //#region EDGE CASE - USE developer logger

                    if (storedDeveloperMode) {
                        storedClientOrServerInstance["processStepNumber"] = storedClientOrServerInstance["processStepNumber"] + 1;

                        storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "FAILED reading cache");
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", storedClientOrServerInstance["processStepNumber"]);
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Step_X_X_Custom_Store_HTMLStructureToString_1_0.ExecuteStorageRequest");

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Custom_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                    }

                    //#endregion

                    //#region EDGE CASE - USE exception handler

                    throw new Error("STORAGE request failed " + mistake.toString());

                    //#endregion
                }
            }

            storedHtmlScripts = await ExecuteStorageRequest(storedHtmlBaseDIScriptName, storedHtmlScripts);

            //#endregion

            //#region 2. CONVERT inputs to html template

            storedHtmlPageTemplate = storedHtmlPageTemplate.replace("{metaDataReplace}", storedHtmlMetaData);
            storedHtmlPageTemplate = storedHtmlPageTemplate.replace("{titleReplace}", storedHtmlTitle);
            storedHtmlPageTemplate = storedHtmlPageTemplate.replace("{scriptsReplace}", storedHtmlScripts);
            storedHtmlPageTemplate = storedHtmlPageTemplate.replace("{stylesReplace}", storedHtmlStyles);
            storedHtmlPageTemplate = storedHtmlPageTemplate.replace("{bodyReplace}", storedHtmlBody);

            //#endregion

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN converted data

            //#region IDEAL CASE - USE html string

            return storedHtmlPageTemplate;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion

        //#region GENERATE HTML PAGE

        private static async Step_0_0_Custom_Store_HTMLAttributesToArray_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) {
            //#region 1. INPUTS

            //#region VALIDATE input parameters

            const ValidateInputs = async (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) => {
                //#region 1. INPUTS

                //#region DEFINE parameter inputs

                let storedParameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

                //#endregion

                //#region DEFINE process checkpoint

                let storedProcessCheckPointHit: boolean = false;

                //#endregion

                //#region DEFINE stored message

                let storedMessage: string = "";

                //#endregion

                //#region MEMORIZE clientOrServer instance

                let storedClientOrServerInstance: any = parameterInputs.Parameters.getValue("parameterClientOrServerInstance");

                //#endregion

                //#region MEMORIZE app settings

                let storedAppSettings: any = storedClientOrServerInstance["appSettings"];

                //#endregion

                //#region MEMORIZE developer mode

                let storedDeveloperMode: boolean = storedAppSettings.APP_SETTING_DEVELOPER_MODE ? storedAppSettings.APP_SETTING_DEVELOPER_MODE : false;

                let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

                //REQUIRED
                storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", storedClientOrServerInstance["actionName"]);
                storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", storedClientOrServerInstance["appSettings"]);
                storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", storedClientOrServerInstance);
                storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.ts");
                storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Step_X_X_Custom_Control_LocalDataToServerMemory_1_0.ValidateInputs()");

                //#endregion

                //#endregion

                //#region 2. PROCESS

                //#region EXECUTE validation process

                //#region IDEAL CASE - USE valid information

                if (parameterInputs != null || parameterInputs != undefined || parameterInputs.Parameters != null && parameterInputs.Parameters != undefined) {
                    if (process.env.APP_ENV == null || process.env.APP_ENV == undefined) {
                        storedMessage += "***process.env.APP_ENV*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterClientOrServerInstance")) {
                        storedMessage += "***parameterClientOrServerInstance*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }
                    else {
                        if (parameterInputs.Parameters.getValue("parameterClientOrServerInstance")["appSettings"] == null || parameterInputs.Parameters.getValue("parameterClientOrServerInstance")["appSettings"] == undefined) {
                            storedMessage += "***parameterClientOrServerInstance*** must contain a key of ***appSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.setValue(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})"
                            storedProcessCheckPointHit = true;
                        }
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterAppSettings")) {
                        storedMessage += "***parameterAppSettings*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterHtmlAttributes")) {
                        storedMessage += "***parameterHtmlAttributes*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterMasterStorer")) {
                        storedMessage += "***parameterMasterStorer*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterStorylineDetails")) {
                        storedMessage += "***parameterStorylineDetails*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (storedProcessCheckPointHit) {
                        //#region EDGE CASE - USE developer logger

                        if (storedDeveloperMode) {
                            storedClientOrServerInstance["processStepNumber"] = storedClientOrServerInstance["processStepNumber"] + 1;

                            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "PARSING parameter values failed");
                            storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                            storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", storedClientOrServerInstance["processStepNumber"]);

                            Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Custom_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                        }

                        //#endregion

                        //#region EDGE CASE - USE exception handler

                        throw new Error("PARSING parameter values failed");

                        //#endregion
                    }
                }
                else
                {
                    //#region EDGE CASE - USE developer logger

                    if (storedDeveloperMode) {
                        storedClientOrServerInstance["processStepNumber"] = storedClientOrServerInstance["processStepNumber"] + 1;

                        storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "PARSING parameter values failed");
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", storedClientOrServerInstance["processStepNumber"]);

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Custom_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
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

            //#region DEFINE data response

            let storedDataResponse: any = null;

            //#endregion

            //#region DEFINE parameter inputs

            let storedParameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //#endregion

            //#region MEMORIZE centralized processes

            let stored_CentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object> = parameterInputs.Parameters.getValue("parameterMasterStorer");
            //this._stored_CentralizedSensor = parameterCentralizedSensor;
            //this._stored_CentralizedStorer = parameterCentralizedStorer;
            //#endregion

            //#region MEMORIZE clientOrServer instance

            let storedClientOrServerInstance: Object = parameterInputs.Parameters.getValue("parameterClientOrServerInstance");

            //#endregion

            //#region MEMORIZE app settings

            let storedAppSettings: any = storedClientOrServerInstance["appSettings"];

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = storedAppSettings.APP_SETTING_DEVELOPER_MODE ? storedAppSettings.APP_SETTING_DEVELOPER_MODE : false;

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "HELPING out other methods");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", storedClientOrServerInstance["actionName"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", storedClientOrServerInstance["appSettings"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Step_0_0_Custom_Store_HTMLAttributesToArray_1_0");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters.getValue("parameterOPTIONALIgnoreDeveloperConsoleLog"));

            //#endregion

            //#region MEMORIZE html inputs

            let storedHtmlAttributes: any = parameterInputs.Parameters.getValue("parameterHtmlAttributes");
     
            //#endregion

            //#region MEMORIZE storyline details

            let storedStorylineDetails: any = parameterInputs.Parameters.getValue("parameterStorylineDetails");
            //storedStorylineDetails_Parameters = parameterStorylineDetails_Parameters;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE json to html conversion

            //#region IDEAL CASE - USE json metadata

            const ExecuteConversionRequest = async (parameterHtmlAttributes: any, parameterHtmlAttributesOutput: Array<any>): Promise<any> => {
                try
                {
                    for (var storedHtmlAttribute in parameterHtmlAttributes) {
                        parameterHtmlAttributesOutput.push(`${Object.keys(storedHtmlAttributes[storedHtmlAttribute])[0]}="${Object.values(storedHtmlAttributes[storedHtmlAttribute])[0]}"`)
                    }    

                    return parameterHtmlAttributesOutput;
                }
                catch (mistake) {
                    //#region EDGE CASE - USE developer logger

                    if (storedDeveloperMode) {
                        storedClientOrServerInstance["processStepNumber"] = storedClientOrServerInstance["processStepNumber"] + 1;

                        storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "FAILED reading cache");
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", storedClientOrServerInstance["processStepNumber"]);
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Step_X_X_Custom_Store_HTMLStructureToString_1_0.ExecuteStorageRequest");

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Custom_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                    }

                    //#endregion

                    //#region EDGE CASE - USE exception handler

                    throw new Error("STORAGE request failed " + mistake.toString());

                    //#endregion
                }
            }

            storedDataResponse = await ExecuteConversionRequest(storedHtmlAttributes, storedDataResponse);

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN converted data

            //#region IDEAL CASE - USE html string

            return storedDataResponse.join(" ");

            //#endregion

            //#endregion

            //#endregion                   
        }

        public static async Step_1_0_Custom_Convert_HTMLContainerJSONtoHTML_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<string> {
            //#region 1. INPUTS

            //#region VALIDATE input parameters

            const ValidateInputs = async (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) => {
                //#region 1. INPUTS

                //#region DEFINE parameter inputs

                let storedParameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

                //#endregion

                //#region DEFINE process checkpoint

                let storedProcessCheckPointHit: boolean = false;

                //#endregion

                //#region DEFINE stored message

                let storedMessage: string = "";

                //#endregion

                //#region MEMORIZE clientOrServer instance

                let storedClientOrServerInstance: any = parameterInputs.Parameters.getValue("parameterClientOrServerInstance");

                //#endregion

                //#region MEMORIZE app settings

                let storedAppSettings: any = storedClientOrServerInstance["appSettings"];

                //#endregion

                //#region MEMORIZE developer mode

                let storedDeveloperMode: boolean = storedAppSettings.APP_SETTING_DEVELOPER_MODE ? storedAppSettings.APP_SETTING_DEVELOPER_MODE : false;

                let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

                //REQUIRED
                storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", storedClientOrServerInstance["actionName"]);
                storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", storedClientOrServerInstance["appSettings"]);
                storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", storedClientOrServerInstance);
                storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.ts");
                storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Step_1_0_Custom_Convert_HTMLContainerJSONtoHTML_1_0.ValidateInputs()");

                //#endregion

                //#endregion

                //#region 2. PROCESS

                //#region EXECUTE validation process

                //#region IDEAL CASE - USE valid information

                if (parameterInputs != null || parameterInputs != undefined || parameterInputs.Parameters != null && parameterInputs.Parameters != undefined) {
                    if (process.env.APP_ENV == null || process.env.APP_ENV == undefined) {
                        storedMessage += "***process.env.APP_ENV*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterClientOrServerInstance")) {
                        storedMessage += "***parameterClientOrServerInstance*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }
                    else {
                        if (parameterInputs.Parameters.getValue("parameterClientOrServerInstance")["appSettings"] == null || parameterInputs.Parameters.getValue("parameterClientOrServerInstance")["appSettings"] == undefined) {
                            storedMessage += "***parameterClientOrServerInstance*** must contain a key of ***appSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.setValue(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})"
                            storedProcessCheckPointHit = true;
                        }
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterAppSettings")) {
                        storedMessage += "***parameterAppSettings*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterHtmlContainerJSON")) {
                        storedMessage += "***parameterHtmlContainerJSON*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterMasterStorer")) {
                        storedMessage += "***parameterMasterStorer*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterStorylineDetails")) {
                        storedMessage += "***parameterStorylineDetails*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (storedProcessCheckPointHit) {
                        //#region EDGE CASE - USE developer logger

                        if (storedDeveloperMode) {
                            storedClientOrServerInstance["processStepNumber"] = storedClientOrServerInstance["processStepNumber"] + 1;

                            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "PARSING parameter values failed");
                            storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                            storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", storedClientOrServerInstance["processStepNumber"]);

                            Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Custom_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                        }

                        //#endregion

                        //#region EDGE CASE - USE exception handler

                        throw new Error("PARSING parameter values failed");

                        //#endregion
                    }
                }
                else {
                    //#region EDGE CASE - USE developer logger

                    if (storedDeveloperMode) {
                        storedClientOrServerInstance["processStepNumber"] = storedClientOrServerInstance["processStepNumber"] + 1;

                        storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "PARSING parameter values failed");
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", storedClientOrServerInstance["processStepNumber"]);

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Custom_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
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

            //#region DEFINE data response

            let storedDataResponse: any = null;

            //#endregion

            //#region DEFINE parameter inputs

            let storedParameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //#endregion

            //#region MEMORIZE centralized processes

            let stored_CentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object> = parameterInputs.Parameters.getValue("parameterMasterStorer");
            //this._stored_CentralizedSensor = parameterCentralizedSensor;
            //this._stored_CentralizedStorer = parameterCentralizedStorer;
            //#endregion

            //#region MEMORIZE clientOrServer instance

            let storedClientOrServerInstance: Object = parameterInputs.Parameters.getValue("parameterClientOrServerInstance");

            //#endregion

            //#region MEMORIZE app settings

            let storedAppSettings: any = storedClientOrServerInstance["appSettings"];

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = storedAppSettings.APP_SETTING_DEVELOPER_MODE ? storedAppSettings.APP_SETTING_DEVELOPER_MODE : false;

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "HELPING out other methods");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", storedClientOrServerInstance["actionName"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", storedClientOrServerInstance["appSettings"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Extension_Director_Of_WebDevelopment_Chapter_12_3_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Step_1_0_Custom_Convert_HTMLContainerJSONtoHTML_1_0");

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters.getValue("parameterOPTIONALIgnoreDeveloperConsoleLog"));

            //#endregion

            //#region MEMORIZE html inputs

            let storedHtmlContainerJSON: any = parameterInputs.Parameters.getValue("parameterHtmlContainerJSON");

            //#endregion

            //#region MEMORIZE storyline details

            let storedStorylineDetails: any = parameterInputs.Parameters.getValue("parameterStorylineDetails");
            //storedStorylineDetails_Parameters = parameterStorylineDetails_Parameters;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE json to html conversion

            //#region IDEAL CASE - USE json metadata

            const ExecuteConversionRequest = async (parameterHtmlContainerJSON: any): Promise<any> => {
                try
                {
                    return `<${parameterHtmlContainerJSON.value.HTMLContentItems[0].Tag} ${this.Step_0_0_Custom_Store_HTMLAttributesToArray_1_0(parameterHtmlContainerJSON.value.HTMLContentItems[0].Attributes)}>{HTMLRows_Replace}</${parameterHtmlContainerJSON.value.HTMLContentItems[0].Tag}>`;
         
                }
                catch (mistake)
                {
                    //#region EDGE CASE - USE developer logger

                    if (storedDeveloperMode) {
                        storedClientOrServerInstance["processStepNumber"] = storedClientOrServerInstance["processStepNumber"] + 1;

                        storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "FAILED converting value to array");
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", storedClientOrServerInstance["processStepNumber"]);
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Step_1_0_Custom_Convert_HTMLContainerJSONtoHTML_1_0.ExecuteConversionRequest");

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Custom_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                    }

                    //#endregion

                    //#region EDGE CASE - USE exception handler

                    throw new Error("STORAGE request failed " + mistake.toString());

                    //#endregion
                }
            }

            storedDataResponse = await ExecuteConversionRequest(storedHtmlContainerJSON);

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN converted data

            //#region IDEAL CASE - USE html string

            return storedDataResponse;

            //#endregion

            //#endregion

            //#endregion                              
        }
//htmlRowsJSON: any, htmlContainerString: string
        public static Step_2_0_Custom_Convert_HTMLRowsJSONtoHTML_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): string {
            //#region VARIABLES

            let htmlRowsString: string = "";
            let rows = [];

            //#endregion

            //#region INPUTS

            htmlRowsJSON.value.HTMLContentItems.forEach(row => {
                rows.push(`<${row.Tag} ${this.Step_0_0_Custom_Store_HTMLAttributesToArray_1_0(row.Attributes)}>{${row.Attributes[0].id}_Replace}</${row.Tag}>`)
            });
            htmlRowsString = htmlContainerString.replace("{HTMLRows_Replace}", rows.join("\n"))

            //#endregion

            //#region VALUES

            //#endregion

            //#region OUTPUT

            return htmlRowsString;

            //#endregion            
        }
//htmlColumnsJSON: any, htmlRowsString: string
        public static Step_3_0_Custom_Convert_HTMLColumnsJSONtoHTML_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): string {

            //#region VARIABLES

            let htmlColumnsString: string = htmlRowsString;

            //#endregion

            //#region INPUTS
            htmlColumnsJSON.value.HTMLContentItems.forEach(col => {
                let colItem = `<${col.Tag} ${this.Step_0_0_Custom_Store_HTMLAttributesToArray_1_0(col.Attributes)}>{${col.Attributes[0].id}_Replace}</${col.Tag}>\n`;
                htmlColumnsString = htmlColumnsString.replace(`{${col.ParentHTMLContentItemAttributeID}_Replace}`, colItem);
            });
            //#endregion

            //#region VALUES

            //#endregion

            //#region OUTPUT

            return htmlColumnsString;

            //#endregion          
        }
//htmlContentJSON: any, htmlColumnsString: string
        public static Step_4_0_Custom_Convert_HTMLContentJSONtoHTML_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): string {
            //#region VARIABLES

            let htmlContentString: string = htmlColumnsString;
            let idsAndConstant = {}

            //#endregion

            //#region INPUTS

            htmlContentJSON.value.HTMLContentItems.forEach(con => {
                if (idsAndConstant[con.ParentHTMLContentItemAttributeID] == undefined) {
                    idsAndConstant[con.ParentHTMLContentItemAttributeID] = new Array();
                    idsAndConstant[con.ParentHTMLContentItemAttributeID].push(`<${con.Tag} ${this.Step_0_0_Custom_Store_HTMLAttributesToArray_1_0(con.Attributes)}>${con.Value}</${con.Tag}>\n`);
                }
                else {
                    idsAndConstant[con.ParentHTMLContentItemAttributeID].push(`<${con.Tag} ${this.Step_0_0_Custom_Store_HTMLAttributesToArray_1_0(con.Attributes)}>${con.Value}</${con.Tag}>\n`);
                }
            });

            Object.keys(idsAndConstant).forEach(item => {
                let content = idsAndConstant[item].join('\n')
                htmlContentString = htmlContentString.replace(`{${item}_Replace}`, content);
            });

            if (process.env.APP_ENV == "SERVER") {
                htmlContentString = htmlContentString.replace(/...999.0.3.BaseDI.Professional.QuickStart.Templates/g, '/Images');

            }

        
            //#endregion

            //#region VALUES

            //#endregion

            //#region OUTPUT
                     
            return htmlContentString;

            //#endregion                        
        }
//htmlStylesJSON: any
        public static Step_5_0_Custom_Convert_CSSJSONToInlineStyles_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): string {
            //#region VARIABLES
            let htmlInlineCSSString: string = "";
            let styleFilePathLocal = htmlStylesJSON.value[0]._2_2_2_4_1_clientInformationHTMLContentStylingItem.value.HTMLContentStylingItemFiles[0].StyleFilePathLocal
            let filesArray = htmlStylesJSON.value[0]._2_2_2_4_1_clientInformationHTMLContentStylingItem.value.HTMLContentStylingItemFiles[0].StyleFiles
            // let files = [];
            // filesArray.forEach(file => {
            //     files.push(`<link rel="stylesheet" href="${styleFilePathLocal}${file.StyleFileName}.css" />\n`)
            // });
            // htmlInlineCSSString = files.join("\n");

            let cssString = "";
            let PropertyArray = [];
            let MediaQueryArray = [];

            //#endregion

            //#region INPUTS

            filesArray.forEach(file => {
                file.StyleFileUseProperties.forEach(element => {
                    if (element.IsHtmlTag == "true" && element.properties.length > 0) {
                        if (element.IsMediaQuery == "true") {
                            let MediaQueryFeatures = [];
                            if (element.MediaQuery.type != "") {
                                MediaQueryFeatures.push(`only ${element.MediaQuery.type}`)
                            }
                            element.MediaQuery.features.forEach(feature => {
                                Object.keys(feature).forEach((featureA, index) => {
                                    if (Object.keys(feature)[index] == "operator") {
                                        MediaQueryFeatures.push(Object.values(feature)[index])
                                    } else {
                                        MediaQueryFeatures.push(`(${featureA}: ${Object.values(feature)[index]})`)
                                    }
                                });
                            });
                            element.properties.forEach(prop => {
                                if (prop.propertyName != "") {
                                    let values = [];
                                    if (MediaQueryArray[`@media ${MediaQueryFeatures.join(" ")}`] === undefined) {
                                        MediaQueryArray[`@media ${MediaQueryFeatures.join(" ")}`] = []
                                        prop.properyValues.forEach(value => {
                                            values.push(`${value};`)
                                        });
                                        MediaQueryArray[`@media ${MediaQueryFeatures.join(" ")}`].push({ propName: `${prop.propertyName}`, values: values })
                                    } else {
                                        prop.properyValues.forEach(value => {
                                            values.push(`${value};`)
                                        });
                                        MediaQueryArray[`@media ${MediaQueryFeatures.join(" ")}`].push({ propName: `${prop.propertyName}`, values: values })
                                    }
                                }
                            });

                        } else {
                            element.properties.forEach(prop => {
                                if (prop.propertyName != "") {
                                    if (PropertyArray[`${prop.propertyName}`] === undefined) {
                                        PropertyArray[`${prop.propertyName}`] = [];
                                        prop.properyValues.forEach(value => {
                                            PropertyArray[`${prop.propertyName}`].push(value + ";")
                                        });
                                    } else {
                                        prop.properyValues.forEach(value => {
                                            PropertyArray[`${prop.propertyName}`].push(value + ";")
                                        });
                                    }
                                }
                            });

                        }
                    }
                    else if (element.IsHtmlTag == "false" && element.properties.length > 0) {
                        let values = [];
                        if (element.IsMediaQuery == "true") {

                            let MediaQueryFeatures = [];

                            if (element.MediaQuery.type != "") {
                                MediaQueryFeatures.push(`only ${element.MediaQuery.type}`)
                            }
                            element.MediaQuery.features.forEach(feature => {
                                Object.keys(feature).forEach((featureA, index) => {
                                    if (Object.keys(feature)[index] == "operator") {
                                        MediaQueryFeatures.push(Object.values(feature)[index])
                                    } else {
                                        MediaQueryFeatures.push(`(${featureA}: ${Object.values(feature)[index]})`)
                                    }
                                });
                            });

                            element.properties.forEach(prop => {
                                if (prop.propertyName != "") {
                                    values.push(`${prop.propertyName} : ${prop.properyValues[0]};`)
                                }
                            });

                            if (MediaQueryArray[`@media ${MediaQueryFeatures.join(" ")}`] === undefined) {
                                MediaQueryArray[`@media ${MediaQueryFeatures.join(" ")}`] = []
                                MediaQueryArray[`@media ${MediaQueryFeatures.join(" ")}`].push({ attributeID: element.attributeID, values: values })
                            } else {
                                let updatedItem = MediaQueryArray[`@media ${MediaQueryFeatures.join(" ")}`].find((item) => { return item.attributeID === element.attributeID })
                                if (updatedItem != undefined) {
                                    updatedItem.values.push(...values)
                                } else {
                                    MediaQueryArray[`@media ${MediaQueryFeatures.join(" ")}`].push({ attributeID: element.attributeID, values: values })
                                }
                            }
                        } else {
                            element.properties.forEach(prop => {
                                if (prop.propertyName != "") {
                                    values.push(`${prop.propertyName} : ${prop.properyValues[0]};`)
                                }
                            });

                            if (PropertyArray[`${element.attributeID}`] === undefined) {
                                PropertyArray[`${element.attributeID}`] = [];
                                PropertyArray[`${element.attributeID}`].push({ attributeID: element.attributeID, values: values })
                            } else {
                                // PropertyArray[`${element.attributeID}`].push({ attributeID: element.attributeID, values: values })
                                PropertyArray[`${element.attributeID}`][0].values.push(...values)
                            }
                        }
                    }
                    else {
                        console.log("Something wrong in Json file!")
                    }
                });
            });
          

            Object.keys(PropertyArray).forEach((key, index) => {
                let obj = Object.values(PropertyArray)[index];
                if (obj[0].attributeID === undefined) {
                    cssString += `${key} { \n ${obj.join("\n")} \n}\n`;
                } else {

                    if (obj[0].attributeID.includes("#")) {
                        cssString += `${obj[0].attributeID} { \n ${obj[0].values.join("\n")} \n}\n`;
                    } else {
                        cssString += `#${obj[0].attributeID} { \n ${obj[0].values.join("\n")} \n}\n`;
                    }
                }
            });

            Object.keys(MediaQueryArray).forEach((key, index) => {
                let obj = Object.values(MediaQueryArray)[index];
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
                cssString += `${key} {\n ${innerCss} \n}`;
            });

            htmlInlineCSSString = `<style>${cssString}</style>`;

            if (process.env.APP_ENV == "SERVER")
            {	            
                htmlInlineCSSString = htmlInlineCSSString.replace(/...999.0.3.BaseDI.Professional.QuickStart.Templates/g, '/Images');	                htmlInlineCSSString = htmlInlineCSSString.replace(/...999.0.3.BaseDI.Professional.QuickStart.Templates/g, '/Images');
            }	
            //#endregion

            //#region VALUES

            //#endregion

            //#region OUTPUT

            return htmlInlineCSSString;

            //#endregion           
        }

        //#endregion
    }
}