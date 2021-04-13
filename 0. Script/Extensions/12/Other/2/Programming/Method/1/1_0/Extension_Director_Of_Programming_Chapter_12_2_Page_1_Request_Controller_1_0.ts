//#region Imports

//#region 3rd Party

//#endregion

//#region BaseDI

import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

import * as ExtraData_12_2_1_0 from "../../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";
import * as SingleParmPoco_12_2_1_0 from "../../../../../../../../../0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

//#endregion

//#endregion

export namespace BaseDI.Professional.Programming.Extensions_1
{
    export class Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0
    {      
        //SETTINGS
        private static _storedAppSettings: any = null;

        //CLIENT/SERVER
        private static _storedClientOrServerInstance: any;

        //EXCEPTIONS
        private static _storedExceptionDetails: any = null;

        //MISC
        private static _storedExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0 = null;

        constructor() {
            //#region 1. INPUTS

            //#endregion

            //#region 2. PROCESS

            //#endregion

            //#region 3. OUTPUT

            //#endregion
        }        

        //data: object, keyName: string, keyValue: any, returnAsArray: boolean

        public static async Step_X_X_Custom_Store_JSONSettingsIntoMemory_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): Promise<any>
        {
            //#region 1. Inputs

            //#region VALIDATE input parameters

            const ValidateInputs = async (parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) =>
            {
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

                    if (!parameterInputs.Parameters.containsKey("parameterData")) {
                        storedMessage += "***parameterData*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterKeyValuePairKey")) {
                        storedMessage += "***parameterKeyValuePairKey*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterKeyValuePairValue")) {
                        storedMessage += "***parameterKeyValuePairValue*** cannot be blank or empty.\n";
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterReturnValueAsArray")) {
                        storedMessage += "***parameterReturnValueAsArray*** cannot be blank or empty.\n";
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

                    return await false;

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

            };

            ///BEGIN valdation process
            await ValidateInputs(parameterInputs);

            //#endregion

            //#region DEFINE data response

            let storedDataResponse: any = null;

            //#endregion

            //#region DEFINE parameter inputs

            let storedParameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = null;        

            //#endregion

            //#region MEMORIZE client / server instance

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
            storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Step_X_X_Custom_Store_JSONSettingsIntoMemory_1_0");
            //storedDeveloperLoggingInputs.Parameters.Add("parameterOPTIONALMiddleOfProcess", true);

            //#endregion

            //#region MEMORIZE filter metadata

            let storedData: any = parameterInputs.Parameters.getValue("parameterData");

            let storedKeyValuePairKey: string = parameterInputs.Parameters.getValue("parameterKeyValuePairKey");
            let storedKeyValuePairValue: string = parameterInputs.Parameters.getValue("parameterKeyValuePairValue");

            let storedReturnValueAsArray: boolean = parameterInputs.Parameters.getValue("parameterReturnValueAsArray");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try
            {
                //#region EXECUTE storage process

                //#region IDEAL CASE - USE baseDI extension

                storedParameterInputs = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

                storedParameterInputs.Parameters.setValue("parameterAppSettings", this._storedClientOrServerInstance);
                storedParameterInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInstance);

                storedParameterInputs.Parameters.setValue("parameterData", storedData);

                storedParameterInputs.Parameters.setValue("parameterKeyValuePairKey", storedKeyValuePairKey);
                storedParameterInputs.Parameters.setValue("parameterKeyValuePairValue", storedKeyValuePairValue);

                storedParameterInputs.Parameters.setValue("parameterReturnValueAsArray", storedReturnValueAsArray);

                storedDataResponse = await Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Professional.Programming.Extensions_1.Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.Step_X_X_Read_And_FindJSONNode_1_0(storedParameterInputs);

                //#endregion

                //#endregion
            }
            catch (mistake)
            {
                //#region EDGE CASE - USE exception handler

                throw mistake;

                //#endregion
            }

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN request handler

            //#region IDEAL CASE - USE an experience OR a director handler

            return storedDataResponse;

            //#endregion

            //#endregion

            //#endregion
        }
    }
}
