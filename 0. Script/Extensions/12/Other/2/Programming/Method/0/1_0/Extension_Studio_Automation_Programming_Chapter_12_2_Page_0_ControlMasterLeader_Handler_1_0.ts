//#region Imports

//#region 3rd Party

const _3rdParty_ObjectScan_ObjectSearcher = require('object-scan');

//#endregion

//#region BaseDI

import * as Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0 from "../../../../../../../../../0. Script/Extensions/11/Automate Manual Task/1/Risk Management/Method/0/1_0/Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0";
import * as ExtraData_12_2_1_0 from "../../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";
import * as SingleParmPoco_12_2_1_0 from "../../../../../../../../../0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

//#endregion

//#endregion

export namespace BaseDI.Professional.Programming.Extensions_0
{
    export class Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0
    {
        //SETTINGS
        private static _storedProcessRequestSettings: any = null;

        //CLIENT/SERVER
        private static _storedProcessRequestTracker: any;

        //EXCEPTIONS
        private static _storedProcessRequestMistake: any = null;

        //MISC
        private static _storedProcessRequestExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0 = null;

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

                //#region MEMORIZE input action name

                let storedInputRequestActionName: string = parameterInputs.Parameters.getValue("parameterInputRequestActionName");

                //#endregion                

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
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0 -> ValidateInputs");

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

                if (parameterInputs.Parameters.size() > 0) {
                    //0. CONTROLLERS

                    //1. INPUTS

                    //2. PROCESS
                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestSettings")) {
                        storedOutputResponseMessage += "***parameterProcessRequestSettings*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestTracker")) {
                        storedOutputResponseMessage += "***parameterProcessRequestTracker*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }
                    else {
                        if (parameterInputs.Parameters.getValue("parameterProcessRequestTracker")["storedProcessRequestSettings"] == null) {
                            storedOutputResponseMessage += "***parameterProcessRequestTracker*** must contain a key of ***storedProcessRequestSettings***.\n\n Please verify you are doing something like parameterInputs.Parameters.setValue(process.env).\n Please also make sure you added this value in the ***webpack.config.server.js*** file under new webpack.DefinePlugin(process.env{'process.env':'xxxxx'})";
                            storedProcessRequestMistakeMade = true;
                        }
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestDataToFilter")) {
                        storedOutputResponseMessage += "***parameterProcessRequestDataToFilter*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestDataToFilterKey")) {
                        storedOutputResponseMessage += "***parameterProcessRequestDataToFilterKey*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestDataToFilterValue")) {
                        storedOutputResponseMessage += "***parameterProcessRequestDataToFilterValue*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    //3. OUTPUTS
                    if (!parameterInputs.Parameters.containsKey("parameterOutputResponseAsArray")) {
                        storedOutputResponseMessage += "***parameterOutputResponseAsArray*** cannot be blank or empty.\n";
                        storedProcessRequestMistakeMade = true;
                    }

                    if (storedProcessRequestMistakeMade)
                    {
                        //#region EDGE CASE - USE developer logger

                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        //0. CONTROLLERS

                        //1. INPUTS

                        //2. PROCESS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                        //3. OUTPUTS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
            
                        //#endregion

                        //#region EDGE CASE - USE exception handler

                        throw new Error("PARSING parameter values failed");

                        //#endregion
                    }
                }
                else
                {
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

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables

            let storedInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = null;

            //#endregion

            //#region DEFINE process variables

            let storedProcessRequestDataFilteredData: any = null;
            let storedProcessRequestDataFilteredSearch: string = '**';

            //#endregion

            //#region DEFINE output variables

            let storedOutputResponseData: any = null;
            let storedOutputResponseDataFiltered: any = null;

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

            this._storedProcessRequestTracker = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE process request settings

            this._storedProcessRequestSettings = this._storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE ? this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE : false;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0();

            //REQUIRED

            //0. CONTROLLERS

            //1. INPUTS
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedInputRequestActionName);

            //2. PROCESS
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "CONVERTING json to nodes");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_X_X_Framework_Convert_JsonDataSetToNodes_1_0");
            //storedProcessRequestDeveloperLoggingInputs.Parameters.Add("parameterOutputResponseOPTIONALMiddleOfProcess", true);

            //3. OUTPUTS

            //#endregion

            //#region MEMORIZE process filter data

            let storedProcessRequestDataToFilter = parameterInputs.Parameters.getValue("parameterProcessRequestDataToFilter");

            let storedProcessRequestDataToFilterKey: string = parameterInputs.Parameters.getValue("parameterProcessRequestDataToFilterKey");
            let storedProcessRequestDataToFilterValue: string = parameterInputs.Parameters.getValue("parameterProcessRequestDataToFilterValue");

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output response options

            let storedOutputResponseAsArray: boolean = parameterInputs.Parameters.getValue("parameterOutputResponseAsArray");

            //#endregion

            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE conversion request

            //#region IDEAL CASE - USE 3rdParty module

            //EXAMPLE AT https://stackoverflow.com/questions/22222599/javascript-recursive-search-in-json-object

            if (storedProcessRequestDataToFilterKey)
                storedProcessRequestDataFilteredSearch = '**.' + storedProcessRequestDataToFilterKey;

            _3rdParty_ObjectScan_ObjectSearcher([storedProcessRequestDataFilteredSearch],
                {
                    filterFn: (key, value, { parents }) => {
                        if (storedProcessRequestDataToFilterValue) {
                            if (value === storedProcessRequestDataToFilterValue) {
                                storedOutputResponseDataFiltered = parents[0];
                            }
                        }
                        else {
                            storedOutputResponseDataFiltered = parents[0];
                        }

                    },
                    breakFn: () => storedOutputResponseDataFiltered !== null
                })(storedProcessRequestDataToFilter);

            storedOutputResponseData = storedOutputResponseDataFiltered;

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN converted data

            //#region IDEAL CASE - USE json dataset

            if (storedOutputResponseAsArray && storedOutputResponseDataFiltered)
                storedOutputResponseData = Object.entries(storedOutputResponseDataFiltered);

            return storedOutputResponseData;

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

                //#region MEMORIZE input action name

                let storedInputRequestActionName: string = parameterInputs.Parameters.getValue("parameterInputRequestActionName");

                //#endregion                

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
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_X_X_Framework_Output_JsonMistakeNode_1_0 -> ValidateInputs");

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
                    if (!parameterInputs.Parameters.containsKey("parameterInputRequestActionName")) {
                        storedOutputResponseMessage += "***parameterInputRequestActionName*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    //2. PROCESS
                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequest3WordDescription")) {
                        storedOutputResponseMessage += "***parameterProcessRequest3WordDescription*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestSettings")) {
                        storedOutputResponseMessage += "***parameterProcessRequestSettings*** cannot be blank or empty.\n"
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

                    //3. OUTPUTS
                    if (!parameterInputs.Parameters.containsKey("parameterOutputResponseObservationFileName")) {
                        storedOutputResponseMessage += "***parameterOutputResponseObservationFileName*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterOutputResponseObservationMethodName")) {
                        storedOutputResponseMessage += "***parameterOutputResponseObservationMethodName*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterOutputResponseObservationPresentationTemplate")) {
                        storedOutputResponseMessage += "***parameterOutputResponseObservationPresentationTemplate*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterOutputResponseObservationBusinessTemplate")) {
                        storedOutputResponseMessage += "***parameterOutputResponseObservationBusinessTemplate*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterOutputResponseObservationServiceTemplate")) {
                        storedOutputResponseMessage += "***parameterOutputResponseObservationServiceTemplate*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterOutputResponseObservationSecurityTemplate")) {
                        storedOutputResponseMessage += "***parameterOutputResponseObservationSecurityTemplate*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterOutputResponseObservationDataTemplate")) {
                        storedOutputResponseMessage += "***parameterOutputResponseObservationDataTemplate*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }                    

                    if (storedProcessRequestMistakeMade) {
                        //#region EDGE CASE - USE developer logger

                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        //0. CONTROLLERS

                        //1. INPUTS

                        //2. PROCESS                        
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                        //3. OUTPUTS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);

                        //#endregion

                        //#region EDGE CASE - USE exception handler

                        throw new Error("PARSING parameter values failed");

                        //#endregion
                    }
                }
                else
                {
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

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables



            //#endregion

            //#region DEFINE output variables

            let storedOutputResponseData: string = null;
            
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

            this._storedProcessRequestTracker = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE process request setting

            this._storedProcessRequestSettings = this._storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED

            //0. CONTROLLERS

            //1. INPUTS            
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedInputRequestActionName);

            //2. PROCESS
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "OUTPUTTING mistake observation");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_X_X_Framework_Output_JsonMistakeNode_1_0");

            //3. OUTPUTS
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Logging"); //Values = Logging or Mistake

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALAccountingCostType", "Storage"); //Values = Bandwidth, CPU, Memory, HandleDefaults, Storage, Uptime
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALBeginOfProcess", true);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALMiddleOfProcess", true);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALEndOfProcess", true);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALRunSilentMode", true);

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output observation details

            let storedOutputResponseObservationDescription: string = parameterInputs.Parameters.getValue("parameterProcessRequest3WordDescription");
            let storedOutputResponseObservationFileName: string = parameterInputs.Parameters.getValue("parameterOutputResponseObservationFileName");
            let storedOutputResponseObservationMethodName: string = parameterInputs.Parameters.getValue("parameterOutputResponseObservationMethodName");

            let storedOutputResponseObservationBody: string = '{"baseDIMistakes": [{ "observation": { "metadata": [{ "calledByEntryPointName": "{calledByEntryPointName}" }, { "calledByMethodName": "{calledByMethodName}" }, { "calledByMethodReason": "{calledByMethodReason}" }, { "item": {{item}}  }]  } }]}';
            let storedOutputResponseObservationItem: string = '"presentation": [{presentation}], "business": [{business}], "service": [{service}],  "security": [{security}],"data": [{data}]';

            let storedOutputResponseObservationPresentationTemplate: string = parameterInputs.Parameters.getValue("parameterOutputResponseObservationPresentationTemplate");
            let storedOutputResponseObservationBusinessTemplate: string = parameterInputs.Parameters.getValue("parameterOutputResponseObservationBusinessTemplate");
            let storedOutputResponseObservationServiceTemplate: string = parameterInputs.Parameters.getValue("parameterOutputResponseObservationServiceTemplate");
            let storedOutputResponseObservationSecurityTemplate: string = parameterInputs.Parameters.getValue("parameterOutputResponseObservationSecurityTemplate");
            let storedOutputResponseObservationDataTemplate: string = parameterInputs.Parameters.getValue("parameterOutputResponseObservationDataTemplate");

            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE obversation creation

            //#region IDEAL CASE - USE baseDi template

            const ExecuteConversionRequest = async () => {
                storedOutputResponseObservationBody = storedOutputResponseObservationBody.replace("{item}", storedOutputResponseObservationItem);

                storedOutputResponseObservationBody = storedOutputResponseObservationBody.replace("{calledByEntryPointName}", storedOutputResponseObservationFileName);
                storedOutputResponseObservationBody = storedOutputResponseObservationBody.replace("{calledByMethodName}", storedOutputResponseObservationMethodName);
                storedOutputResponseObservationBody = storedOutputResponseObservationBody.replace("{calledByMethodReason}", storedOutputResponseObservationDescription);

                storedOutputResponseObservationBody = storedOutputResponseObservationBody.replace("{presentation}", storedOutputResponseObservationPresentationTemplate);
                storedOutputResponseObservationBody = storedOutputResponseObservationBody.replace("{business}", storedOutputResponseObservationBusinessTemplate);
                storedOutputResponseObservationBody = storedOutputResponseObservationBody.replace("{service}", storedOutputResponseObservationServiceTemplate);
                storedOutputResponseObservationBody = storedOutputResponseObservationBody.replace("{security}", storedOutputResponseObservationSecurityTemplate);
                storedOutputResponseObservationBody = storedOutputResponseObservationBody.replace("{data}", storedOutputResponseObservationDataTemplate);

                return storedOutputResponseObservationBody;
            };

            storedOutputResponseData = await ExecuteConversionRequest();

            ///#endregion

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN converted data

            //#region IDEAL CASE - USE json dataset

            return storedOutputResponseData;

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

                //#region MEMORIZE input action name

                let storedInputRequestActionName: string = parameterInputs.Parameters.getValue("parameterInputRequestActionName");

                //#endregion                

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
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.ts");
                storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_X_X_Framework_Output_JsonObservationNode_1_0 -> ValidateInputs");

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
                    if (!parameterInputs.Parameters.containsKey("parameterInputRequestActionName")) {
                        storedOutputResponseMessage += "***parameterInputRequestActionName*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    //2. PROCESS
                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequest3WordDescription")) {
                        storedOutputResponseMessage += "***parameterProcessRequest3WordDescription*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }


                    if (!parameterInputs.Parameters.containsKey("parameterProcessRequestSettings")) {
                        storedOutputResponseMessage += "***parameterProcessRequestSettings*** cannot be blank or empty.\n"
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

                    //3. OUTPUTS
                    if (!parameterInputs.Parameters.containsKey("parameterOutputResponseObservationFileName")) {
                        storedOutputResponseMessage += "***parameterOutputResponseObservationFileName*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterOutputResponseObservationMethodName")) {
                        storedOutputResponseMessage += "***parameterOutputResponseObservationMethodName*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterOutputResponseObservationPresentationTemplate")) {
                        storedOutputResponseMessage += "***parameterOutputResponseObservationPresentationTemplate*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterOutputResponseObservationBusinessTemplate")) {
                        storedOutputResponseMessage += "***parameterOutputResponseObservationBusinessTemplate*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterOutputResponseObservationServiceTemplate")) {
                        storedOutputResponseMessage += "***parameterOutputResponseObservationServiceTemplate*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterOutputResponseObservationSecurityTemplate")) {
                        storedOutputResponseMessage += "***parameterOutputResponseObservationSecurityTemplate*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }

                    if (!parameterInputs.Parameters.containsKey("parameterOutputResponseObservationDataTemplate")) {
                        storedOutputResponseMessage += "***parameterOutputResponseObservationDataTemplate*** cannot be blank or empty.\n"
                        storedProcessRequestMistakeMade = true;
                    }                    

                    if (storedProcessRequestMistakeMade) {
                        //#region EDGE CASE - USE developer logger

                        storedProcessRequestTracker["storedProcessRequestStepNumber"] = storedProcessRequestTracker["storedProcessRequestStepNumber"] + 1;

                        //0. CONTROLLERS

                        //1. INPUTS

                        //2. PROCESS                        
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "PARSING parameter values failed");
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", storedProcessRequestTracker["storedProcessRequestStepNumber"]);

                        //3. OUTPUTS
                        storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_GoalHelper_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);

                        //#endregion

                        //#region EDGE CASE - USE exception handler

                        throw new Error("PARSING parameter values failed");

                        //#endregion
                    }
                }
                else
                {
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

            //#region DEFINE control variables

            //#endregion

            //#region DEFINE input variables


            //#endregion

            //#region DEFINE process variables



            //#endregion

            //#region DEFINE output variables

            let storedOutputResponseData: string = null;
            
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

            this._storedProcessRequestTracker = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE process request setting

            this._storedProcessRequestSettings = this._storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE process developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED

            //0. CONTROLLERS

            //1. INPUTS            
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", storedInputRequestActionName);

            //2. PROCESS
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "SENDING instagram content");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", this._storedProcessRequestTracker["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", this._storedProcessRequestTracker);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Studio_Automation_Programming_Chapter_12_2_Page_0_ControlMasterLeader_Handler_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_X_X_Framework_Output_JsonObservationNode_1_0");

            //3. OUTPUTS
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Logging"); //Values = Logging or Mistake

            //OPTIONAL
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALAccountingCostType", "Storage"); //Values = Bandwidth, CPU, Memory, HandleDefaults, Storage, Uptime
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALBeginOfProcess", true);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALMiddleOfProcess", true);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseOPTIONALEndOfProcess", true);
            //storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALRunSilentMode", true);

            //#endregion

            //#endregion

            //#region MEMORIZE output variables

            //#region MEMORIZE output observation details

            let storedOutputResponseObservationDescription: string = parameterInputs.Parameters.getValue("parameterProcessRequest3WordDescription");
            let storedOutputResponseObservationFileName: string = parameterInputs.Parameters.getValue("parameterOutputResponseObservationFileName");
            let storedOutputResponseObservationMethodName: string = parameterInputs.Parameters.getValue("parameterOutputResponseObservationMethodName");

            let storedOutputResponseObservationBody: string = '{ "observation": { "metadata": [{ "calledByEntryPointName": "{calledByEntryPointName}" }, { "calledByMethodName": "{calledByMethodName}" }, { "calledByMethodReason": "{calledByMethodReason}" }, { "item": {{item}}  }]  } }';
            let storedOutputResponseObservationItem: string = '"presentation": [{presentation}], "business": [{business}], "service": [{service}],  "security": [{security}],"data": [{data}]';

            let storedOutputResponseObservationPresentationTemplate: string = parameterInputs.Parameters.getValue("parameterOutputResponseObservationPresentationTemplate");
            let storedOutputResponseObservationBusinessTemplate: string = parameterInputs.Parameters.getValue("parameterOutputResponseObservationBusinessTemplate");
            let storedOutputResponseObservationServiceTemplate: string = parameterInputs.Parameters.getValue("parameterOutputResponseObservationServiceTemplate");
            let storedOutputResponseObservationSecurityTemplate: string = parameterInputs.Parameters.getValue("parameterOutputResponseObservationSecurityTemplate");
            let storedOutputResponseObservationDataTemplate: string = parameterInputs.Parameters.getValue("parameterOutputResponseObservationDataTemplate");

            //#endregion

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE obversation creation

            //#region IDEAL CASE - USE baseDi template

            const ExecuteConversionRequest = async () => {
                storedOutputResponseObservationBody = storedOutputResponseObservationBody.replace("{item}", storedOutputResponseObservationItem);

                storedOutputResponseObservationBody = storedOutputResponseObservationBody.replace("{calledByEntryPointName}", storedOutputResponseObservationFileName);
                storedOutputResponseObservationBody = storedOutputResponseObservationBody.replace("{calledByMethodName}", storedOutputResponseObservationMethodName);
                storedOutputResponseObservationBody = storedOutputResponseObservationBody.replace("{calledByMethodReason}", storedOutputResponseObservationDescription);

                storedOutputResponseObservationBody = storedOutputResponseObservationBody.replace("{presentation}", storedOutputResponseObservationPresentationTemplate);
                storedOutputResponseObservationBody = storedOutputResponseObservationBody.replace("{business}", storedOutputResponseObservationBusinessTemplate);
                storedOutputResponseObservationBody = storedOutputResponseObservationBody.replace("{service}", storedOutputResponseObservationServiceTemplate);
                storedOutputResponseObservationBody = storedOutputResponseObservationBody.replace("{security}", storedOutputResponseObservationSecurityTemplate);
                storedOutputResponseObservationBody = storedOutputResponseObservationBody.replace("{data}", storedOutputResponseObservationDataTemplate);

                return storedOutputResponseObservationBody;
            };

            storedOutputResponseData = await ExecuteConversionRequest();

            ///#endregion

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN converted data

            //#region IDEAL CASE - USE json dataset

            return storedOutputResponseData;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion
    }
}