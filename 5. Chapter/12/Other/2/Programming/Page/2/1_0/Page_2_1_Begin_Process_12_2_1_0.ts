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
        private _storedProcessRequestSettings: any;

        //CLIENT/SERVER
        private _storedProcessRequestTracker: any;

        private _storedClientRequestByName: string;
        private _storedClientRequestByNameParameters: string;

        private _storedClientRequestByObject: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

        public _storedServerInstance: any;
        private _storedServerInstanceInfo: any;

        //DATASET
        private _storedProcessRequestDataStorylineDetails: object = new Object();
        private _storedProcessRequestDataStorylineDetails_Parameters: object = new Object();

        //MISC
        private _storedProcessRequestExtraData: ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0 = new ExtraData_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.ExtraData_12_2_1_0;

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

        private _storedJSONKeyPlaceHolderName: Array<any>;

        //#endregion

        //#region 2. Ready

        constructor(parameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0) {
            super();

            //#region 1. INPUTS

            //#region MEMORIZE control client server

            this._storedProcessRequestTracker = parameterInputs.Parameters.getValue("parameterProcessRequestTracker");

            //#endregion

            //#region MEMORIZE action name

            this._storedActionName = this._storedProcessRequestTracker["storedInputRequestActionName"];

            //#endregion

            //#region MEMORIZE app settings

            this._storedProcessRequestSettings = this._storedProcessRequestTracker["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE centralized processes handlers

            this._storedCentralizedDisturber = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedDisturber");
            this._storedCentralizedSensor = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedSensor");
            this._storedCentralizedStorer = parameterInputs.Parameters.getValue("parameterProcessRequestCentralizedStorer");

            //#endregion

            //#region MEMORIZE data repository

            this._storedRepository = parameterInputs.Parameters.getValue("parameterDataRepository");

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            //#endregion

            //#region MEMORIZE storyline details

            this._storedProcessRequestDataStorylineDetails = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails");
            this._storedProcessRequestDataStorylineDetails_Parameters = parameterInputs.Parameters.getValue("parameterProcessRequestDataStorylineDetails_Parameters");

            //#endregion

            //#region MEMORIZE extra data

            this._storedProcessRequestExtraData = parameterInputs.Parameters.getValue("parameterExtraData") ? parameterInputs.Parameters.getValue("parameterExtraData") : null;

            //#endregion

            //#region MEMORIZE request details

            this._storedClientRequestByName = parameterInputs.Parameters.getValue("parameterInputRequestName");
            this._storedClientRequestByNameParameters = parameterInputs.Parameters.getValue("parameterInputRequestNameDataCacheKey");
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

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

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

            //#region MEMORIZE action name

            let storedInputRequestActionName: string = this.ClientOrServerInstance["storedInputRequestActionName"] as string;

            //#endregion

            //#region MEMORIZE app settings

            this._storedProcessRequestSettings = this.ClientOrServerInstance["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "RETRIEVING cached dataset");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", this.ClientOrServerInstance["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", this.ClientOrServerInstance["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", this.ClientOrServerInstance);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Director_Of_Programming_Chapter_12_2_Page_2_Request_Conversion_1_0.Page_2_1_Begin_Process_12_2_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Action"); 

            //#endregion

            //#region MEMORIZE control client server

            this._storedProcessRequestTracker = this.ClientOrServerInstance;

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

                if (storedProcessRequestDeveloperMode) {
                    this.ClientOrServerInstance["storedProcessRequestStepNumber"] = this.ClientOrServerInstance["storedProcessRequestStepNumber"] + 1;

                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED cache retrieval");
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", this.ClientOrServerInstance["storedProcessRequestStepNumber"]);

                    Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
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

            this._storedProcessRequestSettings = this.ClientOrServerInstance["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE control client server

            this._storedProcessRequestTracker = this.ClientOrServerInstance;

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "PREPARING caching request");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", this.ClientOrServerInstance["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", this.ClientOrServerInstance["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", this.ClientOrServerInstance);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_X_X_Framework_Store_CacheDataToPersistentStorage_1_0");

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

                if (this._storedJSONKeyPlaceHolderName == undefined)
                    this._storedJSONKeyPlaceHolderName = [];

                if (parameter_BaseDI_JSONDataSchema) {
                    //GET list of json values
                    storedJSONValuesList = Object.values(parameter_BaseDI_JSONDataSchema)

                    //#region SEARCH through list of json values
                    for (const storedJSONValue of storedJSONValuesList) {
                        storedJSONKey = storedJSONValue[0];

                        //FIND value that contains string "_MAINPROFILE"
                        if (storedJSONKey.toUpperCase().includes("_MAINPROFILE")) {
                            //KEEP track of FULL keyname.
                            this._storedJSONKeyPlaceHolderName.push(storedJSONKey);

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
                if (storedProcessRequestDeveloperMode) {
                    this.ClientOrServerInstance["storedProcessRequestStepNumber"] = this.ClientOrServerInstance["storedProcessRequestStepNumber"] + 1;

                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED processing cached data");
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", this.ClientOrServerInstance["storedProcessRequestStepNumber"]);

                    Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
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

            this._storedProcessRequestSettings = this.ClientOrServerInstance["storedProcessRequestSettings"];

            //#endregion

            //#region MEMORIZE control client server

            this._storedProcessRequestTracker = this.ClientOrServerInstance;

            //#endregion

            //#region MEMORIZE developer mode

            let storedProcessRequestDeveloperMode: boolean = this._storedProcessRequestSettings.APP_SETTING_DEVELOPER_MODE;

            let storedProcessRequestDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

            //REQUIRED
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "PREPARING caching request");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterInputRequestActionName", this.ClientOrServerInstance["storedInputRequestActionName"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestSettings", this.ClientOrServerInstance["storedProcessRequestSettings"]);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestTracker", this.ClientOrServerInstance);
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestFileName", "Extension_Director_Of_Programming_Chapter_12_2_Page_3_Request_Storage_1_0.ts");
            storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestMethodName", "Step_X_X_Framework_Store_CacheDataToPersistentStorage_1_0");

            //#endregion

            //#region MEMORIZE request details

            let storedRequestName: string = this.ExtraData.KeyValuePairs.getValue("RequestToProcess");
            let storedRequestNameParameters: string = this.ExtraData.KeyValuePairs.getValue("RequestToProcessParameters");

            //#endregion

            //#region MEMORIZE search details

            let storedSearchColumnNames: any = this._storedJSONKeyPlaceHolderName;
            let storedSearchDataSet: Object = (this.StorylineDetails_Parameters ? this.StorylineDetails_Parameters : this.StorylineDetails);
            let storedSearchFilterBy: any = ['parameters'];

            //#endregion

            //#endregion

            //#region 2. PROCESS

            //#region EXECUTE data conversion

            try
            {
                //#region IDEAL CASE - USE storyline parameter data

                if (this._storedJSONKeyPlaceHolderName) {
                    let columnsToUpdate: any = this._storedJSONKeyPlaceHolderName;
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
                if (storedProcessRequestDeveloperMode) {
                    this.ClientOrServerInstance["storedProcessRequestStepNumber"] = this.ClientOrServerInstance["storedProcessRequestStepNumber"] + 1;

                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequest3WordDescription", "FAILED processing cached data");
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterOutputResponseMessageType", "Mistake"); //Values = Logging or Mistake
                    storedProcessRequestDeveloperLoggingInputs.Parameters.setValue("parameterProcessRequestStepNumberReplace", this.ClientOrServerInstance["storedProcessRequestStepNumber"]);

                    Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.BaseDI.Professional.Script.Risk_Management.Extensions_0.Extension_Director_Of_RiskManagement_Chapter_11_1_Page_0_CreateReadUpdateDeleteForAll_Handler_1_0.Step_X_X_Framework_Output_DeveloperMessage_1_0(storedProcessRequestDeveloperLoggingInputs);
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