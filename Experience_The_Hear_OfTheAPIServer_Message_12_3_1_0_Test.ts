import * as ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "./1. Storyline/12/Other/2/Programming/Studio/1/1_0/ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

import * as Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "./7. Director/12/Other/2/Programming/Director/1/1_0/Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";

import * as ExtraData_12_2_1_0 from "./0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";

export namespace BaseDI.BackEnd {
    export class Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0_Test {
        //#region 1. Assign
        private _clientInfo: Object = new Object();

        private _extraData: ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0;

        private _presentation: any;

        private _storylineDetails: object;
        private _storylineDetails_Parameters: object;

        private _baseDIArmTemplateSchema: string = "";
        private _baseDIArmTemplateSchemaParameters: string = "";
        private _baseDIArmTemplateSchemaParametersEmbeddedResource: string = "";

        public Update_Client;
        //#endregion

        //#region 2. Ready
        constructor(presentation: any)
        {
            //#region 1. Assign
            this._extraData = new ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0();

            this._presentation = presentation;

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

            //SETUP CLIENT INFO
            this._clientInfo = {
                "presentation_experience": this._presentation,
                "presentation_director": this
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
        public Action(requestNameToProcess: string = "", requestNameToProcessParameters: string = "", requestActionName: string = "", requestCallBack: any = null)
        {
            // console.log(unitTestName);
            // console.log(requestNameToProcess);
            // console.log(requestNameToProcessParameters);

            //#region 1. Assign
            let armTemplateJSONOutput: any;

            let outputs: any = new Object();
            let outputObservations: object = new Object();

            let outputObservationsPrintOut: string = "";

            let isProcessComplete: boolean = false;
            let handleObservation: Promise<any>;

            if (requestActionName != "")
                this._clientInfo["actionName"] = requestActionName;

            //#endregion

            //#region 2. Action

            try
            {
                //#region TEST OUR LOGIC

                //#region PROCESS LOGIC UPDATES
                this.Update_Client = (storylineDetails: object, extraData: ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0) => {
                    this._extraData = extraData;
                    this._storylineDetails = storylineDetails;

                    return this._storylineDetails;
                }

                const Action = (output) => {
                    handleObservation = new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Story.Programming_1.ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0.BaseDI.BackEnd.Director.Programming_1.Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(this._extraData))
                        .SetupStoryline(this._clientInfo, this._storylineDetails, null, this._extraData, "", requestNameToProcess, requestNameToProcessParameters)
                        .Action();
                }
                //#endregion

                Action(armTemplateJSONOutput);

                //#endregion
            }
            catch (storyMistake) {
                //#region PRINT OUT MISTAKES
                // console.log(storyMistake);
                //#endregion
            }

            //#endregion

            //#region 3. Observe
            handleObservation.then(response => {
                // var iframe = document.createElement('iframe');
                // iframe.style.width = "100%";
                // iframe.style.height  = "100vh";

                // document.getElementById("page").appendChild(iframe);
                // iframe.contentWindow.document.open();
                // iframe.contentWindow.document.write(unescape(response?.outputs[1].baseDIObservations[0].baseDIObservations[0].observation.metadata[3].item.presentation[0].htmlResult));
                // iframe.contentWindow.document.close();

                ///const result: string = unescape(response?.outputs[1].baseDIObservations[0].baseDIObservations[0].observation.metadata[3].item.presentation[0].htmlResult)

                if (requestCallBack)
                    requestCallBack(response);

            })

            //#endregion
        }
        //#endregion
    }
}

let server = new BaseDI.BackEnd.Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0_Test(this);

const Step_1_0_CopyLocalFilesAndStartServer = async () => {
    server.Action("Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0-P1_0", "Action_CopyStaticFiles_1_0", function callBack(response: any)
    {
        server.Action("Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0", "Experience_The_Hear_OfTheAPIServer_Message_12_3_1_0-P1_0", "Action_StartServer_1_0")
    });
}

Step_1_0_CopyLocalFilesAndStartServer();

