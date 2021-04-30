﻿//#region Imports

//#region BaseDI

import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptPage_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptPage_12_2_1_0";
import * as aClass_Programming_ScriptRoutable_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptRoutable_12_2_1_0";

import * as Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "../../../../../../../../7. Director/12/Other/2/Programming/Director/1/1_0/Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";
import * as Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0 from "../../../../../../../../7. Director/12/Other/2/Programming/Director/2/1_0/Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0";

import * as Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";
import * as Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";
import * as Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0 from "../../../../../../../../0. Script/Extensions/11/Automate Manual Task/1/Risk Management/Method/0/1_0/Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0";

import * as ExtraData_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";

import * as ProgrammingStudioAdministrator_MasterLeader_12_2_1_0 from "../../../../../../../../1. Storyline/12/Other/2/Programming/Studio/1/1_0/ProgrammingStudioAdministrator_MasterLeader_12_2_1_0";

import * as SingleParmPoco_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

//#endregion

//#endregion

export namespace BaseDI.Professional.Chapter.Page.Programming_1
{
    export class Page_1_1_Begin_Process_12_2_1_0 extends aClass_Programming_ScriptPage_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptPage_12_2_1_0
    {
        //#region 1. Assign

        //SETTINGS
        private _storedAppSettings: any;

        //CLIENT/SERVER
        private _storedClientOrServerInstance: any;

        private _storedClientRequestByName: string;
        private _storedClientRequestByNameParameters: string;

        private _storedClientRequestByObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        public _storedServerInstance: any;
        private _storedServerInstanceInfo: any;

        //DATASET
        private _storedStorylineDetails: object = new Object();
        private _storedStorylineDetails_Parameters: object = new Object();

        //MISC
        private _storedExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0 = new ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

        //PLUMBING
        private _storedActionName: string = "";
        private _storedBusinessDirectorOrExperienceRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        private _storedCentralizedDisturber: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _storedCentralizedSensor: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;
        private _storedCentralizedStorer: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<object>;

        private _storedParameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

        private _storedRequestFileName: string = "LocalFile_Director_Of_Advertising_Chapter_1_1_Page_1_CreateAdvertisementForAll_Handler_1_0 ";
        private _storedRequestName: string = "";
        private _storedRepository: IContract_Programming_Repository_12_2_1_0;
        private _storedSystemRequestByName: string;

        public StoredStartUpCallBack;

        //#endregion

        //#region 2. Ready

        constructor(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) {
            super();

            //#region 1. INPUTS

            //#region MEMORIZE clientOrServer instance

            this._storedClientOrServerInstance = parameterInputs.Parameters.getValue("parameterClientOrServerInstance");

            //#endregion

            //#region MEMORIZE action name

            this._storedActionName = this._storedClientOrServerInstance["storedActionName"];

            //#endregion

            //#region MEMORIZE app settings

            this._storedAppSettings = this._storedClientOrServerInstance["storedAppSettings"];

            //#endregion

            //#region MEMORIZE centralized processes handlers

            this._storedCentralizedDisturber = parameterInputs.Parameters.getValue("parameterCentralizedDisturber");
            this._storedCentralizedSensor = parameterInputs.Parameters.getValue("parameterCentralizedSensor");
            this._storedCentralizedStorer = parameterInputs.Parameters.getValue("parameterCentralizedStorer");

            //#endregion

            //#region MEMORIZE data repository

            this._storedRepository = parameterInputs.Parameters.getValue("parameterDataRepository");

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#region MEMORIZE storyline details

            this._storedStorylineDetails = parameterInputs.Parameters.getValue("parameterStorylineDetails");
            this._storedStorylineDetails_Parameters = parameterInputs.Parameters.getValue("parameterStorylineDetails_Parameters");

            //#endregion

            //#region MEMORIZE extra data

            this._storedExtraData = parameterInputs.Parameters.getValue("parameterExtraData") ? parameterInputs.Parameters.getValue("parameterExtraData") : null;

            //#endregion

            //#region MEMORIZE request details

            this._storedClientRequestByName = parameterInputs.Parameters.getValue("parameterClientRequestByName");
            this._storedClientRequestByNameParameters = parameterInputs.Parameters.getValue("parameterClientRequestByNameParameters");
            this._storedClientRequestByObject = parameterInputs.Parameters.getValue("parameterClientRequestByObject");

            this._storedRequestName = parameterInputs.Parameters.getValue("parameterSystemRequestByName");

            this._storedSystemRequestByName = parameterInputs.Parameters.getValue("parameterSystemRequestByName");

            this._storedBusinessDirectorOrExperienceRequestHandler = parameterInputs.Parameters.getValue("parameterBusinessDirectorOrExperienceRequestHandler");

            this._storedParameterInputs = parameterInputs;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process defaults

            //#region IDEAL CASE - USE defaults handler

            this.HandleDefaults = this.HandleDefaults.bind(this);

            //#endregion

            //#endregion

            //#endregion

            //#region 3. OUTPUT

            //#endregion
        }

        //#endregion

        //#region 3. Set

        public HandleDefaults(): void {
            //#region 1. INPUTS

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE process defaults


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

            //#region DEFINE event handlers

            let GetDataResponse: Function = null;

            //#endregion

            //#region MEMORIZE action name

            let storedActionName: string = this.ClientOrServerInstance["storedActionName"] as string;

            //#endregion

            //#region MEMORIZE app settings

            this._storedAppSettings = this.ClientOrServerInstance["storedAppSettings"];

            //#endregion

            //#region MEMORIZE clientOrServer instance

            this._storedClientOrServerInstance = this.ClientOrServerInstance;

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "RETRIEVING request dataset");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", this.ClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", this.ClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", this.ClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0.Page_1_1_Begin_Process_12_2_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Action");   

            //#endregion

            //#region MEMORIZE request details

            let storedRequestName: string = this.ExtraData.KeyValuePairs.getValue("RequestToProcess");
            let storedRequestNameParameters: string = this.ExtraData.KeyValuePairs.getValue("RequestToProcessParameters");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            try
            {
                if (this.StorylineDetails == null)
                {
                    //#region IDEAL CASE - USE data retriever

                    //#region 2. OUTPUT data response

                    //#region EDGE CASE - USE developer logger

                    if (storedDeveloperMode) {
                        this.ClientOrServerInstance["processStepNumber"] = this.ClientOrServerInstance["processStepNumber"] + 1;
                                                
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Logging"); //Values = Logging or Mistake
                        storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", this.ClientOrServerInstance["processStepNumber"]);

                        Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                    }

                    //#endregion

                    GetDataResponse = async () =>
                    {
                        return new ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.BaseDI.Professional.Story.Programming_1.ProgrammingStudioAdministrator_MasterLeader_12_2_1_0(new Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0.BaseDI.Professional.Director.Programming_2.Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0(this._storedParameterInputs))
                            .SetupStoryline(this._storedParameterInputs)
                            .Action().then(storedDataSet => {
                                return storedDataSet;
                            });
                    }

                    //#endregion

                    //#region 1. INPUT data request

                    storedDataResponse = await GetDataResponse();

                    //#endregion

                    //#endregion
                }
            }
            catch (mistake)
            {
                //#region EDGE CASE - USE developer logger

                if (storedDeveloperMode) {
                    this.ClientOrServerInstance["processStepNumber"] = this.ClientOrServerInstance["processStepNumber"] + 1;

                    storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "FAILED cache retrieval");
                    storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Mistake"); //Values = Logging or Mistake
                    storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", this.ClientOrServerInstance["processStepNumber"]);

                    Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedDeveloperLoggingInputs);
                }

                //#endregion

                //#region EDGE CASE - USE exception handler

                throw mistake;

                //#endregion
            }

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            this.StorylineDetails = (storedDataResponse != null && storedDataResponse != undefined) ? storedDataResponse.StorylineDetails : this.StorylineDetails;

            return this.StorylineDetails;

            //#endregion

            //#endregion

            //#endregion
        }

        //#endregion
    }
}