﻿//#region Imports

//#region BaseDI

import * as aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0 from  "./0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptDirector_BuilderPattern_12_2_1_0";
import * as aClass_Programming_ScriptAction_12_2_1_0 from "./0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptAction_12_2_1_0";
import * as aClass_Programming_ScriptRoutable_12_2_1_0 from "./0. Script/Abstracts/12/Other/2/Programming/Script/1/1_0/aClass_Programming_ScriptRoutable_12_2_1_0";

import * as ExtraData_12_2_1_0 from "./0. Script/Parameters/12/Other/2/Programming/ExtraData Poco/1/1_0/ExtraData_12_2_1_0";
import * as SingleParmPoco_12_2_1_0 from "./0. Script/Parameters/12/Other/2/Programming/SingleParm Poco/1/1_0/SingleParmPoco_12_2_1_0";

import * as IContract_Programming_Repository_12_2_1_0 from "./0. Script/Interfaces/12/Other/2/Programming/Contract/1/1_0//IContract_Programming_Repository_12_2_1_0";

import * as ChapterPage_Page_1_1_Begin_Process_12_2_1_0 from "./5. Chapter/12/Other/2/Programming/Page/1/1_0/Page_1_1_Begin_Process_12_2_1_0";
import * as ChapterPage_Page_1_2_Validate_Process_12_2_1_0 from "./5. Chapter/12/Other/2/Programming/Page/1/1_0/Page_1_2_Validate_Process_12_2_1_0";
import * as ChapterPage_Page_1_3_Process_StoryAuthor_12_2_1_0 from "./5. Chapter/12/Other/2/Programming/Page/1/1_0/Page_1_3_Process_StoryAuthor_12_2_1_0";
import * as ChapterPage_Page_1_4_Process_StoryCharacters_12_2_1_0 from "./5. Chapter/12/Other/2/Programming/Page/1/1_0/Page_1_4_Process_StoryCharacters_12_2_1_0";
import * as ChapterPage_Page_1_5_Process_StorySetting_12_2_1_0 from "./5. Chapter/12/Other/2/Programming/Page/1/1_0/Page_1_5_Process_StorySetting_12_2_1_0";
import * as ChapterPage_Page_1_6_Process_StoryExperiences_12_2_1_0 from "./5. Chapter/12/Other/2/Programming/Page/1/1_0/Page_1_6_Process_StoryExperiences_12_2_1_0";
import * as ChapterPage_Page_1_7_Process_StoryResources_12_2_1_0 from "./5. Chapter/12/Other/2/Programming/Page/1/1_0/Page_1_7_Process_StoryResources_12_2_1_0";
import * as ChapterPage_Page_1_8_Process_CRUD_12_2_1_0 from "./5. Chapter/12/Other/2/Programming/Page/1/1_0/Page_1_8_Process_CRUD_12_2_1_0";
import * as ChapterPage_Page_1_9_Verify_Process_12_2_1_0 from "./5. Chapter/12/Other/2/Programming/Page/1/1_0/Page_1_9_Verify_Process_12_2_1_0";
import * as ChapterPage_Page_1_10_End_Process_12_2_1_0 from "./5. Chapter/12/Other/2/Programming/Page/1/1_0/Page_1_10_End_Process_12_2_1_0";

//#endregion

//#endregion

export class ClassModel
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

    private _stored_DirectorRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0;

    private _storedRequestName: string = "";
    private _storedSystemRequestByName: string;

    //#endregion

    //#region 2. Ready

    constructor()
    {
        //#region 1. INPUTS

        //#region MEMORIZE clientOrServer instance

        //this._storedClientOrServerInstance = parameterClientORserverInstance;

        //#endregion

        //#region MEMORIZE centralized processes

        //this._stored_CentralizedDisturber = parameterCentralizedDisturber;
        //this._stored_CentralizedSensor = parameterCentralizedSensor;
        //this._stored_CentralizedStorer = parameterCentralizedStorer;

        //#endregion

        //#region MEMORIZE data stragety

        //this._stored_Repository = parameterRepository;

        //#endregion

        //#region MEMORIZE director request handler

        //_stored_DirectorRequestHandler = parameter_DirectorRequestHandler;

        //#endregion

        //#region MEMORIZE extra data

        //this._storedExtraData = parameterExtraData;

        //#endregion

        //#region MEMORIZE storyline details

        //this._storedStorylineDetails = parameterStorylineDetails;
        //this._storedStorylineDetails_Parameters = parameterStorylineDetails_Parameters;

        //#endregion

        //#endregion

        //#region 2. PROCESS

        //#endregion

        //#region 3. OUTPUT

        //#endregion
    }

    //#endregion

    //#region 3. Set

    //A. Default state
    private HandleDefaults(): void {
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

    //A. Story in motion (DO SOMETHING)
    public async Action(): Promise<object>
    {
        //#region 1. INPUTS

        //#region DEFINE client response

        //let storedHttpResult: any = null;

        //#endregion

        //#region DEFINE data response

        //let storedDataResponse: any = null;

        //#endregion

        //#region DEFINE developer mode

        let storedOPTIONALAccountingCostType: string = "";

         //#endregion

        //#region DEFINE error response

        //let storedErrorResponse: any = null;

        //#endregion

        //#region DEFINE event handlers

        //let Action = (response: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0): any => { };

        //#endregion

        //#region DEFINE exception handler

        let stored_ExceptionDetails: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

        //#endregion

        //#region DEFINE parameter inputs

        //let storedParameterInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = null;

        //#endregion

        //#region DEFINE process checkpoint

        let storedProcessCheckPointHit: boolean = false;

         //#endregion

        //#region DEFINE request handler

        //let stored_ReferenceTo_RequestHandler: any = null;

        //#endregion

        //#region DEFINE stored message

        let storedMessage: string = "";

        //#endregion

        //#region DEFINE storyline details

        //let storedStorylineDetails:Object = null;
        //let storedStorylineDetails_Parameters:Object = null;

        //#endregion

        //#region MEMORIZE action name

        //let storedActionName: string = parameterClientORserverInstance["actionName"] as string;

        //#endregion

        //#region MEMORIZE app settings

        //this._storedAppSettings = parameterClientORserverInstance["appSettings"];

        //#endregion

        //#region MEMORIZE extra data

        //if (parameterExtraData != null)
        //    this._storedExtraData = parameterExtraData;

        //stored_CentralizedStorer.ExtraData.KeyValuePairs.setValue("parametersInputs", parameterInputs);
        //stored_CentralizedStorer.ExtraData.KeyValuePairs.setValue("storedDeveloperLoggingInputs", storedDeveloperLoggingInputs);


        //#endregion

        //#region MEMORIZE developer mode

        let storedDeveloperMode: boolean = this._storedAppSettings.APP_SETTING_DEVELOPER_MODE;

        //if (parameterClientOrServerInstance["processStepNumber"] == null)
        //    parameterClientOrServerInstance["processStepNumber"] = 0;

        //let storedDeveloperLoggingInputs: SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0 = new SingleParmPoco_12_2_1_0.BaseDI.Professional.Script.Programming.Poco_1.SingleParmPoco_12_2_1_0;

        //REQUIRED
        //storedDeveloperLoggingInputs.Parameters.setValue("parameter3WordDescription", "RETRIEVING cached dataset");
        //storedDeveloperLoggingInputs.Parameters.setValue("parameterActionName", this.ClientOrServerInstance["actionName"]);
        //storedDeveloperLoggingInputs.Parameters.setValue("parameterAppSettings", this.ClientOrServerInstance["appSettings"]);
        //storedDeveloperLoggingInputs.Parameters.setValue("parameterClientOrServerInstance", this.ClientOrServerInstance);
        //storedDeveloperLoggingInputs.Parameters.setValue("parameterFileName", "ProgrammingStudioAdministrator_MasterLeader_12_2_1_0.ts");
        //storedDeveloperLoggingInputs.Parameters.setValue("parameterMethodName", "SetupStoryline");

        //storedDeveloperLoggingInputs.Parameters.setValue("parameterMessageType", "Logging"); //Values = Logging or Mistake
        //storedDeveloperLoggingInputs.Parameters.setValue("parameterStepNumberReplace", this.ClientOrServerInstance["processStepNumber"]);
        

        //OPTIONAL
        //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALAccountingCostType", "Storage"); //Values = Bandwidth, CPU, Memory, Setup, Storage, Uptime
        //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALBeginOfProcess", true);
        //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALMiddleOfProcess", true);
        //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALEndOfProcess", true);
        //storedDeveloperLoggingInputs.Parameters.setValue("parameterOPTIONALRunSilentMode", true);

        //#endregion

        //#region MEMORIZE request details

        //let storedRequestName: string = this.ExtraData.KeyValuePairs.getValue("RequestToProcess");
        //let storedRequestNameParameters: string = this.ExtraData.KeyValuePairs.getValue("RequestToProcessParameters");

        //#endregion

        //#region MEMORIZE request resolver

        let stored_DirectorOrExperienceRequestHandler: aClass_Programming_ScriptRoutable_12_2_1_0.BaseDI.Professional.Programming.Abstract_1.aClass_Programming_ScriptRoutable_12_2_1_0 = null;
        //let stored_ResolvedRequestHandler = new Use_DesignPattern_Builder_Chapter_12_2_1_0(parameterClientORserverInstance, parameterStorylineDetails, parameterStorylineDetails_Parameters, _storedClientRequestByObject, _storedExtraData, parameterSystemRequestByName, parameterClientRequestByName, parameterClientRequestByNameParameters);

        //#endregion

        //#region MEMORIZE server details

        //let storedServerDetails:Object = null;

        //#endregion

        //#region MEMORIZE storyline details

        //let storedStorylineDetails: any = parameterInputs.Parameters.getValue("parameterStorylineDetails");
            //storedStorylineDetails_Parameters = parameterStorylineDetails_Parameters;

        //#endregion

        //#endregion

        //#region 2. PROCESS

        //#region EXECUTE xxx xxx

        //#region EDGE CASE - USE developer logger

        if (storedDeveloperMode)
        {
            this._storedClientOrServerInstance["processStepNumber"] = this._storedClientOrServerInstance["processStepNumber"] + 1;

            console.log("STEP " + this._storedClientOrServerInstance["processStepNumber"] + " Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0.cs -> Implement_DesignPattern_Builder_Chapter_12_2_Page_1_1_0 -> Action_10_End_Process - [END process execution]");
        }

        //#endregion

        //#region EDGE CASE - USE developer logger

        if (storedDeveloperMode) {
            this._storedClientOrServerInstance["processStepNumber"] = this._storedClientOrServerInstance["processStepNumber"] + 1;

            console.log("STEP " + this._storedClientOrServerInstance["processStepNumber"] + ": ***LEAKY PIPE*** FAILED ASSIGNING request handler for REQUEST NAME Director_Of_Programming_Chapter_12_2_Page_1_Request_Controller_1_0. PLEASE CHECK CASE STATEMENT IN FILE ***ProgrammingFactoryImplementer_NicheMaster_12_2_1_0.ts -> Method: Action]");
        }

        //#endregion

        //#region EDGE CASE - USE exception handler

        //throw mistake;

        //#endregion

        //#region IDEAL CASE - USE xxx xxx


        //#endregion

        //#endregion

        //#endregion

        //#region 3. OUTPUT

        //#region RETURN xxx xxxx

        //#region IDEAL CASE - USE xxx xxx

        return null; // await Task.FromResult<JObject>(StorylineDetails).ConfigureAwait(true);

        //#endregion

        //#endregion

        //#endregion
    }

    //#endregion
}





//BLANK DEFAULT REEGIONS

//#region 1. INPUTS

//#endregion

//#region 2. PROCESS

//#endregion

//#region 3. OUTPUT

//#endregion