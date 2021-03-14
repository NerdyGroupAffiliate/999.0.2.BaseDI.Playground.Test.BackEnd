import * as ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "./1. Storyline/12/Other/2/Programming/Studio/1/1_0/ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

import * as Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "./7. Director/12/Other/2/Programming/Director/1/1_0/Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";

import * as ExtraData_12_2_1_0 from "./0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";

import * as SingleParmPoco_12_2_1_0 from "./0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

export namespace BaseDI.BackEnd {
    export class Startup {
        //#region 1. Assign
        private _clientORserverInfo: Object = new Object();

        private _extraData: ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0;

        private _entryPoint: any;

        private _storylineDetails: object;
        private _storylineDetails_Parameters: object;

        private _baseDIArmTemplateSchema: string = "";
        private _baseDIArmTemplateSchemaParameters: string = "";
        private _baseDIArmTemplateSchemaParametersEmbeddedResource: string = "";

        public Update_Client;
        //#endregion

        //#region 2. Ready
        constructor(entryPoint: any)
        {
            //#region 1. Assign
            this._extraData = new ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0();

            this._entryPoint = entryPoint;

            this._storylineDetails = new Object();
            this._storylineDetails_Parameters = new Object();
            //#endregion

            //#region 2. Action
            this.Setup = this.Setup.bind(this);
            this.Setup();
            //#endregion

            //#region 3. Observe
            //#endregion
        }
        //#endregion

        //#region 3. Set
        public Setup() {
            //#region 1. Assign

            //SETUP CLIENT/SERVER INFO
            if (process.env.APP_ENV != undefined && process.env.APP_ENV != null && process.env.APP_ENV.toUpperCase() == "SERVER") {
                this._clientORserverInfo = {
                    "serverInstance": this._entryPoint,
                    "serverStartUp": this
                }
            }
            else {
                this._clientORserverInfo = {
                    "clientInstance": this._entryPoint,
                    "clientStartUp": this
                }
            }

            //#endregion

            //#region 2. Action

            //READ OPTIONS TEMPLATE
            this._storylineDetails = null;

            //READ USER OPTIONS
            this._storylineDetails_Parameters = null;
            //#endregion

            //#region 3. Observe
            //#endregion
        }
        //#endregion

        //#region 4. Action
        public Action(targetedResponseTagID:string = "", requestNameToProcess: string = "", requestNameToProcessParameters: string = "", requestActionName: string = "", requestCallBack: any = null)
        {
            //#region 1. Assign
            let handleObservation: Promise<any>;

            let outputObservationsPrintOut: string = "";

             //SETUP CLIENT/SERVER INFO
            if (requestActionName != "")
                this._clientORserverInfo["actionName"] = requestActionName;

            //#endregion

            //#region 2. Action

            try
            {
                //#region TRY OUR LOGIC

                //#region PROCESS LOGIC UPDATES

                this._clientORserverInfo["StartUpCallBack"] = (response: SingleParmPoco_12_2_1_0.BaseDI.BackEnd.Programming_1.SingleParmPoco_12_2_1_0): any => {
                    return this._storylineDetails;
                }
                //#endregion

                const Action = (requestNameToProcess: string = "", requestNameToProcessParameters: string = "", extraData: ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0 = null) => {
                    handleObservation = new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Story.Programming_1.ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0.BaseDI.BackEnd.Director.Programming_1.Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(this._extraData))
                        .SetupStoryline(this._clientORserverInfo, this._storylineDetails, null, this._extraData, "", requestNameToProcess, requestNameToProcessParameters)
                        .Action();
                }

                Action(requestNameToProcess, requestNameToProcessParameters, this._extraData);

                //#endregion
            }
            catch (storyMistake) {
                //#region PRINT OUT MISTAKES
                // console.log(storyMistake);
                //#endregion
            }

            //#endregion

            //#region 3. Observe
            if (handleObservation) {
                handleObservation.then(response => {
                    // var iframe = document.createElement('iframe');
                    // iframe.style.width = "100%";
                    // iframe.style.height  = "100vh";

                    // document.getElementById("page").appendChild(iframe);
                    // iframe.contentWindow.document.open();
                    // iframe.contentWindow.document.write(unescape(response?.outputs[1].baseDIObservations[0].baseDIObservations[0].observation.metadata[3].item.presentation[0].htmlResult));
                    // iframe.contentWindow.document.close();
                    
                    if (requestCallBack) {
                        requestCallBack(response);
                    }
                    else
                    {
                        if (targetedResponseTagID != "")
                            document.getElementById(targetedResponseTagID).innerHTML = unescape(response?.outputs[1].baseDIObservations[0].baseDIObservations[0].observation.metadata[3].item.presentation[0].htmlResult)
                    }                      
                });
            }

            //#endregion
        }
        //#endregion
    }
}

//#region SERVER
if (process.env.APP_ENV != undefined && process.env.APP_ENV != null && process.env.APP_ENV.toUpperCase() == "SERVER") {
    let server = new BaseDI.BackEnd.Startup(this);

    const Step_1_0_CopyLocalFilesAndStartServer = async () => {
        server.Action("", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0-P1_0", "Action_CopyStaticFiles_1_0", function callBack(response: any) {
            server.Action("", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0-P1_0", "Action_ProcessRequest_1_0")
        });
    }

    Step_1_0_CopyLocalFilesAndStartServer();
}
//#endregion

//export {  }

