//#region Imports

//#region 3rd Party

let fs = null;
let localStorage = null;
let objectScan = null;
let path = null;

if (process.env.APP_ENV == "SERVER") {

    //FILES
    objectScan = require('copyfiles');
    fs = require('fs');
    path = require('path');

    //STORAGE
    var _3rdParty_NodeLocalStorage_StorageController = require('node-localstorage').LocalStorage;
    _3rdParty_NodeLocalStorage_StorageController = new _3rdParty_NodeLocalStorage_StorageController('./wwwroot/Server/State');

    
}
else {
    //var _3rdParty_Redux_CreateStore = require('redux').createStore;
}

//#endregion

//#region BaseDI

import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";

import * as aClass_Programming_ScriptPage_12_2_1_0 from "../../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptPage_12_2_1_0";

import * as Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0 from "../../../../../../../../../0. Script/Extensions/11/Automate Manual Task/1/Risk Management/Method/0/1_0/Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0";
import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0"

import * as SingleParmPoco_12_2_1_0 from "../../../../../../../../../0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

//#endregion

//#endregion

export namespace BaseDI.Professional.Programming.Extensions_3 {
    export class Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0 {
        constructor()
        {
            //#region 1. INPUTS

            //#endregion

            //#region 2. PROCESS

            //#endregion

            //#region 3. OUTPUT

            //#endregion
        }

         //#region CACHE MANAGEMENT

        public static async Step_X_X_Framework_Store_CacheDataToPersistentStorage_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<any>
        {
            //#region 1. INPUTS

            //#region VALIDATE input parameters

            const ValidateInputs = async (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) => {
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
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_X_X_Framework_Store_CacheDataToPersistentStorage_1_0.ValidateInputs()");

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

                    if (!parameterInputs.Parameters.containsKey("parameterCRUDVerb")) {
                        storedOutputResponseMessage += "***parameterCRUDVerb*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterDirectorOrExperienceName")) {
                        storedOutputResponseMessage += "***parameterDirectorOrExperienceName*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }     

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestMasterStorer")) {
                        storedOutputResponseMessage += "***parameterProcessRequestMasterStorer*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterStorageValue")) {
                        storedOutputResponseMessage += "***parameterStorageValue*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestDataStorylineDetails")) {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterPageName")) {
                        storedOutputResponseMessage += "***parameterPageName*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterStorageDescription")) {
                        storedOutputResponseMessage += "***parameterStorageDescription*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterUniqueStorageKey")) {
                        storedOutputResponseMessage += "***parameterUniqueStorageKey*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }               

                    if (storedProcessRequestMistakeMade) {
                        //#region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode) {
                            storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                            Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
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

                    if (storedProcessRequestDeveloperMode) {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
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

            //#region DEFINE storage details

            let storedFilteredStorageKey: string = "";
            let storedStorageDictionary: any = {};            

            //#endregion

            //#region DEFINE parameter inputs

            let storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //#endregion

            //#region DEFINE storyline details outputs

            let storedOutputResponseObservationPresentationTemplateItem: string = "";
            let storedOutPut_ObservationItem: String = "";

            //#endregion

            //#region MEMORIZE centralized processes

            let storedProcessRequestCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object> = parameterInputs.Parameters.getValue("parameterProcessRequestMasterStorer");
            //this._stored_CentralizedSensor = parameterProcessRequestCentralizedSensor;
            //this._storedProcessRequestCentralizedStorer = parameterProcessRequestCentralizedStorer;
            //#endregion

            //#region MEMORIZE control client server

            let storedProcessRequestTracker: Object = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE app settings

            let storedProcessRequestSettings: any = storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE CRUD verb

            let storedCRUDVerb: string = parameterInputs.Parameters.getValue("parameterCRUDVerb");

            //#endregion
            
            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE ? storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE : false;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;
                        
            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "PREPARING caching request");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_X_X_Framework_Store_CacheDataToPersistentStorage_1_0");

            //OPTIONAL
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALIgnoreDeveloperConsoleLog", parameterInputs.Parameters.getValue("parameterOPTIONALIgnoreDeveloperConsoleLog"));

            //#endregion

            //#region MEMORIZE request details

            let storedDirectorOrExperienceName: string = parameterInputs.Parameters.getValue("parameterDirectorOrExperienceName");

            //#endregion

            //#region MEMORIZE page name

            let storedPageName: string = parameterInputs.Parameters.getValue("parameterPageName");

            //#endregion

            //#region MEMORIZE storage details

            let storedStorageDescription: string = parameterInputs.Parameters.getValue("parameterStorageDescription");
            let storedStorageValue: any = parameterInputs.Parameters.getValue("parameterStorageValue");
            let storedStorageKey: string = "StorageKey_" + storedDirectorOrExperienceName + "-" + storedCRUDVerb;
            let storedUniqueStorageKey: string = parameterInputs.Parameters.getValue("parameterUniqueStorageKey");

            if (storedUniqueStorageKey)
                storedStorageKey += "-" + storedUniqueStorageKey;

            //#endregion

            //#region MEMORIZE storyline details

            let storedProcessRequestDataStorylineDetails: any = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

            //#endregion

            //#region MEMORIZE storyline details outputs

            const storedOutputResponseObservationBusinessTemplateItem: string = "{}";
            const storedOutputResponseObservationServiceTemplateItem: string = "{}";
            const storedOutputResponseObservationSecurityTemplateItem: string = "{}";
            const storedOutputResponseObservationDataTemplateItem: string = '{ "dataResult": "{dataResult}" }';

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE local storage process

            //#region IDEAL CASE - USE npm node-localstorage

            //DETERMINE if we have something to store.
            if (storedStorageValue)
            {
                //#region 1. CREATE new storage item

                storedInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

                storedInputs.Parameters.setValue("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
                storedInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestSettings);
                storedInputs.Parameters.setValue("parameterPageName", storedPageName);
                storedInputs.Parameters.setValue("parameterProcessRequest3WordDescription", storedStorageDescription);
                storedInputs.Parameters.setValue("parameter_ObservationPresentationTemplateItem", storedOutputResponseObservationPresentationTemplateItem);
                storedInputs.Parameters.setValue("parameter_ObservationBusinessTemplateItem", storedOutputResponseObservationBusinessTemplateItem);
                storedInputs.Parameters.setValue("parameter_ObservationServiceTemplateItem", storedOutputResponseObservationServiceTemplateItem);
                storedInputs.Parameters.setValue("parameter_ObservationSecurityTemplateItem", storedOutputResponseObservationSecurityTemplateItem);
                storedInputs.Parameters.setValue("parameter_ObservationDataTemplateItem", storedOutputResponseObservationDataTemplateItem);
       
                storedOutPut_ObservationItem = await Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Professional.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Framework_Output_JsonObservationNode_1_0(storedInputs);

                //DETERMINE if we are storing a string value.
                if (typeof (storedStorageValue) == "string")
                {
                    //PREPARING to store a string value.
                    storedOutPut_ObservationItem = storedOutPut_ObservationItem.replace('{dataResult}', escape(storedStorageValue.trim()));
                }
                else
                {
                    //PREPARING to store an object value.
                    storedOutPut_ObservationItem = storedOutPut_ObservationItem.replace('{dataResult}', escape(JSON.stringify(storedStorageValue)));
                }                

                storedStorageDictionary[storedStorageKey] = storedOutPut_ObservationItem.toString();

                //#endregion

                //#region 2. REMOVE previous stored item

                storedFilteredStorageKey = storedStorageKey.toString().replace("-Create", "");
                storedFilteredStorageKey = storedFilteredStorageKey.toString().replace("-Read", "");
                storedFilteredStorageKey = storedFilteredStorageKey.toString().replace("-Update", "");
                storedFilteredStorageKey = storedFilteredStorageKey.toString().replace("-Delete", "");

                storedProcessRequestDataStorylineDetails.outputs[1].baseDIObservations.forEach(element => {
                    delete element[storedFilteredStorageKey]
                });

                storedProcessRequestDataStorylineDetails.outputs[1].baseDIObservations.forEach(element => {
                    delete element[storedStorageKey]
                });

                //#endregion

                //#region 3. CREATE storage request

                storedProcessRequestDataStorylineDetails.outputs[1].baseDIObservations.push(storedStorageDictionary);

                //#endregion

                //#region 4. EXECUTE storage request

                if (storedProcessRequestDeveloperMode) {
                    storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Logging"); //Values = Logging or Mistake
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                    Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                }

                storedProcessRequestCentralizedStorer.ExtraData.KeyValuePairs.setValue("parametersInputs", parameterInputs);
                storedProcessRequestCentralizedStorer.ExtraData.KeyValuePairs.setValue("storedProcessRequestDeveloperLoggingInputs", storedProcessRequestDeveloperLoggingInputs);

                storedProcessRequestDataStorylineDetails = await storedProcessRequestCentralizedStorer?.Action_1_Begin_Process();
                storedProcessRequestDataStorylineDetails.outputs[1].baseDIObservations = (storedProcessRequestDataStorylineDetails && storedProcessRequestDataStorylineDetails.ouputs) ? storedProcessRequestDataStorylineDetails?.outputs[1]?.baseDIObservations?.filter((value: {}) => Object.keys(value).length !== 0) : storedProcessRequestDataStorylineDetails.outputs[1].baseDIObservations;

                //#endregion

                //#region FUTURE CODE EXAMPLE

                // In case If we need to remove based on verb

                // if(CRUDVerb.toUpperCase() == "CREATE") {
                //     console.log(CRUDVerb)
                //     console.log(storylineDetails.outputs[1].baseDIObservations)

                // } else if(CRUDVerb.toUpperCase() == "READ") {
                //     console.log(CRUDVerb)
                //     console.log(storylineDetails.outputs[1].baseDIObservations)
                // }
                // else if(CRUDVerb.toUpperCase() == "UPDATE") {
                //     console.log(CRUDVerb)
                // }
                // else if(CRUDVerb.toUpperCase() == "DELETE") {
                //     console.log(CRUDVerb)
                // }

                // if (chapter.MasterStorer.CallBack)
                //     chapter.MasterStorer.CallBack();

                //#endregion
            }

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN storyline details

            //#region IDEAL CASE - USE baseDI dataset

            return storedProcessRequestDataStorylineDetails;

            //#endregion

            //#endregion

            //#endregion
        }

        public static async Step_X_X_Framework_Store_CacheDataToPersistentStorage_1_1(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<any>
        {
            //#region 1. INPUTS

            //#region VALIDATE input parameters

            const ValidateInputs = async (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) =>
            {
                //#region 1. INPUTS

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
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_X_X_Framework_Store_CacheDataToPersistentStorage_1_0.ValidateInputs()");

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

                    if (!parameterInputs.Parameters.containsKey("parameterStorageAction")) {
                        storedOutputResponseMessage += "***parameterStorageAction*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterStorageKey")) {
                        storedOutputResponseMessage += "***parameterStorageKey*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterStorageValue")) {
                        storedOutputResponseMessage += "***parameterStorageValue*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestDataStorylineDetails")) {
                        storedOutputResponseMessage += "***parameterProcessRequestDataStorylineDetails*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }                   

                    if (storedProcessRequestMistakeMade) {
                        //#region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode) {
                            storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                            Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
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

                    if (storedProcessRequestDeveloperMode) {
                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
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

            let storedOutputResponseData: any = null;

            //#endregion

            //#region DEFINE storyline details outputs

            let storedOutPut_Observation: any = "";
            let storedOutPut_ObservationFiltered: Object = {};
            let storedOutPut_ObservationKey: string = "";

            //#endregion

            //#region MEMORIZE control client server

            let storedProcessRequestTracker: Object = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE app settings

            let storedProcessRequestSettings: any = storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE ? storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE : false;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "RESOLVING request handler");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedProcessRequestTracker["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0.Page_1_10_End_Process_12_2_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Action");   

            //#endregion

            //#region MEMORIZE storage details

            let storedStorageAction: string = parameterInputs.Parameters.getValue("parameterStorageAction");
            let storedStorageCRUDActionRead: boolean = false;
            let storedStorageKey: string = parameterInputs.Parameters.getValue("parameterStorageKey");
            let storedStorageValue: any = parameterInputs.Parameters.getValue("parameterStorageValue");
            
            //#endregion

            //#region MEMORIZE storyline details

            let storedProcessRequestDataStorylineDetails: any = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            //storedProcessRequestDataStorylineDetails_Parameters = parameterProcessRequestDataStorylineDetails_Parameters;

            //#endregion

            //#region MEMORIZE storyline details outputs

            const storedOutputResponseObservationBusinessTemplateItem: string = "{}";
            const storedOutputResponseObservationServiceTemplateItem: string = "{}";
            const storedOutputResponseObservationSecurityTemplateItem: string = "{}";
            const storedOutputResponseObservationDataTemplateItem: string = '{ "dataResult": "{dataResult}" }';

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE storage process

            try
            {
                const ExecuteStorageRequest = async () =>
                {
                    //#region SETUP storage item

                    try
                    {
                        storedOutPut_ObservationKey = (Object.keys(storedStorageValue)[0]);
                        //EXAMPLE OUTPUT: storedOutPut_ObservationKey = "StorageKey_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0-Create-BaseDI_DataConverter_Mode"

                        if (storedOutPut_ObservationKey.toString().toUpperCase().includes("-READ")) {
                            storedStorageCRUDActionRead = true;
                        }

                        storedOutPut_ObservationKey = storedOutPut_ObservationKey.toString().replace("-Create", "");
                        storedOutPut_ObservationKey = storedOutPut_ObservationKey.toString().replace("-Read", "");
                        storedOutPut_ObservationKey = storedOutPut_ObservationKey.toString().replace("-Update", "");
                        storedOutPut_ObservationKey = storedOutPut_ObservationKey.toString().replace("-Delete", "");
                        //EXAMPLE OUTPUT: storedOutPut_ObservationKey = "StorageKey_Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0-BaseDI_DataConverter_Mode"

                        if (!storedStorageCRUDActionRead) {
                            storedOutPut_Observation = JSON.parse(storedStorageValue[(Object.keys(storedStorageValue)[0])]);

                            storedOutPut_ObservationFiltered[storedOutPut_ObservationKey] = storedOutPut_Observation?.baseDIObservations[0];
                        }

                    }
                    catch (mistake)
                    {
                        //#region EDGE CASE - USE developer logger

                        if (storedProcessRequestDeveloperMode) {
                            storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED CRUD setup attempt");
                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                            Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                        }

                        //#endregion

                        //#region EDGE CASE - USE exception handler

                        throw mistake;

                        //#endregion
                    }

                    //#endregion

                    if (process.env.APP_ENV == "SERVER")
                    {
                        //#region IDEAL CASE - USE server storage

                        if (_3rdParty_NodeLocalStorage_StorageController) {
                            switch (storedStorageAction.toUpperCase()) {
                                case "CREATE":
                                case "UPDATE":
                                    _3rdParty_NodeLocalStorage_StorageController.setItem(storedStorageKey, JSON.stringify(storedOutPut_ObservationFiltered));
                                    break;
                                case "DELETE":
                                    _3rdParty_NodeLocalStorage_StorageController.removeItem(storedStorageKey);
                                    break;
                                case "READ":
                                    storedOutputResponseData = _3rdParty_NodeLocalStorage_StorageController.getItem(storedStorageKey);
                                    break;

                            }
                        }

                        //#endregion
                    }
                    else
                    {
                        if (process.env.APP_ENV == "CLIENT")
                        {
                            //#region EDGE CASE - USE client storage

                            //#endregion
                        }
                    }
                }

                await ExecuteStorageRequest();
            }
            catch (mistake)
            {
                //#region EDGE CASE - USE developer logger

                if (storedProcessRequestDeveloperMode) {
                    storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED CRUD setup attempt");
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                    Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
                }

                //#endregion

                //#region EDGE CASE - USE exception handler

                throw mistake;

                //#endregion
            }

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN storyline details

            //#region IDEAL CASE - USE baseDI dataset

            return storedOutputResponseData;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion
    }
}