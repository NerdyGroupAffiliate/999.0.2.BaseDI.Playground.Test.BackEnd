import * as ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "./1. Storyline/12/Other/2/Programming/Studio/1/1_0/ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";
import * as Director_Of_Programming_Chapter_12_2_Page_1_Request_Handler_1_0 from "./7. Director/12/Other/2/Programming/Director/1/1_0/Director_Of_Programming_Chapter_12_2_Page_1_Request_Handler_1_0";
import * as ExtraData_12_2_1_0 from "./0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";

import * as _baseDIArmTemplateSchemaEmbeddedResource from "../999.0.3.BaseDI.QuickStart.Templates/2. Data Movement/ARM Templates/12/Other/3/Web Development/Template/1/1_0/State_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0.json";
import * as _baseDIArmTemplateSchemaParametersEmbeddedResource from "../999.0.3.BaseDI.QuickStart.Templates/2. Data Movement/ARM Templates/12/Other/3/Web Development/Template/1/1_0/State_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0-P1_0.json";

export namespace BaseDI.Playground.Test.BackEnd {
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
            this._storylineDetails = _baseDIArmTemplateSchemaEmbeddedResource;

            //READ USER OPTIONS
            this._storylineDetails_Parameters = _baseDIArmTemplateSchemaParametersEmbeddedResource
            //#endregion

            //#region 3. Observe
            //#endregion
        }
        //#endregion

        //#region 4. Action
        public Did_Director_Of_WebDevelopment_Chapter_12_3_Page_1_ReadHomeScreenForAll_Handler_1_0_Test_Work() {
            //#region 1. Assign
            let armTemplateJSONOutput: any;

            let outputs: any = new Object();
            let outputObservations: object = new Object();

            let outputObservationsPrintOut: string = "";

            let extraData = new ExtraData_12_2_1_0.BaseDI.Playground.Test.BackEnd.Programming_1.ExtraData_12_2_1_0;
            //#endregion

            //#region 2. Action

            try {
                //#region TEST OUR LOGIC

                //#region PROCESS LOGIC UPDATES
                this.Update_Client = (storylineDetails: object) => {
                    this._storylineDetails = storylineDetails;
                }

                const Action = (output) => {
                    new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Playground.Test.BackEnd.Story.Programming_1.ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_Request_Handler_1_0.BaseDI.Playground.Test.BackEnd.Director.Programming_1.Director_Of_Programming_Chapter_12_2_Page_1_Request_Handler_1_0(extraData))
                        .SetupStoryline(this._clientInfo, this._storylineDetails, this._storylineDetails_Parameters, extraData, "")
                        .Action().then(response => {
                            // console.log(response) 
                            handleObservation(response);
                        })
                }
                //#endregion

                return Action(armTemplateJSONOutput);
                //#endregion
            }
            catch (storyMistake) {
                //#region PRINT OUT MISTAKES
                console.log(storyMistake);
                //#endregion
            }

            //#endregion

            //#region 3. Observe
            const handleObservation = (response: any) => {
                console.log("output = " + JSON.stringify(response?.outputs[1]?.baseDIObservations));
            }
            //#endregion
        }
        //#endregion
    }
}


