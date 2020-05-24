import * as ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "./1. Storyline/12/Other/2/Programming/Studio/1/1_0/ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";
import * as Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "./7. Director/12/Other/2/Programming/Director/1/1_0/Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";
import * as ExtraData_12_2_1_0 from "./0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";

export namespace BaseDI.BackEnd {
    export class Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0_Test {
        //#region 1. Assign
        private _clientInfo: Object = new Object();
        private _presentation: any;

        private _storylineDetails: object;
        private _storylineDetails_Parameters: object;

        private _baseDIArmTemplateSchema: string = "";
        private _baseDIArmTemplateSchemaParameters: string = "";
        private _baseDIArmTemplateSchemaParametersEmbeddedResource: string = "";

        public Update_Client;
        //#endregion

        //#region 2. Ready
        constructor(presentation: any) {
            //#region 1. Assign
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
        public Did_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0_Test_Work(requestNameToProcess: string = "", requestNameToProcessParameters: string = "") {
            //#region 1. Assign
            let armTemplateJSONOutput: any;

            let outputs: any = new Object();
            let outputObservations: object = new Object();

            let outputObservationsPrintOut: string = "";

            let extraData = new ExtraData_12_2_1_0.BaseDI.BackEnd.Programming_1.ExtraData_12_2_1_0;

            let isProcessComplete: boolean = false;
            let handleObservation: Promise<any>;

            //#endregion

            //#region 2. Action

            try
            {
                //#region TEST OUR LOGIC

                //#region PROCESS LOGIC UPDATES
                this.Update_Client = (storylineDetails: object) => {
                    this._storylineDetails = storylineDetails;
                }

                const Action = (output) => {
                    handleObservation = new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.BackEnd.Story.Programming_1.ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0.BaseDI.BackEnd.Director.Programming_1.Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(extraData))
                        .SetupStoryline(this._clientInfo, null, null, extraData, "", requestNameToProcess, requestNameToProcessParameters)
                        .Action();
                }
                //#endregion

                Action(armTemplateJSONOutput);

                //#endregion
            }
            catch (storyMistake)
            {
                //#region PRINT OUT MISTAKES
                console.log(storyMistake);
                //#endregion
            }

            //#endregion

            //#region 3. Observe
            handleObservation.then(response => {
                // If you want to see the output in Iframe please uncomment this code and comment out the code below.

                // var iframe = document.createElement('iframe');
                // iframe.style.width = "100%";
                // iframe.style.height  = "100vh";

                // document.getElementById("page").appendChild(iframe);
                // iframe.contentWindow.document.open();
                // iframe.contentWindow.document.write(unescape(response?.outputs[1].baseDIObservations[0].baseDIObservations[0].observation.metadata[3].item.presentation[0].htmlResult));
                // iframe.contentWindow.document.close();
                
                document.getElementById('page').innerHTML = unescape(response?.outputs[1].baseDIObservations[0].baseDIObservations[0].observation.metadata[3].item.presentation[0].htmlResult)

            })

            //#endregion
        }
    }
}


