//#region Imports

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

export namespace BaseDI
{
    export class Startup {
        //#region 1. Assign
        private _storedClientORserverInfo: Object = new Object();

        private _storedExtraData: ExtraData_12_2_1_0.BaseDI.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        private _storedEntryPoint: any;

        private _storedStorylineDetails: object;
        private _storedStorylineDetails_Parameters: object;

        //#endregion

        //#region 2. Ready
        constructor(entryPoint: any)
        {
            //#region 1. VARIABLES: DESCRIBE the memories
            this._storedExtraData = new ExtraData_12_2_1_0.BaseDI.Script.Programming.Poco_1.ExtraData_12_2_1_0();

            this._storedEntryPoint = entryPoint;

            this._storedStorylineDetails = new Object();
            this._storedStorylineDetails_Parameters = new Object();
            //#endregion

            //#region 2. VALUES: RECALL the memories

            //#endregion

            //#region 3. **INPUT: PROCESS the memories*

            //#region HANDLE initialization logic

            //#region *IDEAL case*

            //#region PROCESS initialization logic
            this.Setup = this.Setup.bind(this);
            this.Setup();
            //#endregion

            //#endregion

            //#endregion

            //#endregion

            //#region 4. **OUTPUT: TELL the story*


            //#endregion
        }
        //#endregion

        //#region 3. Set
        public Setup()
        {
            //#region 1. VARIABLES: DESCRIBE the memories

            //#endregion

            //#region 2. VALUES: RECALL the memories
            this._storedStorylineDetails = null;
            this._storedStorylineDetails_Parameters = null;
            //#endregion

            //#region 3. **INPUT: PROCESS the memories*

            //#region HANDLE application defaults

            //#region *IDEAL case*

            //#region PROCESS application defaults
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

            //#endregion

            //#region 4. **OUTPUT: TELL the story*


            //#endregion
        }
        //#endregion

        //#region 4. Action
        public Action(targetedResponseTagID:string = "", requestNameToProcess: string = "", requestNameToProcessParameters: string = "", requestActionName: string = "", requestCallBack: any = null)
        {
            //#region 1. VARIABLES: DESCRIBE the memories

            let storedObservation: Promise<any>;

            let storedOutput: string = "";

            //#endregion

            //#region 2. VALUES: RECALL the memories

            //#region MEMORIZE targeted tagID

            if (targetedResponseTagID != "")
                this._storedClientORserverInfo["targetedResponseTagID"] = targetedResponseTagID;


            //#endregion

            //#region MEMORIZE action name

            if (requestActionName != "")
                this._storedClientORserverInfo["actionName"] = requestActionName;

            //#endregion

            //#endregion

            //#region 3. **INPUT: PROCESS the memories*

            try
            {
                //#region HANDLE our logic

                //#region EDGE case

                //#region VALIDATE required values
                if (requestNameToProcess == "") throw new Error("[DISTURBANCE ISSUE] - Bug - Startup.ts - BaseDI will not work without a request name. Please make sure that requestNameToProcess is not blank, null or undefined!");
                //#endregion

                //#endregion

                //#region EDGE case

                //#region PROCESS application updates

                this._storedClientORserverInfo["StartUpCallBack"] = (response: SingleParmPoco_12_2_1_0.BaseDI.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): any => {
                    return this._storedStorylineDetails;
                }
                //#endregion

                //#endregion

                //#region *IDEAL case*

                //#region HANDLE system request
                const Action = (requestNameToProcess: string = "", requestNameToProcessParameters: string = "", extraData: ExtraData_12_2_1_0.BaseDI.Script.Programming.Poco_1.ExtraData_12_2_1_0 = null) =>
                {
                    //#region STORE system response

                    storedObservation = new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Story.Programming_1.ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0.BaseDI.Director.Programming_1.Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(this._storedExtraData))
                        .SetupStoryline(this._storedClientORserverInfo, this._storedStorylineDetails, null, this._storedExtraData, "", requestNameToProcess, requestNameToProcessParameters)
                        .Action();

                    //#endregion
                }

                //#region START system request

                Action(requestNameToProcess, requestNameToProcessParameters, this._storedExtraData);

                //#endregion

                //#endregion

                //#endregion

                //#endregion
            }
            catch (storedMistake)
            {
                //#region HANDLE our mistakes

                //#region EDGE case

                //#region PRINT out mistakes
                console.log(storedMistake);
                //#endregion

                //#endregion

                //#endregion
            }

            //#endregion

            //#region 4. **OUTPUT: TELL the story*

            //#region HANDLE callback response

            //#region EDGE case

            //#region PROCESS startup callback
            if (requestCallBack) {
                requestCallBack(storedObservation);
            }
            //#endregion

            //#endregion

            //#endregion
            else
            //#region HANDLE interface response
            {
                //#region *IDEAL case*

                //#region DISPLAY some response
                if (storedObservation) {
                    storedObservation.then(response => {
                        // var iframe = document.createElement('iframe');
                        // iframe.style.width = "100%";
                        // iframe.style.height  = "100vh";

                        // document.getElementById("page").appendChild(iframe);
                        // iframe.contentWindow.document.open();
                        // iframe.contentWindow.document.write(unescape(response?.outputs[1].baseDIObservations[0].baseDIObservations[0].observation.metadata[3].item.presentation[0].htmlResult));
                        // iframe.contentWindow.document.close();

                        if (targetedResponseTagID != "")
                            document.getElementById(targetedResponseTagID).innerHTML = unescape(response?.outputs[1].baseDIObservations[0].baseDIObservations[0].observation.metadata[3].item.presentation[0].htmlResult)
                    });
                }

            //#endregion

                //#endregion
            }
            //#endregion

            //#endregion
        }
        //#endregion
    }
}

//#region Client
export { Action_12_2_1_0 as ActionList }
//#endregion

//#region Server

//#region 1. VARIABLES: DESCRIBE the memories

let storedServerInstance = new BaseDI.Startup(this);

//#endregion

//#region 2. VALUES: RECALL the memories


//#endregion

//#region 3. **INPUT: PROCESS the memories*

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

//#region 4. **OUTPUT: TELL the story*


//#endregion

//#endregion





