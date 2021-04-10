
//#region Imports

//#region 3rd Party
const _3rd_Party_Node_ConsoleColorChanger = require('chalk');

//#endregion

//#region BaseDI

import * as ExtraData_12_2_1_0 from "../../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";
import * as SingleParmPoco_12_2_1_0 from "../../../../../../../../../0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

//#endregion

//#endregion

export namespace BaseDI.Professional.Script.Risk_Management.Extensions_0 {

    export class Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0 {
        //SETTINGS
        private static _storedAppSettings: any = null;

        //CLIENT/SERVER
        private static _storedClientORserverInstance: any;

        //EXCEPTIONS
        private static _storedExceptionDetails: any = null;

        //MISC
        private static _storedExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0 = null;

        //PLUMBING
        private static _storedDeveloperExceptionConsoleLogTemplate: string = "***LEAKY PIPE*** {stored3WordDescription}\n  {storedActionName} -> {storedFileName} -> {storedMethodName}\n";

        private static _storedDeveloperStepConsoleLogTemplate: string = "STEP {storedStepNumberReplace}: {stored3WordDescription}\n  {storedActionName} -> {storedFileName} -> {storedMethodName}\n";
        private static _storedDeveloperStepConsoleLogTemplate_Idented: string = "  STEP {storedStepNumberReplace}: {stored3WordDescription}\n     {storedActionName} -> {storedFileName} -> {storedMethodName}\n";
        private static _storedDeveloperStepConsoleLogTemplate_Idented_Twice: string = "     STEP {storedStepNumberReplace}: {stored3WordDescription}\n        {storedActionName} -> {storedFileName} -> {storedMethodName}\n";

        constructor() {

        }

        public static Step_X_X_Custom_Control_AppException_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) : any
        {
            console.log("GOT EXCEPTION");
            console.log(parameterInputs.Parameters["StoredMistakes"]);

            return null;
        }

        public static Step_X_X_Custom_Output_DeveloperMessage_1_0(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): any {
            //#region 1. INPUTS

            //#region DEFINE developer mode

            let storedOPTIONALAccountingCostType: string = "";
            let storedOPTIONALBeginOfProcess: boolean = false;
            let storedOPTIONALMiddleOfProcess: boolean = false;            
            let storedOPTIONALEndOfProcess: boolean = false;
            let storedOPTIONALMasterLeaderIsSecondStep: boolean = false;

            let storedMistake: boolean = false;

            //#endregion

            //#region DEFINE stored message

            let storedMessage: string = "";

            //#endregion

            //#region VALIDATE input parameters

            const ValidateInputs = () => {
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
                        console.log(parameterInputs.Parameters.getValue("parameterFileName"));
                        console.log(parameterInputs.Parameters.getValue("parameterMethodName"))
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

                    if (!parameterInputs.Parameters.containsKey("parameterMessageType")) {
                        storedMessage += "***parameterMessageType*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterMethodName")) {
                        storedMessage += "***parameterMethodName*** cannot be blank or empty.\n"
                        storedProcessCheckPointHit = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterStepNumberReplace")) {
                        storedMessage += "***parameterStepNumberReplace*** cannot be blank or empty.\n"
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
            ValidateInputs();

            //#endregion

            //#region MEMORIZE client / server instance

            this._storedClientORserverInstance = parameterInputs.Parameters.getValue("parameterClientOrServerInstance");

            //#endregion

            //#region MEMORIZE app settings

            this._storedAppSettings = this._storedClientORserverInstance["parameterAppSettings"];

            //#endregion

            //#region MEMORIZE developer mode

            let stored3WordDescription: string = parameterInputs.Parameters.getValue("parameter3WordDescription");
            let storedActionName: string = parameterInputs.Parameters.getValue("parameterActionName");
            let storedAppSettings: any = parameterInputs.Parameters.getValue("parameterAppSettings");
            let storedClientOrServerInstance: any = parameterInputs.Parameters.getValue("parameterClientOrServerInstance");
            let storedFileName: string = parameterInputs.Parameters.getValue("parameterFileName");
            let storedMethodName: string = parameterInputs.Parameters.getValue("parameterMethodName");
            let storedStepNumberReplace: number = parameterInputs.Parameters.getValue("parameterStepNumberReplace");

            let storedMessageType: string = (parameterInputs.Parameters.getValue("parameterMessageType") != undefined ? parameterInputs.Parameters.getValue("parameterMessageType") : "LOGGING");

            if (parameterInputs.Parameters.getValue("parameterOPTIONALAccountingCostType") != undefined)
                storedOPTIONALAccountingCostType = parameterInputs.Parameters.getValue("parameterOPTIONALAccountingCostType");

            if (parameterInputs.Parameters.getValue("parameterOPTIONALBeginOfProcess") != undefined)
                storedOPTIONALBeginOfProcess = parameterInputs.Parameters.getValue("parameterOPTIONALBeginOfProcess");

            if (parameterInputs.Parameters.getValue("parameterOPTIONALMiddleOfProcess") != undefined)
                storedOPTIONALMiddleOfProcess = parameterInputs.Parameters.getValue("parameterOPTIONALMiddleOfProcess");

            if (parameterInputs.Parameters.getValue("parameterOPTIONALEndOfProcess") != undefined)
                storedOPTIONALEndOfProcess = parameterInputs.Parameters.getValue("parameterOPTIONALEndOfProcess");

            if (parameterInputs.Parameters.getValue("parameterOPTIONALMasterLeaderIsSecondStep") != undefined)
                storedOPTIONALMasterLeaderIsSecondStep = parameterInputs.Parameters.getValue("parameterOPTIONALMasterLeaderIsSecondStep");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try
            {
                //#region HANDLE application logging

                //#region IDEAL CASE - USE developer logger

                if (storedMessageType.toUpperCase() == "LOGGING") {
                    if (storedOPTIONALBeginOfProcess || storedOPTIONALEndOfProcess) {
                        storedMessage = this._storedDeveloperStepConsoleLogTemplate; // "STEP {storedStepNumberReplace}: {stored3WordDescription}\n  {storedActionName} -> {storedFileName} -> {storedMethodName}\n";
                    }
                    else {
                        if (storedOPTIONALAccountingCostType) {
                            storedMessage = this._storedDeveloperStepConsoleLogTemplate_Idented_Twice; // "   STEP {storedStepNumberReplace}: {stored3WordDescription}\n      {storedActionName} -> {storedFileName} -> {storedMethodName}\n";      
                        }
                        else {
                            storedMessage = this._storedDeveloperStepConsoleLogTemplate_Idented; // "   STEP {storedStepNumberReplace}: {stored3WordDescription}\n      {storedActionName} -> {storedFileName} -> {storedMethodName}\n";      
                        }                        
                    }                    
                }

                if (storedMessageType.toUpperCase() == "MISTAKE") {
                    storedMessage = this._storedDeveloperExceptionConsoleLogTemplate; // ***LEAKY PIPE*** {stored3WordDescription}\n  {storedActionName} -> {storedFileName} -> {storedMethodName}\n";

                    storedMistake = true;
                }
                
                storedMessage = storedMessage.replace("{storedStepNumberReplace}", storedStepNumberReplace.toString());
                storedMessage = storedMessage.replace("{stored3WordDescription}", (storedOPTIONALAccountingCostType != "") ? "[" + storedOPTIONALAccountingCostType.toUpperCase() + " COST] - " + stored3WordDescription : "[ZERO COST] - " + stored3WordDescription);
                storedMessage = storedMessage.replace("{storedActionName}", storedActionName);
                storedMessage = storedMessage.replace("{storedFileName}", storedFileName);
                storedMessage = storedMessage.replace("{storedMethodName}", storedMethodName);

                if (!process.env.APP_SETTING_DEVELOPER_MODE_SILENT)
                {
                    //#region CLIENT side logging
                    if (process.env.APP_ENV.toUpperCase() == "CLIENT") {
                        if (storedMistake) {
                            console.log("%c" + storedMessage, "color:" + "Orange");

                            return;
                        }

                        if (storedOPTIONALBeginOfProcess == true) {
                            console.log("%c" + "\n\n------------------------------------------------------------------------------------------------------------------------------", "color:" + "#94f500");
                            console.log("%c" + "NEW REQUEST - " + storedActionName.toUpperCase(), "color:" + "#94f500");
                            console.log("%c" + "------------------------------------------------------------------------------------------------------------------------------\n", "color:" + "#94f500");

                            console.log("%c" + storedMessage, "color:" + "#94f500");

                            return;
                        }

                        if (storedOPTIONALMiddleOfProcess == true) {
                            console.log("%c" + storedMessage, "color:" + "#00FFFF");

                            return;
                        }

                        if (storedOPTIONALAccountingCostType != "") {
                            console.log("%c" + storedMessage, "color:" + "Yellow");

                            return;
                        }

                        if (storedOPTIONALEndOfProcess == true) {
                            console.log("%c" + storedMessage, "color:" + "#ff0e11");

                            return;
                        }
                        else {
                            console.log("%c" + storedMessage, "color:" + "#D3D3D3");
                        }
                    }
                    //#endregion

                    //#region SERVER side logging
                    if (process.env.APP_ENV.toUpperCase() == "SERVER")
                    {
                        if (storedMistake) {
                            //console.log("%c" + storedMessage, "color:" + "Orange");
                            console.log(storedMessage);

                            return;
                        }

                        if (storedOPTIONALBeginOfProcess == true) {
                            console.log(_3rd_Party_Node_ConsoleColorChanger.greenBright("\n\n------------------------------------------------------------------------------------------------------------------------------"));
                            console.log(_3rd_Party_Node_ConsoleColorChanger.greenBright("NEW REQUEST - " + storedActionName.toUpperCase()));
                            console.log(_3rd_Party_Node_ConsoleColorChanger.greenBright("------------------------------------------------------------------------------------------------------------------------------\n"));

                            console.log(_3rd_Party_Node_ConsoleColorChanger.greenBright(storedMessage));
                            //console.log('\x1b[32m', storedMessage, '\x1b[0m'); //GREEN

                            return;
                        }

                        if (storedOPTIONALMiddleOfProcess == true) {
                            console.log(_3rd_Party_Node_ConsoleColorChanger.cyanBright(storedMessage));
                            //console.log('\x1b[34m', storedMessage); //BLUE

                            return;
                        }

                        if (storedOPTIONALAccountingCostType != "") {
                            console.log(_3rd_Party_Node_ConsoleColorChanger.yellowBright(storedMessage));
                            //console.log("%c" + storedMessage, "color:" + "Yellow"); //YELLOW

                            return;
                        }

                        if (storedOPTIONALEndOfProcess == true) {
                            console.log(_3rd_Party_Node_ConsoleColorChanger.redBright(storedMessage));
                            //console.log("%c" + storedMessage, "color:" + "#ff0e11"); //RED

                            return;
                        }
                        else
                        {
                            console.log(storedMessage);
                            //console.log('\x1b[37m', storedMessage);  //WHITE
                        }
                    }
                    //#endregion                    
                }
  
                //#endregion    

                //#endregion
            }
            catch (mistake)
            {
                //#region EDGE CASE - USE return false

                return false;

                //#endregion
            }

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN request handler

            //#region IDEAL CASE - USE true return

            return true;

            //#endregion

            //#endregion

            //#endregion
        }
    }
}