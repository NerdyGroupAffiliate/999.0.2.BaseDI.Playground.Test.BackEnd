//#region Imports

//#region BaseDI

import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptPage_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptPage_12_2_1_0";
import * as aClass_Programming_ScriptRoutable_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptRoutable_12_2_1_0";

import * as Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "../../../../../../../../7. Director/12/Other/2/Programming/Director/1/1_0/Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";

import * as Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";
import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

import * as ExtraData_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";

import * as ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../1. Storyline/12/Other/2/Programming/Studio/1/1_0/ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

import * as SingleParmPoco_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

//#endregion

//#endregion


export namespace BaseDI.Professional.Chapter.Page.Programming_1 {
    export class Page_1_10_End_Process_12_2_1_0 extends aClass_Programming_ScriptPage_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptPage_12_2_1_0
    {
        //#region 1. Assign

        //SETTINGS
        private _storedAppSettings: any;

        //CLIENT/SERVER
        private _storedClientORserverInstance: any;

        //DATASETS
        private _storedStorylineDetails: any;
        private _storedStorylineDetails_Parameters: any;

        private _stored_Repository: any;

        //MISC
        private _storedExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //PLUMBING
        private _stored_CentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _stored_CentralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _stored_CentralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        private _stored_DirectorRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        private _storedRequestName: string = "";
        private _storedSystemRequestByName: string;

        //#endregion

        //#region 2. Ready
        constructor(parameterStorylineDetails: object, parameterRepository: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<any>) {
            super();

            //#region 1. INPUTS

            //#region MEMORIZE data stragety

            this.Repository = parameterRepository;

            //#endregion

            //#region MEMORIZE storyline details

            this.StorylineDetails = parameterStorylineDetails;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process defaults

            //#region IDEAL CASE - USE defaults handler

            this.Action = this.Action.bind(this);

            this.HandleDefaults();

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#endregion
        }
        //#endregion

        //#region 3. Set

        //A. Default state
        public HandleDefaults(): void {
            //#region 1. INPUTS


            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process defaults

            //#region IDEAL CASE - defaults handler


            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#endregion
        }

        //#endregion

        //#region 4. Action
        public async Action(): Promise<object>
        {
            //#region 1. INPUTS

            //#region DEFINE data response

            let storedDataResponse: any = null;

            //#endregion

            //#region MEMORIZE action name

            let storedActionName: string = this.ClientOrServerInstance["actionName"] as string;

            //#endregion

            //#region MEMORIZE app settings

            this._storedAppSettings = this.ClientOrServerInstance["appSettings"];

            //#endregion

            //#region MEMORIZE clientOrServer instance

            this._storedClientORserverInstance = this.ClientOrServerInstance;

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#region MEMORIZE request details

            let storedRequestName: string = this.ExtraData.KeyValuePairs.getValue("RequestToProcess");
            let storedRequestNameParameters: string = this.ExtraData.KeyValuePairs.getValue("RequestToProcessParameters");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE request handler

            const ResolveOrExecuteRequest = async () => {
                if (this.DirectorOrExperienceRequestHandler != null && !this.DirectorOrExperienceRequestHandler.RequestID.toUpperCase().includes("REQUEST_CONTROLLER_")) {
                    try
                    {
                        //#region EDGE CASE - USE developer logger

                        if (storedDeveloperMode) {
                            this.ClientOrServerInstance["processStepNumber"] = this.ClientOrServerInstance["processStepNumber"] + 1;

                            console.log("STEP " + this.ClientOrServerInstance["processStepNumber"] + ": EXECUTING request handler " + storedActionName + " -> " + this.DirectorOrExperienceRequestHandler.RequestID);
                        }

                        //#endregion

                        //#region EDGE CASE - USE request executor

                        return this.DirectorOrExperienceRequestHandler.Action().then(storedDataSet => {
                            return storedDataSet;
                        })

                        //#endregion
                    }
                    catch (mistake)
                    {
                        //#region EDGE CASE - USE developer logger

                        if (storedDeveloperMode) {
                            this.ClientOrServerInstance["processStepNumber"] = this.ClientOrServerInstance["processStepNumber"] + 1;

                            console.log("STEP " + this.ClientOrServerInstance["processStepNumber"] + ": ***LEAKY PIPE*** EXECUTING request handler " + storedActionName + " -> " + this.DirectorOrExperienceRequestHandler.RequestID + " could not be completed successfully. Please check ***Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 -> Page_1_10_EndProcess*** for communication breakdown");
                        }

                        //#endregion

                        //#region EDGE CASE - USE exception handler

                        throw mistake;

                        //#endregion
                    }
                }
                else
                {
                    try
                    {
                        //#region EDGE CASE - USE developer logger

                        if (storedDeveloperMode)
                        {
                            this.ClientOrServerInstance["processStepNumber"] = this.ClientOrServerInstance["processStepNumber"] + 1;

                            console.log("STEP " + this.ClientOrServerInstance["processStepNumber"] + ": RESOLVING request handler " + storedActionName + " -> " + storedRequestName);
                        }

                        //#endregion

                        //#region IDEAL CASE - USE request resolver

                        return storedDataResponse = new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Professional.Story.Programming_1.ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(new Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0.BaseDI.Professional.Director.Programming_1.Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0(this.ExtraData))
                            .SetupStoryline(this.ClientOrServerInstance, this.StorylineDetails, this.StorylineDetails_Parameters, this.ExtraData, storedRequestName, storedRequestName, storedRequestNameParameters)
                            .Action().then(storedDataSet => {
                                return storedDataSet;
                            });

                        //#endregion
                    }
                    catch (mistake)
                    {
                        //#region EDGE CASE - USE developer logger

                        if (storedDeveloperMode) {
                            this.ClientOrServerInstance["processStepNumber"] = this.ClientOrServerInstance["processStepNumber"] + 1;

                            console.log("STEP " + this.ClientOrServerInstance["processStepNumber"] + ": ***LEAKY PIPE*** RESOLVING request handler for request " + storedActionName + " -> " + storedRequestName + " could not be completed successfully. Please check ***Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 -> Page_1_10_EndProcess*** for communication breakdown");
                        }

                        //#endregion

                        //#region EDGE CASE - USE exception handler

                        throw mistake;

                        //#endregion
                    }
                }
            }

            storedDataResponse = await ResolveOrExecuteRequest(); 

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            return storedDataResponse;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion
    }
}