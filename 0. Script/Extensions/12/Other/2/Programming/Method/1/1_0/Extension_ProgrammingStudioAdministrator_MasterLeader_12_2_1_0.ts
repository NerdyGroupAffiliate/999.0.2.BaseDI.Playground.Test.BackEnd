//#region Imports

//#region 3rd Party

const _3rdParty_ObjectScan_ObjectSearcher = require('object-scan');

//#endregion

//#region BaseDI

import * as ExtraData_12_2_1_0 from "../../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";
import * as SingleParmPoco_12_2_1_0 from "../../../../../../../../../0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

//#endregion

//#endregion

export namespace BaseDI.Professional.Programming.Extensions_1
{
    export class Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0
    {
        //SETTINGS
        private static _storedAppSettings: any = null;

        //CLIENT/SERVER
        private static _storedClientOrServerInstance: any;

        //EXCEPTIONS
        private static _storedExceptionDetails: any = null;

        //MISC
        private static _storedExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0 = null;

        constructor()
        {
            //#region 1. INPUTS

            //#endregion

            //#region 2. PROCESS

            //#endregion

            //#region 3. OUTPUT

            //#endregion
        }

        //#region JSON MANAGEMENT
 
        public static async Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<any>
        {
            //#region 1. Inputs

            //#region VALIDATE input parameters

            const ValidateInputs = async (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) =>
            {
                //#region 1. INPUTS

                //#region DEFINE process checkpoint

                let storedProcessCheckPointHit:boolean = false;

                //#endregion

                //#region DEFINE stored message

                let storedMessage: string = "";

                //#endregion

                //#endregion

                //#region 2. PROCESS

                //#region EXECUTE validation process

                //#region IDEAL CASE - USE valid information

                if (parameterInputs.Parameters.size() > 0) {
                    if (!parameterInputs.Parameters.containsKey("parameterAppSettings")) {
                        storedMessage += "***parameterAppSettings*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterClientOrServerInstance")) {
                        storedMessage += "***parameterClientOrServerInstance*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }
                    else {
                        if (parameterInputs.Parameters["parameterClientOrServerInstance"]["appSettings"] == null) {
                            storedMessage += "***parameterClientOrServerInstance*** must contain a key of ***appSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.setValue(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessCheckPointHit = true;
                        }
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterFilterData")) {
                        storedMessage += "***parameterFilterData*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterFilterKeyValuePairKey")) {
                        storedMessage += "***parameterFilterKeyValuePairKey*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterFilterKeyValuePairValue")) {
                        storedMessage += "***parameterFilterKeyValuePairValue*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterFilterReturnValueAsArray")) {
                        storedMessage += "***parameterFilterReturnValueAsArray*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (storedProcessCheckPointHit) {
                        //#region EDGE CASE - USE exception handler

                        console.log("\n***LEAKY PIPE*** PARSING parameter values failed!\n\n" + storedMessage);

                        //#endregion
                    }
                }
                else {
                    //#region EDGE CASE - USE blank return

                    return false;

                    //#endregion
                }

                //#endregion

                //#endregion

                //#endregion

                //#region 3. OUTPUT

                //#region RETURN validation passed

                //#region IDEAL CASE - USE passed indicator

                return await true;

                //#endregion

                //#endregion

                //#endregion
            };

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            //#endregion

            //#region DEFINE data response

            let storedDataFilteredData: any = null;;
            let storedDataResponse: any = null;;

            //#endregion

            //#region DEFINE filter metadata

            let storedSearchFilter: string = '**';

            //#endregion

            //#region DEFINE parameter inputs

            let storedParameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = null;

            //#endregion

            //#region MEMORIZE clientOrServer instance

            this._storedClientOrServerInstance = parameterInputs.Parameters.getValue("parameterClientOrServerInstance");

            //#endregion

            //#region MEMORIZE app settings

            this._storedAppSettings = this._storedClientOrServerInstance["parameterAppSettings"];

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE ? this._storedAppSettings.APP_SETTING_DEVELOPER_MODE : false;

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "CONFIGURING web server");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", this._storedClientOrServerInstance["actionName"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", this._storedClientOrServerInstance["appSettings"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0");
            //storedDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALMiddleOfProcess", true);

            //#endregion

            //#region MEMORIZE filter metadata

            let storedData = parameterInputs.Parameters.getValue("parameterFilterData");

            let storedKeyValuePairKey: string = parameterInputs.Parameters.getValue("parameterFilterKeyValuePairKey");
            let storedKeyValuePairValue: string = parameterInputs.Parameters.getValue("parameterFilterKeyValuePairValue");

            let storedReturnValueAsArray: boolean = parameterInputs.Parameters.getValue("parameterFilterReturnValueAsArray");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE conversion request

            //#region IDEAL CASE - USE 3rdParty module

            //EXAMPLE AT https://stackoverflow.com/questions/22222599/javascript-recursive-search-in-json-object
            const ExecuteConversionRequest = async (parameterSearchData: any, parameterFilterDataFilteredData: any, parameterSearchFilter: string, parameterSearchKeyValue: string): Promise<any> =>
            {
                _3rdParty_ObjectScan_ObjectSearcher([parameterSearchFilter],
                    {
                        filterFn: (key, value, { parameterParents }) => {
                            if (parameterSearchKeyValue) {
                                if (value === parameterSearchKeyValue) {
                                    parameterFilterDataFilteredData = parameterParents[0];
                                }
                            }
                            else {
                                parameterFilterDataFilteredData = parameterParents[0];
                            }

                        },
                        breakFn: () => parameterFilterDataFilteredData !== null
                    })(parameterSearchData);

                return parameterFilterDataFilteredData;
            }

            if (storedKeyValuePairKey)
                storedSearchFilter = '**.' + storedKeyValuePairKey;

            storedDataFilteredData = await ExecuteConversionRequest(storedData, storedDataFilteredData, storedSearchFilter, storedKeyValuePairValue);

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN converted data

            //#region IDEAL CASE - USE json dataset

            storedDataResponse = storedDataFilteredData;

            if (storedReturnValueAsArray && storedDataFilteredData)
                storedDataResponse = Object.entries(storedDataFilteredData);

            return storedDataResponse;

            //#endregion

            //#endregion

            //#endregion
        }

        public static async Step_X_X_Framework_Convert_JsonDataSetToNodes_2_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) {

        }   

        public static async Step_X_X_Framework_Output_JsonMistakeNode_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<string>
        {
            //#region 1. INPUTS

            //#region VALIDATE input parameters

            const ValidateInputs = (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) => {
                //#region 1. INPUTS

                //#region DEFINE process checkpoint

                let storedProcessCheckPointHit: boolean = false;

                //#endregion

                //#region DEFINE stored message

                let storedMessage: string = "";

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


                    if (!parameterInputs.Parameters.containsKey("parameter3WordDescription")) {
                        storedMessage += "***parameter3WordDescription*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterActionName")) {
                        storedMessage += "***parameterActionName*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterAppSettings")) {
                        storedMessage += "***parameterAppSettings*** cannot be blank or empty.\n"
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

                    if (!parameterInputs.Parameters.containsKey("parameterFileName")) {
                        storedMessage += "***parameterFileName*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterMethodName")) {
                        storedMessage += "***parameterMethodName*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterMistakeTemplate")) {
                        storedMessage += "***parameterMistakeTemplate*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (storedProcessCheckPointHit) {
                        //#region EDGE CASE - USE exception handler

                        console.log("\n***LEAKY PIPE*** PARSING parameter values failed!\n\n" + storedMessage);

                        //#endregion
                    }
                }
                else {
                    //#region EDGE CASE - USE blank return

                    return;

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

            //#region DEFINE developer mode

            let storedOPTIONALAccountingCostType: string = "";
            let storedOPTIONALBeginOfProcess: boolean = false;
            let storedOPTIONALMiddleOfProcess: boolean = false;
            let storedOPTIONALEndOfProcess: boolean = false;
            let storedOPTIONALMasterLeaderIsSecondStep: boolean = false;

            let storedMistake: boolean = false;

            //#endregion

            //#region DEFINE data response

            let storedDataResponse: string = null;

            //#endregion

            //#region MEMORIZE action name

            let storedActionName: string = parameterInputs.Parameters.getValue("parameterActionName");

            //#endregion

            //#region MEMORIZE clientOrServer instance

            this._storedClientOrServerInstance = parameterInputs.Parameters.getValue("parameterClientOrServerInstance");

            //#endregion

            //#region MEMORIZE app settings

            this._storedAppSettings = this._storedClientOrServerInstance["parameterAppSettings"];

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "SENDING instagram content");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", this._storedClientOrServerInstance["actionName"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", this._storedClientOrServerInstance["appSettings"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Step_X_X_Framework_Output_JsonMistakeNode_1_0");

            storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Logging"); //Values = Logging or Mistake

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALAccountingCostType", "Storage"); //Values = Bandwidth, CPU, Memory, Setup, Storage, Uptime
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALBeginOfProcess", true);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALMiddleOfProcess", true);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALEndOfProcess", true);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALRunSilentMode", true);

            //#endregion

            //#region MEMORIZE mistake details

            let storedMistakeDescription: string = parameterInputs.Parameters.getValue("parameter3WordDescription");
            let storedMistakeFileName: string = parameterInputs.Parameters.getValue("parameterFileName");
            let storedMistakeMethodName: string = parameterInputs.Parameters.getValue("parameterMethodName");

            let storedMistakeTemplate: string = parameterInputs.Parameters.getValue("parameterMistakeTemplate");

            let storedMistakeBody: string = "{'baseDIMistakes': [{ 'mistake': { 'metadata': [{ 'calledByEntryPointName': '{calledByEntryPointName}' }, { 'calledByMethodName': '{calledByMethodName}' }, { 'calledByMethodReason': '{calledByMethodReason}' }, { 'item': {{item}} }] }}]}";
            let storedMistakeItem: string = "'details': [{details}]";

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE mistake creation

            //#region IDEAL CASE - USE baseDi template

            const ExecuteConversionRequest = async (parameterMistakeTemplate: string, parameterMistakeBody: string, parameterMistakeItem: any, parameterMistakeFileName: string, parameterMistakeMethodName: string, parameter3WordDescription: string): Promise<any> => {
                parameterMistakeBody = parameterMistakeBody.replace("{item}", parameterMistakeItem);

                parameterMistakeBody = parameterMistakeBody.replace("{calledByEntryPointName}", parameterMistakeFileName);
                parameterMistakeBody = parameterMistakeBody.replace("{calledByMethodName}", parameterMistakeMethodName);
                parameterMistakeBody = parameterMistakeBody.replace("{calledByMethodReason}", parameter3WordDescription);

                parameterMistakeBody = parameterMistakeBody.replace("{details}", parameterMistakeTemplate);

                return parameterMistakeBody;
            };

            storedDataResponse = await ExecuteConversionRequest(storedMistakeTemplate, storedMistakeBody, storedMistakeItem, storedMistakeFileName, storedMistakeMethodName, storedMistakeDescription);
            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN converted data

            //#region IDEAL CASE - USE json dataset

            return storedDataResponse;

            //#endregion

            //#endregion

            //#endregion
        }

        public static async Step_X_X_Framework_Output_JsonObservationNode_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<string>
        {
            //#region 1. INPUTS

            //#region VALIDATE input parameters

            const ValidateInputs = (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) => {
                //#region 1. INPUTS

                //#region DEFINE process checkpoint

                let storedProcessCheckPointHit: boolean = false;

                //#endregion

                //#region DEFINE stored message

                let storedMessage: string = "";

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


                    if (!parameterInputs.Parameters.containsKey("parameter3WordDescription")) {
                        storedMessage += "***parameter3WordDescription*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterActionName")) {
                        storedMessage += "***parameterActionName*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterAppSettings")) {
                        storedMessage += "***parameterAppSettings*** cannot be blank or empty.\n"
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

                    if (!parameterInputs.Parameters.containsKey("parameterFileName")) {
                        storedMessage += "***parameterFileName*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterMethodName")) {
                        storedMessage += "***parameterMethodName*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterMistakeTemplate")) {
                        storedMessage += "***parameterMistakeTemplate*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (storedProcessCheckPointHit) {
                        //#region EDGE CASE - USE exception handler

                        console.log("\n***LEAKY PIPE*** PARSING parameter values failed!\n\n" + storedMessage);

                        //#endregion
                    }
                }
                else {
                    //#region EDGE CASE - USE blank return

                    return;

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

            //#region DEFINE developer mode

            let storedOPTIONALAccountingCostType: string = "";
            let storedOPTIONALBeginOfProcess: boolean = false;
            let storedOPTIONALMiddleOfProcess: boolean = false;
            let storedOPTIONALEndOfProcess: boolean = false;
            let storedOPTIONALMasterLeaderIsSecondStep: boolean = false;

            let storedMistake: boolean = false;

            //#endregion

            //#region DEFINE data response

            let storedDataResponse: string = null;

            //#endregion

            //#region MEMORIZE action name

            let storedActionName: string = parameterInputs.Parameters.getValue("parameterActionName");

            //#endregion

            //#region MEMORIZE clientOrServer instance

            this._storedClientOrServerInstance = parameterInputs.Parameters.getValue("parameterClientOrServerInstance");

            //#endregion

            //#region MEMORIZE app settings

            this._storedAppSettings = this._storedClientOrServerInstance["parameterAppSettings"];

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "SENDING instagram content");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", this._storedClientOrServerInstance["actionName"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", this._storedClientOrServerInstance["appSettings"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Step_X_X_Framework_Output_JsonObservationNode_1_0");

            storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Logging"); //Values = Logging or Mistake

            //OPTIONAL
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALAccountingCostType", "Storage"); //Values = Bandwidth, CPU, Memory, Setup, Storage, Uptime
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALBeginOfProcess", true);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALMiddleOfProcess", true);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALEndOfProcess", true);
            //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALRunSilentMode", true);

            //#endregion

            //#region MEMORIZE observation details

            let storedObservationDescription: string = parameterInputs.Parameters.getValue("parameter3WordDescription");
            let storedObservationFileName: string = parameterInputs.Parameters.getValue("parameterObservationFileName");
            let storedObservationMethodName: string = parameterInputs.Parameters.getValue("parameterObservationMethodName");

            let storedObservationTemplate: string = parameterInputs.Parameters.getValue("parameterObservationTemplate");

            let storedObservationBody: string = '{"baseDIObservations": [{ "observation": { "metadata": [{ "calledByEntryPointName": "{calledByEntryPointName}" }, { "calledByMethodName": "{calledByMethodName}" }, { "calledByMethodReason": "{calledByMethodReason}" }, { "item": {{item}}  }]  } }]}';
            let storedObservationItem: string = '"presentation": [{presentation}], "business": [{business}], "service": [{service}],  "security": [{security}],"data": [{data}]';

            let storedObservationPresentationTemplate: string = parameterInputs.Parameters.getValue("parameterObservationPresentationTemplate");
            let storedObservationBusinessTemplate: string = parameterInputs.Parameters.getValue("parameterObservationBusinessTemplate");
            let storedObservationServiceTemplate: string = parameterInputs.Parameters.getValue("parameterObservationServiceTemplate");
            let storedObservationSecurityTemplate: string = parameterInputs.Parameters.getValue("parameterObservationSecurityTemplate");
            let storedObservationDataTemplate: string = parameterInputs.Parameters.getValue("parameterObservationDataTemplate");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE obversation creation

            //#region IDEAL CASE - USE baseDi template

            const ExecuteConversionRequest = async (parameterObservationTemplate: string, parameterObservationBody: string, parameterObservationItem: any, parameterObservationFileName: string, parameterObservationMethodName: string, parameter3WordDescription: string, parameterObservationPresentationTemplate: string, parameterObservationBusinessTemplate: string, parameterObservationServiceTemplate: string, parameterObservationSecurityTemplate: string, parameterObservationDataTemplate: string) => {
                parameterObservationBody = parameterObservationBody.replace("{item}", parameterObservationItem);

                parameterObservationBody = parameterObservationBody.replace("{calledByEntryPointName}", parameterObservationFileName);
                parameterObservationBody = parameterObservationBody.replace("{calledByMethodName}", parameterObservationMethodName);
                parameterObservationBody = parameterObservationBody.replace("{calledByMethodReason}", parameter3WordDescription);

                parameterObservationBody = parameterObservationBody.replace("{presentation}", parameterObservationPresentationTemplate);
                parameterObservationBody = parameterObservationBody.replace("{business}", parameterObservationBusinessTemplate);
                parameterObservationBody = parameterObservationBody.replace("{service}", parameterObservationServiceTemplate);
                parameterObservationBody = parameterObservationBody.replace("{security}", parameterObservationSecurityTemplate);
                parameterObservationBody = parameterObservationBody.replace("{data}", parameterObservationDataTemplate);

                return parameterObservationBody;
            };

            storedDataResponse = await ExecuteConversionRequest(storedObservationTemplate, storedObservationBody, storedObservationItem, storedObservationFileName, storedObservationMethodName, storedObservationDescription, storedObservationPresentationTemplate, storedObservationBusinessTemplate, storedObservationServiceTemplate, storedObservationSecurityTemplate, storedObservationDataTemplate);

            ///#endregion

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN converted data

            //#region IDEAL CASE - USE json dataset

            return storedDataResponse;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion
    }
}