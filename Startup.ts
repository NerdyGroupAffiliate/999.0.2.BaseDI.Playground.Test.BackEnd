﻿//#region Imports

//#region BaseDI
import * as Action_12_2_1_0 from "./0. Script/Parameters/12/Other/2/Programming/Action Poco/1/1_0/Action_12_2_1_0";

import * as ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "./1. Storyline/12/Other/2/Programming/Studio/1/1_0/ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

import * as Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "./7. Director/12/Other/2/Programming/Director/1/1_0/Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";

import * as ExtraData_12_2_1_0 from "./0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";

import * as SingleParmPoco_12_2_1_0 from "./0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";
//#endregion

//#region Modules

//#endregion

//#endregion

//EXECUTION
//#region HANDLE baseDI http request
export namespace BaseDI
{
    export class Startup
    {
        //#region 1. Assign
        private _storedClientORserverInfo: Object = new Object();

        private _storedExtraData: ExtraData_12_2_1_0.BaseDI.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        private _storedEntryPoint: any;

        private _storedStorylineDetails: object = null;
        private _storedStorylineDetails_Parameters: object = null;

        //#endregion

        //#region 2. Ready
        constructor(entryPoint: any)
        {
            //#region 1. INPUTS
            this._storedExtraData = new ExtraData_12_2_1_0.BaseDI.Script.Programming.Poco_1.ExtraData_12_2_1_0();

            this._storedEntryPoint = entryPoint;

            this._storedStorylineDetails = new Object();
            this._storedStorylineDetails_Parameters = new Object();
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
                this._storedClientORserverInfo = {
                    "serverInstance": this._storedEntryPoint,
                    "serverStartUp": this
                }
            }
            else {
                this._storedClientORserverInfo = {
                    "clientInstance": this._storedEntryPoint,
                    "clientStartUp": this
                }
            }

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#endregion
        }
        //#endregion

        //#region 4. Action
        public Action(targetedResponseTagID:string = "", requestNameToProcess: string = "", requestNameToProcessParameters: string = "", requestActionName: string = "", requestCallBack: any = null)
        {
            //#region 1. INPUTS

            //#region DEFINE data response

            let storedDataResponse: Promise<any>;

            //#endregion

            //#region MEMORIZE action name

            if (requestActionName != "")
                this._storedClientORserverInfo["actionName"] = requestActionName;

            //#endregion

            //#region MEMORIZE targeted tagID

            if (targetedResponseTagID != "")
                this._storedClientORserverInfo["targetedResponseTagID"] = targetedResponseTagID;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try
            {
                //#region EXECUTE client request

                //#region EDGE CASE - USE updates handler

                this._storedClientORserverInfo["StartUpCallBack"] = (response: SingleParmPoco_12_2_1_0.BaseDI.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): any => {
                    return this._storedStorylineDetails;
                }

                //#endregion

                //#region IDEAL CASE - USE request handler

                if (requestNameToProcess == "") throw new Error("[DISTURBANCE ISSUE] - Bug - Startup.ts - BaseDI will not work without a request name. Please make sure that requestNameToProcess is not blank, null or undefined!");

                const Action = (requestNameToProcess: string = "", requestNameToProcessParameters: string = "", extraData: ExtraData_12_2_1_0.BaseDI.Script.Programming.Poco_1.ExtraData_12_2_1_0 = null) =>
                {
                    storedDataResponse = new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Story.Programming_1.ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0.BaseDI.Director.Programming_1.Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(this._storedExtraData))
                        .SetupStoryline(this._storedClientORserverInfo, this._storedStorylineDetails, null, this._storedExtraData, "", requestNameToProcess, requestNameToProcessParameters)
                        .Action();
                }

                Action(requestNameToProcess, requestNameToProcessParameters, this._storedExtraData);

                //#endregion

                //#endregion
            }
            catch
            {
                //#region HANDLE execution mistakes

                //#region EDGE CASE - USE exception handler

                console.log("");

                //#endregion

                //#endregion
            }

            //#endregion

            //#region 3. OUTPUT

            //#region HANDLE execution response

            if (storedDataResponse) {
                storedDataResponse.then(response =>
                {
                    //#region EDGE CASE - USE callback handler
                    if (requestCallBack) {
                        requestCallBack(storedDataResponse);
                    }
                    //#endregion

                    //#region IDEAL CASE - USE html responder
                    response?.outputs[1].baseDIObservations.map(storedObservation => {
                        if (Object.keys(storedObservation).length > 0 && Object.keys(storedObservation)[0].toUpperCase().includes("HTML")) {
                            if (targetedResponseTagID != "") {
                                document.getElementById(targetedResponseTagID).innerHTML = unescape(storedObservation[Object.keys(storedObservation)[0]].baseDIObservations[0].observation.metadata[3].item.presentation[0].htmlResult)
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

let storedServerInstance = new BaseDI.Startup(this);

//#endregion

//#region 2. VALUES


//#endregion

//#region 2. PROCESS

//#region HANDLE file copying & server start

//#region *IDEAL case*

//#region COPY local files & start server
if (process.env.APP_ENV != undefined && process.env.APP_ENV != null && process.env.APP_ENV.toUpperCase() == "SERVER") {
    const Step_1_0_CopyLocalFilesAndStartServer = async () => {
        storedServerInstance.Action("", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0-P1_0", Action_12_2_1_0.BaseDI.Script.Programming.Poco_1.Action_12_2_1_0._12_3_WEB_DEVELOPMENT_Server_Copy_Static_Files_1_0, function callBack(response: any) {
            storedServerInstance.Action("", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0-P1_0", Action_12_2_1_0.BaseDI.Script.Programming.Poco_1.Action_12_2_1_0._12_3_WEB_DEVELOPMENT_Server_Process_HTTP_Request_1_0)
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




