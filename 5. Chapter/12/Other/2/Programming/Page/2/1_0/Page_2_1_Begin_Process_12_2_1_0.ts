//#region Imports

//#region BaseDI

import * as aClass_Programming_ScriptAction_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptPage_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptPage_12_2_1_0";
import * as aClass_Programming_ScriptRoutable_12_2_1_0 from "../../../../../../../../0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptRoutable_12_2_1_0";

import * as Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0 from "../../../../../../../../0. Script/Extensions/12/Other/2/Programming/Method/1/1_0/Extension_Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0";
import * as Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0 from "../../../../../../../../0. Script/Extensions/11/Automate Manual Task/1/Risk Management/Method/0/1_0/Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0";

import * as ExtraData_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";

import * as SingleParmPoco_12_2_1_0 from "../../../../../../../../0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

//#endregion

//#endregion

export namespace BaseDI.Professional.Chapter.Page.Programming_2
{
    export class Page_2_1_Begin_Process_12_2_1_0 extends aClass_Programming_ScriptPage_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptPage_12_2_1_0
    {
        //#region 1. Assign

        //SETTINGS
        private _storedAppSettings: any;

        //CLIENT/SERVER
        private _storedClientOrServerInstance: any;

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

        private _stored_JSONKeyPlaceHolderName: Array<string> = [];

        private _stored_DirectorRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        private _storedRequestName: string = "";
        private _storedSystemRequestByName: string; 

        //#endregion

        //#region 2. Ready
        constructor(parameterStorylineDetails: object, parameterDataRepository: aClass_Programming_ScriptAction_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptAction_12_2_1_0<any>) {
            super();

            //#region 1. INPUTS

            //#region MEMORIZE data stragety

            this.Repository = parameterDataRepository;

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
        public HandleDefaults(): void
        {
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

            //#region MEMORIZE action name

            let storedActionName: string = this.ClientOrServerInstance["storedActionName"] as string;

            //#endregion

            //#region MEMORIZE app settings

            this._storedAppSettings = this.ClientOrServerInstance["storedAppSettings"];

            //#endregion

            //#region MEMORIZE developer mode

            let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

            let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "RETRIEVING cached dataset");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", this.ClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", this.ClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", this.ClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0.Page_2_1_Begin_Process_12_2_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Action"); 

            //#endregion

            //#region MEMORIZE clientOrServer instance

            this._storedClientOrServerInstance = this.ClientOrServerInstance;

            //#endregion

            //#region MEMORIZE repository clientOrServer instance

            this.Repository.ClientOrServerInstance = this.ClientOrServerInstance;

            //#endregion

            //#region MEMORIZE repository extra data

            this.Repository.ExtraData = this.ExtraData;

            //#endregion

            //#region MEMORIZE repository centralized processes

            this.Repository.MasterStorer = this.MasterStorer;

            //#endregion

            //#region MEMORIZE request details

            let storedRequestName: string = this.ExtraData.KeyValuePairs.getValue("RequestToProcess");
            let storedRequestNameParameters: string = this.ExtraData.KeyValuePairs.getValue("RequestToProcessParameters");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE get dataset

            try
            {
                //#region IDEAL CASE - USE data repository

                //#region 2. OUTPUT data response

                const GetDataSet = async () => {
                    this.Repository.Action_8_Process_CRUD().then(storedDataSet => {
                        this.StorylineDetails = storedDataSet.StorylineDetails;
                        this.StorylineDetails_Parameters = storedDataSet.StorylineDetails_Parameters;

                        this.Step_1_0_Framework_Store_JSONStringPlaceHolder_1_0(storedDataSet.StorylineDetailsFiltered);
                        this.Step_2_0_Framework_Convert_JSONStringPlaceHolderIntoAppSettings_1_0();

                        return;
                    })
                }

                //#endregion

                //#region 1. INPUT data request

                await GetDataSet();

                //#endregion

                //#endregion
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

            //#endregion

            //#region 3. OUTPUT

            //#region RETURN process response

            //#region IDEAL CASE - USE baseDI dataset

            return {
                StorylineDetails: this.StorylineDetails,
                StorylineDetails_Parameters: this.StorylineDetails_Parameters
            };

            //#endregion

            //#endregion

            //#endregion
        }

        //#region STORE JSONSTRING PLACEHOLDER
        private Step_1_0_Framework_Store_JSONStringPlaceHolder_1_0(parameter_BaseDI_JSONDataSchema: any)
        {
            //#region 1. INPUTS

            //#region DEFINE data key/values

            let storedJSONKey: string = null;
            let storedJSONValuesList: any = null;

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
            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "PREPARING caching request");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", this.ClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", this.ClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", this.ClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Step_X_X_Framework_Store_CacheDataToPersistentStorage_1_0");

            //#endregion

            //#region MEMORIZE request details

            let storedRequestName: string = this.ExtraData.KeyValuePairs.getValue("RequestToProcess");
            let storedRequestNameParameters: string = this.ExtraData.KeyValuePairs.getValue("RequestToProcessParameters");

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE jsonkey search

            try
            {
                //#region IDEAL CASE - USE string placeholder

                if (this._stored_JSONKeyPlaceHolderName == undefined)
                    this._stored_JSONKeyPlaceHolderName = [];

                if (parameter_BaseDI_JSONDataSchema) {
                    //GET list of json values
                    storedJSONValuesList = Object.values(parameter_BaseDI_JSONDataSchema)

                    //#region SEARCH through list of json values
                    for (const storedJSONValue of storedJSONValuesList) {
                        storedJSONKey = storedJSONValue[0];

                        //FIND value that contains string "_MAINPROFILE"
                        if (storedJSONKey.toUpperCase().includes("_MAINPROFILE")) {
                            //KEEP track of FULL keyname.
                            this._stored_JSONKeyPlaceHolderName.push(storedJSONKey);

                            //BREAK search functionality.
                            return;
                        }
                    }
                    //#endregion
                }

            //#endregion
            }
            catch(mistake)
            {
                //#region EDGE CASE - USE developer logger
                if (storedDeveloperMode) {
                    this.ClientOrServerInstance["processStepNumber"] = this.ClientOrServerInstance["processStepNumber"] + 1;

                    storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "FAILED processing cached data");
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

            //#endregion

            //#region 3. OUTPUT

            //#endregion
        }
        //#endregion

        //#region CONVERT JSONSTRING PLACEHOLDER
        private Step_2_0_Framework_Convert_JSONStringPlaceHolderIntoAppSettings_1_0()
        {
            //#region 1. INPUTS

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
            storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "PREPARING caching request");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", this.ClientOrServerInstance["storedActionName"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", this.ClientOrServerInstance["storedAppSettings"]);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", this.ClientOrServerInstance);
            storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.ts");
            storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "Step_X_X_Framework_Store_CacheDataToPersistentStorage_1_0");

            //#endregion

            //#region MEMORIZE request details

            let storedRequestName: string = this.ExtraData.KeyValuePairs.getValue("RequestToProcess");
            let storedRequestNameParameters: string = this.ExtraData.KeyValuePairs.getValue("RequestToProcessParameters");

            //#endregion

            //#region MEMORIZE search details

            let storedSearchColumnNames: any = this._stored_JSONKeyPlaceHolderName;
            let storedSearchDataSet: Object = (this.StorylineDetails_Parameters ? this.StorylineDetails_Parameters : this.StorylineDetails);
            let storedSearchFilterBy: any = ['parameters'];

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE data conversion

            try
            {
                //#region IDEAL CASE - USE storyline parameter data

                if (this._stored_JSONKeyPlaceHolderName) {
                    let columnsToUpdate: any = this._stored_JSONKeyPlaceHolderName;
                    let columnsToUpdateValues: any = new Array();

                    let storylineDetails: any = this.StorylineDetails;
                    let storylineDetails_Parameters: any = this.StorylineDetails_Parameters;

                    //CREATE OPTIONS SEARCHER
                    const Step_3_1_Find_User_Options_1_0 = (columnToUpdate, jsonDataSet, jsonDataSetFilter, commitUpdate, updateValue): any => {
                        let result: any;

                        //GET TABLE COLUMNS
                        let keyColumns = Object.keys(jsonDataSet).reverse();
                        if (jsonDataSetFilter)
                            keyColumns = Object.keys(jsonDataSet).filter(key => jsonDataSetFilter.includes(key)).reverse();

                        //READ COLUMN INFORMATION
                        keyColumns.forEach(function (columnKey) {
                            //UPDATE THIS COLUMN
                            if (columnKey.toLowerCase() === columnToUpdate.toLowerCase()) {
                                if (commitUpdate) {
                                    //COMMIT THE UPDATE
                                    if (updateValue.value)
                                        jsonDataSet[columnKey] = { "value": updateValue.value };

                                    if (updateValue.defaultValue)
                                        jsonDataSet[columnKey] = { "value": updateValue.defaultValue };
                                }
                                else {
                                    //YES..UPDATE COLUMN
                                    result = jsonDataSet[columnKey];

                                    //MARK FOR UPDATE
                                    columnsToUpdateValues[columnKey] = result;
                                }
                            }
                            else {
                                //DO CHILDEN EXIST
                                if (columnKey != "default") {
                                    //MAYBE CHILDEN EXIST
                                    var columnType = jsonDataSet[columnKey];

                                    if (typeof columnType === 'object') {
                                        if (!columnKey.toUpperCase().includes("_DOCUMENTATIONPROFILE")) {
                                            //CHILDEN DO EXIST
                                            Step_3_1_Find_User_Options_1_0(columnToUpdate, jsonDataSet[columnKey], null, commitUpdate, updateValue);
                                        }
                                    }
                                }
                            }
                        });

                        return columnsToUpdateValues;
                    }

                    //SET SEARCH FILTER
                    let filterJSONDataSetBy: any = ['parameters'];

                    //SET SEARCH DATASET                 
                    let jsonDataSet: any = storylineDetails; //storylineDetails = C:\Programming\0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\2\Programming\Template\2\1_0\State_Director_Of_Programming_Chapter_12_2_Page_1_Request_Handler_1_0.json
                    if (storylineDetails_Parameters) {
                        jsonDataSet = storylineDetails_Parameters;

                        filterJSONDataSetBy = null;
                    } //storylineDetails_Parameters = C:\Programming\0.3.BaseDI.Professional.QuickStart.Templates\2. Data Movement\ARM Templates\12\Other\2\Programming\Template\2\1_0\State_Director_Of_Programming_Chapter_12_2_Page_1_Request_Handler_1_0-P1_0.json

                    //MEMORIZE CUSTOM OPTIONS
                    for (const columnToUpdate of columnsToUpdate) {
                        //FIND CUSTOM OPTIONS
                        const nodeToUpdateValue: any = Step_3_1_Find_User_Options_1_0(columnToUpdate, jsonDataSet, filterJSONDataSetBy, false, null);

                        //CHANGE SEARCH FILTER
                        filterJSONDataSetBy = ['resources'];

                        //UPDATE OPTIONS DATASET
                        Step_3_1_Find_User_Options_1_0(columnToUpdate, storylineDetails, filterJSONDataSetBy, true, nodeToUpdateValue[columnToUpdate]);

                        //MEMORIZE CUSTOM OPTIONS
                        this.StorylineDetails = storylineDetails; //storylineDetails = CUSTOM OPTIONS
                    }
                }

            //#endregion
            }
            catch (mistake) {
                //#region EDGE CASE - USE developer logger
                if (storedDeveloperMode) {
                    this.ClientOrServerInstance["processStepNumber"] = this.ClientOrServerInstance["processStepNumber"] + 1;

                    storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "FAILED processing cached data");
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

            //#endregion

            //#region 3. OUTPUT

            //#endregion
        }
        //#endregion

        //#endregion
    }
}