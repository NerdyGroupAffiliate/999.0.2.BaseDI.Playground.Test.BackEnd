﻿//#region Imports

//#region BaseDI
import * as Action_12_2_1_0 from "./0. Script/Parameters/12/Other/2/Programming/Action Poco/1/1_0/Action_12_2_1_0";

import * as ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "./1. Storyline/12/Other/2/Programming/Studio/1/1_0/ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

import * as Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "./7. Director/12/Other/2/Programming/Director/1/1_0/Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";
import * as Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0 from "./0. Script/Extensions/11/Automate Manual Task/1/Risk Management/Method/0/1_0/Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0";

import * as ExtraData_12_2_1_0 from "./0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";

import * as SingleParmPoco_12_2_1_0 from "./0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";
//#endregion

//#region Modules

//#endregion

//#endregion

//EXECUTION
//#region HANDLE baseDI http request
export namespace BaseDI.Professional
{
    export class Startup
    {
        //#region 1. Assign

        //SETTINGS
        private _storedAppSettings: any = null;

        //CLIENT/SERVER
        private _storedClientOrServerInfo: Object = new Object();
        private _storedClientWebPageInstance: any;

        //DATASETS
        private _storedStorylineDetails: object = null;
        private _storedStorylineDetails_Parameters: object = null;

        //MISC
        private _storedExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;


        //#endregion

        //#region 2. Ready
        constructor(parameterWebPageInstance: any)
        {
            //#region 1. INPUTS

            //#region MEMORIZE clientOrServer instance

            this._storedClientWebPageInstance = parameterWebPageInstance;

            //#endregion

            //#region DEFINE extra data

            this._storedExtraData = new ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0();

            //#endregion
  
            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process defaults

            //#region EDGE CASE - USE defaults handler

            this.Setup = this.Setup.bind(this);
            this.Setup();

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT


            //#endregion
        }
        //#endregion

        //#region 3. Set
        public Setup()
        {
            //#region 1. INPUTS

            //#endregion

            //#region 2. PROCESS

            //#region HANDLE application defaults

            //#region IDEAL CASE - USE hardcoded values

            if (process.env.APP_ENV != undefined && process.env.APP_ENV != null && process.env.APP_ENV.toUpperCase() == "SERVER") {
                this._storedClientOrServerInfo = {
                    "appSettings": process.env,
                    "serverInstance": this._storedClientWebPageInstance,
                    "serverStartUp": this
                }
            }
            else {
                this._storedClientOrServerInfo = {
                    "appSettings": process.env,
                    "clientInstance": this._storedClientWebPageInstance,
                    "clientStartUp": this
                }
            }

            this._storedClientOrServerInfo["storedIgnoreDeveloperConsoleLog"] = false;

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#endregion
        }
        //#endregion

        //#region 4. Action
        public Action(parameterTargetedResponseTagID: string = "", parameterRequestNameToProcess: string = "", parameterRequestNameToProcessParameters: string = "", parameterRequestChapterName: string = "", parameterRequestActionName: string = "", parameterRequestCallBack: any = null)
        {
            //#region 1. INPUTS

            //#region DEFINE data response

            let storedDataResponse: Promise<any>;

            //#endregion

            //#region MEMORIZE app settings

            this._storedAppSettings = this._storedClientOrServerInfo["appSettings"];

            //#endregion

            //#region MEMORIZE action name

            if (parameterRequestActionName != "")
                this._storedClientOrServerInfo["actionName"] = parameterRequestActionName;

            //#endregion

            //#region MEMORIZE chpater name

            if (parameterRequestActionName != "")
                this._storedClientOrServerInfo["chapterName"] = parameterRequestChapterName;

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            this._storedClientOrServerInfo["processStepNumber"] = 0;

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "STARING web request");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", this._storedClientOrServerInfo["actionName"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", this._storedClientOrServerInfo["appSettings"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", this._storedClientOrServerInfo);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Start.ts");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Action");

            //#endregion

            //#region MEMORIZE targeted tagID

            if (parameterTargetedResponseTagID != "")
                this._storedClientOrServerInfo["targetedResponseTagID"] = parameterTargetedResponseTagID;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try
            {
                //#region EXECUTE client request

                //#region EDGE CASE - USE updates handler

                this._storedClientOrServerInfo["StartUpCallBack"] = (response: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): any => {
                    return this._storedStorylineDetails;
                }

                //#endregion

                //#region IDEAL CASE - USE request handler

                if (parameterRequestNameToProcess == "") throw new Error("[DISTURBANCE ISSUE] - Bug - Startup.ts - BaseDI will not work without a request name. Please make sure that requestNameToProcess is not blank, null or undefined!");

                const Action = (parameterRequestNameToProcess: string = "", parameterRequestNameToProcessParameters: string = "", parameterExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0 = null) =>
                {
                    storedDataResponse = new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Professional.Story.Programming_1.ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0.BaseDI.Professional.Director.Programming_1.Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(this._storedExtraData))
                        .SetupStoryline(this._storedClientOrServerInfo, this._storedStorylineDetails, null, this._storedExtraData, "", parameterRequestNameToProcess, parameterRequestNameToProcessParameters)
                        .Action();
                }

                Action(parameterRequestNameToProcess, parameterRequestNameToProcessParameters, this._storedExtraData);

                //#endregion

                //#endregion
            }
            catch
            {
                //#region HANDLE execution mistakes

                //#region EDGE CASE - USE exception handler

                console.log("23423432");

                //#endregion

                //#endregion
            }

            //#endregion

            //#region 3. OUTPUT

            //#region HANDLE execution response

            if (storedDataResponse) {
                storedDataResponse.then(storedResponse =>
                {
                    //#region EDGE CASE - USE callback handler
                    if (parameterRequestCallBack) {
                        parameterRequestCallBack(storedDataResponse);
                    }
                    //#endregion

                    //#region IDEAL CASE - USE html responder
                    storedResponse?.outputs[1].baseDIObservations.map(storedObservation => {
                        if (Object.keys(storedObservation).length > 0 && Object.keys(storedObservation)[0].toUpperCase().includes("HTML")) {
                            if (parameterTargetedResponseTagID != "") {
                                document.getElementById(parameterTargetedResponseTagID).innerHTML = unescape(storedObservation[Object.keys(storedObservation)[0]].baseDIObservations[0].observation.metadata[3].item.presentation[0].htmlResult)

                                //#region EDGE CASE - USE developer logger

                                if (storedDeveloperMode) {
                                    this._storedClientOrServerInfo["processStepNumber"] = this._storedClientOrServerInfo["processStepNumber"] + 1;

                                    storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "SUCCESSFULLY rendered webpage");
                                    storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Logging"); //Values = Logging or Mistake
                                    storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", this._storedClientOrServerInfo["processStepNumber"]);
                                    storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALEndOfProcess", true);

                                    Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Custom_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                                }

                                //#endregion
                            }                            
                        }
                    });

                    //#endregion
                })
            }

            //#endregion

            //#endregion
        }
        //#endregion
    }
}
//#endregion


//SETUP
//#region Client
export { Action_12_2_1_0 as ActionList }
//#endregion

//#region Server

//#region 1. INPUTS

let storedServerInstance = new BaseDI.Professional.Startup(this);

//#endregion

//#region 2. PROCESS

//#region HANDLE file copying & server start

//#region IDEAL CASE - USE baseDI pipeline

//#region COPY local files & start server
if (process.env.APP_ENV != undefined && process.env.APP_ENV != null && process.env.APP_ENV.toUpperCase() == "SERVER") {
    const Step_1_0_CopyLocalFilesAndStartServer = async () => {
        storedServerInstance.Action("", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0-P1_0", "Action_7_Process_StoryResources", Action_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.Action_12_2_1_0._12_3_WEB_DEVELOPMENT_Server_Copy_Static_Files_1_0, function callBack(response: any) {
            storedServerInstance.Action("", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0-P1_0", "Action_5_Process_StorySetting", Action_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.Action_12_2_1_0._12_3_WEB_DEVELOPMENT_Server_OnLoad_1_0)
        });
    }

    Step_1_0_CopyLocalFilesAndStartServer();
}
//#endregion

//#endregion


//#endregion

//#endregion

//#region 3. OUTPUT


//#endregion

//#endregion





